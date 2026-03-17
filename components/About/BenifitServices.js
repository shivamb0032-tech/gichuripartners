// components/BenefitServices.tsx
export default function BenefitServices() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-5 py-12 overflow-hidden bg-white md:px-10 lg:px-16 md:py-20">
      {/* Background gradient - only visible behind right side on lg+ */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[#273285] via-[#273285] to-[#E21345] opacity-90"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-10 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-16">
        {/* Image section - comes FIRST on mobile, SECOND on desktop */}
        <div className="relative flex items-center justify-center order-1 lg:order-2 min-h-[420px] md:min-h-[540px] lg:min-h-[600px]">
          {/* Solid gradient circle */}
          <div className="absolute right-1/2 top-1/2 h-[260px] w-[260px] translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#E21345] via-red-500 to-[#273285] md:h-[380px] md:w-[380px] lg:right-8 lg:h-[460px] lg:w-[460px] lg:translate-x-0"></div>

          {/* Blurred glow layer */}
          <div className="absolute right-1/2 top-1/2 h-[320px] w-[320px] translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#E21345] via-red-400 to-[#273285] opacity-30 blur-3xl md:h-[430px] md:w-[430px] lg:right-4 lg:h-[520px] lg:w-[520px] lg:translate-x-0"></div>

          {/* Floating image - same lift effect everywhere */}
          <div className="relative z-20 flex items-start justify-center translate-y-[-12%] md:translate-y-[-16%] lg:translate-y-[-18%]">
            <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-[8px] border-white bg-white shadow-[0_25px_60px_rgba(0,0,0,0.22)] md:h-[380px] md:w-[380px] md:border-[12px] lg:h-[460px] lg:w-[460px] lg:border-[14px]">
              <img
                src="/assets/Tax-Consultant.png"
                alt="Tax Consultant - Gichuri & Partners"
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Text section - comes SECOND on mobile, FIRST on desktop */}
        <div className="flex flex-col justify-center order-2 space-y-4 text-center md:space-y-8 lg:text-left lg:py-5 lg:order-1">
          <h1 className="text-4xl font-bold leading-tight text-[#273285] md:text-5xl lg:text-6xl">
            Benefits of Our Services
          </h1>

          <p className="max-w-xl mx-auto text-base leading-relaxed text-justify text-gray-600 md:text-lg lg:mx-0">
            Gichuri & Partners is Kenya’s trusted leader in tax consultancy,
            offering a full spectrum of tax, audit, and financial advisory
            services. Our expertise spans Kenyan direct and indirect taxes,
            exchange control regulations, and employee-related compliance,
            ensuring businesses operate smoothly while meeting regulatory
            requirements.
          </p>

          <p className="max-w-xl mx-auto text-base leading-relaxed text-justify text-gray-600 md:text-lg lg:mx-0">
            We adhere to the Global Tax Code of Conduct, upholding the highest
            standards of professionalism, accuracy, and integrity. Our Tax
            Services provide expert guidance to help you make informed financial
            decisions and optimize tax efficiency. Likewise, our Audit Services
            offer deep financial insights, ensuring transparency, compliance,
            and business growth.
          </p>

          <p className="max-w-xl mx-auto text-base font-bold leading-relaxed text-justify text-gray-700 md:text-lg lg:mx-0">
            Partner with Gichuri & Partners where financial expertise meets
            business success!
          </p>
        </div>
      </div>
    </section>
  );
}