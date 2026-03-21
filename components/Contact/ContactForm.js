"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  MdPerson,
  MdEmail,
  MdBusiness,
  MdMiscellaneousServices,
  MdKeyboardArrowDown,
  MdSend,
} from "react-icons/md";
import { FaCheck, FaArrowsRotate, FaWhatsapp, FaPhone } from "react-icons/fa6";

const services = [
  "Bookkeeping",
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
        className="flex items-center gap-2 pr-2 bg-transparent"
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

        <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
          {selectedCountry?.dialCode || "+91"}
        </span>

        <MdKeyboardArrowDown
          className={`text-base text-slate-400 transition-transform duration-200 ${
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
              className="w-full px-3 py-2 text-sm border rounded-lg outline-none border-slate-200 focus:border-[#F91750] focus:ring-2 focus:ring-[#F91750]/10"
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

export default function ContactSection() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

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
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const inputBase =
    "w-full bg-white text-slate-700 text-sm placeholder-slate-400 rounded-xl border outline-none transition-all duration-200 px-4 py-3";

  function inputClass(field) {
    return `${inputBase} ${
      focused === field
        ? "border-[#F91750] ring-2 ring-[#F91750]/10 shadow-sm"
        : "border-slate-200 hover:border-slate-300"
    }`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!robot) {
      alert("Please confirm you are not a robot");
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.mobile.trim() ||
      !formData.email.trim() ||
      !formData.service.trim()
    ) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      name: formData.name.trim(),
      phone: `${selectedCountry?.dialCode || "+91"} ${formData.mobile.trim()}`,
      email: formData.email.trim(),
      services: formData.service.trim(),
      companyName: formData.company.trim(),
    };

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert("Form submitted successfully");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          company: "",
          service: "",
        });
        setRobot(false);
      } else {
        alert(data.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Contact form submit error:", error);
      alert("Something went wrong while submitting the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-stretch grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col bg-white border shadow-sm p-7 rounded-2xl border-slate-100">
            <h3 className="mb-1 text-lg font-bold text-slate-800">
              Send us a message
            </h3>
            <p className="mb-6 text-xs text-slate-400">
              Fill in the details below and we'll get back to you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col flex-1 gap-3.5"
            >
              <div className="relative">
                <MdPerson className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  className={`${inputClass("name")} pl-10`}
                />
              </div>

              <div className="relative">
                <div className="absolute z-20 flex items-center -translate-y-1/2 left-3 top-1/2">
                  <CountryCodeDropdown
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                  />
                  <span className="w-px h-5 ml-2 bg-slate-200" />
                </div>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  onFocus={() => setFocused("mobile")}
                  onBlur={() => setFocused("")}
                  className={`${inputClass("mobile")} pl-28`}
                />
              </div>

              <div className="relative">
                <MdEmail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  className={`${inputClass("email")} pl-10`}
                />
              </div>

              <div className="relative">
                <MdBusiness className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base pointer-events-none" />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused("")}
                  className={`${inputClass("company")} pl-10`}
                />
              </div>

              <div className="relative">
                <MdMiscellaneousServices className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base pointer-events-none z-10" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocused("service")}
                  onBlur={() => setFocused("")}
                  className={`${inputClass(
                    "service",
                  )} pl-10 pr-9 appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    What Services Are You Looking?
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <MdKeyboardArrowDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base pointer-events-none" />
              </div>

              <div className="flex items-center gap-3 px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 w-fit">
                <button
                  type="button"
                  onClick={() => setRobot(!robot)}
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    robot
                      ? "bg-[#F91750] border-[#F91750]"
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
                  <span className="text-[9px] text-slate-400 tracking-wide block">
                    reCAPTCHA
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-auto flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#123453] to-[#F91750] hover:from-[#0f2a44] hover:to-[#d4103f] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#F91750]/20 active:translate-y-0 transition-all duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <MdSend className="text-base" />
                {loading ? "Submitting..." : "Request A Callback Now"}
              </button>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-100" />
                <span className="text-[11px] text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  or reach us
                </span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/message/YT2LRK7BSP2VF1"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-green-600 border-2 border-green-500 rounded-xl hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200"
                >
                  <FaWhatsapp className="text-base" />
                  WhatsApp
                </a>

                <a
                  href="tel:+254711827149"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#123453] border-2 border-[#123453] rounded-xl hover:bg-[#123453] hover:text-white transition-all duration-200"
                >
                  <FaPhone className="text-sm" />
                  Call Now
                </a>
              </div>
            </form>
          </div>

          <div className="flex flex-col overflow-hidden border shadow-sm rounded-2xl border-slate-100 min-h-[520px]">
            <div className="bg-[#123453] px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F91750] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Our Location</p>
                <p className="text-xs text-white/60">
                  College House, 3rd Floor, University, Nairobi Kenya
                </p>
              </div>
            </div>

            <div className="relative flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819580986799!2d36.81660187496593!3d-1.2833299986948437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664b2bb77%3A0x1e60c12a6e8e3e3b!2sUniversity%20of%20Nairobi!5e0!3m2!1sen!2ske!4v1710000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Office Location"
                className="w-full h-full"
              />
            </div>

            <div className="bg-white px-5 py-3.5 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>

              <a
                href="https://maps.google.com/?q=University+of+Nairobi+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#F91750] font-semibold hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
