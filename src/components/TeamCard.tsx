import { Linkedin, Mail } from 'lucide-react'

interface TeamCardProps {
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
  email?: string
}

const TeamCard = ({ name, role, bio, image, linkedin, email }: TeamCardProps) => {
  return (
    <div className="group bg-white border border-primary-100 card-hover overflow-hidden">
      {/* Image Placeholder */}
      <div className="relative h-72 bg-gradient-to-br from-primary-200 to-primary-300 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-serif text-primary-400">
              {name.charAt(0)}
            </span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white flex items-center justify-center text-primary-900 hover:bg-primary-100 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="w-12 h-12 bg-white flex items-center justify-center text-primary-900 hover:bg-primary-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-primary-900 mb-1">
          {name}
        </h3>
        <p className="text-primary-500 text-sm uppercase tracking-wider mb-3">
          {role}
        </p>
        <p className="text-primary-600 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  )
}

export default TeamCard
