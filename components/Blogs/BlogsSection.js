"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";

const BLOGS_PER_PAGE = 6;

export default function BlogSection() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const SERVER_URL = API_URL.replace(/\/api$/, ""); // safer replace

  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getImageUrl = (image) => {
    if (!image) return "/assets/blogs/Accounting.jpeg";
    if (image.startsWith("http")) return image;
    return `${SERVER_URL}${image.startsWith("/") ? "" : "/"}${image}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "—";
    }
  };

  const stripHtml = (html = "") => {
    return html.replace(/<[^>]*>/g, "").trim();
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!API_URL) {
        setError("API URL is not configured");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        console.log("Fetching from:", `${API_URL}/blogs`);

        const res = await fetch(`${API_URL}/blogs`, {
          cache: "no-store",
          next: { revalidate: 0 },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        console.log("API response:", data);

        if (data.success) {
          const publishedBlogs = (data.blogs || []).filter(
            (blog) => blog.published === true
          );
          console.log(`Published blogs found: ${publishedBlogs.length}`);
          setBlogs(publishedBlogs);
        } else {
          setError(data.message || "Failed to load blogs");
        }
      } catch (err) {
        console.error("Blogs fetch error:", err);
        setError("Unable to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [API_URL]);

  const filteredBlogs = useMemo(() => {
    const searchText = search.trim().toLowerCase();
    if (!searchText) return blogs;

    return blogs.filter((blog) =>
      [
        blog.title,
        blog.excerpt,
        stripHtml(blog.content),
        blog.category,
        blog.author,
      ]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(searchText))
    );
  }, [blogs, search]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE));

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );

  const latestPosts = useMemo(() => {
    return [...blogs]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 4);
  }, [blogs]);

  // Reset to page 1 when search or blogs change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, blogs.length]);

  return (
    <section className="bg-[#f0f3f8]  py-14 lg:px-20 md:px-8 px-6">
      <div className="flex flex-col w-full gap-10 lg:flex-row">
        {/* Main Blog Grid */}
        <div className="flex-1 min-w-0">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy-dark">
             Our Blogs
            </h2>
            <div className="w-12 h-1 mt-2 rounded-full bg-brand-pink-dark" />
          </div>

          {loading ? (
            <div className="py-16 text-center text-gray-500">
              Loading blogs...
            </div>
          ) : error ? (
            <div className="py-16 font-medium text-center text-brand-pink-dark">
              {error}
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="py-16 text-center text-gray-500">
              {search.trim()
                ? "No blogs match your search."
                : "No published blogs available at the moment."}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedBlogs.map((blog) => (
                  <Link key={blog._id} href={`/blogs/${blog.slug}`} className="block">
                    <article
                      className="flex flex-col h-full transition-all duration-300 bg-white border border-gray-100 shadow-sm cursor-pointer group rounded-xl hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="relative overflow-hidden h-44 rounded-t-xl">
                        <Image
                          src={getImageUrl(blog.image)}
                          alt={blog.title || "Blog image"}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      </div>

                      <div className="flex flex-col flex-1 p-4">
                        <h3 className="text-brand-navy-dark font-bold text-[15px] leading-snug mb-2 group-hover:text-brand-pink-dark transition-colors line-clamp-2">
                          {blog.title}
                        </h3>

                        <p className="flex-1 mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
                          {blog.excerpt || stripHtml(blog.content) || "No description available"}
                        </p>

                        <div className="flex items-center justify-between pt-3 mt-auto border-t border-gray-100">
                          <span className="text-sm font-semibold text-brand-pink-dark">
                            {blog.author || "Team"}
                          </span>
                          <div className="flex items-center gap-3 text-xs text-brand-navy-dark">
                            <span>|</span>
                            <span className="flex items-center gap-1">
                              <BsCalendar3 className="text-[11px]" />
                              {formatDate(blog.createdAt)}
                            </span>
                          </div>
                        </div>

                        <div className="pt-3 mt-2">
                          <span className="inline-block text-sm font-semibold text-brand-pink-dark group-hover:underline">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-200 bg-white hover:border-brand-pink-dark hover:text-brand-pink-dark disabled:opacity-40 transition-colors"
                  >
                    <FaChevronLeft className="text-xs" />
                    Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg text-sm font-bold transition-colors ${
                        currentPage === page
                          ? "bg-brand-pink-dark text-white shadow-md"
                          : "bg-white border border-gray-200 hover:border-brand-pink-dark hover:text-brand-pink-dark"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-200 bg-white hover:border-brand-pink-dark hover:text-brand-pink-dark disabled:opacity-40 transition-colors"
                  >
                    Next
                    <FaChevronRight className="text-xs" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="flex-shrink-0 w-full space-y-8 lg:w-72 lg:sticky lg:top-6 lg:self-start">
          {/* Search */}
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
            <h3 className="mb-2 text-lg font-extrabold text-brand-navy-dark">Search Blogs</h3>
            <div className="w-10 h-1 mb-4 rounded-full bg-brand-pink-dark" />
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title, category..."
                className="w-full py-3 pl-4 text-sm transition border border-gray-200 rounded-lg pr-11 focus:outline-none focus:border-brand-pink-dark"
              />
              <FiSearch className="absolute text-lg text-gray-400 -translate-y-1/2 right-4 top-1/2" />
            </div>
          </div>

          {/* Latest Posts */}
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
            <h3 className="mb-2 text-lg font-extrabold text-brand-navy-dark">Latest Posts</h3>
            <div className="w-10 h-1 mb-4 rounded-full bg-brand-pink-dark" />

            {loading ? (
              <p className="text-sm text-gray-400">Loading...</p>
            ) : latestPosts.length === 0 ? (
              <p className="text-sm text-gray-400">No recent posts</p>
            ) : (
              <ul className="space-y-5">
                {latestPosts.map((post) => (
                  <li key={post._id}>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="relative w-20 h-16 overflow-hidden bg-gray-100 rounded-lg shrink-0">
                        <Image
                          src={getImageUrl(post.image)}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold leading-tight text-gray-800 transition-colors group-hover:text-brand-pink-dark line-clamp-2">
                          {post.title}
                        </p>
                        <span className="flex items-center gap-1.5 text-xs text-gray-500 mt-1.5">
                          <BsCalendar3 className="text-[10px]" />
                          {formatDate(post.createdAt)}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}