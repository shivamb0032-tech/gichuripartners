"use client";

import Image from "next/image";

const profile = {
  username: "info@gichuripartners.com",
  email: "info@gichuripartners.com",
  fullname: "Gichuri Partners",
  title: "Administrator",
  avatar: "/assets/logos/Gichuri-Partners-logo-version-3.png",
};

export default function AdminProfilePage() {
  return (
    <div className="flex flex-col gap-7">

      {/* ── Page Header ── */}
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <UserIcon />
        <span className="text-[#274A9A] font-semibold">User: {profile.username}</span>
      </div>

      {/* ── Profile Card ── */}
      <div className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(39,74,154,0.08)] overflow-hidden">

        {/* ── Top Avatar + Info ── */}
        <div className="flex flex-col gap-6 px-6 py-6 border-b border-gray-100 sm:flex-row sm:px-8">

          {/* Avatar — display only */}
          <div className="flex items-start justify-center shrink-0 sm:justify-start">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-[#274A9A]/10">
              <Image
                src={profile.avatar}
                alt="Admin Avatar"
                width={96}
                height={96}
                className="object-contain w-full h-full"
                onError={undefined}
              />
            </div>
          </div>

          {/* Name + info */}
          <div className="flex flex-col justify-center min-w-0 gap-1">
            <h2 className="text-2xl font-bold leading-tight text-gray-800">{profile.fullname}</h2>
            <p className="text-sm">
              <span className="text-[#274A9A] font-medium">{profile.email}</span>
              <span className="text-gray-400"> – {profile.title}</span>
            </p>
            
          </div>
        </div>

        {/* ── Account Fields — view only ── */}
        <div className="px-6 py-6 sm:px-8">
          <h3 className="mb-5 text-base font-bold text-gray-800">Account</h3>

          <div className="flex flex-col divide-y divide-gray-100">

            <ViewField label="Username" value={profile.username} />
            <ViewField label="Email"    value={profile.email} />
            <ViewField label="Full name" value={profile.fullname} />
            <ViewField label="Title"    value={profile.title} />

          </div>
        </div>

      </div>
    </div>
  );
}

// ── View-only Field Row ────────────────────────────────────────────────────────
function ViewField({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3.5">
      <span className="text-sm text-gray-400 sm:w-28 shrink-0">{label}</span>
      <span className="text-sm font-medium text-gray-700">{value}</span>
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────────
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
