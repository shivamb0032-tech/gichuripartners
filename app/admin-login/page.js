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

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        router.push("/admin/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Server error. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/gichuri-login-bg.webp"
          alt="Login Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(135deg, rgba(5,10,20,0.88) 0%, rgba(15,23,42,0.78) 35%, rgba(40,10,60,0.74) 100%)
          `,
        }}
      />

      {/* Soft Blur Glow */}
      <div
        className="absolute top-[-80px] left-[-80px] z-10 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "rgba(124,58,237,0.18)",
          filter: "blur(70px)",
        }}
      />

      <div
        className="absolute bottom-[-80px] right-[-80px] z-10 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "rgba(236,72,153,0.16)",
          filter: "blur(70px)",
        }}
      />

      {/* Center Lightbox */}
      <div className="relative z-20 flex items-center justify-center w-full h-full px-4">
        <div
          className="w-full max-w-[460px] rounded-2xl border border-white/15 px-8 py-7 max-sm:px-5 max-sm:py-6 max-sm:rounded-xl"
          style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(14px)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.55), 0 0 40px rgba(124,58,237,0.10)",
          }}
        >
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center justify-center w-24 h-20 mb-3 max-sm:w-20 max-sm:h-16">
              <Image
                src="/assets/logos/Gichuri-Partners-logo-version-3.png"
                alt="Logo"
                width={90}
                height={90}
                className="object-contain w-full h-full"
              />
            </div>

            <h2 className="text-[1.45rem] max-sm:text-[1.25rem] font-bold text-gray-900 leading-tight tracking-tight text-center">
              Welcome Back
            </h2>

            <p className="mt-1 text-xs font-normal text-center text-gray-500">
              Sign in to access your admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <InputField
                icon={<MailIcon />}
                name="identifier"
                placeholder="Email or Username"
                value={form.identifier}
                onChange={handleChange}
              />
            </div>

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

            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-xl text-white text-sm font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #9d174d)",
                boxShadow: "0 10px 24px rgba(124,58,237,0.35)",
              }}
            >
              Login →
            </button>
          </form>

          <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-gray-500">
            <span>Don&apos;t have an account?</span>
            <Link
              href="/admin-register"
              className="font-medium transition-colors text-violet-600 hover:text-violet-500"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ icon, name, type = "text", placeholder, value, onChange }) {
  return (
    <div className="relative">
      <span className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 pointer-events-none left-3 top-1/2">
        {icon}
      </span>

      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full py-[11px] pl-10 pr-3 rounded-xl text-[0.84rem] text-gray-800 bg-gray-50 border border-gray-200 outline-none placeholder:text-gray-400 focus:border-violet-400 focus:bg-violet-50/40 focus:ring-[2px] focus:ring-violet-400/20 transition-all duration-200"
      />
    </div>
  );
}

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
      <span className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 pointer-events-none left-3 top-1/2">
        <LockIcon />
      </span>

      <input
        name={name}
        type={showPassword ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full py-[11px] pl-10 pr-10 rounded-xl text-[0.84rem] text-gray-800 bg-gray-50 border border-gray-200 outline-none placeholder:text-gray-400 focus:border-violet-400 focus:bg-violet-50/40 focus:ring-[2px] focus:ring-violet-400/20 transition-all duration-200"
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