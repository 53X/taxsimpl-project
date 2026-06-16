import Image from "next/image";
import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { urlForImage } from "@/sanity/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary/30 pl-4 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-7 text-muted-foreground">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 list-decimal space-y-2 pl-6 text-muted-foreground">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const external = href.startsWith("http");

      return (
        <a
          href={href}
          className="font-medium text-primary underline-offset-4 hover:underline"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null;
      }

      const imageUrl = urlForImage(value).width(1200).auto("format").url();

      return (
        <figure className="my-8 overflow-hidden rounded-xl border">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="h-auto w-full"
          />
          {value.alt ? (
            <figcaption className="px-4 py-2 text-sm text-muted-foreground">
              {value.alt}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export function PostBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
