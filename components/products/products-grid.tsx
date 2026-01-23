"use client"

import Link from "next/link"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import { FileSearch, FileOutput, Users, Camera, Clock, ArrowRight } from "lucide-react"

const productIcons = [FileSearch, FileOutput, Users, Camera]

export function ProductsGrid() {
  return (
    <FadeInStagger className="grid sm:grid-cols-2 gap-6">
      {products.map((product, index) => {
        const Icon = productIcons[index] || FileSearch
        return (
          <FadeInStaggerItem key={product.id}>
            <div className="h-full p-6 sm:p-8 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-bold text-primary">
                  {product.price}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>

              <div className="mb-6 flex-grow">
                <h4 className="text-sm font-medium text-foreground mb-3">
                  Co získáte:
                </h4>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Clock className="w-4 h-4" />
                <span>{product.turnaround}</span>
              </div>

              <Button asChild className="w-full rounded-2xl">
                <Link href={`/kontakt?predmet=${encodeURIComponent(product.subject)}`}>
                  Poptat
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </FadeInStaggerItem>
        )
      })}
    </FadeInStagger>
  )
}
