"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const BASE =
  "https://raw.githubusercontent.com/darkmattertrades-alt/grannydovieheals-assets/main"

const supplements = [
  {
    name: "Garden of Life Turmeric",
    url: "https://www.amazon.com/dp/B07G2LBQ1G",
  },
  {
    name: "Gaia Herbs Ashwagandha",
    url: "https://www.amazon.com/dp/B003HD9H0G",
  },
  {
    name: "Gaia Herbs Elderberry Syrup",
    url: "https://www.amazon.com/dp/B0036THLPE",
  },
]

const skincare = [
  {
    name: "Trilogy Organic Rosehip Oil",
    url: "https://www.amazon.com/dp/B001NJNV12",
  },
  {
    name: "Cliganic Organic Rosehip Oil",
    url: "https://www.amazon.com/dp/B07G14PWZN",
  },
  {
    name: "Pure Unrefined Shea Butter",
    url: "https://www.amazon.com/dp/B00D9NV2D4",
  },
]

export default function BioPage() {
  const [openSection, setOpenSection] = useState<
    "supplements" | "skincare" | null
  >(null)

  function toggle(section: "supplements" | "skincare") {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#2c1a0e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "var(--font-lora), serif",
      }}
    >
      {/* Profile Image */}
      <div
        style={{
          borderRadius: "50%",
          overflow: "hidden",
          width: "110px",
          height: "110px",
          border: "3px solid #c8922a",
          marginBottom: "16px",
          flexShrink: 0,
        }}
      >
        <Image
          src={`${BASE}/granny-profile.png`}
          alt="Granny Dovie"
          width={110}
          height={110}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          priority
        />
      </div>

      {/* Name */}
      <h1
        style={{
          color: "#f5ecd7",
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "6px",
          textAlign: "center",
          fontFamily: "var(--font-playfair), serif",
        }}
      >
        Granny Dovie Heals
      </h1>

      {/* Tagline */}
      <p
        style={{
          color: "#c8922a",
          fontSize: "13px",
          marginBottom: "6px",
          textAlign: "center",
        }}
      >
        Real Remedies. Old Ways. God&apos;s Design. 🌿
      </p>

      {/* Sub tagline */}
      <p
        style={{
          color: "#a08060",
          fontSize: "12px",
          marginBottom: "36px",
          textAlign: "center",
        }}
      >
        Ancient folk healing rooted in ✝️ Scripture
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          width: "100%",
          maxWidth: "380px",
        }}
      >
        {/* Button 1 — Free Guide */}
        <Link
          href="/free-gift"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#8B3A3A",
            color: "#f5ecd7",
            padding: "16px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "600",
            textAlign: "center",
            border: "1px solid #c8922a",
          }}
        >
          🌿 Free 15 Secret Remedies Guide
        </Link>

        {/* Button 2 — Supplements Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          <button
            onClick={() => toggle("supplements")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#3b5e3a",
              color: "#f5ecd7",
              padding: "16px 24px",
              borderRadius: openSection === "supplements"
                ? "12px 12px 0 0"
                : "12px",
              fontSize: "15px",
              fontWeight: "600",
              textAlign: "left",
              border: "1px solid #c8922a",
              cursor: "pointer",
              width: "100%",
            }}
          >
            <span>💊 Shop Natural Supplements</span>
            <span style={{ fontSize: "18px" }}>
              {openSection === "supplements" ? "▲" : "▼"}
            </span>
          </button>

          {/* Supplements Expanded */}
          {openSection === "supplements" && (
            <div
              style={{
                backgroundColor: "#1e1208",
                border: "1px solid #c8922a",
                borderTop: "none",
                borderRadius: "0 0 12px 12px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {supplements.map((product) => (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#2c1a0e",
                    color: "#f5ecd7",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: "600",
                    border: "1px solid #3b5e3a",
                  }}
                >
                  <span>{product.name}</span>
                  <span
                    style={{
                      backgroundColor: "#8B3A3A",
                      color: "#f5ecd7",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                      marginLeft: "10px",
                    }}
                  >
                    Buy Now 🛒
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Button 3 — Skincare Accordion */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            onClick={() => toggle("skincare")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#3b5e3a",
              color: "#f5ecd7",
              padding: "16px 24px",
              borderRadius: openSection === "skincare"
                ? "12px 12px 0 0"
                : "12px",
              fontSize: "15px",
              fontWeight: "600",
              textAlign: "left",
              border: "1px solid #c8922a",
              cursor: "pointer",
              width: "100%",
            }}
          >
            <span>✨ Shop Organic Skincare</span>
            <span style={{ fontSize: "18px" }}>
              {openSection === "skincare" ? "▲" : "▼"}
            </span>
          </button>

          {/* Skincare Expanded */}
          {openSection === "skincare" && (
            <div
              style={{
                backgroundColor: "#1e1208",
                border: "1px solid #c8922a",
                borderTop: "none",
                borderRadius: "0 0 12px 12px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {skincare.map((product) => (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#2c1a0e",
                    color: "#f5ecd7",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: "600",
                    border: "1px solid #3b5e3a",
                  }}
                >
                  <span>{product.name}</span>
                  <span
                    style={{
                      backgroundColor: "#8B3A3A",
                      color: "#f5ecd7",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                      marginLeft: "10px",
                    }}
                  >
                    Buy Now 🛒
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Button 4 — Chat with Granny Dovie */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#5c4a1e",
            color: "#f5ecd7",
            padding: "16px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "600",
            textAlign: "center",
            border: "1px solid #c8922a",
          }}
        >
          💬 Chat with Granny Dovie
        </Link>
      </div>

      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          margin: "36px 0 16px",
          width: "100%",
          maxWidth: "380px",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "1px",
            background:
              "linear-gradient(to right, transparent, #c8922a, transparent)",
          }}
        />
        <span style={{ color: "#c8922a", fontSize: "14px" }}>🌿</span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background:
              "linear-gradient(to right, transparent, #c8922a, transparent)",
          }}
        />
      </div>

      {/* Footer Disclosure */}
      <p
        style={{
          color: "#6b4c2a",
          fontSize: "11px",
          textAlign: "center",
          maxWidth: "320px",
          lineHeight: "1.7",
        }}
      >
        Granny Dovie is an AI-generated character created to share the wisdom
        of Appalachian folk healing tradition. The remedies are real. The love
        is real. 🌿
        <br />
        All content is for informational purposes only. Always consult your
        healthcare provider.
      </p>
    </main>
  )
}
