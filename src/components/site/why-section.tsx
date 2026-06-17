import { Reveal } from "@/components/site/reveal";

import { testimonials, whyUsItems } from "@/lib/home-content";



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

                <p className="font-[family-name:var(--font-heading)] text-3xl text-accent/70">

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



        <Reveal delay={120} className="mt-12">

          <div className="rounded-2xl border-2 border-border bg-primary px-6 py-8 text-primary-foreground md:px-10 md:py-10">

            <p className="text-xs font-semibold tracking-[0.15em] text-primary-foreground/70 uppercase">

              Loved by founders

            </p>

            <h3 className="mt-3 font-[family-name:var(--font-heading)] text-3xl">Built on trust.</h3>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {testimonials.map((item) => (

                <blockquote key={item.author} className="rounded-xl bg-white/5 p-5">

                  <p className="text-sm leading-relaxed text-primary-foreground/90 italic">

                    &ldquo;{item.quote}&rdquo;

                  </p>

                  <footer className="mt-4 text-xs font-medium tracking-wide text-accent">

                    — {item.author}

                  </footer>

                </blockquote>

              ))}

            </div>

          </div>

        </Reveal>

      </div>

    </section>

  );

}

