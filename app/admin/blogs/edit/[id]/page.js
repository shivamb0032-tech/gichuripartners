"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import TiptapEditor from "@/components/Admin/TiptapEditor";

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const SERVER_URL = API_URL.replace("/api", "");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "",
    published: true,
    image: null,
  });

  const getImageUrl = (image) => {
    if (!image) return "";

    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image; // Cloudinary image
    }

    return `${SERVER_URL}${image}`; // old local image
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_URL}/blogs`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (data.success) {
          const foundBlog = data.blogs.find((item) => item._id === id);

          if (!foundBlog) {
            alert("Blog not found");
            router.push("/admin/blogs");
            return;
          }

          setForm({
            title: foundBlog.title || "",
            excerpt: foundBlog.excerpt || "",
            content: foundBlog.content || "",
            category: foundBlog.category || "",
            author: foundBlog.author || "",
            published: foundBlog.published ?? true,
            image: null,
          });

          setCurrentImage(foundBlog.image || "");
        } else {
          alert(data.message || "Failed to fetch blog");
        }
      } catch (error) {
        console.error("Fetch blog error:", error);
        alert("Something went wrong while fetching blog");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id, API_URL, router]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
      return;
    }

    if (type === "file") {
      setForm((prev) => ({
        ...prev,
        image: files?.[0] || null,
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContentChange = (html) => {
    setForm((prev) => ({
      ...prev,
      content: html,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken");

    if (!token) {
      alert("Please login first");
      return;
    }

    if (!form.title || !form.excerpt || !form.content) {
      alert("Title, excerpt and content are required");
      return;
    }

    try {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("excerpt", form.excerpt);
      formData.append("content", form.content);
      formData.append("category", form.category);
      formData.append("author", form.author);
      formData.append("published", String(form.published));

      if (form.image) {
        formData.append("image", form.image);
      }

      const res = await fetch(`${API_URL}/blogs/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Blog updated successfully");
        router.push("/admin/blogs");
      } else {
        alert(data.message || "Failed to update blog");
      }
    } catch (error) {
      console.error("Update blog error:", error);
      alert("Something went wrong while updating blog");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <p className="text-sm font-medium text-gray-500">Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl p-6 mx-auto bg-white shadow rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#274A9A]">Edit Blog</h1>

        <button
          type="button"
          onClick={() => router.push("/admin/blogs")}
          className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-xl"
        >
          Back
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-3 border outline-none rounded-xl"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border outline-none rounded-xl"
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border outline-none rounded-xl"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              className="w-full px-4 py-3 border outline-none rounded-xl"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Content
          </label>

          <div className="overflow-hidden border rounded-xl">
            <TiptapEditor value={form.content} onChange={handleContentChange} />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Current Image
          </label>

          {currentImage ? (
            <img
              src={getImageUrl(currentImage)}
              alt="Current blog"
              className="object-cover w-32 h-32 border rounded-xl"
            />
          ) : (
            <p className="text-sm text-gray-400">No image uploaded</p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Change Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-4 py-3 border outline-none rounded-xl"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            id="published"
            type="checkbox"
            name="published"
            checked={form.published}
            onChange={handleChange}
          />
          <label
            htmlFor="published"
            className="text-sm font-medium text-gray-700"
          >
            Published
          </label>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 text-sm font-semibold text-white rounded-xl bg-[#274A9A] hover:opacity-90 disabled:opacity-50"
          >
            {submitting ? "Updating..." : "Update Blog"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/admin/blogs")}
            className="px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}