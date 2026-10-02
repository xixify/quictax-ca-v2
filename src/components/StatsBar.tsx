import React from 'react';
import { Users, ThumbsUp, Clock, Lock, DollarSign } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Clients Served",
      subtext: "Across Ontario & Canada",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50"
    },
    {
      icon: ThumbsUp,
      value: "98%",
      label: "Satisfaction Rate",
      subtext: "Verified client reviews",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Clock,
      value: "48hr",
      label: "Avg Turnaround",
      subtext: "Fast NETFILE submission",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      icon: Lock,
      value: "100%",
      label: "Secure & Confidential",
      subtext: "Bank-level encryption",
      color: "text-sky-600",
      bgColor: "bg-sky-50"
    },
    {
      icon: DollarSign,
      value: "$0",
      label: "Hidden Fees",
      subtext: "Transparent upfront pricing",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10 relative z-20 shadow-sm">
      <div className="container-custom">
        <div className="text-center mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 font-heading">
            TRUSTED BY CLIENTS ACROSS CANADA — AT PRICES THAT BEAT TRADITIONAL FIRMS
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 font-heading leading-tight">
                  {item.value}
                </span>
                <span className="text-xs font-bold text-slate-800 mt-1">{item.label}</span>
                <span className="text-[11px] text-slate-500 mt-0.5">{item.subtext}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
