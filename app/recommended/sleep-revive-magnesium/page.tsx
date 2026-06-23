import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Granny Dovie Recommends — Sleep Revive Natural Sleep Support",
  description:
    "When magnesium alone needs a little backup — Granny Dovie's recommendation for women who want deeper, steadier sleep without melatonin.",
  robots: "noindex",
}

export default function SleepRevivePreLander() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <Image
        src="https://raw.githubusercontent.com/darkmattertrades-alt/grannydovieheals-assets/main/natural-sleep-remedy-no-melatonin.png"
        alt="Aged hands holding two magnesium tablets beside a glass of water on a farmhouse table"
        width={1200}
        height={630}
        className="rounded-xl mb-8 w-full object-cover"
      />

      <h1 className="text-3xl font-bold text-amber-900 mb-6 leading-tight">
        Honey, Sometimes Your Body Needs More Than a Mineral
      </h1>

      <p className="text-lg text-stone-700 mb-4 leading-relaxed">
        Magnesium glycinate is the first thing Granny Dovie reaches for when
        sleep goes wrong. It calms the nervous system. It lowers cortisol. It
        tells the muscles to let go. For the majority of women it is all they
        need.
      </p>

      <p className="text-lg text-stone-700 mb-4 leading-relaxed">
        But some women need a little more. The kind of support that works on
        the deeper hormonal shifts that come after 50 — the ones that keep the
        brain running past midnight no matter how tired the body feels.
      </p>

      <p className="text-lg text-stone-700 mb-4 leading-relaxed">
        That is where Sleep Revive comes in. Granny Dovie points women here
        when magnesium alone is not enough to bring the full rest back.
      </p>

      <blockquote className="border-l-4 border-amber-600 pl-4 italic text-stone-600 mb-6">
        "I have seen women try everything and still wake up at 2 in the
        morning. Sometimes the body needs a deeper kind of support, child.
        There is no shame in that." — Granny Dovie
      </blockquote>

      <h2 className="text-2xl font-bold text-amber-900 mb-4">
        What Makes Sleep Revive Different From the Old Ways
      </h2>

      <p className="text-lg text-stone-700 mb-4 leading-relaxed">
        The old ways worked because they addressed the root — not the symptom.
        Sleep Revive follows that same principle. It does not force the body
        into sleep. It gives the nervous system and the hormonal system what
        they need to find rest on their own.
      </p>

      <p className="text-lg text-stone-700 mb-6 leading-relaxed">
        Three reasons Granny Dovie points women here:
      </p>

      <ul className="space-y-4 mb-8">
        <li className="flex items-start gap-3">
          <span className="text-amber-600 font-bold text-xl">1.</span>
          <p className="text-stone-700 leading-relaxed">
            <strong>It works on cortisol and hormones together</strong> —
            addressing the two root causes of poor sleep in women over 50 at
            the same time.
          </p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-amber-600 font-bold text-xl">2.</span>
          <p className="text-stone-700 leading-relaxed">
            <strong>It works faster than minerals alone</strong> — women report
            noticeable changes within the first two weeks of steady use.
          </p>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-amber-600 font-bold text-xl">3.</span>
          <p className="text-stone-700 leading-relaxed">
            <strong>It works alongside magnesium glycinate</strong> — not
            instead of it. The two together cover every pathway that stands
            between you and a full night of rest.
          </p>
        </li>
      </ul>

      <p className="text-lg text-stone-700 mb-4 leading-relaxed">
        If you have been lying awake night after night and the minerals are not
        bringing the full rest back — watch the full presentation. It will show
        you exactly how Sleep Revive works and why it may be the missing piece
        your body has been waiting for.
      </p>

      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        God built the body to sleep, honey. Sometimes it just needs a little
        help remembering how.
      </p>

      <a
        href="https://hop.clickbank.net/?vendor=revive&affiliate=dovieheals&lid=1&tid=natural-sleep-remedy"
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="block w-full text-center bg-amber-700 hover:bg-amber-800 text-white font-bold text-lg py-4 px-8 rounded-xl transition-colors duration-200 mb-8"
      >
        Watch the Full Presentation
      </a>

      <Link
        href="/blog/natural-sleep-remedy-no-melatonin"
        className="text-amber-700 underline text-base block text-center"
      >
        ← Back to the Blog
      </Link>

      <p className="text-xs text-stone-400 mt-12 text-center leading-relaxed">
        This page contains affiliate links. If you purchase through a link on
        this page, we may earn a small commission at no extra cost to you.
      </p>
    </main>
  )
}
