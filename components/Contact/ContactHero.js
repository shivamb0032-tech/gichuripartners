// components/BlogHero.tsx
import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[55vh] flex items-center overflow-hidden bg-[#06111f]">

      {/* Background Image — right side only */}
      <div className="absolute right-0 top-0 w-full lg:w-[62%] h-full">
        <Image
          src="/assets/contact-bg1.webp"
          alt="Blog Hero"
          fill
          className="object-cover object-center"
          priority
        />
        {/* fade left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111f] from-5% via-[#06111f]/80 via-10% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111f]/60 to-transparent" />
      </div>

      <div className="absolute rounded-full -left-20 -bottom-20 w-72 h-72 opacity-10 border-2 border-[#F3164E]" />

      <div className="absolute top-0 left-[38%] w-px h-full opacity-10 bg-gradient-to-b from-transparent via-[#F3164E] to-transparent" />

      <div className="relative z-10 w-full px-8 py-16 mx-auto max-w-7xl lg:px-12">
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#F3164E]/10 border border-[#F3164E]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3164E] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#F3164E] ">
              Contact
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 leading-none ">
            <span className="block text-2xl font-bold text-white lg:text-5xl md:text-4xl">
              Talk to The Best
            </span>
            <span className="block text-2xl font-bold lg:text-5xl md:text-4xl pb-3 bg-gradient-to-r from-[#F3164E] to-[#ff6d88] bg-clip-text text-transparent">
               Tax Consultants in Nairobi Kenya !
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 leading-relaxed text-[0.97rem] text-white/50 max-w-[34ch] ">
            We value your questions! For inquiries that need a detailed response, we’ll get back to you within 48 hours.
          </p>

        

        </div>
      </div>

    </section>
  );
}