import PageHeader from '@/components/PageHeader'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { faTrademark, faMagnifyingGlass, faCopyright, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const services = [
  { faIcon: faTrademark, title: 'Trademark Registration', description: 'Protect your brand name, logo, and tagline with a registered trademark.', href: '/trademark-ip/trademark-registration', items: ['10-year protection', 'Pan-India coverage', '45 classes available'] },
  { faIcon: faMagnifyingGlass, title: 'Trademark Search', description: 'Check availability before filing. Avoid rejection and conflicts.', href: '/trademark-ip', items: ['Comprehensive search', 'Same-day report', 'Expert analysis'] },
  { faIcon: faCopyright, title: 'Copyright Registration', description: 'Protect your creative works — music, books, software, art.', href: '/trademark-ip', items: ['All creative works', 'Lifetime protection', 'Legal evidence'] },
  { faIcon: faLightbulb, title: 'Patent Registration', description: 'Secure exclusive rights for your inventions and innovations.', href: '/trademark-ip', items: ['20-year protection', 'Provisional & complete', 'Technical experts'] },
]

export default function TrademarkIPPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Trademark & IP' }]} badge="Trademark & IP" title="Protect Your Intellectual Property" subtitle="Comprehensive IP protection services — trademark, copyright, and patent registration by legal experts." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#273277,#1b2357)' }}>
        <div className="relative max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Your Brand Deserves Protection</h3>
          <p className="mb-8" style={{ color: '#a5b4fc' }}>Register your trademark today and secure your brand for 10 years.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl text-sm" style={{ background: '#F91750' }}>
            Register Trademark Now <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>
    </>
  )
}
