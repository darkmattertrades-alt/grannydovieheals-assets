"use client";

export default function GrannyChat() {
  return (
    <>
      {/* Chat Label */}
      <span
        id="chat-label"
        style={{
          position: "fixed",
          bottom: "92px",
          right: "20px",
          color: "#F5ECD7",
          background: "#3B5E3A",
          padding: "6px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        Chat with Granny Dovie 🌿
      </span>

      {/* Chat Bubble */}
      <button
        id="chat-bubble"
        aria-label="Chat with Granny Dovie"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          height: "60px",
          width: "60px",
          background: "#3B5E3A",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          zIndex: 9999,
          fontSize: "26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(60,26,14,0.3)",
        }}
      >
        🌿
      </button>

      {/* Chat Window */}
      <div
        id="chat-window"
        style={{
          position: "fixed",
          bottom: "92px",
          right: "20px",
          width: "min(380px, calc(100vw - 2.5rem))",
          height: "min(580px, calc(100vh - 7rem))",
          background: "#F5ECD7",
          border: "2px solid #C8922A",
          borderRadius: "12px",
          boxShadow: "0 12px 40px rgba(60,26,14,0.35)",
          zIndex: 9998,
          display: "none",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#3B5E3A",
            padding: "14px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "#F5ECD7",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              Chat with Granny Dovie 🌿
            </div>
            <div style={{ color: "#C8922A", fontSize: "11px", marginTop: "2px" }}>
              Real Remedies. Old Ways. God&apos;s Design.
            </div>
          </div>
          <button
            id="chat-close"
            style={{
              background: "none",
              border: "none",
              color: "#F5ECD7",
              fontSize: "20px",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        {/* Suggestion Pills */}
        <div
          id="chat-suggestions"
          style={{
            padding: "8px 10px 4px",
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            flexShrink: 0,
            borderBottom: "1px solid #C8922A22",
          }}
        >
          {[
            "What helps with a sore throat?",
            "Natural remedy for better sleep?",
            "How do I make elderberry syrup?",
            "What helps with anxiety naturally?",
            "Natural remedy for gut health?",
            "Show me step by step 🌿",
          ].map((q) => (
            <button
              key={q}
              className="chat-suggestion-pill"
              data-question={q}
              style={{
                background: "#3B5E3A",
                color: "#F5ECD7",
                border: "none",
                borderRadius: "14px",
                padding: "4px 10px",
                fontSize: "11px",
                cursor: "pointer",
                fontFamily: "var(--font-lora), serif",
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Step-by-step preview card */}
        <div
          id="chat-step-card"
          style={{
            margin: "6px 10px",
            background: "#fff8ee",
            border: "1px solid #C8922A55",
            borderRadius: "8px",
            padding: "7px 10px",
            fontSize: "11px",
            color: "#3B5E3A",
            fontFamily: "var(--font-lora), serif",
            flexShrink: 0,
          }}
        >
          <strong style={{ fontSize: "11px" }}>Example — Step by Step Response</strong>
          <div style={{ marginTop: "4px", lineHeight: "1.6" }}>
            <span style={{ fontWeight: 700 }}>Step 1 —</span> Bring 2 cups of water to a boil.<br />
            <span style={{ fontWeight: 700 }}>Step 2 —</span> Add 1 tbsp dried elderberries.<br />
            <span style={{ fontWeight: 700 }}>Step 3 —</span> Simmer 15 min, strain &amp; add honey.
          </div>
        </div>

        {/* Messages */}
        <div
          id="chat-messages"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "10px 14px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        />

        {/* Input Area */}
        <div
          style={{
            padding: "10px 12px",
            borderTop: "1px solid #C8922A",
            display: "flex",
            gap: "8px",
            flexShrink: 0,
            background: "#F5ECD7",
          }}
        >
          <input
            id="chat-input"
            placeholder="Ask Granny Dovie anything..."
            aria-label="Ask Granny Dovie anything"
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #C8922A",
              background: "#F5ECD7",
              fontFamily: "var(--font-lora), serif",
              fontSize: "13px",
              outline: "none",
            }}
          />
          <button
            id="chat-send"
            style={{
              background: "#8B3A3A",
              color: "#F5ECD7",
              border: "none",
              borderRadius: "8px",
              padding: "8px 14px",
              cursor: "pointer",
              fontFamily: "var(--font-lora), serif",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            Send 🌿
          </button>
        </div>
      </div>
    </>
  );
}
