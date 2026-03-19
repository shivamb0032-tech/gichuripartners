"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Mock Data ───────────────────────────────────────────────────────────────
const BLOGS = [
  {
    id: 1,
    image: "https://picsum.photos/seed/blog1/60/60",
    title: "Getting Started with Next.js 14",
    description: "A complete beginner's guide to building modern apps with the App Router.",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/blog2/60/60",
    title: "Tailwind CSS Best Practices",
    description: "Learn how to structure your utility classes for maintainable codebases.",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/blog3/60/60",
    title: "React Server Components Explained",
    description: "Deep dive into RSC and when to use client vs server components.",
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/blog4/60/60",
    title: "Building REST APIs with Node.js",
    description: "Step-by-step guide to creating scalable REST APIs using Express.",
  },
  {
    id: 5,
    image: "https://picsum.photos/seed/blog5/60/60",
    title: "MongoDB Aggregation Pipelines",
    description: "Master complex data queries using MongoDB's powerful aggregation framework.",
  },
];

const FORMS = [
  { id: 1, name: "John Smith", email: "john@example.com", subject: "Partnership Inquiry", date: "2025-03-10" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", subject: "Support Request", date: "2025-03-11" },
  { id: 3, name: "Michael Chen", email: "mchen@example.com", subject: "Product Demo", date: "2025-03-12" },
  { id: 4, name: "Amara Osei", email: "amara@example.com", subject: "General Enquiry", date: "2025-03-14" },
  { id: 5, name: "Priya Sharma", email: "priya@example.com", subject: "Career Opportunities", date: "2025-03-15" },
];

const NAV_ITEMS = [
  { label: "Dashboard", icon: <GridIcon />, href: "/admin/dashboard", active: true },
  { label: "Blogs", icon: <BookIcon />, href: "/admin/blogs" },
  { label: "Forms", icon: <FormIcon />, href: "/admin/forms" },
  { label: "Users", icon: <UsersIcon />, href: "/admin/users" },
  { label: "Analytics", icon: <ChartIcon />, href: "/admin/analytics" },
  { label: "Settings", icon: <SettingsIcon />, href: "/admin/settings" },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f0f2f8] font-[system-ui]" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>

      {/* ── Sidebar Overlay (mobile) ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`
          fixed top-0 left-0 z-30 h-full w-64 flex flex-col
          bg-[#1a2344] text-white transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Brand */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#f97316] to-[#ef4444] flex items-center justify-center shadow-lg">
            <span className="text-base font-black leading-none text-white">A</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">AdminPanel</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-5 space-y-0.5 overflow-y-auto">
          <p className="text-[10px] font-semibold tracking-widest text-white/30 uppercase px-3 mb-2">General</p>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150
                ${item.active
                  ? "bg-[#f97316] text-white shadow-md shadow-orange-500/30"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
            >
              <span className="flex-shrink-0 w-4 h-4">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User */}
        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center flex-shrink-0 text-xs font-bold text-white rounded-full w-9 h-9 bg-gradient-to-br from-violet-500 to-pink-500">
              JD
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">John David</p>
              <p className="text-[11px] text-white/40 truncate">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* ── Top Bar (mobile hamburger + page title) ── */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center justify-center text-gray-600 bg-gray-100 rounded-lg w-9 h-9"
          >
            <HamburgerIcon />
          </button>
          <span className="font-bold text-[#1a2344] text-base">Dashboard</span>
          <div className="flex items-center justify-center text-xs font-bold text-white rounded-full w-9 h-9 bg-gradient-to-br from-violet-500 to-pink-500">
            JD
          </div>
        </div>

        {/* ── Page Body ── */}
        <main className="flex-1 px-4 py-6 space-y-8 sm:px-6 lg:px-8">

          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #1a2344 0%, #2d3a6e 50%, #1a2344 100%)",
              boxShadow: "0 8px 30px rgba(26,35,68,0.25)",
            }}
          >
            {/* Decorative circles */}
            <div className="absolute top-[-30px] right-[-30px] w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute bottom-[-20px] right-[60px] w-24 h-24 rounded-full bg-orange-500/10 pointer-events-none" />

            <div className="relative flex flex-col gap-4 px-6 py-6 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-1 text-sm font-medium text-white/50">Welcome back 👋</p>
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">John David</h1>
                <p className="mt-1 text-sm text-white/40">Here's what's happening with your site today.</p>
              </div>
              <div className="flex gap-4">
                <StatPill label="Total Blogs" value={BLOGS.length} color="from-orange-400 to-orange-600" />
                <StatPill label="Forms Submitted" value={FORMS.length} color="from-violet-400 to-violet-600" />
              </div>
            </div>
          </div>

          {/* ── Blogs Table ── */}
          <Section title="Total Blogs" count={BLOGS.length} accent="#f97316">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="bg-[#f8f9ff]">
                    <th className="px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase rounded-tl-lg">Image</th>
                    <th className="px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase">Title</th>
                    <th className="hidden px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase md:table-cell">Description</th>
                    <th className="px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase rounded-tr-lg">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {BLOGS.map((blog) => (
                    <tr key={blog.id} className="transition-colors duration-100 hover:bg-orange-50/40">
                      <td className="px-4 py-3">
                        <div className="flex-shrink-0 w-12 h-12 overflow-hidden bg-gray-100 border border-gray-200 rounded-xl">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-3 font-semibold text-[#1a2344] max-w-[180px]">
                        <p className="truncate">{blog.title}</p>
                      </td>
                      <td className="px-4 py-3 text-gray-400 hidden md:table-cell max-w-[260px]">
                        <p className="line-clamp-2 text-[13px]">{blog.description}</p>
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/blogs/${blog.id}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
                          style={{
                            background: "linear-gradient(135deg, #f97316, #ef4444)",
                            boxShadow: "0 3px 10px rgba(249,115,22,0.35)",
                          }}
                        >
                          <EyeIcon />
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ── Forms Table ── */}
          <Section title="Total Forms Submitted" count={FORMS.length} accent="#7c3aed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="bg-[#f8f9ff]">
                    <th className="px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase rounded-tl-lg">#</th>
                    <th className="px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase">Name</th>
                    <th className="hidden px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase sm:table-cell">Email</th>
                    <th className="hidden px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase md:table-cell">Subject</th>
                    <th className="hidden px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase lg:table-cell">Date</th>
                    <th className="px-4 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase rounded-tr-lg">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {FORMS.map((form) => (
                    <tr key={form.id} className="transition-colors duration-100 hover:bg-violet-50/40">
                      <td className="px-4 py-3 font-medium text-gray-300">{String(form.id).padStart(2, "0")}</td>
                      <td className="px-4 py-3 font-semibold text-[#1a2344]">{form.name}</td>
                      <td className="px-4 py-3 text-gray-400 text-[13px] hidden sm:table-cell">{form.email}</td>
                      <td className="hidden px-4 py-3 md:table-cell">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-violet-100 text-violet-700">
                          {form.subject}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-400 text-[13px] hidden lg:table-cell">{form.date}</td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/forms/${form.id}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
                          style={{
                            background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                            boxShadow: "0 3px 10px rgba(124,58,237,0.35)",
                          }}
                        >
                          <EyeIcon />
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

        </main>
      </div>
    </div>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────
function Section({ title, count, accent, children }) {
  return (
    <div className="overflow-hidden bg-white rounded-2xl" style={{ boxShadow: "0 2px 16px rgba(26,35,68,0.08)" }}>
      {/* Section Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 rounded-full" style={{ background: accent }} />
          <h2 className="text-base font-bold text-[#1a2344]">{title}</h2>
        </div>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
          style={{ background: accent }}
        >
          {count} total
        </span>
      </div>
      <div className="p-0">{children}</div>
    </div>
  );
}

// ─── Stat Pill ────────────────────────────────────────────────────────────────
function StatPill({ label, value, color }) {
  return (
    <div className={`flex flex-col items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg min-w-[90px]`}>
      <span className="text-2xl font-black leading-none">{value}</span>
      <span className="text-[10px] font-medium mt-1 opacity-80 text-center leading-tight">{label}</span>
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
function FormIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}