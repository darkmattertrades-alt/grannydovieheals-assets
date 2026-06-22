import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  FreeGiftHero,
  FreeGiftInside,
} from "@/components/free-gift/free-gift-intro"
import {
  FreeGiftOptIn,
  FreeGiftScripture,
} from "@/components/free-gift/free-gift-optin"

export const metadata: Metadata = {
  title: "Free Gift — Granny Dovie's 15 Secret Remedies",
  description:
    "Get Granny Dovie's free guide of 15 secret herbal remedies, passed down through generations. Enter your name and email and she'll send it straight to you.",
}

export default function FreeGiftPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <FreeGiftHero />
        <FreeGiftInside />
        <FreeGiftOptIn />
        <FreeGiftScripture />
      </main>
      <SiteFooter />
    </>
  )
}
