import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FaArrowRight, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faCalendarDays, faLocationDot, faTrophy, faHandshake, faCheckDouble, faStar, faUserTie, faRocket } from '@fortawesome/free-solid-svg-icons'

const team = [
  { name: 'CA Rajesh Gupta', role: 'Founder & Managing Partner', exp: '20+ years', avatar: 'RG', spec: 'Corporate Tax & Audit' },
  { name: 'CA Meera Singh', role: 'Senior Partner – Tax', exp: '15+ years', avatar: 'MS', spec: 'GST & Income Tax' },
  { name: 'CA Arjun Shah', role: 'Partner – Legal & IP', exp: '12+ years', avatar: 'AS', spec: 'Trademark & IP Law' },
  { name: 'CA Pooja Nair', role: 'Head – Compliance', exp: '10+ years', avatar: 'PN', spec: 'Annual Compliance & Audit' },
]

const statsData = [
  { faIcon: faUsers, n: '10,000+', l: 'Clients Served' },
  { faIcon: faCalendarDays, n: '15+', l: 'Years in Business' },
  { faIcon: faUserTie, n: '50+', l: 'Expert CAs' },
  { faIcon: faLocationDot, n: '25+', l: 'States Covered' },
]

const values = [
  { faIcon: faTrophy, title: 'Excellence', desc: 'We hold ourselves to the highest professional standards in every engagement.' },
  { faIcon: faHandshake, title: 'Integrity', desc: 'Honest, transparent advice — always in your best interest, never ours.' },
  { faIcon: faCheckDouble, title: 'Reliability', desc: 'Deadlines met, promises kept. Your compliance is our responsibility.' },
  { faIcon: faRocket, title: 'Innovation', desc: 'Digital-first approach to deliver CA services faster and more efficiently.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'About Us' }]} badge="About TaxProCA" title="15 Years of Trusted Financial Excellence" subtitle="We started with a simple mission: make professional CA and legal services accessible to every business in India." />

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider" style={{ background: 'rgba(249,23,80,0.08)', color: '#F91750' }}>Our Story</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>From a Small Office to Pan-India Presence</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Founded in 2010 in Mumbai by CA Rajesh Gupta, TaxProCA began as a boutique firm serving startups and SMEs. Our client-first philosophy and deep technical expertise quickly earned us trust across the industry.</p>
            <p className="text-gray-500 leading-relaxed mb-4">Today, we serve 10,000+ clients across 25+ states with a team of 50+ Chartered Accountants, legal experts, and compliance professionals — all united by our commitment to accurate, timely, and ethical service.</p>
            <p className="text-gray-500 leading-relaxed mb-8">Whether you're a first-time entrepreneur or a growing enterprise, TaxProCA is your trusted financial partner for every milestone.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
              Work With Us <FaArrowRight className="text-xs" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {statsData.map((s) => (
              <div key={s.l} className="rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'linear-gradient(135deg,rgba(249,23,80,0.1),rgba(39,50,119,0.1))' }}>
                  <FontAwesomeIcon icon={s.faIcon} className="text-xl" style={{ color: '#273277' }} />
                </div>
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#F91750' }}>{s.n}</div>
                <div className="text-gray-500 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center card-hover">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg,#F91750,#273277)' }}>
                  <FontAwesomeIcon icon={v.faIcon} className="text-white text-xl" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Meet Our Leadership</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Experienced professionals dedicated to your financial success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 card-hover">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4" style={{ background: 'linear-gradient(135deg,#F91750,#273277)' }}>
                  {m.avatar}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{m.name}</h4>
                <p className="text-xs font-semibold mb-2" style={{ color: '#F91750' }}>{m.role}</p>
                <p className="text-gray-400 text-xs mb-1">{m.spec}</p>
                <p className="text-gray-300 text-xs mb-4">{m.exp} experience</p>
                <div className="flex justify-center gap-2">
                  {[FaLinkedinIn, FaTwitter].map((Icon, i) => (
                    <span key={i} className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer text-xs" style={{ background: '#f8fafc' }}>
                      <Icon />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#273277,#1b2357)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,#F91750 1px,transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to Work With Us?</h3>
          <p className="mb-8" style={{ color: '#a5b4fc' }}>Book a free consultation and let's discuss how we can help your business thrive.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl text-sm transition-all" style={{ background: '#F91750' }}>
            Get Started Today <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>
    </>
  )
}
