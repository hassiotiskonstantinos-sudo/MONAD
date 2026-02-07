import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag, ChevronRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Insights & Knowledge',
  description: 'Legal insights and articles from MONAD Law Firm. Stay informed about corporate law, real estate, technology, and private client matters in Greece and internationally.',
  openGraph: {
    title: 'Legal Insights | MONAD Law Firm',
    description: 'Legal insights and articles on corporate, real estate, technology, and private client law.',
  },
}

const articles = [
  {
    title: 'Cross-Border Structuring: Key Considerations for 2024',
    excerpt:
      'An overview of legal and practical considerations when establishing cross-border corporate structures, including holding company selection, substance requirements and treaty access.',
    date: '2024-01-15',
    author: 'MONAD Team',
    category: 'Corporate',
    slug: 'cross-border-structuring-2024',
  },
  {
    title: 'Greek Golden Visa: Updated Requirements and Process',
    excerpt:
      'A practical guide to the Greek Golden Visa program, including investment thresholds, application requirements, processing times and integration with broader residence planning.',
    date: '2024-01-10',
    author: 'MONAD Team',
    category: 'Immigration',
    slug: 'golden-visa-greece-2024-guide',
  },
  {
    title: 'GDPR Compliance: Practical Steps for Growing Companies',
    excerpt:
      'What companies need to know about GDPR compliance as they scale, including data mapping, processor agreements, international transfers and documentation requirements.',
    date: '2024-01-05',
    author: 'MONAD Team',
    category: 'Technology',
    slug: 'gdpr-compliance-growing-companies',
  },
  {
    title: 'Real Estate Due Diligence in Greece: A Practical Guide',
    excerpt:
      'Key steps in Greek real estate due diligence, from title examination and planning verification to tax and encumbrance checks. Practical guidance for buyers and investors.',
    date: '2023-12-28',
    author: 'MONAD Team',
    category: 'Real Estate',
    slug: 'real-estate-due-diligence-greece',
  },
  {
    title: 'Investment Documentation: Term Sheets to Completion',
    excerpt:
      'An overview of the documentation involved in investment transactions, from initial term sheets through to completion mechanics, with practical notes on negotiation and common issues.',
    date: '2023-12-20',
    author: 'MONAD Team',
    category: 'Corporate',
    slug: 'investment-documentation-guide',
  },
  {
    title: 'Employment Law in Greece: What Employers Need to Know',
    excerpt:
      'Key aspects of Greek employment law for employers, including hiring, contracts, termination, collective arrangements and recent legislative changes.',
    date: '2023-12-15',
    author: 'MONAD Team',
    category: 'Employment',
    slug: 'employment-law-greece-employers',
  },
]

const categories = [
  'All',
  'Corporate',
  'Real Estate',
  'Technology',
  'Immigration',
  'Employment',
  'Disputes',
]

export default function KnowledgePage() {
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
            <h1 className="heading-1 text-white mb-6">Knowledge</h1>
            <p className="text-xl text-primary-200 leading-relaxed">
              Practical insights on legal topics relevant to our clients. Articles,
              guides and updates from the MONAD team.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white border-b border-primary-100">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-body text-lg leading-relaxed">
              MONAD publishes practical guidance on legal topics that matter to our clients.
              Articles focus on actionable information rather than academic analysis. Content
              is updated regularly to reflect changes in law and practice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Articles */}
            <div className="lg:col-span-3">
              <div className="grid gap-8">
                {articles.map((article) => (
                  <article
                    key={article.slug}
                    className="group border border-primary-100 p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-wrap items-center gap-4 text-sm text-primary-500 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-serif font-semibold mb-4 group-hover:text-primary-700 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-primary-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    <span className="inline-flex items-center text-primary-900 font-medium group-hover:text-primary-600 transition-colors">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Topics</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button className="flex items-center text-primary-600 hover:text-primary-900 transition-colors">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Updates */}
              <div className="bg-primary-50 p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Stay Informed</h3>
                <p className="text-primary-600 text-sm mb-4">
                  Subscribe to receive updates when new articles are published.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input-field text-sm"
                  />
                  <button type="submit" className="btn-primary w-full text-sm">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Contact */}
              <div className="border border-primary-100 p-6">
                <h3 className="text-lg font-semibold mb-4">Need Specific Advice?</h3>
                <p className="text-primary-600 text-sm mb-4">
                  Articles provide general guidance. For advice on your specific
                  situation, contact the team directly.
                </p>
                <Link href="/contact" className="btn-secondary w-full text-sm text-center block">
                  Contact Us
                </Link>
              </div>

              {/* FINLEX */}
              <div className="mt-8 bg-primary-900 text-white p-6">
                <h3 className="text-lg font-semibold mb-4">FINLEX</h3>
                <p className="text-primary-200 text-sm mb-4">
                  Cross-border structuring and investor transactions.
                </p>
                <Link href="/finlex" className="inline-flex items-center text-white text-sm font-medium hover:text-primary-200 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-primary-50">
        <div className="container-custom">
          <p className="text-sm text-primary-500 text-center">
            Articles are for general information only and do not constitute legal advice.
            Content may not reflect the current state of the law. For advice on specific
            matters, please contact us directly.
          </p>
        </div>
      </section>
    </>
  )
}
