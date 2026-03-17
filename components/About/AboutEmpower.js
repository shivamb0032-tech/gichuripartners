// components/StatsSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaSmile, FaComments, FaBriefcase } from "react-icons/fa";
import Link from "next/link";

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

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutEmpower() {
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
      className="relative py-10 overflow-hidden text-white md:py-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="relative z-10 px-5 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto mt-3 mb-8 space-y-4 text-center text-gray-600">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl font-bold text-[#273277] md:text-5xl"
          >
            Enhancing Tax Compliance
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-base text-justify md:text-md"
          >
            At Gichuri & Partners, we unlock your business’s true potential with expert tax and accounting insights, advice, and support. Our client-focused approach ensures success by recognizing the opportunities within your business and the people driving it forward.


          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-base text-justify md:text-md"
          >
            Our mission at <Link href="/" className="text-[#CE163E] font-semibold">Gichuri & Partners</Link> is to unlock your true potential with expert accounting insights, advice, and support. With over 10 years of experience, we are committed to a client-focused approach that drives success and long-term growth.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-base text-justify md:text-md"
          >
            At Gichuri & Partners, we understand the unique challenges businesses face and recognize the potential within every organization and its people. Our expertise spans Kenyan direct and indirect taxes, exchange control regulations, and employee-related matters, equipping our clients to navigate complex tax landscapes with confidence.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-base text-justify md:text-md"
          >
            Additionally, our business consulting services empower decision-making through tailored financial advisory, while our meticulous <Link href="/bookkeeping-services-in-kenya/" className="text-[#CE163E] font-semibold">bookkeeping consulting</Link> keeps financial records accurate and up-to-date.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-base text-justify md:text-md"
          >
            We take pride in the trust our clients place in us, serving a diverse range of businesses, and maintaining a strong focus on excellence and client satisfaction. By partnering with Gichuri & Partners, you are choosing a dedicated team that is passionate about driving your business growth and success. At Gichuri & Partners, we specialize in <Link href="/tax-advisory-services-in-kenya/" className="text-[#CE163E] font-semibold">Tax Consulting</Link>, <Link href="/business-registration-services-in-kenya/" className="text-[#CE163E] font-semibold">Business Consulting</Link>, and <Link href="/bookkeeping-services-in-kenya/" className="text-[#CE163E] font-semibold">Bookkeeping Consulting</Link>. Our purpose is to connect you with your true potential by providing the accounting insight, advice, and support necessary to navigate towards success. We’ve cultivated a culture focused on ensuring the success of our clients by recognizing the potential within businesses and the people who drive them.
          </motion.p>
        </div>

        <div className="mb-8 text-center md:mb-14">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl font-bold text-[#273277] md:text-4xl"
          >
            Empowering Businesses
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-4 text-lg font-semibold text-[#273277] sm:text-xl"
          >
            Since{" "}
            <span className="font-bold text-[#CE163E] text-2xl md:text-3xl">
              2013
            </span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
          {stats.map((stat, i) => {
            const refs = [r1, r2, r3];
            const counts = [c1, c2, c3];

            return (
              <motion.div
                key={i}
                ref={refs[i]}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="group rounded-2xl bg-[#273277] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-5 transition-transform duration-300 sm:mb-6 group-hover:scale-110">
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