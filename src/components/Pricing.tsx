import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { Check } from 'lucide-react';

const PricingCard: React.FC<{ 
    plan: string; 
    price: string; 
    features: string[]; 
    variant: 'light' | 'dark' 
}> = ({ plan, price, features, variant }) => {
    const isDark = variant === 'dark';
    
    return (
        <div className={`
            rounded-[32px] border border-white/10 p-8 flex flex-col justify-between min-h-[430px] shadow-neobrutal backdrop-blur-xl
            transition-transform hover:-translate-y-2 duration-300
            ${isDark ? 'bg-[#111A31] text-white' : 'bg-white/5 text-white'}
        `}>
            <div>
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-2xl font-extrabold tracking-[-0.03em] mb-2">{plan}</h3>
                        <p className={`text-sm ${isDark ? 'text-white/58' : 'text-[#14151A]/62'}`}>Flexible engagement model</p>
                    </div>
                    {isDark && (
                         <span className="bg-wizard-green text-[#14151A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                             Popular
                         </span>
                    )}
                </div>

                <div className="mb-8">
                     <span className="text-4xl font-extrabold tracking-[-0.04em]">{price}</span>
                     <span className={`text-sm ${isDark ? 'text-white/45' : 'text-[#14151A]/50'}`}>/month</span>
                </div>

                <ul className="space-y-4 mb-10">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                            <div className={`
                                w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
                                ${isDark ? 'bg-wizard-green text-wizard-dark' : 'bg-white text-wizard-dark'}
                            `}>
                                <Check size={14} strokeWidth={4} />
                            </div>
                            <span className={`text-base ${isDark ? 'text-white/82' : 'text-[#14151A]/78'}`}>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button className={`
                w-full py-4 rounded-full text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300 border
                ${isDark 
                    ? 'bg-white/[0.03] border-white/12 text-white hover:-translate-y-0.5 hover:bg-white/8 hover:border-wizard-green/35' 
                    : 'bg-[linear-gradient(180deg,#ffbe68_0%,#ff8a1f_100%)] text-[#131316] border-white/10 shadow-[0_14px_28px_rgba(255,138,31,0.3)] hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(255,138,31,0.42)]'}
            `}>
                Select Plan
            </button>
        </div>
    );
};

export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="max-w-[1440px] mx-auto px-4 md:px-8 mb-24 scroll-mt-24">
            <SectionHeader 
                title="Pricing" 
                description="Flexible software development pricing for MVPs, SaaS products, custom web apps, and platform engineering."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                <PricingCard 
                    variant="light"
                    plan="MVP Starter"
                    price="$5,000"
                    features={[
                        "Product discovery & roadmap",
                        "Interactive prototype",
                        "MVP implementation (web)",
                        "Basic monitoring & support",
                    ]}
                />
                <PricingCard 
                    variant="dark"
                    plan="Growth"
                    price="$20,000"
                    features={[
                        "Everything in MVP Starter",
                        "Full-stack development",
                        "Automated testing & CI/CD",
                        "Cloud deployment & scaling",
                        "Monthly performance reports",
                    ]}
                />
                 <PricingCard 
                    variant="light"
                    plan="Enterprise"
                    price="Custom"
                    features={[
                        "Dedicated engineering team",
                        "Custom SLAs & support",
                        "Architecture & security reviews",
                        "Custom integrations & data pipelines",
                    ]}
                />
            </div>
        </section>
    );
};
