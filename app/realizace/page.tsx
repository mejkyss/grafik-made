"use client"

import { useState } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { realizaceGallery } from "@/lib/data"
import { GalleryModal } from "@/components/gallery-modal"

export default function RealizacePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("Vše")

  const categories = ["Vše", ...Array.from(new Set(realizaceGallery.map(item => item.category)))]
  
  const filteredGallery = filter === "Vše" 
    ? realizaceGallery 
    : realizaceGallery.filter(item => item.category === filter)

  const handlePrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredGallery.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Realizace 2000–2026
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Přehled realizovaných projektů od roku 2000 až po současnost. Tisková data, obaly, kalendáře, etikety, ilustrace a další grafické práce.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    {item.category}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              V této kategorii nejsou žádné položky.
            </p>
          </div>
        )}
      </div>

      {selectedIndex !== null && (
        <GalleryModal
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          imageSrc={filteredGallery[selectedIndex].src}
          imageTitle={filteredGallery[selectedIndex].title}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={selectedIndex > 0}
          hasNext={selectedIndex < filteredGallery.length - 1}
        />
      )}
    </div>
  )
}
