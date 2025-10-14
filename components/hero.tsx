"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import { useCart } from "./cart-context"

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Star className="h-4 w-4 fill-current" />
              <span>Rated 4.9/5 by Happy Customers</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Say Goodbye to <span className="text-primary">Kitchen Sink Splashes</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              The Washbuckler™ is the revolutionary sink splash guard that keeps your counters dry, your clothes clean,
              and your kitchen mess-free. Install in seconds, enjoy for years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="btn-iridescent text-foreground font-semibold text-lg px-8 py-6"
                onClick={handleShopNow}
              >
                Shop Now - $29.99
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-transparent">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
                <span className="ml-2 text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="text-sm text-muted-foreground">
                ✓ Free Shipping • ✓ 30-Day Returns • ✓ 2-Year Warranty
              </div>
            </div>
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
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Splash-Free</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
