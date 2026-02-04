import Link from 'next/link'
import {
  Scale,
  Building2,
  FileCheck,
  Shield,
  ChevronRight,
  Phone,
  ArrowRight,
  Gavel,
  Home,
  Users,
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import SectionHeading from '@/components/SectionHeading'

const services = [
  {
    title: 'Εταιρικά Θέματα',
    description: 'Σύσταση, διακυβέρνηση, εταιρικές συμβάσεις και αναδιαρθρώσεις.',
    icon: Building2,
  },
  {
    title: 'Συμβάσεις',
    description: 'Εμπορικές συμβάσεις, διαπραγματεύσεις και επίλυση συμβατικών διαφορών.',
    icon: FileCheck,
  },
  {
    title: 'Ρυθμιστική Συμμόρφωση',
    description: 'Κανονιστικό πλαίσιο, αδειοδοτήσεις και συμμόρφωση με τη νομοθεσία.',
    icon: Scale,
  },
  {
    title: 'Εργασιακά',
    description: 'Συμβάσεις εργασίας, πολιτικές προσωπικού και εργατικές διαφορές.',
    icon: Users,
  },
  {
    title: 'Ακίνητα',
    description: 'Αγοραπωλησίες, μισθώσεις, ανάπτυξη και επενδύσεις σε ακίνητα.',
    icon: Home,
  },
  {
    title: 'Επίλυση Διαφορών',
    description: 'Δικαστική εκπροσώπηση, διαμεσολάβηση και εναλλακτική επίλυση διαφορών.',
    icon: Gavel,
  },
]

export default function MedlexPage() {
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
            <div className="inline-block bg-white/10 px-4 py-2 mb-6">
              <span className="text-white font-semibold tracking-wider">MEDLEX</span>
            </div>
            <h1 className="heading-1 text-white mb-6">
              Νομικές Υπηρεσίες<br />
              Ελληνικού Δικαίου
            </h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">
              Το MEDLEX είναι ο στοχευμένος κόμβος της MONAD για νομικές υπηρεσίες ελληνικού
              δικαίου, με έμφαση στην πρακτική εφαρμογή και την ασφάλεια δικαίου.
            </p>
            <p className="text-lg text-primary-300 mb-8 leading-relaxed">
              Απευθύνεται σε επιχειρήσεις και ιδιώτες που δραστηριοποιούνται ή επενδύουν
              στην Ελλάδα και χρειάζονται καθαρή στρατηγική, σωστή τεκμηρίωση και συνεπή υλοποίηση.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact-form" className="btn-primary flex items-center">
                Επικοινωνία
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+302101234567" className="btn-outline-light flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                Καλέστε μας
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <SectionHeading
              title="Τι Καλύπτει το MEDLEX"
              subtitle="Μεθοδική προσέγγιση σε κάθε υπόθεση"
            />
            <p className="text-body text-lg leading-relaxed mb-6">
              Το MEDLEX καλύπτει, μεταξύ άλλων, εταιρικά θέματα, συμβάσεις, ρυθμιστική
              συμμόρφωση, εργασιακά, ακίνητα, αδειοδοτήσεις και επίλυση διαφορών.
            </p>
            <p className="text-body leading-relaxed">
              Η προσέγγιση είναι μεθοδική: ορίζεται ο στόχος, αξιολογούνται οι κρίσιμοι
              κίνδυνοι, οργανώνεται η τεκμηρίωση και παράγεται λύση που μπορεί να εφαρμοστεί
              χωρίς περιττές τριβές.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 border border-primary-100">
                <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-900" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-primary-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">Η Προσέγγισή μας</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-900 pl-6">
                  <h4 className="font-semibold text-primary-900 mb-2">Σαφήνεια</h4>
                  <p className="text-primary-600">
                    Καθαρή στρατηγική και σαφής επικοινωνία σε κάθε στάδιο της υπόθεσης.
                  </p>
                </div>
                <div className="border-l-4 border-primary-900 pl-6">
                  <h4 className="font-semibold text-primary-900 mb-2">Ταχύτητα</h4>
                  <p className="text-primary-600">
                    Αποτελεσματική διαχείριση χρονοδιαγραμμάτων και άμεση ανταπόκριση.
                  </p>
                </div>
                <div className="border-l-4 border-primary-900 pl-6">
                  <h4 className="font-semibold text-primary-900 mb-2">Διακριτικότητα</h4>
                  <p className="text-primary-600">
                    Χειρισμός κάθε υπόθεσης με επαγγελματισμό και απόλυτη εμπιστευτικότητα.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary-900 text-white p-10">
              <h3 className="text-2xl font-serif font-semibold mb-6">Στόχος του MEDLEX</h3>
              <p className="text-primary-200 leading-relaxed mb-6">
                Στόχος του MEDLEX είναι να προσφέρει ένα σταθερό σημείο αναφοράς για όσους
                χρειάζονται σύγχρονη νομική υποστήριξη στην Ελλάδα, με σαφήνεια, ταχύτητα
                και διακριτικότητα.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Πρακτική εφαρμογή</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Ασφάλεια δικαίου</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Αξιόπιστη τεκμηρίωση</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Συνεπής υλοποίηση</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Σύγχρονη Νομική Υποστήριξη στην Ελλάδα</h2>
            <p className="text-primary-200 text-lg leading-relaxed mb-8">
              Το MEDLEX είναι σχεδιασμένο για επιχειρήσεις και ιδιώτες που χρειάζονται
              νομική υποστήριξη με πρακτική διάσταση. Ο στόχος δεν είναι η παραγωγή
              εγγράφων, αλλά η δημιουργία λύσεων που μπορούν να εφαρμοστούν και να υπερασπιστούν.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-6">Επικοινωνία με το MEDLEX</h2>
              <p className="text-body mb-6">
                Χρησιμοποιήστε τη φόρμα για να περιγράψετε το αίτημά σας. Ένα μέλος της
                ομάδας MEDLEX θα απαντήσει εντός μίας εργάσιμης ημέρας. Όπου το θέμα είναι
                χρονικά επείγον, η αναφορά του επείγοντος βοηθά στην κατάλληλη ιεράρχηση.
              </p>
              <div className="bg-white p-6 mb-6">
                <h4 className="font-semibold mb-3">Αρχική Αξιολόγηση</h4>
                <p className="text-primary-600 text-sm mb-4">
                  Μια αρχική συνομιλία βοηθά να εντοπιστεί η σωστή προσέγγιση και η
                  κατάλληλη σύνθεση της ομάδας.
                </p>
                <ul className="space-y-2 text-sm text-primary-700">
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-primary-900" />
                    Δομημένη αξιολόγηση της κατάστασης
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-primary-900" />
                    Σαφής εξήγηση επιλογών
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-primary-900" />
                    Πρακτικά επόμενα βήματα
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary-900 mr-3" />
                <div>
                  <p className="text-sm text-primary-500">Καλέστε μας:</p>
                  <a href="tel:+302101234567" className="text-xl font-semibold text-primary-900">
                    +30 210 123 4567
                  </a>
                </div>
              </div>
            </div>
            <ContactForm title="Επικοινωνία με την Ομάδα MEDLEX" />
          </div>
        </div>
      </section>
    </>
  )
}
