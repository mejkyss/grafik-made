"use client"

import Link from "next/link"
import { services } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import {
  FileCheck,
  BookOpen,
  Wrench,
  AlertCircle,
  Camera,
  Globe,
  ArrowRight,
} from "lucide-react"

const serviceIcons = [FileCheck, BookOpen, Wrench, AlertCircle, Camera, Globe]

export function ServicesGrid() {
  return (
    <FadeInStagger className="grid gap-6">
      {services.map((service, index) => {
        const Icon = serviceIcons[index] || FileCheck
        const isWebService = service.title === "Tvorba webu na míru"
        const isHighlighted = index % 2 === 0
        
        return (
          <FadeInStaggerItem key={service.title}>
            <div className={`p-6 sm:p-8 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300 ${
              isHighlighted ? "bg-gradient-to-br from-primary/5 via-background to-primary/10" : ""
            }`}>
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
                  <div className="mb-4">
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
                  
                  {isWebService && service.price && (
                    <>
                      <div className="mb-4">
                        <p className="text-xl font-bold text-primary">
                          {service.price}
                        </p>
                        {service.note && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {service.note}
                          </p>
                        )}
                      </div>
                      <Button asChild className="rounded-2xl">
                        <Link href="/kontakt?typ=web">
                          Poptat tvorbu webu
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </FadeInStaggerItem>
        )
      })}
    </FadeInStagger>
  )
}
