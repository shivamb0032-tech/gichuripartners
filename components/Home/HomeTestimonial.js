"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const testimonials = [
  {
    name: "Serah Kariuki",
    image: "/assets/hero-bg/Serah-Kariuki-768x576.jpg",
    rating: 5,
    review:
      "Gichuri & Partners made our tax compliance completely stress-free. Their team guided us at every step and ensured everything was handled accurately and on time. Highly recommended for any business looking for reliable tax experts.",
  },
  {
    name: "Peter Maina",
    image: "/assets/hero-bg/Peter-Maina-768x576.jpg",
    rating: 5,
    review:
      "We’ve been working with Gichuri & Partners for over a year now, and their expertise in tax advisory and bookkeeping has helped us streamline our finances. Their advice is always practical and easy to understand.",
  },
  {
    name: "Wambui Maina",
    image: "/assets/hero-bg/Wambui-Maina-768x576.jpg",
    rating: 4,
    review:
      "The team took time to understand our business and provided tailored solutions that actually reduced our tax burden. Their approach is both strategic and transparent, which we truly appreciate.",
  },
  {
    name: "Kelvin Wairagu",
    image: "/assets/hero-bg/Testimonial-768x576.jpg",
    rating: 5,
    review:
      "From KRA filing to audit support, everything was handled professionally. The process was smooth, and their communication was always prompt and clear. Definitely a trustworthy partner for business compliance.",
  },
  
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-4 w-4 ${
              star <= rating ? "text-[#F59E0B]" : "text-white/30"
            }`}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-[15px] font-semibold text-white/80">{rating}/5</span>
    </div>
  );
}

export default function TestimonialSection() {
  const timerRef = useRef(null);
  const isMoving = useRef(false);
  const viewportRef = useRef(null);

  const [visible, setVisible] = useState(3);
  const [offset, setOffset] = useState(3);
  const [animate, setAnimate] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(0);

  const total = testimonials.length;
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
      if (window.innerWidth < 768) {
        setVisible(1);
      } else if (window.innerWidth < 1100) {
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
    setAnimate(false);
    isMoving.current = false;
  }, [cloneCount]);

  useEffect(() => {
    const updateWidth = () => {
      if (!viewportRef.current) return;

      const viewportWidth = viewportRef.current.offsetWidth;

      if (window.innerWidth < 768) {
        const mobileGap = 16;
        setGap(mobileGap);
        setCardWidth(viewportWidth);
      } else if (window.innerWidth < 1100) {
        const tabletGap = 24;
        setGap(tabletGap);
        setCardWidth((viewportWidth - tabletGap) / 2);
      } else {
        const desktopGap = 32;
        setGap(desktopGap);
        setCardWidth((viewportWidth - desktopGap * 2) / 3);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [visible]);

  const slideTo = useCallback((newOffset) => {
    if (isMoving.current) return;
    isMoving.current = true;
    setAnimate(true);
    setOffset(newOffset);
  }, []);

  const goNext = useCallback(() => {
    slideTo(offset + 1);
  }, [offset, slideTo]);

  const goPrev = useCallback(() => {
    slideTo(offset - 1);
  }, [offset, slideTo]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goNext();
    }, 3500);
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
      setOffset(cloneCount);
    } else if (offset < cloneCount) {
      setAnimate(false);
      setOffset(total + cloneCount - 1);
    }
  };

  const translateX = -(offset * (cardWidth + gap));

  return (
    <section className="w-full bg-[#0A2B47] px-4 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-start justify-between gap-4 mb-8 md:mb-10">
          <h2 className="max-w-[720px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[34px] md:text-[44px]">
            Take a look at what our esteemed clients say about us!
          </h2>

          <div className="items-center hidden gap-4 md:flex">
            <button
              onClick={() => {
                goPrev();
                resetTimer();
              }}
              className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] border border-white/70 text-white transition duration-300 hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                goNext();
                resetTimer();
              }}
              className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] border border-white/70 text-white transition duration-300 hover:bg-white/10"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div ref={viewportRef} className="overflow-hidden">
          <div
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: "flex",
              gap: `${gap}px`,
              transform:
                cardWidth || gap ? `translateX(${translateX}px)` : "none",
              transition: animate
                ? "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
          >
            {extended.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                style={{
                  minWidth: cardWidth ? `${cardWidth}px` : `${100 / visible}%`,
                  maxWidth: cardWidth ? `${cardWidth}px` : `${100 / visible}%`,
                }}
                className="box-border"
              >
                <div className="flex h-full min-h-[280px] flex-col rounded-[28px] border border-white/14 bg-white/[0.08] px-4 py-5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-[2px] sm:min-h-[300px] sm:px-5 sm:py-6 md:min-h-[320px]">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[56px] w-[56px] shrink-0 rounded-full border border-white/20 object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="truncate text-[20px] font-semibold leading-tight text-white">
                        {item.name}
                      </h3>
                      <div className="mt-3">
                        <StarRating rating={item.rating} />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p
                      className="overflow-hidden text-[15px] leading-[1.75] text-white/88 sm:text-[16px]"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {item.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={() => {
              goPrev();
              resetTimer();
            }}
            className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-white/70 text-white transition duration-300 hover:bg-white/10"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              goNext();
              resetTimer();
            }}
            className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-white/70 text-white transition duration-300 hover:bg-white/10"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}