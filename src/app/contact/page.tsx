'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <nav className="text-xs text-[#8A9B93] flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{t('Contact Ruthra', 'தொடர்பு')}</span>
        </nav>

        <div className="max-w-2xl">
          <h1 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#16382B]">
            {t('Connect with Ruthra Medicines', 'ருத்ரா மருத்துவ இல்லம் தொடர்பு')}
          </h1>
          <p className="text-sm text-[#3D5A68] mt-2">
            {t(
              'Reach out for product inquiries, bulk orders, dispatch updates, or direct consultations in Tirunelveli.',
              'மருந்துகள், ஆர்டர் நிலவரம் மற்றும் ஆலோசனைகளுக்கு எங்களை தொடர்பு கொள்ளலாம்.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-6">
            <h2 className="font-serif-brand text-xl font-bold text-[#16382B]">
              {t('Tirunelveli Dispatch & Support Center', 'திருநெல்வேலி விநியோகம் & வாடிக்கையாளர் மையம்')}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#264653]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C29043] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#16382B]">Dispatch Facility:</span>
                  <p className="text-[#3D5A68] mt-0.5 leading-relaxed">
                    Ruthra Siddha Herbals & Dispatch Facility,
                    <br />
                    7/213, MGR Nagar, North Ariyanayagipuram,
                    <br />
                    Vadakku Ariyanayagipuram Petta, Tirunelveli, Tamil Nadu 627010
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C29043] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#16382B]">Customer Support & Order Desk:</span>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <a href="tel:+919171508042" className="text-[#3D5A68] hover:text-[#16382B] font-medium">
                      +91 91715 08042
                    </a>
                    <a href="tel:+918220190029" className="text-[#3D5A68] hover:text-[#16382B] font-medium">
                      +91 82201 90029
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C29043] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#16382B]">Email Inquiries:</span>
                  <a href="mailto:care@ruthramedicos.com" className="text-[#3D5A68] hover:text-[#16382B] block mt-0.5">
                    care@ruthramedicos.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C29043] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#16382B]">Desk & Dispatch Hours:</span>
                  <p className="text-[#3D5A68] mt-0.5">
                    Monday to Saturday: 9:00 AM - 8:00 PM
                    <br />
                    Sunday: WhatsApp orders & inquiries processed
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#16382B]/10">
              <a
                href="https://wa.me/919171508042"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#E8F1EB] hover:bg-[#16382B] text-[#16382B] hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('Chat with Tirunelveli Desk on WhatsApp', 'வாட்ஸ்அப்பில் உரையாட')}</span>
              </a>
            </div>
          </div>

          {/* Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#16382B]/10 shadow-xs">
            <h2 className="font-serif-brand text-xl font-bold text-[#16382B] mb-4">
              {t('Send a Message to Ruthra', 'செய்தி அனுப்ப')}
            </h2>

            {sent ? (
              <div className="p-8 bg-[#E8F1EB] rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#16382B] mx-auto" />
                <h3 className="font-serif-brand text-lg font-bold text-[#16382B]">
                  {t('Message Sent Successfully', 'செய்தி அனுப்பப்பட்டது')}
                </h3>
                <p className="text-xs text-[#3D5A68]">
                  {t('Our support staff will respond within 24 hours.', '24 மணிநேரத்தில் பதிலளிக்கப்படும்.')}
                </p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#16382B] mb-1">
                      {t('Your Name *', 'உங்கள் பெயர் *')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] focus:outline-none focus:border-[#16382B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#16382B] mb-1">
                      {t('Phone / Mobile *', 'தொலைபேசி எண் *')}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile number"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] focus:outline-none focus:border-[#16382B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#16382B] mb-1">
                    {t('Subject / Order ID (If applicable)', 'விபரம் / ஆர்டர் எண்')}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Question on Pirandai Chooranam"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#16382B] mb-1">
                    {t('Your Message *', 'செய்தி *')}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Enter your inquiry..."
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4 text-[#C29043]" />
                  <span>{t('Send Inquiry', 'அனுப்புக')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
