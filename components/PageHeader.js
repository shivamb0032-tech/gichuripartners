import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function PageHeader({ breadcrumb = [], title, subtitle, badge }) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #273277 0%, #1b2357 60%, #0d1230 100%)' }}>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: '#F91750', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 blur-2xl" style={{ background: '#F91750', transform: 'translate(-30%, 30%)' }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(249,23,80,0.8) 1px, transparent 0)', backgroundSize: '36px 36px' }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <FaChevronRight className="text-xs opacity-50" />
                {item.href
                  ? <Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                  : <span className="text-white">{item.label}</span>
                }
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border" style={{ background: 'rgba(249,23,80,0.15)', color: '#F91750', borderColor: 'rgba(249,23,80,0.3)' }}>
            <FontAwesomeIcon icon={faStar} className="text-xs" />
            {badge}
          </span>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-blue-200 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}

        {/* Bottom gradient line */}
        <div className="mt-10 h-1 w-24 rounded-full" style={{ background: 'linear-gradient(90deg, #F91750, #273277)' }} />
      </div>
    </section>
  )
}
