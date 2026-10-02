import React, { useState } from 'react';
import { X, Play, Sparkles, CheckCircle2, MessageSquare, Phone, Calendar, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';

interface DemoCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoCenterModal: React.FC<DemoCenterModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'walkthrough' | 'aiTest' | 'meeting'>('walkthrough');
  const [sampleSlipType, setSampleSlipType] = useState('T4 Employment');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  if (!isOpen) return null;

  const handleRunAiScan = () => {
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        slipName: sampleSlipType,
        box14_employmentIncome: '$78,450.00',
        box22_taxDeducted: '$14,210.00',
        box16_cpp: '$3,754.45',
        box18_ei: '$1,002.45',
        confidenceScore: '99.8%',
        status: 'Ready for CRA T1 NetFile Import'
      });
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#0b1c33] border border-slate-700/80 rounded-2xl shadow-2xl max-w-3xl w-full text-white overflow-hidden relative my-8">
        
        {/* Header */}
        <div className="bg-[#071324] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold">
              <Play className="w-5 h-5 fill-sky-400" />
            </div>
            <div>
              <h3 className="text-lg font-black font-heading text-white">QuicTax.ca Interactive Demo Center</h3>
              <p className="text-xs text-slate-400">Test drive Canada's premier cloud tax software platform</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-[#09172a] border-b border-slate-800 px-6 pt-3 flex gap-2">
          <button
            onClick={() => setActiveTab('walkthrough')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-lg transition-all cursor-pointer border-b-2 ${
              activeTab === 'walkthrough'
                ? 'bg-[#0b1c33] text-sky-400 border-sky-400'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 fill-current" /> Video Walkthrough Tour
            </span>
          </button>

          <button
            onClick={() => setActiveTab('aiTest')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-lg transition-all cursor-pointer border-b-2 ${
              activeTab === 'aiTest'
                ? 'bg-[#0b1c33] text-sky-400 border-sky-400'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Test My AI Assistant OCR
            </span>
          </button>

          <button
            onClick={() => setActiveTab('meeting')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-lg transition-all cursor-pointer border-b-2 ${
              activeTab === 'meeting'
                ? 'bg-[#0b1c33] text-sky-400 border-sky-400'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" /> Book 1-on-1 Live Demo
            </span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 space-y-6">
          
          {/* Tab 1: Walkthrough Video Preview */}
          {activeTab === 'walkthrough' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="aspect-video bg-slate-950 border border-slate-800 rounded-xl relative overflow-hidden flex flex-col items-center justify-center text-center p-6 group">
                <div className="w-16 h-16 rounded-full bg-sky-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <h4 className="text-base font-bold text-white mt-4 font-heading">
                  QuicTax.ca Product Overview (3 Min Guided Tour)
                </h4>
                <p className="text-xs text-slate-400 max-w-md mt-1">
                  See how T1, T2125, T2 returns, CRA NetFile sync, and My AI Tax Assistant operate inside the cloud workspace.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[11px] text-emerald-400 font-bold bg-emerald-950/60 px-3 py-1 rounded border border-emerald-800/60">
                  <ShieldCheck className="w-4 h-4" /> CRA NETFILE Certified 2026 Workspace
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs text-center">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <strong className="text-white block font-bold">1. Import Return</strong>
                  <span className="text-slate-400 text-[11px]">Prior year conversion or AI OCR</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <strong className="text-white block font-bold">2. Audit Scan</strong>
                  <span className="text-slate-400 text-[11px]">Deduction check & error fix</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <strong className="text-white block font-bold">3. CRA EFILE</strong>
                  <span className="text-slate-400 text-[11px]">Instant submission receipt</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Test My AI Assistant */}
          {activeTab === 'aiTest' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" /> Interactive AI OCR Slip Extraction Test
                  </span>
                  <span className="text-[10px] bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded font-bold border border-amber-400/20">
                    Live Demo
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-xs text-slate-300 font-bold">Select Slip Type:</label>
                  <select 
                    value={sampleSlipType}
                    onChange={(e) => setSampleSlipType(e.target.value)}
                    className="bg-slate-950 border border-slate-700 text-xs font-bold text-sky-400 rounded px-3 py-1.5 outline-none cursor-pointer"
                  >
                    <option value="T4 Employment Income">T4 Employment Statement</option>
                    <option value="T5 Investment Income">T5 Statement of Investment Income</option>
                    <option value="T3 Trust Income">T3 Statement of Trust Income</option>
                    <option value="T2125 Business Receipt">T2125 Business Expense Receipt</option>
                  </select>

                  <button
                    onClick={handleRunAiScan}
                    className="btn-cta-blue text-xs py-1.5 px-4 ml-auto"
                  >
                    {isScanning ? 'Scanning...' : 'Test OCR Extraction'}
                  </button>
                </div>
              </div>

              {isScanning && (
                <div className="py-8 text-center text-sky-400 animate-pulse text-xs font-mono bg-slate-950 rounded-xl border border-slate-800">
                  ⚡ My AI Assistant parsing document text, matching CRA Box IDs, and performing SIN checksum...
                </div>
              )}

              {scanResult && !isScanning && (
                <div className="bg-slate-950 border border-emerald-800/60 p-4 rounded-xl space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-white">Document Parsed: {scanResult.slipName}</span>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                      OCR Confidence: {scanResult.confidenceScore}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                    <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">Box 14 Income</span>
                      <span className="text-emerald-400 font-bold">{scanResult.box14_employmentIncome}</span>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">Box 22 Tax Deducted</span>
                      <span className="text-sky-400 font-bold">{scanResult.box22_taxDeducted}</span>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">Box 16 CPP</span>
                      <span className="text-slate-200 font-bold">{scanResult.box16_cpp}</span>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">Box 18 EI</span>
                      <span className="text-slate-200 font-bold">{scanResult.box18_ei}</span>
                    </div>
                  </div>

                  <div className="text-xs text-emerald-300 font-sans font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{scanResult.status}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Book 1-on-1 Demo Meeting */}
          {activeTab === 'meeting' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <UserCheck className="w-6 h-6" />
                </div>

                <h4 className="text-base font-bold text-white font-heading">
                  Schedule a 1-on-1 Personalized Walkthrough
                </h4>

                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Speak directly with a Canadian tax onboarding specialist. We'll show you how to convert your prior year returns, set up your preparer team, and file T1/T2 returns effortlessly.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20schedule%20a%201-on-1%20live%20demo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-blue text-xs py-3 px-6 w-full sm:w-auto justify-center"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Book via WhatsApp Direct</span>
                  </a>

                  <a
                    href="tel:+12895275237"
                    className="btn-outline-light text-xs py-3 px-6 w-full sm:w-auto justify-center"
                  >
                    <Phone className="w-4 h-4 text-sky-400" />
                    <span>Call Hotline: (289) 527-5237</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#071324] px-6 py-4 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400">Questions? Contact support at (289) 527-5237</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-lg transition-colors cursor-pointer border border-slate-700"
          >
            Close Demo
          </button>
        </div>

      </div>
    </div>
  );
};
