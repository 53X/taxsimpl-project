import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function SiteLogo({
  className,
  imageClassName,
  priority = false,
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="TaxSimpl home"
    >
      <Image
        src="/images/taxsimpl-logo.png"
        alt="TaxSimpl Advisors LLP — Chartered Accountants in Kolkata"
        width={302}
        height={70}
        priority={priority}
        className={cn("h-9 w-auto sm:h-10", imageClassName)}
      />
    </Link>
  );
}
