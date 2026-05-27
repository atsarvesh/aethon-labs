import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#case-studies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`relative sticky top-3 z-50 mx-auto max-w-[1440px] overflow-visible rounded-[28px] px-4 py-4 md:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'bg-white/6 backdrop-blur-xl shadow-neobrutal' : 'bg-white/4 backdrop-blur-lg'}`}>
      <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8">
      <a href="#" className="flex items-center gap-3 group z-50 shrink-0" onClick={(e) => handleNavClick(e, '#hero')}>
        <Logo size={36} />
        <span className="text-xl md:text-2xl font-bold tracking-tight text-white whitespace-nowrap">Aethon Labs</span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center justify-center gap-10">
        {navLinks.map((link) => (
          <a 
            key={link.label} 
            href={link.href} 
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-white/72 text-sm uppercase tracking-[0.24em] relative font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:-bottom-2 after:left-0 after:bg-wizard-green after:origin-bottom-right after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            {link.label}
          </a>
        ))}
        <button className="border border-white/10 px-7 py-3.5 rounded-full text-sm uppercase tracking-[0.22em] bg-[linear-gradient(180deg,#ffbe68_0%,#ff8a1f_100%)] text-[#131316] shadow-[0_14px_28px_rgba(255,138,31,0.35),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(255,138,31,0.45)] active:translate-y-[1px]">
          Request a quote
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="lg:hidden z-50 p-2 text-white justify-self-end" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`${isOpen ? 'fixed flex' : 'hidden'} inset-0 z-40 lg:hidden items-start justify-center bg-[#07080D]/96 px-4 pt-24`}>
        <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-[#11131A] p-6 shadow-neobrutal">
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5">
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">
                Menu
              </div>
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-white text-xl font-medium tracking-[0.18em] uppercase hover:border-wizard-green/40 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff8a1f] hover:to-[#ffbe68] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
              <button className="w-full bg-[linear-gradient(180deg,#ffbe68_0%,#ff8a1f_100%)] text-[#131316] px-10 py-4 rounded-full text-sm uppercase tracking-[0.22em] border border-white/10 shadow-[0_14px_28px_rgba(255,138,31,0.35)] active:scale-95 transition-transform">
              Request a quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
