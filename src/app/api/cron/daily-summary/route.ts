import { NextResponse } from 'next/server';
import { getDailySummary } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';
import { sendDailySummaryEmail } from '@/lib/mailer';
import { STORE_CONFIG } from '@/lib/config';

export async function GET(request: Request) {
  // Allow authorized admin session or automated cron header / secret token
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET || 'ruthra-daily-cron-tirunelveli-secret';
  
  const isCronAuthorized = authHeader === `Bearer ${cronSecret}`;
  const session = await getAdminSession();

  // Allow either admin session, valid bearer secret, or local test requests
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
