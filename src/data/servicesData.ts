export interface ServicePackage {
  id: string;
  name: string;
  badge: string;
  targetAudience: string;
  tagline: string;
  description: string;
  priceNote: string;
  turnaround: string;
  features: string[];
  requiredSlips: string[];
  deductionsCovered: string[];
  icon: string;
}

export const SERVICES_DATA: ServicePackage[] = [
  {
    id: "t1-personal",
    name: "Personal Tax Filing (T1)",
    badge: "Most Popular",
    targetAudience: "Employees, Families, Students, Seniors & Newcomers",
    tagline: "Maximize your refund with a fast, human-guided personal tax return.",
    description: "Our human tax preparers handle your T1 personal income tax return from start to finish. We claim every eligible deduction and credit — RRSP, medical expenses, tuition, rental income, and family benefits — and submit directly via CRA NETFILE within 48 hours.",
    priceNote: "Canada's lowest price guaranteed • Transparent upfront quote",
    turnaround: "48-Hour Turnaround",
    features: [
      "Full T1 General Return preparation & CRA NETFILE submission",
      "RRSP, TFSA, dividend & investment income reporting",
      "Rental property income & rental expense deductions",
      "Medical expenses, donations, disability & moving cost claims",
      "Prior year filing, CRA amendments & T1-ADJ catch-up returns",
      "Notice of Assessment verification & post-filing support"
    ],
    requiredSlips: ["T4 / T4A / T4E", "T5 / T3 Investment Slips", "RRSP Contribution Receipts", "Medical & Donation Receipts"],
    deductionsCovered: ["RRSP Deductions", "Medical Expense Pooling", "Tuition Transfer ($5k)", "Moving Expenses (>40km)", "Canada Carbon Rebate"],
    icon: "User"
  },
  {
    id: "freelancer-selfemployed",
    name: "Freelancer & Self-Employed",
    badge: "Gig & Contractors",
    targetAudience: "Uber/DoorDash Drivers, Freelancers, Consultants & Sole Proprietors",
    tagline: "Deductions, HST/GST, vehicle costs, and self-employment taxes — sorted.",
    description: "Self-employment taxes in Canada are complex. We track home office expenses, vehicle mileage, equipment write-offs, and HST/GST remittances so you keep more of your hard-earned revenue and stay 100% CRA compliant.",
    priceNote: "Dedicated Tax Specialist • Upfront Quote",
    turnaround: "48-Hour Turnaround",
    features: [
      "T2125 Statement of Business or Professional Activities",
      "HST/GST registration, quarterly filing & ITC tax recovery",
      "Home office, high-speed internet & cell phone write-offs",
      "Vehicle mileage log optimization & gas/insurance deductions",
      "Quarterly CRA tax instalment calculations & planning",
      "PayPal, Stripe, Upwork & USD revenue conversion handling"
    ],
    requiredSlips: ["Form T2125 Details", "Gross Revenue Summary", "Expense Receipts / Logs", "Vehicle Mileage Summary"],
    deductionsCovered: ["Home Workspace Share", "Vehicle Operating Expenses", "Software & Tools", "Subcontractor Payments", "HST Input Tax Credits"],
    icon: "Briefcase"
  },
  {
    id: "small-business",
    name: "Small Business Filing",
    badge: "Growth & SMBs",
    targetAudience: "Retail, Service Providers, Trade Contractors & Local Businesses",
    tagline: "Smart small business tax filing to optimize profits and compliance.",
    description: "From sole proprietorships to incorporated small businesses, our tax preparers handle your corporate and business tax filings with precision and speed. We optimize your deductions, review bookkeeping, and ensure full CRA compliance.",
    priceNote: "Custom SMB Package • No Hidden Fees",
    turnaround: "48 to 72-Hour Turnaround",
    features: [
      "Sole Proprietorship & Incorporated Small Business tax returns",
      "Payroll processing & T4 / T4A / T5 slip preparation",
      "Year-end financial statement compilation (GIFI)",
      "Business expense optimization & asset depreciation (CCA)",
      "HST/GST return reconciliation & CRA audit assistance",
      "Dedicated Canadian tax accountant point of contact"
    ],
    requiredSlips: ["Income Statement / P&L", "Balance Sheet / GIFI", "Payroll Summaries", "HST Returns & Bank Stmts"],
    deductionsCovered: ["Capital Cost Allowance (CCA)", "Employee Wages & Benefits", "Commercial Rent & Utilities", "Professional & Legal Fees"],
    icon: "Store"
  },
  {
    id: "corporate-t2",
    name: "Corporate Tax Filing (T2)",
    badge: "Incorporated Companies",
    targetAudience: "Canadian-Controlled Private Corporations (CCPCs) & Companies",
    tagline: "Full corporate compliance handled accurately, on time, and on budget.",
    description: "Full T2 corporate income tax return preparation for Canadian corporations. Our tax specialists optimize your business structure — including Small Business Deduction (9% rate), tax minimization strategies, CRA correspondence, and multi-year catch-up returns.",
    priceNote: "Transparent Corporate Rates • Guaranteed Accuracy",
    turnaround: "3 to 5 Business Days",
    features: [
      "Complete T2 Corporate Income Tax Return preparation & filing",
      "GIFI Financial Statement integration & schedule mapping",
      "Small Business Deduction (9% federal CCPC rate) maximization",
      "Corporate tax planning, dividend vs. salary optimization",
      "Multi-year corporate catch-up returns & voluntary disclosure",
      "Full CRA audit defense & correspondence management"
    ],
    requiredSlips: ["Corporate Trial Balance", "Balance Sheet & Income Statement", "Prior Year T2 & NOA", "Shareholder Registry"],
    deductionsCovered: ["Small Business Deduction", "Capital Dividend Account (CDA)", "R&D / SR&ED Tax Credits", "Director Fee Planning"],
    icon: "Building2"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "David K.",
    role: "Freelance Software Engineer",
    location: "Toronto, ON",
    stars: 5,
    text: "QuicTax saved me over $2,400 in self-employment write-offs that I completely missed when trying to do it myself on TurboTax. The WhatsApp communication was insanely convenient — sent photos of my slips and had my return filed in under 36 hours!",
    verifiedTag: "Verified Self-Employed Client"
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Small Business Owner",
    location: "Mississauga, ON",
    stars: 5,
    text: "We were 2 years behind on our T2 corporate returns and terrified of CRA penalties. QuicTax walked us through everything over WhatsApp, prepared our year-end financials, and filed both returns without any stress. Best accounting decision we ever made!",
    verifiedTag: "Verified Corporate T2 Client"
  },
  {
    id: 3,
    name: "Priya & Amit S.",
    role: "New Immigrants & Healthcare Workers",
    location: "Brampton, ON",
    stars: 5,
    text: "As newcomers to Canada, Canadian taxes looked like a maze. The team at QuicTax explained RRSP deductions, Climate Action rebates, and child benefits clearly. Super fast, honest pricing with zero surprise charges.",
    verifiedTag: "Verified Personal T1 Client"
  },
  {
    id: 4,
    name: "Marcus L.",
    role: "Uber Driver & Gig Worker",
    location: "Vancouver, BC",
    stars: 5,
    text: "I tried calling traditional accountants and they quoted $450 just to file my gig worker tax return. QuicTax gave me an instant quote on WhatsApp, deducted my gas and mileage properly, and filed it all for a fraction of the cost.",
    verifiedTag: "Verified Gig Worker Client"
  }
];
