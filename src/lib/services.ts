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
  seoDescription?: string;
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
    seoDescription:
      "Incorporate a private limited company in Kolkata with TaxSimpl — name approval, MCA filings, director KYC, and post-incorporation compliance guidance. Book a free consultation.",
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
    seoDescription:
      "Register an LLP in Kolkata with TaxSimpl Advisors LLP — LLP agreement drafting, MCA incorporation, DSC support, and ongoing compliance explained in plain language. Free consultation.",
    description:
      "An LLP combines limited liability with partnership flexibility. We prepare the LLP agreement, file incorporation forms, and explain ongoing compliance obligations.",
    timeline: "10–15 working days",
    documents: ["Partner ID and address proof", "Registered office proof", "Digital signatures"],
    faqs: [
      {
        question: "How is an LLP different from a private limited company?",
        answer:
          "An LLP offers partnership flexibility with limited liability and fewer equity formalities, while a Pvt Ltd is better suited to fundraising and investor equity.",
      },
      {
        question: "How many partners are required?",
        answer: "A minimum of two designated partners is required to register an LLP in India.",
      },
    ],
  },
  {
    slug: "gst-registration",
    title: "GST Registration",
    category: "compliance",
    summary: "Get your GSTIN and understand your return filing obligations.",
    seoDescription:
      "GST registration in Kolkata with TaxSimpl — GSTIN issuance, supply classification, GSTR-1 and 3B guidance, and a practical compliance calendar. Book a free consultation today.",
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
      {
        question: "How long does GST registration take?",
        answer:
          "Most applications are processed within 3–7 working days once documents are complete, subject to GSTN verification.",
      },
    ],
  },
  {
    slug: "income-tax-filing",
    title: "Income Tax Filing",
    category: "compliance",
    summary: "File your ITR accurately and on time for individuals and businesses.",
    seoDescription:
      "ITR filing in Kolkata for salaried professionals, freelancers, and businesses. Accurate returns, deduction planning, advance tax, and notice support from TaxSimpl CAs.",
    description:
      "Whether you are salaried, self-employed, or running a company, we prepare and file returns, claim eligible deductions, and respond to basic notices.",
    timeline: "2–5 working days after documents are received",
    documents: ["PAN", "Form 16 / income details", "Investment proofs", "Bank statements"],
    faqs: [
      {
        question: "Which ITR form do I need?",
        answer:
          "It depends on your income sources — salary, business, capital gains, or foreign income. We confirm the correct form after reviewing your details.",
      },
      {
        question: "What is the deadline for filing ITR?",
        answer:
          "Most individuals must file by 31 July for the previous financial year, though dates can vary for audit cases and companies.",
      },
    ],
  },
  {
    slug: "company-annual-filing",
    title: "Company Annual Filing",
    category: "compliance",
    summary: "ROC annual returns and financial statements filed on schedule.",
    seoDescription:
      "Company annual filing in Kolkata — AOC-4, MGT-7, financial statements, and MCA deadlines managed by TaxSimpl. Stay ROC-compliant without last-minute stress.",
    description:
      "We prepare annual filings under the Companies Act, coordinate with your accounts team, and ensure MCA deadlines are met.",
    timeline: "Varies by financial year-end and data readiness",
    documents: [
      "Audited financial statements",
      "Board report and director details",
      "Shareholding pattern",
      "DSC of authorised signatory",
    ],
    faqs: [
      {
        question: "What happens if ROC filings are delayed?",
        answer:
          "Late filing attracts additional fees and can affect director compliance status. We track deadlines and file before penalties apply.",
      },
    ],
  },
  {
    slug: "tax-audit",
    title: "Tax Audit",
    category: "audit",
    summary: "Tax audit under Section 44AB for eligible businesses and professionals.",
    seoDescription:
      "Tax audit in Kolkata under Section 44AB — Form 3CD report, books review, and compliance insights from TaxSimpl chartered accountants. Book a consultation.",
    description:
      "Our team conducts tax audits as required under the Income Tax Act, issues the audit report in Form 3CD, and highlights areas for better record-keeping and tax efficiency.",
    timeline: "Typically 2–4 weeks after books and schedules are shared",
    documents: [
      "Books of account and trial balance",
      "Bank statements for the financial year",
      "GST returns and TDS statements",
      "Previous ITR and tax audit report, if any",
    ],
    faqs: [
      {
        question: "Who needs a tax audit under Section 44AB?",
        answer:
          "Businesses and professionals crossing prescribed turnover or gross receipt thresholds, and certain other cases under the Income Tax Act, must appoint a chartered accountant for tax audit.",
      },
      {
        question: "What is included in a tax audit report?",
        answer:
          "We review books, verify compliance with income tax provisions, and issue Form 3CD with observations that help you improve records before assessments.",
      },
    ],
  },
  {
    slug: "fssai-registration",
    title: "FSSAI Registration",
    category: "registration",
    summary: "Food business operator licence for restaurants, manufacturers, and traders.",
    seoDescription:
      "FSSAI registration in Kolkata for restaurants, manufacturers, and food traders. Licence category guidance, application filing, and renewal support from TaxSimpl.",
    description:
      "We determine the correct FSSAI category, prepare applications, and guide you through renewal and display requirements.",
    timeline: "7–20 working days depending on licence type",
  },
  {
    slug: "msme-registration",
    title: "MSME / Udyam Registration",
    category: "registration",
    summary: "Register your micro, small, or medium enterprise on the Udyam portal.",
    seoDescription:
      "MSME Udyam registration in Kolkata — classify your enterprise correctly, complete portal filing, and unlock scheme and tender benefits with TaxSimpl guidance.",
    description:
      "Udyam registration can unlock benefits and is often required for tenders and schemes. We complete registration using your business and Aadhaar details.",
    timeline: "1–3 working days",
  },
  {
    slug: "nri-income-tax",
    title: "NRI Income Tax & RNOR",
    category: "nri",
    summary: "ITR filing, residency planning, and RNOR guidance for returning NRIs.",
    seoDescription:
      "NRI income tax and RNOR advisory in Kolkata — residency rules, DTAA benefits, PAN, ITR filing, and FEMA compliance from TaxSimpl's dedicated NRI desk.",
    description:
      "We help NRIs and returning residents understand Indian tax residency, file returns, apply for PAN, and plan transitions including RNOR benefits where applicable. Our team handles foreign income reporting, DTAA relief, and repatriation queries in plain language.",
    timeline: "2–7 working days depending on income sources and residency status",
    documents: [
      "Passport and visa / residency proof",
      "PAN or PAN application details",
      "NRE/NRO bank statements",
      "India and foreign income proofs",
      "Foreign tax returns, if applicable",
    ],
    faqs: [
      {
        question: "Am I taxed in India as an NRI?",
        answer:
          "Indian tax applies to income earned or received in India. Residency status, DTAA provisions, and the type of income determine your final liability.",
      },
      {
        question: "What is RNOR status?",
        answer:
          "Resident but Not Ordinarily Resident (RNOR) status can apply when you return to India, potentially offering transitional tax benefits on certain foreign income.",
      },
      {
        question: "Do NRIs need to file ITR in India?",
        answer:
          "If you have taxable income in India above basic exemption, or need to claim a refund or carry forward losses, filing is usually required.",
      },
    ],
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

export function getServiceSeoDescription(service: Service): string {
  return service.seoDescription ?? service.summary;
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}
