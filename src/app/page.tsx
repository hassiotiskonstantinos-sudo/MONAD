import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import HeroSection from '@/components/HeroSection'
import { getAssetPath } from '@/lib/constants'

const featuredNews = [
  {
    category: 'Corporate',
    title: 'Cross-Border M&A: Navigating Complexity in International Transactions',
    date: 'January 2024',
    image: '/images/private-equity.jpg',
  },
  {
    category: 'Private Client',
    title: 'Golden Visa Programs: Recent Developments Across European Jurisdictions',
    date: 'December 2023',
    image: '/images/shutterstock_1100117846.jpg',
  },
  {
    category: 'Technology',
    title: 'AI Governance: Preparing Your Business for the EU AI Act',
    date: 'November 2023',
    image: '/images/digital-assets-blockchain.jpg',
  },
]

const practiceAreas = [
  { name: 'Corporate', href: '/services/companies' },
  { name: 'Dispute Resolution', href: '/services/companies' },
  { name: 'Private Client', href: '/services/individuals' },
  { name: 'Real Estate', href: '/services/real-estate' },
  { name: 'Technology & Innovation', href: '/services/technology' },
  { name: 'Employment', href: '/services/companies' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Statement Section - Large typography, Mishcon-style */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl">
            <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-900 leading-tight mb-12">
              We advise on matters where the
              <span className="text-orange-500"> outcome defines</span> what
              comes next.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/about"
                className="inline-flex items-center text-lg text-primary-900 font-medium hover:text-orange-500 transition-colors group"
              >
                About MONAD
                <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center text-lg text-primary-900 font-medium hover:text-orange-500 transition-colors group"
              >
                Our people
                <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights - Card layout like Mishcon */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-serif font-semibold text-primary-900">
              Featured Insights
            </h2>
            <Link
              href="/knowledge"
              className="text-primary-600 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              View all insights
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredNews.map((item, index) => (
              <article key={index} className="group bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getAssetPath(item.image)}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs text-primary-400">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-primary-900 leading-snug group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas - Clean list like Mishcon */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
                What we do
              </h2>
              <p className="text-primary-600 leading-relaxed mb-8">
                Our work spans six core practice areas, serving companies,
                founders, investors and private clients across borders.
              </p>
              <Link
                href="/services/companies"
                className="inline-flex items-center text-primary-900 font-medium hover:text-orange-500 transition-colors group"
              >
                All services
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-primary-200">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center justify-between py-6 border-b border-primary-200 group hover:bg-primary-50 px-4 -mx-4 transition-colors"
                  >
                    <span className="text-xl md:text-2xl font-serif text-primary-900 group-hover:text-orange-500 transition-colors">
                      {area.name}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary-400 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MONAD - Dark section */}
      <section className="py-24 bg-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              Why clients choose MONAD
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-12">
              When decisions have consequences, legal advice cannot be theoretical.
              It must be accurate, readable, commercially aligned and immediately usable.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Direct advice</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  We explain what matters and what the next step should be—without
                  hiding behind jargon.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Partner led</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  The person responsible stays engaged from strategy to delivery.
                  No layers, no handoffs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Built for cross-border</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Structured to manage complexity across jurisdictions without
                  losing control of details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINLEX Section - Glossy Black */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Logo and Text */}
            <div>
              <div className="mb-8">
                <Image
                  src={getAssetPath('/images/finlex-logo_lrg.png')}
                  alt="FINLEX"
                  width={280}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-sm text-white/50 uppercase tracking-wider mb-4">
                A MONAD Platform
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Financial Claims Recovery
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our dedicated team of experts helps clients recover losses from
                mis-sold financial products, investment fraud and financial misconduct.
                No win, no fee for qualifying cases.
              </p>
              <a
                href="https://financial-claims.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 text-white px-8 py-4 font-medium hover:bg-orange-600 transition-colors"
              >
                Visit FINLEX
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Right - Static Preview Card */}
            <div className="bg-white shadow-2xl">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-white/60 text-sm">financial-claims.com</span>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-2xl font-serif font-bold text-gray-900">FIN</span>
                  <span className="text-2xl font-serif font-bold text-orange-500">LEX</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Expert Recovery Services
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    Mis-sold Investment Products
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    Investment Fraud Losses
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    Financial Advisor Misconduct
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    Bank Negligence Claims
                  </li>
                </ul>
                <div className="bg-gray-100 p-4">
                  <p className="text-sm text-gray-600">
                    <strong className="text-orange-600">No Win, No Fee</strong> —
                    We only get paid when you recover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
                Based in Athens.
                <br />
                <span className="text-orange-500">Working globally.</span>
              </h2>
              <p className="text-xl text-primary-600 leading-relaxed mb-6">
                MONAD serves clients across Europe, the Middle East and beyond,
                combining deep local knowledge with international experience.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary-900 font-medium hover:text-orange-500 transition-colors group"
              >
                Get in touch
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src={getAssetPath('/images/regulatory.jpg')}
                alt="Athens"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
                Get in touch
              </h2>
              <p className="text-xl text-primary-600 leading-relaxed mb-8">
                Describe your matter and we will respond within one business day.
              </p>
              <p className="text-primary-500 text-sm">
                Sending a message does not create a lawyer-client relationship.
                Formal engagement begins only after a conflict check and written
                confirmation of scope.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
