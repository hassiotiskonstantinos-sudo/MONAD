import {
  Building2,
  Users,
  Home as HomeIcon,
  Cpu,
  Scale,
  Globe,
  Shield,
  Briefcase,
  FileCheck,
  Landmark,
  TrendingUp,
  Gavel,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import HeroSection from '@/components/HeroSection'
import { getAssetPath } from '@/lib/constants'

const pillars = [
  {
    title: 'For Companies',
    description:
      'Formation, governance, commercial contracting, M&A, private equity, employment, regulatory compliance, fraud and asset recovery, and international dispute resolution.',
    icon: Building2,
    href: '/services/companies',
    image: '/images/private-equity.jpg',
  },
  {
    title: 'For Individuals',
    description:
      'Immigration, Golden Visas, inheritance, estate administration, family business matters and private wealth disputes.',
    icon: Users,
    href: '/services/individuals',
    image: '/images/shutterstock_1100117846.jpg',
  },
  {
    title: 'Technology & Innovation',
    description:
      'IP, copyright and design, GDPR and data privacy, cybersecurity governance, technology transactions, SaaS contracting, and digital assets.',
    icon: Cpu,
    href: '/services/technology',
    image: '/images/digital-assets-blockchain.jpg',
  },
  {
    title: 'Real Estate',
    description:
      'Transactions, development, construction, planning, licensing and investment structuring.',
    icon: HomeIcon,
    href: '/services/real-estate',
    image: '/images/AdobeStock_62203512.jpeg',
  },
]

const companyServices = [
  { name: 'Corporate Formation', icon: Briefcase },
  { name: 'Mergers & Acquisitions', icon: FileCheck },
  { name: 'Commercial Contracts', icon: Scale },
  { name: 'Employment', icon: Users },
  { name: 'International Tax Planning', icon: TrendingUp },
  { name: 'Governance & Compliance', icon: Shield },
]

const individualServices = [
  { name: 'Immigration & Golden Visas', icon: Globe },
  { name: 'Inheritance Planning', icon: Landmark },
  { name: 'Estate Administration', icon: FileCheck },
  { name: 'Private Commercial Litigation', icon: Gavel },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction - Image Background with Text Box */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src={getAssetPath('/images/c.jpeg')}
            alt="MONAD Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="bg-white p-10 md:p-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-6">
                When Decisions Have <span className="text-orange-500">Consequences</span>
              </h2>
              <p className="text-primary-700 leading-relaxed mb-6">
                Clients come to MONAD when a decision has consequences. A company is forming,
                a deal is closing, a relationship is breaking down, an asset must be protected,
                a dispute is escalating, a relocation is planned, a product is launching, a
                regulator is asking questions.
              </p>
              <p className="text-primary-600 leading-relaxed mb-8">
                In those moments, legal advice cannot be theoretical. It must be accurate,
                readable, commercially aligned and immediately usable.
              </p>
              <Link href="/about" className="btn-orange inline-flex items-center">
                Learn About MONAD
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars - Each with Image Background */}
      <section className="bg-primary-900">
        <div className="text-center py-16">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              What MONAD Does
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              MONAD advises companies, founders, investors and private clients on the legal
              and strategic issues that sit at the center of modern life and commerce.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Link key={pillar.title} href={pillar.href} className="group relative h-80 overflow-hidden">
              <Image
                src={getAssetPath(pillar.image)}
                alt={pillar.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-prussian-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-orange-500 w-12 h-12 flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-3">
                  {pillar.description}
                </p>
                <span className="inline-flex items-center text-orange-400 text-sm font-medium group-hover:text-orange-300">
                  Explore
                  <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose MONAD - Split Image/Content */}
      <section className="grid lg:grid-cols-2">
        {/* Left: Image with Text Overlay */}
        <div className="relative h-[500px] lg:h-auto">
          <Image
            src={getAssetPath('/images/shutterstock_2249889569.jpg')}
            alt="MONAD Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-prussian-500/80" />
          <div className="absolute inset-0 flex items-center p-10 lg:p-16">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Why Clients Choose <span className="text-orange-400">MONAD</span>
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold mb-2">Direct Advice</h4>
                  <p className="text-white/80">
                    The advice explains what matters, what does not, and what the next
                    step should be—without hiding behind jargon.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold mb-2">Partner Led</h4>
                  <p className="text-white/80">
                    The person responsible stays engaged from strategy to delivery.
                    No layers, no handoffs.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold mb-2">Built for Cross Border</h4>
                  <p className="text-white/80">
                    MONAD is set up to manage complexity across jurisdictions without
                    losing control of the details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Services Box */}
        <div className="bg-primary-900 p-10 lg:p-16 flex items-center">
          <div className="w-full">
            <h3 className="text-2xl font-serif font-semibold text-white mb-8">
              Most Demanded Services
            </h3>
            <div className="space-y-8">
              <div>
                <h5 className="text-sm uppercase tracking-wider text-orange-400 mb-4 font-semibold">
                  For Companies
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  {companyServices.map((service) => (
                    <div key={service.name} className="flex items-center bg-white/5 p-3 rounded">
                      <service.icon className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-sm uppercase tracking-wider text-orange-400 mb-4 font-semibold">
                  For Individuals
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  {individualServices.map((service) => (
                    <div key={service.name} className="flex items-center bg-white/5 p-3 rounded">
                      <service.icon className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Link href="/services/companies" className="btn-orange inline-flex items-center">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINLEX Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src={getAssetPath('/images/tax-wealth-management.jpg')}
            alt="Financial Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-prussian-500/90" />
        </div>
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-orange-500 px-6 py-3 mb-6">
                <span className="text-3xl font-serif font-bold tracking-wide">FINLEX</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Financial Claims Recovery
              </h2>
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                FINLEX is MONAD's dedicated platform for clients seeking to recover losses
                from mis-sold financial products, investment fraud, and financial misconduct.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                Our team has extensive experience handling claims against banks, investment
                firms, and financial advisors. We work on a no-win, no-fee basis for qualifying cases.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://financial-claims.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange inline-flex items-center"
                >
                  Visit FINLEX Website
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href="/finlex"
                  className="btn-outline-light inline-flex items-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 truncate">
                  financial-claims.com
                </div>
              </div>
              <iframe
                src="https://financial-claims.com/index.html"
                className="w-full h-[400px] border-0"
                title="FINLEX - Financial Claims"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Athens - Global Reach Banner */}
      <section className="relative h-[50vh]">
        <Image
          src={getAssetPath('/images/regulatory.jpg')}
          alt="Global Legal Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Based in <span className="text-orange-400">Athens</span>,
                <br />Serving Clients Worldwide
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Strategic legal advice for cross-border transactions and international matters.
                MONAD works with clients across Europe, the Middle East, and beyond.
              </p>
              <Link href="/contact" className="btn-orange inline-flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Image Background */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src={getAssetPath('/images/startups.jpg')}
            alt="Contact MONAD"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/95" />
        </div>
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                How Can We <span className="text-orange-400">Help You?</span>
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Use the form to describe your request as clearly as possible.
                A response will follow within one business day.
              </p>
              <p className="text-white/60 mb-8 text-sm">
                Where the matter is time sensitive, marking it as urgent helps the team
                triage appropriately. MONAD reviews messages to understand the request
                and determine whether the firm is able to assist.
              </p>
              <div className="bg-white/10 border border-white/20 p-6">
                <p className="text-white/80 text-sm">
                  <strong className="text-orange-400">Note:</strong> Sending a message does not create a
                  lawyer-client relationship. Formal engagement begins only after a conflict
                  check and written confirmation of scope.
                </p>
              </div>
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
