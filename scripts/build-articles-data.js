import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '../quictax-content/articles');
const outputFile = path.join(__dirname, '../js/articles-data.js');

const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));

const categoryMap = {
  'claim-home-office-expenses-canada': 'Deductions',
  'calculate-self-employment-cpp-canada': 'Self-Employed',
  'corporate-tax-penalties-canadian-businesses': 'Corporate',
  'corporate-tax-return-filing-canada': 'Corporate',
  'correct-a-filed-tax-return-canada': 'Filing Tips',
  'fast-tax-return-filing-service': 'Filing Tips',
  'freelancer-tax-return-help-canada': 'Self-Employed',
  'gig-worker-tax-filing-canada': 'Self-Employed',
  'how-to-file-taxes-online-canada': 'Filing Tips',
  'how-to-maximize-tax-refunds-canada': 'Deductions',
  'how-to-register-for-hst': 'GST/HST',
  'hst-return-filing-service': 'GST/HST',
  'refund-processing-times-cra-refund': 'CRA Updates',
  'secure-tax-document-upload-service': 'Security',
  'self-employed-tax-deductions-canada': 'Self-Employed',
  'small-business-tax-return-canada': 'Small Business',
  'tax-accountant-whatsapp-consultation': 'Services',
  'tax-filing-deadlines-canadians-cannot-miss': 'CRA Updates',
  'tax-filing-service-no-hidden-fees': 'Pricing',
  'what-expenses-can-sole-proprietors-claim': 'Deductions',
  'affordable-tax-filing-service-canada': 'Pricing'
};

const categoryColorMap = {
  'Deductions': { bg: '#E0F2FE', text: '#0369A1' },
  'Self-Employed': { bg: '#F0F6FF', text: '#1D4ED8' },
  'Corporate': { bg: '#F3E8FF', text: '#6B21A8' },
  'Small Business': { bg: '#FEF3C7', text: '#92400E' },
  'Filing Tips': { bg: '#E0E7FF', text: '#3730A3' },
  'GST/HST': { bg: '#FCE7F3', text: '#9D174D' },
  'CRA Updates': { bg: '#FFEDD5', text: '#9A3412' },
  'Security': { bg: '#E0F2FE', text: '#0284C7' },
  'Services': { bg: '#E0F2FE', text: '#0284C7' },
  'Pricing': { bg: '#F1F5F9', text: '#0C1B33' }
};

const defaultImages = [
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
];

const articles = [];

files.forEach((file, index) => {
  const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
  
  // Parse frontmatter
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return;

  const fmText = match[1];
  const bodyText = match[2];

  const metadata = {};
  fmText.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      let val = line.slice(colonIdx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      metadata[key] = val;
    }
  });

  const slug = metadata.slug || file.replace('.md', '');
  const category = categoryMap[slug] || 'Deductions';
  const colors = categoryColorMap[category] || { bg: '#E0F2FE', text: '#0369A1' };
  
  let image = metadata.featuredImage;
  if (!image || image.includes('supabase.co')) {
    image = defaultImages[index % defaultImages.length];
  }

  let htmlBody = bodyText
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    .split('\n\n')
    .map(p => {
      p = p.trim();
      if (!p) return '';
      if (p.startsWith('<h') || p.startsWith('<ul>') || p.startsWith('<ol>')) return p;
      if (p.startsWith('- ')) {
        const items = p.split('\n').map(li => `<li>${li.replace(/^- /, '')}</li>`).join('');
        return `<ul>${items}</ul>`;
      }
      return `<p>${p}</p>`;
    })
    .join('\n');

  articles.push({
    slug: slug,
    title: metadata.title || 'Canadian Tax Article',
    date: metadata.date || 'September 2026',
    excerpt: metadata.excerpt || '',
    category: category,
    badgeBg: colors.bg,
    badgeColor: colors.text,
    image: image,
    content: htmlBody
  });
});

const outputJs = `/* AUTOMATICALLY GENERATED ARTICLES DATA FOR QUICTAX.CA */
window.QUICTAX_ARTICLES = ${JSON.stringify(articles, null, 2)};
`;

fs.writeFileSync(outputFile, outputJs);
console.log(`Successfully compiled ${articles.length} articles into js/articles-data.js`);
