"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link, Plus, X, ExternalLink } from "lucide-react"

interface InternalLinkManagerProps {
  category: string
  onLinksChange: (links: string[]) => void
}

export function InternalLinkManager({ category, onLinksChange }: InternalLinkManagerProps) {
  const [currentLink, setCurrentLink] = useState("")
  const [links, setLinks] = useState<string[]>([])

  // Mock related articles
  const suggestedLinks = [
    { title: "Bài viết liên quan 1", url: "/bai-viet-lien-quan-1" },
    { title: "Bài viết liên quan 2", url: "/bai-viet-lien-quan-2" },
    { title: "Bài viết liên quan 3", url: "/bai-viet-lien-quan-3" },
  ]

  const addLink = (url: string) => {
    if (url && !links.includes(url)) {
      const newLinks = [...links, url]
      setLinks(newLinks)
      onLinksChange(newLinks)
      setCurrentLink("")
    }
  }

  const removeLink = (url: string) => {
    const newLinks = links.filter((link) => link !== url)
    setLinks(newLinks)
    onLinksChange(newLinks)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5" />
          Quản lý Internal Link
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Manual Link Input */}
        <div>
          <Label htmlFor="manualLink">Thêm link thủ công</Label>
          <div className="flex gap-2">
            <Input
              id="manualLink"
              value={currentLink}
              onChange={(e) => setCurrentLink(e.target.value)}
              placeholder="/duong-dan-bai-viet"
            />
            <Button type="button" variant="outline" onClick={() => addLink(currentLink)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Suggested Links */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Bài viết gợi ý (cùng chuyên mục)</Label>
          <div className="space-y-2">
            {suggestedLinks.map((article, index) => (
              <div key={index} className="flex items-center justify-between p-2 border rounded">
                <div>
                  <p className="text-sm font-medium">{article.title}</p>
                  <p className="text-xs text-gray-500">{article.url}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => addLink(article.url)}
                  disabled={links.includes(article.url)}
                >
                  {links.includes(article.url) ? "Đã thêm" : "Thêm"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Current Links */}
        {links.length > 0 && (
          <div>
            <Label className="text-sm font-medium mb-2 block">Internal Links đã thêm</Label>
            <div className="space-y-2">
              {links.map((link, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{link}</span>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => removeLink(link)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Guidelines */}
        <div className="bg-green-50 p-3 rounded-lg">
          <h4 className="text-sm font-medium text-green-900 mb-2">Yêu cầu Internal Link:</h4>
          <ul className="text-xs text-green-800 space-y-1">
            <li>• 1 link của chính bài đang viết</li>
            <li>• 1-2 link cùng chuyên mục ({category})</li>
            <li>• 3 link bài viết liên quan ở cuối bài</li>
            <li>• Không được tự ý chèn external link</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
