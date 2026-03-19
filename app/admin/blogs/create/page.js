"use client";

import { useState } from "react";

export default function CreateBlogPage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "",
    category: "",
    author: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Blog created");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Create Blog</h1>

        <input name="title" placeholder="Title" onChange={handleChange} className="w-full p-3 border rounded" />
        <input name="slug" placeholder="Slug" onChange={handleChange} className="w-full p-3 border rounded" />
        <input name="excerpt" placeholder="Excerpt" onChange={handleChange} className="w-full p-3 border rounded" />
        <input name="image" placeholder="Image URL" onChange={handleChange} className="w-full p-3 border rounded" />
        <input name="category" placeholder="Category" onChange={handleChange} className="w-full p-3 border rounded" />
        <input name="author" placeholder="Author" onChange={handleChange} className="w-full p-3 border rounded" />

        <textarea
          name="content"
          placeholder="Blog content"
          rows={10}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <button className="px-6 py-3 text-white bg-green-600 rounded">
          Publish Blog
        </button>
      </form>
    </div>
  );
}