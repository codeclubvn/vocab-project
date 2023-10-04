import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { checkExistToken } from './helpers/handleCookie';


export async function middleware(request: NextRequest) {
  const check: boolean = checkExistToken(request.cookies.toString());

  if (check) {
    try {
      return NextResponse.next()
    } catch (err) {
      // If the token is not valid, redirect to /login
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.rewrite(url)
    }
  } else {
    // If no token is provided, redirect to /login
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: '/about/:path*', // Update this to match the routes you want the middleware to apply to
}


