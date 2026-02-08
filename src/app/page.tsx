import { ArrowRight, Linkedin } from 'lucide-react'
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
  {
    category: 'Disputes',
    color: 'bg-orange-500',
    title: 'International Arbitration Trends',
    date: 'Oct 2023',
  },
  {
    category: 'Real Estate',
    color: 'bg-cyan-500',
    title: 'Commercial Property Investment in Greece',
    date: 'Sep 2023',
  },
  {
    category: 'Corporate',
    color: 'bg-blue-500',
    title: 'Due Diligence in Cross-Border Transactions',
    date: 'Aug 2023',
  },
  {
    category: 'Private Client',
    color: 'bg-emerald-500',
    title: 'Estate Planning for International Families',
    date: 'Jul 2023',
  },
  {
    category: 'Technology',
    color: 'bg-purple-500',
    title: 'Data Protection Compliance Updates',
    date: 'Jun 2023',
  },
]

const practiceAreaCards = [
  {
    image: '/images/AdobeStock_62203512.jpeg',
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
    image: '/images/shutterstock_2249889569.jpg',
    title: 'Private Wealth and Capital',
    description: 'We understand how to serve private individuals and families in a modern world, to shape their lives and maximise their role in the new global economy.',
    href: '/services/individuals',
  },
  {
    image: '/images/shutterstock_2724348917.jpg',
    title: 'Real Estate',
    description: 'We bring market-leading skills that span the real estate lifecycle to the newest, most dynamic parts of the economy.',
    href: '/services/real-estate',
  },
]

const teamMembers = [
  {
    name: 'Konstantinos Chassiotis',
    role: 'Managing Partner',
    linkedin: 'https://www.linkedin.com/in/chassiotiskonstantinos',
    image: '/images/1573389706301.jpeg',
    initials: 'KC',
  },
  {
    name: 'Dr. Christos Zoumpoulis',
    role: 'Partner',
    linkedin: 'https://www.linkedin.com/in/christos-zoumpoulis-dr-iur-63544813/',
    image: '/images/1516501964751.jpeg',
    initials: 'CZ',
  },
  {
    name: 'Barbara Papakonstantinou',
    role: 'Associate',
    linkedin: 'https://www.linkedin.com/in/barbara-papakonstantinou-070109254/',
    image: '/images/1666012706689.jpeg',
    initials: 'BP',
    zoom: true,
  },
  {
    name: 'Maria Sireti',
    role: 'Associate',
    linkedin: 'https://www.linkedin.com/in/maria-sireti-7256b7218/',
    image: '/images/1758318032743.jpeg',
    initials: 'MS',
  },
  {
    name: 'Vasileios Kottas',
    role: 'Associate',
    linkedin: 'https://www.linkedin.com/in/vasileioskottas/',
    image: '/images/1741424447628.jpeg',
    initials: 'VK',
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

      {/* Featured Insights - 2 rows of 4 */}
      <section className="py-16 bg-neutral-900 border-t border-white/10">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-serif text-white">Featured Insights</h2>
            <Link href="/knowledge" className="text-white/50 hover:text-orange-500 text-base font-light transition-colors">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {featuredNews.map((item, index) => (
              <article key={index} className="bg-neutral-900 p-6 hover:bg-neutral-800 transition-colors cursor-pointer group">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                  <span className="text-xs text-white/60 uppercase tracking-wider">{item.category}</span>
                </div>
                <h3 className="text-base lg:text-lg text-white font-serif mb-2 group-hover:text-orange-500 transition-colors leading-tight">{item.title}</h3>
                <span className="text-white/40 text-xs">{item.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our People - Parallax Section like Mishcon */}
      <section className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('${getAssetPath('/images/shutterstock_2724348917.jpg')}')` }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Meet our people</h2>
              <p className="text-white/60 text-lg font-light max-w-xl">
                Our team combines deep expertise with a personal approach to deliver exceptional results.
              </p>
            </div>
            <Link href="/team" className="hidden md:inline-flex items-center text-white hover:text-orange-500 text-base font-light transition-colors group">
              View all <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[3/4] bg-neutral-800 overflow-hidden mb-4">
                  {/* Profile Image or Initials Fallback */}
                  {member.image ? (
                    <Image
                      src={getAssetPath(member.image)}
                      alt={member.name}
                      fill
                      className={`object-cover grayscale ${member.zoom ? 'scale-[1.3]' : ''}`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-900">
                      <span className="text-4xl md:text-5xl font-serif text-white/30">{member.initials}</span>
                    </div>
                  )}
                  {/* LinkedIn icon overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  {/* Orange line at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
                <h3 className="text-white font-serif text-base group-hover:text-orange-500 transition-colors">{member.name}</h3>
                <p className="text-white/50 text-sm font-light">{member.role}</p>
                <div className="flex items-center gap-2 mt-2 text-white/40 group-hover:text-orange-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs">LinkedIn</span>
                </div>
              </a>
            ))}
          </div>

          <Link href="/team" className="md:hidden inline-flex items-center text-white hover:text-orange-500 text-base font-light transition-colors group mt-8">
            View all team members <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
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

      {/* FINLEX Section - 50% White / 50% Black Split (Desktop) | White only (Mobile) */}
      <section className="border-t border-white/10">
        <div className="grid lg:grid-cols-2">
          {/* Left - White background with logo (Full width on mobile, 50% on desktop) */}
          <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="mb-8 lg:mb-12">
              <Image
                src={getAssetPath('/images/finlex-logo_lrg.png')}
                alt="FINLEX"
                width={180}
                height={54}
                className="w-[150px] lg:w-[180px] h-auto"
                unoptimized
              />
            </div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-neutral-800 leading-relaxed mb-6">
              &ldquo;We fight for investors who have been wronged. Our mission is to recover what is rightfully yours.&rdquo;
            </blockquote>
            <p className="text-neutral-500 text-base lg:text-lg font-light leading-relaxed mb-4 lg:mb-6">
              Exposed to investment fraud or mis-sold financial products? Our expert legal team
              works on a no-win, no-fee basis to recover your losses.
            </p>
            <p className="text-neutral-400 text-sm lg:text-base font-light leading-relaxed mb-6 lg:mb-8">
              Join thousands of investors who have successfully recovered their funds through our dedicated claims process.
            </p>
            <a
              href="https://financial-claims.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-orange-500 text-white px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-medium hover:bg-orange-600 transition-colors w-fit"
            >
              Visit FINLEX <ArrowRight className="ml-2 lg:ml-3 w-4 lg:w-5 h-4 lg:h-5" />
            </a>
          </div>

          {/* Right - Black background with full preview (DESKTOP ONLY) */}
          <div className="hidden lg:block bg-black">
            <div className="h-full w-full bg-white overflow-hidden">
              <div className="relative h-full min-h-[500px] overflow-hidden">
                <iframe
                  src="https://financial-claims.com"
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  title="FINLEX Website Preview"
                  scrolling="no"
                />
              </div>
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
            <div className="relative h-[400px] lg:h-[450px]">
              <Image src={getAssetPath('/images/private-equity.jpg')} alt="Athens" fill className="object-cover grayscale" />
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
