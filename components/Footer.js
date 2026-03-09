"use client";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faChevronRight,
  faShieldAlt,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const footerLinks = {
  Advisory: [
    { label: "Tax Advisory", href: "/" },
    { label: "KRA Tax Agent", href: "/" },
    { label: "Payroll Services", href: "/" },
    { label: "Auditing Services", href: "/" },
    { label: "Accounting Services", href: "/" },
    { label: "Business Registration", href: "/" },
    { label: "Bookkeeping Services", href: "/" },
  ],
  "KRA Services": [
    { label: "KRA Audit", href: "/" },
    { label: "Tax Appeal", href: "/" },
    { label: "Tax Compliance", href: "/" },
    { label: "KRA Assessments", href: "/" },
    { label: "KRA Waiver Letter", href: "/" },
    { label: "E-tims Registration", href: "/" },
    { label: "KRA Pin Registration", href: "/" },
  ],
  "Return Filing": [
    { label: "iTax Return", href: "/" },
    { label: "Income Tax Returns", href: "/" },
    { label: "Turnover Tax Returns", href: "/" },
    { label: "Monthly Rental Income", href: "/" },
    { label: "Capital Gains Tax return", href: "/" },
    { label: "Value Added Tax Returns", href: "/" },
    { label: "Digital Service Tax Returns", href: "/" },
  ],
  "Our Firm": [
    { label: "Blogs", href: "/" },
    { label: "About Us", href: "/" },
    { label: "Tax News", href: "/" },
    { label: "Privacy Policy", href: "/" },
    { label: "Appointment", href: "/" },
    { label: "PAYE Calculator", href: "/" },
    { label: "digital service tax returns", href: "/" },
    { label: "monthly rental income", href: "/" },
  ],
};

const socials = [
  { Icon: FaFacebookF, href: "#" },
  { Icon: FaTwitter, href: "#" },
  { Icon: FaLinkedinIn, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaYoutube, href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#edeeef" }} className="text-gray-400">
      {/* CTA Strip */}
      {/* <div style={{ background: 'linear-gradient(135deg, #273277 0%, #1b2357 100%)' }} className="px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 mx-auto max-w-7xl md:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Get Started?
            </h3>
            <p className="mt-1" style={{ color: '#a5b4fc' }}>Talk to our expert CA team — free first consultation.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-colors rounded-xl hover:opacity-90" style={{ background: '#F91750' }}>
              <FaArrowRight className="text-xs" /> Book Free Consultation
            </Link>
            <Link href="tel:+919876543210" className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-colors border-2 rounded-xl hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
              <FaPhoneAlt className="text-xs" /> Call Now
            </Link>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="px-4 py-10 mx-auto max-w-7xl md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <Image
                src="/assets/logos/Gichuri-Partners-logo-version-3.png" 
                alt="TaxProCA Logo"
                width={160}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
            {/* <p className="mb-6 text-sm leading-relaxed text-gray-100">
              India's trusted CA & Tax consulting platform. Serving 10,000+ clients across the country since 2010.
            </p> */}

            {/* Contact */}
            <div className="mb-6 space-y-3">
              <a
                href="mailto:info@taxproca.com"
                className="flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-gray-700"
              >
                <FaEnvelope
                  style={{ color: "#F91750" }}
                  className="flex-shrink-0"
                />
                info@taxproca.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-gray-700"
              >
                <FaPhoneAlt
                  style={{ color: "#F91750" }}
                  className="flex-shrink-0"
                />
                +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-gray-700"
              >
                <FaWhatsapp
                  style={{ color: "#F91750" }}
                  className="flex-shrink-0"
                />
                WhatsApp Us
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaMapMarkerAlt
                  style={{ color: "#F91750" }}
                  className="flex-shrink-0"
                />
                Mumbai · Delhi · Bangalore
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-3 mb-6">
              <div
                className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg"
                style={{
                  background: "rgba(249,23,80,0.1)",
                  color: "#F91750",
                  border: "1px solid rgba(249,23,80,0.2)",
                }}
              >
                <FontAwesomeIcon icon={faShieldAlt} className="text-xs" /> ICAI
              </div>
              <div
                className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg"
                style={{
                  background: "rgba(39,50,119,0.3)",
                  color: "#123453",
                  border: "1px solid rgba(39,50,119,0.5)",
                }}
              >
                <FontAwesomeIcon icon={faAward} className="text-xs" /> ISO
              </div>
            </div>

            {/* Socials — CSS hover via Tailwind, no JS handlers */}
            <div className="flex gap-2">
              {socials.map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-all duration-200 hover:text-white hover:bg-[#F91750]"
                  style={{ background: "#d4103f" }}
                >
                  <Icon className="text-xs" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-700 uppercase">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-gray-700 group"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-xs group-hover:text-[#F91750] transition-colors"
                        style={{ color: "rgba(249,23,80,0.5)" }}
                      />
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
      </div>
       {/* Bottom Bar */}
        <div
          className="flex flex-col items-center justify-between bg-[#123453] gap-4 p-5 text-sm text-white mt-14 md:flex-row"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
            <Link href="/faq" className="transition-colors hover:text-white">
              FAQ
            </Link>
          </div>
          <p>Made with ❤️ in India</p>
        </div>
    </footer>
  );
}
