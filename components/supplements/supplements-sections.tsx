import { images } from "@/lib/site"
import { ProductCard, type Product } from "@/components/product-card"

const premiumTier: Product[] = [
  {
    name: "Dose Organic Milk Thistle Liver Cleanse 6-Bottle Supply",
    price: "$180",
    quote: "When you want to cleanse from the inside out — this is the one I trust, honey.",
    href: "https://amzn.to/43MUCXw",
  },
  {
    name: "Resilia Black Seed Oil + Oregano Capsules 300ct",
    price: "$119",
    quote: "Black seed oil — the remedy the Prophet himself spoke of. God's medicine, child.",
    href: "https://amzn.to/3SCbdL4",
  },
  {
    name: "JUNG KWAN JANG Korean Red Ginseng Concentrated Extract 120g",
    price: "$119",
    quote: "Six years in the ground before it is harvested. Real patience. Real healing.",
    href: "https://amzn.to/4uJGhG3",
  },
  {
    name: "JUNG KWAN JANG Korean Red Panax Ginseng Extra Strength",
    price: "$219",
    quote: "The strongest ginseng God's earth can give. For when you need real strength, honey.",
    href: "https://amzn.to/3QTrBGz",
  },
  {
    name: "American BioSciences ImmPower AHCC 6-Pack",
    price: "$186",
    quote: "Your immune system works day and night for you. Give it something worthy in return.",
    href: "https://amzn.to/4uRSaKm",
  },
  {
    name: "Terry Naturally CuraMed 750mg 120 Softgels 3-Pack",
    price: "$102",
    quote: "Turmeric so potent it puts the ordinary kind to shame. Worth every penny, honey.",
    href: "https://amzn.to/3Szuw7O",
  },
]

const topTier: Product[] = [
  {
    name: "Garden of Life Organics Extra Strength Turmeric 60 Tablets",
    price: "$23 — $38",
    quote: "This is the first thing I reach for when the joints start achin', honey.",
    href: "https://amzn.to/4gg9Xaz",
  },
  {
    name: "Gaia Herbs Ashwagandha Root 350mg",
    price: "$25 — $48",
    quote: "When your spirit is weary and your body is worn — this is God's answer.",
    href: "https://amzn.to/4xGZI5d",
  },
  {
    name: "Gaia Herbs Black Elderberry Syrup",
    price: "$22 — $33",
    quote: "God put elderberry here before any pharmacy ever opened, child.",
    href: "https://amzn.to/3SRwvEy",
  },
]

const midTier: Product[] = [
  {
    name: "Doctor's Best High Absorption Magnesium Glycinate Lysinate",
    price: "$12 — $20",
    quote: "For sleep, for nerves, for tired muscles — magnesium does quiet work.",
    href: "https://amzn.to/4oDV8Ax",
  },
  {
    name: "Doctor's Best Natural Vitamin K2 MK-7 Plus D3",
    price: "$24",
    quote: "The good Lord gave us sunlight for a reason — this is sunshine in a bottle.",
    href: "https://amzn.to/4xEiL03",
  },
  {
    name: "Gaia Herbs Quick Defense Fast-Acting",
    price: "$25 — $66",
    quote: "First sign of a cold coming — reach for echinacea before anything else.",
    href: "https://amzn.to/43NXcwf",
  },
]

const lowTier: Product[] = [
  {
    name: "Bragg Organic Raw Apple Cider Vinegar",
    price: "$4 — $6",
    quote: "One tablespoon every morning. Simple as that. Been doing it 40 years.",
    href: "https://amzn.to/4uQyyX4",
  },
  {
    name: "Nature's Way Premium Ginger Root 550mg",
    price: "$29",
    quote: "Ginger has been healin' stomachs and joints since Bible times, honey.",
    href: "https://amzn.to/43Ia3jH",
  },
  {
    name: "Bigelow Tea Peppermint Herbal Tea",
    price: "$20",
    quote: "A cup of peppermint tea can settle more than just your stomach, honey.",
    href: "https://amzn.to/3SaCX9H",
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
          <p className="font-body text-lg font-semibold uppercase tracking-wide text-gold">
            {label}
          </p>
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

export function SupplementsPremiumTier() {
  return (
    <Tier
      label="⭐ Granny's Premium Pick"
      heading="The Strongest Remedies I Know"
      products={premiumTier}
      variant="forest"
    />
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
        <p className="text-balance font-serif italic text-3xl leading-relaxed text-parchment sm:text-4xl lg:text-5xl">
          &ldquo;He causeth the grass to grow for the cattle, and herb for the
          service of man.&rdquo;
        </p>
        <p className="mt-6 font-body text-lg text-parchment/90">— Psalm 104:14</p>
      </div>
    </section>
  )
}
