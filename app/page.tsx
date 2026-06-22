import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HomeHero, HomeProblem } from "@/components/home/home-hero"
import { HomeAbout, HomeScripture } from "@/components/home/home-about"
import { HomePaths, HomeOptIn } from "@/components/home/home-paths"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <HomeProblem />
        <HomeAbout />
        <HomeScripture />
        <HomePaths />
        <HomeOptIn />
      </main>
      <SiteFooter />
    </>
  )
}
