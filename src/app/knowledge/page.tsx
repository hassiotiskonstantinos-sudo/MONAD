import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

const articles = [
  {
    title: 'Understanding GDPR Compliance for Greek Businesses',
    excerpt:
      'A comprehensive guide to navigating GDPR requirements and ensuring your business remains compliant with EU data protection regulations.',
    date: '2024-01-15',
    author: 'Elena Mavros',
    category: 'Technology',
    slug: 'gdpr-compliance-greek-businesses',
  },
  {
    title: 'Golden Visa Greece: Complete 2024 Guide',
    excerpt:
      'Everything you need to know about the Greek Golden Visa program, including requirements, benefits, and application process.',
    date: '2024-01-10',
    author: 'Christos Alexiou',
    category: 'Immigration',
    slug: 'golden-visa-greece-2024-guide',
  },
  {
    title: 'Corporate Formation in Greece: A Step-by-Step Guide',
    excerpt:
      'Learn the essential steps for establishing a company in Greece, from choosing the right entity type to registration procedures.',
    date: '2024-01-05',
    author: 'Alexandra Papadopoulos',
    category: 'Corporate',
    slug: 'corporate-formation-greece-guide',
  },
  {
    title: 'Real Estate Investment in Greece: Legal Considerations',
    excerpt:
      'Key legal aspects to consider when investing in Greek real estate, including due diligence, contracts, and tax implications.',
    date: '2023-12-28',
    author: 'Dimitrios Konstantinou',
    category: 'Real Estate',
    slug: 'real-estate-investment-greece',
  },
  {
    title: 'Protecting Your Intellectual Property in the Digital Age',
    excerpt:
      'How to safeguard your IP assets in an increasingly digital world, from trademarks to software patents.',
    date: '2023-12-20',
    author: 'Elena Mavros',
    category: 'Technology',
    slug: 'intellectual-property-digital-age',
  },
  {
    title: 'Employment Law Updates: What Employers Need to Know',
    excerpt:
      'Recent changes in Greek employment legislation and their implications for businesses and HR practices.',
    date: '2023-12-15',
    author: 'Maria Stefanou',
    category: 'Employment',
    slug: 'employment-law-updates-2024',
  },
]

const categories = [
  'All',
  'Corporate',
  'Real Estate',
  'Technology',
  'Immigration',
  'Employment',
  'Litigation',
]

export default function KnowledgePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">Knowledge</h1>
            <p className="text-xl text-primary-200">
              Insights, analysis, and updates from our legal experts to keep you
              informed on the latest developments.
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
                    className="group border border-primary-100 p-8 card-hover"
                  >
                    <div className="flex items-center gap-4 text-sm text-primary-500 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-serif font-semibold mb-4 group-hover:text-primary-700 transition-colors">
                      <Link href={`/knowledge/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-primary-600 mb-4">{article.excerpt}</p>
                    <Link
                      href={`/knowledge/${article.slug}`}
                      className="inline-flex items-center text-primary-900 font-medium hover:text-primary-600 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center gap-2">
                <button className="px-4 py-2 bg-primary-900 text-white">1</button>
                <button className="px-4 py-2 border border-primary-200 hover:bg-primary-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-primary-200 hover:bg-primary-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-primary-200 hover:bg-primary-50 transition-colors">
                  Next
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button className="text-primary-600 hover:text-primary-900 transition-colors">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-primary-50 p-6">
                <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                <p className="text-primary-600 text-sm mb-4">
                  Subscribe to receive the latest legal insights directly in your
                  inbox.
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
              <div className="mt-8 border border-primary-100 p-6">
                <h3 className="text-lg font-semibold mb-4">Need Legal Advice?</h3>
                <p className="text-primary-600 text-sm mb-4">
                  Contact our team for a consultation on your specific legal needs.
                </p>
                <Link href="/contact" className="btn-secondary w-full text-sm text-center block">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
