import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { CATEGORIES } from "@/content/blog/_categories"
import Link from "next/link"

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
