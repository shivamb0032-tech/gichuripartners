"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faShieldHalved,
  faRocket,
  faHeadset,
  faCheckDouble,
  faStar as faSolidStar,
} from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  const trustBadges = [
    { faIcon: faShieldHalved, label: "ICAI Registered" },
    { faIcon: faMedal, label: "ISO Certified" },
    { faIcon: faRocket, label: "15+ Years" },
    { faIcon: faCheckDouble, label: "Pan India" },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert CAs" },
    { number: "99%", label: "Success Rate" },
  ];

  return (
    <section className="relative flex items-center min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/hero-bg/Auditing-Services.jpeg"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8e9f0]/80 via-[#273277]/90 to-[#180e33]/95"></div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 bg-[#F91750]" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full blur-2xl opacity-10 bg-[#273277]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #F91750 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative w-full px-4 py-12 mx-auto lg:py-30 max-w-7xl md:px-8 lg:px-16">
        <div className="grid items-center gap-5 lg:gap-16 lg:grid-cols-2">
          {/* Left Form Card */}
          <div className="order-2 lg:order-1 rounded-[24px] p-7 bg-[#0f1535]/60 border border-white/10 backdrop-blur-xl">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F91750]/15 border border-[#F91750]/20 mb-3">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="text-[#F91750] text-sm"
                />
                <span className="text-xs font-semibold text-[#F91750]">
                  Free Consultation
                </span>
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white">
                Let's Talk Free Consultation
              </h3>

              <p className="text-sm text-slate-300">
                Fill in your details and our team will get back to you shortly.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 bg-white/10 border border-white/20 outline-none focus:border-[#F91750]"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 bg-white/10 border border-white/20 outline-none focus:border-[#F91750]"
                />
              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 bg-white/10 border border-white/20 outline-none focus:border-[#F91750]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 bg-white/10 border border-white/20 outline-none focus:border-[#F91750]"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 bg-white/10 border border-white/20 outline-none focus:border-[#F91750]"
              />

              <select className="w-full rounded-xl px-4 py-3 text-sm text-slate-300 bg-white/10 border border-white/20 outline-none focus:border-[#F91750]">
                <option>Select Service</option>
                <option>Statutory Audit</option>
                <option>Internal Audit</option>
                <option>Tax Audit</option>
                <option>Forensic Audit</option>
              </select>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl bg-gradient-to-r from-[#F91750] to-[#d4103f]"
              >
                <FaPhone className="text-xs" />
                Request A Callback Now
              </button>
            </form>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-6 border bg-[#eee] text-[#F91750] border-[#F91750]/30">
              <span className="w-2 h-2 rounded-full animate-pulse bg-[#F91750]" />
              India's #1 CA & Tax Consulting Platform
            </div>

            <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Best{" "}
              <span className="bg-gradient-to-r from-[#F91750] to-[#ff6b8a] bg-clip-text text-transparent">
                Auditing
              </span>
              <br />
              Services in <span className="italic text-[#E11345]">Kenya</span>
            </h1>

            <p className="max-w-xl mb-10 text-lg leading-relaxed text-slate-300">
              Are you looking for the best auditing services in Kenya? We offer
              professional audit and assurance services, including statutory,
              project, forensic, tax, and due diligence audits.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/"
                className="flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white shadow-lg rounded-xl"
                style={{
                  background: "linear-gradient(135deg,#F91750,#d4103f)",
                  boxShadow: "0 8px 30px rgba(249,23,80,0.35)",
                }}
              >
                Book A Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
