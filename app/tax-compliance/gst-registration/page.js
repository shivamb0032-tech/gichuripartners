import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faGlobe, faBriefcase, faBoxOpen, faHeadset } from '@fortawesome/free-solid-svg-icons'

const benefits = [
  { faIcon: faArrowTrendUp, t: 'Input Tax Credit', d: 'Claim ITC on purchases to reduce tax liability.' },
  { faIcon: faGlobe, t: 'Pan-India Business', d: 'Supply goods/services across all states legally.' },
  { faIcon: faBriefcase, t: 'Business Credibility', d: 'Registered businesses attract more B2B clients.' },
  { faIcon: faBoxOpen, t: 'E-commerce Ready', d: 'Sell on Amazon, Flipkart and other platforms.' },
]

export default function GSTRegistrationPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Tax & Compliance', href: '/tax-compliance' }, { label: 'GST Registration' }]} badge="GST Registration" title="GST Registration in 3-5 Business Days" subtitle="Get your 15-digit GSTIN with complete assistance. Mandatory for businesses with turnover above ₹20 lakhs." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Who Needs GST Registration?</h2>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-3">
                {['Businesses with annual turnover exceeding ₹20 lakhs (₹10 lakhs for NE states)', 'All e-commerce sellers and operators', 'Businesses engaged in inter-state supply', 'Importers and exporters', 'Businesses paying tax under Reverse Charge Mechanism', 'Non-resident taxable persons'].map(item => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <FaCheckCircle style={{ color: '#F91750' }} className="flex-shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Benefits of GST Registration</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b.t} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'linear-gradient(135deg,rgba(249,23,80,0.1),rgba(39,50,119,0.1))' }}>
                      <FontAwesomeIcon icon={b.faIcon} style={{ color: '#273277' }} />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{b.t}</h4>
                    <p className="text-gray-500 text-xs">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white border rounded-2xl p-6 sticky top-24" style={{ borderColor: 'rgba(249,23,80,0.3)' }}>
              <div className="text-center mb-4 pb-4" style={{ borderBottom: '1px solid #f1f5f9' }}>
                <p className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#F91750' }}>₹1,999</p>
                <p className="text-gray-400 text-xs mt-1">GST Registration · All-inclusive</p>
              </div>
              {['Application Filing', 'Document Verification', 'ARN & GSTIN', 'GST Certificate', '30-day support'].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <FaCheckCircle style={{ color: '#F91750' }} className="flex-shrink-0 text-xs" /> {item}
                </div>
              ))}
              <div className="space-y-3 mt-4">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full text-white font-semibold py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                  <FontAwesomeIcon icon={faHeadset} /> Get GST Registered
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
