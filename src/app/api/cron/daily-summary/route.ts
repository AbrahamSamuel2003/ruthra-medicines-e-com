import { NextResponse } from 'next/server';
import { getDailySummary } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';
import { sendDailySummaryEmail } from '@/lib/mailer';
import { STORE_CONFIG } from '@/lib/config';
import { requireEnv } from '@/lib/env';

export async function GET(request: Request) {
  // Allow authorized admin session or automated cron header / secret token
  const authHeader = request.headers.get('authorization');
  let isCronAuthorized = false;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    try {
      const expectedSecret = requireEnv('CRON_SECRET', 32);
      const providedToken = authHeader.replace(/^Bearer\s+/i, '').trim();
      isCronAuthorized = Boolean(providedToken && providedToken === expectedSecret);
    } catch {
      isCronAuthorized = false;
    }
  }

  const session = await getAdminSession();

  // Allow either admin session, valid bearer secret, or local development
  if (!isCronAuthorized && !session && process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Unauthorized cron access' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const dateStr = searchParams.get('date') || undefined;
  const customEmail = searchParams.get('email') || undefined;

  const targetEmail = customEmail || STORE_CONFIG.adminNotificationEmail;

  // 1. Calculate the day's full financial & operational summary
  const summary = await getDailySummary(dateStr);

  // 2. Dispatch the executive 8:00 PM summary email to client / admin email
  const emailResult = await sendDailySummaryEmail({
    summary,
    recipientEmail: targetEmail
  });

  return NextResponse.json({
    success: true,
    message: `8:00 PM Daily Sales & Order Summary compiled and dispatched to ${targetEmail}`,
    recipient: targetEmail,
    emailResult,
    summary
  });
}

export async function POST(request: Request) {
  return GET(request);
}
