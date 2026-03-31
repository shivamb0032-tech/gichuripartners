"use client";

import { useState } from "react";

const leftAccordions = [
  {
    id: "l1",
    question: "Employment Act",
    answer:
      "This Act provides various regulations and guidelines for employers, such as employment contracts, working hours, rest, wages, deductions, leaves, employee rights, and termination and dismissal.",
    points: [],
    conclusion: [],
  },
  {
    id: "l2",
    question: "Minimum Wage",
    answer:
      "Sets out the allowed minimum wage for employees.",
    points: [],
    conclusion: [],
  },
  {
    id: "l3",
    question: "Statutory Deductions",
    answer:
     <>
     Labor and tax laws require that employers must deduct and remit various deductions from the employee remuneration, including PAYE,<a href="https://sha.go.ke/" className="font-semibold text-brand-pink-dark"> SHIF</a>, NSSF, <a href="https://sha.go.ke/" className="font-semibold text-brand-pink-dark">Affordable Housing Levy</a>, and HELB.
     </>,
    points: [],
    conclusion: [],
  },
];

const rightAccordions = [
  {
    id: "r1",
    question: "Gross and Net Salary",
    answer:
      "The gross salary is the total earnings of an employee before any deductions. On the other hand, the net salary is what remains after taxation and other statutory deductions.",
    points: [
      
    ],
    conclusion: [
      "",
    ],
  },
  {
    id: "r2",
    question: "Legal Compliance",
    answer:
      "Businesses and companies must adhere to minimum wage laws, correct tax calculations, and timely remittance",
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

export default function PayrollLandscape() {
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
           Understanding the Payroll Landscape in Kenya
          </h2>
{/* 
          <p className="mt-3 text-lg font-bold text-[#D81141] sm:text-2xl">
            
          </p> */}

          <p className="mt-4 leading-relaxed text-justify text-md text-slate-600">
            Kenya’s payroll landscape is governed by a complex web of regulations, from the Employment Act and Workmen Compensation Act to the Income Tax Act and other KRA regulations. Let’s look at the key aspects that influence payroll execution in Kenya:
          </p>

        </div>

        {/* Two Column Accordion Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <AccordionGroup items={leftAccordions} />
          <AccordionGroup items={rightAccordions} />
        </div>
      </div>

       <div className="max-w-6xl mx-auto mb-12 text-center">
          <p className="mt-4 leading-relaxed text-justify text-md text-slate-600">
            Failure to adhere to these payroll guidelines can lead to legal woes, fines, penalties, and loss of employees. By partnering with a professional payroll service in Kenya, you stay ahead of these regulations and avoid risks.
          </p>
          <p className="mt-4 leading-relaxed text-justify text-md text-brand-pink-dark">
            Do you want to stay compliant? Let us help you.
          </p>
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