import { Target, Eye, Award, Users, Globe, Scale } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'

const values = [
  {
    icon: Scale,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our dealings.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every case we handle.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Your success is our priority. We listen, understand, and deliver.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'International expertise with local knowledge and presence.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">About MONAD</h1>
            <p className="text-xl text-primary-200">
              Premium legal solutions for businesses and individuals, delivered
              with expertise, integrity, and unwavering dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-primary-900 mr-4" />
                <h2 className="heading-3">Our Mission</h2>
              </div>
              <p className="text-body mb-6">
                To provide exceptional legal services that empower our clients to
                achieve their goals. We combine deep legal expertise with a
                practical, business-minded approach to deliver solutions that make
                a real difference.
              </p>
              <p className="text-body">
                Every client deserves personalized attention and strategic counsel.
                We take the time to understand your unique situation and craft
                tailored legal strategies that protect your interests and advance
                your objectives.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-primary-900 mr-4" />
                <h2 className="heading-3">Our Vision</h2>
              </div>
              <p className="text-body mb-6">
                To be the leading law firm recognized for excellence, innovation,
                and client service. We aspire to set the standard for legal
                practice, continuously evolving to meet the changing needs of our
                clients and society.
              </p>
              <p className="text-body">
                We envision a firm where the brightest legal minds collaborate to
                solve the most complex challenges, where technology enhances our
                capabilities, and where our success is measured by the success of
                those we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary-900 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-primary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History / Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Our Story"
              subtitle="Building excellence in legal services"
              centered
            />
            <div className="prose prose-lg mx-auto text-primary-600">
              <p className="mb-6">
                Founded with a vision to provide exceptional legal services, MONAD
                has grown to become a trusted partner for businesses and
                individuals across Greece and beyond. Our name reflects our
                philosophy: unity in purpose, strength in expertise.
              </p>
              <p className="mb-6">
                Over the years, we have built a reputation for handling complex
                legal matters with precision and care. From corporate transactions
                to personal legal needs, our team brings deep knowledge and
                practical experience to every engagement.
              </p>
              <p>
                Today, MONAD stands as a modern law firm that combines traditional
                values of integrity and diligence with innovative approaches to
                legal practice. We continue to evolve, embracing new technologies
                and methodologies while never losing sight of what matters most:
                our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-serif font-bold mb-2">20+</div>
              <div className="text-primary-300">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold mb-2">500+</div>
              <div className="text-primary-300">Cases Won</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold mb-2">15+</div>
              <div className="text-primary-300">Practice Areas</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold mb-2">98%</div>
              <div className="text-primary-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Work Together?</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help you achieve your legal
            objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Us
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
