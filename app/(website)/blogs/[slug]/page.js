"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const { slug } = useParams();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const SERVER_URL = API_URL.replace("/api", "");

  const [blog, setBlog] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const getImageUrl = (image) => {
    if (!image) return "/images/hero-blog.jpg";

    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }

    return `${SERVER_URL}${image.startsWith("/") ? "" : "/"}${image}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";

    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const stripHtml = (html = "") => {
    return html.replace(/<[^>]*>/g, "").trim();
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);

        const [singleRes, allRes] = await Promise.all([
          fetch(`${API_URL}/blogs/${slug}`, { cache: "no-store" }),
          fetch(`${API_URL}/blogs`, { cache: "no-store" }),
        ]);

        const singleData = await singleRes.json();
        const allData = await allRes.json();

        if (singleData.success) {
          setBlog(singleData.blog);
        } else {
          setBlog(null);
        }

        if (allData.success) {
          const currentSlug = (slug || "").toString().trim().toLowerCase();

          const publishedAndExcluded = (allData.blogs || []).filter((item) => {
            const itemSlug = (item.slug || "").toString().trim().toLowerCase();
            return item.published && itemSlug !== currentSlug;
          });

          publishedAndExcluded.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );

          setLatestPosts(publishedAndExcluded.slice(0, 6));
        }
      } catch (error) {
        console.error("Fetch blog details error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug && API_URL) {
      fetchBlogData();
    }
  }, [slug, API_URL]);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    if (!q) return latestPosts;

    return latestPosts.filter(
      (post) =>
        post.title?.toLowerCase().includes(q) ||
        post.excerpt?.toLowerCase().includes(q)
    );
  }, [latestPosts, searchQuery]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Loading blog...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">Blog not found</h2>
        <p className="mb-6 text-gray-500">
          The blog you are looking for does not exist.
        </p>
        <Link
          href="/blogs"
          className="px-5 py-3 text-white rounded-lg bg-brand-pink-dark"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
        <Image
          src={getImageUrl(blog.image)}
          alt={blog.title || "Blog hero image"}
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-12 mx-auto max-w-7xl md:pb-16"> 

          <h1 className="max-w-6xl text-3xl font-bold leading-tight text-white md:text-5xl drop-shadow-lg">
            {blog.title}
          </h1>
          <span className="mb-3 text-sm font-semibold tracking-widest uppercase text-brand-pink-dark">
            {formatDate(blog.createdAt)}
          </span>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-10 mx-auto max-w-7xl sm:px-6 md:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          {/* Left Content */}
          <div className="flex-1 min-w-0">
            <h2 className="mb-5 text-2xl font-bold leading-snug text-brand-navy-dark md:text-3xl">
              {blog.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-brand-pink-dark">
              <span>
                <strong>Author:</strong> {blog.author || "Admin"}
              </span>
              <span>
                <strong>Date:</strong> {formatDate(blog.createdAt)}
              </span>
              {/* <span>
                <strong>Category:</strong> {blog.category || "Uncategorized"}
              </span> */}
            </div>

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 pr-10 text-sm text-gray-700 transition border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink-dark focus:border-transparent"
                />
                <svg
                  className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                  />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="mb-1 text-lg font-bold text-gray-900">Latest Posts</h3>
              <div className="w-full h-0.5 bg-brand-pink-dark mb-5" />

              {filteredPosts.length > 0 ? (
                <ul className="space-y-6">
                  {filteredPosts.map((post) => {
                    const plainText = stripHtml(post.content || "");
                    const shortText =
                      post.excerpt ||
                      plainText.slice(0, 120) + (plainText.length > 120 ? "..." : "");

                    return (
                      <li key={post._id}>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="flex items-start gap-4 group hover:no-underline"
                        >
                          <div className="relative w-24 h-20 overflow-hidden bg-gray-200 rounded shrink-0 md:w-28 md:h-24">
                            <Image
                              src={getImageUrl(post.image)}
                              alt={post.title || "Post image"}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              unoptimized
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="mb-1 text-base font-semibold leading-tight text-gray-900 transition-colors group-hover:text-brand-pink-dark line-clamp-2">
                              {post.title}
                            </p>

                            <p className="text-sm leading-relaxed text-gray-600 line-clamp-2">
                              {shortText}
                            </p>

                            <span className="block mt-2 text-xs text-gray-500">
                              {formatDate(post.createdAt)}
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-sm text-gray-400">
                  {searchQuery.trim()
                    ? "No matching posts found."
                    : "No other published posts available."}
                </p>
              )}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}