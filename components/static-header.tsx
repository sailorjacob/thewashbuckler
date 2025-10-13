import Image from "next/image"

export function StaticHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/washbucklerlogo.png"
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

          {/* CTA Buttons - Static version without interactivity */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="/product" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
