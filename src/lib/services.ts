export type ServiceCategory =
  | "start-a-business"
  | "compliance"
  | "audit"
  | "registration"
  | "nri"
  | "advisory";

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
    description: "Stay on top of GST, TDS, ITR, payroll, and annual filings.",
  },
  audit: {
    label: "Audit",
    description: "Independent audits, assurance, and internal control reviews.",
  },
  registration: {
    label: "Registration",
    description: "Licences and registrations your business may need.",
  },
  nri: {
    label: "NRI corner",
    description: "Tax and compliance support for non-resident Indians.",
  },
  advisory: {
    label: "Advisory",
    description: "Strategic tax planning, CFO support, and financial workshops.",
  },
};

export const services: Service[] = [
  {
    slug: "income-tax-advisory-compliance",
    title: "Income Tax Advisory & Compliance",
    category: "compliance",
    summary:
      "ITR filing, advance tax, TDS, and notice support for individuals and businesses in Kolkata and across India.",
    seoDescription:
      "Income tax advisory and ITR filing in Kolkata for salaried professionals, freelancers, and businesses. Accurate returns, deduction planning, advance tax, and notice support from TaxSimpl CAs.",
    description:
      "Whether you are salaried, self-employed, or running a company, we prepare and file returns, plan advance tax, claim eligible deductions, and respond to scrutiny and assessment notices. Our team explains your tax position in plain language — no jargon — and keeps you ahead of CBDT deadlines.",
    timeline: "2–5 working days after documents are received",
    documents: [
      "PAN",
      "Form 16 / income details",
      "Investment and deduction proofs",
      "Bank statements",
      "TDS certificates (Form 16A / 26AS)",
    ],
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
      {
        question: "Can you help with income tax notices?",
        answer:
          "Yes. We review notices, prepare replies, and represent you in assessments and appeals where needed.",
      },
    ],
  },
  {
    slug: "gst-registration-compliance",
    title: "GST Registration & Compliance",
    category: "compliance",
    summary:
      "GSTIN registration, return filing, reconciliations, and advisory for businesses in West Bengal and across India.",
    seoDescription:
      "GST registration and compliance in Kolkata with TaxSimpl — GSTIN issuance, GSTR-1 and 3B filing, reconciliations, and a practical compliance calendar. Book a free consultation today.",
    description:
      "We help businesses register under GST, classify supplies correctly, file monthly and annual returns, reconcile GSTR-2B with books, and respond to department queries. Whether you are a trader in Kolkata or a service provider across states, we set up a compliance calendar that fits your operations.",
    timeline: "Registration: 3–7 working days; returns: monthly or quarterly per your filing frequency",
    documents: [
      "PAN of business",
      "Address proof for place of business",
      "Bank account details",
      "Authorisation letter and ID proof of signatory",
      "Partnership deed / incorporation certificate, if applicable",
    ],
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
      {
        question: "Do you handle GST notices and audits?",
        answer:
          "Yes. We assist with scrutiny notices, departmental audits, and reconciliation mismatches.",
      },
    ],
  },
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping Services",
    category: "compliance",
    summary:
      "Day-to-day bookkeeping, bank reconciliations, and financial statements that keep your business audit-ready.",
    seoDescription:
      "Accounting and bookkeeping services in Kolkata — cloud-based books, monthly reconciliations, MIS reports, and audit-ready financial statements from TaxSimpl Advisors LLP.",
    description:
      "Accurate books are the foundation of every compliance filing. We maintain your ledgers, reconcile bank and GST data, prepare monthly MIS, and close books for year-end reporting. Our team works with Tally, Zoho Books, and other platforms used by SMEs across West Bengal.",
    timeline: "Monthly bookkeeping on an ongoing retainer; year-end close within 2–3 weeks of data receipt",
    documents: [
      "Bank statements and payment proofs",
      "Sales and purchase invoices",
      "Expense bills and petty cash records",
      "Payroll summaries",
      "Previous year trial balance, if any",
    ],
    faqs: [
      {
        question: "Do you work with our existing accounting software?",
        answer:
          "Yes. We support Tally, Zoho Books, QuickBooks, and Excel-based workflows. We can also recommend a setup if you are starting fresh.",
      },
      {
        question: "How often will I receive financial reports?",
        answer:
          "Most retainers include monthly trial balance and key MIS. Custom reporting frequency can be agreed at onboarding.",
      },
    ],
  },
  {
    slug: "roc-company-law-compliance",
    title: "ROC & Company Law Compliance",
    category: "compliance",
    summary:
      "MCA annual filings, board resolutions, director KYC, and Companies Act compliance for companies and LLPs.",
    seoDescription:
      "ROC and company law compliance in Kolkata — AOC-4, MGT-7, DIR-3 KYC, LLP Form 11, and MCA deadlines managed by TaxSimpl. Stay compliant without last-minute stress.",
    description:
      "We prepare annual returns and financial statements under the Companies Act, file LLP statements, track director DIN KYC, and handle event-based filings such as director changes and share allotments. Our team coordinates with your accounts team and ensures MCA deadlines are met before penalties apply.",
    timeline: "Varies by financial year-end and data readiness; event-based filings typically 3–7 working days",
    documents: [
      "Audited financial statements",
      "Board report and director details",
      "Shareholding pattern",
      "DSC of authorised signatory",
      "Registered office proof",
    ],
    faqs: [
      {
        question: "What happens if ROC filings are delayed?",
        answer:
          "Late filing attracts additional fees and can affect director compliance status. We track deadlines and file before penalties apply.",
      },
      {
        question: "Do you handle LLP compliance as well?",
        answer:
          "Yes. We file LLP Form 8 and Form 11, manage partner changes, and advise on LLP agreement updates.",
      },
    ],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance Services",
    category: "audit",
    summary:
      "Tax audit, statutory audit, LLP audit, and assurance engagements under Indian law.",
    seoDescription:
      "Audit and assurance services in Kolkata — tax audit under Section 44AB, statutory audit, LLP audit, and Form 3CD reports from TaxSimpl chartered accountants.",
    description:
      "Our team conducts tax audits under Section 44AB, statutory audits for companies, LLP audits, and other assurance engagements as required by law or lenders. We issue audit reports, highlight areas for better record-keeping, and help you stay ready for assessments and due diligence.",
    timeline: "Typically 2–4 weeks after books and schedules are shared",
    documents: [
      "Books of account and trial balance",
      "Bank statements for the financial year",
      "GST returns and TDS statements",
      "Previous ITR and audit report, if any",
      "Fixed asset register and inventory details",
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
      {
        question: "Do you audit NGOs and trusts?",
        answer:
          "Yes. We conduct audits for societies, trusts, and Section 8 companies as required by donors, regulators, or the Income Tax Act.",
      },
    ],
  },
  {
    slug: "virtual-cfo",
    title: "Virtual CFO Services",
    category: "advisory",
    summary:
      "CFO-level financial leadership, cash flow planning, and board-ready reporting for growing businesses.",
    seoDescription:
      "Virtual CFO services in Kolkata — cash flow forecasting, budgeting, investor reporting, and strategic finance support for startups and SMEs from TaxSimpl Advisors LLP.",
    description:
      "Not every growing business needs a full-time CFO, but every business needs financial clarity. We act as your outsourced finance head — building budgets, monitoring cash flow, preparing board and investor reports, and advising on fundraising readiness. Ideal for Kolkata startups and SMEs scaling beyond basic bookkeeping.",
    timeline: "Engagement begins within 5–7 business days after discovery call",
    documents: [
      "Last 12 months financial statements",
      "Bank statements and cash flow summary",
      "Outstanding receivables and payables ageing",
      "Existing budgets or projections, if any",
    ],
    faqs: [
      {
        question: "How is Virtual CFO different from bookkeeping?",
        answer:
          "Bookkeeping records what happened. A Virtual CFO interprets the numbers, forecasts what is ahead, and advises on decisions — hiring, pricing, fundraising, and cost control.",
      },
      {
        question: "Is this suitable for early-stage startups?",
        answer:
          "Yes, especially when you are raising funds, managing burn rate, or preparing for your first statutory audit.",
      },
    ],
  },
  {
    slug: "corporate-training",
    title: "Corporate Training & Financial Workshops",
    category: "advisory",
    summary:
      "Practical workshops on GST, income tax, payroll, and finance for teams in Kolkata and across India.",
    seoDescription:
      "Corporate tax and finance training in Kolkata — GST workshops, ITR awareness sessions, and compliance training for finance teams and business owners from TaxSimpl.",
    description:
      "Tax rules change often, and your team should not learn them from a notice. We conduct customised workshops on GST, TDS, income tax, payroll compliance, and basic financial literacy for business owners and finance staff. Sessions are practical, India-focused, and tailored to your industry.",
    timeline: "Workshops scheduled 2–4 weeks in advance; half-day or full-day formats available",
    documents: [
      "List of participants and their roles",
      "Topics or pain points to cover",
      "Sample invoices or processes for case studies, if relevant",
    ],
    faqs: [
      {
        question: "Can training be done online?",
        answer:
          "Yes. We deliver sessions in person in Kolkata or via video for teams across India.",
      },
      {
        question: "What topics do you cover?",
        answer:
          "Common topics include GST return filing, TDS compliance, ITR basics for salaried staff, ROC compliance for company secretaries, and finance for non-finance founders.",
      },
    ],
  },
  {
    slug: "payroll-compliance",
    title: "Payroll & Compliance Management",
    category: "compliance",
    summary:
      "Salary processing, PF, ESI, TDS on salary, and labour law compliance for employers in West Bengal.",
    seoDescription:
      "Payroll and compliance management in Kolkata — salary processing, PF and ESI filings, Form 16, and labour law compliance from TaxSimpl Advisors LLP.",
    description:
      "We manage monthly payroll, calculate TDS on salary, file PF and ESI returns, issue Form 16, and keep you aligned with Shops & Establishments and other labour requirements. Whether you employ five people or fifty, we reduce payroll errors and compliance gaps.",
    timeline: "Monthly payroll cycle; new employer setup within 5–7 working days",
    documents: [
      "Employee master with PAN and bank details",
      "Salary structure and CTC breakup",
      "Attendance or leave records",
      "Previous PF / ESI registration details, if any",
    ],
    faqs: [
      {
        question: "Do you register new employers for PF and ESI?",
        answer:
          "Yes. We handle fresh registrations and ongoing monthly filings on your behalf.",
      },
      {
        question: "Can employees access payslips online?",
        answer:
          "We can set up digital payslip delivery as part of your payroll retainer.",
      },
    ],
  },
  {
    slug: "business-registration-startup",
    title: "Business Registration & Startup Advisory",
    category: "start-a-business",
    summary:
      "Company, LLP, proprietorship, and licence registration with end-to-end startup advisory.",
    seoDescription:
      "Business registration in Kolkata — private limited company, LLP, OPC, proprietorship, MSME Udyam, FSSAI, and startup advisory from TaxSimpl Advisors LLP.",
    description:
      "Starting a business involves more than a certificate. We help you choose between Pvt Ltd, LLP, OPC, or proprietorship, handle MCA incorporation, draft LLP agreements, complete MSME Udyam and FSSAI registrations, and explain post-incorporation compliance. Our startup advisory covers tax structure, GST applicability, and first-year compliance planning.",
    timeline: "Proprietorship / MSME: 1–5 days; LLP / Pvt Ltd: 7–15 working days (subject to MCA processing)",
    documents: [
      "PAN and Aadhaar of promoters / directors",
      "Address proof for registered office",
      "Passport-size photographs",
      "Bank statement or utility bill",
      "Business activity description",
    ],
    faqs: [
      {
        question: "Which structure is right for my startup?",
        answer:
          "It depends on funding plans, number of founders, and liability concerns. We recommend the right structure after a short discovery call.",
      },
      {
        question: "Do you help with MSME and FSSAI registration?",
        answer:
          "Yes. Udyam registration and FSSAI licences for food businesses are part of our registration practice.",
      },
      {
        question: "Can one person start a company?",
        answer:
          "Yes — through a One Person Company (OPC). For two or more founders, Pvt Ltd or LLP may be more suitable.",
      },
    ],
  },
  {
    slug: "fema-nri-taxation",
    title: "FEMA & NRI Taxation",
    category: "nri",
    summary:
      "ITR filing, FEMA compliance, RNOR planning, and repatriation guidance for NRIs and returning residents.",
    seoDescription:
      "FEMA and NRI taxation in Kolkata — residency rules, DTAA benefits, PAN, ITR filing, and repatriation compliance from TaxSimpl's dedicated NRI desk.",
    description:
      "We help NRIs and returning residents understand Indian tax residency, file returns, apply for PAN, and plan transitions including RNOR benefits where applicable. Our team handles foreign income reporting, FEMA compliance for property and investments, DTAA relief, and repatriation queries in plain language.",
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
  {
    slug: "international-tax-dtaa",
    title: "International Tax & DTAA Advisory",
    category: "nri",
    summary:
      "Cross-border tax planning, DTAA relief, transfer pricing basics, and foreign tax credit guidance.",
    seoDescription:
      "International tax and DTAA advisory in Kolkata — cross-border transactions, treaty benefits, foreign tax credits, and expatriate tax planning from TaxSimpl.",
    description:
      "Cross-border income raises questions about where tax is due and how to avoid double taxation. We advise on DTAA benefits, foreign tax credits, withholding tax on payments abroad, and compliance for expatriates working in India or Indians earning overseas income. Our guidance is practical and aligned with Indian tax law.",
    timeline: "Advisory engagements typically 5–10 working days after document review",
    documents: [
      "Details of foreign income or payments",
      "Tax residency certificates",
      "Foreign tax returns or withholding certificates",
      "Contracts or invoices for cross-border transactions",
    ],
    faqs: [
      {
        question: "What is DTAA and how does it help?",
        answer:
          "A Double Taxation Avoidance Agreement between India and another country can reduce or eliminate tax on the same income in both countries, subject to conditions.",
      },
      {
        question: "Do you handle transfer pricing?",
        answer:
          "We advise on basic transfer pricing documentation and related-party transactions for SMEs with cross-border dealings. Complex TP studies may involve specialist partners.",
      },
    ],
  },
  {
    slug: "offshore-accounting",
    title: "Offshore Accounting Services",
    category: "compliance",
    summary:
      "Bookkeeping and reporting support for India-linked businesses with overseas operations or parents.",
    seoDescription:
      "Offshore accounting services from Kolkata — India books, multi-currency reconciliations, and reporting for businesses with overseas parents or branches from TaxSimpl.",
    description:
      "Businesses with overseas parents, branches, or shared service centres need India books that match global reporting standards. We maintain ledgers, reconcile inter-company transactions, prepare India-specific schedules, and coordinate with your overseas finance team — all from our Kolkata practice with secure digital workflows.",
    timeline: "Ongoing monthly retainer; setup within 1–2 weeks",
    documents: [
      "Chart of accounts and reporting templates",
      "Inter-company agreements",
      "Bank statements in INR and foreign currency",
      "Overseas parent reporting requirements",
    ],
    faqs: [
      {
        question: "Can you align with our global accounting policies?",
        answer:
          "Yes. We adapt to your group's chart of accounts and reporting calendar while meeting Indian statutory requirements.",
      },
      {
        question: "Do you handle multi-currency transactions?",
        answer:
          "Yes. We record forex gains and losses and reconcile foreign currency bank accounts.",
      },
    ],
  },
  {
    slug: "internal-controls-risk",
    title: "Internal Financial Controls & Risk Advisory",
    category: "audit",
    summary:
      "Internal control reviews, process documentation, and risk assessments for growing organisations.",
    seoDescription:
      "Internal financial controls and risk advisory in Kolkata — process reviews, SOP documentation, and control testing for SMEs and NGOs from TaxSimpl.",
    description:
      "Strong internal controls reduce fraud risk, audit findings, and operational surprises. We review your payment, procurement, and revenue processes, document standard operating procedures, and recommend practical improvements. Useful before a statutory audit, fundraise, or regulatory inspection.",
    timeline: "2–4 weeks depending on organisation size and scope",
    documents: [
      "Organisation chart and role descriptions",
      "Sample transaction workflows",
      "Existing policies or checklists",
      "Prior audit observations, if any",
    ],
    faqs: [
      {
        question: "Is this only for large companies?",
        answer:
          "No. Growing SMEs, family businesses, and NGOs benefit from basic control frameworks before problems appear.",
      },
      {
        question: "Will you help implement the recommendations?",
        answer:
          "Yes. We can assist with SOP rollout, approval matrices, and periodic control testing on retainer.",
      },
    ],
  },
  {
    slug: "sez-stpi-compliance",
    title: "SEZ/STPI Compliance Services",
    category: "compliance",
    summary:
      "SEZ and STPI registrations, softex filings, and export-oriented unit compliance in India.",
    seoDescription:
      "SEZ and STPI compliance in Kolkata and across India — unit registration, softex filing, and export obligation tracking from TaxSimpl Advisors LLP.",
    description:
      "Units in SEZs and STPI registrations face specific filing and documentation requirements. We assist with registrations, monthly and annual returns, softex filings for software exports, and tracking of export obligations. Our team helps IT, BPO, and export businesses stay compliant with development commissioner requirements.",
    timeline: "Registration: 2–4 weeks; ongoing filings per regulatory calendar",
    documents: [
      "Incorporation documents",
      "Export contracts or invoices",
      "Bank realisation certificates (FIRC)",
      "Project and employee details for STPI units",
    ],
    faqs: [
      {
        question: "Do you handle both SEZ and STPI units?",
        answer:
          "Yes. We support STPI-registered software exporters and SEZ units subject to their respective compliance calendars.",
      },
      {
        question: "What happens if softex filings are missed?",
        answer:
          "Delayed filings can affect duty benefits and attract penalties. We maintain a compliance calendar to prevent lapses.",
      },
    ],
  },
  {
    slug: "tax-planning-business-advisory",
    title: "Tax Planning & Business Advisory",
    category: "advisory",
    summary:
      "Legitimate tax planning, business structure advice, and growth-oriented financial advisory.",
    seoDescription:
      "Tax planning and business advisory in Kolkata — structure optimisation, deduction planning, succession advice, and growth strategy from TaxSimpl chartered accountants.",
    description:
      "Good tax planning is legal, forward-looking, and aligned with your business goals. We advise on entity structure, capital gains planning, succession and family arrangements, deduction optimisation, and transaction structuring — always within the law. Ideal for business owners in Kolkata and across West Bengal planning their next phase of growth.",
    timeline: "Initial advisory memo within 7–10 working days after discovery",
    documents: [
      "Current financial statements",
      "Details of planned transaction or restructuring",
      "Family or shareholder information, if relevant",
      "Previous tax returns",
    ],
    faqs: [
      {
        question: "Is tax planning the same as tax evasion?",
        answer:
          "No. Tax planning uses legitimate provisions in the law to optimise liability. We do not advise on unlawful arrangements.",
      },
      {
        question: "Can you advise before I buy or sell a business?",
        answer:
          "Yes. Pre-transaction structuring can significantly affect capital gains, stamp duty, and post-deal compliance.",
      },
    ],
  },
];

export const featuredServiceSlugs = [
  "gst-registration-compliance",
  "income-tax-advisory-compliance",
  "business-registration-startup",
  "fema-nri-taxation",
  "roc-company-law-compliance",
  "audit-assurance",
  "virtual-cfo",
  "tax-planning-business-advisory",
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
