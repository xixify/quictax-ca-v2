import React from 'react';
import { Phone, MessageSquare, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070D1E] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5">
                <div className="w-full h-full bg-[#070D1E] rounded-[10px] flex items-center justify-center">
                  <span className="text-lg font-black text-cyan-400 font-heading">Q</span>
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-heading">
                Quic<span className="text-cyan-400">Tax</span>.ca
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              QuicTax is a human-assisted Canadian tax preparation service. We prepare and file personal (T1), freelancer, small business, and corporate (T2) returns online — fast, accurate, and affordable.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Mississauga, ON — Serving GTA & All of Canada Online</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CRA Authorized EFILE & NETFILE Tax Specialists</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'calculator', label: 'Tax Estimator' },
                { id: 'cra-hub', label: 'CRA Resource' },
                { id: 'tax-articles', label: 'Tax Articles' },
                { id: 'about', label: 'About Us' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-slate-400 hover:text-cyan-400 transition-colors bg-transparent border-none cursor-pointer py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Get In Touch CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Get In Touch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ready to file smarter? Reach out on WhatsApp and we'll get started right away.
            </p>

            <div className="pt-2 space-y-2">
              <a
                href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20file%20my%20taxes."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp text-xs py-2.5 px-4 w-full justify-center shadow-none"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+12895275237"
                className="text-xs text-slate-300 hover:text-cyan-400 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-decoration-none"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>(289) 527-5237</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 QuicTax. All rights reserved. <span className="text-slate-400 italic">Fast filing. Zero stress.</span></p>
          <p className="text-[11px] text-slate-600">
            QuicTax is an independent Canadian tax preparation service. Registered in Ontario, Canada.
          </p>
        </div>

      </div>
    </footer>
  );
};
