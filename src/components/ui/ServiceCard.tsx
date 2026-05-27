import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  variant: 'light' | 'dark';
  titleLine1: string;
  titleLine2: string;
  illustration?: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ variant, titleLine1, titleLine2, illustration }) => {
  const isDark = variant === 'dark';
  const bodyTextColor = isDark ? 'text-white/68' : 'text-wizard-dark/72';
  
  return (
    <div 
      className={`
        border border-white/10 rounded-[32px] p-8 relative overflow-hidden flex justify-between min-h-[320px] shadow-neobrutal 
        transition-all duration-300 transform hover:-translate-y-2 hover:border-wizard-green/40
        ${isDark ? 'bg-[#11131A] text-white backdrop-blur-xl' : 'bg-[#F4EEE6] text-wizard-dark'}
      `}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,138,31,0.14),transparent_45%)]" />
      <div className="flex flex-col justify-between z-10 w-full">
        <div className="flex flex-col items-start gap-2">
          <h3 className={`text-2xl md:text-3xl font-extrabold leading-tight tracking-[-0.04em] ${isDark ? 'text-white' : 'text-[#15161D] bg-white/70'} px-3 py-1 rounded-full inline-block`}>
            {titleLine1}
          </h3>
          <h3 className={`text-2xl md:text-3xl font-extrabold leading-tight tracking-[-0.04em] ${isDark ? 'text-white/84' : 'text-[#15161D] bg-wizard-green'} px-3 py-1 rounded-full inline-block`}>
            {titleLine2}
          </h3>
          <p className={`mt-4 max-w-sm text-sm leading-relaxed ${bodyTextColor}`}>
            Build, refine, and launch with a clear delivery path and dependable implementation.
          </p>
        </div>

        <a href="#" className="flex items-center gap-3 group">
          <div className={`
            w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45
            ${isDark ? 'bg-wizard-green' : 'bg-[#15161D]'}
          `}>
             <ArrowUpRight size={24} className={isDark ? 'text-[#15161D]' : 'text-[#FF8A1F]'} />
          </div>
          <span className={`text-sm uppercase tracking-[0.22em] hidden md:inline-block ${isDark ? 'text-white' : 'text-[#15161D] bg-white/75 px-3 py-1 rounded-full'}`}>
            Learn more
          </span>
        </a>
      </div>

      <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 w-[150px] h-[150px] flex items-center justify-center pointer-events-none opacity-90">
        {illustration}
      </div>
    </div>
  );
};
