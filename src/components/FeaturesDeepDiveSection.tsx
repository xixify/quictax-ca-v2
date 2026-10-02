import React, { useState } from 'react';
import { Sparkles, Zap, ShieldCheck, DollarSign, HelpCircle, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FeaturesDeepDiveSectionProps {
  onOpenDemo: () => void;
}

export const FeaturesDeepDiveSection: React.FC<FeaturesDeepDiveSectionProps> = ({ onOpenDemo }) => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      id: 'ai',
      icon: Sparkles,
      iconColor: 'text-amber-500',
      badge: 'AI & Automation',
      title: 'My AI Tax Assistant',
      desc: 'Upload T4s, T5s, T3s, W-2s, and receipts. My AI Assistant identifies the forms, extracts data, and prepares it for import into CRA schedules for review.',
      bullets: [
        'Automated OCR slip reader for all standard CRA slips',
        'Extracts income, tax deducted, CPP, EI, and tuition values',
        'Identifies missing deductions and flags potential tax errors',
        'Reduces tax prep time by up to 80%'
      ]
    },
    {
      id: 'netfile',
      icon: Zap,
      iconColor: 'text-sky-500',
      badge: 'CRA EFILE Direct',
      title: 'Real-Time CRA NETFILE & EFILE Sync',
      desc: 'Connect directly with Canada Revenue Agency web services for instant electronic transmission with immediate confirmation receipt codes.',
      bullets: [
        'Direct web API connection to CRA NETFILE and EFILE',
        'Instant electronic submission confirmation code within seconds',
        'Built-in error checking prevents CRA rejections',
        'Supports T1 Personal, T2 Corporate, and T2125 Business returns'
      ]
    },
    {
      id: 'portal',
      icon: ShieldCheck,
      iconColor: 'text-emerald-500',
      badge: 'Client Portal',
      title: 'MyTAXPortal & Remote E-Signatures',
      desc: 'Give clients a secure digital portal to upload tax documents from their smartphone or computer, review draft returns, and provide remote digital signatures on Form T183.',
      bullets: [
        'Secure 256-bit encrypted document locker',
        'Remote Form T183 digital signature collection',
        'Real-time filing status notifications via SMS & email',
        'Mobile-friendly interface for seamless client access'
      ]
    },
    {
      id: 'refund',
      icon: DollarSign,
      iconColor: 'text-emerald-600',
      badge: 'Bank Products',
      title: 'Integrated Bank Refund Transfers',
      desc: 'Allow taxpayers to pay filing fees directly out of their CRA refund. Zero out-of-pocket payment required at time of filing.',
      bullets: [
        '4 integrated Canadian bank product partners',
        'Filing fees automatically deducted upon refund release',
        'Prior year and current year refund transfer options',
        'Fast direct bank deposit within 8-10 business days'
      ]
    },
    {
      id: 'interview',
      icon: HelpCircle,
      iconColor: 'text-purple-500',
      badge: 'Workflow Mode',
      title: 'Guided Interview Mode',
      desc: 'Comprehensive step-by-step interview wizard guides tax preparers through every schedule and deduction opportunity without missing key items.',
      bullets: [
        'Intelligent question-and-answer return builder',
        'Customizable diagnostic checklists for all taxpayer profiles',
        'Contextual tax law help and CRA guide links built-in',
        'Ideal for onboarding new tax staff or handling complex returns'
      ]
    },
    {
      id: 'security',
      icon: Lock,
      iconColor: 'text-sky-600',
      badge: 'Data Protection',
      title: 'Enterprise Data Security & Audit Defense',
      desc: 'Protect client data with bank-level encryption, multi-factor authentication, and automated audit defense log tracking.',
      bullets: [
        '256-bit SSL/TLS encryption for all data in transit and at rest',
        'SOC-2 Type II compliant cloud data center infrastructure',
        'Complete CRA audit trail logger & letter response generator',
        'Automated daily cloud backups with point-in-time recovery'
      ]
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="badge-chip">BUILT-IN PLATFORM POWER</span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#0c1e36]">
            Powerful Features Built into QuicTax.ca
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to streamline tax season is built right into the platform — no third-party plugins or extra subscriptions required.
          </p>
        </div>

        {/* Features Tabs & Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Feature List Column */}
          <div className="lg:col-span-5 space-y-2">
            {features.map((feat, index) => {
              const IconComp = feat.icon;
              const isActive = activeFeature === index;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border-sky-500 shadow-md border-l-4 border-l-sky-500'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-slate-100 ${feat.iconColor}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase block">{feat.badge}</span>
                        <h4 className="text-sm font-bold text-[#0c1e36] font-heading">{feat.title}</h4>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-sky-600 translate-x-1' : 'text-slate-400'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feature Detail Showcase Box */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-8 shadow-lg space-y-6">
            {(() => {
              const feat = features[activeFeature];
              const IconComp = feat.icon;
              return (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg bg-sky-50 ${feat.iconColor}`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-sky-600 uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded">
                          {feat.badge}
                        </span>
                        <h3 className="text-2xl font-black text-[#0c1e36] font-heading mt-1">{feat.title}</h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.desc}
                  </p>

                  <div className="space-y-3 bg-[#f8fafc] border border-slate-200 p-5 rounded-lg">
                    <h4 className="text-xs font-bold text-[#0c1e36] uppercase tracking-wider">Key Capability Highlights:</h4>
                    <ul className="space-y-2 text-xs font-medium text-slate-700">
                      {feat.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Included in all QuicTax.ca subscriptions</span>
                    <button
                      onClick={onOpenDemo}
                      className="btn-cta-blue text-xs py-2.5 px-5"
                    >
                      <span>Try {feat.title} Free</span>
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
};
