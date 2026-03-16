"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  "Bookkepping",
  "Filling Returns",
  "VAT Registration",
  "Pin Registration",
  "KRA Assessments",
  "Business Registration",
];

const countryCodes = [
   { code: "+91", country: "IN" },
  { code: "+254", country: "KE" },
  { code: "+1", country: "US" },
  { code: "+44", country: "GB" },
  { code: "+213", country: "DZ" },
  { code: "+376", country: "AD" },
  { code: "+244", country: "AO" },
  { code: "+1264", country: "AI" },
  { code: "+1268", country: "AG" },
  { code: "+54", country: "AR" },
  { code: "+374", country: "AM" },
  { code: "+297", country: "AW" },
  { code: "+61", country: "AU" },
  { code: "+43", country: "AT" },
  { code: "+994", country: "AZ" },
  { code: "+1242", country: "BS" },
  { code: "+973", country: "BH" },
  { code: "+880", country: "BD" },
  { code: "+1246", country: "BB" },
  { code: "+375", country: "BY" },
  { code: "+32", country: "BE" },
  { code: "+501", country: "BZ" },
  { code: "+229", country: "BJ" },
  { code: "+1441", country: "BM" },
  { code: "+975", country: "BT" },
  { code: "+591", country: "BO" },
  { code: "+387", country: "BA" },
  { code: "+267", country: "BW" },
  { code: "+55", country: "BR" },
  { code: "+673", country: "BN" },
  { code: "+359", country: "BG" },
  { code: "+226", country: "BF" },
  { code: "+257", country: "BI" },
  { code: "+855", country: "KH" },
  { code: "+237", country: "CM" },
  { code: "+238", country: "CV" },
  { code: "+236", country: "CF" },
  { code: "+235", country: "TD" },
  { code: "+56", country: "CL" },
  { code: "+86", country: "CN" },
  { code: "+57", country: "CO" },
  { code: "+269", country: "KM" },
  { code: "+242", country: "CG" },
  { code: "+506", country: "CR" },
  { code: "+385", country: "HR" },
  { code: "+53", country: "CU" },
  { code: "+357", country: "CY" },
  { code: "+420", country: "CZ" },
  { code: "+45", country: "DK" },
  { code: "+253", country: "DJ" },
  { code: "+1767", country: "DM" },
  { code: "+1809", country: "DO" },
  { code: "+593", country: "EC" },
  { code: "+20", country: "EG" },
  { code: "+503", country: "SV" },
  { code: "+240", country: "GQ" },
  { code: "+291", country: "ER" },
  { code: "+372", country: "EE" },
  { code: "+251", country: "ET" },
  { code: "+679", country: "FJ" },
  { code: "+358", country: "FI" },
  { code: "+33", country: "FR" },
  { code: "+241", country: "GA" },
  { code: "+220", country: "GM" },
  { code: "+995", country: "GE" },
  { code: "+49", country: "DE" },
  { code: "+233", country: "GH" },
  { code: "+30", country: "GR" },
  { code: "+1473", country: "GD" },
  { code: "+502", country: "GT" },
  { code: "+224", country: "GN" },
  { code: "+245", country: "GW" },
  { code: "+592", country: "GY" },
  { code: "+509", country: "HT" },
  { code: "+504", country: "HN" },
  { code: "+852", country: "HK" },
  { code: "+36", country: "HU" },
  { code: "+354", country: "IS" },
  { code: "+62", country: "ID" },
  { code: "+98", country: "IR" },
  { code: "+964", country: "IQ" },
  { code: "+353", country: "IE" },
  { code: "+972", country: "IL" },
  { code: "+39", country: "IT" },
  { code: "+1876", country: "JM" },
  { code: "+81", country: "JP" },
  { code: "+962", country: "JO" },
  { code: "+7", country: "KZ" },
  { code: "+255", country: "TZ" },
  { code: "+82", country: "KR" },
  { code: "+965", country: "KW" },
  { code: "+996", country: "KG" },
  { code: "+856", country: "LA" },
  { code: "+371", country: "LV" },
  { code: "+961", country: "LB" },
  { code: "+266", country: "LS" },
  { code: "+231", country: "LR" },
  { code: "+218", country: "LY" },
  { code: "+423", country: "LI" },
  { code: "+370", country: "LT" },
  { code: "+352", country: "LU" },
  { code: "+853", country: "MO" },
  { code: "+261", country: "MG" },
  { code: "+265", country: "MW" },
  { code: "+60", country: "MY" },
  { code: "+960", country: "MV" },
  { code: "+223", country: "ML" },
  { code: "+356", country: "MT" },
  { code: "+222", country: "MR" },
  { code: "+230", country: "MU" },
  { code: "+52", country: "MX" },
  { code: "+373", country: "MD" },
  { code: "+377", country: "MC" },
  { code: "+976", country: "MN" },
  { code: "+382", country: "ME" },
  { code: "+212", country: "MA" },
  { code: "+258", country: "MZ" },
  { code: "+95", country: "MM" },
  { code: "+264", country: "NA" },
  { code: "+977", country: "NP" },
  { code: "+31", country: "NL" },
  { code: "+64", country: "NZ" },
  { code: "+505", country: "NI" },
  { code: "+227", country: "NE" },
  { code: "+234", country: "NG" },
  { code: "+47", country: "NO" },
  { code: "+968", country: "OM" },
  { code: "+92", country: "PK" },
  { code: "+507", country: "PA" },
  { code: "+675", country: "PG" },
  { code: "+595", country: "PY" },
  { code: "+51", country: "PE" },
  { code: "+63", country: "PH" },
  { code: "+48", country: "PL" },
  { code: "+351", country: "PT" },
  { code: "+974", country: "QA" },
  { code: "+40", country: "RO" },
  { code: "+7", country: "RU" },
  { code: "+250", country: "RW" },
  { code: "+966", country: "SA" },
  { code: "+221", country: "SN" },
  { code: "+381", country: "RS" },
  { code: "+232", country: "SL" },
  { code: "+65", country: "SG" },
  { code: "+421", country: "SK" },
  { code: "+386", country: "SI" },
  { code: "+252", country: "SO" },
  { code: "+27", country: "ZA" },
  { code: "+34", country: "ES" },
  { code: "+94", country: "LK" },
  { code: "+249", country: "SD" },
  { code: "+597", country: "SR" },
  { code: "+268", country: "SZ" },
  { code: "+46", country: "SE" },
  { code: "+41", country: "CH" },
  { code: "+963", country: "SY" },
  { code: "+886", country: "TW" },
  { code: "+992", country: "TJ" },
  { code: "+66", country: "TH" },
  { code: "+228", country: "TG" },
  { code: "+1868", country: "TT" },
  { code: "+216", country: "TN" },
  { code: "+90", country: "TR" },
  { code: "+993", country: "TM" },
  { code: "+256", country: "UG" },
  { code: "+380", country: "UA" },
  { code: "+971", country: "AE" },
  { code: "+598", country: "UY" },
  { code: "+998", country: "UZ" },
  { code: "+58", country: "VE" },
  { code: "+84", country: "VN" },
  { code: "+967", country: "YE" },
  { code: "+260", country: "ZM" },
  { code: "+263", country: "ZW" },
];

function StarRow({ reviewCount }) {
  return (
    <div className="flex items-center gap-0.5 mt-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {/* <svg className="w-5 h-5" viewBox="0 0 20 20">
        <defs>
          <linearGradient id={`hs-${reviewCount}`}>
            <stop offset="60%" stopColor="#facc15" />
            <stop offset="60%" stopColor="#6b7280" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#hs-${reviewCount})`}
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg> */}
      <span className="ml-1 text-gray-100 text-md">({reviewCount})</span>
    </div>
  );
}

export default function HeroSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    countryCode: "+91",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consultation booked! We'll call you back shortly.");
  };

  return (
    <section className="relative bg-[#0a0f2e] overflow-hidden flex flex-col items-center justify-center px-4 py-12 lg:min-h-screen">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg/Tax-Advisory-Services.jpeg"
          alt="Hero Background"
          fill
          className="object-cover object-right"
          priority
        />
        <div className="absolute inset-0 bg-[#0a1035]/70" />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-700 opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600 opacity-10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[30%] w-40 h-full bg-gradient-to-b from-blue-300/10 to-transparent rotate-12" />
      </div>

      {/* ── HEADING ── */}
      <div className="relative z-10 px-2 mb-5 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
         Best Bookkeeping 
          <span className="pl-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
            Services in Kenya
          </span>
        </h1>
        <p className="max-w-5xl mx-auto mt-3 text-sm text-gray-300 sm:text-base">
          Focus on growing your business as we handle the books! Hire the best bookkeeping service in Kenya for smart and stress-free business management.
        </p>
      </div>

      {/* ── REVIEW BADGES ── */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mb-6 lg:gap-8">
        {/* Google */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-0.5">
            <svg className="flex-shrink-0 w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-semibold text-white text-md">5 out of 5</span>
          </div>
          <StarRow reviewCount="500+" />
        </div>

        <div className="hidden w-px h-10 bg-gray-200 sm:block" />

        {/* Trustpilot */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-0.5">
            <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-green-500 rounded">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
              </svg>
            </div>
            <span className="font-semibold text-white text-md">5 out of 5</span>
          </div>
          <StarRow  reviewCount="500+" />
        </div>
      </div>

      {/* ── FORM — glass outer + white inner card ── */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="p-2 border backdrop-blur-md bg-white/5 border-white/15 rounded-2xl">

          <div className="bg-white rounded-xl px-6 py-6 sm:px-8 sm:py-7 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
            <form onSubmit={handleSubmit}>

              {/* Row 1: Name | Phone | Email */}
              <div className="grid grid-cols-1 gap-3 mb-3 sm:grid-cols-3">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  required
                  className="w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273277]/30  focus:border-transparent"
                />

                {/* Phone + country code */}
                <div className="flex overflow-hidden bg-white border border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-[#273277]/30">
                  <div className="flex items-center px-1 bg-white border-r border-gray-200">
                    <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      className="py-3 text-sm text-gray-600 bg-transparent appearance-none cursor-pointer focus:outline-none"
                      style={{ minWidth: "56px" }}
                    >
                      {countryCodes.map((c) => (
                        <option key={`${c.code}-${c.country}`} value={c.code}>
                          {c.code}
                        </option>
                      ))}
                    </select>
                    <svg className="flex-shrink-0 w-3 h-3 -ml-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your PhoneNo."
                    className="flex-1 min-w-0 px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273277]/30  focus:border-transparent"
                />
              </div>

              {/* Row 2: Service + CTA */}
              <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] gap-3">
                <div className="relative">
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-10 text-sm text-gray-400 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#273277]/30 focus:border-transparent"
                  >
                    <option value="">Select your service</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="text-gray-700">{s}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm font-bold tracking-widest uppercase text-white rounded-lg bg-gradient-to-r from-[#D81141] to-[#273277] hover:from-[#273277] hover:to-[#D81141] shadow-lg shadow-orange-400/30 transition-all duration-200 hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                >
                  Book A Free Consultation
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

      {/* ── STATS BAR ── */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 16s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-6xl px-0 mt-4">
        <div className="backdrop-blur-md bg-white/5 border border-white/15 rounded-2xl py-3.5 overflow-hidden">

          {/* ── MOBILE: shield label + marquee ── */}
          <div className="flex flex-col gap-2 md:hidden">
            {/* Shield label */}
            <div className="flex items-center gap-2.5 px-5">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-[#D81141] rounded-full shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white">What Sets Us Apart</span>
            </div>

            {/* Marquee pills */}
            <div className="overflow-hidden">
              <div className="marquee-track">
                {[...Array(2)].map((_, loopIdx) => (
                  <div key={loopIdx} className="flex items-center gap-3 px-3">
                    {[
                      { value: "10+", label: "Certified Tax Experts" },
                      { value: "500+", label: "Verified Reviews" },
                      { value: "2500+", label: "Consultations" },
                      { value: "", label: "Serving Business Across Kenya " },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 bg-white border border-white/25 rounded-full px-4 py-1.5 whitespace-nowrap flex-shrink-0"
                      >
                        {item.value && (
                          <span className="text-sm font-bold text-[#D81141]">{item.value}</span>
                        )}
                        <span className="text-sm text-gray-600">{item.label}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── DESKTOP: Static single row ── */}
          <div className="items-center hidden w-full gap-3 px-5 md:flex flex-nowrap">
            {/* Shield + label */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div className="flex items-center justify-center flex-shrink-0 bg-[#D81141] rounded-full shadow-lg w-9 h-9">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white whitespace-nowrap">What Sets Us Apart</span>
            </div>

            {/* Divider */}
            <div className="flex-shrink-0 w-px h-6 bg-white/20" />

            {/* Pills */}
            <div className="flex items-center flex-1 gap-2 justify-evenly flex-nowrap">
              {[
                 { value: "10+", label: "Certified Tax Experts" },
                      { value: "500+", label: "Verified Reviews" },
                      { value: "2500+", label: "Consultations" },
                
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 border bg-white border-white/20 rounded-full px-3 py-1.5 whitespace-nowrap"
                >
                  <span className="text-sm font-bold text-[#D81141]">{item.value}</span>
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
              ))}
              <div className="border border-white/20 bg-white rounded-full px-3 py-1.5 whitespace-nowrap">
                <span className="text-sm text-gray-600">Serving Businesses Across Kenya</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}