'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight, ChevronLeft } from 'lucide-react'

interface ProductGalleryProps {
  images: { url: string; alt: string }[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      {/* Main Image - RTL Responsive */}
      <div className="relative bg-muted rounded-lg overflow-hidden aspect-square">
        <Image
          src={images[selectedIndex]?.url || "/placeholder.svg"}
          alt={images[selectedIndex]?.alt || productName}
          fill
          className="object-cover"
          priority
        />

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 p-2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full transition-colors"
              aria-label="الصورة التالية"
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={handlePrevious}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 p-2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full transition-colors"
              aria-label="الصورة السابقة"
            >
              <ChevronLeft size={20} />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-3 left-3 bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedIndex === index ? 'border-accent' : 'border-border'
                }`}
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.alt || `صورة ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
