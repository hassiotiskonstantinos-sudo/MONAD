import Image from 'next/image'
import { MapPin, Mail, Clock, ChevronRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/shutterstock_2644707669.jpg"
            alt="Contact MONAD"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">Contact</h1>
            <p className="text-xl text-primary-200 leading-relaxed">
              Use the form to describe your matter. A member of the team will respond
              within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="heading-3 mb-6">Get in Touch</h2>
              <p className="text-body mb-8 leading-relaxed">
                MONAD reviews all messages to understand the request and determine
                whether the firm is able to assist. For time-sensitive matters,
                please indicate urgency in your message.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">Location</h4>
                    <p className="text-primary-600">
                      Athens, Greece
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">Email</h4>
                    <a
                      href="mailto:info@monad.law"
                      className="text-primary-600 hover:text-primary-900 transition-colors"
                    >
                      info@monad.law
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">Response Time</h4>
                    <p className="text-primary-600">
                      Within one business day
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-primary-50 p-6">
                <h4 className="font-semibold text-primary-900 mb-2">Before You Contact Us</h4>
                <p className="text-primary-600 text-sm mb-4">
                  Sending a message does not create a lawyer-client relationship. Formal
                  engagement begins only after a conflict check and written confirmation
                  of scope.
                </p>
                <p className="text-primary-600 text-sm">
                  Information shared before engagement is not protected by privilege.
                  Please do not include highly sensitive details in initial messages.
                </p>
              </div>

              {/* Quick Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-primary-900 mb-4">Looking For:</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/companies" className="flex items-center text-primary-600 hover:text-primary-900 transition-colors">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      Services for Companies
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/individuals" className="flex items-center text-primary-600 hover:text-primary-900 transition-colors">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      Services for Individuals
                    </Link>
                  </li>
                  <li>
                    <Link href="/finlex" className="flex items-center text-primary-600 hover:text-primary-900 transition-colors">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      FINLEX - Cross-Border Structuring
                    </Link>
                  </li>
                  <li>
                    <Link href="/el/medlex" className="flex items-center text-primary-600 hover:text-primary-900 transition-colors">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      MEDLEX - Greek Legal Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm title="Send a Message" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-primary-100">
              <h3 className="text-xl font-serif font-semibold mb-4">Corporate Clients</h3>
              <p className="text-primary-600 mb-4">
                Transactions, governance, compliance and disputes for companies,
                founders and investors.
              </p>
              <Link href="/services/companies" className="inline-flex items-center text-primary-900 font-medium hover:text-primary-600 transition-colors">
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-8 border border-primary-100">
              <h3 className="text-xl font-serif font-semibold mb-4">Private Clients</h3>
              <p className="text-primary-600 mb-4">
                Wealth planning, immigration, estate matters and disputes for
                individuals and families.
              </p>
              <Link href="/services/individuals" className="inline-flex items-center text-primary-900 font-medium hover:text-primary-600 transition-colors">
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-8 border border-primary-100">
              <h3 className="text-xl font-serif font-semibold mb-4">International Clients</h3>
              <p className="text-primary-600 mb-4">
                Cross-border matters coordinated seamlessly. English and Greek
                language services available.
              </p>
              <Link href="/finlex" className="inline-flex items-center text-primary-900 font-medium hover:text-primary-600 transition-colors">
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Clear Thinking. Decisive Execution.</h2>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            MONAD is a modern law firm built for clients who need practical solutions
            to complex legal problems. Get in touch to discuss how we can help.
          </p>
        </div>
      </section>
    </>
  )
}
