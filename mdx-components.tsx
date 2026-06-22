import { GrannyQuote } from "@/components/blog/granny-quote"
import { ScriptureBlock } from "@/components/blog/scripture-block"
import { ProductRecommendation } from "@/components/blog/product-recommendation"
import { BlogCta } from "@/components/blog/blog-cta"
import { ClickbankCta } from "@/components/blog/clickbank-cta"
import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    GrannyQuote,
    ScriptureBlock,
    ProductRecommendation,
    BlogCta,
    ClickbankCta,
  }
}
