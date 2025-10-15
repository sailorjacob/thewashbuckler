"use server"

import { NextRequest, NextResponse } from "next/server"
import { startCheckoutSession } from "../../actions/stripe"

// Export runtime to ensure Node.js runtime
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
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
