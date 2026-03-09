import PageHeader from '@/components/PageHeader'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faPeopleGroup, faUser, faScroll, faStore, faRocket } from '@fortawesome/free-solid-svg-icons'

const services = [
  { faIcon: faBuilding, title: 'Private Limited Company', description: 'Most popular business structure for startups and growing companies. Limited liability and easy fundraising.', href: '/business-registration/private-limited-company', items: ['2+ Directors required', 'Min. ₹1 capital', 'MCA Registration'] },
  { faIcon: faPeopleGroup, title: 'LLP Registration', description: 'Ideal for professional firms and partnerships. Combines partnership flexibility with company benefits.', href: '/business-registration/llp-registration', items: ['2+ Partners', 'Lower compliance', 'Separate legal entity'] },
  { faIcon: faUser, title: 'OPC Registration', description: 'One Person Company — perfect for solo entrepreneurs who want company benefits.', href: '/business-registration/opc-registration', items: ['Single owner', 'Limited liability', 'Easy conversion'] },
  { faIcon: faScroll, title: 'Partnership Firm', description: 'Simple and cost-effective structure for small businesses with 2-20 partners.', href: '/business-registration', items: ['2-20 partners', 'No min. capital', 'Simple compliance'] },
  { faIcon: faStore, title: 'Sole Proprietorship', description: 'Simplest business form. Complete control with minimal regulatory requirements.', href: '/business-registration', items: ['Single owner', 'No registration', 'Simple taxes'] },
  { faIcon: faRocket, title: 'Startup India Registration', description: 'Get DPIIT recognition. Unlock tax benefits, funding, and government schemes.', href: '/business-registration', items: ['Tax exemptions', 'Faster IP', 'DPIIT recognition'] },
]

export default function BusinessRegistrationPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Business Registration' }]} badge="Business Registration" title="Register Your Business the Right Way" subtitle="Complete business registration services with expert guidance at every step. Starting from ₹1,999." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#273277,#1b2357)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,#F91750 1px,transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Not Sure Which Structure to Choose?</h3>
          <p className="mb-8" style={{ color: '#a5b4fc' }}>Our CA experts will analyze your business and recommend the best structure in a free consultation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl text-sm" style={{ background: '#F91750' }}>
            Book Free Consultation <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>
    </>
  )
}
