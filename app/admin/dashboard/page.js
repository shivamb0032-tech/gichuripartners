"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminDashboardPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const SERVER_URL = API_URL.replace("/api", "");
  const [media, setMedia] = useState([]);
const [loadingMedia, setLoadingMedia] = useState(true);

  const [blogs, setBlogs] = useState([]);
  const [forms, setForms] = useState([]);
  const [consultForms, setConsultForms] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [loadingForms, setLoadingForms] = useState(true);
  const [loadingConsultForms, setLoadingConsultForms] = useState(true);

  const getImageUrl = (image) => {
    if (!image) return "";

    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }

    return `${SERVER_URL}${image}`;
  };
const fetchMedia = async () => {
  try {
    setLoadingMedia(true);

    const res = await fetch(`${API_URL}/newmedia`, {
      cache: "no-store",
    });

    const data = await res.json();

    if (data.success) {
      setMedia(data.data || []);
    } else {
      setMedia([]);
      console.error(data.message || "Failed to fetch media");
    }
  } catch (error) {
    setMedia([]);
    console.error("Fetch media error:", error);
  } finally {
    setLoadingMedia(false);
  }
};
  const fetchBlogs = async () => {
    try {
      setLoadingBlogs(true);

      const res = await fetch(`${API_URL}/blogs`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setBlogs(data.blogs || []);
      } else {
        setBlogs([]);
        console.error(data.message || "Failed to fetch blogs");
      }
    } catch (error) {
      setBlogs([]);
      console.error("Fetch blogs error:", error);
    } finally {
      setLoadingBlogs(false);
    }
  };

  const fetchForms = async () => {
    try {
      setLoadingForms(true);

      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("adminToken")
          : null;

      if (!token) {
        setForms([]);
        return;
      }

      const res = await fetch(`${API_URL}/contact`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setForms(data.contacts || []);
      } else {
        setForms([]);
        console.error(data.message || "Failed to fetch contact forms");
      }
    } catch (error) {
      setForms([]);
      console.error("Fetch contact forms error:", error);
    } finally {
      setLoadingForms(false);
    }
  };

  const fetchConsultForms = async () => {
    try {
      setLoadingConsultForms(true);

      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("adminToken")
          : null;

      if (!token) {
        setConsultForms([]);
        return;
      }

      const res = await fetch(`${API_URL}/consult`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setConsultForms(data.consults || []);
      } else {
        setConsultForms([]);
        console.error(data.message || "Failed to fetch consult forms");
      }
    } catch (error) {
      setConsultForms([]);
      console.error("Fetch consult forms error:", error);
    } finally {
      setLoadingConsultForms(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchForms();
    fetchConsultForms();
    fetchMedia(); 
  }, []);

  const totalSubmittedForms = forms.length + consultForms.length;

  return (
    <div className="flex flex-col gap-7">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#274A9A] shadow-[0_8px_30px_rgba(39,74,154,0.3)]">
        <div className="absolute w-40 h-40 rounded-full pointer-events-none -top-8 -right-8 bg-white/5" />
        <div className="absolute -bottom-5 right-16 w-24 h-24 rounded-full bg-[#EC1B51]/10 pointer-events-none" />

        <div className="relative flex flex-col gap-4 px-6 py-6 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-white/50">
              Welcome back 👋
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Gichuri Partners
            </h1>
            <p className="mt-1 text-sm text-white/40">
              Here's what's happening with your site today.
            </p>
          </div>

          <div className="flex gap-4">
            <StatPill label="Total News & Media" value={media.length} />
            <StatPill label="Total Blogs" value={blogs.length} />
            <StatPill
              label="Forms Submitted"
              value={totalSubmittedForms}
              secondary
            />
          </div>
        </div>
      </div>

      {/* Blogs Table */}
      <Section title="Total Blogs" count={blogs.length} accentBlue>
        <div className="overflow-x-auto">
          {loadingBlogs ? (
            <div className="flex items-center justify-center py-16 text-gray-400">
              <p className="text-sm font-semibold">Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-12 h-12 text-gray-200"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <p className="text-sm font-semibold">No blogs found</p>
            </div>
          ) : (
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  {["Image", "Title", "Description", "Action"].map((h) => (
                    <th
                      key={h}
                      className={`px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400${
                        h === "Description" ? " hidden md:table-cell" : ""
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog, idx) => (
                  <tr
                    key={blog._id}
                    className={`transition-colors duration-100 hover:bg-[#274A9A]/[0.04]${
                      idx !== 0 ? " border-t border-gray-100" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="w-12 h-12 overflow-hidden bg-gray-100 border border-gray-200 rounded-xl shrink-0">
                        {blog.image ? (
                          <img
                            src={getImageUrl(blog.image)}
                            alt={blog.title}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full text-[10px] text-gray-400">
                            No Image
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="px-4 py-3 font-semibold text-[#274A9A] max-w-[180px]">
                      <p className="m-0 truncate">{blog.title}</p>
                    </td>

                    <td className="hidden md:table-cell px-4 py-3 text-gray-400 max-w-[260px] text-[13px]">
                      <p className="m-0 line-clamp-2">
                        {blog.excerpt || "No description available"}
                      </p>
                    </td>

                    <td className="px-4 py-3">
                      <Link
                        href={`/blogs/${blog.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#274A9A] shadow-[0_3px_10px_rgba(39,74,154,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-150 no-underline"
                      >
                        <EyeIcon /> View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Section>
      {/* News Table */}
     <Section title="Total News" count={media.length} accentBlue>
        <div className="overflow-x-auto">
          {loadingMedia ? (
            <div className="flex items-center justify-center py-16 text-gray-400">
              <p className="text-sm font-semibold">Loading news...</p>
            </div>
          ) : media.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-12 h-12 text-gray-200"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <p className="text-sm font-semibold">No news found</p>
            </div>
          ) : (
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  {["Image", "Title", "Description", "Action"].map((h) => (
                    <th
                      key={h}
                      className={`px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400${
                        h === "Description" ? " hidden md:table-cell" : ""
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {media.map((item, idx) => (
                  <tr
                    key={item._id}
                    className={`transition-colors duration-100 hover:bg-[#274A9A]/[0.04] ${
                      idx !== 0 ? "border-t border-gray-100" : ""
                    }`}
                  >
                    {/* IMAGE */}
                    <td className="px-4 py-3">
                      <div className="w-12 h-12 overflow-hidden bg-gray-100 border border-gray-200 rounded-xl shrink-0">
                        {item.image ? (
                          <img
                            src={getImageUrl(item.image)}
                            alt={item.title}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full text-[10px] text-gray-400">
                            No Image
                          </div>
                        )}
                      </div>
                    </td>

                    {/* TITLE */}
                    <td className="px-4 py-3 font-semibold text-[#274A9A] max-w-[180px]">
                      <p className="m-0 truncate">{item.title}</p>
                    </td>

                    {/* DESCRIPTION */}
                    <td className="hidden md:table-cell px-4 py-3 text-gray-400 max-w-[260px] text-[13px]">
                      <p className="m-0 line-clamp-2">
                        {item.excerpt || "No description available"}
                      </p>
                    </td>

                    {/* ACTION */}
                    <td className="px-4 py-3">
                      <Link
                        href={`/news-media/${item.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#274A9A] shadow-[0_3px_10px_rgba(39,74,154,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-150 no-underline"
                      >
                        <EyeIcon /> View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Section>

      {/* Contact Forms Table */}
      <Section title="Total Contact Forms Submitted" count={forms.length}>
        <div className="overflow-x-auto">
          {loadingForms ? (
            <div className="flex items-center justify-center py-16 text-gray-400">
              <p className="text-sm font-semibold">Loading contact forms...</p>
            </div>
          ) : forms.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-12 h-12 text-gray-200"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <p className="text-sm font-semibold">No contact forms found</p>
            </div>
          ) : (
            <table className="w-full min-w-[720px] text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  {[
                    { label: "#", cls: "" },
                    { label: "Name", cls: "" },
                    { label: "Phone", cls: "" },
                    { label: "Email", cls: "hidden sm:table-cell" },
                    { label: "Service", cls: "hidden md:table-cell" },
                    { label: "Company Name", cls: "hidden md:table-cell" },
                    { label: "Date", cls: "hidden lg:table-cell" },
                    { label: "Action", cls: "" },
                  ].map(({ label, cls }) => (
                    <th
                      key={label}
                      className={`px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400 ${cls}`}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {forms.map((form, idx) => (
                  <tr
                    key={form._id}
                    className={`transition-colors duration-100 hover:bg-[#EC1B51]/[0.04]${
                      idx !== 0 ? " border-t border-gray-100" : ""
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-300">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#274A9A]">
                      {form.name}
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-[13px]">
                      {form.phone || "-"}
                    </td>
                    <td className="hidden sm:table-cell px-4 py-3 text-gray-400 text-[13px]">
                      {form.email}
                    </td>
                    <td className="hidden px-4 py-3 md:table-cell">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EC1B51]/10 text-[#EC1B51]">
                        {form.services || "-"}
                      </span>
                    </td>
                    <td className="hidden md:table-cell px-4 py-3 text-gray-500 text-[13px]">
                      {form.companyName || "-"}
                    </td>
                    <td className="hidden lg:table-cell px-4 py-3 text-gray-400 text-[13px]">
                      {form.createdAt
                        ? new Date(form.createdAt).toLocaleDateString("en-IN")
                        : "-"}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href="/admin/forms"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#EC1B51] shadow-[0_3px_10px_rgba(236,27,81,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-150 no-underline"
                      >
                        <EyeIcon /> View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Section>

      {/* Consult Forms Table */}
      <Section
        title="Total Consult Forms Submitted"
        count={consultForms.length}
      >
        <div className="overflow-x-auto">
          {loadingConsultForms ? (
            <div className="flex items-center justify-center py-16 text-gray-400">
              <p className="text-sm font-semibold">Loading consult forms...</p>
            </div>
          ) : consultForms.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-12 h-12 text-gray-200"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <p className="text-sm font-semibold">No consult forms found</p>
            </div>
          ) : (
            <table className="w-full min-w-[720px] text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  {[
                    { label: "#", cls: "" },
                    { label: "Name", cls: "" },
                    { label: "Phone", cls: "" },
                    { label: "Email", cls: "hidden sm:table-cell" },
                    { label: "Service", cls: "hidden md:table-cell" },
                    { label: "Date", cls: "hidden lg:table-cell" },
                    { label: "Action", cls: "" },
                  ].map(({ label, cls }) => (
                    <th
                      key={label}
                      className={`px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400 ${cls}`}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {consultForms.map((form, idx) => (
                  <tr
                    key={form._id}
                    className={`transition-colors duration-100 hover:bg-[#274A9A]/[0.04]${
                      idx !== 0 ? " border-t border-gray-100" : ""
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-300">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#274A9A]">
                      {form.name}
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-[13px]">
                      {form.phone || "-"}
                    </td>
                    <td className="hidden sm:table-cell px-4 py-3 text-gray-400 text-[13px]">
                      {form.email}
                    </td>
                    <td className="hidden px-4 py-3 md:table-cell">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#274A9A]/10 text-[#274A9A]">
                        {form.services || "-"}
                      </span>
                    </td>
                    <td className="hidden lg:table-cell px-4 py-3 text-gray-400 text-[13px]">
                      {form.createdAt
                        ? new Date(form.createdAt).toLocaleDateString("en-IN")
                        : "-"}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href="/admin/consult-forms"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#274A9A] shadow-[0_3px_10px_rgba(39,74,154,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-150 no-underline"
                      >
                        <EyeIcon /> View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, count, accentBlue = false, children }) {
  return (
    <div className="overflow-hidden bg-white rounded-2xl shadow-[0_2px_16px_rgba(39,74,154,0.08)]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div
            className={`w-1 h-6 rounded-full ${
              accentBlue ? "bg-[#274A9A]" : "bg-[#EC1B51]"
            }`}
          />
          <h2 className="text-[15px] font-bold text-[#274A9A]">{title}</h2>
        </div>

        <span
          className={`text-[11px] font-bold px-2.5 py-1 rounded-full text-white ${
            accentBlue ? "bg-[#274A9A]" : "bg-[#EC1B51]"
          }`}
        >
          {count} total
        </span>
      </div>
      {children}
    </div>
  );
}

function StatPill({ label, value, secondary = false }) {
  return (
    <div
      className={`flex flex-col items-center justify-center px-5 py-3 rounded-xl text-white min-w-[90px] ${
        secondary
          ? "bg-[#EC1B51] shadow-[0_4px_14px_rgba(236,27,81,0.4)]"
          : "bg-white/15 border border-white/20"
      }`}
    >
      <span className="text-[26px] font-black leading-none">{value}</span>
      <span className="text-[10px] font-medium mt-1 opacity-85 text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="w-3 h-3"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
