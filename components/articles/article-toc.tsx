"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  List, 
  ChevronRight,
  Hash,
  Eye,
  EyeOff
} from "lucide-react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  text: string
  level: number
  active?: boolean
}

interface ArticleTocProps {
  content: string
  className?: string
}

export function ArticleToc({ content, className }: ArticleTocProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [isVisible, setIsVisible] = useState(true)
  const [activeId, setActiveId] = useState<string>("")

  // Parse headings from content
  useEffect(() => {
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
      const id = heading.getAttribute('id') || `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
      
      return {
        id,
        text: text.trim(),
        level
      }
    })

    setTocItems(items)
  }, [content])

  // Handle scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map(item => document.getElementById(item.id)).filter(Boolean)
      
      if (headings.length === 0) return

      const scrollPosition = window.scrollY + 100

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i] as HTMLElement
        if (heading.offsetTop <= scrollPosition) {
          setActiveId(heading.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [tocItems])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      setActiveId(id)
    }
  }

  const getLevelClass = (level: number) => {
    switch (level) {
      case 1: return "font-semibold text-base"
      case 2: return "font-medium text-sm"
      case 3: return "text-sm text-muted-foreground"
      case 4: return "text-xs text-muted-foreground"
      default: return "text-xs text-muted-foreground"
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
    return null
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-sm">
            <List className="h-4 w-4" />
            Mục lục ({tocItems.length} mục)
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(!isVisible)}
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
      </CardHeader>
      
      {isVisible && (
        <CardContent className="pt-0">
          <ScrollArea className="h-[400px] w-full">
            <div className="space-y-1">
              {tocItems.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer transition-colors",
                    getLevelClass(item.level),
                    activeId === item.id && "bg-blue-50 border-l-2 border-blue-500"
                  )}
                  style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
                  onClick={() => scrollToHeading(item.id)}
                >
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-xs px-1 py-0 h-4 min-w-[20px] flex items-center justify-center",
                      activeId === item.id && "bg-blue-100 border-blue-300"
                    )}
                  >
                    {getLevelIcon(item.level)}
                  </Badge>
                  <span className="truncate flex-1">{item.text}</span>
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      )}
    </Card>
  )
} 