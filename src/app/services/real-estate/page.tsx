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
  ArrowRight,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'

const services = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Property',
    description:
      'MONAD advises buyers and sellers on residential property transactions, from due diligence through to completion. Work includes title examination, contract review, mortgage documentation and coordination with notaries and land registries.',
    features: [
      'Purchase and sale transactions',
      'Title examination and due diligence',
      'Contract review and negotiation',
      'Mortgage and financing documentation',
      'Notary and registry coordination',
    ],
  },
  {
    id: 'planning-environment',
    icon: TreePine,
    title: 'Planning and Environment',
    description:
      'MONAD advises on planning applications, environmental compliance and land use matters. Work includes planning permission applications, environmental assessments, zoning analysis and appeals.',
    features: [
      'Planning permission applications',
      'Environmental impact assessments',
      'Zoning and land use analysis',
      'Planning appeals and objections',
      'Environmental compliance',
    ],
  },
  {
    id: 'corporate-real-estate',
    icon: Building2,
    title: 'Corporate Real Estate',
    description:
      'MONAD advises corporate clients on property portfolios, commercial leases and real estate aspects of corporate transactions. Work includes lease negotiations, portfolio restructuring, sale-leaseback arrangements and headquarters relocations.',
    features: [
      'Commercial lease negotiations',
      'Portfolio management and restructuring',
      'Sale and leaseback transactions',
      'Corporate headquarters relocations',
      'Real estate aspects of M&A',
    ],
  },
  {
    id: 'licensing',
    icon: FileCheck,
    title: 'Licensing and Permits',
    description:
      'MONAD advises on permits, licenses and regulatory approvals for property development and use. Work includes building permits, operating licenses, change of use applications and regulatory compliance.',
    features: [
      'Building permit applications',
      'Operating and business licenses',
      'Change of use applications',
      'Regulatory compliance review',
      'Permit renewals and amendments',
    ],
  },
  {
    id: 'development',
    icon: Hammer,
    title: 'Real Estate Development',
    description:
      'MONAD advises developers, investors and landowners on development projects from land acquisition through to completion. Work includes site assembly, development agreements, joint venture structures and construction contracts.',
    features: [
      'Site assembly and land acquisition',
      'Development agreements',
      'Joint venture structures',
      'Construction contract review',
      'Project financing coordination',
    ],
  },
  {
    id: 'investment',
    icon: TrendingUp,
    title: 'Real Estate Investment',
    description:
      'MONAD advises investors on real estate acquisitions, disposals and portfolio structuring. Work includes transaction structuring, due diligence coordination, investment documentation and exit planning.',
    features: [
      'Investment structuring',
      'Due diligence coordination',
      'Acquisition and disposal documentation',
      'Tax-efficient structures',
      'Exit planning and execution',
    ],
  },
  {
    id: 'construction',
    icon: HardHat,
    title: 'Construction',
    description:
      'MONAD advises on construction contracts, disputes and project delivery. Work includes contract drafting and review, delay and disruption claims, defect disputes and payment issues.',
    features: [
      'Construction contract drafting',
      'Delay and disruption claims',
      'Defect disputes and remediation',
      'Payment and retention disputes',
      'Project delivery issues',
    ],
  },
]

export default function RealEstateServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <p className="text-primary-400 uppercase tracking-wider text-sm font-medium mb-4">
              What We Do
            </p>
            <h1 className="heading-1 text-white mb-6">Real Estate</h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">
              MONAD advises on real estate transactions, development, investment and disputes.
              Work covers residential and commercial property, from individual purchases to
              portfolio transactions.
            </p>
            <p className="text-lg text-primary-300 leading-relaxed">
              The approach combines transaction expertise with practical understanding of
              how property markets work. Clients receive clear advice on risk, structure
              and execution.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <SectionHeading
              title="Real Estate Legal Services"
              subtitle="Comprehensive support for property transactions and development"
            />
            <p className="text-body text-lg leading-relaxed mb-6">
              Real estate matters require attention to detail, market understanding and
              efficient execution. MONAD handles property transactions, development projects,
              investment structures and disputes across residential and commercial sectors.
            </p>
            <p className="text-body leading-relaxed">
              Work is coordinated with notaries, surveyors, tax advisors and other
              professionals as needed. The focus is on protecting client interests and
              ensuring transactions complete smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-primary-100 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-900 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-xl font-serif font-semibold mb-4">
                  {service.title}
                </h2>
                <p className="text-primary-600 mb-4 leading-relaxed">{service.description}</p>
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
                  Discuss Your Project
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
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
              <p className="text-primary-200 mb-4 leading-relaxed">
                Greece offers a residence permit program through qualifying real estate
                investment. MONAD advises on property selection, due diligence, transaction
                execution and permit applications.
              </p>
              <p className="text-primary-200 mb-6 leading-relaxed">
                Work is integrated with tax planning and wealth structuring where residence
                status affects broader planning. The firm coordinates property, immigration
                and tax matters as a single engagement where appropriate.
              </p>
              <ul className="space-y-3 text-primary-200 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0" />
                  Residence permit for investor and family
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0" />
                  Schengen Area travel access
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0" />
                  Path to permanent residence
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0" />
                  Flexible residency requirements
                </li>
              </ul>
              <Link href="/services/individuals#golden-visas" className="btn-outline-light inline-flex items-center">
                Learn More About Golden Visas
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white/10 p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-6">
                MONAD Golden Visa Services
              </h3>
              <ul className="space-y-4 text-primary-200">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Property Due Diligence</strong>
                    <p className="text-sm mt-1">Title verification, encumbrances, planning status</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Transaction Support</strong>
                    <p className="text-sm mt-1">Contract review, notary coordination, completion</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Permit Application</strong>
                    <p className="text-sm mt-1">Document preparation, filing, renewals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Tax Coordination</strong>
                    <p className="text-sm mt-1">Residence planning, structure optimization</p>
                  </div>
                </li>
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
                title="Discuss Your Real Estate Matter"
                subtitle="Use the form to describe your property transaction or project."
              />
              <p className="text-body mb-6">
                Whether purchasing residential property, developing a commercial project,
                or investing in Greek real estate through the Golden Visa program, MONAD
                provides practical legal support focused on protecting your interests.
              </p>
              <div className="bg-white p-6">
                <h4 className="font-semibold mb-2">Greek Property Expertise</h4>
                <p className="text-primary-600 text-sm">
                  MONAD has extensive experience with Greek property law, land registry
                  procedures and the specific requirements of transactions in Greece.
                </p>
              </div>
            </div>
            <ContactForm title="Contact Real Estate Team" />
          </div>
        </div>
      </section>
    </>
  )
}
