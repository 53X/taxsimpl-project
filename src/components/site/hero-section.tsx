import Link from "next/link";

import { ArrowUpRight, Shield } from "lucide-react";



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

        <div className="editorial-masthead animate-fade-up">

          <span>Vol. 01 · Issue 26</span>

          <span className="hidden sm:inline">The Quarterly of Indian Compliance</span>

          <span>Kolkata · Est. 2014</span>

        </div>



        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16">

          <div className="animate-fade-up">

            <span className="cover-badge">

              <Shield className="size-3.5 text-accent" />

              The Cover Story

            </span>

            <p className="mt-8 max-w-2xl text-lede">

              A chartered firm for the next generation of Indian founders — built on craft,

              not paperwork.

            </p>



            <h1 className="heading-editorial mt-6 max-w-4xl">

              Institutional-grade{" "}

              <em className="heading-accent">financial clarity</em> for growing businesses.

            </h1>

            <p className="mt-6 max-w-2xl text-body md:text-lg">

              {siteConfig.legalName} delivers premium CA services, tax planning, GST

              compliance, company registration and virtual CFO advisory for{" "}

              <em className="font-[family-name:var(--font-heading)] text-accent italic">

                500+ Indian businesses

              </em>{" "}

              — without the clutter of paper, jargon, or delay.

            </p>



            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link href="/contact" className="btn-primary">

                Book a consultation

                <ArrowUpRight className="size-4" />

              </Link>

              <Link href="/services" className="btn-link">

                Read all services →

              </Link>

            </div>

          </div>



          <aside className="space-y-6 lg:pt-16">

            <div className="surface-card">

              <p className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase">

                From the desk

              </p>

              <blockquote className="mt-4 font-[family-name:var(--font-heading)] text-2xl leading-snug text-foreground italic">

                &ldquo;Clarity in finance is not an expense — it is the highest-return

                investment a business can make.&rdquo;

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



        <div className="mt-14 border-t border-border pt-8">

          <div className="mb-4 flex items-center justify-between gap-4">

            <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">

              Inside this issue

            </p>

            <p className="text-xs text-muted-foreground">01 — 06</p>

          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">

            {serviceIndex.map((item) => (

              <Link

                key={item.num}

                href={item.href}

                className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/20 hover:bg-muted/50"

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

