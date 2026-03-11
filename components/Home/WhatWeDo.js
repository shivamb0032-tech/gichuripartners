'use client';

import React, { useState } from 'react';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Tax Disputes',
    desc: 'Expert support in Independent Review of Objections (IRO), Tax Appeal Tribunal (TAT), Alternative Dispute Resolution (ADR), and legal representation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v18M15 3v18" />
      </svg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Accounting',
    desc: 'Professional accounting services ensuring accurate financial records, full tax compliance, and comprehensive financial reporting for your business.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-3M9 7V5a2 2 0 114 0v2M9 7h6M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Audit Services',
    desc: 'Trusted audit services to enhance financial transparency, strengthen risk management frameworks, and ensure full regulatory compliance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Tax Advisory',
    desc: 'Strategic tax planning and advisory services to optimize your tax position, minimize liabilities, and ensure long-term fiscal efficiency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Bookkeeping',
    desc: 'Systematic bookkeeping and financial record management to keep your accounts accurate, organized, and always audit-ready.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 12h16M4 16h8" />
      </svg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Payroll Services',
    desc: 'End-to-end payroll management including salary processing, statutory deductions, compliance reporting, and employee tax management.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m4 0h8a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4a2 2 0 012-2zm6 4h.01" />
      </svg>
    ),
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col gap-4 bg-white rounded-2xl p-8 border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-100 hover:border-indigo-200 overflow-hidden"
    >
      {/* Corner number */}
      <span className={`absolute top-5 right-6 text-xs font-bold tracking-widest transition-colors duration-300 ${hovered ? 'text-indigo-500' : 'text-gray-200'}`}>
        {service.number}
      </span>

      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${hovered ? 'bg-indigo-600 text-white -rotate-6 scale-105' : 'bg-indigo-50 text-indigo-600'}`}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="mt-1 text-lg font-bold leading-snug tracking-tight text-gray-900">
        {service.title}
      </h3>

      {/* Desc */}
      <p className="flex-1 text-sm leading-relaxed text-gray-500">
        {service.desc}
      </p>

      {/* CTA */}
      <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-300 ${hovered ? 'border-indigo-100' : 'border-gray-100'}`}>
        <span className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${hovered ? 'text-indigo-600' : 'text-gray-400'}`}>
          Read More
        </span>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${hovered ? 'bg-indigo-600 text-white scale-110' : 'bg-gray-100 text-gray-400'}`}>
          ↗
        </span>
      </div>

      {/* Hover shine overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-indigo-50/40 to-transparent pointer-events-none rounded-2xl transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <section className="min-h-screen px-6 py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-widest text-indigo-600 uppercase border border-indigo-100 rounded-full bg-indigo-50">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
            Our Expertise
          </div>

          <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Professional{' '}
            <span className="italic text-indigo-600">Services</span>
          </h2>

          <p className="max-w-xl text-base font-light leading-relaxed text-gray-500">
            Comprehensive financial and tax solutions tailored to your business needs.
            Precision, compliance, and strategic insight — all under one roof.
          </p>
        </div>

        {/* 3-col Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;