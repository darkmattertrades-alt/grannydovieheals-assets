import { images } from "@/lib/site"
import { BotanicalDivider } from "@/components/botanical-divider"

export function HomeAbout() {
  return (
    <section className="bg-parchment pb-16">
      <BotanicalDivider />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[2fr_3fr]">
        <div className="mx-auto max-w-sm overflow-hidden rounded-full border-4 border-gold/40 shadow-xl">
          <img
            src={images.grannyProfile || "/placeholder.svg"}
            alt="Granny Dovie, an Appalachian folk healer, smiling warmly"
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-body text-lg font-semibold uppercase tracking-wide text-gold">A word from Granny</p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-heading sm:text-4xl">
            I&apos;m Granny Dovie, and I&apos;ve Been Tendin&apos; Folks My Whole Life
          </h2>
          <p className="mt-5 text-pretty font-body text-lg leading-relaxed text-ink/90">
            Up here in these old hills, we never had much money for doctors, so
            we learned to lean on the land and the Lord. My grandmother taught me
            which leaves draw out a fever, which roots calm a sour stomach, and
            which prayers settle a troubled heart.
          </p>
          <p className="mt-4 text-pretty font-body text-lg leading-relaxed text-ink/90">
            Now I&apos;m passin&apos; that wisdom on to you, plain and honest,
            the way it was given to me.
          </p>
          <a
            href="/about"
            className="mt-6 inline-block font-serif text-lg font-semibold text-cta underline decoration-gold/50 underline-offset-4 transition-colors hover:text-cta/80"
          >
            Read my whole story &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}

export function HomeScripture() {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(44,26,14,0.7), rgba(44,26,14,0.7)), url(${images.scriptureBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-balance font-script text-3xl leading-snug text-parchment drop-shadow sm:text-4xl md:text-5xl">
          &ldquo;And the fruit thereof shall be for meat, and the leaf thereof
          for medicine.&rdquo;
        </p>
        <p className="mt-6 font-serif text-lg font-semibold uppercase tracking-widest text-gold">
          Ezekiel 47:12
        </p>
      </div>
    </section>
  )
}
