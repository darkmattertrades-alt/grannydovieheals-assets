type GrannyQuoteProps = {
  quote: string
  context?: string
}

export function GrannyQuote({ quote, context }: GrannyQuoteProps) {
  return (
    <aside className="my-8 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5">
      <div className="mb-2 text-amber-500 text-2xl">🌿</div>
      <blockquote className="font-serif text-lg leading-relaxed text-amber-900 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {context && (
        <p className="mt-3 text-sm text-amber-700 font-medium">
          — {context}
        </p>
      )}
    </aside>
  )
}
