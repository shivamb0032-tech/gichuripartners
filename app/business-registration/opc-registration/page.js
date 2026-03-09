import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShieldHalved, faArrowUpRightDots, faFileCircleCheck, faHeadset } from '@fortawesome/free-solid-svg-icons'

export default function OPCPage() {
  const benefits = [
    { faIcon: faUser, title: 'Single Owner', desc: 'Complete ownership and control for the solo entrepreneur.' },
    { faIcon: faShieldHalved, title: 'Limited Liability', desc: 'Your personal assets are always protected.' },
    { faIcon: faArrowUpRightDots, title: 'Convertible', desc: 'Easily convert to Pvt Ltd when you\'re ready to scale.' },
    { faIcon: faFileCircleCheck, title: 'Less Compliance', desc: 'Fewer annual filings than a standard company.' },
  ]
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Business Registration', href: '/business-registration' }, { label: 'OPC Registration' }]} badge="One Person Company" title="OPC Registration — For Solo Entrepreneurs" subtitle="Get the benefits of a Private Limited Company with a single owner. Register your OPC from ₹5,499." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>What is a One Person Company?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">OPC (One Person Company) was introduced in the Companies Act, 2013, allowing a single entrepreneur to run a company with limited liability. Unlike sole proprietorship, your personal assets are fully protected.</p>
            <p className="text-gray-500 leading-relaxed mb-8">Ideal for freelancers, consultants, and individual entrepreneurs who want a corporate identity without partners or shareholders.</p>
            <div className="grid sm:grid-cols-2 gap-4">
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
          </div>
          <div>
            <div className="bg-white border rounded-2xl p-6 sticky top-24" style={{ borderColor: 'rgba(249,23,80,0.3)' }}>
              <div className="text-center mb-4 pb-4" style={{ borderBottom: '1px solid #f1f5f9' }}>
                <p className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#F91750' }}>₹5,499</p>
                <p className="text-gray-400 text-xs mt-1">Complete OPC Registration</p>
              </div>
              {['DSC & DIN', 'Name Approval', 'MOA & AOA Drafting', 'Incorporation Certificate', 'PAN & TAN'].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(249,23,80,0.1)' }}>
                    <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="#F91750"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  {item}
                </div>
              ))}
              <div className="space-y-3 mt-4">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900" />
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full text-white font-semibold py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                  <FontAwesomeIcon icon={faHeadset} /> Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
