"use client"

import { useState } from "react"
import { OPT_IN_ENDPOINT } from "@/lib/site"

export function OptInForm({ compact = false }: { compact?: boolean }) {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  )

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!firstName.trim() || !email.trim()) return
    setStatus("loading")

    try {
      const formData = new FormData()
      formData.append("First Name", firstName)
      formData.append("Email Address", email)

      await fetch(OPT_IN_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })

      setStatus("success")
      setFirstName("")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border-2 border-gold/50 bg-parchment/80 p-6 text-center">
        <p className="font-script text-2xl text-cta">
          Your guide is on its way, honey! 🌿
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-col gap-3 ${compact ? "" : "sm:flex-row sm:items-end"}`}
    >
      <div className="flex-1">
        <label
          htmlFor="firstName"
          className="mb-1 block font-body text-sm font-medium text-heading"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          placeholder="Your first name"
          className="w-full rounded-md border border-gold/50 bg-parchment px-4 py-3 font-body text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
        />
      </div>
      <div className="flex-1">
        <label
          htmlFor="email"
          className="mb-1 block font-body text-sm font-medium text-heading"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          className="w-full rounded-md border border-gold/50 bg-parchment px-4 py-3 font-body text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-md bg-cta px-6 py-3 font-serif text-base font-semibold text-parchment shadow-md transition-all hover:bg-cta/90 disabled:opacity-60 sm:shrink-0"
      >
        {status === "loading" ? "Sending…" : "Send My Free Guide"}
      </button>
      {status === "error" && (
        <p className="font-body text-sm text-cta sm:w-full">
          Something went awry. Please try again, dear.
        </p>
      )}
    </form>
  )
}
