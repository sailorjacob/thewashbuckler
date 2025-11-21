/**
 * Generate a unique order confirmation code
 * Format: WB-YYYY-XXXXXX (e.g., WB-2025-A3F7K2)
 */
export function generateOrderCode(): string {
  const year = new Date().getFullYear()
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // Removed confusing characters like 0, O, 1, I
  let code = ''
  
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  
  return `WB-${year}-${code}`
}

/**
 * Format shipping address for display
 */
export function formatShippingAddress(address: {
  line1?: string | null
  line2?: string | null
  city?: string | null
  state?: string | null
  postal_code?: string | null
  country?: string | null
}): string {
  const parts = [
    address.line1,
    address.line2,
    `${address.city}, ${address.state} ${address.postal_code}`,
    address.country,
  ].filter(Boolean)
  
  return parts.join('\n')
}

/**
 * Format price in cents to dollar string
 */
export function formatPrice(cents: number | null): string {
  if (!cents) return '$0.00'
  return `$${(cents / 100).toFixed(2)}`
}

