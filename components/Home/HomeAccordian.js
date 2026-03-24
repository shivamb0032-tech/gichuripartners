'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const accordionData = [
  {
    id: 1,
    question: "What services does Gichuri & Partners offer?",
    answer: "We provide a wide range of services including tax advisory, bookkeeping, accounting, payroll management, and business compliance support. Our goal is to help businesses stay compliant while optimizing their financial performance.",
  },
  {
    id: 2,
    question: "Do you work with small businesses and startups?",
    answer: "Yes, we specialize in supporting small businesses and startups. We offer tailored solutions that help new businesses manage taxes, maintain records, and stay compliant from day one.",
  },
  {
    id: 3,
    question: "How can you help reduce my tax burden?",
    answer: "Our team analyzes your financial situation and applies legal tax planning strategies to minimize your tax liability while ensuring full compliance with regulations.",
  },
  {
    id: 4,
    question: "How do I get started with your services?",
    answer: "You can get started by contacting us through our website or booking a consultation. Our team will assess your needs and recommend the best solutions for your business.",
  },
  {
    id: 5,
    question: "Do you provide ongoing support or one-time services?",
    answer: "We offer both! Whether you need a one-time consultation or ongoing accounting and compliance support, we have flexible plans to suit your needs.",
  },
];

export function HomeAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden">
      
      {/* Next.js Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Tax-Consultation.jpg"
          alt="Tax Consultation Background"
          fill
          className="object-cover"
          priority   // Important for above-the-fold background
          quality={85}
        />
      </div>

      {/* Dark Overlay with your colors */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(23, 37, 84, 0.92), rgba(212, 16, 63, 0.85))',
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-3xl px-4 py-10 mx-auto sm:px-6 md:py-20">
        
        {/* Title */}
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          {/* <p className="max-w-md mx-auto mt-4 text-base text-gray-200 sm:text-lg">
           
          </p> */}
        </div>

        {/* Accordion */}
        <div className="space-y-4 md:space-y-5">
          {accordionData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="overflow-hidden transition-all border shadow-xl bg-white/10 backdrop-blur-2xl border-white/20 rounded-2xl md:rounded-3xl hover:shadow-2xl hover:border-white/30"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="flex items-center justify-between w-full px-5 py-5 text-left sm:px-7 md:px-8 md:py-3 focus:outline-none group"
                >
                  <span className="flex-1 pr-4 font-semibold leading-tight text-white text-md sm:text-md md:text-lg">
                    {item.question}
                  </span>
                  
                  <div className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-2xl bg-white/10 border border-white/30 transition-all duration-300 group-hover:bg-white/20 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown 
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 ${isOpen ? 'text-[#D4103F]' : ''}`} 
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pt-2 pb-6 text-base leading-relaxed text-gray-100 border-t sm:px-7 md:px-8 md:pb-9 sm:text-lg border-white/10">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}