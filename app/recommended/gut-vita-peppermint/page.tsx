import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Granny Dovie Recommends — GutVita Advanced Gut Support",
  description:
    "When peppermint tea needs a little backup, this is what Granny Dovie reaches for. Advanced gut support for women who want faster, stronger digestive results.",
  robots: "noindex",
}

export default function GutVitaPeppermintPreLander() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://raw.githubusercontent.com/darkmattertrades-alt/grannydovieheals-assets/main/peppermint-tea-bloating-digestion.png"
          alt="Granny Dovie's peppermint tea remedy on a farmhouse table"
          width={1200}
          height={630}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Opening */}
      <h1 className="text-3xl font-bold text-amber-900 mb-6 leading-tight">
        Honey, Sometimes Your Belly Needs More Than a Cup of Tea
      </h1>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        I have kept peppermint tea on my stove for as long as I can remember.
        It works. It has always worked. And I will never stop reaching for it
        when the belly gives me trouble after a meal.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        But I hear from women all the time who say — Granny Dovie, I have
        been drinking peppermint tea every single evening and my belly still
        will not settle down. The bloating keeps coming back. The gas never
        fully goes away. Something deeper is still off.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Child, I understand that. And I want to be honest with you.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Sometimes the gut has fallen so far out of balance that a nightly
        cup of tea alone cannot do all the work. The good bacteria are
        outnumbered. The gut lining has taken damage. The digestive system
        needs more than a single leaf can deliver on its own.
      </p>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        That is when I point people toward something stronger.
      </p>

      {/* Bridge Statement */}
      <blockquote className="border-l-4 border-amber-600 pl-6 mb-8 italic text-stone-600 text-lg">
        "Peppermint tea is where I start. But honey, sometimes your belly
        needs something that goes deeper. For those nights when the tea
        alone is not enough — this is what I recommend."
      </blockquote>

      {/* What Makes It Different */}
      <h2 className="text-2xl font-bold text-amber-900 mb-4">
        What Makes This Different From the Tea Alone
      </h2>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Peppermint tea relaxes the gut wall, calms the gas, and settles
        the belly after a meal. That will never change in this kitchen.
        It is the first thing I reach for and the last thing I would
        ever give up.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        But advanced gut support works at a deeper level. It delivers
        concentrated strains of beneficial bacteria directly to where
        the gut needs them the majority. It targets the gut lining, the
        bacterial balance, and the digestive environment all at once —
        faster and with more precision than a single remedy alone.
      </p>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        For women whose digestion has struggled for years — not days —
        that kind of targeted support can change everything.
      </p>

      {/* Three Points */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-amber-900 mb-4">
          Three Reasons I Point Women Here
        </h3>
        <ul className="space-y-3 text-stone-700 text-base">
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold mt-1">01</span>
            <span>
              Targets the gut lining, bacterial balance, and digestive
              environment together — not one at a time
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold mt-1">02</span>
            <span>
              Delivers results faster for women whose gut has been
              struggling for months or years
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold mt-1">03</span>
            <span>
              Works alongside peppermint tea and traditional remedies —
              not instead of them
            </span>
          </li>
        </ul>
      </div>

      {/* Closing */}
      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        I am not here to sell you something every time you turn around.
        That is not what this kitchen is about. But when something works —
        truly works — for the women I care about, I say so plain and clear.
      </p>

      <p className="text-lg text-stone-700 mb-10 leading-relaxed">
        Watch the full presentation and decide for yourself. That is all
        I ask.
      </p>

      {/* CTA Button */}
      <div className="text-center mb-10">
        <Link
          href="https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=peppermint-tea-bloating"
          rel="sponsored noopener noreferrer"
          target="_blank"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-xl font-bold px-10 py-5 rounded-xl transition-colors duration-200"
        >
          Watch the Full Presentation
        </Link>
      </div>

      {/* Back Link */}
      <div className="text-center mb-8">
        <Link
          href="/blog/peppermint-tea-bloating-digestion"
          className="text-amber-700 underline text-base"
        >
          ← Back to Granny Dovie's Peppermint Tea Remedy
        </Link>
      </div>

      {/* Affiliate Disclosure */}
      <p className="text-xs text-stone-400 text-center leading-relaxed">
        This page contains affiliate links. If you purchase through a link
        on this page, we may earn a commission at no extra cost to you.
        Granny Dovie only recommends products she believes in.
      </p>

    </main>
  )
}
