"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    title: "Expertise and Experience",
    content:
      "At Gichuri & Partners, we’ve been providing accounting and bookkeeping services in Kenya for well over 10 years. Over this decade, we’ve worked with thousands of clients, providing customized solutions for their businesses to streamline operations. If you’re looking for real talent and know-how, our accounting team is the perfect blend of expertise and experience.",
  },
  {
    title: "Personalized Accounting Solutions ",
    content:
      "We have served hundreds of businesses, from SMEs and private companies to law firms, non-profit organizations, and large corporations. Whatever your accounting needs, we’ve a solution for them. We tailor our solutions to match your unique needs, maximizing the potential of your business.",
  },
  {
    title: "Trusted By Hundreds of Clients  ",
    content:
      "Gaining the trust of hundreds of businesses is not an easy feat. With years of experience under our belt, working solutions, and highly skilled professionals, it doesn’t come as a surprise that our clients are happy. We are proud partners of leading companies and businesses in Kenya who trust us for all their accounting needs. You can join these happy customers by securing our personalized accounting solutions.",
  },
  {
    title: "Peace of Mind Guarantee",
    content:
      "Our accounting professionals are prompt and easy to deal with. They will handle all your financial needs, ensuring compliance, financial well-being, transparency, and growth. If you’re in the market for an accounting service that guarantees accuracy in capturing, managing, and storing your company’s financial data, look no further.",
  },
];

export default function BestAccounting() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-10 bg-gray-200 md:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            {/* <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full">
             Benefits of Professional Auditing Services
            </span> */}

            <h2 className="max-w-4xl text-3xl font-bold leading-tight text-[#273277] sm:text-4xl lg:text-5xl">
             The Best Accounting Services in Kenya
            </h2>

            <p className="max-w-4xl mt-5 text-base leading-7 text-slate-600 sm:text-md">
              Our accounting team is experienced and well qualified to handle all your accounting business needs. We are the number #1 accounting services provider in Kenya, and this is what makes us stand out:
            </p>

            <div className="mt-8 space-y-4">
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="overflow-hidden transition-all duration-300 bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md"
                  >
                    <button
                      onClick={() => handleToggle(index)}
                      className="flex items-center justify-between w-full gap-4 px-5 py-4 text-left sm:px-6"
                    >
                      <span className="text-base font-semibold text-[#E81448] sm:text-md">
                        {item.title}
                      </span>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E81448]  transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5 text-white" />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pt-0 pb-5 sm:px-6">
                          <p className="text-sm leading-7 text-slate-600 sm:text-base">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white  shadow-xl">
              <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[420px] lg:h-[550px]">
                <Image
                  src="/assets/hero-bg/serv-img-12.jpg"
                  alt="Team working together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* <div className="absolute px-5 py-4 bg-white shadow-lg -bottom-5 -left-3 rounded-2xl sm:-bottom-6 sm:left-6">
              <p className="text-sm font-medium text-slate-500">Trusted by</p>
              <h4 className="text-xl font-bold text-slate-900">500+ Clients</h4>
            </div> */}

            {/* <div className="absolute px-5 py-4 text-white bg-indigo-600 shadow-lg -right-3 top-6 rounded-2xl sm:right-6">
              <p className="text-sm text-indigo-100">Success Rate</p>
              <h4 className="text-xl font-bold">98%</h4>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}