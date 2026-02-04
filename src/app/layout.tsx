import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin', 'greek'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
