import Link from "next/link";

import { ArrowUpRight, MapPin, Shield } from "lucide-react";

import { heroStats, serviceIndex } from "@/lib/home-content";

import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="section-padding pb-10 md:pb-14">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-0 hidden h-56 w-56 rounded-full bg-accent/10 blur-3xl md:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-6 left-1/4 hidden h-40 w-40 rounded-full bg-primary/10 blur-3xl md:block"
          />
        </div>

        <ul
          className="animate-fade-up flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium tracking-wide text-muted-foreground"
          aria-label="Trust indicators"
        >
          <li className="inline-flex items-center gap-1.5">
            <Shield className="size-3.5 text-accent" aria-hidden />
            ICAI-regulated practice
          </li>
          <li className="hidden text-border sm:inline" aria-hidden>
            ·
          </li>
          <li className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-accent" aria-hidden />
            Kolkata, West Bengal
          </li>
          <li className="hidden text-border sm:inline" aria-hidden>
            ·
          </li>
          <li>500+ clients across India</li>
        </ul>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16">
          <div className="animate-fade-up">
            <p className="section-eyebrow">Chartered accountants in Kolkata</p>

            <p className="mt-4 max-w-2xl text-lede">
              Trusted tax and business advisors for individuals, founders, professionals, and
              growing businesses.
            </p>

            <h1 className="heading-editorial mt-6 max-w-4xl">
              Institutional-grade{" "}
              <em className="heading-accent">financial clarity</em> for growing businesses.
            </h1>

            <p className="mt-6 max-w-2xl text-body md:text-lg">
              {siteConfig.legalName} delivers premium tax, accounting, GST, company law, and
              Virtual CFO services to{" "}
              <em className="font-[family-name:var(--font-heading)] text-accent italic">
                500+ businesses across India
              </em>
              —combining deep expertise with technology to make compliance simple, timely, and
              strategic.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a consultation
                <ArrowUpRight className="size-4" />
              </Link>
              <Link href="/services" className="btn-link cursor-pointer">
                View all services →
              </Link>
            </div>
          </div>

          <aside className="space-y-6 lg:pt-8">
            <div className="surface-card">
              <p className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase">
                From the desk
              </p>
              <blockquote className="mt-4 font-[family-name:var(--font-heading)] text-2xl leading-snug text-foreground italic">
                &ldquo;Clarity in finance is not an expense — it is the highest-return investment
                a business can make.&rdquo;
              </blockquote>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="stat-pill text-center">
                  <p className="font-[family-name:var(--font-heading)] text-2xl text-foreground md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.65rem] tracking-[0.08em] text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-14 border-t-2 border-border pt-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              Popular services
            </p>
            <Link href="/services" className="btn-link text-xs">
              All services →
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {serviceIndex.map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group flex cursor-pointer items-center gap-3 rounded-xl border-2 border-border bg-card px-4 py-3 shadow-[0_4px_16px_rgba(45,109,163,0.07)] transition-[border-color,background-color,box-shadow] duration-200 hover:border-primary/30 hover:bg-muted/50 hover:shadow-[0_8px_24px_rgba(45,109,163,0.1)]"
              >
                <span className="font-[family-name:var(--font-heading)] text-lg text-accent">
                  {item.num}
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-secondary">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
