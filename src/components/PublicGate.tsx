import React from 'react';

export const PublicGate: React.FC = () => {
  return (
    <div className="min-h-[100dvh] w-full bg-[#F2F2F7] flex flex-col items-center justify-center px-5 py-6 text-center select-none safe-top safe-bottom">
      <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#000000] mb-2 break-words max-w-xs sm:max-w-md">
        Google My Business Reviewer
      </h1>

      <p className="text-xs sm:text-sm text-[#8E8E93] mb-8">
        Developed by Deepak Yadav
      </p>

      <a
        href="https://wa.me/918132873017"
        target="_blank"
        rel="noopener noreferrer"
        className="min-h-[50px] px-8 rounded-full bg-[#000000] text-sm font-semibold text-[#FFFFFF] active:bg-[#25D366] transition-colors flex items-center justify-center active:scale-95"
      >
        Contact Us
      </a>
    </div>
  );
};
