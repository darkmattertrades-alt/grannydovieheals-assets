export function BotanicalDivider({ label }: { label?: string }) {
  return (
    <div className="botanical-divider my-8" aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2c0 6-4 8-4 12a4 4 0 0 0 8 0c0-4-4-6-4-12Z" strokeLinejoin="round" />
        <path d="M12 22V10" strokeLinecap="round" />
      </svg>
      {label ? (
        <span className="font-body text-base text-gold not-sr-only">{label}</span>
      ) : null}
    </div>
  )
}
