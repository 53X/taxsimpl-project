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
    { href: "/services/gst-registration", label: "Tax & GST" },
    { href: "/services/private-limited-company", label: "Registration" },
    { href: "/services/company-annual-filing", label: "Accounting" },
    { href: "/services/fssai-registration", label: "Trademark" },
  ],
} as const;
