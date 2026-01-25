"use client"

import { collaborationSteps } from "@/lib/data"
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import { ArrowRight } from "lucide-react"

export function CollaborationStepsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Jak spolupráce probíhá
          </h2>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {collaborationSteps.map((step, index) => (
            <FadeInStaggerItem key={step.number}>
              <div className="relative h-full">
                <div className="p-6 bg-card rounded-2xl border border-border h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <p className="text-base font-medium text-foreground">
                    {step.title}
                  </p>
                </div>
                {index < collaborationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
