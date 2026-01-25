"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { realizaceGallery } from "@/lib/data"
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react"

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("Vše")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<(typeof realizaceGallery)[0] | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const categories = ["Vše", ...new Set(realizaceGallery.map((item) => item.category))]

  const filteredGallery = useMemo(() => {
    return realizaceGallery.filter((item) => {
      const matchesFilter = activeFilter === "Vše" || item.category === activeFilter
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery])

  const handlePrevious = () => {
    const currentIndex = filteredGallery.findIndex((item) => item.id === selectedImage?.id)
    if (currentIndex > 0) {
      const newItem = filteredGallery[currentIndex - 1]
      setSelectedImage(newItem)
      setSelectedIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    const currentIndex = filteredGallery.findIndex((item) => item.id === selectedImage?.id)
    if (currentIndex < filteredGallery.length - 1) {
      const newItem = filteredGallery[currentIndex + 1]
      setSelectedImage(newItem)
      setSelectedIndex(currentIndex + 1)
    }
  }

  const handleImageClick = (item: typeof realizaceGallery[0], index: number) => {
    setSelectedImage(item)
    setSelectedIndex(index)
  }

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Hledat v pracích"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`relative px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground bg-secondary hover:bg-secondary/80"
              }`}
            >
              {activeFilter === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {filteredGallery.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground">
              Žádné práce neodpovídají vašemu vyhledávání.
            </p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => handleImageClick(item, index)}
                  className="group block h-full w-full text-left"
                >
                  <article className="h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-md transition-all duration-300">
                    <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    <div className="p-5 sm:p-6">
                      <span className="inline-block px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </article>
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
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
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors z-10"
              >
                <X className="w-6 h-6" />
                <span className="sr-only">Zavřít</span>
              </button>

              <div className="relative flex-1 bg-black rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
                  <p className="text-sm text-gray-400">{selectedImage.category}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {selectedIndex + 1} / {filteredGallery.length}
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
                    disabled={selectedIndex === filteredGallery.length - 1}
                    className="p-2 rounded-xl bg-primary/20 hover:bg-primary/30 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                    <span className="sr-only">Další</span>
                  </button>
                </div>
              </div>

              <div className="sr-only">Stiskněte ESC pro zavření, šipky pro navigaci</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
