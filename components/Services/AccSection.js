"use client";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function AccSection() {
  return (
    <section className="py-10 md:py-10 bg-gray-50">
      <div className="container px-6 mx-auto lg:px-8 max-w-7xl">

        {/* Main Heading */}
        <h2 className="mb-12 text-3xl font-bold text-center text-[#273277] md:text-4xl lg:text-5xl md:mb-16">
          Best Auditing and Accounting Firm in Kenya
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
                height={800}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="w-full space-y-5 lg:w-1/2 md:space-y-5">
            <h3 className="text-2xl font-semibold text-[#E01244] md:text-3xl">
              Importance of Auditing Services in Kenya
            </h3>

            <p className="text-base leading-relaxed text-justify text-gray-600 md:text-lg">
              Many business owners in Kenya only discover the true value of auditing services after facing compliance issues or consulting experts. Auditing is essential — it ensures financial transparency, boosts operational efficiency, and guarantees compliance with legal and regulatory requirements.
            </p>

            <p className="text-base leading-relaxed text-justify text-gray-700 md:text-lg">
              Every business — whether a large corporation, public institution, private company, SME, or non-profit — benefits from regular audits. They help maintain accurate financial records, identify risks early, and support sustainable growth. At <span className="font-semibold text-[#273277]">Gichuri & Partners</span>, we are recognized as one of the leading auditing and accounting firms in Kenya. Our tailored auditing and assurance services help businesses achieve full compliance while unlocking valuable insights for better decision-making.
            </p>

            <p className="text-base font-medium text-justify text-gray-800 md:text-lg">
              Our professional auditing services support Kenyan businesses in the following key ways:
            </p>

            {/* Points List */}
            <ul className="space-y-3 md:space-y-3">
              <li className="flex items-start gap-4 text-base text-justify text-gray-800 md:text-lg">
                <FontAwesomeIcon 
                  icon={faCheckCircle} 
                  className="flex-shrink-0 mt-1 text-2xl text-[#E01244]" 
                />
                <span>Ensure financial records fully align with KRA, ICPAK, and other regulatory standards</span>
              </li>
              <li className="flex items-start gap-4 text-base text-justify text-gray-800 md:text-lg">
                <FontAwesomeIcon 
                  icon={faCheckCircle} 
                  className="flex-shrink-0 mt-1 text-2xl text-[#E01244]" 
                />
                <span>Identify and resolve financial inconsistencies or irregularities promptly</span>
              </li>
              <li className="flex items-start gap-4 text-base text-justify text-gray-800 md:text-lg">
                <FontAwesomeIcon 
                  icon={faCheckCircle} 
                  className="flex-shrink-0 mt-1 text-2xl text-[#E01244]" 
                />
                <span>Mitigate risks early to enhance operational efficiency and protect your business</span>
              </li>
              <li className="flex items-start gap-4 text-base text-justify text-gray-800 md:text-lg">
                <FontAwesomeIcon 
                  icon={faCheckCircle} 
                  className="flex-shrink-0 mt-1 text-2xl text-[#E01244]" 
                />
                <span>Provide actionable insights and recommendations to improve decision-making and strategy</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}