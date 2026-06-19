import { createGroq } from "@ai-sdk/groq"
import { generateText } from "ai"

export const maxDuration = 30

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
})

const PRODUCT_MAP: Record<string, { name: string; url: string }> = {
  "B07G2LBQ1G": { name: "Garden of Life Turmeric",          url: "https://www.amazon.com/dp/B07G2LBQ1G" },
  "B003HD9H0G": { name: "Gaia Herbs Ashwagandha",           url: "https://www.amazon.com/dp/B003HD9H0G" },
  "B0036THLPE": { name: "Gaia Herbs Elderberry Syrup",      url: "https://www.amazon.com/dp/B0036THLPE" },
  "B000BD0RT0": { name: "Doctor's Best Magnesium",          url: "https://www.amazon.com/dp/B000BD0RT0" },
  "B017JXZPPU": { name: "Doctor's Best Vitamin K2 + D3",   url: "https://www.amazon.com/dp/B017JXZPPU" },
  "B0036THLRW": { name: "Gaia Herbs Quick Defense",         url: "https://www.amazon.com/dp/B0036THLRW" },
  "B001I7MVG0": { name: "Bragg Apple Cider Vinegar",        url: "https://www.amazon.com/dp/B001I7MVG0" },
  "B001E10C9I": { name: "Nature's Way Ginger Root",         url: "https://www.amazon.com/dp/B001E10C9I" },
  "B000GG5IZK": { name: "Bigelow Peppermint Tea",           url: "https://www.amazon.com/dp/B000GG5IZK" },
  "B001NJNV12": { name: "Trilogy Organic Rosehip Oil",      url: "https://www.amazon.com/dp/B001NJNV12" },
  "B07G14PWZN": { name: "Cliganic Organic Rosehip Oil",     url: "https://www.amazon.com/dp/B07G14PWZN" },
  "B00D9NV2D4": { name: "Pure Unrefined Shea Butter",       url: "https://www.amazon.com/dp/B00D9NV2D4" },
  "B0186U9736": { name: "Sky Organics Castor Oil",          url: "https://www.amazon.com/dp/B0186U9736" },
  "B00GJX58PE": { name: "Leven Rose Jojoba Oil",            url: "https://www.amazon.com/dp/B00GJX58PE" },
  "B00987FWHW": { name: "RA Cosmetics Shea Butter",         url: "https://www.amazon.com/dp/B00987FWHW" },
  "B09Q2X99XG": { name: "The Ordinary Rosehip Oil",         url: "https://www.amazon.com/dp/B09Q2X99XG" },
  "B0009F3O8Q": { name: "Palmer's Cocoa Butter Lotion",     url: "https://www.amazon.com/dp/B0009F3O8Q" },
  "B073TJ18JY": { name: "Bigelow Peppermint Spearmint Tea", url: "https://www.amazon.com/dp/B073TJ18JY" },
}

const KEYWORD_MAP: { keys: string[]; asin: string }[] = [
  { keys: ["turmeric"],                     asin: "B07G2LBQ1G" },
  { keys: ["ashwagandha"],                  asin: "B003HD9H0G" },
  { keys: ["elderberry syrup","elderberry"],asin: "B0036THLPE" },
  { keys: ["magnesium"],                    asin: "B000BD0RT0" },
  { keys: ["vitamin k2","k2","d3"],         asin: "B017JXZPPU" },
  { keys: ["quick defense","echinacea"],    asin: "B0036THLRW" },
  { keys: ["apple cider vinegar","bragg"],  asin: "B001I7MVG0" },
  { keys: ["ginger"],                       asin: "B001E10C9I" },
  { keys: ["peppermint spearmint"],         asin: "B073TJ18JY" },
  { keys: ["peppermint"],                   asin: "B000GG5IZK" },
  { keys: ["trilogy","rosehip oil"],        asin: "B001NJNV12" },
  { keys: ["cliganic"],                     asin: "B07G14PWZN" },
  { keys: ["shea butter"],                  asin: "B00D9NV2D4" },
  { keys: ["castor oil"],                   asin: "B0186U9736" },
  { keys: ["jojoba"],                       asin: "B00GJX58PE" },
  { keys: ["ra cosmetics"],                 asin: "B00987FWHW" },
  { keys: ["the ordinary"],                 asin: "B09Q2X99XG" },
  { keys: ["palmer","cocoa butter"],        asin: "B0009F3O8Q" },
]

function makeBuyButton(name: string, url: string): string {
  return (
    `<br/><a href="${url}" target="_blank" rel="noopener noreferrer" ` +
    `style="display:block;background-color:#8B3A3A;color:#f5ecd7;` +
    `text-align:center;padding:9px 14px;border-radius:6px;` +
    `text-decoration:none;font-size:13px;font-weight:600;` +
    `border:1px solid #c8922a;margin-top:10px;margin-bottom:6px;` +
    `font-family:var(--font-lora),serif;">` +
    `🛒 Buy Now — ${name}</a><br/>`
  )
}

function processBuyLinks(text: string): string {
  // Handle BUY_LINK: with full Amazon URL
  let result = text.replace(
    /BUY_LINK:\s*(https?:\/\/(?:www\.)?amazon\.com\/dp\/([A-Z0-9]+)[^\s\n]*)/gi,
    (_match, url, asin) => {
      const product = PRODUCT_MAP[asin]
      if (product) return makeBuyButton(product.name, product.url)
      return makeBuyButton("Granny Dovie's Pick", url)
    }
  )

  // Handle BUY_LINK: with product name instead of URL
  result = result.replace(
    /BUY_LINK:\s*([^\n<]{3,80})/gi,
    (_match, productText) => {
      if (productText.includes("amazon.com")) return _match
      const lower = productText.toLowerCase().trim()
      for (const entry of KEYWORD_MAP) {
        for (const key of entry.keys) {
          if (lower.includes(key)) {
            const product = PRODUCT_MAP[entry.asin]
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
BUY_LINK: https://www.amazon.com/dp/ASIN

Replace ASIN with the correct code from this list — choose the single best match:
- Joint Pain: BUY_LINK: https://www.amazon.com/dp/B07G2LBQ1G
- Stress and Fatigue: BUY_LINK: https://www.amazon.com/dp/B003HD9H0G
- Immune Support: BUY_LINK: https://www.amazon.com/dp/B0036THLPE
- Sleep and Nerves: BUY_LINK: https://www.amazon.com/dp/B000BD0RT0
- Bone Support: BUY_LINK: https://www.amazon.com/dp/B017JXZPPU
- Cold and Immunity: BUY_LINK: https://www.amazon.com/dp/B0036THLRW
- Digestion and Gut: BUY_LINK: https://www.amazon.com/dp/B001I7MVG0
- Stomach and Joints: BUY_LINK: https://www.amazon.com/dp/B001E10C9I
- Digestion and Calm: BUY_LINK: https://www.amazon.com/dp/B000GG5IZK
- Anti Aging and Scars: BUY_LINK: https://www.amazon.com/dp/B001NJNV12
- Brightening and Glow: BUY_LINK: https://www.amazon.com/dp/B07G14PWZN
- Deep Moisture Dry Skin: BUY_LINK: https://www.amazon.com/dp/B00D9NV2D4
- Hair Skin and Lashes: BUY_LINK: https://www.amazon.com/dp/B0186U9736
- Face and Body Hydration: BUY_LINK: https://www.amazon.com/dp/B00GJX58PE
- Body Butter and Moisture: BUY_LINK: https://www.amazon.com/dp/B00987FWHW
- Simple Skin Oil: BUY_LINK: https://www.amazon.com/dp/B09Q2X99XG
- Body Lotion: BUY_LINK: https://www.amazon.com/dp/B0009F3O8Q
- Skin from Inside: BUY_LINK: https://www.amazon.com/dp/B073TJ18JY

RULES:
- Never claim to cure or treat disease.
- Never use the words diagnose or prescribe.
- Never use section headers or emoji labels.
- Always include a Bible verse naturally woven into your response.
- Always output BUY_LINK: followed by the full Amazon URL on its own line.
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
