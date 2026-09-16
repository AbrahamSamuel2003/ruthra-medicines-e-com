import type { Metadata } from 'next';
import { Fraunces, Inter, Noto_Sans_Tamil } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { CartProvider } from '@/context/CartContext';
import StorefrontShell from '@/components/StorefrontShell';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ['tamil'],
  variable: '--font-tamil',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ruthra Medicines | Authentic Siddha Formulations & Traditional Wellness',
    template: '%s | Ruthra Medicines'
  },
  description: 'Ancient Siddha wisdom presented for modern living. Explore classical Chooranam sachets, Kudineer decoctions, and Thailam oils formulated in Tirunelveli, Tamil Nadu.',
  keywords: [
    'Siddha medicine',
    'Ruthra Medicines',
    'Tirunelveli Siddha',
    'Pirandai Chooranam',
    'Nochi Kudineer',
    'Rej-Viyan Pain Oil',
    'Tamil traditional medicine',
    'சித்த மருத்துவம்',
    'சூரணம்',
    'குடிநீர்',
    'தைலம்'
  ],
  authors: [{ name: 'Ruthra Medicines' }],
  creator: 'Ruthra Medicines',
  publisher: 'Ruthra Medicines, Tirunelveli',
  metadataBase: new URL('https://ruthramedicos.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ruthra Medicines | Ancient Siddha Wisdom for Modern Living',
    description: 'Authentic Siddha formulations, classical decoctions, and botanical oils dispatched across Tamil Nadu from Tirunelveli.',
    url: 'https://ruthramedicos.com',
    siteName: 'Ruthra Medicines',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/images/ruthra-logo.png',
    apple: '/images/ruthra-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    name: 'Ruthra Siddha Herbals',
    alternateName: 'ருத்ரா பாரம்பரிய சித்த மருந்தகம்',
    description: 'Authentic classical Tamil Siddha formulations and herbal remedies dispatched directly across Tamil Nadu.',
    url: 'https://ruthramedicos.com',
    telephone: '+919171508042',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7/213, MGR Nagar, North Ariyanayagipuram, Vadakku Ariyanayagipuram Petta',
      addressLocality: 'Tirunelveli',
      addressRegion: 'Tamil Nadu',
      postalCode: '627010',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '8.7139',
      longitude: '77.7567'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:30'
      }
    ],
    priceRange: '₹₹'
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${notoSansTamil.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full w-full max-w-full flex flex-col bg-[#FAF8F5] text-[#264653] selection:bg-[#E8F1EB] selection:text-[#16382B] relative">
        <LanguageProvider>
          <CartProvider>
            <StorefrontShell>
              {children}
            </StorefrontShell>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
