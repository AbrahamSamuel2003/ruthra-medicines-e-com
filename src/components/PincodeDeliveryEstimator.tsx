'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Truck, CheckCircle2, AlertCircle, Clock, ShieldCheck, Banknote } from 'lucide-react';
import { getDeliveryEstimate, DeliveryEstimate } from '@/utils/deliveryEstimator';
import { useLanguage } from '@/context/LanguageContext';

export default function PincodeDeliveryEstimator({ className = '' }: { className?: string }) {
  const { language, t } = useLanguage();
  const [pincode, setPincode] = useState('');
  const [estimate, setEstimate] = useState<DeliveryEstimate | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Load saved pincode from localStorage on mount
  useEffect(() => {
    try {
      const savedPin = localStorage.getItem('ruthra_user_pincode');
      if (savedPin && savedPin.length === 6) {
        setPincode(savedPin);
        const res = getDeliveryEstimate(savedPin);
        if (res) setEstimate(res);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleCheckPincode = (pinToCheck: string) => {
    const clean = pinToCheck.trim().replace(/\D/g, '');
    setPincode(clean);
    setErrorMsg(null);

    if (clean.length === 6) {
      setIsChecking(true);
      setTimeout(() => {
        const result = getDeliveryEstimate(clean);
        if (result) {
          setEstimate(result);
          setErrorMsg(null);
          try {
            localStorage.setItem('ruthra_user_pincode', clean);
          } catch {
            // ignore
          }
        } else {
          setEstimate(null);
          setErrorMsg(t('Please enter a valid 6-digit Indian PIN code', 'சரியான 6 இலக்க அஞ்சல் குறியீட்டை உள்ளிடவும்'));
        }
        setIsChecking(false);
      }, 150);
    } else if (clean.length === 0) {
      setEstimate(null);
      setErrorMsg(null);
    }
  };

  const handleQuickSelect = (pin: string) => {
    handleCheckPincode(pin);
  };

  const quickPins = [
    { labelEn: 'Tirunelveli', labelTa: 'நெல்லை', pin: '627001' },
    { labelEn: 'Chennai', labelTa: 'சென்னை', pin: '600001' },
    { labelEn: 'Madurai', labelTa: 'மதுரை', pin: '625001' },
    { labelEn: 'Coimbatore', labelTa: 'கோவை', pin: '641001' },
    { labelEn: 'Trichy', labelTa: 'திருச்சி', pin: '620001' }
  ];

  return (
    <div className={`p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/12 shadow-xs space-y-3 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-[#16382B]">
          <MapPin className="w-4 h-4 text-[#C29043]" />
          <span>{t('Check Delivery to Your Pincode', 'உங்கள் பகுதி அஞ்சல் விநியோக விபரம்')}</span>
        </div>
        <span className="text-[10px] text-[#8A9B93] uppercase font-semibold">
          {t('Tamil Nadu & All India', 'தமிழகம் & இந்தியா முழுவதும்')}
        </span>
      </div>

      {/* Input Row */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            maxLength={6}
            value={pincode}
            onChange={e => handleCheckPincode(e.target.value)}
            placeholder={t('Enter 6-digit PIN (e.g. 627001)', '6 இலக்க PIN குறியீடு (எ.கா: 627001)')}
            className="w-full text-xs pl-3 pr-3 py-2.5 rounded-xl border border-[#16382B]/20 bg-white font-medium focus:outline-none focus:border-[#16382B] focus:ring-1 focus:ring-[#16382B] transition-all placeholder:text-[#8A9B93]/70"
          />
        </div>

        <button
          type="button"
          onClick={() => handleCheckPincode(pincode)}
          disabled={pincode.length !== 6 || isChecking}
          className="py-2.5 px-4 rounded-xl bg-[#16382B] hover:bg-[#204C3B] disabled:opacity-50 text-white text-xs font-bold transition-all cursor-pointer shadow-2xs"
        >
          {isChecking ? t('Checking...', 'சரிபார்க்கிறது...') : t('Check', 'சரிபார்')}
        </button>
      </div>

      {/* Quick Location Chips */}
      {!estimate && !errorMsg && (
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          <span className="text-[10px] text-[#8A9B93] font-medium mr-1">
            {t('Quick Check:', 'விரைவு தேர்வு:')}
          </span>
          {quickPins.map(item => (
            <button
              key={item.pin}
              type="button"
              onClick={() => handleQuickSelect(item.pin)}
              className="text-[10px] font-semibold px-2 py-1 rounded-lg bg-white hover:bg-[#E8F1EB] text-[#264653] hover:text-[#16382B] border border-[#16382B]/10 transition-colors cursor-pointer"
            >
              {language === 'ta' ? item.labelTa : item.labelEn}
            </button>
          ))}
        </div>
      )}

      {/* Error Message */}
      {errorMsg && (
        <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Delivery Result Card */}
      {estimate && (
        <div className="p-3 rounded-xl bg-white border border-[#16382B]/10 space-y-2 text-xs animate-in fade-in-50 duration-150">
          {/* District & Status */}
          <div className="flex items-center justify-between pb-1.5 border-b border-[#16382B]/10">
            <div className="flex items-center gap-1.5 font-bold text-[#16382B]">
              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>
                {language === 'ta' ? estimate.districtTa : estimate.district}, {language === 'ta' ? estimate.stateTa : estimate.state}
              </span>
            </div>
            <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-[#E8F1EB] font-bold text-[#16382B]">
              PIN {estimate.pincode}
            </span>
          </div>

          {/* Delivery Timeline & Target Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
            <div className="flex items-start gap-2 text-[#264653]">
              <Clock className="w-3.5 h-3.5 text-[#C29043] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#16382B] block">
                  {language === 'ta' ? estimate.deliveryTimeTa : estimate.deliveryTimeEn}
                </span>
                <span className="text-[10.5px] text-green-700 font-semibold block mt-0.5">
                  {t('Estimated Arrival:', 'எதிர்பார்க்கப்படும் நாள்:')}{' '}
                  <strong>
                    {language === 'ta'
                      ? (estimate.targetDays === 1 ? 'நாளை' : '2-3 நாட்களில்')
                      : (estimate.targetDays === 1 ? 'Tomorrow' : 'In 24–48 Hours')}
                  </strong>
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-[#264653]">
              <Truck className="w-3.5 h-3.5 text-[#16382B] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block leading-tight">
                  {language === 'ta' ? estimate.courierPartnerTa : estimate.courierPartnerEn}
                </span>
                <span className="text-[10px] text-[#8A9B93] block mt-0.5">
                  {t('Direct Tirunelveli Dispatch Hub', 'திருநெல்வேலி நேரடி அஞ்சல் மையம்')}
                </span>
              </div>
            </div>
          </div>

          {/* Trust Guarantees & Free Delivery */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#16382B]/5 text-[10.5px] text-[#3D5A68]">
            <span className="flex items-center gap-1 font-bold text-emerald-800">
              <Truck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('100% Free Delivery (₹0 Shipping)', '100% இலவச டெலிவரி (₹0 அஞ்சல் கட்டணம்)')}</span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-green-800">
              <Banknote className="w-3.5 h-3.5 text-green-600" />
              <span>{t('COD Available', 'பொருளை பெற்று பணம் செலுத்துங்கள்')}</span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-[#16382B]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C29043]" />
              <span>{t('Transit Safe', 'பாதுகாப்பான பொட்டலம்')}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
