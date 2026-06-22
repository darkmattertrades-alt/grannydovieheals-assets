import Link from "next/link"

interface ClickbankCtaProps {
  preLanderSlug: string
  headline?: string
  subtext?: string
  buttonText?: string
}

export function ClickbankCta({
  preLanderSlug,
  headline = "When the Old Ways Need a Little Backup",
  subtext = "Granny Dovie's remedies have worked for decades. But honey, sometimes your body needs something stronger. For those days when the old ways need a little backup — this is what I recommend.",
  buttonText = "Learn More About This Product",
}: ClickbankCtaProps) {
  return (
    <div className="my-10 bg-amber-50 border border-amber-200 rounded-xl p-8 text-center not-prose">
      <h3 className="text-2xl font-bold text-amber-900 mb-4">
        {headline}
      </h3>
      <p className="text-stone-700 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
        {subtext}
      </p>
      <Link
        href={`/recommended/${preLanderSlug}`}
        className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold px-10 py-4 rounded-xl transition-colors duration-200"
      >
        {buttonText}
      </Link>
    </div>
  )
}
