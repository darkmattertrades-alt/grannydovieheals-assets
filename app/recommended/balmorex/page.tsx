"use client"

import Image from "next/image"
import Link from "next/link"
import { trackPrelanderClick } from "@/lib/analytics"

export default function BalmorexPreLander() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://raw.githubusercontent.com/darkmattertrades-alt/grannydovieheals-assets/main/turmeric-joint-pain.png"
          alt="Granny Dovie's kitchen remedy table"
          width={1200}
          height={630}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Opening */}
      <h1 className="text-3xl font-bold text-amber-900 mb-6 leading-tight">
        Honey, Sometimes Your Joints Need More Than a Golden Root
      </h1>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        I have kept turmeric in my cabinet for over forty years. It works.
        It has always worked. And I will never stop reaching for it when
        my joints start to holler.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        But I hear from people all the time who say — Granny Dovie, I have
        been taking my turmeric every single day and my knees still ache
        every morning. The stiffness comes back. The discomfort never fully
        goes away. Something deeper is still off.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Child, I understand that. And I want to be honest with you.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Sometimes the joints have been inflamed for so long that a daily
        root alone cannot do all the work. The inflammation runs deeper.
        The joint lining has taken damage. The body needs more than a
        traditional remedy can deliver on its own.
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
        What Makes This Different From the Root Alone
      </h2>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        Traditional remedies work with your body over time. They are gentle,
        they are natural, and they build lasting habits. That will never
        change in this kitchen.
      </p>

      <p className="text-lg text-stone-700 mb-5 leading-relaxed">
        But advanced joint support works at a deeper level. It delivers
        concentrated relief directly to where the joints need it the
        majority. It targets the joint lining, the inflammation pathway,
        and the surrounding tissue all at once — faster and with more
        precision than food-based remedies alone.
      </p>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        For people whose joints have struggled for years — not days —
        that kind of targeted support can change everything.
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
              Targets the joint lining, inflammation pathway, and surrounding
              tissue together — not one at a time
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold mt-1">02</span>
            <span>
              Delivers results faster for people whose joints have been
              struggling for months or years
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold mt-1">03</span>
            <span>
              Works alongside turmeric and traditional remedies — not
              instead of them
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
          href="https://hop.clickbank.net/?affiliate=dovieheals&vendor=balmorex&pid=v1&tid=turmeric-joint-pain"
          rel="sponsored noopener noreferrer"
          target="_blank"
          onClick={() => trackPrelanderClick("turmeric-joint-pain-natural-remedy", "balmorex")}
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-xl font-bold px-10 py-5 rounded-xl transition-colors duration-200"
        >
          Watch the Full Presentation
        </Link>
      </div>

      {/* Back Link */}
      <div className="text-center mb-8">
        <Link
          href="/blog/turmeric-joint-pain-natural-remedy"
          className="text-amber-700 underline text-base"
        >
          ← Back to Granny Dovie's Turmeric Remedy
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
