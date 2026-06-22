import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPostBySlug, getAllPostSlugs, getRelatedPosts, getPostsByCategory } from "@/lib/blog"
import type { BlogCategory } from "@/lib/blog"
import { BlogPostLayout } from "@/components/blog/blog-post-layout"
import { GrannyQuote } from "@/components/blog/granny-quote"
import { ScriptureBlock } from "@/components/blog/scripture-block"
import { ProductRecommendation } from "@/components/blog/product-recommendation"
import { BlogCta } from "@/components/blog/blog-cta"
import { RelatedPosts } from "@/components/blog/related-posts"
import { BlogCard } from "@/components/blog/blog-card"
import { ClickbankCta } from "@/components/blog/clickbank-cta"
import { CATEGORIES } from "@/content/blog/_categories"
import { articleSchema, breadcrumbSchema } from "@/lib/schema"
import Link from "next/link"

type Props = {
  params: { slug: string[] }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  const categoryKeys = Object.keys(CATEGORIES)
  return [
    ...slugs.map((slug) => ({ slug: [slug] })),
    ...categoryKeys.map((slug) => ({ slug: [slug] })),
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug[0]

  const category = CATEGORIES[slug as BlogCategory]
  if (category) {
    return {
      title: `${category.label} Remedies — Granny Dovie Heals`,
      description: category.description,
    }
  }

  const post = getPostBySlug(slug)
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

export default function BlogSlugPage({ params }: Props) {
  const slug = params.slug[0]

  const components = {
    GrannyQuote,
    ScriptureBlock,
    ProductRecommendation,
    BlogCta,
    ClickbankCta,
  }

  const category = CATEGORIES[slug as BlogCategory]
  if (category) {
    const posts = getPostsByCategory(slug as BlogCategory)
    return (
      <main className="min-h-screen bg-white">
        <section className="bg-green-50 border-b border-green-100 px-4 py-14 text-center">
          <p className="text-4xl mb-3">{category.emoji}</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto">
            {category.label}
          </h1>
          <p className="mt-4 text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            {category.description}
          </p>
        </section>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {Object.entries(CATEGORIES).map(([key, cat]) => (
              <Link
                key={key}
                href={`/blog/${key}`}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  key === slug
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-green-700 border-green-300 hover:bg-green-50"
                }`}
              >
                {cat.emoji} {cat.label}
              </Link>
            ))}
          </div>
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 py-20">No posts in this category yet.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
    )
  }

  const post = getPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(post.slug, post.relatedSlugs ?? [])
  const article = articleSchema(post)
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <BlogPostLayout post={post}>
        <MDXRemote source={post.content} components={components} />
        {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
      </BlogPostLayout>
    </>
  )
}
