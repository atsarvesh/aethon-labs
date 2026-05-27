import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-14 text-center lg:text-left">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] gradient-text opacity-90 shadow-[0_10px_24px_rgba(255,138,31,0.12)]">
          {title}
        </div>
        <h2 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] text-white leading-[1.05]">
          {description}
        </h2>
      </div>
    </div>
  );
};
