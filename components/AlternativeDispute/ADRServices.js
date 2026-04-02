"use client";
import Image from "next/image";
import Link from "next/link";

export default function ADRServices() {
 

  return (
    <section className="relative py-10 overflow-hidden md:py-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-bg/serv-img-14.avif"
          alt="Audit background"
          fill
          priority
          className="object-cover"
        />
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-10 text-center align-content-center">
          <h2 className="mb-5 text-3xl font-bold text-left text-[#273277] md:text-4xl lg:text-5xl">
           ADR Services in Kenya
          </h2>
          <p className="mx-auto text-justify text-gray-700 text-md md:text-md">
            Tax disputes with KRA are stressful. Litigation through the <Link href="/kra-tax-appeal-tribunal-services-in-kenya/" className="text-[#F5174F] font-semibold">Tax Appeals Tribunal</Link> and other judicial courts is one of the go-to processes to resolve these disagreements. However, this litigation process can be overwhelming, expensive, and time-consuming. That’s where KRA’s Alternative Dispute Resolution (ADR) comes in. With ADR, you don’t have to sit through the overly formal and legalese tax conflict resolution process with judges, lawyers, and tax professionals. Instead, you enter into a voluntary and facilitated mediation with the KRA Commissioner and resolve the tax dispute.
          </p>
          <p className="pt-2 mx-auto text-justify text-gray-700 text-md md:text-md">
           <Link href="/" className="text-[#F5174F] font-semibold"> At Gichuri & Partners</Link>, we provide professional support to help you navigate the <span className="font-semibold ">KRA alternative dispute resolution process in Kenya</span>. Our team will help you settle tax disagreements with the KRA cost-effectively and amicably without involving the courts.
          </p>
          
        </div>

      </div>
    </section>
  );
}

