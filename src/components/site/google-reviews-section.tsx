import Link from "next/link";

import { ArrowUpRight, Star } from "lucide-react";

import { IndianFlagIcon } from "@/components/site/indian-flag-icon";
import { Reveal } from "@/components/site/reveal";
import { googleReviews, googleReviewsSummary } from "@/lib/google-reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
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
    <article className="surface-card flex h-[21rem] w-[min(18rem,calc(100vw-3rem))] max-w-full shrink-0 flex-col items-center overflow-hidden !p-6 text-center sm:h-80">
      <div className="shrink-0">
        <StarRating rating={review.rating} />
      </div>
      <blockquote className="review-quote px-0.5">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <footer className="mt-auto w-full shrink-0 border-t border-border pt-4">
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
      className="overflow-x-clip border-y-2 border-border bg-muted/40 section-padding"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto min-w-0 max-w-7xl">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Google Reviews</p>
            <h2 id="reviews-heading" className="heading-section text-balance">
              Trusted by clients across{" "}
              <em className="heading-accent inline-flex max-w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
                <span>Kolkata and rest of</span>
                <IndianFlagIcon className="mx-0.5" />
              </em>
            </h2>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
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
          className="marquee-pause marquee-track -mx-4 mt-10 overflow-x-clip sm:-mx-6 md:-mx-10 lg:-mx-16"
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
