'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RotateCw, Home, AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console
    console.error('Next.js Page Error:', error);
  }, [error]);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="text-center max-w-md bg-white p-8 sm:p-12 rounded-3xl border border-[#16382B]/10 shadow-sm space-y-4">
        <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto border border-amber-200">
          <AlertCircle className="w-8 h-8 text-[#C29043]" />
        </div>
        <span className="text-xs uppercase font-bold tracking-widest text-[#C29043]">
          Connection & Loading Notice
        </span>
        <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
          Unable to Load Page
        </h1>
        <p className="text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
          A temporary network interruption occurred while retrieving formulation data. Please tap reload or return home.
        </p>
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#16382B] text-white text-xs font-semibold hover:bg-[#204C3B] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Reload Page</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#16382B]/20 text-[#16382B] text-xs font-semibold hover:bg-[#E8F1EB] flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Go to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
