import React from 'react';
import { Phone, MessageSquare, MapPin, ShieldCheck, Award, Lock, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNavClick = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#071120] text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs">
      <div className="container-custom">
        
        {/* Main 5-Column Grid (Matching MyTAXPrepOffice) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center font-black text-white text-base font-heading">
                Q
              </div>
              <span className="text-xl font-black text-white font-heading">
                Quic<span className="text-sky-400">Tax</span><span className="text-amber-400 text-xs">.ca</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-[11px]">
              Cloud-based professional tax software & filing platform for Canadian taxpayers, accountants, freelancers, and corporations. Unlimited returns, all provinces, CRA direct e-filing.
            </p>

            <div className="space-y-1.5 text-slate-300 font-semibold">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Mississauga, ON (Serving Canada Wide)</span>
              </div>
              <a href="tel:+12895275237" className="flex items-center gap-1.5 text-sky-400 font-bold hover:underline">
                <Phone className="w-3.5 h-3.5" /> (289) 527-5237
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2 py-1 rounded text-[10px] font-bold">
                <ShieldCheck className="w-3 h-3" /> CRA NETFILE Certified
              </span>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs font-heading border-b border-slate-800 pb-2">
              Products
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => handleNavClick('pricing')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Individual PRO Plan ($149/yr)</button></li>
              <li><button onClick={() => handleNavClick('pricing')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Essential SMB Plan ($299/yr)</button></li>
              <li><button onClick={() => handleNavClick('pricing')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Unlimited Firm Plan ($599/yr)</button></li>
              <li><button onClick={() => handleNavClick('comparison')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Feature Comparison</button></li>
              <li><button onClick={() => handleNavClick('pricing')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Tax Pro Service Bureau</button></li>
            </ul>
          </div>

          {/* Column 3: Features */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs font-heading border-b border-slate-800 pb-2">
              Features
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => handleNavClick('features')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">My AI Tax Assistant</button></li>
              <li><button onClick={() => handleNavClick('features')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">CRA NETFILE Direct Sync</button></li>
              <li><button onClick={() => handleNavClick('features')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">MyTAXPortal (Client Locker)</button></li>
              <li><button onClick={() => handleNavClick('features')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Refund Transfer Fast Forward</button></li>
              <li><button onClick={() => handleNavClick('features')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Easy Switch & Free Conversion</button></li>
              <li><button onClick={() => handleNavClick('features')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Guided Interview Mode</button></li>
            </ul>
          </div>

          {/* Column 4: Support & Training */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs font-heading border-b border-slate-800 pb-2">
              Support & CRA Hub
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Contact Support</button></li>
              <li><button onClick={() => handleNavClick('cra-hub')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">CRA Resource Hub</button></li>
              <li><button onClick={() => handleNavClick('tax-articles')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Canadian Tax Articles</button></li>
              <li><button onClick={() => handleNavClick('faq')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Frequently Asked Questions</button></li>
              <li><button onClick={() => handleNavClick('calculator')} className="hover:text-white transition-colors border-none bg-transparent cursor-pointer">Interactive Savings Calculator</button></li>
            </ul>
          </div>

          {/* Column 5: Policies & Accreditations */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs font-heading border-b border-slate-800 pb-2">
              Policies & Legal
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#privacy" className="hover:text-white transition-colors text-decoration-none">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors text-decoration-none">Terms and Conditions of Use</a></li>
              <li><a href="#refund-policy" className="hover:text-white transition-colors text-decoration-none">Refund Policy</a></li>
              <li><a href="#ai-policy" className="hover:text-white transition-colors text-decoration-none">My AI Assistant Policy</a></li>
              <li><a href="#disclaimer" className="hover:text-white transition-colors text-decoration-none">Social Media Disclaimer</a></li>
            </ul>
          </div>

        </div>

        {/* Partner Logos Bar & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            <p>© 2026 Advanced Canadian Tax Solutions, Inc. Creators of QuicTax.ca. All Rights Reserved.</p>
            <p className="text-slate-600 mt-0.5">CRA NETFILE & EFILE Certified Software • Mississauga, Ontario, Canada</p>
          </div>

          <div className="flex items-center gap-4 text-slate-400 font-bold">
            <span className="flex items-center gap-1 text-amber-400">
              <Award className="w-3.5 h-3.5" /> CPA Practice Advisor #2
            </span>
            <span>|</span>
            <span className="flex items-center gap-1 text-sky-400">
              <Lock className="w-3.5 h-3.5" /> 256-Bit SSL Security
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
