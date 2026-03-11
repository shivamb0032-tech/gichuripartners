"use client";
import { useEffect, useRef } from "react";

export default function Section() {
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
    <section className="flex items-center min-h-screen px-4 py-12 overflow-hidden bg-stone-50 sm:px-8">
      <div className="w-full max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div ref={headingRef} className="text-center mb-14 lg:text-left">
          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl text-[#273277]">
            Who We Are
          </h2>
        </div>

        {/* ── Two Column Row ── */}
        {/* 
          KEY FIX: 
          - Left div gets padding-right on desktop (lg:pr-28) so text 
            doesn't go under the overlapping image
          - Right div uses lg:-ml-20 to pull left over left div
          - Left div width stays lg:w-3/5, right lg:w-2/5
          - Together they create the overlay without text getting cut
        */}
        <div className="relative flex flex-col items-stretch lg:flex-row">

          {/* ── LEFT DIV — Paragraphs ── */}
          <div
            ref={leftRef}
            className="relative z-10 flex flex-col justify-center w-full p-6 bg-white shadow-md sm:p-8 lg:pr-28 lg:w-3/5 rounded-2xl"
          >
            {/* top accent bar */}
            <div className="w-16 h-1 mb-6 rounded-full bg-[#CE163E]" />

            <p className="mb-4 text-base leading-relaxed text-stone-700 sm:text-lg">
              Gichuri & Partners is one of the best tax consultants in Kenya that provides a diverse range of tax and business advisory services to unlock your business's full potential. We are more than a tax consultancy, walking with you in every step of building your business, from the startup stage to scaling it to the farthest heights.
            </p>

            <p className="mb-4 text-base leading-relaxed text-stone-600 sm:text-lg">
              Our team of qualified experts and dedicated professionals is well-equipped to navigate the complex business and financial landscape in Kenya. As a top audit and tax consulting firm in Kenya, our mission is to help businesses thrive and scale efficiently through expert tax strategies, auditing services, meticulous bookkeeping, business advisory, and streamlined financial operations.
            </p>

            <p className="mb-4 text-base leading-relaxed text-stone-500 sm:text-lg">
              We work closely with our clients to foster growth, enhance profitability, and ensure sustainable business success. With our deep understanding of the business and accounting operations of SMEs, organizations, and corporations, we tailor our audit, tax, accounting, and business advisory services to your company's unique needs.
            </p>

            <p className="mb-4 text-base leading-relaxed text-stone-500 sm:text-lg">
              At Gichuri & Partners, we are driven by one purpose; to help your business achieve its full potential. In us, you find a trusted ally that stands with you in every aspect of your business, from tax compliance and financial operations to scalability and legal compliance.
            </p>

            <button className="mt-8 self-start bg-[#CE163E] hover:bg-[#273277] active:scale-95 text-white text-sm font-bold uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-200 shadow-md">
              About Us →
            </button>
          </div>

          {/* ── RIGHT DIV — Image overlapping left div ── */}
          {/*
            lg:-ml-20 pulls image LEFT over left div's right edge
            z-20 keeps it on top visually
            Left div's lg:pr-28 creates space so text never goes under image
          */}
          <div
            ref={rightRef}
            className="relative z-20 self-stretch w-full mt-6 lg:w-2/5 lg:mt-0 lg:-ml-20"
          >
            <div className="overflow-hidden shadow-2xl h-72 sm:h-96 lg:h-full min-h-64 rounded-2xl ring-4 ring-white group">
              <img
                src="/assets/hero-bg/Gichuri-Partners.jpg"
                alt="Gichuri and Partners"
                className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}