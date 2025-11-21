import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

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
      title: "Prepare and Attach",
      description:
        "Ensure your sink walls are clean and free of debris. Run suction cups under water to moisten, then attach suction cups to the inside of your sink and adjust as needed.",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/washingsuctioncups.jpg",
    },
    {
      number: "03",
      title: "Stay Dry While You Wash!",
      description:
        "Start washing dishes as normal. The Washbuckler™ catches and redirects water back into the sink, keeping you and your clothes dry.",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/washing.jpeg",
    },
    {
      number: "04",
      title: "Easy to Clean and Store",
      description:
        "When needed, simply toss it in the dishwasher or wipe it down. Store behind faucet or in a drawer when not in use. Maintaining your splash guard is effortless.",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/storingindrawer.jpg",
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
              Get started with The Washbuckler™ in seconds. Setup is simple! Just instant protection to keep you and your clothes dry.
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
            <h2 className="text-4xl font-bold mb-6">Ready to Stay Dry While You Wash?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have said goodbye to soggy clothes and wet aprons forever.
            </p>
            <Link href="/">
              <Button size="lg" className="btn-iridescent text-foreground font-semibold">
                Order Your Washbuckler™ Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
