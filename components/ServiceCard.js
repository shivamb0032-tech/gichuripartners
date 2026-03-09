import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function ServiceCard({ faIcon, icon, title, description, href, items = [] }) {
  return (
    <Link href={href} className="group block bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 card-hover" style={{ '--hover-border': '#F91750' }}>
      <div className="w-13 h-13 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ background: 'linear-gradient(135deg, rgba(249,23,80,0.1), rgba(39,50,119,0.1))', width: '52px', height: '52px' }}
      >
        {faIcon
          ? <FontAwesomeIcon icon={faIcon} className="text-xl" style={{ color: '#273277' }} />
          : <span className="text-2xl">{icon}</span>
        }
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#F91750] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
      {items.length > 0 && (
        <ul className="space-y-1.5 mb-4">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#F91750' }} className="flex-shrink-0 text-xs" />
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: '#273277' }}>
        Learn more <FaArrowRight className="text-xs" />
      </div>
      <div className="h-0.5 w-0 group-hover:w-full transition-all duration-300 mt-3 rounded-full" style={{ background: 'linear-gradient(90deg,#F91750,#273277)' }} />
    </Link>
  )
}
