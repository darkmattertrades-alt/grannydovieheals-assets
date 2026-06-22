export function GrannyChat() {
  return (
    <>
      {/* Always-visible label */}
      <span
        id="chat-label"
        className="font-body whitespace-nowrap"
        style={{
          position: "fixed",
          bottom: "92px",
          right: "20px",
          color: "#F5ECD7",
          backgroundColor: "#3B5E3A",
          padding: "6px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          zIndex: 9999,
        }}
      >
        Chat with Granny Dovie 🌿
      </span>

      {/* Floating bubble */}
      <button
        id="chat-bubble"
        type="button"
        aria-label="Chat with Granny Dovie"
        className="flex items-center justify-center rounded-full text-2xl shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          height: "60px",
          width: "60px",
          backgroundColor: "#3B5E3A",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        <span aria-hidden>🌿</span>
      </button>

      {/* Chat window — no display property; JS in layout.tsx controls show/hide */}
      <div
        id="chat-window"
        role="dialog"
        aria-label="Chat with Granny Dovie"
        className="overflow-hidden"
        style={{
          position: "fixed",
          bottom: "92px",
          right: "20px",
          width: "min(380px, calc(100vw - 2.5rem))",
          height: "min(580px, calc(100vh - 7rem))",
          backgroundColor: "#F5ECD7",
          border: "2px solid #C8922A",
          borderRadius: "12px",
          boxShadow: "0 12px 40px rgba(60, 26, 14, 0.35)",
          zIndex: 9998,
        }}
      >
        {/* Header */}
        <div
          className="flex shrink-0 items-start justify-between px-4 py-3"
          style={{ backgroundColor: "#3B5E3A" }}
        >
          <div>
            <h2 className="font-serif text-lg font-bold leading-tight" style={{ color: "#F5ECD7" }}>
              Chat with Granny Dovie 🌿
            </h2>
            <p className="font-body text-xs leading-tight" style={{ color: "#C8922A" }}>
              Real Remedies. Old Ways. God&apos;s Design.
            </p>
          </div>
          <button
            id="chat-close"
            type="button"
            aria-label="Close chat"
            className="ml-2 shrink-0 rounded p-1 text-xl leading-none transition-opacity hover:opacity-70 focus:outline-none"
            style={{ color: "#F5ECD7", cursor: "pointer" }}
          >
            ×
          </button>
        </div>

        {/* Suggestion pills — always visible */}
        <div
          id="chat-suggestions"
          style={{
            backgroundColor: "#F5ECD7",
            borderBottom: "1px solid #C8922A",
            padding: "10px 12px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <p
            className="font-body w-full"
            style={{ fontSize: "11px", color: "#8B3A3A", marginBottom: "4px", fontStyle: "italic" }}
          >
            Ask Granny something, honey 🌿
          </p>

          {[
            { label: "🫐 Make elderberry syrup?", question: "How do I make elderberry syrup from scratch?" },
            { label: "🌿 What helps joint pain?", question: "What is a good natural remedy for joint pain?" },
            { label: "😴 Help me sleep naturally", question: "What are some natural remedies to help me sleep?" },
            { label: "🤒 I feel a cold coming on", question: "I feel a cold coming on, what should I do?" },
            { label: "🧴 Natural skin remedies", question: "What natural remedies are good for dry or aging skin?" },
            { label: "🪜 Show me step by step", question: "Can you walk me through how to make a natural home remedy step by step?" },
          ].map(({ label, question }) => (
            <button
              key={label}
              type="button"
              data-question={question}
              className="chat-suggestion-pill font-body"
              style={{
                backgroundColor: "#F5ECD7",
                border: "1px solid #C8922A",
                borderRadius: "20px",
                padding: "5px 10px",
                fontSize: "11px",
                color: "#3B5E3A",
                cursor: "pointer",
                fontWeight: 600,
                transition: "background-color 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Step-by-step example card — always visible */}
        <div
          id="chat-step-card"
          style={{
            margin: "10px 12px 0 12px",
            backgroundColor: "#fff8ee",
            border: "1px dashed #C8922A",
            borderRadius: "8px",
            padding: "10px 12px",
            flexShrink: 0,
          }}
        >
          <p
            className="font-body"
            style={{ fontSize: "11px", color: "#8B3A3A", fontWeight: 700, marginBottom: "6px" }}
          >
            🪜 Example — Step by Step Response
          </p>
          <p className="font-body" style={{ fontSize: "11px", color: "#5a3e2b", lineHeight: "1.6" }}>
            <span style={{ color: "#3B5E3A", fontWeight: 700 }}>Step 1</span> — Gather your dried elderberries and filtered water<br />
            <span style={{ color: "#3B5E3A", fontWeight: 700 }}>Step 2</span> — Simmer with cinnamon and cloves for 45 minutes<br />
            <span style={{ color: "#3B5E3A", fontWeight: 700 }}>Step 3</span> — Strain and stir in raw honey once cooled<br />
            <span style={{ fontSize: "10px", color: "#8B3A3A", fontStyle: "italic" }}>
              Ask Granny how to make anything and she will walk you through it 🌿
            </span>
          </p>
        </div>

        {/* Messages */}
        <div
          id="chat-messages"
          className="flex-1 space-y-3 overflow-y-auto px-3 py-4"
          style={{ flex: 1 }}
        />

        {/* Input area */}
        <div
          className="flex shrink-0 items-center gap-2 px-3 py-3"
          style={{ backgroundColor: "#F5ECD7", borderTop: "1px solid #C8922A" }}
        >
          <input
            id="chat-input"
            type="text"
            placeholder="Ask Granny Dovie anything..."
            aria-label="Ask Granny Dovie anything"
            className="min-w-0 flex-1 rounded-md border px-3 py-2 font-body text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2"
            style={{ backgroundColor: "#F5ECD7", borderColor: "#C8922A" }}
          />
          <button
            id="chat-send"
            type="button"
            className="shrink-0 rounded-md px-4 py-2 font-body text-sm font-semibold text-parchment transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#8B3A3A", cursor: "pointer" }}
          >
            Send 🌿
          </button>
        </div>
      </div>

      {/* Inline script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  var PRODUCTS = [
    { keys: ["turmeric"],                      name: "Garden of Life Turmeric",          url: "https://www.amazon.com/dp/B07G2LBQ1G" },
    { keys: ["ashwagandha"],                   name: "Gaia Herbs Ashwagandha",           url: "https://www.amazon.com/dp/B003HD9H0G" },
    { keys: ["elderberry syrup","elderberry"], name: "Gaia Herbs Elderberry Syrup",      url: "https://www.amazon.com/dp/B0036THLPE" },
    { keys: ["magnesium"],                     name: "Doctor's Best Magnesium",          url: "https://www.amazon.com/dp/B000BD0RT0" },
    { keys: ["vitamin k2","k2","d3"],          name: "Doctor's Best Vitamin K2 + D3",    url: "https://www.amazon.com/dp/B017JXZPPU" },
    { keys: ["quick defense","echinacea"],     name: "Gaia Herbs Quick Defense",         url: "https://www.amazon.com/dp/B0036THLRW" },
    { keys: ["apple cider vinegar","bragg"],   name: "Bragg Apple Cider Vinegar",        url: "https://www.amazon.com/dp/B001I7MVG0" },
    { keys: ["ginger"],                        name: "Nature's Way Ginger Root",         url: "https://www.amazon.com/dp/B001E10C9I" },
    { keys: ["peppermint spearmint"],          name: "Bigelow Peppermint Spearmint Tea", url: "https://www.amazon.com/dp/B073TJ18JY" },
    { keys: ["peppermint"],                    name: "Bigelow Peppermint Tea",           url: "https://www.amazon.com/dp/B000GG5IZK" },
    { keys: ["trilogy","rosehip oil"],         name: "Trilogy Organic Rosehip Oil",      url: "https://www.amazon.com/dp/B001NJNV12" },
    { keys: ["cliganic"],                      name: "Cliganic Organic Rosehip Oil",     url: "https://www.amazon.com/dp/B07G14PWZN" },
    { keys: ["shea butter"],                   name: "Pure Unrefined Shea Butter",       url: "https://www.amazon.com/dp/B00D9NV2D4" },
    { keys: ["castor oil"],                    name: "Sky Organics Castor Oil",          url: "https://www.amazon.com/dp/B0186U9736" },
    { keys: ["jojoba"],                        name: "Leven Rose Jojoba Oil",            url: "https://www.amazon.com/dp/B00GJX58PE" },
    { keys: ["ra cosmetics"],                  name: "RA Cosmetics Shea Butter",         url: "https://www.amazon.com/dp/B00987FWHW" },
    { keys: ["the ordinary"],                  name: "The Ordinary Rosehip Oil",         url: "https://www.amazon.com/dp/B09Q2X99XG" },
    { keys: ["palmer","cocoa butter"],         name: "Palmer's Cocoa Butter Lotion",     url: "https://www.amazon.com/dp/B0009F3O8Q" },
  ];

  function makeButton(name, url) {
    return (
      '<br/><a href="' + url + '" target="_blank" rel="noopener noreferrer" ' +
      'style="display:inline-block;background:#8B3A3A;color:#F5ECD7;' +
      'padding:10px 18px;border-radius:8px;text-decoration:none;' +
      'font-family:Lora,serif;font-size:13px;font-weight:600;' +
      'margin-top:8px;margin-bottom:8px;">' +
      '&#128722; ' + name + ' &#8594; Buy on Amazon</a><br/>'
    );
  }

  function wireSuggestionPills() {
    var pills = document.querySelectorAll(".chat-suggestion-pill");
    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        var q = pill.getAttribute("data-question");
        if (q) {
          var input = document.getElementById("chat-input");
          if (input) {
            input.value = q;
            var btn = document.getElementById("chat-send");
            if (btn) btn.click();
          }
        }
      });
      pill.addEventListener("mouseenter", function () {
        pill.style.backgroundColor = "#3B5E3A";
        pill.style.color = "#F5ECD7";
      });
      pill.addEventListener("mouseleave", function () {
        pill.style.backgroundColor = "#F5ECD7";
        pill.style.color = "#3B5E3A";
      });
    });
  }

  function patchFormatReply() {
    if (typeof window.__grannyFormatReplyPatched !== "undefined") return;
    window.__grannyFormatReplyPatched = true;

    var originalFormatReply = window.formatReply;

    window.formatReply = function (text) {
      var html = originalFormatReply ? originalFormatReply(text) : text;

      // 1. BUY_LINK: with full Amazon URL
      html = html.replace(
        /BUY_LINK:\\s*(https?:\\/\\/(?:www\\.)?amazon\\.com\\/dp\\/([A-Z0-9]+)[^\\s<]*)/gi,
        function (_, url, asin) {
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

      // 2. BUY_LINK: with product name instead of URL — keyword match fallback
      html = html.replace(
        /BUY_LINK:\\s*([^\\n<]{3,80})/gi,
        function (match, productText) {
          if (productText.indexOf("amazon.com") !== -1) return match;
          var lower = productText.toLowerCase().trim();
          for (var i = 0; i < PRODUCTS.length; i++) {
            var p = PRODUCTS[i];
            for (var j = 0; j < p.keys.length; j++) {
              if (lower.indexOf(p.keys[j]) !== -1) {
                return makeButton(p.name, p.url);
              }
            }
          }
          return "";
        }
      );

      // 3. Step formatting — bold green
      html = html.replace(
        /(Step\\s+\\d+\\s*[\\u2014\\-]+[^\\n<]+)/gi,
        function (match) {
          return (
            '<span style="display:block;margin-top:6px;margin-bottom:2px;' +
            'font-weight:700;color:#3B5E3A;">' + match.trim() + "</span>"
          );
        }
      );

      return html;
    };
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireSuggestionPills();
    patchFormatReply();
  });
})();
          `,
        }}
      />
    </>
  )
}
