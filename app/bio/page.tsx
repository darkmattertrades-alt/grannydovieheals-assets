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

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/grannydovieheals/",
    icon: <InstagramIcon />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@grannydovieheals",
    icon: <TikTokIcon />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590806946468",
    icon: <FacebookIcon />,
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
            marginBottom: "20px",
          }}
        >
          ✦ Trusted by natural health seekers across America ✦
        </p>

        {/* ── Social Icons Row ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginBottom: "4px",
          }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                backgroundColor: "#1e1208",
                border: "1.5px solid #c8922a",
                color: "#c8922a",
                boxShadow: "0 0 10px rgba(200,146,42,0.2)",
                transition: "box-shadow 0.2s ease",
                textDecoration: "none",
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
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
