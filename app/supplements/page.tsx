import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  SupplementsHero,
  SupplementsDisclosure,
  SupplementsTopTier,
  SupplementsMidTier,
  SupplementsLowTier,
  SupplementsScripture,
} from "@/components/supplements/supplements-sections"

export const metadata: Metadata = {
  title: "God's Pharmacy — Granny Dovie's Trusted Herbal Supplements",
  description:
    "Granny Dovie's hand-picked herbal supplements — turmeric, ashwagandha, elderberry, magnesium and more. Every root, herb, and seed was put here for a reason, honey.",
}

export default function SupplementsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SupplementsHero />
        <SupplementsDisclosure />
        <SupplementsTopTier />
        <SupplementsMidTier />
        <SupplementsLowTier />
        <SupplementsScripture />
      </main>
      <SiteFooter />
    </>
  )
}
