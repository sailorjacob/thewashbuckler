import { StaticHeader } from "@/components/static-header"
import { StaticFooter } from "@/components/static-footer"

// Force dynamic rendering to avoid client component serialization issues
export const dynamic = 'force-dynamic'

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <StaticHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Terms of Service
              <span className="block text-primary">Our Agreement With You</span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                  <p>
                    By accessing or using The Washbuckler™ website and purchasing our products, you agree to be bound by
                    these Terms of Service. If you disagree with any part of these terms, you may not access our website
                    or purchase our products.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Use of Website</h2>
                  <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Infringe on the rights of others</li>
                    <li>Restrict or inhibit anyone else's use of the website</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use the website for any fraudulent or malicious purpose</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Product Information</h2>
                  <p>
                    We strive to provide accurate product descriptions and images. However, we do not warrant that
                    product descriptions, images, or other content is accurate, complete, reliable, current, or
                    error-free. Colors may vary slightly due to monitor settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Pricing and Payment</h2>
                  <p>
                    All prices are in USD and are subject to change without notice. We reserve the right to refuse or
                    cancel any order for any reason, including pricing errors. Payment must be received before products
                    are shipped.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Shipping and Delivery</h2>
                  <p>
                    We will make every effort to deliver products within the estimated timeframe. However, we are not
                    responsible for delays caused by shipping carriers or circumstances beyond our control.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Returns and Refunds</h2>
                  <p>
                    Our return policy is outlined on our Returns page. By making a purchase, you agree to our return and
                    refund terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                  <p>
                    All content on this website, including text, graphics, logos, images, and software, is the property
                    of The Washbuckler™ and is protected by copyright and trademark laws. You may not reproduce,
                    distribute, or create derivative works without our express written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by law, The Washbuckler™ shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages resulting from your use of our products or
                    website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Warranty Disclaimer</h2>
                  <p>
                    Our products are provided "as is" without warranties of any kind, either express or implied. We do
                    not warrant that our products will meet your requirements or that they will be uninterrupted,
                    timely, secure, or error-free.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless The Washbuckler™ from any claims, damages, losses, or
                    expenses arising from your use of our products or violation of these terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                  <p>
                    These Terms of Service shall be governed by and construed in accordance with the laws of the United
                    States, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                    posting to the website. Your continued use of the website after changes constitutes acceptance of
                    the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p>
                    If you have questions about these Terms of Service, please contact us at:
                    <br />
                    <a href="mailto:splash@thewashbuckler.com" className="text-primary hover:underline">
                      splash@thewashbuckler.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <StaticFooter />
    </div>
  )
}
