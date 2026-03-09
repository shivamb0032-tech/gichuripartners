import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

export default function IncomeTaxPage() {
  const itrTypes = [['ITR-1 (Sahaj)', 'Salaried individuals with income up to ₹50 lakhs', '₹999'], ['ITR-2', 'Individuals with capital gains, foreign income, or multiple properties', '₹1,999'], ['ITR-3', 'Individuals with income from business or profession', '₹2,999'], ['ITR-4 (Sugam)', 'Presumptive taxation scheme (44AD, 44ADA, 44AE)', '₹1,499'], ['ITR-5', 'Partnership firms, LLPs, and AOPs', '₹3,999'], ['ITR-6', 'Companies other than those claiming 11 exemptions', '₹5,999']]
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Tax & Compliance', href: '/tax-compliance' }, { label: 'Income Tax Filing' }]} badge="Income Tax" title="Income Tax Return Filing by Expert CAs" subtitle="ITR filing for individuals, businesses, and corporates. Plans starting from ₹999. Maximize your refunds legally." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Which ITR Form is Right for You?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {itrTypes.map(([form, desc, price]) => (
                <div key={form} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold" style={{ color: '#273277' }}>{form}</p>
                    <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ background: '#F91750' }}>{price}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white border rounded-2xl p-6 sticky top-24" style={{ borderColor: 'rgba(249,23,80,0.3)' }}>
              <p className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>File Your ITR Today</p>
              <div className="space-y-3">
                <input type="text" placeholder="Full Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600">
                  <option>Select ITR Type</option>
                  <option>ITR-1 (Salaried)</option>
                  <option>ITR-2 (Capital Gains)</option>
                  <option>ITR-3 (Business)</option>
                  <option>ITR-4 (Presumptive)</option>
                </select>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full text-white font-semibold py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                  <FontAwesomeIcon icon={faHeadset} /> Get Expert CA Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
