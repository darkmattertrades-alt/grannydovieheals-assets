"use client"

import { useState } from "react"
import { OPT_IN_ENDPOINT, GUIDE_DOWNLOAD_URL } from "@/lib/site"

export function OptInForm({
  compact = false,
  buttonLabel = "Send My Free Guide",
  emailPlaceholder = "you@example.com",
}: {
  compact?: boolean
  buttonLabel?: string
  emailPlaceholder?: string
}) {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  )

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!firstName.trim() || !email.trim()) return
    setStatus("loading")

    const payload = {
      name: firstName,
      email: email,
    }

    try {
      await fetch(OPT_IN_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      setStatus("success")
      setFirstName("")
      setEmail("")
    } catch (error) {
      console.error("Error:", error)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          borderRadius: "12px",
          border: "2px solid #c8922a",
          backgroundColor: "rgba(245,236,215,0.12)",
          padding: "32px 24px",
          textAlign: "center",
          boxShadow:
            "0 0 24px rgba(200,146,42,0.2), inset 0 1px 0 rgba(245,236,215,0.08)",
        }}
      >
        {/* Botanical ornament */}
        <div style={{ marginBottom: "12px" }}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 18 18"
            fill="none"
            stroke="#c8922a"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ margin: "0 auto" }}
          >
            <path d="M9 2c0 0-5 5-5 9a5 5 0 0 0 10 0C14 7 9 2 9 2z" />
            <path d="M6 11a3 3 0 0 0 3 2" />
          </svg>
        </div>

        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: "22px",
            fontWeight: "700",
            color: "#f5ecd7",
            marginBottom: "10px",
          }}
        >
          Your guide is ready honey! 🌿
        </p>

        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: "15px",
            lineHeight: "1.7",
            color: "rgba(245,236,215,0.85)",
            marginBottom: "20px",
          }}
        >
          Click the button below to download your free copy now.
        </p>

        <a
          href={GUIDE_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#8B3A3A",
            color: "#f5ecd7",
            padding: "14px 28px",
            borderRadius: "10px",
            border: "2px solid #c8922a",
            fontFamily: "var(--font-lora), serif",
            fontSize: "15px",
            fontWeight: "700",
            textDecoration: "none",
            letterSpacing: "0.4px",
            boxShadow:
              "0 0 12px rgba(200,146,42,0.45), 0 0 28px rgba(200,146,42,0.2)",
            transition: "box-shadow 0.2s ease, transform 0.1s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 20px rgba(200,146,42,0.65), 0 0 40px rgba(200,146,42,0.3)"
            e.currentTarget.style.transform = "translateY(-1px)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 12px rgba(200,146,42,0.45), 0 0 28px rgba(200,146,42,0.2)"
            e.currentTarget.style.transform = "translateY(0)"
          }}
        >
          Download Your Free Guide →
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-5"
    >
      {/* ── First Name ── */}
      <div>
        <label
          htmlFor="firstName"
          style={{
            display: "block",
            color: "#c8922a",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "1.8px",
            textTransform: "uppercase",
            marginBottom: "8px",
            fontFamily: "var(--font-lora), serif",
          }}
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          placeholder="Your first name"
          style={{
            width: "100%",
            backgroundColor: "#fdf8f0",
            border: "1.5px solid rgba(200,146,42,0.4)",
            borderRadius: "8px",
            padding: "13px 16px",
            fontSize: "15px",
            color: "#2c1a0e",
            fontFamily: "var(--font-lora), serif",
            outline: "none",
            boxSizing: "border-box",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#c8922a"
            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(200,146,42,0.18)"
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(200,146,42,0.4)"
            e.currentTarget.style.boxShadow = "none"
          }}
        />
      </div>

      {/* ── Email Address ── */}
      <div>
        <label
          htmlFor="email"
          style={{
            display: "block",
            color: "#c8922a",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "1.8px",
            textTransform: "uppercase",
            marginBottom: "8px",
            fontFamily: "var(--font-lora), serif",
          }}
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={emailPlaceholder}
          style={{
            width: "100%",
            backgroundColor: "#fdf8f0",
            border: "1.5px solid rgba(200,146,42,0.4)",
            borderRadius: "8px",
            padding: "13px 16px",
            fontSize: "15px",
            color: "#2c1a0e",
            fontFamily: "var(--font-lora), serif",
            outline: "none",
            boxSizing: "border-box",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#c8922a"
            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(200,146,42,0.18)"
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(200,146,42,0.4)"
            e.currentTarget.style.boxShadow = "none"
          }}
        />
      </div>

      {/* ── CTA Button + Trust line wrapper ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            width: "100%",
            backgroundColor: status === "loading" ? "rgba(139,58,58,0.6)" : "#8B3A3A",
            color: "#f5ecd7",
            padding: "14px 24px",
            borderRadius: "10px",
            border: "2px solid #c8922a",
            fontFamily: "var(--font-lora), serif",
            fontSize: "15px",
            fontWeight: "700",
            letterSpacing: "0.4px",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            boxShadow:
              "0 0 12px rgba(200,146,42,0.45), 0 0 28px rgba(200,146,42,0.2), inset 0 1px 0 rgba(245,236,215,0.08)",
            transition: "box-shadow 0.2s ease, transform 0.1s ease",
          }}
          onMouseEnter={(e) => {
            if (status !== "loading") {
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(200,146,42,0.65), 0 0 40px rgba(200,146,42,0.3), inset 0 1px 0 rgba(245,236,215,0.08)"
              e.currentTarget.style.transform = "translateY(-1px)"
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 12px rgba(200,146,42,0.45), 0 0 28px rgba(200,146,42,0.2), inset 0 1px 0 rgba(245,236,215,0.08)"
            e.currentTarget.style.transform = "translateY(0)"
          }}
        >
          {status === "loading" ? "Sending…" : buttonLabel}
        </button>

        {/* ── Trust line ── */}
        <p
          style={{
            color: "rgba(44,26,14,0.5)",
            fontSize: "11px",
            fontStyle: "italic",
            fontFamily: "var(--font-lora), serif",
            letterSpacing: "0.3px",
            textAlign: "center",
            margin: "0",
          }}
        >
          No spam. No nonsense. Just old mountain wisdom. 🌿
        </p>
      </div>

      {/* ── Error message ── */}
      {status === "error" && (
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: "13px",
            fontStyle: "italic",
            color: "#c8922a",
            textAlign: "center",
            marginTop: "4px",
          }}
        >
          Something went awry. Please try again, dear. 🌿
        </p>
      )}
    </form>
  )
}
