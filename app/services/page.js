import PageHeader from '@/components/PageHeader'
import ServiceCard from '@/components/ServiceCard'
import { faBuilding, faPeopleGroup, faFileInvoiceDollar, faFileArrowUp, faFileLines, faTrademark, faGavel, faFileContract, faCopyright, faMoneyCheckDollar, faClipboardCheck, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const allServices = [
  { faIcon: faBuilding, title: 'Private Limited Company', description: 'Register your Pvt Ltd with complete end-to-end assistance.', href: '/business-registration/private-limited-company' },
  { faIcon: faPeopleGroup, title: 'LLP Registration', description: 'Limited Liability Partnership registration for professionals.', href: '/business-registration/llp-registration' },
  { faIcon: faFileInvoiceDollar, title: 'GST Registration', description: 'Get your GSTIN in 3-5 days. 100% online process.', href: '/tax-compliance/gst-registration' },
  { faIcon: faFileArrowUp, title: 'GST Filing', description: 'Monthly and annual GST return filing by expert CAs.', href: '/tax-compliance/gst-filing' },
  { faIcon: faFileLines, title: 'Income Tax Filing', description: 'All ITR forms — individual, business, corporate.', href: '/tax-compliance/income-tax-filing' },
  { faIcon: faTrademark, title: 'Trademark Registration', description: 'Protect your brand name and logo for 10 years.', href: '/trademark-ip/trademark-registration' },
  { faIcon: faGavel, title: 'Legal Notice', description: 'Professionally drafted legal notices sent in 24 hours.', href: '/legal-services/legal-notice' },
  { faIcon: faFileContract, title: 'Business Contracts', description: 'Legally sound contracts and agreements for all needs.', href: '/documentation/contracts' },
  { faIcon: faCopyright, title: 'Copyright Registration', description: 'Protect your creative works with copyright filing.', href: '/trademark-ip' },
  { faIcon: faMoneyCheckDollar, title: 'TDS Filing', description: 'Quarterly TDS return filing and Form 16 generation.', href: '/tax-compliance' },
  { faIcon: faClipboardCheck, title: 'Annual Compliance', description: 'ROC filings and annual compliance for Pvt Ltd and LLPs.', href: '/tax-compliance' },
  { faIcon: faLightbulb, title: 'Patent Registration', description: 'Protect your inventions with patent filing.', href: '/trademark-ip' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'All Services' }]} badge="Our Services" title="All CA & Legal Services" subtitle="Comprehensive financial and legal services for startups, SMEs, and corporates across India." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>
    </>
  )
}
