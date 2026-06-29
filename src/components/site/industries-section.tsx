import { Reveal } from "@/components/site/reveal";

import { industries } from "@/lib/home-content";



export function IndustriesSection() {

  return (

    <section id="industries" className="border-y-2 border-border bg-muted/40 section-padding">

      <div className="mx-auto max-w-7xl">

        <Reveal>

          <p className="section-eyebrow">Industries</p>

          <h2 className="heading-section">

            We serve clients across <em className="heading-accent">all sectors</em>

          </h2>

        </Reveal>

        <Reveal delay={100}>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {industries.map((industry) => (

              <div

                key={industry}

                className="surface-tile flex items-center gap-3 px-4 py-4 text-sm text-foreground"

              >

                <span className="size-1.5 shrink-0 rounded-full bg-accent" />

                {industry}

              </div>

            ))}

          </div>

        </Reveal>

      </div>

    </section>

  );

}

