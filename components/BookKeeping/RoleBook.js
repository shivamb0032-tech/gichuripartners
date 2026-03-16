"use client";
import Link from "next/link";

const services = [
  {
    title: "Timely and Accurate Bookkeeping ",
    description:
      "Professional bookkeeping services ensure your financial records are accurate and up-to-date. We will record the income, expenses, and other transactions in compliance with tax regulations.",
  },
  {
    title: "Preparation of Tax Returns",
    description:
      "Preparing and planning tax returns is within the scope of professional accounting and bookkeeping services. Our expert team will help you navigate the complexities of tax forms, deductions, and credits. This will help maximize your tax savings and minimize the risk of errors.",
  },
  {
    title: "Audit Support",
    description:
      <>
      Meticulous bookkeeping and clear financial records play an important role during {""} <Link href="/best-kra-tax-audit-services-in-kenya/" className="text-[#EE154B] font-semibold">KRA tax audits</Link>. Our professional tax consultants provide audit support, liaising with tax authorities on your behalf.
      </>
  },
  {
    title: "Adherence to Deadlines",
    description:
      "When doing bookkeeping yourself, business operations and management can overwhelm you. Amid your busy schedule, you may miss an important deadline, risking fines and penalties. Outsourcing bookkeeping services ensures you adhere to these deadlines, thereby avoiding potential penalties.",
  },
  {
    title: "Tax Advisory",
    description:
      <>
      Professional bookkeepers don’t stop at streamlining your financial records. At {""} <Link href="/" className="text-[#EE154B] font-semibold">Gichuri & Partners</Link>, we offer {""}<Link href="/tax-advisory-services-in-kenya/" className="text-[#EE154B] font-semibold">tax advisory services</Link> alongside bookkeeping. These include strategic tax planning, identification and evaluation of tax liabilities, and uncovering tax saving opportunities.
      </>
  },
];

export default function RoleBook() {
  return (
    <section className="px-4 py-12 bg-white sm:px-8 lg:px-13">
      {/* Top Heading */}
      <div className="max-w-6xl mx-auto mb-4">
        <h1 className="text-2xl font-bold text-blue-900 lg:text-4xl md:text-3xl">
          The Role of Bookkeeping in Ensuring Compliance with KRA
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="leading-relaxed text-gray-700 text-md">
            Bookkeeping plays a critical role in ensuring your business stays compliant with <a className="text-[#EE154B] font-semibold" href="https://www.kra.go.ke/">KRA regulations</a> . Here’s how our bookkeeping services can help you meet your tax obligations effectively:
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