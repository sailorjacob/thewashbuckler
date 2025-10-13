import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Users, Lightbulb, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About
              <span className="block text-primary">The Washbuckler™</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Born from frustration, perfected through innovation, loved by thousands.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The Washbuckler™ was born out of a simple frustration: constantly wiping down wet counters after
                    doing dishes. Like many of you, we were tired of the endless cycle of washing, splashing, and
                    cleaning up the mess.
                  </p>
                  <p>
                    We knew there had to be a better way. After months of design and testing, we created The
                    Washbuckler™ - a simple yet ingenious solution that keeps your kitchen dry and clean.
                  </p>
                  <p>
                    Today, thousands of households trust The Washbuckler™ to make their daily kitchen routine easier and
                    more enjoyable. We're proud to be part of your home and grateful for the opportunity to solve this
                    everyday problem.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/washbuckler/attachhed%20to%20sink.jpeg"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Customer First</h3>
                <p className="text-sm text-muted-foreground">Your satisfaction is our top priority</p>
              </div>
              <div className="text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Simple solutions to everyday problems</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality</h3>
                <p className="text-sm text-muted-foreground">Premium materials and craftsmanship</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Building a cleaner world together</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              To make everyday life easier through thoughtful design and practical innovation. We believe that small
              improvements can make a big difference in your daily routine, and we're committed to creating products
              that truly enhance your home experience.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
