"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NewMediaTableSection() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const SERVER_URL = API_URL.replace("/api", "");

  const [media, setMedia] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const getImageUrl = (image) => {
    if (!image) return "";
    if (image.startsWith("http")) return image;
    return `${SERVER_URL}${image}`;
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/newmedia`, { cache: "no-store" });
      const data = await res.json();

      if (data.success) {
        setMedia(data.data);
      } else {
        alert(data.message || "Failed to fetch data");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const confirmDelete = (id) => setDeleteId(id);
  const cancelDelete = () => setDeleteId(null);

  const handleDelete = async () => {
    if (!deleteId) return;

    const token = localStorage.getItem("adminToken");
    if (!token) return alert("Please login first");

    try {
      setDeleteLoading(true);

      const res = await fetch(`${API_URL}/newmedia/${deleteId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (data.success) {
        setMedia((prev) => prev.filter((i) => i._id !== deleteId));
        setDeleteId(null);
        alert("Deleted successfully");
      } else {
        alert(data.message || "Delete failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <>
      {/* DELETE MODAL */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40">
          <div className="flex flex-col w-full max-w-sm gap-4 p-6 bg-white shadow-xl rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EC1B51]/10 flex items-center justify-center">
                <TrashIcon className="w-5 h-5 text-[#EC1B51]" />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-800">
                  Delete Media
                </p>
                <p className="text-xs text-gray-400">
                  This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                disabled={deleteLoading}
                className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={deleteLoading}
                className="px-4 py-2 text-sm font-semibold text-white bg-[#EC1B51] rounded-lg"
              >
                {deleteLoading ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-hidden bg-white rounded-2xl shadow-[0_2px_16px_rgba(39,74,154,0.08)]">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 rounded-full bg-[#274A9A]" />
            <h2 className="text-[15px] font-bold text-[#274A9A]">
              Total New Media
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white bg-[#274A9A]">
              {media.length} total
            </span>

            <Link
              href="/admin/News/create"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#EC1B51] shadow hover:-translate-y-0.5"
            >
              <PlusIcon />
              Add Media
            </Link>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          {loading ? (
            <div className="py-16 text-center text-gray-400">
              Loading...
            </div>
          ) : media.length === 0 ? (
            <div className="py-16 text-center text-gray-400">
              No data found
            </div>
          ) : (
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="bg-[#f8f9ff]">
                  <th className="px-4 py-3 text-left text-[11px] text-gray-400 uppercase">Image</th>
                  <th className="px-4 py-3 text-left text-[11px] text-gray-400 uppercase">Title</th>
                  <th className="px-4 py-3 text-left text-[11px] text-gray-400 uppercase">Category</th>
                  <th className="px-4 py-3 text-left text-[11px] text-gray-400 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-[11px] text-gray-400 uppercase">Action</th>
                </tr>
              </thead>

              <tbody>
                {media.map((item, idx) => (
                  <tr
                    key={item._id}
                    className={`hover:bg-[#274A9A]/[0.03] ${
                      idx !== 0 ? "border-t border-gray-100" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="w-12 h-12 overflow-hidden bg-gray-100 border rounded-xl">
                        {item.image ? (
                          <img
                            src={getImageUrl(item.image)}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-xs text-gray-400">
                            No Image
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="px-4 py-3 font-semibold text-[#274A9A]">
                      {item.title}
                    </td>

                    <td className="px-4 py-3 text-gray-600">
                      {item.category || "—"}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                          item.published
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.published ? "Published" : "Draft"}
                      </span>
                    </td>

                    <td className="flex gap-2 px-4 py-3">
                      <Link
                        href={`/admin/News/edit/${item._id}`}
                        className="px-3 py-1 text-xs text-white bg-[#274A9A] rounded-lg"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => confirmDelete(item._id)}
                        className="px-3 py-1 text-xs text-[#EC1B51] bg-[#EC1B51]/10 rounded-lg hover:bg-[#EC1B51] hover:text-white"
                      >
                        Delete
                      </button>
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

/* ICONS SAME */
function TrashIcon({ className = "w-3 h-3" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}