export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const footerNav = {
  company: [
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ],
  services: [
    { href: "/services/income-tax-advisory-compliance", label: "Income Tax Advisory" },
    { href: "/services/gst-registration-compliance", label: "GST Compliance" },
    { href: "/services/accounting-bookkeeping", label: "Accounting & Bookkeeping" },
    { href: "/services/roc-company-law-compliance", label: "ROC & Company Law" },
    { href: "/services/audit-assurance", label: "Audit & Assurance" },
    { href: "/services/virtual-cfo", label: "Virtual CFO" },
    { href: "/services/business-registration-startup", label: "Business Registration" },
    { href: "/services/fema-nri-taxation", label: "FEMA & NRI Taxation" },
  ],
} as const;
