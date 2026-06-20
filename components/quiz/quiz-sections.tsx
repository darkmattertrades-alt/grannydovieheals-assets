"use client"

import { useState } from "react"

// ── TYPES ──────────────────────────────────────────────────────────────────

type Answer = {
  label: string
  value: string
}

type Question = {
  id: string
  granny: string
  scripture?: string
  answers: Answer[]
}

type ResultProduct = {
  name: string
  price: string
  href: string
  grannyWord: string
  scripture: string
}

// ── QUIZ QUESTIONS ─────────────────────────────────────────────────────────

const questions: Question[] = [
  {
    id: "opening",
    granny:
      "Before we begin, Granny Dovie wants to know — what brought you here today, honey?",
    scripture: "Psalm 107:20 — He sent out his word and healed them.",
    answers: [
      { label: "I want to feel stronger and more energized", value: "energy" },
      { label: "I want to take care of my body the natural way", value: "natural" },
      { label: "I want to heal something that has been bothering me a while", value: "healing" },
      { label: "I want to know what God's garden has for me", value: "curious" },
    ],
  },
  {
    id: "concern",
    granny:
      "What is your body trying to tell you most right now, child?",
    scripture: "3 John 1:2 — Beloved, I pray that you may prosper and be in health.",
    answers: [
      { label: "My joints ache and my body feels heavy", value: "joints" },
      { label: "My mind is tired and stress is wearing me down", value: "stress" },
      { label: "I keep getting sick — my immune system needs help", value: "immune" },
      { label: "My stomach and digestion are giving me trouble", value: "digestion" },
      { label: "I cannot sleep and my nerves feel raw", value: "sleep" },
      { label: "My skin needs healing from the outside", value: "skin" },
    ],
  },
  {
    id: "duration",
    granny:
      "How long has this been weighing on you, honey?",
    answers: [
      { label: "Just started — I want to get ahead of it", value: "new" },
      { label: "Been a few months — I tried some things but nothing stuck", value: "medium" },
      { label: "A long time — I am ready for something that really works", value: "serious" },
    ],
  },
  {
    id: "tried",
    granny:
      "Have you tried anything for this before, child?",
    answers: [
      { label: "Nothing yet — I am just getting started", value: "nothing" },
      { label: "I have tried store-bought remedies", value: "store" },
      { label: "I have been to the doctor but want something more natural", value: "doctor" },
      { label: "I have tried natural remedies but need something stronger", value: "stronger" },
    ],
  },
  {
    id: "format",
    granny:
      "How do you like to take your remedies, honey?",
    answers: [
      { label: "Capsules or tablets", value: "capsules" },
      { label: "Liquid or syrup", value: "liquid" },
      { label: "Oil or butter on the skin", value: "oil" },
      { label: "A warm cup of tea", value: "tea" },
    ],
  },
]

// ── RESULT LOGIC ───────────────────────────────────────────────────────────

function getResult(answers: Record<string, string>): ResultProduct {
  const concern = answers["concern"]
  const duration = answers["duration"]
  const format = answers["format"]

  // ── SKIN ──
  if (concern === "skin") {
    if (format === "oil") {
      return {
        name: "54 Thrones African Beauty Butter Collection",
        price: "$80",
        href: "https://amzn.to/43IvxwP",
        grannyWord:
          "Child, your skin is a temple and it deserves to be anointed. This collection carries the beauty wisdom of 54 African nations — shea butter the way God intended it. Smooth it on slow, say a little prayer, and watch what the Lord does.",
        scripture: "Song of Solomon 1:3 — Your anointing oils are fragrant.",
      }
    }
    if (format === "tea") {
      return {
        name: "Bigelow Tea Purely Peppermint Tea",
        price: "$28",
        href: "https://amzn.to/4xG6iJg",
        grannyWord:
          "Honey, beautiful skin starts from the inside out. Brew yourself a cup of this peppermint tea every evening and let it work from within. God designed your body to heal itself when you give it what it needs.",
        scripture: "Proverbs 17:22 — A cheerful heart is good medicine.",
      }
    }
    if (format === "capsules") {
      return {
        name: "Trilogy Certified Organic Rosehip Oil",
        price: "$20",
        href: "https://amzn.to/4uJu4RN",
        grannyWord:
          "Rosehip was growing on this earth long before any fancy serum ever existed, honey. God put it here for a reason. A few drops every night and your skin will start to remember what it feels like to be nourished.",
        scripture: "Psalm 104:14 — He causes the grass to grow and herb for the service of man.",
      }
    }
    return {
      name: "Raw Shea Butter 100% Pure Unrefined African",
      price: "$17 — $25",
      href: "https://amzn.to/4oOVMeD",
      grannyWord:
        "Your grandmother moisturized with this, honey. So did her grandmother. Pure African shea butter — nothing added, nothing taken away. Just what God put in the ground.",
      scripture: "Genesis 1:29 — I have given you every plant yielding seed.",
    }
  }

  // ── JOINTS ──
  if (concern === "joints") {
    if (duration === "serious" || answers["tried"] === "stronger") {
      return {
        name: "Terry Naturally CuraMed 750mg 3-Pack",
        price: "$102",
        href: "https://amzn.to/3Szuw7O",
        grannyWord:
          "When that aching has been with you a long time, honey, you need something with real strength behind it. This curcumin is up to 500 times more powerful than ordinary turmeric. God grew this root for people just like you.",
        scripture: "Jeremiah 30:17 — I will restore health to you and heal your wounds.",
      }
    }
    return {
      name: "Garden of Life Organics Extra Strength Turmeric",
      price: "$23 — $38",
      href: "https://amzn.to/4gg9Xaz",
      grannyWord:
        "Turmeric has been fighting inflammation since Bible times, child. This is the first thing I reach for when the joints start achin'. God put this golden root in the earth for a reason — and your body knows it.",
      scripture: "Ezekiel 47:12 — Their fruit will be for food and their leaves for healing.",
    }
  }

  // ── STRESS ──
  if (concern === "stress") {
    if (duration === "serious" || answers["tried"] === "stronger") {
      return {
        name: "JUNG KWAN JANG Korean Red Panax Ginseng Extra Strength",
        price: "$219",
        href: "https://amzn.to/3QTrBGz",
        grannyWord:
          "Child, when the weariness runs deep and ordinary remedies have not helped — this is what I would reach for. Six-year-old Korean red ginseng, the strongest God's earth can give. Your strength is worth investing in, honey.",
        scripture: "Isaiah 40:31 — They that wait upon the Lord shall renew their strength.",
      }
    }
    return {
      name: "Gaia Herbs Ashwagandha Root 350mg",
      price: "$25 — $48",
      href: "https://amzn.to/4xGZI5d",
      grannyWord:
        "When your spirit is weary and your body is worn, honey — this is God's answer. Ashwagandha has been calming tired souls for thousands of years. Take it faithful every day and let the Lord do the rest.",
      scripture: "Matthew 11:28 — Come to me all who are weary and I will give you rest.",
    }
  }

  // ── IMMUNE ──
  if (concern === "immune") {
    if (duration === "serious" || answers["tried"] === "stronger") {
      return {
        name: "American BioSciences ImmPower AHCC 6-Pack",
        price: "$186",
        href: "https://amzn.to/4uRSaKm",
        grannyWord:
          "Your immune system works day and night for you without a word of complaint, honey. When it needs serious support — this is the most powerful thing I know. Give your body something worthy in return.",
        scripture: "1 Corinthians 6:19 — Your body is a temple of the Holy Spirit.",
      }
    }
    if (format === "liquid") {
      return {
        name: "Gaia Herbs Black Elderberry Syrup",
        price: "$22 — $33",
        href: "https://amzn.to/3SRwvEy",
        grannyWord:
          "God put elderberry on this earth before any pharmacy ever opened, child. This syrup is sweet, strong, and faithful. Keep a bottle in your cabinet and reach for it at the first sign of trouble.",
        scripture: "Revelation 22:2 — The leaves of the tree were for the healing of the nations.",
      }
    }
    return {
      name: "Gaia Herbs Quick Defense Fast-Acting",
      price: "$25 — $66",
      href: "https://amzn.to/43NXcwf",
      grannyWord:
        "First sign of something coming on — reach for echinacea before anything else, honey. God designed your body to fight back. This just gives it a little help getting started.",
      scripture: "Psalm 103:3 — He heals all your diseases.",
    }
  }

  // ── DIGESTION ──
  if (concern === "digestion") {
    if (duration === "serious" || answers["tried"] === "stronger") {
      return {
        name: "Dose Organic Milk Thistle Liver Cleanse 6-Bottle Supply",
        price: "$180",
        href: "https://amzn.to/43MUCXw",
        grannyWord:
          "Honey, when your gut has been struggling a long time — it is time to cleanse from the inside out. The liver is the root of so much, child. Give it the deep cleaning it deserves and watch how your whole body responds.",
        scripture: "Psalm 51:10 — Create in me a clean heart, O God.",
      }
    }
    if (format === "tea") {
      return {
        name: "Bigelow Tea Peppermint Herbal Tea",
        price: "$20",
        href: "https://amzn.to/3SaCX9H",
        grannyWord:
          "A warm cup of peppermint tea can settle more than just your stomach, honey. Brew it slow, sip it quiet, and let God's garden do what it was put here to do.",
        scripture: "Proverbs 17:22 — A cheerful heart is good medicine.",
      }
    }
    if (format === "liquid") {
      return {
        name: "Bragg Organic Raw Apple Cider Vinegar",
        price: "$4 — $6",
        href: "https://amzn.to/4uQyyX4",
        grannyWord:
          "One tablespoon every morning, honey. Simple as that. I have been doing it 40 years and my stomach has never given me much trouble. God made the apple and the vine — this is just the best of both.",
        scripture: "Psalm 104:14 — He causes herbs to grow for the service of man.",
      }
    }
    return {
      name: "Nature's Way Premium Ginger Root 550mg",
      price: "$29",
      href: "https://amzn.to/43Ia3jH",
      grannyWord:
        "Ginger has been healing stomachs and joints since Bible times, child. There is a reason it has never gone out of fashion — because God does not make mistakes when He plants a garden.",
      scripture: "Ezekiel 47:12 — Their leaves will be for healing.",
    }
  }

  // ── SLEEP / NERVES ──
  if (concern === "sleep") {
    if (duration === "serious" || answers["tried"] === "stronger") {
      return {
        name: "Resilia Black Seed Oil + Oregano Capsules 300ct",
        price: "$119",
        href: "https://amzn.to/3SCbdL4",
        grannyWord:
          "When the nights have been long and nothing has helped, honey — black seed oil is one of the oldest remedies God ever gave us. The Prophet himself spoke of it. It touches things that ordinary remedies cannot reach.",
        scripture: "Psalm 4:8 — In peace I will lie down and sleep.",
      }
    }
    return {
      name: "Doctor's Best High Absorption Magnesium Glycinate",
      price: "$12 — $20",
      href: "https://amzn.to/4oDV8Ax",
      grannyWord:
        "Honey, most people who cannot sleep are simply low in magnesium and do not know it. This does quiet work — for your nerves, for your muscles, for your rest. God designed sleep as a gift. Let this help you receive it.",
      scripture: "Psalm 127:2 — He grants sleep to those he loves.",
    }
  }

  // ── DEFAULT FALLBACK ──
  return {
    name: "Garden of Life Organics Extra Strength Turmeric",
    price: "$23 — $38",
    href: "https://amzn.to/4gg9Xaz",
    grannyWord:
      "Child, God planted a remedy for everything that troubles you. Start here — turmeric has been faithful to His people for thousands of years. Let it work for you too, honey.",
    scripture: "Psalm 104:14 — He causes herbs to grow for the service of man.",
  }
}

// ── STYLES ─────────────────────────────────────────────────────────────────

const colors = {
  bg: "#2c1a0e",
  card: "#1e1208",
  cardBorder: "#3d2a14",
  gold: "#c8922a",
  parchment: "#f5ecd7",
  muted: "#a08060",
  green: "#3b5e3a",
  red: "#8B3A3A",
}

// ── MAIN COMPONENT ─────────────────────────────────────────────────────────

export function GrannyQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selected, setSelected] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const currentQuestion = questions[step]
  const totalSteps = questions.length
  const progress = Math.round((step / totalSteps) * 100)

  function handleSelect(value: string) {
    setSelected(value)
  }

  function handleNext() {
    if (!selected) return
    const newAnswers = { ...answers, [currentQuestion.id]: selected }
    setAnswers(newAnswers)
    setSelected(null)

    if (step + 1 < totalSteps) {
      setStep(step + 1)
    } else {
      setShowResult(true)
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
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px 60px",
        fontFamily: "var(--font-lora), serif",
      }}
    >
      {/* ── HERO ── */}
      {!showResult && (
        <div style={{ textAlign: "center", marginBottom: "32px", maxWidth: "480px" }}>
          <p
            style={{
              color: colors.gold,
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            🌿 Granny Dovie&apos;s Remedy Finder
          </p>
          <h1
            style={{
              color: colors.parchment,
              fontSize: "26px",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "10px",
            }}
          >
            Find Your Natural Remedy
          </h1>
          <p
            style={{
              color: colors.muted,
              fontSize: "14px",
              fontStyle: "italic",
              lineHeight: "1.6",
            }}
          >
            Answer a few questions and Granny Dovie will find exactly what God&apos;s garden has for you, honey.
          </p>
        </div>
      )}

      {/* ── PROGRESS BAR ── */}
      {!showResult && (
        <div
          style={{
            width: "100%",
            maxWidth: "480px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <span
              style={{
                color: colors.muted,
                fontSize: "12px",
              }}
            >
              Question {step + 1} of {totalSteps}
            </span>
            <span
              style={{
                color: colors.gold,
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {progress}%
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: "6px",
              backgroundColor: colors.card,
              borderRadius: "10px",
              overflow: "hidden",
              border: `1px solid ${colors.cardBorder}`,
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: colors.gold,
                borderRadius: "10px",
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>
      )}

      {/* ── QUESTION CARD ── */}
      {!showResult && (
        <div
          style={{
            width: "100%",
            maxWidth: "480px",
            backgroundColor: colors.card,
            border: `1px solid ${colors.gold}`,
            borderRadius: "14px",
            padding: "28px 24px",
            marginBottom: "20px",
          }}
        >
          {/* Granny's question */}
          <p
            style={{
              color: colors.parchment,
              fontSize: "17px",
              fontWeight: "600",
              lineHeight: "1.5",
              marginBottom: "8px",
              fontStyle: "italic",
            }}
          >
            &ldquo;{currentQuestion.granny}&rdquo;
          </p>

          {/* Scripture */}
          {currentQuestion.scripture && (
            <p
              style={{
                color: colors.gold,
                fontSize: "12px",
                fontStyle: "italic",
                marginBottom: "24px",
                opacity: 0.85,
              }}
            >
              — {currentQuestion.scripture}
            </p>
          )}

          {/* Answer options */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {currentQuestion.answers.map((answer) => {
              const isSelected = selected === answer.value
              return (
                <button
                  key={answer.value}
                  onClick={() => handleSelect(answer.value)}
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: "8px",
                    border: isSelected
                      ? `2px solid ${colors.gold}`
                      : `1px solid ${colors.cardBorder}`,
                    backgroundColor: isSelected ? "#3d2a14" : colors.bg,
                    color: isSelected ? colors.gold : colors.parchment,
                    fontSize: "14px",
                    fontWeight: isSelected ? "600" : "400",
                    fontFamily: "var(--font-lora), serif",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                    lineHeight: "1.4",
                  }}
                >
                  {isSelected ? "✦ " : "○ "}{answer.label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* ── NEXT BUTTON ── */}
      {!showResult && (
        <button
          onClick={handleNext}
          disabled={!selected}
          style={{
            width: "100%",
            maxWidth: "480px",
            padding: "15px 20px",
            borderRadius: "10px",
            border: `2px solid ${colors.gold}`,
            backgroundColor: selected ? colors.red : colors.card,
            color: selected ? colors.parchment : colors.muted,
            fontSize: "15px",
            fontWeight: "700",
            fontFamily: "var(--font-lora), serif",
            cursor: selected ? "pointer" : "not-allowed",
            transition: "all 0.2s ease",
            letterSpacing: "0.4px",
          }}
        >
          {step + 1 === totalSteps ? "Find My Remedy 🌿" : "Next Question →"}
        </button>
      )}

      {/* ── RESULT SCREEN ── */}
      {showResult && result && (
        <div
          style={{
            width: "100%",
            maxWidth: "480px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                color: colors.gold,
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              🌿 Granny Dovie&apos;s Recommendation
            </p>
            <h2
              style={{
                color: colors.parchment,
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "1.3",
                marginBottom: "6px",
              }}
            >
              Here is what I found for you, honey
            </h2>
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: "60%",
              height: "1px",
              background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)`,
            }}
          />

          {/* Granny's personal word */}
          <div
            style={{
              backgroundColor: colors.card,
              border: `1px solid ${colors.gold}`,
              borderRadius: "14px",
              padding: "24px",
              width: "100%",
            }}
          >
            <p
              style={{
                color: colors.parchment,
                fontSize: "15px",
                fontStyle: "italic",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              &ldquo;{result.grannyWord}&rdquo;
            </p>
            <p
              style={{
                color: colors.gold,
                fontSize: "12px",
                fontStyle: "italic",
                opacity: 0.85,
              }}
            >
              — {result.scripture}
            </p>
          </div>

          {/* Product card */}
          <div
            style={{
              backgroundColor: colors.card,
              border: `2px solid ${colors.gold}`,
              borderRadius: "14px",
              padding: "20px",
              width: "100%",
            }}
          >
            <p
              style={{
                color: colors.gold,
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              ⭐ Granny&apos;s Pick For You
            </p>
            <p
              style={{
                color: colors.parchment,
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "1.4",
                marginBottom: "6px",
              }}
            >
              {result.name}
            </p>
            <p
              style={{
                color: colors.gold,
                fontSize: "15px",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              {result.price}
            </p>
            <a
              href={result.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                display: "block",
                backgroundColor: colors.red,
                color: colors.parchment,
                textAlign: "center",
                padding: "13px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "700",
                border: `1px solid ${colors.gold}`,
                letterSpacing: "0.3px",
              }}
            >
              🛒 Get It on Amazon
            </a>
          </div>

          {/* Disclaimer */}
          <p
            style={{
              color: "#6b4c2a",
              fontSize: "11px",
              textAlign: "center",
              lineHeight: "1.7",
              fontStyle: "italic",
            }}
          >
            But honey, this is old wisdom passed down through generations — not medical advice. Always check with your doctor too. 🌿
          </p>

          {/* Gold divider */}
          <div
            style={{
              width: "60%",
              height: "1px",
              background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)`,
            }}
          />

          {/* Restart button */}
          <button
            onClick={handleRestart}
            style={{
              width: "100%",
              padding: "13px 20px",
              borderRadius: "10px",
              border: `1px solid ${colors.gold}`,
              backgroundColor: colors.green,
              color: colors.parchment,
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "var(--font-lora), serif",
              cursor: "pointer",
              letterSpacing: "0.3px",
            }}
          >
            🌿 Take the Quiz Again
          </button>
        </div>
      )}

      {/* ── FOOTER DISCLAIMER ── */}
      <div
        style={{
          width: "80%",
          maxWidth: "320px",
          height: "1px",
          background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)`,
          margin: "32px auto 20px auto",
        }}
      />
      <p
        style={{
          color: "#6b4c2a",
          fontSize: "11px",
          textAlign: "center",
          maxWidth: "320px",
          lineHeight: "1.7",
          fontStyle: "italic",
        }}
      >
        This page contains affiliate links. If you purchase through any link a small commission may be earned at no extra cost to you. 🌿
      </p>
    </div>
  )
}
