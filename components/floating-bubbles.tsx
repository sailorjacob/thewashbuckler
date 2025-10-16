'use client'

import { useEffect, useState, useRef } from 'react'

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
  const [heroInView, setHeroInView] = useState(false)
  const [ctaInView, setCtaInView] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const createBubble = (section: 'hero' | 'cta'): Bubble => {
    const size = Math.random() * 40 + 20 // 20-60px
    const speed = Math.random() * 2 + 1 // 1-3 seconds for animation
    const x = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
    const hue = Math.random() * 360

    // Position bubbles relative to the section, not viewport
    const baseY = section === 'hero' ? 200 : (typeof window !== 'undefined' ? window.innerHeight - 400 : 600)

    return {
      id: Date.now() + Math.random(),
      x,
      y: baseY + Math.random() * 300, // Spread within section area
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

  const addBubble = (section: 'hero' | 'cta') => {
    setBubbles(prev => [...prev, createBubble(section)])
  }

  // Intersection Observer to detect when sections are in view
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger when 30% of section is visible
      rootMargin: '-10% 0px -10% 0px' // Small margin for better UX
    }

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setHeroInView(entry.isIntersecting)
      })
    }, observerOptions)

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setCtaInView(entry.isIntersecting)
      })
    }, observerOptions)

    // Observe the actual DOM elements when they mount
    const observeElements = () => {
      if (heroRef.current) heroObserver.observe(heroRef.current)
      if (ctaRef.current) ctaObserver.observe(ctaRef.current)
    }

    // Small delay to ensure DOM elements are mounted
    const timeoutId = setTimeout(observeElements, 100)

    return () => {
      clearTimeout(timeoutId)
      heroObserver.disconnect()
      ctaObserver.disconnect()
    }
  }, [])

  // Generate bubbles based on visibility
  useEffect(() => {
    if (heroInView) {
      const interval = setInterval(() => {
        addBubble('hero')
      }, 3000 + Math.random() * 2000) // Every 3-5 seconds for hero

      return () => clearInterval(interval)
    }
  }, [heroInView])

  useEffect(() => {
    if (ctaInView) {
      const interval = setInterval(() => {
        addBubble('cta')
      }, 2500 + Math.random() * 2000) // Every 2.5-4.5 seconds for CTA

      return () => clearInterval(interval)
    }
  }, [ctaInView])

  // Add some initial bubbles when sections come into view
  useEffect(() => {
    if (heroInView && bubbles.filter(b => b.id.toString().includes('hero')).length < 3) {
      setTimeout(() => addBubble('hero'), 500)
    }
  }, [heroInView])

  useEffect(() => {
    if (ctaInView && bubbles.filter(b => b.id.toString().includes('cta')).length < 2) {
      setTimeout(() => addBubble('cta'), 800)
    }
  }, [ctaInView])

  return (
    <>
      {/* Invisible markers for intersection observer */}
      <div ref={heroRef} className="absolute top-0 h-0" style={{ top: '25vh' }} />
      <div ref={ctaRef} className="absolute top-0 h-0" style={{ top: '75vh' }} />

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
    </>
  )
}
