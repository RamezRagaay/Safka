import { NextResponse } from 'next/server'

export function middleware(req) {
  const { pathname } = req.nextUrl
  const role = req.cookies.get('role')?.value

  const customerRestrictedPaths = ['/supplier', '/seller']
  const sellerRestrictedPaths = ['/supplier', '/login', '/signup']
  const supplierRestrictedPaths = ['/seller', '/login', '/signup']
  if (role === 'customer' && customerRestrictedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (role === 'seller' && sellerRestrictedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/seller/dashboard', req.url))
  }

  if (role === 'supplier' && supplierRestrictedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/supplier/dashboard', req.url))
  }
  if((role === 'supplier' || role === 'seller') && pathname === '') {
    return NextResponse.redirect(new URL(`/${role}/dashboard`, req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/supplier/:path*',
    '/seller/:path*',
  ]
}
