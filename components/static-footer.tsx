import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export function StaticFooter() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/washbucklerlogo.png"
              alt="The Washbuckler"
              width={160}
              height={45}
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              The ultimate sink splash guard for a cleaner, drier kitchen.
            </p>
            <div className="flex gap-4">
              <a
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
              </a>
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
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
              <li>
                <a href="/reviews" className="hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
              <li>
                <a href="/returns" className="hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
              <li>
                <a href="/warranty" className="hover:text-primary transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 The Washbuckler™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
