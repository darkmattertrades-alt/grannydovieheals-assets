import Link from "next/link"
import Image from "next/image"
import type { BlogPostMeta } from "@/lib/blog"
import { CATEGORIES } from "@/content/blog/_categories"

type BlogCardProps = {
  post: BlogPostMeta
}

export function BlogCard({ post }: BlogCardProps) {
  const category = CATEGORIES[post.category]

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-green-300 hover:shadow-lg transition-all"
    >
      {post.featuredImage && (
        <div className="relative w-full h-48 bg-green-50">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-green-700">
            {category.emoji} {category.label}
          </span>
          <span className="text-xs text-gray-400">
            {post.readTime}
          </span>
        </div>
        <h2 className="font-serif text-lg font-bold text-gray-900 leading-snug group-hover:text-green-800 transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="text-xs font-semibold text-green-700 group-hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  )
}
