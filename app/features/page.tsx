import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Droplets, Sparkles, Zap, Heart, Leaf } from "lucide-react"

// Force dynamic rendering to avoid client component serialization issues
export const dynamic = 'force-dynamic'

export default function FeaturesPage() {
  const features = [
    {
      icon: Droplets,
      title: "99% Splash Protection",
      description:
        "Our innovative design blocks virtually all water splashes, keeping your counters and floors dry while you wash dishes.",
    },
    {
      icon: Shield,
      title: "Durable Construction",
      description:
        "Made from premium BPA-free materials that withstand daily use and maintain their shape and effectiveness over time.",
    },
    {
      icon: Sparkles,
      title: "Easy Installation",
      description:
        "No tools required! Simply place The Washbuckler™ behind your faucet and enjoy instant splash protection.",
    },
    {
      icon: Zap,
      title: "Universal Fit",
      description:
        "Designed to work with most standard kitchen sinks and faucets, making it the perfect solution for any home.",
    },
    {
      icon: Heart,
      title: "Easy to Clean",
      description:
        "Dishwasher safe and easy to wipe down. Maintaining your splash guard is as simple as washing your dishes.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Reduce water waste and cleaning product usage by keeping your kitchen cleaner with less effort.",
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
              Features That Make
              <span className="block text-primary">A Difference</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover why thousands of homeowners trust The Washbuckler™ to keep their kitchens clean and dry.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-8 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Before & After</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-background border-2 border-destructive/20">
                <h3 className="text-2xl font-semibold mb-4 text-destructive">Without Washbuckler™</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>❌ Constant counter wiping</li>
                  <li>❌ Water damage to cabinets</li>
                  <li>❌ Slippery floors</li>
                  <li>❌ Wasted cleaning time</li>
                  <li>❌ Frustration and mess</li>
                </ul>
              </div>
              <div className="p-8 rounded-lg bg-primary/5 border-2 border-primary/20">
                <h3 className="text-2xl font-semibold mb-4 text-primary">With Washbuckler™</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✅ Dry counters all day</li>
                  <li>✅ Protected cabinets</li>
                  <li>✅ Safe, dry floors</li>
                  <li>✅ More free time</li>
                  <li>✅ Peace of mind</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
