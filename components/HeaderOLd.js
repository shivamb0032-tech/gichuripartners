"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faXmark,
  faUserCircle,
  faPhone,
  faAngleRight,
  faEnvelope,
  faHeadset,
  faPercent,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const menuData = [
  { label: "Home", href: "/" },
  { label: "Auditing", href: "/auditing-services-in-kenya" },
  { label: "Accounting", href: "/accounting-services-in-kenya" },
  { label: "Bookkeeping", href: "/bookkeeping-services-in-kenya" },
  { label: "Tax Advisory", href: "/tax-advisory-services-in-kenya" },
  { label: "About Us", href: "/about-us" },
  { label: "News & Media", href: "/news-media" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact us", href: "/contact-us" },
];

const socialLinks = [
  {
    icon: faFacebookF,
    href: "https://www.facebook.com/gichuripartners",
    label: "Facebook",
    color: "#1877F2",
  },
  {
    icon: faLinkedinIn,
    href: "https://ke.linkedin.com/in/gichuri-partners",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: faInstagram,
    href: "https://www.instagram.com/gichuripartners/",
    label: "Instagram",
    color: "#E1306C",
  },
  {
    icon: faXTwitter,
    href: "https://x.com/Gichuripartners",
    label: "X",
    color: "#000000",
  },
  { icon: faYoutube, href: "#", label: "YouTube", color: "#FF0000" },
  {
    icon: faWhatsapp,
    href: "https://wa.me/message/YT2LRK7BSP2VF1",
    label: "WhatsApp",
    color: "#25D366",
  },
];

export default function Navbar1() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const mobileNavRef = useRef(null);
  const desktopNavRef = useRef(null);
  const timeoutRef = useRef(null);
  const [navHeight, setNavHeight] = useState({ mobile: 152, desktop: 92 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setMobileOpen(false);
      setMobileExpanded(null);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
useEffect(() => {
  return () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };
}, []);

 useEffect(() => {
  const measure = () => {
    if (window.innerWidth < 1024 && mobileNavRef.current) {
      const h = mobileNavRef.current.getBoundingClientRect().height;
      if (h > 0) setNavHeight((p) => ({ ...p, mobile: h }));
    } else if (window.innerWidth >= 1024 && desktopNavRef.current) {
      const h = desktopNavRef.current.getBoundingClientRect().height;
      if (h > 0) setNavHeight((p) => ({ ...p, desktop: h }));
    }
  };

  const id = requestAnimationFrame(measure);
  window.addEventListener("resize", measure);

  return () => {
    cancelAnimationFrame(id);
    window.removeEventListener("resize", measure);
  };
}, [mobileOpen]);


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
    <>
      {/* Spacer */}
      <div className="block lg:hidden" style={{ height: navHeight.mobile }} />
      <div className="hidden lg:block" style={{ height: navHeight.desktop }} />

      {/* ── MOBILE NAVBAR (< lg) ── */}
      <div
        ref={mobileNavRef}
        className="fixed top-0 left-0 right-0 z-50 flex flex-col lg:hidden"
      >
        {/* Top info bar */}
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ background: "#123453" }}
        >
          <a
            href="mailto:info@gichuripartners.com"
            className="flex items-center gap-1.5 text-xs text-white font-medium truncate"
          >
            <span
              className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full"
              style={{ background: "#F91750" }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-[10px]"
              />
            </span>
            info@gichuripartners.com
          </a>
          <a
            href="tel:+254711827149"
            className="flex items-center gap-1.5 text-xs text-white font-medium"
          >
            <span
              className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full"
              style={{ background: "#F91750" }}
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white text-[10px]"
              />
            </span>
            +254 711 82 71 49
          </a>
        </div>

        {/* Logo bar */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: "#ffffff" }}
        >
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/assets/logos/Gichuri-Partners-logo-version-3.png"
              alt="Logo"
              width={130}
              height={38}
              className="object-contain w-auto h-10"
              priority
            />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-10 h-10 text-lg text-white transition-all duration-200 rounded-full shadow-md"
            style={{ background: "#d4103f" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        {/* CTA buttons row */}
        <div
          className="grid w-full grid-cols-3 gap-2 p-2 border-t "
          style={{ background: "#fff" }}
        >
          <a
            href="tel:+254711827149"
            className="flex flex-col bg-[#E81448] rounded-lg items-center justify-center gap-1 py-2 text-white text-xs font-semibold border   transition-colors"
          >
            <FontAwesomeIcon icon={faHeadset} className="text-base" />
            Talk to an Expert
          </a>
          <a
            href="tel:+254711827149"
            className="flex flex-col bg-[#E81448] rounded-lg items-center justify-center gap-1 py-2 text-white text-xs font-semibold border  transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
            WhatsApp
          </a>
          <a
            href="tel:+254711827149"
            className="flex flex-col bg-[#E81448] rounded-lg items-center justify-center gap-1 py-2 text-white text-xs font-semibold border  transition-colors"
          >
            <FontAwesomeIcon icon={faPercent} className="text-base" />
            PAYE Calculator
          </a>
        </div>

        {/* Slide-down menu */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {menuData.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileItem(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-700 transition-colors rounded-xl"
                        style={
                          mobileExpanded === item.label
                            ? { background: "#fff5f7", color: "#F91750" }
                            : {}
                        }
                      >
                        {item.label}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={`text-xs transition-transform ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                          style={{ color: "#F91750" }}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div
                          className="pl-4 mt-1 ml-4 space-y-1"
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
                              <FontAwesomeIcon
                                icon={faAngleRight}
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
                      className="block px-4 py-3 text-sm font-medium text-gray-700 transition-colors rounded-xl hover:bg-red-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* ── Social Media Icons ── */}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <p className="px-4 mb-3 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                  Follow Us
                </p>
                <div className="flex flex-wrap items-center gap-2 px-4">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center text-sm text-white transition-transform duration-200 rounded-full shadow-md w-9 h-9 hover:scale-110 active:scale-95"
                      style={{ background: s.color }}
                    >
                      <FontAwesomeIcon icon={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP NAVBAR (>= lg) ── */}
      <nav
        ref={desktopNavRef}
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "shadow-2xl -translate-y-0 scale-[1.00]" : "shadow-none"
        }`}
      >
        {/* Top strip — hamesha visible */}
        <div className="bg-[#123453]">
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
            <p className="flex items-center gap-2 text-xs text-blue-200">
              <FontAwesomeIcon icon={faHeadset} className="text-xs" />
              Free Consultation:{" "}
              <span style={{ color: "#F91750" }} className="font-semibold">
                +254 711 82 71 49
              </span>
            </p>
            <p className="text-xs text-blue-200">
              Monday-Friday : 8:00 – 18:00
            </p>
          </div>
        </div>

        {/* Menu row — white bg, #123453 text */}
        <div
          className={`bg-white transition-all duration-500 ${scrolled ? "border-b-2 border-[#123453]" : "border-b border-gray-100"}`}
        >
          <div className="px-4 mx-auto max-w-8xl md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center flex-shrink-0">
                <Image
                  src="/assets/logos/Gichuri-Partners-logo-version-3.png"
                  alt="Logo"
                  width={140}
                  height={40}
                  className="object-contain w-auto h-10"
                  priority
                />
              </Link>

              <div className="flex items-center gap-0.5">
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
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-[#123453] hover:text-[#F91750] hover:bg-red-50"
                    >
                      {item.label}
                      {item.dropdown && (
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={`text-[10px] transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {item.dropdown && activeDropdown === item.label && (
                      <div
                        className="absolute left-0 mt-2 overflow-hidden bg-white border border-gray-100 shadow-2xl top-full rounded-2xl"
                        style={{ width: "230px" }}
                      >
                        <div
                          className="w-full h-1"
                          style={{
                            background:
                              "linear-gradient(90deg, #F91750, #273277)",
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
                              <FontAwesomeIcon
                                icon={faAngleRight}
                                className="flex-shrink-0 text-xs"
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

              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg hover:scale-90"
                  style={{
                    background: "linear-gradient(135deg, #F91750, #d4103f)",
                  }}
                >
                  <FontAwesomeIcon icon={faPercent} className="text-sm" />
                  PAYE Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
