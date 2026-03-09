"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    title: "Compliance",
    content:
      "A professional audit ensures that your business adheres to existing legal regulations and professional standards as provided under Kenyan laws. Legal standards include the Companies Act, the Employment Act, tax laws, data protection laws, and the Competition Act for fair trade practices. On the other hand, professional standards include ISO standards, IFRS standards, and CMA guidelines.",
  },
  {
    title: "Accurate Financial Reporting ",
    content:
      "Audits help businesses discover errors, misstatements, and possible fraud in financial records. This is important for decision making and establishing trust with donors, shareholders, and other stakeholders. Consequently, financial accuracy boosts confidence in shareholders, customers, and partners.",
  },
  {
    title: "Risk Management ",
    content:
      "Risks can harm your business in many ways, including operational disruptions, defamation, financial losses, and failure. Detecting possible risks early can help businesses take mitigation measures to avoid dire consequences. Professional auditing services identify gaps and inconsistencies in financial records, data management, and internal controls. Also, audits shape decision-making, helping businesses manage risks before they get out of control.",
  },
  {
    title: "Streamline Operations",
    content:
      "If you’re not sold on auditing for any other purpose, do it to streamline your business operations. The stability and longevity of any business depend on continuous improvement. Without monitoring the efficiency of operations, you can’t identify gaps and areas that need improvement. Auditing services improve how you run your business, from identifying financial inconsistencies to uncovering better risk management strategies.",
  },
];

export default function AuditServices() {
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
             Benefits of Professional Auditing Services
            </h2>

            <p className="max-w-2xl mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Professional auditing services provide many benefits to businesses. For most businesses, publishing audit reports is a requirement by law or stakeholders. So what purpose do professional auditing services serve?
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