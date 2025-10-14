"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useCart } from "./cart-context"

const benefits = [
  "Premium food-safe materials",
  "Secure suction cup attachment",
  "Easy to clean & maintain",
  "Dishwasher safe",
]

export function ProductShowcase() {
  const { addItem } = useCart()

  const handleOrderNow = () => {
    addItem("washbuckler-splash-guard")
  }

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-accent">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/washing%20close%20up.jpeg"
                alt="Washbuckler Detail"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-accent">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/attachhed%20to%20sink.jpeg"
                alt="Washbuckler Installed"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-accent col-span-2">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/packagingoncounter.jpeg"
                alt="Washbuckler in Action"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance">
                Premium Quality You Can Trust
              </h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                The Washbuckler™ is crafted from the highest quality materials, designed to last, and engineered to make
                your life easier every single day.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="btn-iridescent text-foreground font-semibold text-lg px-8 py-6"
                onClick={handleOrderNow}
              >
                Order Your Washbuckler™ Today
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                ✓ Free shipping on orders over $50 • ✓ 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
