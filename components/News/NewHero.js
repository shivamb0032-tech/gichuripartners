// components/NewHero.tsx
import Image from "next/image";

export default function NewHero() {
  return (
    <section className="relative w-full min-h-[52vh] flex items-stretch overflow-hidden ">

      {/* === BG: diagonal split via clip-path === */}
      <div className="absolute inset-0 bg-[#0d1f33]" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #F3164E 0%, #a50f37 55%, transparent 55%)",
          opacity: 0.92,
        }}
      />

      {/* Subtle dot-grid texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative ring top-left */}
      <div
        className="absolute w-64 h-64 border rounded-full -top-16 -left-16 border-white/10"
        style={{ borderWidth: "40px" }}
      />
      {/* Decorative ring bottom-right */}
      <div
        className="absolute border rounded-full -bottom-20 -right-10 w-72 h-72 border-white/5"
        style={{ borderWidth: "50px" }}
      />

      {/* === CONTENT WRAPPER === */}
      <div className="relative z-10 flex flex-col items-stretch w-full lg:flex-row">

        {/* LEFT — Image Panel */}
        <div className="relative w-full lg:w-[48%] min-h-[280px] lg:min-h-0 flex-shrink-0">
          <Image
            src="/assets/News.png"
            alt="Business Tax Tips"
            fill
            className="object-cover object-top"
            priority
          />
          {/* fade-right on image for seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0d1f33]/80 hidden lg:block" />
          {/* fade-bottom on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1f33]/70 lg:hidden" />
        </div>

        {/* RIGHT — Content Panel */}
        <div className="flex items-center flex-1 px-8 py-10 lg:px-12 lg:py-0">
          <div className="max-w-xl">

            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-[2px] bg-[#F3164E]" />
              <span
                className="text-[11px] font-semibold tracking-[3px] uppercase"
                style={{ color: "#ff6b8a", fontFamily: "'DM Sans', sans-serif" }}
              >
                Media Room
              </span>
            </div>

            {/* Heading */}
            <h1
              className="mb-5 leading-[1.1] font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              }}
            >
              <span className="block text-white">Business</span>
              <span
                className="block"
                style={{
                  WebkitTextStroke: "1.5px #F3164E",
                  color: "transparent",
                }}
              >
                Tax Tips
              </span>
              <span className="block text-white">&amp; Updates</span>
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[1px] w-10 bg-[#F3164E]/60" />
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            {/* Description */}
            <p
              className="mb-8 leading-relaxed text-white/60"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                maxWidth: "38ch",
              }}
            >
              Stay Ahead of the Curve: The Latest Trends in Business Taxation
              You Need to Know!
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-5">
              <button
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-95"
                style={{
                  background: "#F3164E",
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 8px 32px rgba(243,22,78,0.45)",
                }}
              >
                {/* shine sweep */}
                <span className="absolute inset-0 transition-transform duration-700 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full" />
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

              {/* Ghost secondary hint */}
              <span
                className="hidden text-xs tracking-wide text-white/30 sm:block"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                No credit card required
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}