"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NewMediaPage() {
  const { slug } = useParams();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const SERVER_URL = API_URL.replace("/api", "");

  const [data, setData] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const getImageUrl = (image) => {
    if (!image) return "/images/hero-blog.jpg";
    if (image.startsWith("http")) return image;
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

  // ✅ FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [singleRes, allRes] = await Promise.all([
          fetch(`${API_URL}/newmedia/${slug}`, { cache: "no-store" }),
          fetch(`${API_URL}/newmedia`, { cache: "no-store" }),
        ]);

        const singleData = await singleRes.json();
        const allData = await allRes.json();

        if (singleData.success) {
          setData(singleData.data);
        } else {
          setData(null);
        }

        if (allData.success) {
          const currentSlug = (slug || "").toLowerCase();

          const filtered = (allData.data || []).filter((item) => {
            return item.published && item.slug !== currentSlug;
          });

          filtered.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );

          setLatestPosts(filtered.slice(0, 6));
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug && API_URL) fetchData();
  }, [slug, API_URL]);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.toLowerCase();

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
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="mb-3 text-2xl font-bold">Not found</h2>
        <Link href="/newmedia" className="text-[#f91750]">
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[420px]">
        <Image
          src={getImageUrl(data.image)}
          alt={data.title}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-10 text-white">
          <h1 className="text-3xl font-bold md:text-5xl">{data.title}</h1>
          <span className="text-sm text-[#f91750] mt-2">
            {formatDate(data.createdAt)}
          </span>
        </div>
      </section>

      {/* Content */}
      <section className="flex gap-10 px-4 py-10 mx-auto max-w-7xl">
        {/* Left */}
        <div className="flex-1">
          <h2 className="mb-4 text-2xl font-bold">{data.title}</h2>

          <p className="mb-4 text-sm text-[#f91750]">
            {data.author} | {formatDate(data.createdAt)}
          </p>

          <div
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>

        {/* Sidebar */}
        <div className="w-[300px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 mb-6 border rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <h3 className="mb-3 font-bold">Latest News</h3>

          {filteredPosts.map((post) => (
            <Link key={post._id} href={`/newmedia/${post.slug}`}>
              <div className="flex gap-3 mb-4 cursor-pointer">
                <Image
                  src={getImageUrl(post.image)}
                  width={80}
                  height={60}
                  alt=""
                  className="object-cover"
                  unoptimized
                />
                <div>
                  <p className="text-sm font-semibold line-clamp-2">
                    {post.title}
                  </p>
                  <span className="text-xs text-gray-400">
                    {formatDate(post.createdAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}