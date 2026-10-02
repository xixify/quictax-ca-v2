/* ==========================================================================
   QUICTAX.CA - MAIN JAVASCRIPT (STANDALONE / WORDPRESS READY)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTaxCalculator();
  initFaqAccordions();
  initBracketSlider();
  renderBlogGrid();
  renderSingleArticle();
  initBlogSearchAndFilter();
  initMobileMenu();
});

/* Mobile Menu Toggle */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
}

/* Interactive Tax Estimator Calculator */
function initTaxCalculator() {
  const personaBtns = document.querySelectorAll('.persona-btn');
  const t4Slider = document.getElementById('t4-slider');
  const t4CountLabel = document.getElementById('t4-count-label');
  const whatsappBtn = document.getElementById('calc-whatsapp-btn');
  
  if (!personaBtns.length) return;

  let currentType = 'personal';

  personaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      personaBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentType = btn.getAttribute('data-type') || 'personal';
      updateCalculatorOutput(currentType);
    });
  });

  if (t4Slider && t4CountLabel) {
    t4Slider.addEventListener('input', (e) => {
      t4CountLabel.textContent = `${e.target.value} Slip${e.target.value > 1 ? 's' : ''}`;
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const t4Val = t4Slider ? t4Slider.value : 1;
      const text = `Hi QuicTax! I used your Tax Estimator:
- Return Type: ${currentType.toUpperCase()}
- T4 Slips: ${t4Val}
Please give me an exact upfront quote!`;
      window.open(`https://wa.me/12895275237?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
}

function updateCalculatorOutput(type) {
  const titleEl = document.getElementById('calc-title');
  const turnEl = document.getElementById('calc-turnaround');
  const docsEl = document.getElementById('calc-docs-list');

  if (!titleEl) return;

  const data = {
    personal: {
      title: "Personal Tax Return (T1)",
      turnaround: "24–48 Hours",
      docs: ["T4 / T4A Income Slips", "RRSP Contribution Receipts", "Medical & Donation Slips", "Prior Year NOA"]
    },
    freelance: {
      title: "Freelancer & Self-Employed Filing",
      turnaround: "48 Hours",
      docs: ["Form T2125 Business Revenue", "Home Office & Internet Slips", "Vehicle Mileage Log", "HST Sales & Expense Summary"]
    },
    smb: {
      title: "Small Business Tax Package",
      turnaround: "48–72 Hours",
      docs: ["Income Statement / P&L", "Payroll & T4 Summaries", "Commercial Rent & Utilities", "HST Reconciliation"]
    },
    corporate: {
      title: "Corporate Tax Return (T2)",
      turnaround: "3–5 Business Days",
      docs: ["Trial Balance / Financials", "GIFI Income & Balance Sheet", "Prior Year T2 Return", "Shareholder Registry"]
    }
  };

  const selected = data[type] || data.personal;
  titleEl.textContent = selected.title;
  if (turnEl) turnEl.textContent = selected.turnaround;
  if (docsEl) {
    docsEl.innerHTML = selected.docs.map(doc => `<li><span style="color: #0284C7; font-weight: 900;">✓</span> ${doc}</li>`).join('');
  }
}

/* FAQ Accordion Toggle */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item-header');
  faqItems.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      const isOpen = parent.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('open'));
      if (!isOpen) {
        parent.classList.add('open');
      }
    });
  });
}

/* CRA Tax Bracket Slider */
function initBracketSlider() {
  const slider = document.getElementById('income-slider');
  const incomeLabel = document.getElementById('income-val');
  const taxEstLabel = document.getElementById('tax-est-val');

  if (!slider) return;

  slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    if (incomeLabel) incomeLabel.textContent = `$${val.toLocaleString()}`;
    
    // Rough estimation
    let est = 0;
    if (val <= 57375) est = val * 0.15;
    else if (val <= 114750) est = 57375 * 0.15 + (val - 57375) * 0.205;
    else est = 57375 * 0.15 + (114750 - 57375) * 0.205 + (val - 114750) * 0.26;

    if (taxEstLabel) taxEstLabel.textContent = `~$${Math.round(est).toLocaleString()}`;
  });
}

/* Render All 21 Blog Cards dynamically on tax-articles.html */
function renderBlogGrid() {
  const grid = document.getElementById('articles-grid-container');
  if (!grid || !window.QUICTAX_ARTICLES) return;

  grid.innerHTML = window.QUICTAX_ARTICLES.map(art => `
    <a href="single-article.html?post=${art.slug}" class="article-card" data-title="${art.title.toLowerCase()}" data-cat="${art.category}">
      <img src="${art.image}" alt="${art.title}" class="article-img">
      <div class="article-body">
        <span class="service-badge" style="background: ${art.badgeBg}; color: ${art.badgeColor}; font-size: 0.7rem; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: 4px;">${art.category}</span>
        <h3 style="font-size: 1.1rem; margin: 0.5rem 0 0.4rem; font-family: var(--font-heading); color: #0C1B33;">${art.title}</h3>
        <p style="font-size: 0.8rem; color: #64748B; line-height: 1.5;">${art.excerpt}</p>
      </div>
      <div class="article-footer" style="padding: 0.85rem 1.25rem; background: #F8FAFC; border-top: 1px solid #F1F5F9; display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: #0284C7; font-weight: 700;">
        <span>Read Full Article (${art.date})</span>
        <span>→</span>
      </div>
    </a>
  `).join('');
}

/* Render Single Article dynamically on single-article.html */
function renderSingleArticle() {
  const bodyContent = document.getElementById('article-body-content');
  if (!bodyContent || !window.QUICTAX_ARTICLES) return;

  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('post') || 'claim-home-office-expenses-canada';

  const article = window.QUICTAX_ARTICLES.find(a => a.slug === slug) || window.QUICTAX_ARTICLES[0];

  const titleEl = document.getElementById('article-title');
  const catEl = document.getElementById('article-cat');
  const dateEl = document.getElementById('article-date');
  const heroImg = document.getElementById('article-hero-img');
  const pageTitle = document.getElementById('page-title');
  const waBtn = document.getElementById('article-wa-btn');

  if (titleEl) titleEl.textContent = article.title;
  if (pageTitle) pageTitle.textContent = `${article.title} — QuicTax Canadian Tax Knowledge Hub`;
  if (catEl) {
    catEl.textContent = article.category;
    catEl.style.background = article.badgeBg;
    catEl.style.color = article.badgeColor;
  }
  if (dateEl) dateEl.textContent = `Published ${article.date} • By QuicTax Canadian Tax Specialists`;
  if (heroImg) {
    heroImg.src = article.image;
    heroImg.alt = article.title;
  }
  if (bodyContent) bodyContent.innerHTML = article.content;

  if (waBtn) {
    waBtn.href = `https://wa.me/12895275237?text=${encodeURIComponent(`Hi QuicTax! I'm reading "${article.title}" and have a question.`)}`;
  }
}

/* Blog Search & Category Filtering */
function initBlogSearchAndFilter() {
  const searchInput = document.getElementById('blog-search');
  const catBtns = document.querySelectorAll('.cat-filter-btn');

  const filterCards = () => {
    const cards = document.querySelectorAll('#articles-grid-container .article-card, .articles-grid .article-card');
    if (!cards.length) return;

    const activeBtn = document.querySelector('.cat-filter-btn.active');
    const activeCat = activeBtn ? (activeBtn.getAttribute('data-cat') || 'All') : 'All';
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

    cards.forEach(card => {
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const cat = card.getAttribute('data-cat') || 'All';
      
      const matchesSearch = title.includes(searchTerm);
      const matchesCat = activeCat === 'All' || cat === activeCat;

      if (matchesSearch && matchesCat) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCards();
    });
  });
}
