'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, MapPin, Compass } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#8A9B93] flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{t('About Ruthra Medicines', 'ருத்ரா பற்றி')}</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-[#16382B] text-white rounded-3xl p-8 sm:p-14 border border-[#C29043]/30 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#DFB36C]">
              {t('Siddha Heritage • Tirunelveli, Tamil Nadu', 'திருநெல்வேலி சித்த மருத்துவ பாரம்பரியம்')}
            </span>
            <h1 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {t(
                'Ancient Siddha Wisdom, Presented for Modern Living.',
                'பழமையான சித்த அறிவு, நவீன வாழ்வியலுக்காக.'
              )}
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed pt-2">
              {t(
                'Ruthra Medicines was founded with a singular conviction: to preserve the classical heritage discipline and botanical authenticity of southern Tamil traditional medicine while delivering the purity, measured packaging, and clarity demanded by today’s discerning households.',
                'பாரம்பரிய சித்த மருத்துவத்தின் தூய்மையும், மூலிகை நம்பகத்தன்மையும் மாறாமல் இன்றைய நவீன குடும்பங்களுக்கு எளிய முறையில் கொண்டு சேர்க்கும் உயரிய நோக்குடன் ருத்ரா செயல்படுகிறது.'
              )}
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-[#16382B]/10 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center">
              <Compass className="w-6 h-6 text-[#C29043]" />
            </div>
            <h3 className="font-serif-brand text-xl font-bold text-[#16382B]">
              {t('Agathiyar Lineage', 'அகத்தியர் வழிமுறை')}
            </h3>
            <p className="text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
              {t(
                'Our formulations adhere strictly to classical Tamil palm-leaf literature and pharmacopeias documented in the southern Tirunelveli and Pothigai hills traditions.',
                'பொதிகை மலையை மையமாகக் கொண்ட அகத்தியர் சித்த மருத்துவ மரபின்படி எங்கள் தயாரிப்புகள் நேர்த்தியாக செய்யப்படுகின்றன.'
              )}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#16382B]/10 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#16382B]" />
            </div>
            <h3 className="font-serif-brand text-xl font-bold text-[#16382B]">
              {t('Shodhana (Purification)', 'சுத்தி முறைகள்')}
            </h3>
            <p className="text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
              {t(
                'Raw botanicals are never packaged crude. We employ time-tested shodhana purification steps using cow milk, lemon juice, or ghee roasting to ensure safe, itch-free, bio-available formulas.',
                'மூலிகைகளை நேரடியாக அரைக்காமல், பால் மற்றும் நெய் சுத்தி முறைகள் மூலம் நச்சுத்தன்மை நீக்கி பக்குவமாக தயாரிக்கிறோம்.'
              )}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#16382B]/10 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#C29043]" />
            </div>
            <h3 className="font-serif-brand text-xl font-bold text-[#16382B]">
              {t('Tirunelveli Roots', 'திருநெல்வேலி வேர்கள்')}
            </h3>
            <p className="text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
              {t(
                'Rooted in Tirunelveli — historically celebrated as the cradle of Tamil Siddha pharmacology near the Podhigai hills, ensuring pristine botanical sourcing and pure small-batch processing.',
                'சித்த மருத்துவத்தின் தொட்டில் எனப்படும் பொதிகை மலைச் சாரல் திருநெல்வேலியில் இருந்து தூய மூலிகைகளைக் கொண்டு பாரம்பரிய முறைப்படி மருந்துகள் தயாரிக்கப்படுகின்றன.'
              )}
            </p>
          </div>
        </div>

        {/* Narrative editorial */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#16382B]/10 space-y-6 max-w-4xl mx-auto">
          <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
            {t('What Sets Ruthra Apart', 'ருத்ராவின் தனித்துவம்')}
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
            <p>
              Traditional Indian medicine often suffers from two extremes: either hyper-commercialized mass brands that dilute herb concentration with synthetic binders, or obscure local cottage makers with unstandardized hygiene.
            </p>
            <p>
              Ruthra sits intentionally in the middle: an authentic classical Siddha store where every single pouch, sachet, and amber oil bottle is prepared with pharmaceutical discipline, precise food-grade packaging, transparent ingredient labels, and respectful adherence to classical texts.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="px-6 py-3 rounded-xl bg-[#16382B] text-white text-xs sm:text-sm font-semibold hover:bg-[#204C3B] transition-colors"
            >
              {t('Explore Verified Formulations', 'எங்கள் மருந்துகளை பார்க்க')}
            </Link>
            <Link
              href="/shop#combos"
              className="px-6 py-3 rounded-xl bg-[#FAF8F5] border border-[#16382B]/20 text-[#16382B] text-xs sm:text-sm font-semibold hover:bg-[#E8F1EB] transition-colors"
            >
              {t('Explore Value Combos (Save 20%)', 'காம்போ சலுகைகள்')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
