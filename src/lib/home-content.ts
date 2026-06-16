import {
  Building2,
  ChartColumn,
  ClipboardList,
  Globe,
  Receipt,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const heroStats = [
  { value: "500+", label: "Clients served" },
  { value: "15+", label: "Years experience" },
  { value: "98%", label: "Client retention" },
] as const;

export const serviceIndex = [
  { num: "01", label: "GST", href: "/services/gst-registration" },
  { num: "02", label: "Income Tax (ITR)", href: "/services/income-tax-filing" },
  { num: "03", label: "Registrations", href: "/services/private-limited-company" },
  { num: "04", label: "Accounting", href: "/services/company-annual-filing" },
  { num: "05", label: "Audit", href: "/services/tax-audit" },
  { num: "06", label: "Startup CFO", href: "/contact" },
] as const;

export const shiftComparison = {
  before: [
    "Confusing GST notices",
    "Missed compliance deadlines",
    "Manual accounting chaos",
    "Endless paperwork",
  ],
  after: [
    "Proactive filings, zero notices",
    "Calendar-synced deadlines",
    "Cloud books, real-time view",
    "Digital-first, paperless flow",
  ],
} as const;

export const faqItems = [
  {
    question: "Who do you typically work with?",
    answer:
      "Startups, SMEs, NRIs, and high-net-worth individuals across India. We serve clients in Kolkata and remotely across 20+ countries.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "We offer a free 30-minute discovery call, followed by a fixed-fee proposal. Most engagements begin within 3–5 business days.",
  },
  {
    question: "Do you offer monthly retainers?",
    answer:
      "Yes — for GST, accounting, payroll, and virtual CFO services. Retainers include proactive reminders and dedicated partner access.",
  },
  {
    question: "Will I get a single point of contact?",
    answer:
      "Every client interacts directly with a senior partner for critical decisions. No handoffs to juniors for matters that matter.",
  },
  {
    question: "Do you handle GST and income tax notices?",
    answer:
      "Yes — representation before GST authorities, assessments, appeals, and scrutiny cases is part of our advisory practice.",
  },
  {
    question: "Are you available outside Kolkata?",
    answer:
      "Absolutely. We work with clients across India and NRIs worldwide through secure digital onboarding and a client portal.",
  },
] as const;

export const marqueeItems = [
  "GST Filing & Advisory",
  "Income Tax Planning",
  "Company Registration",
  "Virtual CFO Services",
  "NRI Taxation",
  "Audit & Assurance",
  "ROC Compliance",
  "Startup Advisory",
] as const;

export const coreExpertise = [
  "Direct & Indirect Taxation (Income Tax, GST)",
  "Statutory Audit & Internal Audit",
  "Company Law & ROC Compliance (MCA)",
  "FEMA, RBI & Foreign Investment Advisory",
  "Startup Incorporation & Funding Advisory",
  "Transfer Pricing & International Taxation",
  "Virtual CFO & Outsourced Accounting",
] as const;

export interface FeaturedService {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const featuredServices: FeaturedService[] = [
  {
    title: "GST Advisory & Filing",
    description:
      "End-to-end GST registration, monthly/quarterly return filing (GSTR-1, 3B, 9), reconciliation, refunds, and litigation support before GST authorities.",
    href: "/services/gst-registration",
    icon: ClipboardList,
  },
  {
    title: "Income Tax Planning & Filing",
    description:
      "Strategic tax planning for individuals, HUFs, firms and companies. ITR filing, advance tax computation, TDS compliance, and representation in assessments and appeals.",
    href: "/services/income-tax-filing",
    icon: Receipt,
  },
  {
    title: "Company Registration & ROC",
    description:
      "Incorporation of Private Limited, LLP, OPC and Section 8 companies. Annual ROC filings, board meeting compliance, changes in directors and share structure.",
    href: "/services/private-limited-company",
    icon: Building2,
  },
  {
    title: "Virtual CFO Services",
    description:
      "On-demand financial leadership for startups and growing businesses. MIS reporting, cash flow management, investor reporting, budgeting and financial modelling.",
    href: "/contact",
    icon: ChartColumn,
  },
  {
    title: "NRI Taxation",
    description:
      "Comprehensive NRI tax services: DTAA benefits, FEMA compliance, repatriation of funds, capital gains advisory, NRO/NRE account management and ITR filing.",
    href: "/services/nri-income-tax",
    icon: Globe,
  },
  {
    title: "Audit & Assurance",
    description:
      "Statutory audit, tax audit (3CD), internal audit, bank audit, concurrent audit, and limited review engagements. Risk-based approach with management insights.",
    href: "/services/tax-audit",
    icon: ShieldCheck,
  },
];

export const whyUsItems = [
  {
    title: "Speed Without Compromise",
    description:
      "We guarantee 48-hour turnaround on routine queries and committed timelines on all engagements — no missed deadlines, ever.",
  },
  {
    title: "Partner-Level Attention",
    description:
      "Every client, regardless of size, interacts directly with a senior partner. No handoffs to juniors for critical decisions.",
  },
  {
    title: "Proactive, Not Reactive",
    description:
      "We alert you to regulatory changes before they affect you — not after. Our team tracks MCA, CBDT, and GSTN notifications daily.",
  },
  {
    title: "Technology-Driven Practice",
    description:
      "Secure client portal, real-time compliance tracking, automated reminders, and paperless workflows for modern businesses.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "TaxSimpl transformed our startup's financial operations. From incorporation to fundraising due diligence to our first statutory audit — they were with us every step of the way. Genuinely rare to find advisors who understand both the technical and business side so well.",
    author: "Founder, SaaS Startup · Kolkata",
  },
  {
    quote:
      "As an NRI, managing Indian taxes was always a headache. TaxSimpl made it completely stress-free. They handle everything from FEMA compliance to repatriation, and I always know exactly where I stand.",
    author: "NRI Client · London, UK",
  },
] as const;

export const industries = [
  "Technology & SaaS Startups",
  "Manufacturing & MSME",
  "Real Estate & Construction",
  "Healthcare & Pharma",
  "E-Commerce & D2C Brands",
  "Retail & Trading",
  "Professional Services",
  "Non-Profit & NGO",
  "Export & Import Businesses",
  "Education Institutions",
  "HNI & Family Offices",
  "NRIs & Foreign Investors",
] as const;

export const processSteps = [
  {
    title: "Discovery Call",
    description:
      "We start with a free 30-minute call to understand your business, current challenges, and compliance needs.",
  },
  {
    title: "Custom Proposal",
    description:
      "You receive a clear, fixed-fee engagement proposal with defined scope, timelines, and deliverables — no surprises.",
  },
  {
    title: "Onboarding",
    description:
      "Seamless digital onboarding via our secure client portal. Document sharing, e-signatures, and communication — all in one place.",
  },
  {
    title: "Ongoing Partnership",
    description:
      "Regular reviews, proactive alerts, and dedicated support. Your finances are in expert hands, every month of the year.",
  },
] as const;

export const contactServiceOptions = [
  "GST Advisory & Filing",
  "Income Tax Planning & Filing",
  "Company Registration & ROC",
  "Virtual CFO Services",
  "NRI Taxation",
  "Audit & Assurance",
  "Other / General Enquiry",
] as const;
