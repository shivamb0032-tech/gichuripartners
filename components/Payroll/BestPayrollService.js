"use client";

const services = [
  {
    title: "Saving Time ",
    description:
      "The first and most important advantage of hiring professional payroll services is to save on time. Managing your employee remuneration, making statutory deductions, and staying compliant with the provided labor and tax laws is time-consuming. If you don’t have an in-house professional to specifically handle these commitments, they can overwhelm you. Outsourcing to payroll experts saves you valuable time that you can use on other revenue-generating tasks..",
  },
  {
    title: "Reducing Risks ",
    description:
      "Payroll management is prone to various challenges, such as miscalculation of wages and inaccurate time logs. These errors can lead to issues with employees and regulation bodies. Professional payroll services will help mitigate these challenges and ensure smooth payroll execution.",
  },
  {
    title: "Staying Compliant with Tax and Labor Laws",
    description:
      "Keeping up with the ever-changing Kenyan tax and labor laws is not easy. For professional payroll specialists, it’s their only job, so they stay ahead of these regulatory changes. Partnering with these experts ensures you stay compliant, avoiding legal issues, fines, and penalties.",
  },
  {
    title: "Saving Costs ",
    description:
      "If you are a growing business, every expansion comes with its fair share of employee and operational requirements. You might be tempted to hire an in-house payroll manager, but is that the best financial decision for your business? Outsourcing payroll services achieves the same goals while saving costs.",
  },
  
];

export default function AccountingServices() {
  return (
    <section className="px-4 py-12 bg-white sm:px-8 lg:px-13">
      {/* Top Heading */}
      <div className="max-w-6xl mx-auto mb-4">
        <h1 className="text-2xl font-bold text-blue-900 lg:text-4xl md:text-3xl">
          Best Payroll Services in Kenya
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="leading-relaxed text-justify text-gray-700 text-md">
          It’s no secret that payroll and personnel management are some of the most time-consuming commitments in a business. Whether you are a small retail establishment, a medium-sized startup, or a large enterprise, paying your employees their dues and staying compliant with legal requirements is not a walk in the park. Not to mention that every company has its unique payroll requirements depending on the industry, contractual agreements, and general payroll requirements.
        </p>
        <p className="leading-relaxed text-justify text-gray-700 text-md">
          Amid all these commitments, you might fall behind on operating other aspects of your business, which can derail growth and affect profitability. You don’t have to choose one at the expense of the rest. You can have it all by outsourcing payroll services to professionals like Gichuri & Partners. 
        </p>
      </div>

      {/* Subheading */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="inline-block w-full px-6 py-3 bg-blue-900 rounded-sm">
          <h2 className="text-xl font-bold tracking-wide text-white">Why Outsource Payroll Services in Kenya</h2>
        </div>
      </div>

      {/* Sub-description */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="text-lg font-semibold gray-600 text-">
         Outsourcing payroll services provides various benefits to your business. These include:
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto">
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={index} service={service} />
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