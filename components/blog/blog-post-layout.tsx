import Image from "next/image"
import Link from "next/link"
import type { BlogPost, BlogCategory, BlogPostMeta } from "@/lib/blog"
import { CATEGORY_CLICKBANK_MAP } from "@/lib/blog"
import { CATEGORIES } from "@/content/blog/_categories"
import { RelatedPosts } from "@/components/blog/related-posts"

type BlogPostLayoutProps = {
  post: BlogPost
  children: React.ReactNode
  relatedPosts?: BlogPostMeta[]
}

const POST_PRELANDER_MAP: Record<string, string> = {
  "apple-cider-vinegar-morning-routine": "gut-vita",
  "ginger-root-digestion-remedy": "gut-vita-ginger",
  "elderberry-syrup-immune-support": "visiflora",
  "turmeric-joint-pain-natural-remedy": "balmorex",
  "ashwagandha-stress-women-over-50": "sleep-revive",
  "natural-sleep-remedy-no-melatonin": "sleep-revive-magnesium",
  "peppermint-tea-bloating-digestion": "gut-vita-peppermint",
  "peppermint-tea-bloating-and-gas": "gut-vita-peppermint-gas",
  "peppermint-tea-bloated-stomach": "gut-vita-peppermint-bloated-stomach",
}

export function BlogPostLayout({ post, children, relatedPosts }: BlogPostLayoutProps) {
  const category = CATEGORIES[post.category]
  const clickbankSlug =
    POST_PRELANDER_MAP[post.slug] ??
    CATEGORY_CLICKBANK_MAP[post.category as BlogCategory]?.[0]?.slug

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      {post.featuredImage && (
        <div className="relative w-full h-64 sm:h-80 md:h-96 bg-green-50">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-green-700 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-green-700 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <Link
            href={`/blog/${category.slug}`}
            className="hover:text-green-700 transition-colors"
          >
            {category.label}
          </Link>
          <span>/</span>
          <span className="text-gray-600 line-clamp-1">{post.title}</span>
        </nav>
      </div>

      {/* Header */}
      <header className="max-w-3xl mx-auto px-4 pt-6 pb-4">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-700 mb-3">
          {category.emoji} {category.label}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-base text-gray-500 leading-relaxed">
          {post.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-400 border-b border-gray-100 pb-4">
          <span>By {post.author}</span>
          <span>
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span>{post.readTime}</span>
          {post.lastUpdated !== post.publishDate && (
            <span className="text-green-600">
              Updated{" "}
              {new Date(post.lastUpdated).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="prose prose-lg prose-green max-w-none
          prose-headings:font-serif
          prose-headings:text-gray-900
          prose-p:text-gray-700
          prose-p:leading-relaxed
          prose-a:text-green-700
          prose-a:underline
          hover:prose-a:text-green-800
          prose-strong:text-gray-900
          prose-blockquote:border-green-700
          prose-blockquote:bg-green-50
          prose-blockquote:rounded-xl
          prose-blockquote:px-5
          prose-blockquote:py-3
          [&_.not-prose]:!mt-10
          [&_.not-prose]:!mb-10">
          {children}
        </div>
      </div>

      {/* Related Posts Widget — outside prose, full width of content column */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="max-w-3xl mx-auto px-4 pb-6">
          <RelatedPosts posts={relatedPosts} />
        </div>
      )}

      {/* ClickBank CTA */}
      {clickbankSlug && (
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              When the Old Ways Need a Little Backup
            </h3>
            <p className="text-stone-700 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
              Granny Dovie&apos;s remedies have worked for decades. But honey,
              sometimes your body needs something stronger. For those days
              when the old ways need a little backup — this is what I
              recommend.
            </p>
            <Link
              href={`/recommended/${clickbankSlug}`}
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold px-10 py-4 rounded-xl transition-colors duration-200"
            >
              Learn More About This Product
            </Link>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-4 py-8 border-t border-gray-100">
        <p className="text-xs text-gray-400 leading-relaxed">
          <strong>Affiliate Disclosure:</strong> Granny Dovie Heals is a
          participant in the Amazon Services LLC Associates Program, an
          affiliate advertising program designed to provide a means for
          sites to earn advertising fees by advertising and linking to
          Amazon.com.
        </p>
        <p className="mt-2 text-xs text-gray-400 leading-relaxed">
          <strong>Health Disclaimer:</strong> The information on this site
          is for educational purposes only and is not intended as medical
          advice. Always consult your doctor before starting any new remedy
          or supplement.
        </p>
      </footer>
    </article>
  )
}
