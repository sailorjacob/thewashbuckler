import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, CheckCircle } from "lucide-react"

export default function WarrantyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Product Warranty
              <span className="block text-primary">We Stand Behind Our Product</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Your Washbuckler™ is covered by our comprehensive 1-year warranty.
            </p>
          </div>
        </section>

        {/* Warranty Details */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">1-Year Limited Warranty</h2>
                <p className="text-lg text-muted-foreground">
                  The Washbuckler™ is warranted to be free from defects in materials and workmanship for one year from
                  the date of purchase. If your product fails due to a manufacturing defect, we'll replace it free of
                  charge.
                </p>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">What's Covered</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Manufacturing defects in materials</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Defects in workmanship</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Structural failures under normal use</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Material degradation under normal conditions</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">What's Not Covered</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>This warranty does not cover:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Damage caused by misuse, abuse, or improper care</li>
                      <li>Normal wear and tear</li>
                      <li>Damage from accidents or drops</li>
                      <li>Modifications or alterations to the product</li>
                      <li>Damage from extreme temperatures or chemicals</li>
                      <li>Products purchased from unauthorized retailers</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">How to Make a Warranty Claim</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Contact Us</h4>
                        <p className="text-muted-foreground">
                          Email splash@thewashbuckler.com with your order number and a description of the issue.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Provide Photos</h4>
                        <p className="text-muted-foreground">
                          Send clear photos of the defect to help us assess the issue quickly.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Receive Replacement</h4>
                        <p className="text-muted-foreground">
                          Once approved, we'll ship your replacement immediately at no cost to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Important Notes</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Proof of purchase is required for all warranty claims</li>
                    <li>• Warranty is non-transferable and applies only to the original purchaser</li>
                    <li>• Replacement products are covered for the remainder of the original warranty period</li>
                    <li>• We reserve the right to inspect returned products to verify warranty claims</li>
                    <li>
                      • This warranty gives you specific legal rights, and you may have other rights that vary by state
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Questions?</h3>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about our warranty or need to make a claim, our customer service team is here
                    to help.
                  </p>
                  <a href="mailto:splash@thewashbuckler.com" className="text-primary hover:underline font-semibold">
                    splash@thewashbuckler.com
                  </a>
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
