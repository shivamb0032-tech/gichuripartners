"use client";

import Image from "next/image";

const row1Logos = [
  { name: "",      src: "/assets/trusted-brands/BRS-Logo.png" },
  { name: "", src: "/assets/trusted-brands/KenInvest-logo.png" },
  { name: "",      src: "/assets/trusted-brands/KRA-Logo.webp" },
  { name: "",       src: "/assets/trusted-brands/NSSF-Logo.png" },
  { name: "",       src: "/assets/trusted-brands/NTSA-Logo.svg" },
  { name: "",       src: "/assets/trusted-brands/SHA-Logo.svg" },
];

// const row2Logos = [
//   { name: "",      src: "/assets/trusted-brands/BRS-Logo.png" },
//   { name: "", src: "/assets/trusted-brands/KenInvest-logo.png" },
//   { name: "",      src: "/assets/trusted-brands/KRA-Logo.webp" },
//   { name: "",       src: "/assets/trusted-brands/NSSF-Logo.png" },
//   { name: "",       src: "/assets/trusted-brands/NTSA-Logo.svg" },
//   { name: "",       src: "/assets/trusted-brands/SHA-Logo.svg" },
// ];

function MarqueeRow({ logos, direction = "left" }) {
  const items = [...logos, ...logos, ...logos];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute top-0 left-0 z-10 w-16 h-full pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute top-0 right-0 z-10 w-16 h-full pointer-events-none bg-gradient-to-l from-white to-transparent" />

      <div className={`flex gap-8 w-max ${animClass}`}>
        {items.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex items-center justify-center flex-shrink-0 w-40 h-20">
            <Image
              src={logo.src}
              alt={logo.name}
              width={200}
              height={80}
              className="object-contain w-auto h-16 max-w-full"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GovernmentAgencies() {
  return (
    <section className="w-full px-4 py-12 bg-[#dedede]">

     
      <div className="max-w-6xl mx-auto mb-12 text-center">
        {/* <span className="text-xs font-bold text-indigo-400 tracking-[0.2em] uppercase font-sans">
          Government Services
        </span> */}
        <h2 className="mt-3 mb-5 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-blue-950">
          Your Trusted <br className="hidden sm:block" />
          Link to All Government Agencies
        </h2>
        <p className="font-sans leading-relaxed text-md text-slate-600">
          Seamless Collaboration with Government Agencies — So You Don&apos;t Have to Worry.
        </p>
        <div className="h-1 mx-auto mt-6 rounded-full w-14 bg-gradient-to-r from-blue-900 to-indigo-400" />
      </div>

      {/* Row 1 → left */}
      <div className="mb-6">
        <MarqueeRow logos={row1Logos} direction="left" />
      </div>

      {/* Row 2 ← right */}
      {/* <MarqueeRow logos={row2Logos} direction="right" /> */}

    </section>
  );
}