import React, { useState, useEffect, useMemo } from 'react';
import { LandingPage } from '../types';
import { generateDynamicReview } from '../data/seoTemplates';
import { RefreshCw, Check } from 'lucide-react';

interface CustomerLandingPageProps {
  page: LandingPage;
}

export const CustomerLandingPage: React.FC<CustomerLandingPageProps> = ({ page }) => {
  const [copied, setCopied] = useState(false);

  // Determine available languages for this landing page
  const availableLanguages: ('en' | 'hi' | 'hinglish')[] = useMemo(() => {
    if (Array.isArray(page.languages) && page.languages.length > 0) {
      return page.languages;
    }
    if (page.reviewsByLang) {
      const langs: ('en' | 'hi' | 'hinglish')[] = [];
      if (page.reviewsByLang.en && page.reviewsByLang.en.length > 0) langs.push('en');
      if (page.reviewsByLang.hi && page.reviewsByLang.hi.length > 0) langs.push('hi');
      if (page.reviewsByLang.hinglish && page.reviewsByLang.hinglish.length > 0) langs.push('hinglish');
      if (langs.length > 0) return langs;
    }
    return ['en'];
  }, [page.languages, page.reviewsByLang]);

  const [activeLang, setActiveLang] = useState<'en' | 'hi' | 'hinglish'>(
    availableLanguages[0] || 'en'
  );

  const getReviewForLanguage = (lang: 'en' | 'hi' | 'hinglish', excludeText?: string): string => {
    const pool = page.reviewsByLang?.[lang];
    if (Array.isArray(pool) && pool.length > 0) {
      const candidates = pool.filter(r => r !== excludeText);
      const chosenList = candidates.length > 0 ? candidates : pool;
      return chosenList[Math.floor(Math.random() * chosenList.length)];
    }
    if (Array.isArray(page.reviews) && page.reviews.length > 0) {
      const candidates = page.reviews.filter(r => r !== excludeText);
      const chosenList = candidates.length > 0 ? candidates : page.reviews;
      return chosenList[Math.floor(Math.random() * chosenList.length)];
    }
    return generateDynamicReview(
      page.businessName,
      page.category,
      page.subcategory,
      page.city,
      page.nearbyAreas,
      lang
    );
  };

  const [reviewText, setReviewText] = useState<string>(() =>
    getReviewForLanguage(availableLanguages[0] || 'en')
  );

  // When user switches language tab, immediately update review
  const handleLanguageChange = (lang: 'en' | 'hi' | 'hinglish') => {
    setActiveLang(lang);
    setReviewText(getReviewForLanguage(lang));
  };

  // Shuffle / Change Review in current active language
  const handleShuffleReview = () => {
    setReviewText(prev => getReviewForLanguage(activeLang, prev));
  };

  const handleCopyAndReview = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(reviewText);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = reviewText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
    } catch {
      // Ignore copy error
    }

    setCopied(true);

    setTimeout(() => {
      if (page.gmbReviewUrl) {
        window.location.href = page.gmbReviewUrl;
      }
    }, 280);
  };

  const langLabels: Record<'en' | 'hi' | 'hinglish', { label: string; flag: string; shuffleText: string; ctaText: string; copiedText: string }> = {
    en: {
      label: 'English',
      flag: '🇬🇧',
      shuffleText: 'Change Review',
      ctaText: 'Copy & Review',
      copiedText: 'Review Copied! Redirecting...'
    },
    hi: {
      label: 'हिन्दी',
      flag: '🇮🇳',
      shuffleText: 'दूसरा रिव्यू देखें',
      ctaText: 'रिव्यू कॉपी करें और लिखें',
      copiedText: 'रिव्यू कॉपी हो गया! Redirecting...'
    },
    hinglish: {
      label: 'Hinglish',
      flag: '💬',
      shuffleText: 'Dusra Review Dekhein',
      ctaText: 'Copy Review & Rate',
      copiedText: 'Review Copied! Redirecting...'
    }
  };

  const currentLangConfig = langLabels[activeLang] || langLabels.en;

  return (
    <div className="min-h-[100dvh] w-full bg-[#F2F2F7] flex flex-col items-center justify-center px-4 py-6 select-none safe-top safe-bottom">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Business Name */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#000000] mb-1 text-center break-words w-full">
          {page.businessName}
        </h1>

        {/* Subcategory / Specialization Badge */}
        {page.subcategory && page.subcategory !== 'All / General' && (
          <div className="mb-2 text-xs font-semibold px-3 py-1 rounded-full bg-[#E5E5EA] text-[#3A3A3C]">
            {page.subcategory}
          </div>
        )}

        {/* 5 Stars */}
        <div className="text-xl sm:text-2xl text-[#FFB800] tracking-widest mb-4">
          ★★★★★
        </div>

        {/* Multi-language Selector Tabs (if more than 1 language) */}
        {availableLanguages.length > 1 && (
          <div className="w-full bg-[#E5E5EA] p-1 rounded-2xl flex items-center justify-between mb-4">
            {availableLanguages.map(lang => {
              const isActive = activeLang === lang;
              const conf = langLabels[lang];
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => handleLanguageChange(lang)}
                  className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 active:scale-95 ${
                    isActive
                      ? 'bg-[#FFFFFF] text-[#000000] shadow-sm'
                      : 'text-[#8E8E93] hover:text-[#000000]'
                  }`}
                >
                  <span className="text-sm">{conf.flag}</span>
                  <span>{conf.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Prewritten Review Card */}
        <div className="w-full bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 mb-3 text-[#000000] text-sm sm:text-base leading-relaxed text-left shadow-sm border border-[#E5E5EA]/60">
          "{reviewText}"
        </div>

        {/* Change / Shuffle Review Button */}
        <div className="w-full flex justify-end mb-4">
          <button
            type="button"
            onClick={handleShuffleReview}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#007AFF] hover:text-[#0051A8] active:scale-95 px-2 py-1 transition-transform"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{currentLangConfig.shuffleText}</span>
          </button>
        </div>

        {/* Fast Mobile Touch CTA */}
        <button
          onClick={handleCopyAndReview}
          className={`w-full min-h-[54px] rounded-full font-bold text-sm sm:text-base active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm ${
            copied
              ? 'bg-[#25D366] text-[#FFFFFF]'
              : 'bg-[#000000] text-[#FFFFFF] active:bg-[#222222]'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              <span>{currentLangConfig.copiedText}</span>
            </>
          ) : (
            <span>{currentLangConfig.ctaText}</span>
          )}
        </button>

        <p className="mt-3 text-[11px] text-[#8E8E93] text-center">
          Tap button to copy your review and open Google Maps review form
        </p>
      </div>
    </div>
  );
};

