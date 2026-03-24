'use client';

import { useEffect, useState } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    countryCode: "+91",
    mobileNumber: "",
    email: "",
  });

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Popup Form Data:", form);
    // API call yahan laga sakte ho
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[99999]">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[420px] overflow-hidden animate-fadeIn relative">

        {/* Close Button - Right Corner pe */}
        <button
          onClick={closePopup}
          className="absolute z-20 flex items-center justify-center w-8 h-8 text-3xl text-gray-400 transition-colors top-5 right-5 hover:text-gray-700"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="p-6 sm:p-8 md:p-10 pt-14">   {/* pt-14 isliye close button ke liye space */}

          {/* Title */}
          <p className="px-2 mb-8 text-xl font-bold leading-tight text-center text-gray-900 sm:text-2xl md:text-3xl">
            Enter your details to receive a full quote and consultation
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full h-12 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#f5a524] focus:ring-4 focus:ring-[#f5a524]/20 text-base placeholder:text-gray-500"
            />

            {/* Phone Row */}
            <div className="grid grid-cols-[78px_1fr] gap-3">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                className="h-12 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#f5a524] focus:ring-4 focus:ring-[#f5a524]/20 text-base bg-white"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
              </select>

              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={form.mobileNumber}
                onChange={handleChange}
                required
                className="h-12 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#f5a524] focus:ring-4 focus:ring-[#f5a524]/20 text-base placeholder:text-gray-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full h-12 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#f5a524] focus:ring-4 focus:ring-[#f5a524]/20 text-base placeholder:text-gray-500"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-14 mt-6 bg-[#f5a524] hover:bg-[#e59617] transition-all text-white font-bold text-lg rounded-2xl tracking-wide"
            >
              Get a Detailed Quotation!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}