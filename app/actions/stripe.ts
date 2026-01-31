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
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'], // Collect shipping addresses for US and Canada
      },
      phone_number_collection: {
        enabled: true, // Also collect phone number for shipping updates
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd',
            },
            display_name: 'Standard Shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 999, // $9.99 in cents
              currency: 'usd',
            },
            display_name: 'Express Shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 2,
              },
              maximum: {
                unit: 'business_day',
                value: 3,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd',
            },
            display_name: 'Local Pickup',
            metadata: {
              type: 'pickup',
            },
          },
        },
      ],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
              images: product.images ? product.images.filter(img => img.startsWith('http')).slice(0, 1) : undefined,
            },
            unit_amount: product.priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
    })

    console.log("Checkout session created successfully:", session.id)
    return session.client_secret
  } catch (error) {
    console.error("Error creating checkout session:", error)
    throw error
  }
}
