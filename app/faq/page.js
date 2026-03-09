'use client'
import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { FaChevronDown } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

const faqs = {
  'Business Registration': [
    { q: 'How long does Private Limited Company registration take?', a: 'Typically 7-10 business days from document submission to receiving your Certificate of Incorporation from MCA.' },
    { q: 'What is the minimum capital required for a Pvt Ltd?', a: 'There is no minimum paid-up capital requirement after the Companies Act amendment. You can start with ₹1.' },
    { q: 'Can a foreign national be a director in an Indian company?', a: 'Yes, but at least one director must be a resident of India (stayed for 182+ days in the previous calendar year).' },
  ],
  'GST & Tax': [
    { q: 'When is GST registration mandatory?', a: 'GST registration is mandatory when your annual turnover exceeds ₹20 lakhs (₹10 lakhs for NE and hill states) or if you make inter-state supplies.' },
    { q: 'What happens if I miss the GST filing deadline?', a: 'A late fee of ₹50 per day (₹20 for nil returns) is charged. Interest at 18% per annum is also levied on the tax amount.' },
    { q: 'Can I file ITR after the deadline?', a: 'Yes, you can file a belated return until December 31 of the assessment year with a late fee up to ₹5,000.' },
  ],
  'Trademark': [
    { q: 'How long does trademark registration take in India?', a: 'Initial TM number is received in 2-3 days. Full registration certificate typically takes 18-24 months depending on objections.' },
    { q: 'Can I use ™ symbol before registration?', a: 'Yes, you can use ™ as soon as you apply. The ® symbol can only be used after the trademark is registered.' },
  ],
  'Our Services': [
    { q: 'Do you serve clients across all of India?', a: 'Yes, all our services are 100% online. We serve clients across all 28 states and 8 union territories.' },
    { q: 'What payment methods do you accept?', a: 'We accept UPI, net banking, credit/debit cards, and EMI options for larger service packages.' },
    { q: 'Is the first consultation really free?', a: 'Absolutely! The first 30-minute consultation with our CA expert is completely free with no obligations.' },
  ],
}

export default function FAQPage() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'FAQ' }]} badge="FAQ" title="Frequently Asked Questions" subtitle="Find answers to common questions about our services, processes, and pricing." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {Object.entries(faqs).map(([cat, qs]) => (
            <div key={cat} className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                <FontAwesomeIcon icon={faCircleQuestion} style={{ color: '#F91750' }} /> {cat}
              </h2>
              <div className="space-y-3">
                {qs.map((faq, i) => {
                  const key = cat + i
                  return (
                    <div key={key} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-pink-200 transition-colors">
                      <button onClick={() => setOpen(open === key ? null : key)} className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-900 font-medium text-sm">
                        {faq.q}
                        <FaChevronDown className={`text-sm flex-shrink-0 transition-transform ${open === key ? 'rotate-180' : ''}`} style={{ color: '#F91750' }} />
                      </button>
                      {open === key && <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>{faq.a}</div>}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
