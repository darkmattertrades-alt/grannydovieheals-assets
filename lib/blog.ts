import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export type BlogCategory =
  | "gut-health"
  | "joints-inflammation"
  | "immunity"
  | "stress-sleep"
  | "natural-skincare"
  | "faith-healing"

export const CATEGORY_CLICKBANK_MAP: Record<BlogCategory, string> = {
  "gut-health": "gut-vita",
  "joints-inflammation": "balmorex",
  "immunity": "visiflora",
  "stress-sleep": "sleep-revive",
  "natural-skincare": "synevra",
  "faith-healing": "gut-vita",
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  publishDate: string
  lastUpdated: string
  author: string
  category: BlogCategory
  targetKeyword: string
  featuredImage: string
  excerpt: string
  readTime: number
  content: string
  relatedSlugs?: string[]
  affiliateProduct?: {
    name: string
    price: string
    href: string
  }
}

export type BlogPostMeta = Omit<BlogPost, "content">

function calculateReadTime(content: string): number {
  const wordsPerMinute = 130
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    publishDate: data.publishDate ?? "",
    lastUpdated: data.lastUpdated ?? data.publishDate ?? "",
    author: data.author ?? "Granny Dovie",
    category: data.category ?? "faith-healing",
    targetKeyword: data.targetKeyword ?? "",
    featuredImage: data.featuredImage ?? "",
    excerpt: data.excerpt ?? content.slice(0, 160),
    readTime: calculateReadTime(content),
    relatedSlugs: data.relatedSlugs ?? [],
    affiliateProduct: data.affiliateProduct ?? null,
    content,
  }
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post) return null
      const { content, ...meta } = post
      return meta
    })
    .filter((post): post is BlogPostMeta => post !== null)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
}

export function getPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.category === category)
}

export function getRelatedPosts(
  currentSlug: string,
  relatedSlugs: string[]
): BlogPostMeta[] {
  return relatedSlugs
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post) return null
      const { content, ...meta } = post
      return meta
    })
    .filter((post): post is BlogPostMeta => post !== null)
}
