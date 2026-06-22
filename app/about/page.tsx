import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  AboutHero,
  AboutStory,
  AboutCreed,
  AboutScripture,
  AboutFreeGift,
} from "@/components/about/about-sections"

export const metadata: Metadata = {
  title: "About Granny Dovie — The Woman Behind the Remedies",
  description:
    "Meet Granny Dovie, the Appalachian folk healer carrying Cherokee wisdom, Scots Irish folk medicine, and Holy Scripture. God wrote the Book and planted the garden, honey.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutCreed />
        <AboutScripture />
        <AboutFreeGift />
      </main>
      <SiteFooter />
    </>
  )
}
