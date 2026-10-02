import React, { useState, useMemo } from 'react';
import { ARTICLES_DATA, STATIC_GUIDES, Article } from '../data/articlesData';
import { ArticleModal } from './ArticleModal';
import { Search, BookOpen, Clock, Calendar, ArrowRight, Filter, MessageSquare } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalArticle, setActiveModalArticle] = useState<Article | null>(null);

  const categories = ['All', 'Deductions', 'Self-Employed', 'Corporate', 'Filing Tips', 'HST/GST', 'CRA Updates'];

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="tax-articles" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            Canadian Tax Knowledge Hub
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900">
            Tax Articles & Advice for Canadians
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Expert insights on Canadian tax filing, deductions, credits, CRA updates, and strategies to help you pay less and file smarter — written by our tax preparation specialists.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tax articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border-none cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Articles Cards Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer"
                onClick={() => setActiveModalArticle(article)}
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={article.featuredImage} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white font-bold text-[11px] px-3 py-1 rounded-full border border-white/20">
                      {article.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sky-500" /> {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" /> {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-heading text-slate-900 leading-snug mb-2 group-hover:text-sky-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No articles found</h3>
            <p className="text-xs text-slate-500 mt-1">Try adjusting your search terms or selecting a different category.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs cursor-pointer border-none"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Older Static Guide Cards Section */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="mb-8">
            <h3 className="text-2xl font-black font-heading text-slate-900">
              Essential Canadian Tax Guides
            </h3>
            <p className="text-xs text-slate-500 mt-1">Quick-reference tax guides for Canadian taxpayers and small business owners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STATIC_GUIDES.map((guide) => (
              <div 
                key={guide.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="badge-chip font-bold text-[10px]">{guide.category}</span>
                    <span>{guide.readTime}</span>
                  </div>

                  <h4 className="text-base font-bold font-heading text-slate-900 mb-2">
                    {guide.title}
                  </h4>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {guide.excerpt}
                  </p>
                </div>

                <a
                  href={`https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20ask%20about%20the%20guide:%20${encodeURIComponent(guide.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 text-decoration-none pt-3 border-t border-slate-100"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ask us about this on WhatsApp →</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Full Article Modal Reader Overlay */}
        <ArticleModal
          article={activeModalArticle}
          onClose={() => setActiveModalArticle(null)}
        />

      </div>
    </section>
  );
};
