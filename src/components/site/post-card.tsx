import Image from "next/image";
import Link from "next/link";

import { getCategoryLabel } from "@/lib/category-labels";
import { formatPostDate } from "@/lib/format-date";
import type { PostListItem } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

export function PostCard({ post }: { post: PostListItem }) {
  const imageUrl = post.coverImage
    ? urlForImage(post.coverImage).width(800).height(450).auto("format").url()
    : null;

  return (
    <article className="surface-card-interactive">
      <Link href={`/blogs/${post.slug}`} className="block">
        {imageUrl ? (
          <div className="relative aspect-[16/9] w-full bg-muted">
            <Image
              src={imageUrl}
              alt={post.coverImage?.alt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : null}

        <div className="space-y-3 p-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span>{post.authorName}</span>
          </div>

          <h2 className="text-lg font-semibold tracking-tight">{post.title}</h2>
          <p className="text-sm text-muted-foreground">{post.excerpt}</p>

          {post.categories?.length ? (
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium"
                >
                  {getCategoryLabel(category)}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
