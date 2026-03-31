"use client";
import Link from "next/link";

const services = [
  {
    title: "Startups ",
    description:
      "Are you an early stage business trying to put a mark in the industry? We provide efficient payroll services to help you grow.",
  },
  {
    title: "SMEs",
    description:
      "Small and medium-sized businesses in manufacturing, retail, logistics, private practice, etc.",
  },
  {
    title: "Growing Companies",
    description:
   "Scaling businesses encounter most challenges due to expansion. We offer payroll management to cater to the complex payroll structures of an expanding business. These include regional distributors, supermarkets, private schools, and consulting firms."
  },
  {
    title: "Public Institutions",
    description:
      "SACCOs, banks, hospitals, schools, NGOs, and government agencies",
  },
  {
    title: "Multinationals Operating in Kenya",
    description:
      "Multinationals have complex payroll structures due to their nationwide presence and number of employees. We partner with various foreign businesses in Kenya in the banking, philanthropy, health, oil and gas, and telecommunication sectors."
  },
];

export default function RoleBook() {
  return (
    <section className="px-4 py-12 bg-white sm:px-8 lg:px-13">
      {/* Top Heading */}
      <div className="max-w-6xl mx-auto mb-4">
        <h1 className="text-2xl font-bold text-blue-900 lg:text-4xl md:text-3xl">
          Businesses We Serve
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="leading-relaxed text-gray-700 text-md">
           Gichuri & Partners offers flexible solutions tailored to your business payroll needs, regardless of model or size. We proudly serve a wide range of enterprises, including the following:
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
        <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:w-2/3">
          {services.slice(3, 5).map((service, index) => (
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