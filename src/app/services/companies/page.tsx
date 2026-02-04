import Link from 'next/link'
import {
  Building2,
  Globe,
  TrendingUp,
  FileCheck,
  Scale,
  Shield,
  Users,
  Gavel,
  ChevronRight,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'

const services = [
  {
    id: 'corporate-formation',
    icon: Building2,
    title: 'Corporate Formation',
    description:
      'Launch your venture with confidence, knowing that all legal foundations are in place. We guide you through entity selection, registration, and compliance requirements.',
    features: [
      'Company registration and setup',
      'Entity structure optimization',
      'Shareholder agreements',
      'Corporate governance framework',
    ],
  },
  {
    id: 'international-tax',
    icon: TrendingUp,
    title: 'International Tax Planning',
    description:
      'Navigate complex international tax landscapes with strategies designed to optimize your tax position while ensuring full compliance.',
    features: [
      'Cross-border tax planning',
      'Transfer pricing',
      'Tax treaty optimization',
      'Tax-efficient structures',
    ],
  },
  {
    id: 'business-immigration',
    icon: Globe,
    title: 'Business Immigration',
    description:
      'Smooth transitions for international translocations, navigating complex visa issues and policies for executives and employees.',
    features: [
      'Work permits and visas',
      'Intra-company transfers',
      'Executive relocation',
      'Immigration compliance',
    ],
  },
  {
    id: 'private-equity',
    icon: TrendingUp,
    title: 'Private Equity',
    description:
      'Comprehensive support for private equity transactions, from fund formation to portfolio company matters.',
    features: [
      'Fund structuring',
      'Investment documentation',
      'Portfolio acquisitions',
      'Exit strategies',
    ],
  },
  {
    id: 'mergers-acquisitions',
    icon: FileCheck,
    title: 'Mergers & Acquisitions',
    description:
      'From financing to mergers, we guide you through every transaction with precision and expertise.',
    features: [
      'Deal structuring',
      'Due diligence',
      'Transaction documentation',
      'Post-merger integration',
    ],
  },
  {
    id: 'company-law',
    icon: Scale,
    title: 'Company Law & Commercial Contracts',
    description:
      'Expert counsel on all aspects of company law and commercial agreements to protect your business interests.',
    features: [
      'Commercial contracts',
      'Joint ventures',
      'Licensing agreements',
      'Distribution agreements',
    ],
  },
  {
    id: 'regulatory-compliance',
    icon: FileCheck,
    title: 'Regulatory & Compliance - Corporate Governance',
    description:
      'Ensure your business meets all regulatory requirements with our comprehensive compliance services.',
    features: [
      'Regulatory compliance audits',
      'Corporate governance',
      'Board advisory',
      'Compliance programs',
    ],
  },
  {
    id: 'fraud',
    icon: Shield,
    title: 'Fraud, Financial Crime & Asset Recovery',
    description:
      'Protect your assets and reputation with our proactive approach to fraud prevention and asset recovery.',
    features: [
      'Fraud investigations',
      'Asset tracing',
      'Recovery litigation',
      'Anti-money laundering',
    ],
  },
  {
    id: 'employment',
    icon: Users,
    title: 'Employment',
    description:
      'Handling workplace matters with expertise, from employment contracts to dispute resolution.',
    features: [
      'Employment contracts',
      'HR policies',
      'Workplace disputes',
      'Redundancy and restructuring',
    ],
  },
  {
    id: 'dispute-resolution',
    icon: Gavel,
    title: 'International Dispute Resolution',
    description:
      'Cross-border conflicts handled with discretion and expertise through arbitration and mediation.',
    features: [
      'International arbitration',
      'Mediation',
      'Commercial litigation',
      'Enforcement of judgments',
    ],
  },
]

export default function CompaniesServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-400 uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h1 className="heading-1 text-white mb-6">Services for Companies</h1>
            <p className="text-xl text-primary-200">
              In today's fast-paced corporate environment, businesses need a legal
              partner that understands both the complexities of the law and the
              realities of the market. We offer a full suite of legal services for
              companies.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-primary-900" />
                    </div>
                    <h2 className="heading-3">{service.title}</h2>
                  </div>
                  <p className="text-body mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <ChevronRight className="w-5 h-5 text-primary-900 mr-2" />
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
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-primary-50 h-64 flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINLEX Highlight */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">FINLEX - Financial Recovery</h2>
              <p className="text-primary-200 mb-6 leading-relaxed">
                At MONAD we understand the impact of financial losses. Our FINLEX
                Financial Recovery team is dedicated to helping clients regain
                control by pursuing compensation for investments that were mis-sold.
              </p>
              <Link href="/finlex" className="btn-outline-light inline-flex">
                Learn More About FINLEX
              </Link>
            </div>
            <div className="bg-white/10 p-8">
              <h3 className="text-xl font-semibold mb-4">We Handle:</h3>
              <ul className="space-y-2 text-primary-200">
                <li>• Unit Trusts and ISAs</li>
                <li>• CFDs and Hedge Funds</li>
                <li>• Cryptocurrency Investments</li>
                <li>• Alternative Assets (Art, Wine)</li>
                <li>• Mis-sold Financial Products</li>
              </ul>
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
                title="Ready to Get Started?"
                subtitle="Contact us to discuss how we can help your business navigate legal challenges and seize opportunities."
              />
              <p className="text-body">
                Our corporate team is ready to assist you with any legal matters.
                Whether you are starting a new venture, expanding internationally,
                or dealing with complex transactions, we have the expertise to guide
                you.
              </p>
            </div>
            <ContactForm compact />
          </div>
        </div>
      </section>
    </>
  )
}
