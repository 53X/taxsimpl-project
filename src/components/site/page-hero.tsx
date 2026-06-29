import type { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  description?: string;
  eyebrow?: string;
  breadcrumbs?: ReactNode;
}

export function PageHero({ title, description, eyebrow, breadcrumbs }: PageHeroProps) {
  return (
    <section className="border-b-2 border-border bg-muted/30 section-padding pb-12">
      <div className="mx-auto min-w-0 max-w-7xl text-center">
        {breadcrumbs ? <div className="mb-6 flex justify-center">{breadcrumbs}</div> : null}
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}

        <h1 className="heading-section mx-auto max-w-4xl">{title}</h1>

        {description ? (
          <p className="mx-auto mt-4 w-full min-w-0 max-w-2xl break-words text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>

    </section>

  );

}

