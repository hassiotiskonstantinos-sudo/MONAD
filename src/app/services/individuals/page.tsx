import Link from 'next/link'
import Image from 'next/image'
import {
  Users,
  FileText,
  Scale,
  Plane,
  Award,
  Briefcase,
  Gavel,
  Shield,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'
import { getAssetPath } from '@/lib/constants'

const services = [
  {
    id: 'families-business',
    icon: Users,
    title: 'Families and Business',
    description:
      'MONAD advises families with business interests on governance, succession, wealth transfer and dispute prevention. The firm works with founders, inheritors and family offices to manage the legal complexity that comes with multi-generational ownership, competing interests and cross-border holdings.',
    features: [
      'Family governance frameworks',
      'Succession and transition planning',
      'Shareholder arrangements',
      'Family constitutions and protocols',
      'Dispute prevention structures',
    ],
  },
  {
    id: 'estate-administration',
    icon: FileText,
    title: 'Estate Administration',
    description:
      'MONAD advises executors, administrators and beneficiaries on the administration of estates, both domestic and cross-border. Work includes probate applications, asset identification and collection, creditor management, tax filings and distribution to beneficiaries.',
    features: [
      'Probate and letters of administration',
      'Asset identification and collection',
      'Creditor and liability management',
      'Estate tax coordination',
      'Beneficiary distributions',
    ],
  },
  {
    id: 'inheritance',
    icon: Scale,
    title: 'Inheritance Law',
    description:
      'MONAD advises on inheritance matters, including wills, forced heirship, succession disputes and cross-border estates. The firm handles contentious and non-contentious matters, from will drafting to claims under foreign succession regimes.',
    features: [
      'Will drafting and review',
      'Cross-border succession planning',
      'Forced heirship analysis',
      'Inheritance disputes',
      'Estate litigation',
    ],
  },
  {
    id: 'immigration',
    icon: Plane,
    title: 'Immigration',
    description:
      'MONAD advises individuals and families on residence, permits, visas and citizenship matters. Work includes relocations, permit renewals, family reunification and coordination with tax and wealth planning where residence status affects broader planning.',
    features: [
      'Residence permit applications',
      'Family reunification',
      'Citizenship applications',
      'Visa extensions and renewals',
      'Coordination with tax planning',
    ],
  },
  {
    id: 'golden-visas',
    icon: Award,
    title: 'Golden Visas',
    description:
      'MONAD advises on Greek Golden Visa applications, from eligibility assessment through to permit issuance. The firm coordinates real estate acquisition, due diligence, application preparation and renewal. Work is integrated with tax residency planning where relevant.',
    features: [
      'Eligibility assessment',
      'Real estate acquisition coordination',
      'Application preparation and filing',
      'Due diligence support',
      'Renewal and family extensions',
    ],
  },
  {
    id: 'private-client',
    icon: Briefcase,
    title: 'Private Client / Non-Dom',
    description:
      'MONAD advises internationally mobile individuals on residence, tax status, asset structuring and wealth preservation. The firm handles non-dom regimes, remittance planning, pre-arrival structuring and ongoing compliance. Work is coordinated with tax advisors in relevant jurisdictions.',
    features: [
      'Non-dom regime planning',
      'Pre-arrival structuring',
      'Remittance basis planning',
      'Asset protection structures',
      'Multi-jurisdictional coordination',
    ],
  },
  {
    id: 'commercial-litigation',
    icon: Gavel,
    title: 'Private Commercial Litigation',
    description:
      'MONAD represents individuals in commercial disputes arising from investments, partnerships, contracts and professional relationships. The firm handles court proceedings, arbitration and negotiated settlements, with a focus on protecting personal exposure and reputation.',
    features: [
      'Investment disputes',
      'Partnership and JV disputes',
      'Contract enforcement',
      'Professional negligence claims',
      'Settlement negotiations',
    ],
  },
  {
    id: 'wealth-disputes',
    icon: Shield,
    title: 'Private Wealth Disputes',
    description:
      'MONAD represents individuals in disputes involving trusts, estates, family wealth and asset recovery. Work includes trust variation and removal applications, inheritance claims, breach of fiduciary duty actions and tracing claims across jurisdictions.',
    features: [
      'Trust disputes and variations',
      'Inheritance and estate claims',
      'Breach of fiduciary duty',
      'Asset tracing and recovery',
      'Family wealth conflicts',
    ],
  },
]

export default function IndividualsServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getAssetPath('/images/shutterstock_1100117846.jpg')}
            alt="Services for Individuals"
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
            <h1 className="heading-1 text-white mb-6">Services for Individuals</h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">
              MONAD advises individuals, families and private clients on personal legal matters,
              from wealth planning and immigration to disputes and estate administration.
            </p>
            <p className="text-lg text-primary-300 leading-relaxed">
              The approach is the same as for corporate clients: understand the objective,
              identify the risks, provide clear options and execute with discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <SectionHeading
              title="Private Client Services"
              subtitle="Discretion, clarity and decisive action for personal legal matters"
            />
            <p className="text-body text-lg leading-relaxed mb-6">
              Private clients face legal complexity across borders: residence planning, wealth
              structuring, family governance, succession and disputes. MONAD provides the same
              rigour and responsiveness for individuals as it does for businesses.
            </p>
            <p className="text-body leading-relaxed">
              Work is handled with discretion. Matters are senior-led. The focus is on
              providing clear options and helping clients make confident decisions about
              their personal affairs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-primary-100 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-primary-900" />
                  </div>
                  <h2 className="text-xl font-serif font-semibold">
                    {service.title}
                  </h2>
                </div>
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
                  Discuss Your Matter
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDLEX Highlight */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">MEDLEX - Greek Legal Services</h2>
              <p className="text-primary-200 mb-4 leading-relaxed">
                MEDLEX is MONAD's Greek language hub for clients who need legal services in
                Greece. Built for Greek speakers, residents and those doing business in
                Greece who prefer to work in their native language.
              </p>
              <p className="text-primary-200 mb-6 leading-relaxed">
                MEDLEX covers corporate, real estate, employment and dispute resolution
                matters under Greek law, delivered with the same rigour and clarity as
                MONAD's English language services.
              </p>
              <Link href="/el/medlex" className="btn-outline-light inline-flex items-center">
                Learn More About MEDLEX
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white/10 p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">MEDLEX Covers:</h3>
              <ul className="space-y-3 text-primary-200">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Corporate and commercial law
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Real estate transactions
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Employment and labour law
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Dispute resolution and litigation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Discuss Your Matter"
                subtitle="Use the form to describe your situation. A response will follow within one business day."
              />
              <p className="text-body mb-6">
                Personal matters require discretion. MONAD handles private client work
                with confidentiality and sensitivity. Initial consultations are used
                to understand your situation and determine how the firm can assist.
              </p>
              <div className="bg-primary-50 p-6">
                <h4 className="font-semibold mb-2">Confidentiality</h4>
                <p className="text-primary-600 text-sm">
                  All communications are treated as confidential. Information shared
                  during initial discussions is protected even if no engagement follows.
                </p>
              </div>
            </div>
            <ContactForm title="Contact Private Client Team" />
          </div>
        </div>
      </section>
    </>
  )
}
