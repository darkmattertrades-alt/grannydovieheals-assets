import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  SkincareHero,
  SkincareDisclosure,
  SkincareTopTier,
  SkincareMidTier,
  SkincareLowTier,
  SkincareScripture,
} from "@/components/skincare/skincare-sections"

export const metadata: Metadata = {
  title: "Honor the Temple — Granny Dovie's Natural Skincare",
  description:
    "Granny Dovie's old-fashioned, natural skincare — rosehip oil, shea butter, jojoba, castor oil and more. God gave you this body, honey. Let us tend to it the old way.",
}

export default function SkincarePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SkincareHero />
        <SkincareDisclosure />
        <SkincareTopTier />
        <SkincareMidTier />
        <SkincareLowTier />
        <SkincareScripture />
      </main>
      <SiteFooter />
    </>
  )
}
