'use client';

import React from 'react';
import Image from 'next/image';
import { CircleCheck, CircleX } from 'lucide-react';
import { GoCircleSlash } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";

const ComparisonSection = () => {
  return (
    <section className="py-16 bg-white md:py-12">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        
        {/* Heading */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold leading-tight text-brand-navy-dark sm:text-4xl md:text-5xl">
            Find The Best Online Legal<br className="hidden sm:block" /> Solutions For You
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            We take care of the tedious registration process so you can focus on building your dream business.
          </p>

          {/* Save Badge */}
          <div className="inline-flex items-center gap-2 mt-6 bg-amber-100 text-amber-700 px-6 py-2.5 rounded-full text-sm font-medium">
            💰 Save ₹50K+ on Compliance Costs Now
          </div>
        </div>

        {/* Main Comparison Card */}
        <div className="max-w-5xl mx-auto overflow-hidden bg-white border border-gray-100 shadow-2xl rounded-3xl">
          <div className="grid md:grid-cols-2">

            {/* === RegisterKaro Column === */}
            <div className="p-8 border-b border-gray-100 md:p-10 md:border-b-0 md:border-r">
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

              <div className="space-y-8">
                {[
                  {
                    title: "All-in-one pricing",
                    desc: "A single package includes everything you need—no hidden charges."
                  },
                  {
                    title: "Personalized assistance",
                    desc: "A dedicated expert guides you at every step."
                  },
                  {
                    title: "End-to-end Service",
                    desc: "From document collection to final registration, we handle it all."
                  },
                  {
                    title: "Simplified process",
                    desc: "Easy-to-follow steps and clear communication for a stress-free experience."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-brand-pink-dark w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-1 leading-relaxed text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* === Others Column === */}
            <div className="p-8 md:p-10 bg-gray-50">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-2xl">
                  <span className="text-3xl"><GoCircleSlash className='text-gray-400 '/></span>
                </div>
                <p className="text-2xl font-bold text-gray-500">Others</p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "Pay for Each task",
                    desc: "Separate charges for each task add up quickly."
                  },
                  {
                    title: "No Single Point of Contact",
                    desc: "Constantly dealing with different people causes delays and confusion."
                  },
                  {
                    title: "Limited Service Scope",
                    desc: "Only basic tasks covered; extra services cost more or aren't available."
                  },
                  {
                    title: "Unclear instructions",
                    desc: "Poor guidance leads to errors and slower processing."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <GoXCircleFill className="text-gray-400 w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-1 leading-relaxed text-gray-600">{item.desc}</p>
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