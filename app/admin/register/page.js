"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      alert("Registered successfully");
      router.push("/admin/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden font-sans">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/gichuri-login-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 15% 20%, rgba(79,29,200,0.75) 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 85% 80%, rgba(190,24,93,0.65) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 50% 50%, rgba(10,10,30,0.55) 0%, transparent 80%),
            linear-gradient(160deg, rgba(10,10,25,0.80) 0%, rgba(20,8,40,0.88) 100%)
          `,
        }}
      />

      {/* Animated Mesh */}
      <div
        className="absolute z-10 pointer-events-none animate-pulse"
        style={{
          inset: "-50%",
          background: `
            radial-gradient(ellipse 50% 40% at 20% 20%, rgba(99,55,255,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 80% 75%, rgba(236,72,153,0.18) 0%, transparent 60%)
          `,
        }}
      />

      {/* Orb 1 */}
      <div
        className="absolute top-[-60px] left-[-60px] w-64 h-64 rounded-full pointer-events-none z-10 animate-pulse"
        style={{ background: "rgba(139,92,246,0.22)", filter: "blur(55px)" }}
      />

      {/* Orb 2 */}
      <div
        className="absolute bottom-[-50px] right-[-50px] w-52 h-52 rounded-full pointer-events-none z-10 animate-pulse"
        style={{ background: "rgba(236,72,153,0.18)", filter: "blur(55px)" }}
      />

      {/* Card */}
      <div
        className="relative z-20 w-full max-w-[460px] mx-4 rounded-2xl border border-gray-200 px-8 py-7 max-sm:mx-3 max-sm:px-5 max-sm:py-6 max-sm:rounded-xl"
        style={{
          background: "#ffffff",
          boxShadow: "0 24px 70px rgba(0,0,0,0.5), 0 0 50px rgba(99,55,255,0.15)",
        }}
      >
        {/* Logo — centered at top */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center justify-center h-20 mb-3 w-28 max-sm:w-12 max-sm:h-12">
            <Image
              src="/assets/logos/Gichuri-Partners-logo-version-3.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain w-full h-full"
             
            />
          </div>
          <h2
            className="text-[1.4rem] max-sm:text-xl font-bold text-gray-900 leading-tight tracking-tight text-center"
            
          >
            Create Account
          </h2>
          <p className="text-[0.75rem] text-gray-400 font-light mt-0.5 text-center">
            Join us — it only takes a minute
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* First Name + Last Name */}
          <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            <InputField icon={<UserIcon />} name="firstName" placeholder="First Name" onChange={handleChange} />
            <InputField icon={<UserIcon />} name="lastName" placeholder="Last Name" onChange={handleChange} />
          </div>

          {/* Email */}
          <div className="mt-3">
            <InputField icon={<MailIcon />} name="email" type="email" placeholder="Email Address" onChange={handleChange} />
          </div>

          {/* Phone */}
          <div className="mt-3">
            <InputField icon={<PhoneIcon />} name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} />
          </div>

          {/* Password + Confirm */}
          <div className="grid grid-cols-2 gap-3 mt-3 max-[360px]:grid-cols-1">
            <InputField icon={<LockIcon />} name="password" type="password" placeholder="Password" onChange={handleChange} />
            <InputField icon={<ShieldIcon />} name="confirmPassword" type="password" placeholder="Confirm" onChange={handleChange} />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-xl text-white text-sm font-medium tracking-wide
                       transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #9d174d)",
              boxShadow: "0 4px 18px rgba(124,58,237,0.4)",
            }}
          >
            Create Account →
          </button>
        </form>

        {/* Login Link */}
        <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-gray-400">
          <span>Already have an account?</span>
          <Link
            href="/admin/login"
            className="font-medium transition-colors text-violet-600 hover:text-violet-500"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

/* Reusable Input */
function InputField({ icon, name, type = "text", placeholder, onChange }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 pointer-events-none">
        {icon}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full py-[10px] pl-9 pr-3 rounded-xl text-[0.82rem] text-gray-800
                   bg-gray-50 border border-gray-200 outline-none
                   placeholder:text-gray-400
                   focus:border-violet-400 focus:bg-violet-50/40
                   focus:ring-[2px] focus:ring-violet-400/20
                   transition-all duration-200"
      />
    </div>
  );
}

/* SVG Icons */
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}