"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ProjectImageCarouselProps {
  images: string[]
  alt: string
  className?: string
}

export function ProjectImageCarousel({ images, alt, className = "" }: ProjectImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000) // Change image every 2 seconds

    return () => clearInterval(interval)
  }, [isHovered, images.length])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCurrentImageIndex(0) // Reset to first image when not hovering
  }

  if (images.length === 0) {
    return <div className={`bg-gray-200 dark:bg-gray-700 ${className}`} />
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={images[currentImageIndex] || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-105"
      />

      {/* Image indicators */}
      {images.length > 1 && isHovered && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
