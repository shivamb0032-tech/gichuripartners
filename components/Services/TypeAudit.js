"use client";
import Image from "next/image";

export default function TypeAudit() {
  const features = [
    {
      title: "Internal Audits",
      desc: "As a business owner, you owe yourself, the board of management, and other stakeholders assurance that the business is running smoothly. We provide transparent internal audits and risk management advisory. Let us help you identify potential risks and evaluate the best ways to mitigate these risks.",
    },
    {
      title: "External Audits",
      desc: "External audits seek to assure stakeholders like the Kenya Revenue Authority (KRA) and the Independent Financial Reporting Standards (IFRS). We offer independent and transparent external auditing services to all kinds of businesses to examine financial statements and ensure compliance with industry regulations. External audits include statutory, forensic, tax, and project audits.",
    },
    {
      title: "Statutory Audits",
      desc: "The government of Kenya demands that all businesses meet specific legal and regulatory requirements. We conduct statutory audits to make sure your financial statements, employment standards, and business practices comply with these requirements. This helps you avoid expensive penalties and establish trust among all stakeholders.",
    },
    {
      title: "Forensic Audits",
      desc: "We are your partners in identifying and resolving financial fraud, fund embezzlement, and operational mismanagement. If you suspect financial and management misconduct in your business, our forensic audit team is hands-on in providing evidence-based forensic audits. Let us help you get to the root cause and develop lasting solutions.",
    },
    {
      title: "Project Audits",
      desc: "Project audits seek to investigate whether the agreed project goals are met, funds are utilized efficiently, and potential risks are in check. We will provide transparent project audits for your business projects to evaluate the financial and operational efficiency.",
    },
    {
      title: "Tax Audits",
      desc: "Our tax audits go beyond ensuring KRA tax laws are met. We are your expert tax advisory consultants to help you stay compliant, maximize returns, and save on taxes. Let us help you meet tax obligations to avoid penalties and cultivate trust with lenders and other stakeholders.",
    },
    {
      title: "Due Diligence Audits",
      desc: " Last but not least, we help you conduct thorough and detailed audits to conduct due diligence. This is especially crucial when you want to partner with another business, such as through mergers, partnerships, and acquisitions. Let’s gather relevant information to help you make informed and right decisions for your business.",
    },
  ];

  return (
    <section className="relative py-10 overflow-hidden md:py-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-bg/serv-img-14.avif"
          alt="Audit background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* Content */}
      <div className="relative z-10 px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="mb-5 text-3xl font-bold text-[#273277] md:text-4xl lg:text-5xl">
            Types of Audit Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 md:text-xl">
            We offer various types of auditing services in Kenya to help your
            business meet statutory and operational standards.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col items-center">
          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 mb-6 text-[#F5174F] sm:grid-cols-2 lg:grid-cols-4 md:gap-5 md:mb-8">
            {features.slice(0, 4).map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                desc={feature.desc}
              />
            ))}
          </div>

          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 text-justify sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {features.slice(4, 7).map((feature, index) => (
              <FeatureCard
                key={index + 4}
                title={feature.title}
                desc={feature.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Single Card Component
function FeatureCard({ title, desc }) {
  return (
    <div className="flex flex-col h-full overflow-hidden transition-shadow duration-300 bg-white border border-[#F5174F] border-b-4 border-l-4 shadow-md rounded-xl hover:shadow-xl">
      <div className="flex flex-col flex-grow p-4 md:p-5">
        <h3 className="mb-3 text-xl font-semibold text-[#F5174F]">{title}</h3>
        <p className="flex-grow text-base leading-relaxed text-justify text-gray-600">
          {desc}
        </p>
      </div>
    </div>
  );
}