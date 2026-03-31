"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    title: "Monthly Payroll Processing",
    content:
      "Our team of payroll and accounting experts will calculate and process the monthly payroll report for your business, ensuring employees are rightfully remunerated and all tax and statutory deductions are made. We also help you disburse salaries, generate payslips, and file timely returns to relevant authorities.",
  },
  {
    title: "Customized Payroll Management",
    content:
      " We recognize the uniqueness of each business, whether a small startup or a growing multinational. Our team will assess your payroll needs and customize the service to match your size and business model.",
  },
  {
    title: "Managing Employee Self-Service Portals ",
    content:
      "Employee self-service portals have become a normal part of human resource management, thanks to technological advancements. At Gichuri & Partners, we manage ESS portals for businesses. This includes:",
    points: [
      "Setting up and managing the ESS portal",
      "Training employees on how to navigate the portal",
      "Integrating the ESS system with other systems like HR and payroll",
    ],
    conclusion:
      "Empower your employees with access to their payslips, leave balances, and other payroll-related information.",
  },
  {
    title: "Cutting Edge PAYE Calculator",
    content:
      "We offer the best PAYE calculator in Kenya. It isn’t just a tool, but a comprehensive solution that adapts to the latest tax bands, reliefs, and deductions to offer instant and accurate results.",
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
              Our Comprehensive Payroll Services
            </h2>

            <p className="max-w-2xl mt-5 text-base leading-7 text-justify text-slate-600 sm:text-lg">
              Gichuri & Partners is a leading payroll service provider in Kenya.
              Our comprehensive payroll services include the following:
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
                          {/* Content */}
                          <p className="text-sm leading-7 text-justify text-slate-600 sm:text-base">
                            {item.content}
                          </p>

                          {/* Points (if exist) */}
                          {item.points && (
                            <ul className="mt-4 space-y-2 list-disc list-inside text-slate-600">
                              {item.points.map((point, i) => (
                                <li key={i} className="text-sm sm:text-base">
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Conclusion (if exist) */}
                          {item.conclusion && (
                            <p className="mt-4 text-sm font-medium text-slate-600 sm:text-base">
                              {item.conclusion}
                            </p>
                          )}
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
