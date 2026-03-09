'use client'
import Link from 'next/link'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaArrowRight, FaWhatsapp } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faChevronRight, faShieldAlt, faAward } from '@fortawesome/free-solid-svg-icons'

const footerLinks = {
  'Business Registration': [
    { label: 'Private Limited Company', href: '/business-registration/private-limited-company' },
    { label: 'LLP Registration', href: '/business-registration/llp-registration' },
    { label: 'OPC Registration', href: '/business-registration/opc-registration' },
    { label: 'Partnership Firm', href: '/business-registration' },
    { label: 'Startup Registration', href: '/business-registration' },
  ],
  'Tax & Compliance': [
    { label: 'GST Registration', href: '/tax-compliance/gst-registration' },
    { label: 'GST Filing', href: '/tax-compliance/gst-filing' },
    { label: 'Income Tax Filing', href: '/tax-compliance/income-tax-filing' },
    { label: 'TDS Return Filing', href: '/tax-compliance' },
    { label: 'Annual Compliance', href: '/tax-compliance' },
  ],
  'Legal & IP': [
    { label: 'Trademark Registration', href: '/trademark-ip/trademark-registration' },
    { label: 'Legal Notice', href: '/legal-services/legal-notice' },
    { label: 'Property Lawyer', href: '/legal-services' },
    { label: 'Contracts', href: '/documentation/contracts' },
    { label: 'Rental Agreement', href: '/documentation' },
  ],
  'Company': [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
}

const socials = [
  { Icon: FaFacebookF, href: '#' },
  { Icon: FaTwitter, href: '#' },
  { Icon: FaLinkedinIn, href: '#' },
  { Icon: FaInstagram, href: '#' },
  { Icon: FaYoutube, href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0d1230' }} className="text-gray-400">

      {/* CTA Strip */}
      <div style={{ background: 'linear-gradient(135deg, #273277 0%, #1b2357 100%)' }} className="px-4 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Get Started?
            </h3>
            <p className="mt-1" style={{ color: '#a5b4fc' }}>Talk to our expert CA team — free first consultation.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/contact" className="flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm transition-colors text-white hover:opacity-90" style={{ background: '#F91750' }}>
              <FaArrowRight className="text-xs" /> Book Free Consultation
            </Link>
            <Link href="tel:+919876543210" className="flex items-center gap-2 border-2 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
              <FaPhoneAlt className="text-xs" /> Call Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#F91750,#273277)' }}>
                <FontAwesomeIcon icon={faCalculator} className="text-white text-base" />
              </div>
              <span className="text-white font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                TaxPro<span style={{ color: '#F91750' }}>CA</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              India's trusted CA & Tax consulting platform. Serving 10,000+ clients across the country since 2010.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a href="mailto:info@taxproca.com" className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors">
                <FaEnvelope style={{ color: '#F91750' }} className="flex-shrink-0" />
                info@taxproca.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors">
                <FaPhoneAlt style={{ color: '#F91750' }} className="flex-shrink-0" />
                +91 98765 43210
              </a>
              <a href="https://wa.me/919876543210" className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors">
                <FaWhatsapp style={{ color: '#F91750' }} className="flex-shrink-0" />
                WhatsApp Us
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <FaMapMarkerAlt style={{ color: '#F91750' }} className="flex-shrink-0" />
                Mumbai · Delhi · Bangalore
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-3 mb-6">
              <div className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg" style={{ background: 'rgba(249,23,80,0.1)', color: '#F91750', border: '1px solid rgba(249,23,80,0.2)' }}>
                <FontAwesomeIcon icon={faShieldAlt} className="text-xs" /> ICAI
              </div>
              <div className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg" style={{ background: 'rgba(39,50,119,0.3)', color: '#a5b4fc', border: '1px solid rgba(39,50,119,0.5)' }}>
                <FontAwesomeIcon icon={faAward} className="text-xs" /> ISO
              </div>
            </div>

            {/* Socials — CSS hover via Tailwind, no JS handlers */}
            <div className="flex gap-2">
              {socials.map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 transition-all duration-200 hover:text-white hover:bg-[#F91750]"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <Icon className="text-xs" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group">
                      <FontAwesomeIcon icon={faChevronRight} className="text-xs group-hover:text-[#F91750] transition-colors" style={{ color: 'rgba(249,23,80,0.5)' }} />
                      <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p>© {new Date().getFullYear()} TaxProCA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  )
}
