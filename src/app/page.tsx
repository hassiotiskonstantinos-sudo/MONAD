import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import HeroSection from '@/components/HeroSection'
import { getAssetPath } from '@/lib/constants'

const featuredNews = [
  {
    category: 'Corporate',
    color: 'bg-blue-500',
    title: 'Cross-Border M&A: Navigating Complexity',
    date: 'Jan 2024',
  },
  {
    category: 'Private Client',
    color: 'bg-emerald-500',
    title: 'Golden Visa Programs: What Has Changed',
    date: 'Dec 2023',
  },
  {
    category: 'Technology',
    color: 'bg-purple-500',
    title: 'AI Governance and the EU AI Act',
    date: 'Nov 2023',
  },
]

const practiceAreas = [
  { name: 'Corporate', href: '/services/companies' },
  { name: 'Dispute Resolution', href: '/services/companies' },
  { name: 'Private Client', href: '/services/individuals' },
  { name: 'Real Estate', href: '/services/real-estate' },
  { name: 'Technology', href: '/services/technology' },
  { name: 'Employment', href: '/services/companies' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Statement - Tight, Black */}
      <section className="py-16 bg-black">
        <div className="container-custom">
          <p className="text-3xl md:text-4xl font-serif text-white leading-snug max-w-4xl">
            We advise on matters where the
            <span className="text-orange-500"> outcome defines</span> what comes next.
          </p>
          <div className="flex gap-6 mt-8">
            <Link href="/about" className="text-white/70 hover:text-orange-500 transition-colors text-sm inline-flex items-center group">
              About MONAD <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/team" className="text-white/70 hover:text-orange-500 transition-colors text-sm inline-flex items-center group">
              Our people <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Insights - Compact Grid with Colored Categories */}
      <section className="py-12 bg-neutral-900 border-t border-white/10">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-medium text-white">Featured Insights</h2>
            <Link href="/knowledge" className="text-white/50 hover:text-orange-500 text-sm">View all</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {featuredNews.map((item, index) => (
              <article key={index} className="bg-neutral-900 p-6 hover:bg-neutral-800 transition-colors cursor-pointer group">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                  <span className="text-xs text-white/60 uppercase tracking-wider">{item.category}</span>
                </div>
                <h3 className="text-white font-medium mt-2 mb-1 group-hover:text-orange-500 transition-colors">{item.title}</h3>
                <span className="text-white/40 text-xs">{item.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas - Tight List */}
      <section className="py-12 bg-black border-t border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-serif text-white mb-4">What we do</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Six core practice areas serving companies, founders, investors and private clients.
              </p>
              <Link href="/services/companies" className="text-white/70 hover:text-orange-500 text-sm inline-flex items-center group">
                All services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="border-t border-white/10">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center justify-between py-4 border-b border-white/10 group hover:bg-white/5 px-2 -mx-2 transition-colors"
                  >
                    <span className="text-white group-hover:text-orange-500 transition-colors">{area.name}</span>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MONAD - Compact */}
      <section className="py-12 bg-neutral-900 border-t border-white/10">
        <div className="container-custom">
          <h2 className="text-2xl font-serif text-white mb-6">Why clients choose MONAD</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-medium mb-2">Direct advice</h4>
              <p className="text-white/50 text-sm">We explain what matters—without hiding behind jargon.</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Partner led</h4>
              <p className="text-white/50 text-sm">The person responsible stays engaged. No layers, no handoffs.</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Cross-border</h4>
              <p className="text-white/50 text-sm">Structured to manage complexity across jurisdictions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINLEX Section - BLACK with logo on white */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Logo on white background and Text */}
            <div>
              <div className="inline-block bg-white p-4 mb-6">
                <Image
                  src={getAssetPath('/images/finlex-logo_lrg.png')}
                  alt="FINLEX"
                  width={180}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-3">A MONAD Platform</p>
              <h2 className="text-2xl font-serif text-white mb-4">Financial Claims Recovery</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Our team of experts helps clients recover losses from mis-sold financial products,
                investment fraud and financial misconduct. No win, no fee.
              </p>
              <a
                href="https://financial-claims.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 text-white px-6 py-3 text-sm font-medium hover:bg-orange-600 transition-colors"
              >
                Visit FINLEX <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Right - Website Preview Mirror */}
            <div className="border border-white/20 bg-white overflow-hidden">
              <div className="bg-neutral-800 p-2 flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-white/40 text-xs ml-2">financial-claims.com</span>
              </div>
              <iframe
                src="https://financial-claims.com"
                className="w-full h-[320px] pointer-events-none"
                title="FINLEX Website Preview"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location - Compact */}
      <section className="py-12 bg-neutral-900 border-t border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-serif text-white mb-4">
                Based in Athens. <span className="text-orange-500">Working globally.</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Serving clients across Europe, the Middle East and beyond.
              </p>
              <Link href="/contact" className="text-white/70 hover:text-orange-500 text-sm inline-flex items-center group">
                Get in touch <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[200px]">
              <Image src={getAssetPath('/images/regulatory.jpg')} alt="Athens" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Mishcon Style */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-serif text-white mb-4">Get in touch</h2>
              <p className="text-white/60 text-sm mb-6">
                Use the contact form to send us a message. We will respond within one business day.
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="text-white/40 uppercase text-xs tracking-wider mb-1">Email</h4>
                  <a href="mailto:contact@monad.law" className="text-white hover:text-orange-500">contact@monad.law</a>
                </div>
                <div>
                  <h4 className="text-white/40 uppercase text-xs tracking-wider mb-1">Location</h4>
                  <p className="text-white/70">Athens, Greece</p>
                </div>
              </div>
              <p className="text-white/30 text-xs mt-8">
                Contacting us does not create a lawyer-client relationship.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-neutral-900 p-6 border border-white/10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
