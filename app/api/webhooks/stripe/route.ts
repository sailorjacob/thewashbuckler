import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(request: NextRequest) {
  // Initialize Stripe only when the webhook is called, not during build
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("Missing Stripe environment variables")
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET
  try {
    const body = await request.text()
    const sig = request.headers.get("stripe-signature")!

    let event: Stripe.Event

    try {
      // Verify webhook signature
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
    } catch (err: any) {
      console.error(`Webhook signature verification failed: ${err.message}`)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session
        await handleSuccessfulPayment(session)
        break

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        await handlePaymentSuccess(paymentIntent)
        break

      case "payment_intent.payment_failed":
        const failedPayment = event.data.object as Stripe.PaymentIntent
        await handleFailedPayment(failedPayment)
        break

      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    )
  }
}

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  console.log("Payment successful for session:", session.id)

  // TODO: Implement your order fulfillment logic here
  // Examples:
  // - Update order status in your database
  // - Send confirmation email to customer
  // - Trigger shipping/delivery process
  // - Update inventory

  // For now, just log the session details
  console.log("Session details:", {
    id: session.id,
    customer_email: session.customer_details?.email,
    amount_total: session.amount_total,
    currency: session.currency,
    payment_status: session.payment_status,
  })
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  console.log("Payment intent succeeded:", paymentIntent.id)

  // This handles cases where you're using Payment Intents directly
  // rather than Checkout Sessions
}

async function handleFailedPayment(paymentIntent: Stripe.PaymentIntent) {
  console.log("Payment failed for intent:", paymentIntent.id)

  // TODO: Implement failed payment handling
  // - Send email to customer about failed payment
  // - Log for manual review
  // - Update order status
}
