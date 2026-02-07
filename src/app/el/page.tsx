import { ArrowRight, Linkedin, CheckCircle, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { getAssetPath } from '@/lib/constants'

const featuredNews = [
  {
    category: 'Εταιρικό',
    color: 'bg-blue-500',
    title: 'Διασυνοριακές Εξαγορές: Νομικές Πτυχές',
    date: 'Ιαν 2024',
  },
  {
    category: 'Ιδιώτες',
    color: 'bg-emerald-500',
    title: 'Golden Visa: Τι Άλλαξε το 2024',
    date: 'Δεκ 2023',
  },
  {
    category: 'Τεχνολογία',
    color: 'bg-purple-500',
    title: 'GDPR και Τεχνητή Νοημοσύνη',
    date: 'Νοε 2023',
  },
  {
    category: 'Διαφορές',
    color: 'bg-orange-500',
    title: 'Διεθνής Διαιτησία: Τάσεις',
    date: 'Οκτ 2023',
  },
  {
    category: 'Ακίνητα',
    color: 'bg-cyan-500',
    title: 'Επενδύσεις σε Εμπορικά Ακίνητα',
    date: 'Σεπ 2023',
  },
  {
    category: 'Εταιρικό',
    color: 'bg-blue-500',
    title: 'Due Diligence σε Συναλλαγές',
    date: 'Αυγ 2023',
  },
  {
    category: 'Ιδιώτες',
    color: 'bg-emerald-500',
    title: 'Κληρονομικός Σχεδιασμός',
    date: 'Ιουλ 2023',
  },
  {
    category: 'Τεχνολογία',
    color: 'bg-purple-500',
    title: 'Προστασία Προσωπικών Δεδομένων',
    date: 'Ιουν 2023',
  },
]

const practiceAreaCards = [
  {
    image: '/images/shutterstock_2249889569.jpg',
    title: 'Επίλυση Διαφορών',
    description: 'Διαθέτουμε το εύρος ικανοτήτων - με δημιουργικότητα και επιμονή - για την επίλυση κάθε διαφοράς, όσο περίπλοκη κι αν είναι.',
    href: '/el/services/companies',
  },
  {
    image: '/images/startups.jpg',
    title: 'Καινοτομία & Τεχνολογία',
    description: 'Υποστηρίζουμε τους ανθρώπους και τους οργανισμούς που οδηγούν την οικονομία της καινοτομίας.',
    href: '/el/services/technology',
  },
  {
    image: '/images/private-equity.jpg',
    title: 'Ιδιωτικός Πλούτος',
    description: 'Κατανοούμε πώς να εξυπηρετούμε ιδιώτες και οικογένειες σε έναν σύγχρονο κόσμο.',
    href: '/el/services/individuals',
  },
  {
    image: '/images/regulatory.jpg',
    title: 'Ακίνητα',
    description: 'Προσφέρουμε κορυφαίες δεξιότητες που καλύπτουν όλο τον κύκλο ζωής των ακινήτων.',
    href: '/el/services/real-estate',
  },
]

const teamMembers = [
  {
    name: 'Κωνσταντίνος Χασιώτης',
    role: 'Διευθύνων Εταίρος',
    linkedin: 'https://www.linkedin.com/in/chassiotiskonstantinos',
    image: '/images/1573389706301.jpeg',
    initials: 'KC',
  },
  {
    name: 'Δρ. Χρήστος Ζουμπούλης',
    role: 'Εταίρος',
    linkedin: 'https://www.linkedin.com/in/christos-zoumpoulis-dr-iur-63544813/',
    image: '/images/1516501964751.jpeg',
    initials: 'CZ',
  },
  {
    name: 'Βαρβάρα Παπακωνσταντίνου',
    role: 'Συνεργάτης',
    linkedin: 'https://www.linkedin.com/in/barbara-papakonstantinou-070109254/',
    image: '/images/1666012706689.jpeg',
    initials: 'BP',
    zoom: true,
  },
  {
    name: 'Μαρία Σιρέτη',
    role: 'Συνεργάτης',
    linkedin: 'https://www.linkedin.com/in/maria-sireti-7256b7218/',
    image: '/images/1758318032743.jpeg',
    initials: 'MS',
  },
  {
    name: 'Βασίλειος Κόττας',
    role: 'Συνεργάτης',
    linkedin: 'https://www.linkedin.com/in/vasileioskottas/',
    image: '/images/1741424447628.jpeg',
    initials: 'VK',
  },
]

export default function HomePageGreek() {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            poster={getAssetPath('/images/shutterstock_2644707669.jpg')}
          >
            <source src={getAssetPath('/videos/shutterstock_3662626007.mov')} type="video/quicktime" />
            <source src={getAssetPath('/videos/shutterstock_3662626007.mov')} type="video/mp4" />
          </video>
          <Image
            src={getAssetPath('/images/shutterstock_2644707669.jpg')}
            alt="MONAD Law Firm"
            fill
            className="object-cover -z-10"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full container-custom flex flex-col justify-end pb-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-10 leading-[1.1]">
              Καθαρή σκέψη.
              <br />
              <span className="text-orange-500">Αποφασιστική</span> δράση.
            </h1>
            <div className="flex flex-wrap gap-8">
              <Link
                href="/el/services/companies"
                className="inline-flex items-center text-white text-xl font-light hover:text-orange-500 transition-colors group"
              >
                Οι υπηρεσίες μας
                <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/el/contact"
                className="inline-flex items-center text-white text-xl font-light hover:text-orange-500 transition-colors group"
              >
                Επικοινωνία
                <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Statement - WHITE (inverted from English) */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="container-custom">
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 leading-snug max-w-5xl">
            Παρέχουμε συμβουλές σε υποθέσεις όπου το
            <span className="text-orange-500"> αποτέλεσμα καθορίζει</span> τα επόμενα βήματα.
          </p>
        </div>
      </section>

      {/* Practice Area Cards - Light backgrounds */}
      <section className="bg-neutral-100">
        <div className="grid md:grid-cols-2">
          {practiceAreaCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group relative block overflow-hidden"
            >
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={getAssetPath(card.image)}
                  alt={card.title}
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-white/60 group-hover:bg-white/50 transition-colors duration-300" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4 group-hover:text-orange-500 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-neutral-700 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center text-neutral-900 text-sm font-light group-hover:text-orange-500 transition-colors">
                    Διαβάστε περισσότερα
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Insights - Light background */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-serif text-neutral-900">Επιλεγμένα Άρθρα</h2>
            <Link href="/el/knowledge" className="text-neutral-500 hover:text-orange-500 text-base font-light transition-colors">
              Δείτε όλα
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
            {featuredNews.map((item, index) => (
              <article key={index} className="bg-white p-6 hover:bg-neutral-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider">{item.category}</span>
                </div>
                <h3 className="text-base lg:text-lg text-neutral-900 font-serif mb-2 group-hover:text-orange-500 transition-colors leading-tight">{item.title}</h3>
                <span className="text-neutral-400 text-xs">{item.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our People - Light parallax */}
      <section className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('${getAssetPath('/images/shutterstock_2724348917.jpg')}')` }}>
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">Η ομάδα μας</h2>
              <p className="text-neutral-600 text-lg font-light max-w-xl">
                Η ομάδα μας συνδυάζει βαθιά εξειδίκευση με προσωπική προσέγγιση.
              </p>
            </div>
            <Link href="/el/team" className="hidden md:inline-flex items-center text-neutral-900 hover:text-orange-500 text-base font-light transition-colors group">
              Δείτε όλους <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[3/4] bg-neutral-200 overflow-hidden mb-4 shadow-lg">
                  {member.image ? (
                    <Image
                      src={getAssetPath(member.image)}
                      alt={member.name}
                      fill
                      className={`object-cover grayscale ${member.zoom ? 'scale-[1.3]' : ''}`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-300 to-neutral-400">
                      <span className="text-4xl md:text-5xl font-serif text-white/50">{member.initials}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
                <h3 className="text-neutral-900 font-serif text-base group-hover:text-orange-500 transition-colors">{member.name}</h3>
                <p className="text-neutral-500 text-sm font-light">{member.role}</p>
                <div className="flex items-center gap-2 mt-2 text-neutral-400 group-hover:text-orange-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs">LinkedIn</span>
                </div>
              </a>
            ))}
          </div>
          <Link href="/el/team" className="md:hidden inline-flex items-center text-neutral-900 hover:text-orange-500 text-base font-light transition-colors group mt-8">
            Δείτε όλη την ομάδα <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Why MONAD - Light */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="container-custom">
          <h2 className="text-2xl font-serif text-neutral-900 mb-10">Γιατί οι πελάτες επιλέγουν τη <span className="text-orange-500">MONAD</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-orange-500 pl-6">
              <h4 className="text-neutral-900 text-lg font-serif mb-3">Άμεση συμβουλή</h4>
              <p className="text-neutral-500 text-base font-light leading-relaxed">Εξηγούμε τι έχει σημασία — χωρίς ορολογία.</p>
            </div>
            <div className="border-l-2 border-orange-500 pl-6">
              <h4 className="text-neutral-900 text-lg font-serif mb-3">Προσωπική εξυπηρέτηση</h4>
              <p className="text-neutral-500 text-base font-light leading-relaxed">Ο υπεύθυνος παραμένει άμεσα εμπλεκόμενος.</p>
            </div>
            <div className="border-l-2 border-orange-500 pl-6">
              <h4 className="text-neutral-900 text-lg font-serif mb-3">Διασυνοριακή εμπειρία</h4>
              <p className="text-neutral-500 text-base font-light leading-relaxed">Διαχειριζόμαστε πολυπλοκότητα σε όλες τις δικαιοδοσίες.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEDLEX Section - BLACK (opposite of English FINLEX) */}
      <section className="border-t border-neutral-200">
        <div className="grid lg:grid-cols-2">
          {/* Left - Black background with content (Full width on mobile, 50% on desktop) */}
          <div className="bg-black p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="mb-8 lg:mb-10">
              <div className="inline-block bg-white px-6 py-3">
                <span className="text-3xl font-serif font-bold text-black">MED</span>
                <span className="text-3xl font-serif font-bold text-orange-500">LEX</span>
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-white leading-relaxed mb-6">
              &ldquo;Νομικές υπηρεσίες υψηλού επιπέδου στην ελληνική γλώσσα.&rdquo;
            </blockquote>
            <p className="text-white/70 text-base lg:text-lg font-light leading-relaxed mb-4 lg:mb-6">
              Το MEDLEX είναι η εξειδικευμένη πλατφόρμα της MONAD για νομικές υπηρεσίες
              στην Ελλάδα, με έμφαση σε εταιρικά, ακίνητα και εργατικά θέματα.
            </p>
            <p className="text-white/50 text-sm lg:text-base font-light leading-relaxed mb-6 lg:mb-8">
              Βαθιά γνώση του ελληνικού δικαίου και της τοπικής αγοράς.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://medlex.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 text-white px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-medium hover:bg-orange-600 transition-colors"
              >
                Επισκεφθείτε το MEDLEX <ArrowRight className="ml-2 lg:ml-3 w-4 lg:w-5 h-4 lg:h-5" />
              </a>
              <Link
                href="/el/medlex"
                className="inline-flex items-center border border-white/30 text-white px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-medium hover:bg-white/10 transition-colors"
              >
                Μάθετε περισσότερα
              </Link>
            </div>
          </div>

          {/* Right - White with content (DESKTOP ONLY) */}
          <div className="hidden lg:flex bg-white p-16 items-center justify-center">
            <div className="w-full max-w-md">
              <h3 className="text-2xl font-serif text-neutral-900 mb-6">Τομείς Εξειδίκευσης</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                  Εταιρικό Δίκαιο
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                  Ακίνητα & Κατασκευές
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                  Εργατικό Δίκαιο
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                  Φορολογικός Σχεδιασμός
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                  Κληρονομικό Δίκαιο
                </li>
              </ul>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <p className="text-sm text-neutral-700">
                  <strong className="text-orange-600">Ελληνικό Δίκαιο</strong> – Εξειδικευμένη νομική υποστήριξη στην ελληνική γλώσσα.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location - Light */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-neutral-900 mb-6">
                Έδρα στην Αθήνα. <span className="text-orange-500">Δραστηριότητα παγκοσμίως.</span>
              </h2>
              <p className="text-neutral-500 text-lg font-light leading-relaxed mb-6">
                Εξυπηρετούμε πελάτες σε όλη την Ευρώπη, τη Μέση Ανατολή και πέρα.
              </p>
              <Link href="/el/contact" className="inline-flex items-center text-neutral-900 hover:text-orange-500 text-base font-light transition-colors group">
                Επικοινωνήστε μαζί μας <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[300px]">
              <Image src={getAssetPath('/images/AdobeStock_62203512.jpeg')} alt="Αθήνα" fill className="object-cover grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Dark section for contrast */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-serif text-white mb-6">Επικοινωνήστε μαζί μας</h2>
              <p className="text-white/60 text-lg font-light mb-10">
                Χρησιμοποιήστε τη φόρμα επικοινωνίας για να μας στείλετε μήνυμα. Θα απαντήσουμε εντός μίας εργάσιμης ημέρας.
              </p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-white/40 uppercase text-xs tracking-widest mb-2">Email</h4>
                  <a href="mailto:contact@monad.law" className="text-white text-lg hover:text-orange-500 transition-colors">contact@monad.law</a>
                </div>
                <div>
                  <h4 className="text-white/40 uppercase text-xs tracking-widest mb-2">Τοποθεσία</h4>
                  <p className="text-white/70 text-lg">Αθήνα, Ελλάδα</p>
                </div>
                <div>
                  <h4 className="text-white/40 uppercase text-xs tracking-widest mb-2">Ώρες Λειτουργίας</h4>
                  <p className="text-white/70 text-lg">Δευτέρα – Παρασκευή, 9:00 – 18:00</p>
                </div>
              </div>
              <p className="text-white/30 text-sm mt-12">
                Η επικοινωνία μαζί μας δεν δημιουργεί σχέση δικηγόρου-πελάτη.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
