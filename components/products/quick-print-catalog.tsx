"use client"

import { useState } from "react"
import Image from "next/image"
import { quickPrintCatalog } from "@/lib/data"
import { GalleryModal } from "@/components/gallery-modal"
import { FileText, ExternalLink } from "lucide-react"

export function QuickPrintCatalog() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < quickPrintCatalog.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  return (
    <>
      <section className="mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Katalog produktů
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickPrintCatalog.map((item, index) => (
            <div
              key={item.id}
              className="group bg-card rounded-2xl border border-border hover:border-primary/20 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setSelectedIndex(index)}
                className="relative aspect-[4/3] w-full overflow-hidden bg-muted cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">
                    Klikněte pro náhled
                  </p>
                </div>
              </button>

              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                {item.pdf && (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <FileText className="w-4 h-4" />
                    Stáhnout PDF s vzory
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <GalleryModal
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          imageSrc={quickPrintCatalog[selectedIndex].src}
          imageTitle={quickPrintCatalog[selectedIndex].title}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={selectedIndex > 0}
          hasNext={selectedIndex < quickPrintCatalog.length - 1}
        />
      )}
    </>
  )
}
