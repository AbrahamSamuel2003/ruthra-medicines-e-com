'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        setError(data.error || 'Authentication failed. Please check credentials.');
        setIsLoading(false);
        return;
      }

      // Success -> Redirect to dashboard
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Network error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF8F5] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Subtle Heritage Motif */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#16382B_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center space-y-3">
        {/* Brand Header */}
        <div className="inline-flex items-center justify-center px-4 py-2.5 rounded-2xl bg-white border border-[#16382B]/15 shadow-md mx-auto">
          <Image
            src="/images/ruthra-logo.png"
            alt="Ruthra Logo"
            width={90}
            height={52}
            className="h-11 sm:h-12 w-auto object-contain"
            priority
            unoptimized
          />
        </div>

        <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B] tracking-tight">
          Ruthra Medicines
        </h1>
        <p className="text-xs uppercase tracking-widest font-semibold text-[#C29043]">
          Admin Operations Console • Tirunelveli
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white py-8 px-6 sm:px-10 shadow-lg rounded-3xl border border-[#16382B]/10 space-y-6">
          <div className="border-b border-[#16382B]/10 pb-4">
            <h2 className="font-serif-brand font-bold text-lg text-[#16382B] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C29043]" />
              <span>Admin Authentication</span>
            </h2>
            <p className="text-xs text-[#3D5A68] mt-0.5">
              Enter your authorized credentials to access store management.
            </p>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#16382B] uppercase tracking-wider mb-1.5">
                Admin Email
              </label>
              <div className="relative rounded-xl shadow-2xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A9B93]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3.5 py-2.5 sm:py-3 border border-[#16382B]/20 rounded-xl bg-[#FAF8F5] text-[#16382B] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043] focus:border-transparent transition-all font-medium"
                  placeholder="admin1234@gmail.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#16382B] uppercase tracking-wider mb-1.5">
                Admin Password
              </label>
              <div className="relative rounded-xl shadow-2xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A9B93]">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3.5 py-2.5 sm:py-3 border border-[#16382B]/20 rounded-xl bg-[#FAF8F5] text-[#16382B] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043] focus:border-transparent transition-all font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:scale-98 text-white font-serif-brand font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-70"
            >
              {isLoading ? (
                <span>Verifying Credentials...</span>
              ) : (
                <>
                  <span>Sign In to Admin Console</span>
                  <ArrowRight className="w-4 h-4 text-[#C29043]" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-xs text-[#3D5A68] hover:text-[#16382B] font-medium transition-colors inline-flex items-center gap-1"
          >
            ← Return to Ruthra Customer Store
          </a>
        </div>
      </div>
    </div>
  );
}
