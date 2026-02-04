'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const slides = [
  {
    title: 'Premium Legal Solutions for Every Need',
    subtitle: 'From business deals to personal estate planning, we\'ve got you covered.',
    cta: 'Our Services',
    link: '/services/companies',
  },
  {
    title: 'Expert Corporate Counsel',
    subtitle: 'Navigate complex business challenges with confidence and precision.',
    cta: 'For Companies',
    link: '/services/companies',
  },
  {
    title: 'Protecting What Matters Most',
    subtitle: 'Personalized legal services for individuals and families.',
    cta: 'For Individuals',
    link: '/services/individuals',
  },
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

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
          poster="/images/hero-poster.jpg"
        >
          {/* Add your video sources here - replace with actual video files */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          <source src="/videos/hero-video.webm" type="video/webm" />
          {/* Fallback background if video doesn't load */}
        </video>
        {/* Fallback gradient background if video fails to load */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 -z-10" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full container-custom flex flex-col justify-center">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                currentSlide === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 absolute'
              }`}
            >
              {currentSlide === index && (
                <>
                  <h1 className="heading-1 text-white mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-primary-100 mb-10 animate-slide-up">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 animate-slide-up">
                    <Link href={slide.link} className="btn-primary flex items-center">
                      {slide.cta}
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                    <Link href="/contact" className="btn-outline-light flex items-center">
                      Contact Us
                    </Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-0 right-0">
          <div className="container-custom">
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 transition-all duration-300 ${
                    currentSlide === index ? 'w-12 bg-white' : 'w-6 bg-white/40'
                  }`}
                />
              ))}
            </div>
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
