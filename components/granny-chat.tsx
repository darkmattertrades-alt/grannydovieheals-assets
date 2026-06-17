"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"

const OPENING_MESSAGE =
  "Well hello there, honey. 🌿 What is troubling you today? Tell Granny Dovie everything."

function getText(parts: { type: string; text?: string }[]) {
  return parts
    .filter((p) => p.type === "text")
    .map((p) => (p as { text: string }).text)
    .join("")
}

export function GrannyChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const isBusy = status === "streaming" || status === "submitted"

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isBusy, open])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = input.trim()
    if (!text || isBusy) return
    sendMessage({ text })
    setInput("")
  }

  return (
    <>
      {/* Floating bubble */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat with Granny Dovie" : "Chat with Granny Dovie"}
        className="fixed bottom-5 right-5 flex h-[60px] w-[60px] items-center justify-center rounded-full text-2xl shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        style={{ backgroundColor: "#3B5E3A", zIndex: 9999 }}
      >
        {open ? <span className="text-parchment">×</span> : <span aria-hidden>🌿</span>}
      </button>

      {/* Chat window */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Granny Dovie"
          className="fixed bottom-[80px] right-5 flex flex-col overflow-hidden"
          style={{
            width: "min(380px, calc(100vw - 2.5rem))",
            height: "min(520px, calc(100vh - 7rem))",
            backgroundColor: "#F5ECD7",
            border: "2px solid #C8922A",
            borderRadius: "12px",
            boxShadow: "0 12px 40px rgba(60, 26, 14, 0.35)",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div
            className="flex items-start justify-between px-4 py-3"
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
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="ml-2 shrink-0 rounded p-1 text-xl leading-none transition-opacity hover:opacity-70 focus:outline-none"
              style={{ color: "#F5ECD7" }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
            {/* Opening message */}
            <GrannyBubble text={OPENING_MESSAGE} />

            {messages.map((m) =>
              m.role === "assistant" ? (
                <GrannyBubble key={m.id} text={getText(m.parts)} />
              ) : (
                <VisitorBubble key={m.id} text={getText(m.parts)} />
              ),
            )}

            {isBusy && (
              <p className="px-2 font-body text-sm italic" style={{ color: "#5C4A1E" }}>
                Granny Dovie is thinking... 🌿
              </p>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3"
            style={{ backgroundColor: "#F5ECD7", borderTop: "1px solid #C8922A" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Granny Dovie anything..."
              aria-label="Ask Granny Dovie anything"
              className="min-w-0 flex-1 rounded-md border px-3 py-2 font-body text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2"
              style={{ backgroundColor: "#F5ECD7", borderColor: "#C8922A" }}
            />
            <button
              type="submit"
              disabled={isBusy}
              className="shrink-0 rounded-md px-4 py-2 font-body text-sm font-semibold text-parchment transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: "#8B3A3A" }}
            >
              Send 🌿
            </button>
          </form>
        </div>
      )}
    </>
  )
}

function GrannyBubble({ text }: { text: string }) {
  if (!text) return null
  return (
    <div className="flex items-start gap-2">
      <span
        aria-hidden
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm"
        style={{ backgroundColor: "#3B5E3A" }}
      >
        🌿
      </span>
      <div
        className="max-w-[80%] whitespace-pre-wrap rounded-xl px-3 py-2 font-body text-sm leading-relaxed"
        style={{ backgroundColor: "#3B5E3A", color: "#F5ECD7", borderRadius: "12px" }}
      >
        {text}
      </div>
    </div>
  )
}

function VisitorBubble({ text }: { text: string }) {
  if (!text) return null
  return (
    <div className="flex justify-end">
      <div
        className="max-w-[80%] whitespace-pre-wrap rounded-xl px-3 py-2 font-body text-sm leading-relaxed"
        style={{ backgroundColor: "#C8922A", color: "#F5ECD7", borderRadius: "12px" }}
      >
        {text}
      </div>
    </div>
  )
}
