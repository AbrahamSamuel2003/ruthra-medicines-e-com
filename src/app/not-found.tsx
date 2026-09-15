import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="text-center max-w-md bg-white p-8 sm:p-12 rounded-3xl border border-[#16382B]/10 shadow-sm space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#E8F1EB] text-[#16382B] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 text-[#C29043]" />
        </div>
        <span className="text-xs uppercase font-bold tracking-widest text-[#C29043]">
          Page Not Found • 404
        </span>
        <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
          Formulation or Page Missing
        </h1>
        <p className="text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
          The page or formulation you are looking for might have moved or is not in our current catalog.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#16382B]/20 text-[#16382B] text-xs font-semibold hover:bg-[#E8F1EB]"
          >
            Return Home
          </Link>
          <Link
            href="/shop"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#16382B] text-white text-xs font-semibold hover:bg-[#204C3B] flex items-center justify-center gap-1.5"
          >
            <span>Explore Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
