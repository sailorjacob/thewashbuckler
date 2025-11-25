"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart } from "lucide-react"
import { SafeImage } from "@/components/ui/safe-image"
import { useCart } from "./cart-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { addItem, openCart, itemCount } = useCart()

  const handleBuyNow = () => {
    addItem("washbuckler-splash-guard")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <SafeImage
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/logooutline.png"
                fallbackSrc="/placeholder-logo.svg"
                alt="The Washbuckler"
                width={180}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/product" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Product
            </a>
            <a href="/features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a
              href="/how-it-works"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative" onClick={openCart}>
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Button>
            <Button size="lg" className="btn-iridescent text-foreground font-semibold" onClick={handleBuyNow}>
              Buy Now - $24.99
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="/product"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Product
            </a>
            <a
              href="/features"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="/how-it-works"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <Button size="lg" className="w-full btn-iridescent text-foreground font-semibold" onClick={handleBuyNow}>
              Buy Now - $24.99
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
