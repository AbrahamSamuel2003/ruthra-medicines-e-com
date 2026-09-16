/**
 * Ruthra Medicines - Global Store & Administration Configuration
 */
export const STORE_CONFIG = {
  storeName: 'Ruthra Medicines',
  tagline: 'Siddha & Ayurveda Pharmacopeia • Tirunelveli',
  location: 'Tirunelveli, Tamil Nadu',
  supportPhone: '+91 91715 08042',
  supportEmail: 'orders@ruthramedicos.com',

  /**
   * Client / Admin Recipient Email for Daily End-of-Day (8:00 PM IST) Sales & Dispatch Reports.
   * NOTE: admin1234@gmail.com is strictly the internal Admin Console username.
   * Testing email configured as: abrahamsamuel645@gmail.com
   * (Can be overridden via ADMIN_NOTIFICATION_EMAIL in .env or updated here when client provides final address).
   */
  adminNotificationEmail: process.env.ADMIN_NOTIFICATION_EMAIL || 'abrahamsamuel645@gmail.com',

  /**
   * Daily Summary Automated Run Time (8:00 PM IST)
   */
  dailyReportCronExpression: '0 20 * * *', // 20:00 (8:00 PM IST)
  dailyReportTimeIST: '8:00 PM IST',
};
