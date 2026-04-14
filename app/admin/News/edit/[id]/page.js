"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import TiptapEditor from "@/components/Admin/TiptapEditor";

export default function EditNewMediaPage() {
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
    category: "Company News",
    author: "",
    published: true,
    image: null,
  });

  const getImageUrl = (image) => {
    if (!image) return "";
    if (image.startsWith("http")) return image;
    return `${SERVER_URL}${image}`;
  };

  // ✅ FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_URL}/newmedia`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (data.success) {
          const found = data.data.find((item) => item._id === id);

          if (!found) {
            alert("Data not found");
            router.push("/admin/newmedia");
            return;
          }

          setForm({
            title: found.title || "",
            excerpt: found.excerpt || "",
            content: found.content || "",
            category: found.category || "Company News",
            author: found.author || "",
            published: found.published ?? true,
            image: null,
          });

          setCurrentImage(found.image || "");
        } else {
          alert(data.message || "Failed to fetch data");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
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

  // ✅ UPDATE
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

      const res = await fetch(`${API_URL}/newmedia/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Updated successfully");
        router.push("/admin/newmedia");
      } else {
        alert(data.message || "Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl p-6 mx-auto bg-white shadow rounded-2xl">
      <h1 className="mb-6 text-2xl font-bold text-[#274A9A]">
        Edit New Media
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        {/* Excerpt */}
        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        {/* Category Dropdown */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        >
          <option value="Company News">Company News</option>
          <option value="Press Release">Press Release</option>
        </select>

        {/* Author */}
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        {/* Content */}
        <TiptapEditor value={form.content} onChange={handleContentChange} />

        {/* Current Image */}
        {currentImage && (
          <img
            src={getImageUrl(currentImage)}
            className="object-cover w-32 h-32 rounded"
          />
        )}

        {/* Change Image */}
        <input type="file" name="image" onChange={handleChange} />

        {/* Published */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="published"
            checked={form.published}
            onChange={handleChange}
          />
          Published
        </label>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-3 text-white bg-[#274A9A] rounded-lg"
          >
            {submitting ? "Updating..." : "Update"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/admin/newmedia")}
            className="px-5 py-3 bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}