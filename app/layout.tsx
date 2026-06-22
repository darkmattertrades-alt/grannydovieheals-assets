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
  function formatReply(text) {
    var formatted = text.replace(
      /SHOP_LINK\\[([^|\\]]+)\\|([^\\]]+)\\]/g,
      function(match, name, url) {
        return '<br/><br/><a href="' + url.trim() + '" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#8B3A3A;color:#F5ECD7;padding:10px 18px;border-radius:8px;text-decoration:none;font-family:Lora,serif;font-size:13px;font-weight:600;margin-top:6px;margin-bottom:6px;">&#128722; ' + name.trim() + ' &#8594; Shop on Amazon</a><br/><br/>';
      }
    );
    formatted = formatted.replace(/\\n/g, '<br/>');
    return formatted;
  }

  function init() {
    var bubble = document.getElementById('chat-bubble');
    var win = document.getElementById('chat-window');
    var label = document.getElementById('chat-label');
    var closeBtn = document.getElementById('chat-close');

    if (!bubble || !win) { return; }
    if (bubble.getAttribute('data-bound') === '1') { return; }
    bubble.setAttribute('data-bound', '1');

    var chatMessages = document.getElementById('chat-messages');

    function show() {
      win.style.display = 'flex';
      win.style.flexDirection = 'column';
      if (label) { label.style.display = 'none'; }
    }
    function hide() {
      win.style.display = 'none';
      if (label) { label.style.display = 'block'; }
    }

    bubble.onclick = function () {
      if (win.style.display === 'none' || win.style.display === '') {
        show();
      } else {
        hide();
      }
    };

    if (closeBtn) { closeBtn.onclick = hide; }

    var sendBtn = document.getElementById('chat-send');
    var chatInput = document.getElementById('chat-input');

    function sendMessage() {
      if (!chatInput || !chatMessages) { return; }
      var message = chatInput.value.trim();
      if (!message) { return; }

      var userMsg = document.createElement('div');
      userMsg.className = 'user-message';
      userMsg.textContent = message;
      chatMessages.appendChild(userMsg);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      chatInput.value = '';

      var loading = document.createElement('div');
      loading.className = 'granny-message';
      loading.textContent = 'Granny Dovie is thinking... \uD83C\uDF3F';
      loading.id = 'loading-msg';
      chatMessages.appendChild(loading);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          var loadingEl = document.getElementById('loading-msg');
          if (loadingEl) { loadingEl.remove(); }

          var grannyMsg = document.createElement('div');
          grannyMsg.className = 'granny-message';
          grannyMsg.innerHTML = formatReply(data.reply);
          chatMessages.appendChild(grannyMsg);
          grannyMsg.scrollIntoView({ behavior: 'smooth', block: 'start' });
        })
        .catch(function () {
          var loadingEl = document.getElementById('loading-msg');
          if (loadingEl) { loadingEl.remove(); }

          var errMsg = document.createElement('div');
          errMsg.className = 'granny-message';
          errMsg.textContent = 'Granny Dovie is resting right now honey. Try again in a moment. \uD83C\uDF3F';
          chatMessages.appendChild(errMsg);
          errMsg.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (sendBtn) {
      sendBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        sendMessage();
      };
    }

    if (chatInput) {
      chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          sendMessage();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
`,
          }}
        />
      </body>
    </html>
  )
}
