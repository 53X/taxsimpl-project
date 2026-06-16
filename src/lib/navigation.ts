export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/services/income-tax-filing", label: "ITR Filing" },
  { href: "/blogs", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = {
  company: [
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services/gst-registration", label: "Tax & GST" },
    { href: "/services/private-limited-company", label: "Registration" },
    { href: "/services/company-annual-filing", label: "Accounting" },
    { href: "/services/fssai-registration", label: "Trademark" },
  ],
} as const;
