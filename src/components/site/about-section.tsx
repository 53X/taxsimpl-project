import Link from "next/link";

import { Reveal } from "@/components/site/reveal";

import { aboutNarrative, coreExpertise } from "@/lib/home-content";

const homepageAboutPreview = aboutNarrative.slice(0, 2);

export function AboutSection() {
  return (
    <section id="about" className="border-t-2 border-border bg-card section-padding">
      <div className="mx-auto grid min-w-0 max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="text-center">
          <p className="section-eyebrow">About Us</p>
          <h2 className="heading-section">
            A firm built on <em className="heading-accent">trust, precision</em> and deep expertise
          </h2>
          <div className="mt-6 space-y-4 text-body text-muted-foreground">
            {homepageAboutPreview.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <Link href="/about" className="btn-link mx-auto mt-6 inline-flex cursor-pointer">
            Read our full story →
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card-elevated">
            <p className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase">
              Our Services
            </p>
            <ul className="list-arrow mt-6">
              {coreExpertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="surface-card-compact mt-8 flex flex-col items-center justify-center gap-4 bg-muted/50 p-5 text-center sm:flex-row">
              <p className="shrink-0 font-[family-name:var(--font-heading)] text-4xl text-accent sm:text-5xl">15+</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Years of combined partner experience in Big-4 and national CA firms
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
