"use client";

import { useState } from "react";
import Link from "next/link";

const leftAccordions = [
  {
    id: "l1",
    question: "Sole Proprietorship",
    answer:
      "This is a small business owned by one individual. It’s the simplest form of entity recognized under BRS and refers to the person who owns the business. This person is responsible for the debts of this business.",
    points: [],
    conclusion: [],
  },
  {
    id: "l2",
    question: "Private Limited Company (LTD)",
    answer:
      "A company with 2 to 50 members whose ownership is divided into shares held by the members. Members of the public can’t subscribe to the shares of a private company, which provides limited liability to the owners.",
    points: [],
    conclusion: [],
  },
  {
    id: "l3",
    question: "Public Limited Company (PLC)",
    answer:
      "This type of business is ideal for large corporations who wish to offer shares to the public and in turn raise capital publicly. It is owned by shareholders and managed by directors. The shares of such an entity can be traded publicly on a stock exchange.",
    points: [],
    conclusion: [],
  },
  {
    id: "l4",
    question: "Limited Liability Partnership (LLP) or Company (LLC)",
    answer:
      "Both LLPs and LLCs offer personal liability protection to owners and members. However, the Articles of Association for LLCs are available to the public, while LLPs are completely private. LLPs are ideal for professional firms like law practices and consultancies, while LLCs are suitable for small and large ventures seeking flexibility and tax advantages.",
    points: [],
    conclusion: [],
  },
];

const rightAccordions = [
  {
    id: "r1",
    question: "Limited Partnership",
    answer:
      "A partnership is formed by two or more individuals who share the profits and liabilities of that business. When a partnership is limited, it has one general partner with unlimited liability and a limited partner whose liability is limited to the extent of their capital contribution.",
    points: [
    ],
    conclusion: [
      "",
    ],
  },
  {
    id: "r2",
    question: "Company Limited by Guarantee (CLG) ",
    answer:
      "If you are a non-profit organization seeking to be identified as a legal entity, a company limited by guarantee (CLG) is ideal for you. Members are guarantors instead of shareholders, and their liability is limited to the amount they agree to contribute to the company’s assets.",
    points: [
    ],
    conclusion: [],
  },
  {
    id: "r3",
    question: "Foreign Company ",
    answer:
    <>As the name suggests, this entity is for foreign companies with branches or places of business in Kenya. <span className="italic font-semibold">Ready to start your business? Let us handle all the details as you focus on laying a solid foundation for your company</span>.</>,
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
            Types of Business Entities in Kenya
          </h2>

          <p className="mt-3 text-lg font-bold text-[#D81141] sm:text-2xl">
           <Link href="/" className="font-semibold text-brand-pink-dark" >Kenya’s Business Registration Service (BRS)</Link> recognizes at least seven legal business entities. These are:
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