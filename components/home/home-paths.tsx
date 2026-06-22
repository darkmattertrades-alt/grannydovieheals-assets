import { images } from "@/lib/site"
import { OptInForm } from "@/components/opt-in-form"
import { BotanicalDivider } from "@/components/botanical-divider"

const paths = [
  {
    title: "God's Pharmacy",
    subtitle: "Herbal Supplements",
    img: images.productSupplements,
    alt: "Jars of herbal supplements and dried botanicals",
    copy: "Roots, barks, and herbs to support sleep, digestion, joints, and a weary spirit — the remedies I trust most.",
    href: "/supplements",
    cta: "Browse the Pharmacy",
  },
  {
    title: "Honor the Temple",
    subtitle: "Natural Skincare",
    img: images.productSkincare,
    alt: "Handmade salves, balms, and natural skincare goods",
    copy: "Salves, balms, and oils to nourish the skin the good Lord gave you — gentle, pure, and made the old way.",
    href: "/skincare",
    cta: "Tend Your Skin",
  },
]

export function HomePaths() {
  return (
    <section className="bg-parchment py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-heading sm:text-4xl">
            Two Paths to Natural Healing
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty font-body text-lg text-ink/80">
            Whichever ails you, child, there&apos;s a gentle remedy waitin&apos;.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {paths.map((p) => (
            <article
              key={p.title}
              className="flex flex-col overflow-hidden rounded-lg border-2 border-gold/30 bg-parchment shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={p.img || "/placeholder.svg"}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-body text-sm font-semibold uppercase tracking-wide text-gold">{p.subtitle}</p>
                <h3 className="font-serif text-2xl font-bold text-heading">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-pretty font-body leading-relaxed text-ink/90">
                  {p.copy}
                </p>
                <a
                  href={p.href}
                  className="mt-5 inline-block rounded-md bg-cta px-6 py-3 text-center font-serif font-semibold text-parchment transition-all hover:bg-cta/90"
                >
                  {p.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HomeOptIn() {
  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(245,236,215,0.92), rgba(245,236,215,0.96)), url(${images.freeGift})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <BotanicalDivider label="A Gift for You" />
        <h2 className="text-balance font-serif text-3xl font-bold text-heading sm:text-4xl">
          My Free Healing Guide
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty font-body text-lg leading-relaxed text-ink/90">
          Leave me your name and I&apos;ll send over my little guide of
          time-honored remedies and Scripture for healing — free, with my love.
        </p>
        <div className="mx-auto mt-8 max-w-xl rounded-lg border-2 border-gold/40 bg-parchment/90 p-6 shadow-lg">
          <OptInForm />
        </div>
      </div>
    </section>
  )
}
