export const siteConfig = {
  name: "TaxSimpl",
  legalName: "TaxSimpl Advisors LLP",
  description:
    "Premium Chartered Accountant firm in Kolkata — GST, income tax, company registration, virtual CFO, NRI taxation, audit, and tax planning for Indian businesses.",
  url: "https://taxsimpl.com",
  phone: "+917019336899",
  phoneDisplay: "+91 70193 36899",
  email: "info@taxsimpl.com",
  whatsapp: "917019336899",
  address: {
    line1: "AS 71, Block B, Jyangra Ghoshpara, Baguiati",
    line2: "Near Naba Jagrata Sangh Club",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700059",
    country: "India",
  },
  hours: "Mon – Sat: 9:30 AM – 6:30 PM IST",
  geo: {
    latitude: 22.6139,
    longitude: 88.4139,
  },
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:30",
    closes: "18:30",
  },
} as const;

export function formatAddress(): string {
  const { line1, line2, city, state, pincode } = siteConfig.address;
  return `${line1}, ${line2}, ${city}, ${state} ${pincode}`;
}

export function getMapEmbedUrl(): string {
  const query = encodeURIComponent(formatAddress());
  return `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}

export function getGoogleMapsUrl(): string {
  const query = encodeURIComponent(formatAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function getWhatsAppUrl(message?: string): string {
  const text = message ?? "Hi TaxSimpl, I'd like to enquire about your services.";
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}
