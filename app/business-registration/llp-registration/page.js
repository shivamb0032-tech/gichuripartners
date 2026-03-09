import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faChartBar, faBriefcase, faSliders, faHeadset } from '@fortawesome/free-solid-svg-icons'

export default function LLPPage() {
  const benefits = [
    { faIcon: faShieldHalved, title: 'Limited Liability', desc: 'Partners protected from personal liability for business debts.' },
    { faIcon: faChartBar, title: 'Low Compliance', desc: 'Fewer ROC filings than Private Limited Company.' },
    { faIcon: faBriefcase, title: 'Professional Image', desc: 'Credible structure for clients and stakeholders.' },
    { faIcon: faSliders, title: 'Flexible Management', desc: 'Managed as per mutual LLP Agreement.' },
  ]
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Business Registration', href: '/business-registration' }, { label: 'LLP Registration' }]} badge="LLP Registration" title="Limited Liability Partnership Registration" subtitle="Perfect for professional firms, consultancies, and service businesses. Register your LLP starting from ₹4,999." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Why Choose LLP?</h2>
            <p className="text-gray-500 leading-relaxed mb-8">An LLP combines the flexibility of a partnership with benefits of limited liability. Partners are protected from personal liability. It has fewer compliance requirements compared to a Private Limited Company.</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'linear-gradient(135deg,rgba(249,23,80,0.1),rgba(39,50,119,0.1))' }}>
                    <FontAwesomeIcon icon={b.faIcon} style={{ color: '#273277' }} />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{b.title}</h4>
                  <p className="text-gray-500 text-xs">{b.desc}</p>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Documents Required</h3>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <ul className="space-y-3">
                {['PAN & Aadhaar of all partners', 'Address proof of partners', 'Registered office proof', 'Digital Signature Certificates', 'DPIN (Designated Partner Identification Number)', 'LLP Agreement (we draft this)'].map(d => (
                  <li key={d} className="flex items-center gap-3 text-sm text-gray-700">
                    <FaCheckCircle style={{ color: '#F91750' }} className="flex-shrink-0" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-white border rounded-2xl p-6 sticky top-24" style={{ borderColor: 'rgba(249,23,80,0.3)' }}>
              <div className="text-center mb-4 pb-4" style={{ borderBottom: '1px solid #f1f5f9' }}>
                <p className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#F91750' }}>₹4,999</p>
                <p className="text-gray-400 text-xs mt-1">All-inclusive · Govt. fees extra</p>
              </div>
              <div className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full text-white font-semibold py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                  <FontAwesomeIcon icon={faHeadset} /> Get Free Callback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
