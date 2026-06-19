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
      {/* Profile */}
      <div style={{ textAlign: "center", marginBottom: "28px", width: "100%" }}>
        <Image
          src={`${BASE}/granny-profile.png`}
          alt="Granny Dovie"
          width={110}
          height={110}
          style={{
            borderRadius: "50%",
            border: "3px solid #c8922a",
            objectFit: "cover",
            display: "block",
            margin: "0 auto 14px auto",
          }}
        />
        <h1
          style={{
            color: "#f5ecd7",
            fontSize: "22px",
            fontWeight: "700",
            marginBottom: "6px",
            letterSpacing: "0.3px",
          }}
        >
          Granny Dovie Heals
        </h1>
        <p
          style={{
            color: "#c8922a",
            fontSize: "14px",
            marginBottom: "4px",
          }}
        >
          Real Remedies. Old Ways. God&apos;s Design. 🌿
        </p>
        <p
          style={{
            color: "#a08060",
            fontSize: "13px",
          }}
        >
          Ancient folk healing rooted in ✝️ Scripture
        </p>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          maxWidth: "380px",
        }}
      >
        {/* Free Gift */}
        <a
          href="/free-gift"
          style={{
            display: "block",
            backgroundColor: "#8B3A3A",
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
          🌿 Free 15 Secret Remedies Guide
        </a>

        {/* Supplements Accordion */}
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

        {/* Skincare Accordion */}
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

        {/* Chat with Granny Dovie */}
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

      {/* Affiliate Disclaimer */}
      <p
        style={{
          color: "#6b4c2a",
          fontSize: "11px",
          textAlign: "center",
          maxWidth: "320px",
          lineHeight: "1.7",
          marginTop: "28px",
        }}
      >
        This page contains affiliate links. Product recommendations are from
        Amazon. If you purchase through any link, a small commission may be
        earned at no extra cost to you. 🌿
      </p>

      {/* Botanical Divider */}
      <div
        style={{
          width: "80%",
          maxWidth: "320px",
          height: "1px",
          background: "linear-gradient(to right, transparent, #c8922a, transparent)",
          margin: "20px auto",
        }}
      />

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
        ✨ Granny Dovie is an AI-generated character. The remedies are real.
        The love is real. 🌿 All content is for informational purposes only.
        Always consult your healthcare provider.
      </p>
    </main>
  )
}
