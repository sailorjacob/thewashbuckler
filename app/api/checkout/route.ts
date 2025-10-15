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
    return NextResponse.json({ error: "Service temporarily unavailable" }, { status: 503 })
  }

  try {
    const body = await request.json()
    const { productId } = body

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    const clientSecret = await startCheckoutSession(productId)
    return NextResponse.json({ clientSecret })
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
