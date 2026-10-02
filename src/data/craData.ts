export interface TaxBracket {
  range: string;
  rate: string;
  minIncome: number;
  maxIncome: number;
  percent: number;
}

export const FEDERAL_TAX_BRACKETS_2026: TaxBracket[] = [
  { range: "$0 to $57,375", rate: "15.0%", minIncome: 0, maxIncome: 57375, percent: 15.0 },
  { range: "$57,376 to $114,750", rate: "20.5%", minIncome: 57375, maxIncome: 114750, percent: 20.5 },
  { range: "$114,751 to $177,882", rate: "26.0%", minIncome: 114750, maxIncome: 177882, percent: 26.0 },
  { range: "$177,883 to $253,414", rate: "29.0%", minIncome: 177882, maxIncome: 253414, percent: 29.0 },
  { range: "Over $253,414", rate: "33.0%", minIncome: 253414, maxIncome: 1000000, percent: 33.0 }
];

export const CRA_CARDS = [
  {
    id: "deadlines",
    title: "Key Filing Deadlines",
    icon: "Calendar",
    tag: "Essential",
    summary: "Personal tax returns are due April 30 each year. Self-employed individuals get until June 15, but any taxes owed are still due April 30. Missing deadlines triggers late-filing penalties and daily compound interest.",
    bullets: [
      "April 30 — Personal Return (T1) filing & payment deadline",
      "June 15 — Self-Employed T1 filing deadline (taxes owed still due April 30)",
      "Late-filing penalty starts at 5% plus 1% per month overdue",
      "QuicTax files 98% of returns within 48 hours to ensure zero late fees"
    ]
  },
  {
    id: "calculation",
    title: "How CRA Calculates What You Owe",
    icon: "Calculator",
    tag: "Rates",
    summary: "Canada uses a progressive tax system — higher income brackets pay higher marginal rates. Federal tax rates range from 15% on the first $57,375 up to 33% over $253,414. Provincial taxes (e.g. Ontario) stack on top.",
    bullets: [
      "Basic Personal Amount exempts your first ~$15,705 of income",
      "Combined marginal rates in Ontario range from 20.05% to 53.53%",
      "Tax credits directly reduce tax owing dollar-for-dollar",
      "Tax deductions lower your total gross taxable income"
    ]
  },
  {
    id: "myaccount",
    title: "CRA My Account",
    icon: "UserCheck",
    tag: "Online Portal",
    summary: "CRA My Account lets you view tax return status, RRSP contribution room, TFSA limits, Canada Child Benefit payments, and official Notices of Assessment. QuicTax helps you navigate and interpret your portal records.",
    bullets: [
      "Access NOAs, T-slips, and uncashed CRA checks online",
      "Check exact RRSP & TFSA contribution room before depositing",
      "Set up Direct Deposit for 8-day tax refund processing",
      "QuicTax can securely link as your authorized tax representative"
    ]
  },
  {
    id: "audits",
    title: "Audits & CRA Reviews",
    icon: "ShieldAlert",
    tag: "Compliance",
    summary: "The CRA selects returns for review based on risk factors like large rental losses, home office expenses, or self-employment claims. QuicTax prepares every single return audit-ready with complete documentation.",
    bullets: [
      "Pre-assessment and post-assessment review assistance included",
      "Keep receipts for 6 years as required by Canadian tax law",
      "We respond to CRA letters directly on your behalf",
      "Audit protection & representation available on all packages"
    ]
  },
  {
    id: "benefits",
    title: "Benefits & Tax Credits",
    icon: "Gift",
    tag: "Payouts",
    summary: "The CRA administers the Canada Child Benefit (CCB), GST/HST Credit, Climate Action Incentive (Canada Carbon Rebate), and Disability Tax Credit. You MUST file annually to receive these tax-free payments.",
    bullets: [
      "Canada Child Benefit delivers up to $7,787 per child under age 6",
      "GST/HST credit paid quarterly to modest-income households",
      "Climate Action Incentive (Carbon Rebate) paid 4x per year",
      "Even with zero income, filing is mandatory to claim your cash benefits"
    ]
  },
  {
    id: "adjustments",
    title: "Reassessments & Adjustments",
    icon: "FileEdit",
    tag: "Catch-Up",
    summary: "Made a mistake or missed slips on a past tax return? The CRA allows adjustments for up to 10 past years via Form T1-ADJ or Re-FILE. QuicTax reviews past returns to recover thousands in missed refunds.",
    bullets: [
      "File T1-ADJ online to correct income, credits, or deductions",
      "Catch up on multiple unfiled years in a single submission",
      "Voluntary Disclosure Program shields against tax penalties",
      "Average catch-up client recovers $1,400+ in forgotten refunds"
    ]
  }
];

export const CRA_FACTS = [
  "The CRA processes over 31 million individual tax returns every single year across Canada.",
  "Unused RRSP contribution room carries forward indefinitely — it never expires!",
  "The CRA charges compound daily interest on unpaid tax balances, currently set at the prescribed rate + 4%.",
  "The Voluntary Disclosures Program allows Canadians to fix past tax errors penalty-free if filed before CRA contacts you.",
  "You can claim medical expenses for any 12-month period ending in the tax year, not just Jan 1 to Dec 31.",
  "Students can transfer up to $5,000 in unused current-year tuition credits to a parent, grandparent, or spouse."
];
