import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Shield, Droplets, Sparkles } from "lucide-react"
import { SafeImage } from "@/components/ui/safe-image"
import { DemoVideo } from "@/components/demo-video"

// Force dynamic rendering to avoid client component serialization issues
export const dynamic = 'force-dynamic'

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                  The Washbuckler™
                  <span className="block text-primary">Sink Splash Guard</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Transform your kitchen experience with our innovative splash guard that keeps your counters dry and
                  your space cleaner.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="btn-iridescent text-foreground font-semibold">
                    Order Now - $14.99
                  </Button>
                  <DemoVideo>
                    <Button size="lg" variant="outline">
                      Watch Demo
                    </Button>
                  </DemoVideo>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px]">
                <SafeImage
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/packagingoncounter.jpeg"
                  fallbackSrc="/placeholder.jpg"
                  alt="The Washbuckler Sink Splash Guard"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Product Specifications</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold mb-4">Dimensions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Length: 24 inches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Height: 8 inches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Weight: 12 oz</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold mb-4">Materials</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>BPA-free premium plastic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Durable construction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Easy to maintain</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Durable Design</h3>
                  <p className="text-sm text-muted-foreground">Built to last with premium materials</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Water Resistant</h3>
                  <p className="text-sm text-muted-foreground">Blocks 99% of water splashes</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Easy to Clean</h3>
                  <p className="text-sm text-muted-foreground">Simple wipe-down maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
