import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Terms of Engagement",
  description: `Terms of engagement for professional services from ${siteConfig.legalName}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Engagement", path: "/terms" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Engagement"
        description="Standard terms that apply when you engage TaxSimpl for professional services."
      />
      <section className="section-padding">
        <div className="prose-site">
          <p>
            These terms provide a general framework for engaging {siteConfig.legalName} for
            chartered accountancy, tax, GST, audit, and advisory services. Specific scope,
            fees, and timelines are confirmed in a written engagement letter before work
            begins.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
            Professional standards
          </h2>
          <p>
            Our work is performed in accordance with applicable laws, ICAI regulations, and
            relevant accounting and auditing standards. We maintain professional independence
            and confidentiality as required by law.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
            Client responsibilities
          </h2>
          <p>
            Clients are responsible for providing complete and accurate information, documents,
            and approvals on time. Delays in receiving information may affect filing deadlines
            and deliverables.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
            Fees and payment
          </h2>
          <p>
            Fees are quoted in advance based on scope and complexity. Unless otherwise agreed,
            fees are exclusive of GST and government charges. Payment terms are specified in
            the engagement letter.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
            Limitation of liability
          </h2>
          <p>
            Our liability is limited to the extent permitted by law and as set out in the
            engagement letter. We are not responsible for losses arising from incomplete or
            inaccurate information supplied by the client.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
            Questions
          </h2>
          <p>
            Contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-secondary hover:underline">
              {siteConfig.email}
            </a>{" "}
            before engaging our services if you have questions about these terms.
          </p>
        </div>
      </section>
    </>
  );
}
