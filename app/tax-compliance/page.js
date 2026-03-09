import PageHeader from '@/components/PageHeader'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoiceDollar, faFileArrowUp, faFileLines, faMoneyCheckDollar, faClipboardCheck, faPiggyBank } from '@fortawesome/free-solid-svg-icons'

const services = [
  { faIcon: faFileInvoiceDollar, title: 'GST Registration', description: 'Get your GSTIN in 3-5 days. Mandatory for businesses above ₹20 lakh turnover.', href: '/tax-compliance/gst-registration', items: ['Same-day application', 'Track status live', 'Expert guidance'] },
  { faIcon: faFileArrowUp, title: 'GST Filing', description: 'Monthly, quarterly, and annual GST return filing — never miss a deadline.', href: '/tax-compliance/gst-filing', items: ['GSTR-1, 3B, 9', 'Auto reminders', 'Error-free filing'] },
  { faIcon: faFileLines, title: 'Income Tax Filing', description: 'Individual, business, and corporate income tax returns filed by qualified CAs.', href: '/tax-compliance/income-tax-filing', items: ['ITR 1 to 7', 'Tax planning', 'Refund tracking'] },
  { faIcon: faMoneyCheckDollar, title: 'TDS Return Filing', description: 'Quarterly TDS returns, Form 16 generation, and TDS certificate management.', href: '/tax-compliance', items: ['Form 24Q, 26Q', 'TDS certificates', 'Corrections'] },
  { faIcon: faClipboardCheck, title: 'Annual Compliance', description: 'ROC annual filings, board meetings, and statutory compliance for Pvt Ltd & LLPs.', href: '/tax-compliance', items: ['ROC filings', 'Board resolutions', 'Statutory audit'] },
  { faIcon: faPiggyBank, title: 'Advance Tax & Planning', description: 'Strategic tax planning to minimize your tax liability legally and maximize savings.', href: '/tax-compliance', items: ['Advance tax calc', 'Investment planning', 'Tax saving'] },
]

export default function TaxCompliancePage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Tax & Compliance' }]} badge="Tax & Compliance" title="Complete Tax Solutions for Businesses" subtitle="End-to-end GST, Income Tax, TDS, and compliance services. Stay penalty-free with our expert CA team." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
        <div className="relative max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Never Miss a Tax Deadline Again</h3>
          <p className="text-red-100 mb-8">Let our CA team handle all your filings with automated reminders and proactive compliance management.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-xl text-sm transition-colors" style={{ background: '#273277', color: 'white' }}>
            Get Started Free <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>
    </>
  )
}
