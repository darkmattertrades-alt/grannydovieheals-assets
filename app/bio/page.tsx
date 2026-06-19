"use client"

import { useState } from "react"
import Image from "next/image"

const BASE = "https://raw.githubusercontent.com/darkmattertrades-alt/grannydovieheals-assets/main"

const supplements = [
  {
    name: "Garden of Life Extra Strength Turmeric",
    price: "$38 — $45",
    href: "https://www.amazon.com/dp/B07G2LBQ1G",
  },
  {
    name: "Gaia Herbs Ashwagandha Root Liquid Phyto Capsules",
    price: "$26 — $39",
    href: "https://www.amazon.com/dp/B003HD9H0G",
  },
  {
    name: "Gaia Herbs Black Elderberry Syrup",
    price: "$25 — $45",
    href: "https://www.amazon.com/dp/B0036THLPE",
  },
]

const skincare = [
  {
    name: "Trilogy Certified Organic Rosehip Oil",
    price: "$35 — $55",
    href: "https://www.amazon.com/dp/B001NJNV12",
  },
  {
    name: "Cliganic USDA Organic Rosehip Seed Oil",
    price: "$20 — $35",
    href: "https://www.amazon.com/dp/B07G14PWZN",
  },
  {
    name: "Better Shea Butter 100% Pure Unrefined African Shea Butter",
    price: "$20 — $35",
    href: "https://www.amazon.com/dp/B00D9NV2D4",
  },
]

export default function BioPage() {
  const [openSection, setOpenSection] = useState<"supplements" | "skincare" | null>(null)

  function toggle(section: "supplements" | "skincare") {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#2c1a0e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px 60px",
        fontFamily: "var(--font-lora), serif",
      }}
    >
      {/* ── Profile ── */}
      <div style={{ textAlign: "center", marginBottom: "10px", width: "100%" }}>

        {/* Profile image with gold glow ring */}
        <div
          style={{
            display: "inline-block",
            borderRadius: "50%",
            padding: "3px",
            background: "linear-gradient(135deg, #c8922a, #f5ecd7, #c8922a)",
            boxShadow: "0 0 18px rgba(200,146,42,0.55), 0 0 36px rgba(200,146,42,0.25)",
            marginBottom: "16px",
          }}
        >
          <Image
            src={`${BASE}/granny-profile.png`}
            alt="Granny Dovie"
            width={112}
            height={112}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              display: "block",
              border: "3px solid #2c1a0e",
            }}
          />
        </div>

        <h1
          style={{
            color: "#f5ecd7",
            fontSize: "23px",
            fontWeight: "700",
            marginBottom: "6px",
            letterSpacing: "0.4px",
          }}
        >
          Granny Dovie Heals
        </h1>

        <p
          style={{
            color: "#c8922a",
            fontSize: "14px",
            marginBottom: "4px",
            fontStyle: "italic",
          }}
        >
          Real Remedies. Old Ways. God&apos;s Design. 🌿
        </p>

        <p
          style={{
            color: "#a08060",
            fontSize: "13px",
            marginBottom: "18px",
            fontStyle: "italic",
          }}
        >
          Ancient folk healing rooted in Scripture ✝️
        </p>

        {/* Trust line */}
        <p
          style={{
            color: "#c8922a",
            fontSize: "12px",
            fontStyle: "italic",
            letterSpacing: "0.4px",
            opacity: 0.85,
            marginBottom: "0px",
          }}
        >
          ✦ Trusted by natural health seekers across America ✦
        </p>
      </div>

      {/* Thin gold divider below profile */}
      <div
        style={{
          width: "60%",
          maxWidth: "260px",
          height: "1px",
          background: "linear-gradient(to right, transparent, #c8922a, transparent)",
          margin: "18px auto 24px auto",
        }}
      />

      {/* ── Buttons ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          maxWidth: "380px",
        }}
      >

        {/* ── Hero CTA — Free Gift ── */}
        <a
          href="/free-gift"
          style={{
            display: "block",
            backgroundColor: "#8B3A3A",
            color: "#f5ecd7",
            textAlign: "center",
            padding: "17px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "700",
            border: "2px solid #c8922a",
            letterSpacing: "0.4px",
            boxShadow:
              "0 0 12px rgba(200,146,42,0.45), 0 0 28px rgba(200,146,42,0.2), inset 0 1px 0 rgba(245,236,215,0.08)",
          }}
        >
          🌿 Free 15 Secret Remedies Guide
        </a>

        {/* ── Section label — Shop ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "6px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, transparent, #c8922a)",
            }}
          />
          <span
            style={{
              color: "#c8922a",
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            🛒 Shop Granny&apos;s Picks
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to left, transparent, #c8922a)",
            }}
          />
        </div>

        {/* ── Supplements Accordion ── */}
        <div>
          <button
            onClick={() => toggle("supplements")}
            style={{
              width: "100%",
              backgroundColor: "#3b5e3a",
              color: "#f5ecd7",
              padding: "14px 20px",
              borderRadius: openSection === "supplements" ? "10px 10px 0 0" : "10px",
              border: "1px solid #c8922a",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              textAlign: "center",
              letterSpacing: "0.3px",
            }}
          >
            💊 Shop Natural Supplements {openSection === "supplements" ? "▲" : "▼"}
          </button>

          {openSection === "supplements" && (
            <div
              style={{
                backgroundColor: "#1e1208",
                border: "1px solid #c8922a",
                borderTop: "none",
                borderRadius: "0 0 10px 10px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {supplements.map((item) => (
                <div
                  key={item.name}
                  style={{
                    backgroundColor: "#2c1a0e",
                    borderRadius: "8px",
                    padding: "12px 14px",
                    border: "1px solid #3d2a14",
                  }}
                >
                  <p
                    style={{
                      color: "#f5ecd7",
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "4px",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      color: "#c8922a",
                      fontSize: "13px",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    {item.price}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      backgroundColor: "#8B3A3A",
                      color: "#f5ecd7",
                      textAlign: "center",
                      padding: "9px 14px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: "600",
                      border: "1px solid #c8922a",
                    }}
                  >
                    🛒 Buy on Amazon
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Skincare Accordion ── */}
        <div>
          <button
            onClick={() => toggle("skincare")}
            style={{
              width: "100%",
              backgroundColor: "#3b5e3a",
              color: "#f5ecd7",
              padding: "14px 20px",
              borderRadius: openSection === "skincare" ? "10px 10px 0 0" : "10px",
              border: "1px solid #c8922a",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              textAlign: "center",
              letterSpacing: "0.3px",
            }}
          >
            ✨ Shop Organic Skincare {openSection === "skincare" ? "▲" : "▼"}
          </button>

          {openSection === "skincare" && (
            <div
              style={{
                backgroundColor: "#1e1208",
                border: "1px solid #c8922a",
                borderTop: "none",
                borderRadius: "0 0 10px 10px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {skincare.map((item) => (
                <div
                  key={item.name}
                  style={{
                    backgroundColor: "#2c1a0e",
                    borderRadius: "8px",
                    padding: "12px 14px",
                    border: "1px solid #3d2a14",
                  }}
                >
                  <p
                    style={{
                      color: "#f5ecd7",
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "4px",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      color: "#c8922a",
                      fontSize: "13px",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    {item.price}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      backgroundColor: "#8B3A3A",
                      color: "#f5ecd7",
                      textAlign: "center",
                      padding: "9px 14px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: "600",
                      border: "1px solid #c8922a",
                    }}
                  >
                    🛒 Buy on Amazon
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Section label — Connect ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "6px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, transparent, #c8922a)",
            }}
          />
          <span
            style={{
              color: "#c8922a",
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            💬 Connect With Granny
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to left, transparent, #c8922a)",
            }}
          />
        </div>

        {/* ── Chat with Granny Dovie ── */}
        <a
          href="/"
          style={{
            display: "block",
            backgroundColor: "#5c4a1e",
            color: "#f5ecd7",
            textAlign: "center",
            padding: "14px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "600",
            border: "1px solid #c8922a",
            letterSpacing: "0.3px",
          }}
        >
          💬 Chat with Granny Dovie
        </a>
      </div>

      {/* ── Botanical Divider above disclaimers ── */}
      <div
        style={{
          width: "80%",
          maxWidth: "320px",
          height: "1px",
          background: "linear-gradient(to right, transparent, #c8922a, transparent)",
          margin: "32px auto 20px auto",
        }}
      />

      {/* ── Affiliate Disclaimer ── */}
      <p
        style={{
          color: "#6b4c2a",
          fontSize: "11px",
          textAlign: "center",
          maxWidth: "320px",
          lineHeight: "1.7",
          fontStyle: "italic",
          marginBottom: "0px",
        }}
      >
        This page contains affiliate links. Product recommendations are from
        Amazon. If you purchase through any link, a small commission may be
        earned at no extra cost to you. 🌿
      </p>

      {/* ── Thin divider between disclaimers ── */}
      <div
        style={{
          width: "40%",
          maxWidth: "160px",
          height: "1px",
          background: "linear-gradient(to right, transparent, #6b4c2a, transparent)",
          margin: "16px auto",
        }}
      />

      {/* ── Footer Disclosure ── */}
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
        ✨ Granny Dovie is an AI-generated character. The remedies are real.
        The love is real. 🌿 All content is for informational purposes only.
        Always consult your healthcare provider.
      </p>
    </main>
  )
}
