import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Granny Dovie Recommends — GutVita Advanced Gut Support",
  description:
    "When ginger root needs a little backup, this is what Granny Dovie reaches for. Advanced gut support for women who want faster, stronger digestive results.",
  robots: "noindex",
}

export default function GutVitaGingerPreLander() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://raw.githubusercontent.com/darkmattertrades-alt/grannydovieheals-assets/main/ginger-root-digestion-remedy.png"
          alt="Granny Dovie's ginger root remedy on a farmhouse table"
          width={1200}
          height={630}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Opening */}
      <h1 className="text-3xl font-bold text-amber-900 mb-6 leading-tight">
        Honey, Sometimes Your Gut Needs More Than a Capsule
      </h1>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        I have kept ginger root in my cabinet for as long as I can remember.
        It works. It has always worked. And I will never stop reaching for it
        when my stomach gives me trouble.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        But I hear from women all the time who say — Granny Dovie, I have
        been taking ginger every single day and my gut still will not settle
        down. The bloating keeps coming back. The cramping never fully goes
        away. Something deeper is still off.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Child, I understand that. And I want to be honest with you.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Sometimes the gut has fallen so far out of balance that a daily
        capsule alone cannot do all the work. The good bacteria are
        outnumbered. The gut lining has taken damage. The digestive system
        needs more than a single root can deliver on its own.
      </p>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        That is when I point people toward something stronger.
      </p>

      {/* Bridge Statement */}
      <blockquote className="border-l-4 border-amber-600 pl-6 mb-8 italic text-stone-600 text-lg">
        "Ginger root is where I start. But honey, sometimes your gut needs
        something that goes deeper. For those days when the root alone is
        not enough — this is what I recommend."
      </blockquote>

      {/* What Makes It Different */}
      <h2 className="text-2xl font-bold text-amber-900 mb-4">
        What Makes This Different From the Root Alone
      </h2>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Ginger root speeds up digestion, calms inflammation, and settles
        the stomach. That will never change in this kitchen. It is the
        first thing I reach for and the last thing I would ever give up.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        But advanced gut support works at a deeper level. It delivers
        concentrated strains of beneficial bacteria directly to where the
        gut needs them the majority. It targets the gut lining, the
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
              Works alongside ginger root and traditional remedies —
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
          href="https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=ginger-root-digestion-remedy"
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
          href="/blog/ginger-root-digestion-remedy"
          className="text-amber-700 underline text-base"
        >
          ← Back to Granny Dovie's Ginger Root Remedy
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
