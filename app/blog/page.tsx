import type { Metadata } from "next"
import { getAllPosts, getRelatedPosts, getPostsByCategory } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { CATEGORIES } from "@/content/blog/_categories"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Granny Dovie's Natural Remedy Blog — Real Remedies from God's Garden",
  description:
    "Simple, faith-rooted natural remedies for gut health, joints, immunity, sleep, and skin. Written in plain language straight from Granny Dovie's kitchen.",
  openGraph: {
    title: "Granny Dovie's Natural Remedy Blog",
    description:
      "Simple, faith-rooted natural remedies for gut health, joints, immunity, sleep, and skin.",
    type: "website",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  // Auto-build related posts network from relatedSlugs frontmatter
  const relatedNetwork = posts.flatMap((post) =>
    getRelatedPosts(post.slug, post.relatedSlugs ?? [])
  )

  const seen = new Set<string>()
  const recommendedPosts = relatedNetwork.filter((post) => {
    if (seen.has(post.slug)) return false
    seen.add(post.slug)
    return true
  })

  // Pull most recent post per category for Find Your Remedy section
  const recommendedByCategory = Object.values(CATEGORIES)
    .map((cat) => {
      const categoryPosts = getPostsByCategory(cat.slug as any)
      return categoryPosts.length > 0
        ? { category: cat, post: categoryPosts[0] }
        : null
    })
    .filter(Boolean) as {
      category: (typeof CATEGORIES)[keyof typeof CATEGORIES]
      post: ReturnType<typeof getPostsByCategory>[number]
    }[]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-green-50 border-b border-green-100 px-4 py-14 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-3">
          🌿 Granny Dovie's Blog
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto">
          Real Remedies from God's Garden
        </h1>
        <p className="mt-4 text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Plain, honest wisdom about herbs, healing, and taking care of
          the body God gave you. No jargon. No fluff. Just the old ways
          that still work today.
        </p>
      </section>

      {/* Category Filter */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <Link
            href="/blog"
            className="rounded-full border border-green-700 bg-green-700 px-4 py-1.5 text-xs font-semibold text-white hover:bg-green-800 transition-colors"
          >
            All Posts
          </Link>
          {Object.values(CATEGORIES).map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/${cat.slug}`}
              className="rounded-full border border-green-200 px-4 py-1.5 text-xs font-semibold text-green-700 hover:bg-green-50 transition-colors"
            >
              {cat.emoji} {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🌿</p>
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

      {/* Related Posts — Full Width Compact Collapsed Widget Box */}
      {recommendedPosts.length > 0 && (
        <section className="border-t border-gray-200 bg-gray-50 px-4 py-10">
          <div className="max-w-5xl mx-auto">
            <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <p className="text-xs font-semibold uppercase tracking-widest text-green-700">
                  🌿 Related Posts
                </p>
              </div>
              <div className="divide-y divide-gray-100">
                {recommendedPosts.map((post) => {
                  const cat = CATEGORIES[post.category]
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      {/* Thumbnail */}
                      {post.featuredImage ? (
                        <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-green-50">
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="56px"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-green-50 flex items-center justify-center text-xl">
                          {cat?.emoji}
                        </div>
                      )}
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-0.5">
                          {cat?.emoji} {cat?.label}
                        </p>
                        <h3 className="font-serif text-sm font-bold text-gray-900 leading-snug group-hover:text-green-800 transition-colors line-clamp-1">
                          {post.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-gray-400">
                          {post.readTime}
                        </p>
                      </div>
                      {/* Arrow */}
                      <span className="text-sm text-green-700 flex-shrink-0 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Find Your Remedy — Category Cards + Quiz Card */}
      {recommendedByCategory.length > 0 && (
        <section className="bg-green-50 border-t border-green-100 px-4 py-14">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-2 text-center">
              🌿 Find Your Remedy
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">
              Find the Remedy for What Ails You, Honey
            </h2>
            <p className="text-sm text-gray-500 text-center max-w-xl mx-auto mb-10 leading-relaxed">
              Start with the one that speaks to what your body is
              carrying right now.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Category Cards */}
              {recommendedByCategory.map(({ category, post }) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-green-200 bg-white overflow-hidden hover:border-green-400 hover:shadow-lg transition-all"
                >
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-3">
                      {category.emoji} {category.label}
                    </p>
                    <h3 className="font-serif text-base font-bold text-gray-900 leading-snug group-hover:text-green-800 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs font-semibold text-green-700 group-hover:underline">
                      Read More →
                    </p>
                  </div>
                </Link>
              ))}

              {/* Quiz Card */}
              <Link
                href="/quiz"
                className="group block rounded-2xl border border-amber-300 bg-amber-50 overflow-hidden hover:border-amber-500 hover:shadow-lg transition-all"
              >
                <div className="p-6 flex flex-col h-full">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3">
                    🌿 Not Sure Where to Start?
                  </p>
                  <h3 className="font-serif text-base font-bold text-gray-900 leading-snug group-hover:text-amber-800 transition-colors">
                    Take Granny Dovie's Remedy Finder Quiz
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                    Answer five simple questions and Granny Dovie will
                    point you straight to the remedy your body is asking
                    for, honey.
                  </p>
                  <p className="mt-4 text-xs font-semibold text-amber-700 group-hover:underline">
                    Find My Remedy →
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-green-700 px-4 py-12 text-center text-white">
        <p className="text-2xl mb-3">🎁</p>
        <h2 className="font-serif text-2xl font-bold mb-2">
          Want Granny Dovie's 15 Secret Remedies?
        </h2>
        <p className="text-sm text-green-100 mb-6 max-w-md mx-auto leading-relaxed">
          Get the free guide and start feeling better the old-fashioned
          way, child.
        </p>
        <Link
          href="/free-gift"
          className="inline-block rounded-full bg-white px-7 py-3 text-sm font-bold text-green-800 hover:bg-green-50 transition-colors"
        >
          Send Me the Free Guide →
        </Link>
      </section>
    </main>
  )
}
