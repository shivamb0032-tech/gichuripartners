// components/BlogHero.tsx
import Image from "next/image";
import Link from "next/link";

export default function BlogHero() {
  return (
    <section className="relative w-full min-h-[55vh] flex items-center overflow-hidden bg-[#06111f]">

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
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #06111f 0%, #06111f 5%, rgba(6,17,31,0.85) 30%, rgba(6,17,31,0.3) 60%, transparent 100%)",
          }}
        />
        {/* fade bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111f]/60 to-transparent" />
      </div>

      {/* Geometric accent shapes */}
      <div
        className="absolute rounded-full -left-20 -bottom-20 w-72 h-72 opacity-10"
        style={{ border: "2px solid #F3164E" }}
      />
      <div className="absolute left-10 top-12 w-2.5 h-2.5 rounded-full bg-[#F3164E] opacity-60" />
      <div
        className="absolute top-0 left-[38%] w-px h-full opacity-10"
        style={{ background: "linear-gradient(to bottom, transparent, #F3164E, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-8 py-16 mx-auto lg:px-12">
        <div className="max-w-md">

          {/* Tag pill */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(243,22,78,0.12)",
              border: "1px solid rgba(243,22,78,0.3)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3164E] animate-pulse" />
            <span
              className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#F3164E]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Blogs
            </span>
          </div>

          {/* Heading */}
          <h1
            className="mb-6 leading-[1.0]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span
              className="block font-bold text-white"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 3.8rem)" }}
            >
              Blog
            </span>
            <span
              className="block font-bold"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 3.8rem)",
                background: "linear-gradient(90deg, #F3164E, #ff8fa3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Insights
            </span>
          </h1>

          {/* Description */}
          <p
            className="mb-8 leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.97rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "34ch",
            }}
          >
            Find out what is new in the world of taxes.
          </p>

          {/* CTA Button */}
          <div className="flex items-center gap-5 mb-10">
            <button
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-95"
              style={{
                background: "linear-gradient(135deg, #F3164E, #a50f35)",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 8px 30px rgba(243,22,78,0.4)",
                borderRadius: "8px",
              }}
            >
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

          {/* Breadcrumb */}
          {/* <div
            className="flex items-center gap-2 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)" }}
          >
            <Link href="/" className="transition-colors duration-200 hover:text-white">
              Home
            </Link>
            <span className="text-[#F3164E]/60">/</span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Blog</span>
          </div> */}

        </div>
      </div>

    </section>
  );
}