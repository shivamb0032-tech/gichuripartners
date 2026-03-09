'use client'
import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faHeadset } from '@fortawesome/free-solid-svg-icons'

const contactItems = [
  { Icon: FaPhoneAlt, label: 'Phone', val: '+91 98765 43210', sub: 'Mon–Sat, 9am–7pm' },
  { Icon: FaEnvelope, label: 'Email', val: 'info@taxproca.com', sub: 'Response within 2 hours' },
  { Icon: FaMapMarkerAlt, label: 'Offices', val: 'Mumbai | Delhi | Bangalore', sub: 'Walk-in welcome' },
  { Icon: FaWhatsapp, label: 'WhatsApp', val: '+91 98765 43210', sub: 'Chat with our CA now' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Contact' }]} badge="Get In Touch" title="Talk to Our Expert CA Team" subtitle="Have questions? Book a free 30-minute consultation. We respond within 2 business hours." />

      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider" style={{ background: 'rgba(249,23,80,0.08)', color: '#F91750' }}>
              <FontAwesomeIcon icon={faHeadset} /> Contact Info
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>We're Here to Help</h2>
            <p className="text-gray-500 mb-10 leading-relaxed">Whether you need help with GST registration, company incorporation, or complex tax planning — our team of qualified CAs is ready to assist.</p>
            <div className="space-y-4">
              {contactItems.map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,rgba(249,23,80,0.1),rgba(39,50,119,0.1))' }}>
                    <c.Icon style={{ color: '#F91750' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#273277' }}>{c.label}</p>
                    <p className="text-gray-900 font-semibold text-sm mt-0.5">{c.val}</p>
                    <p className="text-gray-400 text-xs">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(249,23,80,0.1)' }}>
                  <FaCheckCircle className="text-3xl" style={{ color: '#F91750' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Message Sent!</h3>
                <p className="text-gray-500 text-sm">Our CA will contact you within 2 business hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <FontAwesomeIcon icon={faCalendarCheck} style={{ color: '#F91750' }} />
                  Book Free Consultation
                </h3>
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#273277' }}>Full Name *</label>
                      <input required type="text" placeholder="Rahul Sharma" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none text-gray-900 transition-colors" style={{ '--focus-border': '#F91750' }} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#273277' }}>Phone *</label>
                      <input required type="tel" placeholder="+91 98765 43210" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none text-gray-900" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#273277' }}>Email Address *</label>
                    <input required type="email" placeholder="rahul@company.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none text-gray-900" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#273277' }}>Service Required</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none text-gray-700" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      <option value="">Select a service</option>
                      <option>GST Registration</option>
                      <option>Company Registration</option>
                      <option>Income Tax Filing</option>
                      <option>Trademark Registration</option>
                      <option>Annual Compliance</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#273277' }}>Message</label>
                    <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none text-gray-900 resize-none" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl text-sm transition-colors" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                    <FontAwesomeIcon icon={faCalendarCheck} /> Book Free Consultation
                  </button>
                  <p className="text-center text-xs text-gray-400">No spam. We respect your privacy.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
