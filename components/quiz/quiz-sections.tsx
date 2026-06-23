"use client"

import { useState } from "react"
import Link from "next/link"

type Answer = {
  label: string
  value: string
}

type Question = {
  id: string
  prompt: string
  scripture?: string
  answers: Answer[]
}

type ResultProduct = {
  name: string
  price: string
  amazonHref: string
  clickbankHref: string
  clickbankLabel: string
  grannyWord: string
  scripture: string
}

const questions: Question[] = [
  {
    id: "opening",
    prompt: "Honey, what brings you to Granny Dovie's kitchen today?",
    scripture:
      "3 John 1:2 — Beloved, I pray that you may prosper in all things and be in health.",
    answers: [
      { label: "I am tired and worn down", value: "tired" },
      { label: "Something hurts and will not stop", value: "pain" },
      { label: "My skin needs tending to", value: "skin" },
      { label: "My stomach gives me trouble", value: "gut" },
      { label: "I cannot sleep like I used to", value: "sleep" },
      { label: "I keep catching every cold that passes by", value: "immune" },
    ],
  },
  {
    id: "concern",
    prompt: "Tell Granny which one troubles you the most, child.",
    answers: [
      { label: "Joint pain and stiffness", value: "joints" },
      { label: "Stress, worry, and anxious thoughts", value: "stress" },
      { label: "Low energy and burnout", value: "stress" },
      { label: "Digestion — bloating, gas, slowness", value: "digestion" },
      { label: "Poor sleep and restless nights", value: "sleep" },
      { label: "Weak immunity — sick too often", value: "immune" },
      { label: "Skin — dark spots, dryness, aging", value: "skin" },
      { label: "Blood sugar — energy crashes, cravings", value: "bloodsugar" },
    ],
  },
  {
    id: "duration",
    prompt: "How long has this been weighing on you?",
    answers: [
      { label: "Just started — a few weeks", value: "new" },
      { label: "A few months now", value: "medium" },
      { label: "Years — it has settled in deep", value: "serious" },
    ],
  },
  {
    id: "tried",
    prompt: "What have you already tried, honey?",
    answers: [
      { label: "Nothing yet — looking for where to begin", value: "nothing" },
      { label: "Over the counter medicine — did not help", value: "otc" },
      { label: "Some herbs and teas here and there", value: "herbs" },
      { label: "Doctor visits — they help but not enough", value: "doctor" },
    ],
  },
  {
    id: "format",
    prompt: "What remedy form suits you best?",
    answers: [
      { label: "Capsules or tablets — simple and fast", value: "capsules" },
      { label: "Liquid or syrup — easy to take", value: "liquid" },
      { label: "Oil — on skin or in food", value: "oil" },
      { label: "Tea — slow and soothing", value: "tea" },
    ],
  },
]

function getResult(answers: Record<string, string>): ResultProduct {
  const concern = answers.concern ?? answers.opening ?? "digestion"
  const duration = answers.duration ?? "new"

  if (concern === "skin") {
    return {
      name: "54 Thrones African Beauty Butter Collection ⭐",
      price: "$80",
      amazonHref: "https://amzn.to/43IvxwP",
      clickbankHref:
        "https://hop.clickbank.net/?affiliate=dovieheals&vendor=synevra&pid=v1&tid=synevra",
      clickbankLabel: "Synevra UltraLift",
      grannyWord:
        "Honey, your skin remembers what God put in the earth for it. The old ways are calling it back.",
      scripture: "Song of Solomon 1:3 — Your anointing oils are fragrant.",
    }
  }

  if (concern === "joints" || concern === "pain") {
    if (duration === "serious") {
      return {
        name: "Terry Naturally CuraMed 750mg 120 Softgels 3-Pack",
        price: "$102",
        amazonHref: "https://amzn.to/3Szuw7O",
        clickbankHref:
          "https://hop.clickbank.net/?affiliate=dovieheals&vendor=nervearmor&w=main",
        clickbankLabel: "Nerve Armor",
        grannyWord:
          "Child, when pain has been in the body for years it needs something deeper than a daily supplement. CuraMed is what I reach for when it has gone on too long.",
        scripture: "Psalm 103:3 — Who heals all your diseases.",
      }
    }
    return {
      name: "Garden of Life Organics Extra Strength Turmeric",
      price: "$23 — $38",
      amazonHref: "https://amzn.to/4gg9Xaz",
      clickbankHref:
        "https://hop.clickbank.net/?affiliate=dovieheals&vendor=balmorex&pid=v1&tid=turmeric-joint-pain",
      clickbankLabel: "Balmorex",
      grannyWord:
        "Child, that stiffness is inflammation talking. God planted turmeric long before aspirin ever existed.",
      scripture: "Psalm 103:3 — Who heals all your diseases.",
    }
  }

  if (concern === "stress" || concern === "tired") {
    return {
      name: "Gaia Herbs Ashwagandha Root 350mg",
      price: "$25 — $48",
      amazonHref: "https://amzn.to/4xGZI5d",
      clickbankHref:
        "https://hop.clickbank.net/?affiliate=dovieheals&vendor=synevra&pid=v1&tid=ashwagandha-women-50",
      clickbankLabel: "Synevra UltraLift",
      grannyWord:
        "Honey, your body is not broken. It is just running on empty. Let us fill it back up the old way.",
      scripture:
        "Isaiah 40:31 — They that wait upon the Lord shall renew their strength.",
    }
  }

  if (concern === "immune") {
    if (duration === "serious") {
      return {
        name: "American BioSciences ImmPower AHCC 6-Pack",
        price: "$186",
        amazonHref: "https://amzn.to/4uRSaKm",
        clickbankHref:
          "https://hop.clickbank.net/?affiliate=dovieheals&vendor=visiflora&pid=v1&tid=visiflora",
        clickbankLabel: "VisiFlora",
        grannyWord:
          "When your immune system has been struggling for years, honey, it needs the deep root support. AHCC is what the research points to and what I trust.",
        scripture:
          "Revelation 22:2 — The leaves of the tree were for the healing of the nations.",
      }
    }
    return {
      name: "Gaia Herbs Black Elderberry Syrup",
      price: "$22 — $33",
      amazonHref: "https://amzn.to/3SRwvEy",
      clickbankHref:
        "https://hop.clickbank.net/?affiliate=dovieheals&vendor=visiflora&pid=v1&tid=elderberry-syrup",
      clickbankLabel: "VisiFlora",
      grannyWord:
        "God knew your immune system would need elderberry. He planted it before your grandmother's grandmother was born.",
      scripture:
        "Revelation 22:2 — The leaves of the tree were for the healing of the nations.",
    }
  }

  if (concern === "sleep") {
    return {
      name: "Doctor's Best High Absorption Magnesium Glycinate",
      price: "$12 — $20",
      amazonHref: "https://amzn.to/4oDV8Ax",
      clickbankHref:
        "https://hop.clickbank.net/?vendor=revive&affiliate=dovieheals&lid=1&tid=natural-sleep-remedy",
      clickbankLabel: "Sleep Revive",
      grannyWord:
        "Child, sleep is not a luxury. God designed your body to rest. Magnesium is the mineral He put in the earth for exactly this.",
      scripture: "Psalm 127:2 — He grants sleep to those He loves.",
    }
  }

  if (concern === "bloodsugar") {
    if (duration === "serious") {
      return {
        name: "Resilia Black Seed Oil + Oregano Capsules 300ct",
        price: "$119",
        amazonHref: "https://amzn.to/3SCbdL4",
        clickbankHref:
          "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gluco6&pid=vsl&tid=gluco6",
        clickbankLabel: "Gluco6",
        grannyWord:
          "Honey, black seed oil has been used for blood sugar and inflammation for thousands of years. The Prophet himself spoke of it. That is not an accident.",
        scripture: "Genesis 1:29 — I give you every seed-bearing plant.",
      }
    }
    if (duration === "medium") {
      return {
        name: "Bragg Organic Raw Apple Cider Vinegar",
        price: "$4 — $6",
        amazonHref: "https://amzn.to/4uQyyX4",
        clickbankHref:
          "https://hop.clickbank.net/?custom=1&affiliate=dovieheals&vendor=sugardef&pid=new",
        clickbankLabel: "Sugar Defender",
        grannyWord:
          "One tablespoon in warm water every morning before you eat a thing. That is where blood sugar support begins, child.",
        scripture: "Ezekiel 47:12 — Their leaves are for healing.",
      }
    }
    return {
      name: "Bragg Organic Raw Apple Cider Vinegar",
      price: "$4 — $6",
      amazonHref: "https://amzn.to/4uQyyX4",
      clickbankHref:
        "https://buyinsuleaf.com/en/funnel/main/?affiliate=dovieheals",
      clickbankLabel: "InsuLeaf",
      grannyWord:
        "Start simple, honey. One tablespoon of raw apple cider vinegar every morning. Your body will tell you the difference within a week.",
      scripture: "Ezekiel 47:12 — Their leaves are for healing.",
    }
  }

  if (duration === "serious") {
    return {
      name: "Dose Organic Milk Thistle Liver Cleanse 6-Bottle Supply",
      price: "$180",
      amazonHref: "https://amzn.to/43MUCXw",
      clickbankHref:
        "https://hop.clickbank.net/?affiliate=dovieheals&vendor=vivogut&pid=v1&tid=vivogut",
      clickbankLabel: "VivoGut",
      grannyWord:
        "Honey, when the gut has been struggling for years the liver needs tending to first. Clean the root before you tend the branches.",
      scripture:
        "Ezekiel 47:12 — Their fruit will serve for food and their leaves for healing.",
    }
  }

  return {
    name: "Bragg Organic Raw Apple Cider Vinegar",
    price: "$4 — $6",
    amazonHref: "https://amzn.to/4uQyyX4",
    clickbankHref:
      "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=acv-morning-routine",
    clickbankLabel: "GutVita",
    grannyWord:
      "Honey, your gut is the root of everything. One tablespoon every morning in warm water. That is where we begin.",
    scripture:
      "Ezekiel 47:12 — Their fruit will serve for food and their leaves for healing.",
  }
}

export function GrannyQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selected, setSelected] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const currentQuestion = questions[step]
  const totalSteps = questions.length

  function handleSelect(value: string) {
    setSelected(value)
  }

  function handleNext() {
    if (!selected) return
    const newAnswers = { ...answers, [currentQuestion.id]: selected }
    setAnswers(newAnswers)
    setSelected(null)
    if (step + 1 >= totalSteps) {
      setShowResult(true)
    } else {
      setStep((s) => s + 1)
    }
  }

  function handleRestart() {
    setStep(0)
    setAnswers({})
    setSelected(null)
    setShowResult(false)
  }

  const result = showResult ? getResult(answers) : null

  return (
    <section className="min-h-screen bg-[#F5ECD7] px-4 py-3">
      <div className="max-w-xl mx-auto">

        {/* ── HERO HEADER ── */}
        <div className="text-center mb-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C8922A] mb-2">
            🌿 Granny Dovie&apos;s Remedy Finder
          </p>
        </div>

        {/* ── RESULT SCREEN ── */}
        {showResult && result && (
          <div className="bg-[#FFFDF8] border border-amber-200 rounded-2xl shadow-lg p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C8922A] mb-2">
              Granny Dovie&apos;s Recommendation
            </p>
            <h2 className="font-serif text-2xl font-bold text-[#2C1A0E] mb-6">
              This is what your body needs, honey.
            </h2>

            {/* Granny's word */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 text-left">
              <p className="text-base italic text-[#5C4A1E] leading-relaxed mb-3">
                &ldquo;{result.grannyWord}&rdquo;
              </p>
              <p className="text-xs text-stone-400">{result.scripture}</p>
            </div>

            {/* Amazon product card */}
            <div className="border border-stone-200 rounded-xl p-6 mb-4 text-left bg-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C8922A] mb-1">
                Amazon Pick
              </p>
              <h3 className="font-serif text-lg font-bold text-[#2C1A0E] mb-1">
                {result.name}
              </h3>
              <p className="text-sm text-stone-400 mb-4">{result.price}</p>
              <Link
                href={result.amazonHref}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-block w-full text-center bg-[#C8922A] hover:bg-[#b57d22] text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200"
              >
                🛒 Buy on Amazon
              </Link>
            </div>

            {/* Clickbank card */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C8922A] mb-1">
                When You Need Something Stronger
              </p>
              <h3 className="font-serif text-lg font-bold text-[#2C1A0E] mb-1">
                {result.clickbankLabel}
              </h3>
              <p className="text-sm text-stone-500 mb-4">
                Granny Dovie&apos;s recommended supplement for deeper, lasting support.
              </p>
              <Link
                href={result.clickbankHref}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-block w-full text-center bg-[#3B5E3A] hover:bg-[#2e4a2d] text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200"
              >
                🌿 Learn More About {result.clickbankLabel}
              </Link>
            </div>

            {/* Blog CTA */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
              <p className="text-sm font-semibold text-[#3B5E3A] mb-2">
                Want to explore more remedies?
              </p>
              <Link
                href="/blog"
                className="text-sm font-bold text-[#3B5E3A] underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                Read Granny Dovie&apos;s remedy blog 🌿
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-stone-400 mb-6 leading-relaxed">
              This is not medical advice, honey. Always talk to your doctor
              before starting any new supplement. Affiliate links may earn a
              small commission at no cost to you.
            </p>

            {/* Restart */}
            <button
              onClick={handleRestart}
              className="text-sm font-semibold text-[#3B5E3A] underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Take the Quiz Again
            </button>
          </div>
        )}

        {/* ── QUESTION SCREEN ── */}
        {!showResult && (
          <>
            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-stone-400 mb-2">
                <span>Question {step + 1} of {totalSteps}</span>
                <span>{Math.round((step / totalSteps) * 100)}% complete</span>
              </div>
              <div className="w-full bg-stone-200 rounded-full h-2">
                <div
                  className="bg-[#C8922A] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="bg-[#FFFDF8] border border-amber-200 rounded-2xl shadow-md p-6">
              {currentQuestion.scripture && (
                <p className="text-xs italic text-stone-400 mb-3 text-center">
                  {currentQuestion.scripture}
                </p>
              )}
              <h2 className="font-serif text-xl font-bold text-[#2C1A0E] mb-4 text-center leading-snug">
                {currentQuestion.prompt}
              </h2>
              <div className="grid gap-2">
                {currentQuestion.answers.map((answer) => (
                  <button
                    key={answer.value + answer.label}
                    onClick={() => handleSelect(answer.value)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all duration-150
                      ${
                        selected === answer.value
                          ? "border-[#C8922A] bg-amber-50 text-[#2C1A0E] shadow-sm"
                          : "border-stone-200 bg-white text-stone-700 hover:border-[#C8922A] hover:bg-amber-50"
                      }`}
                  >
                    {answer.label}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={!selected}
                className={`mt-5 w-full py-4 rounded-xl font-bold text-base transition-all duration-200
                  ${
                    selected
                      ? "bg-[#3B5E3A] hover:bg-[#2e4a2d] text-white shadow-md"
                      : "bg-stone-200 text-stone-400 cursor-not-allowed"
                  }`}
              >
                {step + 1 === totalSteps ? "Show My Remedy 🌿" : "Next Question →"}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
