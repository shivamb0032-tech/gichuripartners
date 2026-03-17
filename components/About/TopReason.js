"use client";

import { FiShield, FiTrendingUp, FiUsers, FiFileText } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";

const cards = [
  {
    icon: FaLocationArrow,
    iconColor: "text-[#E21345]",
    iconBg: "bg-red-50",
    iconRing: "border-[#E21345]",
    title: "Extensive Experience",
    description:
      "With over 10 years of expertise in tax consulting, business consulting, and bookkeeping consulting, we bring a wealth of knowledge to our clients.",
  },
  {
    icon: FaLocationArrow,
    iconColor: "text-[#E21345]",
    iconBg: "bg-emerald-50",
    iconRing: "border-[#E21345]",
    title: "All-in-One Tax Solutions",
    description:
      "Our services cover all aspects of Kenyan direct and indirect taxes, exchange control regulations, and employee-related issues, ensuring that your business is fully compliant and optimized.",
  },
  {
    icon: FaLocationArrow,
    iconColor: "text-[#E21345]",
    iconBg: "bg-blue-50",
    iconRing: "border-[#E21345]",
    title: "Client-Focused Tax Strategies",
    description:
      "Our culture is built around ensuring the success of our clients. We see the potential within businesses and the people in them, and we are dedicated to helping you achieve your goals.",
  },
  {
    icon: FaLocationArrow,
    iconColor: "text-[#E21345]",
    iconBg: "bg-yellow-50",
    iconRing: "border-[#E21345]",
    title: "Integrity & Compliance at the Core",
    description:
      "We perform our services in accordance with the Global Tax Code of Conduct, maintaining the highest levels of professionalism and integrity.",
  },
  {
    icon: FaLocationArrow,
    iconColor: "text-[#E21345]",
    iconBg: "bg-yellow-50",
    iconRing: "border-[#E21345]",
    title: "Data-Driven Decision Making",
    description:
      "Through our financial advisory services, we empower your decision-making process with insightful advice and strategic guidance.",
  },
  {
    icon: FaLocationArrow,
    iconColor: "text-[#E21345]",
    iconBg: "bg-yellow-50",
    iconRing: "border-[#E21345]",
    title: "Experienced Tax Professionals",
    description:
      "Our team of experienced professionals, including tax consultants, audit managers, and managing partners, is dedicated to providing top-notch services and support.",
  },
  {
    icon: FaLocationArrow,
    iconColor: "text-[#E21345]",
    iconBg: "bg-yellow-50",
    iconRing: "border-[#E21345]",
    title: "Business Growth Partners",
    description:
      "Beyond tax consulting, we offer business consulting and bookkeeping services that streamline your operations and enhance your financial transparency.",
  },
  {
    icon: FaLocationArrow,
    iconColor: "text-[#E21345]",
    iconBg: "bg-yellow-50",
    iconRing: "border-[#E21345]",
    title: "Client Satisfaction",
    description:
      "Our clients, including notable names like , Kidspot Baby Store, Savana Honey, have achieved significant business growth and success with our support.",
  },
];

export default function TopReason() {
  return (
    <section className="w-full px-4 py-16 bg-gray-200 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center max-w-6xl gap-4 mx-auto">

        {/* Heading */}
        
        <h2 className="text-3xl font-bold leading-tight text-center text-[#273277] sm:text-4xl lg:text-5xl">
        Top Reasons For Using {" "}
          <span className="text-[#E21345]">Our Services</span>
        </h2>

        {/* Description */}
        {/* <p className="max-w-5xl mt-2 text-base leading-relaxed text-center text-gray-500">
          
        </p> */}

        {/* Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="flex flex-col gap-4 p-6 transition-shadow duration-300 bg-white border border-[#E21345] shadow-sm rounded-2xl hover:shadow-md"
              >
                {/* Card top: icon + title */}
                <div className="flex items-center gap-3">
                  {/* Circle icon */}
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-full border-2 ${card.iconRing} ${card.iconBg} flex items-center justify-center`}
                  >
                    <Icon className={`text-xl ${card.iconColor}`} />
                  </div>
                  {/* Title */}
                  <h3 className="text-base font-bold leading-tight text-gray-800">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-justify text-gray-500">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}