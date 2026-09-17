'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  Loader2, 
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Authentication failed. Please check your credentials.');
        setIsLoading(false);
        return;
      }

      // Success -> Redirect to admin dashboard
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Network connection error. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#FAF8F5] flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#C29043]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#16382B]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#16382B_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* CENTERED COMPACT APP-STYLE CARD CONTAINER */}
      <div className="w-full max-w-[390px] sm:max-w-md bg-white rounded-3xl shadow-2xl border border-[#16382B]/10 flex flex-col overflow-hidden relative z-10 my-auto animate-fade-in">
        
        {/* 1. TOP HERO WAVE BANNER WITH CENTERED BRAND LOGO */}
        <div className="relative bg-gradient-to-br from-[#0E241C] via-[#16382B] to-[#1E4D3B] pt-6 pb-12 px-6 text-center text-white flex flex-col items-center justify-center shrink-0">
          {/* Subtle Ambient Light Spot */}
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-[#C29043]/20 rounded-full blur-xl pointer-events-none" />
          
          {/* Brand Logo in Polished White/Gold Badge */}
          <div className="relative z-10 inline-flex items-center justify-center px-4 py-2 rounded-2xl bg-white shadow-xl border border-[#C29043]/40 mb-2">
            <Image
              src="/images/ruthra-logo.png"
              alt="Ruthra Logo"
              width={95}
              height={50}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
              unoptimized
            />
          </div>

          <div className="relative z-10 space-y-0.5">
            <h1 className="font-serif-brand font-bold text-base sm:text-lg tracking-tight text-white">
              Ruthra Medicines
            </h1>
            <p className="text-[9.5px] sm:text-[10.5px] font-semibold tracking-wider text-[#DFB36C] uppercase">
              Admin Operations Console • Tirunelveli
            </p>
          </div>

          {/* Organic Wave Divider SVG */}
          <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
            <svg 
              className="relative block w-full h-7 sm:h-8 text-white" 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
            >
              <path 
                d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" 
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* 2. FORM BODY SECTION (CENTERED IN MIDDLE PORTION) */}
        <div className="px-5 sm:px-8 pt-2 pb-5 flex flex-col justify-between">
          <div>
            {/* Title & Greeting */}
            <div className="text-center space-y-0.5 mb-3.5">
              <h2 className="font-serif-brand text-lg sm:text-xl font-bold text-[#16382B] tracking-tight">
                Welcome back !
              </h2>
              <p className="text-[11px] sm:text-xs text-[#5C7368]">
                Sign in with authorized master credentials
              </p>
            </div>

            {/* Error Banner */}
            {error && (
              <div className="mb-3 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
                <span className="font-medium text-[11px] sm:text-xs">{error}</span>
              </div>
            )}

            {/* Form Inputs */}
            <form onSubmit={handleLogin} className="space-y-3">
              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A9B93]">
                  <Mail className="w-4 h-4 text-[#16382B]" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-4 py-2.5 sm:py-3 border border-[#16382B]/15 rounded-2xl bg-[#FAF8F5] text-[#16382B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043] focus:border-transparent transition-all font-medium placeholder:text-[#8A9B93]"
                  placeholder="admin1234@gmail.com"
                />
              </div>

              {/* Password Input with Eye Toggle */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A9B93]">
                  <Lock className="w-4 h-4 text-[#16382B]" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2.5 sm:py-3 border border-[#16382B]/15 rounded-2xl bg-[#FAF8F5] text-[#16382B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043] focus:border-transparent transition-all font-medium placeholder:text-[#8A9B93]"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#8A9B93] hover:text-[#16382B] transition-colors cursor-pointer"
                  title={showPassword ? 'Hide password' : 'Show password'}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Remember Me & Security Status */}
              <div className="flex items-center justify-between pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded text-[#16382B] accent-[#16382B] cursor-pointer"
                  />
                  <span className="text-[11px] sm:text-xs text-[#5C7368] font-medium">Remember me</span>
                </label>
                <span className="text-[10px] sm:text-[10.5px] text-[#8A9B93] font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  7-Day Session
                </span>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-1.5 py-3 px-5 rounded-2xl bg-gradient-to-r from-[#16382B] via-[#1E4D3B] to-[#16382B] hover:from-[#1E4D3B] hover:to-[#265F49] active:scale-[0.99] text-white font-serif-brand font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#DFB36C]" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4 text-[#DFB36C]" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Bottom Storefront Link */}
          <div className="pt-3 mt-2 border-t border-[#16382B]/10 text-center">
            <Link
              href="/"
              className="text-[11px] sm:text-xs text-[#5C7368] hover:text-[#16382B] font-semibold transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#C29043]" />
              <span>Back to Customer Store</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
