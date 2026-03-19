"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-md p-6 bg-white rounded-xl" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-xl font-bold">Login</h2>

        <input
          name="identifier"
          placeholder="Email or Username"
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
        />

        <button className="w-full p-3 text-white bg-green-600 rounded">
          Login
        </button>
      </form>
    </div>
  );
}