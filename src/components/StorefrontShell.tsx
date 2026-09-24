'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import MobileHeader from '@/components/MobileHeader';
import MobileBottomNav from '@/components/MobileBottomNav';
import CartDrawer from '@/components/CartDrawer';
import SearchModal from '@/components/SearchModal';
import CartToast from '@/components/CartToast';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FreeGiftSelectorModal from '@/components/FreeGiftSelectorModal';
import Footer from '@/components/Footer';

export default function StorefrontShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  // If in admin portal, render children directly without customer-facing headers, footers, and overlays
  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Desktop Header */}
      <Header />

      {/* Mobile Header */}
      <MobileHeader />

      {/* Page Content */}
      <main className="flex-1 w-full max-w-full pb-16 md:pb-0">
        {children}
      </main>

      {/* Global Modals, Toast & Drawers */}
      <CartDrawer />
      <FreeGiftSelectorModal />
      <SearchModal />
      <CartToast />

      {/* Mobile Bottom Thumb Navigation */}
      <MobileBottomNav />

      {/* Global Floating WhatsApp Assistant */}
      <FloatingWhatsApp />

      {/* Comprehensive Footer */}
      <Footer />
    </>
  );
}
