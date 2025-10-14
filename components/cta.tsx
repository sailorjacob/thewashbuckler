"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, RotateCcw } from "lucide-react"
import { useCart } from "./cart-context"

export function CTA() {
  const { addItem } = useCart()

  const handleGetWashbuckler = () => {
    addItem("washbuckler-splash-guard")
  }

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Ready for a Splash-Free Kitchen?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Transform your dishwashing experience with The Washbuckler™.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="btn-iridescent text-foreground font-semibold text-lg px-8 py-6"
              onClick={handleGetWashbuckler}
            >
              Get The Washbuckler™ - $29.99
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid sm:grid-cols-2 gap-8 pt-12 max-w-md mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full icon-iridescent flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div className="font-semibold">Free Shipping</div>
              <div className="text-sm text-muted-foreground">On orders over $50</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full icon-iridescent flex items-center justify-center">
                <RotateCcw className="h-6 w-6 text-primary" />
              </div>
              <div className="font-semibold">30-Day Returns</div>
              <div className="text-sm text-muted-foreground">Money-back guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
