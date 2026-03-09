import PageHeader from '@/components/PageHeader'
import ServiceCard from '@/components/ServiceCard'
import { faFileContract, faHouseChimney, faShieldHalved, faFileLines } from '@fortawesome/free-solid-svg-icons'

const services = [
  { faIcon: faFileContract, title: 'Business Contracts', description: 'Professionally drafted contracts for all business transactions and agreements.', href: '/documentation/contracts', items: ['Service Agreements', 'Vendor Contracts', 'NDA drafting'] },
  { faIcon: faHouseChimney, title: 'Rental Agreement', description: 'Legally binding rental/lease agreements for residential and commercial properties.', href: '/documentation', items: ['11-month agreements', 'Commercial leases', 'Leave & License'] },
  { faIcon: faShieldHalved, title: 'Privacy Policy', description: 'GDPR and Indian IT law compliant privacy policies for websites and apps.', href: '/documentation', items: ['Website policy', 'App policy', 'DPDP Act ready'] },
  { faIcon: faFileLines, title: 'Terms & Conditions', description: 'Comprehensive T&C documents for e-commerce, SaaS, and service businesses.', href: '/documentation', items: ['E-commerce T&C', 'SaaS agreements', 'Service terms'] },
]

export default function DocumentationPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Documentation' }]} badge="Legal Documentation" title="Professional Legal Documents & Agreements" subtitle="Expert-drafted legal documents tailored to your business. Ready in 24-48 hours." />
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
