"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion"
import { Mail, Phone } from "lucide-react"

export function ContactCtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-card rounded-3xl border border-border p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Rychlá domluva
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8">
              Pošlete stručné zadání a termín. Ozvu se s návrhem dalšího postupu.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="mailto:jirdokoupil@gmail.com">
                  <Mail className="mr-2 w-4 h-4" />
                  Napsat e-mail
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl bg-transparent">
                <a href="tel:+420774710093">
                  <Phone className="mr-2 w-4 h-4" />
                  Zavolat
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm sm:text-base text-muted-foreground">
                <span className="font-medium text-foreground">Kontakt:</span>{" "}
                Jiří Dokoupil &nbsp;|&nbsp; Tel.:{" "}
                <a href="tel:+420774710093" className="hover:text-primary transition-colors">
                  774 710 093
                </a>{" "}
                &nbsp;|&nbsp;{" "}
                <a href="mailto:jirdokoupil@gmail.com" className="hover:text-primary transition-colors">
                  jirdokoupil@gmail.com
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
