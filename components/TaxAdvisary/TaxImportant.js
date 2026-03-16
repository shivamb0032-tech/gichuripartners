"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const accordionData = [
  {
    title: "Compliance with Tax Regulations ",
    content:
   "Kenya’s tax landscape is dynamic. Tax consultants keep you well inform these changes to ensure you remain compliant. By staying compliant, you avoid penalties and other consequences that could jeopardise your business operations and success."
     
  },
  {
    title: "Tax Saving ",
    content:
      "Tax planning streamlines your individual and business operations by saving on taxes. Efficient tax strategies help minimize liabilities by identifying incentives, deductions, and credits.",
  },
  {
    title: "Avoid Tax Disputes and Manage Risks ",
    content:
      "Tax advisory services keep you on top of the tax game, helping you avoid tax disputes with KRA and other relevant bodies. Tax audits and valuations promote transparency, which helps avoid disagreements with tax authorities or revenue loss incurred during dispute resolution.",
  },
  {
    title: "Strategic Growth",
    content:
      "Tax advisors provide insights that align with your financial and business goals. These insights help you make informed decisions that foster strategic business growth and wealth management.",
  },
  {
    title: "Efficiency ",
    content:
      "When you outsource your tax affairs to a tax consultant, they handle everything, from tax auditing and planning to ensuring compliance through timely tax returns. This saves you time. You can channel that time to better things that will promote financial health and business growth.",
  },
];

export default function TaxImportant() {
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

            <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#273277] sm:text-2xl lg:text-4xl">
             Importance of Tax Advisory Services in Kenya
            </h2>

            <p className="max-w-2xl mt-5 text-base leading-7 text-justify text-slate-600 sm:text-lg">
              Why do you need tax advisory services? Securing the help of a tax advisor or consultant is crucial for the following reasons:
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