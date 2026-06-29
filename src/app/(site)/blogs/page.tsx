import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { PostCard } from "@/components/site/post-card";
import { buttonVariants } from "@/components/ui/button";
import { blogTopics } from "@/lib/home-content";
import { buildBreadcrumbSchema, buildPageMetadata, pageUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getPublishedPosts } from "@/sanity/fetch";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: "Tax Guides & Blog",
    description:
      "Practical tax guides from TaxSimpl Advisors LLP — income tax, GST, ROC compliance, NRI taxation, company law, and regulatory updates for Indian businesses.",
    path: "/blogs",
  });
}

export const revalidate = 60;

function buildBlogCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tax Guides & Blog — TaxSimpl Advisors LLP",
    description:
      "Practical tax guides on income tax, GST, ROC compliance, NRI taxation, and business advisory for Indian businesses.",
    url: pageUrl("/blogs"),
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    about: blogTopics.map((topic) => ({
      "@type": "Thing",
      name: topic,
    })),
  };
}

export default async function BlogsPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blogs" },
          ]),
          buildBlogCollectionSchema(),
        ]}
      />
      <PageHero
        eyebrow="Resources"
        title="Tax guides and updates"
        description="Practical articles on income tax, GST, company law, and compliance — written in plain language by the TaxSimpl team in Kolkata."
      />

      <section className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:py-16">
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="rounded-xl border border-dashed bg-muted/30 p-8 text-center">
              <p className="font-medium">New articles coming soon</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We are preparing practical tax guides for Indian businesses. In the meantime,
                book a free consultation for personalised advice.
              </p>
            </div>

            <div className="surface-card">
              <h2 className="heading-card">Topics we cover</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our blog focuses on search-friendly guides that answer real questions from
                founders, professionals, and NRIs.
              </p>
              <ul className="mt-6 space-y-3">
                {blogTopics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-3 text-sm text-foreground before:mt-0.5 before:text-accent before:content-['→']"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
            Ask us a question
          </Link>
          <Link href="/services" className={buttonVariants({ variant: "ghost" })}>
            Browse services
          </Link>
        </div>
      </section>
    </>
  );
}
