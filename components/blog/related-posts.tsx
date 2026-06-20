import Link from "next/link"
import type { BlogPostMeta } from "@/lib/blog"
import { CATEGORIES } from "@/content/blog/_categories"

type RelatedPostsProps = {
  posts: BlogPostMeta[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null

  return (
    <div className="my-10">
      <h3 className="font-serif text-xl font-bold text-gray-900 mb-5">
        You Might Like These Too 🌿
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => {
          const category = CATEGORIES[post.category]
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-gray-200 bg-white p-5 hover:border-green-300 hover:shadow-md transition-all"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-green-700">
                {category.emoji} {category.label}
              </span>
              <h4 className="mt-2 font-serif text-base font-bold text-gray-900 leading-snug group-hover:text-green-800 transition-colors">
                {post.title}
              </h4>
              <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <p className="mt-3 text-xs text-green-700 font-semibold">
                Read More →
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
