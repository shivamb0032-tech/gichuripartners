"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGears,
  faChartLine,
  faScaleBalanced,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function ChooseUs() {
  return (
    <section className="py-12 bg-gray-100 md:py-12 lg:py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Heading + Subheading + Description */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-[#273277] md:text-4xl lg:text-5xl">
            Why Choose Us
          </h2>

          <p className="mt-3 text-lg font-semibold text-[#F91750] md:text-xl">
            Our Record Speaks For Itself
          </p>

          <p className="max-w-6xl mx-auto mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
            We are the best tax and business consultants in Kenya and our track record speaks for itself. But don’t just take our word for it, let reviews from happy clients convince you. We tailor our services to suit your unique business needs. Our goal is to help scale your business through seamless financial operations, employee satisfaction, tax and legal compliance, and accounting transparency.
          </p>
        </div>

       
        <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative overflow-hidden border border-gray-200 shadow-2xl rounded-2xl">
 
            <img
              src="assets/hero-bg/Nairobi-1536x2048.jpg"
              alt="Nairobi business team"
              className="object-cover h-[400px] w-full md:h-[700px]"
            />

       
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                
                {/* Stat 1 */}
                <div className="p-3 text-center border border-gray-200 rounded-lg shadow-md bg-[#273277]/80 backdrop-blur-sm md:p-4">
                  <div className="text-base font-bold text-[#F91750] sm:text-xl md:text-2xl lg:text-3xl">
                    10,000+
                  </div>
                  <p className="mt-1 text-xs font-medium text-gray-100 sm:text-sm md:text-base">
                    Happy Customers
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="p-3 text-center border border-gray-200 rounded-lg shadow-md bg-[#273277]/80 backdrop-blur-sm md:p-4">
                  <div className="text-base font-bold text-[#F91750] sm:text-xl md:text-2xl lg:text-3xl">
                    5,000+
                  </div>
                  <p className="mt-1 text-xs font-medium text-gray-100 sm:text-sm md:text-base">
                    Businesses Served
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="p-3 text-center border border-gray-200 rounded-lg shadow-md bg-[#273277]/80 backdrop-blur-sm md:p-4">
                  <div className="text-base font-bold text-[#F91750] sm:text-xl md:text-2xl lg:text-3xl">
                    10+
                  </div>
                  <p className="mt-1 text-xs font-medium text-gray-100 sm:text-sm md:text-base">
                    Dedicated Team
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3 Vertical Cards */}
          <div className="space-y-6 lg:space-y-8">
            {/* Card 1 */}
            <div className="flex items-start gap-5 p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:p-7 lg:p-8 hover:shadow-2xl">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center bg-[#F91750]/20 rounded-full w-14 h-14 md:w-16 md:h-16">
                  <FontAwesomeIcon icon={faGears} className="text-2xl text-[#F91750] md:text-3xl" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-[#F91750] md:text-2xl">EFFICIENCY</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  We provide efficient and unparalleled tax and business services. If you’re looking for a reliable tax and auditing firm in Kenya, look no further.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-5 p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:p-7 lg:p-8 hover:shadow-2xl">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center bg-[#F91750]/20 rounded-full w-14 h-14 md:w-16 md:h-16">
                  <FontAwesomeIcon icon={faScaleBalanced} className="text-2xl text-[#F91750] md:text-3xl" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-[#F91750] md:text-2xl">INTEGRITY</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  At Gichuri & Partners tax consultants, we are committed to providing premier tax, auditing, accounting, and business services in Kenya, upholding the highest level of integrity and transparency.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-5 p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl md:p-7 lg:p-8 hover:shadow-2xl">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center bg-[#F91750]/20 rounded-full w-14 h-14 md:w-16 md:h-16">
                  <FontAwesomeIcon icon={faHandHoldingHeart} className="text-2xl text-[#F91750] md:text-3xl" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-[#F91750] md:text-2xl">TRUSTWORTHY</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  With at least a decade in the tax consultancy and business advisory industry, Gichuri & Partners is your trustworthy ally in all things taxes and business growth in Kenya.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}