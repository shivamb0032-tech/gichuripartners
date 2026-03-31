"use client";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function TribunalServices() {
  return (
    <section className="py-10 md:py-10 bg-gray-50">
      <div className="container px-6 mx-auto lg:px-8 max-w-7xl">

        {/* Main Heading */}
        <h2 className="mb-12 text-3xl font-bold text-center text-[#273277] md:text-4xl lg:text-5xl md:mb-16">
         Best KRA Tax Appeal Tribunal Services
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
                className="object-cover w-full md:h-[600px] h-[400px]"
                priority
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="w-full space-y-5 lg:w-1/2 md:space-y-5">
            <h3 className="text-2xl font-semibold text-[#E01244] md:text-3xl">
              Trusted Tax Appeals Tribunal Services in Kenya
            </h3>

            <p className="text-base leading-relaxed text-justify text-gray-600 md:text-md">
              Disputes with the Kenya Revenue Authority (KRA) are different, depending on what kind of taxpayer you are. It could be an unfair penalty for a missed deadline, unexplained interest on a tax obligation you’re unaware of, or disagreements on the payable taxes. Sometimes, you can explain your case to KRA, and it will be enough, making them withdraw the tax disagreement at hand.
            </p>

            <p className="text-base leading-relaxed text-justify text-gray-700 md:text-md">
              Other times, the disagreement is complicated, and no matter how hard you try to make it right, KRA will insist you have a case to answer, penalties to pay, and extra taxes to pay. This is where most taxpayers give up and pay whatever KRA demands, even though it’s unfair. You don’t need to give up. If you think KRA is being unfair to you or your business, you should escalate the issue with a higher authority. That authority is the Tax Appeals Tribunal.
            </p>
            <p className="text-base leading-relaxed text-justify text-gray-700 md:text-md">
              It’s even better when you seek a professional tax consultant to represent you at the tribunal. At Gichuri & Partners, we provide professional <span className="font-semibold">tax appeals tribunal services in Kenya</span> to help taxpayers get the justice they deserve in tax disputes.
            </p>
           
          </div>

        </div>
      </div>
    </section>
  );
}