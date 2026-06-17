import { images, AFFILIATE_DISCLOSURE } from "@/lib/site"
import { ProductCard, type Product } from "@/components/product-card"

const topTier: Product[] = [
  {
    name: "Garden of Life Extra Strength Turmeric",
    price: "$38 — $45",
    quote: "This is the first thing I reach for when the joints start achin', honey.",
    href: "https://www.amazon.com/dp/B07G2LBQ1G",
  },
  {
    name: "Gaia Herbs Ashwagandha Root Liquid Phyto Capsules",
    price: "$26 — $39",
    quote: "When your spirit is weary and your body is worn — this is God's answer.",
    href: "https://www.amazon.com/dp/B003HD9H0G",
  },
  {
    name: "Gaia Herbs Black Elderberry Syrup",
    price: "$25 — $45",
    quote: "God put elderberry here before any pharmacy ever opened, child.",
    href: "https://www.amazon.com/dp/B0036THLPE",
  },
]

const midTier: Product[] = [
  {
    name: "Doctor's Best High Absorption Magnesium Glycinate",
    price: "$20 — $30",
    quote: "For sleep, for nerves, for tired muscles — magnesium does quiet work.",
    href: "https://www.amazon.com/dp/B000BD0RT0",
  },
  {
    name: "Doctor's Best Natural Vitamin K2 MK-7 Plus D3",
    price: "$20 — $35",
    quote: "The good Lord gave us sunlight for a reason — this is sunshine in a bottle.",
    href: "https://www.amazon.com/dp/B017JXZPPU",
  },
  {
    name: "Gaia Herbs Quick Defense Echinacea & Elderberry",
    price: "$20 — $30",
    quote: "First sign of a cold coming — reach for echinacea before anything else.",
    href: "https://www.amazon.com/dp/B0036THLRW",
  },
]

const lowTier: Product[] = [
  {
    name: "Bragg Organic Raw Apple Cider Vinegar 32oz",
    price: "Under $15",
    quote: "One tablespoon every morning. Simple as that. Been doing it 40 years.",
    href: "https://www.amazon.com/dp/B001I7MVG0",
  },
  {
    name: "Nature's Way Ginger Root Capsules 550mg",
    price: "Under $15",
    quote: "Ginger has been healin' stomachs and joints since Bible times, honey.",
    href: "https://www.amazon.com/dp/B001E10C9I",
  },
  {
    name: "Bigelow Peppermint Herbal Tea 120 Bags",
    price: "Under $10",
    quote: "A cup of peppermint tea can settle more than just your stomach, honey.",
    href: "https://www.amazon.com/dp/B000GG5IZK",
  },
]

export function SupplementsHero() {
  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
      <img
        src={images.remedyHeader || "/placeholder.svg"}
        alt="Apothecary shelf of herbal remedies and dried botanicals"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-balance font-serif text-5xl font-bold text-parchment sm:text-6xl">
          God&apos;s Pharmacy 🌿
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty font-body text-xl leading-relaxed text-parchment/90">
          Every root, herb, and seed was put here for a reason, honey.
        </p>
      </div>
    </section>
  )
}

export function SupplementsDisclosure() {
  return (
    <section className="bg-parchment py-8">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-center font-body text-sm leading-relaxed text-heading/80">
          {AFFILIATE_DISCLOSURE}
        </p>
      </div>
    </section>
  )
}

function Tier({
  label,
  heading,
  products,
  variant,
}: {
  label: string
  heading: string
  products: Product[]
  variant: "cream" | "forest"
}) {
  const isForest = variant === "forest"
  return (
    <section className={isForest ? "bg-forest py-16" : "bg-parchment py-16"}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="font-body text-lg font-semibold uppercase tracking-wide text-gold">{label}</p>
          <h2
            className={`mt-1 text-balance font-serif text-3xl font-bold sm:text-4xl ${
              isForest ? "text-parchment" : "text-heading"
            }`}
          >
            {heading}
          </h2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function SupplementsTopTier() {
  return (
    <Tier
      label="Granny's Best Pick"
      heading="The Ones I Trust Most"
      products={topTier}
      variant="cream"
    />
  )
}

export function SupplementsMidTier() {
  return (
    <Tier
      label="Tried and Trusted"
      heading="Reliable Remedies"
      products={midTier}
      variant="forest"
    />
  )
}

export function SupplementsLowTier() {
  return (
    <Tier
      label="Start Here"
      heading="Simple Remedies to Begin"
      products={lowTier}
      variant="cream"
    />
  )
}

export function SupplementsScripture() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      <img
        src={images.scriptureBanner || "/placeholder.svg"}
        alt="Sunlit meadow of grasses and healing herbs"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-balance font-script text-3xl leading-relaxed text-parchment sm:text-4xl lg:text-5xl">
          &ldquo;He causeth the grass to grow for the cattle, and herb for the
          service of man.&rdquo;
        </p>
        <p className="mt-6 font-body text-lg text-parchment/90">— Psalm 104:14</p>
      </div>
    </section>
  )
}
