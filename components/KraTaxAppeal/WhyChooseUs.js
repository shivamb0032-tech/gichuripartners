"use client";

import { useState } from "react";

const leftAccordions = [
  {
    id: "l1",
    question: "Value Beyond Representation",
    answer:
      "Our tax appeal tribunal services add real value to your appeal. We analyze your case, identify the strongest legal arguments, and work for the best possible outcome.",
    points: [],
    conclusion: [],
  },
  {
    id: "l2",
    question: "Expertise and Experience",
    answer:
      "We have been helping individuals and businesses solve KRA tax disputes for more than a decade. Our team has both expertise and experience in TAT services in Kenya.",
    points: [],
    conclusion: [],
  },
  {
    id: "l3",
    question: "Tailored Solutions for Every Case",
    answer:
      "We analyze your case, identify its uniqueness, and advise on the best way forward.",
    points: [],
    conclusion: [],
  },
];

const rightAccordions = [
  {
    id: "r1",
    question: "With You At Every Step",
    answer:
      "Some legal counsel will provide legal services until the TAT has made its decision. At Gichuri & Partners, we walk with you every step of the appeal process, including post-tribunal follow-up.",
    points: [
    ],
    conclusion: [
      "",
    ],
  },
  {
    id: "r2",
    question: "Proven Track Record",
    answer:
      "We have supported taxpayers through their tax appeals for years. Our success over the years demonstrates our dedication and reliability as a leading tax appeal tribunal services provider in Kenya.",
    points: [
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

export default function WhyChooseUs() {
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
            Why Choose Us?
          </h2>

          <p className="mt-3 text-lg font-bold text-[#D81141] sm:text-2xl">
           Wondering why Gichuri & Partners is your best bet at tackling your tax disputes with KRA? Here’s why you should choose us:
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