import Link from "next/link"
import Image from "next/image"
import type { BlogPostMeta } from "@/lib/blog"
import { CATEGORIES } from "@/content/blog/_categories"

type RelatedPostsProps = {
  posts: BlogPostMeta[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null

  return (
    <div className="my-10">
      <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm">
        {/* Widget Header */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-700">
            🌿 You Might Like These Too
          </p>
        </div>
        {/* Rows */}
        <div className="divide-y divide-gray-100">
          {posts.map((post) => {
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
                  <h4 className="font-serif text-sm font-bold text-gray-900 leading-snug group-hover:text-green-800 transition-colors line-clamp-1">
                    {post.title}
                  </h4>
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
  )
}
