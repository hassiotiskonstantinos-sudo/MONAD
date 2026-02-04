import Link from 'next/link'
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
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'

const services = [
  {
    id: 'families-business',
    icon: Users,
    title: 'Families and Business',
    description:
      'Navigating the intersection of family and business interests with sensitivity and expertise.',
    features: [
      'Family business governance',
      'Succession planning',
      'Shareholder agreements',
      'Family constitutions',
    ],
  },
  {
    id: 'estate-administration',
    icon: FileText,
    title: 'Estate Administration',
    description:
      'Comprehensive estate administration services to ensure smooth transfer of assets and fulfillment of wishes.',
    features: [
      'Probate proceedings',
      'Asset distribution',
      'Trust administration',
      'Estate tax planning',
    ],
  },
  {
    id: 'inheritance',
    icon: Scale,
    title: 'Inheritance Law',
    description:
      'Expert guidance on inheritance matters, protecting your legacy and ensuring fair distribution.',
    features: [
      'Wills and testaments',
      'Inheritance disputes',
      'Cross-border inheritance',
      'Forced heirship rules',
    ],
  },
  {
    id: 'immigration',
    icon: Plane,
    title: 'Immigration',
    description:
      'Personal immigration services for individuals and families seeking to relocate or establish residence.',
    features: [
      'Residence permits',
      'Family reunification',
      'Citizenship applications',
      'Long-term visas',
    ],
  },
  {
    id: 'golden-visas',
    icon: Award,
    title: 'Golden Visas',
    description:
      'Expert assistance with Golden Visa applications for investment-based residence in Greece.',
    features: [
      'Real estate investment visas',
      'Application preparation',
      'Due diligence support',
      'Renewal and extension',
    ],
  },
  {
    id: 'private-client',
    icon: Briefcase,
    title: 'Private Client / Non-Dom',
    description:
      'Specialized services for high-net-worth individuals and non-domiciled clients.',
    features: [
      'Non-dom tax planning',
      'Wealth structuring',
      'Asset protection',
      'International tax advice',
    ],
  },
  {
    id: 'commercial-litigation',
    icon: Gavel,
    title: 'Private Commercial Litigation',
    description:
      'Representation in private commercial disputes with a focus on achieving optimal outcomes.',
    features: [
      'Contract disputes',
      'Partnership disputes',
      'Shareholder disputes',
      'Professional negligence',
    ],
  },
  {
    id: 'wealth-disputes',
    icon: Shield,
    title: 'Private Wealth Disputes',
    description:
      'Resolution of disputes involving significant personal wealth and complex asset structures.',
    features: [
      'Trust disputes',
      'Inheritance litigation',
      'Family wealth conflicts',
      'Asset recovery',
    ],
  },
]

export default function IndividualsServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-400 uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h1 className="heading-1 text-white mb-6">Services for Individuals</h1>
            <p className="text-xl text-primary-200">
              Our personalized services for individuals address a wide array of
              legal needs, ensuring your personal and family matters are handled
              with care, discretion, and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="border border-primary-100 p-8 card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-primary-900" />
                  </div>
                  <h2 className="text-xl font-serif font-semibold">
                    {service.title}
                  </h2>
                </div>
                <p className="text-primary-600 mb-4">{service.description}</p>
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
                  Learn More
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDLEX Highlight */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">MEDLEX - Medical Negligence</h2>
            <p className="text-body mb-8">
              At MONAD, we are dedicated to advocating for individuals who have
              suffered due to medical negligence. Our experienced team meticulously
              investigates each case, working with medical experts to hold
              responsible parties accountable and secure the compensation you
              deserve.
            </p>
            <Link href="/el/medlex" className="btn-primary inline-flex">
              Learn More About MEDLEX
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="How Can We Help You?"
                subtitle="Our team is ready to assist you with your personal legal matters."
              />
              <p className="text-body mb-6">
                Whether you need assistance with estate planning, immigration, or
                resolving a dispute, we provide personalized attention and expert
                counsel to protect your interests and achieve your goals.
              </p>
              <div className="bg-primary-50 p-6">
                <h4 className="font-semibold mb-2">Confidential Consultation</h4>
                <p className="text-primary-600 text-sm">
                  All consultations are handled with the utmost discretion and
                  confidentiality.
                </p>
              </div>
            </div>
            <ContactForm compact />
          </div>
        </div>
      </section>
    </>
  )
}
