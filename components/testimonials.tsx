import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Chef",
    content:
      "This is a game-changer! I used to spend so much time wiping down my counters after doing dishes. Now my kitchen stays clean and dry. Worth every penny!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Busy Parent",
    content:
      "As a parent of three, I needed something that actually works. The Washbuckler™ has saved me countless hours of cleanup. My kids can even help with dishes now without making a mess!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Professional Organizer",
    content:
      "I recommend this to all my clients. It's simple, effective, and keeps kitchens looking pristine. The installation is so easy, anyone can do it.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="hidden py-20 sm:py-32 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance">Loved by Our Customers</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            See what people are saying about The Washbuckler™.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
