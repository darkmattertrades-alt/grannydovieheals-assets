type ScriptureBlockProps = {
  verse: string
  reference: string
}

export function ScriptureBlock({ verse, reference }: ScriptureBlockProps) {
  return (
    <div className="my-8 rounded-2xl border-l-4 border-green-700 bg-green-50 px-6 py-5">
      <div className="mb-2 text-green-700 text-xl">✝️</div>
      <blockquote className="font-serif text-base leading-relaxed text-green-900 italic">
        &ldquo;{verse}&rdquo;
      </blockquote>
      <p className="mt-3 text-sm font-semibold text-green-700">
        — {reference}
      </p>
    </div>
  )
}
