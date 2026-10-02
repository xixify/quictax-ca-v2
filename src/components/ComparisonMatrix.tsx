import React from 'react';
import { Check, X, ShieldCheck, Zap } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const comparisonData = [
    {
      feature: "Real Human Tax Specialist Preparation",
      quictax: true,
      cpa: true,
      diy: false,
      note: "QuicTax: Expert human eyes analyze every slip, no manual entry required."
    },
    {
      feature: "48-Hour Average Filing Turnaround",
      quictax: true,
      cpa: false,
      diy: false,
      note: "Traditional CPA firms often take 2 to 4 weeks during tax season."
    },
    {
      feature: "Instant WhatsApp Direct Communication",
      quictax: true,
      cpa: false,
      diy: false,
      note: "No office visits or waiting rooms. Chat directly on your phone."
    },
    {
      feature: "Lowest Price Guaranteed ($0 Hidden Slip Fees)",
      quictax: true,
      cpa: false,
      diy: false,
      note: "Traditional accountants charge extra per slip. DIY software upsells."
    },
    {
      feature: "Self-Employed & Freelancer Write-Off Optimization",
      quictax: true,
      cpa: true,
      diy: false,
      note: "We scan home office, vehicle mileage, tools, and HST Input Tax Credits."
    },
    {
      feature: "CRA Audit Defense & Letter Support",
      quictax: true,
      cpa: true,
      diy: false,
      note: "We respond directly to CRA pre/post-assessment reviews."
    },
    {
      feature: "Zero Stress / No Confusing Form Entry",
      quictax: true,
      cpa: true,
      diy: false,
      note: "Simply send photo receipts or PDFs over WhatsApp."
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            WHY CANADIANS CHOOSE QUICTAX
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900">
            How QuicTax Compares
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            See why hundreds of Canadians switch from expensive traditional CPA firms and frustrating DIY software to our fast, human-assisted tax service.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto">
          <table className="comparison-table border border-slate-200 min-w-[700px]">
            <thead>
              <tr>
                <th className="w-2/5 text-slate-700 bg-slate-100/80">Features & Experience</th>
                <th className="w-1/5 text-center bg-slate-900 text-white font-bold py-4">
                  <div className="flex flex-col items-center">
                    <span className="text-cyan-400 text-xs uppercase font-heading tracking-widest">Recommended</span>
                    <span className="text-lg font-black font-heading text-white">QuicTax.ca</span>
                  </div>
                </th>
                <th className="w-1/5 text-center bg-slate-100 text-slate-700">Traditional CPA Firm</th>
                <th className="w-1/5 text-center bg-slate-100 text-slate-700">DIY Tax Software</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx}>
                  <td className="font-semibold text-slate-800 text-sm">
                    {row.feature}
                    <span className="block text-xs font-normal text-slate-500 mt-0.5">{row.note}</span>
                  </td>

                  {/* QuicTax Column */}
                  <td className="text-center bg-sky-50/50 border-x-2 border-sky-500/30">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-sm">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                  </td>

                  {/* Traditional CPA */}
                  <td className="text-center">
                    {row.cpa ? (
                      <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center mx-auto">
                        <Check className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                        <X className="w-4 h-4" />
                      </div>
                    )}
                  </td>

                  {/* DIY Software */}
                  <td className="text-center">
                    {row.diy ? (
                      <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center mx-auto">
                        <Check className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-red-100 text-red-500 flex items-center justify-center mx-auto">
                        <X className="w-4 h-4" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-10 bg-gradient-to-r from-slate-900 to-[#0A1128] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-heading text-white">100% Accuracy & Maximum Refund Guarantee</h4>
              <p className="text-xs text-slate-300 mt-0.5">If there is ever an error on our end, we fix it immediately at zero cost. We stand by our tax work.</p>
            </div>
          </div>

          <a
            href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20file%20my%20taxes%20with%20your%20human-assisted%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-whatsapp text-xs py-3 px-6 shrink-0"
          >
            <span>Switch to QuicTax Today</span>
          </a>
        </div>

      </div>
    </section>
  );
};
