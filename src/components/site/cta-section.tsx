import Link from "next/link";

import { ArrowUpRight } from "lucide-react";



import { Reveal } from "@/components/site/reveal";



export function CtaSection() {

  return (

    <section className="section-padding">

      <Reveal>

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground md:px-12 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />

          <p className="text-xs font-semibold tracking-[0.15em] text-primary-foreground/70 uppercase">

            Free 30-min strategy call

          </p>

          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3.5rem)] leading-tight">

            Ready to simplify <em className="text-accent italic">everything?</em>

          </h2>

          <p className="mt-4 max-w-xl text-primary-foreground/80">

            Book a free 30-minute consultation with a senior partner. No obligations, no sales

            pitch — just honest advice.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link href="/contact" className="btn-on-dark">

              Book your free call

              <ArrowUpRight className="size-4" />

            </Link>

            <Link

              href="/services"

              className="btn-secondary border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-white/5 hover:border-primary-foreground/30"

            >

              See all services

            </Link>

          </div>

        </div>

      </Reveal>

    </section>

  );

}

