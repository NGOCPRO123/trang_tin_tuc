"use client"
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import { Extension } from '@tiptap/core'
import { Bold, Italic, Underline as UnderlineIcon, List, ListOrdered, Quote, Link as LinkIcon, ImageIcon, Code, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, AlignLeft, AlignCenter, AlignRight, Highlighter, Upload } from "lucide-react"
import { ImagePicker } from './image-picker'
import { useToast } from '@/hooks/use-toast'

// Custom extension to add IDs to headings
const HeadingWithId = Extension.create({
  name: 'headingWithId',
  
  addGlobalAttributes() {
    return [
      {
        types: ['heading'],
        attributes: {
          id: {
            default: null,
            parseHTML: (element: HTMLElement) => element.getAttribute('id'),
            renderHTML: (attributes: any) => {
              if (!attributes.id) {
                const text = attributes.content || ''
                attributes.id = `heading-${Date.now()}-${text.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
              }
              return {
                id: attributes.id
              }
            }
          }
        }
      }
    ]
  }
})

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const { toast } = useToast()
  
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6]
        }
      }),
      HeadingWithId,
      Link,
      Image,
      Underline,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: placeholder || "Nhập nội dung..." })
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "min-h-[300px] p-4 outline-none bg-white text-slate-900 rounded-b-lg prose prose-lg max-w-none"
      }
    }
  })

  if (!editor) return <div className="min-h-[300px] bg-white rounded-lg border-2 border-slate-200" />

  return (
    <div className="border-2 border-slate-200 rounded-lg bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-slate-50 rounded-t-lg">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'text-blue-600 font-bold' : ''} title="In đậm"><Bold className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'text-blue-600 font-bold' : ''} title="In nghiêng"><Italic className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive('underline') ? 'text-blue-600 font-bold' : ''} title="Gạch chân"><UnderlineIcon className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? 'text-yellow-500 font-bold' : ''} title="Highlight"><Highlighter className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'text-blue-600 font-bold' : ''} title="Heading 1"><Heading1 className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'text-blue-600 font-bold' : ''} title="Heading 2"><Heading2 className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'text-blue-600 font-bold' : ''} title="Heading 3"><Heading3 className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} className={editor.isActive('heading', { level: 4 }) ? 'text-blue-600 font-bold' : ''} title="Heading 4"><Heading4 className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()} className={editor.isActive('heading', { level: 5 }) ? 'text-blue-600 font-bold' : ''} title="Heading 5"><Heading5 className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()} className={editor.isActive('heading', { level: 6 }) ? 'text-blue-600 font-bold' : ''} title="Heading 6"><Heading6 className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'text-blue-600 font-bold' : ''} title="Danh sách chấm"><List className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'text-blue-600 font-bold' : ''} title="Danh sách số"><ListOrdered className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'text-blue-600 font-bold' : ''} title="Trích dẫn"><Quote className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().toggleCode().run()} className={editor.isActive('code') ? 'text-blue-600 font-bold' : ''} title="Code"><Code className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'text-blue-600 font-bold' : ''} title="Căn trái"><AlignLeft className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'text-blue-600 font-bold' : ''} title="Căn giữa"><AlignCenter className="h-4 w-4" /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'text-blue-600 font-bold' : ''} title="Căn phải"><AlignRight className="h-4 w-4" /></button>
        <button onClick={() => {
          const url = prompt('Nhập URL:');
          if (url) editor.chain().focus().setLink({ href: url }).run();
        }} className={editor.isActive('link') ? 'text-blue-600 font-bold' : ''} title="Chèn link"><LinkIcon className="h-4 w-4" /></button>
        <button onClick={() => {
          const url = prompt('Nhập URL ảnh:');
          if (url) editor.chain().focus().setImage({ src: url }).run();
        }} title="Chèn ảnh từ URL"><ImageIcon className="h-4 w-4" /></button>
        <ImagePicker 
          onImageSelect={(imageUrl) => {
            editor.chain().focus().setImage({ src: imageUrl }).run();
            toast({
              title: "Thành công!",
              description: "Đã chèn ảnh vào bài viết",
              duration: 2000,
            })
          }}
          trigger={
            <button title="Chọn ảnh từ máy tính">
              <Upload className="h-4 w-4" />
            </button>
          }
        />
      </div>
      <EditorContent editor={editor} />
    </div>
  )
}
