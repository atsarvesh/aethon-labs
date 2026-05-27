import React from 'react';
import Logo from './Logo';

export const ProposalBanner: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 transform transition-all hover:scale-[1.01] duration-500">
      <div className="rounded-[36px] flex flex-col lg:flex-row items-stretch relative overflow-hidden border border-white/10 bg-[#11131A]/88 shadow-neobrutal backdrop-blur-xl">
        <div className="absolute top-[-25%] right-[-8%] w-[420px] h-[420px] bg-wizard-green/14 blur-[90px] rounded-full pointer-events-none"></div>

        <div className="w-full lg:w-[58%] p-10 md:p-16 lg:p-20 z-10 flex flex-col justify-center gap-6 md:gap-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/55 w-fit backdrop-blur-xl">
            Engage
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold text-white leading-tight tracking-[-0.04em] max-w-2xl">
            Build your next software product with a clear plan
          </h3>
          <p className="text-lg md:text-xl text-white/68 font-medium leading-relaxed max-w-xl">
            Tell us about your SaaS product, web app, or internal tool — we’ll help you shape a practical plan and deliver high-quality software that scales.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <button className="bg-[linear-gradient(180deg,#ffbe68_0%,#ff8a1f_100%)] text-[#131316] px-8 py-4 rounded-full text-sm uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-[0_16px_28px_rgba(255,138,31,0.35),inset_0_1px_0_rgba(255,255,255,0.25)] hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(255,138,31,0.48)]">
                Request a proposal
            </button>
            <button className="border border-white/12 bg-white/[0.03] text-white px-8 py-4 rounded-full text-sm uppercase tracking-[0.22em] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/8 hover:border-wizard-green/35">
                Book a call
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[42%] flex justify-center items-center relative min-h-[320px] lg:min-h-auto p-10 bg-gradient-to-l from-white/5 to-transparent">
            <div className="w-full flex items-center justify-center">
              <div className="w-[260px] h-[260px] flex items-center justify-center rounded-[36px] bg-white/3 backdrop-blur-xl p-6 shadow-neobrutal">
                <Logo size={180} />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
