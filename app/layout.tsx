import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora, Dancing_Script } from "next/font/google"
import "./globals.css"
import ChatWrapper from "@/components/chat-wrapper"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
})

const BASE = "https://raw.githubusercontent.com/darkmattertrades-alt/grannydovieheals-assets/main"

export const metadata: Metadata = {
  title: "Granny Dovie Heals — Natural Herbal Remedies & Biblical Healing",
  description:
    "Old-fashioned Appalachian folk wisdom and biblical healing. Granny Dovie shares natural herbal remedies, God's Pharmacy supplements, and ways to honor the temple.",
  openGraph: {
    title: "Granny Dovie Heals",
    description:
      "Natural herbal remedies and biblical healing from an Appalachian folk healer.",
    images: [`${BASE}/og-image.png`],
    type: "website",
  },
  other: {
    "msvalidate.01": "39073F4A58ED1A8191ED75AEE1429F09",
    "google-site-verification": "cKm6wvZM7ZKH2Ef5MqWix-SG3AS0Sj5D55HXIYNdwF8",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${dancing.variable} bg-parchment`}
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2QFEE5BM92"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2QFEE5BM92');
            `,
          }}
        />
      </head>
      <body className="font-body text-ink antialiased">
        {children}

        {/* ── SITE FOOTER DISCLOSURE ── */}
        <footer
          style={{
            backgroundColor: "#2c1a0e",
            color: "#a08060",
            textAlign: "center",
            padding: "20px 16px",
            fontFamily: "var(--font-lora), serif",
            fontSize: "12px",
            lineHeight: "1.8",
            borderTop: "2px solid #c8922a",
          }}
        >
          <p style={{ marginBottom: "6px", color: "#c8922a", fontSize: "13px" }}>
            🌿 Granny Dovie Heals
          </p>
          <p style={{ marginBottom: "4px" }}>
            Granny Dovie is an AI-generated character created to share the
            wisdom of Appalachian folk healing tradition.
            The remedies are real. The love is real. 🌿
          </p>
          <p style={{ marginBottom: "4px" }}>
            All content is for informational purposes only and does not
            constitute medical advice. Always consult your healthcare provider.
          </p>
          <p style={{ marginTop: "8px", color: "#6b4c2a", fontSize: "11px" }}>
            © {new Date().getFullYear()} Granny Dovie Heals. All rights reserved.
          </p>
        </footer>

        <ChatWrapper />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {

  window.formatReply = function(text) {
    var normalized = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    normalized = normalized.replace(/([a-zA-Z])\n([a-zA-Z])/g, '$1$2');

    var formatted = normalized.replace(
      /SHOP_LINK\[([^|\]]+)\|([^\]]+)\]/g,
      function(match, name, url) {
        return '<br/><br/><a href="' + url.trim() + '" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#8B3A3A;color:#F5ECD7;padding:10px 18px;border-radius:8px;text-decoration:none;font-family:Lora,serif;font-size:13px;font-weight:600;margin-top:6px;margin-bottom:6px;">&#128722; ' + name.trim() + ' &#8594; Shop on Amazon</a><br/><br/>';
      }
    );

    formatted = formatted.replace(/\n/g, '<br/>');

    return formatted;
  };

})();
`,
          }}
        />
      </body>
    </html>
  )
}
