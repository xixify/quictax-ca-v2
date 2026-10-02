import React from 'react';
import { Zap, CheckCircle2, Eye, ShieldCheck, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Zap,
      title: "Speed",
      desc: "Most returns filed within 48 hours of document receipt. We respect your time and deadline priorities.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: CheckCircle2,
      title: "Accuracy",
      desc: "Every return is manually reviewed by experienced Canadian tax specialists for errors and max refund optimization.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      icon: Eye,
      title: "Transparency",
      desc: "Clear upfront pricing, no hidden slip charges, and zero surprises at the end of your return.",
      color: "text-sky-500",
      bg: "bg-sky-50"
    },
    {
      icon: ShieldCheck,
      title: "Confidentiality",
      desc: "Your financial data and SIN are handled with the highest level of bank-grade security and discretion.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            ABOUT QUICTAX
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900">
            Built to Make Tax Season Painless
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            QuicTax was founded on a simple belief: Canadian tax filing shouldn't be complicated, expensive, or stressful. We built a faster, smarter way.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Why QuicTax Exists
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Tax season used to mean long waits, confusing forms, and expensive accountants. We saw an opportunity to change that — to bring the speed, simplicity, and clarity of modern communication to a process that hadn't changed in decades.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              QuicTax was built for real people: the freelancer juggling clients, the small business owner wearing ten hats, the family needing maximum child benefit refunds, and the corporation requiring reliable CRA compliance without the high CPA overhead.
            </p>

            <div className="bg-sky-50/80 p-5 rounded-2xl border border-sky-200 text-xs text-sky-900 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Based out of Mississauga, ON — Serving All of Canada Online</span>
                <span>By operating 100% remotely, we eliminate brick-and-mortar office overhead and pass every dollar of those savings directly to you — delivering professional tax service at the lowest guaranteed price.</span>
              </div>
            </div>
          </div>

          {/* Right Metrics Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0A1128] text-white p-8 rounded-2xl shadow-xl border border-slate-800 space-y-6">
            <h4 className="text-lg font-bold font-heading text-cyan-400">
              Our Proven Impact
            </h4>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-300">Canadian Taxpayers Served</span>
                <span className="text-2xl font-black font-heading text-white">500+</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-300">Average Turnaround Time</span>
                <span className="text-2xl font-black font-heading text-emerald-400">48 Hours</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-300">Verified Client Satisfaction</span>
                <span className="text-2xl font-black font-heading text-amber-400">98%</span>
              </div>
            </div>

            <a
              href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20learn%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-whatsapp w-full text-xs py-3 justify-center"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Get Started with Us</span>
            </a>
          </div>

        </div>

        {/* 4 Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-2">{v.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
