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

  // ── PRODUCT MAP — name keywords → { name, url } ──────────────────────────
  var PRODUCTS = [
    { keys: ["turmeric"],              name: "Garden of Life Turmeric",          url: "https://www.amazon.com/dp/B07G2LBQ1G" },
    { keys: ["ashwagandha"],           name: "Gaia Herbs Ashwagandha",           url: "https://www.amazon.com/dp/B003HD9H0G" },
    { keys: ["elderberry syrup"],      name: "Gaia Herbs Elderberry Syrup",      url: "https://www.amazon.com/dp/B0036THLPE" },
    { keys: ["magnesium"],             name: "Doctor's Best Magnesium",          url: "https://www.amazon.com/dp/B000BD0RT0" },
    { keys: ["vitamin k2","k2","d3"],  name: "Doctor's Best Vitamin K2 + D3",   url: "https://www.amazon.com/dp/B017JXZPPU" },
    { keys: ["quick defense","echinacea"], name: "Gaia Herbs Quick Defense",     url: "https://www.amazon.com/dp/B0036THLRW" },
    { keys: ["apple cider vinegar","acv","bragg"], name: "Bragg Apple Cider Vinegar", url: "https://www.amazon.com/dp/B001I7MVG0" },
    { keys: ["ginger root","ginger"],  name: "Nature's Way Ginger Root",         url: "https://www.amazon.com/dp/B001E10C9I" },
    { keys: ["peppermint tea","peppermint"], name: "Bigelow Peppermint Tea",     url: "https://www.amazon.com/dp/B000GG5IZK" },
    { keys: ["trilogy","rosehip oil"], name: "Trilogy Organic Rosehip Oil",      url: "https://www.amazon.com/dp/B001NJNV12" },
    { keys: ["cliganic","rosehip seed"], name: "Cliganic Organic Rosehip Oil",   url: "https://www.amazon.com/dp/B07G14PWZN" },
    { keys: ["shea butter","better shea"], name: "Pure Unrefined Shea Butter",  url: "https://www.amazon.com/dp/B00D9NV2D4" },
    { keys: ["castor oil","sky organics"], name: "Sky Organics Castor Oil",      url: "https://www.amazon.com/dp/B0186U9736" },
    { keys: ["jojoba","leven rose"],   name: "Leven Rose Jojoba Oil",            url: "https://www.amazon.com/dp/B00GJX58PE" },
    { keys: ["ra cosmetics","raw shea"], name: "RA Cosmetics Shea Butter",       url: "https://www.amazon.com/dp/B00987FWHW" },
    { keys: ["the ordinary","ordinary rosehip"], name: "The Ordinary Rosehip Oil", url: "https://www.amazon.com/dp/B09Q2X99XG" },
    { keys: ["palmer","cocoa butter"], name: "Palmer's Cocoa Butter Lotion",     url: "https://www.amazon.com/dp/B0009F3O8Q" },
    { keys: ["spearmint","peppermint spearmint"], name: "Bigelow Peppermint Spearmint Tea", url: "https://www.amazon.com/dp/B073TJ18JY" },
  ];

  function makeButton(name, url) {
    return (
      '<br/>' +
      '<a href="' + url + '" target="_blank" rel="noopener noreferrer" ' +
      'style="display:inline-block;background:#8B3A3A;color:#F5ECD7;' +
      'padding:10px 18px;border-radius:8px;text-decoration:none;' +
      'font-family:Lora,serif;font-size:13px;font-weight:600;' +
      'margin-top:8px;margin-bottom:8px;">' +
      '&#128722; ' + name + ' &#8594; Buy Now on Amazon' +
      '</a><br/>'
    );
  }

  function formatReply(text) {

    // 1. BUY_LINK: with a full Amazon URL
    var formatted = text.replace(
      /BUY_LINK:\s*(https?:\/\/(?:www\.)?amazon\.com\/dp\/([A-Z0-9]+)[^\s\n<]*)/gi,
      function(match, url, asin) {
        var nameMap = {
          "B07G2LBQ1G": "Garden of Life Turmeric",
          "B003HD9H0G": "Gaia Herbs Ashwagandha",
          "B0036THLPE": "Gaia Herbs Elderberry Syrup",
          "B000BD0RT0": "Doctor's Best Magnesium",
          "B017JXZPPU": "Doctor's Best Vitamin K2 + D3",
          "B0036THLRW": "Gaia Herbs Quick Defense",
          "B001I7MVG0": "Bragg Apple Cider Vinegar",
          "B001E10C9I": "Nature's Way Ginger Root",
          "B000GG5IZK": "Bigelow Peppermint Tea",
          "B001NJNV12": "Trilogy Organic Rosehip Oil",
          "B07G14PWZN": "Cliganic Organic Rosehip Oil",
          "B00D9NV2D4": "Pure Unrefined Shea Butter",
          "B0186U9736": "Sky Organics Castor Oil",
          "B00GJX58PE": "Leven Rose Jojoba Oil",
          "B00987FWHW": "RA Cosmetics Shea Butter",
          "B09Q2X99XG": "The Ordinary Rosehip Oil",
          "B0009F3O8Q": "Palmer's Cocoa Butter Lotion",
          "B073TJ18JY": "Bigelow Peppermint Spearmint Tea",
        };
        var name = nameMap[asin] || "Granny Dovie's Pick";
        return makeButton(name, url);
      }
    );

    // 2. BUY_LINK: with a product name instead of URL (model misbehaving)
    formatted = formatted.replace(
      /BUY_LINK:\s*([^\n<]{3,80})/gi,
      function(match, productText) {
        // Skip if it already became a button in step 1
        if (productText.indexOf('amazon.com') !== -1) return match;
        var lower = productText.toLowerCase().trim();
        for (var i = 0; i < PRODUCTS.length; i++) {
          var p = PRODUCTS[i];
          for (var j = 0; j < p.keys.length; j++) {
            if (lower.indexOf(p.keys[j]) !== -1) {
              return makeButton(p.name, p.url);
            }
          }
        }
        // No match found — hide the raw token
        return '';
      }
    );

    // 3. Legacy SHOP_LINK[Name|URL] tokens
    formatted = formatted.replace(
      /SHOP_LINK\[([^|\]]+)\|([^\]]+)\]/g,
      function(match, name, url) {
        return makeButton(name.trim(), url.trim());
      }
    );

    // 4. Step 1 — Step 2 — Step 3 bold green formatting
    formatted = formatted.replace(
      /(Step\s+\d+\s*[\u2014\-]+\s*[^\n<]+)/gi,
      function(match) {
        return (
          '<span style="display:block;margin-top:8px;margin-bottom:2px;' +
          'font-weight:700;color:#3B5E3A;font-family:Lora,serif;">' +
          match.trim() +
          '</span>'
        );
      }
    );

    // 5. Newlines to line breaks
    formatted = formatted.replace(/\n/g, '<br/>');

    return formatted;
  }

  function hideSuggestions() {
    var s = document.getElementById('chat-suggestions');
    var c = document.getElementById('chat-step-card');
    if (s) s.style.display = 'none';
    if (c) c.style.display = 'none';
  }

  function init() {
    var bubble  = document.getElementById('chat-bubble');
    var win     = document.getElementById('chat-window');
    var label   = document.getElementById('chat-label');
    var closeBtn = document.getElementById('chat-close');

    if (!bubble || !win) { return; }
    if (bubble.getAttribute('data-bound') === '1') { return; }
    bubble.setAttribute('data-bound', '1');

    var chatMessages = document.getElementById('chat-messages');
    var chatInput    = document.getElementById('chat-input');
    var sendBtn      = document.getElementById('chat-send');

    function show() {
      win.style.display = 'flex';
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

    // Wire suggestion pills
    var pills = document.querySelectorAll('.chat-suggestion-pill');
    pills.forEach(function(pill) {
      pill.addEventListener('click', function() {
        var q = pill.getAttribute('data-question');
        if (q && chatInput) {
          hideSuggestions();
          chatInput.value = q;
          sendMessage();
        }
      });
      pill.addEventListener('mouseenter', function() {
        pill.style.backgroundColor = '#3B5E3A';
        pill.style.color = '#F5ECD7';
      });
      pill.addEventListener('mouseleave', function() {
        pill.style.backgroundColor = '#F5ECD7';
        pill.style.color = '#3B5E3A';
      });
    });

    var suggestionsHidden = false;
    function ensureSuggestionsHidden() {
      if (!suggestionsHidden) {
        hideSuggestions();
        suggestionsHidden = true;
      }
    }

    function sendMessage() {
      if (!chatInput || !chatMessages) { return; }
      var message = chatInput.value.trim();
      if (!message) { return; }

      ensureSuggestionsHidden();

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
        .then(function(res) { return res.json(); })
        .then(function(data) {
          var loadingEl = document.getElementById('loading-msg');
          if (loadingEl) { loadingEl.remove(); }
          var grannyMsg = document.createElement('div');
          grannyMsg.className = 'granny-message';
          grannyMsg.innerHTML = formatReply(data.reply);
          chatMessages.appendChild(grannyMsg);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        })
        .catch(function() {
          var loadingEl = document.getElementById('loading-msg');
          if (loadingEl) { loadingEl.remove(); }
          var errMsg = document.createElement('div');
          errMsg.className = 'granny-message';
          errMsg.textContent = 'Granny Dovie is resting right now honey. Try again in a moment. \uD83C\uDF3F';
          chatMessages.appendChild(errMsg);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    }

    if (sendBtn) {
      sendBtn.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        sendMessage();
      };
    }

    if (chatInput) {
      chatInput.addEventListener('keypress', function(e) {
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
