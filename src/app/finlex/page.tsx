import Link from 'next/link'
import {
  Globe,
  Shield,
  FileCheck,
  Users,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import SectionHeading from '@/components/SectionHeading'

const services = [
  {
    title: 'Cross Border Structuring',
    description: 'Multi-jurisdiction corporate and investment structures designed for legal clarity and operational efficiency.',
  },
  {
    title: 'Investor Transactions',
    description: 'Investment documentation, shareholder arrangements, and financing structures for founders and investors.',
  },
  {
    title: 'Residence Planning',
    description: 'Coordinated tax residence, immigration, and corporate planning for internationally mobile clients.',
  },
  {
    title: 'Risk Management',
    description: 'Dispute prevention strategies that protect clients in real life, not only on paper.',
  },
]

export default function FinlexPage() {
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
            <div className="inline-block bg-white/10 px-4 py-2 mb-6">
              <span className="text-white font-semibold tracking-wider">FINLEX</span>
            </div>
            <h1 className="heading-1 text-white mb-6">
              Cross Border Structuring.<br />
              Legal Clarity.
            </h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">
              FINLEX is MONAD's focused hub for clients dealing with cross border structuring,
              investor driven transactions and finance adjacent legal needs. It is built for
              founders, investors, family offices and internationally mobile clients who need
              legal clarity across jurisdictions.
            </p>
            <p className="text-lg text-primary-300 mb-8 leading-relaxed">
              FINLEX exists to turn complexity into usable decisions. Clients receive clear
              options, clear trade offs and clear next steps.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact-form" className="btn-primary flex items-center">
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+302101234567" className="btn-outline-light flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What FINLEX Handles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <SectionHeading
              title="What FINLEX Handles"
              subtitle="FINLEX matters often involve multiple timelines at once"
            />
            <p className="text-body text-lg leading-relaxed mb-8">
              Corporate structuring, tax posture, residence planning, investment documentation,
              and risk management. MONAD approaches these matters as integrated projects,
              ensuring that legal form, commercial substance and practical execution align.
            </p>
            <p className="text-body leading-relaxed">
              The FINLEX team supports structuring decisions, transaction documentation, cross
              border planning, and dispute prevention strategies that protect clients in real
              life, not only on paper. Where specialist input is required, MONAD coordinates
              that input while retaining strategic control of the legal architecture and the
              final documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 border border-primary-100">
                <h3 className="text-xl font-serif font-semibold mb-4">{service.title}</h3>
                <p className="text-primary-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">Built For</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">Founders & Entrepreneurs</h4>
                    <p className="text-primary-600">
                      Building companies across borders, raising investment, or planning exits.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">Investors & Family Offices</h4>
                    <p className="text-primary-600">
                      Structuring investments, managing portfolios, and coordinating across jurisdictions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">Internationally Mobile Clients</h4>
                    <p className="text-primary-600">
                      Relocating, changing residence, or managing affairs across multiple countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-900 text-white p-10">
              <h3 className="text-2xl font-serif font-semibold mb-6">The FINLEX Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">
                    Integrated project management across legal, tax, and operational workstreams
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">
                    Strategic control of legal architecture while coordinating specialist input
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">
                    Documentation that works in practice, not just on paper
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">
                    Clear options, clear trade offs, clear next steps
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Complexity into Usable Decisions</h2>
            <p className="text-primary-200 text-lg leading-relaxed mb-8">
              FINLEX is designed for clients who face multiple moving parts across multiple
              jurisdictions. The goal is not to generate paper, but to produce solutions
              that can be implemented and defended.
            </p>
            <Link href="#contact-form" className="btn-outline-light inline-flex items-center">
              Discuss Your Situation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-6">Contact FINLEX</h2>
              <p className="text-body mb-6">
                Use the form to describe the request. A member of the FINLEX team will
                respond within one business day. Where the matter is time sensitive,
                indicating urgency helps ensure appropriate prioritization.
              </p>
              <div className="bg-white p-6 mb-6">
                <h4 className="font-semibold mb-3">Initial Assessment</h4>
                <p className="text-primary-600 text-sm mb-4">
                  FINLEX matters often require coordination across legal, tax, and operational
                  considerations. An initial conversation helps identify the right approach
                  and the right team configuration.
                </p>
                <ul className="space-y-2 text-sm text-primary-700">
                  <li className="flex items-center">
                    <FileCheck className="w-4 h-4 mr-2 text-primary-900" />
                    Structured assessment of the situation
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="w-4 h-4 mr-2 text-primary-900" />
                    Clear explanation of options and trade offs
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="w-4 h-4 mr-2 text-primary-900" />
                    Practical next steps and timeline
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary-900 mr-3" />
                <div>
                  <p className="text-sm text-primary-500">Call us directly:</p>
                  <a href="tel:+302101234567" className="text-xl font-semibold text-primary-900">
                    +30 210 123 4567
                  </a>
                </div>
              </div>
            </div>
            <ContactForm title="Contact FINLEX Team" />
          </div>
        </div>
      </section>
    </>
  )
}
