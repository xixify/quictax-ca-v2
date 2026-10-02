# QuicTax.ca — Site Overview & Revamp Reference

> Content extraction of https://quictax.ca/ captured 2026-10-02 for a website revamp.
> All copy below is preserved verbatim from the live site so it can be reused or rewritten.

## Folder contents

| File | Page |
|---|---|
| `pages/home.md` | Homepage (/) |
| `pages/services.md` | Services (/services) |
| `pages/about.md` | About (/about) |
| `pages/faq.md` | FAQ (/faq) — 9 questions with full answers |
| `pages/contact.md` | Contact (/contact) |
| `pages/cra.md` | CRA resource page (/cra) |
| `pages/tax-articles.md` | Blog index (/tax-articles) |
| `articles/*.md` | 21 full blog articles (~1,300–1,500 words each) |

## Sitemap

```
/                 Home
/services         Services (4 service cards)
/about            About (story, stats, 4 values)
/faq              FAQ (3 groups × 3 questions, accordions)
/contact          Contact (WhatsApp-first)
/cra              CRA resource (6 info cards + facts carousel)
/tax-articles     Blog index
/tax-articles?post=<slug>   21 blog posts (SPA query-param views, not separate routes)
```

Sitemap.xml lists only the 7 main URLs; blog posts are not in the sitemap.

## Business facts (recurring across the site)

- **Business:** QuicTax — human-assisted Canadian tax preparation (explicitly "not DIY software")
- **Location:** Mississauga, ON — serves GTA + all of Canada, fully online / remote
- **Phone:** (289) 527-5237 → tel:+12895275237
- **Primary CTA everywhere:** WhatsApp — https://wa.me/12895275237 ("Get Started", "Chat on WhatsApp", "Ask on WhatsApp")
- **Claimed stats:** 500+ clients served · 98% satisfaction · 48hr average turnaround · 100% secure & confidential
- **Positioning:** "Canada's most affordable tax filing service", "lowest prices guaranteed — no hidden fees, ever"
- **Response time:** 2–4 hours on business days
- **Services:** T1 personal, freelancer/self-employed, small business, T2 corporate (also HST/GST, payroll/T4, prior-year catch-up)
- **Footer slogan:** "Fast filing. Zero stress."
- **Copyright line:** © 2026 QuicTax. All rights reserved.

## Tech stack (current site)

- React SPA (Vite build), react-router (query-param blog views)
- Radix UI components (accordions on FAQ, dialogs)
- Tailwind CSS with shadcn-style HSL CSS variables
- Fonts: **Space Grotesk** (700, headings) + **Inter** (400/500, body) via Google Fonts
- Blog posts served by trysoro.com embed API (`/api/embed/<token>` + `/article/<id>`); featured images on Supabase storage
- Cookie consent banner (accept/decline)
- Hosted with GoDaddy-adjacent infra (secureserver.net telemetry, isteam.wsimg.com logo assets)
- Logo asset: `https://quictax.ca/airo-assets/images/logo/horizontal` (302 → wsimg PNG; `/dark` variant for footer)

## Design tokens (from live CSS `:root`)

HSL values as defined on the site:

| Token | Value | Approx hex |
|---|---|---|
| `--background` | 216 100% 97% | `#F0F6FF` (very light blue) |
| `--foreground` | 0 0% 4% | `#0A0A0A` |
| `--primary` | 204 80% 55% | `#2B9CDD` (sky blue) |
| `--secondary` | 234 80% 55% | `#4747DD` (indigo/blue) |
| `--accent` | 24 80% 55% | `#DD702B` (orange) |
| `--muted` | 206 50% 95% | `#E9F3F7` |
| `--muted-foreground` | 216 100% 47% | `#001F33`-ish blue |
| `--border` / `--input` / `--ring` | 217 96% 82% / 204 80% 55% | light blue border |
| `--success` | 160 84% 39% | green |
| `--warning` | 38 92% 50% | amber |
| `--destructive` | 0 84% 60% | red |
| `--info` | 217 91% 60% | blue |
| `--radius` | .5rem | 8px |

Fonts: `--font-sans: Inter` · `--font-heading: Space Grotesk`. Body bg renders as `rgb(240,246,255)`.

**Revamp note:** the whole site is a light-blue monochrome theme (`#F0F6FF` background, sky-blue primary, blue-tinted borders/muted text) with orange accents. That flat pastel-blue look is the thing most worth rethinking in a redesign — contrast is weak (muted-foreground is a low-saturation blue on near-white blue), and the palette reads "generic template".

## Conversion elements to keep in a revamp

1. WhatsApp as the single primary conversion channel (every page ends with a WhatsApp CTA + phone number)
2. Stats bar (500+ / 98% / 48hr / 100%) on home & about
3. 3-step process (Contact → Share Documents → Get Filed)
4. "No hidden fees / lowest price guaranteed" trust messaging
5. FAQ with pricing objection handling ("pricing depends on complexity… no-obligation quote")
6. Blog as SEO content hub (21 keyword-targeted posts: filing deadlines, HST, self-employed deductions, home office, CPP, refunds)

## Known content gaps / inconsistencies (fix in revamp)

- Services page promises "filed within 48 hours" for T1 — home says "48hr average turnaround"; FAQ hedges ("complex corporate returns may take slightly longer"). Pick one consistent claim.
- The 6 older "guide cards" on the blog page have no article pages (WhatsApp links only) — either port them to real articles or cut them.
- Tax brackets on /cra cite 2024 figures ("15% on the first $55,867… 33% over $246,752 (2024)") while articles reference 2025/2026 tax years — refresh numbers.
- Blog posts live behind `?post=` query params — no shareable/permanent URLs, no sitemap entries. A revamp should give each article a real route (`/tax-articles/<slug>`) for SEO.
- Copyright is "© 2026" (dynamic year).
