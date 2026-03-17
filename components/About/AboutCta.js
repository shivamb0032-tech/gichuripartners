"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/codifyformatter-2.jpg"
        alt="Banner Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content — vertical flex */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] max-w-6xl gap-8 px-4 py-16 mx-auto text-center sm:px-8 lg:px-16">

        {/* TOP: Heading + Description */}
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Unlock Business Success{" "}
            <span className="text-[#E21345]">in Kenya with Us!</span>
          </h2>
          <p className="leading-relaxed text-center text-gray-300 text-md">
            We provide expert tax, audit,{" "}
            <Link href="/bookkeeping-services-in-kenya/" className="font-semibold text-[#E21345]">
              bookkeeping
            </Link>
            , and{" "}
            <Link href="/business-registration-services-in-kenya/" className="font-semibold text-[#E21345]">
              business advisory services
            </Link>{" "}
            to help businesses thrive. Our Tax Services simplify compliance, ensuring confident decision-making. Our{" "}
            <Link href="/auditing-services-in-kenya/" className="font-semibold text-[#E21345]">
              Audit
            </Link>{" "}
            Services enhance transparency and compliance, while our Business Services offer strategic insights for growth. With precise{" "}
            <Link href="/bookkeeping-services-in-kenya/" className="font-semibold text-[#E21345]">
              Bookkeeping Services
            </Link>
            , we keep your financial records accurate and up-to-date. Committed to excellence, we guide our clients every step of the way, ensuring sustainable success and long-term financial growth.
          </p>
        </div>

        {/* BOTTOM: Button */}
        <div className="flex justify-center w-full">
          <a
            href="/"
            className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-base font-bold text-white transition-colors bg-[#E21345] duration-300 border-2 border-[#E21345] rounded-full group"
          >
            <span className="absolute inset-0 w-0 transition-all duration-500 ease-out bg-[#E21345] rounded-full group-hover:w-full" />
            <span className="relative text-center transition-colors duration-300 group-hover:text-white">
              Explore Our Custom Business Solutions
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}