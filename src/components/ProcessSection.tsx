import React from 'react';
import { MessageSquare, UploadCloud, CheckCircle, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Contact Us on WhatsApp",
      desc: "Tap our WhatsApp link — we respond fast, analyze your tax situation, and provide a clear, transparent upfront quote with zero hidden fees.",
      icon: MessageSquare,
      color: "from-sky-500 to-cyan-500",
      accent: "text-cyan-600",
      bg: "bg-cyan-50"
    },
    {
      num: "02",
      title: "Share Documents Securely",
      desc: "Send smartphone photos or PDF files of your T4s, RRSP slips, medical receipts, or business logs. We take care of all sorting and calculation.",
      icon: UploadCloud,
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      num: "03",
      title: "Get Filed in 48 Hours",
      desc: "We review your return for maximum eligible deductions, submit directly via CRA NETFILE, and send you a complete filing summary copy. Done!",
      icon: CheckCircle,
      color: "from-amber-500 to-orange-500",
      accent: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  return (
    <section className="py-20 bg-slate-100/70 border-b border-slate-200 relative">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            SIMPLE PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900">
            Three Steps to Done
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Filing taxes in Canada doesn't have to take weeks or hours of software headache. Here is how we make it completely painless.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black font-heading text-slate-300 group-hover:text-cyan-600 transition-colors">
                      {step.num}
                    </span>

                    <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${step.accent}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 font-heading mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-slate-800">
                  <span className="group-hover:text-cyan-600 transition-colors">Step {idx + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Callout */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20start%20the%203-step%20tax%20filing%20process!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-whatsapp text-sm py-4 px-8 shadow-emerald-500/30"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Start Step 01 on WhatsApp Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
