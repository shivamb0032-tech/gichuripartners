"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";

export default function TiptapEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write your blog content here...",
      }),
    ],
    content: value || "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "min-h-[250px] rounded-b-lg border border-t-0 p-4 outline-none prose max-w-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="overflow-hidden bg-white rounded-lg">
      <div className="flex flex-wrap gap-2 p-3 border rounded-t-lg bg-gray-50">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded border text-sm ${
            editor.isActive("bold") ? "bg-[#274A9A] text-white" : "bg-white"
          }`}
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded border text-sm ${
            editor.isActive("italic") ? "bg-[#274A9A] text-white" : "bg-white"
          }`}
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1 rounded border text-sm ${
            editor.isActive("heading", { level: 2 })
              ? "bg-[#274A9A] text-white"
              : "bg-white"
          }`}
        >
          H2
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-3 py-1 rounded border text-sm ${
            editor.isActive("heading", { level: 3 })
              ? "bg-[#274A9A] text-white"
              : "bg-white"
          }`}
        >
          H3
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded border text-sm ${
            editor.isActive("bulletList") ? "bg-[#274A9A] text-white" : "bg-white"
          }`}
        >
          Bullet List
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1 rounded border text-sm ${
            editor.isActive("orderedList") ? "bg-[#274A9A] text-white" : "bg-white"
          }`}
        >
          Number List
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-1 rounded border text-sm ${
            editor.isActive("blockquote") ? "bg-[#274A9A] text-white" : "bg-white"
          }`}
        >
          Quote
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          className="px-3 py-1 text-sm bg-white border rounded"
        >
          Undo
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          className="px-3 py-1 text-sm bg-white border rounded"
        >
          Redo
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}