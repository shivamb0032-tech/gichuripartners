"use client"
import Link from "next/link";

// ─── Mock Data ────────────────────────────────────────────────────────────────
const BLOGS = [
  { id: 1, image: "https://picsum.photos/seed/blog1/60/60", title: "Getting Started with Next.js 14", description: "A complete beginner's guide to building modern apps with the App Router." },
  { id: 2, image: "https://picsum.photos/seed/blog2/60/60", title: "Tailwind CSS Best Practices", description: "Learn how to structure your utility classes for maintainable codebases." },
  { id: 3, image: "https://picsum.photos/seed/blog3/60/60", title: "React Server Components Explained", description: "Deep dive into RSC and when to use client vs server components." },
  { id: 4, image: "https://picsum.photos/seed/blog4/60/60", title: "Building REST APIs with Node.js", description: "Step-by-step guide to creating scalable REST APIs using Express." },
  { id: 5, image: "https://picsum.photos/seed/blog5/60/60", title: "MongoDB Aggregation Pipelines", description: "Master complex data queries using MongoDB's powerful aggregation framework." },
];

const FORMS = [
  { id: 1, name: "John Smith",    email: "john@example.com",  subject: "Partnership Inquiry",  date: "2025-03-10" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", subject: "Support Request",       date: "2025-03-11" },
  { id: 3, name: "Michael Chen",  email: "mchen@example.com", subject: "Product Demo",          date: "2025-03-12" },
  { id: 4, name: "Amara Osei",    email: "amara@example.com", subject: "General Enquiry",       date: "2025-03-14" },
  { id: 5, name: "Priya Sharma",  email: "priya@example.com", subject: "Career Opportunities",  date: "2025-03-15" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-7">

      {/* ── Welcome Banner ── */}
      <div className="relative overflow-hidden rounded-2xl bg-[#274A9A] shadow-[0_8px_30px_rgba(39,74,154,0.3)]">
        {/* decorative circles */}
        <div className="absolute w-40 h-40 rounded-full pointer-events-none -top-8 -right-8 bg-white/5" />
        <div className="absolute -bottom-5 right-16 w-24 h-24 rounded-full bg-[#EC1B51]/10 pointer-events-none" />

        <div className="relative flex flex-col gap-4 px-6 py-6 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-white/50">Welcome back 👋</p>
            <h1 className="text-3xl font-bold tracking-tight text-white">Gichuri Partners</h1>
            <p className="mt-1 text-sm text-white/40">Here's what's happening with your site today.</p>
          </div>
          <div className="flex gap-4">
            <StatPill label="Total Blogs"     value={BLOGS.length} />
            <StatPill label="Forms Submitted" value={FORMS.length} secondary />
          </div>
        </div>
      </div>

      {/* ── Blogs Table ── */}
      <Section title="Total Blogs" count={BLOGS.length} accentBlue>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50">
                {["Image", "Title", "Description", "Action"].map((h) => (
                  <th
                    key={h}
                    className={`px-4 py-3 text-left text-[11px] font-semibold tracking-widest uppercase text-gray-400${h === "Description" ? " hidden md:table-cell" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BLOGS.map((blog, idx) => (
                <tr
                  key={blog.id}
                  className={`transition-colors duration-100 hover:bg-[#274A9A]/[0.04]${idx !== 0 ? " border-t border-gray-100" : ""}`}
                >
                  <td className="px-4 py-3">
                    <div className="w-12 h-12 overflow-hidden bg-gray-100 border border-gray-200 rounded-xl shrink-0">
                      <img src={blog.image} alt={blog.title} className="object-cover w-full h-full" />
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-[#274A9A] max-w-[180px]">
                    <p className="m-0 truncate">{blog.title}</p>
                  </td>
                  <td className="hidden md:table-cell px-4 py-3 text-gray-400 max-w-[260px] text-[13px]">
                    <p className="m-0 line-clamp-2">{blog.description}</p>
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/blogs/${blog.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#274A9A] shadow-[0_3px_10px_rgba(39,74,154,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-150 no-underline"
                    >
                      <EyeIcon /> View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Forms Table ── */}
      <Section title="Total Forms Submitted" count={FORMS.length}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50">
                {[
                  { label: "#",       cls: "" },
                  { label: "Name",    cls: "" },
                  { label: "Email",   cls: "hidden sm:table-cell" },
                  { label: "Subject", cls: "hidden md:table-cell" },
                  { label: "Date",    cls: "hidden lg:table-cell" },
                  { label: "Action",  cls: "" },
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
              {FORMS.map((form, idx) => (
                <tr
                  key={form.id}
                  className={`transition-colors duration-100 hover:bg-[#EC1B51]/[0.04]${idx !== 0 ? " border-t border-gray-100" : ""}`}
                >
                  <td className="px-4 py-3 font-medium text-gray-300">{String(form.id).padStart(2, "0")}</td>
                  <td className="px-4 py-3 font-semibold text-[#274A9A]">{form.name}</td>
                  <td className="hidden sm:table-cell px-4 py-3 text-gray-400 text-[13px]">{form.email}</td>
                  <td className="hidden px-4 py-3 md:table-cell">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EC1B51]/10 text-[#EC1B51]">
                      {form.subject}
                    </span>
                  </td>
                  <td className="hidden lg:table-cell px-4 py-3 text-gray-400 text-[13px]">{form.date}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/forms/${form.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#EC1B51] shadow-[0_3px_10px_rgba(236,27,81,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-150 no-underline"
                    >
                      <EyeIcon /> View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
function Section({ title, count, accentBlue = false, children }) {
  return (
    <div className="overflow-hidden bg-white rounded-2xl shadow-[0_2px_16px_rgba(39,74,154,0.08)]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className={`w-1 h-6 rounded-full ${accentBlue ? "bg-[#274A9A]" : "bg-[#EC1B51]"}`} />
          <h2 className="text-[15px] font-bold text-[#274A9A]">{title}</h2>
        </div>
        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full text-white ${accentBlue ? "bg-[#274A9A]" : "bg-[#EC1B51]"}`}>
          {count} total
        </span>
      </div>
      {children}
    </div>
  );
}

// ─── StatPill ─────────────────────────────────────────────────────────────────
function StatPill({ label, value, secondary = false }) {
  return (
    <div className={`flex flex-col items-center justify-center px-5 py-3 rounded-xl text-white min-w-[90px] ${secondary ? "bg-[#EC1B51] shadow-[0_4px_14px_rgba(236,27,81,0.4)]" : "bg-white/15 border border-white/20"}`}>
      <span className="text-[26px] font-black leading-none">{value}</span>
      <span className="text-[10px] font-medium mt-1 opacity-85 text-center leading-tight">{label}</span>
    </div>
  );
}

// ─── EyeIcon ──────────────────────────────────────────────────────────────────
function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}