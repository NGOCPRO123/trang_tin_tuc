"use client"
import type { ReactNode } from "react"
import { AdminMenu } from "@/components/admin/admin-menu"
import { useAuth } from "@/contexts/auth-context"
import { LoginForm } from "@/components/admin/login-form"
import { useState } from "react"
import { Menu, X, Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { LoadingPage } from "@/components/ui/loading"

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isLoading) {
    return (
      <LoadingPage 
        title="Đang kiểm tra đăng nhập..."
        subtitle="Vui lòng chờ trong giây lát"
        variant="card"
      />
    );
  }
  
  if (!isAuthenticated) return <LoginForm />;

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar desktop */}
      <div className="w-64 flex-shrink-0 border-r bg-white shadow-xl hidden lg:block">
        <AdminMenu />
      </div>
      {/* Sidebar mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Sidebar mobile */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <AdminMenu />
      </div>
      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3 lg:px-6">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Page title */}
            <div className="flex-1 lg:flex-none">
              <h1 className="text-lg font-semibold text-slate-900">Bảng điều khiển</h1>
            </div>
          </div>
        </header>
        {/* Main content area */}
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 