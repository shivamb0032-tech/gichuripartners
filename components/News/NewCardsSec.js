"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TabCardsSection() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const SERVER_URL = API_URL.replace(/\/api$/, "");

  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("Company News");
  const [loading, setLoading] = useState(true);

  // ✅ Image Fix
  const getImageUrl = (image) => {
    if (!image) return "/assets/blogs/Business-Services.jpeg";
    if (image.startsWith("http")) return image;
    return `${SERVER_URL}${image.startsWith("/") ? "" : "/"}${image}`;
  };

  // ✅ Date Format
  const formatDate = (dateString) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ✅ Remove HTML
  const stripHtml = (html = "") => {
    return html.replace(/<[^>]*>/g, "").trim();
  };

  // ✅ Fetch based on tab (BEST APPROACH)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_URL}/newmedia?category=${encodeURIComponent(activeTab)}`,
          { cache: "no-store" }
        );

        const result = await res.json();

        if (result.success) {
          const published = result.data.filter((item) => item.published);
          setData(published);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (API_URL) fetchData();
  }, [API_URL, activeTab]);

  return (
    <section className="min-h-screen px-4 py-12 bg-gray-100 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg bg-[#f91750] p-1.5">

            {/* Company News */}
            <button
              onClick={() => setActiveTab("Company News")}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === "Company News"
                  ? "bg-[#f91750] text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Company News
            </button>

            {/* Press Release */}
            <button
              onClick={() => setActiveTab("Press Release")}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === "Press Release"
                  ? "bg-[#f91750] text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Press Release
            </button>
          </div>
        </div>

        {/* Cards */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : data.length === 0 ? (
          <p className="text-center text-gray-500">No data found</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {data.map((item) => (
              <Link key={item._id} href={`/news-media/${item.slug}`}>
                <div className="flex flex-col h-full p-3 overflow-hidden transition-all duration-300 bg-white border border-b-4 shadow-md rounded-xl hover:shadow-xl border-[#123453] cursor-pointer">

                  {/* Image */}
                  <div className="relative overflow-hidden h-[180px] md:h-[200px]">
                    <Image
                      src={getImageUrl(item.image)}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 rounded-md hover:scale-110"
                      unoptimized
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-2">
                    <h3 className="mb-2 text-lg font-bold text-[#123453] line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="mb-3 text-sm text-[#f91750]">
                      {formatDate(item.createdAt)}
                    </p>

                    <p className="flex-grow mb-6 text-sm text-gray-600 line-clamp-3">
                      {item.excerpt ||
                        stripHtml(item.content) ||
                        "No description"}
                    </p>

                    <span className="mt-auto px-5 py-2.5 bg-[#f91750] hover:bg-[#123453] text-white text-sm font-medium rounded-lg transition-colors self-start">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}