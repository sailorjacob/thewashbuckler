'use client'

import { useEffect, useState } from 'react'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  hue: number
  animationDelay: number
}

export function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  const createBubble = (): Bubble => {
    const size = Math.random() * 30 + 15 // 15-45px (smaller)
    const speed = Math.random() * 2 + 1.5 // 1.5-3.5 seconds for animation (slower)
    const x = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)

    // Light, airy hues only: blues (180-240), light cyans (150-180), soft purples (270-300)
    const lightHues = [
      // Light cyans and soft blues (150-210)
      160, 170, 180, 190, 200, 210,
      // Soft blues and blue-purples (210-270)
      220, 230, 240, 250, 260, 270,
      // Very light purples (270-300)
      275, 285, 295, 300, 305, 315
    ]
    const hue = lightHues[Math.floor(Math.random() * lightHues.length)]

    return {
      id: Date.now() + Math.random(),
      x,
      y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
      size,
      speed,
      opacity: Math.random() * 0.15 + 0.1, // 0.1-0.25 opacity (more subtle)
      hue,
      animationDelay: Math.random() * 3 // 0-3s delay
    }
  }

  const removeBubble = (id: number) => {
    setBubbles(prev => prev.filter(bubble => bubble.id !== id))
  }

  const addBubble = () => {
    setBubbles(prev => [...prev, createBubble()])
  }

  useEffect(() => {
    // Add initial bubbles (fewer, more subtle)
    const initialBubbles = Array.from({ length: 4 }, () => createBubble())
    setBubbles(initialBubbles)

    // Set up periodic bubble generation (less frequent)
    const interval = setInterval(() => {
      addBubble()
    }, 4000 + Math.random() * 4000) // Every 4-8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full cursor-pointer"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle at 30% 30%,
              hsla(${bubble.hue}, 25%, 92%, ${bubble.opacity * 2}) 0%,
              hsla(${bubble.hue + 10}, 20%, 88%, ${bubble.opacity * 1.6}) 25%,
              hsla(${bubble.hue + 20}, 15%, 84%, ${bubble.opacity * 1.2}) 50%,
              hsla(${bubble.hue + 30}, 10%, 80%, ${bubble.opacity * 0.8}) 75%,
              transparent 100%)`,
            boxShadow: `0 2px 12px hsla(${bubble.hue}, 20%, 70%, ${bubble.opacity * 1.2}),
                       inset 0 1px 0 hsla(${bubble.hue + 15}, 30%, 95%, ${bubble.opacity * 1.5})`,
            border: `1px solid hsla(${bubble.hue + 10}, 25%, 90%, ${bubble.opacity * 1.2})`,
            animation: `bubble-float ${bubble.speed}s linear infinite`,
            animationDelay: `${bubble.animationDelay}s`,
            transform: `translateZ(0)`, // Enable hardware acceleration
            transition: 'transform 0.3s ease, opacity 0.3s ease',
          }}
          onClick={(e) => {
            e.currentTarget.style.transform = 'scale(0) rotate(180deg)'
            e.currentTarget.style.opacity = '0'
            setTimeout(() => removeBubble(bubble.id), 300)
          }}
        />
      ))}
    </div>
  )
}
