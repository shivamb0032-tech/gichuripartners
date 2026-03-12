import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  { name: "Serah Kariuki", designation: "DENTIST", image: "/assets/hero-bg/Serah-Kariuki-768x576.jpg" },
  { name: "Peter Maina", designation: "ENTERPRENUER", image: "/assets/hero-bg/Peter-Maina-768x576.jpg" },
  { name: "Wambui Maina", designation: "CONTRACTOR", image: "/assets/hero-bg/Wambui-Maina-768x576.jpg" },
  { name: "Kelvin Wairagu", designation: "DESIGNER", image: "/assets/hero-bg/Testimonial-768x576.jpg" },
];

const VISIBLE = 3;
const CLONE_COUNT = VISIBLE;

export default function TestimonialSection() {
  const total = testimonials.length;
  const extended = [
    ...testimonials.slice(-CLONE_COUNT),
    ...testimonials,
    ...testimonials.slice(0, CLONE_COUNT),
  ];

  const [offset, setOffset] = useState(CLONE_COUNT); 
  const [animate, setAnimate] = useState(true);
  const [dotIndex, setDotIndex] = useState(0);
  const isMoving = useRef(false);
  const timerRef = useRef(null);

  const slideTo = useCallback((newOffset, newDot) => {
    if (isMoving.current) return;
    isMoving.current = true;
    setAnimate(true);
    setOffset(newOffset);
    setDotIndex(((newDot % total) + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    slideTo(offset + 1, dotIndex + 1);
  }, [offset, dotIndex, slideTo]);

  const goPrev = useCallback(() => {
    slideTo(offset - 1, dotIndex - 1);
  }, [offset, dotIndex, slideTo]);

  const handleTransitionEnd = () => {
    isMoving.current = false;
    // Jump silently if in clone zone
    if (offset >= total + CLONE_COUNT) {
      setAnimate(false);
      setOffset(CLONE_COUNT + (offset - total - CLONE_COUNT));
    } else if (offset < CLONE_COUNT) {
      setAnimate(false);
      setOffset(total + offset);
    }
  };

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(goNext, 2800);
    return () => clearInterval(timerRef.current);
  }, [goNext]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, 2800);
  };

 
  const viewportRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      if (viewportRef.current) {
        setCardWidth(viewportRef.current.offsetWidth / VISIBLE);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const translateX = -(offset * cardWidth);

  return (
    <section className="relative w-full overflow-hidden bg-[#273277] py-16 px-6 md:px-12">
     
      <div className="absolute inset-0 bg-gradient-to-br from-[#273277] via-[#0d2878] to-[#061240] pointer-events-none" />

     
      <div className="absolute z-10 flex items-center justify-center w-16 h-16 bg-[#F3164D] rounded-full shadow-xl top-8 left-8">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 mb-10 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">
              Client Testimonials
            </h2>
            <a  className="flex items-center gap-2 text-md font-semibold text-[#F3164D] transition-colors ">
             Take a look at what our esteemed clients say about us!
              {/* <span className="inline-flex items-center justify-center w-6 h-6 transition-colors bg-[#F3164D] rounded-full ">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span> */}
            </a>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => { goPrev(); resetTimer(); }}
              className="flex items-center justify-center w-10 h-10 text-white transition-all duration-200 bg-[#F3164D] border border-[#F3164D] rounded-full hover:bg-[#F3164D] active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => { goNext(); resetTimer(); }}
              className="flex items-center justify-center w-10 h-10 text-white transition-all duration-200 bg-[#F3164D] rounded-full hover:bg-[#F3164D] active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider Viewport */}
        <div ref={viewportRef} className="w-full overflow-hidden">
          <div
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: "flex",
              transform: cardWidth ? `translateX(${translateX}px)` : "none",
              transition: animate ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
            }}
          >
            {extended.map((person, idx) => (
              <div
                key={idx}
                style={{ minWidth: cardWidth ? `${cardWidth}px` : `${100 / VISIBLE}%` }}
                className="box-border px-3"
              >
                <div className="overflow-hidden transition-all duration-300 bg-white shadow-2xl rounded-2xl group hover:shadow-blue-900/40">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: "300px" }}>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Quote badge */}
                    <div className="absolute flex items-center justify-center bg-[#273277] rounded-full shadow-lg top-4 left-4 w-9 h-9">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z" />
                      </svg>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="px-5 py-4">
                    <p className="text-lg font-bold text-gray-900">{person.name}</p>
                    <p className="text-[#273277] text-sm font-medium mt-0.5">{person.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = i - dotIndex;
                slideTo(offset + diff, i);
                resetTimer();
              }}
              className={`rounded-full transition-all duration-300 ${
                i === dotIndex ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-blue-700 hover:bg-blue-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}