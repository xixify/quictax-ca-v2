import React, { useState } from 'react';
import { CRA_CARDS, CRA_FACTS, FEDERAL_TAX_BRACKETS_2026 } from '../data/craData';
import { Calendar, Calculator, UserCheck, ShieldAlert, Gift, FileEdit, MessageSquare, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export const CraHubSection: React.FC = () => {
  const [factIndex, setFactIndex] = useState(0);
  const [calcIncome, setCalcIncome] = useState<number>(65000);

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar': return <Calendar className="w-6 h-6 text-sky-600" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-emerald-600" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-amber-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-red-600" />;
      case 'Gift': return <Gift className="w-6 h-6 text-indigo-600" />;
      case 'FileEdit': return <FileEdit className="w-6 h-6 text-teal-600" />;
      default: return <Calendar className="w-6 h-6 text-sky-600" />;
    }
  };

  const nextFact = () => {
    setFactIndex((prev) => (prev + 1) % CRA_FACTS.length);
  };

  const prevFact = () => {
    setFactIndex((prev) => (prev - 1 + CRA_FACTS.length) % CRA_FACTS.length);
  };

  // Rough estimation of federal tax for visualization
  const calculateFederalTax = (income: number) => {
    let tax = 0;
    if (income <= 57375) {
      tax = income * 0.15;
    } else if (income <= 114750) {
      tax = 57375 * 0.15 + (income - 57375) * 0.205;
    } else if (income <= 177882) {
      tax = 57375 * 0.15 + (114750 - 57375) * 0.205 + (income - 114750) * 0.26;
    } else {
      tax = 57375 * 0.15 + (114750 - 57375) * 0.205 + (177882 - 114750) * 0.26 + (income - 177882) * 0.29;
    }
    return Math.max(0, tax);
  };

  const estFedTax = calculateFederalTax(calcIncome);
  const effectiveRate = calcIncome > 0 ? ((estFedTax / calcIncome) * 100).toFixed(1) : "0.0";

  return (
    <section id="cra-hub" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-cyan-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-3">
            Canada Revenue Agency Resource
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white">
            Know the CRA. File with Confidence.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            The Canada Revenue Agency administers Canada's tax laws for the federal government. Here's what every Canadian taxpayer needs to know — and how QuicTax keeps you fully compliant.
          </p>
        </div>

        {/* Dynamic Tax Bracket Explorer Widget */}
        <div className="bg-slate-800/90 border border-slate-700 p-6 sm:p-8 rounded-2xl mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-700">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block font-heading">
                Interactive 2025/2026 Federal Bracket Visualizer
              </span>
              <h3 className="text-2xl font-bold font-heading text-white mt-1">
                Canadian Federal Tax Brackets
              </h3>
            </div>

            {/* Income Slider Control */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 min-w-[280px]">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                <span>Test Annual Income:</span>
                <span className="text-cyan-400 font-bold font-heading text-sm">${calcIncome.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="20000"
                max="260000"
                step="5000"
                value={calcIncome}
                onChange={(e) => setCalcIncome(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                <span>Est. Fed Tax: ~${Math.round(estFedTax).toLocaleString()}</span>
                <span>Effective Rate: ~{effectiveRate}%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-6">
            {FEDERAL_TAX_BRACKETS_2026.map((bracket, i) => {
              const isCurrent = calcIncome >= bracket.minIncome && calcIncome <= bracket.maxIncome;
              return (
                <div
                  key={i}
                  className={`p-4 rounded-xl border transition-all text-left ${
                    isCurrent
                      ? 'bg-gradient-to-b from-sky-600/30 to-cyan-600/20 border-cyan-400 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold text-cyan-400 block mb-1">Bracket {i + 1}</span>
                  <span className="text-xl font-black font-heading text-white block">{bracket.rate}</span>
                  <span className="text-[11px] text-slate-400 block mt-1">{bracket.range}</span>
                  {isCurrent && (
                    <span className="mt-2 inline-block bg-cyan-500 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-full">
                      Your Marginal Rate
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 6 CRA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {CRA_CARDS.map((card) => (
            <div 
              key={card.id}
              className="bg-slate-800/70 rounded-2xl p-7 border border-slate-700/70 hover:border-slate-600 transition-all hover:-translate-y-1 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                    {getCardIcon(card.icon)}
                  </div>
                  <span className="badge-chip-dark text-[11px] py-1 px-3">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  {card.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {card.summary}
                </p>

                <ul className="space-y-2 text-xs text-slate-300 pt-3 border-t border-slate-700/60">
                  {card.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Rotating CRA Facts Carousel */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block font-heading">
                DID YOU KNOW? (CRA TAX FACTS)
              </span>
              <p className="text-sm font-semibold text-slate-100 mt-1 max-w-2xl leading-relaxed">
                "{CRA_FACTS[factIndex]}"
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prevFact}
              className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextFact}
              className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-14 text-center">
          <h3 className="text-2xl font-bold font-heading text-white mb-2">
            Let QuicTax handle the CRA so you don't have to.
          </h3>
          <p className="text-xs text-slate-300 mb-6 max-w-xl mx-auto">
            We stay current on every CRA rule change so your return is always accurate, compliant, and optimized for the lowest possible tax bill.
          </p>
          <a
            href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20a%20tax%20specialist%20to%20handle%20my%20CRA%20filing."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-whatsapp text-xs py-3.5 px-7"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat With Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
