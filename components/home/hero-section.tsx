"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import { Camera, Package, ShoppingBag, ArrowRight } from "lucide-react"

const trustChips = [
  "25+ let praxe",
  "tisk + výroba + montáž",
  "externě bez administrativy",
]

const transformationSteps = [
  { label: "Surový podklad", icon: Camera, description: "Vstupní materiál" },
  { label: "Čistý produkt", icon: Package, description: "Zpracování" },
  { label: "Prodejní prezentace", icon: ShoppingBag, description: "Finální výstup" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <FadeIn>
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <Image
                src="/images/exter-d-logo.png"
                alt="EXTER/D - externí technický grafik pro tisk a výrobu"
                width={380}
                height={200}
                className="w-full max-w-xs h-auto"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight text-balance">
              Od návrhu až po funkční výstup – bez chyb, bez zdržení
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              Pomáhám firmám převádět grafické návrhy do funkčních, vyrobitelných a bezchybných výstupů.
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Pracuji tam, kde se potkává design, tisk, výroba a realita – a kde často vznikají chyby, zdržení a zbytečné náklady.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="default" asChild size="lg" className="rounded-2xl">
                <Link href="/moje-prace">Moje práce</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl bg-transparent">
                <Link href="/produkty">Produkty k objednání</Link>
              </Button>
            </div>

            {/* Trust Chips */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {trustChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
