import { NextRequest, NextResponse } from "next/server"
import { unstable_noStore as noStore } from "next/cache"
import { generateOrderCode } from "@/lib/order-utils"
import { sendEmails } from "@/lib/email"
import { getCustomerConfirmationEmail, getAdminNotificationEmail } from "@/lib/email-templates"

export async function POST(request: NextRequest) {
  // Force dynamic rendering and prevent caching
  noStore()

  // Early return if environment variables are not available (build time)
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.log("Build time execution detected - skipping Stripe initialization")
    return NextResponse.json({ error: "Service temporarily unavailable" }, { status: 503 })
  }

  // Lazy import and initialize Stripe only when needed
  const Stripe = (await import("stripe")).default
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
        let session = event.data.object as Stripe.Checkout.Session
        
        // Expand session to get full shipping details and shipping rate info
        if (session.id) {
          try {
            session = await stripe.checkout.sessions.retrieve(session.id, {
              expand: ['line_items', 'shipping_details', 'shipping_cost.shipping_rate']
            })
          } catch (err) {
            console.error("Failed to retrieve expanded session:", err)
          }
        }
        
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
  console.log("💳 Payment successful for session:", session.id)

  try {
    // Generate unique order confirmation code
    const orderCode = generateOrderCode()
    console.log("📦 Generated order code:", orderCode)

    // Extract customer and order details
    const customerEmail = session.customer_details?.email
    const customerName = session.customer_details?.name
    const shippingAddress = session.shipping_details?.address
    const phone = session.customer_details?.phone
    
    // Check if this is a local pickup order
    const shippingOption = session.shipping_cost?.shipping_rate
    let isLocalPickup = false
    let shippingMethod = 'Standard Shipping'
    
    // The shipping_rate could be a string ID or an expanded object
    if (typeof shippingOption === 'object' && shippingOption !== null) {
      const shippingRate = shippingOption as Stripe.ShippingRate
      shippingMethod = shippingRate.display_name || 'Standard Shipping'
      isLocalPickup = shippingRate.metadata?.type === 'pickup'
    }
    
    console.log("🚚 Shipping method:", shippingMethod, "| Local pickup:", isLocalPickup)

    if (!customerEmail) {
      console.error("❌ No customer email found in session")
      return
    }

    // Only require shipping address for non-pickup orders
    if (!isLocalPickup && !shippingAddress) {
      console.error("❌ No shipping address found in session")
      return
    }

    // Get product name from line items (need to expand line_items in webhook)
    const productName = "The Washbuckler™ - Sink Splash Guard"
    const quantity = 1

    // Prepare order details
    const orderDetails = {
      orderCode,
      customerEmail,
      customerName: customerName || undefined,
      productName,
      quantity,
      amount: session.amount_total || 0,
      shippingMethod,
      isLocalPickup,
      shippingAddress: isLocalPickup ? undefined : {
        line1: shippingAddress?.line1,
        line2: shippingAddress?.line2,
        city: shippingAddress?.city,
        state: shippingAddress?.state,
        postal_code: shippingAddress?.postal_code,
        country: shippingAddress?.country,
      },
      phone: phone || undefined,
    }

    // Log order details
    console.log("📋 Order Details:", {
      orderCode,
      customerEmail,
      customerName,
      amount: session.amount_total,
      shippingMethod,
      isLocalPickup,
      shippingAddress: orderDetails.shippingAddress,
      phone,
    })

    // Generate email templates
    const customerEmail_template = getCustomerConfirmationEmail(orderDetails)
    const adminEmail_template = getAdminNotificationEmail(orderDetails)

    // Send emails
    const adminEmailAddress = process.env.ADMIN_EMAIL || 'support@thewashbuckler.com'
    
    console.log("📧 Sending confirmation emails...")
    const emailResults = await sendEmails([
      {
        to: customerEmail,
        subject: customerEmail_template.subject,
        html: customerEmail_template.html,
        text: customerEmail_template.text,
      },
      {
        to: adminEmailAddress,
        subject: adminEmail_template.subject,
        html: adminEmail_template.html,
        text: adminEmail_template.text,
      },
    ])

    const [customerSent, adminSent] = emailResults
    console.log("📧 Customer email sent:", customerSent ? "✅" : "❌")
    console.log("📧 Admin email sent:", adminSent ? "✅" : "❌")

    console.log("✅ Order processing complete!")
  } catch (error) {
    console.error("❌ Error processing order:", error)
    // Don't throw - we still want to return 200 to Stripe
  }
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
