import Link from 'next/link'
import {
  Lightbulb,
  Palette,
  Scale,
  Shield,
  Award,
  Lock,
  Coins,
  ChevronRight,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'

const services = [
  {
    id: 'intellectual-property',
    icon: Lightbulb,
    title: 'Intellectual Property',
    description:
      'Comprehensive IP protection strategies to safeguard your innovations and creative works.',
    features: [
      'Trademark registration',
      'IP portfolio management',
      'Licensing agreements',
      'IP enforcement',
    ],
  },
  {
    id: 'copyright-design',
    icon: Palette,
    title: 'Copyright and Design',
    description:
      'Protection for creative works, designs, and artistic expressions across all media.',
    features: [
      'Copyright registration',
      'Design protection',
      'Content licensing',
      'Infringement actions',
    ],
  },
  {
    id: 'competition',
    icon: Scale,
    title: 'Competition Law',
    description:
      'Navigate competition regulations and ensure compliance with antitrust requirements.',
    features: [
      'Competition compliance',
      'Merger control',
      'Cartel investigations',
      'Market dominance issues',
    ],
  },
  {
    id: 'gdpr',
    icon: Shield,
    title: 'GDPR',
    description:
      'Ensure your business complies with EU data protection regulations and GDPR requirements.',
    features: [
      'GDPR compliance audits',
      'Privacy policies',
      'Data processing agreements',
      'Data breach response',
    ],
  },
  {
    id: 'patents',
    icon: Award,
    title: 'Patents',
    description:
      'Patent strategy and protection for technological innovations and inventions.',
    features: [
      'Patent applications',
      'Patent prosecution',
      'Freedom to operate',
      'Patent litigation',
    ],
  },
  {
    id: 'data-privacy',
    icon: Lock,
    title: 'Data Privacy, Cybersecurity, Technology Transactions, and SaaS',
    description:
      'Comprehensive legal support for technology businesses and digital operations.',
    features: [
      'Cybersecurity policies',
      'SaaS agreements',
      'Technology licensing',
      'Data security compliance',
    ],
  },
  {
    id: 'crypto',
    icon: Coins,
    title: "NFTs and Crypto",
    description:
      'Legal guidance for blockchain technology, cryptocurrency, and digital assets.',
    features: [
      'Token legal frameworks',
      'NFT contracts',
      'Crypto compliance',
      'DeFi legal structures',
    ],
  },
]

export default function TechnologyServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-400 uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h1 className="heading-1 text-white mb-6">Technology & Innovation</h1>
            <p className="text-xl text-primary-200">
              The legal landscape is constantly evolving with advancements in
              technology, and so are we. Our firm provides cutting-edge legal
              counsel on intellectual property, data protection, and emerging
              technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary-900" />
              <h3 className="text-xl font-serif font-semibold mb-2">
                Intellectual Property & GDPR Compliance
              </h3>
              <p className="text-primary-600">
                Protect your innovations while ensuring data privacy compliance.
              </p>
            </div>
            <div className="p-8 bg-white">
              <Lock className="w-12 h-12 mx-auto mb-4 text-primary-900" />
              <h3 className="text-xl font-serif font-semibold mb-2">
                Cybersecurity & Technology Transactions
              </h3>
              <p className="text-primary-600">
                Secure your digital assets and technology deals.
              </p>
            </div>
            <div className="p-8 bg-white">
              <Coins className="w-12 h-12 mx-auto mb-4 text-primary-900" />
              <h3 className="text-xl font-serif font-semibold mb-2">
                SaaS, NFTs, and Crypto
              </h3>
              <p className="text-primary-600">
                Navigate the evolving landscape of digital assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Technology Services"
            subtitle="Expert legal support for the digital age"
          />
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? '' : ''
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
                </div>
                <div className={`bg-primary-50 h-48 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <service.icon className="w-20 h-20 text-primary-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crypto/NFT Special Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Coins className="w-16 h-16 mx-auto mb-6" />
            <h2 className="heading-2 mb-6">NFTs, Crypto & Blockchain</h2>
            <p className="text-primary-200 mb-8 leading-relaxed">
              The world of digital assets is evolving rapidly, and legal frameworks
              are catching up. Our team stays at the forefront of blockchain law,
              helping clients navigate regulations, structure token offerings, and
              protect their digital investments.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 p-6">
                <h4 className="font-semibold mb-2">Token Legal Framework</h4>
                <p className="text-primary-300 text-sm">
                  Structuring compliant token offerings and classifications
                </p>
              </div>
              <div className="bg-white/10 p-6">
                <h4 className="font-semibold mb-2">NFT Contracts</h4>
                <p className="text-primary-300 text-sm">
                  Smart contract review and NFT marketplace agreements
                </p>
              </div>
              <div className="bg-white/10 p-6">
                <h4 className="font-semibold mb-2">Regulatory Compliance</h4>
                <p className="text-primary-300 text-sm">
                  Navigating crypto regulations and licensing requirements
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
                title="Technology Legal Consultation"
                subtitle="Stay ahead in the digital landscape with expert legal guidance."
              />
              <p className="text-body">
                Whether you are a startup, an established tech company, or
                transitioning to digital operations, our technology law team
                provides the expertise you need to protect your innovations and
                ensure compliance.
              </p>
            </div>
            <ContactForm compact />
          </div>
        </div>
      </section>
    </>
  )
}
