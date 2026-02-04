import TeamCard from '@/components/TeamCard'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'

const team = [
  {
    name: 'Alexandra Papadopoulos',
    role: 'Managing Partner',
    bio: 'Specializing in corporate law and M&A with over 20 years of experience advising multinational corporations.',
    email: 'a.papadopoulos@monad.law',
    linkedin: '#',
  },
  {
    name: 'Dimitrios Konstantinou',
    role: 'Senior Partner',
    bio: 'Expert in real estate law and property transactions, with extensive experience in commercial developments.',
    email: 'd.konstantinou@monad.law',
    linkedin: '#',
  },
  {
    name: 'Elena Mavros',
    role: 'Partner - Technology',
    bio: 'Leading our Technology & IP practice, specializing in GDPR, cybersecurity, and technology transactions.',
    email: 'e.mavros@monad.law',
    linkedin: '#',
  },
  {
    name: 'Nikolaos Georgiou',
    role: 'Partner - Litigation',
    bio: 'Experienced litigator handling complex commercial disputes and international arbitration cases.',
    email: 'n.georgiou@monad.law',
    linkedin: '#',
  },
  {
    name: 'Maria Stefanou',
    role: 'Senior Associate',
    bio: 'Focusing on employment law and regulatory compliance for both domestic and international clients.',
    email: 'm.stefanou@monad.law',
    linkedin: '#',
  },
  {
    name: 'Christos Alexiou',
    role: 'Senior Associate',
    bio: 'Specialist in immigration law and Golden Visa programs, helping clients navigate complex procedures.',
    email: 'c.alexiou@monad.law',
    linkedin: '#',
  },
  {
    name: 'Sophia Nikolaou',
    role: 'Associate',
    bio: 'Dedicated to private client matters including estate planning, inheritance, and family wealth.',
    email: 's.nikolaou@monad.law',
    linkedin: '#',
  },
  {
    name: 'Andreas Dimitriou',
    role: 'Associate',
    bio: 'Focusing on financial services law and investment fund regulations, with particular expertise in FINLEX matters.',
    email: 'a.dimitriou@monad.law',
    linkedin: '#',
  },
]

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">Who We Are</h1>
            <p className="text-xl text-primary-200">
              Meet the dedicated professionals who make MONAD a leading law firm.
              Our team combines expertise, experience, and a commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeading
              title="Our Team"
              subtitle="A diverse group of legal professionals united by a common purpose: delivering exceptional results for our clients."
              centered
            />
            <p className="text-body">
              Each member of our team brings unique expertise and perspective,
              allowing us to provide comprehensive legal solutions across multiple
              practice areas. We work collaboratively, leveraging our collective
              knowledge to address even the most complex legal challenges.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Join Our Team</h2>
            <p className="text-body mb-8">
              We are always looking for talented legal professionals who share our
              values and commitment to excellence. If you are interested in joining
              MONAD, we would love to hear from you.
            </p>
            <Link href="/contact" className="btn-primary">
              View Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Get Started?</h2>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and discover how our team
            can help you achieve your legal objectives.
          </p>
          <Link href="/contact" className="btn-outline-light">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
