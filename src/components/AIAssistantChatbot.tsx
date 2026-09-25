'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { queryDomainKnowledge, AIQuickReply, AILink } from '@/lib/aiKnowledgeEngine';

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

  // Isolated chatbot language state
  const [chatLanguage, setChatLanguage] = useState<'en' | 'ta'>('en');
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  // Dynamic visual viewport state for mobile keyboard handling
  const [viewportStyle, setViewportStyle] = useState<{
    top?: number;
    height?: number;
    maxHeight?: number;
  }>({});

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scoped translation helper for the chatbot UI only
  const ct = useCallback(
    (en: string, ta: string) => (chatLanguage === 'ta' ? ta || en : en),
    [chatLanguage]
  );

  // Sync initial chatbot language on first mount from site preference
  useEffect(() => {
    if (globalLanguage) {
      setChatLanguage(globalLanguage);
    }
  }, []);

  // Visual Viewport tracking for mobile virtual keyboards (iOS Safari & Android Chrome)
  useEffect(() => {
    if (!isOpen) {
      setViewportStyle({});
      return;
    }

    const updateViewport = () => {
      if (typeof window === 'undefined') return;

      if (window.innerWidth < 640 && window.visualViewport) {
        const vv = window.visualViewport;
        const vh = vv.height;
        const vTop = vv.offsetTop;

        const safeHeight = Math.max(260, vh - 20);
        const safeTop = Math.max(10, vTop + 10);

        setViewportStyle({
          top: safeTop,
          height: safeHeight,
          maxHeight: safeHeight
        });
      } else {
        setViewportStyle({});
      }
    };

    if (typeof window !== 'undefined' && window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateViewport);
      window.visualViewport.addEventListener('scroll', updateViewport);
      updateViewport();
    }

    return () => {
      if (typeof window !== 'undefined' && window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateViewport);
        window.visualViewport.removeEventListener('scroll', updateViewport);
      }
    };
  }, [isOpen]);

  // Hide mobile bottom nav & lock background scroll on mobile viewports while chat is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isOpen) {
        document.body.setAttribute('data-chat-open', 'true');
        if (window.innerWidth < 640) {
          document.body.style.overflow = 'hidden';
        }
      } else {
        document.body.removeAttribute('data-chat-open');
        document.body.style.overflow = '';
      }
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.removeAttribute('data-chat-open');
        document.body.style.overflow = '';
      }
    };
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

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Auto-scroll on new messages or loading
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, loading, scrollToBottom]);

  // Desktop outside click & Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    let handleClickOutside: (e: MouseEvent) => void;
    let handleKeyDown: (e: KeyboardEvent) => void;

    const timer = setTimeout(() => {
      handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Node;
        if (
          chatContainerRef.current &&
          !chatContainerRef.current.contains(target) &&
          launcherRef.current &&
          !launcherRef.current.contains(target)
        ) {
          setIsOpen(false);
        }
      };

      handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (handleClickOutside) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      if (handleKeyDown) {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isOpen]);

  // Hide on checkout, search, or cart drawer
  if (isDrawerOpen || isSearchOpen || pathname === '/checkout') {
    return null;
  }

  const isBottomNavHidden = pathname.startsWith('/product/');

  // 0-Latency Instant Evaluator with smooth natural typing cadence
  const handleSendMessage = useCallback(
    (queryText?: string) => {
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

      // Instant domain evaluation with a natural 200ms typing cadence
      setTimeout(() => {
        try {
          const data = queryDomainKnowledge(textToSend.trim(), chatLanguage);
          const assistantMessage: Message = {
            id: `assistant-${Date.now()}`,
            sender: 'assistant',
            text: data.reply,
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
      }, 220);
    },
    [inputMsg, loading, chatLanguage]
  );

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
      {/* MOBILE DIMMED BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[58] bg-black/40 backdrop-blur-[2px] sm:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* CHAT CONTAINER (Responsive & VisualViewport Anchored matching ss40-network) */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          style={
            viewportStyle.top !== undefined
              ? {
                  top: `${viewportStyle.top}px`,
                  height: `${viewportStyle.height}px`,
                  maxHeight: `${viewportStyle.maxHeight}px`,
                  bottom: 'auto'
                }
              : undefined
          }
          className="fixed bottom-20 right-3 left-3 sm:left-auto sm:right-6 lg:right-8 sm:bottom-24 z-[60] flex flex-col w-auto sm:w-[390px] md:w-[410px] h-[510px] sm:h-[550px] max-h-[calc(100dvh-95px)] sm:max-h-[calc(100vh-120px)] bg-[#FAF8F5] rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(22,56,43,0.25)] border border-[#16382B]/20 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          aria-label="Ruthra AI Assistant Chatbot"
          onClick={e => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="bg-[#16382B] text-white px-3.5 py-3 sm:p-4 flex items-center justify-between border-b border-[#C29043]/30 flex-shrink-0 shadow-xs">
            <div className="flex items-center gap-2.5 min-w-0">
              {/* Authentic Ruthra Logo Box strictly kept at w-8 h-8 */}
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
              <div className="min-w-0">
                <h3 className="font-serif-brand font-bold text-sm text-white leading-none truncate">
                  {ct('Ruthra AI Assistant', 'ரூத்ரா AI உதவியாளர்')}
                </h3>
                <p className="text-[10.5px] text-[#DFB36C] mt-1 leading-none truncate font-medium">
                  {ct('Tirunelveli Support Desk', 'திருநெல்வேலி உதவி மையம்')}
                </p>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {/* Isolated Chatbot Language Switcher */}
              <button
                type="button"
                onClick={() => setChatLanguage(prev => (prev === 'en' ? 'ta' : 'en'))}
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 text-[11px] font-semibold text-white transition-colors cursor-pointer border border-white/15 touch-manipulation"
                title={ct('Switch Chat Language', 'அரட்டை மொழி மாற்றம்')}
              >
                {chatLanguage === 'en' ? 'தமிழ்' : 'EN'}
              </button>

              {/* Reset History */}
              <button
                type="button"
                onClick={handleReset}
                className="w-7.5 h-7.5 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer touch-manipulation"
                title={ct('Clear Chat', 'அரட்டையை அழிக்க')}
                aria-label="Reset chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7.5 h-7.5 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer touch-manipulation"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MESSAGE STREAM */}
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

                  {/* QUICK REPLY PILLS */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1 max-w-[95%]">
                      {msg.quickReplies.slice(0, 3).map((qr, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSendMessage(qr.query)}
                          className="text-[11px] sm:text-xs font-semibold text-[#16382B] bg-white hover:bg-[#E8F1EB] active:bg-[#D5E6DC] border border-[#16382B]/20 shadow-2xs hover:shadow-xs px-3 py-1.5 rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer touch-manipulation flex items-center gap-1"
                        >
                          <span>{chatLanguage === 'ta' ? qr.labelTa : qr.labelEn}</span>
                          <ArrowRight className="w-2.5 h-2.5 text-[#C29043]" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Timestamp */}
                  <span className="text-[9.5px] text-[#8A9B93] px-1 font-medium">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Professional Production-Grade Typing Animation Indicator */}
            {loading && (
              <div className="flex items-start animate-in fade-in duration-200">
                <div className="bg-white border border-[#16382B]/10 rounded-2xl rounded-tl-xs px-3.5 py-2.5 shadow-xs flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#16382B] animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#16382B] animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#16382B] animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT FOOTER */}
          <div className="bg-[#F8FAFB] border-t border-[#16382B]/10 px-3.5 py-2.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] sm:pb-3 shrink-0 flex flex-col gap-1.5">
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="relative flex items-center w-full bg-white border-2 border-[#16382B]/30 hover:border-[#16382B]/60 focus-within:border-[#16382B] focus-within:ring-2 focus-within:ring-[#16382B]/15 rounded-full pl-4 pr-1.5 py-1.5 shadow-[0_2px_10px_rgba(22,56,43,0.06)] transition-all"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMsg}
                onChange={e => setInputMsg(e.target.value)}
                onFocus={() => {
                  setTimeout(() => {
                    scrollToBottom();
                  }, 180);
                }}
                placeholder={ct(
                  'Ask a question or select a topic...',
                  'உங்கள் கேள்வியை இங்கே தட்டச்சு செய்யவும்...'
                )}
                className="flex-1 bg-transparent py-1 text-base sm:text-xs text-[#16382B] placeholder:text-gray-400 font-medium focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputMsg.trim() || loading}
                className="w-8 h-8 rounded-full bg-[#16382B] hover:bg-[#0E241C] active:scale-90 disabled:opacity-25 disabled:pointer-events-none text-white flex items-center justify-center transition-all shrink-0 cursor-pointer touch-manipulation shadow-xs"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Direct WhatsApp Consultation Fallback */}
            <div className="flex items-center justify-between text-[10px] text-[#8A9B93] px-2 font-medium">
              <span>{ct('Need doctor consultation?', 'மருத்துவரிடம் பேச?')}</span>
              <a
                href="https://wa.me/919171508042?text=Vanakkam%20Ruthra%20Medicines,%20I%20would%20like%20direct%20consultation."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#16382B] hover:text-[#C29043] transition-colors"
              >
                <MessageCircle className="w-3 h-3 text-[#25D366]" />
                <span>{ct('WhatsApp Desk', 'வாட்ஸ்அப் உதவி')}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING LAUNCHER BUTTON */}
      {!isOpen && (
        <div
          ref={launcherRef}
          className={`fixed z-[55] transition-all duration-300 ${
            isBottomNavHidden
              ? 'bottom-4 right-4 sm:bottom-6 sm:right-6'
              : 'bottom-[72px] sm:bottom-6 right-3 sm:right-6'
          }`}
        >
          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              setIsOpen(true);
            }}
            className="group relative flex items-center gap-2.5 bg-[#16382B] hover:bg-[#0E241C] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#C29043]/50 cursor-pointer touch-manipulation"
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
