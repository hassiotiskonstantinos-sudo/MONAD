'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

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
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={`text-2xl md:text-3xl font-serif font-bold tracking-wider ${
                isScrolled ? 'text-primary-900' : 'text-white'
              }`}
            >
              MONAD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-primary-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-primary-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className={`flex items-center font-medium transition-colors ${
                  isScrolled ? 'text-primary-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                What We Do
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl py-2"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-primary-900 hover:bg-primary-50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-primary-100 my-2"></div>
                  <Link
                    href="/finlex"
                    className="block px-4 py-3 text-primary-900 hover:bg-primary-50 transition-colors font-semibold"
                  >
                    FINLEX
                  </Link>
                  <Link
                    href="/el/medlex"
                    className="block px-4 py-3 text-primary-900 hover:bg-primary-50 transition-colors font-semibold"
                  >
                    MEDLEX
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/team"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-primary-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Who We Are
            </Link>
            <Link
              href="/knowledge"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-primary-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Knowledge
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-primary-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Contact
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center font-medium transition-colors ${
                  isScrolled ? 'text-primary-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                <Globe className="w-5 h-5 mr-1" />
                EN
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-xl py-2">
                  <Link
                    href="/"
                    className="block px-4 py-2 text-primary-900 hover:bg-primary-50 transition-colors"
                    onClick={() => setLangOpen(false)}
                  >
                    English
                  </Link>
                  <Link
                    href="/el"
                    className="block px-4 py-2 text-primary-900 hover:bg-primary-50 transition-colors"
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
            className={`lg:hidden p-2 ${isScrolled ? 'text-primary-900' : 'text-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white shadow-lg">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="px-4 py-3 text-primary-900 hover:bg-primary-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-primary-900 hover:bg-primary-50"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div className="border-t border-primary-100 mx-4"></div>
              <span className="px-4 py-2 text-sm text-primary-500 uppercase tracking-wider">
                Services
              </span>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="px-6 py-2 text-primary-900 hover:bg-primary-50"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                href="/finlex"
                className="px-6 py-2 text-primary-900 hover:bg-primary-50 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                FINLEX
              </Link>
              <Link
                href="/el/medlex"
                className="px-6 py-2 text-primary-900 hover:bg-primary-50 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                MEDLEX
              </Link>
              <div className="border-t border-primary-100 mx-4"></div>
              <Link
                href="/team"
                className="px-4 py-3 text-primary-900 hover:bg-primary-50"
                onClick={() => setIsOpen(false)}
              >
                Who We Are
              </Link>
              <Link
                href="/knowledge"
                className="px-4 py-3 text-primary-900 hover:bg-primary-50"
                onClick={() => setIsOpen(false)}
              >
                Knowledge
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-primary-900 hover:bg-primary-50"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t border-primary-100 mx-4"></div>
              <div className="px-4 py-2 flex space-x-4">
                <Link href="/" className="text-primary-900 font-medium">
                  EN
                </Link>
                <Link href="/el" className="text-primary-500">
                  EL
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
