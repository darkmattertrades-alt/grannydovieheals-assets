"use client"

import Image from "next/image"
import Link from "next/link"
import { trackPrelanderClick } from "@/lib/analytics"

export default function VisifloraPreLander() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://raw.githubusercontent.com/darkmattertrades-alt/grannydovieheals-assets/main/elderberry-syrup-immune-support.png"
          alt="Granny Dovie's elderberry syrup on a farmhouse table"
          width={1200}
          height={630}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Opening */}
      <h1 className="text-3xl font-bold text-amber-900 mb-6 leading-tight">
        Honey, Sometimes Your Immune System Needs More Than a Tablespoon
      </h1>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        I have made elderberry syrup every September for as long as I can
        remember. It works. It has always worked. And I will never stop
        making a fresh jar the moment the season starts to turn.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        But I hear from people all the time who say — Granny Dovie, I have
        been taking my tablespoon every single morning and my family still
        gets knocked down every winter. The colds still come. The recovery
        takes just as long. Something deeper is still off.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Child, I understand that. And I want to be honest with you.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Sometimes the immune system has been worn down for so long that a
        daily tablespoon alone cannot do all the work. The immune signals
        are running slow. The body's defenses need more than a traditional
        remedy can deliver on its own.
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
        What Makes This Different From the Syrup Alone
      </h2>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Traditional remedies work with your body over time. They are gentle,
        they are natural, and they build lasting habits. That will never
        change in this kitchen.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        But advanced immune support works at a deeper level. It delivers
        concentrated immune compounds directly to where the body needs them
        the majority. It targets immune signals, antioxidant defense, and
        seasonal protection all at once — faster and with more precision
        than food-based remedies alone.
      </p>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        For families whose immune systems have struggled season after season
        — not just one bad winter — that kind of targeted support can
        change everything.
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
              Targets immune signals, antioxidant defense, and seasonal
              protection together — not one at a time
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold mt-1">02</span>
            <span>
              Delivers results faster for families whose immune systems have
              taken a beating season after season
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold mt-1">03</span>
            <span>
              Works alongside elderberry syrup and traditional remedies —
              not instead of them
            </span>
          </li>
        </ul>
      </div>

      {/* Closing */}
      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        I am not here to sell you something every time you turn around.
        That is not what this kitchen is about. But when something works —
        truly works — for the people I care about, I say so plain and clear.
      </p>

      <p className="text-lg text-stone-700 mb-10 leading-relaxed">
        Watch the full presentation and decide for yourself. That is all
        I ask.
      </p>

      {/* CTA Button */}
      <div className="text-center mb-10">
        <Link
          href="https://hop.clickbank.net/?affiliate=dovieheals&vendor=visiflora&pid=v1&tid=elderberry-syrup"
          rel="sponsored noopener noreferrer"
          target="_blank"
          onClick={() => trackPrelanderClick("elderberry-syrup-recipe-home", "visiflora")}
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-xl font-bold px-10 py-5 rounded-xl transition-colors duration-200"
        >
          Watch the Full Presentation
        </Link>
      </div>

      {/* Back Link */}
      <div className="text-center mb-8">
        <Link
          href="/blog/elderberry-syrup-recipe-home"
          className="text-amber-700 underline text-base"
        >
          ← Back to Granny Dovie's Elderberry Syrup Recipe
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
