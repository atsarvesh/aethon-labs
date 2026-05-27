import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { ServiceCard } from './ui/ServiceCard';

export const Services: React.FC = () => {
  return (
    <section id="services" className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 scroll-mt-24">
      <SectionHeader 
        title="Services" 
        description="We design, build, and scale software products. Our core capabilities include SaaS development, custom web apps, UI/UX design, DevOps, and cloud operations."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <ServiceCard 
          variant="light"
          titleLine1="Product"
          titleLine2="Strategy"
          title="Product Strategy" 
        />
        <ServiceCard 
          variant="dark"
          titleLine1="Custom"
          titleLine2="Development"
          title="Custom Development" 
        />
        <ServiceCard 
          variant="dark"
          titleLine1="UI/UX"
          titleLine2="Design"
          title="Design & Prototyping" 
        />
        <ServiceCard 
          variant="light"
          titleLine1="DevOps &"
          titleLine2="Cloud"
          title="DevOps & Cloud" 
        />
      </div>
    </section>
  );
};
