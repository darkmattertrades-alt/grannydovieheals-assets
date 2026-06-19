import { images } from "@/lib/site"
import { OptInForm } from "@/components/opt-in-form"

export function FreeGiftOptIn() {
  return (
    <section
      className="bg-forest py-20"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Subtle radial glow behind the form for depth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,146,42,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">

        {/* ── Heading ── */}
        <h2 className="text-balance font-serif text-3xl font-bold text-parchment sm:text-4xl">
          Get Instant Access to the Free Guide 🌿
        </h2>

        {/* ── Subheading ── */}
        <p className="mx-auto mt-4 max-w-lg text-pretty font-body text-lg leading-relaxed text-parchment/90">
          Leave your name and email below and your free guide will be ready to
          download immediately, honey.
        </p>

        {/* ── Botanical gold divider ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            margin: "20px auto",
            maxWidth: "320px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, transparent, #c8922a)",
            }}
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            stroke="#c8922a"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 2c0 0-5 5-5 9a5 5 0 0 0 10 0C14 7 9 2 9 2z" />
            <path d="M6 11a3 3 0 0 0 3 2" />
          </svg>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to left, transparent, #c8922a)",
            }}
          />
        </div>

        {/* ── Form card ── */}
        <div
          style={{
            marginTop: "8px",
            borderRadius: "16px",
            border: "1.5px solid #c8922a",
            backgroundColor: "rgba(245,236,215,0.08)",
            backdropFilter: "blur(8px)",
            padding: "32px 28px",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px rgba(200,146,42,0.15), inset 0 1px 0 rgba(245,236,215,0.08)",
          }}
        >
          <OptInForm
            compact
            buttonLabel="Get My Free Guide Now 🌿"
            emailPlaceholder="your@email.com"
          />
        </div>
      </div>
    </section>
  )
}

export function FreeGiftScripture() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      <img
        src={images.scriptureBanner || "/placeholder.svg"}
        alt="Sunlit grove of healing plants and trees"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-balance font-serif italic text-3xl leading-relaxed text-parchment sm:text-4xl lg:text-5xl">
          &ldquo;And the fruit thereof shall be for meat, and the leaf thereof for
          medicine.&rdquo;
        </p>
        <p className="mt-6 font-body text-lg text-parchment/90">— Ezekiel 47:12</p>
      </div>
    </section>
  )
}
