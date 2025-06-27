import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ArticleProvider } from "@/contexts/article-context"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tin Tức VN - Quản lý tin tức",
  description: "Hệ thống quản lý tin tức với admin panel",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={inter.className}>
      <body>
        <ArticleProvider>{children}</ArticleProvider>
        <Toaster />
      </body>
    </html>
  )
}
