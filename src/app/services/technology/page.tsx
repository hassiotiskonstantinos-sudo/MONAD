import Link from 'next/link'
import Image from 'next/image'
import {
  Lightbulb,
  Palette,
  Scale,
  Shield,
  Award,
  Lock,
  Coins,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'

const services = [
  {
    id: 'intellectual-property',
    icon: Lightbulb,
    title: 'Intellectual Property',
    description:
      'MONAD advises on trademark portfolios, IP strategy, licensing, enforcement and disputes. Work includes clearance searches, registration filings, opposition and cancellation proceedings, licensing negotiations and infringement actions.',
    features: [
      'Trademark clearance and registration',
      'IP portfolio management',
      'Licensing and commercialization',
      'Enforcement and infringement actions',
      'IP due diligence for transactions',
    ],
  },
  {
    id: 'copyright-design',
    icon: Palette,
    title: 'Copyright and Design',
    description:
      'MONAD advises on copyright and design protection across digital and physical media. Work includes rights clearance, licensing agreements, takedown procedures and infringement litigation.',
    features: [
      'Copyright registration and protection',
      'Design rights and registration',
      'Content licensing agreements',
      'Infringement and takedown actions',
      'Rights clearance and chain of title',
    ],
  },
  {
    id: 'competition',
    icon: Scale,
    title: 'Competition Law',
    description:
      'MONAD advises on competition compliance, merger control and antitrust matters. Work includes compliance programs, merger filings, cartel investigations and abuse of dominance matters.',
    features: [
      'Competition compliance programs',
      'Merger control filings',
      'Cartel investigations',
      'Abuse of dominance advisory',
      'Distribution and pricing compliance',
    ],
  },
  {
    id: 'gdpr',
    icon: Shield,
    title: 'GDPR and Data Protection',
    description:
      'MONAD advises on GDPR compliance, data protection frameworks and privacy matters. Work includes compliance audits, privacy policies, data processing agreements, international transfers and breach response.',
    features: [
      'GDPR compliance audits',
      'Privacy policies and notices',
      'Data processing agreements',
      'International data transfers',
      'Data breach response',
    ],
  },
  {
    id: 'patents',
    icon: Award,
    title: 'Patents',
    description:
      'MONAD coordinates patent strategy and works with patent attorneys on prosecution, portfolio management and freedom-to-operate analysis. The firm handles patent licensing, disputes and IP aspects of technology transactions.',
    features: [
      'Patent strategy coordination',
      'Freedom-to-operate analysis',
      'Patent licensing agreements',
      'Patent disputes and litigation',
      'Technology transaction support',
    ],
  },
  {
    id: 'data-privacy',
    icon: Lock,
    title: 'Cybersecurity and Technology Transactions',
    description:
      'MONAD advises on cybersecurity frameworks, technology contracts and SaaS arrangements. Work includes security policies, incident response planning, technology licensing, SaaS agreements and outsourcing contracts.',
    features: [
      'Cybersecurity policies and frameworks',
      'Incident response planning',
      'Technology licensing agreements',
      'SaaS and cloud contracts',
      'Outsourcing and vendor agreements',
    ],
  },
  {
    id: 'crypto',
    icon: Coins,
    title: 'Digital Assets and Blockchain',
    description:
      'MONAD advises on the legal aspects of blockchain projects, token structures and digital asset transactions. Work includes regulatory analysis, token documentation, NFT arrangements and DeFi structures.',
    features: [
      'Token legal frameworks',
      'Regulatory classification analysis',
      'NFT contracts and licensing',
      'DeFi legal structures',
      'Exchange and custody arrangements',
    ],
  },
]

export default function TechnologyServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/digital-assets-blockchain.jpg"
            alt="Technology and Innovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <p className="text-primary-400 uppercase tracking-wider text-sm font-medium mb-4">
              What We Do
            </p>
            <h1 className="heading-1 text-white mb-6">Technology & Innovation</h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">
              MONAD advises technology companies, digital businesses and innovators on IP,
              data protection, technology transactions and emerging technology matters.
            </p>
            <p className="text-lg text-primary-300 leading-relaxed">
              The focus is on practical advice that supports innovation while managing
              legal risk. Work ranges from startup IP strategy to enterprise technology
              procurement.
            </p>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white border border-primary-100">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary-900" />
              <h3 className="text-xl font-serif font-semibold mb-2">
                IP & Data Protection
              </h3>
              <p className="text-primary-600">
                Protect innovations and ensure GDPR compliance across operations.
              </p>
            </div>
            <div className="p-8 bg-white border border-primary-100">
              <Lock className="w-12 h-12 mx-auto mb-4 text-primary-900" />
              <h3 className="text-xl font-serif font-semibold mb-2">
                Cybersecurity & Transactions
              </h3>
              <p className="text-primary-600">
                Secure digital operations with robust policies and contracts.
              </p>
            </div>
            <div className="p-8 bg-white border border-primary-100">
              <Coins className="w-12 h-12 mx-auto mb-4 text-primary-900" />
              <h3 className="text-xl font-serif font-semibold mb-2">
                Digital Assets & Blockchain
              </h3>
              <p className="text-primary-600">
                Navigate regulatory frameworks for tokens, NFTs and DeFi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Technology Legal Services"
            subtitle="Practical solutions for digital businesses and innovators"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="border border-primary-100 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-primary-900" />
                  </div>
                  <h2 className="heading-3">{service.title}</h2>
                </div>
                <p className="text-body mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <ChevronRight className="w-4 h-4 text-primary-900 mr-2 flex-shrink-0" />
                      <span className="text-primary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary-900 font-medium hover:text-primary-600 transition-colors"
                >
                  Discuss Your Needs
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Assets Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Coins className="w-16 h-16 mb-6" />
              <h2 className="heading-2 mb-6">Digital Assets & Blockchain</h2>
              <p className="text-primary-200 mb-4 leading-relaxed">
                Blockchain technology and digital assets present unique legal challenges
                across securities, tax, IP and contract law. MONAD provides practical
                guidance for projects navigating this evolving regulatory landscape.
              </p>
              <p className="text-primary-200 mb-6 leading-relaxed">
                Work includes token classification analysis, regulatory strategy,
                documentation for token sales and DeFi projects, and NFT licensing
                arrangements.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 p-6 border border-white/20">
                <h4 className="font-semibold mb-2">Token Legal Framework</h4>
                <p className="text-primary-300 text-sm">
                  Classification analysis, regulatory strategy and compliant documentation
                </p>
              </div>
              <div className="bg-white/10 p-6 border border-white/20">
                <h4 className="font-semibold mb-2">NFT Contracts</h4>
                <p className="text-primary-300 text-sm">
                  IP licensing, marketplace agreements and creator arrangements
                </p>
              </div>
              <div className="bg-white/10 p-6 border border-white/20">
                <h4 className="font-semibold mb-2">DeFi Structures</h4>
                <p className="text-primary-300 text-sm">
                  Protocol documentation, governance frameworks and regulatory analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Discuss Your Technology Matter"
                subtitle="Use the form to describe your project or legal need."
              />
              <p className="text-body mb-6">
                Whether building a startup, scaling a technology business, or navigating
                digital transformation, MONAD provides practical technology law advice
                focused on supporting innovation while managing risk.
              </p>
              <div className="bg-white p-6">
                <p className="text-sm text-primary-600">
                  <strong>Startups:</strong> MONAD works with early-stage technology
                  companies on IP strategy, data protection, commercial contracts and
                  investment documentation.
                </p>
              </div>
            </div>
            <ContactForm title="Contact Technology Team" />
          </div>
        </div>
      </section>
    </>
  )
}
