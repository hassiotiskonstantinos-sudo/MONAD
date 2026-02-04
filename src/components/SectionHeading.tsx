interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`heading-2 mb-4 ${light ? 'text-white' : 'text-primary-900'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-primary-200' : 'text-primary-600'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-20 h-1 mt-6 ${centered ? 'mx-auto' : ''} ${
          light ? 'bg-white' : 'bg-primary-900'
        }`}
      />
    </div>
  )
}

export default SectionHeading
