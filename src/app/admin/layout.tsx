'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  FileText,
  Package,
  BarChart3,
  LogOut,
  Menu,
  X,
  ShieldCheck,
  ExternalLink,
  Store,
  ChevronRight,
  Clock,
  Loader2
} from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingBag },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Invoices', href: '/admin/invoices', icon: FileText },
  { name: 'Reports', href: '/admin/reports', icon: BarChart3 },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Login page should render cleanly without layout frame
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch {
      router.push('/admin/login');
    } finally {
      setIsLoggingOut(false);
    }
  };

  const getActivePageName = () => {
    if (pathname === '/admin') return 'Dashboard';
    const active = NAV_ITEMS.find((item) => item.href === pathname);
    if (active) return active.name;
    if (pathname.startsWith('/admin/orders')) return 'Orders Management';
    if (pathname.startsWith('/admin/customers')) return 'Customer Directory';
    if (pathname.startsWith('/admin/invoices')) return 'Invoices & Billing';
    if (pathname.startsWith('/admin/reports')) return 'Analytics Reports';
    return 'Operations';
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col md:flex-row text-[#16382B]">
      {/* MOBILE TOP BAR */}
      <div className="md:hidden bg-[#16382B] text-white px-3.5 py-2.5 flex items-center justify-between shadow-md sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div className="h-8.5 w-auto px-1.5 py-0.5 rounded-lg bg-white border border-[#C29043]/30 shadow-xs flex items-center justify-center">
            <Image
              src="/images/ruthra-logo.png"
              alt="Ruthra Logo"
              width={52}
              height={30}
              className="h-6 w-auto object-contain"
              priority
              unoptimized
            />
          </div>
          <div>
            <span className="font-serif-brand font-bold text-sm tracking-tight block">Ruthra Admin</span>
            <span className="text-[9.5px] text-[#DFB36C] block font-mono">{currentTime}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Store Button */}
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#DFB36C] hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors"
            title="View Storefront"
          >
            <Store className="w-3.5 h-3.5" />
            <span className="text-[11px]">Store</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-70" />
          </Link>

          {/* Mobile Logout Button */}
          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="p-1.5 rounded-lg bg-red-950/70 hover:bg-red-900 border border-red-800/50 text-red-200 transition-colors disabled:opacity-50"
            title="Sign Out"
            aria-label="Logout"
          >
            {isLoggingOut ? (
              <Loader2 className="w-4 h-4 animate-spin text-red-300" />
            ) : (
              <LogOut className="w-4 h-4 text-red-300" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors ml-1"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* SIDEBAR NAVIGATION (Desktop Fixed / Mobile Slide-over) */}
      <aside
        className={`fixed md:sticky top-0 left-0 bottom-0 z-50 md:z-30 w-64 bg-[#16382B] text-white flex flex-col justify-between border-r border-[#16382B]/20 transition-transform duration-300 ease-in-out md:translate-x-0 h-screen ${
          mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Sidebar Brand Header */}
        <div className="p-4.5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-auto px-2 py-1 rounded-xl bg-white border border-[#C29043]/30 shadow-md flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/ruthra-logo.png"
                alt="Ruthra Logo"
                width={65}
                height={38}
                className="h-7.5 w-auto object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="min-w-0">
              <h1 className="font-serif-brand font-bold text-base tracking-tight text-white truncate">
                Ruthra Medicines
              </h1>
              <p className="text-[10px] uppercase font-semibold tracking-wider text-[#DFB36C]">
                Admin Operations
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1.5 flex-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#C29043] text-[#16382B] font-bold shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#16382B]' : 'text-[#DFB36C]'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Bottom: Admin Profile Info */}
        <div className="p-4 border-t border-white/10">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#DFB36C] to-[#C29043] text-[#16382B] flex items-center justify-center font-bold text-xs shadow-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-bold text-white block truncate">Master Admin</span>
              <span className="text-[10px] text-[#DFB36C] font-mono block truncate">admin1234@gmail.com</span>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE BACKDROP OVERLAY */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-2xs"
        />
      )}

      {/* MAIN ADMIN WORKSPACE */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* DESKTOP TOP HEADER BAR - PRODUCTION GRADE UI */}
        <header className="hidden md:flex bg-white border-b border-[#16382B]/10 px-6 py-3 items-center justify-between sticky top-0 z-20 shadow-xs backdrop-blur-md bg-white/95">
          {/* Left: Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-[#3D5A68]">
            <span className="font-semibold text-[#16382B]">Admin</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#8A9B93]" />
            <span className="font-bold text-[#C29043]">{getActivePageName()}</span>
          </div>

          {/* Right: Actions, Store Link & Logout */}
          <div className="flex items-center gap-3">
            {/* Live IST Clock */}
            <div className="px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#16382B]/10 text-xs font-mono font-medium text-[#16382B] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C29043]" />
              <span>{currentTime}</span>
            </div>

            {/* Production Grade Store Button */}
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#16382B] to-[#1E4D3B] hover:from-[#1E4D3B] hover:to-[#265F49] text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer border border-[#16382B]"
              title="Visit Customer Storefront (Opens in new tab)"
            >
              <Store className="w-3.5 h-3.5 text-[#DFB36C] group-hover:scale-110 transition-transform" />
              <span>Store</span>
              <ExternalLink className="w-3 h-3 text-[#DFB36C] opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Production Grade Logout Button */}
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-600 border border-red-200 hover:border-red-600 text-red-700 hover:text-white text-xs font-semibold transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
              title="Sign Out of Admin Console"
            >
              {isLoggingOut ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Logging out...</span>
                </>
              ) : (
                <>
                  <LogOut className="w-3.5 h-3.5 text-red-500 group-hover:text-white transition-colors" />
                  <span>Logout</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Page Content Container */}
        <div className="p-4 sm:p-6 lg:p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
