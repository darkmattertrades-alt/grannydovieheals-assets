import { images } from "@/lib/site"

const remedies = [
  "Morning Joint Stiffness Remedy",
  "Deep Sleep Tonic",
  "Immunity Booster Tea",
  "Gut Healing Broth",
  "Natural Energy Tonic",
  "Skin Brightening Honey Mask",
  "Headache Relief Compress",
  "Chest Congestion Rub",
  "Anxiety Calming Tea",
  "Blood Pressure Support Blend",
  "Anti Inflammatory Golden Milk",
  "Digestive Bitters Recipe",
  "Natural Wound Salve",
  "Hair Growth Scalp Oil",
  "Liver Cleanse Morning Tonic",
]

export function FreeGiftHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <img
        src={images.freeGift || "/placeholder.svg"}
        alt="Granny Dovie's handwritten book of herbal remedies on a wooden table"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-parchment sm:text-5xl lg:text-6xl">
          Granny Dovie&apos;s 15 Secret Remedies
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty font-body text-lg leading-relaxed text-parchment/90">
          Free guide passed down through generations — finally being shared, honey.
        </p>
      </div>
    </section>
  )
}

export function FreeGiftInside() {
  return (
    <section className="bg-parchment py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-serif text-3xl font-bold text-heading sm:text-4xl">
          What&apos;s Inside The Guide
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {remedies.map((remedy, i) => (
            <li
              key={remedy}
              className="flex items-center gap-4 rounded-lg border border-gold bg-parchment p-5 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-base font-semibold text-gold">
                {i + 1}
              </span>
              <span className="font-body text-base leading-relaxed text-ink">
                {remedy}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
