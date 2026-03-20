"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogsTableSection() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const SERVER_URL = API_URL.replace("/api", "");

  const [blogs, setBlogs] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/blogs`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setBlogs(data.blogs);
      } else {
        alert(data.message || "Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Fetch blogs error:", error);
      alert("Something went wrong while fetching blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const confirmDelete = (id) => {
    setDeleteId(id);
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    const token = localStorage.getItem("adminToken");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      setDeleteLoading(true);

      const res = await fetch(`${API_URL}/blogs/${deleteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.success) {
        setBlogs((prev) => prev.filter((blog) => blog._id !== deleteId));
        setDeleteId(null);
        alert("Blog deleted successfully");
      } else {
        alert(data.message || "Failed to delete blog");
      }
    } catch (error) {
      console.error("Delete blog error:", error);
      alert("Something went wrong while deleting blog");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <>
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40">
          <div className="flex flex-col w-full max-w-sm gap-4 p-6 bg-white shadow-xl rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EC1B51]/10 flex items-center justify-center shrink-0">
                <TrashIcon className="w-5 h-5 text-[#EC1B51]" />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-800">Delete Blog</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                disabled={deleteLoading}
                className="px-4 py-2 text-sm font-semibold text-gray-600 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={deleteLoading}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#EC1B51] hover:bg-[#c0143f] transition-colors shadow-[0_3px_10px_rgba(236,27,81,0.3)] disabled:opacity-50"
              >
                {deleteLoading ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-hidden bg-white rounded-2xl shadow-[0_2px_16px_rgba(39,74,154,0.08)]">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 rounded-full bg-[#274A9A]" />
            <h2 className="text-[15px] font-bold text-[#274A9A]">
              Total Blogs
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white bg-[#274A9A]">
              {blogs.length} total
            </span>

            <Link
              href="/admin/blogs/create"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#EC1B51] no-underline shadow-[0_3px_10px_rgba(236,27,81,0.3)] hover:-translate-y-0.5 transition-transform duration-150"
            >
              <PlusIcon />
              Add Blog
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
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
                <tr className="bg-[#f8f9ff]">
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Image
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Title
                  </th>
                  <th className="hidden md:table-cell px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Description
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog, idx) => (
                  <tr
                    key={blog._id}
                    className={`transition-colors duration-100 hover:bg-[#274A9A]/[0.03] ${
                      idx !== 0 ? "border-t border-gray-100" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="w-12 h-12 overflow-hidden bg-gray-100 border border-gray-200 rounded-xl shrink-0">
                        {blog.image ? (
                          <img
                            src={`${SERVER_URL}${blog.image}`}
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

                    <td className="hidden md:table-cell px-4 py-3 text-gray-400 text-[13px] max-w-[300px]">
                      <p className="m-0 line-clamp-2">{blog.excerpt}</p>
                    </td>

                    <td className="px-4 py-3 text-[13px] text-gray-600">
                      {blog.category || "—"}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                          blog.published
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/blogs/edit/${blog._id}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#274A9A] no-underline shadow-[0_2px_8px_rgba(39,74,154,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-150 whitespace-nowrap"
                        >
                          <EditIcon />
                          Edit
                        </Link>

                        <button
                          type="button"
                          onClick={() => confirmDelete(blog._id)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#EC1B51] bg-[#EC1B51]/10 hover:bg-[#EC1B51] hover:text-white transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap border-none cursor-pointer"
                        >
                          <TrashIcon />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

function EditIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="w-3 h-3"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function TrashIcon({ className = "w-3 h-3" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={className}
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="w-3 h-3"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}