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
   
    title: "Experienced Team",
    description: (
     "We’ve been in the payroll service industry for over a decade, gaining extensive knowledge on the ins and outs of payroll management."
    ),
  },
  {
    
    title: "Subject Matter Expertise",
    description:
      "We are certified and professional accounting experts, with subject matter expertise in related fields like bookkeeping, tax advisory, auditing, and payroll execution. These services are intertwined, so working with us means you kill several birds with one stone.",
  },
  {
   
    title: "Transparent and Affordable Pricing ",
    description: (
     "We offer a free consultation to help you learn more about our offers and rates. No additional fees or extra packages- just transparent and cost-effective pricing for the best payroll services."
    ),
  },
  
];

export default function BusinessesWeServe() {
  return (
    <section className="px-4 py-16 bg-gray-50 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Subheading Banner */}
        <div className="px-6 py-3 mb-10 bg-blue-900 rounded-sm">
          <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl lg:text-4xl">Why Choose Us? The Best Payroll Service in Kenya</h2>
        </div>

        {/* Intro Text */}
        <p className="mb-12 leading-relaxed text-justify text-gray-700 text-md">
          We are your close partner in payroll management. Here’s why we are your best choice for payroll services in Kenya:
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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
                  {/* <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-colors duration-300 bg-blue-900 rounded-lg group-hover:bg-[#F5164E]">
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-white" />
                  </div> */}
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