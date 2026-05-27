import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

export const Footer: React.FC = () => {
    return (
        <footer className="max-w-[1440px] mx-auto px-4 md:px-8 mb-8">
            <div className="rounded-[36px] border border-white/10 bg-[#11131A]/90 text-white p-8 md:p-12 shadow-neobrutal backdrop-blur-xl">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 mb-12">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9">
                            <Logo size={36} />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">Aethon Labs</span>
                    </div>

                    {/* Nav */}
                    <div className="flex flex-col md:flex-row gap-6 text-center md:text-left text-sm uppercase tracking-[0.2em] text-white/70 font-medium">
                        <a href="#hero" className="hover:text-white transition-colors">About</a>
                        <a href="#services" className="hover:underline decoration-wizard-green underline-offset-4">Services</a>
                        <a href="#case-studies" className="hover:underline decoration-wizard-green underline-offset-4">Projects</a>
                        <a href="#pricing" className="hover:underline decoration-wizard-green underline-offset-4">Pricing</a>
                        <a href="#" className="hover:underline decoration-wizard-green underline-offset-4">Blog</a>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <div className="w-9 h-9 bg-white/6 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-wizard-green hover:text-[#15161D] transition-colors cursor-pointer">
                            <Linkedin size={16} />
                        </div>
                        <div className="w-9 h-9 bg-white/6 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-wizard-green hover:text-[#15161D] transition-colors cursor-pointer">
                            <Facebook size={16} />
                        </div>
                        <div className="w-9 h-9 bg-white/6 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-wizard-green hover:text-[#15161D] transition-colors cursor-pointer">
                            <Twitter size={16} />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-6">
                    <div className="text-center lg:text-left space-y-2">
                        <h4 className="bg-wizard-green text-[#15161D] px-3 py-1 rounded-full inline-block font-bold mb-4 text-xs uppercase tracking-[0.25em]">Contact us</h4>
                        <p className="font-light">Email: hello@aethon.dev</p>
                        <p className="font-light">Phone: 77108 51625</p>
                        <p className="font-light">Address: Mumbai, Maharashtra</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-[28px] w-full lg:w-auto max-w-lg">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="email" placeholder="Email" className="bg-transparent border border-white/10 rounded-full px-5 py-3.5 text-white placeholder:text-white/50 w-full outline-none focus:border-wizard-green transition-colors" />
                            <button className="bg-[linear-gradient(180deg,#ffbe68_0%,#ff8a1f_100%)] text-[#131316] px-8 py-3.5 rounded-full font-semibold uppercase tracking-[0.2em] text-xs shadow-[0_12px_24px_rgba(255,138,31,0.32)] hover:-translate-y-0.5 transition-all whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row gap-6 text-sm text-white/55 items-center md:items-start">
                    <p>© 2026 Aethon Labs. All Rights Reserved.</p>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};
