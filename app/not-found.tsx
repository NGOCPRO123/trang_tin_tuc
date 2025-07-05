"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800">Không tìm thấy trang</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Trang bạn đang tìm kiếm có thể đã bị di chuyển, xóa hoặc không tồn tại.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Về trang chủ
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Nếu bạn tin rằng đây là lỗi, vui lòng liên hệ với chúng tôi.</p>
        </div>
      </div>
    </div>
  )
} 