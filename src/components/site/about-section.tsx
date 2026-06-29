import Link from "next/link";

import { Reveal } from "@/components/site/reveal";

import { aboutNarrative } from "@/lib/home-content";

const homepageAboutPreview = aboutNarrative.slice(0, 2);

export function AboutSection() {
  return (
    <section id="about" className="border-t-2 border-border bg-card section-padding">
      <div className="mx-auto min-w-0 max-w-3xl">
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
      </div>
    </section>
  );
}
