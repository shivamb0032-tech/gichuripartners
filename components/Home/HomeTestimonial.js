"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const testimonials = [
  {
    name: "Serah Kariuki",
    designation: "DENTIST",
    image: "/assets/hero-bg/Serah-Kariuki-768x576.jpg",
  },
  {
    name: "Peter Maina",
    designation: "ENTREPRENEUR",
    image: "/assets/hero-bg/Peter-Maina-768x576.jpg",
  },
  {
    name: "Wambui Maina",
    designation: "CONTRACTOR",
    image: "/assets/hero-bg/Wambui-Maina-768x576.jpg",
  },
  {
    name: "Kelvin Wairagu",
    designation: "DESIGNER",
    image: "/assets/hero-bg/Testimonial-768x576.jpg",
  },
];

export default function TestimonialSection() {
  const total = testimonials.length;
  const timerRef = useRef(null);
  const isMoving = useRef(false);
  const viewportRef = useRef(null);

  const [visible, setVisible] = useState(3);
  const [offset, setOffset] = useState(3);
  const [animate, setAnimate] = useState(true);
  const [dotIndex, setDotIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const cloneCount = visible;

  const extended = useMemo(() => {
    return [
      ...testimonials.slice(-cloneCount),
      ...testimonials,
      ...testimonials.slice(0, cloneCount),
    ];
  }, [cloneCount]);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisible(1);
      } else if (window.innerWidth < 1024) {
        setVisible(2);
      } else {
        setVisible(3);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);

    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    setOffset(cloneCount);
    setDotIndex(0);
    setAnimate(false);
    isMoving.current = false;
  }, [cloneCount]);

  useEffect(() => {
    const updateWidth = () => {
      if (viewportRef.current) {
        setCardWidth(viewportRef.current.offsetWidth / visible);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [visible]);

  const slideTo = useCallback(
    (newOffset, newDot) => {
      if (isMoving.current) return;
      isMoving.current = true;
      setAnimate(true);
      setOffset(newOffset);
      setDotIndex(((newDot % total) + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => {
    slideTo(offset + 1, dotIndex + 1);
  }, [offset, dotIndex, slideTo]);

  const goPrev = useCallback(() => {
    slideTo(offset - 1, dotIndex - 1);
  }, [offset, dotIndex, slideTo]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goNext();
    }, 2800);
  }, [goNext]);

  useEffect(() => {
    resetTimer();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleTransitionEnd = () => {
    isMoving.current = false;

    if (offset >= total + cloneCount) {
      setAnimate(false);
      setOffset(cloneCount + (offset - total - cloneCount));
    } else if (offset < cloneCount) {
      setAnimate(false);
      setOffset(total + offset);
    }
  };

  const translateX = -(offset * cardWidth);

  return (
    <section className="relative w-full overflow-hidden bg-[#273277] px-4 py-16 sm:px-6 md:px-12">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#273277] via-[#0d2878] to-[#061240]" />

      <div className="absolute z-10 flex items-center justify-center w-14 h-14 rounded-full shadow-xl sm:w-16 sm:h-16 bg-[#F3164D] lg:top-6 left-6 sm:top-8 sm:left-8 top-3">
        <svg className="text-white w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col justify-between gap-6 mb-10 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">
              Client Testimonials
            </h2>
            <p className="flex items-center gap-2 font-semibold text-md text-[#F3164D]">
              Take a look at what our esteemed clients say about us!
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                goPrev();
                resetTimer();
              }}
              className="flex items-center justify-center w-10 h-10 text-white transition-all duration-200 border rounded-full bg-[#F3164D] border-[#F3164D] hover:bg-[#d91244] active:scale-95"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => {
                goNext();
                resetTimer();
              }}
              className="flex items-center justify-center w-10 h-10 text-white transition-all duration-200 rounded-full bg-[#F3164D] hover:bg-[#d91244] active:scale-95"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div ref={viewportRef} className="w-full overflow-hidden">
          <div
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: "flex",
              transform: cardWidth ? `translateX(${translateX}px)` : "none",
              transition: animate
                ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
          >
            {extended.map((person, idx) => (
              <div
                key={`${person.name}-${idx}`}
                style={{
                  minWidth: cardWidth ? `${cardWidth}px` : `${100 / visible}%`,
                }}
                className="box-border px-2 sm:px-3"
              >
                <div className="overflow-hidden transition-all duration-300 bg-white shadow-2xl rounded-2xl group hover:shadow-blue-900/40">
                  <div className="relative h-[280px] sm:h-[300px] overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute flex items-center justify-center rounded-full shadow-lg top-4 left-4 w-9 h-9 bg-[#273277]">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z" />
                      </svg>
                    </div>
                  </div>

                  <div className="px-5 py-4">
                    <p className="text-lg font-bold text-gray-900">{person.name}</p>
                    <p className="mt-0.5 text-sm font-medium text-[#273277]">
                      {person.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = i - dotIndex;
                slideTo(offset + diff, i);
                resetTimer();
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === dotIndex
                  ? "w-6 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-blue-700 hover:bg-blue-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}