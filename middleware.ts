import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect từ /bai-viet/[id] sang /[slug]
  if (pathname.startsWith('/bai-viet/')) {
    const slug = pathname.replace('/bai-viet/', '')
    return NextResponse.redirect(new URL(`/${slug}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/bai-viet/:path*',
  ],
} 