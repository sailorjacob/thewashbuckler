"use client"

import { useCart } from "./cart-context"
import { getProduct, formatPrice } from "@/lib/products"
import { Button } from "./ui/button"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useState } from "react"
import dynamic from "next/dynamic"

const Checkout = dynamic(() => import("./checkout"), { ssr: false })

export function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem, itemCount } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  if (!isCartOpen) return null

  const total = items.reduce((sum, item) => {
    const product = getProduct(item.productId)
    return sum + (product?.priceInCents || 0) * item.quantity
  }, 0)

  if (showCheckout && items.length > 0) {
    const productId = items[0].productId
    return (
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="fixed inset-y-0 right-0 w-full max-w-2xl bg-background shadow-2xl overflow-y-auto">
          <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between z-10">
            <h2 className="text-2xl font-bold">Checkout</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setShowCheckout(false)
                closeCart()
              }}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="p-6">
            <Checkout productId={productId} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={closeCart}>
      <div
        className="fixed inset-y-0 right-0 w-full max-w-md bg-background shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Your Cart ({itemCount})</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={closeCart}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-lg text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <>
              {items.map((item) => {
                const product = getProduct(item.productId)
                if (!product) return null

                return (
                  <div key={item.productId} className="flex gap-4 p-4 rounded-lg border border-border">
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                      <p className="text-lg font-bold text-primary">{formatPrice(product.priceInCents)}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeItem(item.productId)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center gap-2 border border-border rounded-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Total */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-bold text-2xl text-primary">{formatPrice(total)}</span>
                </div>
                <Button
                  size="lg"
                  className="w-full btn-iridescent text-foreground font-semibold text-lg"
                  onClick={() => setShowCheckout(true)}
                >
                  Proceed to Checkout
                </Button>
                <p className="text-xs text-center text-muted-foreground">Secure checkout powered by Stripe</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
