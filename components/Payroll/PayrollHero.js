"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const services = [
  "Bookkepping",
  "Filling Returns",
  "VAT Registration",
  "Pin Registration",
  "KRA Assessments",
  "Business Registration",
];
function CountryCodeDropdown({ selectedCountry, setSelectedCountry }) {
  const [countries, setCountries] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd,flags,cca2",
        );
        const data = await res.json();

        const formattedCountries = data
          .map((country) => {
            const root = country.idd?.root || "";
            const suffixes = country.idd?.suffixes || [];

            if (!root || !suffixes.length) return null;

            return suffixes.map((suffix) => ({
              name: country.name?.common || "",
              code: country.cca2 || "",
              flag: country.flags?.svg || "",
              dialCode: `${root}${suffix}`,
            }));
          })
          .flat()
          .filter(Boolean)
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);

        const india =
          formattedCountries.find((item) => item.code === "IN") ||
          formattedCountries[0];

        if (india) {
          setSelectedCountry(india);
        }
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    }

    fetchCountries();
  }, [setSelectedCountry]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCountries = useMemo(() => {
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(search.toLowerCase()) ||
        country.dialCode.includes(search),
    );
  }, [countries, search]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 bg-gray-200"
      >
        {selectedCountry?.flag ? (
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            className="object-cover w-5 h-4 rounded-sm"
          />
        ) : (
          <span className="text-sm">🌍</span>
        )}

        <span className="text-sm text-gray-600 whitespace-nowrap">
          {selectedCountry?.dialCode || "+91"}
        </span>

        <svg
          className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 z-50 mt-2 overflow-hidden bg-white border shadow-xl top-full w-72 rounded-xl border-slate-200">
          <div className="p-3 border-b border-slate-100">
            <input
              type="text"
              placeholder="Search country or code"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 text-sm border rounded-lg outline-none border-slate-200 focus:border-[#273277] focus:ring-2 focus:ring-[#273277]/10"
            />
          </div>

          <div className="overflow-y-auto max-h-64">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <button
                  type="button"
                  key={`${country.code}-${country.dialCode}-${index}`}
                  onClick={() => {
                    setSelectedCountry(country);
                    setOpen(false);
                    setSearch("");
                  }}
                  className="flex items-center w-full gap-3 px-3 py-2.5 text-left transition-colors hover:bg-slate-50"
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="object-cover w-5 h-4 rounded-sm"
                  />
                  <span className="flex-1 text-sm text-slate-700">
                    {country.name}
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    {country.dialCode}
                  </span>
                </button>
              ))
            ) : (
              <div className="px-3 py-4 text-sm text-center text-slate-400">
                No country found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function StarRow({ reviewCount }) {
  return (
    <div className="flex items-center gap-0.5 mt-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
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
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.service.trim()
    ) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      name: form.name.trim(),
      phone: `${selectedCountry?.dialCode || "+91"} ${form.phone.trim()}`,
      email: form.email.trim(),
      services: form.service.trim(),
    };

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/consult`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert("Consultation booked successfully");
        setForm({
          name: "",
          phone: "",
          email: "",
          service: "",
        });
      } else {
        alert(data.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Consult form submit error:", error);
      alert("Something went wrong while submitting the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-[#0a0f2e] overflow-hidden flex flex-col items-center justify-center px-4 py-12 lg:min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/blogs/Accounting.jpeg"
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
      <div className="relative z-10 px-2 pt-5 mb-5 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl md:text-4xl lg:text-5xl">
        Professional Payroll 
          <span className="pl-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
            Services in Kenya
          </span>
        </h1>
        <p className="max-w-5xl mx-auto mt-3 text-sm text-gray-300 sm:text-base">
          Outsource your payroll services to experts and save time, reduce risks, and stay compliant. Let us handle your payroll needs while you focus on growing your business.
        </p>
      </div>

      {/* ── REVIEW BADGES ── */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mb-6 lg:gap-8">
        {/* Google */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-0.5">
            <svg className="flex-shrink-0 w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
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
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <span className="font-semibold text-white text-md">5 out of 5</span>
          </div>
          <StarRow reviewCount="500+" />
        </div>
      </div>

      {/* ── FORM — glass outer + white inner card ── */}
      <div className="relative z-10 w-full max-w-4xl mb-2">
        <div className="p-1.5 border backdrop-blur-md bg-white/40 border-white/15 rounded-2xl shadow-[0_0_10px_rgba(255,255,255,0.6)]">
          <div className="bg-white rounded-xl px-6 py-6 sm:px-8 sm:py-8 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3 mb-3 sm:grid-cols-3">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  required
                  className="w-full px-4 py-3 text-sm font-medium text-gray-700 placeholder-gray-600 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none "
                />

                <div className="flex overflow-visible bg-gray-200 border border-gray-300 rounded-lg ">
                  <div className="flex items-center px-1 bg-gray-200 border-r border-gray-300 rounded-l-lg">
                    <CountryCodeDropdown
                      selectedCountry={selectedCountry}
                      setSelectedCountry={setSelectedCountry}
                    />
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your PhoneNo."
                    required
                    className="flex-1 min-w-0 px-3 py-3 text-sm font-medium text-gray-700 placeholder-gray-600 bg-transparent focus:outline-none"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="w-full px-4 py-3 text-sm font-medium text-gray-700 placeholder-gray-600 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none "
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] gap-3">
                <div className="relative">
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 pr-10 text-sm bg-gray-200 border font-medium border-gray-300 rounded-lg appearance-none focus:outline-none  
    ${form.service === "" ? "text-gray-600" : "text-gray-700"}`}
                  >
                    <option value="" disabled hidden>
                      Select your service
                    </option>

                    {services.map((s) => (
                      <option key={s} value={s} className="text-gray-700">
                        {s}
                      </option>
                    ))}
                  </select>

                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm font-bold tracking-widest uppercase text-white rounded-lg bg-gradient-to-r from-[#D81141] to-[#273277] hover:from-[#273277] hover:to-[#D81141] shadow-lg shadow-orange-400/30 transition-all duration-200 hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                >
                  Book a Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
       <div className="relative z-10 px-2 pt-5 mb-5 text-center">
         <h4 className="text-center text-white ">Trusted by businesses across Kenya | Specialists in Tax Disputes & Compliance </h4>
       
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

      <div className="relative z-[1] w-full max-w-6xl px-0 mt-4 overflow-hidden">
        
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 md:hidden top-0 z-20 h-full w-10 md:w-16 lg:w-20 bg-gradient-to-r from-[#4D224C] via-[#4D224C] to-transparent rounded-l-2xl lg:rounded-l-full"></div>

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 md:hidden top-0 z-20 h-full w-10 md:w-16 lg:w-20 bg-gradient-to-l from-[#4D224C] via-[#4D224C] to-transparent rounded-r-2xl lg:rounded-r-full"></div>

        <div className="pt-2 pb-5 overflow-hidden border border-l-4 rounded-2xl lg:py-2 md:rounded-lg lg:rounded-full backdrop-blur-md lg:bg-white/5 bg-[#4D224C] border-white/15 border-l-brand-pink-dark">
          {/* ── MOBILE: shield label + marquee ── */}
          <div className="flex flex-col gap-2 md:hidden">
            {/* Shield label */}
            <div className="flex items-center justify-center gap-2.5 px-5 mb-2">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-[#D81141] rounded-full shadow-lg">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white">
                What Sets Us Apart
              </span>
            </div>

            {/* Marquee pills */}
            <div className="relative overflow-hidden">
              <div className=" marquee-track">
                {[...Array(2)].map((_, loopIdx) => (
                  <div key={loopIdx} className="flex items-center gap-3 px-3">
                    {[
                      { value: "10+", label: "Years of Tax Experience" },
                      { value: "✔", label: " Experts in Kra Tax Disputes" },
                      { value: "✔", label: " Proven Results  in Tax Disputes" },
                      { value: "✔", label: "Serve Business in Kenya" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 bg-white border border-white/25 rounded-full px-4 py-1.5 whitespace-nowrap flex-shrink-0"
                      >
                        {item.value && (
                          <span className="text-sm font-bold text-[#D81141]">
                            {item.value}
                          </span>
                        )}
                        <span className="text-sm text-gray-600">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── DESKTOP: Static single row ── */}
          <div className="items-center hidden w-full gap-3 px-3 md:flex flex-nowrap">
            {/* Shield + label */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div className="flex items-center justify-center flex-shrink-0 bg-[#D81141] rounded-full shadow-lg w-9 h-9">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white whitespace-nowrap">
                What Sets Us Apart
              </span>
            </div>

            {/* Divider */}
            <div className="flex-shrink-0 w-px h-6 bg-white/20" />

            {/* Pills */}
            <div className="flex items-center justify-between flex-1 gap-2 flex-nowrap">
              {[
                { value: "10+", label: "Years of Tax Experience" },
                { value: "✔", label: "Experts in Kra Tax Disputes" },
                { value: "✔", label: "Proven Results  in Tax Disputes" },
                { value: "✔", label: "Serve Business in Kenya" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 border bg-white border-white/20 rounded-full px-3 py-1.5 whitespace-nowrap"
                >
                  <span className="text-sm font-bold text-[#D81141]">
                    {item.value}
                  </span>
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
