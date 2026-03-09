import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowUp, faHeadset } from '@fortawesome/free-solid-svg-icons'

export default function GSTFilingPage() {
  const plans = [['Basic', '₹999/mo', 'Up to 50 invoices'], ['Standard', '₹1,999/mo', 'Up to 200 invoices'], ['Enterprise', '₹3,999/mo', 'Unlimited invoices']]
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Tax & Compliance', href: '/tax-compliance' }, { label: 'GST Filing' }]} badge="GST Filing" title="GST Return Filing — Never Miss a Deadline" subtitle="Expert CA-managed GST filing for GSTR-1, GSTR-3B, GSTR-9 and more. Starting from ₹999/month." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>GST Return Types We File</h2>
            <div className="space-y-4">
              {[['GSTR-1', 'Monthly/Quarterly', 'Outward supplies — details of sales invoices'], ['GSTR-3B', 'Monthly', 'Summary return — tax payment and ITC claim'], ['GSTR-9', 'Annual', 'Annual consolidated return for all transactions'], ['GSTR-9C', 'Annual', 'Reconciliation statement and audit certification'], ['CMP-08', 'Quarterly', 'For Composition scheme taxpayers']].map(([form, freq, desc]) => (
                <div key={form} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="rounded-xl px-3 py-2 flex-shrink-0 text-white font-bold text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>{form}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-gray-900 text-sm">{desc}</p>
                      <span className="text-xs rounded-full px-2 py-0.5" style={{ background: 'rgba(39,50,119,0.08)', color: '#273277' }}>{freq}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white border rounded-2xl p-6 sticky top-24" style={{ borderColor: 'rgba(249,23,80,0.3)' }}>
              <p className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Monthly Plans</p>
              <div className="space-y-3 mb-5">
                {plans.map(([plan, price, desc]) => (
                  <div key={plan} className="border border-gray-200 rounded-xl p-3 hover:border-pink-300 transition-colors">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-900 text-sm">{plan}</p>
                      <p className="font-bold text-sm" style={{ color: '#F91750' }}>{price}</p>
                    </div>
                    <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full text-white font-semibold py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#273277,#1b2357)' }}>
                <FontAwesomeIcon icon={faHeadset} /> Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
