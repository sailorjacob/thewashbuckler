import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Truck, Package, Globe, Clock } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Shipping Information
              <span className="block text-primary">Fast & Reliable Delivery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We ship your Washbuckler™ quickly and securely to your door.
            </p>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 rounded-lg bg-muted/30 border border-border">
                  <Truck className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">Standard Shipping</h3>
                  <p className="text-muted-foreground mb-4">5-7 business days</p>
                  <p className="text-3xl font-bold text-primary">FREE</p>
                </div>
                <div className="p-8 rounded-lg bg-muted/30 border border-border">
                  <Package className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">Express Shipping</h3>
                  <p className="text-muted-foreground mb-4">2-3 business days</p>
                  <p className="text-3xl font-bold text-primary">$9.99</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Shipping Locations</h3>
                      <p className="text-muted-foreground">
                        We currently ship to all 50 US states. International shipping coming soon! Sign up for our
                        newsletter to be notified when we expand to your country.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Processing Time</h3>
                      <p className="text-muted-foreground">
                        Orders are processed within 1-2 business days. You'll receive a tracking number via email once
                        your order ships.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Order Tracking</h3>
                  <p className="text-muted-foreground">
                    Once your order ships, you'll receive a confirmation email with a tracking number. You can track
                    your package in real-time to know exactly when it will arrive.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Shipping FAQs</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Do you ship to PO boxes?</h4>
                      <p className="text-muted-foreground">
                        Yes, we ship to PO boxes using USPS. Please note that express shipping is not available for PO
                        box addresses.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">What if my package is lost or damaged?</h4>
                      <p className="text-muted-foreground">
                        If your package is lost or arrives damaged, please contact us at splash@thewashbuckler.com
                        within 48 hours of delivery. We'll send you a replacement right away.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Can I change my shipping address after ordering?</h4>
                      <p className="text-muted-foreground">
                        If your order hasn't shipped yet, we can update your address. Please contact us immediately at
                        splash@thewashbuckler.com with your order number and new address.
                      </p>
                    </div>
                  </div>
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
