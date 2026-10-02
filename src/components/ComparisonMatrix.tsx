import React from 'react';
import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';

interface ComparisonMatrixProps {
  onOpenDemo: () => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ onOpenDemo }) => {
  return (
    <section id="comparison" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="badge-chip">TRANSPARENT VALUE COMPARISON</span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#0c1e36]">
            Comparing Professional Tax Software? Add These Up.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            With most professional tax software, the advertised license price isn't the total cost: provincial modules, per-return e-filing, client portals, and e-signatures are billed separately. <strong className="text-[#0c1e36]">QuicTax.ca includes them.</strong>
          </p>
        </div>

        {/* Comparison Table (Matching MyTAXPrepOffice) */}
        <div className="overflow-x-auto mb-12 shadow-sm rounded-xl border border-slate-200">
          <table className="comparison-table text-left">
            <thead>
              <tr className="bg-[#0c1e36] text-white">
                <th className="w-2/5 p-4 text-xs font-bold font-heading uppercase tracking-wider text-slate-200">
                  Feature & Capability
                </th>
                <th className="w-1/5 p-4 text-xs font-extrabold font-heading uppercase tracking-wider text-sky-400 bg-[#071324] border-x border-slate-700">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>With QuicTax.ca</span>
                  </div>
                </th>
                <th className="w-1/5 p-4 text-xs font-bold font-heading uppercase tracking-wider text-slate-300">
                  Traditional Legacy Tax Software
                </th>
                <th className="w-1/5 p-4 text-xs font-bold font-heading uppercase tracking-wider text-slate-300">
                  DIY Tax Software & CPA Firms
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 text-xs font-medium text-slate-700">
              
              {/* Row 1 */}
              <tr>
                <td className="p-4">
                  <strong className="text-[#0c1e36] block text-sm font-heading">Provincial Modules & Returns</strong>
                  <span className="text-slate-500 text-[11px]">All Canadian provinces & territories supported</span>
                </td>
                <td className="p-4 bg-sky-50/70 border-x border-sky-100 font-bold text-emerald-700">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Included</span>
                </td>
                <td className="p-4 text-slate-600">
                  $150 – $350 Extra per province
                </td>
                <td className="p-4 text-slate-600">
                  $20 – $40 Extra per state/province
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td className="p-4">
                  <strong className="text-[#0c1e36] block text-sm font-heading">Federal & Provincial E-Filing</strong>
                  <span className="text-slate-500 text-[11px]">CRA NETFILE & EFILE direct submission</span>
                </td>
                <td className="p-4 bg-sky-50/70 border-x border-sky-100 font-bold text-emerald-700">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Included (Unlimited)</span>
                </td>
                <td className="p-4 text-slate-600">
                  Per-transmission fee billed separately
                </td>
                <td className="p-4 text-slate-600">
                  Paid add-on or restricted
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td className="p-4">
                  <strong className="text-[#0c1e36] block text-sm font-heading">Per-Return Transmission Fees</strong>
                  <span className="text-slate-500 text-[11px]">No volume caps or extra charges per return</span>
                </td>
                <td className="p-4 bg-sky-50/70 border-x border-sky-100 font-bold text-emerald-700">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> None on Annual Plans</span>
                </td>
                <td className="p-4 text-slate-600">
                  $5 – $15 per return filed
                </td>
                <td className="p-4 text-slate-600">
                  $30 – $90 per return
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td className="p-4">
                  <strong className="text-[#0c1e36] block text-sm font-heading">MyTAXPortal Client Portal</strong>
                  <span className="text-slate-500 text-[11px]">Secure document locker & client upload</span>
                </td>
                <td className="p-4 bg-sky-50/70 border-x border-sky-100 font-bold text-emerald-700">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Included</span>
                </td>
                <td className="p-4 text-slate-600">
                  $250 – $500/yr Third-Party add-on
                </td>
                <td className="p-4 text-slate-600">
                  <span className="flex items-center gap-1 text-red-500"><X className="w-4 h-4" /> Not Available</span>
                </td>
              </tr>

              {/* Row 5 */}
              <tr>
                <td className="p-4">
                  <strong className="text-[#0c1e36] block text-sm font-heading">Remote Digital E-Signatures</strong>
                  <span className="text-slate-500 text-[11px]">Form T183 & client signature collection</span>
                </td>
                <td className="p-4 bg-sky-50/70 border-x border-sky-100 font-bold text-emerald-700">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Included</span>
                </td>
                <td className="p-4 text-slate-600">
                  $2.50 – $5.00 per signature
                </td>
                <td className="p-4 text-slate-600">
                  <span className="flex items-center gap-1 text-red-500"><X className="w-4 h-4" /> Not Available</span>
                </td>
              </tr>

              {/* Row 6 */}
              <tr>
                <td className="p-4">
                  <strong className="text-[#0c1e36] block text-sm font-heading">My AI Tax Assistant (OCR Slip Scanner)</strong>
                  <span className="text-slate-500 text-[11px]">Automated T4/T5 form parsing & entry</span>
                </td>
                <td className="p-4 bg-sky-50/70 border-x border-sky-100 font-bold text-emerald-700">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Included Built-In</span>
                </td>
                <td className="p-4 text-slate-600">
                  <span className="flex items-center gap-1 text-red-500"><X className="w-4 h-4" /> Not Available</span>
                </td>
                <td className="p-4 text-slate-600">
                  <span className="flex items-center gap-1 text-red-500"><X className="w-4 h-4" /> Manual Data Entry</span>
                </td>
              </tr>

              {/* Row 7 */}
              <tr>
                <td className="p-4">
                  <strong className="text-[#0c1e36] block text-sm font-heading">Free Data Conversion & 1-on-1 Training</strong>
                  <span className="text-slate-500 text-[11px]">Prior year data import & dedicated setup</span>
                </td>
                <td className="p-4 bg-sky-50/70 border-x border-sky-100 font-bold text-emerald-700">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Included</span>
                </td>
                <td className="p-4 text-slate-600">
                  $300 – $600 Setup Fee
                </td>
                <td className="p-4 text-slate-600">
                  <span className="flex items-center gap-1 text-red-500"><X className="w-4 h-4" /> None</span>
                </td>
              </tr>

              {/* Row 8 */}
              <tr>
                <td className="p-4">
                  <strong className="text-[#0c1e36] block text-sm font-heading">Additional Preparer Seats</strong>
                  <span className="text-slate-500 text-[11px]">Extra user seats for team members</span>
                </td>
                <td className="p-4 bg-sky-50/70 border-x border-sky-100 font-bold text-emerald-700">
                  $20 each (Unlimited Plan includes up to 999)
                </td>
                <td className="p-4 text-slate-600">
                  $150 – $300 per additional user
                </td>
                <td className="p-4 text-slate-600">
                  N/A (Single User)
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Footer Callout */}
        <div className="bg-[#f0f4f8] border border-slate-300 p-6 rounded-xl text-center space-y-3">
          <h4 className="text-base font-bold text-[#0c1e36]">
            Ask any vendor you're comparing what each line above costs.
          </h4>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto">
            QuicTax.ca includes them, and publishes every optional extra transparently. No hidden fine print or surprise bills during tax season.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDemo}
              className="btn-cta-blue text-xs py-2.5 px-6 shadow-md"
            >
              <span>Schedule a Demo & See Complete Price List</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
