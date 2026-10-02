import React, { useState } from 'react';
import { SERVICES_DATA, ServicePackage } from '../data/servicesData';
import { User, Briefcase, Store, Building2, CheckCircle2, MessageSquare, ArrowRight, HelpCircle, FileText, X } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User className="w-6 h-6 text-sky-600" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-emerald-600" />;
      case 'Store': return <Store className="w-6 h-6 text-amber-600" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-indigo-600" />;
      default: return <User className="w-6 h-6 text-sky-600" />;
    }
  };

  const handleQuizChoice = (choice: string) => {
    switch (choice) {
      case 't1':
        setQuizResult("We recommend Personal Tax Filing (T1). Fast 48-hour turn-around with maximum refund optimization!");
        break;
      case 'gig':
        setQuizResult("We recommend Freelancer & Self-Employed Filing. We write off vehicle expenses, home office, and handle HST!");
        break;
      case 'smb':
        setQuizResult("We recommend Small Business Tax Filing. We optimize sole proprietorship or incorporated SMB year-ends.");
        break;
      case 'corporate':
        setQuizResult("We recommend Corporate Tax Filing (T2). We handle T2 compliance, GIFI mapping, and Small Business Deductions.");
        break;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
              WHAT WE HANDLE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900">
              Expert Tax Preparation for Every Canadian
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-2">
              QuicTax is a human-assisted tax preparation service — not DIY software. Our tax specialists handle your T1 personal, T2 corporate, freelancer, and business returns online with expert guidance every step of the way.
            </p>
          </div>

          <button
            onClick={() => { setQuizOpen(true); setQuizResult(null); }}
            className="btn-secondary-blue shadow-sm shrink-0 self-start md:self-auto text-xs py-3 px-5"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Which Service Do I Need?</span>
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(pkg.icon)}
                  </div>
                  <span className="badge-chip font-bold">
                    {pkg.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-black text-slate-900 font-heading mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs font-semibold text-sky-700 mb-3">
                  Target: {pkg.targetAudience}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Features List */}
                <div className="border-t border-slate-100 pt-5 mb-6 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    WHAT'S INCLUDED IN THIS SERVICE
                  </h4>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">{pkg.turnaround}</span>
                  <span className="text-[11px] text-slate-500">{pkg.priceNote}</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(pkg)}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold border-none cursor-pointer transition-colors"
                  >
                    View Details
                  </button>

                  <a
                    href={`https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20get%20started%20with%20your%20${encodeURIComponent(pkg.name)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-whatsapp text-xs py-2 px-4 shadow-none"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Get Quote</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in border border-slate-200">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer border-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                  {getIcon(selectedService.icon)}
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">{selectedService.badge}</span>
                  <h3 className="text-2xl font-black text-slate-900 font-heading">{selectedService.name}</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-500" /> Required Slips & Documents
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedService.requiredSlips.map((slip, i) => (
                      <div key={i} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium">
                        • {slip}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Deductions & Optimizations Included
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedService.deductionsCovered.map((ded, i) => (
                      <div key={i} className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200 text-emerald-900 font-medium">
                        ✓ {ded}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-500 block">Fast Turnaround Guaranteed</span>
                  <span className="text-sm font-bold text-slate-900">{selectedService.turnaround}</span>
                </div>

                <a
                  href={`https://wa.me/12895275237?text=Hi%20QuicTax,%20I'm%20interested%20in%20${encodeURIComponent(selectedService.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-whatsapp text-xs py-3 px-6 shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Start this Service on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Modal */}
        {quizOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
              <button
                onClick={() => setQuizOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer border-none"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-black text-slate-900 font-heading mb-2">
                Which Service Fits You Best?
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Click on the situation that best describes your tax filing needs in Canada:
              </p>

              {!quizResult ? (
                <div className="space-y-3">
                  {[
                    { id: 't1', title: 'I am an employee or student', desc: 'I have T4s, RRSP slips, tuition, or rental income.' },
                    { id: 'gig', title: 'I am a freelancer or gig driver', desc: 'Uber, DoorDash, consultant, or sole proprietor.' },
                    { id: 'smb', title: 'I own an unincorporated small business', desc: 'I need expense write-offs, payroll, or HST filing.' },
                    { id: 'corporate', title: 'I own an incorporated company', desc: 'I need a T2 Corporate Tax return and GIFI financials.' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleQuizChoice(item.id)}
                      className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-sky-500 hover:bg-sky-50/50 transition-all cursor-pointer"
                    >
                      <span className="font-bold text-sm text-slate-900 block">{item.title}</span>
                      <span className="text-xs text-slate-500">{item.desc}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-6 text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                    {quizResult}
                  </p>
                  <a
                    href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20a%20quote%20for%20my%20tax%20return."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-whatsapp text-xs py-3 px-6 w-full justify-center"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Get Started on WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
