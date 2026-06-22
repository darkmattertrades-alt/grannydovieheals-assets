import type { ComponentType } from "react"
import { GrannyQuote } from "@/components/blog/granny-quote"
import { ScriptureBlock } from "@/components/blog/scripture-block"
import { ProductRecommendation } from "@/components/blog/product-recommendation"
import { BlogCta } from "@/components/blog/blog-cta"
import { ClickbankCta } from "@/components/blog/clickbank-cta"

export function useMDXComponents(components: Record<string, ComponentType<any>>) {
  return {
    ...components,
    GrannyQuote,
    ScriptureBlock,
    ProductRecommendation,
    BlogCta,
    ClickbankCta,
  }
}
