'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getAssetPath } from '@/lib/constants'

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster={getAssetPath('/images/shutterstock_2644707669.jpg')}
        >
          <source src={getAssetPath('/videos/shutterstock_3662626007.mov')} type="video/quicktime" />
          <source src={getAssetPath('/videos/shutterstock_3662626007.mov')} type="video/mp4" />
        </video>
        {/* Fallback Image */}
        <Image
          src={getAssetPath('/images/shutterstock_2644707669.jpg')}
          alt="MONAD Law Firm"
          fill
          className="object-cover -z-10"
          priority
        />
      </div>

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full container-custom flex flex-col justify-end pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Clear thinking.<br />
            Decisive execution.
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Strategic legal advice for companies, investors and private clients
            navigating complex matters across borders.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services/companies"
              className="inline-flex items-center bg-white text-primary-900 px-6 py-3 font-medium hover:bg-orange-500 hover:text-white transition-colors"
            >
              Our services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-primary-900 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
