import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { PostCard } from "@/components/site/post-card";
import { buttonVariants } from "@/components/ui/button";
import { buildBreadcrumbSchema, canonicalMetadata } from "@/lib/seo";
import { getPublishedPosts } from "@/sanity/fetch";

export const metadata: Metadata = {
  title: "Tax Guides & Insights",
  description:
    "Tax guides and updates from TaxSimpl Advisors LLP — GST, ITR, NRI topics, and compliance news.",
  ...canonicalMetadata("/blogs"),
};

export const revalidate = 60;

export default async function BlogsPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blogs" },
        ])}
      />
      <PageHero
        eyebrow="Resources"
        title="Tax guides and updates"
        description="Practical articles on income tax, GST, and compliance — published by the TaxSimpl team."
      />

      <section className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:py-16">
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed bg-muted/30 p-8 text-center">
            <p className="font-medium">No published articles yet</p>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
            Ask us a question
          </Link>
        </div>
      </section>
    </>
  );
}
