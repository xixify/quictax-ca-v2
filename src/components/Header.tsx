import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner Ticker */}
      <div className="bg-[#070D1E] text-slate-300 py-2 text-xs border-b border-slate-800/80">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="pulse-green"></span> Tax Specialists Online Now
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Avg Response: &lt; 15 mins
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> CRA NETFILE Certified
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Mississauga, ON (Canada-Wide Remote)
            </span>
            <a 
              href="tel:+12895275237" 
              className="flex items-center gap-1 text-slate-200 hover:text-cyan-400 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" /> (289) 527-5237
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#0A1128]/95 backdrop-blur-md shadow-xl border-b border-slate-800/60 py-3' : 'bg-[#0A1128] py-4'}`}>
        <div className="container-custom flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2.5 text-left group border-none bg-transparent cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-emerald-400 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0A1128] rounded-[10px] flex items-center justify-center">
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-heading">
                  Q
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black tracking-tight text-white font-heading">
                  Quic<span className="text-cyan-400">Tax</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">.ca</span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wide font-medium">Human Canadian Tax Filing</p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
            {[
              { id: 'services', label: 'Services' },
              { id: 'calculator', label: 'Tax Estimator' },
              { id: 'cra-hub', label: 'CRA Hub' },
              { id: 'tax-articles', label: 'Tax Articles' },
              { id: 'about', label: 'About' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border-none ${
                  activeTab === link.id
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+12895275237"
              className="px-3.5 py-2 rounded-full text-xs font-bold text-slate-200 border border-slate-700 hover:bg-slate-800 transition-all flex items-center gap-1.5 text-decoration-none"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Us</span>
            </a>

            <a
              href="https://wa.me/12895275237?text=Hi%20QuicTax%20team,%20I%20want%20to%20file%20my%20Canadian%20taxes.%20Can%20you%20help%20me%20get%20started?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-whatsapp text-xs shadow-emerald-500/20 py-2.5 px-4"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1128] border-b border-slate-800 px-4 py-5 space-y-3 animate-fade-in shadow-2xl">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { id: 'services', label: 'Our Services' },
              { id: 'calculator', label: 'Tax Estimator' },
              { id: 'cra-hub', label: 'CRA Hub' },
              { id: 'tax-articles', label: 'Tax Articles' },
              { id: 'about', label: 'About QuicTax' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contact', label: 'Contact Us' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-3 px-4 rounded-xl text-xs font-bold text-left transition-all border-none ${
                  activeTab === link.id
                    ? 'bg-sky-500 text-white'
                    : 'bg-slate-900/80 text-slate-200 hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 space-y-2">
            <a
              href="https://wa.me/12895275237?text=Hi%20QuicTax%20team,%20I%20want%20to%20file%20my%20Canadian%20taxes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-whatsapp w-full text-center py-3 text-sm justify-center"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Start on WhatsApp — Fast Quote</span>
            </a>

            <a
              href="tel:+12895275237"
              className="w-full py-3 rounded-full text-xs font-bold text-slate-200 bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 text-decoration-none"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Hotline: (289) 527-5237</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
