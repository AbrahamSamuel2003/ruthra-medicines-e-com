import { NextResponse } from 'next/server';
import { getAdminEmail, verifyAdminPassword, getAdminName, signAdminToken, ADMIN_COOKIE_NAME } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const trimmedEmail = String(email).trim().toLowerCase();
    const adminEmail = getAdminEmail();
    const isPasswordValid = await verifyAdminPassword(String(password));

    // Strict authentication against configured admin credentials (bcrypt or raw env)
    if (trimmedEmail === adminEmail && isPasswordValid) {
      const adminName = getAdminName();
      const token = await signAdminToken({
        email: adminEmail,
        name: adminName,
        role: 'ADMIN'
      });

      const response = NextResponse.json({
        success: true,
        user: {
          email: adminEmail,
          name: adminName,
          role: 'ADMIN'
        }
      });

      // Set secure HTTP-only session cookie
      response.cookies.set({
        name: ADMIN_COOKIE_NAME,
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { error: 'Invalid admin credentials' },
      { status: 401 }
    );
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Authentication failed' },
      { status: 500 }
    );
  }
}
