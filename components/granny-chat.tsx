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

  // ── ALL 26 AMAZON PRODUCTS — amzn.to affiliate links ──────────────────
  var PRODUCTS = [

    // SUPPLEMENTS — PREMIUM TIER
    { keys: ["milk thistle","dose milk thistle"],
      name: "Dose Organic Milk Thistle Liver Cleanse 6-Bottle Supply",
      url:  "https://amzn.to/43MUCXw" },

    { keys: ["black seed oil","resilia"],
      name: "Resilia Black Seed Oil + Oregano Capsules 300ct",
      url:  "https://amzn.to/3SCbdL4" },

    { keys: ["red ginseng extract","jung kwan jang extract"],
      name: "JUNG KWAN JANG Korean Red Ginseng Concentrated Extract",
      url:  "https://amzn.to/4uJGhG3" },

    { keys: ["red panax ginseng","jung kwan jang extra strength","ginseng extra strength"],
      name: "JUNG KWAN JANG Korean Red Panax Ginseng Extra Strength",
      url:  "https://amzn.to/3QTrBGz" },

    { keys: ["ahcc","immpower"],
      name: "American BioSciences ImmPower AHCC 6-Pack",
      url:  "https://amzn.to/4uRSaKm" },

    { keys: ["curamed","terry naturally"],
      name: "Terry Naturally CuraMed 750mg 120 Softgels 3-Pack",
      url:  "https://amzn.to/3Szuw7O" },

    // SUPPLEMENTS — TRUSTED TIER
    { keys: ["turmeric","garden of life turmeric"],
      name: "Garden of Life Organics Extra Strength Turmeric",
      url:  "https://amzn.to/4gg9Xaz" },

    { keys: ["ashwagandha","gaia ashwagandha"],
      name: "Gaia Herbs Ashwagandha Root 350mg",
      url:  "https://amzn.to/4xGZI5d" },

    { keys: ["elderberry syrup","elderberry","gaia elderberry"],
      name: "Gaia Herbs Black Elderberry Syrup",
      url:  "https://amzn.to/3SRwvEy" },

    { keys: ["magnesium","magnesium glycinate","doctor's best magnesium"],
      name: "Doctor's Best High Absorption Magnesium Glycinate",
      url:  "https://amzn.to/4oDV8Ax" },

    { keys: ["vitamin k2","k2 d3","vitamin k2 d3","doctor's best k2"],
      name: "Doctor's Best Natural Vitamin K2 MK-7 Plus D3",
      url:  "https://amzn.to/4xEiL03" },

    { keys: ["quick defense","gaia quick defense"],
      name: "Gaia Herbs Quick Defense Fast-Acting",
      url:  "https://amzn.to/43NXcwf" },

    { keys: ["apple cider vinegar","bragg","bragg acv","acv"],
      name: "Bragg Organic Raw Apple Cider Vinegar",
      url:  "https://amzn.to/4uQyyX4" },

    { keys: ["ginger root","nature's way ginger","ginger capsules"],
      name: "Nature's Way Premium Ginger Root 550mg",
      url:  "https://amzn.to/43Ia3jH" },

    { keys: ["peppermint herbal tea","bigelow peppermint herbal"],
      name: "Bigelow Tea Peppermint Herbal Tea",
      url:  "https://amzn.to/3SaCX9H" },

    { keys: ["soursop","soursop bitters"],
      name: "Soursop Bitters Liquid Digestive Support",
      url:  "https://amzn.to/4vVRDYz" },

    // SKINCARE
    { keys: ["54 thrones","african beauty butter"],
      name: "54 Thrones African Beauty Butter Collection",
      url:  "https://amzn.to/43IvxwP" },

    { keys: ["trilogy rosehip","trilogy certified"],
      name: "Trilogy Certified Organic Rosehip Oil",
      url:  "https://amzn.to/4uJu4RN" },

    { keys: ["cliganic rosehip","cliganic"],
      name: "Cliganic Organic Rosehip Seed Oil",
      url:  "https://amzn.to/4eAQHBQ" },

    { keys: ["shea butter","raw shea butter","unrefined shea"],
      name: "Raw Shea Butter 100% Pure Unrefined African",
      url:  "https://amzn.to/4oOVMeD" },

    { keys: ["castor oil","sky organics castor"],
      name: "Sky Organics Castor Oil Organic",
      url:  "https://amzn.to/4oCOPgN" },

    { keys: ["jojoba oil","leven rose jojoba"],
      name: "Leven Rose Jojoba Oil Organic",
      url:  "https://amzn.to/4uRMAY9" },

    { keys: ["ra cosmetics","ra shea butter","african shea ghana"],
      name: "RA Cosmetics African Shea Butter Raw Unrefined from Ghana",
      url:  "https://amzn.to/4uSnKYr" },

    { keys: ["good molecules rosehip","good molecules"],
      name: "Good Molecules Pure Cold-Pressed Rosehip Seed Oil",
      url:  "https://amzn.to/4xEFVmZ" },

    { keys: ["cocoa butter","palmer","palmer's cocoa"],
      name: "Palmer's Cocoa Butter Formula Daily Skin Therapy",
      url:  "https://amzn.to/4ejRCIa" },

    { keys: ["purely peppermint","bigelow purely peppermint"],
      name: "Bigelow Tea Purely Peppermint Tea",
      url:  "https://amzn.to/4xG6iJg" },
  ];

  // ── ALL 10 CLICKBANK PRODUCTS ──────────────────────────────────────────
  var CLICKBANK = [
    {
      keys: ["bloating","digestion","gut health","stomach","constipation","gas","acv","apple cider vinegar"],
      label: "GutVita",
      url:   "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=acv-morning-routine",
    },
    {
      keys: ["leaky gut","gut bacteria","ibs","bowel","microbiome","vivogut"],
      label: "VivoGut",
      url:   "https://hop.clickbank.net/?affiliate=dovieheals&vendor=vivogut&pid=v1&tid=vivogut",
    },
    {
      keys: ["immune","sick","cold","flu","virus","infection","immunity","elderberry"],
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
      keys: ["blood sugar","glucose","diabetes","a1c","insulin","sugar cravings","gluco"],
      label: "Gluco6",
      url:   "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gluco6&pid=vsl&tid=gluco6",
    },
    {
      keys: ["energy crash","sugar crash","carb cravings","afternoon slump","sweet tooth","sugar defender"],
      label: "Sugar Defender",
      url:   "https://hop.clickbank.net/?custom=1&affiliate=dovieheals&vendor=sugardef&pid=new",
    },
    {
      keys: ["prediabetes","metabolic","belly fat","blood glucose","insuleaf"],
      label: "InsuLeaf",
      url:   "https://buyinsuleaf.com/en/funnel/main/?affiliate=dovieheals",
    },
    {
      keys: ["sleep","insomnia","restless","can't sleep","wake up","tired","exhausted","magnesium"],
      label: "Sleep Revive",
      url:   "https://hop.clickbank.net/?vendor=revive&affiliate=dovieheals&lid=1&tid=natural-sleep-remedy",
    },
    {
      keys: ["skin","wrinkles","sagging","collagen","dark spots","aging skin","stress","cortisol","hormones","ashwagandha"],
      label: "Synevra UltraLift",
      url:   "https://hop.clickbank.net/?affiliate=dovieheals&vendor=synevra&pid=v1&tid=synevra",
    },
  ];

  // ── BUILD AMAZON BUTTON ────────────────────────────────────────────────
  function makeAmazonButton(name, url) {
    return (
      '<br/><a href="' + url + '" target="_blank" rel="sponsored noopener noreferrer" ' +
      'style="display:inline-block;background:#8B3A3A;color:#F5ECD7;' +
      'padding:10px 18px;border-radius:8px;text-decoration:none;' +
      'font-family:Lora,serif;font-size:13px;font-weight:600;' +
      'margin-top:8px;margin-bottom:4px;">' +
      '&#128722; ' + name + ' &rarr; Buy on Amazon</a><br/>'
    );
  }

  // ── BUILD CLICKBANK BUTTON ─────────────────────────────────────────────
  function makeClickbankButton(label, url) {
    return (
      '<br/><a href="' + url + '" target="_blank" rel="sponsored noopener noreferrer" ' +
      'style="display:inline-block;background:#C8922A;color:#fff;' +
      'padding:10px 18px;border-radius:8px;text-decoration:none;' +
      'font-family:Lora,serif;font-size:13px;font-weight:600;' +
      'margin-top:4px;margin-bottom:8px;">' +
      '&#127807; ' + label + ' &rarr; Learn More</a><br/>'
    );
  }

  // ── MATCH PRODUCT KEYS AGAINST MESSAGE ────────────────────────────────
  function matchProduct(lower, list) {
    for (var i = 0; i < list.length; i++) {
      var p = list[i];
      var keyArr = p.keys || [];
      for (var j = 0; j < keyArr.length; j++) {
        if (lower.indexOf(keyArr[j]) !== -1) return p;
      }
    }
    return null;
  }

  // ── WIRE SUGGESTION PILLS ─────────────────────────────────────────────
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

  // ── PATCH formatReply ─────────────────────────────────────────────────
  function patchFormatReply() {
    if (typeof window.__grannyFormatReplyPatched !== "undefined") return;
    window.__grannyFormatReplyPatched = true;

    var originalFormatReply = window.formatReply;

    window.formatReply = function (text) {
      var html = originalFormatReply ? originalFormatReply(text) : text;

      // 1. Replace BUY_LINK: placeholders with Amazon buttons
      html = html.replace(
        /BUY_LINK:\\s*(https?:\\/\\/amzn\\.to\\/[A-Za-z0-9]+)/gi,
        function (_, url) {
          // Match url back to product name
          var matched = null;
          for (var i = 0; i < PRODUCTS.length; i++) {
            if (PRODUCTS[i].url === url) { matched = PRODUCTS[i]; break; }
          }
          var name = matched ? matched.name : "Granny Dovie's Pick";
          return makeAmazonButton(name, url);
        }
      );

      // 2. BUY_LINK: with keyword text fallback
      html = html.replace(
        /BUY_LINK:\\s*([^\\n<]{3,80})/gi,
        function (match, productText) {
          if (productText.indexOf("amzn.to") !== -1) return match;
          var lower = productText.toLowerCase().trim();
          var p = matchProduct(lower, PRODUCTS);
          if (p) return makeAmazonButton(p.name, p.url);
          return "";
        }
      );

      // 3. Inject Clickbank button based on full reply content
      var lowerHtml = html.toLowerCase();
      var cb = matchProduct(lowerHtml, CLICKBANK);
      if (cb) {
        html += makeClickbankButton(cb.label, cb.url);
      }

      // 4. Bold and color Step headings
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
