import Link from "next/link";

import { Mail, MapPin, Phone } from "lucide-react";



import { SiteLogo } from "@/components/site/site-logo";

import { footerNav } from "@/lib/navigation";

import { formatAddress, siteConfig } from "@/lib/site";



export function SiteFooter() {

  return (

    <footer className="min-w-0 overflow-x-clip border-t-2 border-border bg-card pb-[env(safe-area-inset-bottom,0px)] text-center">

      <div className="mx-auto grid min-w-0 max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-16">

        <div className="flex flex-col items-center space-y-4 md:col-span-2 lg:col-span-1">

          <SiteLogo imageClassName="h-9" />

          <p className="text-sm leading-relaxed text-muted-foreground">

            Tax Simplified. Business Amplified.

          </p>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A premier financial advisory practice based in Kolkata, delivering sophisticated
            accounting and strategic counsel to 1000+ clients across India and beyond.
          </p>

        </div>



        <div className="flex flex-col items-center">

          <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-secondary uppercase">

            Company

          </p>

          <ul className="space-y-2.5 text-sm text-muted-foreground">

            {footerNav.company.map((item) => (

              <li key={item.href}>

                <Link href={item.href} className="link-muted">

                  {item.label}

                </Link>

              </li>

            ))}

          </ul>

        </div>



        <div className="flex flex-col items-center">

          <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-secondary uppercase">

            Services

          </p>

          <ul className="space-y-2.5 text-sm text-muted-foreground">

            {footerNav.services.map((item) => (

              <li key={item.href}>

                <Link href={item.href} className="link-muted">

                  {item.label}

                </Link>

              </li>

            ))}

          </ul>

        </div>



        <div className="flex flex-col items-center">

          <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-secondary uppercase">

            Reach us

          </p>

          <ul className="space-y-3 text-sm text-muted-foreground">

            <li className="flex flex-wrap justify-center gap-2">

              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />

              <a href={`mailto:${siteConfig.email}`} className="link-muted break-all">

                {siteConfig.email}

              </a>

            </li>

            <li className="flex flex-wrap justify-center gap-2">

              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />

              <a href={`tel:${siteConfig.phone}`} className="link-muted">

                {siteConfig.phoneDisplay}

              </a>

            </li>

            <li className="flex flex-wrap justify-center gap-2">

              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />

              <span className="break-words">{formatAddress()}</span>

            </li>

          </ul>

        </div>

      </div>



      <div className="border-t-2 border-border">

        <div className="mx-auto flex min-w-0 max-w-7xl flex-col items-center justify-center gap-3 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 md:flex-row md:px-10 lg:px-16">

          <p className="break-words">© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link href="/privacy" className="link-muted">

              Privacy

            </Link>

            <Link href="/terms" className="link-muted">

              Terms

            </Link>

          </div>

        </div>

      </div>

    </footer>

  );

}

