import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the legal professionals at MONAD Law Firm. Our experienced team of lawyers in Athens provides expert counsel across corporate, private client, real estate, and technology law.',
  openGraph: {
    title: 'Our Team | MONAD Law Firm',
    description: 'Meet the experienced legal professionals at MONAD Law Firm in Athens.',
  },
}

export default function TeamPage() {
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
            <h1 className="heading-1 text-white mb-6">Who We Are</h1>
            <p className="text-xl text-primary-200 leading-relaxed">
              MONAD is a modern law firm built for clients who need clear thinking and
              decisive execution.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <SectionHeading
              title="A Different Kind of Law Firm"
              subtitle="Built for clarity, speed and results"
            />
            <p className="text-body text-lg leading-relaxed mb-6">
              MONAD was founded on a simple premise: legal advice should be clear, responsive
              and focused on outcomes. The firm works with companies, founders, investors and
              private clients who value substance over formality.
            </p>
            <p className="text-body leading-relaxed mb-6">
              The team combines commercial awareness with legal expertise. Matters are
              handled directly by senior lawyers who understand client objectives and
              take responsibility for delivery.
            </p>
            <p className="text-body leading-relaxed">
              MONAD operates across borders but maintains a focused practice. The firm
              handles corporate, commercial, real estate, technology and dispute resolution
              work for clients who need practical solutions to complex problems.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="How MONAD Works"
            subtitle="The principles that guide how we serve clients"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 border border-primary-100">
              <h3 className="text-xl font-serif font-semibold mb-4">Senior-Led</h3>
              <p className="text-primary-600 leading-relaxed">
                Matters are handled directly by experienced lawyers. Clients work with
                the people who make decisions and take responsibility for outcomes.
              </p>
            </div>
            <div className="bg-white p-8 border border-primary-100">
              <h3 className="text-xl font-serif font-semibold mb-4">Commercially Aware</h3>
              <p className="text-primary-600 leading-relaxed">
                Legal advice is grounded in commercial reality. The focus is on
                practical solutions that support business objectives, not theoretical
                risks that rarely materialize.
              </p>
            </div>
            <div className="bg-white p-8 border border-primary-100">
              <h3 className="text-xl font-serif font-semibold mb-4">Responsive</h3>
              <p className="text-primary-600 leading-relaxed">
                Clients receive timely responses. Urgent matters are treated urgently.
                Communication is clear and direct.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-8 border border-primary-100">
              <h3 className="text-xl font-serif font-semibold mb-4">Discrete</h3>
              <p className="text-primary-600 leading-relaxed">
                Confidentiality is fundamental. Client matters are handled with
                appropriate discretion and sensitivity.
              </p>
            </div>
            <div className="bg-white p-8 border border-primary-100">
              <h3 className="text-xl font-serif font-semibold mb-4">Efficient</h3>
              <p className="text-primary-600 leading-relaxed">
                Work is scoped clearly and delivered efficiently. Fees reflect value
                delivered, not time spent on unnecessary process.
              </p>
            </div>
            <div className="bg-white p-8 border border-primary-100">
              <h3 className="text-xl font-serif font-semibold mb-4">Cross-Border</h3>
              <p className="text-primary-600 leading-relaxed">
                International matters are handled seamlessly. The firm coordinates
                with trusted advisors in other jurisdictions when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Areas of Expertise"
                subtitle="Focused practice areas, deep experience"
              />
              <p className="text-body mb-6">
                MONAD maintains a focused practice across core areas where the team
                has genuine depth and experience. The firm does not try to do everything
                but aims to do what it does do well.
              </p>
              <ul className="space-y-3 text-primary-700">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-primary-900 mr-2" />
                  Corporate and M&A
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-primary-900 mr-2" />
                  Private Equity and Venture Capital
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-primary-900 mr-2" />
                  Real Estate and Construction
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-primary-900 mr-2" />
                  Technology and IP
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-primary-900 mr-2" />
                  Private Client and Wealth Planning
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-primary-900 mr-2" />
                  Dispute Resolution and Arbitration
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 p-10">
              <h3 className="text-xl font-serif font-semibold mb-6">Client Focus</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                MONAD works with clients who value substance over form. This includes
                established businesses, growth companies, family offices, founders,
                investors and internationally mobile individuals.
              </p>
              <p className="text-primary-600 leading-relaxed">
                The common thread is a preference for practical advice delivered
                efficiently by lawyers who understand the commercial context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINLEX and MEDLEX */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/10 p-8 border border-white/20">
              <h3 className="text-2xl font-serif font-semibold mb-4">FINLEX</h3>
              <p className="text-primary-200 mb-6 leading-relaxed">
                FINLEX is MONAD's focused hub for cross-border structuring, investor
                transactions and finance-adjacent legal matters. Built for founders,
                investors and family offices who need clarity across jurisdictions.
              </p>
              <Link href="/finlex" className="inline-flex items-center text-white font-medium hover:text-primary-200 transition-colors">
                Learn More About FINLEX
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white/10 p-8 border border-white/20">
              <h3 className="text-2xl font-serif font-semibold mb-4">MEDLEX</h3>
              <p className="text-primary-200 mb-6 leading-relaxed">
                MEDLEX is MONAD's Greek language hub for clients who need legal services
                in Greece. Corporate, real estate, employment and dispute resolution
                matters delivered in Greek with the same rigour as English services.
              </p>
              <Link href="/el/medlex" className="inline-flex items-center text-white font-medium hover:text-primary-200 transition-colors">
                Learn More About MEDLEX
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Work With MONAD</h2>
            <p className="text-body mb-4">
              MONAD is always interested in hearing from talented lawyers who share
              the firm's commitment to client service, quality and efficiency.
            </p>
            <p className="text-body mb-8">
              If you are interested in opportunities at MONAD, please reach out
              through the contact form with your background and areas of interest.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Ready to Discuss Your Matter?</h2>
            <p className="text-body mb-8">
              Use the contact form to describe your situation. A member of the team
              will respond within one business day to discuss how MONAD can help.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact MONAD
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
