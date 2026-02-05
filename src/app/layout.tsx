import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'MONAD | Premium Legal Solutions',
  description: 'Premium legal solutions for businesses and individuals. Expert counsel in corporate law, real estate, technology, and more.',
  keywords: 'law firm, legal services, corporate law, real estate law, immigration, GDPR, intellectual property, Greece, Athens',
  openGraph: {
    title: 'MONAD | Premium Legal Solutions',
    description: 'Premium legal solutions for businesses and individuals.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
