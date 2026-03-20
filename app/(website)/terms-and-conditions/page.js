import PageHeader from '@/components/PageHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'

const sections = [
  ['1. Acceptance of Terms', 'By accessing and using TaxProCA services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.'],
  ['2. Services', 'TaxProCA provides CA consulting, tax filing, business registration, trademark, and legal documentation services. All services are subject to applicable Indian laws and regulations, including the Companies Act, Income Tax Act, and GST Act.'],
  ['3. Client Responsibilities', 'You are responsible for providing accurate and complete information, responding promptly to requests for additional documentation, and keeping your account credentials secure.'],
  ['4. Fees and Payment', 'Service fees are as quoted at the time of engagement. Government fees, stamp duties, and other statutory charges are additional. All professional fees are non-refundable once work has commenced.'],
  ['5. Confidentiality', 'We maintain strict confidentiality of all client information in accordance with ICAI guidelines and applicable laws. Your financial and personal data will never be shared without your consent.'],
  ['6. Limitation of Liability', 'TaxProCA liability is limited to the fees paid for the specific service. We are not liable for indirect, consequential, or incidental damages arising from the use of our services.'],
  ['7. Governing Law', 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.'],
  ['8. Contact', 'For questions about these Terms, contact legal@taxproca.com or write to: TaxProCA, 100 Business Park, BKC, Mumbai - 400051.'],
]

export default function TermsPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Terms & Conditions' }]} badge="Legal" title="Terms & Conditions" subtitle="Last updated: December 1, 2024" />
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-2xl mb-10" style={{ background: 'linear-gradient(135deg,rgba(39,50,119,0.06),rgba(249,23,80,0.06))', border: '1px solid rgba(39,50,119,0.15)' }}>
            <FontAwesomeIcon icon={faFileContract} className="text-2xl" style={{ color: '#273277' }} />
            <p className="text-sm text-gray-600">Please read these terms carefully before using our services. By using TaxProCA services, you agree to be bound by these terms.</p>
          </div>
          <div className="space-y-8 text-gray-600 leading-relaxed text-sm">
            {sections.map(([title, content]) => (
              <div key={title}>
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif', borderLeft: '3px solid #273277', paddingLeft: '12px' }}>{title}</h2>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
