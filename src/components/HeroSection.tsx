'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getAssetPath } from '@/lib/constants'

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Video - works in Safari, Chrome might need mp4 */}
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
        {/* Fallback Image for browsers that don't support video */}
        <Image
          src={getAssetPath('/images/shutterstock_2644707669.jpg')}
          alt="MONAD Law Firm"
          fill
          className="object-cover -z-10"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative h-full container-custom flex flex-col justify-center pt-32 pb-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
            Clear Thinking.<br />
            Decisive Execution.
          </h1>

          <p className="text-base md:text-lg text-primary-100 mb-6 leading-relaxed max-w-3xl">
            MONAD is a modern law firm built for clients who need clear thinking and decisive
            execution. The work ranges from corporate structuring and cross border tax planning
            to immigration, technology transactions, real estate and disputes.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services/companies"
              className="btn-primary flex items-center"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline-light flex items-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
