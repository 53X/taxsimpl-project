import { Reveal } from "@/components/site/reveal";

import { processSteps } from "@/lib/home-content";



export function ProcessSection() {

  return (

    <section id="process" className="section-padding">

      <div className="mx-auto max-w-7xl">

        <Reveal className="max-w-2xl">

          <p className="section-eyebrow">Your Journey</p>

          <h2 className="heading-section">

            Simple, transparent <em className="heading-accent">onboarding</em>

          </h2>

          <p className="text-body">

            We partner with you at every stage — from first idea to ongoing compliance.

          </p>

        </Reveal>



        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {processSteps.map((step, index) => (

            <Reveal key={step.title} delay={index * 80}>

              <div className="surface-card h-full">

                <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">

                  Step {String(index + 1).padStart(2, "0")}

                </p>

                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-[1.35rem] leading-snug text-foreground">

                  {step.title}

                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">

                  {step.description}

                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}

