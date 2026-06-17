import { images } from "@/lib/site"

export function HomeHero() {
  return (
    <section
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(44,26,14,0.55), rgba(44,26,14,0.7)), url(${images.heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Mobile-specific image preloaded via picture for performance-conscious browsers */}
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="font-body text-lg font-semibold uppercase tracking-wide text-gold drop-shadow sm:text-xl">
          Welcome in, child
        </p>
        <h1 className="mt-3 text-balance font-serif text-4xl font-bold leading-tight text-parchment drop-shadow-lg sm:text-5xl md:text-6xl">
          Healing the Old-Fashioned Way, the Way the Good Lord Intended
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty font-body text-lg leading-relaxed text-parchment/90 drop-shadow sm:text-xl">
          For more than fifty years I&apos;ve gathered roots, brewed teas, and
          leaned on Scripture to tend body and soul. Let me share the remedies my
          mama and her mama passed down to me.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/free-gift"
            className="rounded-md bg-cta px-8 py-4 font-serif text-lg font-semibold text-parchment shadow-lg transition-all hover:bg-cta/90"
          >
            Get My Free Healing Guide
          </a>
          <a
            href="/supplements"
            className="rounded-md border-2 border-parchment/70 px-8 py-4 font-serif text-lg font-semibold text-parchment transition-all hover:bg-parchment/10"
          >
            Visit God&apos;s Pharmacy
          </a>
        </div>
      </div>
    </section>
  )
}

export function HomeProblem() {
  return (
    <section className="bg-parchment py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border-4 border-gold/30 shadow-xl">
          <img
            src={images.problemScene || "/placeholder.svg"}
            alt="A worried soul seeking natural comfort and healing"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-balance font-serif text-3xl font-bold text-heading sm:text-4xl">
            Feelin&apos; Worn Down, Achy, and Plumb Tired?
          </h2>
          <p className="mt-5 text-pretty font-body text-lg leading-relaxed text-ink/90">
            So many folks today are sufferin&apos; from troubles that pills and
            potions never seem to fix. Restless nights. Aching joints. A gut
            that won&apos;t settle. A weariness that sleep can&apos;t cure.
          </p>
          <p className="mt-4 text-pretty font-body text-lg leading-relaxed text-ink/90">
            Honey, your body was knit together by the Creator Himself, and He
            filled His green earth with everything you need to mend. You
            don&apos;t have to keep hurtin&apos;. There&apos;s an older,
            gentler way.
          </p>
        </div>
      </div>
    </section>
  )
}
