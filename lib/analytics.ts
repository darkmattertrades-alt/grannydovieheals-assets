export function trackPrelanderClick(slug: string, angle: string) {
  if (typeof window === "undefined") return
  if (!window.gtag) return

  window.gtag("event", "prelander_click", {
    event_category: "affiliate",
    event_label: slug,
    prelander_angle: angle,
    value: 1,
  })
}
