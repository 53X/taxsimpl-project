import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  onClick?: () => void;
}

export function SiteLogo({
  className,
  imageClassName,
  priority = false,
  onClick,
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("inline-flex min-w-0 max-w-[calc(100vw-5.5rem)] items-center sm:max-w-none", className)}
      aria-label="TaxSimpl home"
    >
      <Image
        src="/logo.png"
        alt="TaxSimpl logo"
        width={472}
        height={117}
        priority={priority}
        className={cn("h-7 w-auto max-w-full sm:h-8 md:h-9 lg:h-10", imageClassName)}
      />
    </Link>
  );
}
