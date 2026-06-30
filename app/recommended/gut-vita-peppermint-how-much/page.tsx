"use client"

import Image from "next/image"
import Link from "next/link"
import { trackPrelanderClick } from "@/lib/analytics"

export default function GutVitaPeppermintHowMuch() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://raw.githubusercontent.com/darkmattertrades-alt/grannydovieheals-assets/main/peppermint-tea-bloating-and-gas.png"
          alt="Granny Dovie's peppermint tea remedy for bloating on a farmhouse table"
          width={1200}
          height={630}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Opening */}
      <h1 className="text-3xl font-bold text-amber-900 mb-6 leading-tight">
        Honey, When One Cup Is Not Enough — The Belly Needs More Than a Measure
      </h1>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Peppermint tea delivers real bloating relief. I have kept it on my
        stove for forty years and I will keep it there until I cannot stand
        at that stove anymore.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        But some women drink the tea every single evening and the bloating
        still comes back the next day. The relief lasts a few hours — and
        then the belly fills up again. The gas returns. The pressure builds
        again before the next meal even arrives.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Child, that is not a failure of the remedy. That is a sign that
        the gut itself has fallen out of balance in a way that needs more
        targeted support.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Sometimes the good bacteria are outnumbered. Sometimes the gut
        lining has taken damage over years of stress, poor diet, or
        medication use. Sometimes the digestive environment needs rebuilding
        from the inside out — not managing from the outside in.
      </p>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        That is when I point people toward something stronger.
      </p>

      {/* Bridge Statement */}
      <blockquote className="border-l-4 border-amber-600 pl-6 mb-8 italic text-stone-600 text-lg">
        "Granny Dovie's remedies have worked for decades. But honey,
        sometimes your body needs something stronger. For those days when
        the old ways need a little backup — this is what I recommend."
      </blockquote>

      {/* What Makes It Different */}
      <h2 className="text-2xl font-bold text-amber-900 mb-4">
        What Makes This Different From the Old Ways
      </h2>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Traditional remedies work with your body over time. They are gentle,
        they are natural, and they build lasting habits. That will never
        change in this kitchen.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        But advanced gut support works at a deeper level. It delivers
        concentrated strains of beneficial bacteria directly to where the
        gut needs them the majority. It targets the gut lining, the
        bacterial balance, and the digestive environment all at once —
        faster and with more precision than food-based remedies alone.
      </p>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        For women whose bloating has persisted for months or years despite
        doing everything right — that kind of targeted support can change
        everything.
      </p>

      {/* Three Points */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-amber-900 mb-4">
          Three Reasons I Point People Here
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
              Delivers lasting relief for women whose bloating returns
              despite consistent use of traditional remedies
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold mt-1">03</span>
            <span>
              Works alongside traditional remedies — not instead of them
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
          href="https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=how-much-peppermint-tea-for-bloating"
          rel="sponsored noopener noreferrer"
          target="_blank"
          onClick={() => trackPrelanderClick("how-much-peppermint-tea-for-bloating", "gut-vita-peppermint-how-much")}
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-xl font-bold px-10 py-5 rounded-xl transition-colors duration-200"
        >
          Watch the Full Presentation
        </Link>
      </div>

      {/* Back Link */}
      <div className="text-center mb-8">
        <Link
          href="/blog/how-much-peppermint-tea-for-bloating"
          className="text-amber-700 underline text-base"
        >
          ← Back to How Much Peppermint Tea for Bloating
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
