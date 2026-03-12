"use client";

import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const blogs = [
  {
    id: 1,
    date: "March 5, 2026",
    title: "Examples of Tax Disputes Resolved Through ADR",
    // author: "Joel Dsouza",
    image: "/assets/blogs/Business-Services.jpeg",
  },
  {
    id: 2,
    date: "March 3, 2026",
    title: "KRA ADR Process Explained Step-by-Step",
    // author: "Joel Dsouza",
    image: "/assets/blogs/Business-Services.jpeg",
  },
  {
    id: 3,
    date: "February 28, 2026",
    title: "When to Choose ADR Over the Tax Appeal Tribunal for KRA Disputes",
    // author: "Srihari Dhondalay",
    image: "/assets/blogs/Business-Services.jpeg",
  },
  {
    id: 4,
    date: "February 26, 2026",
    title: "Cost of Hiring a KRA Tax Agent in Kenya",
    // author: "Joel Dsouza",
    image: "/assets/blogs/Business-Services.jpeg",
  },
  {
    id: 5,
    date: "February 26, 2026",
    title: "Benefits of Settling KRA Disputes Through ADR",
    // author: "Srihari Dhondalay",
    image: "/assets/blogs/Accounting.jpeg",
  },
  {
    id: 6,
    date: "February 21, 2026",
    title: "Common Reasons Why Businesses Lose at the KRA Tax Appeal Tribunal",
    // author: "Srihari Dhondalay",
    image: "/assets/blogs/Accounting.jpeg",
  },
];

export default function LatestBlogs() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .swiper-pagination-bullet {
        background: #d1d5db;
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background: #F3164D !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="px-4 py-12 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-[#273277]">Latest Blogs</h2>
          <button className="px-6 py-2.5 border-2 border-[#F3164D] text-[#F3164D] font-semibold rounded-md hover:bg-orange-50 transition-colors duration-200">
            View All
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="h-auto">
              <div className="h-full overflow-hidden transition-shadow duration-300 bg-white border border-gray-100 shadow-md cursor-pointer group rounded-2xl hover:shadow-xl">
                {/* Image */}
                <div className="overflow-hidden h-52">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="inline-block px-3 py-1 mb-3 text-xs text-gray-500 border border-gray-200 rounded-full">
                    {blog.date}
                  </span>
                  <h3 className="mb-2 text-base font-bold leading-[1.5rem] text-[#273277] transition-colors line-clamp-2 min-h-[3rem]">
                    {blog.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">{blog.author}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[#F3164D] font-semibold text-sm hover:text-[#273277] transition-colors"
                  >
                    Read More
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}