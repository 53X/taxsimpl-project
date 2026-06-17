import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, FileText, HelpCircle } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  buildServiceSchema,
} from "@/lib/seo";
import {
  getServiceBySlug,
  serviceCategories,
  services,
} from "@/lib/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return buildPageMetadata({
    title: `${service.title} in Kolkata`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema(service),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={serviceCategories[service.category].label}
        title={service.title}
        description={service.summary}
      />

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-6">
            <div className="surface-card">
              <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                <span className="size-1.5 rounded-full bg-accent" />
                Overview
              </p>
              <p className="text-body">{service.description}</p>
            </div>

            {service.timeline ? (
              <div className="surface-card">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                  <Clock className="size-4" />
                  Typical timeline
                </p>
                <p className="text-body">{service.timeline}</p>
              </div>
            ) : null}

            {service.documents?.length ? (
              <div className="surface-card">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                  <FileText className="size-4" />
                  Documents usually required
                </p>
                <ul className="mt-4 space-y-2 text-body">
                  {service.documents.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 before:text-accent before:content-['→']"
                    >
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {service.faqs?.length ? (
              <div className="space-y-4">
                <div className="surface-card">
                  <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                    <HelpCircle className="size-4" />
                    Common questions
                  </p>
                  <p className="text-body">
                    A few quick answers. If your case is unusual, share details in the form and
                    we’ll guide you.
                  </p>
                </div>
                <dl className="space-y-4">
                  {service.faqs.map((faq) => (
                    <div key={faq.question} className="surface-card">
                      <dt className="font-medium text-foreground">{faq.question}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}

            <Link href="/services" className="btn-secondary inline-flex">
              All services
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <aside className="surface-card-elevated sticky top-28">
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-foreground">
                Request a callback
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your details and we&apos;ll follow up about {service.title}.
              </p>
              <div className="mt-6">
                <ContactForm defaultService={service.title} />
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
