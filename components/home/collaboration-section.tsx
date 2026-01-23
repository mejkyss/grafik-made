"use client"

import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import { Printer, Factory, Presentation } from "lucide-react"

const areas = [
  { text: "tisku", icon: Printer },
  { text: "výroby", icon: Factory },
  { text: "produktové prezentace", icon: Presentation },
]

export function CollaborationSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Dlouhodobá spolupráce
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Spolupracuji dlouhodobě s několika většími firmami v oblasti:
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {areas.map((area) => (
            <FadeInStaggerItem key={area.text}>
              <div className="p-6 sm:p-8 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground">{area.text}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
