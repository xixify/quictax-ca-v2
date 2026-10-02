import React from 'react';
import { Phone, Clock, ShieldCheck, MapPin, Award, UserCheck } from 'lucide-react';

interface TopAnnouncementBarProps {
  onOpenDemo: () => void;
}

export const TopAnnouncementBar: React.FC<TopAnnouncementBarProps> = ({ onOpenDemo }) => {
  return (
    <div className="bg-[#071120] text-slate-300 border-b border-slate-800 text-xs py-2">
      <div className="container-custom flex flex-col lg:flex-row justify-between items-center gap-2">
        
        {/* Left Announcements & Accreditations */}
        <div className="flex items-center gap-3 flex-wrap justify-center lg:justify-start">
          <div className="flex items-center gap-1.5 bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Ranked #2 — CPA Practice Advisor Tax Prep Awards 2026</span>
          </div>

          <span className="hidden sm:inline text-slate-700">|</span>

          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <span className="pulse-green"></span> Tax Specialists Online Now
          </span>

          <span className="hidden md:inline text-slate-700">|</span>

          <span className="hidden md:flex items-center gap-1 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-sky-400" /> Avg Response: &lt; 15 mins
          </span>

          <span className="hidden lg:inline text-slate-700">|</span>

          <span className="hidden lg:flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> CRA NETFILE & EFILE Certified
          </span>
        </div>

        {/* Right Phone & Quick Login / Demo Link */}
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden xl:flex items-center gap-1 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400" /> Mississauga, ON (Serving All of Canada Remote)
          </span>

          <a 
            href="tel:+12895275237" 
            className="flex items-center gap-1 text-slate-200 hover:text-sky-400 font-bold transition-colors text-decoration-none"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" /> (289) 527-5237
          </a>

          <span className="text-slate-700">|</span>

          <button
            onClick={onOpenDemo}
            className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-bold bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 px-2.5 py-0.5 rounded transition-all cursor-pointer"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Log In / Demo</span>
          </button>
        </div>

      </div>
    </div>
  );
};
