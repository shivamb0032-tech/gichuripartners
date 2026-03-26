'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const accordionData = [
  {
    id: 1,
    question: "What is the Tax Appeal Tribunal in Kenya?",
    answer: <>The <strong>Tax Appeal Tribunal Kenya</strong> is an independent body that hears disputes between taxpayers and KRA. It handles appeals arising from <strong>KRA tax assessments</strong>, objection decisions, and enforcement actions. 
    </>
  },
  {
    id: 2,
    question: "How do I file a Tax Appeal at the Tax Appeal Tribunal? ",
    answer: <>To file a <strong>Tax Appeal Tribunal</strong> case, you must submit a notice of appeal within the required timelines after receiving a KRA objection decision. Proper documentation and legal arguments are essential for a successful appeal. </>,
  },
  {
    id: 3,
    question: "What is Alternative Dispute Resolution (ADR) in tax matters? ",
    answer:<><strong>Alternative Dispute Resolution (ADR)</strong> is a process that allows taxpayers and KRA to resolve disputes amicably without going to court. It is often faster and helps reduce penalties and prolonged litigation.</> ,
  },
  {
    id: 4,
    question: "What is an Independent Review of Objections by KRA? ",
    answer: <>An <strong>Independent Review of Objections</strong> allows a taxpayer to request a fresh review of a KRA objection decision by a different officer. This ensures fairness and transparency in resolving tax disputes. </>,
  },
  {
    id: 5,
    question: "What happens during a KRA Tax Audit?",
    answer: <>A <strong>KRA tax audit</strong> involves reviewing your financial records, VAT returns, and tax filings to ensure compliance. Proper preparation and professional representation are key to avoiding additional tax assessments and penalties. </>,
  },
  {
    id: 6,
    question: "How can I challenge a KRA Tax Assessment? ",
    answer: <>You can challenge a <strong>KRA tax assessment</strong> by filing a formal objection within the legal timelines. If unresolved, the matter can proceed to <strong>ADR or the Tax Appeal Tribunal Kenya</strong> for determination. </>,
  },
  {
    id: 7,
    question: "What are common KRA tax disputes businesses face? ",
    answer: <>Common <strong>KRA tax disputes</strong> include incorrect assessments, <strong>VAT audit queries</strong>, penalties and interest charges, and delayed objection decisions.  </>,
  },
  {
    id: 8,
    question: "How can I ensure full KRA Tax Compliance?",
    answer: <>Maintaining <strong>KRA compliance</strong> requires accurate tax filings, proper record-keeping, and timely responses to KRA notices. Professional tax advisory services help reduce risks of audits and disputes.</>,
  },
];

export function HomeAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden ">
      
    <div className="absolute inset-0 -z-20 bg-[url('/assets/Tax-Consultation.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
    

      {/* Dark Overlay with your colors */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(23, 37, 84, 0.92), rgba(212, 16, 63, 0.85))',
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl px-4 py-10 mx-auto sm:px-6 md:py-20">
        
        {/* Title */}
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions (KRA TAX SERVICES)
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
                  <div className="px-5 pt-2 pb-6 text-base leading-relaxed text-gray-100 border-t sm:px-7 md:px-8 md:pb-9 sm:text-md border-white/10">
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