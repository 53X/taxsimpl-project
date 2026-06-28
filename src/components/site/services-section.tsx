import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/reveal";

import { featuredServices } from "@/lib/home-content";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow">Services</p>
          <h2 className="heading-section">
            Everything your business needs, <em className="heading-accent">in one place.</em>
          </h2>
          <p className="text-body">
            End-to-end tax, compliance, accounting, and business advisory for modern Indian
            businesses.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 60} className="h-full">
                <div className="service-card-editorial">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <Icon className="size-5 text-accent" strokeWidth={1.5} />
                    <span className="rounded-full bg-muted px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.08em] text-secondary uppercase">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="heading-card">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="btn-link mt-6 inline-flex w-fit text-sm"
                  >
                    Explore
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
