import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from 'next/font/google'
import { ArticleProvider } from "@/contexts/article-context"
import { AuthProvider } from "@/contexts/auth-context"
import "./globals.css"
import "@/styles/toc.css"
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

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
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <AuthProvider>
          <ArticleProvider>{children}</ArticleProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
