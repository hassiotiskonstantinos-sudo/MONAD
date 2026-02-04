import Link from 'next/link'
import {
  Heart,
  Shield,
  FileCheck,
  Users,
  ChevronRight,
  Phone,
  ArrowRight,
  Stethoscope,
  Scale,
  BadgeCheck,
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const caseTypes = [
  'Χειρουργικά λάθη',
  'Λάθος διάγνωση',
  'Καθυστερημένη διάγνωση',
  'Λάθη σε φαρμακευτική αγωγή',
  'Αναισθησιολογικά λάθη',
  'Λάθη κατά τον τοκετό',
  'Νοσοκομειακές λοιμώξεις',
  'Λάθη σε οδοντιατρικές πράξεις',
  'Αισθητική χειρουργική',
  'Αμέλεια νοσηλευτικού προσωπικού',
  'Λάθη σε ακτινοθεραπεία',
  'Ψυχιατρική αμέλεια',
]

const recoveryProcess = [
  {
    step: '01',
    title: 'Αρχική Αξιολόγηση',
    description:
      'Αξιολογούμε την υπόθεσή σας εμπιστευτικά, εξετάζοντας τα ιατρικά αρχεία και τις συνθήκες του περιστατικού.',
  },
  {
    step: '02',
    title: 'Ιατρική Πραγματογνωμοσύνη',
    description:
      'Συνεργαζόμαστε με ανεξάρτητους ιατρικούς εμπειρογνώμονες για να αξιολογήσουμε την τυχόν αμέλεια.',
  },
  {
    step: '03',
    title: 'Νομική Στρατηγική',
    description:
      'Αναπτύσσουμε μια εξατομικευμένη στρατηγική για να μεγιστοποιήσουμε τις πιθανότητες επιτυχίας.',
  },
  {
    step: '04',
    title: 'Διεκδίκηση Αξίωσης',
    description:
      'Διεκδικούμε την αξίωσή σας μέσω διαπραγματεύσεων ή δικαστικής οδού όπου απαιτείται.',
  },
  {
    step: '05',
    title: 'Αποζημίωση',
    description:
      'Με επιτυχή έκβαση, διασφαλίζουμε ότι λαμβάνετε την αποζημίωση που δικαιούστε.',
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
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 px-4 py-2 mb-6">
              <span className="text-white font-semibold tracking-wider">
                MEDLEX | ΙΑΤΡΙΚΗ ΑΜΕΛΕΙΑ
              </span>
            </div>
            <h1 className="heading-1 text-white mb-6">
              Δικαιοσύνη για Θύματα Ιατρικής Αμέλειας
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Στη MONAD, είμαστε αφοσιωμένοι στην υπεράσπιση ατόμων που έχουν
              υποφέρει λόγω ιατρικής αμέλειας. Η έμπειρη ομάδα μας ερευνά
              σχολαστικά κάθε υπόθεση για να εξασφαλίσει την αποζημίωση που
              δικαιούστε.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact-form" className="btn-primary flex items-center">
                Δωρεάν Αξιολόγηση
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+302101234567" className="btn-outline-light flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                Καλέστε μας Τώρα
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">
                Έχετε Υποστεί Βλάβη από Ιατρικό Σφάλμα;
              </h2>
              <p className="text-body mb-6">
                Η ιατρική αμέλεια μπορεί να έχει καταστροφικές συνέπειες - σωματικές,
                συναισθηματικές και οικονομικές. Αν εσείς ή κάποιο αγαπημένο σας
                πρόσωπο έχει υποστεί βλάβη λόγω ιατρικής αμέλειας, έχετε δικαίωμα
                αποζημίωσης.
              </p>
              <p className="text-body mb-6">
                Η ομάδα MEDLEX συνεργάζεται με κορυφαίους ιατρικούς εμπειρογνώμονες
                για να εκτιμήσει τις υποθέσεις και να θέσει τους υπεύθυνους προ των
                ευθυνών τους.
              </p>
              <p className="text-body font-semibold">
                Αφήστε μας να είμαστε η φωνή σας στην αναζήτηση δικαιοσύνης και
                στην αποκατάσταση της ψυχικής σας γαλήνης.
              </p>
            </div>
            <div className="bg-primary-50 p-8">
              <Stethoscope className="w-16 h-16 text-primary-900 mb-6" />
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Τι Είναι η Ιατρική Αμέλεια;
              </h3>
              <p className="text-primary-600 mb-6">
                Η ιατρική αμέλεια συμβαίνει όταν ένας επαγγελματίας υγείας αποτυγχάνει
                να παρέχει το αναμενόμενο επίπεδο φροντίδας, με αποτέλεσμα βλάβη στον
                ασθενή.
              </p>
              <ul className="space-y-2 text-primary-700">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Λάθος ή καθυστερημένη διάγνωση
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Χειρουργικά σφάλματα
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Λανθασμένη φαρμακευτική αγωγή
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  Παράλειψη έγκαιρης θεραπείας
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Types */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Υποθέσεις που Χειριζόμαστε</h2>
            <p className="text-body max-w-2xl mx-auto">
              Η ομάδα μας έχει εμπειρία σε ένα ευρύ φάσμα υποθέσεων ιατρικής αμέλειας.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {caseTypes.map((type) => (
              <div
                key={type}
                className="bg-white p-4 text-center border border-primary-100 hover:border-primary-900 transition-colors"
              >
                <span className="text-primary-900 font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Η Διαδικασία μας</h2>
            <p className="text-body max-w-2xl mx-auto">
              Ακολουθούμε μια δομημένη προσέγγιση για να μεγιστοποιήσουμε τις
              πιθανότητες επιτυχούς αποζημίωσης.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {recoveryProcess.map((item, index) => (
              <div
                key={item.step}
                className={`flex gap-8 ${
                  index < recoveryProcess.length - 1 ? 'mb-12' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-900 text-white flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  {index < recoveryProcess.length - 1 && (
                    <div className="w-0.5 h-12 bg-primary-200 mx-auto mt-4" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Γιατί να Επιλέξετε τη MEDLEX;</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ειδική Ομάδα</h3>
              <p className="text-primary-200">
                Δικηγόροι με εξειδίκευση στο ιατρικό δίκαιο και εμπειρία σε σύνθετες
                υποθέσεις αμέλειας.
              </p>
            </div>
            <div className="text-center p-8">
              <Stethoscope className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ιατρικοί Εμπειρογνώμονες</h3>
              <p className="text-primary-200">
                Συνεργαζόμαστε με κορυφαίους ιατρούς για την τεκμηρίωση της αμέλειας.
              </p>
            </div>
            <div className="text-center p-8">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ανθρωποκεντρική Προσέγγιση</h3>
              <p className="text-primary-200">
                Κατανοούμε τη δυσκολία της κατάστασής σας και παρέχουμε υποστήριξη
                σε κάθε βήμα.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* External Link */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h3 className="heading-3 mb-4">Περισσότερες Πληροφορίες</h3>
          <p className="text-body max-w-2xl mx-auto mb-6">
            Για περισσότερες πληροφορίες σχετικά με τις υπηρεσίες ιατρικής αμέλειας,
            επισκεφθείτε τον ιστότοπό μας:
          </p>
          <a
            href="https://medlex.gr/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Επισκεφθείτε το medlex.gr
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-6">Ξεκινήστε Σήμερα</h2>
              <p className="text-body mb-6">
                Αν πιστεύετε ότι εσείς ή κάποιο αγαπημένο σας πρόσωπο έχει υποστεί
                βλάβη λόγω ιατρικής αμέλειας, επικοινωνήστε με την ομάδα MEDLEX
                για μια εμπιστευτική αξιολόγηση.
              </p>
              <div className="bg-primary-50 p-6 mb-6">
                <h4 className="font-semibold mb-3">Δωρεάν Αρχική Αξιολόγηση</h4>
                <p className="text-primary-600 text-sm mb-4">
                  Αξιολογούμε την υπόθεσή σας χωρίς χρέωση και σας ενημερώνουμε
                  για τις επιλογές σας.
                </p>
                <ul className="space-y-2 text-sm text-primary-700">
                  <li className="flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-2 text-green-600" />
                    Εμπιστευτική αξιολόγηση
                  </li>
                  <li className="flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-2 text-green-600" />
                    Σαφής εξήγηση των επιλογών σας
                  </li>
                  <li className="flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-2 text-green-600" />
                    Χωρίς υποχρέωση συνέχισης
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary-900 mr-3" />
                <div>
                  <p className="text-sm text-primary-500">Καλέστε μας:</p>
                  <a
                    href="tel:+302101234567"
                    className="text-xl font-semibold text-primary-900"
                  >
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
