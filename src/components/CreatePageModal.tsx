import React, { useState } from 'react';
import { CATEGORIES } from '../data/categories';
import { LandingPage } from '../types';
import { slugify } from '../utils/storage';

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
  const [gmbReviewUrl, setGmbReviewUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !gmbReviewUrl.trim()) return;

    const matchedCat = CATEGORIES.find(c => c.name === category);
    const reviews = matchedCat ? matchedCat.defaultReviews : [
      'Outstanding service and very polite staff! Highly recommend this place.'
    ];

    onSave({
      businessName: businessName.trim(),
      category,
      slug: slugify(businessName),
      gmbReviewUrl: gmbReviewUrl.trim(),
      ratingScore: 5.0,
      totalReviewsCount: 150,
      reviews
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
      <div className="w-full max-w-sm bg-[#FFFFFF] rounded-3xl p-5 sm:p-6 text-[#000000] my-auto">
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
              onChange={e => setBusinessName(e.target.value)}
              placeholder="e.g. Iron Titan Gym"
              className="w-full bg-[#F2F2F7] rounded-xl px-4 py-3 text-base text-[#000000] focus:outline-none"
              required
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8E8E93] mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full bg-[#F2F2F7] rounded-xl px-4 py-3 text-base text-[#000000] focus:outline-none cursor-pointer"
            >
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8E8E93] mb-1">
              Google My Business URL
            </label>
            <input
              type="url"
              value={gmbReviewUrl}
              onChange={e => setGmbReviewUrl(e.target.value)}
              placeholder="https://g.page/r/.../review"
              className="w-full bg-[#F2F2F7] rounded-xl px-4 py-3 text-base text-[#000000] focus:outline-none"
              required
            />
          </div>

          <div className="pt-2 flex gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 min-h-[46px] rounded-full bg-[#F2F2F7] text-xs font-bold text-[#000000] active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 min-h-[46px] rounded-full bg-[#000000] text-xs font-bold text-[#FFFFFF] active:scale-95"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
