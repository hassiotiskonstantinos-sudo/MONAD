import Link from 'next/link'
import { ChevronRight, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  featured?: boolean
}

const ServiceCard = ({ title, description, icon: Icon, href, featured = false }: ServiceCardProps) => {
  return (
    <Link href={href}>
      <div
        className={`group p-8 h-full card-hover ${
          featured
            ? 'bg-primary-900 text-white'
            : 'bg-white border border-primary-100'
        }`}
      >
        <div
          className={`w-14 h-14 flex items-center justify-center mb-6 ${
            featured ? 'bg-white/10' : 'bg-primary-50'
          }`}
        >
          <Icon
            className={`w-7 h-7 ${featured ? 'text-white' : 'text-primary-900'}`}
          />
        </div>
        <h3
          className={`text-xl font-serif font-semibold mb-4 ${
            featured ? 'text-white' : 'text-primary-900'
          }`}
        >
          {title}
        </h3>
        <p
          className={`mb-6 leading-relaxed ${
            featured ? 'text-primary-200' : 'text-primary-600'
          }`}
        >
          {description}
        </p>
        <div
          className={`flex items-center font-medium ${
            featured
              ? 'text-white group-hover:text-primary-100'
              : 'text-primary-900 group-hover:text-primary-600'
          }`}
        >
          Learn more
          <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard
