"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faBuilding,
  faChartLine,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const businesses = [
  {
    icon: faStore,
    title: "",
    description: (
      <>
        The Tax Appeals Tribunal (TAT) is a statutory body established by the Tax Appeals Tribunal Act 2013. Its mandate is to resolve tax disputes between taxpayers and KRA. Before you escalate your case to TAT, you’re required to object to KRA’s decision. For example, if KRA orders you to pay additional tax after an audit, you need to object to the decision and let them know via iTax or in person at their offices.
      </>
    ),
  },
  {
    icon: faBuilding,
    title: "",
    description:
      "If KRA fails to respond or rejects the objection, you’re free to escalate the matter with TAT. TAT resolves all manner of tax disputes, including penalties, KRA assessments, and rejected or ignored objections. The tribunal can uphold KRA’s decision, overturn it, or make adjustments. If a taxpayer is unsatisfied with the tribunal’s ruling, they can appeal the case in the High Court of Kenya.",
  },
  
];

export default function WhatTaxApp() {
  return (
    <section className="px-4 py-16 bg-gray-50 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Subheading Banner */}
        <div className="px-6 py-3 mb-10 bg-blue-900 rounded-sm">
          <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl lg:text-4xl">What is the Tax Appeals Tribunal in Kenya?</h2>
        </div>

        {/* Intro Text */}
        {/* <p className="mb-12 leading-relaxed text-justify text-gray-700 text-md">
         
        </p> */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {businesses.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden transition-shadow duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-lg group"
            >
              {/* Top accent bar */}
              <div className="w-full h-1 transition-colors duration-300 bg-blue-900 group-hover:bg-[#F5164E]" />

              <div className="p-6">
                {/* Icon + Title Row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-colors duration-300 bg-blue-900 rounded-lg group-hover:bg-[#F5164E]">
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-blue-900">{item.title}</h3>
                </div>

                {/* Divider */}
                <div className="mb-4 border-t border-gray-100" />

                {/* Description */}
                <p className="leading-relaxed text-justify text-gray-600 text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}