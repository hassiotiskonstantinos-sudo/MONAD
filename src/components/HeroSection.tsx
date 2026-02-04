'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          <source src="/videos/hero-video.webm" type="video/webm" />
        </video>
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 -z-10" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative min-h-screen container-custom flex flex-col justify-center py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            Clear Thinking.<br />
            Decisive Execution.
          </h1>

          <p className="text-lg md:text-xl text-primary-100 mb-6 leading-relaxed max-w-3xl">
            MONAD is a modern law firm built for clients who need clear thinking and decisive
            execution. The work ranges from corporate structuring and cross border tax planning
            to immigration, technology transactions, real estate and disputes.
          </p>

          <p className="text-base md:text-lg text-primary-200 mb-10 leading-relaxed max-w-3xl">
            What stays constant is the method: identify the real objective, isolate the risks
            that matter, document the solution properly, and move fast without cutting corners.
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
