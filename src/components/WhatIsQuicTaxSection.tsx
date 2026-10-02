import React from 'react';
import { Layers, Sparkles, DollarSign, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WhatIsQuicTaxSectionProps {
  onOpenDemo: () => void;
  onOpenCalculator: () => void;
}

export const WhatIsQuicTaxSection: React.FC<WhatIsQuicTaxSectionProps> = ({ onOpenDemo, onOpenCalculator }) => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="badge-chip">ALL-IN-ONE CANADIAN TAX SYSTEM</span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#0c1e36]">
            What is QuicTax.ca?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            QuicTax.ca is cloud-based professional tax software built for Canadian tax preparers, accountants, freelancers, and taxpayers who would rather buy one complete system than assemble one from expensive add-ons. Accurate, efficient, and affordable.
          </p>
        </div>

        {/* 4 Feature Pillars Grid (Matching MyTAXPrepOffice) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Pillar 1: Everything Included */}
          <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-8 hover:border-sky-300 transition-all hover:shadow-lg space-y-4 relative group">
            <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-600 flex items-center justify-center font-bold text-xl">
              <Layers className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-[#0c1e36] font-heading group-hover:text-sky-600 transition-colors">
              Everything you need is included in the plan price
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              Unlimited tax prep and CRA e-filing, client portal, My AI Tax Assistant, remote digital signatures, free dedicated support, and 1-on-1 training are included with your plan. Essential and Unlimited plans also include Federal/Provincial After-the-Fact Payroll.
            </p>

            <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Unlimited T1, T2, & T2125 returns in all Canadian provinces</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Free CRA NETFILE & EFILE submission with instant confirmation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero hidden per-return fees on annual licensing plans</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: My AI Tax Assistant */}
          <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-8 hover:border-sky-300 transition-all hover:shadow-lg space-y-4 relative group">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center font-bold text-xl">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-[#0c1e36] font-heading group-hover:text-sky-600 transition-colors">
              My AI Tax Assistant built into QuicTax.ca
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              Upload T4s, T5s, T3s, W-2s, and receipts. My AI Assistant automatically identifies the tax forms, extracts key slip values with optical character recognition, and prepares it for import into CRA schedules for your review and approval.
            </p>

            <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Automated OCR document parsing for all standard CRA slips</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Instant deduction audit scanner to maximize refund eligibility</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Reduces manual data entry time by up to 80%</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Bank Products & Refund Transfer */}
          <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-8 hover:border-sky-300 transition-all hover:shadow-lg space-y-4 relative group">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xl">
              <DollarSign className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-[#0c1e36] font-heading group-hover:text-sky-600 transition-colors">
              Get refunds faster & get paid directly
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              Choose from integrated Canadian bank partners and give clients flexible refund options. Tax preparation fees can be collected directly from the client’s refund so nobody pays upfront out of pocket.
            </p>

            <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Prior Year & Current Year Refund Transfer options</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Direct deposit into client bank accounts within 8-10 business days</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automatic prep fee deduction upon CRA release</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4: Easy Switch & Free Conversion */}
          <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-8 hover:border-sky-300 transition-all hover:shadow-lg space-y-4 relative group">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600 flex items-center justify-center font-bold text-xl">
              <RefreshCw className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-[#0c1e36] font-heading group-hover:text-sky-600 transition-colors">
              Switching is easier than you think with free conversion
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              We convert prior-year returns, client information, schedules, and forms from supported tax software (TurboTax, H&R Block, UFile, TaxCycle, Profile, Cantax) at no extra cost. One-on-one onboarding training is included with every plan.
            </p>

            <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                <span>Free prior-year return data import from major software</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                <span>Dedicated 1-on-1 Canadian onboarding specialist assigned</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                <span>Zero downtime during tax season transition</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center bg-[#f0f4f8] border border-slate-300 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-[#0c1e36]">Ready to see how QuicTax.ca simplifies Canadian filing?</h4>
            <p className="text-xs text-slate-600">Test drive the software free or schedule a 1-on-1 walkthrough with a tax pro.</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDemo}
              className="btn-cta-blue text-xs py-2.5 px-4 shadow-md"
            >
              <span>Test Drive Free Demo</span>
            </button>
            <button
              onClick={onOpenCalculator}
              className="btn-outline-light text-xs py-2.5 px-4"
            >
              <span>Calculate Fee Savings</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
