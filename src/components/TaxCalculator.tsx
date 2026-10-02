import React, { useState } from 'react';
import { Calculator, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const TaxCalculator: React.FC = () => {
  const [returnType, setReturnType] = useState<'personal' | 'freelance' | 'smb' | 'corporate'>('personal');
  const [hasRental, setHasRental] = useState(false);
  const [hasRrsp, setHasRrsp] = useState(true);
  const [needsHst, setNeedsHst] = useState(false);
  const [hasPriorYear, setHasPriorYear] = useState(false);
  const [t4Count, setT4Count] = useState<number>(1);

  // Dynamic calculations based on selected criteria
  const getPackageDetails = () => {
    switch (returnType) {
      case 'personal':
        return {
          title: "Personal Tax Return (T1)",
          turnaround: "24 – 48 Hours",
          feeEstimate: "Affordable Personal Rate",
          savingsTip: "We'll maximize your RRSP, medical pooling, and tuition transfers.",
          documents: [
            `${t4Count} × T4 Income Slip(s)`,
            hasRrsp ? "RRSP Contribution Receipts" : null,
            hasRental ? "Rental Income & Expense Records" : null,
            hasPriorYear ? "Prior Year CRA Notice of Assessment" : null
          ].filter(Boolean) as string[],
          deductions: [
            "Basic Personal Exemption ($15,705+)",
            "RRSP Deduction Offset",
            "Canada Carbon Rebate (Quarterly Payout)",
            hasRental ? "Rental Mortgage Interest & Property Expenses" : "Medical & Donation Pooling"
          ]
        };

      case 'freelance':
        return {
          title: "Freelancer & Self-Employed Filing",
          turnaround: "48 Hours",
          feeEstimate: "Transparent Self-Employed Rate",
          savingsTip: "We claim vehicle mileage, home office square-footage, tools & software.",
          documents: [
            "T2125 Business Income Summary",
            needsHst ? "GST/HST Sales & ITC Expenses" : null,
            "Home Office & Internet Receipts",
            "Vehicle Mileage Log"
          ].filter(Boolean) as string[],
          deductions: [
            "Home Office Workspace Deduction",
            "Cell Phone & High-Speed Internet Business Share",
            "Vehicle Gas, Insurance & Repairs",
            needsHst ? "Input Tax Credit (ITC) HST Recovery" : "Self-Employment CPP Deduction"
          ]
        };

      case 'smb':
        return {
          title: "Small Business Tax Package",
          turnaround: "48 – 72 Hours",
          feeEstimate: "Custom SMB Upfront Rate",
          savingsTip: "We organize sole-proprietor write-offs, CCA depreciation & payroll.",
          documents: [
            "Year-End Income & Expense Summary",
            "Payroll Summaries / T4 Slips",
            "Bank & Credit Card Statements",
            needsHst ? "HST Reconciliation Records" : null
          ].filter(Boolean) as string[],
          deductions: [
            "Capital Cost Allowance (Asset Depreciation)",
            "Subcontractor & Legal Fees",
            "Commercial Rent & Utilities",
            "Payroll Taxes & Benefits"
          ]
        };

      case 'corporate':
        return {
          title: "Corporate Tax Return (T2)",
          turnaround: "3 – 5 Business Days",
          feeEstimate: "Transparent Corporate Flat Rate",
          savingsTip: "We apply the 9% Federal Small Business Deduction and GIFI mapping.",
          documents: [
            "Trial Balance / Financial Statements",
            "GIFI Balance Sheet & Income Statement",
            "Shareholder Dividend / Salary Records",
            "Prior Year T2 Return & NOA"
          ],
          deductions: [
            "Small Business Deduction (9% CCPC Rate)",
            "Active Business Income Optimization",
            "Director Salary vs. Dividend Split",
            "CRA Corporate Compliance & Defense"
          ]
        };
    }
  };

  const details = getPackageDetails();

  const handleSendToWhatsApp = () => {
    const text = `Hi QuicTax! I used your Tax Estimator:
- Return Type: ${details.title}
- T4 Slips: ${t4Count}
- Rental Income: ${hasRental ? 'Yes' : 'No'}
- RRSP Receipts: ${hasRrsp ? 'Yes' : 'No'}
- HST Filing Needed: ${needsHst ? 'Yes' : 'No'}
- Prior Year Catchup: ${hasPriorYear ? 'Yes' : 'No'}

Please provide me with an exact upfront filing quote!`;

    window.open(`https://wa.me/12895275237?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-slate-900 to-[#0A1128] text-white relative overflow-hidden border-b border-slate-800">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" /> Turbo-Estimate Your Filing & Refund
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white mb-4">
            Interactive Canadian Tax Estimator
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Select your taxpayer situation below to generate your custom document checklist, turnaround estimate, and instant transparent quote.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Column (Inputs) */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-700/70 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6">
            
            {/* Step 1: Select Persona */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Step 1: Choose Your Filing Category
              </label>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'personal', label: 'T1 Personal', icon: '👤', sub: 'Employee / Family' },
                  { id: 'freelance', label: 'Self-Employed', icon: '💻', sub: 'Uber / Contractor' },
                  { id: 'smb', label: 'Small Business', icon: '🏪', sub: 'Sole Prop / SMB' },
                  { id: 'corporate', label: 'T2 Corporate', icon: '🏢', sub: 'Incorporated Co.' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setReturnType(item.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      returnType === item.id
                        ? 'bg-gradient-to-r from-sky-600 to-cyan-600 border-cyan-400 text-white shadow-lg shadow-sky-500/20'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl">{item.icon}</span>
                      {returnType === item.id && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <div className="mt-2">
                      <span className="font-bold text-sm block font-heading">{item.label}</span>
                      <span className="text-[11px] opacity-80">{item.sub}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Custom Options / Checkboxes */}
            <div className="pt-4 border-t border-slate-800 space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Step 2: Additional Slips & Factors
              </label>

              {/* T4 Slip Count Slider */}
              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-200">Number of T4 Income Slips:</span>
                  <span className="text-cyan-400 font-bold bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                    {t4Count} Slip{t4Count > 1 ? 's' : ''}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={t4Count}
                  onChange={(e) => setT4Count(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Toggle Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 cursor-pointer hover:bg-slate-800">
                  <input
                    type="checkbox"
                    checked={hasRrsp}
                    onChange={(e) => setHasRrsp(e.target.checked)}
                    className="w-4 h-4 accent-cyan-500 rounded cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-slate-200">RRSP / TFSA Slips</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 cursor-pointer hover:bg-slate-800">
                  <input
                    type="checkbox"
                    checked={hasRental}
                    onChange={(e) => setHasRental(e.target.checked)}
                    className="w-4 h-4 accent-cyan-500 rounded cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-slate-200">Rental Property Income</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 cursor-pointer hover:bg-slate-800">
                  <input
                    type="checkbox"
                    checked={needsHst}
                    onChange={(e) => setNeedsHst(e.target.checked)}
                    className="w-4 h-4 accent-cyan-500 rounded cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-slate-200">HST/GST Return Needed</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 cursor-pointer hover:bg-slate-800">
                  <input
                    type="checkbox"
                    checked={hasPriorYear}
                    onChange={(e) => setHasPriorYear(e.target.checked)}
                    className="w-4 h-4 accent-cyan-500 rounded cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-slate-200">Prior Year Catch-up</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Preview Column (Live Outputs) */}
          <div className="lg:col-span-6 bg-gradient-to-b from-slate-800/90 to-slate-900 border border-slate-700 p-6 sm:p-8 rounded-2xl shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block font-heading">
                  RECOMMENDED PACKAGE
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-0.5">
                  {details.title}
                </h3>
              </div>

              <span className="badge-emerald text-xs px-3 py-1.5 rounded-full font-bold">
                {details.turnaround}
              </span>
            </div>

            {/* Savings Tip Banner */}
            <div className="bg-sky-950/60 border border-sky-500/30 p-4 rounded-xl mb-6 text-xs text-sky-200 flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Specialist Strategy Tip:</span>
                <span>{details.savingsTip}</span>
              </div>
            </div>

            {/* Document Checklist */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Required Document Slips Checklist:
              </h4>
              <ul className="space-y-2 text-xs text-slate-200">
                {details.documents.map((doc, i) => (
                  <li key={i} className="flex items-center gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Write-Offs We Scan */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Deductions We Scan & Claim:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {details.deductions.map((ded, i) => (
                  <div key={i} className="bg-slate-900/40 p-2 rounded border border-slate-800 text-slate-300 flex items-center gap-1.5">
                    <span className="text-cyan-400 text-sm">•</span>
                    <span>{ded}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-4 border-t border-slate-700/80">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-400">Pricing Guarantee:</span>
                <span className="text-xs font-bold text-emerald-400">{details.feeEstimate}</span>
              </div>

              <button
                onClick={handleSendToWhatsApp}
                className="btn-cta-whatsapp w-full py-4 text-sm justify-center shadow-emerald-500/30"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Send Estimator Summary on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center mt-3 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>No commitment • Receive a exact no-obligation quote in 2–4 hours</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
