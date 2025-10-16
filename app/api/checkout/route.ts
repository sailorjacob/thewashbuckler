"use server"

import { NextRequest, NextResponse } from "next/server"
import { unstable_noStore as noStore } from "next/cache"
import { startCheckoutSession } from "../../actions/stripe"

export async function POST(request: NextRequest) {
  // Force dynamic rendering and prevent caching
  noStore()

  // Early return if environment variables are not available (build time)
  if (!process.env.STRIPE_SECRET_KEY) {
    console.log("Build time execution detected - skipping Stripe initialization")
    return NextResponse.json({ error: "Stripe configuration not available" }, { status: 503 })
  }

  try {
    const body = await request.json()
    const { productId } = body

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    console.log("Creating checkout session for product:", productId)
    const clientSecret = await startCheckoutSession(productId)
    console.log("Checkout session created successfully")
    return NextResponse.json({ clientSecret })
  } catch (error) {
    console.error("Checkout error:", error)

    // Provide more specific error messages
    let errorMessage = "Failed to create checkout session"
    if (error instanceof Error) {
      if (error.message.includes("STRIPE_SECRET_KEY")) {
        errorMessage = "Payment service configuration error"
      } else if (error.message.includes("Product")) {
        errorMessage = "Invalid product selection"
      } else {
        errorMessage = error.message
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
