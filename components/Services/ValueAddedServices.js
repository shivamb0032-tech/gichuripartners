"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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

const services = [
  {
    icon: faRocket,
    title: "Pin Registration Services",
    desc: "Smooth registration for KRA PINs, VAT, PAYE, and other tax obligations.",
    number: "01",
  },
  {
    icon: faShieldHalved,
    title: "Compliance Support",
    desc: "Ensure timely and accurate filings to stay fully compliant with KRA.",
    number: "02",
  },
  {
    icon: faChartLine,
    title: "Tax Health Checks",
    desc: "We assess your tax records to identify risks and areas to improve.",
    number: "03",
  },
  {
    icon: faUsers,
    title: "Turnover Tax Guidance",
    desc: "We help SMEs understand and comply with turnover tax.",
    number: "04",
  },
  {
    icon: faLightbulb,
    title: "VAT Advisory Services",
    desc: "Navigate VAT registration, filing, and refunds with expert assistance.",
    number: "05",
  },
  {
    icon: faFileInvoiceDollar,
    title: "KRA Audit Support",
    desc: "Get expert support during KRA audits and representation.",
    number: "06",
  },
  {
    icon: faGavel,
    title: "Tax Dispute Resolution",
    desc: "We assist in resolving tax disputes and appeals with KRA professionally.",
    number: "07",
  },
  {
    icon: faFileCircleCheck,
    title: "Tax Return Filing",
    desc: "Accurate preparation and timely filing of company income tax returns.",
    number: "08",
  },
  {
    icon: faMoneyCheckDollar,
    title: "PAYE Compliance",
    desc: "Stay compliant with accurate payroll tax computations and filings.",
    number: "09",
  },
];

export default function ValueAddedServices() {
  const swiperRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <section className="py-12 overflow-hidden md:py-20 bg-gradient-to-r from-brand-navy to-brand-pink">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Value Added Services
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-base leading-relaxed text-gray-100 md:text-lg">
            Let us support your business with our 10+ years of expertise in the
            field of Accounting
          </p>
        </div>

        {/* Slider wrapper */}
        <div className="relative">
          {/* Desktop side arrows — hidden on mobile */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 bg-white border-2 rounded-full border-[#F91750] text-[#F91750] shadow-lg hover:bg-[#F91750] hover:text-white transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 bg-white border-2 rounded-full border-[#F91750] text-[#F91750] shadow-lg hover:bg-[#F91750] hover:text-white transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Swiper */}
          <div className="md:px-14">
            <Swiper
              onSwiper={(s) => (swiperRef.current = s)}
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              speed={800}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
              }}
              // equal height slides
              style={{ alignItems: "stretch" }}
            >
              {services.map((service) => (
                <SwiperSlide key={service.number} style={{ height: "auto" }}>
                  <div className="relative flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-md group rounded-2xl hover:shadow-xl">
                    <div className="absolute text-4xl font-bold text-[#123453]/10 top-4 right-4 md:text-5xl group-hover:text-indigo-100 transition-colors">
                      {service.number}
                    </div>

                    <div className="flex justify-center pt-8 pb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-[#F91750]/20 rounded-full md:w-20 md:h-20 group-hover:bg-[#F91750]/30 transition-colors">
                        <FontAwesomeIcon
                          icon={service.icon}
                          className="text-2xl text-[#F91750] md:text-3xl group-hover:scale-110 transition-transform"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow px-6 pb-8 text-center">
                      <h3 className="mb-3 text-xl font-semibold text-[#123453] md:text-2xl">
                        {service.title}
                      </h3>
                      <p className="flex-grow text-sm leading-relaxed text-left text-gray-600 md:text-base">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile bottom arrows — hidden on desktop */}
          <div className="flex items-center justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex items-center justify-center w-11 h-11 bg-white border-2 rounded-full border-[#F91750] text-[#F91750] shadow-lg hover:bg-[#F91750] hover:text-white transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex items-center justify-center w-11 h-11 bg-white border-2 rounded-full border-[#F91750] text-[#F91750] shadow-lg hover:bg-[#F91750] hover:text-white transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
