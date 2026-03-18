"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

// React Icons
import {
  FaUser,
  FaBuilding,
  FaGear,
  FaChevronDown,
  FaCheck,
  FaArrowsRotate,
  FaRocket,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

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
          "https://restcountries.com/v3.1/all?fields=name,idd,flags,cca2"
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
        country.dialCode.includes(search)
    );
  }, [countries, search]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 pr-1 bg-transparent"
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

        <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">
          {selectedCountry?.dialCode || "+91"}
        </span>

        <FaChevronDown
          className={`text-[10px] text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 z-50 mt-2 overflow-hidden bg-white border shadow-xl top-full w-72 rounded-xl border-slate-200">
          <div className="p-3 border-b border-slate-100">
            <input
              type="text"
              placeholder="Search country or code"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 text-sm border rounded-lg outline-none border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
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

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    service: "",
  });

  const [focused, setFocused] = useState("");
  const [robot, setRobot] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const inputClass = (field) =>
    `w-full rounded-lg px-3 py-2.5 pl-9 text-sm outline-none transition-all duration-300 bg-white border placeholder-slate-400 text-slate-700 font-light ${
      focused === field
        ? "border-orange-400 ring-2 ring-orange-100"
        : "border-slate-200 hover:border-slate-300 shadow-sm"
    }`;

  return (
    <section className="relative flex items-center justify-center px-4 py-10 overflow-hidden min-h-[auto]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/Tax-Consultation.jpg"
          alt="background"
          fill
          className="object-cover object-center"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-orange-50/50 to-orange-100/65" />
      </div>

      <div className="absolute top-0 right-0 rounded-full pointer-events-none w-72 h-72 bg-orange-300/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none bg-rose-300/15 blur-3xl -z-10" />

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <h2 className="mb-2 text-3xl font-extrabold leading-tight text-center md:text-4xl text-[#123453]">
          Got questions?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F91750] to-rose-400">
            We're here to help!
          </span>
        </h2>

        <div className="flex justify-center mb-3">
          <div className="w-12 h-1 rounded-full bg-[#F91750]" />
        </div>

        <p className="max-w-lg mx-auto mb-6 text-sm font-light leading-relaxed text-center text-slate-500">
          Get expert help from the best consultants in Kenya, always ready to
          answer your questions and guide you!
        </p>

        <div className="p-5 border border-white shadow-xl bg-white/80 backdrop-blur-2xl rounded-2xl md:p-7 shadow-orange-100/50">
          <div className="grid grid-cols-1 gap-3.5 mb-4 md:grid-cols-2">
            <div className="relative">
              <FaUser className="absolute text-xs -translate-y-1/2 pointer-events-none left-3 top-1/2 text-slate-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
                className={inputClass("name")}
              />
            </div>

            <div className="relative">
              <div className="absolute z-20 flex items-center -translate-y-1/2 left-3 top-1/2">
                <CountryCodeDropdown
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                />
                <span className="ml-2 text-sm leading-none text-slate-200">|</span>
              </div>

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                onFocus={() => setFocused("mobile")}
                onBlur={() => setFocused("")}
                className={`w-full rounded-lg px-3 py-2.5 pl-[6.3rem] text-sm outline-none transition-all duration-300 bg-white border placeholder-slate-400 text-slate-700 font-light ${
                  focused === "mobile"
                    ? "border-orange-400 ring-2 ring-orange-100"
                    : "border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              />
            </div>

            <div className="relative">
              <MdEmail className="absolute text-sm -translate-y-1/2 pointer-events-none left-3 top-1/2 text-slate-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                className={inputClass("email")}
              />
            </div>

            <div className="relative">
              <FaBuilding className="absolute text-xs -translate-y-1/2 pointer-events-none left-3 top-1/2 text-slate-400" />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => setFocused("company")}
                onBlur={() => setFocused("")}
                className={inputClass("company")}
              />
            </div>

            <div className="relative md:col-span-2">
              <FaGear className="absolute z-10 text-xs -translate-y-1/2 pointer-events-none left-3 top-1/2 text-slate-400" />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={() => setFocused("service")}
                onBlur={() => setFocused("")}
                className={`${inputClass("service")} appearance-none cursor-pointer`}
              >
                <option value="" disabled>
                  What Services Are You Looking For?
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[10px] pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-3 px-3.5 py-2.5 mb-4 border shadow-sm bg-slate-50 border-slate-200 rounded-xl w-fit">
            <button
              type="button"
              onClick={() => setRobot(!robot)}
              className={`w-5 h-5 border-2 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                robot
                  ? "bg-orange-400 border-orange-400"
                  : "border-slate-300 bg-white"
              }`}
            >
              {robot && <FaCheck className="text-white text-[9px]" />}
            </button>
            <span className="text-sm select-none text-slate-500">
              I'm not a robot
            </span>
            <div className="ml-2 text-center">
              <FaArrowsRotate className="mx-auto text-sm text-slate-400" />
              <span className="text-slate-400 text-[9px] tracking-wide block">
                reCAPTCHA
              </span>
            </div>
          </div>

          <button
            type="button"
            className="flex items-center justify-center w-full gap-2.5 py-3.5 mb-5 text-sm font-bold tracking-wide text-white transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-r from-[#123453] to-rose-500 hover:from-[#123453] hover:to-rose-600 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-200 active:translate-y-0"
          >
            <FaRocket />
            Request A Callback Now
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-[11px] tracking-widest uppercase text-slate-400 whitespace-nowrap">
              Or reach us directly
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href="https://wa.me/message/YT2LRK7BSP2VF1"
              className="flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold text-green-600 transition-all duration-300 bg-white border-2 border-green-500 rounded-xl hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200 active:translate-y-0"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </a>

            <a
              href="tel:+254711827149"
              className="flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold text-[#123453] transition-all duration-300 bg-white border-2 border-[#123453] rounded-xl hover:bg-gradient-to-r hover:from-[#123453] hover:to-rose-500 hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200 active:translate-y-0"
            >
              <FaPhone className="text-sm" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}