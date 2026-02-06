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
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import HeroSection from '@/components/HeroSection'
import { getAssetPath } from '@/lib/constants'

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

      {/* What MONAD Does - White section for balance */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
              What MONAD Does
            </h2>
            <p className="text-primary-600 text-lg leading-relaxed">
              MONAD advises companies, founders, investors and private clients on the legal
              and strategic issues that sit at the center of modern life and commerce.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/services/companies" className="group p-8 border border-primary-200 hover:border-orange-500 hover:shadow-lg transition-all">
              <Building2 className="w-10 h-10 text-prussian-500 group-hover:text-orange-500 mx-auto mb-4 transition-colors" />
              <h3 className="text-primary-900 font-semibold mb-2 text-center">For Companies</h3>
              <p className="text-primary-500 text-sm text-center">Corporate, M&A, Compliance</p>
            </Link>
            <Link href="/services/individuals" className="group p-8 border border-primary-200 hover:border-orange-500 hover:shadow-lg transition-all">
              <Users className="w-10 h-10 text-prussian-500 group-hover:text-orange-500 mx-auto mb-4 transition-colors" />
              <h3 className="text-primary-900 font-semibold mb-2 text-center">For Individuals</h3>
              <p className="text-primary-500 text-sm text-center">Immigration, Inheritance, Wealth</p>
            </Link>
            <Link href="/services/technology" className="group p-8 border border-primary-200 hover:border-orange-500 hover:shadow-lg transition-all">
              <Cpu className="w-10 h-10 text-prussian-500 group-hover:text-orange-500 mx-auto mb-4 transition-colors" />
              <h3 className="text-primary-900 font-semibold mb-2 text-center">Technology</h3>
              <p className="text-primary-500 text-sm text-center">IP, GDPR, Digital Assets</p>
            </Link>
            <Link href="/services/real-estate" className="group p-8 border border-primary-200 hover:border-orange-500 hover:shadow-lg transition-all">
              <HomeIcon className="w-10 h-10 text-prussian-500 group-hover:text-orange-500 mx-auto mb-4 transition-colors" />
              <h3 className="text-primary-900 font-semibold mb-2 text-center">Real Estate</h3>
              <p className="text-primary-500 text-sm text-center">Transactions, Development</p>
            </Link>
          </div>
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
              {/* FINLEX Logo */}
              <div className="mb-8">
                <div className="inline-block bg-white px-8 py-4">
                  <span className="text-4xl font-serif font-bold tracking-wide text-prussian-500">FIN</span>
                  <span className="text-4xl font-serif font-bold tracking-wide text-orange-500">LEX</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Financial Claims Recovery
              </h2>
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                FINLEX is MONAD&apos;s dedicated platform for clients seeking to recover losses
                from mis-sold financial products, investment fraud, and financial misconduct.
                Our team of <strong>leading experts</strong> in financial litigation has a proven track record
                of success.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                As recognized <strong>experts</strong> in this specialized field, we handle claims against banks,
                investment firms, and financial advisors with unmatched expertise.
                We work on a no-win, no-fee basis for qualifying cases.
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
            {/* Static Preview Card */}
            <div className="bg-white shadow-2xl overflow-hidden">
              <div className="bg-prussian-500 p-6">
                <span className="text-2xl font-serif font-bold text-white">FIN</span>
                <span className="text-2xl font-serif font-bold text-orange-400">LEX</span>
                <p className="text-white/80 text-sm mt-2">Leading Experts in Financial Claims Recovery</p>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Expert Recovery Services</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-primary-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    Mis-sold Investment Products
                  </li>
                  <li className="flex items-center text-primary-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    Investment Fraud Losses
                  </li>
                  <li className="flex items-center text-primary-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    Financial Advisor Misconduct
                  </li>
                  <li className="flex items-center text-primary-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    Bank Negligence Claims
                  </li>
                </ul>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <p className="text-sm text-primary-700">
                    <strong className="text-orange-600">No Win, No Fee</strong> – We only get paid when you recover your losses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athens - Global Reach - White section for balance */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
                Based in <span className="text-orange-500">Athens</span>,
                <br />Serving Clients Worldwide
              </h2>
              <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                Strategic legal advice for cross-border transactions and international matters.
                MONAD works with clients across Europe, the Middle East, and beyond.
              </p>
              <p className="text-primary-500 mb-8 leading-relaxed">
                Our team combines deep local knowledge with international experience,
                enabling us to guide clients through complex multi-jurisdictional matters
                with precision and efficiency.
              </p>
              <Link href="/contact" className="btn-orange inline-flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src={getAssetPath('/images/regulatory.jpg')}
                alt="Global Legal Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-prussian-500/20" />
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
