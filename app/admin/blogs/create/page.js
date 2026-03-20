"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TiptapEditor from "@/components/Admin/TiptapEditor";

export default function CreateBlogPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
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
      formData.append("published", form.published);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Blog added successfully");
        router.push("/admin/blogs");
      } else {
        alert(data.message || "Failed to add blog");
      }
    } catch (error) {
      console.error("Create blog error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl p-6 bg-white shadow rounded-2xl">
        <h1 className="mb-6 text-2xl font-bold text-[#274A9A]">Add New Blog</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none"
              placeholder="Enter blog title"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Excerpt
            </label>
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none min-h-[100px]"
              placeholder="Enter short excerpt"
              required
            />
          </div>

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

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border rounded-lg outline-none"
            />

            {preview && (
              <div className="mt-3">
                <img
                  src={preview}
                  alt="Preview"
                  className="object-cover w-40 border rounded-lg h-28"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none"
              placeholder="Enter category"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none"
              placeholder="Enter author name"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="published"
              type="checkbox"
              name="published"
              checked={form.published}
              onChange={handleChange}
            />
            <label htmlFor="published" className="text-sm font-medium text-gray-700">
              Published
            </label>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-3 text-white rounded-lg bg-[#274A9A] hover:bg-[#1f3b7d] disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Blog"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/blogs")}
              className="px-5 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}