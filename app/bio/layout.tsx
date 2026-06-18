import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Granny Dovie Heals — Real Remedies",
  description:
    "Real Remedies. Old Ways. God's Design. Ancient folk healing rooted in Scripture.",
}

export default function BioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
