import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from "@/lib/blog"
import { BlogPostLayout } from "@/components/blog/blog-post-layout"
import { GrannyQuote } from "@/components/blog/granny-quote"
import { ScriptureBlock } from "@/components/blog/scripture-block"
import { ProductRecommendation } from "@/components/blog/product-recommendation"
import { BlogCta } from "@/components/blog/blog-cta"
import { RelatedPosts } from "@/components/blog/related-posts"
import { articleSchema, breadcrumbSchema } from "@/lib/schema"

const components = {
  GrannyQuote,
  ScriptureBlock,
  ProductRecommendation,
  BlogCta,
}

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} — Granny Dovie Heals`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.lastUpdated,
      authors: [post.author],
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(
    post.slug,
    post.relatedSlugs ?? []
  )

  const article = articleSchema(post)
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ])

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <BlogPostLayout post={post}>
        <MDXRemote
          source={post.content}
          components={components}
        />
        {relatedPosts.length > 0 && (
          <RelatedPosts posts={relatedPosts} />
        )}
      </BlogPostLayout>
    </>
  )
}
