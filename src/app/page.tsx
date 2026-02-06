import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import HeroSection from '@/components/HeroSection'
import { getAssetPath } from '@/lib/constants'

const featuredNews = [
  {
    category: 'Corporate',
    color: 'bg-blue-500',
    title: 'Cross-Border M&A: Navigating Complexity',
    date: 'Jan 2024',
  },
  {
    category: 'Private Client',
    color: 'bg-emerald-500',
    title: 'Golden Visa Programs: What Has Changed',
    date: 'Dec 2023',
  },
  {
    category: 'Technology',
    color: 'bg-purple-500',
    title: 'AI Governance and the EU AI Act',
    date: 'Nov 2023',
  },
]

const practiceAreaCards = [
  {
    image: '/images/shutterstock_2249889569.jpg',
    title: 'Disputes',
    description: 'We have the breadth of capability – with the creativity and tenacity - to resolve any dispute, however complex or new, whatever the scale.',
    href: '/services/companies',
  },
  {
    image: '/images/startups.jpg',
    title: 'The Innovation Economy',
    description: 'We support the people and the organisations that drive the Innovation Economy; we help innovative clients deliver at the edge of what\'s possible.',
    href: '/services/technology',
  },
  {
    image: '/images/private-equity.jpg',
    title: 'Private Wealth and Capital',
    description: 'We understand how to serve private individuals and families in a modern world, to shape their lives and maximise their role in the new global economy.',
    href: '/services/individuals',
  },
  {
    image: '/images/regulatory.jpg',
    title: 'Real Estate',
    description: 'We bring market-leading skills that span the real estate lifecycle to the newest, most dynamic parts of the economy.',
    href: '/services/real-estate',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Statement - Black, Mishcon style */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-snug max-w-5xl">
            We advise on matters where the
            <span className="text-orange-500"> outcome defines</span> what comes next.
          </p>
        </div>
      </section>

      {/* Practice Area Cards - Mishcon Style 2x2 Grid with B&W Images */}
      <section className="bg-black">
        <div className="grid md:grid-cols-2">
          {practiceAreaCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group relative block overflow-hidden"
            >
              {/* B&W Image */}
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={getAssetPath(card.image)}
                  alt={card.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 group-hover:text-orange-500 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center text-white text-sm font-light group-hover:text-orange-500 transition-colors">
                    Read more
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Insights - Compact Grid with Colored Categories */}
      <section className="py-16 bg-neutral-900 border-t border-white/10">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-serif text-white">Featured Insights</h2>
            <Link href="/knowledge" className="text-white/50 hover:text-orange-500 text-base font-light transition-colors">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {featuredNews.map((item, index) => (
              <article key={index} className="bg-neutral-900 p-8 hover:bg-neutral-800 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
                  <span className="text-sm text-white/60 uppercase tracking-wider">{item.category}</span>
                </div>
                <h3 className="text-xl text-white font-serif mb-3 group-hover:text-orange-500 transition-colors">{item.title}</h3>
                <span className="text-white/40 text-sm">{item.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why MONAD */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="container-custom">
          <h2 className="text-2xl font-serif text-white mb-10">Why clients choose <span className="text-orange-500">MONAD</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-orange-500 pl-6">
              <h4 className="text-white text-lg font-serif mb-3">Direct advice</h4>
              <p className="text-white/50 text-base font-light leading-relaxed">We explain what matters—without hiding behind jargon.</p>
            </div>
            <div className="border-l-2 border-orange-500 pl-6">
              <h4 className="text-white text-lg font-serif mb-3">Partner led</h4>
              <p className="text-white/50 text-base font-light leading-relaxed">The person responsible stays engaged. No layers, no handoffs.</p>
            </div>
            <div className="border-l-2 border-orange-500 pl-6">
              <h4 className="text-white text-lg font-serif mb-3">Cross-border</h4>
              <p className="text-white/50 text-base font-light leading-relaxed">Structured to manage complexity across jurisdictions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINLEX Section - BLACK with logo on white */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Logo on white background and Text */}
            <div>
              <div className="inline-block bg-white p-6 mb-8">
                <Image
                  src={getAssetPath('/images/finlex-logo_lrg.png')}
                  alt="FINLEX"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-sm text-white/40 uppercase tracking-widest mb-4">A MONAD Platform</p>
              <h2 className="text-3xl font-serif text-white mb-6">Financial Claims Recovery</h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                Our team of experts helps clients recover losses from mis-sold financial products,
                investment fraud and financial misconduct. No win, no fee.
              </p>
              <a
                href="https://financial-claims.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 text-white px-8 py-4 text-base font-medium hover:bg-orange-600 transition-colors"
              >
                Visit FINLEX <ArrowRight className="ml-3 w-5 h-5" />
              </a>
            </div>

            {/* Right - Website Preview Mirror */}
            <div className="border border-white/20 bg-white overflow-hidden">
              <div className="bg-neutral-800 p-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-white/40 text-sm ml-3">financial-claims.com</span>
              </div>
              <iframe
                src="https://financial-claims.com"
                className="w-full h-[400px] pointer-events-none"
                title="FINLEX Website Preview"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-neutral-900 border-t border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-white mb-6">
                Based in Athens. <span className="text-orange-500">Working globally.</span>
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-6">
                Serving clients across Europe, the Middle East and beyond.
              </p>
              <Link href="/contact" className="inline-flex items-center text-white hover:text-orange-500 text-base font-light transition-colors group">
                Get in touch <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[300px]">
              <Image src={getAssetPath('/images/AdobeStock_62203512.jpeg')} alt="Athens" fill className="object-cover grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Mishcon Style */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-serif text-white mb-6">Get in touch</h2>
              <p className="text-white/60 text-lg font-light mb-10">
                Use the contact form to send us a message. We will respond within one business day.
              </p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-white/40 uppercase text-xs tracking-widest mb-2">Email</h4>
                  <a href="mailto:contact@monad.law" className="text-white text-lg hover:text-orange-500 transition-colors">contact@monad.law</a>
                </div>
                <div>
                  <h4 className="text-white/40 uppercase text-xs tracking-widest mb-2">Location</h4>
                  <p className="text-white/70 text-lg">Athens, Greece</p>
                </div>
                <div>
                  <h4 className="text-white/40 uppercase text-xs tracking-widest mb-2">Working Hours</h4>
                  <p className="text-white/70 text-lg">Monday – Friday, 9:00 – 18:00</p>
                </div>
              </div>
              <p className="text-white/30 text-sm mt-12">
                Contacting us does not create a lawyer-client relationship.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-neutral-900 p-8 md:p-10 border border-white/10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
