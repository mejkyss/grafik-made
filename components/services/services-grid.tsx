"use client"

import { services } from "@/lib/data"
import { FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import {
  FileCheck,
  BookOpen,
  Wrench,
  AlertCircle,
  Camera,
} from "lucide-react"

const serviceIcons = [FileCheck, BookOpen, Wrench, AlertCircle, Camera]

export function ServicesGrid() {
  return (
    <FadeInStagger className="grid gap-6">
      {services.map((service, index) => {
        const Icon = serviceIcons[index] || FileCheck
        return (
          <FadeInStaggerItem key={service.title}>
            <div className="p-6 sm:p-8 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Co dostanete:
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeInStaggerItem>
        )
      })}
    </FadeInStagger>
  )
}
