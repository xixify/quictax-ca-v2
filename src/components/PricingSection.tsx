import React, { useState } from 'react';
import { Check, Zap, Sparkles, ShieldCheck, ArrowRight, HelpCircle, Building2, User, Users } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: () => void;
  onOpenCalculator: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo, onOpenCalculator }) => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'perReturn'>('annual');
  const [estimatedReturns, setEstimatedReturns] = useState(150);

  const calculateCostPerReturn = (volume: number) => {
    const totalCost = 149;
    return (totalCost / volume).toFixed(2);
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="badge-chip">TRANSPARENT FLAT ANNUAL PRICING</span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#0c1e36]">
            Choose the Right Plan for Your Business
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Flat annual plans with unlimited returns, Federal and all provinces, and CRA e-filing included. <strong className="text-[#0c1e36]">No surprise per-return fees</strong> on annual plans.
          </p>

          {/* Billing Toggle (Matching MyTAXPrepOffice) */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <span className={`text-xs font-bold ${billingCycle === 'annual' ? 'text-[#0c1e36]' : 'text-slate-500'}`}>
              Flat Annual License (Best Value)
            </span>

            <button
              onClick={() => setBillingCycle(billingCycle === 'annual' ? 'perReturn' : 'annual')}
              className="w-14 h-8 bg-sky-600 rounded-full p-1 transition-colors cursor-pointer relative"
              aria-label="Toggle billing cycle"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                billingCycle === 'perReturn' ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>

            <span className={`text-xs font-bold ${billingCycle === 'perReturn' ? 'text-[#0c1e36]' : 'text-slate-500'}`}>
              Pay Per Return ($39 / Return)
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          
          {/* Plan 1: Individual PRO */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded">
                  Individual PRO
                </span>
                <User className="w-5 h-5 text-sky-600" />
              </div>

              <p className="text-xs text-slate-500 font-medium mb-4">
                Solo preparers & individuals filing 1040 / T1 returns
              </p>

              <div className="mb-6">
                {billingCycle === 'annual' ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#0c1e36] font-heading">$149</span>
                    <span className="text-slate-500 font-bold text-sm">/ year</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#0c1e36] font-heading">$39</span>
                    <span className="text-slate-500 font-bold text-sm">/ return</span>
                  </div>
                )}
                <span className="text-[11px] text-emerald-600 font-bold block mt-1">Tax Year 2026 License Included</span>
              </div>

              <ul className="space-y-3 text-xs font-medium text-slate-700 mb-8 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span><strong>Unlimited T1 returns</strong> in all provinces</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Unlimited free CRA NETFILE & EFILE</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Prior tax years 2024 & 2025 free</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Integrated Bank Refund Transfers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>My AI Tax Assistant OCR scanner</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Client portal & remote e-signatures</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>1 preparer account + 5 GB document storage</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenDemo}
              className="btn-outline-light w-full text-xs py-3 justify-center"
            >
              <span>GET STARTED NOW</span>
            </button>
          </div>

          {/* Plan 2: Essential (Featured) */}
          <div className="bg-white border-2 border-sky-500 rounded-xl p-8 shadow-xl relative flex flex-col justify-between group transform lg:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              MOST POPULAR FOR SMBS & FREELANCERS
            </div>

            <div>
              <div className="flex items-center justify-between mb-3 pt-2">
                <span className="text-xs font-extrabold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded">
                  Essential
                </span>
                <Zap className="w-5 h-5 text-amber-500" />
              </div>

              <p className="text-xs text-slate-500 font-medium mb-4">
                Offices & pros filing T1s + Business T2125 returns
              </p>

              <div className="mb-6">
                {billingCycle === 'annual' ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#0c1e36] font-heading">$299</span>
                    <span className="text-slate-500 font-bold text-sm">/ year</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#0c1e36] font-heading">$59</span>
                    <span className="text-slate-500 font-bold text-sm">/ return</span>
                  </div>
                )}
                <span className="text-[11px] text-emerald-600 font-bold block mt-1">Tax Year 2026 License Included</span>
              </div>

              <div className="bg-sky-50 border border-sky-100 p-2.5 rounded text-[11px] font-bold text-sky-900 mb-4 uppercase tracking-wider">
                EVERYTHING IN INDIVIDUAL PRO, PLUS:
              </div>

              <ul className="space-y-3 text-xs font-medium text-slate-700 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span><strong>T2125 Self-Employed Business Returns</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>GST/HST Return filing & ITC calculations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Federal & Provincial After-the-Fact Payroll</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Specialty returns: 990, 706, & 709</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span><strong>2 preparer accounts</strong> + 10 GB storage</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenDemo}
              className="btn-cta-blue w-full text-xs py-3 justify-center shadow-lg shadow-sky-500/25"
            >
              <span>GET STARTED NOW</span>
            </button>
          </div>

          {/* Plan 3: Unlimited */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold text-purple-600 uppercase tracking-wider bg-purple-50 px-2.5 py-1 rounded">
                  Unlimited
                </span>
                <Building2 className="w-5 h-5 text-purple-600" />
              </div>

              <p className="text-xs text-slate-500 font-medium mb-4">
                Growing offices & multi-preparer corporate teams
              </p>

              <div className="mb-6">
                {billingCycle === 'annual' ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#0c1e36] font-heading">$599</span>
                    <span className="text-slate-500 font-bold text-sm">/ year</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#0c1e36] font-heading">$99</span>
                    <span className="text-slate-500 font-bold text-sm">/ return</span>
                  </div>
                )}
                <span className="text-[11px] text-emerald-600 font-bold block mt-1">Tax Year 2026 License Included</span>
              </div>

              <div className="bg-purple-50 border border-purple-100 p-2.5 rounded text-[11px] font-bold text-purple-900 mb-4 uppercase tracking-wider">
                EVERYTHING IN ESSENTIAL, PLUS:
              </div>

              <ul className="space-y-3 text-xs font-medium text-slate-700 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-600 shrink-0 stroke-[3]" />
                  <span><strong>Full T2 Corporate Income Tax Returns</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-600 shrink-0 stroke-[3]" />
                  <span>GIFI Financial Statement integration</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-600 shrink-0 stroke-[3]" />
                  <span><strong>Up to 999 preparer accounts</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-600 shrink-0 stroke-[3]" />
                  <span>Unlimited document storage</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-600 shrink-0 stroke-[3]" />
                  <span>1 location included + add more any time</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenDemo}
              className="btn-outline-light w-full text-xs py-3 justify-center"
            >
              <span>GET STARTED NOW</span>
            </button>
          </div>

        </div>

        {/* Volume Cost Per Return Calculator Banner (Matching MyTAXPrepOffice) */}
        <div className="bg-[#0c1e36] text-white rounded-xl p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                VOLUME SAVINGS BREAKDOWN
              </span>

              <h3 className="text-2xl font-black font-heading text-white">
                Your Effective Cost Per Return Drops as You Grow
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                The annual price doesn't change with volume, so the more returns you file, the less each one costs — making it affordable and easy to scale your business.
              </p>

              {/* Volume Slider */}
              <div className="pt-3 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span>Simulate Annual Filing Volume:</span>
                  <span className="text-sky-400 font-mono font-extrabold text-sm">{estimatedReturns} Returns</span>
                </div>

                <input
                  type="range"
                  min="50"
                  max="500"
                  step="25"
                  value={estimatedReturns}
                  onChange={(e) => setEstimatedReturns(parseInt(e.target.value))}
                  className="w-full accent-sky-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#071324] border border-slate-700/80 p-6 rounded-lg text-center space-y-3">
              <div className="text-xs font-bold text-slate-400">Effective Cost Per Return:</div>
              <div className="text-5xl font-black text-emerald-400 font-heading">
                ${calculateCostPerReturn(estimatedReturns)}
              </div>
              <p className="text-xs text-slate-300">
                At <strong className="text-white">{estimatedReturns} returns</strong> filed on Individual PRO ($149/yr).
              </p>

              <button
                onClick={onOpenCalculator}
                className="btn-cta-blue w-full text-xs py-2.5 justify-center mt-2"
              >
                <span>Launch Interactive Fee Calculator</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
