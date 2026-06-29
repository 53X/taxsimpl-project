import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/income-tax-filing",
        destination: "/services/income-tax-advisory-compliance",
        permanent: true,
      },
      {
        source: "/services/gst-registration",
        destination: "/services/gst-registration-compliance",
        permanent: true,
      },
      {
        source: "/services/company-annual-filing",
        destination: "/services/roc-company-law-compliance",
        permanent: true,
      },
      {
        source: "/services/tax-audit",
        destination: "/services/audit-assurance",
        permanent: true,
      },
      {
        source: "/services/nri-income-tax",
        destination: "/services/fema-nri-taxation",
        permanent: true,
      },
      {
        source: "/services/private-limited-company",
        destination: "/services/business-registration-startup",
        permanent: true,
      },
      {
        source: "/services/llp-registration",
        destination: "/services/business-registration-startup",
        permanent: true,
      },
      {
        source: "/services/fssai-registration",
        destination: "/services/business-registration-startup",
        permanent: true,
      },
      {
        source: "/services/msme-registration",
        destination: "/services/business-registration-startup",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
