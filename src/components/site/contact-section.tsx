import type { ReactNode } from "react";

import { Clock, Mail, MapPin, Phone } from "lucide-react";



import { ContactForm } from "@/components/site/contact-form";

import { GoogleMap } from "@/components/site/google-map";

import { Reveal } from "@/components/site/reveal";

import { formatAddress, siteConfig } from "@/lib/site";



export function ContactSection() {

  return (

    <section id="contact" className="border-t-2 border-border bg-muted/30 section-padding">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          <Reveal>

            <p className="section-eyebrow">Get in Touch</p>

            <h2 className="heading-section">

              Let&apos;s talk about your <em className="heading-accent">business</em>

            </h2>
            <p className="mt-4 max-w-xl text-body">
              Share a few details and we’ll suggest the right next step — timelines, documents,
              and a clear quote.
            </p>



            <div className="mt-8 space-y-5">

              <ContactDetail

                icon={MapPin}

                label="Office Address"

                value={

                  <>

                    {siteConfig.legalName}

                    <br />

                    {formatAddress()}

                  </>

                }

              />

              <ContactDetail

                icon={Phone}

                label="Phone"

                value={

                  <a href={`tel:${siteConfig.phone}`} className="link-muted">

                    {siteConfig.phoneDisplay}

                  </a>

                }

              />

              <ContactDetail

                icon={Mail}

                label="Email"

                value={

                  <a href={`mailto:${siteConfig.email}`} className="link-muted">

                    {siteConfig.email}

                  </a>

                }

              />

              <ContactDetail icon={Clock} label="Office Hours" value={siteConfig.hours} />

            </div>

          </Reveal>



          <Reveal delay={120}>

            <div className="surface-card">

              <ContactForm />

            </div>

          </Reveal>

        </div>



        <Reveal delay={160} className="mt-12">

          <GoogleMap className="h-72 md:h-96" />

        </Reveal>

      </div>

    </section>

  );

}



function ContactDetail({

  icon: Icon,

  label,

  value,

}: {

  icon: typeof MapPin;

  label: string;

  value: ReactNode;

}) {

  return (

    <div className="flex gap-3">

      <Icon className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.5} />

      <div>

        <p className="text-xs font-medium tracking-[0.08em] text-muted-foreground uppercase">

          {label}

        </p>

        <div className="mt-1 text-sm text-foreground">{value}</div>

      </div>

    </div>

  );

}

