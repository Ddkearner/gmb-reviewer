import React, { useState } from 'react';
import { LandingPage } from '../types';

interface CustomerLandingPageProps {
  page: LandingPage;
}

export const CustomerLandingPage: React.FC<CustomerLandingPageProps> = ({ page }) => {
  const [copied, setCopied] = useState(false);

  const reviewText = page.reviews?.[0] || 'Outstanding service and very polite staff! Highly recommend this place.';

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
    }, 250);
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#F2F2F7] flex flex-col items-center justify-center px-5 py-6 select-none safe-top safe-bottom">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Business Name */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#000000] mb-1.5 text-center break-words w-full">
          {page.businessName}
        </h1>

        {/* 5 Stars */}
        <div className="text-lg sm:text-xl text-[#FFB800] tracking-widest mb-5">
          ★★★★★
        </div>

        {/* Prewritten Review */}
        <div className="w-full bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 mb-6 text-[#000000] text-sm sm:text-base leading-relaxed text-left">
          "{reviewText}"
        </div>

        {/* Fast Mobile Touch CTA */}
        <button
          onClick={handleCopyAndReview}
          className={`w-full min-h-[54px] rounded-full font-bold text-sm sm:text-base active:scale-[0.98] transition-all flex items-center justify-center ${
            copied
              ? 'bg-[#25D366] text-[#FFFFFF]'
              : 'bg-[#000000] text-[#FFFFFF] active:bg-[#222222]'
          }`}
        >
          {copied ? 'Review Copied! Redirecting...' : 'Copy & Review'}
        </button>
      </div>
    </div>
  );
};
