import React, { useState } from 'react';
import { CATEGORIES } from '../data/categories';
import { LandingPage } from '../types';
import { slugify } from '../utils/storage';
import { normalizeGmbReviewUrl } from '../utils/gmb';
import { generateInitialReviewPool } from '../data/seoTemplates';

interface CreatePageModalProps {
  onClose: () => void;
  onSave: (pageData: Omit<LandingPage, 'id' | 'createdAt'>) => void;
}

export const CreatePageModal: React.FC<CreatePageModalProps> = ({
  onClose,
  onSave
}) => {
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0].name);
  const currentCategoryObj = CATEGORIES.find(c => c.name === category) || CATEGORIES[0];
  const [subcategory, setSubcategory] = useState(
    currentCategoryObj.subcategories[0]?.name || ''
  );
  const [languages, setLanguages] = useState<('en' | 'hi' | 'hinglish')[]>([
    'en',
    'hi',
    'hinglish'
  ]);
  const [city, setCity] = useState('');
  const [nearbyAreas, setNearbyAreas] = useState('');
  const [gmbReviewUrl, setGmbReviewUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCategoryChange = (newCatName: string) => {
    setCategory(newCatName);
    const catObj = CATEGORIES.find(c => c.name === newCatName);
    if (catObj && catObj.subcategories.length > 0) {
      setSubcategory(catObj.subcategories[0].name);
    } else {
      setSubcategory('');
    }
  };

  const toggleLanguage = (lang: 'en' | 'hi' | 'hinglish') => {
    setLanguages(prev => {
      if (prev.includes(lang)) {
        if (prev.length === 1) return prev; // At least one language must remain
        return prev.filter(l => l !== lang);
      } else {
        return [...prev, lang];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !gmbReviewUrl.trim()) return;

    setIsGenerating(true);
    setErrorMsg('');

    try {
      const normalizedUrl = await normalizeGmbReviewUrl(gmbReviewUrl.trim());

      // Ensure Place ID was actually resolved and not left as a raw shortlink
      if (
        normalizedUrl.includes('maps.app.goo.gl') ||
        normalizedUrl.includes('goo.gl/maps')
      ) {
        setErrorMsg('Could not find Place ID from this short link. Please verify the Google Maps link.');
        setIsGenerating(false);
        return;
      }

      const cleanNearby = nearbyAreas
        .split(',')
        .map(a => a.trim())
        .filter(Boolean);

      // Generate initial diverse multi-language pool of keyword-rich local SEO reviews
      const { flatReviews, reviewsByLang } = generateInitialReviewPool(
        businessName.trim(),
        category,
        subcategory || undefined,
        city.trim() || undefined,
        cleanNearby.length > 0 ? cleanNearby : undefined,
        30,
        languages
      );

      await onSave({
        businessName: businessName.trim(),
        category,
        subcategory: subcategory || undefined,
        languages,
        city: city.trim() || undefined,
        nearbyAreas: cleanNearby.length > 0 ? cleanNearby : undefined,
        slug: slugify(businessName),
        gmbReviewUrl: normalizedUrl,
        ratingScore: 5.0,
        totalReviewsCount: 150,
        reviews: flatReviews,
        reviewsByLang
      });
    } catch (err: any) {
      setErrorMsg(err?.message || 'Failed to extract Place ID. Please try again.');
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
      <div className="w-full max-w-sm bg-[#FFFFFF] rounded-3xl p-5 sm:p-6 text-[#000000] my-auto max-h-[92vh] overflow-y-auto">
        <h2 className="text-lg sm:text-xl font-bold tracking-tight mb-4">
          Create Landing Page
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-[#8E8E93] mb-1">
              Business Name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={e => {
                setBusinessName(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="e.g. Iron Titan Gym"
              className="w-full bg-[#F2F2F7] rounded-xl px-4 py-3 text-base text-[#000000] focus:outline-none"
              required
              autoFocus
              disabled={isGenerating}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8E8E93] mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={e => handleCategoryChange(e.target.value)}
              disabled={isGenerating}
              className="w-full bg-[#F2F2F7] rounded-xl px-4 py-3 text-base text-[#000000] focus:outline-none cursor-pointer disabled:opacity-60"
            >
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {currentCategoryObj.subcategories.length > 0 && (
            <div>
              <label className="block text-xs font-semibold text-[#8E8E93] mb-1">
                Subcategory / Specialization
              </label>
              <select
                value={subcategory}
                onChange={e => setSubcategory(e.target.value)}
                disabled={isGenerating}
                className="w-full bg-[#F2F2F7] rounded-xl px-4 py-3 text-base text-[#000000] focus:outline-none cursor-pointer disabled:opacity-60"
              >
                {currentCategoryObj.subcategories.map(sub => (
                  <option key={sub.id} value={sub.name}>
                    {sub.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-[#8E8E93]">
                Review Languages (Multi-select)
              </label>
              <span className="text-[10px] text-[#8E8E93] font-medium">
                {languages.length} selected
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'en' as const, label: 'English', flag: '🇬🇧' },
                { id: 'hi' as const, label: 'हिन्दी', flag: '🇮🇳' },
                { id: 'hinglish' as const, label: 'Hinglish', flag: '💬' }
              ].map(item => {
                const isSelected = languages.includes(item.id);
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => toggleLanguage(item.id)}
                    disabled={isGenerating}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 active:scale-95 disabled:opacity-60 ${
                      isSelected
                        ? 'bg-[#000000] text-[#FFFFFF] border-[#000000] shadow-sm'
                        : 'bg-[#F2F2F7] text-[#8E8E93] border-transparent hover:text-[#000000]'
                    }`}
                  >
                    <span className="text-sm">{item.flag}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8E8E93] mb-1">
              City / Town
            </label>
            <input
              type="text"
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="e.g. Kanpur"
              className="w-full bg-[#F2F2F7] rounded-xl px-4 py-3 text-base text-[#000000] focus:outline-none disabled:opacity-60"
              disabled={isGenerating}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8E8E93] mb-1">
              Nearby Areas / Localities <span className="text-[10px] font-normal text-[#8E8E93]">(comma separated)</span>
            </label>
            <input
              type="text"
              value={nearbyAreas}
              onChange={e => setNearbyAreas(e.target.value)}
              placeholder="e.g. Indiranagar, Kakadeo"
              className="w-full bg-[#F2F2F7] rounded-xl px-4 py-3 text-base text-[#000000] focus:outline-none disabled:opacity-60"
              disabled={isGenerating}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8E8E93] mb-1">
              Google My Business URL
            </label>
            <input
              type="url"
              value={gmbReviewUrl}
              onChange={e => {
                setGmbReviewUrl(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="https://g.page/r/.../review"
              className="w-full bg-[#F2F2F7] rounded-xl px-4 py-3 text-base text-[#000000] focus:outline-none disabled:opacity-60"
              required
              disabled={isGenerating}
            />
          </div>

          {errorMsg && (
            <p className="text-xs text-red-600 font-medium text-center">
              {errorMsg}
            </p>
          )}

          <div className="pt-2 flex gap-2.5">
            <button
              type="button"
              onClick={onClose}
              disabled={isGenerating}
              className="flex-1 min-h-[46px] rounded-full bg-[#F2F2F7] text-xs font-bold text-[#000000] active:scale-95 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isGenerating}
              className="flex-1 min-h-[46px] rounded-full bg-[#000000] text-xs font-bold text-[#FFFFFF] active:scale-95 disabled:opacity-50 flex items-center justify-center"
            >
              {isGenerating ? 'Generating...' : 'Generate'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
