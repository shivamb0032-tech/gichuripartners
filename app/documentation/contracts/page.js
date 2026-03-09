import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

export default function ContractsPage() {
  const contracts = [['Service Agreement', '₹2,999'], ['NDA (Non-Disclosure)', '₹1,999'], ['Employment Contract', '₹2,499'], ['Vendor/Supplier Agreement', '₹2,999'], ['Partnership Deed', '₹3,999'], ['Shareholder Agreement', '₹5,999'], ['MOU (Memorandum)', '₹2,499'], ['Freelancer Agreement', '₹1,999']]
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Documentation', href: '/documentation' }, { label: 'Contracts' }]} badge="Business Contracts" title="Professionally Drafted Business Contracts" subtitle="Protect your business with watertight contracts. Drafted by experienced legal professionals." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Contract Types We Draft</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {contracts.map(([type, price]) => (
                <div key={type} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-all">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#F91750' }} />
                    <p className="text-sm font-medium text-gray-700">{type}</p>
                  </div>
                  <span className="font-bold text-sm" style={{ color: '#273277' }}>{price}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white border rounded-2xl p-6 sticky top-24" style={{ borderColor: 'rgba(249,23,80,0.3)' }}>
              <p className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Get Your Contract Drafted</p>
              <div className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600">
                  <option>Contract Type</option>
                  <option>Service Agreement</option>
                  <option>NDA</option>
                  <option>Employment Contract</option>
                  <option>Partnership Deed</option>
                </select>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full text-white font-semibold py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#273277,#1b2357)' }}>
                  <FontAwesomeIcon icon={faHeadset} /> Get Contract Drafted
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
