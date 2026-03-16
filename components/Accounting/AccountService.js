"use client";

const services = [
  {
    title: "Compliance With Financial Regulations in Kenya ",
    description:
      "The success and financial health of your business rely on compliance with Kenyan tax laws and financial regulations. Since Kenya’s financial landscape is constantly changing, keeping up with regulations and requirements can be daunting. We offer unmatched accounting services and expert guidance to help you keep up with Kenya Revenue Authority (KRA) requirements and other market regulations.",
  },
  {
    title: "Clear and Accurate Financial Reporting",
    description:
      "Do you need help with your business’s balance sheets, income statements, and cash flow reports? Keeping up with these financial reports will take up precious time that you would rather use in strategizing how to grow and expand your business. We take the burden of financial reporting off your shoulders so that you can focus on what matters. Our detailed reports will give useful insights into the health of your company and help shape future decisions.",
  },
  {
    title: "Proper Bookkeeping",
    description:
      "Without proper bookkeeping, you risk the longevity of your business. We offer the best bookkeeping services in Kenya to create a proper backbone for your enterprise. Our team of experts will keep a good record of your financial affairs and ensure they are up-to-date. Let us keep track of your daily transactions to help you monitor the financial position of your business.",
  },
  {
    title: "Financial Management",
    description:
      "Is managing your business finances becoming tedious and time-consuming? Outsource the services to Gichuri & Partners accounting experts. We will manage your cash flow and provide strategic planning solutions that guarantee long-term stability and profitability. Through financial management, you can efficiently manage your company’s finances, reduce unnecessary costs, and save on taxes.",
  },
  {
    title: "Tax Preparation and Compliance",
    description:
      "Non-compliance with KRA tax regulations can take a huge toll on your business through penalties and liabilities. We provide the best tax preparation and compliance services in Kenya to help businesses operate peacefully in the ever-changing tax landscape. Our team will help you navigate the complex business tax laws, manage liabilities, and maximize returns.",
  },
];

export default function AccountingServices() {
  return (
    <section className="px-4 py-12 bg-white sm:px-8 lg:px-13">
      {/* Top Heading */}
      <div className="max-w-6xl mx-auto mb-4">
        <h1 className="text-2xl font-bold text-blue-900 lg:text-4xl md:text-3xl">
          Best Accounting Services in Kenya
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="leading-relaxed text-gray-700 text-md">
          <a href="/" className="font-semibold text-[#EE154B]">Gichuri &amp; Partners</a> is the best
          accounting services provider in Kenya. We help your business achieve financial success
          through bookkeeping, financial reporting,{" "}
          <a href="/annual-tax-return-filing-in-kenya/" className="font-semibold text-[#EE154B]">tax filing</a>, and compliance with legal regulations.
          Are you looking for the best accounting services in Kenya? Our accounting experts offer
          top-tier accounting services and expert guidance to help you maintain your company's
          financial health.
        </p>
      </div>

      {/* Subheading */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="inline-block w-full px-6 py-3 bg-blue-900 rounded-sm">
          <h2 className="text-xl font-bold tracking-wide text-white">What We Do</h2>
        </div>
      </div>

      {/* Sub-description */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="text-lg font-semibold gray-600 text-">
          Our comprehensive{" "}
          <a href="/smes-accounting-services-in-kenya/" className="font-medium text-[#EE154B]">accounting services in Kenya</a> include the
          following:
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