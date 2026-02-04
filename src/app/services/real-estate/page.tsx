import Link from 'next/link'
import {
  Home,
  TreePine,
  Building2,
  FileCheck,
  Hammer,
  TrendingUp,
  HardHat,
  ChevronRight,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'

const services = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Property',
    description:
      'Comprehensive legal support for residential property transactions, from purchase to sale.',
    features: [
      'Property purchase and sale',
      'Title examination',
      'Contract negotiation',
      'Mortgage documentation',
    ],
  },
  {
    id: 'planning-environment',
    icon: TreePine,
    title: 'Planning and Environment',
    description:
      'Navigate planning regulations and environmental requirements with expert guidance.',
    features: [
      'Planning applications',
      'Environmental assessments',
      'Zoning compliance',
      'Land use permits',
    ],
  },
  {
    id: 'corporate-real-estate',
    icon: Building2,
    title: 'Corporate Real Estate',
    description:
      'Strategic advice for corporate property portfolios, leases, and commercial transactions.',
    features: [
      'Commercial leases',
      'Portfolio management',
      'Sale and leaseback',
      'Corporate relocations',
    ],
  },
  {
    id: 'licensing',
    icon: FileCheck,
    title: 'Licensing / Permits',
    description:
      'Obtain necessary licenses and permits for property development and use.',
    features: [
      'Building permits',
      'Operating licenses',
      'Change of use applications',
      'Regulatory compliance',
    ],
  },
  {
    id: 'development',
    icon: Hammer,
    title: 'Real Estate Development',
    description:
      'End-to-end legal support for property development projects of all sizes.',
    features: [
      'Development agreements',
      'Joint venture structures',
      'Construction contracts',
      'Project financing',
    ],
  },
  {
    id: 'investment',
    icon: TrendingUp,
    title: 'Real Estate Investment',
    description:
      'Legal expertise for real estate investments, from individual properties to portfolios.',
    features: [
      'Investment structures',
      'Due diligence',
      'Tax optimization',
      'Exit strategies',
    ],
  },
  {
    id: 'construction',
    icon: HardHat,
    title: 'Construction',
    description:
      'Legal services covering all aspects of construction projects and disputes.',
    features: [
      'Construction contracts',
      'Dispute resolution',
      'Defect claims',
      'Payment disputes',
    ],
  },
]

export default function RealEstateServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-400 uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h1 className="heading-1 text-white mb-6">Real Estate</h1>
            <p className="text-xl text-primary-200">
              From residential properties to large-scale corporate developments,
              our real estate legal team has the knowledge and expertise to support
              every aspect of property transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Real Estate Services"
            subtitle="Comprehensive legal solutions for all your property needs"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="border border-primary-100 p-8 card-hover group"
              >
                <div className="w-14 h-14 bg-primary-900 flex items-center justify-center mb-6 group-hover:bg-primary-800 transition-colors">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-xl font-serif font-semibold mb-4">
                  {service.title}
                </h2>
                <p className="text-primary-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <ChevronRight className="w-4 h-4 text-primary-900 mr-2 flex-shrink-0" />
                      <span className="text-primary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Visa */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Golden Visa Through Real Estate</h2>
              <p className="text-primary-200 mb-6 leading-relaxed">
                Greece offers one of Europe's most attractive Golden Visa programs.
                Through qualifying real estate investments, you can obtain residence
                permits for you and your family.
              </p>
              <ul className="space-y-3 text-primary-200 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Residence permit for investor and family
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Visa-free travel within Schengen Area
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Path to permanent residence and citizenship
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  No minimum stay requirements
                </li>
              </ul>
              <Link href="/services/individuals#golden-visas" className="btn-outline-light inline-flex">
                Learn More
              </Link>
            </div>
            <div className="bg-white/10 p-8">
              <h3 className="text-xl font-semibold mb-4">
                How We Help
              </h3>
              <ul className="space-y-4 text-primary-200">
                <li>Property due diligence and selection</li>
                <li>Investment structure advice</li>
                <li>Purchase transaction support</li>
                <li>Golden Visa application</li>
                <li>Ongoing compliance support</li>
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
                title="Discuss Your Real Estate Needs"
                subtitle="Our team is ready to assist with any property-related legal matters."
              />
              <p className="text-body">
                Whether you are buying your first home, developing a commercial
                project, or investing in Greek real estate, we provide expert legal
                guidance tailored to your specific situation.
              </p>
            </div>
            <ContactForm compact />
          </div>
        </div>
      </section>
    </>
  )
}
