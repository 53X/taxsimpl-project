interface PageHeroProps {

  title: string;

  description?: string;

  eyebrow?: string;

}



export function PageHero({ title, description, eyebrow }: PageHeroProps) {

  return (

    <section className="border-b-2 border-border bg-muted/30 section-padding pb-12">

      <div className="mx-auto max-w-7xl">

        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}

        <h1 className="heading-section max-w-4xl">{title}</h1>

        {description ? (

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">

            {description}

          </p>

        ) : null}

      </div>

    </section>

  );

}

