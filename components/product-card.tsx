import { images } from "@/lib/site"

export type Product = {
  name: string
  price: string
  quote: string
  href: string
}

export function ProductCard({
  product,
  variant = "cream",
}: {
  product: Product
  variant?: "cream" | "forest"
}) {
  const isForest = variant === "forest"
  const buttonColor = isForest ? "bg-gold hover:bg-gold/90" : "bg-cta hover:bg-cta/90"

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-lg border-2 shadow-lg transition-shadow hover:shadow-xl ${
        isForest ? "border-gold/40 bg-parchment" : "border-gold/30 bg-parchment"
      }`}
    >
      <div className="h-52 overflow-hidden bg-parchment">
        <img
          src={images.productSupplements || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold leading-snug text-heading">
          {product.name}
        </h3>
        <p className="mt-2 font-serif text-lg font-semibold text-gold">
          {product.price}
        </p>
        <p className="mt-4 flex-1 text-pretty font-script text-xl leading-relaxed text-ink/85">
          &ldquo;{product.quote}&rdquo;
        </p>
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`mt-6 inline-block rounded-md px-6 py-3 text-center font-serif font-semibold text-parchment transition-all ${buttonColor}`}
        >
          Shop on Amazon →
        </a>
      </div>
    </article>
  )
}
