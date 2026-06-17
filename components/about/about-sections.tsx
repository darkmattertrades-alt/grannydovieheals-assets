import { images } from "@/lib/site"
import { OptInForm } from "@/components/opt-in-form"

export function AboutHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      <img
        src={images.aboutGranny || "/placeholder.svg"}
        alt="Granny Dovie tending to dried herbs in her mountain home"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-balance font-serif text-4xl font-bold text-parchment drop-shadow sm:text-5xl lg:text-6xl">
          About Granny Dovie
        </h1>
        <p className="mt-4 text-pretty font-body text-xl text-parchment/90">
          The woman behind the remedies.
        </p>
      </div>
    </section>
  )
}

export function AboutStory() {
  return (
    <section className="bg-parchment py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[2fr_3fr]">
        <div className="mx-auto max-w-sm overflow-hidden rounded-full border-4 border-gold/40 shadow-xl">
          <img
            src={images.grannyProfile || "/placeholder.svg"}
            alt="Portrait of Granny Dovie, an Appalachian folk healer"
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-balance font-serif text-3xl font-bold text-heading sm:text-4xl">
            I Am Not a Doctor, Honey.
          </h2>
          <p className="mt-2 font-body text-xl italic text-gold">
            I Am Something Older Than That.
          </p>
          <div className="mt-6 space-y-4 text-pretty font-body text-lg leading-relaxed text-ink">
            <p>
              Up here in these old hills, we never had much money for doctors. So
              we learned to lean on the land and the Lord.
            </p>
            <p>
              My people carried the healing traditions of the Appalachian
              mountains &mdash; rooted deep in Cherokee wisdom, Scots Irish folk
              medicine, and the Holy Scripture.
            </p>
            <p>
              We learned which leaves draw out a fever. Which roots calm a sour
              stomach. Which prayers settle a troubled heart.
            </p>
            <p>
              God wrote the Book AND planted the garden. Anybody who tells you to
              pick one never understood either.
            </p>
            <p>
              Now I am passing that wisdom on to you &mdash; plain and honest, the
              way it was given to me.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const beliefs = [
  {
    icon: "🌿",
    title: "God's Garden is God's Pharmacy",
    body: "Every herb, root, and seed was placed here intentionally. Psalm 104:14 tells us so.",
  },
  {
    icon: "📖",
    title: "The Bible Comes First",
    body: "Scripture is the foundation of all healing. Prayer before plants. Always.",
  },
  {
    icon: "🤝",
    title: "Old Ways Still Work",
    body: "Your grandmother knew things that no pill bottle can replace. Trust the roots.",
  },
]

export function AboutCreed() {
  return (
    <section className="bg-forest py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-balance text-center font-serif text-3xl font-bold text-parchment sm:text-4xl">
          What Granny Dovie Believes
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {beliefs.map((b) => (
            <article
              key={b.title}
              className="flex flex-col items-center rounded-lg border-2 border-gold bg-transparent p-8 text-center"
            >
              <span className="text-4xl" aria-hidden="true">
                {b.icon}
              </span>
              <h3 className="mt-4 text-balance font-serif text-xl font-bold text-parchment">
                {b.title}
              </h3>
              <p className="mt-3 text-pretty font-body text-base leading-relaxed text-parchment/90">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutScripture() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      <img
        src={images.scriptureBanner || "/placeholder.svg"}
        alt="Sunlit grove of healing plants and an open Bible"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-balance font-serif italic text-3xl leading-relaxed text-parchment sm:text-4xl lg:text-5xl">
          &ldquo;He sent His word and healed them.&rdquo;
        </p>
        <p className="mt-6 font-body text-lg text-parchment/90">— Psalm 107:20</p>
      </div>
    </section>
  )
}

export function AboutFreeGift() {
  return (
    <section className="bg-parchment py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <img
          src={images.grannySignature || "/placeholder.svg"}
          alt="Granny Dovie's handwritten signature"
          className="mx-auto mb-8 h-20 w-auto object-contain"
        />
        <h2 className="text-balance font-serif text-3xl font-bold text-heading sm:text-4xl">
          Want Granny Dovie&apos;s 15 Secret Remedies for Free?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty font-body text-lg leading-relaxed text-ink">
          Leave your name and email and your free guide will be ready to download
          immediately, honey.
        </p>
        <div className="mt-8 rounded-xl border-2 border-gold/30 bg-parchment p-6 shadow-md sm:p-8">
          <OptInForm
            compact
            buttonLabel="Get My Free Guide Now 🌿"
            emailPlaceholder="your@email.com"
          />
        </div>
      </div>
    </section>
  )
}
