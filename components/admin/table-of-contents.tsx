"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  List, 
  Eye, 
  EyeOff, 
  Copy, 
  Check,
  ChevronRight,
  Hash
} from "lucide-react"
import { cn } from "@/lib/utils"

interface TableOfContentsItem {
  id: string
  text: string
  level: number
  active?: boolean
}

interface TableOfContentsProps {
  content: string
  onToggle?: (visible: boolean) => void
  className?: string
}

export function TableOfContents({ content, onToggle, className }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TableOfContentsItem[]>([])
  const [isVisible, setIsVisible] = useState(true)
  const [copied, setCopied] = useState(false)

  // Parse headings from content
  useEffect(() => {
    if (!content) {
      setTocItems([])
      return
    }

    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6')
    
    const items: TableOfContentsItem[] = Array.from(headings).map((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1))
      const text = heading.textContent || ''
      const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
      
      return {
        id,
        text: text.trim(),
        level
      }
    })

    setTocItems(items)
  }, [content])

  const toggleVisibility = () => {
    const newVisible = !isVisible
    setIsVisible(newVisible)
    onToggle?.(newVisible)
  }

  const copyTocHtml = () => {
    if (tocItems.length === 0) return

    const tocHtml = `
<div class="table-of-contents">
  <h3 class="toc-title">Mục lục</h3>
  <ul class="toc-list">
    ${tocItems.map(item => `
      <li class="toc-item toc-level-${item.level}">
        <a href="#${item.id}" class="toc-link">${item.text}</a>
      </li>
    `).join('')}
  </ul>
</div>
    `.trim()

    navigator.clipboard.writeText(tocHtml).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const getLevelClass = (level: number) => {
    switch (level) {
      case 1: return "font-semibold text-base"
      case 2: return "font-medium text-sm ml-2"
      case 3: return "text-sm ml-4 text-muted-foreground"
      case 4: return "text-xs ml-6 text-muted-foreground"
      default: return "text-xs ml-8 text-muted-foreground"
    }
  }

  const getLevelIcon = (level: number) => {
    switch (level) {
      case 1: return "H1"
      case 2: return "H2"
      case 3: return "H3"
      case 4: return "H4"
      case 5: return "H5"
      case 6: return "H6"
      default: return "•"
    }
  }

  if (tocItems.length === 0) {
    return (
      <Card className={cn("w-full", className)}>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm">
            <List className="h-4 w-4" />
            Mục lục
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center py-4">
            Chưa có tiêu đề nào được tạo. 
            <br />
            Sử dụng H1, H2, H3 trong trình soạn thảo để tạo mục lục.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-sm">
            <List className="h-4 w-4" />
            Mục lục ({tocItems.length} mục)
          </CardTitle>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={copyTocHtml}
              className="h-6 w-6 p-0"
              title="Sao chép HTML mục lục"
            >
              {copied ? (
                <Check className="h-3 w-3 text-green-600" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleVisibility}
              className="h-6 w-6 p-0"
              title={isVisible ? "Ẩn mục lục" : "Hiện mục lục"}
            >
              {isVisible ? (
                <EyeOff className="h-3 w-3" />
              ) : (
                <Eye className="h-3 w-3" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {isVisible && (
        <CardContent className="pt-0">
          <ScrollArea className="h-[300px] w-full">
            <div className="space-y-1">
              {tocItems.map((item, index) => (
                <div
                  key={item.id}
                  className={cn(
                    "flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer transition-colors",
                    getLevelClass(item.level)
                  )}
                  style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
                >
                  <Badge 
                    variant="outline" 
                    className="text-xs px-1 py-0 h-4 min-w-[20px] flex items-center justify-center"
                  >
                    {getLevelIcon(item.level)}
                  </Badge>
                  <span className="truncate flex-1">{item.text}</span>
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="mt-3 pt-3 border-t">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Mức độ tiêu đề:</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5, 6].map(level => {
                  const count = tocItems.filter(item => item.level === level).length
                  if (count === 0) return null
                  return (
                    <Badge key={level} variant="secondary" className="text-xs">
                      H{level}: {count}
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
} 