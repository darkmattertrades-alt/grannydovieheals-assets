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

      {/* Chat window — no display property; JS controls show/hide */}
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
    { keys: ["milk thistle","liver"],                   name: "Dose Organic Milk Thistle Liver Cleanse",          url: "https://amzn.to/43MUCXw" },
    { keys: ["black seed oil","black seed"],            name: "Resilia Black Seed Oil + Oregano Capsules",        url: "https://amzn.to/3SCbdL4" },
    { keys: ["korean red ginseng","ginseng extract"],   name: "JUNG KWAN JANG Korean Red Ginseng Extract",        url: "https://amzn.to/4uJGhG3" },
    { keys: ["panax ginseng","extra strength ginseng"], name: "JUNG KWAN JANG Korean Red Panax Ginseng",          url: "https://amzn.to/3QTrBGz" },
    { keys: ["ahcc","immpower"],                        name: "American BioSciences ImmPower AHCC 6-Pack",        url: "https://amzn.to/4uRSaKm" },
    { keys: ["curamed","curcumin"],                     name: "Terry Naturally CuraMed 750mg 3-Pack",             url: "https://amzn.to/3Szuw7O" },
    { keys: ["turmeric"],                               name: "Garden of Life Organics Extra Strength Turmeric",  url: "https://amzn.to/4gg9Xaz" },
    { keys: ["ashwagandha"],                            name: "Gaia Herbs Ashwagandha Root 350mg",                url: "https://amzn.to/4xGZI5d" },
    { keys: ["elderberry syrup","elderberry"],          name: "Gaia Herbs Black Elderberry Syrup",                url: "https://amzn.to/3SRwvEy" },
    { keys: ["magnesium"],                              name: "Doctor's Best High Absorption Magnesium",          url: "https://amzn.to/4oDV8Ax" },
    { keys: ["vitamin k2","k2","d3"],                   name: "Doctor's Best Natural Vitamin K2 MK-7 Plus D3",    url: "https://amzn.to/4xEiL03" },
    { keys: ["quick defense","echinacea"],              name: "Gaia Herbs Quick Defense Fast-Acting",             url: "https://amzn.to/43NXcwf" },
    { keys: ["apple cider vinegar","bragg"],            name: "Bragg Organic Raw Apple Cider Vinegar",            url: "https://amzn.to/4uQyyX4" },
    { keys: ["ginger"],                                 name: "Nature's Way Premium Ginger Root 550mg",           url: "https://amzn.to/43Ia3jH" },
    { keys: ["peppermint spearmint"],                   name: "Bigelow Tea Peppermint Herbal Tea",                url: "https://amzn.to/3SaCX9H" },
    { keys: ["peppermint"],                             name: "Bigelow Tea Purely Peppermint Tea",                url: "https://amzn.to/4xG6iJg" },
    { keys: ["54 thrones","african beauty butter"],     name: "54 Thrones African Beauty Butter Collection",      url: "https://amzn.to/43IvxwP" },
    { keys: ["trilogy","rosehip oil"],                  name: "Trilogy Certified Organic Rosehip Oil",            url: "https://amzn.to/4uJu4RN" },
    { keys: ["cliganic"],                               name: "Cliganic Organic Rosehip Seed Oil",                url: "https://amzn.to/4eAQHBQ" },
    { keys: ["shea butter"],                            name: "Raw Shea Butter 100% Pure Unrefined African",      url: "https://amzn.to/4oOVMeD" },
    { keys: ["castor oil"],                             name: "Sky Organics Castor Oil Organic",                  url: "https://amzn.to/4oCOPgN" },
    { keys: ["jojoba"],                                 name: "Leven Rose Jojoba Oil Organic",                    url: "https://amzn.to/4uRMAY9" },
    { keys: ["ra cosmetics"],                           name: "RA Cosmetics African Shea Butter Raw Ghana",       url: "https://amzn.to/4uSnKYr" },
    { keys: ["good molecules"],                         name: "Good Molecules Pure Cold-Pressed Rosehip Oil",     url: "https://amzn.to/4xEFVmZ" },
    { keys: ["palmer","cocoa butter"],                  name: "Palmer's Cocoa Butter Formula Daily Skin Therapy", url: "https://amzn.to/4ejRCIa" },
  ];

  var CLICKBANK = [
    { keys: ["bloating","digestion","gut health","stomach","constipation","gas","apple cider vinegar","bragg","acv"], label: "GutVita",          url: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gutvita&vsl=1&tid=acv-morning-routine" },
    { keys: ["leaky gut","gut bacteria","ibs","irritable bowel","microbiome"],                                        label: "VivoGut",          url: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=vivogut&pid=v1&tid=vivogut" },
    { keys: ["immune","immunity","sick","cold","flu","virus","infection","elderberry"],                                label: "VisiFlora",        url: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=visiflora&pid=v1&tid=elderberry-syrup" },
    { keys: ["joint pain","knee pain","arthritis","stiffness","inflammation","joint","turmeric"],                     label: "Balmorex",         url: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=balmorex&pid=v1&tid=turmeric-joint-pain" },
    { keys: ["nerve pain","neuropathy","tingling","numbness","burning feet","nerve"],                                 label: "Nerve Armor",      url: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=nervearmor&w=main" },
    { keys: ["blood sugar","glucose","diabetes","a1c","insulin","sugar craving"],                                     label: "Gluco6",           url: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=gluco6&pid=vsl&tid=gluco6" },
    { keys: ["energy crash","sugar crash","carb craving","afternoon slump","sweet tooth"],                            label: "Sugar Defender",   url: "https://hop.clickbank.net/?custom=1&affiliate=dovieheals&vendor=sugardef&pid=new" },
    { keys: ["prediabetes","metabolic","belly fat","blood glucose","insuleaf"],                                       label: "InsuLeaf",         url: "https://buyinsuleaf.com/en/funnel/main/?affiliate=dovieheals" },
    { keys: ["sleep","insomnia","restless","can't sleep","wake up","exhausted","magnesium"],                          label: "Sleep Revive",     url: "https://hop.clickbank.net/?vendor=revive&affiliate=dovieheals&lid=1&tid=natural-sleep-remedy" },
    { keys: ["skin","wrinkles","sagging","collagen","dark spots","aging skin","stress","cortisol","hormones","ashwagandha"], label: "Synevra UltraLift", url: "https://hop.clickbank.net/?affiliate=dovieheals&vendor=synevra&pid=v1&tid=synevra" },
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

  function matchClickbank(lower) {
    for (var i = 0; i < CLICKBANK.length; i++) {
      var p = CLICKBANK[i];
      for (var j = 0; j < p.keys.length; j++) {
        if (lower.indexOf(p.keys[j]) !== -1) return p;
      }
    }
    return null;
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

      html = html.replace(
        /BUY_LINK:\s*(https?:\/\/amzn\.to\/([A-Za-z0-9]+)[^\s<]*)/gi,
        function (_, url, slug) {
          var nameMap = {
            "43MUCXw": "Dose Organic Milk Thistle Liver Cleanse",
            "3SCbdL4": "Resilia Black Seed Oil + Oregano Capsules",
            "4uJGhG3": "JUNG KWAN JANG Korean Red Ginseng Extract",
            "3QTrBGz": "JUNG KWAN JANG Korean Red Panax Ginseng",
            "4uRSaKm": "American BioSciences ImmPower AHCC 6-Pack",
            "3Szuw7O": "Terry Naturally CuraMed 750mg 3-Pack",
            "4gg9Xaz": "Garden of Life Organics Extra Strength Turmeric",
            "4xGZI5d": "Gaia Herbs Ashwagandha Root 350mg",
            "3SRwvEy": "Gaia Herbs Black Elderberry Syrup",
            "4oDV8Ax": "Doctor's Best High Absorption Magnesium",
            "4xEiL03": "Doctor's Best Natural Vitamin K2 MK-7 Plus D3",
            "43NXcwf": "Gaia Herbs Quick Defense Fast-Acting",
            "4uQyyX4": "Bragg Organic Raw Apple Cider Vinegar",
            "43Ia3jH": "Nature's Way Premium Ginger Root 550mg",
            "3SaCX9H": "Bigelow Tea Peppermint Herbal Tea",
            "4xG6iJg": "Bigelow Tea Purely Peppermint Tea",
            "43IvxwP": "54 Thrones African Beauty Butter Collection",
            "4uJu4RN": "Trilogy Certified Organic Rosehip Oil",
            "4eAQHBQ": "Cliganic Organic Rosehip Seed Oil",
            "4oOVMeD": "Raw Shea Butter 100% Pure Unrefined African",
            "4oCOPgN": "Sky Organics Castor Oil Organic",
            "4uRMAY9": "Leven Rose Jojoba Oil Organic",
            "4uSnKYr": "RA Cosmetics African Shea Butter Raw Ghana",
            "4xEFVmZ": "Good Molecules Pure Cold-Pressed Rosehip Oil",
            "4ejRCIa": "Palmer's Cocoa Butter Formula Daily Skin Therapy",
          };
          var name = nameMap[slug] || "Granny Dovie's Pick";
          return makeButton(name, url);
        }
      );

      html = html.replace(
        /BUY_LINK:\s*([^\n<]{3,80})/gi,
        function (match, productText) {
          if (productText.indexOf("amzn.to") !== -1) return match;
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

      // Fixed step regex — stops at <br/> not at any <
      html = html.replace(
        /Step\s+(\d+)\s*[\u2014\-]+\s*([^<]*?)(?=<br\/>|$)/gi,
        function (match, num, stepText) {
          if (!stepText.trim()) return match;
          return '<span style="display:block;margin-top:6px;margin-bottom:2px;font-weight:700;color:#3B5E3A;">Step ' + num + ' \u2014 ' + stepText.trim() + '</span>';
        }
      );

      // ClickBank button — strip HTML tags before keyword matching
      var plainText = html.replace(/<[^>]+>/g, ' ').toLowerCase();
      var cb = matchClickbank(plainText);
      if (cb) {
        html += makeClickbankButton(cb.label, cb.url);
      }

      return html;
    };
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
          grannyMsg.innerHTML = window.formatReply ? window.formatReply(data.reply) : data.reply;
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

  wireSuggestionPills();
  patchFormatReply();
  init();

})();
          `,
        }}
      />
    </>
  )
}
