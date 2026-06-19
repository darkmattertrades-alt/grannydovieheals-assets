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
        style={{
          position: "fixed",
          bottom: "92px",
          right: "20px",
          width: "min(380px, calc(100vw - 2.5rem))",
          height: "min(560px, calc(100vh - 7rem))",
          backgroundColor: "#F5ECD7",
          border: "2px solid #C8922A",
          borderRadius: "12px",
          boxShadow: "0 12px 40px rgba(60, 26, 14, 0.35)",
          zIndex: 9998,
          display: "none",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#3B5E3A",
            padding: "12px 16px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div>
            <h2
              className="font-serif"
              style={{ color: "#F5ECD7", fontSize: "17px", fontWeight: 700, lineHeight: 1.2, margin: 0 }}
            >
              Chat with Granny Dovie 🌿
            </h2>
            <p
              className="font-body"
              style={{ color: "#C8922A", fontSize: "11px", margin: 0, marginTop: "2px" }}
            >
              Real Remedies. Old Ways. God&apos;s Design.
            </p>
          </div>
          <button
            id="chat-close"
            type="button"
            aria-label="Close chat"
            style={{
              color: "#F5ECD7",
              cursor: "pointer",
              background: "none",
              border: "none",
              fontSize: "22px",
              lineHeight: 1,
              padding: "0 0 0 8px",
              marginTop: "-2px",
            }}
          >
            ×
          </button>
        </div>

        {/* Suggestion pills */}
        <div
          id="chat-suggestions"
          style={{
            backgroundColor: "#fdf6e3",
            borderBottom: "1px solid #C8922A",
            padding: "8px 10px",
            flexShrink: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
          }}
        >
          <p
            className="font-body"
            style={{
              fontSize: "10px",
              color: "#8B3A3A",
              fontStyle: "italic",
              width: "100%",
              margin: "0 0 4px 0",
            }}
          >
            Ask Granny something, honey 🌿
          </p>
          {[
            { label: "🫐 Make elderberry syrup?", question: "How do I make elderberry syrup from scratch?" },
            { label: "🦴 Help with joint pain", question: "What is a good natural remedy for joint pain?" },
            { label: "😴 Help me sleep naturally", question: "What are some natural remedies to help me sleep?" },
            { label: "🤒 Cold coming on", question: "I feel a cold coming on, what should I do?" },
            { label: "🧴 Natural skin remedies", question: "What natural remedies are good for dry or aging skin?" },
            { label: "🪜 Step by step please", question: "Can you walk me through how to make a natural home remedy step by step?" },
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
                padding: "4px 9px",
                fontSize: "10px",
                color: "#3B5E3A",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Step-by-step preview card */}
        <div
          id="chat-step-card"
          style={{
            margin: "8px 10px",
            backgroundColor: "#fff8ee",
            border: "1px dashed #C8922A",
            borderRadius: "8px",
            padding: "8px 10px",
            flexShrink: 0,
          }}
        >
          <p
            className="font-body"
            style={{ fontSize: "10px", color: "#8B3A3A", fontWeight: 700, margin: "0 0 4px 0" }}
          >
            🪜 Step by Step Example
          </p>
          <p
            className="font-body"
            style={{ fontSize: "10px", color: "#5a3e2b", lineHeight: 1.6, margin: 0 }}
          >
            <span style={{ color: "#3B5E3A", fontWeight: 700 }}>Step 1</span> — Gather dried elderberries and water
            <br />
            <span style={{ color: "#3B5E3A", fontWeight: 700 }}>Step 2</span> — Simmer with cinnamon 45 minutes
            <br />
            <span style={{ color: "#3B5E3A", fontWeight: 700 }}>Step 3</span> — Strain and stir in raw honey
            <br />
            <span style={{ fontSize: "9px", color: "#8B3A3A", fontStyle: "italic" }}>
              Ask Granny how to make anything 🌿
            </span>
          </p>
        </div>

        {/* Messages area */}
        <div
          id="chat-messages"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "10px 12px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        />

        {/* Input area */}
        <div
          style={{
            borderTop: "1px solid #C8922A",
            backgroundColor: "#F5ECD7",
            padding: "10px 12px",
            display: "flex",
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <input
            id="chat-input"
            type="text"
            placeholder="Ask Granny Dovie anything..."
            aria-label="Ask Granny Dovie anything"
            className="font-body"
            style={{
              flex: 1,
              minWidth: 0,
              borderRadius: "6px",
              border: "1px solid #C8922A",
              backgroundColor: "#F5ECD7",
              padding: "8px 12px",
              fontSize: "13px",
              color: "#2c1a0e",
              outline: "none",
            }}
          />
          <button
            id="chat-send"
            type="button"
            className="font-body"
            style={{
              backgroundColor: "#8B3A3A",
              color: "#F5ECD7",
              border: "none",
              borderRadius: "6px",
              padding: "8px 14px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            Send 🌿
          </button>
        </div>
      </div>
    </>
  )
}
