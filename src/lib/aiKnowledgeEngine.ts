import { PRODUCTS } from '@/data/products';
import { getDeliveryEstimate } from '@/utils/deliveryEstimator';

export interface AIQuickReply {
  labelEn: string;
  labelTa: string;
  query: string;
}

export interface AILink {
  labelEn: string;
  labelTa: string;
  url: string;
}

export interface AIResponse {
  reply: string;
  links?: AILink[];
  quickReplies: AIQuickReply[];
}

// Symptom and Concern Knowledge Dictionary
const SYMPTOM_MAP: Record<
  string,
  {
    enKeywords: string[];
    taKeywords: string[];
    enAnswer: string;
    taAnswer: string;
    linkUrl: string;
    linkTitleEn: string;
    linkTitleTa: string;
    followUps: AIQuickReply[];
  }
> = {
  respiratory: {
    enKeywords: ['cough', 'cold', 'sinus', 'asthma', 'breathing', 'phlegm', 'throat', 'kabasura', 'fever', 'flu', 'congestion', 'bronchitis'],
    taKeywords: ['சளி', 'இருமல்', 'கபம்', 'சுவாசம்', 'ஆஸ்துமா', 'மூக்கடைப்பு', 'தொண்டை', 'காய்ச்சல்', 'கபசூர', 'நிலவேம்பு', 'தலைபாரம்'],
    enAnswer:
      'For respiratory distress, cold, and cough, traditional Siddha recommends classical decoctions like Kabasura Kudineer and Nilavembu Kudineer, along with Sinocof Cough Syrup. These clear airway congestion, soothe throat irritation, and build immunity. Adults take 60ml of prepared warm decoction twice daily before food.',
    taAnswer:
      'சுவாசப் பாதை சளி, வறட்டு இருமல் மற்றும் காய்ச்சலுக்கு பாரம்பரிய கபசூர குடிநீர், நிலவேம்பு குடிநீர் மற்றும் சினோகாஃப் சிரப் சிறந்த பலனளிக்கும். இவை கபத்தை கரைத்து, தொண்டை எரிச்சலைத் தணிக்கும். பெரியவர்கள் 60 மி.லி வெதுவெதுப்பான குடிநீரை உணவுக்கு முன் காலை மற்றும் மாலை அருந்தலாம்.',
    linkUrl: '/shop?concern=respiratory',
    linkTitleEn: 'Browse Respiratory Range',
    linkTitleTa: 'சுவாச மருந்துகளை பார்க்க',
    followUps: [
      { labelEn: 'How to prepare Kudineer?', labelTa: 'குடிநீர் தயாரிக்கும் முறை?', query: 'How to prepare Kudineer decoction?' },
      { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகை திட்டம்', query: 'What are the current offers?' },
      { labelEn: 'Free Shipping inside TN', labelTa: 'இலவச டெலிவரி விபரம்', query: 'Delivery timelines in Tamil Nadu' }
    ]
  },
  jointMobility: {
    enKeywords: ['joint', 'pain', 'arthritis', 'knee', 'back pain', 'muscle', 'swelling', 'oil', 'thailam', 'vatham', 'spondylosis', 'sciatica', 'neck pain'],
    taKeywords: ['மூட்டு', 'வலி', 'வாத', 'முழங்கால்', 'இடுப்பு', 'வீக்கம்', 'தைலம்', 'தசை', 'கழுத்து வலி', 'முதுகு வலி', 'மசாஜ்'],
    enAnswer:
      'For joint pain, knee stiffness, and muscle aches, we recommend external massage with Rej-Viyan Pain Oil or Pinda Thailam paired with Sarvanga Vatha Chooranam or Amukkara Chooranam internally. Warm the oil gently, massage for 10 minutes, and foment with warm water.',
    taAnswer:
      'மூட்டு வலி, முழங்கால் தேய்மானம் மற்றும் வாத வலிகளுக்கு ரெஜ்-வியான் வலி தைலம் அல்லது பிண்ட தைல மசாஜ் மற்றும் சர்வாங்க வாத சூரணம், அமுக்கரா சூரணம் பரிந்துரைக்கப்படுகின்றன. தைலத்தை லேசாக சூடாக்கி தேய்த்து 30 நிமிடத்திற்குப் பின் வெந்நீர் ஒத்தடம் கொடுக்கலாம்.',
    linkUrl: '/shop?concern=joint-mobility',
    linkTitleEn: 'Browse Joint & Pain Relief',
    linkTitleTa: 'மூட்டு வலி மருந்துகளை பார்க்க',
    followUps: [
      { labelEn: 'How to apply Thailam?', labelTa: 'தைலம் பயன்படுத்தும் முறை?', query: 'How to apply pain oil properly?' },
      { labelEn: 'Check 5+1 Discounts', labelTa: '5+1 தள்ளுபடி விபரம்', query: 'What are the offers on bulk orders?' },
      { labelEn: 'Doctor Consultation', labelTa: 'மருத்துவ ஆலோசனை', query: 'How to contact Ruthra doctor desk?' }
    ]
  },
  digestive: {
    enKeywords: ['digest', 'acidity', 'gas', 'constipation', 'ulcer', 'stomach', 'bloating', 'gerd', 'indigestion', 'appetite', 'piles', 'laxative', 'triphala'],
    taKeywords: ['செரிமானம்', 'அமிலம்', 'அசிடிட்டி', 'வாயு', 'மலச்சிக்கல்', 'குடல் புண்', 'வயிறு', 'பசி', 'மூலம்', 'திரிபலா', 'ஏப்பம்'],
    enAnswer:
      'For acidity, gas, indigestion, and constipation, authentic preparations like Triphala Chooranam, Ashta Chooranam, and Eladi Chooranam help cleanse the digestive tract and regulate gastric fire. Take 3 to 5g with warm water after meals.',
    taAnswer:
      'செரிமான கோளாறு, நெஞ்செரிச்சல், வாயுத்தொல்லை மற்றும் மலச்சிக்கலுக்கு திரிபலா சூரணம், அஷ்ட சூரணம் மற்றும் ஏலாதி சூரணம் உதவும். உணவுக்குப் பின் 3 முதல் 5 கிராம் பொடியை வெந்நீரில் கலந்து சாப்பிடலாம்.',
    linkUrl: '/shop?concern=digestive-wellness',
    linkTitleEn: 'Browse Digestive Range',
    linkTitleTa: 'செரிமான மருந்துகளை பார்க்க',
    followUps: [
      { labelEn: 'Triphala Chooranam dosage', labelTa: 'திரிபலா சூரணம் அளவு', query: 'What is Triphala Chooranam dosage?' },
      { labelEn: 'Free Shipping inside TN', labelTa: 'இலவச டெலிவரி', query: 'Delivery timelines in Tamil Nadu' },
      { labelEn: '5+1 Volume Offers', labelTa: '5+1 சலுகைகள்', query: 'What are the current offers?' }
    ]
  },
  metabolic: {
    enKeywords: ['diabetes', 'sugar', 'glucose', 'vitality', 'stamina', 'energy', 'liver', 'detox', 'immunity', 'weight', 'ashwagandha', 'amukkara', 'madhura'],
    taKeywords: ['சர்க்கரை', 'நீரிழிவு', 'பலம்', 'உடல்பலம்', 'ஈரல்', 'ரத்த சுத்தி', 'நோய் எதிர்ப்பு', 'அமுக்கரா', 'அஸ்வகந்தா', 'மதுரா'],
    enAnswer:
      'For healthy blood sugar balance, Ruthra Madhura Powder (with Jamun, Meshashringi, Karela, Vijaysar) aids glycemic regulation. For stamina and vitality, Amukkara / Ashwagandha Chooranam provides deep rejuvenation. Take 3g with warm water or milk twice daily.',
    taAnswer:
      'ரத்த சர்க்கரை சமநிலைக்கு நாவல் விதை, சிறுகுறிஞ்சான், பாகற்காய் அடங்கிய ரூத்ரா மதுரா பவுடர் உதவுகிறது. உடல் பலம் மற்றும் புத்துணர்ச்சிக்கு அமுக்கரா சூரணம் சிறந்தது. தினமும் காலை, இரவு 3 கிராம் பொடியை வெந்நீர் அல்லது பாலில் உணவுக்கு முன் சாப்பிடலாம்.',
    linkUrl: '/shop?concern=metabolic-wellness',
    linkTitleEn: 'Browse Vitality & Sugar Care',
    linkTitleTa: 'சர்க்கரை & உடல் பலம் மருந்துகள்',
    followUps: [
      { labelEn: 'What is 5+1 offer?', labelTa: '5+1 சலுகை விபரம்', query: 'Tell me about 5+1 offer' },
      { labelEn: 'Delivery Timeline', labelTa: 'டெலிவரி காலம்', query: 'What is the delivery time?' },
      { labelEn: 'Talk to Doctor', labelTa: 'மருத்துவரிடம் பேச', query: 'How to contact Ruthra doctor desk?' }
    ]
  },
  skinHair: {
    enKeywords: ['skin', 'hair', 'hair fall', 'dandruff', 'eczema', 'itching', 'glow', 'pimples', 'acne', 'psoriasis', 'nalangu', 'shikakai'],
    taKeywords: ['தோல்', 'கூந்தல்', 'முடி', 'பொடுகு', 'படை', 'அரிப்பு', 'முகப்பரு', 'நலங்கு மாவு', 'முடி உதிர்தல்', 'சிகைக்காய்'],
    enAnswer:
      'For skin clarity, pimples, and hair roots, pure herbal Nalangu Maavu bath powder and natural Shikakai powder offer 100% soap-free cleansing. For chronic skin itching, Parangipattai Chooranam is traditionally used under guidance.',
    taAnswer:
      'தோல் ஆரோக்கியம், முகப்பரு மற்றும் கூந்தல் வளர்ச்சிக்கு தூய நலங்கு மாவு மற்றும் சிகைக்காய் பொடி உகந்தது. படை, அரிப்பு மற்றும் ரத்த சுத்திக்கு பரங்கிப்பட்டை சூரணம் பாரம்பரியமாக பயன்படுகிறது.',
    linkUrl: '/shop?concern=skin-hair',
    linkTitleEn: 'Browse Skin & Hair Care',
    linkTitleTa: 'தோல் & கூந்தல் மருந்துகள்',
    followUps: [
      { labelEn: 'How to use Nalangu Maavu?', labelTa: 'நலங்கு மாவு முறை', query: 'How to use Nalangu Maavu?' },
      { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகை திட்டம்', query: 'What are current offers?' },
      { labelEn: 'Free Shipping inside TN', labelTa: 'இலவச டெலிவரி', query: 'Delivery timelines in Tamil Nadu' }
    ]
  }
};

/**
 * Main Analyzer & Responder
 */
export function queryDomainKnowledge(userQuery: string, language: 'en' | 'ta' = 'en'): AIResponse {
  const raw = userQuery.trim().toLowerCase();
  const isTa = language === 'ta';

  // 1. GREETING INTENT (e.g. "hi", "hello", "vanakkam", "வணக்கம்", "hey")
  const isGreeting =
    raw === 'hi' ||
    raw === 'hello' ||
    raw === 'hey' ||
    raw === 'vanakkam' ||
    raw === 'வணக்கம்' ||
    raw === 'hi there' ||
    raw === 'good morning' ||
    raw === 'good evening';

  if (isGreeting) {
    return {
      reply: isTa
        ? `வணக்கம்! நான் ரூத்ரா மெடிசின்ஸ் AI மருத்துவ உதவியாளர்.\n\nநான் உங்களுக்கு உதவக்கூடியவை:\n1. உங்கள் உடல்நலனுக்கான மருந்து ஆலோசனை\n2. 5+1 திட்டம் & தள்ளுபடி சலுகைகள்\n3. தமிழ்நாடு முழுவதும் இலவச டெலிவரி\n4. மருந்து உண்ணும் முறை & அளவு\n5. திருநெல்வேலி உதவி மையம்\n\nஉங்கள் கேள்வியை தட்டச்சு செய்யவும் அல்லது கீழே உள்ள விருப்பங்களில் ஒன்றைத் தேர்வு செய்யவும்.`
        : `Vanakkam! I am the Ruthra Medicines AI Assistant.\n\nI can directly assist you with:\n1. Medicine guidance for your symptoms\n2. 5+1 scheme & volume discounts\n3. Free shipping inside TN\n4. Dosage & how to take\n5. Tirunelveli support desk\n\nPlease type your question below or select a suggested topic.`,
      quickReplies: [
        { labelEn: 'Joint Pain Remedies', labelTa: 'மூட்டு வலி நிவாரணம்', query: 'Joint pain medicines' },
        { labelEn: 'Cough & Cold Care', labelTa: 'சளி & இருமல் மருந்துகள்', query: 'Remedies for cold and cough' },
        { labelEn: '5+1 Scheme & Offers', labelTa: '5+1 சலுகை திட்டம்', query: 'What are the current offers?' }
      ]
    };
  }

  // 2. PINCODE / DELIVERY INQUIRY
  const pinMatch = raw.match(/\b\d{6}\b/);
  const asksDelivery =
    raw.includes('delivery') ||
    raw.includes('shipping') ||
    raw.includes('courier') ||
    raw.includes('pincode') ||
    raw.includes('pin code') ||
    raw.includes('free shipping') ||
    raw.includes('டெலிவரி') ||
    raw.includes('அஞ்சல்') ||
    raw.includes('கொரியர்') ||
    raw.includes('எப்போது வரும்') ||
    pinMatch !== null;

  if (asksDelivery) {
    if (pinMatch) {
      const pin = pinMatch[0];
      const estimate = getDeliveryEstimate(pin);
      if (estimate && estimate.zone !== 'invalid') {
        const districtStr = isTa ? estimate.districtTa : estimate.district;
        const timeStr = isTa ? estimate.deliveryTimeTa : estimate.deliveryTimeEn;
        const partnerStr = isTa ? estimate.courierPartnerTa : estimate.courierPartnerEn;

        return {
          reply: isTa
            ? `அஞ்சல் குறியீடு ${pin} (${districtStr}) டெலிவரி விபரம்:\n\n- மதிப்பிடப்பட்ட காலம்: ${timeStr}\n- கூரியர் சேவை: ${partnerStr}\n- கட்டணம்: தமிழ்நாடு முழுவதும் 100% இலவச டெலிவரி\n- பணம் செலுத்தும் முறை: ஆன்லைன் பேமெண்ட் மற்றும் கேஷ் ஆன் டெலிவரி (COD) வசதி உண்டு.`
            : `Delivery Details for PIN ${pin} (${districtStr}):\n\n- Estimated Timeline: ${timeStr}\n- Courier Partner: ${partnerStr}\n- Shipping Fee: Free Shipping inside TN\n- Payment Options: Online Payment and Cash on Delivery (COD) available.`,
          links: [
            { labelEn: 'View Shipping Policy', labelTa: 'டெலிவரி விபர பக்கம்', url: '/shipping' }
          ],
          quickReplies: [
            { labelEn: 'Check 5+1 Offers', labelTa: '5+1 சலுகை திட்டம்', query: 'What are the current offers?' },
            { labelEn: 'Joint Pain Remedies', labelTa: 'மூட்டு வலி நிவாரணம்', query: 'Joint pain medicines' },
            { labelEn: 'Contact Helpdesk', labelTa: 'உதவி மையம் தொடர்பு', query: 'How to contact Ruthra?' }
          ]
        };
      }
    }

    return {
      reply: isTa
        ? `ரூத்ரா மெடிசின்ஸ் விநியோக கால அளவு:\n\n- தென் மாவட்டங்கள் (திருநெல்வேலி, தென்காசி, மதுரை, தூத்துக்குடி): அடுத்த நாள் 24 மணி நேர டெலிவரி.\n- சென்னை, கோவை, திருச்சி உள்ளிட்ட இதர தமிழக மாவட்டங்கள்: 24 முதல் 48 மணி நேரம்.\n- பிற மாநிலங்கள்: 3 முதல் 5 வேலை நாட்கள்.\n- தமிழ்நாடு முழுவதும் அனைத்து ஆர்டர்களுக்கும் இலவச டெலிவரி உண்டு.\n\nஉங்கள் 6 இலக்க பின்கோடை உள்ளிட்டால் துல்லியமான நேரத்தை அறியலாம்.`
        : `Ruthra Medicines Delivery Timelines:\n\n- South TN Hub (Tirunelveli, Tenkasi, Madurai, Tuticorin): Next-Day 24 Hours Delivery.\n- Central & North TN (Chennai, Coimbatore, Trichy, Salem): 24 to 48 Hours.\n- Rest of India: 3 to 5 Business Days.\n- Free shipping inside TN on all orders.\n\nEnter your 6-digit PIN code for local delivery details.`,
      links: [
        { labelEn: 'View Shipping Information', labelTa: 'டெலிவரி விபர பக்கம்', url: '/shipping' }
      ],
      quickReplies: [
        { labelEn: 'Check 600001 (Chennai)', labelTa: '600001 (சென்னை)', query: 'Delivery for 600001' },
        { labelEn: 'Check 627001 (Tirunelveli)', labelTa: '627001 (திருநெல்வேலி)', query: 'Delivery for 627001' },
        { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகை திட்டம்', query: 'What are the current offers?' }
      ]
    };
  }

  // 3. OFFERS & VOLUME DISCOUNT INQUIRY
  const asksOffers =
    raw.includes('offer') ||
    raw.includes('discount') ||
    raw.includes('5+1') ||
    raw.includes('free medicine') ||
    raw.includes('free gift') ||
    raw.includes('bulk') ||
    raw.includes('wholesale') ||
    raw.includes('சலுகை') ||
    raw.includes('தள்ளுபடி') ||
    raw.includes('இலவச மருந்து') ||
    raw.includes('ஆபர்');

  if (asksOffers) {
    return {
      reply: isTa
        ? `ரூத்ரா மெடிசின்ஸ் நேரடி தள்ளுபடி & இலவச மருந்து திட்டங்கள்:\n\n1. 5+1 திட்டம் (10% தள்ளுபடி):\n5 முதல் 29 மருந்துகள் வாங்கும் போது, 10% நேரடி தள்ளுபடியுடன் ஒவ்வொரு 5 மருந்துகளுக்கும் 1 இலவச மருந்து கிடைக்கும்.\n\n2. 30+ மொத்த திட்டம் (20% தள்ளுபடி):\n30 முதல் 49 மருந்துகள் வாங்கும் போது, 20% மொத்த தள்ளுபடியுடன் 6 முதல் 9 இலவச மருந்துகள் கிடைக்கும்.\n\n3. 50+ மெகா திட்டம்:\n50 அல்லது அதற்கு மேற்பட்ட மருந்துகள் வாங்கும் போது, 20% தள்ளுபடியுடன் 15+ இலவச மருந்துகள் பெறலாம்.\n\nஅனைத்து ஆர்டர்களுக்கும் தமிழ்நாடு முழுவதும் இலவச அஞ்சல் சேவை உண்டு.`
        : `Ruthra Medicines Direct Savings & Volume Schemes:\n\n1. 5+1 Tier (10% OFF):\nOrder 5 to 29 items to receive an instant 10% discount plus 1 Free bonus medicine for every 5 items.\n\n2. 30+ Bulk Tier (20% OFF):\nOrder 30 to 49 items to unlock 20% bill discount plus 6 to 9 free bonus medicines.\n\n3. 50+ Wholesale Mega Tier:\nOrder 50 or more items for 20% bill discount plus 15+ free bonus medicines.\n\nFree shipping inside TN applies on all orders.`,
      links: [
        { labelEn: 'View Full Offers Breakdown', labelTa: 'முழு சலுகை விபரங்கள்', url: '/offers' }
      ],
      quickReplies: [
        { labelEn: 'How to claim free gift?', labelTa: 'இலவச மருந்து பெறுவது எப்படி?', query: 'How to claim free bonus medicine in 5+1 offer?' },
        { labelEn: 'Free Shipping inside TN', labelTa: 'இலவச டெலிவரி விபரம்', query: 'Delivery timelines in Tamil Nadu' },
        { labelEn: 'Joint Pain Remedies', labelTa: 'மூட்டு வலி நிவாரணம்', query: 'Joint pain medicines' }
      ]
    };
  }

  // 4. CONTACT & CLINIC DESK INQUIRY
  const asksContact =
    raw.includes('contact') ||
    raw.includes('phone') ||
    raw.includes('call') ||
    raw.includes('address') ||
    raw.includes('location') ||
    raw.includes('doctor') ||
    raw.includes('clinic') ||
    raw.includes('helpdesk') ||
    raw.includes('whatsapp') ||
    raw.includes('support') ||
    raw.includes('தொடர்பு') ||
    raw.includes('முகவரி') ||
    raw.includes('தொலைபேசி') ||
    raw.includes('மருத்துவர்') ||
    raw.includes('கிளினிக்') ||
    raw.includes('திருநெல்வேலி');

  if (asksContact) {
    return {
      reply: isTa
        ? `ரூத்ரா சித்த மருத்துவ உதவி மையம் (திருநெல்வேலி):\n\n- முகவரி: 7/213, எம்.ஜி.ஆர் நகர், வடக்கு அரியநாயகிபுரம் பேட்டை, திருநெல்வேலி, தமிழ்நாடு - 627010.\n- உதவி எண்கள்: +91 91715 08042 / +91 82201 90029\n- மின்னஞ்சல்: care@ruthramedicos.com\n- சேவை நேரம்: திங்கள் முதல் சனி வரை காலை 9:00 - இரவு 8:00 மணி வரை.\n- வாட்ஸ்அப் உதவி: மருத்துவர் ஆலோசனைக்கு நேரடி வாட்ஸ்அப்பில் தொடர்பு கொள்ளலாம்.`
        : `Ruthra Siddha Dispatch & Support Desk (Tirunelveli):\n\n- Address: 7/213, MGR Nagar, North Ariyanayagipuram, Petta, Tirunelveli, Tamil Nadu 627010.\n- Phone Hotline: +91 91715 08042 / +91 82201 90029\n- Email: care@ruthramedicos.com\n- Operating Hours: Monday to Saturday, 9:00 AM to 8:00 PM IST.\n- WhatsApp Support: Direct consultation and order assistance available.`,
      links: [
        { labelEn: 'Go to Contact Page', labelTa: 'தொடர்பு பக்கத்திற்கு செல்ல', url: '/contact' }
      ],
      quickReplies: [
        { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகை திட்டம்', query: 'What are the current offers?' },
        { labelEn: 'Free Shipping inside TN', labelTa: 'இலவச டெலிவரி', query: 'Delivery timelines in Tamil Nadu' },
        { labelEn: 'Browse Catalog', labelTa: 'அனைத்து மருந்துகள்', query: 'Show all categories' }
      ]
    };
  }

  // 5. DOSAGE & ANUPANAM INQUIRY
  const asksDosage =
    raw.includes('dosage') ||
    raw.includes('how to use') ||
    raw.includes('how to take') ||
    raw.includes('anupanam') ||
    raw.includes('vehicle') ||
    raw.includes('eating') ||
    raw.includes('how to prepare') ||
    raw.includes('சாப்பிடும் முறை') ||
    raw.includes('மருந்து உட்கொள்ளும் முறை') ||
    raw.includes('அனுபானம்') ||
    raw.includes('எப்போது குடிக்க வேண்டும்') ||
    raw.includes('தயாரிக்கும் முறை');

  if (asksDosage) {
    return {
      reply: isTa
        ? `சித்த & ஆயுர்வேத மருந்து உட்கொள்ளும் பொதுவான வழிகாட்டுதல்:\n\n1. சூரணம் (Chooranam): 3 முதல் 5 கிராம் பொடியை வெந்நீர், தேன் அல்லது பசும்பாலில் உணவுக்குப் பின் உட்கொள்ள வேண்டும்.\n2. குடிநீர் (Kudineer): 5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லி ஆகும் வரை கொதிக்க வைத்து வடிகட்டி வெதுவெதுப்பாக குடிக்க வேண்டும்.\n3. லேகியம் (Legiyam): 5-10 கிராம் அளவு காலை/இரவு உணவுக்குப் பின் பாலுடன் உட்கொள்ளலாம்.\n4. தைலம் (Thailam): வெளிப்புற பயன்பாட்டிற்கு மட்டுமே. மிதமான சூட்டில் தேய்த்து 30 நிமிடம் கழித்து வெந்நீரில் குளிக்க வேண்டும்.`
        : `General Siddha & Ayurveda Dosage & Preparation Guidelines:\n\n1. Chooranam (Powders): Typically 3 to 5g taken with warm water, honey, or warm milk after meals.\n2. Kudineer (Decoctions): Boil 5 to 10g powder in 240ml water until reduced to 60ml. Strain and drink warm before food.\n3. Legiyam (Electuaries): 5 to 10g morning and night after food, followed by warm milk.\n4. Thailam (Oils): Strictly for external use. Warm gently, apply to affected area, and wash with warm water after 30 minutes.`,
      links: [
        { labelEn: 'Explore Full Catalog', labelTa: 'அனைத்து மருந்துகளை பார்க்க', url: '/shop' }
      ],
      quickReplies: [
        { labelEn: 'Respiratory Remedies', labelTa: 'சுவாச நலம் மருந்துகள்', query: 'Medicines for cough and respiratory' },
        { labelEn: 'Joint Pain Oils', labelTa: 'மூட்டு வலி நிவாரணம்', query: 'Joint pain medicines' },
        { labelEn: '5+1 Scheme & Offers', labelTa: '5+1 சலுகைகள்', query: 'What are the current offers?' }
      ]
    };
  }

  // 6. DIRECT PRODUCT LOOKUP (by exact name)
  const productMatch = PRODUCTS.find(p => {
    const n = p.name.toLowerCase();
    const tn = (p.tamilName || '').toLowerCase();
    const sl = p.slug.toLowerCase();
    return raw.includes(n) || (tn && raw.includes(tn)) || raw.includes(sl);
  });

  if (productMatch) {
    const title = isTa ? productMatch.tamilName : productMatch.name;
    const desc = isTa ? productMatch.descriptionTa : productMatch.description;
    const role = isTa ? productMatch.traditionalRoleTa : productMatch.traditionalRole;
    const pack = isTa ? productMatch.packSizeTa : productMatch.packSize;
    const form = isTa ? productMatch.formulationTa : productMatch.formulation;

    return {
      reply: isTa
        ? `${title} பற்றிய விபரம்:\n\n- வகை: ${form} (${pack})\n- விலை: ₹${productMatch.price}\n- பயன்கள்: ${role || desc}\n- விநியோகம்: திருநெல்வேலியிலிருந்து நேரடி விரைவு டெலிவரி.`
        : `Details for ${title}:\n\n- Formulation: ${form} (${pack})\n- Price: ₹${productMatch.price}\n- Traditional Benefits: ${role || desc}\n- Shipping: Direct dispatch from Tirunelveli with Free shipping inside TN.`,
      links: [
        {
          labelEn: `View ${productMatch.name} Page`,
          labelTa: `${productMatch.tamilName || productMatch.name} பக்கம்`,
          url: `/product/${productMatch.slug}`
        }
      ],
      quickReplies: [
        { labelEn: 'How to take this?', labelTa: 'சாப்பிடும் முறை என்ன?', query: 'What is the dosage and how to use?' },
        { labelEn: '5+1 Scheme on this', labelTa: '5+1 சலுகை விபரம்', query: 'What is the 5+1 offer?' },
        { labelEn: 'Free Shipping inside TN', labelTa: 'இலவச டெலிவரி', query: 'Delivery timelines in Tamil Nadu' }
      ]
    };
  }

  // 7. SYMPTOM / CONCERN LOOKUP
  for (const [, symptomData] of Object.entries(SYMPTOM_MAP)) {
    const matchedEn = symptomData.enKeywords.some(kw => raw.includes(kw));
    const matchedTa = symptomData.taKeywords.some(kw => raw.includes(kw));
    if (matchedEn || matchedTa) {
      return {
        reply: isTa ? symptomData.taAnswer : symptomData.enAnswer,
        links: [
          {
            labelEn: symptomData.linkTitleEn,
            labelTa: symptomData.linkTitleTa,
            url: symptomData.linkUrl
          }
        ],
        quickReplies: symptomData.followUps
      };
    }
  }

  // 8. DEFAULT FALLBACK
  return {
    reply: isTa
      ? `வணக்கம்! நான் ரூத்ரா மெடிசின்ஸ் AI மருத்துவ உதவியாளர்.\n\nநான் உங்களுக்கு உதவக்கூடியவை:\n1. உங்கள் உடல்நலனுக்கான மருந்து ஆலோசனை\n2. 5+1 திட்டம் & தள்ளுபடி சலுகைகள்\n3. தமிழ்நாடு முழுவதும் இலவச டெலிவரி\n4. மருந்து உண்ணும் முறை & அளவு\n5. திருநெல்வேலி உதவி மையம்\n\nஉங்கள் கேள்வியை தட்டச்சு செய்யவும் அல்லது கீழே உள்ள விருப்பங்களில் ஒன்றைத் தேர்வு செய்யவும்.`
      : `Vanakkam! I am the Ruthra Medicines AI Assistant.\n\nI can directly assist you with:\n1. Medicine guidance for your symptoms\n2. 5+1 scheme & volume discounts\n3. Free shipping inside TN\n4. Dosage & how to take\n5. Tirunelveli support desk\n\nPlease type your question below or select a suggested topic.`,
    quickReplies: [
      { labelEn: 'Joint Pain Remedies', labelTa: 'மூட்டு வலி நிவாரணம்', query: 'Joint pain medicines' },
      { labelEn: 'Cough & Cold Care', labelTa: 'சளி & இருமல் மருந்துகள்', query: 'Remedies for cold and cough' },
      { labelEn: '5+1 Scheme & Offers', labelTa: '5+1 சலுகை திட்டம்', query: 'What are the current offers?' }
    ]
  };
}
