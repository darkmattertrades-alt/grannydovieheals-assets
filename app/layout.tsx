import type { Metadata } from "next";
import { Playfair_Display, Lora, Dancing_Script } from "next/font/google";
import "./globals.css";
import ChatWrapper from "@/components/chat-wrapper";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const BASE =
  "https://raw.githubusercontent.com/darkmattertrades-alt/grannydovieheals-assets/main";

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
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${dancing.variable}`}
    >
      <body>
        {children}

        {/* Site Footer */}
        <footer
          style={{
            background: "#2a3d29",
            color: "#F5ECD7",
            textAlign: "center",
            padding: "18px 16px",
            fontSize: "12px",
            fontFamily: "Lora, serif",
          }}
        >
          <p style={{ marginBottom: "6px" }}>
            Granny Dovie is an AI character created to share traditional Appalachian folk wisdom and
            biblical plant knowledge. She is not a real person and does not provide medical advice.
          </p>
          <p>
            © {new Date().getFullYear()} Granny Dovie Heals. All rights reserved. | As an Amazon
            Associate we earn from qualifying purchases.
          </p>
        </footer>

        <ChatWrapper />

        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  var bubble = document.getElementById('chat-bubble');
  var window_ = document.getElementById('chat-window');
  var closeBtn = document.getElementById('chat-close');
  var label = document.getElementById('chat-label');
  var input = document.getElementById('chat-input');
  var send = document.getElementById('chat-send');
  var messages = document.getElementById('chat-messages');

  if (!bubble || !window_ || !closeBtn || !input || !send || !messages) return;

  // ── Toggle open/close ──────────────────────────────────────────
  function show() {
    window_.style.display = 'flex';
    if (label) label.style.display = 'none';
  }

  function hide() {
    window_.style.display = 'none';
    if (label) label.style.display = '';
  }

  bubble.addEventListener('click', function () {
    var isOpen = window_.style.display === 'flex';
    if (isOpen) { hide(); } else { show(); }
  });

  closeBtn.addEventListener('click', hide);

  // ── Suggestion pills — NEVER hide them ────────────────────────
  var pills = document.querySelectorAll('.chat-suggestion-pill');
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      var q = pill.getAttribute('data-question');
      if (q) {
        input.value = q;
        sendMessage();
      }
    });
  });

  // ── Format reply ───────────────────────────────────────────────
  function formatReply(text) {
    // Step formatting
    var formatted = text.replace(
      /(Step\\s+\\d+\\s*[\\u2014\\-]\\s*[^\\n<]+)/gi,
      function (match) {
        return (
          '<br/><span style="display:block;margin-top:6px;margin-bottom:2px;' +
          'font-weight:700;color:#3B5E3A;">' + match.trim() + '</span>'
        );
      }
    );

    // Legacy SHOP_LINK tokens
    formatted = formatted.replace(
      /SHOP_LINK\\[([^|\\]]+)\\|([^\\]]+)\\]/g,
      function (match, name, url) {
        return (
          '<br/><br/>' +
          '<a href="' + url.trim() + '" target="_blank" rel="noopener noreferrer" ' +
          'style="display:block;background:#8B3A3A;color:#F5ECD7;' +
          'padding:10px 18px;border-radius:8px;text-decoration:none;' +
          'font-family:Lora,serif;font-size:13px;font-weight:600;' +
          'margin-top:6px;margin-bottom:6px;text-align:center;">' +
          '🛒 Buy on Amazon — ' + name.trim() +
          '</a><br/><br/>'
        );
      }
    );

    // Newlines
    formatted = formatted.replace(/\\n/g, '<br/>');
    return formatted;
  }

  // ── Send message ───────────────────────────────────────────────
  function sendMessage() {
    var text = input.value.trim();
    if (!text) return;
    input.value = '';

    // User bubble
    var userMsg = document.createElement('div');
    userMsg.style.cssText =
      'align-self:flex-end;background:#3B5E3A;color:#F5ECD7;' +
      'padding:8px 12px;border-radius:12px 12px 2px 12px;' +
      'max-width:80%;font-size:13px;font-family:Lora,serif;';
    userMsg.textContent = text;
    messages.appendChild(userMsg);
    messages.scrollTop = messages.scrollHeight;

    // Loading bubble
    var loading = document.createElement('div');
    loading.style.cssText =
      'align-self:flex-start;background:#fff8ee;border:1px solid #C8922A55;' +
      'color:#3B5E3A;padding:8px 12px;border-radius:12px 12px 12px 2px;' +
      'max-width:85%;font-size:13px;font-family:Lora,serif;font-style:italic;';
    loading.textContent = 'Granny Dovie is thinking... 🌿';
    messages.appendChild(loading);
    messages.scrollTop = messages.scrollHeight;

    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text }),
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        messages.removeChild(loading);
        var grannyMsg = document.createElement('div');
        grannyMsg.style.cssText =
          'align-self:flex-start;background:#fff8ee;border:1px solid #C8922A55;' +
          'color:#3C1A0E;padding:10px 14px;border-radius:12px 12px 12px 2px;' +
          'max-width:85%;font-size:13px;font-family:Lora,serif;line-height:1.6;';
        grannyMsg.innerHTML = formatReply(data.reply || 'Granny Dovie is resting right now honey. Try again in a moment. 🌿');
        messages.appendChild(grannyMsg);
        messages.scrollTop = messages.scrollHeight;
      })
      .catch(function () {
        messages.removeChild(loading);
        var errMsg = document.createElement('div');
        errMsg.style.cssText =
          'align-self:flex-start;background:#fff8ee;border:1px solid #C8922A55;' +
          'color:#3C1A0E;padding:10px 14px;border-radius:12px 12px 12px 2px;' +
          'max-width:85%;font-size:13px;font-family:Lora,serif;';
        errMsg.textContent = 'Granny Dovie is resting right now honey. Try again in a moment. 🌿';
        messages.appendChild(errMsg);
        messages.scrollTop = messages.scrollHeight;
      });
  }

  send.addEventListener('click', sendMessage);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') sendMessage();
  });
})();
            `,
          }}
        />
      </body>
    </html>
  );
}
