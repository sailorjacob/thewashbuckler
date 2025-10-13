import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "January 15, 2025",
      title: "Life-changing kitchen accessory!",
      content:
        "I can't believe I lived without this for so long. My counters stay completely dry now, and I'm not constantly wiping up water. Worth every penny!",
      verified: true,
    },
    {
      name: "Michael Chen",
      rating: 5,
      date: "January 12, 2025",
      title: "Perfect fit for my sink",
      content:
        "Easy to install and works exactly as advertised. The quality is excellent and it looks great in my kitchen. Highly recommend!",
      verified: true,
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      date: "January 10, 2025",
      title: "Best purchase this year",
      content:
        "My husband was skeptical, but now he's a believer. No more water all over the counter and floor. This thing really works!",
      verified: true,
    },
    {
      name: "David Thompson",
      rating: 5,
      date: "January 8, 2025",
      title: "Works perfectly!",
      content:
        "The suction cups hold strong and it keeps all the water contained. Installation was a breeze. Definitely recommend this product!",
      verified: true,
    },
    {
      name: "Lisa Martinez",
      rating: 5,
      date: "January 5, 2025",
      title: "Exactly what I needed",
      content:
        "Simple, effective, and well-made. I've recommended it to all my friends. The dishwasher-safe feature is a huge plus!",
      verified: true,
    },
    {
      name: "James Wilson",
      rating: 5,
      date: "January 3, 2025",
      title: "Saves so much time",
      content:
        "I used to spend 10 minutes after dishes just wiping down everything. Now I don't have to. This has genuinely improved my daily routine.",
      verified: true,
    },
  ]

  const stats = [
    { label: "Average Rating", value: "4.9/5" },
    { label: "Total Reviews", value: "2,847" },
    { label: "Recommend", value: "98%" },
    { label: "Verified Purchases", value: "100%" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Customer Reviews
              <span className="block text-primary">Loved by Thousands</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              See what our customers are saying about The Washbuckler™
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="p-6 rounded-lg bg-muted/30 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    {review.verified && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Verified Purchase</span>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2">{review.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{review.content}</p>
                  <div className="text-xs text-muted-foreground">
                    <div className="font-medium">{review.name}</div>
                    <div>{review.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
