import Link from "next/link"

export const metadata = {
  title: "Granny Dovie Recommends — Synevra UltraLift",
  description:
    "Natural skincare support the old way. Granny Dovie's recommendation for women who want stronger, faster results.",
  robots: "noindex",
}

export default function SynevraPreLander() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 text-center">
      <h1 className="text-3xl font-bold text-amber-900 mb-6 leading-tight">
        Coming Soon, Honey
      </h1>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        Granny Dovie is still putting this page together. Check back soon.
      </p>

      <Link
        href="/blog"
        className="text-amber-700 underline text-base"
      >
        ← Back to the Blog
      </Link>
    </main>
  )
}
