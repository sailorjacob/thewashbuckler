"use client"

import { useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface CircleConfig {
  id: number
  size: number
  baseX: number
  baseY: number
  color: string
  delay: number
  parallaxSpeed: number
  scrollDirection: "both" | "up" | "down"
}

interface AnimatedBackgroundCirclesProps {
  className?: string
  circles?: CircleConfig[]
}

const defaultCircles: CircleConfig[] = [
  {
    id: 1,
    size: 200,
    baseX: 15,
    baseY: 20,
    color: "oklch(0.65 0.15 215 / 0.15)",
    delay: 0,
    parallaxSpeed: 0.5,
    scrollDirection: "both"
  },
  {
    id: 2,
    size: 150,
    baseX: 85,
    baseY: 80,
    color: "oklch(0.62 0.14 35 / 0.12)",
    delay: 100,
    parallaxSpeed: 0.3,
    scrollDirection: "both"
  },
  {
    id: 3,
    size: 300,
    baseX: 70,
    baseY: 10,
    color: "oklch(0.65 0.15 215 / 0.1)",
    delay: 200,
    parallaxSpeed: 0.7,
    scrollDirection: "both"
  },
  {
    id: 4,
    size: 120,
    baseX: 25,
    baseY: 70,
    color: "oklch(0.62 0.14 35 / 0.18)",
    delay: 150,
    parallaxSpeed: 0.4,
    scrollDirection: "up"
  },
  {
    id: 5,
    size: 180,
    baseX: 80,
    baseY: 40,
    color: "oklch(0.65 0.15 215 / 0.08)",
    delay: 50,
    parallaxSpeed: 0.6,
    scrollDirection: "down"
  },
  {
    id: 6,
    size: 250,
    baseX: 50,
    baseY: 90,
    color: "oklch(0.62 0.14 35 / 0.14)",
    delay: 300,
    parallaxSpeed: 0.2,
    scrollDirection: "both"
  }
]

export function AnimatedBackgroundCircles({
  className,
  circles = defaultCircles
}: AnimatedBackgroundCirclesProps) {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrollY(currentScrollY)

    if (currentScrollY > lastScrollY) {
      setScrollDirection("down")
    } else {
      setScrollDirection("up")
    }

    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {circles.map((circle) => {
        const shouldAnimate =
          circle.scrollDirection === "both" ||
          (circle.scrollDirection === "up" && scrollDirection === "up") ||
          (circle.scrollDirection === "down" && scrollDirection === "down")

        // Calculate parallax offset based on scroll position
        const parallaxOffset = scrollY * circle.parallaxSpeed * (scrollDirection === "up" ? -1 : 1)

        // Calculate transform values
        const xOffset = circle.baseX + (parallaxOffset * 0.1)
        const yOffset = circle.baseY + (parallaxOffset * 0.05)

        // Animation delay for staggered entrance
        const animationDelay = `${circle.delay}ms`

        return (
          <div
            key={circle.id}
            className={cn(
              "absolute rounded-full transition-all duration-1000 ease-out",
              shouldAnimate ? "opacity-100 scale-100" : "opacity-0 scale-75"
            )}
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              left: `${xOffset}%`,
              top: `${yOffset}%`,
              background: circle.color,
              transform: `translate(-50%, -50%) scale(${shouldAnimate ? 1 : 0.75})`,
              transitionDelay: animationDelay,
              filter: shouldAnimate ? "blur(0px)" : "blur(2px)",
            }}
          />
        )
      })}
    </div>
  )
}
