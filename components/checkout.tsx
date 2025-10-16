"use client"

import { useCallback, useState, useEffect } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Alert, AlertDescription } from "./ui/alert"
import { Button } from "./ui/button"
import { Loader2, AlertCircle } from "lucide-react"

// Load Stripe with the publishable key (this is public and safe to expose)
const stripePromise = loadStripe('pk_live_51SICORBUARbUI1owpJYZeKFxLRFBNf3BRA46UTdymBKaehpLpyvJZiya7AFyB6QxugEvhxeWMFLCPHF5jeNldgYI00HfcpF39g')

export default function Checkout({ productId }: { productId: string }) {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  // Ensure this only runs on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  const startCheckoutSessionForProduct = useCallback(async () => {
    try {
      setError(null)
      setIsLoading(true)

      // Call the API route instead of the server action directly to avoid SSR issues
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP ${response.status}`)
      }

      const data = await response.json()
      setIsLoading(false)
      return data.clientSecret
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
    setRetryCount(prev => prev + 1)
    // The EmbeddedCheckoutProvider will automatically retry when we clear the error
  }

  if (error) {
    const canRetry = retryCount < 3
    return (
      <div className="space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error}
            {canRetry ? " Please try again." : " If this persists, please contact support."}
          </AlertDescription>
        </Alert>
        {canRetry && (
          <Button onClick={handleRetry} className="w-full">
            Try Again {retryCount > 0 && `(${retryCount}/3)`}
          </Button>
        )}
      </div>
    )
  }

  // Don't render until we're on the client side
  if (!isClient) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <span className="text-lg text-muted-foreground">Loading checkout...</span>
        </div>
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
        key={`${productId}-${retryCount}`}
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
