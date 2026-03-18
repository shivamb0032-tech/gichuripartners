"use client";

import Link from "next/link";
import { GiBullseye } from "react-icons/gi";
import { MdOutlineFlag } from "react-icons/md";
import { TbEyeSpark } from "react-icons/tb";

const cards = [
  {
    icon: GiBullseye,
    iconColor: "text-[#E21345]",
    title: "Our Mission",
    description:
      "Our mission is to empower businesses with expert tax, accounting, and financial solutions, ensuring compliance, efficiency, and long-term growth through strategic guidance.",
    pillBg: "bg-[#E21345]",
    iconRing: "border-[#E21345]",
    iconBg: "bg-white",
    cardBorder: "border-[#E21345]",
    flagColor: "text-[#E21345]",
  },
  {
    icon: TbEyeSpark,
    iconColor: "text-[#273277]",
    title: "Our Vision",
    description:
      "To be Kenya's most trusted and innovative tax and accounting advisory firm, empowering businesses with expert guidance to achieve full tax compliance and financial success.",
    pillBg: "bg-[#273277]",
    iconRing: "border-[#273277]",
    iconBg: "bg-white",
    cardBorder: "border-[#273277]",
    flagColor: "text-[#273277]",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="w-full px-4 py-16 bg-white sm:px-8 lg:px-16">
      <div className="flex flex-col max-w-6xl gap-12 mx-auto">

        {/* Heading */}
        <div className="text-center">
          
          <h2 className="text-3xl font-bold leading-tight text-[#273277] sm:text-4xl lg:text-5xl">
            We are the best 
            <span className="text-[#E21345]"> tax consultants in Kenya</span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 bg-[#E21345] rounded-full" />
        </div>

        {/* Paragraphs */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <p className="text-base leading-relaxed text-justify text-gray-600">
            Gichuri & Partners proudly stands as the leading tax consultants in Kenya, renowned for our comprehensive range of tax consultancy services. Our expertise covers all facets of Kenyan direct and indirect taxes, exchange control regulations, and employee-related issues.
          </p>
          <p className="text-base leading-relaxed text-justify text-gray-600">
            We adhere to the Global Tax Code of Conduct, which underscores our commitment to maintaining the highest standards of professionalism and integrity in all our services. Our <Link href="/tax-advisory-services-in-kenya/" className="text-[#E21345] font-semibold">Tax Services</Link> are designed to empower your decision-making process through insightful financial advisory.
          </p>
          <p className="text-base leading-relaxed text-justify text-gray-600">
            Our Audit Services provide valuable insights to help you make informed decisions, ensuring your business operations are transparent and compliant. In the realm of Business Services, we offer strategic advice that fosters growth and success.
          </p>
          <p className="text-base leading-relaxed text-justify text-gray-600">
            Our <Link href="/bookkeeping-services-in-kenya/" className="text-[#E21345] font-semibold">Bookkeeping Services</Link> are meticulously crafted to keep your financial records accurate and up-to-date. At Gichuri & Partners, we are dedicated to serving our clients with excellence, supporting them every step of the way.
          </p>
        </div>

        {/* Cards — horizontal on md+, vertical on mobile */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="relative pt-5">
                {/* Pill heading */}
                <div
                  className={`absolute -top-0 left-6 z-10 ${card.pillBg} text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-md flex items-center gap-1.5`}
                >
                  {card.title}
                  <MdOutlineFlag className="text-base text-white" />
                </div>

                {/* Card body */}
                <div
                  className={`bg-white rounded-2xl border ${card.cardBorder} shadow-sm pt-8 pb-5 px-5 flex items-start gap-4`}
                >
                  {/* Circle icon */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-full border-2 ${card.iconRing} ${card.iconBg} flex items-center justify-center shadow-sm`}
                  >
                    <Icon className={`text-2xl ${card.iconColor}`} />
                  </div>

                  {/* Divider */}
                  <div className="self-stretch w-px mx-1 bg-gray-200" />

                  {/* Description */}
                  <p className="flex-1 leading-relaxed text-justify text-gray-500 text-md">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}