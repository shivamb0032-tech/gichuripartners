"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const tabs = [
  {
    label: "Tax Dispute Resolution Services",
    cards: [
      {
        title: "Tax Appeal Tribunal Representation",
        desc: "",
        points: [
          "Income tax notice handling",
          "GST dispute resolution",
          "Appeal filing support",
          "Penalty reduction assistance",
        ],
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#FFF3E0" />
            <rect
              x="10"
              y="14"
              width="20"
              height="16"
              rx="1"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
            <rect
              x="15"
              y="10"
              width="10"
              height="6"
              rx="1"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
            <line
              x1="15"
              y1="22"
              x2="25"
              y2="22"
              stroke="#E07B00"
              strokeWidth="1.5"
            />
            <line
              x1="15"
              y1="25"
              x2="25"
              y2="25"
              stroke="#E07B00"
              strokeWidth="1.5"
            />
          </svg>
        ),
      },
      {
        title: "Filing & Management of Tax Appeals ",
        desc: "",
         points: [
          "KRA Audit Representation",
          "Tax Assessment Review & Challeng",
          "VAT & Income Tax Audits ",
        ],
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#E8F5E9" />
            <circle
              cx="20"
              cy="20"
              r="8"
              stroke="#2E7D32"
              strokeWidth="1.8"
              fill="none"
            />
            <line
              x1="20"
              y1="12"
              x2="20"
              y2="28"
              stroke="#2E7D32"
              strokeWidth="1.5"
            />
            <line
              x1="12"
              y1="20"
              x2="28"
              y2="20"
              stroke="#2E7D32"
              strokeWidth="1.5"
            />
            <circle
              cx="20"
              cy="20"
              r="3"
              stroke="#2E7D32"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        ),
      },
      {
        title: "Alternative Dispute Resolution (ADR)",
        desc: "",
         points: [
          "Filing Tax Appeals",
          "Case Preparation & Documentation ",
          "Representation at Tax Appeal Tribunal ",
        ],
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#E3F2FD" />
            <rect
              x="9"
              y="18"
              width="10"
              height="12"
              rx="1"
              stroke="#1565C0"
              strokeWidth="1.8"
              fill="none"
            />
            <rect
              x="21"
              y="14"
              width="10"
              height="16"
              rx="1"
              stroke="#1565C0"
              strokeWidth="1.8"
              fill="none"
            />
            <line
              x1="14"
              y1="22"
              x2="14"
              y2="26"
              stroke="#1565C0"
              strokeWidth="1.5"
            />
            <line
              x1="26"
              y1="18"
              x2="26"
              y2="26"
              stroke="#1565C0"
              strokeWidth="1.5"
            />
          </svg>
        ),
      },
      {
        title: "Independent Review of Objections",
        desc: "",
         points: [
          "Tax Filing & Returns",
          "PAYE Compliance  ",
          "KRA PIN Registration ",
        ],
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#FFF3E0" />
            <circle
              cx="20"
              cy="16"
              r="5"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M11 30c0-5 4-8 9-8s9 3 9 8"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
          </svg>
        ),
      },
      {
        title: "KRA Objection Filing & Follow-ups",
        desc: "",
         points: [
          "Tax Filing & Returns",
          "PAYE Compliance  ",
          "KRA PIN Registration ",
        ],
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#FFF3E0" />
            <circle
              cx="20"
              cy="16"
              r="5"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M11 30c0-5 4-8 9-8s9 3 9 8"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
          </svg>
        ),
      },
      
    ],
  },
  {
    label: "KRA Tax Audits & Investigations",
    cards: [
      {
        title: "KRA Audit Representation ",
        desc: "Claim government benefits by registering your MSME smoothly.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#FFF3E0" />
            <rect
              x="10"
              y="20"
              width="7"
              height="10"
              rx="1"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
            <rect
              x="23"
              y="14"
              width="7"
              height="16"
              rx="1"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
          </svg>
        ),
      },
      {
        title: "VAT Audit Support ",
        desc: "Keep your Pvt Ltd compliant and penalty-free with timely filings.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#E8F5E9" />
            <rect
              x="10"
              y="14"
              width="20"
              height="16"
              rx="1"
              stroke="#2E7D32"
              strokeWidth="1.8"
              fill="none"
            />
            <rect
              x="15"
              y="10"
              width="10"
              height="6"
              rx="1"
              stroke="#2E7D32"
              strokeWidth="1.8"
              fill="none"
            />
          </svg>
        ),
      },
      {
        title: "Tax Risk Reviews & Advisory ",
        desc: "Stay compliant and avoid fines with expert LLP filings.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#E3F2FD" />
            <circle
              cx="20"
              cy="20"
              r="8"
              stroke="#1565C0"
              strokeWidth="1.8"
              fill="none"
            />
            <line
              x1="20"
              y1="12"
              x2="20"
              y2="28"
              stroke="#1565C0"
              strokeWidth="1.5"
            />
            <line
              x1="12"
              y1="20"
              x2="28"
              y2="20"
              stroke="#1565C0"
              strokeWidth="1.5"
            />
          </svg>
        ),
      },
      {
        title: "Audit Response Strategy",
        desc: "Stay ahead of all ROC filing deadlines with expert assistance.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#FFF3E0" />
            <rect
              x="11"
              y="12"
              width="18"
              height="20"
              rx="2"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
            <line
              x1="15"
              y1="18"
              x2="25"
              y2="18"
              stroke="#E07B00"
              strokeWidth="1.2"
            />
            <line
              x1="15"
              y1="22"
              x2="25"
              y2="22"
              stroke="#E07B00"
              strokeWidth="1.2"
            />
            <line
              x1="15"
              y1="26"
              x2="20"
              y2="26"
              stroke="#E07B00"
              strokeWidth="1.2"
            />
          </svg>
        ),
      },
     
    ],
  },
  {
    label: "KRA Assessments & Objections ",
    cards: [
      {
        title: "Review of KRA Tax Assessments ",
        desc: "File your trademark with expert support and secure your brand name today.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#FFF3E0" />
            <circle
              cx="20"
              cy="18"
              r="7"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M15 14l5 8 5-8"
              stroke="#E07B00"
              strokeWidth="1.5"
              fill="none"
            />
            <line
              x1="17"
              y1="18"
              x2="23"
              y2="18"
              stroke="#E07B00"
              strokeWidth="1.5"
            />
            <path
              d="M16 26l4 4 4-4"
              stroke="#E07B00"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        ),
      },
      {
        title: "Objection Preparation & Filing ",
        desc: "Protect your original content and ideas by filing for copyright in your name.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#E8F5E9" />
            <circle
              cx="20"
              cy="20"
              r="8"
              stroke="#2E7D32"
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M23 17a5 5 0 100 6"
              stroke="#2E7D32"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        title: "Penalty & Interest Disputes",
        desc: "Secure your innovation with complete patent registration support.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#E3F2FD" />
            <circle
              cx="20"
              cy="18"
              r="6"
              stroke="#1565C0"
              strokeWidth="1.8"
              fill="none"
            />
            <line
              x1="20"
              y1="24"
              x2="20"
              y2="30"
              stroke="#1565C0"
              strokeWidth="1.8"
            />
            <line
              x1="16"
              y1="28"
              x2="24"
              y2="28"
              stroke="#1565C0"
              strokeWidth="1.8"
            />
          </svg>
        ),
      },
      {
        title: "Negotiation with KRA ",
        desc: "Protect your unique product design with official design registration.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#FFF3E0" />
            <rect
              x="12"
              y="12"
              width="16"
              height="16"
              rx="3"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M16 24l4-8 4 8"
              stroke="#E07B00"
              strokeWidth="1.5"
              fill="none"
            />
            <line
              x1="17"
              y1="22"
              x2="23"
              y2="22"
              stroke="#E07B00"
              strokeWidth="1.2"
            />
          </svg>
        ),
      },
      
    ],
  },
  {
    label: "KRA Compliance & Advisory",
    cards: [
      {
        title: "Tax Compliance Management ",
        desc: "File your ITR stress-free with expert guidance and maximum savings.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#FFF3E0" />
            <rect
              x="12"
              y="14"
              width="16"
              height="12"
              rx="1"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
            <line
              x1="16"
              y1="26"
              x2="14"
              y2="30"
              stroke="#E07B00"
              strokeWidth="1.5"
            />
            <line
              x1="24"
              y1="26"
              x2="26"
              y2="30"
              stroke="#E07B00"
              strokeWidth="1.5"
            />
            <line
              x1="11"
              y1="30"
              x2="29"
              y2="30"
              stroke="#E07B00"
              strokeWidth="1.5"
            />
            <line
              x1="16"
              y1="19"
              x2="24"
              y2="19"
              stroke="#E07B00"
              strokeWidth="1.2"
            />
            <line
              x1="16"
              y1="22"
              x2="21"
              y2="22"
              stroke="#E07B00"
              strokeWidth="1.2"
            />
          </svg>
        ),
      },
      {
        title: "VAT Filing & Returns",
        desc: "Get your GST number fast and hassle-free—completely online.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#E8F5E9" />
            <rect
              x="13"
              y="16"
              width="14"
              height="14"
              rx="1"
              stroke="#2E7D32"
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M16 16v-3a4 4 0 018 0v3"
              stroke="#2E7D32"
              strokeWidth="1.8"
              fill="none"
            />
            <circle cx="20" cy="23" r="2" fill="#2E7D32" />
          </svg>
        ),
      },
      {
        title: "Corporate Tax Advisory",
        desc: "Stay penalty-free with timely and accurate GST return filing.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#E3F2FD" />
            <circle
              cx="20"
              cy="20"
              r="7"
              stroke="#1565C0"
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M20 14v6l4 2"
              stroke="#1565C0"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        ),
      },
      {
        title: "Payroll & Accounting Support ",
        desc: "File TDS returns accurately and on time with professional help.",
        icon: (
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0 w-10 h-10"
          >
            <rect width="40" height="40" rx="20" fill="#FFF3E0" />
            <rect
              x="11"
              y="12"
              width="18"
              height="20"
              rx="2"
              stroke="#E07B00"
              strokeWidth="1.8"
              fill="none"
            />
            <line
              x1="15"
              y1="19"
              x2="25"
              y2="19"
              stroke="#E07B00"
              strokeWidth="1.2"
            />
            <line
              x1="15"
              y1="23"
              x2="25"
              y2="23"
              stroke="#E07B00"
              strokeWidth="1.2"
            />
            <line
              x1="15"
              y1="27"
              x2="20"
              y2="27"
              stroke="#E07B00"
              strokeWidth="1.2"
            />
          </svg>
        ),
      },
    ],
  },
 
];

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ title, desc, icon, points }) {
  return (
    <div className="flex flex-col h-full p-5 transition-shadow duration-200 bg-white border border-gray-200 shadow-lg rounded-2xl md:p-6 hover:shadow-md">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-md md:text-xl font-bold text-[#0D2B4E] leading-snug pr-3">
          {title}
        </h3>
        {icon}
      </div>

      <p className="flex-1 leading-relaxed text-gray-500 text-md">{desc}</p>
      {points && (
        <ul className="mb-3 space-y-1 text-sm text-gray-600">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 bg-[#D81141] rounded-full"></span>
              {point}
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        className="mt-4 flex items-center gap-1.5 text-[12px] md:text-[15px] font-semibold text-[#D81141] hover:gap-3 transition-all duration-200 group w-fit"
      >
        Know More
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
}

// ─── Tab Bar ──────────────────────────────────────────────────────────────────
function TabBar({ activeTab, setActiveTab }) {
  const scrollRef = useRef(null);

  const centerActiveTab = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const activeEl = container.querySelector(`[data-idx="${index}"]`);
    if (!activeEl) return;

    const containerWidth = container.clientWidth;
    const targetLeft =
      activeEl.offsetLeft - containerWidth / 2 + activeEl.clientWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  };

  const goTo = (i, shouldCenter = false) => {
    const next = Math.max(0, Math.min(tabs.length - 1, i));
    setActiveTab(next);

    if (shouldCenter) {
      requestAnimationFrame(() => {
        centerActiveTab(next);
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto mb-8">
      {/* Desktop Tabs */}
      <div className="justify-center hidden border-b border-gray-200 md:flex">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => goTo(i)}
            className={`px-6 py-3 text-sm font-semibold whitespace-nowrap transition-colors duration-200 border-b-2 -mb-px flex-shrink-0 ${
              activeTab === i
                ? "text-[#D81141] border-[#D81141]"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile Tabs */}
      <div className="flex items-center pb-3 border-b border-gray-200 md:hidden">
        <button
          type="button"
          onClick={() => goTo(activeTab - 1, true)}
          disabled={activeTab === 0}
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${
            activeTab === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-500 hover:text-[#D81141] hover:bg-red-50"
          }`}
          aria-label="Previous tab"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex items-end flex-1 overflow-x-auto no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              data-idx={i}
              onClick={() => goTo(i, true)}
              className={`flex-shrink-0 px-4 py-1 text-sm font-semibold whitespace-nowrap transition-all duration-200 border-b-2 ${
                activeTab === i
                  ? "text-[#D81141] border-[#D81141]"
                  : "text-gray-400 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeTab + 1, true)}
          disabled={activeTab === tabs.length - 1}
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${
            activeTab === tabs.length - 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-500 hover:text-[#D81141] hover:bg-red-50"
          }`}
          aria-label="Next tab"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function SmartSolutionsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCards = tabs[activeTab].cards;

  return (
    <section className="px-4 py-12 overflow-x-hidden bg-white md:py-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8 text-center md:mb-10">
        <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold text-[#0D2B4E] mb-3 leading-tight">
          Smart Solutions for Modern Businesses
        </h2>

        <p className="leading-relaxed text-gray-500 text-md">
          All-in-one platform for online legal consultation, business
          incorporation, corporate compliance, and startup-friendly
          solutions—tailored for every industry.
        </p>
      </div>

      {/* Tabs */}
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Swiper */}
      <div className="max-w-6xl px-1 mx-auto">
        <Swiper
          key={activeTab}
          modules={[Pagination]}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={16}
          touchStartPreventDefault={false}
          preventClicks={false}
          preventClicksPropagation={false}
          observer={true}
          observeParents={true}
          breakpoints={{
            640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
          }}
          pagination={{ clickable: true, el: ".ss-dots" }}
          className="!pb-12"
        >
          {currentCards.map((card, idx) => (
            <SwiperSlide key={idx} className="!h-auto">
              <div className="h-full pb-1">
                <ServiceCard {...card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div
          className="ss-dots flex justify-center items-center gap-2
          [&_.swiper-pagination-bullet]:inline-block
          [&_.swiper-pagination-bullet]:w-2.5
          [&_.swiper-pagination-bullet]:h-2.5
          [&_.swiper-pagination-bullet]:rounded-full
          [&_.swiper-pagination-bullet]:bg-[#919191]
          [&_.swiper-pagination-bullet]:opacity-100
          [&_.swiper-pagination-bullet]:cursor-pointer
          [&_.swiper-pagination-bullet]:transition-all
          [&_.swiper-pagination-bullet]:duration-300
          [&_.swiper-pagination-bullet-active]:w-7
          [&_.swiper-pagination-bullet-active]:h-2.5
          [&_.swiper-pagination-bullet-active]:rounded-full
          [&_.swiper-pagination-bullet-active]:bg-[#D81141]"
        />
      </div>
    </section>
  );
}
