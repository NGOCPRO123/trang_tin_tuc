"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

interface ProtectedAdminProps {
  children: React.ReactNode
}

export function ProtectedAdmin({ children }: ProtectedAdminProps) {
  const router = useRouter()
  const isAdmin = true // Replace with actual admin check logic

  useEffect(() => {
    if (!isAdmin) {
      router.push("/login")
    }
  }, [router, isAdmin])

  if (!isAdmin) {
    return null // Or a loading indicator
  }

  return <>{children}</>
}
