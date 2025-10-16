"use server"

import { PRODUCTS } from "../../lib/products"

export async function startCheckoutSession(productId: string) {
  try {
    // Check if environment variables are available (runtime check)
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY environment variable is not available")
    }

    const product = PRODUCTS.find((p) => p.id === productId)
    if (!product) {
      throw new Error(`Product with id "${productId}" not found`)
    }

    console.log("Creating checkout session for product:", product.name, "Price:", product.priceInCents)

    // Lazy import and initialize Stripe only when needed
    const Stripe = (await import("stripe")).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-10-28.acacia",
    })

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      redirect_on_completion: "never",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
              images: product.images ? product.images.map(img => 
                img.startsWith('http') ? img : `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}${img}`
              ) : undefined,
            },
            unit_amount: product.priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/`,
    })

    console.log("Checkout session created successfully:", session.id)
    return session.client_secret
  } catch (error) {
    console.error("Error creating checkout session:", error)
    throw error
  }
}
