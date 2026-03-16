"use client";

import { useRef, useEffect, useState } from "react";
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

export default function ValueAddedServices() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) return null;

  return (
    <section className="py-12 overflow-hidden md:py-20 bg-gradient-to-r from-brand-navy to-brand-pink">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Value Added Services
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-base leading-relaxed text-gray-100 md:text-lg">
            Let us support your business with our 10+ years of expertise in the
            field of Accounting
          </p>
        </div>

        <div className="relative px-10 md:px-14">
          <Swiper
            modules={[Navigation, Autoplay]}
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
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            className="!pb-4"
          >
            {services.map((service) => (
              <SwiperSlide key={service.number}>
                <div className="relative flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-md group rounded-2xl hover:shadow-xl">
                  <div className="absolute text-4xl font-bold transition-colors text-[#123453]/10 top-4 right-4 md:text-5xl group-hover:text-indigo-100">
                    {service.number}
                  </div>

                  <div className="flex justify-center pt-8 pb-4">
                    <div className="flex items-center justify-center w-16 h-16 transition-colors bg-[#F91750]/20 rounded-full md:w-20 md:h-20 group-hover:bg-[#F91750]/30">
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
                    <p className="flex-grow text-sm leading-relaxed text-left text-gray-600 md:text-base">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white border-2 rounded-full md:w-12 md:h-12 border-[#F91750] text-[#F91750] shadow-lg hover:bg-[#F91750] hover:text-white transition-all duration-300 focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white border-2 rounded-full md:w-12 md:h-12 border-[#F91750] text-[#F91750] shadow-lg hover:bg-[#F91750] hover:text-white transition-all duration-300 focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}