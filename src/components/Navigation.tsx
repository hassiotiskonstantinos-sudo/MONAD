'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { getAssetPath } from '@/lib/constants'

const services = [
  { name: 'For Companies', href: '/services/companies' },
  { name: 'For Individuals', href: '/services/individuals' },
  { name: 'Real Estate', href: '/services/real-estate' },
  { name: 'Technology & Innovation', href: '/services/technology' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={getAssetPath('/images/logo-monad.png')}
              alt="MONAD"
              width={450}
              height={150}
              className={`w-auto brightness-0 invert ${isScrolled ? 'h-12' : 'h-16'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white/80 hover:text-orange-500 transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white/80 hover:text-orange-500 transition-colors text-sm"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center text-white/80 hover:text-orange-500 transition-colors text-sm"
              >
                Services
                <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-black border border-white/10 py-1"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-white/70 hover:text-orange-500 hover:bg-white/5 text-sm transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-white/10 my-1"></div>
                  <Link
                    href="/finlex"
                    className="block px-4 py-2 text-orange-500 hover:bg-white/5 text-sm font-medium"
                  >
                    FINLEX
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/team"
              className="text-white/80 hover:text-orange-500 transition-colors text-sm"
            >
              People
            </Link>
            <Link
              href="/knowledge"
              className="text-white/80 hover:text-orange-500 transition-colors text-sm"
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-orange-500 transition-colors text-sm"
            >
              Contact
            </Link>

            {/* Language Switcher */}
            <div className="relative border-l border-white/20 pl-6">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center text-white/60 hover:text-white transition-colors text-sm"
              >
                <Globe className="w-4 h-4 mr-1" />
                EN
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-black border border-white/10 py-1">
                  <Link
                    href="/"
                    className="block px-3 py-1.5 text-white/70 hover:text-orange-500 text-sm"
                    onClick={() => setLangOpen(false)}
                  >
                    English
                  </Link>
                  <Link
                    href="/el"
                    className="block px-3 py-1.5 text-white/70 hover:text-orange-500 text-sm"
                    onClick={() => setLangOpen(false)}
                  >
                    Ελληνικά
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-black border-t border-white/10">
            <div className="flex flex-col">
              <Link href="/" className="px-4 py-3 text-white/80 hover:text-orange-500 text-sm" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="px-4 py-3 text-white/80 hover:text-orange-500 text-sm" onClick={() => setIsOpen(false)}>About</Link>
              <div className="border-t border-white/10 mx-4 my-2"></div>
              {services.map((service) => (
                <Link key={service.name} href={service.href} className="px-4 py-2 text-white/60 hover:text-orange-500 text-sm" onClick={() => setIsOpen(false)}>{service.name}</Link>
              ))}
              <Link href="/finlex" className="px-4 py-2 text-orange-500 text-sm font-medium" onClick={() => setIsOpen(false)}>FINLEX</Link>
              <div className="border-t border-white/10 mx-4 my-2"></div>
              <Link href="/team" className="px-4 py-3 text-white/80 hover:text-orange-500 text-sm" onClick={() => setIsOpen(false)}>People</Link>
              <Link href="/knowledge" className="px-4 py-3 text-white/80 hover:text-orange-500 text-sm" onClick={() => setIsOpen(false)}>Insights</Link>
              <Link href="/contact" className="px-4 py-3 text-white/80 hover:text-orange-500 text-sm" onClick={() => setIsOpen(false)}>Contact</Link>
              <div className="border-t border-white/10 mx-4 my-2"></div>
              <div className="px-4 py-2 flex space-x-4">
                <Link href="/" className="text-white text-sm">EN</Link>
                <Link href="/el" className="text-white/50 text-sm">EL</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
