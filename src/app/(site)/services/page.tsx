import type { Metadata } from "next";
import Link from "next/link";
import { Clock, FileText } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { buildBreadcrumbSchema, canonicalMetadata } from "@/lib/seo";
import {
  type ServiceCategory,
  serviceCategories,
  services,
} from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services in Kolkata",
  description:
    "Tax, GST, audit, company registration, and NRI services from TaxSimpl Advisors LLP in Kolkata.",
  ...canonicalMetadata("/services"),
};

interface ServicesPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const { category } = await searchParams;
  const activeCategory = category as ServiceCategory | undefined;
  const filtered = activeCategory
    ? services.filter((service) => service.category === activeCategory)
    : services;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="Everything your business needs to stay compliant and grow"
        description="Browse by category or open a service to see timelines, documents, and FAQs."
      />

      <section className="section-padding">
        <Reveal className="mb-10">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/services"
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ease-out",
                !activeCategory
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              )}
            >
              All
            </Link>
            {(Object.keys(serviceCategories) as ServiceCategory[]).map((key) => (
              <Link
                key={key}
                href={`/services?category=${key}`}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ease-out",
                  activeCategory === key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                )}
              >
                {serviceCategories[key].label}
              </Link>
            ))}
          </div>
          {activeCategory ? (
            <p className="mt-4 max-w-3xl text-body">
              {serviceCategories[activeCategory].description}
            </p>
          ) : null}
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((service, index) => (
            <Reveal key={service.slug} delay={index * 50} className="h-full">
              <Link
                href={`/services/${service.slug}`}
                className="service-card-editorial block h-full"
              >
                <p className="mb-2 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                  {serviceCategories[service.category].label}
                </p>
                <h2 className="heading-card">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  {service.timeline ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1">
                      <Clock className="size-3.5 text-accent" />
                      {service.timeline}
                    </span>
                  ) : null}
                  {service.documents?.length ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1">
                      <FileText className="size-3.5 text-accent" />
                      {service.documents.length} docs
                    </span>
                  ) : null}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
