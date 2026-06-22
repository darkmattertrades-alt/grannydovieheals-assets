import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import {
  getPostBySlug,
  getAllPostSlugs,
  getRelatedPosts,
  getPostsByCategory,
} from "@/lib/blog"
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

  // Check if it is a category page
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

        <section className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/blog"
              className="rounded-full border border-green-200 px-4 py-1.5 text-xs font-semibold text-green-700 hover:bg-green-50 transition-colors"
            >
              All Posts
            </Link>
            {Object.values(CATEGORIES).map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/${cat.slug}`}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                  cat.slug === slug
                    ? "border-green-700 bg-green-700 text-white"
                    : "border-green-200 text-green-700 hover:bg-green-50"
                }`}
              >
                {cat.emoji} {cat.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 pb-16">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">{category.emoji}</p>
              <p className="font-serif text-xl text-gray-600">
                Granny Dovie is working on something good.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Check back soon, honey.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>

        <section className="bg-green-700 px-4 py-12 text-center text-white">
          <p className="text-2xl mb-3">🌿</p>
          <h2 className="font-serif text-2xl font-bold mb-2">
            Not Sure Which Remedy Is Right for You?
          </h2>
          <p className="text-sm text-green-100 mb-6 max-w-md mx-auto leading-relaxed">
            Answer five simple questions and Granny Dovie will point you
            to the right remedy for your body, honey.
          </p>
          <Link
            href="/quiz"
            className="inline-block rounded-full bg-white px-7 py-3 text-sm font-bold text-green-800 hover:bg-green-50 transition-colors"
          >
            Take the Remedy Finder Quiz →
          </Link>
        </section>
      </main>
    )
  }

  // Blog post page
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
