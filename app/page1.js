'use client'
import { useState } from 'react'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import { FaArrowRight, FaPhone, FaStar, FaCheckCircle, FaQuoteLeft, FaChevronDown, FaChevronRight, FaWhatsapp } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding, faChartLine, faTrademark, faGavel, faFileContract, faMagnifyingGlass,
  faUserGraduate, faBolt, faLock, faMoneyBillWave, faMobileScreenButton, faHandshake,
  faComments, faFolderOpen, faGears, faMedal, faShieldHalved, faRocket,
  faHeadset, faCalendarCheck, faCalculator, faCheckDouble, faStar
} from '@fortawesome/free-solid-svg-icons'

const stats = [
  { number: '10,000+', label: 'Happy Clients' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Expert CAs' },
  { number: '99%', label: 'Success Rate' },
]

const services = [
  { faIcon: faBuilding, title: 'Business Registration', description: 'Register your business entity with complete legal compliance and expert guidance from day one.', href: '/business-registration', items: ['Private Limited Company', 'LLP Registration', 'Startup India'] },
  { faIcon: faChartLine, title: 'Tax & Compliance', description: 'End-to-end GST, Income Tax, and TDS filing services to keep your business compliant and penalty-free.', href: '/tax-compliance', items: ['GST Registration & Filing', 'Income Tax Returns', 'TDS Compliance'] },
  { faIcon: faTrademark, title: 'Trademark & IP', description: 'Protect your brand identity with trademark registration, copyright, and patent filing services.', href: '/trademark-ip', items: ['Trademark Registration', 'Copyright Filing', 'Patent Registration'] },
  { faIcon: faGavel, title: 'Legal Services', description: 'Expert legal advice and representation for businesses and individuals across all domains.', href: '/legal-services', items: ['Legal Notice', 'Corporate Lawyer', 'Consumer Complaint'] },
  { faIcon: faFileContract, title: 'Documentation', description: 'Professionally drafted legal documents and agreements tailored to your specific requirements.', href: '/documentation', items: ['Business Contracts', 'Rental Agreements', 'Policy Drafting'] },
  { faIcon: faMagnifyingGlass, title: 'Audit & Assurance', description: 'Statutory audits, internal audits, and financial due diligence by experienced chartered accountants.', href: '/services', items: ['Statutory Audit', 'Internal Audit', 'Due Diligence'] },
]

const whyUs = [
  { faIcon: faUserGraduate, title: 'Expert Chartered Accountants', desc: 'Our team of 50+ qualified CAs brings decades of combined expertise across industries.' },
  { faIcon: faBolt, title: 'Fast Turnaround', desc: 'Most filings and registrations completed within 3-7 business days, guaranteed.' },
  { faIcon: faLock, title: '100% Secure & Confidential', desc: 'Your financial data is protected with bank-grade security and strict confidentiality protocols.' },
  { faIcon: faMoneyBillWave, title: 'Transparent Pricing', desc: 'No hidden charges. Clear, upfront pricing with flexible payment plans available.' },
  { faIcon: faMobileScreenButton, title: 'Digital-First Approach', desc: 'Complete services online — upload documents, track status, download reports from anywhere.' },
  { faIcon: faHandshake, title: 'Dedicated Account Manager', desc: 'Every client gets a personal CA assigned for consistent, personalized service.' },
]

const process = [
  { step: '01', faIcon: faComments, title: 'Free Consultation', desc: 'Book a free 30-minute call with our expert CA to understand your requirements.' },
  { step: '02', faIcon: faFolderOpen, title: 'Document Collection', desc: 'We provide a clear checklist. Upload documents securely from anywhere.' },
  { step: '03', faIcon: faGears, title: 'Expert Processing', desc: 'Our team processes your application with precision on government portals.' },
  { step: '04', faIcon: faMedal, title: 'Delivery & Support', desc: 'Receive your certificates/filings with ongoing support from your dedicated CA.' },
]

const testimonials = [
  { name: 'Rahul Sharma', role: 'Founder, TechStartup Pvt Ltd', content: 'TaxProCA registered our company in just 5 days! The process was seamless. Highly recommend their services for any startup.', rating: 5, avatar: 'RS' },
  { name: 'Priya Mehta', role: 'Director, Mehta Exports', content: 'Been using their GST and compliance services for 3 years. Never missed a deadline, always proactive. Worth every rupee.', rating: 5, avatar: 'PM' },
  { name: 'Arun Patel', role: 'Owner, Patel Retail Chains', content: 'Got our trademark registered and protected our brand beautifully. The team kept us informed at every step. Excellent!', rating: 5, avatar: 'AP' },
]

const faqs = [
  { q: 'How long does Private Limited Company registration take?', a: 'Typically 7-10 business days from document submission to receiving your incorporation certificate, subject to MCA processing times.' },
  { q: 'What documents are required for GST registration?', a: 'PAN card, Aadhaar, business address proof, bank statement, and business registration certificate. We guide you through the complete list.' },
  { q: 'Do you provide services across all of India?', a: 'Yes! We operate pan-India with offices in Mumbai, Delhi, and Bangalore. All services are available 100% online.' },
  { q: 'What is the cost for Income Tax filing?', a: 'Plans start from ₹999 for individuals. Business and corporate plans are customized based on complexity. First consultation is free.' },
]

const trustBadges = [
  { faIcon: faShieldHalved, label: 'ICAI Registered' },
  { faIcon: faMedal, label: 'ISO Certified' },
  { faIcon: faRocket, label: '15+ Years' },
  { faIcon: faCheckDouble, label: 'Pan India' },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #e8e9f0 0%, #273277 50%, #180e33 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#F91750' }} />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full blur-2xl opacity-10" style={{ background: '#273277' }} />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #F91750 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-6 border" style={{ background: 'rgba(249,23,80,0.15)', color: '#F91750', borderColor: 'rgba(249,23,80,0.3)' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#F91750' }} />
                India's #1 CA & Tax Consulting Platform
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Expert{' '}
                <span style={{ background: 'linear-gradient(135deg,#F91750,#ff6b8a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Tax & CA</span>
                <br />
                Services for{' '}
                <span className="italic" style={{ color: '#a5b4fc' }}>Your Business</span>
              </h1>

              <p className="text-lg leading-relaxed mb-10 max-w-xl" style={{ color: '#94a3b8' }}>
                From business registration to GST filing, trademark protection to legal compliance — we handle everything so you can focus on growing your business.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact"
                  className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg text-sm"
                  style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)', boxShadow: '0 8px 30px rgba(249,23,80,0.35)' }}
                >
                  <FontAwesomeIcon icon={faCalendarCheck} /> Book Free Consultation
                </Link>
                <Link href="/services"
                  className="flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-sm border"
                  style={{ color: '#a5b4fc', borderColor: 'rgba(165,180,252,0.3)' }}
                >
                  View All Services <FaChevronRight className="text-xs" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6">
                {trustBadges.map((b) => (
                  <div key={b.label} className="flex items-center gap-2 text-xs" style={{ color: '#64748b' }}>
                    <FontAwesomeIcon icon={b.faIcon} style={{ color: '#F91750' }} />
                    {b.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Quick Inquiry Card */}
            <div className="hidden lg:block">
              <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#F91750' }}>{s.number}</div>
                      <div className="text-sm" style={{ color: '#64748b' }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quick Form */}
                <div className="rounded-2xl p-6" style={{ background: 'rgba(249,23,80,0.08)', border: '1px solid rgba(249,23,80,0.15)' }}>
                  <p className="text-white font-semibold mb-4 text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faHeadset} style={{ color: '#F91750' }} />
                    Quick Inquiry — Get Free Callback
                  </p>
                  <div className="space-y-3">
                    <input type="text" placeholder="Your Name" className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }} />
                    <input type="tel" placeholder="Phone Number" className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }} />
                    <select className="w-full rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <option value="">Select Service</option>
                      <option>GST Registration</option>
                      <option>Company Registration</option>
                      <option>Income Tax Filing</option>
                      <option>Trademark Registration</option>
                    </select>
                    <button className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl transition-colors text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                      <FaPhone className="text-xs" /> Get Free Callback
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl transition-colors text-sm" style={{ background: 'linear-gradient(135deg,#273277,#1b2357)' }}>
                      <FaWhatsapp /> Chat on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider" style={{ background: 'rgba(249,23,80,0.08)', color: '#F91750' }}>
              <FontAwesomeIcon icon={faGears} /> Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Everything Your Business Needs
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Comprehensive CA and legal services under one roof — handled by qualified professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => <ServiceCard key={svc.title} {...svc} />)}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider" style={{ background: 'rgba(39,50,119,0.08)', color: '#273277' }}>
                <FontAwesomeIcon icon={faShieldHalved} /> Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                The TaxProCA Difference
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                We combine deep financial expertise with modern technology to deliver results that matter — fast, accurate, and at a price that's fair.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                style={{ background: 'linear-gradient(135deg,#273277,#1b2357)' }}
              >
                Learn More About Us <FaArrowRight className="text-xs" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-all duration-300" style={{ '--hover-border': '#273277' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'linear-gradient(135deg, rgba(249,23,80,0.1), rgba(39,50,119,0.1))' }}>
                    <FontAwesomeIcon icon={item.faIcon} style={{ color: '#273277' }} className="text-lg" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #273277 0%, #1b2357 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#F91750' }}>{s.number}</div>
                <div className="text-sm" style={{ color: '#a5b4fc' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider" style={{ background: 'rgba(249,23,80,0.08)', color: '#F91750' }}>
              <FontAwesomeIcon icon={faGears} /> How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Simple 4-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(249,23,80,0.12)' }}>{p.step}</div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                    <FontAwesomeIcon icon={p.faIcon} className="text-white text-base" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{p.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 items-center justify-center rounded-full" style={{ background: '#F91750' }}>
                    <FaChevronRight className="text-white text-xs" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider" style={{ background: 'rgba(39,50,119,0.08)', color: '#273277' }}>
              <FontAwesomeIcon icon={faStar} /> Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 card-hover">
                <FaQuoteLeft className="text-2xl mb-4" style={{ color: 'rgba(249,23,80,0.2)' }} />
                <div className="flex items-center gap-1 mb-4">
                  {Array(t.rating).fill(0).map((_, i) => <FaStar key={i} style={{ color: '#F91750' }} className="text-sm" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.content}"</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: 'linear-gradient(135deg,#F91750,#273277)' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider" style={{ background: 'rgba(249,23,80,0.08)', color: '#F91750' }}>
              FAQ
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-pink-200 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-900 font-medium text-sm transition-colors"
                >
                  <span>{faq.q}</span>
                  <FaChevronDown className={`flex-shrink-0 text-sm transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: '#F91750' }} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#273277' }}>
              View all FAQs <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #273277 0%, #1b2357 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #F91750 1px, transparent 0)', backgroundSize: '36px 36px' }} />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#F91750', transform: 'translate(20%,-20%)' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <FontAwesomeIcon icon={faRocket} className="text-4xl mb-4" style={{ color: '#F91750' }} />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Start Your Journey Today
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: '#a5b4fc' }}>
            Join 10,000+ businesses who trust TaxProCA for their financial and legal needs. First consultation is absolutely free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact"
              className="flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-sm text-white transition-all duration-200 shadow-xl"
              style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)', boxShadow: '0 8px 30px rgba(249,23,80,0.4)' }}
            >
              <FontAwesomeIcon icon={faCalendarCheck} /> Book Free Consultation
            </Link>
            <Link href="tel:+919876543210"
              className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-sm border-2 hover:bg-white/10 transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              <FaPhone className="text-xs" /> +91 98765 43210
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
