import React, { useState } from 'react';
import { 
  MessageSquare, Calculator, ShieldCheck, Zap, DollarSign, 
  CheckCircle2, ArrowRight, Award, Star, Play, Sparkles, 
  FileText, Users, Lock, ChevronRight, UploadCloud, Check
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenCalculator }) => {
  const [activePreviewTab, setActivePreviewTab] = useState<'ai' | 'netfile' | 'refund' | 'portal'>('ai');
  const [isSimulatingOcr, setIsSimulatingOcr] = useState(false);
  const [ocrCompleted, setOcrCompleted] = useState(true);

  const handleSimulateOcr = () => {
    setIsSimulatingOcr(true);
    setOcrCompleted(false);
    setTimeout(() => {
      setIsSimulatingOcr(false);
      setOcrCompleted(true);
    }, 1200);
  };

  return (
    <section id="hero" className="bg-[#0a1628] text-white py-14 lg:py-20 overflow-hidden relative border-b border-slate-800">
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Award Badge Pill */}
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-3.5 py-1 text-xs font-bold text-amber-300">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>CPA PRACTICE ADVISOR READERS' CHOICE #2 AWARD WINNER</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight text-white">
              Cloud-Based Professional Tax Software & Filing for Canadians
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Unlimited returns, all provinces, CRA direct e-filing, <strong className="text-sky-300">My AI Tax Assistant</strong>, client portal, and dedicated support are included starting at clear flat rates with <strong className="text-emerald-400">$0 hidden fees</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenDemo}
                className="btn-cta-blue text-sm py-3.5 px-7 w-full sm:w-auto justify-center shadow-lg shadow-sky-500/25"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>TRY IT FOR FREE</span>
              </button>

              <a
                href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20schedule%20a%20demo%20or%20start%20filing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light text-sm py-3.5 px-6 w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-4 h-4 text-sky-400" />
                <span>SCHEDULE A DEMO</span>
              </a>
            </div>

            {/* Accreditations & Ratings Banner (Matching MyTAXPrepOffice) */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-2 gap-3 text-left">
              <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Ranked #2 Tax Software</div>
                  <div className="text-[11px] text-slate-400">Federal/Provincial Income Tax Prep</div>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Rated 4.8 out of 5</div>
                  <div className="text-[11px] text-slate-400">500+ Verified Canadian Reviews</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Product Showcase Container */}
          <div className="lg:col-span-6 relative">
            <div className="bg-[#0e213b] border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden relative">
              
              {/* Product Window Top Bar */}
              <div className="bg-[#081527] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-bold text-slate-300 font-mono">QuicTax.ca Enterprise Workspace v2.0</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold px-2 py-0.5 rounded">
                  <span className="pulse-green"></span>
                  <span>CRA NETFILE Live</span>
                </div>
              </div>

              {/* Tab Navigation Controls */}
              <div className="bg-[#0b1c33] border-b border-slate-800 px-3 pt-2 flex items-center gap-1 overflow-x-auto">
                <button
                  onClick={() => setActivePreviewTab('ai')}
                  className={`px-3 py-2 text-xs font-bold rounded-t-md transition-all border-b-2 cursor-pointer ${
                    activePreviewTab === 'ai'
                      ? 'bg-[#0e213b] text-sky-400 border-sky-400'
                      : 'text-slate-400 hover:text-slate-200 border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> My AI Assistant
                  </span>
                </button>

                <button
                  onClick={() => setActivePreviewTab('netfile')}
                  className={`px-3 py-2 text-xs font-bold rounded-t-md transition-all border-b-2 cursor-pointer ${
                    activePreviewTab === 'netfile'
                      ? 'bg-[#0e213b] text-sky-400 border-sky-400'
                      : 'text-slate-400 hover:text-slate-200 border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> CRA NETFILE Direct
                  </span>
                </button>

                <button
                  onClick={() => setActivePreviewTab('refund')}
                  className={`px-3 py-2 text-xs font-bold rounded-t-md transition-all border-b-2 cursor-pointer ${
                    activePreviewTab === 'refund'
                      ? 'bg-[#0e213b] text-sky-400 border-sky-400'
                      : 'text-slate-400 hover:text-slate-200 border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Refund Transfer
                  </span>
                </button>

                <button
                  onClick={() => setActivePreviewTab('portal')}
                  className={`px-3 py-2 text-xs font-bold rounded-t-md transition-all border-b-2 cursor-pointer ${
                    activePreviewTab === 'portal'
                      ? 'bg-[#0e213b] text-sky-400 border-sky-400'
                      : 'text-slate-400 hover:text-slate-200 border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-purple-400" /> Client Portal
                  </span>
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="p-5 min-h-[300px]">
                
                {/* AI Assistant Tab */}
                {activePreviewTab === 'ai' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="bg-sky-950/40 border border-sky-800/60 p-3.5 rounded-lg flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-sky-500/20 rounded-lg text-sky-400 shrink-0">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white">My AI Assistant — Auto Form Extraction</h4>
                          <p className="text-[11px] text-slate-300">Upload T4, T5, T3, W-2, or Medical receipts. AI parses slip values into CRA schedules in &lt; 3 seconds.</p>
                        </div>
                      </div>
                      <button 
                        onClick={handleSimulateOcr}
                        className="px-2.5 py-1 text-[10px] font-extrabold bg-sky-500 hover:bg-sky-400 text-white rounded transition-colors cursor-pointer shrink-0"
                      >
                        {isSimulatingOcr ? 'Extracting...' : 'Scan Sample Slip'}
                      </button>
                    </div>

                    <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 space-y-2.5 font-mono text-xs">
                      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-2 text-[11px]">
                        <span>Slip Field Name</span>
                        <span>Box #</span>
                        <span>Extracted Value</span>
                        <span>Status</span>
                      </div>

                      {isSimulatingOcr ? (
                        <div className="py-6 text-center text-sky-400 animate-pulse text-xs font-sans">
                          ⚡ AI Neural Engine scanning document coordinates & verifying SIN checksum...
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center justify-between text-slate-200 text-[11px]">
                            <span>Employment Income (T4)</span>
                            <span className="text-slate-400">Box 14</span>
                            <span className="font-bold text-emerald-400">$78,450.00</span>
                            <span className="text-emerald-400 flex items-center gap-1 font-sans text-[10px] font-bold"><Check className="w-3 h-3" /> Verified</span>
                          </div>

                          <div className="flex items-center justify-between text-slate-200 text-[11px]">
                            <span>Income Tax Deducted</span>
                            <span className="text-slate-400">Box 22</span>
                            <span className="font-bold text-sky-400">$14,210.00</span>
                            <span className="text-emerald-400 flex items-center gap-1 font-sans text-[10px] font-bold"><Check className="w-3 h-3" /> Verified</span>
                          </div>

                          <div className="flex items-center justify-between text-slate-200 text-[11px]">
                            <span>CPP Contributions</span>
                            <span className="text-slate-400">Box 16</span>
                            <span className="font-bold text-slate-200">$3,754.45</span>
                            <span className="text-emerald-400 flex items-center gap-1 font-sans text-[10px] font-bold"><Check className="w-3 h-3" /> Verified</span>
                          </div>

                          <div className="flex items-center justify-between text-slate-200 text-[11px]">
                            <span>EI Premiums Paid</span>
                            <span className="text-slate-400">Box 18</span>
                            <span className="font-bold text-slate-200">$1,002.45</span>
                            <span className="text-emerald-400 flex items-center gap-1 font-sans text-[10px] font-bold"><Check className="w-3 h-3" /> Verified</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-800/60 p-2.5 rounded-lg text-xs font-sans">
                      <span className="text-slate-200 font-bold">Estimated Federal/Provincial Refund:</span>
                      <span className="text-emerald-400 font-black text-sm">$3,184.50</span>
                    </div>
                  </div>
                )}

                {/* CRA NETFILE Tab */}
                {activePreviewTab === 'netfile' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Zap className="w-4 h-4 text-amber-400" /> CRA Direct Web API Sync
                        </span>
                        <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                          EFILE Ready
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                          <span className="text-slate-400 text-[10px] block">EFILE Number</span>
                          <span className="font-mono font-bold text-white">ON-84920-NET</span>
                        </div>
                        <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                          <span className="text-slate-400 text-[10px] block">Tax Year</span>
                          <span className="font-mono font-bold text-sky-400">2026 T1 Return</span>
                        </div>
                      </div>

                      <div className="bg-emerald-950/60 border border-emerald-800 p-3 rounded text-xs text-emerald-200 space-y-1">
                        <div className="font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> CRA NETFILE Submission Accepted
                        </div>
                        <p className="text-[11px] text-emerald-300/80 font-mono">Confirmation Code: CRA-T1-2026-984029148A</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Refund Transfer Tab */}
                {activePreviewTab === 'refund' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="bg-amber-950/30 border border-amber-800/50 p-3.5 rounded-lg">
                      <h4 className="text-xs font-bold text-white">Integrated Bank Refund Transfer</h4>
                      <p className="text-[11px] text-slate-300 mt-1">Clients pay filing fees directly out of their CRA refund. Zero upfront out-of-pocket payment required.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                        <span className="text-slate-400 text-[10px] block">Total CRA Refund</span>
                        <span className="font-bold text-emerald-400">$3,184.50</span>
                      </div>
                      <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                        <span className="text-slate-400 text-[10px] block">QuicTax Prep Fee</span>
                        <span className="font-bold text-amber-400">-$149.00</span>
                      </div>
                      <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                        <span className="text-slate-400 text-[10px] block">Net Bank Deposit</span>
                        <span className="font-bold text-sky-400">$3,035.50</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Client Portal Tab */}
                {activePreviewTab === 'portal' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="bg-purple-950/30 border border-purple-800/50 p-3.5 rounded-lg">
                      <h4 className="text-xs font-bold text-white">MyTAXPortal — Client Document Locker</h4>
                      <p className="text-[11px] text-slate-300 mt-1">Branded client portal with remote e-signatures, instant chat, and 256-bit encrypted document upload.</p>
                    </div>

                    <div className="bg-slate-950 p-3 rounded border border-slate-800 text-xs space-y-2">
                      <div className="flex items-center justify-between text-slate-300">
                        <span>T1 General Return 2026.pdf</span>
                        <span className="text-emerald-400 font-bold">E-Signed ✓</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span>CRA Form T183 Auth.pdf</span>
                        <span className="text-emerald-400 font-bold">E-Signed ✓</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Window Footer CTA */}
              <div className="bg-[#081527] px-4 py-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Want to see the full platform in action?</span>
                <button
                  onClick={onOpenDemo}
                  className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 border-none bg-transparent cursor-pointer"
                >
                  <span>Launch Live Demo Center</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
