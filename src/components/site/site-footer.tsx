import Link from "next/link";

import { Mail, MapPin, Phone } from "lucide-react";



import { SiteLogo } from "@/components/site/site-logo";

import { footerNav } from "@/lib/navigation";

import { formatAddress, siteConfig } from "@/lib/site";



export function SiteFooter() {

  return (

    <footer className="border-t-2 border-border bg-card">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-16">

        <div className="space-y-4 md:col-span-2 lg:col-span-1">

          <SiteLogo imageClassName="h-9" />

          <p className="text-sm leading-relaxed text-muted-foreground">

            Tax Simplified. Business Amplified.

          </p>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">

            Premium Chartered Accountant & Financial Advisory firm in Kolkata — trusted by

            500+ clients across India and worldwide.

          </p>

        </div>



        <div>

          <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-secondary uppercase">

            Company

          </p>

          <ul className="space-y-2.5 text-sm text-muted-foreground">

            {footerNav.company.map((item) => (

              <li key={item.href}>

                <Link href={item.href} className="hover:text-foreground">

                  {item.label}

                </Link>

              </li>

            ))}

          </ul>

        </div>



        <div>

          <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-secondary uppercase">

            Services

          </p>

          <ul className="space-y-2.5 text-sm text-muted-foreground">

            {footerNav.services.map((item) => (

              <li key={item.href}>

                <Link href={item.href} className="hover:text-foreground">

                  {item.label}

                </Link>

              </li>

            ))}

          </ul>

        </div>



        <div>

          <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-secondary uppercase">

            Reach us

          </p>

          <ul className="space-y-3 text-sm text-muted-foreground">

            <li className="flex gap-2">

              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />

              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">

                {siteConfig.email}

              </a>

            </li>

            <li className="flex gap-2">

              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />

              <a href={`tel:${siteConfig.phone}`} className="hover:text-foreground">

                {siteConfig.phoneDisplay}

              </a>

            </li>

            <li className="flex gap-2">

              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />

              <span>{formatAddress()}</span>

            </li>

          </ul>

        </div>

      </div>



      <div className="border-t-2 border-border">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">

          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">

            <Link href="/privacy" className="hover:text-foreground">

              Privacy

            </Link>

            <Link href="/terms" className="hover:text-foreground">

              Terms

            </Link>

          </div>

        </div>

      </div>

    </footer>

  );

}

