import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Inventory Demand Forecaster — Prevent Stockouts with AI',
  description: 'Predict inventory needs 30-90 days ahead using AI-powered demand forecasting. Built for Shopify stores with 100+ SKUs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9b416e26-8d83-406f-8e60-465a95cf5f0d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
