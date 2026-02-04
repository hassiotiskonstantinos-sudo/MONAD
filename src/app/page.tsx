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
} from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import ContactForm from '@/components/ContactForm'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'

const featuredServices = [
  {
    title: 'For Companies',
    description:
      'Comprehensive legal solutions for businesses, from formation to M&A, regulatory compliance, and international disputes.',
    icon: Building2,
    href: '/services/companies',
  },
  {
    title: 'For Individuals',
    description:
      'Personalized legal services addressing family matters, estate planning, immigration, and private wealth management.',
    icon: Users,
    href: '/services/individuals',
  },
  {
    title: 'Real Estate',
    description:
      'Expert guidance through residential, commercial, and development property transactions and investments.',
    icon: HomeIcon,
    href: '/services/real-estate',
  },
  {
    title: 'Technology & Innovation',
    description:
      'Cutting-edge counsel on IP, GDPR, cybersecurity, and emerging technologies including NFTs and crypto.',
    icon: Cpu,
    href: '/services/technology',
  },
]

const quickServices = [
  { name: 'Corporate Formation', icon: Briefcase, href: '/services/companies#corporate-formation' },
  { name: 'Business Immigration', icon: Globe, href: '/services/companies#business-immigration' },
  { name: 'Private Equity & M&A', icon: Landmark, href: '/services/companies#private-equity' },
  { name: 'Fraud & Asset Recovery', icon: Shield, href: '/services/companies#fraud' },
  { name: 'Employment Law', icon: FileCheck, href: '/services/companies#employment' },
  { name: 'GDPR & Data Privacy', icon: Scale, href: '/services/technology#gdpr' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Expertise"
                subtitle="Unmatched Knowledge, Proven Results"
              />
              <p className="text-body mb-6">
                With deep experience across corporate, personal, and technology law,
                we deliver precise solutions that drive success and safeguard what
                matters most.
              </p>
              <p className="text-body mb-8">
                Trust our team to handle complex legal challenges with skill,
                insight, and unwavering dedication. We are committed to providing
                excellent legal services to our clients.
              </p>
              <Link href="/about" className="btn-primary inline-flex">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="bg-primary-100 h-96 w-full flex items-center justify-center">
                <span className="text-8xl font-serif text-primary-300">M</span>
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -left-8 bg-primary-900 text-white p-8">
                <div className="text-4xl font-serif font-bold mb-2">20+</div>
                <div className="text-primary-200">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive legal solutions tailored to your needs"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Most Demanded Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Most Demanded Services"
            subtitle="Quick access to our most sought-after legal solutions"
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group p-6 text-center border border-primary-100 hover:border-primary-900 hover:bg-primary-900 transition-all duration-300"
              >
                <service.icon className="w-8 h-8 mx-auto mb-3 text-primary-900 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-primary-900 group-hover:text-white transition-colors">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINLEX & MEDLEX Highlights */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FINLEX */}
            <div className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-2xl font-serif font-bold mb-4">FINLEX</h3>
              <p className="text-primary-200 mb-6 leading-relaxed">
                At MONAD we understand the impact of financial losses. Our FINLEX
                Financial Recovery team is dedicated to helping clients regain
                control by pursuing compensation for investments that were mis-sold.
              </p>
              <p className="text-primary-200 mb-6 leading-relaxed">
                From complex financial products to alternative investments like art
                or cryptocurrency, we are experienced in navigating a wide range of
                cases to ensure our clients receive the justice they deserve.
              </p>
              <Link
                href="/finlex"
                className="inline-flex items-center text-white font-medium hover:text-primary-200 transition-colors"
              >
                Claim Your Money Back →
              </Link>
            </div>

            {/* MEDLEX */}
            <div className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-2xl font-serif font-bold mb-4">MEDLEX</h3>
              <p className="text-primary-200 mb-6 leading-relaxed">
                At MONAD, we are dedicated to advocating for individuals who have
                suffered due to medical negligence. Our experienced team
                meticulously investigates each case, working with medical experts to
                hold responsible parties accountable.
              </p>
              <p className="text-primary-200 mb-6 leading-relaxed">
                Let us be your voice in seeking justice and securing the
                compensation you deserve, restoring your peace of mind.
              </p>
              <Link
                href="/el/medlex"
                className="inline-flex items-center text-white font-medium hover:text-primary-200 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Contact Us"
                subtitle="If you have any questions or would like to schedule a consultation, please don't hesitate to contact us today."
              />
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">
                      Visit Our Office
                    </h4>
                    <p className="text-primary-600">Athens, Greece</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">
                      Global Reach
                    </h4>
                    <p className="text-primary-600">
                      Serving clients worldwide with multilingual support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="heading-3 mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-primary-600 mb-6">
              Stay updated with the latest legal insights and news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
