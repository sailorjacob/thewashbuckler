import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { CartProvider } from "@/components/cart-context"
import { CartDrawer } from "@/components/cart-drawer"

// Force dynamic rendering for all pages to avoid client component serialization issues
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "The Washbuckler™ - Sink Splash Guard | Keep Your Kitchen Dry",
  description:
    "Say goodbye to kitchen sink splashes with The Washbuckler™. Revolutionary splash guard that installs in seconds. Rated 4.9/5 stars.",
  keywords: "sink splash guard, kitchen accessories, dishwashing, splash protection, Washbuckler",
  icons: {
    icon: "/placeholder-logo.svg",
    shortcut: "/placeholder-logo.svg",
    apple: "/placeholder-logo.svg",
  },
  openGraph: {
    title: "The Washbuckler™ - Sink Splash Guard",
    description: "Revolutionary sink splash guard that keeps your kitchen dry and clean.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <CartProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <CartDrawer />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
