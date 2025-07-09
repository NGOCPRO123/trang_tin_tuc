"use client"

import { useEffect, useRef } from "react"

interface PerformanceOptimizerProps {
  children: React.ReactNode
}

export function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Lazy load images when they come into view
    const images = document.querySelectorAll('img[data-src]')
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || ''
          img.classList.remove('lazy')
          observerRef.current?.unobserve(img)
        }
      })
    })

    images.forEach((img) => {
      observerRef.current?.observe(img)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  // Preload critical resources
  useEffect(() => {
    const preloadLinks = [
      { rel: 'preload', href: '/uploads/dey24xap6oo8mj3xxf54uv2jk.png', as: 'image' },
      { rel: 'preload', href: '/logo.png', as: 'image' },
    ]

    preloadLinks.forEach(({ rel, href, as }) => {
      const link = document.createElement('link')
      link.rel = rel
      link.href = href
      if (as) link.setAttribute('as', as)
      document.head.appendChild(link)
    })
  }, [])

  return <>{children}</>
}

// Hook để tối ưu re-render
export function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const lastRunRef = useRef<number>(0)

  return ((...args: any[]) => {
    const now = Date.now()

    if (lastRunRef.current && now - lastRunRef.current < delay) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        lastRunRef.current = now
        callback(...args)
      }, delay - (now - lastRunRef.current))
    } else {
      lastRunRef.current = now
      callback(...args)
    }
  }) as T
} 