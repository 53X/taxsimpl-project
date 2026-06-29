import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, FileText, HelpCircle } from "lucide-react";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { ContactForm } from "@/components/site/contact-form";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildPageMetadata,
  buildServiceSchema,
} from "@/lib/seo";
import {
  getServiceBySlug,
  getServiceSeoDescription,
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
    description: getServiceSeoDescription(service),
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
          ...(service.faqs?.length ? [buildFaqPageSchema(service.faqs)] : []),
        ]}
      />
      <PageHero
        eyebrow={serviceCategories[service.category].label}
        title={service.title}
        description={service.summary}
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
        }
      />

      <section className="section-padding">
        <div className="mx-auto grid min-w-0 max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="min-w-0 space-y-6">
            <div className="surface-card">
              <p className="mb-2 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                <span className="size-1.5 rounded-full bg-accent" />
                Overview
              </p>
                <p className="card-body">{service.description}</p>
            </div>

            {service.timeline ? (
              <div className="surface-card">
                <p className="mb-2 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                  <Clock className="size-4" />
                  Typical timeline
                </p>
                <p className="card-body">{service.timeline}</p>
              </div>
            ) : null}

            {service.documents?.length ? (
              <div className="surface-card">
                <p className="mb-2 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                  <FileText className="size-4" />
                  Documents usually required
                </p>
                <ul className="list-arrow mt-4 [&>li]:text-base [&>li]:leading-relaxed [&>li]:text-muted-foreground">
                  {service.documents.map((doc) => (
                    <li key={doc}>{doc}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {service.faqs?.length ? (
              <div className="space-y-4">
                <div className="surface-card">
                  <p className="mb-2 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                    <HelpCircle className="size-4" />
                    Common questions
                  </p>
                  <p className="card-body">
                    A few quick answers. If your case is unusual, share details in the form and
                    we’ll guide you.
                  </p>
                </div>
                <dl className="space-y-4">
                  {service.faqs.map((faq) => (
                    <div key={faq.question} className="surface-card">
                      <dt className="break-words font-medium text-foreground">{faq.question}</dt>
                      <dd className="mt-2 card-body">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}

            <div className="flex justify-center">
              <Link href="/services" className="btn-secondary inline-flex">
                All services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="surface-card-elevated min-w-0 lg:sticky lg:top-28">
              <h2 className="text-center font-[family-name:var(--font-heading)] text-xl text-foreground">
                Request a callback
              </h2>
              <p className="mt-2 card-body">
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
