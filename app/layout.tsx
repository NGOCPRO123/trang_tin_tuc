import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ArticleProvider } from "@/contexts/article-context"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="vi" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ArticleProvider>{children}</ArticleProvider>
        <Toaster />
      </body>
    </html>
  )
}
