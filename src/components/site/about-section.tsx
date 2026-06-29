import Link from "next/link";

import { Reveal } from "@/components/site/reveal";

import { aboutNarrative, coreExpertise } from "@/lib/home-content";

const homepageAboutPreview = aboutNarrative.slice(0, 2);

export function AboutSection() {
  return (
    <section id="about" className="border-t-2 border-border bg-card section-padding">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="section-eyebrow">About Us</p>
          <h2 className="heading-section">
            A firm built on <em className="heading-accent">trust, precision</em> and deep expertise
          </h2>
          <div className="mt-6 space-y-4 text-body text-muted-foreground">
            {homepageAboutPreview.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <Link href="/about" className="btn-link mt-6 inline-flex cursor-pointer">
            Read our full story →
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card-elevated">
            <p className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase">
              Our Services
            </p>
            <ul className="mt-6 space-y-3">
              {coreExpertise.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground before:mt-0.5 before:text-accent before:content-['→']"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-5 rounded-xl border-2 border-border bg-muted/50 p-5 shadow-[0_4px_16px_rgba(45,109,163,0.07)]">
              <p className="font-[family-name:var(--font-heading)] text-5xl text-accent">15+</p>
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
