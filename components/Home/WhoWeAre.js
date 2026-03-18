"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function WhoWeAre() {
  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const els = [
      { el: headingRef.current, delay: 0 },
      { el: leftRef.current, delay: 150 },
      { el: rightRef.current, delay: 300 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = els.find((e) => e.el === entry.target);
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, found?.delay || 0);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach(({ el }) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#0e1a2b] overflow-hidden py-8 px-4 sm:px-8">

      {/* ── Diagonal split background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* top-right light patch */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CE163E]/5" />
        {/* diagonal divider */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="55,0 100,0 100,100 45,100" fill="rgba(206,22,62,0.04)" />
        </svg>
        {/* large ghost text */}
        <p className="absolute -bottom-6 left-0 text-[10rem] md:text-[14rem] font-black text-white/[0.03] leading-none select-none whitespace-nowrap tracking-tighter">
          GICHURI
        </p>
        {/* dot pattern top-right */}
        <div
          className="absolute w-40 h-40 top-10 right-10 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #CE163E 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* ── Two column ── */}
        <div className="flex flex-col items-stretch gap-0 lg:flex-row">

          {/* ── LEFT: Text card ── */}
          <div
            ref={leftRef}
            className="relative w-full lg:w-[58%] bg-white/[0.04] border border-white/10 backdrop-blur-sm rounded-2xl lg:rounded-r-none p-6 flex flex-col justify-start"
          >
            {/* top-left corner accent */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#CE163E] rounded-tl-2xl" />
            {/* bottom-right corner accent */}
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#CE163E] rounded-br-2xl" />

            {/* Heading inside card */}
            <div ref={headingRef} className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-0.5 bg-[#CE163E]" />
                <span className="text-[#CE163E] text-xs font-bold tracking-[0.25em] uppercase">About the Firm</span>
              </div>
              <h2 className="text-4xl font-black leading-none tracking-tight text-white sm:text-5xl">
                Who We{" "}
                <span className="relative inline-block">
                  <span className="text-[#CE163E]">Are</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#CE163E] rounded-full" />
                </span>
              </h2>
            </div>

            <div className="w-12 h-0.5 bg-[#CE163E] mb-3 rounded-full" />

            <div className="space-y-2.5 text-white/75 text-[16px] leading-snug text-justify">
              <p>
                Gichuri & Partners is one of the <Link href="/" className="font-semibold text-brand-pink-dark">best tax consultants</Link> in Kenya that provides a diverse range of tax and business advisory services to unlock your business’s full potential. We are more than a tax consultancy, walking with you in every step of building your business, from the startup stage to scaling it to the farthest heights.
              </p>
              <p>
                Our team of qualified experts and dedicated professionals is well-equipped to navigate the complex business and financial landscape in Kenya. As a top audit and tax consulting firm in Kenya, our mission is to help businesses thrive and scale efficiently through expert tax strategies, auditing services, meticulous bookkeeping, business advisory, and streamlined financial operations.
              </p>
              <p>
                We work closely with our clients to foster growth, enhance profitability, and ensure sustainable business success. With our deep understanding of the business and accounting operations of SMEs, organizations, and corporations, we tailor our <span className="font-semibold ">audit, tax, accounting, and business advisory services</span> to your company’s unique needs.
              </p>
              <p>
                At Gichuri & Partners, we are driven by one purpose; to help your business achieve its full potential. In us, you find a trusted ally that stands with you in every aspect of your business, from tax compliance and financial operations to scalability and legal compliance. We offer a wide variety of services including <Link href="/auditing-services-in-kenya/" className="font-semibold text-brand-pink-dark">auditing</Link>, <Link href="/bookkeeping-services-in-kenya/" className="font-semibold text-brand-pink-dark">bookkeeping</Link>, <Link href="/accounting-services-in-kenya/" className="font-semibold text-brand-pink-dark">accounting</Link>, <Link href="/tax-advisory-services-in-kenya/" className="font-semibold text-brand-pink-dark">tax advisory</Link>, <Link href="/payroll-services-in-kenya/" className="font-semibold text-brand-pink-dark">payroll</Link>, <span className="font-semibold ">KRA Services</span>, <Link href="/international-tax-services-in-kenya/" className="font-semibold text-brand-pink-dark">International Taxation</Link>, and <Link href="/business-registration-services-in-kenya/" className="font-semibold text-brand-pink-dark">business registration services</Link>.
              </p>
            </div>

            <Link href="/about-us" className="mt-5 self-start bg-[#CE163E] hover:bg-[#273277] active:scale-95 text-white text-xs font-black uppercase tracking-[0.2em] px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#CE163E]/30 hover:shadow-[#273277]/30">
              About Us →
            </Link>
          </div>

          {/* ── RIGHT: Image ── */}
          <div
            ref={rightRef}
            className="relative w-full lg:w-[42%] h-[350px] sm:h-[400px] lg:h-[700px]"
          >
            {/* Image */}
            <div className="group overflow-hidden h-full w-full rounded-2xl lg:rounded-l-none ring-2 ring-[#CE163E]/40">
              <img
                src="/assets/hero-bg/Gichuri-Partners.jpg"
                alt="Gichuri and Partners"
                className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              {/* Dark overlay with brand color tint */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0e1a2b]/60 via-transparent to-[#CE163E]/10 pointer-events-none" />
            </div>

            
            {/* <div className="absolute -top-4 -left-4 lg:left-auto  w-20 h-20 bg-[#CE163E] rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-[#CE163E]/40 rotate-3">
              <span className="text-white text-[10px] font-bold uppercase tracking-wider leading-none mb-0.5">Since</span>
              <span className="text-xl font-black leading-none text-white">2009</span>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}