"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "How does The Washbuckler™ work?",
      answer:
        "The Washbuckler™ uses an innovative curved design that sits behind your faucet and catches water splashes, redirecting them back into the sink. Simply place it behind your faucet - no installation required!",
    },
    {
      question: "Will it fit my sink?",
      answer:
        "The Washbuckler™ is designed to work with most standard kitchen sinks and faucets. Its flexible design adapts to various sink configurations. If you have an unusual sink setup, please contact us before ordering.",
    },
    {
      question: "Is it dishwasher safe?",
      answer:
        "Yes! The Washbuckler™ is completely dishwasher safe. Simply place it on the top rack of your dishwasher for easy cleaning. You can also wipe it down with a damp cloth.",
    },
    {
      question: "What is it made of?",
      answer:
        "The Washbuckler™ is made from premium BPA-free plastic that's food-safe and durable. It's designed to withstand daily use and maintain its shape and effectiveness over time.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "We offer free standard shipping on all orders, which typically takes 5-7 business days. Expedited shipping options are available at checkout for faster delivery.",
    },
    {
      question: "What's your return policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not completely satisfied with your Washbuckler™, return it within 30 days for a full refund. See our Returns page for more details.",
    },
    {
      question: "Do you offer a warranty?",
      answer:
        "Yes! The Washbuckler™ comes with a 1-year warranty against manufacturing defects. If you experience any issues with your splash guard, we'll replace it free of charge.",
    },
    {
      question: "Can I buy multiple units?",
      answer:
        "Many customers buy multiple Washbucklers™ for different sinks in their home or as gifts. We offer bundle discounts for multiple purchases - check our product page for current offers.",
    },
    {
      question: "How do I clean it?",
      answer:
        "Cleaning is easy! Either place it in the dishwasher (top rack) or simply wipe it down with a damp cloth and mild soap. The smooth surface prevents buildup and makes maintenance effortless.",
    },
    {
      question: "Will it block my faucet?",
      answer:
        "No! The Washbuckler™ is designed to sit behind your faucet without interfering with water flow or faucet movement. You'll have full access to your faucet while enjoying splash protection.",
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
              Frequently Asked
              <span className="block text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything you need to know about The Washbuckler™
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-muted/30">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our customer support team is here to help.
            </p>
            <a href="mailto:splash@thewashbuckler.com" className="text-primary hover:underline font-semibold text-lg">
              splash@thewashbuckler.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
