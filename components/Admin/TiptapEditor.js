"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useState } from "react";

export default function TiptapEditor({ value, onChange }) {
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [htmlValue, setHtmlValue] = useState(value || "");

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
          "ProseMirror min-h-[300px] rounded-b-lg border border-t-0 p-4 outline-none bg-white max-w-none [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 [&_li]:mb-1",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setHtmlValue(html);
      onChange(html);
    },
  });

  useEffect(() => {
    if (!editor) return;
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
      setHtmlValue(value || "");
    }
  }, [value, editor]);

  const handleHtmlChange = (e) => {
    const newHtml = e.target.value;
    setHtmlValue(newHtml);
    onChange(newHtml);
  };

  const applyHtmlToEditor = () => {
    if (!editor) return;
    editor.commands.setContent(htmlValue || "");
    onChange(htmlValue || "");
  };

  if (!editor) return null;

  return (
    <div className="overflow-visible rounded-lg border bg-white">
      <div className="sticky top-0 z-20 flex flex-wrap gap-2 border-b bg-gray-50 p-3 rounded-t-lg shadow-sm">
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

        <button
          type="button"
          onClick={() => {
            if (isHtmlMode) applyHtmlToEditor();
            setIsHtmlMode(!isHtmlMode);
          }}
          className={`px-3 py-1 text-sm border rounded ${
            isHtmlMode ? "bg-[#274A9A] text-white" : "bg-white"
          }`}
        >
          {isHtmlMode ? "Visual Mode" : "HTML Mode"}
        </button>
      </div>

      <div className="bg-white">
        {isHtmlMode ? (
          <div className="p-4">
            <textarea
              value={htmlValue}
              onChange={handleHtmlChange}
              className="w-full min-h-[300px] rounded-lg border p-4 outline-none font-mono text-sm"
            />
            <div className="mt-3">
              <button
                type="button"
                onClick={applyHtmlToEditor}
                className="px-4 py-2 rounded bg-[#274A9A] text-white text-sm"
              >
                Apply HTML
              </button>
            </div>
          </div>
        ) : (
          <EditorContent editor={editor} />
        )}
      </div>
    </div>
  );
}