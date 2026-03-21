// components/BlogHero.tsx
import Image from "next/image";
import Link from "next/link";

export default function BlogHero() {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center overflow-hidden bg-[#06111f]">

      {/* Background Image — right side only */}
      <div className="absolute right-0 top-0 w-full lg:w-[62%] h-full">
        <Image
          src="/assets/Business-Registration.jpeg"
          alt="Blog Hero"
          fill
          className="object-cover object-center"
          priority
        />
        {/* fade left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111f] from-5% via-[#06111f]/85 via-30% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111f]/60 to-transparent" />
      </div>

      <div className="absolute rounded-full -left-20 -bottom-20 w-72 h-72 opacity-10 border-2 border-[#F3164E]" />

      <div className="absolute top-0 left-[38%] w-px h-full opacity-10 bg-gradient-to-b from-transparent via-[#F3164E] to-transparent" />

      <div className="relative z-10 w-full max-w-5xl px-8 py-16 mx-auto lg:px-12">
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#F3164E]/10 border border-[#F3164E]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3164E] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#F3164E] ">
              Blogs
            </span>
          </div>

          {/* Heading */}
          <h1 className="flex mb-6 leading-none">
            <span className="block font-bold text-white text-[clamp(2.6rem,5.5vw,3.8rem)]">
              Blog
            </span>
            <span className="ml-2 block font-bold text-[clamp(2.6rem,5.5vw,3.8rem)] pb-3 bg-gradient-to-r from-[#F3164E] to-[#ff8fa3] bg-clip-text text-transparent">
              Insights
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 leading-relaxed text-[0.97rem] text-white/50 max-w-[34ch] font-[DM_Sans]">
            Find out what is new in the world of taxes.
          </p>

          {/* CTA Button */}
          <div className="flex items-center gap-5 mb-10">
            <button className="group relative inline-flex items-center gap-3 px-7 py-3.5 font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-95 bg-gradient-to-br from-[#F3164E] to-[#a50f35] rounded-[8px] shadow-[0_8px_30px_rgba(243,22,78,0.4)] ">
              <span className="absolute inset-0 transition-transform duration-700 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:translate-x-full" />
              <span className="relative z-10">Book A Free Consultation</span>
              <svg
                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}