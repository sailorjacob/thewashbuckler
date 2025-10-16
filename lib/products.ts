export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  images?: string[]
}

// This is the source of truth for all products
export const PRODUCTS: Product[] = [
  {
    id: "washbuckler-splash-guard",
    name: "The Washbuckler™ - Sink Splash Guard",
    description:
      "Revolutionary sink splash guard that keeps your counters dry and your kitchen mess-free. Easy installation, premium quality.",
    priceInCents: 1499, // $14.99
    images: [
      "/modern-sink-splash-guard-product-shot.jpg",
      "/splash-guard-installed-on-modern-kitchen-sink.jpg",
      "/modern-sink-splash-guard-product-on-kitchen-counte.jpg"
    ],
  },
]

// Helper function to format price
export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}

// Helper function to get product by ID
export function getProduct(productId: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === productId)
}
