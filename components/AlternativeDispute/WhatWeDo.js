"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const accordionData = [
  {
    title: "Case Review and Advisory",
    content:
      "As we mentioned earlier, not all tax disputes are eligible for the ADR process in Kenya. Our team of experts will review your case and assess its eligibility. We will then advise on the best step forward.",
  },
  {
    title: "Preparing ADR Requests",
    content:
      "After establishing that your case is indeed eligible for ADR, we will prepare a formal ADR request and file it with the relevant authorities. We handle all documentation and file the request per the provided guidelines and on time.",
  },
  {
    title: "Representation ",
    content:
      "Facing an ADR process alone is a little overwhelming. Our tax experts will represent you in the discussions, ensuring your interests are well-protected.",
  },
  {
    title: "Negotiation and Settlement",
    content:
      "We will draft a solid negotiation and settlement strategy to ensure you get the most favorable outcome from the mediation process.",
  },
  {
    title: "Drafting Settlement Agreement",
    content:
      "After reaching a consensus with KRA, you need a fair and enforceable settlement agreement. We will draft one for you to ensure it’s compliant with the provided guidelines.",
  },
  {
    title: "Post ADR Support",
    content:
      "Settling is not the end of the ADR process for a taxpayer. We provide ongoing support to ensure the smooth implementation of the settlement agreement and complete resolution of the dispute.",
  },
];

export default function WhatWeDo() {
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

            <h2 className="max-w-4xl text-3xl font-bold leading-tight text-[#273277] sm:text-4xl lg:text-4xl">
             KRA ADR Services in Kenya –  What We Do
            </h2>

            <p className="max-w-2xl mt-3 text-base leading-7 text-justify text-slate-600 sm:text-lg">
              At <Link href="/" className="font-semibold text-brand-pink-dark">Gichuri & Partners</Link>, we provide comprehensive ADR services to individual taxpayers, businesses, non-profits, large corporations, and multinationals. Here’s what we do for you:
            </p>

            <div className="mt-5 space-y-4">
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="overflow-hidden transition-all duration-300 bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md"
                  >
                    <button
                      onClick={() => handleToggle(index)}
                      className="flex items-center justify-between w-full gap-4 px-5 py-2 text-left sm:px-6"
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
                          <p className="text-sm leading-7 text-justify text-slate-600 sm:text-base">
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
                  src="/assets/hero-bg/Serah-Kariuki-768x576.jpg"
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