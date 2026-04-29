import React from 'react';

export const ContactButton: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <button
      className={`
        rounded-full uppercase tracking-widest font-medium text-white
        px-12 py-4
        text-xs sm:text-sm md:text-base
        transition-all duration-300 active:scale-95
        relative overflow-hidden
        ${className}
      `}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
    >
      Contact Me
    </button>
  );
};

export const LiveProjectButton: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <button
      className={`
        rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-[0.1em]
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        hover:bg-[#D7E2EA]/10 transition-all duration-200
        ${className}
      `}
    >
      Live Project
    </button>
  );
};
