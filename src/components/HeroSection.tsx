'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getAssetPath } from '@/lib/constants'

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
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

      {/* Minimal overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content at bottom - Mishcon style with orange accent */}
      <div className="relative h-full container-custom flex flex-col justify-end pb-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-10 leading-[1.1]">
            Clear thinking.
            <br />
            <span className="text-orange-500">Decisive</span> execution.
          </h1>
          <div className="flex flex-wrap gap-8">
            <Link
              href="/services/companies"
              className="inline-flex items-center text-white text-xl font-light hover:text-orange-500 transition-colors group"
            >
              Our services
              <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-white text-xl font-light hover:text-orange-500 transition-colors group"
            >
              Contact us
              <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
