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
  // Large feature circles
  {
    id: 1,
    size: 280,
    baseX: 12,
    baseY: 25,
    color: "radial-gradient(circle at 30% 30%, oklch(0.68 0.18 220 / 0.2), oklch(0.65 0.15 215 / 0.15))",
    delay: 0,
    parallaxSpeed: 0.3,
    scrollDirection: "both"
  },
  {
    id: 2,
    size: 220,
    baseX: 88,
    baseY: 75,
    color: "radial-gradient(circle at 70% 20%, oklch(0.65 0.16 40 / 0.18), oklch(0.62 0.14 35 / 0.12))",
    delay: 80,
    parallaxSpeed: 0.25,
    scrollDirection: "both"
  },
  {
    id: 3,
    size: 350,
    baseX: 65,
    baseY: 15,
    color: "radial-gradient(circle at 40% 60%, oklch(0.70 0.20 225 / 0.12), oklch(0.65 0.15 215 / 0.08))",
    delay: 160,
    parallaxSpeed: 0.4,
    scrollDirection: "both"
  },

  // Medium accent circles
  {
    id: 4,
    size: 160,
    baseX: 20,
    baseY: 65,
    color: "radial-gradient(circle at 60% 40%, oklch(0.66 0.17 45 / 0.16), oklch(0.62 0.14 35 / 0.14))",
    delay: 120,
    parallaxSpeed: 0.35,
    scrollDirection: "up"
  },
  {
    id: 5,
    size: 200,
    baseX: 82,
    baseY: 45,
    color: "radial-gradient(circle at 20% 70%, oklch(0.69 0.19 230 / 0.14), oklch(0.65 0.15 215 / 0.1))",
    delay: 40,
    parallaxSpeed: 0.45,
    scrollDirection: "down"
  },
  {
    id: 6,
    size: 180,
    baseX: 45,
    baseY: 85,
    color: "radial-gradient(circle at 50% 30%, oklch(0.67 0.18 50 / 0.15), oklch(0.62 0.14 35 / 0.13))",
    delay: 200,
    parallaxSpeed: 0.2,
    scrollDirection: "both"
  },

  // Small detail circles
  {
    id: 7,
    size: 120,
    baseX: 75,
    baseY: 25,
    color: "radial-gradient(circle at 80% 80%, oklch(0.71 0.21 240 / 0.12), oklch(0.65 0.15 215 / 0.08))",
    delay: 60,
    parallaxSpeed: 0.5,
    scrollDirection: "both"
  },
  {
    id: 8,
    size: 100,
    baseX: 35,
    baseY: 55,
    color: "radial-gradient(circle at 30% 60%, oklch(0.68 0.19 55 / 0.13), oklch(0.62 0.14 35 / 0.11))",
    delay: 140,
    parallaxSpeed: 0.4,
    scrollDirection: "up"
  },
  {
    id: 9,
    size: 140,
    baseX: 60,
    baseY: 70,
    color: "radial-gradient(circle at 70% 40%, oklch(0.72 0.22 235 / 0.11), oklch(0.65 0.15 215 / 0.09))",
    delay: 100,
    parallaxSpeed: 0.3,
    scrollDirection: "down"
  },

  // Extra small floating circles
  {
    id: 10,
    size: 80,
    baseX: 90,
    baseY: 35,
    color: "radial-gradient(circle at 50% 50%, oklch(0.70 0.20 60 / 0.14), oklch(0.62 0.14 35 / 0.1))",
    delay: 180,
    parallaxSpeed: 0.6,
    scrollDirection: "both"
  },
  {
    id: 11,
    size: 90,
    baseX: 15,
    baseY: 80,
    color: "radial-gradient(circle at 40% 70%, oklch(0.73 0.23 245 / 0.13), oklch(0.65 0.15 215 / 0.07))",
    delay: 20,
    parallaxSpeed: 0.55,
    scrollDirection: "both"
  },
  {
    id: 12,
    size: 110,
    baseX: 50,
    baseY: 20,
    color: "radial-gradient(circle at 60% 30%, oklch(0.69 0.21 65 / 0.12), oklch(0.62 0.14 35 / 0.1))",
    delay: 220,
    parallaxSpeed: 0.25,
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
  const [isScrolling, setIsScrolling] = useState(false)

  // Throttle scroll events for better performance
  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        setScrollY(currentScrollY)

        if (currentScrollY > lastScrollY) {
          setScrollDirection("down")
        } else {
          setScrollDirection("up")
        }

        setLastScrollY(currentScrollY)
        setIsScrolling(false)
      })
      setIsScrolling(true)
    }
  }, [lastScrollY, isScrolling])

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
        const parallaxOffset = scrollY * circle.parallaxSpeed * (scrollDirection === "up" ? -0.8 : 1)

        // Calculate transform values with smoother movement
        const xOffset = circle.baseX + (parallaxOffset * 0.08)
        const yOffset = circle.baseY + (parallaxOffset * 0.04)

        // Animation delay for staggered entrance
        const animationDelay = `${circle.delay}ms`

        // Smooth easing function
        const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

        return (
          <div
            key={circle.id}
            className="absolute rounded-full will-change-transform"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              left: `${xOffset}%`,
              top: `${yOffset}%`,
              background: circle.color,
              transform: `translate3d(-50%, -50%, 0) scale3d(${shouldAnimate ? 1 : 0.8}, ${shouldAnimate ? 1 : 0.8}, 1)`,
              transition: shouldAnimate
                ? `transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${animationDelay}, opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${animationDelay}`
                : `transform 400ms cubic-bezier(0.55, 0.085, 0.68, 0.53) ${animationDelay}, opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53) ${animationDelay}`,
              opacity: shouldAnimate ? 1 : 0,
              filter: shouldAnimate ? "blur(0px)" : "blur(1px)",
              backfaceVisibility: "hidden" as const,
            }}
          />
        )
      })}
    </div>
  )
}
