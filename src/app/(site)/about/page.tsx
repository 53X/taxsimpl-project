import Link from "next/link";

import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { formatAddress, siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Meet TaxSimpl Advisors LLP — ICAI-regulated chartered accountants in Kolkata serving startups, SMEs, and NRIs across India.",
  path: "/about",
});

const credentials = [
  "Institute of Chartered Accountants of India (ICAI) regulated practice",
  "Big-4 and national firm experience across direct tax, GST, and audit",
  "Dedicated NRI desk for FEMA, DTAA, and cross-border compliance",
  "Partner-led engagements with fixed timelines and transparent fees",
] as const;

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
        description="We help entrepreneurs, business owners, salaried professionals, and NRIs navigate Indian tax law with clarity and confidence."
      />

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="heading-section">Who we are</h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                {siteConfig.legalName} is a Kolkata-based Chartered Accountancy practice
                serving clients across West Bengal, India, and overseas. We combine
                institutional-grade technical depth with plain-language advice — so you
                always know what to do, by when, and why it matters.
              </p>
              <p>
                Our partners have trained and practiced with Big-4 and leading national
                CA firms before building TaxSimpl around one idea: compliance should feel
                like leverage, not a burden.
              </p>
              <p>
                From Baguiati to boardrooms in London and Singapore, we support founders,
                family businesses, and NRIs with GST, income tax, company law, audit, and
                virtual CFO services.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card">
              <p className="section-eyebrow">Credentials</p>
              <ul className="mt-4 space-y-3">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground before:text-accent before:content-['→']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y-2 border-border bg-muted/40 section-padding">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="heading-section">Our approach</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="surface-card">
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-foreground">
                  Clarity first
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We explain options in plain language before any filing — no jargon without
                  context.
                </p>
              </div>
              <div className="surface-card">
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-foreground">
                  Proactive compliance
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Calendar-synced reminders, regulatory tracking, and notice support before
                  problems escalate.
                </p>
              </div>
              <div className="surface-card">
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-foreground">
                  Partner access
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Senior partners stay involved on critical decisions — not just at onboarding.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <Reveal className="mx-auto max-w-3xl text-center">
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
