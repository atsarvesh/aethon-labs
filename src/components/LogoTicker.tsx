import React from 'react';

const LogoItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-6 md:mx-10 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer flex items-center justify-center min-w-[110px] select-none">
    {children}
  </div>
);

export const LogoTicker: React.FC = () => {
  const logos = [
    'GitHub',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'Vercel',
    'Supabase',
    'Stripe',
  ];

  return (
    <div className="w-full overflow-hidden py-10 mb-16 border-y border-white/10 bg-white/[0.02] backdrop-blur-xl">
        <div className="w-full overflow-hidden py-10 mb-16 border-y border-white/10 bg-white/[0.025] backdrop-blur-xl">
          <div className="text-center mb-8">
            <p className="text-xs font-medium tracking-[0.3em] text-white/45 uppercase">Trusted by SaaS and product engineering teams</p>
          </div>
      </div>
      <div className="relative w-full">
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-r from-[#0B1020] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute left-0 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-r from-[#07080D] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-l from-[#07080D] to-transparent z-10 pointer-events-none"></div>
        {/* The marquee container translates -50% to loop seamlessly */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Loop 1: The original set */}
          <div className="flex items-center">
            {logos.map((logo) => (
              <LogoItem key={`1-${logo}`}>
                    <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.22em] text-white/70">{logo}</span>
              </LogoItem>
            ))}
          </div>
          {/* Loop 2: The duplicate set for seamless scrolling */}
          <div className="flex items-center">
             {logos.map((logo) => (
              <LogoItem key={`2-${logo}`}>
                <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.22em] text-white/70">{logo}</span>
              </LogoItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
