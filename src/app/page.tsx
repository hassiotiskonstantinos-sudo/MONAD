import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import HeroSection from '@/components/HeroSection'
import { getAssetPath } from '@/lib/constants'

const featuredNews = [
  {
    category: 'Corporate',
    title: 'Cross-Border M&A: Navigating Complexity',
    date: 'Jan 2024',
  },
  {
    category: 'Private Client',
    title: 'Golden Visa Programs: What Has Changed',
    date: 'Dec 2023',
  },
  {
    category: 'Technology',
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

      {/* Insights - Compact Grid */}
      <section className="py-12 bg-neutral-900 border-t border-white/10">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-medium text-white">Featured Insights</h2>
            <Link href="/knowledge" className="text-white/50 hover:text-orange-500 text-sm">View all</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {featuredNews.map((item, index) => (
              <article key={index} className="bg-neutral-900 p-6 hover:bg-neutral-800 transition-colors cursor-pointer group">
                <span className="text-xs text-orange-500 uppercase tracking-wider">{item.category}</span>
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

      {/* FINLEX Section - WHITE */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={getAssetPath('/images/finlex-logo_lrg.png')}
                alt="FINLEX"
                width={200}
                height={60}
                className="h-12 w-auto mb-6"
              />
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">A MONAD Platform</p>
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Financial Claims Recovery</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our team of experts helps clients recover losses from mis-sold financial products,
                investment fraud and financial misconduct. No win, no fee.
              </p>
              <a
                href="https://financial-claims.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-white px-6 py-3 text-sm font-medium hover:bg-orange-500 transition-colors"
              >
                Visit FINLEX <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="border border-gray-200">
              <div className="bg-black p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <span className="text-white/50 text-xs ml-2">financial-claims.com/blog</span>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="font-serif font-bold text-gray-900">FIN</span>
                  <span className="font-serif font-bold text-orange-500">LEX</span>
                  <span className="text-gray-400 text-xs ml-2">Blog</span>
                </div>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-3">
                    <span className="text-xs text-orange-500 uppercase">Claims</span>
                    <h4 className="text-sm font-medium text-gray-900">Understanding Mis-sold Investments</h4>
                  </div>
                  <div className="border-b border-gray-100 pb-3">
                    <span className="text-xs text-orange-500 uppercase">Process</span>
                    <h4 className="text-sm font-medium text-gray-900">The Claims Process Explained</h4>
                  </div>
                  <div>
                    <span className="text-xs text-orange-500 uppercase">Success</span>
                    <h4 className="text-sm font-medium text-gray-900">Recent: €2.5M Recovery</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location - Compact */}
      <section className="py-12 bg-black border-t border-white/10">
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
            <div className="relative h-[250px]">
              <Image src={getAssetPath('/images/regulatory.jpg')} alt="Athens" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Tight */}
      <section className="py-12 bg-neutral-900 border-t border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-serif text-white mb-4">Get in touch</h2>
              <p className="text-white/50 text-sm mb-4">
                Describe your matter. We respond within one business day.
              </p>
              <p className="text-white/30 text-xs">
                Sending a message does not create a lawyer-client relationship.
              </p>
            </div>
            <div className="bg-white p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
