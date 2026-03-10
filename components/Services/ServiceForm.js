"use client";
import { useState } from "react";
import Head from "next/head";

const services = [
  "Bookkepping",
  "Filling Returns",
  "VAT Registration",
  "Pin Registration",
  "KRA Assessments",
  "Business Registration",
];

export default function ServiceFrom() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    service: "",
  });
  const [focused, setFocused] = useState("");
  const [robot, setRobot] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const inputClass = (field) =>
    `w-full rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all duration-300 bg-white border placeholder-slate-400 text-slate-700 font-light ${
      focused === field
        ? "border-orange-400 ring-2 ring-orange-100"
        : "border-slate-200 hover:border-slate-300 shadow-sm"
    }`;

  return (
    <>

      <section
        className="relative flex items-center justify-center min-h-screen px-4 py-16 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80')",
        }}
      >
        
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-orange-50/90 to-orange-100/85" />

      
        <div className="absolute top-0 right-0 rounded-full pointer-events-none w-96 h-96 bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 rounded-full pointer-events-none w-72 h-72 bg-rose-300/15 blur-3xl" />

        
        <div className="relative z-10 w-full max-w-4xl mx-auto">

      
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#F91750] rounded-full shadow-sm bg-orange-50">
              <i className="text-xs text-[#F91750] fa-solid fa-circle-check animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-[#F91750] uppercase">
                Free Consultation Available
              </span>
            </div>
          </div>

       
          <h2 className="text-center text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-[#123453] leading-tight mb-3">
            Got questions?{" "}
            <span className="text-transparent bg-clip-text bg-[#F91750]">
             We’re here to help!
            </span>
          </h2>

       
          <div className="flex justify-center mb-5">
            <div className="w-16 h-1 rounded-full bg-[#F91750]" />
          </div>

        
          <p className="max-w-xl mx-auto mb-10 text-base font-light leading-relaxed text-center text-slate-500 md:text-lg">
            Get expert help from the best consultants in Kenya, always ready to answer your questions and guide you!
          </p>
 
          <div className="p-6 border border-white shadow-xl bg-white/80 backdrop-blur-2xl rounded-3xl md:p-10 shadow-orange-100/50">

            {/* Form Grid — 2 columns */}
            <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2">

             
              <div className="relative">
                <i className="fa-solid fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none" />
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

              {/* Mobile */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                  <i className="text-sm fa-solid fa-mobile-screen-button text-slate-400" />
                  <span className="text-xs text-slate-300">+91</span>
                  <span className="text-sm text-slate-200">|</span>
                </span>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  onFocus={() => setFocused("mobile")}
                  onBlur={() => setFocused("")}
                  className={`w-full rounded-xl px-4 py-3 pl-20 text-sm outline-none transition-all duration-300 bg-white border placeholder-slate-400 text-slate-700 font-light ${
                    focused === "mobile"
                      ? "border-orange-400 ring-2 ring-orange-100"
                      : "border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <i className="fa-solid fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none" />
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

              {/* Company */}
              <div className="relative">
                <i className="fa-solid fa-building absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none" />
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

              {/* Service — full width */}
              <div className="relative md:col-span-2">
                <i className="fa-solid fa-gear absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none z-10" />
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
                <i className="absolute text-xs -translate-y-1/2 pointer-events-none fa-solid fa-chevron-down right-4 top-1/2 text-slate-400" />
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="flex items-center gap-3 px-4 py-3 mb-6 border shadow-sm bg-slate-50 border-slate-200 rounded-xl w-fit">
              <button
                type="button"
                onClick={() => setRobot(!robot)}
                className={`w-5 h-5 border-2 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  robot
                    ? "bg-orange-400 border-orange-400"
                    : "border-slate-300 bg-white"
                }`}
              >
                {robot && (
                  <i className="fa-solid fa-check text-white text-[10px]" />
                )}
              </button>
              <span className="text-sm select-none text-slate-500">
                I'm not a robot
              </span>
              <div className="ml-3 text-center">
                <i className="block text-base fa-solid fa-arrows-rotate text-slate-400" />
                <span className="text-slate-400 text-[9px] tracking-wide block">
                  reCAPTCHA
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="flex items-center justify-center w-full gap-3 py-4 mb-8 text-base font-bold tracking-wide text-white transition-all duration-300 shadow-lg rounded-2xl bg-gradient-to-r from-[#123453] to-rose-500 hover:from-[#123453] hover:to-rose-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-200 active:translate-y-0 shadow-orange-200"
            >
              <i className="fa-solid fa-rocket" />
              Request A Callback Now
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-xs tracking-widest uppercase text-slate-400 whitespace-nowrap">
                Or reach us directly
              </span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* WhatsApp */}
              <a href="https://wa.me/message/YT2LRK7BSP2VF1"
                type="button"
                className="flex items-center justify-center gap-3 px-6 py-4 text-sm font-semibold text-green-600 transition-all duration-300 bg-white border-2 border-green-500 rounded-2xl hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-xl hover:shadow-green-200 active:translate-y-0"
              >
                <i className="text-xl fa-brands fa-whatsapp" />
                Chat on WhatsApp
              </a>

              {/* Call */}
              <a href="tel:+254 711 82 71 49"
                type="button"
                className="flex items-center justify-center gap-3 px-6 py-4 text-sm font-semibold text-[#123453] transition-all duration-300 bg-white border-2 border-[#123453] rounded-2xl hover:bg-gradient-to-r hover:from-[#123453] hover:to-rose-500 hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-200 active:translate-y-0"
              >
                <i className="text-base fa-solid fa-phone" />
                Call Us Now
              </a>
            </div>
          </div>

          {/* Trust badges */}
          {/* <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: "fa-solid fa-shield-halved", text: "100% Secure & Private" },
              { icon: "fa-solid fa-bolt", text: "Response Within 30 Mins" },
              { icon: "fa-solid fa-star", text: "5-Star Rated Service" },
              { icon: "fa-solid fa-handshake", text: "Trusted by 500+ Clients" },
            ].map((t) => (
              <div key={t.text} className="flex items-center gap-2 text-xs text-slate-700">
                <i className={`${t.icon} text-[#F91750] text-xs`} />
                <span>{t.text}</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}