"use client";
import { useState } from "react";
import Image from "next/image";

const accordionData = [
  {
    id: 1,
    question: "Tax Saving",
    answer:
      "At Gichuri & Partners, we help you save money on taxes by optimizing your tax strategy. Our experts streamline your bookkeeping, and minimize tax liabilities, ensuring tax savings. We handle your taxes while you focus on growing your business.",
  },
  {
    id: 2,
    question: "Satisfaction",
    answer:
      "At Gichuri & Partners, we prioritize customer satisfaction and strong client relationships. Our team delivers top-notch services with transparency and strict adherence to deadlines. Trust us for timely responses, and 100% client satisfaction.",
  },
  {
    id: 3,
    question: "100% Compliance",
    answer:
      "At Gichuri & Partners, we keep up with Kenya’s ever-changing tax and business landscape to ensure your full compliance. From tax returns to legal requirements, we’ve got you covered. Need tax help? Contact us for reliable tax advice.",
  },
  {
    id: 4,
    question: "One-Stop Shop",
    answer:
      "At Gichuri & Partners, we help businesses stay compliant with the best bookkeeping, tax management, and payroll services. From accounting, auditing and tax services, we’ve got you covered. Focus on growth while we handle the rest.",
  },
];

export default function WeBest() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="bg-[#273277]/30 min-h-screen flex items-center py-12 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="grid items-center w-full grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-20">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-5">

          {/* Heading */}
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#273277] sm:text-3xl lg:text-5xl">
              We Are The Best 
              <br />
              <span className="text-transparent bg-[#F3164D]/80 bg-clip-text">
                Tax Consultants in Kenya?
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-4xl text-base leading-relaxed text-gray-600 sm:text-md">
           Choosing the right tax consultant is crucial for your business. At Gichuri & Partners, we deliver expert, personalized tax and accounting solutions across Kenya. Our experienced team ensures compliance, efficiency, and strategic growth. Partner with us for top-tier solutions!
          </p>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {accordionData.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[white]/60 bg-[#273277] text-white"
                      : "border-[#1e1e35] bg-[#273277] hover:border-[#2a2a4a]"
                  }`}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="flex items-center justify-between w-full px-5 py-4 text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#F3164D] text-white"
                            : "bg-[#F3164D] text-[#fff]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${
                          isOpen ? "text-white" : "text-[#ccccdd] group-hover:text-white"
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>
                    <span
                      className={`text-white text-xl font-light transition-transform duration-300 flex-shrink-0 ml-3 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-white text-sm leading-relaxed pl-[3.75rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

       
        <div className="relative flex items-center justify-center">
         
          <div className="absolute w-80 h-80 rounded-full bg-[#6c63ff]/20 blur-3xl" />

          <div className="relative w-full max-w-md lg:max-w-full">
            
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-[#F3164D]/30" />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-[#F3164D]/20" />

           
            <div className="relative rounded-3xl overflow-hidden border border-[#1e1e35] shadow-2xl shadow-[#6c63ff]/10">
              <img
                src="/assets/hero-bg/Wambui-Maina-768x576.jpg"
                alt="Professional workspace"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />

            
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}