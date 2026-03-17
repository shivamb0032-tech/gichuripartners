// components/ConsultationSection.jsx

import Image from 'next/image';

export default function ConsultationSection() {
  return (
    <section className="max-w-5xl px-4 py-5 mx-auto my-4">
      <div className="flex flex-col overflow-hidden bg-white shadow-xl md:flex-row rounded-2xl border border-[#EC154A] border-l-4">
        
        {/* Left Div - Form */}
        <div className="flex-1 p-5 md:p-8 lg:p-10">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#123453] md:text-3xl">
            Request for Our Free Consultation
          </h2>

          <form className="space-y-3">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block mb-0.5 text-xs font-medium tracking-wider text-gray-700 uppercase">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-3 py-2 transition-all border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            {/* Mobile Number Field */}
            <div>
              <label htmlFor="mobile" className="block mb-0.5 text-xs font-medium tracking-wider text-gray-700 uppercase">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="+1 234 567 890"
                className="w-full px-3 py-2 transition-all border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block mb-0.5 text-xs font-medium tracking-wider text-gray-700 uppercase">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@company.com"
                className="w-full px-3 py-2 transition-all border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            {/* Company Name Field */}
            <div>
              <label htmlFor="company" className="block mb-0.5 text-xs font-medium tracking-wider text-gray-700 uppercase">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company Ltd."
                className="w-full px-3 py-2 transition-all border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            {/* Services Label with Dropdown */}
            <div>
              <label htmlFor="services" className="block mb-0.5 text-xs font-medium tracking-wider text-gray-700 uppercase">
                What Services Are You Looking?
              </label>
              <select
                id="services"
                name="services"
                className="w-full px-3 py-2 transition-all border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                required
              >
                <option value="" disabled selected>Select a service</option>
                <option value="consulting">Consulting</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="it-support">IT Support</option>
                <option value="training">Training</option>
              </select>
            </div>

            {/* Captcha - I'm not a robot */}
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 w-fit">
              <input type="checkbox" id="not-robot" name="not_robot" className="w-4 h-4 accent-blue-600" required />
              <label htmlFor="not-robot" className="text-sm text-gray-700 cursor-pointer">I'm not a robot</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 text-base font-medium text-white transition-colors bg-[#EC154A] rounded-lg shadow-md md:w-auto hover:bg-[#123453] focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              Request A Callback Now
            </button>
          </form>
        </div>

        {/* Right Div - Image Full */}
        <div className="flex-1 relative min-h-[350px] md:min-h-full bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src="/assets/hero-bg/Gichuri-Partners.jpg"
            alt="Business team in consultation meeting"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}