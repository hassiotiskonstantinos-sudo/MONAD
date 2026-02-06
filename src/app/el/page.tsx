import {
  Building2,
  Users,
  Home as HomeIcon,
  Cpu,
  Scale,
  Globe,
  Shield,
  Briefcase,
  FileCheck,
  Landmark,
} from 'lucide-react'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SectionHeading from '@/components/SectionHeading'

const featuredServices = [
  {
    title: 'Για Εταιρείες',
    description:
      'Ολοκληρωμένες νομικές λύσεις για επιχειρήσεις, από τη σύσταση έως τις εξαγορές, τη συμμόρφωση και τις διεθνείς διαφορές.',
    icon: Building2,
    href: '/el/services/companies',
  },
  {
    title: 'Για Ιδιώτες',
    description:
      'Εξατομικευμένες νομικές υπηρεσίες για οικογενειακές υποθέσεις, κληρονομικά, μετανάστευση και διαχείριση περιουσίας.',
    icon: Users,
    href: '/el/services/individuals',
  },
  {
    title: 'Ακίνητα',
    description:
      'Εξειδικευμένη καθοδήγηση σε συναλλαγές κατοικιών, εμπορικών ακινήτων και αναπτυξιακών έργων.',
    icon: HomeIcon,
    href: '/el/services/real-estate',
  },
  {
    title: 'Τεχνολογία & Καινοτομία',
    description:
      'Νομική συμβουλευτική για πνευματική ιδιοκτησία, GDPR, κυβερνοασφάλεια και αναδυόμενες τεχνολογίες.',
    icon: Cpu,
    href: '/el/services/technology',
  },
]

const quickServices = [
  { name: 'Σύσταση Εταιρείας', icon: Briefcase, href: '/el/services/companies' },
  { name: 'Επιχειρηματική Μετανάστευση', icon: Globe, href: '/el/services/companies' },
  { name: 'Ιδιωτικά Κεφάλαια & Εξαγορές', icon: Landmark, href: '/el/services/companies' },
  { name: 'Απάτη & Ανάκτηση Περιουσιακών', icon: Shield, href: '/el/services/companies' },
  { name: 'Εργατικό Δίκαιο', icon: FileCheck, href: '/el/services/companies' },
  { name: 'GDPR & Προστασία Δεδομένων', icon: Scale, href: '/el/services/technology' },
]

export default function HomePageGreek() {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            <source src="/videos/hero-video.webm" type="video/webm" />
          </video>
          {/* Fallback gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 -z-10" />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full container-custom flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6 animate-fade-in">
              Υψηλής Ποιότητας Νομικές Λύσεις για Κάθε Ανάγκη
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 animate-slide-up">
              Από επιχειρηματικές συμφωνίες έως προσωπικό σχεδιασμό περιουσίας, σας καλύπτουμε.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Link href="/el/services/companies" className="btn-primary">
                Οι Υπηρεσίες μας
              </Link>
              <Link href="/el/contact" className="btn-outline-light">
                Επικοινωνία
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Η Εξειδίκευσή μας"
                subtitle="Απαράμιλλη Γνώση, Αποδεδειγμένα Αποτελέσματα"
              />
              <p className="text-body mb-6">
                Με βαθιά εμπειρία στο εταιρικό, προσωπικό και τεχνολογικό δίκαιο,
                παρέχουμε ακριβείς λύσεις που οδηγούν στην επιτυχία και προστατεύουν
                ό,τι έχει μεγαλύτερη σημασία.
              </p>
              <p className="text-body mb-8">
                Εμπιστευτείτε την ομάδα μας να χειριστεί σύνθετες νομικές προκλήσεις
                με ικανότητα, διορατικότητα και αμείωτη αφοσίωση. Είμαστε
                αφοσιωμένοι στην παροχή άριστων νομικών υπηρεσιών στους πελάτες μας.
              </p>
              <Link href="/el/about" className="btn-primary inline-flex">
                Μάθετε Περισσότερα
              </Link>
            </div>
            <div className="relative">
              <div className="bg-primary-100 h-96 w-full flex items-center justify-center">
                <span className="text-8xl font-serif text-primary-300">M</span>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary-900 text-white p-8">
                <div className="text-4xl font-serif font-bold mb-2">20+</div>
                <div className="text-primary-200">Χρόνια Εμπειρίας</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="Οι Υπηρεσίες μας"
            subtitle="Ολοκληρωμένες νομικές λύσεις προσαρμοσμένες στις ανάγκες σας"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <Link key={service.title} href={service.href}>
                <div
                  className={`group p-8 h-full card-hover ${
                    index === 0 ? 'bg-primary-900 text-white' : 'bg-white border border-primary-100'
                  }`}
                >
                  <div
                    className={`w-14 h-14 flex items-center justify-center mb-6 ${
                      index === 0 ? 'bg-white/10' : 'bg-primary-50'
                    }`}
                  >
                    <service.icon
                      className={`w-7 h-7 ${index === 0 ? 'text-white' : 'text-primary-900'}`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-serif font-semibold mb-4 ${
                      index === 0 ? 'text-white' : 'text-primary-900'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className={index === 0 ? 'text-primary-200' : 'text-primary-600'}>
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Most Demanded Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Δημοφιλείς Υπηρεσίες"
            subtitle="Γρήγορη πρόσβαση στις πιο ζητούμενες νομικές λύσεις μας"
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group p-6 text-center border border-primary-100 hover:border-primary-900 hover:bg-primary-900 transition-all duration-300"
              >
                <service.icon className="w-8 h-8 mx-auto mb-3 text-primary-900 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-primary-900 group-hover:text-white transition-colors">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MEDLEX Section */}
      <section className="py-20 bg-prussian-500">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 px-6 py-3">
                  <span className="text-3xl font-serif font-bold tracking-wide">MEDLEX</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Νομικές Υπηρεσίες Ελληνικού Δικαίου
              </h2>
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                Το MEDLEX είναι η εξειδικευμένη πλατφόρμα της MONAD για νομικές υπηρεσίες
                στην Ελλάδα, με έμφαση σε εταιρικά, ακίνητα και εργατικά θέματα.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                Η ομάδα μας παρέχει υψηλού επιπέδου νομική υποστήριξη στην ελληνική γλώσσα,
                με βαθιά γνώση του ελληνικού δικαίου και της τοπικής αγοράς.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://medlex.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-8 py-3 font-medium hover:bg-orange-600 transition-colors inline-flex items-center"
                >
                  Επισκεφθείτε το MEDLEX
                  <Globe className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href="/el/medlex"
                  className="border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-prussian-500 transition-colors inline-flex items-center"
                >
                  Μάθετε Περισσότερα
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 truncate">
                  medlex.gr
                </div>
              </div>
              <iframe
                src="https://medlex.gr/"
                className="w-full h-[400px] border-0"
                title="MEDLEX - Νομικές Υπηρεσίες"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Επικοινωνήστε μαζί μας"
                subtitle="Αν έχετε οποιεσδήποτε ερωτήσεις ή θα θέλατε να κλείσετε ραντεβού, μη διστάσετε να επικοινωνήσετε μαζί μας σήμερα."
              />
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">
                      Επισκεφθείτε το Γραφείο μας
                    </h4>
                    <p className="text-primary-600">Αθήνα, Ελλάδα</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">
                      Παγκόσμια Εμβέλεια
                    </h4>
                    <p className="text-primary-600">
                      Εξυπηρέτηση πελατών παγκοσμίως με πολύγλωσση υποστήριξη
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm title="Πώς μπορούμε να σας βοηθήσουμε;" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="heading-3 mb-4">Εγγραφείτε στο Newsletter μας</h3>
            <p className="text-primary-600 mb-6">
              Μείνετε ενημερωμένοι με τις τελευταίες νομικές πληροφορίες και νέα.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Εισάγετε το email σας"
                className="input-field flex-1"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Εγγραφή
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
