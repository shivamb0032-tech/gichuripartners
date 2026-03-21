"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Dashboard", icon: <GridIcon />, href: "/admin/dashboard" },
  { label: "Blogs", icon: <BookIcon />, href: "/admin/blogs" },
  { label: "Forms", icon: <FormIcon />, href: "/admin/forms" },
  { label: "Consult Forms", icon: <FormIcon />, href: "/admin/consult-forms" },
  { label: "Profile", icon: <FormIcon />, href: "/admin/profile" },
];

export default function AdminSidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const currentPage =
    NAV_ITEMS.find((item) => pathname.startsWith(item.href))?.label || "Admin";

  return (
    <div className="flex h-screen overflow-hidden bg-[#f0f2f8]">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-[#2E4861] text-white
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:flex lg:flex-col lg:shrink-0
        `}
      >
        {/* Brand */}
        <div className="flex items-center gap-3 px-6 py-5 bg-gray-300 border-r border-[#2E4861]">
          <Image
            src="/assets/logos/Gichuri-Partners-logo-version-3.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Nav */}
        <nav className="flex flex-col flex-1 gap-1 px-3 py-5 overflow-y-auto">
          <p className="px-3 mb-2 text-[10px] font-semibold tracking-[0.1em] uppercase text-white/35">
            General
          </p>

          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-[#EC1B51] text-white shadow-[0_4px_14px_rgba(236,27,81,0.35)]"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <span className="w-4 h-4 shrink-0">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="flex items-center gap-3 px-4 py-4 border-t border-white/10">
        < Link href="/admin/profile">
          <Image
            src="/assets/logos/Gichuri-Partners-logo-version-3.png"
            alt="Admin"
            width={36}
            height={36}
            className="object-contain w-10 h-10 bg-white border rounded-full border-white/20"
          />
          </Link>
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate">< Link href="/admin/profile">Gichuri Partners</Link></p>
            <p className="text-[11px] text-white/50">< Link href="/admin/profile">Admin</Link></p>
          </div>
        </div>
      </aside>

      {/* Right Content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-100 rounded-lg"
          >
            <HamburgerIcon />
          </button>

          <h2 className="text-base font-semibold text-[#274A9A]">
            {currentPage}
          </h2>

          <Image
            src="/assets/logos/Gichuri-Partners-logo-version-3.png"
            alt="Admin"
            width={34}
            height={34}
            className="object-contain w-20 h-10"
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto sm:p-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

/* Icons */
function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function FormIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}