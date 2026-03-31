"use client";
import Link from "next/link";

const services = [
  {
    title: "Disputed KRA Assessment",
    description:
      " If you believe KRA has wrongly assessed your taxes, be it VAT, customs duty, or income tax, you can escalate the matter with TAT.",
  },
  {
    title: "Excessive Penalties and Interests",
    description:
      "KRA may impose penalties and interests that seem unfair considering the act of non-compliance. If that’s the case, TAT may help you get fair penalties and interest.",
  },
  {
    title: "Transfer Pricing Disputes",
    description:
      "Multinationals may get into trouble with KRA for discrepancies in transfer pricing and cross-border returns. TAT can solve such a dispute and related disagreements."
      
  },
  {
    title: "Corporate Tax Disputes",
    description:
      "Corporate tax disputes are common in Kenya, especially after a KRA audit and assessment. If you can’t agree on payable taxes and penalties with KRA, TAT can decide such cases.",
  },
  {
    title: "KRA rejected objections",
    description:
     "When a taxpayer is dissatisfied with a tax assessment, penalty, or interest, they are allowed to object to the KRA decision. KRA reviews the objection after which it may adjust the terms or reject your objection. You can appeal the objection with TAT."
  },
  {
    title: "Delayed Feedback or Ignorance from KRA",
    description:
     "Sometimes, KRA may delay getting back to you after filing an objection. Other times, they will entirely ignore the objection, hoping you’ll give in and pay the taxes or penalties. If you believe KRA is ignoring your objection, you can escalate the matter with TAT."
  },
];

export default function NeedTaxTribunal() {
  return (
    <section className="px-4 py-12 bg-white sm:px-8 lg:px-13">
      {/* Top Heading */}
      <div className="max-w-6xl mx-auto mb-4">
        <h1 className="text-2xl font-bold text-blue-900 lg:text-4xl md:text-3xl">
          When Do You Need the Tax Appeals Tribunal?
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="leading-relaxed text-gray-700 text-md">
           Like any other legal court in Kenya, the Tax Appeals Tribunal is a serious institution. Not every dispute with KRA needs to be filed with them. Here are instances when you need the TAT:
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto">
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(3, 6).map((service, index) => (
            <ServiceCard key={index + 3} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="overflow-hidden transition-shadow duration-200 border border-b-4 border-[#1E3A8A] rounded-md shadow-sm hover:shadow-md">
    
      <div className="px-5 pt-5 pb-3">
        <h3 className="text-xl font-bold leading-snug text-blue-900 line-clamp-2 min-h-[2.5rem]">{service.title}</h3>
      </div>

    
      <div className="h-1 mx-5 mb-3 bg-pink-500 rounded-full"></div>

     
      <div className="px-5 pb-5">
        <p className="leading-relaxed text-justify text-gray-600 text-md">{service.description}</p>
      </div>
    </div>
  );
}