import { images } from "@/lib/site"
import { OptInForm } from "@/components/opt-in-form"

export function FreeGiftOptIn() {
  return (
    <section className="bg-forest py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <img
          src={images.grannySignature || "/placeholder.svg"}
          alt="Granny Dovie's handwritten signature"
          className="mx-auto mb-8 h-20 w-auto object-contain"
        />
        <h2 className="text-balance font-serif text-3xl font-bold text-parchment sm:text-4xl">
          Get Instant Access to the Free Guide 🌿
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty font-body text-lg leading-relaxed text-parchment/90">
          Leave your name and email below and your free guide will be ready to
          download immediately, honey.
        </p>
        <div className="mt-8 rounded-xl bg-parchment/10 p-6 backdrop-blur-sm sm:p-8">
          <OptInForm
            compact
            download
            buttonLabel="Get My Free Guide Now 🌿"
            emailPlaceholder="your@email.com"
          />
        </div>
      </div>
    </section>
  )
}

export function FreeGiftScripture() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      <img
        src={images.scriptureBanner || "/placeholder.svg"}
        alt="Sunlit grove of healing plants and trees"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-balance font-script text-3xl leading-relaxed text-parchment sm:text-4xl lg:text-5xl">
          &ldquo;And the fruit thereof shall be for meat, and the leaf thereof for
          medicine.&rdquo;
        </p>
        <p className="mt-6 font-body text-lg text-parchment/90">— Ezekiel 47:12</p>
      </div>
    </section>
  )
}
