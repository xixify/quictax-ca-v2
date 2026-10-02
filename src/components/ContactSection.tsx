import React, { useState } from 'react';
import { MessageSquare, Phone, MapPin, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [taxType, setTaxType] = useState('T1 Personal Tax');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi QuicTax team! My name is ${name || 'a new client'}.
- Phone: ${phoneInput || 'Not provided'}
- Tax Type: ${taxType}
- Message: ${notes || 'I would like a quote for filing my taxes.'}`;

    window.open(`https://wa.me/12895275237?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900">
            Let's Get Your Taxes Sorted
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Reach out on WhatsApp or send a message below and we'll get back to you fast — usually within 2 to 4 hours on business days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct WhatsApp Card & Info Tiles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Callout Card */}
            <div className="bg-gradient-to-br from-slate-900 to-[#0A1128] text-white p-7 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <MessageSquare className="w-6 h-6 fill-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">Chat on WhatsApp</h3>
                  <p className="text-xs text-slate-400">The fastest way to reach our team</p>
                </div>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                Send us a message and we'll respond quickly with next steps, a personalized document checklist, and a transparent upfront quote.
              </p>

              <a
                href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20get%20started%20with%20my%20tax%20filing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp w-full py-3.5 text-xs justify-center shadow-emerald-500/30 mb-4"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Open WhatsApp Chat</span>
              </a>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" /> (289) 527-5237
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <span className="pulse-green"></span> Responds in 2–4 hrs
                </span>
              </div>
            </div>

            {/* Location & Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <Clock className="w-5 h-5 text-sky-600 mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Response Time</span>
                <span className="text-xs font-bold text-slate-900 mt-0.5 block">2–4 Hours</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Filing Turnaround</span>
                <span className="text-xs font-bold text-slate-900 mt-0.5 block">48 Hours</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <MapPin className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Service Area</span>
                <span className="text-xs font-bold text-slate-900 mt-0.5 block">Canada-Wide</span>
              </div>
            </div>

            {/* Location Note */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
              📍 <strong>Location Note:</strong> We are tax specialists based out of Mississauga, ON, serving the Greater Toronto Area and clients across Canada. By operating fully online, we pass overhead savings directly to you with the lowest prices guaranteed.
            </div>

          </div>

          {/* Right Column: Free Quote Request Form */}
          <div className="lg:col-span-7 bg-slate-50 p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-black font-heading text-slate-900 mb-2">
              Send a Direct Quote Request
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out this quick form — no commitment required. We will prepare your custom quote and contact you immediately.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone Number (WhatsApp Preferred)
                </label>
                <input
                  type="tel"
                  placeholder="(416) 000-0000"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Type of Tax Return Needed
                </label>
                <select
                  value={taxType}
                  onChange={(e) => setTaxType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:border-sky-500 cursor-pointer"
                >
                  <option value="T1 Personal Tax">Personal Income Tax (T1)</option>
                  <option value="Freelancer / Self-Employed">Freelancer / Self-Employed (Uber/Contractor)</option>
                  <option value="Small Business Filing">Small Business Filing (Sole Proprietorship)</option>
                  <option value="T2 Corporate Return">T2 Corporate Tax Return (Incorporated)</option>
                  <option value="Prior Year Catch-Up">Prior Year Catch-Up / CRA Amendment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Tell Us About Your Tax Situation (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. I have 2 T4 slips, RRSP contributions, and home office expenses..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:border-sky-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-cta-orange w-full py-4 text-xs font-bold justify-center shadow-orange"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Get Instant Quote on WhatsApp</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1 mt-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Free & Confidential • Zero Spam Guarantee</span>
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
