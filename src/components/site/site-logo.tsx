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
        src="/logo.png"
        alt="TaxSimpl logo"
        width={472}
        height={117}
        priority={priority}
        className={cn("h-8 w-auto sm:h-9 md:h-10", imageClassName)}
      />
    </Link>
  );
}
