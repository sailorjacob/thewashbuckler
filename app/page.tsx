import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { ProductShowcase } from "@/components/product-showcase"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { FloatingBubbles } from "@/components/floating-bubbles"

// Force dynamic rendering to avoid client component serialization issues
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingBubbles />
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <ProductShowcase />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
