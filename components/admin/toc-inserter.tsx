"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  List, 
  Plus, 
  Copy, 
  Check,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

interface TocInserterProps {
  content: string
  onInsert: (tocHtml: string) => void
  className?: string
}

interface TocItem {
  id: string
  text: string
  level: number
}

export function TocInserter({ content, onInsert, className }: TocInserterProps) {
  const [copied, setCopied] = useState(false)
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const idCounter = useRef(0)

  // Parse headings from content
  const parseHeadings = () => {
    if (!content) {
      setTocItems([])
      return
    }

    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6')
    
    const items: TocItem[] = Array.from(headings).map((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1))
      const text = heading.textContent || ''
      const existingId = heading.getAttribute('id')
      
      // Generate unique ID if no existing ID
      let id = existingId
      if (!id) {
        idCounter.current += 1
        const uniqueId = `heading-${idCounter.current}-${index}-${text.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
        id = uniqueId
      }
      
      return {
        id,
        text: text.trim(),
        level
      }
    })

    setTocItems(items)
  }

  // Generate TOC HTML
  const generateTocHtml = () => {
    if (tocItems.length === 0) return ""

    const tocHtml = `
<div class="table-of-contents bg-gray-50 border border-gray-200 rounded-lg p-4 my-6">
  <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
    </svg>
    Mục lục
  </h3>
  <ul class="space-y-1">
    ${tocItems.map(item => {
      const indent = (item.level - 1) * 16
      return `
        <li class="toc-item" style="padding-left: ${indent}px;">
          <a href="#${item.id}" class="toc-link text-blue-600 hover:text-blue-800 hover:underline transition-colors">
            ${item.text}
          </a>
        </li>
      `
    }).join('')}
  </ul>
</div>
    `.trim()

    return tocHtml
  }

  // Insert TOC into content
  const insertToc = () => {
    const tocHtml = generateTocHtml()
    if (!tocHtml) return

    // Find the first heading in the content
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const firstHeading = doc.querySelector('h1, h2, h3, h4, h5, h6')
    
    if (firstHeading) {
      // Insert TOC before the first heading
      firstHeading.insertAdjacentHTML('beforebegin', tocHtml)
      const newContent = doc.body.innerHTML
      onInsert(newContent)
    } else {
      // If no headings, insert at the beginning
      const newContent = tocHtml + content
      onInsert(newContent)
    }
  }

  // Copy TOC HTML to clipboard
  const copyTocHtml = () => {
    const tocHtml = generateTocHtml()
    if (!tocHtml) return

    navigator.clipboard.writeText(tocHtml).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // Parse headings when content changes
  useEffect(() => {
    parseHeadings()
  }, [content])

  if (tocItems.length === 0) {
    return (
      <Card className={cn("w-full", className)}>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm">
            <List className="h-4 w-4" />
            Chèn mục lục
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <AlertCircle className="h-4 w-4" />
            <span>Chưa có tiêu đề nào trong nội dung</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm">
          <List className="h-4 w-4" />
          Chèn mục lục ({tocItems.length} mục)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          {tocItems.slice(0, 5).map((item, index) => (
            <div
              key={item.id + '-' + index}
              className="flex items-center gap-2 text-sm"
              style={{ paddingLeft: `${(item.level - 1) * 8}px` }}
            >
              <Badge variant="outline" className="text-xs">
                H{item.level}
              </Badge>
              <span className="truncate">{item.text}</span>
            </div>
          ))}
          {tocItems.length > 5 && (
            <div className="text-xs text-muted-foreground">
              ... và {tocItems.length - 5} mục khác
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={insertToc}
            className="flex-1"
          >
            <Plus className="h-4 w-4 mr-2" />
            Chèn vào bài viết
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={copyTocHtml}
            className="h-8 w-8 p-0"
            title="Sao chép HTML mục lục"
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-600" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 