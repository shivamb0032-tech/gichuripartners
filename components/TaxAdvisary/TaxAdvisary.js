"use client";

import { useState } from "react";

const leftAccordions = [
  {
    id: "l1",
    question: "Tax Planning",
    answer:
      "Tax planning involves the organization of your financial and tax affairs to ensure you or your business is tax efficient. A tax advisor helps you analyze your finances and strategize to minimize your tax liability as much as possible. In other words, tax planning helps you pay the lowest taxes possible.",
    points: [],
    conclusion: [],
  },
  {
    id: "l2",
    question: "Tax Compliance",
    answer:
      "Failure to comply with the provided tax regulations attracts heavy penalties and interest. Interestingly, some individuals and businesses fail to comply due to a lack of awareness of their tax obligations. A tax advisory service ensures adherence to tax laws and regulations to avoid dire consequences.",
    points: [],
    conclusion: [],
  },
  {
    id: "l3",
    question: "Tax Audit and Valuation",
    answer:
      "A tax audit examines an individual's or business's financial records to ensure they are paying their taxes correctly. On the other hand, a tax valuation is common with businesses, whereby an independent tax expert determines the monetary value of the entity and its intangible assets. A tax advisory service offers audit and valuation to ensure smooth and favorable outcomes.",
    points: [],
    conclusion: [],
  },
];

const rightAccordions = [
  {
    id: "r1",
    question: "Tax Dispute Resolution",
    answer:
      "A tax dispute arises when the taxpayer and the tax administrator don't agree after a tax assessment. Tax dispute resolution process in Kenya entails five levels:",
    points: [
      "Tax objection and administrative decision",
      "Tax Appeal Tribunal (TAT)",
      "Appeal to the High Court",
      "Appeal to the Court of Appeal",
      "Alternative Dispute Resolution (Out of Court/Tribunal)",
    ],
    conclusion: [
      "A tax advisory service like Gichuri & Partners can represent you in disputes with tax authorities.",
    ],
  },
  {
    id: "r2",
    question: "Business Restructuring Guidance",
    answer:
      "A tax consulting and advisory service in Kenya can advise you on the most tax-efficient ways to structure your business operations and transactions. These include:",
    points: [
      "Restructuring partnerships to optimize tax efficiency and liability distribution among partners.",
      "Divesting business assets in a manner that minimizes capital gains tax and transfer costs.",
      "Mergers and acquisitions advisory to ensure favorable tax treatment throughout the transaction.",
      "Corporate reorganizations that align business structure with current regulatory and tax frameworks.",
    ],
    conclusion: [],
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
        isOpen
          ? "border-[#D81141] bg-[#D81141]/10 shadow-sm shadow-[#D81141]/10"
          : "border-[#273277] bg-white hover:border-[#D81141] hover:shadow-sm"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full gap-4 px-6 py-5 text-left group"
      >
        <span
          className={`text-base font-semibold leading-snug transition-colors duration-200 ${
            isOpen
              ? "text-[#D81141]"
              : "text-[#273277] group-hover:text-[#D81141]"
          }`}
        >
          {item.question}
        </span>

        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
            isOpen
              ? "rotate-45 border-[#D81141] bg-[#D81141] text-white"
              : "border-slate-300 bg-white text-slate-500 group-hover:border-[#D81141] group-hover:text-[#D81141]"
          }`}
        >
          <i className="text-xs fa-solid fa-plus" />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5">
            <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>

            {item.points && item.points.length > 0 && (
              <ul className="flex flex-col gap-2 mt-3">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D81141]" />
                    <span className="text-sm leading-relaxed text-slate-500">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {item.conclusion && item.conclusion.length > 0 && (
              <div className="mt-3 space-y-2">
                {item.conclusion.map((text, idx) => (
                  <p key={idx} className="text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionGroup({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}

export default function TaxAdvisary() {
  return (
    <section className="relative w-full px-4 py-12 overflow-hidden bg-slate-50">
      {/* Soft background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-[-6rem] h-80 w-80 rounded-full bg-indigo-200 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 rounded-full right-1/4 h-80 w-80 bg-violet-200 opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-black leading-tight tracking-tight text-[#273277] sm:text-5xl">
            Tax Advisory Services in Kenya
          </h2>

          <p className="mt-3 text-lg font-bold text-[#D81141] sm:text-2xl">
            What are Tax Advisory Services?
          </p>

          <p className="mt-4 leading-relaxed text-justify text-md text-slate-600">
            The tax landscape is constantly changing as the government tries to get
            the most out of taxpayers. Keeping up with new regulations, tax regimes,
            penalties, and other obligations is daunting, whether you are an
            individual or a business. Regular accountants and tax professionals can
            only do so much when helping you plan and file your tax returns. Sure,
            some will help you navigate the new tax laws and regulations, but there
            is not much they can do as accountants.
          </p>

          <p className="mt-4 leading-relaxed text-justify text-md text-slate-600">
            That's where tax advisory services come in. These services have become
            popular in Kenya because they help individuals and businesses look
            beyond the tax return. We are talking about analyzing financial data,
            strategies to maximize tax position, minimize tax risks, and ensure tax
            compliance. Tax advisory services encompass a range of services aimed at
            helping you manage your personal and business tax obligations. They
            include the following:
          </p>
        </div>

        {/* Two Column Accordion Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <AccordionGroup items={leftAccordions} />
          <AccordionGroup items={rightAccordions} />
        </div>
      </div>

      {/* Font Awesome CDN — production me layout/head me lagana better hai */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossOrigin="anonymous"
      />
    </section>
  );
}