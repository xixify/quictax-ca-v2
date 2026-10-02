import React from 'react';
import { MessageSquare, Calculator, ShieldCheck, Zap, DollarSign, CheckCircle2, ArrowRight, Award } from 'lucide-react';

interface HeroProps {
  onScrollToCalculator: () => void;
  onScrollToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToCalculator, onScrollToServices }) => {
  return (
    <section id="hero" className="bg-hero-navy text-white py-16 lg:py-20 overflow-hidden relative border-b border-slate-800">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Clean Corporate Eyebrow Tag (No Pill Shape) */}
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-400">
              <span>🍁 HUMAN-ASSISTED CANADIAN TAX FILING • NOT SOFTWARE</span>
            </div>

            {/* Main Headline (Solid Bright Cyan Accent - No Text Fill Gradients) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight tracking-tight text-white">
              File Smarter.{' '}
              <span className="text-sky-400">
                Get Maximum Refund.
              </span>{' '}
              Zero Stress.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              QuicTax connects you directly with experienced Canadian tax specialists who prepare and NETFILE your <strong className="text-white">T1 Personal, Freelancer, Small Business, or T2 Corporate return</strong> remotely. Maximum deductions guaranteed with zero software hassle.
            </p>

            {/* Trust Points Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs font-semibold text-slate-200 max-w-xl mx-auto lg:mx-0">
              <div className="bg-slate-900 border border-slate-800 rounded p-2.5 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lowest Price Guaranteed</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded p-2.5 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>48hr Turnaround</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded p-2.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>100% Confidential</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded p-2.5 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400 shrink-0" />
                <span>NETFILE Certified</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20a%20quote%20for%20my%20tax%20return."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp text-sm py-3.5 px-6 w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Start Filing on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onScrollToCalculator}
                className="btn-outline-light text-sm py-3.5 px-6 w-full sm:w-auto justify-center"
              >
                <Calculator className="w-4 h-4 text-sky-400" />
                <span>Estimate Refund & Fee</span>
              </button>
            </div>

            {/* Footnote */}
            <div className="pt-1 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <span className="pulse-green"></span>
              <span>No commitment required • Response time 2–4 hours on business days</span>
            </div>

          </div>

          {/* Right Hero Column: Clean Corporate Visual Card */}
          <div className="lg:col-span-5 relative">
            
            <div className="bg-slate-900 p-6 sm:p-7 rounded-lg border border-slate-800 shadow-xl relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" 
                    alt="Canadian Tax Specialist" 
                    className="w-11 h-11 rounded border-2 border-sky-500 object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white font-heading">Canadian Tax Pro Assigned</h3>
                    <p className="text-xs text-slate-400">NETFILE & CRA Certified • Ontario</p>
                  </div>
                </div>

                <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
                  Online Now
                </span>
              </div>

              {/* Highlights */}
              <div className="space-y-3 mb-5 text-xs text-slate-200">
                <div className="bg-slate-950 border border-slate-800 p-3 rounded flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">T1 & T2 Deduction Optimization</span>
                    <span className="text-slate-400">We scan every RRSP, medical, home office, and write-off.</span>
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-3 rounded flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">48-Hour Secure NETFILE Submission</span>
                    <span className="text-slate-400">We submit directly to the CRA and send your complete copy.</span>
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-3 rounded flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Lowest Price & Audit Defense</span>
                    <span className="text-slate-400">No surprise slip fees. Full CRA correspondence support.</span>
                  </div>
                </div>
              </div>

              {/* Action Box */}
              <div className="bg-slate-950 p-3.5 rounded border border-slate-800 text-center">
                <p className="text-xs text-slate-300 mb-2 font-medium">Ready for your filing quote?</p>
                <a
                  href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20a%20quick%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-whatsapp w-full py-2.5 text-xs justify-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
