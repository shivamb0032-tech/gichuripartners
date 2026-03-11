// components/StatsSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaSmile, FaComments, FaBriefcase } from "react-icons/fa";

const bgImage = "/assets/hero-bg/sservice-bg1.avif";

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));
      if (start >= end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return { count, ref };
}

export default function HomeEmpower() {
  const stats = [
    {
      value: 10000,
      label: "Happy Customers",
      icon: <FaSmile className="text-5xl text-white md:text-6xl" />,
    },
    {
      value: 25000,
      label: "Consultations",
      icon: <FaComments className="text-5xl text-white md:text-6xl" />,
    },
    {
      value: 5000,
      label: "Businesses Served",
      icon: <FaBriefcase className="text-5xl text-white md:text-6xl" />,
    },
  ];

  const { count: c1, ref: r1 } = useCountUp(stats[0].value);
  const { count: c2, ref: r2 } = useCountUp(stats[1].value);
  const { count: c3, ref: r3 } = useCountUp(stats[2].value);

  return (
    <section
      className="relative py-10 overflow-hidden text-white md:py-15"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Dark overlay taaki text clear dikhe */}
      {/* <div className="absolute inset-0 bg-black/15"></div>  */}

      {/* Content */}
      <div className="relative z-10 px-5 mx-auto max-w-7xl sm:px-8 lg:px-12">
        {/* Heading */}
        
        <div className="max-w-6xl mx-auto mt-3 mb-5 space-y-4 text-center text-[#273277]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-[#273277] md:text-5xl"
          >
            Best Tax Consultants
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base md:text-lg"
          >
            We have been helping entrepreneurs, startups, and growing businesses
            simplify complex processes with expert guidance and reliable
            solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base md:text-lg"
          >
            Our focus is to deliver transparent and efficient services that
            allow businesses to stay compliant, grow faster, and operate
            smoothly.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-base md:text-lg"
          >
            With thousands of satisfied clients and years of experience, we
            continue empowering businesses with trusted advisory and dependable
            support.
          </motion.p>
        </div>
        <div className="mb-4 text-center md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold text-[#273277] md:text-4xl"
          >
            Empowering Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg font-semibold text-[#273277] sm:text-xl"
          >
            Since{" "}
            <span className="font-bold text-[#CE163E] text-2xl md:text-3xl">
              2013
            </span>
          </motion.p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
          {stats.map((stat, i) => {
            const refs = [r1, r2, r3];
            const counts = [c1, c2, c3];

            return (
              <motion.div
                key={i}
                ref={refs[i]}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="group bg-[#273277] backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl border  p-6 sm:p-8 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-5 transition-transform duration-300 transform sm:mb-6 group-hover:scale-110">
                    {stat.icon}
                  </div>

                  <div className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                    {counts[i].toLocaleString()}
                    <span className="text-2xl sm:text-3xl">+</span>
                  </div>

                  <p className="mt-3 text-base font-semibold text-[#f91750] sm:mt-4 sm:text-lg">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
