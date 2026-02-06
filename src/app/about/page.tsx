import Image from 'next/image'
import { Target, Eye, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'
import { getAssetPath } from '@/lib/constants'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getAssetPath('/images/regulatory.jpg')}
            alt="About MONAD"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">Who MONAD Is</h1>
            <p className="text-xl text-primary-200 leading-relaxed">
              MONAD is a law firm designed for clients who value clarity, precision and speed.
              The firm serves companies and individuals in matters that are both complex and
              consequential, where the quality of legal work directly affects outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-body text-lg leading-relaxed mb-6">
              MONAD's approach is grounded in rigorous legal analysis, but it is expressed in
              plain language and delivered with operational discipline.
            </p>
            <p className="text-body text-lg leading-relaxed mb-6">
              The firm's work sits at the intersection of law, business and real life. Corporate
              clients come with transactions, governance challenges, cross border structuring,
              regulatory exposure and disputes. Private clients come with relocation plans,
              family and wealth issues, property transactions, inheritance questions and litigation.
            </p>
            <p className="text-body text-lg leading-relaxed">
              In both contexts, the goal is the same: produce a defensible solution that can
              be implemented.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white p-10">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-primary-900 mr-4" />
                <h2 className="heading-3">Mission</h2>
              </div>
              <p className="text-body leading-relaxed">
                To protect and advance clients' interests through precise legal work,
                commercial judgment and disciplined execution, delivered with clarity
                and discretion.
              </p>
            </div>
            <div className="bg-white p-10">
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-primary-900 mr-4" />
                <h2 className="heading-3">Vision</h2>
              </div>
              <p className="text-body leading-relaxed">
                To be the trusted legal partner for clients operating across borders
                and across sectors, by providing advice that is legally robust,
                commercially aligned, and consistently usable in practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How MONAD Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="How MONAD Works"
            subtitle="A structured approach to every matter"
          />
          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            <div className="border-l-4 border-primary-900 pl-6">
              <div className="text-4xl font-serif font-bold text-primary-200 mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Define the Objective</h3>
              <p className="text-primary-600 leading-relaxed">
                Every matter begins with a clear definition of the objective. Many legal
                problems persist because the real objective is never stated, or it changes
                without being acknowledged. MONAD starts by making the objective explicit,
                including the acceptable trade offs on cost, timing, and risk.
              </p>
            </div>
            <div className="border-l-4 border-primary-900 pl-6">
              <div className="text-4xl font-serif font-bold text-primary-200 mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Isolate the Issues</h3>
              <p className="text-primary-600 leading-relaxed">
                MONAD identifies the few issues that drive the outcome. Legal work becomes
                inefficient when it treats every question as equally important. MONAD
                prioritizes the points that affect enforceability, liability and negotiation
                leverage, and keeps the work focused.
              </p>
            </div>
            <div className="border-l-4 border-primary-900 pl-6">
              <div className="text-4xl font-serif font-bold text-primary-200 mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Deliver for Execution</h3>
              <p className="text-primary-600 leading-relaxed">
                MONAD delivers in a way that can be executed. Advice is structured as an
                action plan with documents, timelines and decision points, so the client is
                not left holding a theoretical memo when the real need is implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Discretion */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Commitment to Discretion</h2>
            <p className="text-primary-200 text-lg leading-relaxed">
              Many client matters are sensitive by nature. MONAD treats confidentiality as
              operational discipline. Communications are handled with care. Work is delivered
              in a way that protects the client's position, narrative and relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 bg-primary-50">
              <h3 className="text-xl font-serif font-semibold mb-4">News</h3>
              <p className="text-primary-600 leading-relaxed mb-4">
                The News section covers announcements, firm updates and selected developments
                relevant to MONAD's practice areas. It is curated for clients who want to
                stay informed without being overwhelmed.
              </p>
              <Link href="/knowledge" className="text-primary-900 font-medium hover:text-primary-600 transition-colors">
                View News →
              </Link>
            </div>
            <div className="p-8 bg-primary-50">
              <h3 className="text-xl font-serif font-semibold mb-4">Briefings</h3>
              <p className="text-primary-600 leading-relaxed mb-4">
                Briefings are short, practical pieces that explain what has changed, why it
                matters and what a client should do next. The focus is on decisions and
                immediate action, not commentary.
              </p>
              <Link href="/knowledge" className="text-primary-900 font-medium hover:text-primary-600 transition-colors">
                View Briefings →
              </Link>
            </div>
            <div className="p-8 bg-primary-50">
              <h3 className="text-xl font-serif font-semibold mb-4">Knowledge Base</h3>
              <p className="text-primary-600 leading-relaxed mb-4">
                The Knowledge base provides longer guides and explainers, written to support
                both first time readers and experienced decision makers. Content is designed
                to be useful, not promotional.
              </p>
              <Link href="/knowledge" className="text-primary-900 font-medium hover:text-primary-600 transition-colors">
                Explore Knowledge →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Work Together?</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            When a decision carries legal and financial consequences, early strategy matters.
            MONAD can provide an initial assessment and a clear plan of action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="/team" className="btn-secondary">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
