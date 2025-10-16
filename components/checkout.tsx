"use client"

import { useCallback, useState } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Alert, AlertDescription } from "./ui/alert"
import { Button } from "./ui/button"
import { Loader2, AlertCircle } from "lucide-react"

import { startCheckoutSession } from "../app/actions/stripe"

// Load Stripe with the publishable key (this is public and safe to expose)
const stripePromise = loadStripe('pk_live_51SICORBUARbUI1owpJYZeKFxLRFBNf3BRA46UTdymBKaehpLpyvJZiya7AFyB6QxugEvhxeWMFLCPHF5jeNldgYI00HfcpF39g')

export default function Checkout({ productId }: { productId: string }) {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const startCheckoutSessionForProduct = useCallback(async () => {
    try {
      setError(null)
      setIsLoading(true)
      const clientSecret = await startCheckoutSession(productId)
      setIsLoading(false)
      return clientSecret
    } catch (err) {
      console.error("Checkout error:", err)
      setError(err instanceof Error ? err.message : "Failed to initialize checkout")
      setIsLoading(false)
      throw err
    }
  }, [productId])

  const handleRetry = () => {
    setError(null)
    setIsLoading(true)
    // The EmbeddedCheckoutProvider will automatically retry when we clear the error
  }

  if (error) {
    return (
      <div className="space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
        <Button onClick={handleRetry} className="w-full">
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div id="checkout" className="relative">
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-3">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <span className="text-lg text-muted-foreground">Loading secure checkout...</span>
          </div>
        </div>
      )}
      <EmbeddedCheckoutProvider 
        stripe={stripePromise} 
        options={{ 
          fetchClientSecret: startCheckoutSessionForProduct,
          onComplete: () => setIsLoading(false)
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
