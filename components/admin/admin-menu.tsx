"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar"
import { 
  FileText, 
  Folder, 
  ImageIcon, 
  BarChart2, 
  LogOut, 
  LayoutDashboard,
  Home,
  Users,
  Settings,
  ChevronRight
} from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AdminMenu() {
  const { logout } = useAuth();
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/admin",
      icon: LayoutDashboard,
      label: "Dashboard",
      description: "Tổng quan hệ thống"
    },
    {
      href: "/admin/articles",
      icon: FileText,
      label: "Quản lý bài viết",
      description: "Thêm, sửa, xóa bài viết",
      badge: "12"
    },
    {
      href: "/admin/categories",
      icon: Folder,
      label: "Danh mục",
      description: "Quản lý danh mục tin tức"
    },
    {
      href: "/admin/media",
      icon: ImageIcon,
      label: "Media",
      description: "Quản lý hình ảnh, video"
    },
    {
      href: "/admin/seo",
      icon: BarChart2,
      label: "SEO",
      description: "Tối ưu hóa tìm kiếm"
    }
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(href);
  };

  return (
    <SidebarProvider>
      <Sidebar className="bg-white border-r border-slate-200 min-h-screen shadow-sm">
        {/* Logo and Brand */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Admin Panel</h1>
              <p className="text-xs text-slate-500">Quản trị hệ thống</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                  active
                    ? 'bg-blue-50 border border-blue-200 text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  active ? 'bg-blue-100' : 'bg-slate-100 group-hover:bg-slate-200'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    active ? 'text-blue-600' : 'text-slate-500'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`font-medium text-sm ${
                      active ? 'text-blue-700' : 'text-slate-700'
                    }`}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <p className={`text-xs mt-0.5 ${
                    active ? 'text-blue-600' : 'text-slate-500'
                  }`}>
                    {item.description}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  active ? 'text-blue-600 rotate-90' : 'text-slate-400'
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 space-y-3">
          {/* Quick Stats */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600">Bài viết hôm nay</span>
              <span className="font-semibold text-blue-600">5</span>
            </div>
            <div className="flex items-center justify-between text-xs mt-1">
              <span className="text-slate-600">Lượt xem</span>
              <span className="font-semibold text-green-600">1.2k</span>
            </div>
          </div>

          {/* Logout Button */}
          <Button
            variant="ghost"
            onClick={logout}
            className="w-full justify-start gap-3 px-3 py-3 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl"
          >
            <div className="p-2 rounded-lg bg-red-100">
              <LogOut className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-medium text-sm">Đăng xuất</span>
              <p className="text-xs text-red-500">Thoát khỏi hệ thống</p>
            </div>
          </Button>
        </div>
      </Sidebar>
    </SidebarProvider>
  )
} 