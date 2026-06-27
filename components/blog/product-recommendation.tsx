import Image from "next/image"

type ProductRecommendationProps = {
  name: string
  price: string
  href: string
  description: string
  imageSrc?: string
}

export function ProductRecommendation({
  name,
  price,
  href,
  description,
  imageSrc,
}: ProductRecommendationProps) {
  return (
    <div className="not-prose my-8 rounded-2xl border border-green-200 bg-white shadow-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row items-stretch">
        {imageSrc && (
          <div className="relative w-full sm:w-40 h-40 flex-shrink-0 bg-green-50">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-contain p-3"
            />
          </div>
        )}
        <div className="flex flex-col justify-between p-5 gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-1">
              Granny Dovie Recommends
            </p>
            <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
              {name}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-green-800">{price}</span>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white hover:bg-green-800 transition-colors"
            >
              Buy on Amazon 🌿
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
