import Link from "next/link";

import { ArrowUpRight, Star } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { googleReviews, googleReviewsSummary } from "@/lib/google-reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`size-4 ${index < rating ? "fill-accent text-accent" : "text-border"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof googleReviews)[number] }) {
  return (
    <article className="surface-card flex h-64 w-72 shrink-0 flex-col sm:w-80">
      <StarRating rating={review.rating} />
      <blockquote className="mt-4 min-h-0 flex-1 line-clamp-5 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <footer className="mt-4 shrink-0 border-t border-border pt-4">
        <p className="text-sm font-medium text-foreground">{review.author}</p>
        <p className="text-xs text-muted-foreground">{review.relativeDate}</p>
      </footer>
    </article>
  );
}

export function GoogleReviewsSection() {
  const marqueeReviews = [...googleReviews, ...googleReviews];

  return (
    <section
      id="reviews"
      className="border-y-2 border-border bg-muted/40 section-padding"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Google Reviews</p>
            <h2 id="reviews-heading" className="heading-section">
              Trusted by clients across <em className="heading-accent">Kolkata & India</em>
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <StarRating rating={Math.round(googleReviewsSummary.rating)} />
              <p className="text-sm font-medium text-foreground">
                {googleReviewsSummary.rating} average · {googleReviewsSummary.totalReviews} reviews
              </p>
            </div>
          </div>
          <Link
            href={googleReviewsSummary.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link inline-flex shrink-0"
          >
            Read all on Google
            <ArrowUpRight className="size-3.5" />
          </Link>
        </Reveal>

        <div
          className="marquee-pause mt-10 max-w-full overflow-hidden"
          aria-label="Scrolling client reviews"
        >
          <div
            className="animate-marquee-reviews flex w-max items-stretch gap-4 sm:gap-5"
            aria-hidden="true"
          >
            {marqueeReviews.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
          </div>
        </div>

        <ul className="sr-only">
          {googleReviews.map((review) => (
            <li key={review.id}>
              {review.author}: &ldquo;{review.text}&rdquo; — {review.rating} out of 5 stars,{" "}
              {review.relativeDate}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
