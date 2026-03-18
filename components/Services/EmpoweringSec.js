"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaSmile, FaComments, FaBriefcase } from "react-icons/fa";

const bgImage = "/assets/hero-bg/sservice-bg1.avif";

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

const stats = [
  { value: 10000, label: "Happy Customers",  Icon: FaSmile,     suffix: "+" },
  { value: 25000, label: "Consultations",     Icon: FaComments,  suffix: "+" },
  { value: 5000,  label: "Businesses Served", Icon: FaBriefcase, suffix: "+" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const c1 = useCountUp(stats[0].value, 2000, inView);
  const c2 = useCountUp(stats[1].value, 2000, inView);
  const c3 = useCountUp(stats[2].value, 2000, inView);
  const counts = [c1, c2, c3];

  return (
    <section className="relative px-4 py-20 overflow-hidden sm:px-8">

      {/* ── BG image with overlay ── */}
      <div className="absolute inset-0 -z-10">
        <img src={bgImage} alt="" className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-[#0d1b2e]/90" />
      </div>

      {/* ── Decorative diagonal stripe ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,60 40,100 0,100" fill="rgba(206,22,62,0.12)" />
          <polygon points="100,0 100,45 60,0" fill="rgba(206,22,62,0.08)" />
        </svg>
        {/* dot grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Heading block ── */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CE163E]/40 bg-[#CE163E]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CE163E] animate-pulse" />
            <span className="text-[#CE163E] text-xs font-bold tracking-[0.2em] uppercase">Our Impact</span>
          </div>

          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Empowering{" "}
            <span className="relative inline-block">
              <span className="text-[#CE163E]">Businesses</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#CE163E] rounded-full opacity-60" />
            </span>
          </h2>

          <p className="mt-3 text-sm font-medium tracking-widest uppercase text-white/60">
            Since <span className="text-[#CE163E] font-black text-lg not-italic">2013</span>
          </p>
        </div>

        {/* ── Stats ── */}
        <div ref={ref} className="grid grid-cols-1 gap-px overflow-hidden shadow-2xl sm:grid-cols-3 bg-white/10 rounded-2xl">
          {stats.map(({ label, Icon, suffix }, i) => (
            <div
              key={i}
              className="group relative bg-white/5 hover:bg-[#CE163E]/20 transition-colors duration-300 p-10 flex flex-col items-center text-center overflow-hidden"
            >
              
              <span className="absolute -bottom-4 -right-2 text-[5.5rem] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Vertical left border accent (not on first) */}
              {i > 0 && (
                <div className="absolute left-0 hidden w-px sm:block top-8 bottom-8 bg-white/10" />
              )}

              {/* Icon in hexagon-like rounded square */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-[#CE163E]/20 rounded-2xl rotate-3 absolute inset-0" />
                <div className="relative w-16 h-16 bg-[#CE163E] rounded-2xl flex items-center justify-center shadow-lg shadow-[#CE163E]/30 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-2xl text-white" />
                </div>
              </div>

              {/* Count */}
              <p className="text-5xl font-black leading-none text-white md:text-6xl">
                {counts[i].toLocaleString()}
                <span className="text-[#CE163E] text-3xl">{suffix}</span>
              </p>

              {/* Label */}
              <p className="mt-3 text-white/60 text-xs font-bold uppercase tracking-[0.18em]">
                {label}
              </p>

              {/* Bottom hover bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 bg-[#CE163E] transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}