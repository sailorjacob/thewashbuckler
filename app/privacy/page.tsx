import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Privacy Policy
              <span className="block text-primary">Your Privacy Matters</span>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                  <p>
                    The Washbuckler™ ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your information when you visit our website or
                    make a purchase from us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                  <p>We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email address, phone number, shipping address)</li>
                    <li>Payment information (processed securely through our payment processor)</li>
                    <li>Order history and preferences</li>
                    <li>Communications with our customer service team</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process and fulfill your orders</li>
                    <li>Send you order confirmations and shipping updates</li>
                    <li>Respond to your questions and provide customer support</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Improve our products and services</li>
                    <li>Prevent fraud and enhance security</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                  <p>We do not sell your personal information. We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers who help us operate our business (shipping, payment processing, etc.)</li>
                    <li>Law enforcement when required by law</li>
                    <li>Business partners with your explicit consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information.
                    However, no method of transmission over the internet is 100% secure, and we cannot guarantee
                    absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to processing of your information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
                  <p>
                    We use cookies and similar tracking technologies to improve your browsing experience, analyze site
                    traffic, and personalize content. You can control cookies through your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                  <p>
                    Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                    information from children under 13.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at:
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
      <Footer />
    </div>
  )
}
