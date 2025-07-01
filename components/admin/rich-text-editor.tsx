"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Link,
  ImageIcon,
  Code,
  Heading1,
  Heading2,
  Heading3,
} from "lucide-react"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const [selectedText, setSelectedText] = useState("")

  const insertMarkdown = (before: string, after = "") => {
    const textarea = document.getElementById("content-editor") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)

    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end)
    onChange(newText)

    // Restore cursor position
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
    }, 0)
  }

  const toolbarButtons = [
    { icon: Bold, action: () => insertMarkdown("**", "**"), title: "Bold" },
    { icon: Italic, action: () => insertMarkdown("*", "*"), title: "Italic" },
    { icon: Underline, action: () => insertMarkdown("<u>", "</u>"), title: "Underline" },
    { type: "separator" },
    { icon: Heading1, action: () => insertMarkdown("# "), title: "Heading 1" },
    { icon: Heading2, action: () => insertMarkdown("## "), title: "Heading 2" },
    { icon: Heading3, action: () => insertMarkdown("### "), title: "Heading 3" },
    { type: "separator" },
    { icon: List, action: () => insertMarkdown("- "), title: "Bullet List" },
    { icon: ListOrdered, action: () => insertMarkdown("1. "), title: "Numbered List" },
    { icon: Quote, action: () => insertMarkdown("> "), title: "Quote" },
    { type: "separator" },
    { icon: Link, action: () => insertMarkdown("[", "](url)"), title: "Link" },
    { icon: ImageIcon, action: () => insertMarkdown("![alt text](", ")"), title: "Image" },
    { icon: Code, action: () => insertMarkdown("`", "`"), title: "Inline Code" },
  ]

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b p-2 flex items-center gap-1 flex-wrap">
        {toolbarButtons.map((button, index) =>
          button.type === "separator" ? (
            <Separator key={index} orientation="vertical" className="h-6 mx-1" />
          ) : (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={button.action}
              title={button.title}
              className="h-8 w-8 p-0"
            >
              {button.icon && <button.icon className="h-4 w-4" />}
            </Button>
          ),
        )}
      </div>

      {/* Editor */}
      <textarea
        id="content-editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full min-h-[400px] p-4 resize-none focus:outline-none font-mono text-sm"
        style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace' }}
      />

      {/* Status Bar */}
      <div className="bg-gray-50 border-t px-4 py-2 text-xs text-gray-500 flex justify-between">
        <span>Hỗ trợ Markdown</span>
        <span>{value.length} ký tự</span>
      </div>
    </div>
  )
}
