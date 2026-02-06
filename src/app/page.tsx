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

      {/* Statement Section - Glossy Black */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container-custom">
          <div className="max-w-5xl">
            <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-12">
              We advise on matters where the
              <span className="text-orange-500"> outcome defines</span> what
              comes next.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/about"
                className="inline-flex items-center text-lg text-white/80 font-medium hover:text-orange-500 transition-colors group"
              >
                About MONAD
                <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center text-lg text-white/80 font-medium hover:text-orange-500 transition-colors group"
              >
                Our people
                <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights - Dark Gray */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-serif font-semibold text-white">
              Featured Insights
            </h2>
            <Link
              href="/knowledge"
              className="text-white/60 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              View all insights
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredNews.map((item, index) => (
              <article key={index} className="group bg-black/50">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getAssetPath(item.image)}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs text-white/40">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-white leading-snug group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas - Glossy Black */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                What we do
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Our work spans six core practice areas, serving companies,
                founders, investors and private clients across borders.
              </p>
              <Link
                href="/services/companies"
                className="inline-flex items-center text-white/80 font-medium hover:text-orange-500 transition-colors group"
              >
                All services
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-white/10">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center justify-between py-6 border-b border-white/10 group hover:bg-white/5 px-4 -mx-4 transition-colors"
                  >
                    <span className="text-xl md:text-2xl font-serif text-white group-hover:text-orange-500 transition-colors">
                      {area.name}
                    </span>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MONAD - Dark Gray */}
      <section className="py-24 bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              Why clients choose MONAD
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              When decisions have consequences, legal advice cannot be theoretical.
              It must be accurate, readable, commercially aligned and immediately usable.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-black/40 p-8">
                <h4 className="text-lg font-semibold text-white mb-3">Direct advice</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  We explain what matters and what the next step should be—without
                  hiding behind jargon.
                </p>
              </div>
              <div className="bg-black/40 p-8">
                <h4 className="text-lg font-semibold text-white mb-3">Partner led</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  The person responsible stays engaged from strategy to delivery.
                  No layers, no handoffs.
                </p>
              </div>
              <div className="bg-black/40 p-8">
                <h4 className="text-lg font-semibold text-white mb-3">Built for cross-border</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Structured to manage complexity across jurisdictions without
                  losing control of details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINLEX Section - WHITE Background */}
      <section className="py-24 bg-white">
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
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                A MONAD Platform
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Financial Claims Recovery
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our dedicated team of experts helps clients recover losses from
                mis-sold financial products, investment fraud and financial misconduct.
                No win, no fee for qualifying cases.
              </p>
              <a
                href="https://financial-claims.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-900 text-white px-8 py-4 font-medium hover:bg-orange-500 transition-colors"
              >
                Visit FINLEX
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Right - Static Preview Card showing Blog */}
            <div className="bg-gray-50 shadow-xl border border-gray-200">
              <div className="bg-gray-900 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-white/60 text-sm">financial-claims.com/blog</span>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-2xl font-serif font-bold text-gray-900">FIN</span>
                  <span className="text-2xl font-serif font-bold text-orange-500">LEX</span>
                  <span className="text-sm text-gray-500 ml-2">Blog</span>
                </div>
                <div className="space-y-6">
                  <article className="border-b border-gray-200 pb-4">
                    <span className="text-xs text-orange-500 uppercase tracking-wider">Investment Claims</span>
                    <h4 className="text-lg font-semibold text-gray-900 mt-1">Understanding Mis-sold Investment Products</h4>
                    <p className="text-sm text-gray-500 mt-1">How to identify if you have a valid claim...</p>
                  </article>
                  <article className="border-b border-gray-200 pb-4">
                    <span className="text-xs text-orange-500 uppercase tracking-wider">Recovery Process</span>
                    <h4 className="text-lg font-semibold text-gray-900 mt-1">The Claims Process Explained</h4>
                    <p className="text-sm text-gray-500 mt-1">Step-by-step guide to recovering your losses...</p>
                  </article>
                  <article>
                    <span className="text-xs text-orange-500 uppercase tracking-wider">Case Study</span>
                    <h4 className="text-lg font-semibold text-gray-900 mt-1">Recent Success: €2.5M Recovery</h4>
                    <p className="text-sm text-gray-500 mt-1">How we helped a client recover investment losses...</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location - Glossy Black */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Based in Athens.
                <br />
                <span className="text-orange-500">Working globally.</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-6">
                MONAD serves clients across Europe, the Middle East and beyond,
                combining deep local knowledge with international experience.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-white/80 font-medium hover:text-orange-500 transition-colors group"
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
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Dark Gray */}
      <section className="py-24 bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Get in touch
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Describe your matter and we will respond within one business day.
              </p>
              <p className="text-white/40 text-sm">
                Sending a message does not create a lawyer-client relationship.
                Formal engagement begins only after a conflict check and written
                confirmation of scope.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
