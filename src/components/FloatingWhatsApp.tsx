'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, X, Send, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  const { isDrawerOpen, isSearchOpen } = useCart();
  const rawPathname = usePathname();
  const pathname = rawPathname || '';
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking/tapping outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Hide WhatsApp floating button when cart drawer or search is open, or on checkout page to avoid blocking actions
  if (isDrawerOpen || isSearchOpen || pathname === '/checkout') {
    return null;
  }

  // Direct Tirunelveli hotline
  const supportPhone = '919171508042';

  // Automatically adjust bottom offset so it doesn't overlap bottom navigation
  const isBottomNavHidden = pathname.startsWith('/product/');

  const quickTopics = [
    {
      en: 'Need help selecting the right Siddha medicine',
      ta: 'எனக்கு ஏற்ற சித்த மருந்தை தேர்வு செய்ய உதவி தேவை',
      msg: 'Vanakkam Ruthra Medicines, I need guidance selecting the right Siddha medicine for my condition.'
    },
    {
      en: 'Track my order & courier status',
      ta: 'எனது ஆர்டர் மற்றும் பார்சல் நிலையை அறிய',
      msg: 'Vanakkam Ruthra Medicines, I would like to track my order delivery status.'
    },
    {
      en: 'Bulk & Practitioner Order Inquiries',
      ta: 'மருத்துவர் & மொத்த கொள்முதல் விபரம்',
      msg: 'Vanakkam Ruthra Medicines, I am a practitioner / customer interested in bulk formulation orders and availability.'
    },
    {
      en: 'Dosage & Anupanam instructions',
      ta: 'மருந்து உண்ணும் முறை மற்றும் துணைப்பொருள் விபரம்',
      msg: 'Vanakkam Ruthra Medicines, I need clarification regarding medicine dosage and anupanam vehicle.'
    }
  ];

  // Cross-device WhatsApp dispatch (bypasses mobile popup blockers & opens native app)
  const openWhatsAppLink = (text: string) => {
    const encoded = encodeURIComponent(text);
    const cleanPhone = supportPhone.replace(/[^0-9]/g, '');
    const mobileUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encoded}`;
    
    if (typeof window !== 'undefined') {
      // Use direct navigation on mobile to avoid popup blockers and trigger native app deep linking
      window.location.href = mobileUrl;
    }
    setIsOpen(false);
  };

  const handleQuickSend = (query: string) => {
    openWhatsAppLink(query);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const fullText = `Vanakkam Ruthra Medicines,\n${customMsg.trim()}`;
    openWhatsAppLink(fullText);
    setCustomMsg('');
  };

  return (
    <div
      ref={containerRef}
      className={`fixed z-50 transition-all duration-300 ${
        isBottomNavHidden
          ? 'bottom-4 right-4 sm:bottom-6 sm:right-6'
          : 'bottom-[68px] sm:bottom-6 right-3.5 sm:right-6'
      }`}
      aria-label="WhatsApp Assistance"
    >
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="absolute bottom-14 sm:bottom-16 right-0 w-[calc(100vw-28px)] sm:w-88 max-w-[360px] bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#16382B]/15 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Card Header */}
          <div className="bg-[#16382B] text-white p-4 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-[#16382B]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-serif-brand font-bold text-sm text-white">
                      Ruthra Siddha Helpdesk
                    </h4>
                    <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#25D366]/20 text-[#25D366]">
                      Online
                    </span>
                  </div>
                  <p className="text-[11px] text-[#DFB36C]">
                    {t('Tirunelveli, Tamil Nadu • 9 AM - 7:30 PM', 'திருநெல்வேலி • காலை 9 - இரவு 7:30')}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-white/85 mt-2.5 bg-white/5 p-2 rounded-lg border border-white/10">
              {t(
                'Vanakkam! How can our Siddha team assist you today?',
                'வணக்கம்! உங்களுக்கு எவ்வகையான மருத்துவ உதவி தேவை?'
              )}
            </p>
          </div>

          {/* Body: Quick Action Buttons */}
          <div className="p-3.5 space-y-2 max-h-[320px] overflow-y-auto">
            <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#8A9B93] px-1">
              {t('Quick Inquiries', 'உடனடி கேள்விகள்')}
            </div>

            {quickTopics.map((topic, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuickSend(topic.msg)}
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#E8F1EB] border border-[#16382B]/10 hover:border-[#16382B]/30 text-xs text-[#264653] hover:text-[#16382B] transition-all flex items-center justify-between group shadow-2xs"
              >
                <span className="line-clamp-2 leading-relaxed font-medium">
                  {t(topic.en, topic.ta)}
                </span>
                <span className="text-[#25D366] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-sm font-bold flex-shrink-0 ml-2">
                  →
                </span>
              </button>
            ))}

            {/* Custom Input */}
            <form onSubmit={handleCustomSend} className="pt-2">
              <div className="relative">
                <input
                  type="text"
                  value={customMsg}
                  onChange={e => setCustomMsg(e.target.value)}
                  placeholder={t('Type a message...', 'உங்கள் கேள்வியை தட்டச்சு செய்யவும்...')}
                  className="w-full text-xs pl-3 pr-10 py-2.5 rounded-xl border border-[#16382B]/20 bg-white focus:outline-none focus:border-[#16382B] focus:ring-1 focus:ring-[#16382B]"
                />
                <button
                  type="submit"
                  disabled={!customMsg.trim()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-[#25D366] hover:bg-[#20ba59] disabled:opacity-40 text-white flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            <div className="pt-1 text-center">
              <a
                href="tel:+919171508042"
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#16382B] hover:text-[#C29043] transition-colors"
              >
                <PhoneCall className="w-3 h-3 text-[#25D366]" />
                <span>+91 91715 08042</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(prev => !prev);
          setShowNotificationBadge(false);
        }}
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/80 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <div className="relative">
          <MessageCircle className="w-6 h-6 text-white fill-white stroke-[#25D366]" />
          {showNotificationBadge && !isOpen && (
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#D9534F] border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
              1
            </span>
          )}
        </div>

        {/* Desktop pill label */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[11px] font-bold leading-tight tracking-wide">
            {t('Chat with Us', 'வாட்ஸ்அப் உதவி')}
          </span>
          <span className="text-[9.5px] text-white/90 leading-tight">
            {t('Instant Siddha Help', 'உடனடி மருத்துவ ஆலோசனை')}
          </span>
        </div>
      </button>
    </div>
  );
}
