"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("adminToken", data.token);
      router.push("/admin/dashboard");
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
        {/* Logo */}
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

          <h2 className="text-[1.4rem] max-sm:text-xl font-bold text-gray-900 leading-tight tracking-tight text-center">
            Welcome Back
          </h2>

          <p className="text-[0.75rem] text-gray-400 font-light mt-0.5 text-center">
            Sign in to access your admin panel
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Identifier */}
          <div>
            <InputField
              icon={<MailIcon />}
              name="identifier"
              placeholder="Email or Username"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="mt-3">
            <PasswordField
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
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
            Login →
          </button>
        </form>

        {/* Register Link */}
        <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-gray-400">
          <span>Don&apos;t have an account?</span>
          <Link
            href="/admin/register"
            className="font-medium transition-colors text-violet-600 hover:text-violet-500"
          >
            Create Account
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

/* Password Field with Eye Icon */
function PasswordField({
  name,
  placeholder,
  value,
  onChange,
  showPassword,
  setShowPassword,
}) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 pointer-events-none">
        <LockIcon />
      </span>

      <input
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full py-[10px] pl-9 pr-10 rounded-xl text-[0.82rem] text-gray-800
                   bg-gray-50 border border-gray-200 outline-none
                   placeholder:text-gray-400
                   focus:border-violet-400 focus:bg-violet-50/40
                   focus:ring-[2px] focus:ring-violet-400/20
                   transition-all duration-200"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute text-gray-400 transition -translate-y-1/2 right-3 top-1/2 hover:text-violet-600"
      >
        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    </div>
  );
}

/* SVG Icons */
function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-full h-full"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-full h-full"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4"
    >
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4"
    >
      <path d="m3 3 18 18" />
      <path d="M10.584 10.587a2 2 0 1 0 2.829 2.829" />
      <path d="M9.363 5.365A10.67 10.67 0 0 1 12 5c5.05 0 9.27 3.11 10 7-.2 1.043-.633 2.008-1.25 2.83" />
      <path d="M6.61 6.609A10.72 10.72 0 0 0 2 12c.73 3.89 4.95 7 10 7 1.74 0 3.38-.37 4.84-1.03" />
    </svg>
  );
}