import { images } from "@/lib/site"
import { ProductCard, type Product } from "@/components/product-card"

const topTier: Product[] = [
  {
    name: "54 Thrones African Beauty Butter Collection",
    price: "$80",
    quote: "Rooted in the beauty rituals of 54 African nations. Shea butter the way God intended it, honey.",
    href: "https://amzn.to/43IvxwP",
  },
]

const midTier: Product[] = [
  {
    name: "Trilogy Certified Organic Rosehip Oil",
    price: "$20",
    quote: "God put rosehip on this earth long before serums ever existed, honey.",
    href: "https://amzn.to/4uJu4RN",
  },
  {
    name: "Cliganic Organic Rosehip Seed Oil",
    price: "$9 — $27",
    quote: "Pure, cold pressed, and honest. Just the way healing should be.",
    href: "https://amzn.to/4eAQHBQ",
  },
  {
    name: "Raw Shea Butter 100% Pure Unrefined African Shea Butter",
    price: "$17 — $25",
    quote: "Your grandmother moisturized with this. So did her grandmother.",
    href: "https://amzn.to/4oOVMeD",
  },
  {
    name: "Sky Organics Castor Oil Organic",
    price: "$16 — $32",
    quote: "For hair, for skin, for lashes — one bottle does it all, honey.",
    href: "https://amzn.to/4oCOPgN",
  },
  {
    name: "Leven Rose Jojoba Oil Organic",
    price: "$9 — $30",
    quote: "Your skin drinks this up like a dry garden drinks in the rain.",
    href: "https://amzn.to/4uRMAY9",
  },
  {
    name: "RA Cosmetics African Shea Butter Raw Unrefined from Ghana",
    price: "$10",
    quote: "Faithful to what God planted. Nothing added. Nothing taken away.",
    href: "https://amzn.to/4uSnKYr",
  },
]

const lowTier: Product[] = [
  {
    name: "Good Molecules Pure Cold-Pressed Rosehip Seed Oil",
    price: "$10",
    quote: "Simple ingredients. Real results. No fancy labels needed, child.",
    href: "https://amzn.to/4xEFVmZ",
  },
  {
    name: "Palmer's Cocoa Butter Formula Daily Skin Therapy",
    price: "$4 — $20",
    quote: "Been on grandmothers' nightstands for generations for good reason.",
    href: "https://amzn.to/4ejRCIa",
  },
  {
    name: "Bigelow Tea Purely Peppermint Tea",
    price: "$28",
    quote: "Sip this every evening honey. Your skin starts from the inside out.",
    href: "https://amzn.to/4xG6iJg",
  },
]

export function SkincareHero() {
  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
      <img
        src={images.skincareHeader || "/placeholder.svg"}
        alt="Natural skincare oils, botanicals, and soft linens on a wooden table"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-balance font-serif text-5xl font-bold text-parchment sm:text-6xl">
          Honor the Temple 🌸
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty font-body text-xl leading-relaxed text-parchment/90">
          God gave you this body, honey. Let us tend to it the old way.
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
            <ProductCard
              key={p.name}
              product={p}
              variant={variant}
              image={images.productSkincare}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function SkincareTopTier() {
  return (
    <Tier
      label="⭐ Granny's Top Pick"
      heading="African Luxury — The One I Recommend Most"
      products={topTier}
      variant="cream"
    />
  )
}

export function SkincareMidTier() {
  return (
    <Tier
      label="Tried and Trusted"
      heading="Reliable Remedies"
      products={midTier}
      variant="forest"
    />
  )
}

export function SkincareLowTier() {
  return (
    <Tier
      label="Start Here"
      heading="Simple Remedies to Begin"
      products={lowTier}
      variant="cream"
    />
  )
}

export function SkincareScripture() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      <img
        src={images.scriptureBanner || "/placeholder.svg"}
        alt="Open Bible surrounded by dried herbs and flowers"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-balance font-serif italic text-3xl leading-relaxed text-parchment sm:text-4xl lg:text-5xl">
          &ldquo;Do you not know that your body is a temple of the Holy Spirit
          within you.&rdquo;
        </p>
        <p className="mt-6 font-body text-lg text-parchment/90">
          — 1 Corinthians 6:19
        </p>
      </div>
    </section>
  )
}
