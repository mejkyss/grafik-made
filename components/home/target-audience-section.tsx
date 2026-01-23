"use client"

import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import { Building2, Rocket, Factory, Link2 } from "lucide-react"

const audiences = [
  { text: "začínající a rostoucí firmy", icon: Rocket },
  { text: "firmy, které zatím nemají vlastního grafika", icon: Building2 },
  { text: "výrobní a realizační firmy", icon: Factory },
  { text: "firmy, kde je potřeba spojit design, tisk a výrobu", icon: Link2 },
]

export function TargetAudienceSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10 sm:mb-12">
            Pro koho je to vhodné
          </h2>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((audience) => (
            <FadeInStaggerItem key={audience.text}>
              <div className="h-full p-5 sm:p-6 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
                  {audience.text}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
