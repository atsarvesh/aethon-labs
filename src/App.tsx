import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Services } from './components/Services';
import { ProposalBanner } from './components/ProposalBanner';
import { CaseStudies } from './components/CaseStudies';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07080D] font-sans text-white selection:bg-wizard-green selection:text-wizard-dark overflow-x-hidden relative">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-wizard-green/16 blur-3xl" />
        <div className="absolute top-36 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-white/6 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>
      <Header />
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <LogoTicker />
        <div id="services" className="pt-8 md:pt-12">
          <Services />
        </div>
        <ProposalBanner />
        <div id="case-studies" className="pt-8 md:pt-12">
          <CaseStudies />
        </div>
        <div id="pricing" className="pt-8 md:pt-12">
          <Pricing />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
