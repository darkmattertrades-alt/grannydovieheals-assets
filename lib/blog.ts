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
  | "faith-and-healing"

export const CATEGORY_CLICKBANK_MAP: Record<BlogCategory, { slug: string; href: string }[]> = {
  "gut-health": [
    { slug: "gut-vita", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=acv-morning-routine" },
    { slug: "gut-vita-ginger", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=ginger-root-digestion-remedy" },
    { slug: "gut-vita-peppermint", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=peppermint-tea-bloating" },
    { slug: "gut-vita-peppermint-gas", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=peppermint-tea-bloating-and-gas" },
    { slug: "gut-vita-peppermint-bloated-stomach", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=peppermint-tea-bloated-stomach" },
    { slug: "gut-vita-peppermint-help", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=does-peppermint-tea-help-bloating" },
    { slug: "gut-vita-peppermint-relief", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=peppermint-tea-bloating-relief" },
    { slug: "gut-vita-peppermint-how-much", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=how-much-peppermint-tea-for-bloating" },
  ],
  "joints-inflammation": [
    { slug: "balmorex", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=balmorex&pid=v1&tid=turmeric-joint-pain" }
  ],
  "immunity": [
    { slug: "visiflora", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=visiflora&pid=v1&tid=elderberry-syrup" }
  ],
  "stress-sleep": [
    { slug: "sleep-revive", href: "https://hop.clickbank.net/?vendor=revive&affiliate=dovieheals&lid=1&tid=ashwagandha-stress-women" },
    { slug: "sleep-revive-magnesium", href: "https://hop.clickbank.net/?vendor=revive&affiliate=dovieheals&lid=1&tid=natural-sleep-remedy" }
  ],
  "natural-skincare": [
    { slug: "synevra", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=synevra&pid=v1&tid=ashwagandha-women-50" }
  ],
  "faith-healing": [
    { slug: "gut-vita", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=faith-healing" }
  ],
  "faith-and-healing": [
    { slug: "faith-and-healing", href: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=god-given-natural-remedies" }
  ]
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
  readTime: string
  content: string
  relatedSlugs?: string[]
  affiliateProduct?: { name: string; price: string; href: string }
}

export type BlogPostMeta = Omit<BlogPost, "content">

export function calculateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / 105)
  return `${minutes} min read`
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR)
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
    category: data.category ?? "gut-health",
    targetKeyword: data.targetKeyword ?? "",
    featuredImage: data.featuredImage ?? "",
    excerpt: data.excerpt ?? "",
    readTime: data.readTime ?? calculateReadTime(content),
    content,
    relatedSlugs: data.relatedSlugs ?? [],
    affiliateProduct: data.affiliateProduct ?? undefined
  }
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => {
    const post = getPostBySlug(slug)
    if (!post) return null
    const { content, ...meta } = post
    return meta
  }).filter(Boolean).sort((a, b) => new Date(b!.publishDate).getTime() - new Date(a!.publishDate).getTime()) as BlogPostMeta[]
}

export function getPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.category === category)
}

export function getRelatedPosts(currentSlug: string, relatedSlugs: string[]): BlogPostMeta[] {
  return relatedSlugs.filter((slug) => slug !== currentSlug).map((slug) => {
    const post = getPostBySlug(slug)
    if (!post) return null
    const { content, ...meta } = post
    return meta
  }).filter(Boolean) as BlogPostMeta[]
}
