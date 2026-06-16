"use client";



import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowUpRight, Menu, Sparkles } from "lucide-react";

import { useEffect, useState } from "react";



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



export function SiteHeader() {

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

        "sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md transition-[box-shadow,background-color,border-color] duration-300 ease-out",

        scrolled && "bg-background/92 shadow-[0_1px_0_rgba(6,50,34,0.06)]"

      )}

    >

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-16">

        <Link href="/" className="group flex items-center gap-3">

          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">

            <Sparkles className="size-4 text-accent" />

          </span>

          <span>

            <span className="block text-lg font-semibold tracking-tight text-foreground">

              TaxSimpl

            </span>

            <span className="block text-[0.62rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">

              Advisors LLP

            </span>

          </span>

        </Link>



        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">

          {mainNav.map((item) => (

            <Link

              key={item.href}

              href={item.href}

              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "relative text-sm font-medium text-muted-foreground transition-colors duration-300 ease-out hover:text-foreground",
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

          <Link href="/contact" className="btn-outline-nav hidden sm:inline-flex">

            Book Consultation

          </Link>



          <Sheet open={open} onOpenChange={setOpen}>

            <SheetTrigger

              render={

                <Button

                  variant="ghost"

                  size="icon"

                  className="xl:hidden text-foreground/80 hover:text-foreground"

                  aria-label="Open menu"

                />

              }

            >

              <Menu />

            </SheetTrigger>

            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <SheetHeader className="items-center border-b border-border pb-5 text-center">
                <SheetTitle className="text-lg font-semibold text-primary">
                  {siteConfig.name}
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-6 flex flex-col items-center gap-1 px-4 text-center"
                aria-label="Mobile"
              >
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn(
                      "w-full rounded-lg px-4 py-3.5 text-base font-semibold text-primary transition-colors duration-300 ease-out hover:bg-primary/5 hover:text-secondary",
                      pathname === item.href && "bg-primary/5 text-secondary"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-6 w-full justify-center"
                >
                  Book Consultation
                  <ArrowUpRight className="size-4" />
                </Link>
              </nav>
            </SheetContent>

          </Sheet>

        </div>

      </div>

    </header>

  );

}

