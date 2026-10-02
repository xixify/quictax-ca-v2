import React from 'react';
import { Award, Star, ShieldCheck, ThumbsUp, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AwardsRecognitionSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#091527] text-white border-b border-slate-800">
      <div className="container-custom">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold text-amber-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>INDUSTRY ACCREDITATION & AWARDS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
            Recognized by Tax Professionals & Industry Experts
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our commitment to innovation, value, and an exceptional customer experience has earned the recognition of Canadian tax professionals and accounting experts nationwide.
          </p>
        </div>

        {/* Featured Award Callout Block */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0e223d] to-slate-900 border border-slate-700/80 rounded-xl p-8 mb-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-amber-400 text-slate-950 text-[11px] font-extrabold px-3 py-1 rounded uppercase tracking-wider">
                CPA Practice Advisor Readers' Choice Awards
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                Ranked #2 in Professional Tax Software
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                QuicTax.ca earned over 22.5% of the total vote in the CPA Practice Advisor Readers' Choice Awards for Federal & Provincial Tax Preparation software, outranking traditional legacy desktop software solutions.
              </p>

              <div className="flex items-center gap-6 text-xs text-slate-300 pt-2">
                <span className="flex items-center gap-1.5 font-bold text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" /> Also Ranked Top 3 in 2024, 2025, and 2026
                </span>
                <span className="text-slate-600">|</span>
                <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-sky-400" /> 100% CRA NETFILE Certified
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-[#0b1b30] border-2 border-amber-400/40 p-6 rounded-xl text-center space-y-3 shadow-xl max-w-xs w-full">
                <div className="w-14 h-14 mx-auto rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-sm font-black text-white font-heading">READERS' CHOICE AWARDS</div>
                <div className="text-2xl font-black text-amber-400 font-mono">RANKED #2</div>
                <div className="text-[11px] text-slate-400">Federal & Provincial Tax Preparation</div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Category Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-lg space-y-2 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 mx-auto rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div className="text-sm font-bold text-white">Best Customer Support</div>
            <div className="text-[11px] text-slate-400">&lt; 15 Min Average Hold Time</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-lg space-y-2 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 mx-auto rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-sm font-bold text-white">Best Overall Value</div>
            <div className="text-[11px] text-slate-400">Flat Annual Rates with $0 Add-ons</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-lg space-y-2 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 mx-auto rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div className="text-sm font-bold text-white">Top Rated Functionality</div>
            <div className="text-[11px] text-slate-400">My AI Assistant & EFILE Sync</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-lg space-y-2 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 mx-auto rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div className="text-sm font-bold text-white">BBB Accredited A+</div>
            <div className="text-[11px] text-slate-400">Rated 4.85/5 from 355+ Reviews</div>
          </div>

        </div>

      </div>
    </section>
  );
};
