"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageTitle: string
  onPrevious?: () => void
  onNext?: () => void
  hasPrevious?: boolean
  hasNext?: boolean
}

export function GalleryModal({
  isOpen,
  onClose,
  imageSrc,
  imageTitle,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: GalleryModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
      if (e.key === "ArrowLeft" && hasPrevious && onPrevious) {
        onPrevious()
      }
      if (e.key === "ArrowRight" && hasNext && onNext) {
        onNext()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
        <span className="sr-only">Zavřít</span>
      </Button>

      {hasPrevious && onPrevious && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full"
          onClick={(e) => {
            e.stopPropagation()
            onPrevious()
          }}
        >
          <ChevronLeft className="w-8 h-8" />
          <span className="sr-only">Předchozí</span>
        </Button>
      )}

      {hasNext && onNext && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
        >
          <ChevronRight className="w-8 h-8" />
          <span className="sr-only">Následující</span>
        </Button>
      )}

      <div
        className="relative w-full max-w-6xl max-h-[90vh] aspect-square"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imageSrc}
          alt={imageTitle}
          fill
          className="object-contain"
          sizes="(max-width: 1536px) 90vw, 1536px"
          priority
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
        <p className="text-white text-sm font-medium">
          {imageTitle}
        </p>
      </div>
    </div>
  )
}
