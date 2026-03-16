"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    icon: <i className="text-xl fa-solid fa-user-graduate" />,
    title: "Qualifications and Experience",
    desc: "Ensure the tax advisor has relevant qualifications in tax affairs, such as degrees and certificates in accounting, business, finance, and related fields. The professional should also hold a relevant licence to be a tax practitioner from KRA or other relevant bodies. Lastly, the consultant should have a track record to prove their experience and expertise.",
  },
  {
    icon: <i className="text-xl fa-solid fa-star" />,
    title: "Reputation",
    desc: "Secure the services of a reputable tax advisor. Check for Google reviews and reviews on other professional sites. Additionally, check their website for client feedback and testimonials.",
  },
  {
    icon: <i className="text-xl fa-solid fa-briefcase" />,
    title: "Scope of Services",
    desc: "Choose a tax advisory service that offers a range of services relevant to your business model or individual needs.",
  },
  {
    icon: <i className="text-xl fa-solid fa-comments" />,
    title: "Communication",
    desc: "Tax advisory relies heavily on collaboration between the consultant and the client. That’s why timely and open communication is crucial. Choose a tax advisor who offers transparent communication channels and excellent customer service.",
  },
  {
    icon: <i className="text-xl fa-solid fa-sack-dollar" />,
    title: "Cost and Value For Money",
    desc: "Cost of services shouldn’t be the sole determining factor when choosing a professional service. However, it’s important to choose a service that aligns it your budget. At the same time, ensure you’re getting value for your money.",
  },
];

const SLIDES = [...cards, ...cards, ...cards];
const TOTAL = cards.length;

export default function TaxOffers() {
  const [current, setCurrent] = useState(TOTAL);
  const [transitioning, setTransitioning] = useState(true);
  const trackRef = useRef(null);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goTo = (idx) => {
    setTransitioning(true);
    setCurrent(idx);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!transitioning) return;
    const el = trackRef.current;
    const onEnd = () => {
      if (current >= TOTAL * 2) {
        setTransitioning(false);
        setCurrent(current - TOTAL);
      } else if (current < TOTAL) {
        setTransitioning(false);
        setCurrent(current + TOTAL);
      }
    };
    el?.addEventListener("transitionend", onEnd);
    return () => el?.removeEventListener("transitionend", onEnd);
  }, [current, transitioning]);

  const activeDot = ((current % TOTAL) + TOTAL) % TOTAL;
  const slideWidth = 100 / perView;
  const translateX = -(current * slideWidth);

  return (
    <section className="relative w-full px-4 py-20 overflow-hidden bg-[#123453]">

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -translate-x-1/2 bg-indigo-600 rounded-full -top-32 left-1/2 w-96 h-96 opacity-10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ── Heading Block ── */}
        <div className="text-center mb-14">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-5xl">
            We Offer the Best Tax Advisory 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E81448] via-[#E81448] to-fuchsia-400">
              Services in Kenya
            </span>
          </h2>

          <p className="max-w-6xl mx-auto mt-5 text-base leading-relaxed text-justify sm:text-lg text-slate-200">
            We have outlined what tax advisoy services are and why you and your business need them. The next step is finding a good tax advisor who suits your unique needs. Finding the best consultant for your tax needs isn’t a walk in the park. You’ll come across several self-proclaimed tax advisors, so how do you choose the right one Consider the following factors  when selecting a tax advisor:
          </p>
        </div>

      
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className={`flex ${transitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {SLIDES.map((card, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-3"
                style={{ width: `${slideWidth}%` }}
              >
                {/* ── Card ── */}
                <div className="h-full flex flex-col bg-white/[0.07] border border-white/50 rounded-2xl p-7 hover:bg-white/[0.07] hover:border-[#E81448] transition-all duration-300 group">

                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 mb-5 text-[#E81448] transition-all duration-300 border rounded-xl bg-indigo-500/10 border-indigo-500/20 group-hover:bg-[#E81448]/20 group-hover:text-[#E81448]">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold leading-snug text-white">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed text-slate-400">
                    {card.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pagination Dots ── */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(TOTAL + i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                activeDot === i
                  ? "w-7 h-2.5 bg-[#E81448]"
                  : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>

      {/* Font Awesome CDN — move to layout.jsx <head> in production */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossOrigin="anonymous"
      />

    </section>
  );
}