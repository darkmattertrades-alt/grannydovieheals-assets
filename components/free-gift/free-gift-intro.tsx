import { images } from "@/lib/site"

const remedies = [
  "Morning Joint Stiffness Remedy",
  "Deep Sleep Tonic",
  "Immunity Booster Tea",
  "Gut Healing Broth",
  "Natural Energy Tonic",
  "Skin Brightening Honey Mask",
  "Headache Relief Compress",
  "Chest Congestion Rub",
  "Anxiety Calming Tea",
  "Blood Pressure Support Blend",
  "Anti Inflammatory Golden Milk",
  "Digestive Bitters Recipe",
  "Natural Wound Salve",
  "Hair Growth Scalp Oil",
  "Liver Cleanse Morning Tonic",
]

// ── Premium thin-line apothecary SVG icons ──────────────────────────────────

function IconJoint() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="7" r="3.5" />
      <circle cx="14" cy="21" r="3.5" />
      <path d="M14 10.5v7" />
      <path d="M10 14h8" />
      <path d="M11 8.5 9 6M17 8.5l2-2.5M11 19.5l-2 2M17 19.5l2 2" />
    </svg>
  )
}

function IconMoon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16.5A9 9 0 1 1 11.5 7a7 7 0 0 0 9.5 9.5z" />
      <path d="M18 10l1 1M20 7l.5.5M22 11h1" />
    </svg>
  )
}

function IconLeaf() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 21c3-3 4-8 4-8s5-1 8-4c3-3 3-8 3-8s-5 0-8 3c-3 3-4 8-4 8S8 18 7 21z" />
      <path d="M7 21l5-5" />
    </svg>
  )
}

function IconBroth() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 13h14l-1.5 7a2 2 0 0 1-2 1.5H10.5a2 2 0 0 1-2-1.5L7 13z" />
      <path d="M5 13h18" />
      <path d="M10 13V9a2 2 0 0 1 4 0v4" />
      <path d="M11 7c0-1 1-2 1-3M15 8c0-1 1-2 1-3" />
    </svg>
  )
}

function IconFlame() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 22c-4 0-7-3-7-7 0-3 2-5 3-7 1 2 1 3 3 4 0-3 1-6 4-8 0 4 3 5 3 8a5 5 0 0 1-1 3c1-1 1-2 1-3-1 4-3 6-6 10z" />
      <circle cx="14" cy="18" r="1.5" />
    </svg>
  )
}

function IconHoney() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 6h8l2 4-4 2H12L8 10l2-4z" />
      <path d="M10 12h8v7a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-7z" />
      <path d="M12 15h4M12 18h2" />
      <path d="M14 6V4" />
    </svg>
  )
}

function IconCompress() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="10" width="16" height="10" rx="2" />
      <path d="M10 10V8a4 4 0 0 1 8 0v2" />
      <path d="M10 15h8M12 18h4" />
      <path d="M6 15h2M20 15h2" />
    </svg>
  )
}

function IconSteam() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 20h12l-1 2H9l-1-2z" />
      <path d="M9 20l1-7h8l1 7" />
      <path d="M12 13V11M16 13V11" />
      <path d="M10 8c0-2 2-2 2-4M14 8c0-2 2-2 2-4" />
      <path d="M7 20H5M21 20h2" />
    </svg>
  )
}

function IconTea() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12h10l-1.5 8A2 2 0 0 1 14.5 22h-3a2 2 0 0 1-2-2L8 12z" />
      <path d="M18 14h1.5a2 2 0 0 1 0 4H18" />
      <path d="M11 8c0-2 2-1 2-3M15 8c0-2 2-1 2-3" />
    </svg>
  )
}

function IconHeart() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 22S5 16 5 10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12z" />
      <path d="M10 11h8M14 8v6" />
    </svg>
  )
}

function IconMortar() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 14h12" />
      <path d="M9 14c0 4 2 7 5 7s5-3 5-7" />
      <path d="M7 14h14" />
      <path d="M18 10l3-4" />
      <path d="M18 10c0-2-1-3-4-3s-4 1-4 3" />
    </svg>
  )
}

function IconBitters() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="8" width="8" height="13" rx="2" />
      <path d="M12 8V6h4v2" />
      <path d="M13 12h2M13 15h2M13 18h2" />
      <path d="M10 11h8" />
    </svg>
  )
}

function IconSalve() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="13" width="12" height="9" rx="2" />
      <path d="M10 13v-2a4 4 0 0 1 8 0v2" />
      <path d="M14 17v3M11 17h6" />
      <path d="M12 11c0-1 1-2 2-2s2 1 2 2" />
    </svg>
  )
}

function IconDrop() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 5c0 0-7 7-7 12a7 7 0 0 0 14 0C21 12 14 5 14 5z" />
      <path d="M10 17a4 4 0 0 0 4 3" />
      <path d="M17 12l1-2" />
    </svg>
  )
}

function IconSun() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="4" />
      <path d="M14 6V4M14 24v-2M6 14H4M24 14h-2" />
      <path d="M8.5 8.5 7 7M21 21l-1.5-1.5M19.5 8.5 21 7M7 21l1.5-1.5" />
    </svg>
  )
}

const remedyIcons = [
  <IconJoint key="joint" />,
  <IconMoon key="moon" />,
  <IconLeaf key="leaf" />,
  <IconBroth key="broth" />,
  <IconFlame key="flame" />,
  <IconHoney key="honey" />,
  <IconCompress key="compress" />,
  <IconSteam key="steam" />,
  <IconTea key="tea" />,
  <IconHeart key="heart" />,
  <IconMortar key="mortar" />,
  <IconBitters key="bitters" />,
  <IconSalve key="salve" />,
  <IconDrop key="drop" />,
  <IconSun key="sun" />,
]

// ───────────────────────────────────────────────────────────────────────────

export function FreeGiftHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <img
        src={images.freeGift || "/placeholder.svg"}
        alt="Granny Dovie's handwritten book of herbal remedies on a wooden table"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-parchment sm:text-5xl lg:text-6xl">
          Granny Dovie&apos;s 15 Secret Remedies
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty font-body text-lg leading-relaxed text-parchment/90">
          Free guide passed down through generations — finally being shared, honey.
        </p>
      </div>
    </section>
  )
}

export function FreeGiftInside() {
  return (
    <section className="bg-parchment py-20">
      <div className="mx-auto max-w-5xl px-6">

        {/* ── Section heading ── */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-heading sm:text-4xl">
            What&apos;s Inside The Guide
          </h2>
          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontStyle: "italic",
              color: "#c8922a",
              fontSize: "15px",
              marginTop: "10px",
              letterSpacing: "0.3px",
            }}
          >
            15 time-tested Appalachian remedies — yours free today, honey 🌿
          </p>

          {/* Botanical gold divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "1px",
                background: "linear-gradient(to right, transparent, #c8922a)",
              }}
            />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#c8922a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 2c0 0-5 5-5 9a5 5 0 0 0 10 0C14 7 9 2 9 2z" />
              <path d="M6 11a3 3 0 0 0 3 2" />
            </svg>
            <div
              style={{
                width: "80px",
                height: "1px",
                background: "linear-gradient(to left, transparent, #c8922a)",
              }}
            />
          </div>
        </div>

        {/* ── Remedy grid ── */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {remedies.map((remedy, i) => (
            <li
              key={remedy}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                borderRadius: "12px",
                border: "1.5px solid #c8922a",
                backgroundColor: "#fdf8f0",
                padding: "16px 18px",
                boxShadow:
                  "0 2px 12px rgba(200,146,42,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
                transition: "box-shadow 0.2s ease",
              }}
            >
              {/* Gold filled number badge */}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "#c8922a",
                  color: "#fdf8f0",
                  fontFamily: "var(--font-lora), serif",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.3px",
                  boxShadow: "0 2px 6px rgba(200,146,42,0.35)",
                }}
              >
                {i + 1}
              </span>

              {/* Premium SVG icon */}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  width: "38px",
                  height: "38px",
                  borderRadius: "8px",
                  backgroundColor: "#fff8ee",
                  border: "1px solid rgba(200,146,42,0.3)",
                }}
              >
                {remedyIcons[i]}
              </span>

              {/* Remedy name */}
              <span
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "#2c1a0e",
                  fontWeight: "600",
                }}
              >
                {remedy}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
