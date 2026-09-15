'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FaqPage() {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      qEn: 'What makes Ruthra Siddha formulations distinct from generic Ayurveda?',
      qTa: 'ஆயுர்வேதத்திலிருந்து சித்த மருத்துவ தயாரிப்புகள் எவ்வாறு வேறுபடுகின்றன?',
      aEn: 'Siddha medicine is indigenous to Tamilakam and is codified in the classical Tamil language by Siddhars such as Agathiyar. While both traditions share the Pancha Bootha framework, Siddha places greater emphasis on native Tamil flora (Pirandai, Karanthai, Mudakkathan, Nochi) and specialized Shodhana purification techniques.',
      aTa: 'சித்த மருத்துவம் தமிழகத்தின் தொன்மையான மருத்துவ மரபு. அகத்தியர் உள்ளிட்ட சித்தர்களால் தமிழில் இயற்றப்பட்டது. பிரண்டை, முடக்கத்தான், நொச்சி போன்ற தென் தமிழக மூலிகைகளும் தனித்துவமான சுத்தி முறைகளும் இதன் சிறப்பு.'
    },
    {
      qEn: 'Why are Ruthra Chooranams supplied in measured sachets rather than loose powder jars?',
      qTa: 'ருத்ரா சூரணம் பாக்கெட்டுகளாக வழங்கப்படுவது ஏன்?',
      aEn: 'Tamil Nadu’s coastal humidity quickly degrades the potency of volatile aromatic compounds in loose powder jars when opened daily. Our single-dose 2g to 3g sachets ensure zero moisture contamination, exact dosing, and effortless portability.',
      aTa: 'காற்றிலுள்ள ஈரப்பதத்தால் சூரணத்தின் வீரியம் குறையாமல் இருக்கவும், தினமும் சரியான அளவை உட்கொள்ளவும் தனித்தனி பாக்கெட்டுகளாக வழங்கப்படுகிறது.'
    },
    {
      qEn: 'How should I consume Kudineer coarse powders?',
      qTa: 'குடிநீர் கஷாயத்தை எவ்வாறு காய்ச்ச வேண்டும்?',
      aEn: 'Take 5 grams of coarse powder, boil with 200ml to 250ml of water, and simmer on gentle heat until reduced to approximately 50-60ml (one-fourth volume). Strain through a clean cloth or mesh and drink warm.',
      aTa: '5 கிராம் பொடியை 250 மி.லி நீரில் இட்டு, 60 மி.லியாக சுண்டும் வரை கொதிக்க வைத்து, வடிகட்டி மிதமான சூட்டில் பருக வேண்டும்.'
    },
    {
      qEn: 'Can I take Siddha medicines alongside my conventional allopathic prescriptions?',
      qTa: 'பிற அலோபதி மருந்துகளுடன் சேர்த்து சாப்பிடலாமா?',
      aEn: 'Yes, in most cases, but you should maintain a minimum interval of 45 to 60 minutes between medications. Always inform your treating doctor and monitor biological markers responsibly.',
      aTa: 'ஆம், ஆனால் இரு மருந்துகளுக்கும் இடையே குறைந்தது 45 முதல் 60 நிமிடங்கள் இடைவெளி விட்டு உட்கொள்ள வேண்டும்.'
    },
    {
      qEn: 'Where are Ruthra products dispatched from?',
      qTa: 'மருந்துகள் எங்கிருந்து அஞ்சல் செய்யப்படுகின்றன?',
      aEn: 'Every parcel is dispatched directly from our herbal laboratory and fulfillment facility in North Ariyanayagipuram, Petta, Tirunelveli, Tamil Nadu, reaching most Tamil Nadu addresses within 48 to 72 hours.',
      aTa: 'அனைத்து மருந்துகளும் திருநெல்வேலி பேட்டையில் உள்ள எங்கள் மையத்தில் இருந்து நேரடியாக தமிழ்நாடு முழுவதும் 2-3 நாட்களில் அனுப்பி வைக்கப்படுகின்றன.'
    },
    {
      qEn: 'Do Ruthra products contain synthetic preservatives or artificial food colors?',
      qTa: 'இதில் செயற்கை நிறமூட்டிகள் அல்லது ரசாயனங்கள் உள்ளதா?',
      aEn: 'No. All our Chooranams, Kudineers, and Thailams are 100% free of artificial coloring agents, parabens, synthetic fragrances, and artificial binders.',
      aTa: 'இல்லை. எங்கள் தயாரிப்புகளில் எந்தவித செயற்கை நிறங்களோ, வாசனை திரவியங்களோ, ரசாயன பாதுகாப்பிகளோ சேர்க்கப்படவில்லை.'
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <nav className="text-xs text-[#8A9B93] mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{t('Frequently Asked Questions', 'அடிக்கடி கேட்கப்படும் கேள்விகள்')}</span>
        </nav>

        <div className="mb-10">
          <h1 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#16382B]">
            {t('Frequently Asked Questions', 'அடிக்கடி கேட்கப்படும் கேள்விகள்')}
          </h1>
          <p className="text-sm text-[#3D5A68] mt-2">
            {t(
              'Clear, transparent guidance on classical Siddha medicine preparation, safety, storage, and orders.',
              'சித்த மருந்து பயன்பாடு, சேமிப்பு மற்றும் ஆர்டர் குறித்த தெளிவான வழிகாட்டுதல்கள்.'
            )}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#16382B]/10 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif-brand font-bold text-base text-[#16382B]"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#C29043] flex-shrink-0" />
                    <span>{language === 'ta' ? faq.qTa : faq.qEn}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8C9E96] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#3D5A68] leading-relaxed border-t border-[#16382B]/5 pl-11">
                    {language === 'ta' ? faq.aTa : faq.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[#E8F1EB] border border-[#16382B]/10 text-center space-y-2">
          <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
            {t('Have a specific order or product question?', 'ஆர்டர் குறித்த கேள்விகள் உள்ளதா?')}
          </h3>
          <p className="text-xs text-[#3D5A68]">
            {t('Our Tirunelveli support desk is happy to assist you directly.', 'எங்கள் வாடிக்கையாளர் உதவி மையத்தை தொடர்பு கொள்ளலாம்.')}
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919171508042?text=Vanakkam,%20I%20have%20a%20question%20about%20Ruthra%20formulations."
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-2.5 rounded-xl bg-[#16382B] text-white text-xs font-semibold hover:bg-[#204C3B] transition-colors"
            >
              {t('Chat with Support Desk on WhatsApp', 'வாட்ஸ்அப் உதவி மையம்')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
