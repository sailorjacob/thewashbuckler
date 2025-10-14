"use server"

import Stripe from "stripe"
import { PRODUCTS } from "../../lib/products"

// Initialize Stripe directly in the server action to ensure env vars are available
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-10-28.acacia",
})

export async function startCheckoutSession(productId: string) {
  try {
    const product = PRODUCTS.find((p) => p.id === productId)
    if (!product) {
      throw new Error(`Product with id "${productId}" not found`)
    }

    console.log("Creating checkout session for product:", product.name, "Price:", product.priceInCents)

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
