"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TiptapEditor from "@/components/Admin/TiptapEditor";

export default function CreateNewMediaPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Company News", // default
    author: "Admin",
    published: true,
  });

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("excerpt", form.excerpt);
      formData.append("content", form.content);
      formData.append("category", form.category);
      formData.append("author", form.author);
      formData.append("published", String(form.published));

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newmedia`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("New Media added successfully");
        router.push("/admin/News");
      } else {
        alert(data.message || "Failed to add data");
      }
    } catch (error) {
      console.error("Create error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl p-6 bg-white shadow rounded-2xl">
        <h1 className="mb-6 text-2xl font-bold text-[#274A9A]">
          Add New Media
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Excerpt
            </label>
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg min-h-[100px]"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Content
            </label>
            <TiptapEditor
              value={form.content}
              onChange={(html) =>
                setForm((prev) => ({
                  ...prev,
                  content: html,
                }))
              }
            />
          </div>

          {/* Image */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Upload Image
            </label>
            <input type="file" accept="image/*" onChange={handleImageChange} />

            {preview && (
              <img
                src={preview}
                className="object-cover w-40 mt-3 border rounded-lg h-28"
              />
            )}
          </div>

          {/* ✅ CATEGORY DROPDOWN */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="Company News">Company News</option>
              <option value="Press Release">Press Release</option>
            </select>
          </div>

          {/* Author */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Published */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="published"
              checked={form.published}
              onChange={handleChange}
            />
            <label className="text-sm">Published</label>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-3 text-white bg-[#274A9A] rounded-lg"
            >
              {loading ? "Saving..." : "Save"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/News")}
              className="px-5 py-3 bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}