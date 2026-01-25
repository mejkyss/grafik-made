"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { quickPrintCatalog } from "@/lib/data"
import { FileText, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react"

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

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null)
      } else if (e.key === "ArrowLeft") {
        handlePrevious()
      } else if (e.key === "ArrowRight") {
        handleNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex])

  return (
    <>
      <section className="mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Katalog produktů
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickPrintCatalog.map((item, index) => {
            const isHighlighted = index === 0 || index === 2
            return (
              <div
                key={item.id}
                className={`group bg-card rounded-2xl border border-border hover:border-primary/20 overflow-hidden transition-all duration-300 ${
                  isHighlighted ? "bg-gradient-to-br from-primary/5 via-background to-primary/10" : ""
                }`}
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
            )
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors z-10"
              >
                <X className="w-6 h-6" />
                <span className="sr-only">Zavřít</span>
              </button>

              <div className="relative w-full h-[70vh] bg-black rounded-2xl overflow-hidden">
                <Image
                  src={quickPrintCatalog[selectedIndex].src}
                  alt={quickPrintCatalog[selectedIndex].title}
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-1">
                    {quickPrintCatalog[selectedIndex].title}
                  </h3>
                  {quickPrintCatalog[selectedIndex].pdf && (
                    <a
                      href={quickPrintCatalog[selectedIndex].pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FileText className="w-4 h-4" />
                      Stáhnout PDF s vzory
                    </a>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    {selectedIndex + 1} / {quickPrintCatalog.length}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handlePrevious}
                    disabled={selectedIndex === 0}
                    className="p-2 rounded-xl bg-primary/20 hover:bg-primary/30 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="sr-only">Předchozí</span>
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={selectedIndex === quickPrintCatalog.length - 1}
                    className="p-2 rounded-xl bg-primary/20 hover:bg-primary/30 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                    <span className="sr-only">Další</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
