"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useCart } from "./cart-context"
import { DemoVideo } from "./demo-video"

export function Hero() {
  const { addItem } = useCart()

  const handleShopNow = () => {
    addItem("washbuckler-splash-guard")
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 to-background py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Say Goodbye to <span className="text-primary">Kitchen Sink Splashes</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              The Washbuckler - the ultimate solution for a mess-free washing experience! Tired of getting soaked while hand washing dishes? Say goodbye to soggy aprons that don't do the job. With its innovative design, the Washbuckler ensures you and your clothes stay dry by effectively blocking messy splashes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="btn-iridescent text-foreground font-semibold text-lg px-8 py-6"
                onClick={handleShopNow}
              >
                Shop Now - $24.99
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <DemoVideo>
                <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-transparent">
                  Watch Demo
                </Button>
              </DemoVideo>
            </div>

            {/* Trust Indicators - temporarily hidden */}
            {/* <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="text-sm text-muted-foreground">
                ✓ Free Shipping • ✓ 30-Day Returns
              </div>
            </div> */}
          </div>

          {/* Right Column - Product Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/product%20shothq.png"
                alt="The Washbuckler Sink Splash Guard"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border-2 border-border rounded-2xl p-6 shadow-xl">
              <div className="text-2xl font-bold text-primary">Stay Dry</div>
              <div className="text-sm text-muted-foreground">While You Wash!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
