"use client"

import { SafeImage } from "@/components/ui/safe-image"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 col-span-2 sm:col-span-1">
            <SafeImage
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/logooutline.png"
              fallbackSrc="/placeholder-logo.svg"
              alt="The Washbuckler"
              width={160}
              height={45}
              className="h-7 sm:h-8 w-auto"
            />
            <p className="text-xs sm:text-sm text-muted-foreground">
              The ultimate sink splash guard for a cleaner, drier kitchen.
            </p>
            <div className="flex gap-4">
              {/* Social media icons temporarily hidden, keeping only email */}
              {/* <a
                href="https://facebook.com/thewashbuckler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/thewashbuckler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/thewashbuckler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
              <a
                href="mailto:splash@thewashbuckler.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-2 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="/product" className="hover:text-primary transition-colors">
                  Product
                </a>
              </li>
              <li>
                <a href="/features" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              {/* Reviews link temporarily hidden */}
              {/* <li>
                <a href="/reviews" className="hover:text-primary transition-colors">
                  Reviews
                </a>
              </li> */}
              <li>
                <a href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-primary transition-colors">
                  Shipping
                </a>
              </li>
              {/* Returns link temporarily hidden */}
              {/* <li>
                <a href="/returns" className="hover:text-primary transition-colors">
                  Returns
                </a>
              </li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              {/* Warranty link temporarily hidden */}
              {/* <li>
                <a href="/warranty" className="hover:text-primary transition-colors">
                  Warranty
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2025 The Washbuckler™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
