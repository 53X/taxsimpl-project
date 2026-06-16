import type { Metadata } from "next";

import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { buildBreadcrumbSchema, canonicalMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.legalName} — how we collect, use, and protect your information.`,
  ...canonicalMetadata("/privacy"),
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How TaxSimpl Advisors LLP handles your personal and business information."
      />
      <section className="section-padding">
        <div className="prose prose-neutral mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <p>
            {siteConfig.legalName} (&ldquo;TaxSimpl&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
            respects your privacy. This policy describes what information we collect when you
            visit our website or contact us, and how we use it.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
            Information we collect
          </h2>
          <p>
            When you submit our contact form, call us, or email us, we may collect your name,
            phone number, email address, business details, and any information you choose to
            share about your tax or compliance needs.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
            How we use information
          </h2>
          <p>
            We use your information to respond to enquiries, provide professional services,
            send compliance reminders where applicable, and improve our website. We do not sell
            your personal data to third parties.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
            Data security
          </h2>
          <p>
            We take reasonable technical and organisational measures to protect client
            information. Professional engagement terms may include additional confidentiality
            obligations under ICAI standards.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
            Contact
          </h2>
          <p>
            For privacy-related questions, email{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-secondary hover:underline">
              {siteConfig.email}
            </a>{" "}
            or write to us at our Kolkata office address listed on the contact page.
          </p>
        </div>
      </section>
    </>
  );
}
