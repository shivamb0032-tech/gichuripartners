import PageHeader from '@/components/PageHeader'
import ServiceCard from '@/components/ServiceCard'
import { faGavel, faHouseChimney, faBriefcase, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'

const services = [
  { faIcon: faGavel, title: 'Legal Notice', description: 'Professionally drafted legal notices for cheque bouncing, property disputes, and contract breaches.', href: '/legal-services/legal-notice', items: ['Sent in 24 hours', 'Drafted by advocates', 'All dispute types'] },
  { faIcon: faHouseChimney, title: 'Property Lawyer', description: 'Expert legal advice for property purchase, disputes, title verification, and registration.', href: '/legal-services', items: ['Title search', 'Agreement drafting', 'Registration'] },
  { faIcon: faBriefcase, title: 'Corporate Lawyer', description: 'Legal support for business contracts, shareholder agreements, and corporate disputes.', href: '/legal-services', items: ['Contract review', 'M&A advisory', 'Board matters'] },
  { faIcon: faScaleBalanced, title: 'Consumer Complaint', description: 'File consumer complaints against defective products and service deficiencies.', href: '/legal-services', items: ['District forum', 'State commission', 'NCDRC'] },
]

export default function LegalServicesPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Legal Services' }]} badge="Legal Services" title="Expert Legal Services for Businesses & Individuals" subtitle="Professional legal assistance from qualified advocates. Protect your rights and interests." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>
    </>
  )
}
