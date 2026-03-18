"use client";

import { MdLocationOn, MdEmail, MdPhone, MdBusiness, MdHeadsetMic, MdSupportAgent } from "react-icons/md";

// ── install: npm install react-icons ────────────────────────────

const contactCards = [
  {
    id: "address",
    Icon: MdLocationOn,
    label: "Our Address",
    lines: ["College House, 3rd Floor.", "University, Nairobi Kenya."],
    accent: "#123453",
    bg: "from-brand-navy-dark/8 to-brand-navy-dark/3",
    iconBg: "bg-brand-navy-dark",
  },
  {
    id: "email",
    Icon: MdEmail,
    label: "Email Us",
    lines: ["help@gichuripartners.com", "info@gichuripartners.com"],
    accent: "#F91750",
    bg: "from-brand-pink-dark/8 to-brand-pink-dark/3",
    iconBg: "bg-brand-pink-dark",
  },
  {
    id: "phone",
    Icon: MdPhone,
    label: "Call Us",
    lines: ["+254 711 82 71 49", "+254 702 13 13 13"],
    accent: "#0ea5e9",
    bg: "from-brand-navy-dark/8 to-brand-navy-dark/3",
    iconBg: "bg-brand-navy-dark",
  },
];

const numbers = [
  { Icon: MdBusiness, label: "Business Enquiries", number: "+254 711 82 71 49" },
  { Icon: MdHeadsetMic, label: "Reception", number: "+254 702 13 13 13" },
  { Icon: MdSupportAgent, label: "Customer Service", number: "+254 702 13 13 13" },
];

export default function ContactInfo() {
  return (
    <section className="bg-[#f5f7fa] py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#F91750] mb-2">
            Contact Us
          </p>
          <h2 className="text-4xl font-black leading-tight md:text-5xl text-slate-800">
            Get in{" "}
            <span className="relative inline-block">
              <span className="text-[#123453]">Touch</span>
              {/* Underline accent */}
              <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[#F91750]" />
            </span>
          </h2>
          <p className="max-w-md mt-4 text-sm text-slate-500">
            Reach out to us through any of the channels below — we respond promptly.
          </p>
        </div>

        {/* ── 3 Contact Cards ── */}
        <div className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-3">
          {contactCards.map(({ id, Icon, label, lines, accent, bg, iconBg }) => (
            <div
              key={id}
              className={`group relative bg-gradient-to-br ${bg} border border-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Decorative circle */}
              <div
                className="absolute w-24 h-24 rounded-full -top-6 -right-6 opacity-10"
                style={{ backgroundColor: accent }}
              />

              {/* Icon */}
              <div className={`${iconBg} w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                <Icon className="text-xl text-white" />
              </div>

              {/* Label */}
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: accent }}>
                {label}
              </p>

              {/* Lines */}
              <div className="space-y-1">
                {lines.map((line, i) => (
                  <p key={i} className="text-sm font-medium leading-snug text-slate-700">
                    {line}
                  </p>
                ))}
              </div>

             
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ backgroundColor: accent }}
              />
            </div>
          ))}
        </div>

       
        <div className="relative bg-[#123453] rounded-2xl overflow-hidden">

          
          <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#F91750]/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-y-0 sm:divide-x divide-white/10">
            {numbers.map(({ Icon, label, number }, i) => (
              <a
                key={i}
                href={`tel:${number.replace(/\s/g, "")}`}
                className="flex items-center gap-4 py-6 transition-colors duration-200 group px-7 hover:bg-white/5"
              >
                {/* Icon circle */}
                <div className="w-10 h-10 rounded-full bg-[#F91750]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F91750]/40 transition-colors duration-200">
                  <Icon className="text-[#F91750] text-lg" />
                </div>

                <div>
                  <p className="text-white/50 text-[11px] font-medium tracking-wide mb-0.5">
                    {label}
                  </p>
                  <p className="text-base font-bold tracking-wide text-white">
                    {number}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}