import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Granny Dovie Recommends — Sleep Revive Natural Sleep Support",
  description:
    "When the old ways need a little backup, this is what Granny Dovie reaches for. Advanced natural sleep support for women who want faster, stronger results.",
  robots: "noindex",
}

export default function SleepRevivePreLander() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://raw.githubusercontent.com/darkmattertrades-alt/grannydovieheals-assets/main/ashwagandha-women-over-50.png"
          alt="Granny Dovie's natural sleep remedy"
          width={1200}
          height={630}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Opening */}
      <h1 className="text-3xl font-bold text-amber-900 mb-6 leading-tight">
        Honey, Sometimes Your Body Needs More Than a Root to Sleep
      </h1>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        I have kept ashwagandha in my cabinet for years. It works. It has
        always worked. And I will never stop reaching for it when stress
        starts wearing on the body.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        But I hear from women all the time who say — Granny Dovie, I have
        been doing everything right and I still cannot sleep. I lie down
        exhausted and my mind will not stop. I wake up at 3 in the morning
        and cannot get back. Something deeper is still off.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Child, I understand that. And I want to be honest with you.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Sometimes the body has been running on stress for so long that a
        single root cannot reset it on its own. The nervous system is worn
        down. The sleep cycle has been broken for months. The body needs
        more than ashwagandha alone can deliver.
      </p>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        That is when I point people toward something stronger.
      </p>

      {/* Bridge Statement */}
      <blockquote className="border-l-4 border-amber-600 pl-6 mb-8 italic text-stone-600 text-lg">
        "Ashwagandha is where I begin. But honey, sometimes your body
        needs something stronger. For those nights when the old ways need
        a little backup — this is what I recommend."
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
        But advanced sleep support works at a deeper level. It targets the
        nervous system, the sleep cycle, and cortisol levels all at once —
        faster and with more precision than a single herb alone. It delivers
        the concentrated support the body needs when broken sleep has been
        going on far beyond what rest can fix.
      </p>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        For women whose sleep has been broken for months or years — that
        kind of targeted support can change everything.
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
              Targets the nervous system, sleep cycle, and cortisol levels
              together — not one at a time
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold mt-1">02</span>
            <span>
              Delivers results faster for women whose sleep has been broken
              for months or years
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
          href="https://hop.clickbank.net/?vendor=revive&affiliate=dovieheals&lid=1&tid=natural-sleep-remedy"
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
          href="/blog/ashwagandha-stress-women-over-50"
          className="text-amber-700 underline text-base"
        >
          ← Back to Granny Dovie's Ashwagandha Post
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
