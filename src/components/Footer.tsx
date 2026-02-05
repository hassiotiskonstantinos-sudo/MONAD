import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <Image
              src="/images/logo-monad.png"
              alt="MONAD"
              width={150}
              height={50}
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-primary-300 leading-relaxed mb-6">
              Premium legal solutions for businesses and individuals. Expert counsel
              delivering results with integrity and precision.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-primary-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/companies" className="text-primary-300 hover:text-white transition-colors">
                  Services for Companies
                </Link>
              </li>
              <li>
                <Link href="/services/individuals" className="text-primary-300 hover:text-white transition-colors">
                  Services for Individuals
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-primary-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="text-primary-300 hover:text-white transition-colors">
                  Knowledge
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/companies" className="text-primary-300 hover:text-white transition-colors">
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link href="/services/real-estate" className="text-primary-300 hover:text-white transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/services/technology" className="text-primary-300 hover:text-white transition-colors">
                  Technology & IP
                </Link>
              </li>
              <li>
                <Link href="/finlex" className="text-primary-300 hover:text-white transition-colors">
                  FINLEX
                </Link>
              </li>
              <li>
                <Link href="/el/medlex" className="text-primary-300 hover:text-white transition-colors">
                  MEDLEX
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary-400" />
                <span className="text-primary-300">
                  Athens, Greece
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-400" />
                <a href="tel:+302101234567" className="text-primary-300 hover:text-white transition-colors">
                  +30 210 123 4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-400" />
                <a href="mailto:info@monad.law" className="text-primary-300 hover:text-white transition-colors">
                  info@monad.law
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-400 text-sm">
              &copy; {new Date().getFullYear()} MONAD Law Firm. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-primary-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
