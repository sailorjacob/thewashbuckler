import "server-only"

import Stripe from "stripe"

// Lazy initialization of Stripe to avoid build-time environment variable access
let stripeInstance: Stripe | null = null

export function getStripe(): Stripe {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY environment variable is required")
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)
  }
  return stripeInstance
}

export const stripe = new Proxy({} as Stripe, {
  get(target, prop) {
    const stripe = getStripe()
    return stripe[prop as keyof Stripe]
  }
})
