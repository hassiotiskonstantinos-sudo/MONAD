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
import SectionHeading from '@/components/SectionHeading'
import HeroSection from '@/components/HeroSection'

const pillars = [
  {
    title: 'For Companies',
    description:
      'Formation, governance, commercial contracting, M&A, private equity, employment, regulatory compliance, fraud and asset recovery, and international dispute resolution.',
    icon: Building2,
    href: '/services/companies',
  },
  {
    title: 'For Individuals',
    description:
      'Immigration, Golden Visas, inheritance, estate administration, family business matters and private wealth disputes.',
    icon: Users,
    href: '/services/individuals',
  },
  {
    title: 'Technology & Innovation',
    description:
      'IP, copyright and design, GDPR and data privacy, cybersecurity governance, technology transactions, SaaS contracting, and digital assets.',
    icon: Cpu,
    href: '/services/technology',
  },
  {
    title: 'Real Estate',
    description:
      'Transactions, development, construction, planning, licensing and investment structuring.',
    icon: HomeIcon,
    href: '/services/real-estate',
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

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-body text-lg leading-relaxed mb-8">
              Clients come to MONAD when a decision has consequences. A company is forming,
              a deal is closing, a relationship is breaking down, an asset must be protected,
              a dispute is escalating, a relocation is planned, a product is launching, a
              regulator is asking questions. In those moments, legal advice cannot be theoretical.
              It must be accurate, readable, commercially aligned and immediately usable.
            </p>
            <p className="text-body text-lg leading-relaxed">
              MONAD combines senior led advice with practical delivery. Matters are handled
              with discretion, responsiveness and a commitment to clarity. The aim is simple:
              to help clients make confident decisions, reduce exposure, and secure outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* What MONAD Does */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="What MONAD Does"
            subtitle="MONAD advises companies, founders, investors and private clients on the legal and strategic issues that sit at the center of modern life and commerce. The firm's services are structured across four pillars."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pillars.map((pillar, index) => (
              <Link key={pillar.title} href={pillar.href}>
                <div
                  className={`group p-8 h-full card-hover ${
                    index === 0
                      ? 'bg-primary-900 text-white'
                      : 'bg-white border border-primary-100'
                  }`}
                >
                  <div
                    className={`w-14 h-14 flex items-center justify-center mb-6 ${
                      index === 0 ? 'bg-white/10' : 'bg-primary-50'
                    }`}
                  >
                    <pillar.icon
                      className={`w-7 h-7 ${
                        index === 0 ? 'text-white' : 'text-primary-900'
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-serif font-semibold mb-4 ${
                      index === 0 ? 'text-white' : 'text-primary-900'
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      index === 0 ? 'text-primary-200' : 'text-primary-600'
                    }`}
                  >
                    {pillar.description}
                  </p>
                  <span
                    className={`inline-flex items-center text-sm font-medium ${
                      index === 0
                        ? 'text-white group-hover:text-primary-200'
                        : 'text-primary-900 group-hover:text-primary-600'
                    }`}
                  >
                    Learn more
                    <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose MONAD */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading title="Why Clients Choose MONAD" />
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">
                    Direct Advice
                  </h4>
                  <p className="text-primary-600 leading-relaxed">
                    The advice explains what matters, what does not, and what the next
                    step should be—without hiding behind jargon.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">
                    Partner Led
                  </h4>
                  <p className="text-primary-600 leading-relaxed">
                    The person responsible stays engaged from strategy to delivery.
                    No layers, no handoffs.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">
                    Built for Cross Border
                  </h4>
                  <p className="text-primary-600 leading-relaxed">
                    Many client matters involve more than one jurisdiction, more than
                    one regulatory framework, and more than one timeline. MONAD is set
                    up to manage that complexity without losing control of the details.
                  </p>
                </div>
              </div>
              <div className="mt-8 relative h-64 w-full">
                <Image
                  src="/images/shutterstock_2249889569.jpg"
                  alt="MONAD Law Firm"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-primary-900 text-white p-10">
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Most Demanded Services
              </h3>
              <p className="text-primary-200 mb-8 text-sm leading-relaxed">
                Many clients begin with one of the following needs and then expand
                into broader support. MONAD treats these as gateways to a wider
                relationship, where the objective is long term legal stability and
                reduced risk.
              </p>
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm uppercase tracking-wider text-primary-400 mb-3">
                    For Companies
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {companyServices.map((service) => (
                      <div key={service.name} className="flex items-center text-sm">
                        <service.icon className="w-4 h-4 mr-2 text-primary-400" />
                        <span className="text-primary-100">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm uppercase tracking-wider text-primary-400 mb-3">
                    For Individuals
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {individualServices.map((service) => (
                      <div key={service.name} className="flex items-center text-sm">
                        <service.icon className="w-4 h-4 mr-2 text-primary-400" />
                        <span className="text-primary-100">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINLEX & MEDLEX */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/tax-wealth-management.jpg"
                  alt="FINLEX - Cross Border Structuring"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/40" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">FINLEX</h3>
                <p className="text-primary-200 mb-4 leading-relaxed">
                  FINLEX is MONAD's focused hub for clients dealing with cross border
                  structuring, investor driven transactions and finance adjacent legal
                  needs. Built for founders, investors, family offices and internationally
                  mobile clients who need legal clarity across jurisdictions.
                </p>
                <Link
                  href="/finlex"
                  className="inline-flex items-center text-white font-medium hover:text-primary-200 transition-colors"
                >
                  Learn more about FINLEX
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/shutterstock_2724348917.jpg"
                  alt="MEDLEX - Greek Legal Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/40" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">MEDLEX</h3>
                <p className="text-primary-200 mb-4 leading-relaxed">
                  Το MEDLEX είναι ο στοχευμένος κόμβος της MONAD για νομικές υπηρεσίες
                  ελληνικού δικαίου, με έμφαση στην πρακτική εφαρμογή και την ασφάλεια
                  δικαίου.
                </p>
                <Link
                  href="/el/medlex"
                  className="inline-flex items-center text-white font-medium hover:text-primary-200 transition-colors"
                >
                  Μάθετε περισσότερα
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                title="How Can We Help You?"
                subtitle="Use the form to describe the request as clearly as possible. A response will follow within one business day."
              />
              <p className="text-body mb-6">
                Where the matter is time sensitive, marking it as urgent helps the team
                triage appropriately. MONAD reviews messages to understand the request
                and determine whether the firm is able to assist.
              </p>
              <p className="text-sm text-primary-500 mb-8">
                Sending a message does not create a lawyer client relationship. Formal
                engagement begins only after a conflict check and written confirmation
                of scope.
              </p>
              <div className="bg-primary-50 p-6">
                <p className="text-sm text-primary-600">
                  <strong>Privacy:</strong> Contact details are used only to respond to
                  the request and are handled in accordance with the firm's privacy standards.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-primary-700 mb-6 leading-relaxed">
              If the issue is already moving, time is rarely neutral. Early strategy
              reduces cost, reduces risk, and increases options. MONAD can provide a
              structured assessment, a practical plan, and the documentation needed
              to execute it.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
