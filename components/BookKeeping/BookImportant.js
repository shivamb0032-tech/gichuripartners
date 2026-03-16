"use client";
import Image from "next/image";

export default function BookImportant() {
  const features = [
    {
      title: "Tracks Every Shilling",
      desc: "Bookkeeping is crucial for financial management as it helps you track where your money is going. Monitoring your cash flow minimizes losses and helps control your spending.",
    },
    {
      title: "Simplifies Tax Planning and Compliance",
      desc: "Accurate financial records make it easy and smooth to file tax returns. Keep your books up to date to avoid last-minute panic.",
    },
    {
      title: "Influences Your Business Decisions",
      desc: "Bookkeeping is the basis of all your business decisions, be it expansion, hiring employees, or saving. When your books are clear, you make smart decisions that make your operations better on all fronts.",
    },
    {
      title: "Builds Trust With Stakeholders",
      desc: "Clean and up-to-date financial books are a business’s best friend, especially where stakeholders like investors, lending institutions, and venture capitalists are concerned. Good books boost your credibility.",
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
            The Importance of Bookkeeping for Your Business
          </h2>
          <p className="max-w-6xl mx-auto text-justify text-gray-700 text-md md:text-md">
            Bookkeeping is vital for every business, small or large. Accurate financial records are the backbone of your decision-making, shaping every aspect of your business. With meticulous bookkeeping, you can track your cash flow, manage your expenses, and assess profitability. Moreover, organizing your financial records is crucial for tax compliance. It provides evidence of income, deductions, and other transactions relevant to the <a className="text-[#F5174F] font-semibold" href="https://www.kra.go.ke/">Kenya Revenue Authority (KRA)</a>.
          </p>
          <p className="max-w-6xl mx-auto text-justify text-gray-700 text-md md:text-md">
            Without tax compliance, your business risks hefty fines and penalties for violating financial regulations. Additionally, legal tassels with KRA can disrupt business operations and tarnish your reputation. Therefore, it’s imperative to invest in reliable bookkeeping services for sustainability and business growth. To sum it up, bookkeeping is important for businesses in Kenya for the following reasons:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col items-center">
          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 mb-6 text-[#F5174F] sm:grid-cols-2 lg:grid-cols-4 md:gap-8 md:mb-8">
            {features.slice(0, 4).map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                desc={feature.desc}
              />
            ))}
          </div>

          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
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
    <div className="flex flex-col h-full overflow-hidden transition-shadow duration-300 bg-white border border-[#123453] border-b-4 border-l-4 shadow-md rounded-xl hover:shadow-xl">
      <div className="flex flex-col flex-grow p-4 md:p-5">
        <h3 className="mb-3 text-xl font-semibold text-[#F5174F] ">{title}</h3>
        <p className="flex-grow text-base leading-relaxed text-justify text-gray-600">
          {desc}
        </p>
      </div>
    </div>
  );
}