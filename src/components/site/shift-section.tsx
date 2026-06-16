import { Check, X } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { shiftComparison } from "@/lib/home-content";

export function ShiftSection() {
  return (
    <section className="border-y border-border bg-muted/40 section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="section-eyebrow">The Shift</p>
          <h2 className="heading-section max-w-3xl">
            From compliance chaos to <em className="heading-accent">calm clarity.</em>
          </h2>
          <p className="max-w-2xl text-body">
            Most businesses lose hours every week to messy compliance. We rebuilt the entire
            experience with partner-level attention and proactive advisory.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="surface-card h-full">
              <p className="mb-5 text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                Before
              </p>
              <ul className="space-y-4">
                {shiftComparison.before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                      <X className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="surface-card h-full border-primary/15 bg-primary/[0.03]">
              <p className="mb-5 text-xs font-semibold tracking-[0.15em] text-secondary uppercase">
                With TaxSimpl
              </p>
              <ul className="space-y-4">
                {shiftComparison.after.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
