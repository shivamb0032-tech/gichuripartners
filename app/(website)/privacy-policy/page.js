import PageHeader from '@/components/PageHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'

const sections = [
  ['1. Information We Collect', 'We collect information you provide directly to us, such as when you create an account, request a service, or contact us. This includes name, email address, phone number, PAN details, business information, and financial documents necessary to provide our services.'],
  ['2. How We Use Your Information', 'We use the information we collect to provide, maintain, and improve our services; process transactions; send you service-related notifications; communicate with you about products, services, and events; and comply with legal obligations under Indian laws.'],
  ['3. Information Sharing', 'We do not sell, trade, or transfer your personal information to outside parties. We may share information with trusted third parties who assist us in operating our business, provided they agree to keep this information confidential.'],
  ['4. Data Security', 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest.'],
  ['5. Data Retention', 'We retain your information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law — typically 7 years for tax and accounting records.'],
  ['6. Your Rights', 'You have the right to access, correct, or delete your personal data. You can also object to processing and request data portability. Contact us at privacy@taxproca.com for any such requests.'],
  ['7. Cookies', 'We use cookies to enhance your experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.'],
  ['8. Contact Us', 'For questions about this Privacy Policy, please contact us at privacy@taxproca.com or call +91 98765 43210.'],
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Privacy Policy' }]} badge="Legal" title="Privacy Policy" subtitle="Last updated: December 1, 2024" />
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-2xl mb-10" style={{ background: 'linear-gradient(135deg,rgba(249,23,80,0.06),rgba(39,50,119,0.06))', border: '1px solid rgba(249,23,80,0.15)' }}>
            <FontAwesomeIcon icon={faShieldHalved} className="text-2xl" style={{ color: '#F91750' }} />
            <p className="text-sm text-gray-600">Your privacy is important to us. We are committed to protecting your personal data in accordance with applicable Indian laws.</p>
          </div>
          <div className="space-y-8 text-gray-600 leading-relaxed text-sm">
            {sections.map(([title, content]) => (
              <div key={title}>
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif', borderLeft: '3px solid #F91750', paddingLeft: '12px' }}>{title}</h2>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
