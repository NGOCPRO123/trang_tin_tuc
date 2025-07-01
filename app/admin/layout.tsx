"use client"
import type { ReactNode } from "react"
import { AdminMenu } from "@/components/admin/admin-menu"
import { useAuth } from "@/contexts/auth-context"
import { LoginForm } from "@/components/admin/login-form"

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Đang kiểm tra đăng nhập...</div>;
  if (!isAuthenticated) return <LoginForm />;
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-64">
        <AdminMenu />
      </div>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
} 