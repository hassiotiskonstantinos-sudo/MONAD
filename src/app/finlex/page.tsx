import Link from 'next/link'
import {
  TrendingDown,
  Shield,
  FileCheck,
  BadgeCheck,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const investmentTypes = [
  'Unit Trusts',
  'ISAs',
  'CFDs (Contracts for Difference)',
  'Hedge Funds',
  'Structured Products',
  'Pension Investments',
  'Bonds and Securities',
  'Foreign Exchange Trading',
  'Cryptocurrency',
  'Fine Wine',
  'Art Investments',
  'Alternative Assets',
]

const recoveryProcess = [
  {
    step: '01',
    title: 'Initial Consultation',
    description:
      'We review your case confidentially, assessing the circumstances of your investment and potential for recovery.',
  },
  {
    step: '02',
    title: 'Case Investigation',
    description:
      'Our team gathers evidence, reviews documentation, and identifies parties responsible for mis-selling.',
  },
  {
    step: '03',
    title: 'Legal Strategy',
    description:
      'We develop a tailored strategy to maximize your chances of recovering your losses.',
  },
  {
    step: '04',
    title: 'Claim Pursuit',
    description:
      'We pursue your claim through negotiation, regulatory complaints, or litigation as appropriate.',
  },
  {
    step: '05',
    title: 'Recovery',
    description:
      'Upon successful resolution, we ensure you receive the compensation you are entitled to.',
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
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 px-4 py-2 mb-6">
              <span className="text-white font-semibold tracking-wider">
                FINLEX | FINANCIAL RECOVERY
              </span>
            </div>
            <h1 className="heading-1 text-white mb-6">Claim Your Money Back</h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              At MONAD we understand the impact of financial losses. Our FINLEX
              Financial Recovery team is dedicated to helping clients regain
              control by pursuing compensation for investments that were mis-sold.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact-form" className="btn-primary flex items-center">
                Start Your Claim
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

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">
                Have You Suffered Investment Losses?
              </h2>
              <p className="text-body mb-6">
                From complex financial products to alternative investments like art
                or cryptocurrency, we are experienced in navigating a wide range of
                cases to ensure our clients receive the justice they deserve.
              </p>
              <p className="text-body mb-6">
                If you've invested in products like Unit Trusts, ISAs, CFDs, hedge
                funds, or even alternative assets such as fine wine or
                cryptocurrencies, you could be entitled to recover your losses.
              </p>
              <p className="text-body font-semibold">
                At FINLEX, we're committed to turning your experience into a
                pathway toward financial restoration. Let us advocate for your
                recovery.
              </p>
            </div>
            <div className="bg-primary-50 p-8">
              <TrendingDown className="w-16 h-16 text-primary-900 mb-6" />
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Mis-Sold Investments
              </h3>
              <p className="text-primary-600 mb-6">
                Financial products are often sold without proper consideration of
                the client's needs, risk tolerance, or financial circumstances.
                This constitutes mis-selling and may entitle you to compensation.
              </p>
              <ul className="space-y-2 text-primary-700">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Unsuitable risk profiles
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Inadequate disclosure of risks
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Hidden fees and charges
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Misleading performance promises
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Investment Types We Handle</h2>
            <p className="text-body max-w-2xl mx-auto">
              Our team has experience recovering losses from a wide range of
              investment products and asset classes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {investmentTypes.map((type) => (
              <div
                key={type}
                className="bg-white p-4 text-center border border-primary-100 hover:border-primary-900 transition-colors"
              >
                <span className="text-primary-900 font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Recovery Process</h2>
            <p className="text-body max-w-2xl mx-auto">
              We follow a structured approach to maximize your chances of
              successful recovery.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {recoveryProcess.map((item, index) => (
              <div
                key={item.step}
                className={`flex gap-8 ${
                  index < recoveryProcess.length - 1 ? 'mb-12' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-900 text-white flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  {index < recoveryProcess.length - 1 && (
                    <div className="w-0.5 h-12 bg-primary-200 mx-auto mt-4" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose FINLEX?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Legal Team</h3>
              <p className="text-primary-200">
                Our specialists have extensive experience in financial services law
                and investment recovery.
              </p>
            </div>
            <div className="text-center p-8">
              <FileCheck className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">No Win, No Fee</h3>
              <p className="text-primary-200">
                We offer flexible fee arrangements, including contingency-based
                options for qualifying cases.
              </p>
            </div>
            <div className="text-center p-8">
              <BadgeCheck className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
              <p className="text-primary-200">
                We have successfully recovered significant sums for clients who
                suffered investment losses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-6">Start Your Recovery Today</h2>
              <p className="text-body mb-6">
                If you believe you have been mis-sold a financial product or have
                suffered investment losses due to negligent advice, contact our
                FINLEX team for a confidential consultation.
              </p>
              <div className="bg-white p-6 mb-6">
                <h4 className="font-semibold mb-3">Free Case Assessment</h4>
                <p className="text-primary-600 text-sm mb-4">
                  We will review your situation at no cost and advise you on your
                  options for recovery.
                </p>
                <ul className="space-y-2 text-sm text-primary-700">
                  <li className="flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-2 text-green-600" />
                    Confidential review of your case
                  </li>
                  <li className="flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-2 text-green-600" />
                    Clear explanation of your options
                  </li>
                  <li className="flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-2 text-green-600" />
                    No obligation to proceed
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary-900 mr-3" />
                <div>
                  <p className="text-sm text-primary-500">Call us directly:</p>
                  <a
                    href="tel:+302101234567"
                    className="text-xl font-semibold text-primary-900"
                  >
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
