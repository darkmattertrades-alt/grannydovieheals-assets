import Link from "next/link"

type BlogCtaProps = {
  variant: "quiz" | "gift"
}

export function BlogCta({ variant }: BlogCtaProps) {
  if (variant === "quiz") {
    return (
      <div className="not-prose my-8 rounded-2xl bg-green-700 px-6 py-7 text-center text-white">
        <p className="text-2xl mb-2">🌿</p>
        <h3 className="font-serif text-xl font-bold mb-2">
          Not Sure Which Remedy Is Right for You?
        </h3>
        <p className="text-sm text-green-100 mb-5 leading-relaxed">
          Answer five simple questions and Granny Dovie will point you
          to the right remedy for your body, honey.
        </p>
        <Link
          href="/quiz"
          className="inline-block rounded-full bg-white px-6 py-3 text-sm font-bold text-green-800 hover:bg-green-50 transition-colors"
        >
          Take Granny Dovie's Remedy Finder Quiz →
        </Link>
      </div>
    )
  }

  return (
    <div className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 px-6 py-7 text-center">
      <p className="text-2xl mb-2">🎁</p>
      <h3 className="font-serif text-xl font-bold text-amber-900 mb-2">
        Get Granny Dovie's 15 Secret Remedies — Free
      </h3>
      <p className="text-sm text-amber-800 mb-5 leading-relaxed">
        A free guide with fifteen of Granny Dovie's most trusted
        remedies. Straight from the old ways, child. No charge.
      </p>
      <Link
        href="/free-gift"
        className="inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white hover:bg-amber-600 transition-colors"
      >
        Send Me the Free Guide →
      </Link>
    </div>
  )
}
