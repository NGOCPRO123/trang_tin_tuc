import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "@/styles/toc.css"
import { Toaster } from "@/components/ui/toaster"
import { ArticleProvider } from "@/contexts/article-context"
import { AuthProvider } from "@/contexts/auth-context"

export const metadata: Metadata = {
  title: "Tin Tức ACTA - Quản lý tin tức",
  description: "Hệ thống quản lý tin tức với admin panel",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="font-publicsans" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          <ArticleProvider>{children}</ArticleProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
