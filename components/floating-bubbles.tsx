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
    const size = Math.random() * 40 + 20 // 20-60px
    const speed = Math.random() * 2 + 1 // 1-3 seconds for animation
    const x = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
    const hue = Math.random() * 360

    return {
      id: Date.now() + Math.random(),
      x,
      y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
      size,
      speed,
      opacity: Math.random() * 0.3 + 0.2, // 0.2-0.5 opacity
      hue,
      animationDelay: Math.random() * 2 // 0-2s delay
    }
  }

  const removeBubble = (id: number) => {
    setBubbles(prev => prev.filter(bubble => bubble.id !== id))
  }

  const addBubble = () => {
    setBubbles(prev => [...prev, createBubble()])
  }

  useEffect(() => {
    // Add initial bubbles
    const initialBubbles = Array.from({ length: 8 }, () => createBubble())
    setBubbles(initialBubbles)

    // Set up periodic bubble generation
    const interval = setInterval(() => {
      addBubble()
    }, 2000 + Math.random() * 3000) // Every 2-5 seconds

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
              hsla(${bubble.hue}, 70%, 80%, ${bubble.opacity * 1.5}) 0%,
              hsla(${bubble.hue + 20}, 60%, 70%, ${bubble.opacity * 1.2}) 25%,
              hsla(${bubble.hue + 40}, 50%, 60%, ${bubble.opacity * 0.8}) 50%,
              hsla(${bubble.hue + 60}, 40%, 50%, ${bubble.opacity * 0.4}) 75%,
              transparent 100%)`,
            boxShadow: `0 4px 20px hsla(${bubble.hue}, 60%, 60%, ${bubble.opacity * 0.6}),
                       inset 0 1px 0 hsla(${bubble.hue + 30}, 80%, 90%, ${bubble.opacity * 0.8})`,
            border: `1px solid hsla(${bubble.hue + 20}, 70%, 80%, ${bubble.opacity * 0.6})`,
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
