"use client"

import { useCallback } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import { startCheckoutSession } from "../app/actions/stripe"

// Load Stripe with the publishable key (this is public and safe to expose)
const stripePromise = loadStripe('pk_live_51SICORBUARbUI1owpJYZeKFxLRFBNf3BRA46UTdymBKaehpLpyvJZiya7AFyB6QxugEvhxeWMFLCPHF5jeNldgYI00HfcpF39g')

export default function Checkout({ productId }: { productId: string }) {
  const startCheckoutSessionForProduct = useCallback(() => startCheckoutSession(productId), [productId])

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret: startCheckoutSessionForProduct }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
