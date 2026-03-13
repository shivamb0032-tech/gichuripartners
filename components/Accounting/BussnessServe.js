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
    title: "Retail Companies",
    description: (
      <>
        We handle{" "}
        <span className="font-medium text-[#F5164E]">book keeping</span> and financial management for
        retailers, including small retail businesses, bookstores, boutiques, grocery stores, and
        wholesalers. Let's handle your inventory accounting, manage cash flow, and taxes for you so
        that you can focus on serving customers.
      </>
    ),
  },
  {
    icon: faBuilding,
    title: "Private Companies",
    description:
      "Are you a private company in Kenya seeking a professional accounting firm to handle your finances? We offer comprehensive accounting services to private enterprises, including financial reporting, bookkeeping, compliance services, and tax advisory.",
  },
  {
    icon: faChartLine,
    title: "Small and Medium Sized Enterprises (SMEs)",
    description: (
      <>
        We help your business maintain good financial health, regardless of its size. Partner with
        us to keep track of your financials and stay compliant with legal regulations. Our team will
        handle book keeping,{" "}
        <span className="font-medium text-[#F5164E]">payroll management</span>, tax planning, and
        other related services so that you can focus on what matters for your business.
      </>
    ),
  },
  {
    icon: faHandshake,
    title: "Non-Profit Organizations (NPOs/NGOs)",
    description:
      "Are you a non-profit or non-governmental organization handling multiple projects? You can outsource all your financial planning and management needs to us. We are your trusted experts in accounting services in Kenya, helping you with grant tracking, donor reporting, financial transparency, and tax compliance.",
  },
];

export default function BusinessesWeServe() {
  return (
    <section className="px-4 py-16 bg-gray-50 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Subheading Banner */}
        <div className="px-6 py-3 mb-10 bg-blue-900 rounded-sm">
          <h2 className="text-xl font-bold tracking-wide text-white">Businesses We Serve</h2>
        </div>

        {/* Intro Text */}
        <p className="mb-12 text-base leading-relaxed text-gray-700">
          We have{" "}
          <span className="font-bold text-gray-900">served 1000+ businesses across Kenya</span>,
          helping them achieve financial success through our tailored solutions. Here are some of
          the sectors we work with:
        </p>

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
                  <h3 className="text-base font-bold leading-snug text-blue-900">{item.title}</h3>
                </div>

                {/* Divider */}
                <div className="mb-4 border-t border-gray-100" />

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}