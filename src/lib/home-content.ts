import {
  BookOpen,
  Briefcase,
  Building2,
  ChartColumn,
  ClipboardList,
  Globe,
  Receipt,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const heroStats = [
  { value: "1000+", label: "Clients served" },
  { value: "15+", label: "Years experience" },
  { value: "98%", label: "Client retention" },
] as const;

export const serviceIndex = [
  { num: "01", label: "Income Tax", href: "/services/income-tax-advisory-compliance" },
  { num: "02", label: "GST", href: "/services/gst-registration-compliance" },
  { num: "03", label: "Accounting", href: "/services/accounting-bookkeeping" },
  { num: "04", label: "ROC & Company Law", href: "/services/roc-company-law-compliance" },
  { num: "05", label: "Audit", href: "/services/audit-assurance" },
  { num: "06", label: "Virtual CFO", href: "/services/virtual-cfo" },
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
  "Income Tax Advisory & Compliance",
  "GST Registration & Compliance",
  "Accounting & Bookkeeping Services",
  "ROC & Company Law Compliance",
  "Audit & Assurance Services",
  "Virtual CFO Services",
  "Corporate Training & Financial Workshops",
  "Payroll & Compliance Management",
  "Business Registration & Startup Advisory",
  "FEMA & NRI Taxation",
  "International Tax & DTAA Advisory",
  "Offshore Accounting Services",
  "Internal Financial Controls & Risk Advisory",
  "SEZ/STPI Compliance Services",
  "Tax Planning & Business Advisory",
] as const;

export const aboutNarrative = [
  "TaxSimpl Advisors LLP is a premier financial advisory practice headquartered in Kolkata, serving startups, SMEs, professionals, NRIs, and multinational businesses across India and around the world with technology-enabled tax, accounting, and strategic counsel.",
  "We simplify complex tax and regulatory matters through expert guidance, proactive planning, and technology-enabled solutions. From GST, income tax, company law compliance, audits, and accounting to Virtual CFO services, our team delivers timely, accurate, and practical advice that empowers businesses to make informed financial decisions.",
  "Our partners have extensive experience advising clients across diverse industries and handling complex compliance and advisory engagements. By combining institutional-quality expertise with personalized attention, we help clients stay compliant, optimize taxes, manage risk, and achieve sustainable growth.",
  "At TaxSimpl Advisors LLP, we believe compliance is more than a legal obligation—it's a strategic advantage. Our commitment is to deliver clear advice, responsive service, and reliable solutions that allow you to focus on growing your business while we take care of the complexities.",
] as const;

export const aboutHighlights = [
  "End-to-end tax, compliance, accounting, and business advisory under one roof.",
  "Personalized solutions tailored to businesses, professionals, startups, and NRIs.",
  "Fast turnaround, transparent communication, and dedicated partner involvement.",
  "Modern, technology-enabled workflows that simplify compliance and support business growth.",
] as const;

export const coreExpertise = marqueeItems;

export interface FeaturedService {
  category: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const featuredServices: FeaturedService[] = [
  {
    category: "Advisory",
    title: "Virtual CFO Services",
    description:
      "Strategic financial leadership, cash flow planning, and CFO-level insights for growing businesses.",
    href: "/services/virtual-cfo",
    icon: ChartColumn,
  },
  {
    category: "Tax",
    title: "Income Tax Advisory & Compliance",
    description:
      "Minimize tax liability with accurate filing and proactive tax planning.",
    href: "/services/income-tax-advisory-compliance",
    icon: Receipt,
  },
  {
    category: "GST",
    title: "GST Registration & Compliance",
    description:
      "End-to-end GST compliance, return filing, and expert advisory for your business.",
    href: "/services/gst-registration-compliance",
    icon: ClipboardList,
  },
  {
    category: "Accounting",
    title: "Accounting & Bookkeeping Services",
    description:
      "Accurate bookkeeping and financial records to keep your business audit-ready.",
    href: "/services/accounting-bookkeeping",
    icon: BookOpen,
  },
  {
    category: "Audit",
    title: "Audit & Assurance Services",
    description:
      "Independent audit services that strengthen compliance, governance, and stakeholder confidence.",
    href: "/services/audit-assurance",
    icon: ShieldCheck,
  },
  {
    category: "Corporate",
    title: "ROC & Company Law Compliance",
    description:
      "Timely ROC, MCA, and statutory compliance for companies and LLPs.",
    href: "/services/roc-company-law-compliance",
    icon: Building2,
  },
  {
    category: "Registration",
    title: "Business Registration & Startup Advisory",
    description:
      "Start your business with seamless registration and end-to-end regulatory support.",
    href: "/services/business-registration-startup",
    icon: Briefcase,
  },
  {
    category: "NRI",
    title: "FEMA & NRI Taxation",
    description:
      "Specialized tax solutions for NRIs, expatriates, and cross-border transactions.",
    href: "/services/fema-nri-taxation",
    icon: Globe,
  },
  {
    category: "Notices",
    title: "Tax Notices & Litigation",
    description:
      "Expert representation and timely resolution of income tax and GST notices.",
    href: "/contact",
    icon: Scale,
  },
];

export const blogTopics = [
  "Income tax filing deadlines and ITR forms for salaried professionals and businesses",
  "GST registration, GSTR-1 and GSTR-3B compliance for SMEs in West Bengal",
  "ROC annual filing and MCA compliance for private limited companies and LLPs",
  "NRI taxation, DTAA benefits, and FEMA rules for Indians abroad",
  "Tax notices, scrutiny assessments, and how to respond to GST or income tax queries",
] as const;

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
  "Income Tax Advisory & Compliance",
  "GST Registration & Compliance",
  "Accounting & Bookkeeping Services",
  "ROC & Company Law Compliance",
  "Audit & Assurance Services",
  "Virtual CFO Services",
  "Corporate Training & Financial Workshops",
  "Payroll & Compliance Management",
  "Business Registration & Startup Advisory",
  "FEMA & NRI Taxation",
  "International Tax & DTAA Advisory",
  "Offshore Accounting Services",
  "Internal Financial Controls & Risk Advisory",
  "SEZ/STPI Compliance Services",
  "Tax Planning & Business Advisory",
  "Tax Notices & Litigation",
  "Other / General Enquiry",
] as const;

export const contactServiceGroups = [
  {
    label: "Core compliance",
    options: contactServiceOptions.slice(0, 5),
  },
  {
    label: "Advisory & specialized",
    options: contactServiceOptions.slice(5, 15),
  },
  {
    label: "Other",
    options: contactServiceOptions.slice(15),
  },
] as const;
