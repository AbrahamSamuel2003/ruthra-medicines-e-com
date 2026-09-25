'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  ArrowRight,
  MessageCircle,
  Loader2
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { AIQuickReply, AILink } from '@/lib/aiKnowledgeEngine';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  links?: AILink[];
  quickReplies?: AIQuickReply[];
}

export default function AIAssistantChatbot() {
  const { language: globalLanguage, t: globalT } = useLanguage();
  const { isDrawerOpen, isSearchOpen } = useCart();
  const rawPathname = usePathname();
  const pathname = rawPathname || '';

  // Independent local language state strictly isolated inside the chatbot
  const [chatLanguage, setChatLanguage] = useState<'en' | 'ta'>('en');
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scoped translation helper for the chatbot UI only
  const ct = (en: string, ta: string) => (chatLanguage === 'ta' ? ta || en : en);

  // Sync initial chatbot language on first mount from site preference, but keep isolated thereafter
  useEffect(() => {
    if (globalLanguage) {
      setChatLanguage(globalLanguage);
    }
  }, []);

  // Body scroll lock on mobile when chat is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      // On mobile viewports lock body scroll
      if (typeof window !== 'undefined' && window.innerWidth < 640) {
        document.body.style.overflow = 'hidden';
      }
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Initialize initial greeting whenever chatLanguage is switched inside chatbot
  useEffect(() => {
    const isTa = chatLanguage === 'ta';
    const welcomeMessage: Message = {
      id: 'init-1',
      sender: 'assistant',
      text: isTa
        ? 'வணக்கம்! நான் ரூத்ரா மெடிசின்ஸ் AI மருத்துவ உதவியாளர்.\n\nநான் உங்களுக்கு உதவக்கூடியவை:\n1. உங்கள் உடல்நலனுக்கான மருந்து ஆலோசனை\n2. 5+1 திட்டம் & தள்ளுபடி சலுகைகள்\n3. தமிழ்நாடு முழுவதும் இலவச டெலிவரி\n4. மருந்து உண்ணும் முறை & அளவு\n5. திருநெல்வேலி உதவி மையம்\n\nஉங்கள் கேள்வியை தட்டச்சு செய்யவும் அல்லது கீழே உள்ள விருப்பங்களில் ஒன்றைத் தேர்வு செய்யவும்.'
        : 'Vanakkam! I am the Ruthra Medicines AI Assistant.\n\nI can directly assist you with:\n1. Medicine guidance for your symptoms\n2. 5+1 scheme & volume discounts\n3. Free shipping inside TN\n4. Dosage & how to take\n5. Tirunelveli support desk\n\nPlease type your question below or select a suggested topic.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickReplies: [
        { labelEn: 'Joint Pain Remedies', labelTa: 'மூட்டு வலி நிவாரணம்', query: 'Joint pain medicines' },
        { labelEn: 'Cough & Cold Care', labelTa: 'சளி & இருமல் மருந்துகள்', query: 'Remedies for cold and cough' },
        { labelEn: '5+1 Scheme & Offers', labelTa: '5+1 சலுகை திட்டம்', query: 'What are the current offers?' }
      ]
    };
    setMessages([welcomeMessage]);
  }, [chatLanguage]);

  // Auto-scroll to bottom on updates
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, loading]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Hide on checkout, search, or cart drawer
  if (isDrawerOpen || isSearchOpen || pathname === '/checkout') {
    return null;
  }

  const isBottomNavHidden = pathname.startsWith('/product/');

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputMsg;
    if (!textToSend.trim() || loading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!queryText) setInputMsg('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend.trim(),
          language: chatLanguage
        })
      });

      if (!res.ok) throw new Error('Network error');

      const data = await res.json();

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Thank you for reaching out. Please connect directly with our Tirunelveli desk for specialized care.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links: data.links,
        quickReplies: data.quickReplies
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch {
      const isTa = chatLanguage === 'ta';
      const fallbackMessage: Message = {
        id: `assistant-fallback-${Date.now()}`,
        sender: 'assistant',
        text: isTa
          ? 'மன்னிக்கவும், தகவலைப் பெறுவதில் தாமதம் ஏற்பட்டுள்ளது. எங்கள் திருநெல்வேலி உதவி மையத்தை நேரடியாக +91 91715 08042 என்ற எண்ணில் அழைக்கலாம்.'
          : 'I encountered an issue fetching this data. You can directly reach our Tirunelveli care desk at +91 91715 08042 for instant assistance.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    const isTa = chatLanguage === 'ta';
    setMessages([
      {
        id: `init-${Date.now()}`,
        sender: 'assistant',
        text: isTa
          ? 'வணக்கம்! நான் ரூத்ரா மெடிசின்ஸ் AI மருத்துவ உதவியாளர்.\n\nநான் உங்களுக்கு உதவக்கூடியவை:\n1. உங்கள் உடல்நலனுக்கான மருந்து ஆலோசனை\n2. 5+1 திட்டம் & தள்ளுபடி சலுகைகள்\n3. தமிழ்நாடு முழுவதும் இலவச டெலிவரி\n4. மருந்து உண்ணும் முறை & அளவு\n5. திருநெல்வேலி உதவி மையம்\n\nஉங்கள் கேள்வியை தட்டச்சு செய்யவும் அல்லது கீழே உள்ள விருப்பங்களில் ஒன்றைத் தேர்வு செய்யவும்.'
          : 'Vanakkam! I am the Ruthra Medicines AI Assistant.\n\nI can directly assist you with:\n1. Medicine guidance for your symptoms\n2. 5+1 scheme & volume discounts\n3. Free shipping inside TN\n4. Dosage & how to take\n5. Tirunelveli support desk\n\nPlease type your question below or select a suggested topic.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: [
          { labelEn: 'Joint Pain Remedies', labelTa: 'மூட்டு வலி நிவாரணம்', query: 'Joint pain medicines' },
          { labelEn: 'Cough & Cold Care', labelTa: 'சளி & இருமல் மருந்துகள்', query: 'Remedies for cold and cough' },
          { labelEn: '5+1 Scheme & Offers', labelTa: '5+1 சலுகை திட்டம்', query: 'What are the current offers?' }
        ]
      }
    ]);
  };

  return (
    <>
      {/* MOBILE NATIVE FULLSCREEN & DESKTOP FLOATING MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] h-[100dvh] w-full bg-[#FAF8F5] flex flex-col sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[390px] sm:max-w-[400px] sm:h-[560px] sm:max-h-[82vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-[#16382B]/15 overflow-hidden animate-in fade-in slide-in-from-bottom-2 sm:slide-in-from-bottom-3 duration-200"
          aria-label="Ruthra AI Assistant Chatbot"
        >
          {/* NATIVE HEADER */}
          <div className="bg-[#16382B] text-white px-3.5 py-3 sm:p-4 flex items-center justify-between border-b border-[#C29043]/20 flex-shrink-0 pt-[max(env(safe-area-inset-top,0px),12px)] sm:pt-4">
            <div className="flex items-center gap-2.5">
              {/* Logo container strictly kept at existing w-8 h-8 size */}
              <div className="w-8 h-8 rounded-xl bg-white border border-[#C29043]/40 flex items-center justify-center p-0.5 flex-shrink-0 shadow-2xs">
                <Image
                  src="/images/ruthra-logo.png"
                  alt="Ruthra Logo"
                  width={28}
                  height={24}
                  className="h-5.5 w-auto object-contain"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="font-serif-brand font-bold text-sm text-white leading-none">
                  {ct('Ruthra AI Assistant', 'ரூத்ரா AI உதவியாளர்')}
                </h3>
                <p className="text-[10.5px] text-[#DFB36C]/90 mt-1 leading-none">
                  {ct('Tirunelveli Support Desk', 'திருநெல்வேலி உதவி மையம்')}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1.5">
              {/* Isolated Chatbot Language Switcher */}
              <button
                type="button"
                onClick={() => setChatLanguage(prev => (prev === 'en' ? 'ta' : 'en'))}
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-white/90 hover:text-white transition-colors cursor-pointer border border-white/10 active:scale-95"
                title={ct('Switch Chat Language', 'அரட்டை மொழி மாற்றம்')}
              >
                {chatLanguage === 'en' ? 'தமிழ்' : 'EN'}
              </button>

              {/* Reset History */}
              <button
                type="button"
                onClick={handleReset}
                className="w-7.5 h-7.5 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer active:scale-95"
                title={ct('Clear Chat', 'அரட்டையை அழிக்க')}
                aria-label="Reset chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7.5 h-7.5 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer active:scale-95"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MESSAGE STREAM (Native Overscroll & Smooth Scrolling) */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto overscroll-contain space-y-3.5 text-xs text-[#264653]">
            {messages.map(msg => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1.5`}
                >
                  {/* Bubble Container */}
                  <div
                    className={`p-3 sm:p-3.5 rounded-2xl max-w-[92%] leading-relaxed ${
                      isUser
                        ? 'bg-[#16382B] text-white rounded-br-xs shadow-xs'
                        : 'bg-white text-[#16382B] border border-[#16382B]/10 rounded-bl-xs shadow-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line text-xs font-normal">
                      {msg.text}
                    </p>

                    {/* DIRECT NAVIGATION LINKS */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-[#16382B]/10 space-y-1.5">
                        {msg.links.map((link, idx) => (
                          <Link
                            key={idx}
                            href={link.url}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E8F1EB] hover:bg-[#16382B] text-[#16382B] hover:text-white font-semibold text-[11px] transition-colors"
                          >
                            <span>{chatLanguage === 'ta' ? link.labelTa : link.labelEn}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CLICKABLE QUESTION OPTIONS IN SINGLE HORIZONTAL ROW / FLEX PILLS */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5 max-w-[94%]">
                      {msg.quickReplies.slice(0, 3).map((qr, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSendMessage(qr.query)}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white hover:bg-[#E8F1EB] border border-[#16382B]/15 hover:border-[#16382B]/35 text-[11px] text-[#16382B] font-medium transition-all shadow-2xs cursor-pointer active:scale-95 touch-manipulation"
                        >
                          <span>{chatLanguage === 'ta' ? qr.labelTa : qr.labelEn}</span>
                          <ArrowRight className="w-2.5 h-2.5 text-[#C29043]" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Timestamp */}
                  <span className="text-[9.5px] text-[#8A9B93] px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Clean Loading State without blinking dots */}
            {loading && (
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-2xl border border-[#16382B]/10 text-xs text-[#8A9B93] w-fit shadow-xs">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#C29043]" />
                <span>
                  {ct('Analyzing...', 'பதிலை தயார் செய்கிறது...')}
                </span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* NATIVE INPUT BAR & SAFE AREA BOTTOM PADDING */}
          <div className="p-3 bg-white border-t border-[#16382B]/10 flex-shrink-0 space-y-2 pb-[max(env(safe-area-inset-bottom,0px),12px)] sm:pb-3 shadow-lg">
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="relative flex items-center"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMsg}
                onChange={e => setInputMsg(e.target.value)}
                placeholder={ct(
                  'Type your question here...',
                  'உங்கள் கேள்வியை இங்கே தட்டச்சு செய்யவும்...'
                )}
                className="w-full text-xs pl-3.5 pr-11 py-2.5 sm:py-3 rounded-2xl border-2 border-[#16382B]/20 bg-[#FAF8F5] text-[#16382B] placeholder:text-[#8A9B93] focus:outline-none focus:border-[#16382B] focus:bg-white shadow-2xs transition-all"
              />
              <button
                type="submit"
                disabled={!inputMsg.trim() || loading}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl bg-[#16382B] hover:bg-[#0E241C] disabled:opacity-40 text-white flex items-center justify-center transition-all shadow-xs cursor-pointer disabled:cursor-not-allowed active:scale-95"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Direct WhatsApp Consultation Fallback */}
            <div className="flex items-center justify-between text-[10.5px] text-[#8A9B93] px-1">
              <span>{ct('Need doctor consultation?', 'மருத்துவரிடம் பேச?')}</span>
              <a
                href="https://wa.me/919171508042?text=Vanakkam%20Ruthra%20Medicines,%20I%20would%20like%20direct%20consultation."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#16382B] hover:text-[#C29043] transition-colors"
              >
                <MessageCircle className="w-3 h-3 text-[#25D366]" />
                <span>{ct('WhatsApp Helpdesk', 'வாட்ஸ்அப் உதவி')}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING LAUNCHER BUTTON (Only visible when chat is closed) */}
      {!isOpen && (
        <div
          className={`fixed z-40 transition-all duration-300 ${
            isBottomNavHidden
              ? 'bottom-4 right-4 sm:bottom-6 sm:right-6'
              : 'bottom-[68px] sm:bottom-6 right-3.5 sm:right-6'
          }`}
        >
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 bg-[#16382B] hover:bg-[#0E241C] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#C29043]/50 cursor-pointer"
            aria-label="Open Ruthra AI Assistant"
          >
            <div className="relative flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-[#DFB36C]" />
            </div>

            {/* Desktop pill label */}
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[11px] font-bold leading-tight tracking-wide text-white">
                {globalT('Ruthra AI Assistant', 'ரூத்ரா AI உதவியாளர்')}
              </span>
              <span className="text-[9.5px] text-[#DFB36C] leading-tight">
                {globalT('Instant Siddha Guidance', 'உடனடி மருத்துவ ஆலோசனை')}
              </span>
            </div>
          </button>
        </div>
      )}
    </>
  );
}
