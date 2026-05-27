import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyProps {
  text: string;
  last?: boolean;
}

const CaseStudyItem: React.FC<CaseStudyProps> = ({ text, last }) => (
    <div className={`
    flex-1 p-8 md:p-10 flex flex-col justify-between gap-6 min-h-[260px]
    ${!last ? 'border-b border-white/10 md:border-b-0 md:border-r md:border-white/10' : ''}
    group cursor-pointer hover:bg-white/[0.06] transition-colors duration-300
  `}>
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] gradient-text opacity-90 w-fit">
      Case study
    </div>
    <p className="text-white text-lg leading-relaxed font-medium max-w-lg">
      {text}
    </p>
    <div className="flex items-center gap-3 mt-4">
        <span className="gradient-text text-sm uppercase tracking-[0.22em] font-semibold group-hover:underline underline-offset-4 decoration-wizard-green">Explore</span>
        <ArrowUpRight className="text-[#FF8A1F] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
    </div>
  </div>
);

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 scroll-mt-24">
      <SectionHeader 
        title="Projects" 
        description="Selected software development case studies for SaaS, custom web apps, and cloud modernization."
      />

      <div className="rounded-[36px] flex flex-col md:flex-row overflow-hidden border border-white/10 bg-[#11131A]/86 shadow-neobrutal backdrop-blur-xl">
        <CaseStudyItem 
          text="Built an MVP analytics platform for a SaaS startup that onboarded 1,200 users within 3 months and validated key product-market fit." 
        />
        <CaseStudyItem 
          text="Delivered a scalable e-commerce backend and admin platform, handling 5x traffic during peak seasons while improving page speed and conversion." 
        />
        <CaseStudyItem 
          text="Modernized a legacy enterprise system by migrating services to the cloud, reducing infrastructure costs by 40% and improving reliability." 
          last
        />
      </div>
    </section>
  );
};
