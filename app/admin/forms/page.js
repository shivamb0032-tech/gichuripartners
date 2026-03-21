"use client";

import { useEffect, useState } from "react";

export default function FormsTableSection() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchForms = async () => {
    try {
      setLoading(true);

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
        console.error(data.message || "Failed to fetch forms");
      }
    } catch (error) {
      setForms([]);
      console.error("Fetch forms error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  const confirmDelete = (id) => setDeleteId(id);
  const cancelDelete = () => setDeleteId(null);

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setDeleteLoading(true);

      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("adminToken")
          : null;

      if (!token) {
        alert("Admin token not found");
        return;
      }

      const res = await fetch(`${API_URL}/contact/${deleteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.success) {
        setForms((prev) => prev.filter((f) => f._id !== deleteId));
        setDeleteId(null);
      } else {
        alert(data.message || "Delete failed");
      }
    } catch (error) {
      console.error("Delete form error:", error);
      alert("Something went wrong while deleting form");
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
                <p className="text-sm font-bold text-gray-800">Delete Form</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                disabled={deleteLoading}
                className="px-4 py-2 text-sm font-semibold text-gray-600 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleteLoading}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#EC1B51] hover:bg-[#c0143f] transition-colors shadow-[0_3px_10px_rgba(236,27,81,0.3)]"
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
            <div className="w-1 h-6 rounded-full bg-[#EC1B51]" />
            <h2 className="text-[15px] font-bold text-[#274A9A]">
              Total Forms Submitted
            </h2>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white bg-[#EC1B51]">
            {forms.length} total
          </span>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-400">
              <p className="text-sm font-semibold">Loading forms...</p>
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
              <p className="text-sm font-semibold">No forms submitted</p>
            </div>
          ) : (
            <table className="w-full min-w-[760px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#f8f9ff]">
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Phone
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Service
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Message
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {forms.map((form, idx) => (
                  <tr
                    key={form._id}
                    className={`transition-colors duration-100 hover:bg-[#EC1B51]/[0.03] ${
                      idx !== 0 ? "border-t border-gray-100" : ""
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
                    <td className="px-4 py-3 text-gray-400 text-[13px]">
                      {form.email}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EC1B51]/10 text-[#EC1B51]">
                        {form.services || "-"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-[13px] max-w-[220px]">
                      <p className="m-0 line-clamp-2">{form.companyName || "-"}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-[13px]">
                      {form.createdAt
                        ? new Date(form.createdAt).toLocaleDateString("en-IN")
                        : "-"}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => confirmDelete(form._id)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#EC1B51] bg-[#EC1B51]/10 hover:bg-[#EC1B51] hover:text-white transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap border-none cursor-pointer"
                      >
                        <TrashIcon />
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