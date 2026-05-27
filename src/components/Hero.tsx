import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="px-4 md:px-8 max-w-[1440px] mx-auto pt-8 md:pt-12 pb-16 md:pb-24 flex flex-col lg:flex-row items-start gap-10 md:gap-12 min-h-[780px] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <div className="w-full lg:w-[52%] space-y-8 animate-fade-in-up z-10 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl">
          Software development agency
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-[82px] font-extrabold leading-[0.92] tracking-[-0.04em] max-w-4xl">
          Custom software
          <span className="block gradient-text">for SaaS, web apps, and internal tools.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/68 max-w-2xl leading-relaxed font-medium">
          We design and ship custom web apps, SaaS products, product dashboards, and internal tools with clear structure, clean interfaces, and dependable engineering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[linear-gradient(180deg,#ffbe68_0%,#ff8a1f_100%)] text-[#131316] px-8 py-4 rounded-full text-sm uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-[0_16px_28px_rgba(255,138,31,0.35),inset_0_1px_0_rgba(255,255,255,0.25)] hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(255,138,31,0.48)] active:translate-y-[1px]">
            Start a project
          </button>
          <button className="border border-white/12 bg-white/[0.03] text-white px-8 py-4 rounded-full text-sm uppercase tracking-[0.22em] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/8 hover:border-wizard-green/35">
            View work
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl pt-4">
          {[
            ['10+ years', 'shipping products'],
            ['24/7', 'availability for critical builds'],
            ['End-to-end', 'strategy to deployment'],
          ].map(([value, label]) => (
            <div key={value} className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <div className="text-2xl md:text-3xl font-semibold text-white">{value}</div>
              <div className="mt-2 text-sm text-white/58">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[48%] flex justify-center lg:justify-end relative mt-4 lg:mt-0">
        <div className="w-full max-w-[640px] rounded-[36px] border border-white/10 bg-[#11131A]/88 p-4 md:p-5 shadow-neobrutal backdrop-blur-2xl">
          <div className="rounded-[28px] border border-white/10 bg-[#0D1016] p-5 md:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/45">Live product view</div>
                <div className="mt-2 text-xl md:text-2xl font-semibold">Clarity from day one</div>
              </div>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                <span className="h-3 w-3 rounded-full bg-wizard-green" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[24px] border border-white/10 bg-[#0B1020] p-5">
                <div className="flex items-center justify-between text-sm text-white/50">
                  <span>Architecture</span>
                  <span>Synced</span>
                </div>
                <div className="mt-4 space-y-3">
                  {['Repo map', 'Documentation layers', 'Dependency graph', 'Release notes'].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                      <span className="text-sm text-white/80">{item}</span>
                          <span className="text-xs uppercase tracking-[0.2em] gradient-text">Ready</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/45">Delivery</div>
                  <div className="mt-3 text-3xl font-semibold">98%</div>
                  <p className="mt-2 text-sm text-white/60">Feature completeness across core modules.</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/45">Status</div>
                  <div className="mt-3 inline-flex rounded-full bg-wizard-green px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-wizard-dark">
                    Ship ready
                  </div>
                  <p className="mt-3 text-sm text-white/60">Every handoff is documented and easy to maintain.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
