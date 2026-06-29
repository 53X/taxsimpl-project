import Link from "next/link";

import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { aboutHighlights, aboutNarrative } from "@/lib/home-content";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { formatAddress, siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "About Us",
  description:
    "TaxSimpl Advisors LLP — technology-driven tax, accounting, and business advisory in Kolkata for startups, SMEs, professionals, and NRIs across India.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About TaxSimpl"
        title="A firm built on trust, precision and deep expertise"
        description="Trusted tax and business advisors for individuals, founders, professionals, and growing businesses."
      />

      <section className="section-padding">
        <div className="mx-auto grid min-w-0 max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="min-w-0">
            <h2 className="heading-section">Who we are</h2>
            <div className="mt-6 space-y-4 text-body text-muted-foreground">
              {aboutNarrative.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <div className="surface-card">
              <p className="section-eyebrow">Why clients choose us</p>
              <ul className="list-arrow mt-4">
                {aboutHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y-2 border-border bg-muted/40 section-padding">
        <div className="mx-auto min-w-0 max-w-7xl">
          <Reveal className="min-w-0">
            <h2 className="heading-section">Our approach</h2>
            <div className="mt-8 grid gap-5 overflow-x-clip md:grid-cols-3">
              <div className="surface-card">
                <h3 className="text-center font-[family-name:var(--font-heading)] text-xl break-words text-foreground">
                  Clarity first
                </h3>
                <p className="mt-2 card-body">
                  We explain options in plain language before any filing — no jargon without
                  context.
                </p>
              </div>
              <div className="surface-card">
                <h3 className="text-center font-[family-name:var(--font-heading)] text-xl break-words text-foreground">
                  Proactive compliance
                </h3>
                <p className="mt-2 card-body">
                  Calendar-synced reminders, regulatory tracking, and notice support before
                  problems escalate.
                </p>
              </div>
              <div className="surface-card">
                <h3 className="text-center font-[family-name:var(--font-heading)] text-xl break-words text-foreground">
                  Partner access
                </h3>
                <p className="mt-2 card-body">
                  Senior partners stay involved on critical decisions — not just at onboarding.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <Reveal className="mx-auto min-w-0 max-w-3xl text-center">
          <h2 className="heading-section">Visit us in Kolkata</h2>
          <p className="mt-4 text-muted-foreground">{formatAddress()}</p>
          <p className="mt-2 text-sm text-muted-foreground">{siteConfig.hours}</p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Talk to our team
          </Link>
        </Reveal>
      </section>
    </>
  );
}
