import React from 'react';
import { Article } from '../data/articlesData';
import { X, Calendar, Clock, Tag, MessageSquare, Share2, CheckCircle2 } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl overflow-hidden relative border border-slate-200 animate-fade-in">
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="badge-chip font-bold text-xs">{article.category}</span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> {article.readTime}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer border-none transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Article Title & Meta */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading leading-tight mb-3">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium border-b border-slate-100 pb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-sky-500" /> Published {article.date}
              </span>
              <span>•</span>
              <span>By QuicTax Tax Specialists</span>
            </div>
          </div>

          {/* Featured Image */}
          {article.featuredImage && (
            <div className="rounded-xl overflow-hidden max-h-72 border border-slate-200 shadow-sm">
              <img 
                src={article.featuredImage} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Body Content */}
          <div className="prose-article">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return null; // Skip main h1 since we render it cleanly
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-xl font-bold font-heading text-slate-900 mt-6 mb-3 border-b border-slate-200 pb-2">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg font-bold font-heading text-slate-800 mt-4 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={idx} className="space-y-1.5 my-3 pl-4 text-sm text-slate-700">
                    {items.map((item, i) => (
                      <li key={i} className="list-disc">
                        {item.replace(/^- /, '').replace(/^\d+\. /, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Inline WhatsApp Consultation Callout */}
          <div className="mt-8 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 font-heading">Have a question about this article?</h4>
              <p className="text-xs text-slate-600 mt-1">Our Canadian tax specialists are available right now on WhatsApp to answer your specific scenario.</p>
            </div>

            <a
              href={`https://wa.me/12895275237?text=Hi%20QuicTax,%20I%20have%20a%20question%20regarding%20the%20article:%20${encodeURIComponent(article.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-whatsapp text-xs py-3 px-5 shrink-0 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between text-xs text-slate-500">
          <span>QuicTax Canadian Tax Knowledge Base</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg cursor-pointer border-none"
          >
            Close Reader
          </button>
        </div>

      </div>
    </div>
  );
};
