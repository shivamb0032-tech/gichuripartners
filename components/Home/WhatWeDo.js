"use client";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faCalculator,
  faShieldHalved,
  faLightbulb,
  faBookOpen,
  faUsers,
  faArrowUpRightFromSquare,
  faArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { Cormorant_Garamond, Outfit, Space_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});



const services = [
  {
    id: "01",
    title: "Tax Disputes",
   
    fullDesc:
      "Gichuri & Partners offers expert support in Independent Review of Objections (IRO), Tax Appeal Tribunal (TAT), Alternative Dispute Resolution (ADR), and representation.",
    icon: faScaleBalanced,
    isBlue: true,
  },
  {
    id: "02",
    title: "Accounting",
  
    fullDesc:
      "Get professional accounting services from Gichuri & Partners. We ensure accurate financial records, tax compliance, and reporting.",
    icon: faCalculator,
    isBlue: false,
  },
  {
    id: "03",
    title: "Audit Services",
   
    fullDesc:
      "Gichuri & Partners provides trusted audit services to enhance financial transparency, risk management, and regulatory compliance.",
    icon: faShieldHalved,
    isBlue: true,
  },
  {
    id: "04",
    title: "Tax Advisory",
   
    fullDesc:
      "Maximize tax savings with expert tax advisory from Gichuri & Partners. We help businesses stay compliant and reduce tax liabilities.",
    icon: faLightbulb,
    isBlue: false,
  },
  {
    id: "05",
    title: "Bookkeeping",
  
    fullDesc:
      "Gichuri & Partners offers reliable bookkeeping services to keep your financial records organized, tax-ready, and fully compliant.",
    icon: faBookOpen,
    isBlue: true,
  },
  {
    id: "06",
    title: "Payroll Services",
  
    fullDesc:
      "Simplify payroll with Gichuri & Partners. We handle salaries, PAYE, SHIF, AHL and NSSF compliance for smooth business operations.",
    icon: faUsers,
    isBlue: false,
  },
];

export default function WhatWeDo() {
  return (
    <section
      className={' relative overflow-hidden bg-[#273277] py-12 px-4 sm:px-8 lg:px-12'}
    >
      {/* ── BG PATTERN ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexP" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
              <polygon points="40,3 77,23 77,69 40,89 3,69 3,23" fill="none" stroke="#003399" strokeWidth="0.5" />
            </pattern>
            <pattern id="dotP" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="#003399" />
            </pattern>
            <pattern id="diagP" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <line x1="0" y1="48" x2="48" y2="0" stroke="#E71C51" strokeWidth="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexP)" opacity="0.05" />
          <rect width="100%" height="100%" fill="url(#dotP)" opacity="0.04" />
          <rect width="100%" height="100%" fill="url(#diagP)" opacity="0.025" />
        </svg>
       
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(248,250,252,0.6),transparent)]" />
      
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#003399]" />
        <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full blur-[110px] opacity-15 bg-[#E71C51]" />
      </div>

      
      <div className="relative z-10 mx-auto max-w-7xl">

      
        <div className="mb-10 text-center">

        

          <h2 className="mb-5 text-5xl font-bold leading-tight text-white sm:text-2xl lg:text-5xl ">
            What{" "}
            <span className="italic text-brand-blue">We Do</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-20 h-px bg-[#F3164D]" />
            <span className="w-2.5 h-2.5 rotate-45 bg-[#F3164D] inline-block border-2 border-brand-red" />
            <span className="w-20 h-px bg-[#F3164D]" />
          </div>

          <p className="max-w-5xl mx-auto text-base font-light leading-relaxed sm:text-lg text-slate-100">
            Let us take care of your tax, accounting, audit and business registration needs with our comprehensive Tax compliant services!{" "}
            <span className="font-semibold text-brand-blue">Tax compliant services!</span>
          </p>
        </div>

        {/* ── 3-COL GRID ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) =>
            service.isBlue ? (
              <BlueCard key={service.id} service={service} />
            ) : (
              <RedCard key={service.id} service={service} />
            )
          )}
        </div>

       
      </div>
    </section>
  );
}

// ── BLUE HOVER CARD ──────────────────────────────────────────────
function BlueCard({ service }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand-blue/30 hover:shadow-[0_20px_50px_-10px_rgba(0,51,153,0.2)]">

      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-brand-blue/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        {/* number + icon */}
        <div className="flex items-start justify-between mb-7">
          <span className="text-[10px] tracking-[0.35em] font-bold text-slate-200 group-hover:text-brand-blue transition-colors duration-300 font-[family-name:var(--font-space-mono)]">
            {service.id}
          </span>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-xl bg-[#F3164D] text-slate-100 border border-slate-100 group-hover:bg-brand-blue/10 group-hover:text-brand-blue group-hover:border-brand-blue/30 group-hover:shadow-[0_4px_20px_rgba(0,51,153,0.15)] transition-all duration-300">
            <FontAwesomeIcon icon={service.icon} />
          </div>
        </div>

        {/* title */}
        <h3 className="mb-2 text-2xl font-bold leading-snug transition-colors duration-300 text-[#273277] group-hover:text-brand-blue">
          {service.title}
        </h3>

       

        {/* divider */}
        <div className="w-full h-px mb-5 transition-all duration-300 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-brand-blue/40 group-hover:to-transparent" />

        {/* desc */}
        <p className="mb-8 text-sm font-light leading-relaxed text-justify transition-colors duration-300 text-slate-600 group-hover:text-slate-500">
          {service.fullDesc}
        </p>

        {/* read more */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#F3164D] group-hover:text-brand-blue transition-colors duration-300 ">
            Read More
          </span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-[11px] text-[#F3164D] group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}

// ── RED HOVER CARD ───────────────────────────────────────────────
function RedCard({ service }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand-red/30 hover:shadow-[0_20px_50px_-10px_rgba(231,28,81,0.2)]">

     
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

 
      <div className="absolute inset-0 rounded-2xl bg-brand-red/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        
        <div className="flex items-start justify-between mb-7">
          <span className="text-[10px] tracking-[0.35em] font-bold text-slate-200 group-hover:text-brand-red transition-colors duration-300 ">
            {service.id}
          </span>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-xl bg-[#273277] text-slate-300 border border-slate-100 group-hover:bg-brand-red/10 group-hover:text-brand-red group-hover:border-brand-red/30 group-hover:shadow-[0_4px_20px_rgba(231,28,81,0.15)] transition-all duration-300">
            <FontAwesomeIcon icon={service.icon} />
          </div>
        </div>

        
        <h3 className="mb-2 text-2xl font-bold leading-snug transition-colors duration-300 text-[#273277] group-hover:text-brand-red">
          {service.title}
        </h3>

     
        <div className="w-full h-px mb-5 transition-all duration-300 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-brand-red/40 group-hover:to-transparent" />

        <p className="mb-8 text-sm font-light leading-relaxed text-justify transition-colors duration-300 text-slate-600 group-hover:text-slate-500">
          {service.fullDesc}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#F3164D] group-hover:text-brand-red transition-colors duration-300 ">
            Read More
          </span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-[11px] text-[#F3164D] group-hover:text-brand-red group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}