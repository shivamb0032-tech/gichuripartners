"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faShieldHalved,
  faChartLine,
  faUsers,
  faLightbulb,
  faFileInvoiceDollar,
  faGavel,
  faFileCircleCheck,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function TaxCompliance() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const services = [
    {
      icon: faRocket,
      title: "Pin Registration",
      desc: "Gichuri & Partners offers seamless KRA PIN, VAT, PAYE, TOT, and Excise Duty registration services. We ensure your business meets all tax obligations, avoiding penalties and legal issues. Get expert tax registration and compliance services tailored to your needs today!",
      number: "01",
    },
    {
      icon: faShieldHalved,
      title: "KRA Return Filing",
      desc: "Ensure timely and accurate tax filing with Gichuri & Partners. We handle VAT, PAYE, Corporate Tax, TOT, and Withholding Tax returns, ensuring full KRA compliance. Avoid penalties, reduce tax risks, and keep your business on the right track with our professional tax services.",
      number: "02",
    },
    {
      icon: faChartLine,
      title: "Tax Advisory",
      desc: "Optimize your tax position with expert guidance from Gichuri & Partners. We provide tailored tax-saving strategies, legal compliance advice, and business structuring solutions to minimize tax liabilities and maximize profits while staying compliant with Kenyan tax laws.",
      number: "03",
    },
    {
      icon: faUsers,
      title: "Tax Audit Support",
      desc: "Gichuri & Partners conducts tax health checks to identify risks and ensure compliance. We assist businesses with KRA audits, review financial records, and provide proactive tax solutions to prevent disputes, penalties, and unexpected liabilities. Stay compliant with us!",
      number: "04",
    },
    {
      icon: faLightbulb,
      title: "Tax Dispute Resolution",
      desc: "Resolve tax disputes efficiently with Gichuri & Partners. We assist businesses in handling KRA objections, appeals, and tribunal cases. Our experts negotiate settlements and provide legal tax solutions to help you overcome tax compliance challenges with confidence.",
      number: "05",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Bookkeeping",
      desc: "Keep your financial records accurate with Gichuri & Partners. We offer bookkeeping, financial statement preparation, and tax-compliant accounting services to ensure smooth operations, full compliance, and improved financial management for your business.",
      number: "06",
    },
    {
      icon: faGavel,
      title: "Payroll Management",
      desc: "Gichuri & Partners simplifies payroll processing by handling PAYE, NHIF, and NSSF compliance. We ensure accurate salary calculations, timely remittances, and regulatory compliance, allowing businesses to focus on growth while avoiding payroll-related penalties.",
      number: "07",
    },
    {
      icon: faFileCircleCheck,
      title: "KRA Tax Amnesty",
      desc: "Struggling with tax debt? Gichuri & Partners helps businesses apply for KRA tax amnesty, negotiate tax waivers, and settle outstanding tax liabilities. Avoid penalties and legal action with our expert tax debt resolution services. Get compliant and regain financial stability today!",
      number: "08",
    },
    {
      icon: faMoneyCheckDollar,
      title: "Business Compliance",
      desc: "Stay legally compliant with Gichuri & Partners. We assist with statutory deductions, company annual returns, corporate tax compliance, and regulatory filings. Protect your business from penalties and legal risks with our expert corporate compliance solutions.",
      number: "09",
    },
  ];

  return (
    <section className="py-12 overflow-hidden md:py-16 bg-gradient-to-r from-brand-navy to-brand-pink">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Value Added Services
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-base leading-relaxed text-gray-100 md:text-lg">
            Let us support your business with our 10+ years of expertise in the field of Accounting
          </p>
        </div>

        <div className="relative px-12 md:px-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            speed={800}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="!pb-4"
          >
            {services.map((service) => (
              <SwiperSlide key={service.number}>
                <div className="relative flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-md group rounded-2xl hover:shadow-xl">
                  <div className="absolute text-4xl font-bold transition-colors text-[#123453]/50 top-4 right-4 md:text-5xl group-hover:text-indigo-200">
                    {service.number}
                  </div>

                  <div className="flex justify-center pt-8 pb-4">
                    <div className="flex items-center justify-center w-16 h-16 transition-colors bg-[#F91750]/20 rounded-full md:w-20 md:h-20 group-hover:bg-[#F91750]/10">
                      <FontAwesomeIcon
                        icon={service.icon}
                        className="text-2xl text-[#F91750] transition-transform md:text-3xl group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow px-6 pb-8 text-center">
                    <h3 className="mb-3 text-xl font-semibold text-[#123453] md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="flex-grow text-sm leading-relaxed text-gray-600 md:text-base">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="absolute left-0 md:left-[-60px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-2 border-[#F91750] text-[#F91750] flex items-center justify-center shadow-lg hover:bg-[#F91750] hover:text-white transition-all duration-300 focus:outline-none"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            ref={nextRef}
            className="absolute right-0 md:right-[-60px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-2 border-[#F91750] text-[#F91750] flex items-center justify-center shadow-lg hover:bg-[#F91750] hover:text-white transition-all duration-300 focus:outline-none"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <p className="pt-3 text-center text-gray-100">At Gichuri & Partners, we take pride in being The Best Tax Consultants In Kenya. We uphold professionalism, integrity, and excellence, offering the best tax consultancy services to drive business growth and ensure compliance. Trust us for expert financial solutions!</p>
      </div>
    </section>
  );
}