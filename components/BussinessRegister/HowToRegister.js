"use client";
import Link from "next/link";

const services = [
  {
    title: "Name Search and Reservation ",
    description:
      "The first step in starting a business is choosing a business name. You must conduct a name search to ensure that your desired name is available. The name should be compliant with relevant regulations. If the name meets these requirements, the next step is to reserve it so that you can carry on with the business registration.",
  },
  {
    title: "Choosing a business structure",
    description:
      "The type of documents you present for registration varies from one entity to another. Therefore, you must choose your business structure such as sole proprietorship, partnership, or limited liability company.",
  },
  {
    title: "Document Preparation",
    description:
     "Prepare the relevant documents based on your business structure, such as memorandums of associations (MOAs), partnership agreements, articles of association, KRA PIN certificate, and business name reservation certificate."
  },
  {
    title: "Submit Application via e-Citizen",
    description:
      "After preparing all the necessary documents, the next step is to submit your application to the Registrar of Companies. This is also the part where you pay the required registration fees.",
  },
  {
    title: "Issuance of Business Registration Certificate",
    description:
      "The Registrar of Companies will review your documents to verify legal compliance. Once verified, a certificate will be issued to officially recognise your business entity."
  },
];

export default function HowToRegister() {
  return (
    <section className="px-4 py-12 bg-white sm:px-8 lg:px-13">
      {/* Top Heading */}
      <div className="max-w-6xl mx-auto mb-4">
        <h1 className="text-2xl font-bold text-center text-blue-900 lg:text-4xl md:text-3xl">
          How to Register a Business in Kenya
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="leading-relaxed text-center text-gray-700 text-md">
            Business registration in Kenya involves several steps. These are:
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