import React, { useState, useEffect } from 'react';
import { 
  Phone, MessageSquare, Menu, X, ChevronDown, Sparkles, 
  Layers, Calculator, Building2, HelpCircle, UserCheck, 
  ArrowRight, Play, BookOpen, ShieldCheck, Zap
} from 'lucide-react';
import { TopAnnouncementBar } from './TopAnnouncementBar';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDemo: () => void;
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeTab, 
  setActiveTab,
  onOpenDemo,
  onOpenCalculator
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const handleNavClick = (sectionId: string) => {
    setActiveTab(sectionId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <TopAnnouncementBar onOpenDemo={onOpenDemo} />

      {/* Main Navigation Header */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3' 
          : 'bg-[#0A1628] py-3.5 border-b border-slate-800/50'
      }`}>
        <div className="container-custom flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 text-left group border-none bg-transparent cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-sky-500 via-blue-600 to-amber-400 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0A1628] rounded-[6px] flex items-center justify-center">
                <span className="text-xl font-black text-sky-400 font-heading">
                  Q
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black tracking-tight text-white font-heading">
                  Quic<span className="text-sky-400">Tax</span>
                </span>
                <span className="text-[10px] font-extrabold tracking-widest text-amber-400 uppercase bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">.ca</span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wide font-medium">Canadian Cloud Tax Platform</p>
            </div>
          </button>

          {/* Desktop Navigation Links with Rich Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1">
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => handleNavClick('pricing')}
                className={`px-3.5 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1 cursor-pointer border-none ${
                  activeDropdown === 'products' ? 'text-sky-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 w-80 bg-[#0d1f38] border border-slate-700/80 rounded-lg shadow-2xl p-3 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button onClick={() => handleNavClick('pricing')} className="p-2.5 rounded-md hover:bg-slate-800/90 text-left transition-all border-none bg-transparent cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white group-hover:text-sky-400">Individual PRO Plan ($149/yr)</span>
                      <span className="text-[10px] bg-sky-500/20 text-sky-300 font-extrabold px-1.5 py-0.5 rounded">T1 Solo</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Unlimited 1040/T1 returns, all provinces & CRA NetFile</p>
                  </button>

                  <button onClick={() => handleNavClick('pricing')} className="p-2.5 rounded-md hover:bg-slate-800/90 text-left transition-all border-none bg-transparent cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white group-hover:text-sky-400">Essential Plan ($299/yr)</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-extrabold px-1.5 py-0.5 rounded">Most Popular</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">T1 + T2125 Self-Employed + Federal/Provincial Payroll</p>
                  </button>

                  <button onClick={() => handleNavClick('pricing')} className="p-2.5 rounded-md hover:bg-slate-800/90 text-left transition-all border-none bg-transparent cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white group-hover:text-sky-400">Unlimited Plan ($599/yr)</span>
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 font-extrabold px-1.5 py-0.5 rounded">Firm & Corporate</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">T1 + T2 Corporate + Unlimited seats & document storage</p>
                  </button>

                  <div className="border-t border-slate-800 pt-2 mt-1 flex items-center justify-between px-2">
                    <button onClick={() => handleNavClick('comparison')} className="text-[11px] font-bold text-sky-400 hover:underline border-none bg-transparent cursor-pointer flex items-center gap-1">
                      <span>View Feature Comparison Matrix</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Features Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('features')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => handleNavClick('features')}
                className={`px-3.5 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1 cursor-pointer border-none ${
                  activeDropdown === 'features' ? 'text-sky-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>Features</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === 'features' && (
                <div className="absolute top-full left-0 w-80 bg-[#0d1f38] border border-slate-700/80 rounded-lg shadow-2xl p-3 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button onClick={() => handleNavClick('features')} className="p-2 rounded-md hover:bg-slate-800/90 text-left transition-all border-none bg-transparent cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-white block">My AI Tax Assistant</span>
                        <span className="text-[11px] text-slate-400">Automated T4/T5 OCR slip extraction & entry</span>
                      </div>
                    </div>
                  </button>

                  <button onClick={() => handleNavClick('features')} className="p-2 rounded-md hover:bg-slate-800/90 text-left transition-all border-none bg-transparent cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-white block">CRA NetFile Direct Sync</span>
                        <span className="text-[11px] text-slate-400">Instant CRA submission & confirmation code</span>
                      </div>
                    </div>
                  </button>

                  <button onClick={() => handleNavClick('features')} className="p-2 rounded-md hover:bg-slate-800/90 text-left transition-all border-none bg-transparent cursor-pointer">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-white block">MyTAXPortal (Client Portal)</span>
                        <span className="text-[11px] text-slate-400">Secure client document upload & e-signatures</span>
                      </div>
                    </div>
                  </button>

                  <button onClick={() => handleNavClick('features')} className="p-2 rounded-md hover:bg-slate-800/90 text-left transition-all border-none bg-transparent cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-purple-400 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-white block">Easy Switch & Free Conversion</span>
                        <span className="text-[11px] text-slate-400">Import TurboTax, H&R Block & Profile returns</span>
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <button
              onClick={() => handleNavClick('pricing')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold transition-all border-none bg-transparent cursor-pointer ${
                activeTab === 'pricing' ? 'text-sky-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Pricing
            </button>

            {/* Comparison Matrix Link */}
            <button
              onClick={() => handleNavClick('comparison')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold transition-all border-none bg-transparent cursor-pointer ${
                activeTab === 'comparison' ? 'text-sky-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Comparison
            </button>

            {/* Demo Center */}
            <button
              onClick={onOpenDemo}
              className="px-3.5 py-2 rounded-md text-xs font-bold text-amber-300 hover:text-amber-200 transition-all border-none bg-transparent cursor-pointer flex items-center gap-1"
            >
              <Play className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>Demo Center</span>
            </button>

            {/* CRA Hub & Training */}
            <button
              onClick={() => handleNavClick('cra-hub')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold transition-all border-none bg-transparent cursor-pointer ${
                activeTab === 'cra-hub' ? 'text-sky-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              CRA Hub
            </button>

            {/* Tax Articles */}
            <button
              onClick={() => handleNavClick('tax-articles')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold transition-all border-none bg-transparent cursor-pointer ${
                activeTab === 'tax-articles' ? 'text-sky-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Tax Articles
            </button>

            {/* FAQ */}
            <button
              onClick={() => handleNavClick('faq')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold transition-all border-none bg-transparent cursor-pointer ${
                activeTab === 'faq' ? 'text-sky-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              FAQ
            </button>

            {/* Support / Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold transition-all border-none bg-transparent cursor-pointer ${
                activeTab === 'contact' ? 'text-sky-400 bg-slate-800/80' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Support
            </button>
          </nav>

          {/* Right Header Action Buttons (Matching MyTAXPrepOffice) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenDemo}
              className="px-3.5 py-2 rounded-md text-xs font-bold text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-sky-400 text-sky-400" />
              <span>TRY IT FOR FREE</span>
            </button>

            <a
              href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20schedule%20a%20demo%20or%20start%20filing."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-blue text-xs py-2 px-3.5 shadow-sky-500/20"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>SCHEDULE A DEMO</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md bg-slate-800 text-slate-200 hover:text-white border border-slate-700 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1628] border-b border-slate-800 px-4 py-5 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'pricing', label: 'Pricing Plans' },
              { id: 'features', label: 'Features' },
              { id: 'comparison', label: 'Comparison' },
              { id: 'cra-hub', label: 'CRA Resource Hub' },
              { id: 'tax-articles', label: 'Tax Articles' },
              { id: 'about', label: 'About Us' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contact', label: 'Support & Contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-2.5 px-3 rounded-md text-xs font-bold text-left transition-all border-none ${
                  activeTab === link.id
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-900/90 text-slate-200 hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full py-2.5 rounded-md text-xs font-bold text-sky-300 bg-sky-500/10 border border-sky-500/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 text-sky-400" />
              <span>TEST DRIVE FREE DEMO</span>
            </button>

            <a
              href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20file%20my%20Canadian%20taxes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-blue w-full text-center py-2.5 text-xs justify-center"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>SCHEDULE DEMO ON WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
