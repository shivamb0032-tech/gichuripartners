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
  // { label: "Home", href: "/" },
  { label: "Auditing", href: "/auditing-services-in-kenya" },
  { label: "Accounting", href: "/accounting-services-in-kenya" },
  { label: "Bookkeeping", href: "/bookkeeping-services-in-kenya" },
  { label: "Tax Advisory", href: "/tax-advisory-services-in-kenya" },
  { label: "About Us", href: "/about-us" },
  { label: "News & Media", href: "/news-media" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact us", href: "/contact-us" },
  // {
  //   label: "Compliance",
  //   href: "#",
  //   dropdown: [
  //     { label: "Annual Returns", href: "#" },
  //     { label: "Business Licenses", href: "#" },
  //     { label: "KRA Compliance", href: "#" },
  //   ],
  // },
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

export default function Navbar() {
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
      {/* <div className="hidden lg:block" style={{ height: navHeight.desktop }} /> */}

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
      <div className="fixed top-0 left-0 right-0 z-50 justify-center hidden px-6 pt-4 bg-transparent pointer-events-none lg:flex">
        <nav
          className={`
         pointer-events-auto w-full max-w-7xl rounded-full bg-gray-50/60 backdrop-blur-lg py-1  border border-white/20 transition-all duration-300
        ${
        scrolled
        ? "shadow-[0_8px_32px_rgba(0,0,0,0.13)] bg-blue-500/30"
        : "shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
        }
        `}
        >
          <div className="px-5 flex items-center justify-between h-[58px]">
            {/* ── Logo ── */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/assets/logos/Gichuri-Partners-logo-version-3.png"
                alt="Gichuri & Partners"
                width={140}
                height={38}
                className="object-contain w-auto h-9"
                priority
              />
            </Link>

            {/* ── Menu Items ── */}
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
                    className={`
                    flex items-center gap-1.5 px-3 py-2 rounded-full
                    text-[14px] font-semibold transition-all duration-200
                    ${
                      activeDropdown === item.label
                        ? "text-[#F91750] bg-red-50"
                        : "text-[#0c5190] hover:text-[#F91750] hover:bg-red-50"
                    }
                  `}
                  >
                    {item.label}
                    {item.dropdown && (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`text-[9px] transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div
                      className="absolute left-0 top-full mt-2 overflow-hidden rounded-2xl border border-gray-100 shadow-[0_16px_40px_rgba(0,0,0,0.12)] bg-white"
                      style={{ width: "220px" }}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="h-[3px] w-full bg-gradient-to-r from-[#F91750] to-[#273277]" />
                      <div className="py-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-gray-600 hover:text-[#F91750] hover:bg-red-50 transition-all duration-150"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <FontAwesomeIcon
                              icon={faAngleRight}
                              className="text-[9px] text-[#F91750] flex-shrink-0"
                            />
                            <span>{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── CTA Button ── */}
            <Link
              href="#"
              className="flex items-center gap-2 text-white text-[13px] font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-95 active:scale-90 flex-shrink-0"
              style={{
                background: "#EE154B",
                boxShadow: "0 4px 16px rgba(245,166,35,0.45)",
              }}
            >
              <FontAwesomeIcon icon={faPercent} className="text-base" />
              PAYE Calculator
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
