'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FlaskConical, 
  ShieldCheck, 
  Award,
  ChevronRight,
  Sparkles,
  Zap,
  Leaf
} from 'lucide-react';
import { Product } from '@/types/product';
import { useLanguage } from '@/context/LanguageContext';
import ProductCard from '@/components/ProductCard';

interface ProprietaryCatalogClientProps {
  products: Product[];
}

export default function ProprietaryCatalogClient({ products }: ProprietaryCatalogClientProps) {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-16">
      {/* Hero Header Strip */}
      <section className="bg-[#16382B] text-white pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#C29043]/30">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-[#DFB36C] mb-3">
            <Link href="/" className="hover:underline opacity-80">{t('Home', 'முகப்பு')}</Link>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <span className="font-semibold text-white">{t('Proprietary Range', 'பிரத்தியேக தயாரிப்புகள்')}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F1EB]/15 border border-[#C29043]/40 text-xs text-[#DFB36C] font-semibold mb-2">
                <FlaskConical className="w-3.5 h-3.5 text-[#C29043]" />
                <span>{t('Flagship Ruthra Formulations', 'ருத்ராவின் பிரத்தியேக தயாரிப்புகள்')}</span>
              </div>
              <h1 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                {t('Ruthra Proprietary Formulations', 'ருத்ரா பிரத்தியேக மூலிகை தயாரிப்புகள்')}
              </h1>
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl mt-1.5 leading-relaxed">
                {t(
                  'Signature high-potency healthcare solutions formulated through 30+ years of empirical clinical practice in Tirunelveli — Sinocof, Rej-Viyan, Narshika, Esy-Swas, and Ulcera.',
                  '30 ஆண்டுகால மருத்துவ அனுபவத்தில் உருவான ருத்ராவின் தனித்துவமான பிரத்தியேக தயாரிப்புகள்.'
                )}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs bg-white/10 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-white/15">
              <Sparkles className="w-5 h-5 text-[#C29043] flex-shrink-0" />
              <div>
                <span className="font-bold block">{t('Fast Acting & Clinically Tested', 'விரைவு நிவாரணம் தரும் வடிவம்')}</span>
                <span className="text-[11px] text-white/70">{t('Non-drowsy & Chemical Free', 'ரசாயனம் அற்ற தூய மூலிகைகள்')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-8">
        
        {/* Banner Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <div className="p-4 bg-white rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
              <Leaf className="w-5 h-5 text-[#16382B]" />
            </div>
            <div>
              <h4 className="font-serif-brand font-bold text-sm text-[#16382B]">{t('100% Herbal Actives', '100% மூலிகை மூலக்கூறுகள்')}</h4>
              <p className="text-[11px] text-[#8A9B93]">{t('Zero corticosteroids or harmful chemicals', 'ஸ்டீராய்டு கலப்பற்றது')}</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF9F0] text-[#C29043] flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-[#C29043]" />
            </div>
            <div>
              <h4 className="font-serif-brand font-bold text-sm text-[#16382B]">{t('Direct Therapeutic Action', 'நேரடி பலனளிக்கும் வடிவம்')}</h4>
              <p className="text-[11px] text-[#8A9B93]">{t('Rapid absorption & targeted relief', 'உடனடி நிவாரணம் மற்றும் பாதுகாப்பு')}</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#16382B]" />
            </div>
            <div>
              <h4 className="font-serif-brand font-bold text-sm text-[#16382B]">{t('Tirunelveli Heritage Lab', 'திருநெல்வேலி தயாரிப்பு மையம்')}</h4>
              <p className="text-[11px] text-[#8A9B93]">{t('Quality audited and sealed for safety', 'பாரம்பரிய முறையில் தயாரிக்கப்பட்டது')}</p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
