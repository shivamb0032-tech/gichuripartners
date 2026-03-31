"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function BussinessRegisterService() {
  return (
    <section className="py-10 md:py-10 bg-gray-50">
      <div className="container px-6 mx-auto lg:px-8 max-w-7xl">

        {/* Main Heading */}
        <h2 className="mb-12 text-3xl font-bold text-center text-[#273277] md:text-4xl lg:text-5xl md:mb-16">
         Business Registration Services in Kenya
        </h2>

        {/* Content Wrapper */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">

          {/* Left - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <Image
                src="/assets/hero-bg/serv-img-11.jpg"
                alt="Gichuri & Partners Auditing Services"
                width={1200}
                height={500}
                className="object-cover w-full md:h-[500px] h-[400px]"
                priority
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="w-full space-y-5 lg:w-1/2 md:space-y-5">
            <h3 className="text-2xl font-semibold text-[#E01244] md:text-3xl">
             Why You Should Register a Business in Kenya
            </h3>

            <p className="text-base leading-relaxed text-justify text-gray-600 md:text-md">
              Starting a business in Kenya offers many benefits, including financial independence, breaking away from formal employment to follow your passions and possibly higher earnings than being employed. Therefore, many people dream of starting various businesses, from small enterprises, partnerships, and limited liability companies to corporations.
            </p>

            <p className="text-base leading-relaxed text-justify text-gray-700 md:text-md">
              Before you can start operating a business in Kenya, you’re required by the law to follow some legal procedures. One of these procedures is registering your business. This administrative process can be draining and time-consuming, especially for beginners. At <Link href="/" className="font-semibold text-brand-pink-dark"> Gichuri & Partners</Link>, we handle all your business registration affairs so that you can focus on other aspects of laying a good foundation and growing your business.
            </p>
           
          </div>

        </div>
      </div>
    </section>
  );
}