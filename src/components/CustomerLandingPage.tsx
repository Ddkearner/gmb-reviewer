import React, { useState } from 'react';
import { LandingPage } from '../types';
import { Check } from 'lucide-react';

interface CustomerLandingPageProps {
  page: LandingPage;
}

export const CustomerLandingPage: React.FC<CustomerLandingPageProps> = ({ page }) => {
  const [copied, setCopied] = useState(false);

  // Pick a single clean review randomly from the pre-generated pool for this visitor
  const [reviewText] = useState<string>(() => {
    if (Array.isArray(page.reviews) && page.reviews.length > 0) {
      const randomIndex = Math.floor(Math.random() * page.reviews.length);
      return page.reviews[randomIndex];
    }
    return 'Outstanding service and very polite staff! Highly recommend this place.';
  });

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

  return (
    <div className="min-h-[100dvh] w-full bg-[#F2F2F7] flex flex-col items-center justify-center px-4 py-8 select-none safe-top safe-bottom">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Business Name */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#000000] mb-2 text-center break-words w-full">
          {page.businessName}
        </h1>

        {/* 5 Stars */}
        <div className="text-xl sm:text-2xl text-[#FFB800] tracking-widest mb-6">
          ★★★★★
        </div>

        {/* Prewritten Review Card - Clean & Simple */}
        <div className="w-full bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 mb-6 text-[#000000] text-sm sm:text-base leading-relaxed text-left shadow-sm border border-[#E5E5EA]/60">
          "{reviewText}"
        </div>

        {/* Fast Mobile Touch CTA */}
        <button
          onClick={handleCopyAndReview}
          className={`w-full min-h-[54px] rounded-full font-bold text-base active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm ${
            copied
              ? 'bg-[#25D366] text-[#FFFFFF]'
              : 'bg-[#000000] text-[#FFFFFF] active:bg-[#222222]'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              <span>Review Copied! Redirecting...</span>
            </>
          ) : (
            <span>Copy & Review</span>
          )}
        </button>

        <p className="mt-4 text-[11px] text-[#8E8E93] text-center">
          Tap button to copy your review and open Google Maps
        </p>
      </div>
    </div>
  );
};


