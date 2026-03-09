import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faPalette, faComment, faVolumeHigh, faDrumstickBite, faCube, faIdCard, faFileSignature, faGears, faMedal, faHeadset } from '@fortawesome/free-solid-svg-icons'

const markTypes = [
  { faIcon: faTag, label: 'Brand Name' }, { faIcon: faPalette, label: 'Logo & Design' }, { faIcon: faComment, label: 'Tagline/Slogan' },
  { faIcon: faVolumeHigh, label: 'Sound Mark' }, { faIcon: faDrumstickBite, label: 'Color Combination' }, { faIcon: faCube, label: 'Product Shape' },
]
const steps = [
  { faIcon: faIdCard, n: '01', t: 'Trademark Search', d: 'Check if your mark is available across all 45 classes.' },
  { faIcon: faFileSignature, n: '02', t: 'Application Filing', d: 'File TM-A form with IP India portal with all details.' },
  { faIcon: faGears, n: '03', t: 'Examination', d: 'Trademark office examines — we handle all objections.' },
  { faIcon: faMedal, n: '04', t: 'Publication & Registration', d: 'Published in TM Journal for 4 months, then certificate issued.' },
]

export default function TrademarkRegistrationPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Trademark & IP', href: '/trademark-ip' }, { label: 'Trademark Registration' }]} badge="Trademark" title="Trademark Registration — Protect Your Brand" subtitle="Register your brand name, logo, or tagline as a trademark. Valid for 10 years, renewable forever. Starting ₹6,999." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>What Can Be Trademarked?</h2>
              <div className="grid grid-cols-3 gap-4">
                {markTypes.map((m) => (
                  <div key={m.label} className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: 'linear-gradient(135deg,rgba(249,23,80,0.1),rgba(39,50,119,0.1))' }}>
                      <FontAwesomeIcon icon={m.faIcon} style={{ color: '#273277' }} />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Registration Process</h2>
              <div className="space-y-4">
                {steps.map((s) => (
                  <div key={s.n} className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                      <FontAwesomeIcon icon={s.faIcon} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold mb-0.5" style={{ color: '#F91750' }}>Step {s.n}</p>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{s.t}</h4>
                      <p className="text-gray-500 text-xs">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white border rounded-2xl p-6 sticky top-24" style={{ borderColor: 'rgba(249,23,80,0.3)' }}>
              <div className="text-center mb-4 pb-4" style={{ borderBottom: '1px solid #f1f5f9' }}>
                <p className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#F91750' }}>₹6,999</p>
                <p className="text-gray-400 text-xs mt-1">Per class · Govt. fee extra</p>
              </div>
              {['Trademark Search Report', 'Application Filing', 'Objection Handling', 'TM Number in 2 days', '1 Year Follow-up'].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 20 20" fill="#F91750"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {item}
                </div>
              ))}
              <div className="space-y-3 mt-4">
                <input type="text" placeholder="Brand Name to Register" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full text-white font-semibold py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                  <FontAwesomeIcon icon={faHeadset} /> Protect My Brand
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
