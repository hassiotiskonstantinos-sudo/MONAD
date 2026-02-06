import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const siteUrl = 'https://hassiotiskonstantinos-sudo.github.io/MONAD'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MONAD | Premium Legal Solutions in Athens, Greece',
    template: '%s | MONAD Law Firm',
  },
  description: 'MONAD is a leading law firm in Athens, Greece offering expert legal counsel in corporate law, dispute resolution, real estate, technology, private wealth, and cross-border transactions. Clear thinking. Decisive execution.',
  keywords: [
    'law firm Athens',
    'Greek lawyers',
    'corporate law Greece',
    'dispute resolution',
    'real estate law',
    'technology law',
    'private wealth',
    'cross-border transactions',
    'FINLEX',
    'financial claims recovery',
    'investment fraud',
    'MONAD law',
  ],
  authors: [{ name: 'MONAD Law Firm' }],
  creator: 'MONAD Law Firm',
  publisher: 'MONAD Law Firm',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'el_GR',
    url: siteUrl,
    siteName: 'MONAD Law Firm',
    title: 'MONAD | Premium Legal Solutions in Athens, Greece',
    description: 'Expert legal counsel in corporate law, dispute resolution, real estate, technology, and private wealth. Clear thinking. Decisive execution.',
    images: [
      {
        url: '/images/logo-monad.png',
        width: 1200,
        height: 630,
        alt: 'MONAD Law Firm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MONAD | Premium Legal Solutions',
    description: 'Expert legal counsel in Athens, Greece. Corporate law, disputes, real estate, technology.',
    images: ['/images/logo-monad.png'],
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en': siteUrl,
      'el': `${siteUrl}/el`,
    },
  },
  category: 'Legal Services',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />

        {/* Structured Data for Law Firm */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'MONAD Law Firm',
              description: 'Premium legal solutions for businesses and individuals in Athens, Greece.',
              url: siteUrl,
              logo: `${siteUrl}/images/logo-monad.png`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Athens',
                addressCountry: 'Greece',
              },
              areaServed: ['Greece', 'Europe', 'International'],
              priceRange: '$$$$',
              openingHours: 'Mo-Fr 09:00-18:00',
              sameAs: [
                'https://www.linkedin.com/company/monad-law',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Legal Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Corporate Law',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Dispute Resolution',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Real Estate Law',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Technology Law',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Private Wealth',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
