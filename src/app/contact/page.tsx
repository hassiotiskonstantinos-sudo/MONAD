import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">Contact Us</h1>
            <p className="text-xl text-primary-200">
              If you have any questions or would like to schedule a consultation,
              please don't hesitate to contact us today.
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
              <h2 className="heading-3 mb-8">Get in Touch</h2>
              <p className="text-body mb-8">
                Our team is ready to assist you with your legal needs. Reach out to
                us through any of the following channels, and we will respond
                promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">
                      Our Office
                    </h4>
                    <p className="text-primary-600">
                      Athens, Greece
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">Phone</h4>
                    <a
                      href="tel:+302101234567"
                      className="text-primary-600 hover:text-primary-900 transition-colors"
                    >
                      +30 210 123 4567
                    </a>
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
                    <h4 className="font-semibold text-primary-900 mb-1">
                      Working Hours
                    </h4>
                    <p className="text-primary-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-primary-100 flex items-center justify-center">
                <span className="text-primary-400">Map Location</span>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm title="Send Us a Message" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <h3 className="text-xl font-serif font-semibold mb-4">
                Schedule a Consultation
              </h3>
              <p className="text-primary-600">
                Book a meeting with one of our attorneys to discuss your legal
                needs in detail.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-serif font-semibold mb-4">
                Emergency Matters
              </h3>
              <p className="text-primary-600">
                For urgent legal matters outside business hours, please call our
                emergency line.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-serif font-semibold mb-4">
                International Clients
              </h3>
              <p className="text-primary-600">
                We serve clients worldwide with multilingual support in English and
                Greek.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
