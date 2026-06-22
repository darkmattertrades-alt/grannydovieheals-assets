import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GrannyQuiz } from "@/components/quiz/quiz-sections"

export const metadata: Metadata = {
  title: "Find Your Remedy — Granny Dovie's Natural Healing Quiz",
  description:
    "Answer a few questions and Granny Dovie will find the exact natural remedy God planted just for what is troubling you, honey.",
}

export default function QuizPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <GrannyQuiz />
      </main>
      <SiteFooter />
    </>
  )
}
