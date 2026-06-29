"use client";



import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { useEffect, useState, type ReactNode } from "react";



import { Button } from "@/components/ui/button";

import {

  Sheet,

  SheetContent,

  SheetHeader,

  SheetTitle,

  SheetTrigger,

} from "@/components/ui/sheet";

import { mainNav } from "@/lib/navigation";

import { siteConfig } from "@/lib/site";

import { cn } from "@/lib/utils";



export function SiteHeader({ logo }: { logo: ReactNode }) {

  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();



  useEffect(() => {

    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);

  }, []);



  return (

    <header

      className={cn(

        "sticky top-0 z-50 border-b-2 border-border bg-background/85 backdrop-blur-md transition-[box-shadow,background-color,border-color] duration-300 ease-out",

        scrolled && "bg-background/92 shadow-brand-xs"

      )}

    >

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-16">

        {logo}



        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">

          {mainNav.map((item) => (

            <Link

              key={item.href}

              href={item.href}

              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "relative cursor-pointer rounded-sm text-sm font-medium text-muted-foreground outline-none transition-colors duration-300 ease-out hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
                pathname === item.href && "text-foreground"
              )}

            >

              {item.label}
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute -bottom-2 left-1/2 h-px w-10 -translate-x-1/2 bg-accent/70 opacity-0 transition-opacity duration-300 ease-out",
                  pathname === item.href && "opacity-100"
                )}
              />

            </Link>

          ))}

        </nav>



        <div className="flex items-center gap-2">

          <Link
            href="/contact"
            className="btn-outline-nav inline-flex min-h-11 items-center px-3 py-2 text-[0.65rem] xl:px-5 xl:py-2 xl:text-xs"
          >

            Book Consultation

          </Link>



          <Sheet open={open} onOpenChange={setOpen}>

            <SheetTrigger

              render={

                <Button

                  variant="ghost"

                  size="icon"

                  className="size-11 min-h-11 min-w-11 xl:hidden text-foreground/80 hover:text-foreground"

                  aria-label="Open menu"

                />

              }

            >

              <Menu />

            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-xs border-l-0 bg-background shadow-brand-panel"
            >
              <SheetHeader className="items-center border-b-2 border-border pb-5 text-center">
                <SheetTitle className="text-lg font-semibold text-primary">
                  {siteConfig.name}
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-6 flex flex-col gap-2.5 px-4"
                aria-label="Mobile"
              >
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn(
                      "surface-nav-mobile",
                      pathname === item.href && "surface-nav-mobile-active"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>

          </Sheet>

        </div>

      </div>

    </header>

  );

}

