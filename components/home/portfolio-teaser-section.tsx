"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import { realizaceGallery } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function PortfolioTeaserSection() {
  const featuredWorks = realizaceGallery.slice(0, 6)

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Ukázky práce
              </h2>
              <p className="text-muted-foreground">
                Výběr z realizovaných projektů z posledních 25 let
              </p>
            </div>
            <Button asChild variant="ghost" className="w-fit">
              <Link href="/moje-prace" className="group">
                Zobrazit vše
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featuredWorks.map((work, index) => {
            const isHighlighted = index === 0 || index === 5
            return (
              <FadeInStaggerItem key={work.id}>
                <Link
                  href="/moje-prace"
                  className="group block h-full"
                >
                  <article className={`h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-md transition-all duration-300 ${
                    isHighlighted ? "bg-gradient-to-br from-primary/5 via-background to-primary/10" : ""
                  }`}>
                    <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                      <Image
                        src={work.src}
                        alt={work.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    <div className="p-5 sm:p-6">
                      <span className="inline-block px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg mb-3">
                        {work.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {work.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              </FadeInStaggerItem>
            )
          })}
        </FadeInStagger>
      </div>
    </section>
  )
}
