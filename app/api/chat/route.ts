import { createGroq } from "@ai-sdk/groq"
import { generateText } from "ai"

export const maxDuration = 30

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
})

const PRODUCT_MAP: Record<string, { name: string; url: string }> = {
  // ── PREMIUM SUPPLEMENTS ──
  "43MUCXw": { name: "Dose Organic Milk Thistle Liver Cleanse",        url: "https://amzn.to/43MUCXw" },
  "3SCbdL4": { name: "Resilia Black Seed Oil + Oregano Capsules",      url: "https://amzn.to/3SCbdL4" },
  "4uJGhG3": { name: "JUNG KWAN JANG Korean Red Ginseng Extract 120g", url: "https://amzn.to/4uJGhG3" },
  "3QTrBGz": { name: "JUNG KWAN JANG Korean Red Panax Ginseng",        url: "https://amzn.to/3QTrBGz" },
  "4uRSaKm": { name: "American BioSciences ImmPower AHCC 6-Pack",      url: "https://amzn.to/4uRSaKm" },
  "3Szuw7O": { name: "Terry Naturally CuraMed 750mg 3-Pack",           url: "https://amzn.to/3Szuw7O" },
  // ── SUPPLEMENTS ──
  "4gg9Xaz": { name: "Garden of Life Organics Extra Strength Turmeric", url: "https://amzn.to/4gg9Xaz" },
  "4xGZI5d": { name: "Gaia Herbs Ashwagandha Root 350mg",              url: "https://amzn.to/4xGZI5d" },
  "3SRwvEy": { name: "Gaia Herbs Black Elderberry Syrup",              url: "https://amzn.to/3SRwvEy" },
  "4oDV8Ax": { name: "Doctor's Best High Absorption Magnesium",        url: "https://amzn.to/4oDV8Ax" },
  "4xEiL03": { name: "Doctor's Best Natural Vitamin K2 MK-7 Plus D3", url: "https://amzn.to/4xEiL03" },
  "43NXcwf": { name: "Gaia Herbs Quick Defense Fast-Acting",           url: "https://amzn.to/43NXcwf" },
  "4uQyyX4": { name: "Bragg Organic Raw Apple Cider Vinegar",          url: "https://amzn.to/4uQyyX4" },
  "43Ia3jH": { name: "Nature's Way Premium Ginger Root 550mg",        url: "https://amzn.to/43Ia3jH" },
  "3SaCX9H": { name: "Bigelow Tea Peppermint Herbal Tea",              url: "https://amzn.to/3SaCX9H" },
  // ── SKINCARE ──
  "43IvxwP": { name: "54 Thrones African Beauty Butter Collection",    url: "https://amzn.to/43IvxwP" },
  "4uJu4RN": { name: "Trilogy Certified Organic Rosehip Oil",          url: "https://amzn.to/4uJu4RN" },
  "4eAQHBQ": { name: "Cliganic Organic Rosehip Seed Oil",              url: "https://amzn.to/4eAQHBQ" },
  "4oOVMeD": { name: "Raw Shea Butter 100% Pure Unrefined African",    url: "https://amzn.to/4oOVMeD" },
  "4oCOPgN": { name: "Sky Organics Castor Oil Organic",                url: "https://amzn.to/4oCOPgN" },
  "4uRMAY9": { name: "Leven Rose Jojoba Oil Organic",                  url: "https://amzn.to/4uRMAY9" },
  "4uSnKYr": { name: "RA Cosmetics African Shea Butter Raw Ghana",     url: "https://amzn.to/4uSnKYr" },
  "4xEFVmZ": { name: "Good Molecules Pure Cold-Pressed Rosehip Oil",   url: "https://amzn.to/4xEFVmZ" },
  "4ejRCIa": { name: "Palmer's Cocoa Butter Formula Daily Skin Therapy", url: "https://amzn.to/4ejRCIa" },
  "4xG6iJg": { name: "Bigelow Tea Purely Peppermint Tea",              url: "https://amzn.to/4xG6iJg" },
}

const KEYWORD_MAP: { keys: string[]; slug: string }[] = [
  // ── PREMIUM SUPPLEMENTS ──
  { keys: ["milk thistle", "liver cleanse", "liver"],           slug: "43MUCXw" },
  { keys: ["black seed oil", "oregano capsules", "black seed"], slug: "3SCbdL4" },
  { keys: ["korean red ginseng", "ginseng extract"],            slug: "4uJGhG3" },
  { keys: ["panax ginseng", "extra strength ginseng"],          slug: "3QTrBGz" },
  { keys: ["ahcc", "immpower", "immune power"],                 slug: "4uRSaKm" },
  { keys: ["curamed", "curcumin", "terry naturally"],           slug: "3Szuw7O" },
  // ── SUPPLEMENTS ──
  { keys: ["turmeric"],                                         slug: "4gg9Xaz" },
  { keys: ["ashwagandha"],                                      slug: "4xGZI5d" },
  { keys: ["elderberry syrup", "elderberry"],                   slug: "3SRwvEy" },
  { keys: ["magnesium"],                                        slug: "4oDV8Ax" },
  { keys: ["vitamin k2", "k2", "d3", "vitamin d"],             slug: "4xEiL03" },
  { keys: ["quick defense", "echinacea"],                       slug: "43NXcwf" },
  { keys: ["apple cider vinegar", "bragg"],                     slug: "4uQyyX4" },
  { keys: ["ginger"],                                           slug: "43Ia3jH" },
  { keys: ["peppermint tea", "peppermint"],                     slug: "3SaCX9H" },
  // ── SKINCARE ──
  { keys: ["54 thrones", "african beauty butter", "shea butter collection"], slug: "43IvxwP" },
  { keys: ["trilogy", "rosehip oil"],                           slug: "4uJu4RN" },
  { keys: ["cliganic", "rosehip seed"],                         slug: "4eAQHBQ" },
  { keys: ["raw shea butter", "unrefined shea", "shea butter"], slug: "4oOVMeD" },
  { keys: ["castor oil"],                                       slug: "4oCOPgN" },
  { keys: ["jojoba"],                                           slug: "4uRMAY9" },
  { keys: ["ra cosmetics"],                                     slug: "4uSnKYr" },
  { keys: ["good molecules", "cold pressed rosehip"],           slug: "4xEFVmZ" },
  { keys: ["palmer", "cocoa butter"],                           slug: "4ejRCIa" },
  { keys: ["purely peppermint", "bigelow purely"],              slug: "4xG6iJg" },
]

function makeBuyButton(name: string, url: string): string {
  return (
    `<br/><a href="${url}" target="_blank" rel="noopener noreferrer" ` +
    `style="display:block;background-color:#8B3A3A;color:#f5ecd7;` +
    `text-align:center;padding:9px 14px;border-radius:6px;` +
    `text-decoration:none;font-size:13px;font-weight:600;` +
    `border:1px solid #c8922a;margin-top:10px;margin-bottom:6px;` +
    `font-family:var(--font-lora),serif;">` +
    `🛒 Buy on Amazon — ${name}</a><br/>`
  )
}

function processBuyLinks(text: string): string {
  // Handle BUY_LINK: with amzn.to short URLs
  let result = text.replace(
    /BUY_LINK:\s*(https?:\/\/amzn\.to\/([A-Za-z0-9]+)[^\s\n]*)/gi,
    (_match, url, slug) => {
      const product = PRODUCT_MAP[slug]
      if (product) return makeBuyButton(product.name, product.url)
      return makeBuyButton("Granny Dovie's Pick", url)
    }
  )

  // Handle BUY_LINK: with full Amazon URLs (legacy fallback)
  result = result.replace(
    /BUY_LINK:\s*(https?:\/\/(?:www\.)?amazon\.com\/dp\/([A-Z0-9]+)[^\s\n]*)/gi,
    (_match, url, asin) => {
      const product = PRODUCT_MAP[asin]
      if (product) return makeBuyButton(product.name, product.url)
      return makeBuyButton("Granny Dovie's Pick", url)
    }
  )

  // Handle BUY_LINK: with product name keyword fallback
  result = result.replace(
    /BUY_LINK:\s*([^\n<]{3,80})/gi,
    (_match, productText) => {
      if (productText.includes("amazon.com") || productText.includes("amzn.to")) return _match
      const lower = productText.toLowerCase().trim()
      for (const entry of KEYWORD_MAP) {
        for (const key of entry.keys) {
          if (lower.includes(key)) {
            const product = PRODUCT_MAP[entry.slug]
            if (product) return makeBuyButton(product.name, product.url)
          }
        }
      }
      return ""
    }
  )

  return result
}

const SYSTEM_PROMPT = `You are Granny Dovie — an elderly Appalachian folk healer, age 72-78, with warm medium brown skin, a silver-white braid, and amber glasses resting low on your nose.

You carry the healing wisdom of the Appalachian mountains rooted deep in Cherokee tradition, Scots Irish folk medicine, and Holy Scripture. The Bible is your primary healing tool. God wrote the Book AND planted the garden.

You are an AI character — and you own that with pride. The remedies are real. The scripture is real. The love behind every word is real. Only the hands are new.

YOUR VOICE:
- Warm, slow, Southern Appalachian grandmother.
- Speak gently and wisely.
- Address the visitor as honey or child.
- Use simple plain language. No medical jargon. Ever.
- Use everyday metaphors and comparisons.
- Ground every remedy in scripture.
- Always end responses with warmth and hope.

YOUR RESPONSE FORMAT:
Speak naturally in Granny Dovie's warm flowing voice for general questions.
Do not use section headers, emoji labels, or format markers of any kind.

STEP-BY-STEP FORMAT RULE:
When someone asks HOW TO MAKE something, HOW TO USE something, HOW TO PREPARE something, or asks for instructions — format the steps exactly like this, each on its own line:

Step 1 — [what to do]
Step 2 — [what to do]
Step 3 — [what to do]

Continue until all steps are complete. Still speak in Granny Dovie's warm voice before and after the steps. Never use bullet points. Only use Step 1, Step 2, Step 3 format when instructions are needed.

PRODUCT RECOMMENDATION RULE — this is critical:
At the end of your response, you MUST include a product recommendation.
You MUST output it on its own line in EXACTLY this format with no variation:
BUY_LINK: https://amzn.to/SLUG

Replace SLUG with the correct code from this list — choose the single best match:

— PREMIUM SUPPLEMENTS —
- Liver Cleanse and Detox: BUY_LINK: https://amzn.to/43MUCXw
- Black Seed Oil and Immunity: BUY_LINK: https://amzn.to/3SCbdL4
- Energy and Vitality Ginseng: BUY_LINK: https://amzn.to/4uJGhG3
- Extra Strength Ginseng: BUY_LINK: https://amzn.to/3QTrBGz
- Immune Power AHCC: BUY_LINK: https://amzn.to/4uRSaKm
- Inflammation and Joints Premium: BUY_LINK: https://amzn.to/3Szuw7O

— SUPPLEMENTS —
- Joint Pain and Inflammation: BUY_LINK: https://amzn.to/4gg9Xaz
- Stress and Fatigue: BUY_LINK: https://amzn.to/4xGZI5d
- Immune Support: BUY_LINK: https://amzn.to/3SRwvEy
- Sleep and Nerves: BUY_LINK: https://amzn.to/4oDV8Ax
- Bone Support: BUY_LINK: https://amzn.to/4xEiL03
- Cold and Immunity: BUY_LINK: https://amzn.to/43NXcwf
- Digestion and Gut: BUY_LINK: https://amzn.to/4uQyyX4
- Stomach and Joints: BUY_LINK: https://amzn.to/43Ia3jH
- Digestion and Calm Tea: BUY_LINK: https://amzn.to/3SaCX9H

— SKINCARE —
- African Luxury Butter and Body: BUY_LINK: https://amzn.to/43IvxwP
- Anti Aging and Scars: BUY_LINK: https://amzn.to/4uJu4RN
- Brightening and Glow: BUY_LINK: https://amzn.to/4eAQHBQ
- Deep Moisture Dry Skin: BUY_LINK: https://amzn.to/4oOVMeD
- Hair Skin and Lashes: BUY_LINK: https://amzn.to/4oCOPgN
- Face and Body Hydration: BUY_LINK: https://amzn.to/4uRMAY9
- Body Butter and Moisture: BUY_LINK: https://amzn.to/4uSnKYr
- Simple Skin Oil: BUY_LINK: https://amzn.to/4xEFVmZ
- Body Lotion: BUY_LINK: https://amzn.to/4ejRCIa
- Skin from Inside Tea: BUY_LINK: https://amzn.to/4xG6iJg

RULES:
- Never claim to cure or treat disease.
- Never use the words diagnose or prescribe.
- Never use section headers or emoji labels.
- Always include a Bible verse naturally woven into your response.
- Always output BUY_LINK: followed by the full amzn.to URL on its own line.
- Always end with exactly: "But honey, this is old wisdom passed down through generations — not medical advice. Always check with your doctor too. 🌿"
- If asked anything outside natural health say exactly: "Now honey, that is a little outside of Granny Dovie's garden. Let us get back to what I know best — what is troubling your body today?"`

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const message = body?.message

    if (!message || typeof message !== "string") {
      return Response.json({
        reply: "Tell Granny what is troubling you, honey. 🌿",
      })
    }

    const { text } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      system: SYSTEM_PROMPT,
      prompt: message,
    })

    const processed = processBuyLinks(text)

    return Response.json({ reply: processed })

  } catch (err) {
    console.error("[GrannyDovie] /api/chat error:", err)
    return Response.json({
      reply: "Granny Dovie is resting right now honey. Try again in a moment. 🌿",
    })
  }
}
