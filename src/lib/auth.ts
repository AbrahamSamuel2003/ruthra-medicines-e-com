import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { requireEnv } from '@/lib/env';

export const ADMIN_COOKIE_NAME = 'ruthra_admin_session';

export interface AdminSessionPayload {
  email: string;
  name: string;
  role: 'ADMIN';
  iat?: number;
  exp?: number;
}

export function getAdminJwtSecret(): Uint8Array {
  return new TextEncoder().encode(requireEnv('ADMIN_JWT_SECRET', 32));
}

export function getAdminEmail(): string {
  return requireEnv('ADMIN_EMAIL', 5).toLowerCase();
}

export function getAdminName(): string {
  return (process.env.ADMIN_NAME || 'Ruthra Master Admin').trim();
}

/**
 * Validates provided admin password against ADMIN_PASSWORD_HASH (bcrypt) or ADMIN_PASSWORD.
 */
export async function verifyAdminPassword(password: string): Promise<boolean> {
  const hash = process.env.ADMIN_PASSWORD_HASH?.trim();
  if (hash) {
    try {
      return await bcrypt.compare(password, hash);
    } catch {
      return false;
    }
  }

  const rawPassword = process.env.ADMIN_PASSWORD?.trim();
  if (rawPassword) {
    return password === rawPassword;
  }

  return false;
}

/**
 * Sign JWT session token for Admin
 */
export async function signAdminToken(payload: Omit<AdminSessionPayload, 'iat' | 'exp'>): Promise<string> {
  const secret = getAdminJwtSecret();
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);
}

/**
 * Verify JWT session token
 */
export async function verifyAdminToken(token: string): Promise<AdminSessionPayload | null> {
  try {
    const secret = getAdminJwtSecret();
    const adminEmail = getAdminEmail();
    const { payload } = await jwtVerify(token, secret);
    if (payload.role === 'ADMIN' && typeof payload.email === 'string' && payload.email.toLowerCase() === adminEmail) {
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
