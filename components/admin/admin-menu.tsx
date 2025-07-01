"use client"

import Link from "next/link"
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar"
import { FileText, Folder, ImageIcon, BarChart2, LogOut, LayoutDashboard } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export function AdminMenu() {
  const { logout } = useAuth();
  return (
    <SidebarProvider>
      <Sidebar className="bg-white border-r min-h-screen shadow-sm">
        <nav className="flex flex-col gap-2 p-4">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 font-medium text-gray-800">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link href="/admin/articles" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 font-medium text-gray-800">
            <FileText className="w-5 h-5" />
            Quản lý bài viết
          </Link>
          <Link href="/admin/categories" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 font-medium text-gray-800">
            <Folder className="w-5 h-5" />
            Danh mục
          </Link>
          <Link href="/admin/media" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 font-medium text-gray-800">
            <ImageIcon className="w-5 h-5" />
            Media
          </Link>
          <Link href="/admin/seo" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 font-medium text-gray-800">
            <BarChart2 className="w-5 h-5" />
            SEO
          </Link>
          <button
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 font-medium text-red-600 mt-4"
            onClick={logout}
          >
            <LogOut className="w-5 h-5" />
            Đăng xuất
          </button>
        </nav>
      </Sidebar>
    </SidebarProvider>
  )
} 