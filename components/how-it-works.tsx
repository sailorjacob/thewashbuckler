"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatedBackgroundCircles } from "./animated-background-circles"

const steps = [
  {
    number: "01",
    title: "Unbox Your Washbuckler™",
    description: "Remove The Washbuckler™ from its packaging and inspect the suction cups for a secure fit.",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/packagedetailsfront.png",
    backImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/packgedetailsback.png",
  },
  {
    number: "02",
    title: "Attach to Sink",
    description:
      "Press the suction cups firmly against the inside of your sink. Ensure a tight seal for maximum protection.",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/attaching.jpeg",
  },
  {
    number: "03",
    title: "Wash Splash-Free",
    description: "Enjoy a completely splash-free dishwashing experience. Keep your kitchen clean and dry.",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/washing.jpeg",
  },
]

export function HowItWorks() {
  const [flippedStep, setFlippedStep] = useState<number | null>(null)

  return (
    <section id="how-it-works" className="relative py-20 sm:py-32 bg-accent/30">
      <AnimatedBackgroundCircles />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance">Setup in 3 Simple Steps</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            From box to splash-free in under 60 seconds. It's that easy.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-block px-4 py-2 rounded-full badge-iridescent text-sm">STEP {step.number}</div>
                <h3 className="text-3xl sm:text-4xl font-bold">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {step.backImage ? (
                  <div
                    className="relative aspect-square rounded-3xl cursor-pointer perspective-1000"
                    onClick={() => setFlippedStep(flippedStep === index ? null : index)}
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                        flippedStep === index ? "rotate-y-180" : ""
                      }`}
                    >
                      {/* Front side */}
                      <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-card border-2 border-border">
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          fill
                          className="object-contain scale-90"
                        />
                      </div>
                      {/* Back side */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden bg-card border-2 border-border">
                        <Image
                          src={step.backImage || "/placeholder.svg"}
                          alt={`${step.title} - Back`}
                          fill
                          className="object-contain scale-90"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-card border-2 border-border">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
