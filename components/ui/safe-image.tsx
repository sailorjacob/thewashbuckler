"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"

interface SafeImageProps extends Omit<ImageProps, 'src'> {
  src: string
  fallbackSrc?: string
  alt: string
}

export function SafeImage({ src, fallbackSrc, alt, ...props }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={handleError}
    />
  )
}
