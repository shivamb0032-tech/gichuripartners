"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaSmile, FaComments, FaBriefcase } from "react-icons/fa";
import Link from "next/link";

// ── Count-up hook ────────────────────────────────────────────────
function useCountUp(end, duration = 2000, trigger) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, end, duration]);

  return count;
}

// ── Stat card ────────────────────────────────────────────────────
function StatCard({ stat, index, trigger }) {
  const count = useCountUp(stat.value, 2000, trigger);

  const accents = ["bg-[#CE163E]", "bg-[#273277]", "bg-[#CE163E]"];
  const borders = ["border-[#CE163E]", "border-[#273277]", "border-[#CE163E]"];

  return (
    <div className={`relative group bg-white rounded-2xl border-2 ${borders[index]} overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300`}>
      {/* Top accent bar */}
      <div className={`${accents[index]} h-1.5 w-full`} />

      {/* Number bg watermark */}
      <div className="absolute -bottom-3 -right-2 text-[6rem] font-black text-slate-100 leading-none select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10 flex items-center gap-5 p-7">
        {/* Icon box */}
        <div className={`${accents[index]} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
          <stat.IconComponent className="text-2xl text-white" />
        </div>

        {/* Text */}
        <div>
          <p className="text-3xl font-black text-[#273277] leading-none">
            {count.toLocaleString()}
            <span className="text-[#CE163E] text-2xl">+</span>
          </p>
          <p className="mt-1 text-sm font-semibold tracking-widest uppercase text-slate-500">
            {stat.label}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main section ─────────────────────────────────────────────────
export default function HomeEmpower() {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const stats = [
    { value: 10000, label: "Happy Customers",   IconComponent: FaSmile    },
    { value: 25000, label: "Consultations",      IconComponent: FaComments },
    { value: 5000,  label: "Businesses Served",  IconComponent: FaBriefcase },
  ];

  return (
    <section className="relative px-4 py-16 overflow-hidden bg-brand-pink-light/10 sm:px-8">

      {/* ── Decorative background shapes ── */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#CE163E]/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#273277]/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #273277 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Top: Best Tax Consultants ── */}
        <div className="mb-14">
          {/* Label */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-[#CE163E]" />
            <span className="text-[#CE163E] text-xs font-bold tracking-[0.25em] uppercase">Our Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#273277] leading-tight mb-8">
            Enhancing Tax {" "}
            <span className="relative inline-block">
              <span className="text-[#CE163E]">Compliance</span>
              <svg className="absolute left-0 w-full -bottom-1" height="5" viewBox="0 0 200 5" preserveAspectRatio="none">
                <path d="M0,4 Q50,0 100,4 Q150,0 200,4" stroke="#CE163E" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          {/* Vertical text layout */}
          <div className="flex flex-col gap-4 text-slate-600 text-[15px] leading-relaxed">
            <p className="text-justify">
              At Gichuri & Partners, we unlock your business’s true potential with expert tax and accounting insights, advice, and support. Our client-focused approach ensures success by recognizing the opportunities within your business and the people driving it forward.
            </p>
            <p className="text-justify">
              Our mission at <Link href="/" className="font-semibold text-brand-pink-dark" >Gichuri & Partners</Link> is to unlock your true potential with expert accounting insights, advice, and support. With over 10 years of experience, we are committed to a client-focused approach that drives success and long-term growth.
            </p>
            <p className="text-justify">
              At Gichuri & Partners, we understand the unique challenges businesses face and recognize the potential within every organization and its people. Our expertise spans Kenyan direct and indirect taxes, exchange control regulations, and employee-related matters, equipping our clients to navigate complex tax landscapes with confidence.
            </p>
            <p className="text-justify">
              Additionally, our business consulting services empower decision-making through tailored financial advisory, while our meticulous <Link href="/bookkeeping-services-in-kenya/" className="font-semibold text-brand-pink-dark">bookkeeping consulting</Link> keeps financial records accurate and up-to-date.
            </p>
            <p className="text-justify">
             We take pride in the trust our clients place in us, serving a diverse range of businesses, and maintaining a strong focus on excellence and client satisfaction. By partnering with Gichuri & Partners, you are choosing a dedicated team that is passionate about driving your business growth and success. At Gichuri & Partners, we specialize in <Link href="/tax-advisory-services-in-kenya/" className="font-semibold text-brand-pink-dark">Tax Consulting</Link>, <Link href="/business-registration-services-in-kenya/" className="font-semibold text-brand-pink-dark">Business Consulting</Link>, and <Link href="/bookkeeping-services-in-kenya/" className="font-semibold text-brand-pink-dark">Bookkeeping Consulting</Link>. Our purpose is to connect you with your true potential by providing the accounting insight, advice, and support necessary to navigate towards success. We’ve cultivated a culture focused on ensuring the success of our clients by recognizing the potential within businesses and the people who drive them.
            </p>
          </div>
        </div>

        {/* ── Divider with "Empowering Businesses" ── */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-slate-200" />
          <div className="px-6 py-3 mx-6 text-center bg-white border shadow-sm rounded-2xl border-slate-200">
            <p className="text-xl md:text-2xl font-black text-[#273277] leading-none">
              Empowering Businesses
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-500">
              Since{" "}
              <span className="text-[#CE163E] font-black text-xl">2013</span>
            </p>
          </div>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* ── Stats cards ── */}
        <div ref={sectionRef} className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} trigger={inView} />
          ))}
        </div>

      </div>
    </section>
  );
}