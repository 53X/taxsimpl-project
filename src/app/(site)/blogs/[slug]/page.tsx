import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/site/json-ld";
import { PostBody } from "@/components/site/portable-text";
import { buttonVariants } from "@/components/ui/button";
import { getCategoryLabel } from "@/lib/category-labels";
import { formatPostDate } from "@/lib/format-date";
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildPageMetadata,
} from "@/lib/seo";
import { getPublishedPostBySlug, getPublishedPostSlugs } from "@/sanity/fetch";
import { urlForImage } from "@/sanity/image";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPublishedPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt;
  const ogImage = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).url()
    : undefined;

  return buildPageMetadata({
    title,
    description,
    path: `/blogs/${slug}`,
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage,
                alt: post.coverImage?.alt || post.title,
              },
            ],
          }
        : {}),
    },
    twitter: ogImage ? { images: [ogImage] } : undefined,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const coverUrl = post.coverImage
    ? urlForImage(post.coverImage).width(1400).height(788).auto("format").url()
    : null;

  const ogCoverUrl = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).url()
    : null;

  return (
    <article className="min-w-0 overflow-x-clip">
      <JsonLd
        data={[
          buildBlogPostingSchema({
            title: post.title,
            excerpt: post.excerpt,
            slug: post.slug,
            publishedAt: post.publishedAt,
            authorName: post.authorName,
            coverImageUrl: ogCoverUrl,
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blogs" },
            { name: post.title, path: `/blogs/${post.slug}` },
          ]),
        ]}
      />
      <header className="border-b-2 border-border bg-muted/30 section-padding pb-12">
        <div className="mx-auto min-w-0 max-w-3xl text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link href="/blogs" className="hover:text-primary">
              Blog
            </Link>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span>{post.authorName}</span>
          </div>

          <h1 className="heading-page">{post.title}</h1>
          <p className="mt-4 break-words text-base leading-relaxed text-muted-foreground sm:text-lg">{post.excerpt}</p>

          {post.categories?.length ? (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border bg-background px-3 py-1 text-xs font-medium"
                >
                  {getCategoryLabel(category)}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      {coverUrl ? (
        <div className="mx-auto max-w-4xl min-w-0 section-padding pt-0">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border">
            <Image
              src={coverUrl}
              alt={post.coverImage?.alt || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>
      ) : null}

      <div className="section-padding mx-auto min-w-0 max-w-3xl text-center">
        <PostBody value={post.body} />
      </div>

      <section className="border-t-2 border-border bg-muted/20">
        <div className="mx-auto flex min-w-0 max-w-3xl flex-col items-stretch gap-3 section-padding sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <Link href="/blogs" className={buttonVariants({ variant: "outline", className: "min-h-11 w-full sm:w-auto" })}>
            Back to resources
          </Link>
          <Link href="/contact" className={buttonVariants({ className: "min-h-11 w-full sm:w-auto" })}>
            Book free consultation
          </Link>
        </div>
      </section>
    </article>
  );
}
