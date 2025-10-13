import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RotateCcw, CheckCircle, XCircle } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Returns & Refunds
              <span className="block text-primary">30-Day Money-Back Guarantee</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Not satisfied? We'll make it right with our hassle-free return policy.
            </p>
          </div>
        </section>

        {/* Return Policy */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
                <RotateCcw className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Promise to You</h2>
                <p className="text-lg text-muted-foreground">
                  We're confident you'll love The Washbuckler™, but if you're not completely satisfied, you can return
                  it within 30 days of delivery for a full refund. No questions asked.
                </p>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">How to Return Your Product</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Contact Us</h4>
                        <p className="text-muted-foreground">
                          Email us at splash@thewashbuckler.com with your order number and reason for return.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Receive Return Label</h4>
                        <p className="text-muted-foreground">
                          We'll send you a prepaid return shipping label via email within 24 hours.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Ship It Back</h4>
                        <p className="text-muted-foreground">
                          Pack your Washbuckler™ securely, attach the label, and drop it off at any USPS location.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Get Your Refund</h4>
                        <p className="text-muted-foreground">
                          Once we receive your return, we'll process your refund within 3-5 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-lg bg-green-500/10 border border-green-500/20">
                    <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Eligible for Return</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Within 30 days of delivery</li>
                      <li>✓ Product in original condition</li>
                      <li>✓ All original packaging included</li>
                      <li>✓ Proof of purchase provided</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-red-500/10 border border-red-500/20">
                    <XCircle className="h-8 w-8 text-red-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Not Eligible for Return</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✗ After 30 days from delivery</li>
                      <li>✗ Product damaged by misuse</li>
                      <li>✗ Missing original packaging</li>
                      <li>✗ Unauthorized returns</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Refund Information</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Refunds will be issued to the original payment method used for purchase. Please allow 3-5 business
                      days for the refund to appear in your account after we process it.
                    </p>
                    <p>
                      Shipping costs are non-refundable unless the return is due to our error (defective product, wrong
                      item shipped, etc.).
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Exchanges</h3>
                  <p className="text-muted-foreground">
                    If you received a defective or damaged product, we'll send you a replacement immediately at no
                    charge. Simply contact us at splash@thewashbuckler.com with photos of the issue, and we'll take care
                    of it right away.
                  </p>
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
