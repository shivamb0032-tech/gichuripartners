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

export default function HomeHero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consultation booked! We'll call you back shortly.");
  };

  return (
    <section className="relative min-h-screen bg-[#0a0f2e] overflow-hidden flex flex-col items-center justify-center px-4 py-16">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg/Best-Tax-Consultants.jpeg"
          alt="Hero Background"
          fill
          className="object-cover object-right "
          priority
        />
        
        <div className="absolute inset-0 bg-[#0a0f2e]/60" />
      </div>
      
      <div className="absolute top-0 bg-blue-600 rounded-full pointer-events-none left-1/4 w-96 h-96 opacity-10 blur-3xl" />
      <div className="absolute bottom-0 bg-indigo-500 rounded-full pointer-events-none right-1/4 w-80 h-80 opacity-10 blur-3xl" />
      <div className="absolute left-0 w-64 h-64 bg-blue-400 rounded-full pointer-events-none top-1/2 opacity-5 blur-2xl" />

     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 w-48 h-full left-1/3 opacity-10 bg-gradient-to-b from-blue-300 to-transparent rotate-12" />
      </div>

    
      <div className="relative z-10 pl-10 mb-4 text-right">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Best Tax Consultants
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
            in Nairobi, Kenya.
          </span>
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-sm text-gray-300 sm:text-base md:text-lg">
          We Handle Taxes, You Handle Business. Get fast, reliable, and expert
          tax consultation tailored for your business needs.
        </p>
      </div>

     

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-5xl p-6 shadow-2xl bg-white/95 backdrop-blur-sm rounded-2xl sm:p-8">
        <form onSubmit={handleSubmit}>
         
          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-gray-50"
            />

          
            <div className="flex overflow-hidden border border-gray-200 rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-rose-400">
              <select className="px-3 py-3 text-sm text-gray-600 bg-gray-100 border-r border-gray-200 focus:outline-none">
                <option value="+254">🇰🇪 +254</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your Phone No."
                className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
              />
            </div>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-gray-50"
            />

            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-gray-50"
            />
          </div>

          {/* Row 2: Service + CTA */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="px-4 py-3 text-sm text-gray-500 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-gray-50"
            >
              <option value="">What Services Are You Looking?</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <button
              type="submit"
              className="px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition-all duration-200 rounded-lg shadow-lg bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 hover:shadow-rose-500/30 hover:scale-[1.02] active:scale-95"
            >
              Book A Free Consultation
            </button>
          </div>
        </form>
      </div>

      {/* Stats Bar */}
      {/* <div className="relative z-10 w-full max-w-5xl mt-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0 sm:divide-x sm:divide-gray-600">
          {[
            { icon: "🛡️", label: "What Sets Us Apart" },
            { value: "200+", label: "Certified Tax Experts" },
            { value: "5,000+", label: "Verified Reviews" },
            { value: "1,000+", label: "Monthly Client Onboardings" },
            { label: "Serving Businesses Across Kenya" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2"
            >
              {item.icon && <span className="text-lg">{item.icon}</span>}
              {item.value && (
                <span className="text-sm font-bold text-rose-400">{item.value}</span>
              )}
              <span className="text-xs text-gray-300 sm:text-sm whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}