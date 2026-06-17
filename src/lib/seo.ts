import type { Metadata } from "next";

import type { Service } from "@/lib/services";
import { formatAddress, siteConfig } from "@/lib/site";

const siteUrl = siteConfig.url;

export const defaultTitle =
  "Chartered Accountants in Kolkata | TaxSimpl Advisors LLP";

export function pageUrl(path = ""): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function canonicalMetadata(path = ""): Pick<Metadata, "alternates"> {
  return {
    alternates: {
      canonical: pageUrl(path),
    },
  };
}

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  /** Skip the root layout title template (homepage full title). */
  absoluteTitle?: boolean;
  openGraph?: NonNullable<Metadata["openGraph"]>;
  twitter?: Metadata["twitter"];
}

/** Per-page metadata with matching canonical, Open Graph, and Twitter tags. */
export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  openGraph,
  twitter,
}: PageMetadataOptions): Metadata {
  const url = pageUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      url,
      title,
      description,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...twitter,
    },
  };
}

export function sharedSocialMetadata(): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      url: siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: siteConfig.description,
    },
  };
}

export function buildProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: pageUrl("/images/taxsimpl-logo.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.openingHours.days,
        opens: siteConfig.openingHours.opens,
        closes: siteConfig.openingHours.closes,
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description: siteConfig.description,
  };
}

export function buildFaqPageSchema(
  items: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.legalName,
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.address.city,
    },
    url: pageUrl(`/services/${service.slug}`),
  };
}

export function buildBlogPostingSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  authorName: string;
  coverImageUrl?: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteUrl,
    },
    mainEntityOfPage: pageUrl(`/blogs/${post.slug}`),
    url: pageUrl(`/blogs/${post.slug}`),
    ...(post.coverImageUrl ? { image: post.coverImageUrl } : {}),
  };
}

export function buildBreadcrumbSchema(
  items: ReadonlyArray<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}
