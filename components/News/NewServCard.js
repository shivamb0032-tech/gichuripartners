"use client";

import Image from "next/image";

export default function ServiceCards() {
  return (
    <section className="flex justify-center px-4 py-6 bg-white">
      <div className="flex flex-wrap justify-center w-full max-w-5xl gap-6">
      
      {/* Tax Consultancy Card */}
      <div className="group relative w-[460px] h-[280px] rounded-[18px] overflow-hidden cursor-pointer">
        
        {/* Background Image */}
        <Image
          src="/assets/businesssetup-bg.webp"
          alt="Tax Consultancy"
          fill
          className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
          
        />

        {/* Half Overlay - curved top */}
        <div
          className="absolute left-0 right-0 bottom-0 flex flex-col items-center justify-end pb-5 gap-[7px] transition-all duration-400 ease-in-out"
          style={{
            height: "50%",
            borderRadius: "52% 52% 0 0 / 28% 28% 0 0",
            background:
              "linear-gradient(to top, rgba(10,10,30,0.95) 60%, rgba(10,10,30,0.4) 100%)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.height = "58%";
            el.style.background =
              "linear-gradient(to top, rgba(180,30,50,0.95) 60%, rgba(120,10,20,0.35) 100%)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.height = "50%";
            el.style.background =
              "linear-gradient(to top, rgba(10,10,30,0.95) 60%, rgba(10,10,30,0.4) 100%)";
          }}
        >
          <span className="text-[10px] tracking-[2px] uppercase text-white/60 font-medium font-sans">
            Gichuri &amp; Partners
          </span>
          <h2 className="text-white text-[20px] font-bold text-center leading-tight font-serif">
            Tax Consultancy
          </h2>
          <button className="mt-[2px] px-[22px] py-[7px] rounded-full text-[12px] font-medium tracking-wide bg-[#e0243c] text-white border-none transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-[#c0172b] group-hover:scale-105 cursor-pointer">
            Contact Now
          </button>
        </div>
      </div>

      {/* Business Services Card */}
      <div className="group relative w-[460px] h-[280px] rounded-[18px] overflow-hidden cursor-pointer">

        {/* Background Image */}
        <Image
          src="/assets/legalservice-bg-3.webp"
          alt="Business Services"
          fill
          className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
         
        />

        {/* Half Overlay - curved top */}
        <div
          className="absolute left-0 right-0 bottom-0 flex flex-col items-center justify-end pb-5 gap-[7px] transition-all duration-400 ease-in-out"
          style={{
            height: "50%",
            borderRadius: "52% 52% 0 0 / 28% 28% 0 0",
            background:
              "linear-gradient(to top, rgba(8,30,50,0.95) 60%, rgba(8,30,50,0.4) 100%)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.height = "58%";
            el.style.background =
              "linear-gradient(to top, rgba(8,60,110,0.95) 60%, rgba(5,40,80,0.35) 100%)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.height = "50%";
            el.style.background =
              "linear-gradient(to top, rgba(8,30,50,0.95) 60%, rgba(8,30,50,0.4) 100%)";
          }}
        >
          <span className="text-[10px] tracking-[2px] uppercase text-white/60 font-medium font-sans">
            Gichuri &amp; Partners
          </span>
          <h2 className="text-white text-[20px] font-bold text-center leading-tight font-serif">
            Business Services
          </h2>
          <button className="mt-[2px] px-[22px] py-[7px] rounded-full text-[12px] font-medium tracking-wide bg-[#0f1e35] text-white border border-white/30 transition-all duration-300 ease-in-out group-hover:bg-white/15 group-hover:border-white/60 group-hover:scale-105 cursor-pointer">
            Contact Now
          </button>
        </div>
      </div>

      </div>
    </section>
  );
}