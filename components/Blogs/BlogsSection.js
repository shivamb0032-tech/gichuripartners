"use client";

import { useState } from "react";
import Image from "next/image";

// ── React Icons imports ──────────────────────────────────────────────────────
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { BsCalendar3, BsClock } from "react-icons/bs";
import { FiTag } from "react-icons/fi";

// ── Install: npm install react-icons ────────────────────────────────────────

const blogs = [
  {
    id: 1,
    title: "KRA Demand Notice Response & Resolution Services",
    author: "Learn More",
    date: "March 17, 2026",
    category: "Company Registration",
    readTime: "5 min read",
    image: "/assets/blogs/Accounting.jpeg",
    excerpt:
      "Learn the step-by-step process to register your Private Limited Company in India with all required documents and compliance.",
  },
  {
    id: 2,
    title: "KRA Tax Dispute Resolution Services in Kenya",
    author: "Learn More",
    date: "March 14, 2026",
    category: "Companies Act 2013",
    readTime: "4 min read",
    image: "/assets/hero-bg/Tax-Advisory-Services.jpeg",
    excerpt:
      "A complete overview of the company incorporation certificate, what it means, and how to obtain it legally.",
  },
  {
    id: 3,
    title: "Examples of Tax Disputes Resolved Through ADR",
    author: "Learn More",
    date: "March 5, 2026",
    category: "Taxation",
    readTime: "6 min read",
    image: "/assets/blogs/Business-Services.jpeg",
    excerpt:
      "Everything you need to know about GST registration process, eligibility, documents required, and post-registration compliance.",
  },


 
];

const categories = [
  { name: "Accounting Services", count: 2 },
  { name: "Auditing Services", count: 1 },
  { name: "Bookkeeping Services", count: 2 },
  { name: "Business Services", count: 5 },
  { name: "Payroll Services", count: 0 },
];

const categoryColors = {
  "Company Registration": "bg-orange-100 text-orange-600",
  "Companies Act 2013": "bg-blue-100 text-blue-600",
  Taxation: "bg-green-100 text-green-600",
  "Business Management": "bg-purple-100 text-purple-600",
  "Knowledge Hub": "bg-yellow-100 text-yellow-700",
};

const BLOGS_PER_PAGE = 6;

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const paginated = blogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );

  return (
    <section className="bg-[#f0f3f8] min-h-screen py-14 lg:px-10 md:px-8 px-6">
      <div className="flex flex-col w-full gap-10 lg:flex-row">

        {/* ── LEFT: Blog Grid ─────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy-dark">
              Latest Blogs
            </h2>
            <div className="w-12 h-1 mt-2 rounded-full bg-brand-pink-dark" />
          </div>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {paginated.map((blog) => {
              const catColor =
                categoryColors[blog.category] || "bg-gray-100 text-gray-600";

              return (
                <article
                  key={blog.id}
                  
                  className="flex flex-col transition-shadow duration-300 bg-white border border-gray-100 shadow-sm cursor-pointer group rounded-xl hover:shadow-lg transform-gpu will-change-transform hover:-translate-y-1"
                  style={{ isolation: "isolate" }}
                >
                  
                  <div className="relative overflow-hidden h-44 rounded-t-xl">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                   

                    {/* Category chip */}
                    {/* <div className="absolute z-10 bottom-3 left-3">
                      <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${catColor}`}>
                        {blog.category}
                      </span>
                    </div> */}
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-4 rounded-b-xl">
                    <h3 className="text-brand-navy-dark font-bold text-[15px] leading-snug mb-2 group-hover:text-brand-pink-dark transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="flex-1 mb-4 text-sm leading-relaxed text-gray-500 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        
                        <span className="text-sm font-semibold text-brand-pink-dark">
                           {blog.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-brand-navy-dark">
                        
                        <span className="text-brand-navy-dark">|</span>
                        <span className="flex items-center gap-1">
                          <BsCalendar3 className="text-[11px]" />
                          {blog.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200 bg-white text-gray-500 hover:border-brand-pink-dark hover:text-brand-pink-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <FaChevronLeft className="text-xs" />
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${
                  currentPage === page
                    ? "bg-brand-pink-dark text-white shadow-md shadow-brand-pink-dark"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-brand-pink-dark hover:text-brand-pink-dark"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200 bg-white text-gray-500 hover:border-brand-pink-dark hover:text-brand-pink-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Next
              <FaChevronRight className="text-xs" />
            </button>
          </div>

          
        </div>

        {/* ── RIGHT: Sidebar ──────────────────────────────────── */}
        <aside className="flex-shrink-0 w-full space-y-8 lg:w-72">

          {/* Search */}
          <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-2xl">
            <h3 className="mb-1 text-lg font-extrabold text-brand-navy-dark">Search</h3>
            <div className="w-8 h-0.5 bg-brand-pink-dark mb-4 rounded-full" />
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search blog posts..."
                className="w-full border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-pink-dark transition"
              />
              <FiSearch className="absolute text-sm text-gray-400 -translate-y-1/2 right-3 top-1/2" />
            </div>
          </div>

          {/* Categories */}
          <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-2xl">
            <h3 className="mb-1 text-lg font-extrabold text-brand-navy-dark">Categories</h3>
            <div className="w-8 h-0.5 bg-brand-pink-dark mb-4 rounded-full" />

            <ul className="space-y-1.5">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-orange-50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center flex-shrink-0 transition-colors duration-200 rounded-full bg-brand-pink-dark w-7 h-7 group-hover:bg-brand-pink-dark">
                        <FiTag className="text-white text-[11px] group-hover:text-white transition-colors duration-200" />
                      </span>
                      <span className="text-sm font-medium leading-tight text-left text-gray-700 transition-colors group-hover:text-brand-pink-dark">
                        {cat.name}
                      </span>
                    </div>
                    <span className="ml-2 min-w-[38px] text-center text-xs font-bold text-white bg-brand-pink-dark rounded-full px-2 py-0.5">
                      {cat.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </div>
    </section>
  );
}