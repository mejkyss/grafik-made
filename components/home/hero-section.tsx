"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion"

const trustChips = [
  "25+ let praxe",
  "tisk + výroba + montáž",
]

export function HeroSection() {
  return (
    <section className="relative bg-background w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-4 lg:py-8">
        <div className="mx-auto max-w-7xl">
          {/* Content */}
          <FadeIn>
            <div className="w-full">
              {/* Large Logo/Brand Name */}
              <div className="mb-4">
                <Image
                  src="/images/logo.png"
                  alt="EXTER/D - externí technický grafik pro tisk a výrobu"
                  width={400}
                  height={150}
                  className="h-auto w-[280px] sm:w-[350px] lg:w-[400px]"
                  priority
                />
              </div>

              {/* Main Headline */}
              <h2 className="mt-6 text-xl sm:text-2xl lg:text-2xl font-bold tracking-tight text-foreground leading-tight">
                Od návrhu až po funkční výstup – bez chyby, bez zdržení
              </h2>

              {/* Description */}
              <div className="mt-6 space-y-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Pomáhám firmám převádět grafické návrhy do funkčních, vyrobitelných a bezchybných výstupů.
                </p>
                <p>
                  Pracuji tam, kde se potkává design, tisk, výroba a realita – a kde často vznikají chyby, zdržení a zbytečné náklady.
                </p>
              </div>

              {/* CTA Buttons - using negative margin on first button to align text with content */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 -ml-6">
                <Button variant="default" asChild size="lg" className="rounded-full w-fit">
                  <Link href="/moje-prace">Moje práce</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent w-fit">
                  <Link href="/produkty">Rychlé tiskové produkty</Link>
                </Button>
              </div>

              {/* Trust Chips - aligned with content, not with button container */}
              <div className="mt-6 flex flex-wrap gap-2 -ml-3">
                {trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-3 py-1.5 rounded-md bg-transparent text-foreground text-sm font-medium border-0"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
