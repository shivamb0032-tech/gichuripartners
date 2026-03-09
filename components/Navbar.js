"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaPhoneAlt,
  FaAngleRight,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faHeadset,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const menuData = [
  { label: "Home", href: "/" },
  { label: "Auditing", href: "/" },
  { label: "Accounting", href: "/" },
  { label: "Bookkeeping", href: "/" },
  { label: "Tax Advisory", href: "/" },
  { label: "About Us", href: "/" },
  { label: "News & Media", href: "/" },
  { label: "Blogs", href: "/" },
  // {
  //   label: 'Business Registration', href: '/business-registration',
  //   dropdown: [
  //     { label: 'Private Limited Company', href: '/business-registration/private-limited-company' },
  //     { label: 'LLP Registration', href: '/business-registration/llp-registration' },
  //     { label: 'OPC Registration', href: '/business-registration/opc-registration' },
  //     { label: 'Partnership Firm', href: '/business-registration' },
  //     { label: 'Sole Proprietorship', href: '/business-registration' },
  //     { label: 'Startup Registration', href: '/business-registration' },
  //   ],
  // },
  // {
  //   label: 'Tax & Compliance', href: '/tax-compliance',
  //   dropdown: [
  //     { label: 'GST Registration', href: '/tax-compliance/gst-registration' },
  //     { label: 'GST Filing', href: '/tax-compliance/gst-filing' },
  //     { label: 'Income Tax Filing', href: '/tax-compliance/income-tax-filing' },
  //     { label: 'TDS Return Filing', href: '/tax-compliance' },
  //     { label: 'Annual Compliance', href: '/tax-compliance' },
  //   ],
  // },
  // {
  //   label: 'Trademark & IP', href: '/trademark-ip',
  //   dropdown: [
  //     { label: 'Trademark Registration', href: '/trademark-ip/trademark-registration' },
  //     { label: 'Trademark Search', href: '/trademark-ip' },
  //     { label: 'Copyright Registration', href: '/trademark-ip' },
  //     { label: 'Patent Registration', href: '/trademark-ip' },
  //   ],
  // },
  // {
  //   label: 'Legal Services', href: '/legal-services',
  //   dropdown: [
  //     { label: 'Legal Notice', href: '/legal-services/legal-notice' },
  //     { label: 'Property Lawyer', href: '/legal-services' },
  //     { label: 'Corporate Lawyer', href: '/legal-services' },
  //     { label: 'Consumer Complaint', href: '/legal-services' },
  //   ],
  // },
  // {
  //   label: 'Documentation', href: '/documentation',
  //   dropdown: [
  //     { label: 'Contracts', href: '/documentation/contracts' },
  //     { label: 'Rental Agreement', href: '/documentation' },
  //     { label: 'Privacy Policy', href: '/documentation' },
  //     { label: 'Terms & Conditions', href: '/documentation' },
  //   ],
  // },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };
  const toggleMobileItem = (label) =>
    setMobileExpanded(mobileExpanded === label ? null : label);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-xl border-b border-gray-100" : "bg-transparent"}`}
    >
      {/* Top strip */}
      <div
        style={{ background: "#273277" }}
        className={`transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "opacity-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <p className="text-xs text-blue-200 flex items-center gap-2">
            <FontAwesomeIcon icon={faHeadset} className="text-xs" />
            Free Consultation:{" "}
            <span style={{ color: "#F91750" }} className="font-semibold">
              +91 98765 43210
            </span>
          </p>
          <p className="text-xs text-blue-200">Mon–Sat: 9am – 7pm IST</p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #F91750, #273277)' }}>
              <FontAwesomeIcon icon={faCalculator} className="text-white text-base" />
            </div>
            <div className="leading-tight">
              <div className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                TaxPro<span style={{ color: '#F91750' }}>CA</span>
              </div>
              <div className={`text-xs transition-colors ${scrolled ? 'text-gray-400' : 'text-blue-200'}`}>Chartered Accountants</div>
            </div>
          </Link> */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/assets/logos/Gichuri-Partners-logo-version-3.png"
              alt="Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5">
            {menuData.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.label)
                }
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${scrolled ? "text-gray-700 hover:text-[#F91750] hover:bg-red-50" : "text-gray-200 hover:text-white hover:bg-white/10"}`}
                >
                  {item.label}
                  {item.dropdown && (
                    <FaChevronDown
                      className={`text-[10px] transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-58 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden dropdown-enter"
                    style={{ width: "230px" }}
                  >
                    <div
                      className="h-1 w-full"
                      style={{
                        background: "linear-gradient(90deg, #F91750, #273277)",
                      }}
                    />
                    <div className="py-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 transition-colors duration-150 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <FaAngleRight
                            className="text-xs flex-shrink-0 transition-colors"
                            style={{ color: "#F91750" }}
                          />
                          <span className="group-hover:text-[#F91750] transition-colors">
                            {sub.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <Link href="/login"
              className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border transition-all duration-200 ${scrolled ? 'text-gray-700 border-gray-200 hover:border-[#273277] hover:text-[#273277]' : 'text-gray-200 border-white/30 hover:border-white hover:text-white'}`}
            >
              <FaUserCircle /> Login
            </Link> */}
            <Link
              href="/contact"
              className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #F91750, #d4103f)",
              }}
            >
              <FontAwesomeIcon icon={faPercent} className="text-sm" />
              PAYE Calculator
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 rounded-xl text-xl transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {menuData.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileItem(item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 rounded-xl transition-colors"
                      style={
                        mobileExpanded === item.label
                          ? { background: "#fff5f7", color: "#F91750" }
                          : {}
                      }
                    >
                      {item.label}
                      <FaChevronDown
                        className={`text-xs transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        style={{ color: "#F91750" }}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div
                        className="ml-4 mt-1 space-y-1 pl-4"
                        style={{ borderLeft: "2px solid #F91750" }}
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center gap-2 py-2 text-sm text-gray-600 transition-colors hover:text-[#F91750]"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileExpanded(null);
                            }}
                          >
                            <FaAngleRight
                              className="text-xs"
                              style={{ color: "#F91750" }}
                            />{" "}
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-xl transition-colors hover:bg-red-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border rounded-xl transition-colors text-gray-700"
                style={{ borderColor: "#273277", color: "#273277" }}
                onClick={() => setMobileOpen(false)}
              >
                <FaUserCircle /> Login
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white rounded-xl transition-colors"
                style={{
                  background: "linear-gradient(135deg,#F91750,#d4103f)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                <FontAwesomeIcon icon={faHeadset} /> Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
