"use client";

import Link from "next/link";
import { useState } from "react";

const FORMS_DATA = [
  { id: 1, name: "John Smith",    email: "john@example.com",  subject: "Partnership Inquiry",  date: "2025-03-10" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", subject: "Support Request",       date: "2025-03-11" },
  { id: 3, name: "Michael Chen",  email: "mchen@example.com", subject: "Product Demo",          date: "2025-03-12" },
  { id: 4, name: "Amara Osei",    email: "amara@example.com", subject: "General Enquiry",       date: "2025-03-14" },
  { id: 5, name: "Priya Sharma",  email: "priya@example.com", subject: "Career Opportunities",  date: "2025-03-15" },
];

export default function FormsTableSection() {
  const [forms, setForms] = useState(FORMS_DATA);
  const [deleteId, setDeleteId] = useState(null);

  const confirmDelete = (id) => setDeleteId(id);
  const cancelDelete = () => setDeleteId(null);
  const handleDelete = () => {
    setForms((prev) => prev.filter((f) => f.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <>
      {/* ── Delete Confirm Modal ── */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40">
          <div className="flex flex-col w-full max-w-sm gap-4 p-6 bg-white shadow-xl rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EC1B51]/10 flex items-center justify-center shrink-0">
                <TrashIcon className="w-5 h-5 text-[#EC1B51]" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Delete Form</p>
                <p className="text-xs text-gray-400 mt-0.5">This action cannot be undone.</p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-sm font-semibold text-gray-600 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#EC1B51] hover:bg-[#c0143f] transition-colors shadow-[0_3px_10px_rgba(236,27,81,0.3)]"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Table Card ── */}
      <div className="overflow-hidden bg-white rounded-2xl shadow-[0_2px_16px_rgba(39,74,154,0.08)]">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 rounded-full bg-[#EC1B51]" />
            <h2 className="text-[15px] font-bold text-[#274A9A]">Total Forms Submitted</h2>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white bg-[#EC1B51]">
            {forms.length} total
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          {forms.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-gray-200">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <p className="text-sm font-semibold">No forms submitted</p>
            </div>
          ) : (
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#f8f9ff]">
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">#</th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">Name</th>
                  <th className="hidden sm:table-cell px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">Email</th>
                  <th className="hidden md:table-cell px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">Subject</th>
                  <th className="hidden lg:table-cell px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">Date</th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400">Action</th>
                </tr>
              </thead>
              <tbody>
                {forms.map((form, idx) => (
                  <tr
                    key={form.id}
                    className={`transition-colors duration-100 hover:bg-[#EC1B51]/[0.03] ${idx !== 0 ? "border-t border-gray-100" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-300">
                      {String(form.id).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#274A9A]">
                      {form.name}
                    </td>
                    <td className="hidden sm:table-cell px-4 py-3 text-gray-400 text-[13px]">
                      {form.email}
                    </td>
                    <td className="hidden px-4 py-3 md:table-cell">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EC1B51]/10 text-[#EC1B51]">
                        {form.subject}
                      </span>
                    </td>
                    <td className="hidden lg:table-cell px-4 py-3 text-gray-400 text-[13px]">
                      {form.date}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {/* Edit */}
                        <Link
                          href={`/admin/forms/${form.id}/edit`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#274A9A] no-underline shadow-[0_2px_8px_rgba(39,74,154,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-150 whitespace-nowrap"
                        >
                          <EditIcon />
                          Edit
                        </Link>

                        {/* Delete */}
                        <button
                          onClick={() => confirmDelete(form.id)}
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

// ── Icons ──────────────────────────────────────────────────────────────────────
function EditIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function TrashIcon({ className = "w-3 h-3" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}