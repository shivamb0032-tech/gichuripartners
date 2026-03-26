'use client';

import React from 'react';
import Image from 'next/image';
import { CircleCheck, CircleX } from 'lucide-react';
import { GoCircleSlash } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";

const ComparisonSection = () => {
  return (
    <section className="py-16 bg-gray-100 md:py-12">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        
        {/* Heading */}
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-2xl font-bold leading-tight text-brand-navy-dark sm:text-4xl md:text-5xl">
            Why Choose Gichuri & Partners
          </h2>
          <p className="max-w-5xl mx-auto mt-4 text-lg text-gray-600">
           At <span className='font-semibold text-brand-pink-dark'>Gichuri & Partners</span>, we don’t just provide tax services, we specialize in solving complex KRA tax disputes, handling disputed assessments, objection decisions, and enforcement actions with strategic, results-driven solutions. Here’s why we stand out: 
          </p>

          {/* Save Badge */}
          <div className="inline-flex items-center gap-2 mt-6 bg-brand-pink-dark/20 text-brand-pink-dark px-6 py-2.5 rounded-full text-sm font-semibold">
            💰 Save ₹50K+ on Compliance Costs Now
          </div>
        </div>

        {/* Main Comparison Card */}
        <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-100 shadow-2xl rounded-3xl">
          <div className="grid md:grid-cols-2">

            {/* === RegisterKaro Column === */}
            <div className="p-5 border-b border-gray-100 md:p-8 md:border-b-0 md:border-r">
              <div className="flex items-center mb-5">
                {/* Yeh aapki image hai - Next.js Image */}
                <div className="relative flex-shrink-0 w-32 h-12">
                  <Image
                    src="/assets/logos/Gichuri-Partners-logo-version-3.png" 
                    alt="RegisterKaro Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Specialized in KRA Tax Disputes & Assessments",
                    desc: "We handle complex KRA tax disputes, disputed assessments, objection decisions, and enforcement actions with strategic, results-driven solutions."
                  },
                  {
                    title: "Expertise in Kenyan Tax Laws, Compliance & Procedures",
                    desc: "Guidance on KRA compliance, Independent Review of Objections, and proper handling of all tax processes while protecting your rights."
                  },
                  {
                    title: "Fast, Responsive Support for KRA Audits & Disputes ",
                    desc: "Quick, professional responses to KRA audits, notices, and queries, helping you avoid penalties while maintaining a strong defense."
                  },
                  {
                    title: "Tailored Strategies for ADR & Tax Dispute Resolution ",
                    desc: "Customized solutions for Alternative Dispute Resolution (ADR), objections, and appeals to minimize financial exposure and business disruption."
                  },
                  {
                    title: "Strong Representation at the Tax Appeal Tribunal ",
                    desc: "Full support in Tax Appeal Tribunal Kenya cases: document preparation, evidence submission, and legal argumentation to maximize favorable outcomes."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-brand-pink-dark w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-1 leading-snug text-justify text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* === Others Column === */}
            <div className="p-5 md:p-8 bg-gray-50">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-2xl">
                  <span className="text-3xl"><GoCircleSlash className='text-gray-400 '/></span>
                </div>
                <p className="text-2xl font-bold text-gray-500">Other Tax Service Providers</p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "General services with limited experience in KRA disputes or tribunal cases.",
                    desc: ""
                  },
                  {
                    title: "Limited understanding of Kenyan tax laws; may miss compliance risks and deadlines.",
                    desc: ""
                  },
                  {
                    title: "Slow response times; clients often face penalties or missed deadlines.",
                    desc: ""
                  },
                  {
                    title: "One-size-fits-all approach; rarely offers strategic ADR or objection support.",
                    desc: ""
                  },
                  {
                    title: "Weak or no representation at the Tax Appeal Tribunal, cases may be poorly prepared.",
                    desc: ""
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <GoXCircleFill className="text-gray-400 w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-justify text-gray-900">{item.title}</h4>
                      <p className="mt-1 leading-normal text-justify text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ComparisonSection;