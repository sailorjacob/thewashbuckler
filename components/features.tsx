"use client"

import { Shield, Zap, Droplets, Sparkles, Clock, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Droplets,
    title: "Stay Dry While You Wash",
    description: "Effectively blocks water splashes from reaching you and your clothes while washing dishes.",
  },
  {
    icon: Zap,
    title: "Setup is Simple!",
    description: "Ensure your sink walls are clean and free of debris. Run suction cups under water to moisten, then attach suction cups to the inside of your sink and adjust as needed.",
  },
  {
    icon: Shield,
    title: "Durable & Long-Lasting",
    description: "Made of recycled plastics that withstand daily use for years.",
  },
  {
    icon: Sparkles,
    title: "Clean Design",
    description: "Sleek opaque material that complements any kitchen style while protecting your space.",
  },
  {
    icon: Clock,
    title: "Easy to Clean and Store",
    description: "Easy to wipe down and maintain. Store behind faucet or in a drawer when not in use.",
  },
  {
    icon: Heart,
    title: "Eco-Friendly Benefits",
    description: "Keep you and your clothes dry, reducing laundry loads and cleanup time. Less washing means less water and energy use.",
  },
]

export function Features() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <section id="features" className="hidden py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance">
            Why Choose The Washbuckler™?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Premium quality meets practical innovation. Discover what makes The Washbuckler™ the ultimate kitchen
            essential.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-gradient-to-br from-background to-accent/20 rounded-3xl p-12 border border-border/50 shadow-lg">
                    <div className="mb-8 flex justify-center">
                      <div className="h-20 w-20 rounded-3xl icon-iridescent flex items-center justify-center">
                        <feature.icon className="h-10 w-10 text-primary" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center max-w-2xl mx-auto">
                      <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-12 w-12 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-12 w-12 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
