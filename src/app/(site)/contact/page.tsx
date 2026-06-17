import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { GoogleMap } from "@/components/site/google-map";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { buildBreadcrumbSchema, buildPageMetadata, buildProfessionalServiceSchema } from "@/lib/seo";
import { formatAddress, getWhatsAppUrl, siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact Us in Kolkata",
  description:
    "Contact TaxSimpl Advisors LLP in Kolkata for a free consultation on tax, GST, and business registration.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          buildProfessionalServiceSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your business"
        description="Tell us what you need and our team will respond during business hours."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="surface-card-elevated">
                <ContactForm />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={getWhatsAppUrl()} className="btn-primary">
                  WhatsApp us
                  <ArrowUpRight className="size-4" />
                </a>
                <a href={`tel:${siteConfig.phone}`} className="btn-secondary">
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                We reply during business hours: {siteConfig.hours}.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="surface-card">
                <h2 className="heading-card">Reach us</h2>
                <p className="mt-3 text-body">
                  Kolkata-based team. Remote support available across India and for NRIs.
                </p>
                <ul className="mt-6 space-y-4 text-sm text-foreground">
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-secondary">
                      {siteConfig.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-secondary">
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{formatAddress()}</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{siteConfig.hours}</span>
                  </li>
                </ul>
                <div className="mt-6 rounded-xl border-2 border-border bg-muted/40 p-5">
                  <p className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase">
                    What happens next
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We review your details and share a short checklist of documents and a clear
                    quote before starting.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="mt-12">
            <GoogleMap className="h-80 md:h-[28rem]" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
