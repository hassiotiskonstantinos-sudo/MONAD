import {
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import HeroSection from '@/components/HeroSection'
import { getAssetPath } from '@/lib/constants'

const practiceAreas = [
  {
    title: 'Corporate',
    description: 'Formation, governance, M&A, private equity, joint ventures and restructuring.',
    href: '/services/companies',
  },
  {
    title: 'Dispute Resolution',
    description: 'Commercial litigation, arbitration, fraud claims and asset recovery.',
    href: '/services/companies',
  },
  {
    title: 'Private Client',
    description: 'Immigration, inheritance, estate planning and family business matters.',
    href: '/services/individuals',
  },
  {
    title: 'Real Estate',
    description: 'Transactions, development, construction, planning and investment structuring.',
    href: '/services/real-estate',
  },
  {
    title: 'Technology',
    description: 'IP, data protection, cybersecurity, SaaS and digital assets.',
    href: '/services/technology',
  },
  {
    title: 'Employment',
    description: 'Contracts, disputes, restructuring and executive compensation.',
    href: '/services/companies',
  },
]

const insights = [
  {
    category: 'Corporate',
    title: 'Cross-Border M&A: Key Considerations for 2024',
    excerpt: 'Navigating regulatory complexity in international transactions.',
  },
  {
    category: 'Private Client',
    title: 'Golden Visa Programs: What Has Changed',
    excerpt: 'An overview of recent developments across European jurisdictions.',
  },
  {
    category: 'Technology',
    title: 'AI Governance and Legal Compliance',
    excerpt: 'Preparing your business for the EU AI Act.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Statement Section - Clean text, no image */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-3xl md:text-4xl font-serif text-primary-900 leading-relaxed mb-8">
              MONAD is a law firm for clients who need
              <span className="text-orange-500"> clear thinking</span> and
              <span className="text-orange-500"> decisive execution</span>.
            </p>
            <p className="text-xl text-primary-600 leading-relaxed mb-8">
              We advise companies, founders, investors and private clients on matters
              that require precision, commercial awareness and the ability to act quickly
              across borders.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-prussian-500 font-medium hover:text-orange-500 transition-colors group"
            >
              About the firm
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas - Clean grid */}
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900">
                Practice Areas
              </h2>
            </div>
            <Link
              href="/services/companies"
              className="hidden md:inline-flex items-center text-prussian-500 font-medium hover:text-orange-500 transition-colors group"
            >
              View all services
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-200">
            {practiceAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="bg-white p-8 hover:bg-primary-50 transition-colors group"
              >
                <h3 className="text-xl font-serif font-semibold text-primary-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {area.title}
                </h3>
                <p className="text-primary-600 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <span className="inline-flex items-center text-sm text-prussian-500 font-medium group-hover:text-orange-500 transition-colors">
                  Learn more
                  <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/services/companies"
              className="inline-flex items-center text-prussian-500 font-medium hover:text-orange-500 transition-colors group"
            >
              View all services
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why MONAD - Text focused */}
      <section className="py-24 bg-primary-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
                Why clients choose MONAD
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                In moments that matter, legal advice cannot be theoretical. It must be
                accurate, readable, commercially aligned and immediately usable.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-orange-500 pl-6">
                <h4 className="text-lg font-semibold text-white mb-2">Direct advice</h4>
                <p className="text-white/70">
                  We explain what matters, what does not, and what the next step should
                  be—without hiding behind jargon or unnecessary complexity.
                </p>
              </div>
              <div className="border-l-2 border-orange-500 pl-6">
                <h4 className="text-lg font-semibold text-white mb-2">Partner led</h4>
                <p className="text-white/70">
                  The person responsible stays engaged from strategy to delivery.
                  No layers, no handoffs, no surprises.
                </p>
              </div>
              <div className="border-l-2 border-orange-500 pl-6">
                <h4 className="text-lg font-semibold text-white mb-2">Built for cross-border</h4>
                <p className="text-white/70">
                  MONAD is structured to manage complexity across jurisdictions
                  without losing control of the details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900">
              Insights
            </h2>
            <Link
              href="/knowledge"
              className="hidden md:inline-flex items-center text-prussian-500 font-medium hover:text-orange-500 transition-colors group"
            >
              View all insights
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <article key={index} className="group">
                <div className="mb-4">
                  <span className="text-sm font-medium text-orange-500 uppercase tracking-wider">
                    {insight.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-primary-600 mb-4">
                  {insight.excerpt}
                </p>
                <span className="inline-flex items-center text-sm text-prussian-500 font-medium group-hover:text-orange-500 transition-colors cursor-pointer">
                  Read more
                  <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINLEX Banner - Clean design */}
      <section className="py-20 bg-prussian-500">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white px-6 py-3">
                  <span className="text-2xl font-serif font-bold text-prussian-500">FIN</span>
                  <span className="text-2xl font-serif font-bold text-orange-500">LEX</span>
                </div>
                <span className="text-white/60 text-sm">A MONAD Platform</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                Financial Claims Recovery
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                Our dedicated team of experts helps clients recover losses from mis-sold
                financial products, investment fraud and financial misconduct.
                No win, no fee for qualifying cases.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://financial-claims.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-prussian-500 px-8 py-4 font-medium hover:bg-orange-500 hover:text-white transition-colors"
              >
                Visit FINLEX
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-24 bg-white border-b border-primary-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
                Based in Athens.<br />
                <span className="text-orange-500">Working globally.</span>
              </h2>
              <p className="text-xl text-primary-600 leading-relaxed mb-6">
                MONAD serves clients across Europe, the Middle East and beyond,
                combining deep local knowledge with international experience.
              </p>
              <p className="text-primary-500 leading-relaxed">
                Our structure allows us to coordinate complex cross-border matters
                efficiently, with clear lines of responsibility and no unnecessary layers.
              </p>
            </div>
            <div className="relative h-[350px] bg-primary-100">
              <Image
                src={getAssetPath('/images/regulatory.jpg')}
                alt="Athens Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Clean */}
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
              <div className="space-y-6 text-primary-600">
                <p>
                  For time-sensitive matters, please indicate urgency in your message.
                </p>
                <p className="text-sm text-primary-500">
                  Sending a message does not create a lawyer-client relationship.
                  Formal engagement begins only after a conflict check and written
                  confirmation of scope.
                </p>
              </div>
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
