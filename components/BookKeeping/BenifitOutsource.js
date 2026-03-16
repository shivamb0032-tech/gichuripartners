"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const accordionData = [
  {
    title: "Expertise and Accuracy",
    content:
    <><Link
          href="/accounting-services-in-kenya/"
          className="font-semibold text-[#F71950]"
        >
          Professional accounting and bookkeeping firms
        </Link>
    {""} employ well-trained and experienced accountants. These experts specialize in financial management and tax compliance, which ensures accurate and error-free financial records.
    </>
     
  },
  {
    title: "Cost Effectiveness ",
    content:
      "Large corporations can afford in-house accountants to keep track of their financial transactions and books. The same can’t be said about small and medium-sized businesses. Outsourcing bookkeeping services lets you save on cost while still accessing top-notch accounting services from experts.",
  },
  {
    title: "Saves Time ",
    content:
      "Managing bookkeeping as a business owner can be time-consuming. Outsourcing clears your schedule and saves you time. You can utilize this time to focus on core business activities like operational management and revenue-generating tasks.",
  },
  {
    title: "Scalability",
    content:
      "As your business grows, so do your accounting needs. While hiring additional staff looks like a solid option, outsourcing is better because it saves you money. Outsource bookkeeping services to meet the evolving requirements of your enterprise.",
  },
  {
    title: "Compliance with KRA Regulations",
    content:
      "Compliance is probably the most beneficial aspect of outsourcing. Professional accounting and bookkeeping firms keep up with changing tax laws. Letting them handle your financial affairs minimizes the risk of non-compliance and associated penalties.",
  },
];

export default function BenifitOutsource() {
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

            <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#273277] sm:text-4xl lg:text-5xl">
             Benefits of Outsourcing Bookkeeping Services
            </h2>

            <p className="max-w-2xl mt-5 text-base leading-7 text-justify text-slate-600 sm:text-lg">
              Outsourcing bookkeeping services offers many benefits to your business. This is especially true for <Link href='/smes-bookkeeping-services-in-kenya/' className="text-[#F71950] font-semibold">small and medium-sized enterprises (SMEs)</Link> with limited resources. Here’s how outsourcing can save you time, money, and headaches:
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
                      <span className="text-base font-semibold text-[#E81448] sm:text-lg">
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
                          <p className="text-sm leading-7 text-justify text-slate-600">
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
              <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[420px] lg:h-[650px]">
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