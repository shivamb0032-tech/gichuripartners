import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faHandHoldingDollar, faBuilding, faInfinity, faIdCard, faFileSignature, faGears, faAward, faHeadset } from '@fortawesome/free-solid-svg-icons'

const benefits = [
  { faIcon: faShieldHalved, title: 'Limited Liability', desc: 'Personal assets of shareholders are protected from business liabilities.' },
  { faIcon: faHandHoldingDollar, title: 'Easy Fundraising', desc: 'Attract investors, venture capital, and bank loans with ease.' },
  { faIcon: faBuilding, title: 'Separate Legal Entity', desc: 'Company can own property, sue, and be sued in its own name.' },
  { faIcon: faInfinity, title: 'Perpetual Succession', desc: 'Company continues regardless of changes in ownership.' },
]
const steps = [
  { faIcon: faIdCard, n: '01', t: 'DSC & DIN', d: 'Obtain Digital Signature Certificates and Director Identification Numbers.' },
  { faIcon: faFileSignature, n: '02', t: 'Name Approval', d: 'File RUN (Reserve Unique Name) with MCA for company name approval.' },
  { faIcon: faGears, n: '03', t: 'MOA & AOA', d: 'Draft Memorandum and Articles of Association for your company.' },
  { faIcon: faAward, n: '04', t: 'Incorporation', d: 'File SPICe+ form with MCA. Receive Certificate of Incorporation.' },
]
const docs = ['PAN Card of Directors', 'Aadhaar Card of Directors', 'Passport-size Photos', 'Proof of Registered Office', 'Utility Bill (not older than 2 months)', 'Digital Signature Certificate (DSC)', 'Director Identification Number (DIN)']

export default function PrivateLimitedPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Business Registration', href: '/business-registration' }, { label: 'Private Limited Company' }]} badge="Most Popular" title="Private Limited Company Registration" subtitle="Register your Pvt Ltd company in 7-10 days. Complete assistance from document preparation to certificate delivery. Starting from ₹6,999." />

      <section className="bg-white border-b border-gray-100 px-4 py-5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-8">
            {[['₹6,999', 'All-inclusive price'], ['7-10 Days', 'Completion time'], ['100%', 'Online process'], ['ICAI', 'Certified CAs']].map(([v, l]) => (
              <div key={l}>
                <p className="text-xl font-bold" style={{ color: '#F91750' }}>{v}</p>
                <p className="text-gray-400 text-xs">{l}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
            <FontAwesomeIcon icon={faHeadset} /> Get Started Free
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Why Private Limited Company?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: 'linear-gradient(135deg,rgba(249,23,80,0.1),rgba(39,50,119,0.1))' }}>
                      <FontAwesomeIcon icon={b.faIcon} className="text-lg" style={{ color: '#273277' }} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">{b.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Registration Process</h2>
              <div className="space-y-4">
                {steps.map((s) => (
                  <div key={s.n} className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                      <FontAwesomeIcon icon={s.faIcon} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold mb-0.5" style={{ color: '#F91750' }}>Step {s.n}</p>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{s.t}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Documents Required</h2>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <ul className="space-y-3">
                  {docs.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-gray-700">
                      <FaCheckCircle style={{ color: '#F91750' }} className="flex-shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white border rounded-2xl p-6 sticky top-24" style={{ borderColor: 'rgba(249,23,80,0.3)' }}>
              <div className="text-center mb-4 pb-4" style={{ borderBottom: '1px solid #f1f5f9' }}>
                <p className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#F91750' }}>₹6,999</p>
                <p className="text-gray-400 text-xs mt-1">All-inclusive price</p>
              </div>
              <div className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none text-gray-900" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none text-gray-900" />
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full text-white font-semibold py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                  <FontAwesomeIcon icon={faHeadset} /> Get Free Callback
                </Link>
              </div>
              <p className="text-center text-xs mt-4" style={{ color: '#94a3b8' }}>Trusted by 10,000+ businesses · ICAI Certified</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
