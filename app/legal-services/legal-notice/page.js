import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave, faHouseChimney, faBriefcase, faFileContract, faCoins, faCartShopping, faHeadset } from '@fortawesome/free-solid-svg-icons'

const notices = [
  { faIcon: faMoneyBillWave, type: 'Cheque Bounce Notice', price: '₹1,999' },
  { faIcon: faHouseChimney, type: 'Property Dispute', price: '₹2,999' },
  { faIcon: faBriefcase, type: 'Employment Dispute', price: '₹1,999' },
  { faIcon: faFileContract, type: 'Contract Breach', price: '₹2,499' },
  { faIcon: faCoins, type: 'Money Recovery', price: '₹1,999' },
  { faIcon: faCartShopping, type: 'Consumer Complaint', price: '₹1,499' },
]

export default function LegalNoticePage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Legal Services', href: '/legal-services' }, { label: 'Legal Notice' }]} badge="Legal Notice" title="Send a Legal Notice in 24 Hours" subtitle="Professionally drafted legal notices for all disputes — cheque bounce, money recovery, property, employment, and more." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Types of Legal Notices We Draft</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {notices.map((n) => (
                <div key={n.type} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,rgba(249,23,80,0.1),rgba(39,50,119,0.1))' }}>
                      <FontAwesomeIcon icon={n.faIcon} style={{ color: '#273277' }} className="text-sm" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{n.type}</p>
                  </div>
                  <span className="font-bold text-sm" style={{ color: '#F91750' }}>{n.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white border rounded-2xl p-6 sticky top-24" style={{ borderColor: 'rgba(249,23,80,0.3)' }}>
              <p className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Send Legal Notice</p>
              <p className="text-gray-400 text-xs mb-4">Starting from ₹1,499 · Delivered in 24 hours</p>
              <div className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600">
                  <option>Notice Type</option>
                  <option>Cheque Bounce</option>
                  <option>Property Dispute</option>
                  <option>Money Recovery</option>
                  <option>Contract Breach</option>
                </select>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full text-white font-semibold py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                  <FontAwesomeIcon icon={faHeadset} /> Get Legal Notice Drafted
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
