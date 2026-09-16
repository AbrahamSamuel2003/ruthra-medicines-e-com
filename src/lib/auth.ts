import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export const ADMIN_CREDENTIALS = {
  email: 'admin1234@gmail.com',
  password: 'admin1234',
  name: 'Ruthra Master Admin'
};

const JWT_SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'ruthra-siddha-secret-admin-key-tirunelveli-2026-authenticated'
);

export const ADMIN_COOKIE_NAME = 'ruthra_admin_session';

export interface AdminSessionPayload {
  email: string;
  name: string;
  role: 'ADMIN';
  iat?: number;
  exp?: number;
}

/**
 * Sign JWT session token for Admin
 */
export async function signAdminToken(payload: Omit<AdminSessionPayload, 'iat' | 'exp'>): Promise<string> {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(JWT_SECRET);
}

/**
 * Verify JWT session token
 */
export async function verifyAdminToken(token: string): Promise<AdminSessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    if (payload.role === 'ADMIN' && payload.email === ADMIN_CREDENTIALS.email) {
      return payload as unknown as AdminSessionPayload;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Get current authenticated admin session from cookies
 */
export async function getAdminSession(): Promise<AdminSessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}
