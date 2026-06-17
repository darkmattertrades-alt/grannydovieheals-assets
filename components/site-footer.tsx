import Link from "next/link"
import { navLinks, images, AFFILIATE_DISCLOSURE } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer
      className="relative mt-0 border-t-4 border-gold/40 bg-ink text-parchment"
      style={{
        backgroundImage: `linear-gradient(rgba(44,26,14,0.88), rgba(44,26,14,0.92)), url(${images.footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gold">
              Granny Dovie Heals
            </h3>
            <p className="mt-3 font-body text-base italic text-parchment/90">
              &ldquo;The good Lord put a remedy in every garden.&rdquo;
            </p>
            <img
              src={images.grannySignature || "/placeholder.svg"}
              alt="Granny Dovie's handwritten signature"
              className="mt-4 h-16 w-auto opacity-90"
            />
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-gold">
              Find Your Way
            </h4>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-parchment/85 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-gold">
              A Word of Honesty
            </h4>
            <p className="mt-3 font-body text-xs leading-relaxed text-parchment/70">
              {AFFILIATE_DISCLOSURE}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-parchment/20 pt-6 text-center">
          <p className="font-body text-xs text-parchment/60">
            &copy; {new Date().getFullYear()} Granny Dovie Heals. Made with prayer
            and good intention. This site is for educational purposes and is not
            medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
