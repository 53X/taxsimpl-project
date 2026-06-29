import { Reveal } from "@/components/site/reveal";

import { whyUsItems } from "@/lib/home-content";

export function WhySection() {
  return (
    <section id="why" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow">Why Choose Us</p>
          <h2 className="heading-section">
            The TaxSimpl <em className="heading-accent">difference</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {whyUsItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="surface-card h-full">
                <p className="font-[family-name:var(--font-heading)] text-3xl text-primary/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-[1.35rem] leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
