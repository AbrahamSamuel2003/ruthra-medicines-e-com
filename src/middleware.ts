import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { requireEnv } from '@/lib/env';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Protect Admin API endpoints (/api/admin/*)
  if (pathname.startsWith('/api/admin')) {
    // Whitelist login endpoint ONLY
    if (pathname === '/api/admin/auth/login') {
      return NextResponse.next();
    }

    const token = request.cookies.get('ruthra_admin_session')?.value;
    let isAuthenticated = false;

    if (token) {
      try {
        const jwtSecret = new TextEncoder().encode(requireEnv('ADMIN_JWT_SECRET', 32));
        const adminEmail = requireEnv('ADMIN_EMAIL', 5).toLowerCase();
        const { payload } = await jwtVerify(token, jwtSecret);
        if (payload.role === 'ADMIN' && typeof payload.email === 'string' && payload.email.toLowerCase() === adminEmail) {
          isAuthenticated = true;
        }
      } catch {
        isAuthenticated = false;
      }
    }

    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Admin authentication required.' },
        { status: 401 }
      );
    }
  }

  // 2. Protect Admin UI routes (/admin/*)
  if (pathname.startsWith('/admin')) {
    const isLoginPage = pathname === '/admin/login';
    const token = request.cookies.get('ruthra_admin_session')?.value;

    let isAuthenticated = false;
    if (token) {
      try {
        const jwtSecret = new TextEncoder().encode(requireEnv('ADMIN_JWT_SECRET', 32));
        const adminEmail = requireEnv('ADMIN_EMAIL', 5).toLowerCase();
        const { payload } = await jwtVerify(token, jwtSecret);
        if (payload.role === 'ADMIN' && typeof payload.email === 'string' && payload.email.toLowerCase() === adminEmail) {
          isAuthenticated = true;
        }
      } catch {
        isAuthenticated = false;
      }
    }

    // Redirect to login if unauthenticated
    if (!isAuthenticated && !isLoginPage) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Redirect to admin dashboard if already logged in and on /admin/login
    if (isAuthenticated && isLoginPage) {
      const dashboardUrl = new URL('/admin', request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  const response = NextResponse.next();

  // 3. Security response headers
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  return response;
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*']
};
