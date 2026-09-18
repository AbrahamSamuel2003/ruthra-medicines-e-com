'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import WhatsAppAssistance from './WhatsAppAssistance';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full overflow-hidden bg-[#16382B] text-[#FAF8F5] pt-14 pb-20 md:pb-12 border-t-4 border-[#C29043]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Tirunelveli Roots (Col span 2) */}
          <div className="lg:col-span-2 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <Link href="/" className="flex flex-col sm:flex-row items-center gap-3 text-center md:text-left">
              <div className="h-12 w-auto px-2.5 py-1 rounded-xl bg-white shadow-xs flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/ruthra-logo.png"
                  alt="Ruthra Siddha Medicines"
                  width={75}
                  height={40}
                  className="h-9 w-auto object-contain"
                  unoptimized
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="font-serif-brand text-2xl font-bold text-white tracking-wider">
                  RUTHRA MEDICINES
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#DFB36C]">
                  {t('Siddha House • Tirunelveli', 'சித்த மருத்துவ இல்லம் • திருநெல்வேலி')}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#DFB36C]/90 leading-relaxed max-w-md mx-auto md:mx-0 text-center md:text-left">
              {t(
                'Rooted in the ancient medical heritage of southern Tamil Nadu, Ruthra Medicines brings authentic classical Siddha formulations to modern households with clinical care, ethical botanical sourcing, and transparent guidance.',
                'தென் தமிழகத்தின் பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய்மையான முறையில் மருந்துகளை தயாரித்து தமிழகம் முழுவதும் வழங்கும் நம்பகமான சித்த மருத்துவ இல்லம்.'
              )}
            </p>

            <div className="pt-2 flex justify-center md:justify-start">
              <WhatsAppAssistance />
            </div>
          </div>

          {/* Column 2: Quick Shop & Concerns */}
          <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="font-serif-brand text-sm font-bold uppercase tracking-wider text-[#DFB36C]">
              {t('Explore Shop', 'மருந்துகள்')}
            </h4>
            <ul className="space-y-2 text-xs text-white/80 flex flex-col items-center md:items-start">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  {t('All Formulations', 'அனைத்து மருந்துகள்')}
                </Link>
              </li>
              <li>
                <Link href="/shop/concerns/joint-mobility" className="hover:text-white transition-colors">
                  {t('Joint & Mobility', 'மூட்டு & வாத நலம்')}
                </Link>
              </li>
              <li>
                <Link href="/shop/concerns/respiratory" className="hover:text-white transition-colors">
                  {t('Respiratory Wellness', 'சுவாச நலம்')}
                </Link>
              </li>
              <li>
                <Link href="/shop/concerns/womens-wellness" className="hover:text-white transition-colors">
                  {t("Women's Wellness", 'பெண்கள் நலம்')}
                </Link>
              </li>
              <li>
                <Link href="/shop/concerns/metabolic-wellness" className="hover:text-white transition-colors">
                  {t('Metabolic Care', 'வளர்சிதை மாற்ற நலம்')}
                </Link>
              </li>
              <li>
                <Link href="/shop/concerns/digestive-wellness" className="hover:text-white transition-colors">
                  {t('Digestive Health', 'செரிமான நலம்')}
                </Link>
              </li>
              <li>
                <Link href="/shop/concerns/skin-hair" className="hover:text-white transition-colors">
                  {t('Skin & Hair Oils', 'சருமம் & கூந்தல் தைலம்')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Formulations & Practice */}
          <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="font-serif-brand text-sm font-bold uppercase tracking-wider text-[#DFB36C]">
              {t('Traditional Forms', 'மருந்து வகைகள்')}
            </h4>
            <ul className="space-y-2 text-xs text-white/80 flex flex-col items-center md:items-start">
              <li>
                <Link href="/shop/formulations/chooranam" className="hover:text-white transition-colors">
                  {t('Chooranam Sachets', 'சூரணம் பாக்கெட்டுகள்')}
                </Link>
              </li>
              <li>
                <Link href="/shop/formulations/kudineer" className="hover:text-white transition-colors">
                  {t('Kudineer Decoctions', 'குடிநீர் கஷாயங்கள்')}
                </Link>
              </li>
              <li>
                <Link href="/shop/formulations/thailam" className="hover:text-white transition-colors">
                  {t('Thailam Medicated Oils', 'மூலிகை தைலங்கள்')}
                </Link>
              </li>
              <li>
                <Link href="/shop/formulations/syrups" className="hover:text-white transition-colors">
                  {t('Herbal Syrups & Elixirs', 'இருமல் சிரப் & திரவம்')}
                </Link>
              </li>
              <li>
                <Link href="/shop/formulations/drops" className="hover:text-white transition-colors">
                  {t('Inhalation Drops', 'ஆவி சொட்டு மருந்து')}
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/offers" className="text-[#DFB36C] font-semibold hover:underline block text-center md:text-left">
                  {t('→ Special Value Combos (Save 20%)', '→ சிறப்பு தொகுப்புகள் (20% சேமிப்பு)')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Care & Order Support */}
          <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="font-serif-brand text-sm font-bold uppercase tracking-wider text-[#DFB36C]">
              {t('Customer Care & Dispatch', 'வாடிக்கையாளர் சேவை')}
            </h4>
            <div className="space-y-3 text-xs text-white/80 flex flex-col items-center md:items-start">
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-2 text-center md:text-left">
                <MapPin className="w-4 h-4 text-[#C29043] flex-shrink-0 mt-0.5" />
                <span>
                  Ruthra Siddha Medicines Dispatch Center,
                  <br />
                  North Ariyanayagipuram, Petta,
                  <br />
                  Tirunelveli, Tamil Nadu 627010
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-2 text-center md:text-left">
                <Phone className="w-4 h-4 text-[#C29043] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col items-center md:items-start">
                  <a href="tel:+919171508042" className="hover:text-white font-medium">
                    +91 91715 08042
                  </a>
                  <span className="text-white/60 text-[11px]">
                    {t('WhatsApp Order & Tracking Help', 'வாட்ஸ்அப் ஆர்டர் & உதவி')}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-2 text-center md:text-left">
                <Mail className="w-4 h-4 text-[#C29043] flex-shrink-0" />
                <a href="mailto:care@ruthramedicos.com" className="hover:text-white">
                  care@ruthramedicos.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-2 text-center md:text-left text-white/60">
                <Clock className="w-4 h-4 text-[#C29043] flex-shrink-0" />
                <span>{t('Support: Mon - Sat 9 AM - 7:30 PM', 'சேவை நேரம்: காலை 9 - இரவு 7:30')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Safety Factual Note */}
        <div className="py-6 border-b border-white/10 text-[11px] text-white/70 leading-relaxed flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2.5 text-center md:text-left">
            <ShieldCheck className="w-5 h-5 text-[#C29043] flex-shrink-0" />
            <p className="max-w-4xl">
              {t(
                'Disclaimer: The product descriptions on this website represent classical Siddha medicine literature and traditional uses. They are not intended as standalone substitutes for acute emergency clinical care. Consult qualified practitioners for severe chronic ailments.',
                'அறிவிப்பு: இப்பக்கத்தில் உள்ள விபரங்கள் பாரம்பரிய சித்த மருத்துவ நூல்கள் மற்றும் அனுபவ முறைகளின் அடிப்படையில் அமைந்தவை. தீவிர அவசர சிகிச்சைகளுக்கு உரிய மருத்துவரை அணுகவும்.'
              )}
            </p>
          </div>
        </div>

        {/* Bottom Sub-footer: Single Centralized Line with Proper Spacing */}
        <div className="pt-6 pb-2 flex flex-wrap items-center justify-center gap-x-2 lg:gap-x-2.5 gap-y-1.5 text-center text-[10.5px] sm:text-[11px] lg:text-[11.5px] text-white/70">
          <span className="whitespace-nowrap">
            © {new Date().getFullYear()} Ruthra Medicines, Tirunelveli.
          </span>
          <span className="text-[#C29043]/60">•</span>
          <span className="text-[#DFB36C] whitespace-nowrap">
            {t('Developed by', 'உருவாக்கம்:')}{' '}
            <a
              href="https://ss40network.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#DFB36C] hover:text-white transition-colors underline decoration-[#DFB36C]/40 hover:decoration-white underline-offset-2"
              title="SS40 NETWORK PRIVATE LIMITED"
            >
              SS40 NETWORK PRIVATE LIMITED
            </a>
          </span>
          <span className="text-white/25">•</span>
          <Link href="/shipping" className="hover:text-white transition-colors whitespace-nowrap">
            {t('Shipping Policy', 'அஞ்சல் விபரம்')}
          </Link>
          <span className="text-white/25">•</span>
          <Link href="/returns" className="hover:text-white transition-colors whitespace-nowrap">
            {t('Returns & Refunds', 'ரீஃபண்ட் கொள்கை')}
          </Link>
          <span className="text-white/25">•</span>
          <Link href="/privacy" className="hover:text-white transition-colors whitespace-nowrap">
            {t('Privacy Policy', 'தனியுரிமை')}
          </Link>
          <span className="text-white/25">•</span>
          <Link href="/terms" className="hover:text-white transition-colors whitespace-nowrap">
            {t('Terms of Service', 'விதிமுறைகள்')}
          </Link>
          <span className="text-white/25">•</span>
          <Link href="/faq" className="hover:text-white transition-colors whitespace-nowrap">
            {t('FAQ', 'கேள்வி பதில்')}
          </Link>
          <span className="text-white/25">•</span>
          <Link href="/contact" className="hover:text-white transition-colors whitespace-nowrap">
            {t('Contact Us', 'தொடர்பு')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
