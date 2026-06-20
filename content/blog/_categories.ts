import type { BlogCategory } from "@/lib/blog"

export const CATEGORIES: Record<
  BlogCategory,
  { label: string; description: string; slug: string; emoji: string }
> = {
  "gut-health": {
    label: "Gut Health",
    description:
      "Old-fashioned remedies for digestion, bloating, and a happy belly.",
    slug: "gut-health",
    emoji: "🌿",
  },
  "joints-inflammation": {
    label: "Joints & Inflammation",
    description:
      "God's remedies for achy joints, stiffness, and natural pain relief.",
    slug: "joints-inflammation",
    emoji: "🫚",
  },
  immunity: {
    label: "Immunity",
    description:
      "Herbs and remedies to keep your body strong all year long.",
    slug: "immunity",
    emoji: "🛡️",
  },
  "stress-sleep": {
    label: "Stress & Sleep",
    description:
      "Natural ways to calm your mind and get the rest your body needs.",
    slug: "stress-sleep",
    emoji: "🌙",
  },
  "natural-skincare": {
    label: "Natural Skincare",
    description:
      "Simple kitchen ingredients that keep your skin soft and glowing.",
    slug: "natural-skincare",
    emoji: "✨",
  },
  "faith-healing": {
    label: "Faith & Healing",
    description:
      "Scripture, prayer, and the healing wisdom God planted in the earth.",
    slug: "faith-healing",
    emoji: "✝️",
  },
}
