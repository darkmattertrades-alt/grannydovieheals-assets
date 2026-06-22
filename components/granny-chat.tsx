import Link from "next/link"

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

      {/* Chat window */}
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
            <h2
              className="font-serif text-lg font-bold leading-tight"
              style={{ color: "#F5ECD7" }}
            >
              Chat with Granny Dovie 🌿
            </h2>
            <p
              className="font-body text-xs leading-tight"
              style={{ color: "#C8922A" }}
            >
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

        {/* Suggestion pills */}
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
            style={{
              fontSize: "11px",
              color: "#8B3A3A",
              marginBottom: "4px",
              fontStyle: "italic",
            }}
          >
            Ask Granny something, honey 🌿
          </p>

          {[
            {
              label: "🫐 Make elderberry syrup?",
              question: "How do I make elderberry syrup from scratch?",
            },
            {
              label: "🌿 What helps joint pain?",
              question: "What is a good natural remedy for joint pain?",
            },
            {
              label: "😴 Help me sleep naturally",
              question: "What are some natural remedies to help me sleep?",
            },
            {
              label: "🤒 I feel a cold coming on",
              question: "I feel a cold coming on, what should I do?",
            },
            {
              label: "🧴 Natural skin remedies",
              question:
                "What natural remedies are good for dry or aging skin?",
            },
            {
              label: "🪜 Show me step by step",
              question:
                "Can you walk me through how to make a natural home remedy step by step?",
            },
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

        {/* Step-by-step example card */}
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
            style={{
              fontSize: "11px",
              color: "#8B3A3A",
              fontWeight: 700,
              marginBottom: "6px",
            }}
          >
            🪜 Example — Step by Step Response
          </p>
          <p
            className="font-body"
            style={{ fontSize: "11px", color: "#5a3e2b", lineHeight: "1.6" }}
          >
            <span style={{ color: "#3B5E3A", fontWeight: 700 }}>Step 1</span>{" "}
            — Gather your dried elderberries and filtered water
            <br />
            <span style={{ color: "#3B5E3A", fontWeight: 700 }}>Step 2</span>{" "}
            — Simmer with cinnamon and cloves for 45 minutes
            <br />
            <span style={{ color: "#3B5E3A", fontWeight: 700 }}>Step 3</span>{" "}
            — Strain and stir in raw honey once cooled
            <br />
            <span
              style={{
                fontSize: "10px",
                color: "#8B3A3A",
                fontStyle: "italic",
              }}
            >
              Ask Granny how to make anything and she will walk you through it
              🌿
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

      {/* ── INLINE SCRIPT ── */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {

  // ── ALL 10 CLICKBANK PRODUCTS ────────────────────────────────────────
  // Injected client-side based on keyword matching against the reply text.
  // Amazon BUY_LINK buttons are already handled server-side by the API.
  var CLICKBANK = [
    {
      keys: ["bloating","digestion","gut health","stomach","constipation","gas","apple cider vinegar","bragg","acv"],
      label: "GutVita",
      url:   "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=acv-morning-routine",
    },
    {
      keys: ["leaky gut","gut bacteria","ibs","irritable bowel","microbiome","vivogut"],
      label: "VivoGut",
      url:   "https://hop.clickbank.net/?affiliate=dovieheals&vendor=vivogut&pid=v1&tid=vivogut",
    },
    {
      keys: ["immune","immunity","sick","cold","flu","virus","infection","elderberry"],
      label: "VisiFlora",
      url:   "https://hop.clickbank.net/?affiliate=dovieheals&vendor=visiflora&pid=v1&tid=elderberry-syrup",
    },
    {
      keys: ["joint pain","knee pain","arthritis","stiffness","inflammation","joint","turmeric"],
      label: "Balmorex",
      url:   "https://hop.clickbank.net/?affiliate=dovieheals&vendor=balmorex&pid=v1&tid=turmeric-joint-pain",
    },
    {
      keys: ["nerve pain","neuropathy","tingling","numbness","burning feet","nerve"],
      label: "Nerve Armor",
      url:   "https://hop.clickbank.net/?affiliate=dovieheals&vendor=nervearmor&w=main",
    },
    {
      keys: ["blood sugar","glucose","diabetes","a1c","insulin","sugar craving"],
      label: "Gluco6",
      url:   "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gluco6&pid=vsl&tid=gluco6",
    },
    {
      keys: ["energy crash","sugar crash","carb craving","afternoon slump","sweet tooth"],
      label: "Sugar Defender",
      url:   "https://hop.clickbank.net/?custom=1&affiliate=dovieheals&vendor=sugardef&pid=new",
    },
    {
      keys: ["prediabetes","metabolic","belly fat","blood glucose","insuleaf"],
      label: "InsuLeaf",
      url:   "https://buyinsuleaf.com/en/funnel/main/?affiliate=dovieheals",
    },
    {
      keys: ["sleep","insomnia","restless","can't sleep","wake up","exhausted","magnesium"],
      label: "Sleep Revive",
      url:   "https://hop.clickbank.net/?vendor=revive&affiliate=dovieheals&lid=1&tid=natural-sleep-remedy",
    },
    {
      keys: ["skin","wrinkles","sagging","collagen","dark spots","aging skin","stress","cortisol","hormones","ashwagandha"],
      label: "Synevra UltraLift",
      url:   "https://hop.clickbank.net/?affiliate=dovieheals&vendor=synevra&pid=v1&tid=synevra",
    },
  ];

  // ── BUILD CLICKBANK BUTTON ───────────────────────────────────────────
  function makeClickbankButton(label, url) {
    return (
      '<br/><a href="' + url + '" target="_blank" rel="sponsored noopener noreferrer" ' +
      'style="display:block;background-color:#C8922A;color:#fff;' +
      'text-align:center;padding:9px 14px;border-radius:6px;' +
      'text-decoration:none;font-size:13px;font-weight:600;' +
      'border:1px solid #8B3A3A;margin-top:6px;margin-bottom:6px;' +
      'font-family:var(--font-lora),serif;">' +
      '&#127807; ' + label + ' &rarr; Learn More</a><br/>'
    );
  }

  // ── MATCH KEYWORDS AGAINST TEXT ─────────────────────────────────────
  function matchClickbank(lower) {
    for (var i = 0; i < CLICKBANK.length; i++) {
      var p = CLICKBANK[i];
      for (var j = 0; j < p.keys.length; j++) {
        if (lower.indexOf(p.keys[j]) !== -1) return p;
      }
    }
    return null;
  }

  // ── WIRE SUGGESTION PILLS ────────────────────────────────────────────
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

  // ── PATCH formatReply ────────────────────────────────────────────────
  // The API already converts BUY_LINK: placeholders to HTML server-side.
  // This patch only needs to:
  // 1. Bold and color Step headings
  // 2. Append a Clickbank button based on reply content keywords
  function patchFormatReply() {
    if (typeof window.__grannyFormatReplyPatched !== "undefined") return;
    window.__grannyFormatReplyPatched = true;

    var originalFormatReply = window.formatReply;

    window.formatReply = function (text) {
      // Pass through original formatter first (handles newlines etc)
      var html = originalFormatReply ? originalFormatReply(text) : text;

      // 1. Bold and color Step headings
      html = html.replace(
        /(Step\\s+\\d+\\s*[\\u2014\\-]+[^\\n<]+)/gi,
        function (match) {
          return (
            '<span style="display:block;margin-top:6px;margin-bottom:2px;' +
            'font-weight:700;color:#3B5E3A;">' + match.trim() + "</span>"
          );
        }
      );

      // 2. Append Clickbank button based on reply keyword match
      var lower = html.toLowerCase();
      var cb = matchClickbank(lower);
      if (cb) {
        html += makeClickbankButton(cb.label, cb.url);
      }

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
