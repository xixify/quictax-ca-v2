import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageSquare, Phone } from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'General' | 'Filing & Documents' | 'Pricing & Turnaround';
  q: string;
  a: string;
}

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('q1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const faqs: FaqItem[] = [
    {
      id: 'q1',
      category: 'General',
      q: "How does QuicTax work?",
      a: "It's simple: reach out on WhatsApp, share your tax slips and document photos securely, and our Canadian tax specialists handle the rest. Most returns are filed via CRA NETFILE within 48 hours. We'll send you a full summary copy once submitted."
    },
    {
      id: 'q2',
      category: 'General',
      q: "Who can use QuicTax?",
      a: "Anyone! We serve individuals, families, freelancers, gig workers (Uber, DoorDash), self-employed professionals, small businesses, and incorporated corporations across Mississauga, the GTA, and all 10 provinces & 3 territories in Canada."
    },
    {
      id: 'q3',
      category: 'General',
      q: "How do I get started?",
      a: "Just tap the WhatsApp button on our site and send us a message. We'll respond quickly (usually within a few hours on business days) and walk you through exactly what slips we need from you."
    },
    {
      id: 'q4',
      category: 'Filing & Documents',
      q: "What documents do I need to provide?",
      a: "It depends on your situation. For personal returns: T4 slips, RRSP receipts, medical receipts, or rental statements. For self-employed/business: T2125 details, expense logs, and prior year returns. We give you a personalized checklist after your first message!"
    },
    {
      id: 'q5',
      category: 'Filing & Documents',
      q: "How do I send my documents securely?",
      a: "We guide you through our secure document sharing process over WhatsApp or encrypted cloud portal. Your Social Insurance Number (SIN) and personal data are handled with bank-level encryption and strict confidentiality."
    },
    {
      id: 'q6',
      category: 'Filing & Documents',
      q: "Can you file returns for previous years?",
      a: "Yes. We specialize in prior-year filings and CRA amendments (T1-ADJ). Whether you're 1 year behind or 5 years behind, we can get you caught up and back in good standing with the CRA."
    },
    {
      id: 'q7',
      category: 'Pricing & Turnaround',
      q: "How much does it cost?",
      a: "Pricing depends on the complexity of your return. Contact us on WhatsApp for a quick, no-obligation quote. We are 100% transparent — lowest prices guaranteed with zero hidden fees, ever."
    },
    {
      id: 'q8',
      category: 'Pricing & Turnaround',
      q: "How fast will my return be filed?",
      a: "Most personal (T1) and freelancer returns are completed and submitted within 48 hours of receiving all required documents. Complex corporate (T2) returns may take slightly longer, but we'll always give you a clear timeline upfront."
    },
    {
      id: 'q9',
      category: 'Pricing & Turnaround',
      q: "Do you offer refunds or guarantees if I'm not satisfied?",
      a: "We stand 100% behind our work. If there's an calculation error on our end, we'll fix it immediately at no additional cost and cover any resulting penalties. We make it right."
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900">
            Common Questions, Clear Answers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Everything you need to know before getting started with QuicTax.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-3xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {['All', 'General', 'Filing & Documents', 'Pricing & Turnaround'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap border-none cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordions List */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left font-bold font-heading text-slate-900 text-base flex items-center justify-between gap-4 bg-transparent border-none cursor-pointer hover:bg-slate-50/80"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-sky-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-[#0A1128] rounded-2xl p-8 max-w-3xl mx-auto text-center text-white shadow-xl border border-slate-800">
          <h3 className="text-2xl font-bold font-heading text-white mb-2">Still Have Questions?</h3>
          <p className="text-xs text-slate-300 mb-6">We're just a WhatsApp message away. Ask us anything about your tax return.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I%20have%20a%20question%20about%20tax%20filing."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-whatsapp text-xs py-3 px-6 w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href="tel:+12895275237"
              className="btn-outline-light text-xs py-3 px-6 w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call (289) 527-5237</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
