import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
  ArrowRight,
  Briefcase,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'
import { getAssetPath } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Corporate & Business Law Services',
  description: 'Expert corporate law services in Greece. Company formation, M&A, corporate governance, commercial contracts, dispute resolution, and cross-border transactions. MONAD Law Firm.',
  keywords: ['corporate law Greece', 'company formation Athens', 'M&A lawyers', 'business law', 'commercial contracts'],
  openGraph: {
    title: 'Corporate & Business Law Services | MONAD',
    description: 'Expert corporate law services in Greece. Company formation, M&A, corporate governance, and cross-border transactions.',
  },
}

const services = [
  {
    id: 'corporate-formation',
    icon: Building2,
    title: 'Corporate Formation',
    description:
      'MONAD advises companies on formation, restructuring and cross border presence. The firm assists with entity selection, shareholder agreements, governance frameworks and regulatory registrations. Work includes domestic incorporations, holding structures, branch registrations and joint venture formation.',
    features: [
      'Domestic and international incorporations',
      'Holding and subsidiary structures',
      'Shareholder and joint venture agreements',
      'Corporate governance frameworks',
      'Branch and representative office registrations',
    ],
  },
  {
    id: 'international-tax',
    icon: TrendingUp,
    title: 'International Tax Planning',
    description:
      'MONAD advises on the legal architecture of tax efficient structures. The firm works closely with tax advisors to ensure that corporate arrangements are legally robust, commercially coherent and properly documented. This includes holding structures, transfer pricing documentation, treaty analysis and restructuring for changed circumstances.',
    features: [
      'Holding and financing structures',
      'Transfer pricing documentation',
      'Tax treaty analysis and optimization',
      'Restructuring and exit planning',
      'Coordination with local tax advisors',
    ],
  },
  {
    id: 'business-immigration',
    icon: Globe,
    title: 'Business Immigration',
    description:
      'MONAD advises companies on immigration strategies for executives, employees and their families. The firm handles work permits, intra-company transfers, corporate sponsorships and relocations. Business immigration is integrated with tax planning and corporate structuring where needed.',
    features: [
      'Work permits and employment visas',
      'Intra-company transfers',
      'Executive and key personnel relocations',
      'Corporate immigration compliance',
      'Family coordination and dependent permits',
    ],
  },
  {
    id: 'private-equity',
    icon: Briefcase,
    title: 'Private Equity',
    description:
      'MONAD advises sponsors and management teams on private equity transactions, from deal structuring to exit. Work includes fund formation, co-investment arrangements, portfolio company acquisitions, management participation schemes and secondary transactions.',
    features: [
      'Fund formation and structuring',
      'Acquisition and investment documentation',
      'Management incentive arrangements',
      'Portfolio company governance',
      'Exit planning and execution',
    ],
  },
  {
    id: 'mergers-acquisitions',
    icon: FileCheck,
    title: 'Mergers & Acquisitions',
    description:
      'MONAD advises buyers, sellers and management on M&A transactions across borders. The firm handles due diligence coordination, transaction structuring, negotiation and documentation, regulatory filings and post-completion matters. Deals range from founder exits to cross border carve-outs.',
    features: [
      'Buy-side and sell-side representation',
      'Due diligence coordination',
      'Transaction structuring and documentation',
      'Regulatory filings and approvals',
      'Post-merger integration support',
    ],
  },
  {
    id: 'company-law',
    icon: Scale,
    title: 'Company Law & Commercial Contracts',
    description:
      'MONAD advises on corporate governance, ongoing compliance and commercial contracting. The firm prepares and negotiates a wide range of commercial agreements, from distribution and licensing to supply chain and outsourcing. The focus is on documentation that works in practice.',
    features: [
      'Corporate governance advisory',
      'Commercial contracts and negotiations',
      'Distribution and agency agreements',
      'Licensing and IP commercialization',
      'Supply chain and outsourcing arrangements',
    ],
  },
  {
    id: 'regulatory-compliance',
    icon: Shield,
    title: 'Regulatory & Compliance',
    description:
      'MONAD advises on regulatory frameworks that affect corporate operations, including sector specific licensing, competition law, anti-corruption compliance and sanctions. The firm helps clients build compliance systems that are practical and proportionate.',
    features: [
      'Sector regulatory compliance',
      'Competition and antitrust advisory',
      'Anti-corruption and sanctions compliance',
      'Board and committee governance',
      'Internal policies and training',
    ],
  },
  {
    id: 'fraud',
    icon: Shield,
    title: 'Fraud, Financial Crime & Asset Recovery',
    description:
      'MONAD advises victims of fraud and financial crime on investigation, asset tracing and recovery. The firm handles urgent injunctions, freezing orders, disclosure applications and enforcement actions across jurisdictions. Work is often coordinated with forensic accountants and investigators.',
    features: [
      'Fraud investigation coordination',
      'Asset tracing and freezing orders',
      'Urgent injunctive relief',
      'Cross-border enforcement',
      'Coordination with forensic specialists',
    ],
  },
  {
    id: 'employment',
    icon: Users,
    title: 'Employment',
    description:
      'MONAD advises on the employment aspects of corporate transactions and ongoing operations. This includes executive service agreements, employment policies, workforce restructuring, employee disputes and cross border employment arrangements.',
    features: [
      'Executive contracts and incentives',
      'Employment policies and handbooks',
      'Workforce restructuring',
      'Employee disputes and terminations',
      'Cross-border employment coordination',
    ],
  },
  {
    id: 'dispute-resolution',
    icon: Gavel,
    title: 'International Dispute Resolution',
    description:
      'MONAD represents clients in international arbitration and cross border litigation. The firm handles ICC, LCIA, ICSID and ad hoc arbitrations, as well as court proceedings involving foreign parties, enforcement of foreign judgments and interim measures across jurisdictions.',
    features: [
      'International commercial arbitration',
      'Investment treaty arbitration',
      'Cross-border litigation',
      'Enforcement of foreign judgments and awards',
      'Emergency and interim measures',
    ],
  },
]

export default function CompaniesServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getAssetPath('/images/private-equity.jpg')}
            alt="Services for Companies"
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
            <h1 className="heading-1 text-white mb-6">Services for Companies</h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">
              MONAD advises companies, founders and investors on corporate, commercial and
              regulatory matters. The firm handles transactions, governance, compliance and
              disputes, with a particular focus on cross border work.
            </p>
            <p className="text-lg text-primary-300 leading-relaxed">
              The approach is direct: understand the commercial objective, identify the legal
              risks that matter, produce documentation that works, and move efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <SectionHeading
              title="Corporate Legal Services"
              subtitle="Practical solutions for complex business matters"
            />
            <p className="text-body text-lg leading-relaxed mb-6">
              Corporate clients come to MONAD with transactions, governance challenges, cross
              border structuring, regulatory exposure and disputes. In each case, the goal is
              the same: produce a defensible solution that can be implemented.
            </p>
            <p className="text-body leading-relaxed">
              MONAD combines senior-led advice with practical delivery. Matters are handled
              with discretion, responsiveness and a commitment to clarity. The aim is to help
              clients make confident decisions, reduce exposure, and secure outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white p-8 lg:p-10 border border-primary-100"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-primary-900" />
                      </div>
                      <h2 className="heading-3">{service.title}</h2>
                    </div>
                    <p className="text-body leading-relaxed mb-6">{service.description}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-primary-900 font-medium hover:text-primary-600 transition-colors"
                    >
                      Discuss Your Needs
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                  <div className="bg-primary-50 p-6">
                    <h4 className="font-semibold text-primary-900 mb-4">Key Areas</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <ChevronRight className="w-4 h-4 text-primary-900 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-primary-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINLEX Highlight */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">FINLEX - Cross Border Structuring</h2>
              <p className="text-primary-200 mb-4 leading-relaxed">
                FINLEX is MONAD's focused hub for clients dealing with cross border structuring,
                investor driven transactions and finance adjacent legal needs. Built for founders,
                investors, family offices and internationally mobile clients who need legal
                clarity across jurisdictions.
              </p>
              <p className="text-primary-200 mb-6 leading-relaxed">
                FINLEX exists to turn complexity into usable decisions. Clients receive clear
                options, clear trade offs and clear next steps.
              </p>
              <Link href="/finlex" className="btn-outline-light inline-flex items-center">
                Learn More About FINLEX
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white/10 p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">FINLEX Handles:</h3>
              <ul className="space-y-3 text-primary-200">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Cross border corporate structuring
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Investor transactions and documentation
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Residence and tax planning coordination
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Risk management and dispute prevention
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
                title="Discuss Your Matter"
                subtitle="Use the form to describe the request. A response will follow within one business day."
              />
              <p className="text-body mb-6">
                Where the matter is time sensitive, marking it as urgent helps the team
                triage appropriately. MONAD reviews messages to understand the request
                and determine whether the firm is able to assist.
              </p>
              <div className="bg-white p-6">
                <p className="text-sm text-primary-600">
                  <strong>Note:</strong> Sending a message does not create a lawyer client
                  relationship. Formal engagement begins only after a conflict check and
                  written confirmation of scope.
                </p>
              </div>
            </div>
            <ContactForm title="Contact Corporate Team" />
          </div>
        </div>
      </section>
    </>
  )
}
