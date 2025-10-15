import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Force dynamic rendering to avoid client component serialization issues
export const dynamic = 'force-dynamic'

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Unbox Your Washbuckler™",
      description:
        "Remove your new splash guard from the packaging. No assembly required - it's ready to use right out of the box!",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/packagedetailsfront.png",
    },
    {
      number: "02",
      title: "Position Inside of Sink, Obviously!",
      description:
        "Simply place The Washbuckler™ inside your kitchen sink. The flexible design adapts to most sink configurations.",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/attaching.jpeg",
    },
    {
      number: "03",
      title: "Enjoy Splash-Free Washing",
      description:
        "Start washing dishes as normal. The Washbuckler™ catches and redirects water back into the sink, keeping your counters dry.",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/washing.jpeg",
    },
    {
      number: "04",
      title: "Easy Cleaning & Maintenance",
      description:
        "When needed, simply toss it in the dishwasher or wipe it down. Maintaining your splash guard is effortless.",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/washing%20close%20up.jpeg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              How It Works
              <span className="block text-primary">Simple. Effective. Brilliant.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get started with The Washbuckler™ in seconds. No installation, no hassle, just instant splash protection.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                    <h2 className="text-4xl font-bold mb-6">{step.title}</h2>
                    <p className="text-xl text-muted-foreground mb-8">{step.description}</p>
                  </div>
                  <div
                    className={`relative h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Kitchen?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have said goodbye to messy counters forever.
            </p>
            <Button size="lg" className="btn-iridescent text-foreground font-semibold">
              Order Your Washbuckler™ Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
