export type ServiceCategory =
  | "start-a-business"
  | "compliance"
  | "audit"
  | "registration"
  | "nri";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  description: string;
  timeline?: string;
  documents?: string[];
  faqs?: { question: string; answer: string }[];
}

export const serviceCategories: Record<
  ServiceCategory,
  { label: string; description: string }
> = {
  "start-a-business": {
    label: "Start a business",
    description: "Choose the right structure and get registered with confidence.",
  },
  compliance: {
    label: "Compliance",
    description: "Stay on top of GST, TDS, ITR, and annual filings.",
  },
  audit: {
    label: "Audit",
    description: "Independent audits for companies, LLPs, banks, and NGOs.",
  },
  registration: {
    label: "Registration",
    description: "Licences and registrations your business may need.",
  },
  nri: {
    label: "NRI corner",
    description: "Tax and compliance support for non-resident Indians.",
  },
};

export const services: Service[] = [
  {
    slug: "private-limited-company",
    title: "Private Limited Company",
    category: "start-a-business",
    summary: "Incorporate a Pvt Ltd company with guided documentation and MCA filing.",
    description:
      "A private limited company offers limited liability and is suited for businesses planning to raise capital or scale. We handle name approval, incorporation documents, and post-incorporation compliance guidance.",
    timeline: "7–15 working days (subject to MCA processing)",
    documents: [
      "PAN and Aadhaar of directors",
      "Address proof for registered office",
      "Passport-size photographs",
      "Bank statement or utility bill",
    ],
    faqs: [
      {
        question: "How many directors are required?",
        answer: "A minimum of two directors and two shareholders are required.",
      },
      {
        question: "Can one person start a company?",
        answer: "For a single-founder structure, consider a One Person Company (OPC) instead.",
      },
    ],
  },
  {
    slug: "llp-registration",
    title: "LLP Registration",
    category: "start-a-business",
    summary: "Register a Limited Liability Partnership with flexible ownership.",
    description:
      "An LLP combines limited liability with partnership flexibility. We prepare the LLP agreement, file incorporation forms, and explain ongoing compliance obligations.",
    timeline: "10–15 working days",
    documents: ["Partner ID and address proof", "Registered office proof", "Digital signatures"],
  },
  {
    slug: "gst-registration",
    title: "GST Registration",
    category: "compliance",
    summary: "Get your GSTIN and understand your return filing obligations.",
    description:
      "We help businesses register under GST, classify supplies correctly, and set up a practical compliance calendar for returns and reconciliations.",
    timeline: "3–7 working days",
    documents: ["PAN of business", "Address proof", "Bank account details", "Authorisation letter"],
    faqs: [
      {
        question: "Who needs GST registration?",
        answer:
          "Businesses crossing turnover thresholds, e-commerce sellers, and certain categories mandatorily require registration.",
      },
    ],
  },
  {
    slug: "income-tax-filing",
    title: "Income Tax Filing",
    category: "compliance",
    summary: "File your ITR accurately and on time for individuals and businesses.",
    description:
      "Whether you are salaried, self-employed, or running a company, we prepare and file returns, claim eligible deductions, and respond to basic notices.",
    timeline: "2–5 working days after documents are received",
    documents: ["PAN", "Form 16 / income details", "Investment proofs", "Bank statements"],
  },
  {
    slug: "company-annual-filing",
    title: "Company Annual Filing",
    category: "compliance",
    summary: "ROC annual returns and financial statements filed on schedule.",
    description:
      "We prepare annual filings under the Companies Act, coordinate with your accounts team, and ensure MCA deadlines are met.",
    timeline: "Varies by financial year-end and data readiness",
  },
  {
    slug: "tax-audit",
    title: "Tax Audit",
    category: "audit",
    summary: "Tax audit under Section 44AB for eligible businesses and professionals.",
    description:
      "Our team conducts tax audits as required under the Income Tax Act, issues the audit report, and highlights areas for better record-keeping.",
  },
  {
    slug: "fssai-registration",
    title: "FSSAI Registration",
    category: "registration",
    summary: "Food business operator licence for restaurants, manufacturers, and traders.",
    description:
      "We determine the correct FSSAI category, prepare applications, and guide you through renewal and display requirements.",
    timeline: "7–20 working days depending on licence type",
  },
  {
    slug: "msme-registration",
    title: "MSME / Udyam Registration",
    category: "registration",
    summary: "Register your micro, small, or medium enterprise on the Udyam portal.",
    description:
      "Udyam registration can unlock benefits and is often required for tenders and schemes. We complete registration using your business and Aadhaar details.",
    timeline: "1–3 working days",
  },
  {
    slug: "nri-income-tax",
    title: "NRI Income Tax & RNOR",
    category: "nri",
    summary: "ITR filing, residency planning, and RNOR guidance for returning NRIs.",
    description:
      "We help NRIs and returning residents understand Indian tax residency, file returns, apply for PAN, and plan transitions including RNOR benefits where applicable.",
  },
];

export const featuredServiceSlugs = [
  "gst-registration",
  "income-tax-filing",
  "private-limited-company",
  "nri-income-tax",
  "company-annual-filing",
  "llp-registration",
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}
