import { getDailySummary } from '../src/lib/db';
import { sendDailySummaryEmail } from '../src/lib/mailer';
import { STORE_CONFIG } from '../src/lib/config';

async function main() {
  const targetEmail = process.argv[2] || STORE_CONFIG.adminNotificationEmail || 'abrahamsamuel645@gmail.com';
  const targetDate = process.argv[3] || new Date().toISOString().split('T')[0];

  console.log('\n================================================================');
  console.log('       RUTHRA MEDICINES - DAILY 8:00 PM SUMMARY EMAIL SENDER    ');
  console.log('================================================================');
  console.log(`Target Recipient: \x1b[33m${targetEmail}\x1b[0m`);
  console.log(`Report Date:      \x1b[36m${targetDate}\x1b[0m\n`);

  // 1. Fetch Day Summary
  const summary = await getDailySummary(targetDate);

  console.log(`Total Orders:        ${summary.totalOrders}`);
  console.log(`Gross Sales:         ₹${summary.totalSales}`);
  console.log(`Paid Online:         ₹${summary.paidAmount || 0} (${summary.paidOrders} orders)`);
  console.log(`Cash on Delivery:    ₹${summary.pendingCodAmount || 0} (${summary.pendingOrders} orders)`);
  console.log(`New Customers:       ${summary.newCustomers}`);
  console.log('----------------------------------------------------------------');

  // 2. Dispatch Email
  console.log(`Dispatching 8:00 PM Daily Summary to ${targetEmail}...`);
  const result = await sendDailySummaryEmail({
    summary,
    recipientEmail: targetEmail
  });

  if (result.success) {
    console.log(`\n\x1b[32m✔ SUCCESS:\x1b[0m Summary email compiled and dispatched!`);
    console.log(`Mode:           \x1b[33m${result.mode}\x1b[0m`);
    console.log(`Recipient:      ${result.recipient}`);
    if (result.messageId) console.log(`Message ID:     ${result.messageId}`);
    if (result.previewFilePath) {
      console.log(`HTML File:      \x1b[36m${result.previewFilePath}\x1b[0m`);
      console.log(`\nTip: You can open \x1b[36m${result.previewFilePath}\x1b[0m directly in your browser to view the email!`);
    }
  } else {
    console.error(`\n\x1b[31m✖ FAILED:\x1b[0m ${result.error}`);
  }

  console.log('\n================================================================\n');
}

main().catch((err) => {
  console.error('Error running summary sender:', err);
  process.exit(1);
});
