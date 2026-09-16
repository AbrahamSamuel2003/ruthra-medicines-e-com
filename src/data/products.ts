import { Product, ConcernCategory, FormulationCategory, BundleItem } from '@/types/product';

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. CHOORANAM (12 FORMULATIONS - 30 SACHETS)
  // ==========================================
  {
    id: 'prod-01',
    name: 'Ruthra Amirtha Sanjeevi Chooranam',
    tamilName: 'ருத்ரா அமிர்த சஞ்சீவி சூரணம்',
    slug: 'ruthra-amirtha-sanjeevi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['metabolic-wellness', 'womens-wellness'],
    price: 234,
    originalPrice: 260,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Potent classical Siddha formulation crafted to balance systemic Pitta, soothe genito-urinary tract distress, and nourish peripheral nerve tissues.',
    shortDescriptionTa: 'உடல் பித்த உபாதைகளை தணித்து, சிறுநீர் பாதை நோய்கள் மற்றும் நரம்பு வலிகளுக்கு உடனடி நிவாரணம் தரும் பாரம்பரிய சித்த சூரணம்.',
    description: 'Ruthra Amirtha Sanjeevi Chooranam is prepared in strict accordance with the classical Siddha formulary. Compounded with cooling and restorative botanicals, it pacifies deep-seated Pitta aggravation, relieves burning micturition, supports genito-urinary healing (including leucorrhea and inflammatory conditions), and eases peripheral neuritis and osteomyelitis discomfort.',
    descriptionTa: 'அமிர்த சஞ்சீவி சூரணம் பித்த தோஷத்தை சீராக்கி, சிறுநீர் எரிச்சல், வெள்ளைப்படுதல், எலும்பு மஜ்ஜை அழற்சி மற்றும் நரம்பு எரிச்சலை குணப்படுத்த உதவும் உன்னத தயாரிப்பு.',
    traditionalRole: 'Pacifies Pitta, relieves genito-urinary inflammation, leucorrhea, osteomyelitis, and peripheral nerve weakness.',
    traditionalRoleTa: 'பித்த சமநிலை, சிறுநீரக பாதை நோய்கள், வெள்ளைப்படுதல் மற்றும் நரம்பு வலுவின்மைக்கு பாரம்பரிய பயன்பாடு.',
    badge: 'Pitta & Urinary Care',
    badgeTa: 'பித்த & சிறுநீர் நலம்',
    image: '/images/products/ruthra-amirtha-sanjeevi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/front.jpg',
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/angle.jpg',
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/front.jpg',
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/angle.jpg',
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Thiripala (Amla, Haritaki, Bibhitaki)', tamilName: 'திரிபலா', botanicalName: 'Triphala blend', role: 'Cleanses colon and dispels toxin accumulation', roleTa: 'குடல் கழிவுகளை நீக்கி நச்சுக்களை அகற்றும்', amount: '35%' },
      { name: 'Thirikadugu (Pepper, Long Pepper, Ginger)', tamilName: 'திரிகடுகம்', botanicalName: 'Trikatu blend', role: 'Ignites metabolic fire and reduces inflammation', roleTa: 'செரிமான தீயை தூண்டி வீக்கத்தை குறைக்கும்', amount: '30%' },
      { name: 'Sirupeelai', tamilName: 'சிறுபீளை', botanicalName: 'Aerva lanata', role: 'Lithotriptic action for kidney gravel', roleTa: 'சிறுநீரக கல்லை கரைக்கும் மூலிகை', amount: '20%' },
      { name: 'Chithiramoolam', tamilName: 'சித்திரமூலம்', botanicalName: 'Plumbago zeylanica', role: 'Relieves deep joint and muscular pain', roleTa: 'வாத வலிகளை நீக்கும்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Single Sachet', titleTa: '1 பாக்கெட்', instruction: 'Take 1 sachet twice daily.', instructionTa: 'தினமும் 1 பாக்கெட் இருவேளை எடுக்கவும்.' },
      { step: '02', title: 'Warm Water Mix', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Stir well in 150ml warm water or light buttermilk.', instructionTa: '150 மி.லி வெந்நீர் அல்லது மோரில் கலக்கவும்.' },
      { step: '03', title: 'After Food', titleTa: 'உணவுக்குப் பின்', instruction: 'Consume 30 minutes after meals.', instructionTa: 'உணவுக்கு 30 நிமிடம் கழித்து பருகவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Twice daily',
      timing: 'Post-prandial (after meals)',
      vehicle: 'Warm water or buttermilk',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது மோர்'
    },
    safety: {
      pregnancy: 'Consult physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனையுடன் உட்கொள்ளவும்.',
      children: 'Suitable above 8 years under guidance.',
      childrenTa: '8 வயதுக்கு மேற்பட்டோருக்கு உகந்தது.',
      interactions: 'Safe with all traditional therapies.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Drink ample warm water.'],
      precautionsTa: ['வெதுவெதுப்பான நீர் அதிகம் குடிக்கவும்.']
    },
    storage: {
      conditions: 'Store away from moisture and direct light.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Why is it named Sagala Noi Chooranam?',
        questionTa: 'சகல நோய் சூரணம் என்று ஏன் அழைக்கப்படுகிறது?',
        answer: 'Because of its broad-spectrum balancing effect across Vatha, Pitha, and Kapha disorders including pain, digestion, and urinary ease.',
        answerTa: 'வாதம், பித்தம், கபம் மூன்றையும் சமன் செய்து பல உபாதைகளுக்கு தீர்வளிப்பதால் இப்பெயர் பெற்றது.'
      }
    ],
    searchKeywords: ['sagala noi', 'universal chooranam', 'back pain', 'headache', 'edema', 'lithiasis', 'arthritis'],
    tamilKeywords: ['சகல நோய்', 'சூரணம்', 'முதுகு வலி', 'தலைவலி', 'வீக்கம்', 'சிறுநீரக கல்', 'மூட்டு வலி'],
    inStock: true,
    featured: false
  },
  {
    id: 'prod-06',
    name: 'Ruthra Madhura Chooranam',
    tamilName: 'ருத்ரா மதுரா சூரணம்',
    slug: 'ruthra-madhura-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['metabolic-wellness'],
    price: 375,
    originalPrice: 420,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Comprehensive botanical formula for Type-II Diabetes Mellitus and its secondary microvascular and neuropathic complications.',
    shortDescriptionTa: 'டைப்-2 சர்க்கரை நோய், உடல் சோர்வு மற்றும் சர்க்கரையினால் ஏற்படும் நரம்பு கோளாறுகளுக்கு உன்னத மூலிகை சூரணம்.',
    description: 'Ruthra Madhura Chooranam is formulated with bitter and astringent botanicals known in Siddha for balancing Madhumegham (diabetes). It supports natural insulin sensitivity, reduces post-prandial glucose spikes, protects kidney micro-vessels, and relieves chronic diabetic fatigue and leg cramps.',
    descriptionTa: 'மதுரா சூரணம் சர்க்கரை அளவை கட்டுக்குள் வைக்கவும், கணையத்தின் செயல்பாட்டை சீராக்கவும், சர்க்கரை நோயாளிகளுக்கு ஏற்படும் கால் நரம்பு குடைச்சல், சோர்வு மற்றும் கண் மங்கலை போக்கவும் உதவுகிறது.',
    traditionalRole: 'Supports Type-II Diabetes Mellitus management and prevents long-term diabetic complications.',
    traditionalRoleTa: 'டைப்-2 சர்க்கரை நோய் மேலாண்மை மற்றும் நரம்பு சோர்வு நீக்கம்.',
    badge: 'Diabetes Care Pro',
    badgeTa: 'சர்க்கரை மேலாண்மை',
    image: '/images/products/ruthra-madhura-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-madhura-chooranam/front.jpg',
      '/images/products/ruthra-madhura-chooranam/angle.jpg',
      '/images/products/ruthra-madhura-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-madhura-chooranam/front.jpg',
      '/images/products/ruthra-madhura-chooranam/angle.jpg',
      '/images/products/ruthra-madhura-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Mudakathan (Balloon Vine)', tamilName: 'முடக்கத்தான்', botanicalName: 'Cardiospermum halicacabum', role: 'Dissolves uric acid crystals and joint stiffness', roleTa: 'மூட்டு பிடிப்பு மற்றும் வாதத்தை போக்கும்', amount: '30%' },
      { name: 'Vathanarayana', tamilName: 'வாத நாராயணன்', botanicalName: 'Delonix elata', role: 'Calms acute neuropathic shooting pain', roleTa: 'நரம்பு குடைச்சலை நீக்கும்', amount: '25%' },
      { name: 'Karpooram (Camphor)', tamilName: 'பச்சை கற்பூரம்', botanicalName: 'Cinnamomum camphora', role: 'Promotes rapid micro-vascular absorption and cooling relief', roleTa: 'விரைவாக ஊடுருவி உடனடி நிவாரணம் தரும்', amount: '15%' },
      { name: 'Nilgiri Thailam (Eucalyptus Oil)', tamilName: 'நீலகிரி தைலம்', botanicalName: 'Eucalyptus globulus', role: 'Warming analgesic for tense muscle fibers', roleTa: 'தசை வலிகளை தளர்த்தும்', amount: '15%' },
      { name: 'Nalla Ennai (Pure Sesame Oil Base)', tamilName: 'நல்லெண்ணெய்', botanicalName: 'Sesamum indicum', role: 'Deep penetrating transdermal lipid base', roleTa: 'ஆழமாக ஊடுருவும் தூய நல்லெண்ணெய்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Apply Generously', titleTa: 'எண்ணெய் தடவவும்', instruction: 'Pour 5-10ml oil on the affected painful joint.', instructionTa: '5-10 மி.லி எண்ணெயை வலி உள்ள இடத்தில் விடவும்.' },
      { step: '02', title: 'Gentle Massage', titleTa: 'மென்மையாக மசாஜ்', instruction: 'Massage gently in circular motions for 5 minutes.', instructionTa: '5 நிமிடம் மென்மையாக வட்ட வடிவில் தேய்க்கவும்.' },
      { step: '03', title: 'Fomentation (Optional)', titleTa: 'ஒத்தடம் (விருப்பப்பட்டால்)', instruction: 'Apply warm fomentation for deeper therapeutic benefit.', instructionTa: 'சிறந்த பலனுக்கு லேசான வெந்நீர் ஒத்தடம் கொடுக்கலாம்.' }
    ],
    dosage: {
      amount: '5ml - 10ml as needed',
      frequency: '2 to 3 times daily',
      timing: 'External application',
      vehicle: 'Direct gentle massage',
      amountTa: '5 - 10 மி.லி',
      frequencyTa: 'தினமும் 2-3 முறை',
      timingTa: 'வெளிப்புற பயன்பாடு',
      vehicleTa: 'மென்மையாக தேய்க்கவும்'
    },
    safety: {
      pregnancy: 'Safe for external application on back and limbs.',
      pregnancyTa: 'வெளிப்புறமாக பயன்படுத்த பாதுகாப்பானது.',
      children: 'Safe for children above 4 years for sprains.',
      childrenTa: '4 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு உகந்தது.',
      interactions: 'Can be combined with Sarvanga Vatha Chooranam internally.',
      interactionsTa: 'உள் மருந்துகளுடன் சேர்த்து பயன்படுத்தலாம்.',
      precautions: ['FOR EXTERNAL APPLICATION ONLY. Do not apply on open broken skin.'],
      precautionsTa: ['வெளிப்புற பயன்பாட்டிற்கு மட்டும். திறந்த புண்களில் தடவ வேண்டாம்.']
    },
    storage: {
      conditions: 'Keep bottle tightly capped away from direct heat.',
      conditionsTa: 'நேரடி வெப்பம் படாமல் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How quickly does Rej-Viyan Pain Oil work?',
        questionTa: 'ரெஜ்-வியான் தைலம் எவ்வளவு நேரத்தில் பலன் தரும்?',
        answer: 'Most users experience soothing warmth and pain relief within 10 to 15 minutes of gentle massage.',
        answerTa: 'மசாஜ் செய்த 10 முதல் 15 நிமிடங்களில் வலி குறைந்து சுகமான நிவாரணம் கிடைக்கும்.'
      }
    ],
    searchKeywords: ['rej-viyan', 'pain oil', 'thailam', 'knee pain', 'back pain', 'joint pain', 'muscle spasm', 'sprain'],
    tamilKeywords: ['ரெஜ்-வியான்', 'வலி தைலம்', 'முழங்கால் வலி', 'இடுப்பு வலி', 'கழுத்து வலி', 'சுளுக்கு'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-27',
    name: 'Ruthra Ulcera Oil – The Wound Healer',
    tamilName: 'ருத்ரா அல்சரா புண் ஆற்று தைலம்',
    slug: 'ruthra-ulcera-wound-oil',
    medicalSystem: 'proprietary',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['skin-hair'],
    price: 210,
    originalPrice: 240,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Clinically esteemed topical wound healing oil for venous ulcers, diabetic non-healing ulcers, cuts, bedsores, bruises, trauma wounds, and lacerations.',
    shortDescriptionTa: 'ஆறாத சர்க்கரை புண்கள் (Diabetic Ulcers), நரம்பு புண்கள் (Venous Ulcers), படுக்கை புண்கள் (Bedsores) மற்றும் காயங்களை விரைவாக ஆற்றும் உன்னத தைலம்.',
    description: 'Ruthra Ulcera Oil is processed with potent wound-cleansing (Vrana Shodhana) and tissue-generating (Vrana Ropana) Siddha botanicals. It clears necrotic slough, suppresses bacterial biofilm, stimulates healthy pink granulation tissue, and dramatically accelerates wound closure in chronic diabetic and venous ulcers.',
    descriptionTa: 'அல்சரா புண் ஆற்று தைலம் சர்க்கரை நோயாளிகளுக்கு ஏற்படும் ஆறாத கால் புண்கள், வெட்டுக்காயங்கள், படுக்கை புண்கள் மற்றும் தீக்காயங்களை எவ்வித வடுவும் இன்றி விரைவாக ஆற்றும் மருத்துவ குணம் கொண்டது.',
    traditionalRole: 'Accelerates wound healing for diabetic ulcers, venous stasis ulcers, bedsores, cuts, bruises, and abrasions.',
    traditionalRoleTa: 'சர்க்கரை புண்கள், படுக்கை புண்கள், வெட்டுக்காயங்கள் மற்றும் ஆறாத புண்களை ஆற்றுதல்.',
    badge: 'Clinical Wound Care',
    badgeTa: 'ஆறாத புண் நிவாரணம்',
    image: '/images/products/ruthra-ulcera-wound-oil/front.jpg',
    images: [
      '/images/products/ruthra-ulcera-wound-oil/front.jpg',
      '/images/products/ruthra-ulcera-wound-oil/angle.jpg',
      '/images/products/ruthra-ulcera-wound-oil/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ulcera-wound-oil/front.jpg',
      '/images/products/ruthra-ulcera-wound-oil/angle.jpg',
      '/images/products/ruthra-ulcera-wound-oil/back.jpg'
    ],
    ingredients: [
      { name: 'Kuppaimeni', tamilName: 'குப்பைமேனி', botanicalName: 'Acalypha indica', role: 'Potent antimicrobial and wound purifier', roleTa: 'கிருமி நாசினி மற்றும் புண் சுத்திகரிப்பு', amount: '35%' },
      { name: 'Kasthuri Manjal (Wild Turmeric)', tamilName: 'கஸ்தூரி மஞ்சள்', botanicalName: 'Curcuma aromatica', role: 'Accelerates granulation and tissue regeneration', roleTa: 'புதிய திசுக்களை உருவாக்கி புண்ணை ஆற்றும்', amount: '25%' },
      { name: 'Vembu Ennai (Pure Neem Oil)', tamilName: 'வேப்பெண்ணெய்', botanicalName: 'Azadirachta indica', role: 'Suppresses bacterial biofilms and fungal infection', roleTa: 'புற்று மற்றும் பாக்டீரியா தொற்று தடுப்பு', amount: '20%' },
      { name: 'Coconut Oil Base', tamilName: 'தூய தேங்காய் எண்ணெய்', botanicalName: 'Cocos nucifera', role: 'Cooling emollient base for non-stick dressing', roleTa: 'குளிர்ச்சி தந்து புண்ணை மென்மையாக்கும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Cleanse Wound', titleTa: 'புண்ணை சுத்தம் செய்யவும்', instruction: 'Clean the wound with sterile saline water.', instructionTa: 'புண்ணை சுத்தமான நீரால் கழுவி துடைக்கவும்.' },
      { step: '02', title: 'Apply Oil', titleTa: 'எண்ணெய் தடவவும்', instruction: 'Apply oil gently using sterile gauze or clean cotton.', instructionTa: 'சுத்தமான பஞ்சு அல்லது காஸ் துணியில் நனைத்து தடவவும்.' },
      { step: '03', title: 'Dress Gently', titleTa: 'டிரெஸ்ஸிங் செய்யவும்', instruction: 'Bandage lightly or leave exposed as advised twice daily.', instructionTa: 'லேசாக கட்டுப்போடவும்; தினமும் இருவேளை மாற்றவும்.' }
    ],
    dosage: {
      amount: 'A few drops to coat the wound surface',
      frequency: 'Twice daily',
      timing: 'External dressing',
      vehicle: 'Direct topical application / sterile gauze',
      amountTa: 'தேவைக்கேற்ப சில துளிகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'வெளிப்புற டிரெஸ்ஸிங்',
      vehicleTa: 'சுத்தமான பஞ்சால் தடவவும்'
    },
    safety: {
      pregnancy: 'Safe for external application.',
      pregnancyTa: 'வெளிப்புற பயன்பாட்டிற்கு முற்றிலும் பாதுகாப்பானது.',
      children: 'Safe for minor cuts and scrapes in children.',
      childrenTa: 'குழந்தைகளின் சிராய்ப்பு மற்றும் காயங்களுக்கு உகந்தது.',
      interactions: 'Can be used alongside oral antibiotics if prescribed.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Maintain clean sterile dressing practices for diabetic ulcers.'],
      precautionsTa: ['சர்க்கரை புண்களை சுத்தமாக பராமரிக்கவும்.']
    },
    storage: {
      conditions: 'Keep tightly closed in a cool, dark place.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Is it effective for non-healing chronic diabetic foot ulcers?',
        questionTa: 'சர்க்கரை நோயாளிகளின் ஆறாத கால் புண்களுக்கு இது பலனளிக்குமா?',
        answer: 'Yes, Ulcera Oil is specially formulated for chronic, sluggish ulcers by stimulating rapid healthy granulation.',
        answerTa: 'ஆம், சர்க்கரை நோயாளிகளுக்கு ஏற்படும் ஆறாத நாள்பட்ட புண்களை ஆற்ற பிரத்யேகமாக தயாரிக்கப்பட்டது.'
      }
    ],
    searchKeywords: ['ulcera oil', 'wound healer', 'diabetic ulcer', 'venous ulcer', 'bedsores', 'cuts', 'healing oil'],
    tamilKeywords: ['அல்சரா', 'புண் ஆற்று தைலம்', 'சர்க்கரை புண்', 'படுக்கை புண்', 'காயம்', 'வெட்டுக்காயம்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-28',
    name: 'Ruthra Narshika Hair Oil',
    tamilName: 'ருத்ரா நார்ஷிகா மூலிகை கூந்தல் தைலம்',
    slug: 'ruthra-narshika-hair-oil',
    medicalSystem: 'proprietary',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['skin-hair'],
    price: 240,
    originalPrice: 280,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Nutrient-rich traditional botanical hair oil that eradicates stubborn dandruff, controls severe hair fall, strengthens roots, and stimulates dense hair growth.',
    shortDescriptionTa: 'பொடுகு தொல்லையை முழுமையாக நீக்கி, முடி உதிர்வை தடுத்து, வேர்களை பலப்படுத்தி அடர்த்தியான கூந்தல் வளர்ச்சியை தரும் மூலிகை தைலம்.',
    description: 'Ruthra Narshika Hair Oil is processed with 15+ native botanical extracts including Bringaraja (Karisalankanni), Amla (Nellikkai), Henna, Poduthalai, and Vetiver infused into unrefined cold-pressed coconut oil. It cools an overheated scalp, nourishes micro-follicles, stops premature greying, and leaves hair lustrous and thick.',
    descriptionTa: 'நார்ஷிகா கூந்தல் தைலம் கரிசலாங்கண்ணி, நெல்லிக்காய், பொடுதலை, மருதாணி, வெட்டிவேர் உள்ளிட்ட மூலிகைகளைக் கொண்டு தேங்காய் எண்ணெயில் காய்ச்சப்படுகிறது. இது தலைச்சூட்டை தணித்து, பொடுகை போக்கி, முடி உதிர்வை நிறுத்தி அடர்த்தியாக வளரச் செய்கிறது.',
    traditionalRole: 'Controls dandruff, reduces hair fall, stimulates micro-follicles, and keeps scalp deeply nourished.',
    traditionalRoleTa: 'பொடுகு கட்டுப்பாடு, முடி உதிர்வு தடுப்பு, கூந்தல் வேர் பலம் மற்றும் அடர்த்தி.',
    badge: 'Herbal Hair Regrowth',
    badgeTa: 'மூலிகை கூந்தல் வளர்ச்சி',
    image: '/images/products/ruthra-narshika-hair-oil/front.jpg',
    images: [
      '/images/products/ruthra-narshika-hair-oil/front.jpg',
      '/images/products/ruthra-narshika-hair-oil/angle.jpg',
      '/images/products/ruthra-narshika-hair-oil/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-narshika-hair-oil/front.jpg',
      '/images/products/ruthra-narshika-hair-oil/angle.jpg',
      '/images/products/ruthra-narshika-hair-oil/back.jpg'
    ],
    ingredients: [
      { name: 'Karisalanganni (Bringaraja)', tamilName: 'கரிசலாங்கண்ணி', botanicalName: 'Eclipta prostrata', role: 'Reactivates dormant hair follicles and darkens pigment', roleTa: 'கூந்தல் வேர்களை தூண்டி கருமையை தரும்', amount: '30%' },
      { name: 'Poduthalai', tamilName: 'பொடுதலை', botanicalName: 'Phyla nodiflora', role: 'Sovereign anti-dandruff and scalp antifungal herb', roleTa: 'பொடுகு மற்றும் தலையில் அரிப்பை நீக்கும்', amount: '25%' },
      { name: 'Nellikkai (Amla)', tamilName: 'நெல்லிக்காய்', botanicalName: 'Phyllanthus emblica', role: 'Vitamin C antioxidant booster for follicle strength', roleTa: 'வைட்டமின் சி மற்றும் கூந்தல் வேர் ஊட்டச்சத்து', amount: '20%' },
      { name: 'Vettiver & Kasthuri Manjal', tamilName: 'வெட்டிவேர் & கஸ்தூரி மஞ்சள்', botanicalName: 'Aromatics', role: 'Scalp cooling and natural fragrance', roleTa: 'தலை குளிர்ச்சி மற்றும் நறுமணம்', amount: '15%' },
      { name: 'Marakakku Coconut Oil Base', tamilName: 'மரச்செக்கு தேங்காய் எண்ணெய்', botanicalName: 'Cocos nucifera', role: 'Cold-pressed virgin lipid base', roleTa: 'மரச்செக்கு தூய தேங்காய் எண்ணெய்', amount: '10%' }
    ],
    howToUse: [
      { step: '01', title: 'Apply to Scalp', titleTa: 'மண்டையோட்டில் வைக்கவும்', instruction: 'Part hair and apply 5-10ml oil directly onto scalp roots.', instructionTa: 'முடியை வகிடு எடுத்து 5-10 மி.லி எண்ணெயை வேர்களில் வைக்கவும்.' },
      { step: '02', title: 'Gentle Massage', titleTa: 'மென்மையாக மசாஜ்', instruction: 'Massage gently with fingertips for 5 minutes.', instructionTa: 'விரல் நுனிகளால் 5 நிமிடம் மென்மையாக மசாஜ் செய்யவும்.' },
      { step: '03', title: 'Leave on / Wash', titleTa: 'ஊற வைத்து குளிக்கவும்', instruction: 'Leave on overnight or wash after 1 hour with Shigakai Powder.', instructionTa: 'இரவு முழுவதும் வைக்கலாம் அல்லது 1 மணி நேரம் கழித்து சிகைக்காய் போட்டு குளிக்கவும்.' }
    ],
    dosage: {
      amount: '5ml - 10ml per application',
      frequency: 'Daily or 3 times a week',
      timing: 'Scalp application',
      vehicle: 'Direct scalp massage',
      amountTa: '5 - 10 மி.லி',
      frequencyTa: 'தினமும் அல்லது வாரம் 3 முறை',
      timingTa: 'மண்டையோடு மசாஜ்',
      vehicleTa: 'விரல்களால் தேய்க்கவும்'
    },
    safety: {
      pregnancy: 'Completely safe during pregnancy and lactation.',
      pregnancyTa: 'முற்றிலும் பாதுகாப்பானது.',
      children: 'Safe for children above 3 years.',
      childrenTa: '3 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு பாதுகாப்பானது.',
      interactions: 'Pair with Ruthra Shigakai Powder for best natural cleansing.',
      interactionsTa: 'ருத்ராவின் சிகைக்காய் பொடியுடன் பயன்படுத்த சிறந்த பலன் தரும்.',
      precautions: ['Natural herbal oil with no mineral oils or synthetic fragrances.'],
      precautionsTa: ['மினரல் ஆயில் அல்லது செயற்கை நறுமணம் சேர்க்கப்படாதது.']
    },
    storage: {
      conditions: 'Keep in a cool place tightly sealed.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does it cause a cold when applied daily?',
        questionTa: 'தினமும் தேய்த்தால் சளி பிடிக்குமா?',
        answer: 'No, it is balanced with warming spices like Black Pepper and Vetiver to prevent excess phlegm while keeping the scalp cool.',
        answerTa: 'இல்லை, சமச்சீரான மூலிகைகள் உள்ளதால் சளி பிடிக்காமல் தலைச்சூட்டை மட்டும் தணிக்கும்.'
      }
    ],
    searchKeywords: ['narshika', 'hair oil', 'hair fall', 'dandruff', 'bringaraja', 'amla', 'hair growth'],
    tamilKeywords: ['நார்ஷிகா', 'கூந்தல் தைலம்', 'முடி உதிர்வு', 'பொடுகு', 'கரிசலாங்கண்ணி', 'கூந்தல் வளர்ச்சி'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-29',
    name: 'Ruthra Nalpamaradi Taila',
    tamilName: 'ருத்ரா நால்பாமராதி தைலம்',
    slug: 'ruthra-nalpamaradi-taila',
    medicalSystem: 'ayurveda',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['skin-hair'],
    price: 180,
    originalPrice: 210,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Golden classical Ayurvedic & Siddha radiance and skin therapy oil for eczema, erysipelas, itching, boils, carbuncles, hyperpigmentation, and bridal Abhyangam.',
    shortDescriptionTa: 'தோல் நோய்கள், அரிப்பு, தடிப்பு, கட்டிகள், மேனி கருமை நீக்கம் மற்றும் பொலிவான சருமத்திற்கு பாரம்பரிய நால்பாமராதி தைலம்.',
    description: 'Ruthra Nalpamaradi Taila is brewed from the Four Sacred Ficus Barks (Nalpamara: Athi, Ithi, Arayal, Peral) combined with pure Turmeric (Manjal) and cooling Triphala. Revered as the sovereign skin beautifier and dermatological healer, it clears tanning, cures skin itching and boils, and restores luminous complexion.',
    descriptionTa: 'நால்பாமராதி தைலம் அத்தி, இத்தி, அரசு, ஆல் ஆகிய நான்கு மரப்பட்டைகள் மற்றும் கஸ்தூரி மஞ்சள் கொண்டு காய்ச்சப்படுகிறது. இது தோல் அரிப்பு, படர்தாமரை, தேமல், கரும்புள்ளிகளை போக்கி சருமத்திற்கு இயற்கை பொலிவையும் பளபளப்பையும் தருகிறது.',
    traditionalRole: 'Addresses eczema, erysipelas, itching, boils, carbuncles, hyperpigmentation, and full body Abhyangam massage.',
    traditionalRoleTa: 'தோல் நோய்கள், அரிப்பு, தேமல், கரும்புள்ளிகள் நீக்கம் மற்றும் பொலிவான சருமம்.',
    badge: 'Radiance & Skin Therapy',
    badgeTa: 'சரும பொலிவு & தேமல் நீக்கம்',
    image: '/images/products/ruthra-nalpamaradi-taila/front.jpg',
    images: [
      '/images/products/ruthra-nalpamaradi-taila/front.jpg',
      '/images/products/ruthra-nalpamaradi-taila/angle.jpg',
      '/images/products/ruthra-nalpamaradi-taila/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nalpamaradi-taila/front.jpg',
      '/images/products/ruthra-nalpamaradi-taila/angle.jpg',
      '/images/products/ruthra-nalpamaradi-taila/back.jpg'
    ],
    ingredients: [
      { name: 'Nalpamara (Four Sacred Ficus Barks)', tamilName: 'நால்பாமரம் (அத்தி, இத்தி, அரசு, ஆல்)', botanicalName: 'Ficus Tree Complex', role: 'Astringent and sovereign skin tone clarifier', roleTa: 'தோல் சுருக்கம் மற்றும் நோய்களை போக்கும்', amount: '40%' },
      { name: 'Manjal (Pure Turmeric)', tamilName: 'மஞ்சள்', botanicalName: 'Curcuma longa', role: 'Natural antibacterial and complexion enhancer', roleTa: 'கிருமி நாசினி மற்றும் மேனி பொலிவு', amount: '25%' },
      { name: 'Thiripala Complex', tamilName: 'திரிபலா', botanicalName: 'Triphala Blend', role: 'Detoxifies skin pores and soothes boils', roleTa: 'தோல் துவாரங்களை சுத்திகரிக்கும்', amount: '20%' },
      { name: 'Sesame & Coconut Oil Base', tamilName: 'எண்ணெய் கலவை', botanicalName: 'Lipid Base', role: 'Deep transdermal nourishment', roleTa: 'தோலுக்கு மென்மை தரும்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Apply on Skin', titleTa: 'சருமத்தில் தடவவும்', instruction: 'Take 5-10ml oil and massage over face and body.', instructionTa: '5-10 மி.லி எண்ணெயை முகம் மற்றும் உடலில் தடவி மசாஜ் செய்யவும்.' },
      { step: '02', title: 'Leave on for 30 mins', titleTa: '30 நிமிடம் ஊற வைக்கவும்', instruction: 'Allow the golden botanicals to penetrate for 30 minutes.', instructionTa: '30 நிமிடம் தோலில் ஊற விடவும்.' },
      { step: '03', title: 'Wash with Nalangu Maavu', titleTa: 'நலங்கு மாவு போட்டு குளிக்கவும்', instruction: 'Wash off with warm water and Ruthra Nalangu Maavu Powder.', instructionTa: 'ருத்ராவின் நலங்கு மாவு தேய்த்து வெதுவெதுப்பான நீரில் குளிக்கவும்.' }
    ],
    dosage: {
      amount: '5ml - 10ml per application',
      frequency: 'Daily or before bath',
      timing: 'Pre-bath body massage',
      vehicle: 'Direct skin massage',
      amountTa: '5 - 10 மி.லி',
      frequencyTa: 'தினமும் குளிப்பதற்கு முன்',
      timingTa: 'முழு உடல் மசாஜ்',
      vehicleTa: 'மென்மையாக தேய்க்கவும்'
    },
    safety: {
      pregnancy: 'Completely safe during pregnancy and for newborn baby massage.',
      pregnancyTa: 'கர்ப்பிணிகள் மற்றும் பச்சிளம் குழந்தைகளுக்கு மிகவும் பாதுகாப்பானது.',
      children: 'Highly recommended for infant skin glow and protection.',
      childrenTa: 'குழந்தைகளுக்கு மிகவும் உகந்தது.',
      interactions: 'Wash with natural herbal powder like Nalangu Maavu rather than harsh chemical soaps.',
      interactionsTa: 'நலங்கு மாவு கொண்டு குளிப்பது சிறந்த பலன் தரும்.',
      precautions: ['Natural turmeric may stain white clothes temporarily.'],
      precautionsTa: ['மஞ்சள் உள்ளதால் வெள்ளை ஆடைகளில் படாமல் பார்த்துக்கொள்ளவும்.']
    },
    storage: {
      conditions: 'Keep tightly closed in a cool place.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Is Nalpamaradi Taila good for bridal glow and hyperpigmentation?',
        questionTa: 'மணப்பெண் பொலிவு மற்றும் கரும்புள்ளிகளுக்கு இது நல்லதா?',
        answer: 'Yes, it is the most famous classical formula for removing sun tan, blemishes, and achieving a golden glowing complexion.',
        answerTa: 'ஆம், சூரிய ஒளி கருமை, கரும்புள்ளிகளை நீக்கி மேனிக்கு பொலிவு தரும் தலைசிறந்த தைலம்.'
      }
    ],
    searchKeywords: ['nalpamaradi', 'taila', 'skin glow', 'eczema', 'pigmentation', 'bridal massage', 'itching'],
    tamilKeywords: ['நால்பாமராதி', 'தைலம்', 'சரும பொலிவு', 'தேமல்', 'கரும்புள்ளிகள்', 'தோல் அரிப்பு', 'மஞ்சள்'],
    inStock: true,
    featured: true
  },

  // ==========================================
  // 5. SYRUP, KASHAYAM & DROPS (3 PRODUCTS)
  // ==========================================
  {
    id: 'prod-30',
    name: 'Ruthra Sinocof Cough Syrup',
    tamilName: 'ருத்ரா சினோகாஃப் இருமல் சிரப்',
    slug: 'ruthra-sinocof-cough-syrup',
    medicalSystem: 'proprietary',
    formulation: 'Syrups',
    formulationTa: 'சிரப்',
    concerns: ['respiratory'],
    price: 96,
    originalPrice: 110,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: '100% Non-drowsy herbal cough elixir for common cold, dry, wet, and allergic cough, chest congestion, bronchitis, and throat irritation.',
    shortDescriptionTa: 'தூக்க கலக்கம் இல்லாத (Non-Drowsy) வறட்டு இருமல், சளி இருமல், தொண்டை கரகரப்பு, நெஞ்சு சளி மற்றும் ஆஸ்துமாவுக்கான இயற்கை இருமல் சிரப்.',
    description: 'Ruthra Sinocof Cough Syrup brings together Adathodai, Thulasi, Kantakari, Thippili, and Licorice in a soothing herbal syrup base. It quickly soothes tickling throat raw sensations, liquefies tough bronchial phlegm, relieves spasm-induced coughing bouts, and keeps airways completely open without causing daytime sleepiness.',
    descriptionTa: 'சினோகாஃப் இருமல் சிரப் ஆடாதோடை, துளசி, கண்டங்கத்திரி, திப்பிலி மற்றும் அதிமதுரம் சேர்ந்த உன்னத கலவை. இது தொண்டை கரகரப்பை போக்கி, நெஞ்சு சளியை இளக்கி வெளியேற்றும். தூக்க கலக்கம் ஏற்படுத்தாது.',
    traditionalRole: 'Relieves common cold, dry, wet, allergic cough, chest congestion, and bronchitis with zero drowsiness.',
    traditionalRoleTa: 'வறட்டு இருமல், சளி இருமல், தொண்டை கரகரப்பு மற்றும் ஆஸ்துமா நிவாரணம்.',
    badge: 'Non-Drowsy Cough Care',
    badgeTa: 'தூக்க கலக்கமில்லாத இருமல் சிரப்',
    image: '/images/products/ruthra-sinocof-cough-syrup/front.jpg',
    images: [
      '/images/products/ruthra-sinocof-cough-syrup/front.jpg',
      '/images/products/ruthra-sinocof-cough-syrup/angle.jpg',
      '/images/products/ruthra-sinocof-cough-syrup/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sinocof-cough-syrup/front.jpg',
      '/images/products/ruthra-sinocof-cough-syrup/angle.jpg',
      '/images/products/ruthra-sinocof-cough-syrup/back.jpg'
    ],
    ingredients: [
      { name: 'Adathodai (Vasaka)', tamilName: 'ஆடாதோடை', botanicalName: 'Justicia adhatoda', role: 'Liquefies tenacious bronchial sputum', roleTa: 'நெஞ்சு சளியை இளக்கும் முதன்மை மூலிகை', amount: '30%' },
      { name: 'Thulasi (Holy Basil)', tamilName: 'துளசி', botanicalName: 'Ocimum sanctum', role: 'Antiviral, antibacterial, and immune support', roleTa: 'கிருமி நாசினி மற்றும் நோய் எதிர்ப்பு', amount: '25%' },
      { name: 'Athimathuram (Liquorice)', tamilName: 'அதிமதுரம்', botanicalName: 'Glycyrrhiza glabra', role: 'Coats and soothes raw, inflamed throat membranes', roleTa: 'தொண்டை புண்களை ஆற்றும் இதமான மூலிகை', amount: '25%' },
      { name: 'Kantakari & Thippili', tamilName: 'கண்டங்கத்திரி & திப்பிலி', botanicalName: 'Herbal Bio-actives', role: 'Bronchodilator and eases breathing', roleTa: 'சுவாச குழாயை தளர்த்தி எளிதாக மூச்சு விட உதவும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Dose Measurement', titleTa: 'அளவு', instruction: 'Take 5ml to 10ml (1 to 2 tsp).', instructionTa: '5 முதல் 10 மி.லி (1-2 ஸ்பூன்) எடுக்கவும்.' },
      { step: '02', title: 'Sip Directly', titleTa: 'நேரடியாக பருகவும்', instruction: 'Sip slowly, preferably with a little warm water.', instructionTa: 'மெதுவாக பருகவும்; வெதுவெதுப்பான நீருடன் அருந்தலாம்.' },
      { step: '03', title: 'Frequency', titleTa: 'வேளை', instruction: 'Take 2 to 3 times daily after food.', instructionTa: 'காலை, மதியம், இரவு உணவுக்குப் பின் பருகவும்.' }
    ],
    dosage: {
      amount: 'Adults: 10ml; Children: 5ml',
      frequency: '2 to 3 times daily',
      timing: 'Post-prandial',
      vehicle: 'Direct or with warm water',
      amountTa: 'பெரியவர்களுக்கு 10 மி.லி; சிறார்களுக்கு 5 மி.லி',
      frequencyTa: 'தினமும் 2-3 வேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'நேரடியாக அல்லது வெதுவெதுப்பான நீருடன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Highly safe and tasty for children above 2 years.',
      childrenTa: '2 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு மிகவும் பாதுகாப்பானது.',
      interactions: 'Safe with all therapies.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Non-drowsy, alcohol-free, and non-habit forming.'],
      precautionsTa: ['தூக்க கலக்கமோ ஆல்கஹாலோ இல்லாதது.']
    },
    storage: {
      conditions: 'Keep tightly closed in a cool place away from sunlight.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does Sinocof cause drowsiness or dizziness?',
        questionTa: 'சினோகாஃப் சிரப் குடித்தால் தூக்கம் வருமா?',
        answer: 'No! It is 100% herbal, alcohol-free, and completely non-drowsy, making it safe for working adults and drivers.',
        answerTa: 'இல்லை! இது 100% தூக்க கலக்கம் இல்லாத இயற்கை மூலிகை சிரப்.'
      }
    ],
    searchKeywords: ['sinocof', 'cough syrup', 'cold', 'bronchitis', 'dry cough', 'non drowsy', 'adathodai'],
    tamilKeywords: ['சினோகாஃப்', 'இருமல் சிரப்', 'வறட்டு இருமல்', 'சளி', 'தொண்டை கரகரப்பு', 'ஆடாதோடை'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-31',
    name: 'Ruthra Ramabana Kashayam',
    tamilName: 'ருத்ரா ராமபாண கஷாயம்',
    slug: 'ruthra-ramabana-kashayam',
    medicalSystem: 'proprietary',
    formulation: 'Syrup & Kashayam',
    formulationTa: 'கஷாய திரவம்',
    concerns: ['respiratory'],
    price: 240,
    originalPrice: 275,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Clinically proven concentrated liquid kashayam for all types of fevers, pyrexia joint & muscle aches, eye burning, elevated WBC reduction, and platelet recovery.',
    shortDescriptionTa: 'அனைத்து வகை காய்ச்சல்கள், காய்ச்சல் உடல் வலி, கண் எரிச்சல், வெள்ளை அணுக்கள் சீராக்கம் மற்றும் பிளேட்லெட் எண்ணிக்கையை உயர்த்தும் ராமபாண கஷாயம்.',
    description: 'Ruthra Ramabana Kashayam is a ready-to-consume liquid antipyretic elixir formulated according to classical Siddha emergency febrifuge recipes. It clinically reduces symptoms of pyrexia including severe muscle and joint pain, burning eyes, and loss of appetite. It is proven effective in infectious fevers, helping reduce elevated WBC count while supporting healthy platelet counts.',
    descriptionTa: 'ராமபாண கஷாயம் கொதிக்க வைக்க தேவையில்லாத ரெடிமேட் கஷாய திரவம். இது கடுமையான காய்ச்சல், தலைவலி, உடல் குடைச்சல், கண் எரிச்சலை உடனடியாக தணித்து, ரத்தத்தில் வெள்ளை அணுக்களை சீராக்கி பிளேட்லெட்டுகளை உயர்த்த உதவுகிறது.',
    traditionalRole: 'Clinically reduces pyrexia symptoms, muscle/joint aches, eye burning, helps reduce elevated WBC count, and boosts reduced platelets.',
    traditionalRoleTa: 'காய்ச்சல் நிவாரணம், உடல் வலி நீக்கம், பிளேட்லெட் பெருக்கம் மற்றும் வெள்ளை அணுக்கள் சீராக்கம்.',
    badge: 'Platelet & Fever Shield',
    badgeTa: 'பிளேட்லெட் & காய்ச்சல் நிவாரணி',
    image: '/images/products/ruthra-ramabana-kashayam/front.jpg',
    images: [
      '/images/products/ruthra-ramabana-kashayam/front.jpg',
      '/images/products/ruthra-ramabana-kashayam/angle.jpg',
      '/images/products/ruthra-ramabana-kashayam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ramabana-kashayam/front.jpg',
      '/images/products/ruthra-ramabana-kashayam/angle.jpg',
      '/images/products/ruthra-ramabana-kashayam/back.jpg'
    ],
    ingredients: [
      { name: 'Nilavembu (Andrographis)', tamilName: 'நிலவேம்பு', botanicalName: 'Andrographis paniculata', role: 'Broad-spectrum antiviral and antipyretic', roleTa: 'வைரஸ் எதிர்ப்பு மற்றும் காய்ச்சல் தணிப்பு', amount: '30%' },
      { name: 'Seenthil (Guduchi)', tamilName: 'சீந்தில்', botanicalName: 'Tinospora cordifolia', role: 'Boosts platelet count and regulates immune WBC response', roleTa: 'பிளேட்லெட் எண்ணிக்கையை பெருக்கும்', amount: '25%' },
      { name: 'Papali Ilai Extract (Papaya Leaf)', tamilName: 'பப்பாளி இலை சாறு', botanicalName: 'Carica papaya', role: 'Rapid thrombocyte / platelet booster', roleTa: 'பிளேட்லெட் அணுக்களை வேகமாக உயர்த்தும்', amount: '25%' },
      { name: 'Vettiver & Santhanam', tamilName: 'வெட்டிவேர் & சந்தனம்', botanicalName: 'Cooling Synergy', role: 'Calms eye burning, thirst, and internal pyrexia heat', roleTa: 'கண் எரிச்சல் மற்றும் உடல் உஷ்ணத்தை தணிக்கும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Measure Kashayam', titleTa: 'அளவு', instruction: 'Take 15ml to 30ml liquid kashayam.', instructionTa: '15 முதல் 30 மி.லி கஷாயத்தை எடுக்கவும்.' },
      { step: '02', title: 'Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Mix with equal parts (30ml) warm water.', instructionTa: 'சம அளவு (30 மி.லி) வெந்நீரில் கலக்கவும்.' },
      { step: '03', title: 'Drink Twice or Thrice', titleTa: '2-3 வேளை', instruction: 'Drink before or after meals during fever.', instructionTa: 'காய்ச்சல் இருக்கும் போது தினமும் 2-3 வேளை பருகவும்.' }
    ],
    dosage: {
      amount: '15ml - 30ml with warm water',
      frequency: '2 to 3 times daily',
      timing: 'Pre or post food',
      vehicle: 'Equal part warm water',
      amountTa: '15 - 30 மி.லி',
      frequencyTa: 'தினமும் 2-3 வேளை',
      timingTa: 'உணவுக்கு முன் அல்லது பின்',
      vehicleTa: 'சம அளவு வெதுவெதுப்பான நீருடன்'
    },
    safety: {
      pregnancy: 'Consult physician before use.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Children 5-12 years: 10ml with warm water.',
      childrenTa: '5-12 வயது குழந்தைகளுக்கு 10 மி.லி போதுமானது.',
      interactions: 'Safe with allopathic fever medication with a 1-hour gap.',
      interactionsTa: '1 மணி நேர இடைவெளியில் பிற மருந்துகளுடன் உட்கொள்ளலாம்.',
      precautions: ['Check platelet counts via blood tests during dengue or high fever.'],
      precautionsTa: ['டெங்கு காய்ச்சலின் போது ரத்த பரிசோதனை செய்து வரவும்.']
    },
    storage: {
      conditions: 'Keep tightly closed in a cool, dark place.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does this help to increase low platelet count during fevers?',
        questionTa: 'காய்ச்சலின் போது குறையும் பிளேட்லெட்டுகளை இது அதிகரிக்குமா?',
        answer: 'Yes! Formulated with Guduchi and Papaya leaf extracts, it is clinically renowned for platelet recovery.',
        answerTa: 'ஆம், சீந்தில் மற்றும் பப்பாளி இலை சாறு உள்ளதால் பிளேட்லெட்டுகளை விரைவாக உயர்த்தும்.'
      }
    ],
    searchKeywords: ['ramabana', 'kashayam', 'fever', 'platelet booster', 'wbc count', 'dengue', 'pyrexia'],
    tamilKeywords: ['ராமபாண', 'கஷாயம்', 'காய்ச்சல்', 'பிளேட்லெட்', 'உடல் வலி', 'டெங்கு', 'வெள்ளை அணுக்கள்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-32',
    name: 'Ruthra Esy-swas Drops',
    tamilName: 'ருத்ரா ஈஸி-ஸ்வாஸ் சொட்டு மருந்து',
    slug: 'ruthra-esy-swas-drops',
    medicalSystem: 'proprietary',
    formulation: 'Drops',
    formulationTa: 'சொட்டு மருந்து',
    concerns: ['respiratory', 'joint-mobility'],
    price: 198,
    originalPrice: 225,
    packSize: '50ml',
    packSizeTa: '50 மி.லி',
    shortDescription: 'Multi-action aromatic drops for instant steam inhalation and internal/external relief from asthma, wheezing, COPD, URI/LRI, arthralgia, and fever.',
    shortDescriptionTa: 'ஆஸ்துமா, மூச்சிரைப்பு, சைனஸ் அடைப்பு, வீசிங் (Wheezing), மூட்டு வலி மற்றும் ஆவி பிடிக்க உதவும் பலநோக்கு சொட்டு மருந்து.',
    description: 'Ruthra Esy-swas Drops is a high-potency volatile aromatic distillation of Camphor, Thymol, Menthol, Nilgiri, and Lemongrass. When inhaled via steam or applied to pulse points, it instantly clears blocked nasal channels, relaxes constricted bronchial airways, relieves wheezing spasms, and eases arthritic tension.',
    descriptionTa: 'ஈஸி-ஸ்வாஸ் சொட்டு மருந்து கற்பூரம், ஓமம், புதினா மற்றும் நீலகிரி எண்ணெய் சேர்ந்த சக்தி வாய்ந்த தயாரிப்பு. இது ஆவி பிடிக்கும் போது மூக்கடைப்பை உடனடியாக திறந்து, ஆஸ்துமா, மூச்சிரைப்பு மற்றும் சைனஸ் தலைபாரத்தை நொடியில் போக்கும்.',
    traditionalRole: 'Instant relief from asthma, wheezing, COPD, upper and lower respiratory infections, arthralgia, and fever.',
    traditionalRoleTa: 'ஆஸ்துமா, வீசிங், மூக்கடைப்பு, சைனஸ் தலைபாரம் மற்றும் மூட்டு வலி நீக்கம்.',
    badge: 'Instant Airways Opener',
    badgeTa: 'உடனடி சுவாச நிவாரணம்',
    image: '/images/products/ruthra-esy-swas-drops/front.jpg',
    images: [
      '/images/products/ruthra-esy-swas-drops/front.jpg',
      '/images/products/ruthra-esy-swas-drops/angle.jpg',
      '/images/products/ruthra-esy-swas-drops/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-esy-swas-drops/front.jpg',
      '/images/products/ruthra-esy-swas-drops/angle.jpg',
      '/images/products/ruthra-esy-swas-drops/back.jpg'
    ],
    ingredients: [
      { name: 'Omathu Dravagam (Thymol)', tamilName: 'ஓம திராவகம்', botanicalName: 'Trachyspermum ammi', role: 'Relieves bronchial spasm and clears phlegm', roleTa: 'சுவாச குழாய் பிடிப்பை தளர்த்தும்', amount: '30%' },
      { name: 'Pudhina Uppu (Menthol)', tamilName: 'புதினா உப்பு', botanicalName: 'Mentha arvensis', role: 'Cooling nasal channel decongestant', roleTa: 'நாசி அடைப்பை உடனடியாக திறக்கும்', amount: '25%' },
      { name: 'Pachai Karpooram (Camphor)', tamilName: 'பச்சை கற்பூரம்', botanicalName: 'Cinnamomum camphora', role: 'Deep airway opening aroma', roleTa: 'ஆழ்ந்த சுவாச புத்துணர்ச்சி', amount: '25%' },
      { name: 'Nilgiri Ennai (Eucalyptus)', tamilName: 'நீலகிரி எண்ணெய்', botanicalName: 'Eucalyptus globulus', role: 'Mucus clearing and chest easing', roleTa: 'நெஞ்சு சளியை இளக்கும் நறுமணம்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Steam Inhalation', titleTa: 'ஆவி பிடித்தல்', instruction: 'Add 3-5 drops to a bowl of boiling hot water and inhale steam.', instructionTa: '3-5 சொட்டுகளை கொதிக்கும் வெந்நீரில் விட்டு ஆவி பிடிக்கவும்.' },
      { step: '02', title: 'Chest / Forehead Application', titleTa: 'மார்பில் தடவுதல்', instruction: 'Apply 2-3 drops on forehead, chest, or handkerchief.', instructionTa: '2-3 சொட்டுகளை நெற்றி அல்லது மார்பில் லேசாக தடவவும்.' },
      { step: '03', title: 'Internal Use (As Advised)', titleTa: 'உள் பயன்பாடு', instruction: '1-2 drops in warm water under physician guidance.', instructionTa: 'மருத்துவர் ஆலோசனைப்படி 1-2 சொட்டுகள் வெந்நீரில் அருந்தலாம்.' }
    ],
    dosage: {
      amount: '3 - 5 drops for steam / 2 drops for pulse points',
      frequency: '2 to 3 times daily as needed',
      timing: 'Inhalation / External',
      vehicle: 'Steam water or direct topical application',
      amountTa: '3 - 5 சொட்டுகள் ஆவி பிடிக்க',
      frequencyTa: 'தேவைக்கேற்ப தினமும் 2-3 முறை',
      timingTa: 'ஆவி பிடித்தல் / தடவுதல்',
      vehicleTa: 'வெந்நீரில் விடவும்'
    },
    safety: {
      pregnancy: 'Safe for steam inhalation and external use.',
      pregnancyTa: 'ஆவி பிடிக்க முற்றிலும் பாதுகாப்பானது.',
      children: 'For children above 3 years, use for steam inhalation under supervision.',
      childrenTa: '3 வயதுக்கு மேற்பட்டோருக்கு ஆவி பிடிக்க பயன்படுத்தலாம்.',
      interactions: 'Safe with oral medicines.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Avoid direct contact with eyes.'],
      precautionsTa: ['கண்களில் படாமல் பார்த்துக்கொள்ளவும்.']
    },
    storage: {
      conditions: 'Keep bottle tightly sealed to prevent evaporation.',
      conditionsTa: 'ஆவியாகாமல் இருக்க பாட்டிலை நன்றாக மூடி வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How quickly does it open a blocked nose or sinus?',
        questionTa: 'மூக்கடைப்பு மற்றும் சைனஸ் பாரம் எவ்வளவு நேரத்தில் நீங்கும்?',
        answer: 'Within 60 seconds of steam inhalation, nasal air passages open up clearly.',
        answerTa: 'ஆவி பிடித்த 1 நிமிடத்தில் மூக்கடைப்பு நீங்கி எளிதாக சுவாசிக்க முடியும்.'
      }
    ],
    searchKeywords: ['esy-swas', 'drops', 'steam inhalation', 'asthma', 'wheezing', 'copd', 'blocked nose', 'sinusitis'],
    tamilKeywords: ['ஈஸி-ஸ்வாஸ்', 'சொட்டு மருந்து', 'ஆவி பிடித்தல்', 'ஆஸ்துமா', 'வீசிங்', 'மூக்கடைப்பு', 'சைனஸ்'],
    inStock: true,
    featured: true
  },

  // ==========================================
  // 6. PERSONAL CARE & TRADITIONAL POWDERS (2 PRODUCTS - 75G)
  // ==========================================
  {
    id: 'prod-33',
    name: 'RUTHRA’S Nalangu Maavu Powder',
    tamilName: 'ருத்ராவின் நலங்கு மாவு பொடி',
    slug: 'ruthra-nalangu-maavu-powder',
    medicalSystem: 'proprietary',
    formulation: 'Personal Care',
    formulationTa: 'பாரம்பரிய பராமரிப்பு',
    concerns: ['skin-hair'],
    price: 120,
    originalPrice: 140,
    packSize: '75 gms',
    packSizeTa: '75 கிராம்',
    shortDescription: 'Traditional 12-herb royal herbal bath powder & face pack for radiant glowing skin, hyperpigmentation removal, and tan clearance.',
    shortDescriptionTa: 'மேனி பொலிவு, கரும்புள்ளி மற்றும் வெயில் கருமை நீங்க, 12 மூலிகைகள் சேர்ந்த பாரம்பரிய நலங்கு மாவு குளியல் பொடி.',
    description: 'RUTHRA’S Nalangu Maavu Powder is an authentic bridal and daily bath formulation pulverized with Wild Turmeric, Rose Petals, Poolankizhangu, Korai Kizhangu, Green Gram, and Vetiver. It acts as a 100% soap-free natural cleanser, exfoliates dead epidermal cells, fades sun spots and acne marks, and imparts a long-lasting natural fragrance.',
    descriptionTa: 'ருத்ராவின் நலங்கு மாவு கஸ்தூரி மஞ்சள், ரோஜா இதழ்கள், பூலாங்கிழங்கு, கோரைக்கிழங்கு, பாசிப்பயறு மற்றும் வெட்டிவேர் சேர்ந்தது. இது ரசாயன சோப்புகளுக்கு மாற்றாக சருமத்திற்கு பொலிவையும், நறுமணத்தையும் தந்து கரும்புள்ளிகளை நீக்குகிறது.',
    traditionalRole: 'Natural herbal body wash, facial pack, removes hyperpigmentation, clears tan, and enriches skin vitality.',
    traditionalRoleTa: 'மூலிகை குளியல் பொடி, முக பொலிவு பேக், கரும்புள்ளிகள் மற்றும் வெயில் கருமை நீக்கம்.',
    badge: '100% Herbal Bath',
    badgeTa: 'தூய மூலிகை குளியல்',
    image: '/images/products/ruthra-nalangu-maavu-powder/front.jpg',
    images: [
      '/images/products/ruthra-nalangu-maavu-powder/front.jpg',
      '/images/products/ruthra-nalangu-maavu-powder/angle.jpg',
      '/images/products/ruthra-nalangu-maavu-powder/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nalangu-maavu-powder/front.jpg',
      '/images/products/ruthra-nalangu-maavu-powder/angle.jpg',
      '/images/products/ruthra-nalangu-maavu-powder/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['agasthiyar kuzhambu chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['அகத்தியர் குழம்பு சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-101',
    name: 'Ruthra Amukkara Chooranam',
    tamilName: 'ருத்ரா அமுக்கரா சூரணம்',
    slug: 'ruthra-amukkara-chooranam',
    medicalSystem: 'ayurveda',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['joint-mobility'],
    price: 195,
    originalPrice: 224,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Renowned neuromuscular rejuvenator, stress soother, and vitality enhancer (Withania somnifera).',
    shortDescriptionTa: 'நரம்பு தளர்ச்சி, உடல் சோர்வு மற்றும் தூக்கமின்மைக்கு சிறந்த சத்து மருந்து.',
    description: 'Ruthra Amukkara Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அமுக்கரா சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Renowned neuromuscular rejuvenator, stress soother, and vitality enhancer (Withania somnifera).',
    traditionalRoleTa: 'நரம்பு தளர்ச்சி, உடல் சோர்வு மற்றும் தூக்கமின்மைக்கு சிறந்த சத்து மருந்து.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-amukkara-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-amukkara-chooranam/front.jpg',
      '/images/products/ruthra-amukkara-chooranam/angle.jpg',
      '/images/products/ruthra-amukkara-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amukkara-chooranam/front.jpg',
      '/images/products/ruthra-amukkara-chooranam/angle.jpg',
      '/images/products/ruthra-amukkara-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['amukkara chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['அமுக்கரா சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-102',
    name: 'Ruthra Annabhedi Chooranam',
    tamilName: 'ருத்ரா அன்னபேதி சூரணம்',
    slug: 'ruthra-annabhedi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 160,
    originalPrice: 184,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified mineral-herbal formulation for healthy hemoglobin synthesis and liver vitality.',
    shortDescriptionTa: 'ரத்த சோகை நீக்கி ஹீமோகுளோபின் அளவை உயர்த்தும் பாரம்பரிய சூரணம்.',
    description: 'Ruthra Annabhedi Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அன்னபேதி சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified mineral-herbal formulation for healthy hemoglobin synthesis and liver vitality.',
    traditionalRoleTa: 'ரத்த சோகை நீக்கி ஹீமோகுளோபின் அளவை உயர்த்தும் பாரம்பரிய சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-annabhedi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-annabhedi-chooranam/front.jpg',
      '/images/products/ruthra-annabhedi-chooranam/angle.jpg',
      '/images/products/ruthra-annabhedi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-annabhedi-chooranam/front.jpg',
      '/images/products/ruthra-annabhedi-chooranam/angle.jpg',
      '/images/products/ruthra-annabhedi-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['annabhedi chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['அன்னபேதி சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-103',
    name: 'Ruthra Ashta Chooranam',
    tamilName: 'ருத்ரா அஷ்ட சூரணம்',
    slug: 'ruthra-ashta-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['digestive-wellness'],
    price: 140,
    originalPrice: 161,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Eight-spice classical digestive powder for gas relief, bloating, and appetizer action.',
    shortDescriptionTa: 'பசியின்மை, வாயு தொல்லை மற்றும் அஜீரணம் போக்கும் எட்டு மூலிகை சூரணம்.',
    description: 'Ruthra Ashta Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அஷ்ட சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Eight-spice classical digestive powder for gas relief, bloating, and appetizer action.',
    traditionalRoleTa: 'பசியின்மை, வாயு தொல்லை மற்றும் அஜீரணம் போக்கும் எட்டு மூலிகை சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-ashta-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-ashta-chooranam/front.jpg',
      '/images/products/ruthra-ashta-chooranam/angle.jpg',
      '/images/products/ruthra-ashta-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ashta-chooranam/front.jpg',
      '/images/products/ruthra-ashta-chooranam/angle.jpg',
      '/images/products/ruthra-ashta-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['ashta chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['அஷ்ட சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-104',
    name: 'Ruthra Eladi Chooranam',
    tamilName: 'ருத்ரா ஏலாதி சூரணம்',
    slug: 'ruthra-eladi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['skin-hair'],
    price: 210,
    originalPrice: 241,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cardamom-scented classical powder for skin radiance, complexion glow, and cooling Pitta.',
    shortDescriptionTa: 'முகப்பொலிவு, தோல் அரிப்பு மற்றும் உடல் சூட்டை தணிக்கும் சூரணம்.',
    description: 'Ruthra Eladi Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா ஏலாதி சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Cardamom-scented classical powder for skin radiance, complexion glow, and cooling Pitta.',
    traditionalRoleTa: 'முகப்பொலிவு, தோல் அரிப்பு மற்றும் உடல் சூட்டை தணிக்கும் சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-eladi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-eladi-chooranam/front.jpg',
      '/images/products/ruthra-eladi-chooranam/angle.jpg',
      '/images/products/ruthra-eladi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-eladi-chooranam/front.jpg',
      '/images/products/ruthra-eladi-chooranam/angle.jpg',
      '/images/products/ruthra-eladi-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['eladi chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['ஏலாதி சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-105',
    name: 'Ruthra Inji Chooranam',
    tamilName: 'ருத்ரா இஞ்சி சூரணம்',
    slug: 'ruthra-inji-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['digestive-wellness'],
    price: 150,
    originalPrice: 173,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified dry ginger compound for morning sickness, dyspepsia, and gastric motility.',
    shortDescriptionTa: 'பித்த தலைசுற்றல், செரிமான குறைபாடு மற்றும் குமட்டல் போக்கும் மருந்து.',
    description: 'Ruthra Inji Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா இஞ்சி சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified dry ginger compound for morning sickness, dyspepsia, and gastric motility.',
    traditionalRoleTa: 'பித்த தலைசுற்றல், செரிமான குறைபாடு மற்றும் குமட்டல் போக்கும் மருந்து.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-inji-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-inji-chooranam/front.jpg',
      '/images/products/ruthra-inji-chooranam/angle.jpg',
      '/images/products/ruthra-inji-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-inji-chooranam/front.jpg',
      '/images/products/ruthra-inji-chooranam/angle.jpg',
      '/images/products/ruthra-inji-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['inji chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['இஞ்சி சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-106',
    name: 'Ruthra Karisalai Chooranam',
    tamilName: 'ருத்ரா கரிசாலை சூரணம்',
    slug: 'ruthra-karisalai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 175,
    originalPrice: 201,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Bhringraj botanical compound for hepatic protection, liver wellness, and eye cooling.',
    shortDescriptionTa: 'கல்லீரல் பாதுகாப்பு மற்றும் கண் குளிர்ச்சிக்கான பாரம்பரிய சூரணம்.',
    description: 'Ruthra Karisalai Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கரிசாலை சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Bhringraj botanical compound for hepatic protection, liver wellness, and eye cooling.',
    traditionalRoleTa: 'கல்லீரல் பாதுகாப்பு மற்றும் கண் குளிர்ச்சிக்கான பாரம்பரிய சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-karisalai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-karisalai-chooranam/front.jpg',
      '/images/products/ruthra-karisalai-chooranam/angle.jpg',
      '/images/products/ruthra-karisalai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karisalai-chooranam/front.jpg',
      '/images/products/ruthra-karisalai-chooranam/angle.jpg',
      '/images/products/ruthra-karisalai-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['karisalai chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['கரிசாலை சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-107',
    name: 'Ruthra Kasthuri Chooranam',
    tamilName: 'ருத்ரா கஸ்தூரி சூரணம்',
    slug: 'ruthra-kasthuri-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['respiratory'],
    price: 240,
    originalPrice: 276,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Aromatic respiratory decongestant and broncho-spasmolytic formulation.',
    shortDescriptionTa: 'இளைப்பு, நெஞ்சு சளி மற்றும் மூச்சு திணறலை நீக்கும் சூரணம்.',
    description: 'Ruthra Kasthuri Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கஸ்தூரி சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Aromatic respiratory decongestant and broncho-spasmolytic formulation.',
    traditionalRoleTa: 'இளைப்பு, நெஞ்சு சளி மற்றும் மூச்சு திணறலை நீக்கும் சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-kasthuri-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kasthuri-chooranam/front.jpg',
      '/images/products/ruthra-kasthuri-chooranam/angle.jpg',
      '/images/products/ruthra-kasthuri-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kasthuri-chooranam/front.jpg',
      '/images/products/ruthra-kasthuri-chooranam/angle.jpg',
      '/images/products/ruthra-kasthuri-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kasthuri chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['கஸ்தூரி சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-108',
    name: 'Ruthra Keezhanelli Chooranam',
    tamilName: 'ருத்ரா கீழாநெல்லி சூரணம்',
    slug: 'ruthra-keezhanelli-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 165,
    originalPrice: 190,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pure Phyllanthus amarus powder for liver enzyme balance and jaundice recovery.',
    shortDescriptionTa: 'மஞ்சள் காமாலை மற்றும் கல்லீரல் பித்த நீர் சமநிலைக்கு சிறந்த மருந்து.',
    description: 'Ruthra Keezhanelli Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கீழாநெல்லி சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Pure Phyllanthus amarus powder for liver enzyme balance and jaundice recovery.',
    traditionalRoleTa: 'மஞ்சள் காமாலை மற்றும் கல்லீரல் பித்த நீர் சமநிலைக்கு சிறந்த மருந்து.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-keezhanelli-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-keezhanelli-chooranam/front.jpg',
      '/images/products/ruthra-keezhanelli-chooranam/angle.jpg',
      '/images/products/ruthra-keezhanelli-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-keezhanelli-chooranam/front.jpg',
      '/images/products/ruthra-keezhanelli-chooranam/angle.jpg',
      '/images/products/ruthra-keezhanelli-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['keezhanelli chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['கீழாநெல்லி சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-109',
    name: 'Ruthra Kungiliya Chooranam',
    tamilName: 'ருத்ரா குங்கிலிய சூரணம்',
    slug: 'ruthra-kungiliya-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 190,
    originalPrice: 218,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified Shorea resin powder for urinary tract cooling, burning micturition, and ulcers.',
    shortDescriptionTa: 'சிறுநீர் எரிச்சல், வெள்ளைப்படுதல் மற்றும் வயிற்று புண் ஆற்றும் மருந்து.',
    description: 'Ruthra Kungiliya Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா குங்கிலிய சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified Shorea resin powder for urinary tract cooling, burning micturition, and ulcers.',
    traditionalRoleTa: 'சிறுநீர் எரிச்சல், வெள்ளைப்படுதல் மற்றும் வயிற்று புண் ஆற்றும் மருந்து.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-kungiliya-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kungiliya-chooranam/front.jpg',
      '/images/products/ruthra-kungiliya-chooranam/angle.jpg',
      '/images/products/ruthra-kungiliya-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kungiliya-chooranam/front.jpg',
      '/images/products/ruthra-kungiliya-chooranam/angle.jpg',
      '/images/products/ruthra-kungiliya-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kungiliya chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['குங்கிலிய சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-110',
    name: 'Ruthra Lavangathi Chooranam',
    tamilName: 'ருத்ரா லவங்காதி சூரணம்',
    slug: 'ruthra-lavangathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['respiratory'],
    price: 185,
    originalPrice: 213,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Clove-infused classical preparation for cough, mucosal clearing, and gastric digestion.',
    shortDescriptionTa: 'தொண்டை கரகரப்பு, வறட்டு இருமல் மற்றும் செரிமானத்திற்கு சிறந்தது.',
    description: 'Ruthra Lavangathi Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா லவங்காதி சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Clove-infused classical preparation for cough, mucosal clearing, and gastric digestion.',
    traditionalRoleTa: 'தொண்டை கரகரப்பு, வறட்டு இருமல் மற்றும் செரிமானத்திற்கு சிறந்தது.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-lavangathi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-lavangathi-chooranam/front.jpg',
      '/images/products/ruthra-lavangathi-chooranam/angle.jpg',
      '/images/products/ruthra-lavangathi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-lavangathi-chooranam/front.jpg',
      '/images/products/ruthra-lavangathi-chooranam/angle.jpg',
      '/images/products/ruthra-lavangathi-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['lavangathi chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['லவங்காதி சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-111',
    name: 'Ruthra Mudakathan Chooranam',
    tamilName: 'ருத்ரா முடக்கத்தான் சூரணம்',
    slug: 'ruthra-mudakathan-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['joint-mobility'],
    price: 170,
    originalPrice: 195,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Balloon vine herb for joint lubrication, uric acid elimination, and arthritis relief.',
    shortDescriptionTa: 'மூட்டு வாதம், முழங்கால் வலி மற்றும் யூரிக் அமில குறைப்புக்கான மூலிகை.',
    description: 'Ruthra Mudakathan Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா முடக்கத்தான் சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Balloon vine herb for joint lubrication, uric acid elimination, and arthritis relief.',
    traditionalRoleTa: 'மூட்டு வாதம், முழங்கால் வலி மற்றும் யூரிக் அமில குறைப்புக்கான மூலிகை.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-mudakathan-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-mudakathan-chooranam/front.jpg',
      '/images/products/ruthra-mudakathan-chooranam/angle.jpg',
      '/images/products/ruthra-mudakathan-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mudakathan-chooranam/front.jpg',
      '/images/products/ruthra-mudakathan-chooranam/angle.jpg',
      '/images/products/ruthra-mudakathan-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['mudakathan chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['முடக்கத்தான் சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-112',
    name: 'Ruthra Nannari Chooranam',
    tamilName: 'ருத்ரா நannari சூரணம்',
    slug: 'ruthra-nannari-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 180,
    originalPrice: 207,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Natural blood purifier and thermal coolant for systemic body heat reduction.',
    shortDescriptionTa: 'உடல் உஷ்ணம் நீக்கி ரத்தத்தை சுத்திகரிக்கும் இயற்கை மூலிகை.',
    description: 'Ruthra Nannari Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா நannari சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Natural blood purifier and thermal coolant for systemic body heat reduction.',
    traditionalRoleTa: 'உடல் உஷ்ணம் நீக்கி ரத்தத்தை சுத்திகரிக்கும் இயற்கை மூலிகை.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-nannari-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nannari-chooranam/front.jpg',
      '/images/products/ruthra-nannari-chooranam/angle.jpg',
      '/images/products/ruthra-nannari-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nannari-chooranam/front.jpg',
      '/images/products/ruthra-nannari-chooranam/angle.jpg',
      '/images/products/ruthra-nannari-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['nannari chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['நannari சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-113',
    name: 'Ruthra Nellikkai Chooranam',
    tamilName: 'ருத்ரா நெல்லிக்காய் சூரணம்',
    slug: 'ruthra-nellikkai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['skin-hair'],
    price: 160,
    originalPrice: 184,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Vitamin C rich wild Amla powder for antioxidant immunity and tissue longevity.',
    shortDescriptionTa: 'நோய் எதிர்ப்பு சக்தி மற்றும் முடி உதிர்வு தடுப்பிற்கான தூய நெல்லி பொடி.',
    description: 'Ruthra Nellikkai Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா நெல்லிக்காய் சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Vitamin C rich wild Amla powder for antioxidant immunity and tissue longevity.',
    traditionalRoleTa: 'நோய் எதிர்ப்பு சக்தி மற்றும் முடி உதிர்வு தடுப்பிற்கான தூய நெல்லி பொடி.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-nellikkai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nellikkai-chooranam/front.jpg',
      '/images/products/ruthra-nellikkai-chooranam/angle.jpg',
      '/images/products/ruthra-nellikkai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nellikkai-chooranam/front.jpg',
      '/images/products/ruthra-nellikkai-chooranam/angle.jpg',
      '/images/products/ruthra-nellikkai-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['nellikkai chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['நெல்லிக்காய் சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-114',
    name: 'Ruthra Nilavagai Chooranam',
    tamilName: 'ருத்ரா நிலவாகை சூரணம்',
    slug: 'ruthra-nilavagai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['digestive-wellness'],
    price: 150,
    originalPrice: 173,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Gentle classical herbal laxative for habitual constipation and bowel clearance.',
    shortDescriptionTa: 'மலச்சிக்கல் மற்றும் குடல் கழிவுகளை வெளியேற்றும் இயற்கை சூரணம்.',
    description: 'Ruthra Nilavagai Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா நிலவாகை சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Gentle classical herbal laxative for habitual constipation and bowel clearance.',
    traditionalRoleTa: 'மலச்சிக்கல் மற்றும் குடல் கழிவுகளை வெளியேற்றும் இயற்கை சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-nilavagai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nilavagai-chooranam/front.jpg',
      '/images/products/ruthra-nilavagai-chooranam/angle.jpg',
      '/images/products/ruthra-nilavagai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nilavagai-chooranam/front.jpg',
      '/images/products/ruthra-nilavagai-chooranam/angle.jpg',
      '/images/products/ruthra-nilavagai-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['nilavagai chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['நிலவாகை சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-115',
    name: 'Ruthra Nerunjil Chooranam',
    tamilName: 'ருத்ரா நெருஞ்சில் சூரணம்',
    slug: 'ruthra-nerunjil-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 175,
    originalPrice: 201,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Small caltrops herbal powder for renal filtration, urinary ease, and vigor.',
    shortDescriptionTa: 'சிறுநீரக நலம் மற்றும் தாது பலத்திற்கான பாரம்பரிய சூரணம்.',
    description: 'Ruthra Nerunjil Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா நெருஞ்சில் சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Small caltrops herbal powder for renal filtration, urinary ease, and vigor.',
    traditionalRoleTa: 'சிறுநீரக நலம் மற்றும் தாது பலத்திற்கான பாரம்பரிய சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-nerunjil-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nerunjil-chooranam/front.jpg',
      '/images/products/ruthra-nerunjil-chooranam/angle.jpg',
      '/images/products/ruthra-nerunjil-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nerunjil-chooranam/front.jpg',
      '/images/products/ruthra-nerunjil-chooranam/angle.jpg',
      '/images/products/ruthra-nerunjil-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['nerunjil chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['நெருஞ்சில் சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-116',
    name: 'Ruthra Omam Chooranam',
    tamilName: 'ருத்ரா ஓம சூரணம்',
    slug: 'ruthra-omam-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['digestive-wellness'],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pure Ajwain seed compound for spasmodic colic pain, indigestion, and bloating.',
    shortDescriptionTa: 'வயிற்று வலி, அஜீரணம் மற்றும் வாயு தொந்தரவு போக்கும் ஓம சூரணம்.',
    description: 'Ruthra Omam Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா ஓம சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Pure Ajwain seed compound for spasmodic colic pain, indigestion, and bloating.',
    traditionalRoleTa: 'வயிற்று வலி, அஜீரணம் மற்றும் வாயு தொந்தரவு போக்கும் ஓம சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-omam-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-omam-chooranam/front.jpg',
      '/images/products/ruthra-omam-chooranam/angle.jpg',
      '/images/products/ruthra-omam-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-omam-chooranam/front.jpg',
      '/images/products/ruthra-omam-chooranam/angle.jpg',
      '/images/products/ruthra-omam-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['omam chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['ஓம சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-117',
    name: 'Ruthra Panchadeebakkini Chooranam',
    tamilName: 'ருத்ரா பஞ்சதீபாக்கினி சூரணம்',
    slug: 'ruthra-panchadeebakkini-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['digestive-wellness'],
    price: 195,
    originalPrice: 224,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Five-spice classical metabolism igniter for low appetite and gastric sluggishness.',
    shortDescriptionTa: 'செரிமான தீயை தூண்டி பசியை உண்டாக்கும் ஐந்து மூலிகை மருந்து.',
    description: 'Ruthra Panchadeebakkini Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பஞ்சதீபாக்கினி சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Five-spice classical metabolism igniter for low appetite and gastric sluggishness.',
    traditionalRoleTa: 'செரிமான தீயை தூண்டி பசியை உண்டாக்கும் ஐந்து மூலிகை மருந்து.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-panchadeebakkini-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-panchadeebakkini-chooranam/front.jpg',
      '/images/products/ruthra-panchadeebakkini-chooranam/angle.jpg',
      '/images/products/ruthra-panchadeebakkini-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-panchadeebakkini-chooranam/front.jpg',
      '/images/products/ruthra-panchadeebakkini-chooranam/angle.jpg',
      '/images/products/ruthra-panchadeebakkini-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['panchadeebakkini chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['பஞ்சதீபாக்கினி சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-118',
    name: 'Ruthra Parangipattai Chooranam',
    tamilName: 'ருத்ரா பறங்கிப்பட்டை சூரணம்',
    slug: 'ruthra-parangipattai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['skin-hair'],
    price: 210,
    originalPrice: 241,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Smilax china root compound for chronic skin eczema, psoriasis, and blood purification.',
    shortDescriptionTa: 'தோல் நோய்கள், படை, அரிப்பு மற்றும் ரத்த சுத்திக்கு உன்னத மருந்து.',
    description: 'Ruthra Parangipattai Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பறங்கிப்பட்டை சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Smilax china root compound for chronic skin eczema, psoriasis, and blood purification.',
    traditionalRoleTa: 'தோல் நோய்கள், படை, அரிப்பு மற்றும் ரத்த சுத்திக்கு உன்னத மருந்து.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-parangipattai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-parangipattai-chooranam/front.jpg',
      '/images/products/ruthra-parangipattai-chooranam/angle.jpg',
      '/images/products/ruthra-parangipattai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-parangipattai-chooranam/front.jpg',
      '/images/products/ruthra-parangipattai-chooranam/angle.jpg',
      '/images/products/ruthra-parangipattai-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['parangipattai chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['பறங்கிப்பட்டை சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-119',
    name: 'Ruthra Perungaya Chooranam',
    tamilName: 'ருத்ரா பெருங்காய சூரணம்',
    slug: 'ruthra-perungaya-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['womens-wellness'],
    price: 165,
    originalPrice: 190,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified Asafoetida formulation for abdominal distension and menstrual cramps.',
    shortDescriptionTa: 'மாதவிடாய் வயிற்று வலி மற்றும் வாயு பிடிப்பு நீக்கும் பெருங்காய சூரணம்.',
    description: 'Ruthra Perungaya Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பெருங்காய சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified Asafoetida formulation for abdominal distension and menstrual cramps.',
    traditionalRoleTa: 'மாதவிடாய் வயிற்று வலி மற்றும் வாயு பிடிப்பு நீக்கும் பெருங்காய சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-perungaya-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-perungaya-chooranam/front.jpg',
      '/images/products/ruthra-perungaya-chooranam/angle.jpg',
      '/images/products/ruthra-perungaya-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-perungaya-chooranam/front.jpg',
      '/images/products/ruthra-perungaya-chooranam/angle.jpg',
      '/images/products/ruthra-perungaya-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['perungaya chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['பெருங்காய சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-120',
    name: 'Ruthra Ponnankanni Chooranam',
    tamilName: 'ருத்ரா பொன்னாங்கண்ணி சூரணம்',
    slug: 'ruthra-ponnankanni-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['skin-hair'],
    price: 160,
    originalPrice: 184,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Traditional botanical rejuvenator for ocular health, eye clarity, and body vigor.',
    shortDescriptionTa: 'கண் பார்வை தெளிவு மற்றும் உடல் பளபளப்பிற்கான பொன்னாங்கண்ணி சூரணம்.',
    description: 'Ruthra Ponnankanni Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பொன்னாங்கண்ணி சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Traditional botanical rejuvenator for ocular health, eye clarity, and body vigor.',
    traditionalRoleTa: 'கண் பார்வை தெளிவு மற்றும் உடல் பளபளப்பிற்கான பொன்னாங்கண்ணி சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-ponnankanni-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-ponnankanni-chooranam/front.jpg',
      '/images/products/ruthra-ponnankanni-chooranam/angle.jpg',
      '/images/products/ruthra-ponnankanni-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ponnankanni-chooranam/front.jpg',
      '/images/products/ruthra-ponnankanni-chooranam/angle.jpg',
      '/images/products/ruthra-ponnankanni-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['ponnankanni chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['பொன்னாங்கண்ணி சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-121',
    name: 'Ruthra Sanjeevi Chooranam',
    tamilName: 'ருத்ரா சஞ்சீவி சூரணம்',
    slug: 'ruthra-sanjeevi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 220,
    originalPrice: 253,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Multi-herbal immune booster and stamina tonic for general physical weakness.',
    shortDescriptionTa: 'உடல் பலவீனம் நீக்கி புத்துணர்ச்சி தரும் சஞ்சீவி சூரணம்.',
    description: 'Ruthra Sanjeevi Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சஞ்சீவி சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Multi-herbal immune booster and stamina tonic for general physical weakness.',
    traditionalRoleTa: 'உடல் பலவீனம் நீக்கி புத்துணர்ச்சி தரும் சஞ்சீவி சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-sanjeevi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sanjeevi-chooranam/front.jpg',
      '/images/products/ruthra-sanjeevi-chooranam/angle.jpg',
      '/images/products/ruthra-sanjeevi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sanjeevi-chooranam/front.jpg',
      '/images/products/ruthra-sanjeevi-chooranam/angle.jpg',
      '/images/products/ruthra-sanjeevi-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['sanjeevi chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['சஞ்சீவி சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-122',
    name: 'Ruthra Sangu Chooranam',
    tamilName: 'ருத்ரா சங்கு சூரணம்',
    slug: 'ruthra-sangu-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['digestive-wellness'],
    price: 190,
    originalPrice: 218,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Conch shell calcinated formulation for hyperacidity, gastritis, and peptic ulcers.',
    shortDescriptionTa: 'நெஞ்செரிச்சல், அமிலத்தன்மை மற்றும் குடல் புண்களை ஆற்றும் சங்கு சூரணம்.',
    description: 'Ruthra Sangu Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சங்கு சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Conch shell calcinated formulation for hyperacidity, gastritis, and peptic ulcers.',
    traditionalRoleTa: 'நெஞ்செரிச்சல், அமிலத்தன்மை மற்றும் குடல் புண்களை ஆற்றும் சங்கு சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-sangu-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sangu-chooranam/front.jpg',
      '/images/products/ruthra-sangu-chooranam/angle.jpg',
      '/images/products/ruthra-sangu-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sangu-chooranam/front.jpg',
      '/images/products/ruthra-sangu-chooranam/angle.jpg',
      '/images/products/ruthra-sangu-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['sangu chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['சங்கு சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-123',
    name: 'Ruthra Seenthil Chooranam',
    tamilName: 'ருத்ரா சீந்தில் சூரணம்',
    slug: 'ruthra-seenthil-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 175,
    originalPrice: 201,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Tinospora cordifolia powder for chronic low-grade fevers and immuno-modulation.',
    shortDescriptionTa: 'நாள்பட்ட காய்ச்சல் மற்றும் நோய் எதிர்ப்பு சக்திக்கு உகந்த சீந்தில் பொடி.',
    description: 'Ruthra Seenthil Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சீந்தில் சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Tinospora cordifolia powder for chronic low-grade fevers and immuno-modulation.',
    traditionalRoleTa: 'நாள்பட்ட காய்ச்சல் மற்றும் நோய் எதிர்ப்பு சக்திக்கு உகந்த சீந்தில் பொடி.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-seenthil-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-seenthil-chooranam/front.jpg',
      '/images/products/ruthra-seenthil-chooranam/angle.jpg',
      '/images/products/ruthra-seenthil-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-seenthil-chooranam/front.jpg',
      '/images/products/ruthra-seenthil-chooranam/angle.jpg',
      '/images/products/ruthra-seenthil-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['seenthil chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['சீந்தில் சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-124',
    name: 'Ruthra Sivanar Amirtham Chooranam',
    tamilName: 'ருத்ரா சிவனார் அமிர்தம் சூரணம்',
    slug: 'ruthra-sivanar-amirtham-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['respiratory'],
    price: 230,
    originalPrice: 265,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Potent classical detoxifier and respiratory anti-inflammatory compound.',
    shortDescriptionTa: 'கப நோய்கள், ஆஸ்துமா மற்றும் விஷ முறிவிற்கான பாரம்பரிய மருந்து.',
    description: 'Ruthra Sivanar Amirtham Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சிவனார் அமிர்தம் சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Potent classical detoxifier and respiratory anti-inflammatory compound.',
    traditionalRoleTa: 'கப நோய்கள், ஆஸ்துமா மற்றும் விஷ முறிவிற்கான பாரம்பரிய மருந்து.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-sivanar-amirtham-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sivanar-amirtham-chooranam/front.jpg',
      '/images/products/ruthra-sivanar-amirtham-chooranam/angle.jpg',
      '/images/products/ruthra-sivanar-amirtham-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sivanar-amirtham-chooranam/front.jpg',
      '/images/products/ruthra-sivanar-amirtham-chooranam/angle.jpg',
      '/images/products/ruthra-sivanar-amirtham-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['sivanar amirtham chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['சிவனார் அமிர்தம் சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-125',
    name: 'Ruthra Sirupeelai Chooranam',
    tamilName: 'ருத்ரா சிறுபீளை சூரணம்',
    slug: 'ruthra-sirupeelai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 165,
    originalPrice: 190,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Aerva lanata botanical powder for kidney stone dissolution and urinary flow.',
    shortDescriptionTa: 'சிறுநீரக கற்களை கரைத்து சிறுநீர் எரிச்சலை போக்கும் சிறுபீளை.',
    description: 'Ruthra Sirupeelai Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சிறுபீளை சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Aerva lanata botanical powder for kidney stone dissolution and urinary flow.',
    traditionalRoleTa: 'சிறுநீரக கற்களை கரைத்து சிறுநீர் எரிச்சலை போக்கும் சிறுபீளை.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-sirupeelai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sirupeelai-chooranam/front.jpg',
      '/images/products/ruthra-sirupeelai-chooranam/angle.jpg',
      '/images/products/ruthra-sirupeelai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sirupeelai-chooranam/front.jpg',
      '/images/products/ruthra-sirupeelai-chooranam/angle.jpg',
      '/images/products/ruthra-sirupeelai-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['sirupeelai chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['சிறுபீளை சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-126',
    name: 'Ruthra Sivanar Vembu Chooranam',
    tamilName: 'ருத்ரா சிவனார் வேம்பு சூரணம்',
    slug: 'ruthra-sivanar-vembu-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['skin-hair'],
    price: 215,
    originalPrice: 247,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Indigofera aspalathoides compound for stubborn skin lesions, boils, and leprosy patches.',
    shortDescriptionTa: 'கரப்பான், காளாஞ்சகப்படை போன்ற நாள்பட்ட தோல் நோய்களுக்கான மருந்து.',
    description: 'Ruthra Sivanar Vembu Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சிவனார் வேம்பு சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Indigofera aspalathoides compound for stubborn skin lesions, boils, and leprosy patches.',
    traditionalRoleTa: 'கரப்பான், காளாஞ்சகப்படை போன்ற நாள்பட்ட தோல் நோய்களுக்கான மருந்து.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-sivanar-vembu-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sivanar-vembu-chooranam/front.jpg',
      '/images/products/ruthra-sivanar-vembu-chooranam/angle.jpg',
      '/images/products/ruthra-sivanar-vembu-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sivanar-vembu-chooranam/front.jpg',
      '/images/products/ruthra-sivanar-vembu-chooranam/angle.jpg',
      '/images/products/ruthra-sivanar-vembu-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['sivanar vembu chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['சிவனார் வேம்பு சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-127',
    name: 'Ruthra Thaleesathi Chooranam',
    tamilName: 'ருத்ரா தாளீசாதி சூரணம்',
    slug: 'ruthra-thaleesathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['respiratory'],
    price: 185,
    originalPrice: 213,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Himalayan silver fir powder for chronic cough, asthma, bronchitis, and taste loss.',
    shortDescriptionTa: 'இரும்பல், நெஞ்சு சளி, கபம் மற்றும் பசியின்மையை போக்கும் சூரணம்.',
    description: 'Ruthra Thaleesathi Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா தாளீசாதி சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Himalayan silver fir powder for chronic cough, asthma, bronchitis, and taste loss.',
    traditionalRoleTa: 'இரும்பல், நெஞ்சு சளி, கபம் மற்றும் பசியின்மையை போக்கும் சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-thaleesathi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-thaleesathi-chooranam/front.jpg',
      '/images/products/ruthra-thaleesathi-chooranam/angle.jpg',
      '/images/products/ruthra-thaleesathi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thaleesathi-chooranam/front.jpg',
      '/images/products/ruthra-thaleesathi-chooranam/angle.jpg',
      '/images/products/ruthra-thaleesathi-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['thaleesathi chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['தாளீசாதி சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-128',
    name: 'Ruthra Thiriphala Chooranam',
    tamilName: 'ருத்ரா திரிபலா சூரணம்',
    slug: 'ruthra-thiriphala-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['digestive-wellness'],
    price: 140,
    originalPrice: 161,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Three-fruit cornerstone formulation for daily digestion, colon detox, and ocular health.',
    shortDescriptionTa: 'கடுக்காய், நெல்லிக்காய், தான்றிக்காய் அடங்கிய முழுமையான உடல் சுத்தி சூரணம்.',
    description: 'Ruthra Thiriphala Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா திரிபலா சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Three-fruit cornerstone formulation for daily digestion, colon detox, and ocular health.',
    traditionalRoleTa: 'கடுக்காய், நெல்லிக்காய், தான்றிக்காய் அடங்கிய முழுமையான உடல் சுத்தி சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-thiriphala-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-thiriphala-chooranam/front.jpg',
      '/images/products/ruthra-thiriphala-chooranam/angle.jpg',
      '/images/products/ruthra-thiriphala-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thiriphala-chooranam/front.jpg',
      '/images/products/ruthra-thiriphala-chooranam/angle.jpg',
      '/images/products/ruthra-thiriphala-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['thiriphala chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['திரிபலா சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-129',
    name: 'Ruthra Thirikadugu Chooranam',
    tamilName: 'ருத்ரா திரிகடுகு சூரணம்',
    slug: 'ruthra-thirikadugu-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['respiratory'],
    price: 145,
    originalPrice: 167,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Dry ginger, black pepper, and long pepper bio-enhancer for digestion and Kapha.',
    shortDescriptionTa: 'சுக்கு, மிளகு, திப்பிலி சேர்ந்த ஜீரண மற்றும் சளி நிவாரண சூரணம்.',
    description: 'Ruthra Thirikadugu Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா திரிகடுகு சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Dry ginger, black pepper, and long pepper bio-enhancer for digestion and Kapha.',
    traditionalRoleTa: 'சுக்கு, மிளகு, திப்பிலி சேர்ந்த ஜீரண மற்றும் சளி நிவாரண சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-thirikadugu-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-thirikadugu-chooranam/front.jpg',
      '/images/products/ruthra-thirikadugu-chooranam/angle.jpg',
      '/images/products/ruthra-thirikadugu-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thirikadugu-chooranam/front.jpg',
      '/images/products/ruthra-thirikadugu-chooranam/angle.jpg',
      '/images/products/ruthra-thirikadugu-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['thirikadugu chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['திரிகடுகு சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-130',
    name: 'Ruthra Thuthuvalai Chooranam',
    tamilName: 'ருத்ரா தூதுவளை சூரணம்',
    slug: 'ruthra-thuthuvalai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['respiratory'],
    price: 170,
    originalPrice: 195,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Solanum trilobatum powder for broncho-dilation, allergy cough, and lung strength.',
    shortDescriptionTa: 'சுவாச குழாய் விரிவூட்டி நெஞ்சு சளியை வெளியேற்றும் தூதுவளை.',
    description: 'Ruthra Thuthuvalai Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா தூதுவளை சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Solanum trilobatum powder for broncho-dilation, allergy cough, and lung strength.',
    traditionalRoleTa: 'சுவாச குழாய் விரிவூட்டி நெஞ்சு சளியை வெளியேற்றும் தூதுவளை.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-thuthuvalai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-thuthuvalai-chooranam/front.jpg',
      '/images/products/ruthra-thuthuvalai-chooranam/angle.jpg',
      '/images/products/ruthra-thuthuvalai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thuthuvalai-chooranam/front.jpg',
      '/images/products/ruthra-thuthuvalai-chooranam/angle.jpg',
      '/images/products/ruthra-thuthuvalai-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['thuthuvalai chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['தூதுவளை சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-131',
    name: 'Ruthra Vallarai Chooranam',
    tamilName: 'ருத்ரா வல்லாரை சூரணம்',
    slug: 'ruthra-vallarai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 190,
    originalPrice: 218,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Centella asiatica brain tonic for memory retention, focus, and nervous rejuvenation.',
    shortDescriptionTa: 'ஞாபக சக்தி, மூளை நரம்பு பலம் மற்றும் கவனத்திற்கான வல்லாரை சூரணம்.',
    description: 'Ruthra Vallarai Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா வல்லாரை சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Centella asiatica brain tonic for memory retention, focus, and nervous rejuvenation.',
    traditionalRoleTa: 'ஞாபக சக்தி, மூளை நரம்பு பலம் மற்றும் கவனத்திற்கான வல்லாரை சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-vallarai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-vallarai-chooranam/front.jpg',
      '/images/products/ruthra-vallarai-chooranam/angle.jpg',
      '/images/products/ruthra-vallarai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vallarai-chooranam/front.jpg',
      '/images/products/ruthra-vallarai-chooranam/angle.jpg',
      '/images/products/ruthra-vallarai-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['vallarai chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['வல்லாரை சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-132',
    name: 'Ruthra Vellarugu Chooranam',
    tamilName: 'ருத்ரா வெள்ளறுகு சூரணம்',
    slug: 'ruthra-vellarugu-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 175,
    originalPrice: 201,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Enicostemma littorale compound for blood sugar regulation and dermatological itching.',
    shortDescriptionTa: 'ரத்த சர்க்கரை அளவு மற்றும் தோல் நமச்சல் நீக்கும் வெள்ளறுகு.',
    description: 'Ruthra Vellarugu Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா வெள்ளறுகு சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Enicostemma littorale compound for blood sugar regulation and dermatological itching.',
    traditionalRoleTa: 'ரத்த சர்க்கரை அளவு மற்றும் தோல் நமச்சல் நீக்கும் வெள்ளறுகு.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-vellarugu-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-vellarugu-chooranam/front.jpg',
      '/images/products/ruthra-vellarugu-chooranam/angle.jpg',
      '/images/products/ruthra-vellarugu-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vellarugu-chooranam/front.jpg',
      '/images/products/ruthra-vellarugu-chooranam/angle.jpg',
      '/images/products/ruthra-vellarugu-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['vellarugu chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['வெள்ளறுகு சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-133',
    name: 'Ruthra Veppilai Chooranam',
    tamilName: 'ருத்ரா வேப்பிலை சூரணம்',
    slug: 'ruthra-veppilai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['skin-hair'],
    price: 150,
    originalPrice: 173,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified Neem leaf powder for intestinal worms, blood cleansing, and skin hygiene.',
    shortDescriptionTa: 'குடல் புழுக்கள் நீக்கம் மற்றும் ரத்த சுத்திகரிப்பிற்கான வேப்பிலை பொடி.',
    description: 'Ruthra Veppilai Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா வேப்பிலை சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified Neem leaf powder for intestinal worms, blood cleansing, and skin hygiene.',
    traditionalRoleTa: 'குடல் புழுக்கள் நீக்கம் மற்றும் ரத்த சுத்திகரிப்பிற்கான வேப்பிலை பொடி.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-veppilai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-veppilai-chooranam/front.jpg',
      '/images/products/ruthra-veppilai-chooranam/angle.jpg',
      '/images/products/ruthra-veppilai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-veppilai-chooranam/front.jpg',
      '/images/products/ruthra-veppilai-chooranam/angle.jpg',
      '/images/products/ruthra-veppilai-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['veppilai chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['வேப்பிலை சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-134',
    name: 'Ruthra Venpoosani Chooranam',
    tamilName: 'ருத்ரா வெண்பூசணி சூரணம்',
    slug: 'ruthra-venpoosani-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['metabolic-wellness'],
    price: 195,
    originalPrice: 224,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Ash gourd nourishing powder for body cooling, weight gaining, and peptic comfort.',
    shortDescriptionTa: 'உடல் உஷ்ணம் நீக்கி எடை கூட உதவும் வெண்பூசணி சூரணம்.',
    description: 'Ruthra Venpoosani Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா வெண்பூசணி சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Ash gourd nourishing powder for body cooling, weight gaining, and peptic comfort.',
    traditionalRoleTa: 'உடல் உஷ்ணம் நீக்கி எடை கூட உதவும் வெண்பூசணி சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-venpoosani-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-venpoosani-chooranam/front.jpg',
      '/images/products/ruthra-venpoosani-chooranam/angle.jpg',
      '/images/products/ruthra-venpoosani-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-venpoosani-chooranam/front.jpg',
      '/images/products/ruthra-venpoosani-chooranam/angle.jpg',
      '/images/products/ruthra-venpoosani-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['venpoosani chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['வெண்பூசணி சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-135',
    name: 'Ruthra Vilvam Chooranam',
    tamilName: 'ருத்ரா வில்வம் சூரணம்',
    slug: 'ruthra-vilvam-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ['digestive-wellness'],
    price: 160,
    originalPrice: 184,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Aegle marmelos fruit-leaf powder for irritable bowel, chronic diarrhea, and dysentery.',
    shortDescriptionTa: 'சீதபேதி, வயிற்று கடுப்பு மற்றும் குடல் அலர்ஜி போக்கும் வில்வ சூரணம்.',
    description: 'Ruthra Vilvam Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா வில்வம் சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Aegle marmelos fruit-leaf powder for irritable bowel, chronic diarrhea, and dysentery.',
    traditionalRoleTa: 'சீதபேதி, வயிற்று கடுப்பு மற்றும் குடல் அலர்ஜி போக்கும் வில்வ சூரணம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-vilvam-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-vilvam-chooranam/front.jpg',
      '/images/products/ruthra-vilvam-chooranam/angle.jpg',
      '/images/products/ruthra-vilvam-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vilvam-chooranam/front.jpg',
      '/images/products/ruthra-vilvam-chooranam/angle.jpg',
      '/images/products/ruthra-vilvam-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['vilvam chooranam', 'chooranam', 'siddha'],
    tamilKeywords: ['வில்வம் சூரணம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-136',
    name: 'Ruthra Aadaathodai Kudineer Chooranam',
    tamilName: 'ருத்ரா ஆடாதோடை குடிநீர் சூரணம்',
    slug: 'ruthra-aadaathodai-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ['respiratory'],
    price: 180,
    originalPrice: 207,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical Vasaka leaf decoction for severe respiratory congestion, whooping cough, and phlegm.',
    shortDescriptionTa: 'நெஞ்சு சளி, இருமல் மற்றும் ஆஸ்துமா போக்கும் ஆடாதோடை குடிநீர்.',
    description: 'Ruthra Aadaathodai Kudineer Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா ஆடாதோடை குடிநீர் சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Classical Vasaka leaf decoction for severe respiratory congestion, whooping cough, and phlegm.',
    traditionalRoleTa: 'நெஞ்சு சளி, இருமல் மற்றும் ஆஸ்துமா போக்கும் ஆடாதோடை குடிநீர்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-aadaathodai-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-aadaathodai-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-aadaathodai-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-aadaathodai-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-aadaathodai-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-aadaathodai-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-aadaathodai-kudineer-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['aadaathodai kudineer chooranam', 'kudineer chooranam', 'siddha'],
    tamilKeywords: ['ஆடாதோடை குடிநீர் சூரணம்', 'குடிநீர் சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-137',
    name: 'Ruthra Asthicura Kudineer Chooranam',
    tamilName: 'ருத்ரா அஸ்திசுரா குடிநீர் சூரணம்',
    slug: 'ruthra-asthicura-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ['metabolic-wellness'],
    price: 210,
    originalPrice: 241,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Deep tissue antipyretic decoction for chronic bone-level fevers and tuberculosis debility.',
    shortDescriptionTa: 'எலும்பு உருக்கி காய்ச்சல் மற்றும் நாள்பட்ட உஷ்ண காய்ச்சல் தீர்க்கும் குடிநீர்.',
    description: 'Ruthra Asthicura Kudineer Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அஸ்திசுரா குடிநீர் சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Deep tissue antipyretic decoction for chronic bone-level fevers and tuberculosis debility.',
    traditionalRoleTa: 'எலும்பு உருக்கி காய்ச்சல் மற்றும் நாள்பட்ட உஷ்ண காய்ச்சல் தீர்க்கும் குடிநீர்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-asthicura-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-asthicura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-asthicura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-asthicura-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-asthicura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-asthicura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-asthicura-kudineer-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['asthicura kudineer chooranam', 'kudineer chooranam', 'siddha'],
    tamilKeywords: ['அஸ்திசுரா குடிநீர் சூரணம்', 'குடிநீர் சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-138',
    name: 'Ruthra Kaba Sura Kudineer Chooranam',
    tamilName: 'ருத்ரா கப சுர குடிநீர் சூரணம்',
    slug: 'ruthra-kaba-sura-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ['respiratory'],
    price: 195,
    originalPrice: 224,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Renowned 15-herb antiviral decoction for viral fevers, flu symptoms, and respiratory defense.',
    shortDescriptionTa: 'வைரஸ் காய்ச்சல், சளி, இருமல் மற்றும் உடல் வலியை போக்கும் 15 மூலிகை கஷாயம்.',
    description: 'Ruthra Kaba Sura Kudineer Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கப சுர குடிநீர் சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Renowned 15-herb antiviral decoction for viral fevers, flu symptoms, and respiratory defense.',
    traditionalRoleTa: 'வைரஸ் காய்ச்சல், சளி, இருமல் மற்றும் உடல் வலியை போக்கும் 15 மூலிகை கஷாயம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-kaba-sura-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kaba-sura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-kaba-sura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-kaba-sura-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kaba-sura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-kaba-sura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-kaba-sura-kudineer-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kaba sura kudineer chooranam', 'kudineer chooranam', 'siddha'],
    tamilKeywords: ['கப சுர குடிநீர் சூரணம்', 'குடிநீர் சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-139',
    name: 'Ruthra Mahavilluvathi Kudineer Chooranam',
    tamilName: 'ருத்ரா மகா வில்வாதி குடிநீர் சூரணம்',
    slug: 'ruthra-mahavilluvathi-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ['digestive-wellness'],
    price: 220,
    originalPrice: 253,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Potent Bael root decoction for vomiting in pregnancy, digestive disorders, and colic.',
    shortDescriptionTa: 'கர்ப்பிணி வாந்தி, பித்த கிறுகிறுப்பு மற்றும் பசியின்மை நீக்கும் வில்வாதி குடிநீர்.',
    description: 'Ruthra Mahavilluvathi Kudineer Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா மகா வில்வாதி குடிநீர் சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Potent Bael root decoction for vomiting in pregnancy, digestive disorders, and colic.',
    traditionalRoleTa: 'கர்ப்பிணி வாந்தி, பித்த கிறுகிறுப்பு மற்றும் பசியின்மை நீக்கும் வில்வாதி குடிநீர்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-mahavilluvathi-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-mahavilluvathi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-mahavilluvathi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-mahavilluvathi-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mahavilluvathi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-mahavilluvathi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-mahavilluvathi-kudineer-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['mahavilluvathi kudineer chooranam', 'kudineer chooranam', 'siddha'],
    tamilKeywords: ['மகா வில்வாதி குடிநீர் சூரணம்', 'குடிநீர் சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-140',
    name: 'Ruthra Vishnu Kanthi Kudineer Chooranam',
    tamilName: 'ருத்ரா விஷ்ணுகாந்தி குடிநீர் சூரணம்',
    slug: 'ruthra-vishnu-kanthi-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ['metabolic-wellness'],
    price: 185,
    originalPrice: 213,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Evolvulus alsinoides decoction for intermittent fevers, nerve calming, and restful sleep.',
    shortDescriptionTa: 'முறை காய்ச்சல், பித்த உஷ்ணம் மற்றும் நரம்பு அமைதிக்கான குடிநீர்.',
    description: 'Ruthra Vishnu Kanthi Kudineer Chooranam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா விஷ்ணுகாந்தி குடிநீர் சூரணம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Evolvulus alsinoides decoction for intermittent fevers, nerve calming, and restful sleep.',
    traditionalRoleTa: 'முறை காய்ச்சல், பித்த உஷ்ணம் மற்றும் நரம்பு அமைதிக்கான குடிநீர்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-vishnu-kanthi-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-vishnu-kanthi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-vishnu-kanthi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-vishnu-kanthi-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vishnu-kanthi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-vishnu-kanthi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-vishnu-kanthi-kudineer-chooranam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['vishnu kanthi kudineer chooranam', 'kudineer chooranam', 'siddha'],
    tamilKeywords: ['விஷ்ணுகாந்தி குடிநீர் சூரணம்', 'குடிநீர் சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-141',
    name: 'Ruthra Inji Legiyam',
    tamilName: 'ருத்ரா இஞ்சி லேகியம்',
    slug: 'ruthra-inji-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ['digestive-wellness'],
    price: 210,
    originalPrice: 241,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Ginger electuary with jaggery and ghee for appetite stimulation, indigestion, and gas.',
    shortDescriptionTa: 'அஜீரணம், பித்த வாந்தி, பசியின்மை போக்கும் சுவையான இஞ்சி லேகியம்.',
    description: 'Ruthra Inji Legiyam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா இஞ்சி லேகியம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Ginger electuary with jaggery and ghee for appetite stimulation, indigestion, and gas.',
    traditionalRoleTa: 'அஜீரணம், பித்த வாந்தி, பசியின்மை போக்கும் சுவையான இஞ்சி லேகியம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-inji-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-inji-legiyam/front.jpg',
      '/images/products/ruthra-inji-legiyam/angle.jpg',
      '/images/products/ruthra-inji-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-inji-legiyam/front.jpg',
      '/images/products/ruthra-inji-legiyam/angle.jpg',
      '/images/products/ruthra-inji-legiyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['inji legiyam', 'legiyam', 'siddha'],
    tamilKeywords: ['இஞ்சி லேகியம்', 'லேகியம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-142',
    name: 'Ruthra Karunai Legiyam',
    tamilName: 'ருத்ரா கருணை லேகியம்',
    slug: 'ruthra-karunai-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ['digestive-wellness'],
    price: 235,
    originalPrice: 270,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Elephant yam classical jam for internal and external hemorrhoids, piles, and fistula healing.',
    shortDescriptionTa: 'மூல நோய், பௌத்திரம் மற்றும் ரத்த மூலம் குணமாக்கும் கருணை லேகியம்.',
    description: 'Ruthra Karunai Legiyam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கருணை லேகியம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Elephant yam classical jam for internal and external hemorrhoids, piles, and fistula healing.',
    traditionalRoleTa: 'மூல நோய், பௌத்திரம் மற்றும் ரத்த மூலம் குணமாக்கும் கருணை லேகியம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-karunai-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-karunai-legiyam/front.jpg',
      '/images/products/ruthra-karunai-legiyam/angle.jpg',
      '/images/products/ruthra-karunai-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karunai-legiyam/front.jpg',
      '/images/products/ruthra-karunai-legiyam/angle.jpg',
      '/images/products/ruthra-karunai-legiyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['karunai legiyam', 'legiyam', 'siddha'],
    tamilKeywords: ['கருணை லேகியம்', 'லேகியம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-143',
    name: 'Ruthra Kanthaga Legiyam',
    tamilName: 'ருத்ரா கந்தக லேகியம்',
    slug: 'ruthra-kanthaga-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ['skin-hair'],
    price: 260,
    originalPrice: 299,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Purified sulfur herbal preserve for chronic fungal skin infections, psoriasis, and scabies.',
    shortDescriptionTa: 'சொறி, சிரங்கு, படை போன்ற தோல் வியாதிகளை உள்ளிருந்து குணமாக்கும் லேகியம்.',
    description: 'Ruthra Kanthaga Legiyam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கந்தக லேகியம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified sulfur herbal preserve for chronic fungal skin infections, psoriasis, and scabies.',
    traditionalRoleTa: 'சொறி, சிரங்கு, படை போன்ற தோல் வியாதிகளை உள்ளிருந்து குணமாக்கும் லேகியம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-kanthaga-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-kanthaga-legiyam/front.jpg',
      '/images/products/ruthra-kanthaga-legiyam/angle.jpg',
      '/images/products/ruthra-kanthaga-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kanthaga-legiyam/front.jpg',
      '/images/products/ruthra-kanthaga-legiyam/angle.jpg',
      '/images/products/ruthra-kanthaga-legiyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kanthaga legiyam', 'legiyam', 'siddha'],
    tamilKeywords: ['கந்தக லேகியம்', 'லேகியம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-144',
    name: 'Ruthra Kesari Legiyam',
    tamilName: 'ருத்ரா கேசரி லேகியம்',
    slug: 'ruthra-kesari-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ['metabolic-wellness'],
    price: 290,
    originalPrice: 334,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Saffron-infused royal vitality confection for stamina, vigor, and reproductive strength.',
    shortDescriptionTa: 'குங்குமப்பூ கலந்த உடல் பலம் மற்றும் ஆண்மை தாது விருத்தி லேகியம்.',
    description: 'Ruthra Kesari Legiyam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கேசரி லேகியம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Saffron-infused royal vitality confection for stamina, vigor, and reproductive strength.',
    traditionalRoleTa: 'குங்குமப்பூ கலந்த உடல் பலம் மற்றும் ஆண்மை தாது விருத்தி லேகியம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-kesari-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-kesari-legiyam/front.jpg',
      '/images/products/ruthra-kesari-legiyam/angle.jpg',
      '/images/products/ruthra-kesari-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kesari-legiyam/front.jpg',
      '/images/products/ruthra-kesari-legiyam/angle.jpg',
      '/images/products/ruthra-kesari-legiyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kesari legiyam', 'legiyam', 'siddha'],
    tamilKeywords: ['கேசரி லேகியம்', 'லேகியம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-145',
    name: 'Ruthra Nellikkai Legiyam',
    tamilName: 'ருத்ரா நெல்லிக்காய் லேகியம்',
    slug: 'ruthra-nellikkai-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ['metabolic-wellness'],
    price: 220,
    originalPrice: 253,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Wild gooseberry herbal preserve for family immunity, blood enhancement, and rejuvenation.',
    shortDescriptionTa: 'குழந்தைகள் முதல் பெரியவர்கள் வரை நோய் எதிர்ப்பு ஆற்றல் தரும் நெல்லி லேகியம்.',
    description: 'Ruthra Nellikkai Legiyam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா நெல்லிக்காய் லேகியம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Wild gooseberry herbal preserve for family immunity, blood enhancement, and rejuvenation.',
    traditionalRoleTa: 'குழந்தைகள் முதல் பெரியவர்கள் வரை நோய் எதிர்ப்பு ஆற்றல் தரும் நெல்லி லேகியம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-nellikkai-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-nellikkai-legiyam/front.jpg',
      '/images/products/ruthra-nellikkai-legiyam/angle.jpg',
      '/images/products/ruthra-nellikkai-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nellikkai-legiyam/front.jpg',
      '/images/products/ruthra-nellikkai-legiyam/angle.jpg',
      '/images/products/ruthra-nellikkai-legiyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['nellikkai legiyam', 'legiyam', 'siddha'],
    tamilKeywords: ['நெல்லிக்காய் லேகியம்', 'லேகியம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-146',
    name: 'Ruthra Parangipattai Legiyam',
    tamilName: 'ருத்ரா பறங்கிப்பட்டை லேகியம்',
    slug: 'ruthra-parangipattai-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ['skin-hair'],
    price: 245,
    originalPrice: 282,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Smilax root electuary for deep skin blood purification and venereal heat relief.',
    shortDescriptionTa: 'தோல் அலர்ஜி, கருந்திட்டு மற்றும் மேக நோய்களை குணமாக்கும் லேகியம்.',
    description: 'Ruthra Parangipattai Legiyam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பறங்கிப்பட்டை லேகியம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Smilax root electuary for deep skin blood purification and venereal heat relief.',
    traditionalRoleTa: 'தோல் அலர்ஜி, கருந்திட்டு மற்றும் மேக நோய்களை குணமாக்கும் லேகியம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-parangipattai-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-parangipattai-legiyam/front.jpg',
      '/images/products/ruthra-parangipattai-legiyam/angle.jpg',
      '/images/products/ruthra-parangipattai-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-parangipattai-legiyam/front.jpg',
      '/images/products/ruthra-parangipattai-legiyam/angle.jpg',
      '/images/products/ruthra-parangipattai-legiyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['parangipattai legiyam', 'legiyam', 'siddha'],
    tamilKeywords: ['பறங்கிப்பட்டை லேகியம்', 'லேகியம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-147',
    name: 'Ruthra Saranai Legiyam',
    tamilName: 'ருத்ரா சாரணை லேகியம்',
    slug: 'ruthra-saranai-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ['metabolic-wellness'],
    price: 225,
    originalPrice: 259,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Trianthema portulacastrum compound for renal edema, ascites, and fluid retention.',
    shortDescriptionTa: 'உடல் வீக்கம், சிறுநீர் அடைப்பு மற்றும் நீர்கோவை நீக்கும் சாரணை லேகியம்.',
    description: 'Ruthra Saranai Legiyam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சாரணை லேகியம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Trianthema portulacastrum compound for renal edema, ascites, and fluid retention.',
    traditionalRoleTa: 'உடல் வீக்கம், சிறுநீர் அடைப்பு மற்றும் நீர்கோவை நீக்கும் சாரணை லேகியம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-saranai-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-saranai-legiyam/front.jpg',
      '/images/products/ruthra-saranai-legiyam/angle.jpg',
      '/images/products/ruthra-saranai-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-saranai-legiyam/front.jpg',
      '/images/products/ruthra-saranai-legiyam/angle.jpg',
      '/images/products/ruthra-saranai-legiyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['saranai legiyam', 'legiyam', 'siddha'],
    tamilKeywords: ['சாரணை லேகியம்', 'லேகியம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-148',
    name: 'Ruthra Sivanar Vembu Legiyam',
    tamilName: 'ருத்ரா சிவனார் வேம்பு லேகியம்',
    slug: 'ruthra-sivanar-vembu-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ['skin-hair'],
    price: 270,
    originalPrice: 311,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Specialized botanical preserve for chronic dermatitis and non-healing ulcerous patches.',
    shortDescriptionTa: 'நாள்பட்ட தோல் புண்கள் மற்றும் தடிப்பு போக்கும் சிவனார் வேம்பு லேகியம்.',
    description: 'Ruthra Sivanar Vembu Legiyam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சிவனார் வேம்பு லேகியம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Specialized botanical preserve for chronic dermatitis and non-healing ulcerous patches.',
    traditionalRoleTa: 'நாள்பட்ட தோல் புண்கள் மற்றும் தடிப்பு போக்கும் சிவனார் வேம்பு லேகியம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-sivanar-vembu-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-sivanar-vembu-legiyam/front.jpg',
      '/images/products/ruthra-sivanar-vembu-legiyam/angle.jpg',
      '/images/products/ruthra-sivanar-vembu-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sivanar-vembu-legiyam/front.jpg',
      '/images/products/ruthra-sivanar-vembu-legiyam/angle.jpg',
      '/images/products/ruthra-sivanar-vembu-legiyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['sivanar vembu legiyam', 'legiyam', 'siddha'],
    tamilKeywords: ['சிவனார் வேம்பு லேகியம்', 'லேகியம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-149',
    name: 'Ruthra Thaleesathi Legiyam',
    tamilName: 'ருத்ரா தாளீசாதி லேகியம்',
    slug: 'ruthra-thaleesathi-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ['respiratory'],
    price: 215,
    originalPrice: 247,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Delicious herbal confection for throat tickle, asthma, productive cough, and chest tightness.',
    shortDescriptionTa: 'தொண்டை வலி, ஆஸ்துமா சளி மற்றும் இருமல் தணிக்கும் தாளீசாதி லேகியம்.',
    description: 'Ruthra Thaleesathi Legiyam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா தாளீசாதி லேகியம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Delicious herbal confection for throat tickle, asthma, productive cough, and chest tightness.',
    traditionalRoleTa: 'தொண்டை வலி, ஆஸ்துமா சளி மற்றும் இருமல் தணிக்கும் தாளீசாதி லேகியம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-thaleesathi-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-thaleesathi-legiyam/front.jpg',
      '/images/products/ruthra-thaleesathi-legiyam/angle.jpg',
      '/images/products/ruthra-thaleesathi-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thaleesathi-legiyam/front.jpg',
      '/images/products/ruthra-thaleesathi-legiyam/angle.jpg',
      '/images/products/ruthra-thaleesathi-legiyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['thaleesathi legiyam', 'legiyam', 'siddha'],
    tamilKeywords: ['தாளீசாதி லேகியம்', 'லேகியம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-150',
    name: 'Ruthra Thethan Kottai Legiyam',
    tamilName: 'ருத்ரா தேத்தான் கொட்டை லேகியம்',
    slug: 'ruthra-thethan-kottai-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ['metabolic-wellness'],
    price: 230,
    originalPrice: 265,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Clearing nut preserve for nocturnal emissions, spermatorrhea, and internal heat reduction.',
    shortDescriptionTa: 'உடல் சூடு தணித்து தாது பலம் மற்றும் சிறுநீர் எரிச்சல் தீர்க்கும் மருந்து.',
    description: 'Ruthra Thethan Kottai Legiyam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா தேத்தான் கொட்டை லேகியம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Clearing nut preserve for nocturnal emissions, spermatorrhea, and internal heat reduction.',
    traditionalRoleTa: 'உடல் சூடு தணித்து தாது பலம் மற்றும் சிறுநீர் எரிச்சல் தீர்க்கும் மருந்து.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-thethan-kottai-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-thethan-kottai-legiyam/front.jpg',
      '/images/products/ruthra-thethan-kottai-legiyam/angle.jpg',
      '/images/products/ruthra-thethan-kottai-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thethan-kottai-legiyam/front.jpg',
      '/images/products/ruthra-thethan-kottai-legiyam/angle.jpg',
      '/images/products/ruthra-thethan-kottai-legiyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['thethan kottai legiyam', 'legiyam', 'siddha'],
    tamilKeywords: ['தேத்தான் கொட்டை லேகியம்', 'லேகியம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-151',
    name: 'Ruthra Venpoosani Legiyam',
    tamilName: 'ருத்ரா வெண்பூசணி லேகியம்',
    slug: 'ruthra-venpoosani-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ['womens-wellness'],
    price: 240,
    originalPrice: 276,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Cooling ash gourd electuary for burning micturition, white discharge, and emaciation.',
    shortDescriptionTa: 'உடல் சூடு, வெள்ளைப்படுதல் மற்றும் மெலிவு போக்கும் சத்தான பூசணி லேகியம்.',
    description: 'Ruthra Venpoosani Legiyam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா வெண்பூசணி லேகியம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Cooling ash gourd electuary for burning micturition, white discharge, and emaciation.',
    traditionalRoleTa: 'உடல் சூடு, வெள்ளைப்படுதல் மற்றும் மெலிவு போக்கும் சத்தான பூசணி லேகியம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-venpoosani-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-venpoosani-legiyam/front.jpg',
      '/images/products/ruthra-venpoosani-legiyam/angle.jpg',
      '/images/products/ruthra-venpoosani-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-venpoosani-legiyam/front.jpg',
      '/images/products/ruthra-venpoosani-legiyam/angle.jpg',
      '/images/products/ruthra-venpoosani-legiyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['venpoosani legiyam', 'legiyam', 'siddha'],
    tamilKeywords: ['வெண்பூசணி லேகியம்', 'லேகியம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-152',
    name: 'Ruthra Aadaathodai Thailam',
    tamilName: 'ருத்ரா ஆடாதோடை தைலம்',
    slug: 'ruthra-aadaathodai-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam-ennai',
    concerns: ['respiratory'],
    price: 210,
    originalPrice: 241,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Chest massage oil for dissolving viscous bronchial mucus and pediatric wheezing.',
    shortDescriptionTa: 'குழந்தைகள் மற்றும் பெரியவர்கள் நெஞ்சு சளி கரைய மசாஜ் செய்யும் தைலம்.',
    description: 'Ruthra Aadaathodai Thailam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா ஆடாதோடை தைலம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Chest massage oil for dissolving viscous bronchial mucus and pediatric wheezing.',
    traditionalRoleTa: 'குழந்தைகள் மற்றும் பெரியவர்கள் நெஞ்சு சளி கரைய மசாஜ் செய்யும் தைலம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-aadaathodai-thailam/front.jpg',
    images: [
      '/images/products/ruthra-aadaathodai-thailam/front.jpg',
      '/images/products/ruthra-aadaathodai-thailam/angle.jpg',
      '/images/products/ruthra-aadaathodai-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-aadaathodai-thailam/front.jpg',
      '/images/products/ruthra-aadaathodai-thailam/angle.jpg',
      '/images/products/ruthra-aadaathodai-thailam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['aadaathodai thailam', 'thailam', 'siddha'],
    tamilKeywords: ['ஆடாதோடை தைலம்', 'தைலம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-153',
    name: 'Ruthra Arugan Thailam',
    tamilName: 'ருத்ரா அருகன் தைலம்',
    slug: 'ruthra-arugan-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam-ennai',
    concerns: ['skin-hair'],
    price: 190,
    originalPrice: 218,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Bermuda grass medicated coconut oil for scalp dandruff, eczema, and prickly heat.',
    shortDescriptionTa: 'பொடுகு, தலையில் ஏற்படும் அரிப்பு மற்றும் தோல் சூடு தணிக்கும் தைலம்.',
    description: 'Ruthra Arugan Thailam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அருகன் தைலம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Bermuda grass medicated coconut oil for scalp dandruff, eczema, and prickly heat.',
    traditionalRoleTa: 'பொடுகு, தலையில் ஏற்படும் அரிப்பு மற்றும் தோல் சூடு தணிக்கும் தைலம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-arugan-thailam/front.jpg',
    images: [
      '/images/products/ruthra-arugan-thailam/front.jpg',
      '/images/products/ruthra-arugan-thailam/angle.jpg',
      '/images/products/ruthra-arugan-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-arugan-thailam/front.jpg',
      '/images/products/ruthra-arugan-thailam/angle.jpg',
      '/images/products/ruthra-arugan-thailam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['arugan thailam', 'thailam', 'siddha'],
    tamilKeywords: ['அருகன் தைலம்', 'தைலம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-154',
    name: 'Ruthra Chithiramutti Thailam',
    tamilName: 'ருத்ரா சித்திரமுட்டி தைலம்',
    slug: 'ruthra-chithiramutti-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam-ennai',
    concerns: ['joint-mobility'],
    price: 230,
    originalPrice: 265,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Classical Vata-pacifying oil for hemiplegia, facial palsy, and joint stiffness.',
    shortDescriptionTa: 'பக்கவாதம், மூட்டு பிடிப்பு மற்றும் நரம்பு தளர்ச்சி போக்கும் மசாஜ் தைலம்.',
    description: 'Ruthra Chithiramutti Thailam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சித்திரமுட்டி தைலம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Classical Vata-pacifying oil for hemiplegia, facial palsy, and joint stiffness.',
    traditionalRoleTa: 'பக்கவாதம், மூட்டு பிடிப்பு மற்றும் நரம்பு தளர்ச்சி போக்கும் மசாஜ் தைலம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-chithiramutti-thailam/front.jpg',
    images: [
      '/images/products/ruthra-chithiramutti-thailam/front.jpg',
      '/images/products/ruthra-chithiramutti-thailam/angle.jpg',
      '/images/products/ruthra-chithiramutti-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-chithiramutti-thailam/front.jpg',
      '/images/products/ruthra-chithiramutti-thailam/angle.jpg',
      '/images/products/ruthra-chithiramutti-thailam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['chithiramutti thailam', 'thailam', 'siddha'],
    tamilKeywords: ['சித்திரமுட்டி தைலம்', 'தைலம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-155',
    name: 'Ruthra Kayathirumeni Thailam',
    tamilName: 'ருத்ரா காயத்திருமேனி தைலம்',
    slug: 'ruthra-kayathirumeni-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam-ennai',
    concerns: ['joint-mobility'],
    price: 250,
    originalPrice: 288,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Legendary martial arts Varma oil for deep blunt injuries, sprains, and fractures.',
    shortDescriptionTa: 'வர்ம அடி, சுளுக்கு, வீக்கம் மற்றும் எலும்பு முறிவு காயங்களுக்கான பாரம்பரிய தைலம்.',
    description: 'Ruthra Kayathirumeni Thailam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா காயத்திருமேனி தைலம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Legendary martial arts Varma oil for deep blunt injuries, sprains, and fractures.',
    traditionalRoleTa: 'வர்ம அடி, சுளுக்கு, வீக்கம் மற்றும் எலும்பு முறிவு காயங்களுக்கான பாரம்பரிய தைலம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-kayathirumeni-thailam/front.jpg',
    images: [
      '/images/products/ruthra-kayathirumeni-thailam/front.jpg',
      '/images/products/ruthra-kayathirumeni-thailam/angle.jpg',
      '/images/products/ruthra-kayathirumeni-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kayathirumeni-thailam/front.jpg',
      '/images/products/ruthra-kayathirumeni-thailam/angle.jpg',
      '/images/products/ruthra-kayathirumeni-thailam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kayathirumeni thailam', 'thailam', 'siddha'],
    tamilKeywords: ['காயத்திருமேனி தைலம்', 'தைலம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-156',
    name: 'Ruthra Mathan Thailam',
    tamilName: 'ருத்ரா மதன் தைலம்',
    slug: 'ruthra-mathan-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam-ennai',
    concerns: ['skin-hair'],
    price: 195,
    originalPrice: 224,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Datura-infused antiseptic oil for diabetic non-healing foot ulcers and ear discharges.',
    shortDescriptionTa: 'ஆறாத புண்கள், சர்க்கரை நோய் புண் மற்றும் காது வலி போக்கும் வெளிப்புற தைலம்.',
    description: 'Ruthra Mathan Thailam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா மதன் தைலம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Datura-infused antiseptic oil for diabetic non-healing foot ulcers and ear discharges.',
    traditionalRoleTa: 'ஆறாத புண்கள், சர்க்கரை நோய் புண் மற்றும் காது வலி போக்கும் வெளிப்புற தைலம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-mathan-thailam/front.jpg',
    images: [
      '/images/products/ruthra-mathan-thailam/front.jpg',
      '/images/products/ruthra-mathan-thailam/angle.jpg',
      '/images/products/ruthra-mathan-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mathan-thailam/front.jpg',
      '/images/products/ruthra-mathan-thailam/angle.jpg',
      '/images/products/ruthra-mathan-thailam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['mathan thailam', 'thailam', 'siddha'],
    tamilKeywords: ['மதன் தைலம்', 'தைலம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-157',
    name: 'Ruthra Mayana Thailam',
    tamilName: 'ருத்ரா மயான தைலம்',
    slug: 'ruthra-mayana-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam-ennai',
    concerns: ['joint-mobility'],
    price: 280,
    originalPrice: 322,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'High-potency deep penetrating liniment for severe rheumatic spondylosis and sciatica.',
    shortDescriptionTa: 'அதிதீவிர மூட்டு வலி, இடுப்பு பிடிப்பு மற்றும் வாத உபாதைகளுக்கான விசேஷ தைலம்.',
    description: 'Ruthra Mayana Thailam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா மயான தைலம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'High-potency deep penetrating liniment for severe rheumatic spondylosis and sciatica.',
    traditionalRoleTa: 'அதிதீவிர மூட்டு வலி, இடுப்பு பிடிப்பு மற்றும் வாத உபாதைகளுக்கான விசேஷ தைலம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-mayana-thailam/front.jpg',
    images: [
      '/images/products/ruthra-mayana-thailam/front.jpg',
      '/images/products/ruthra-mayana-thailam/angle.jpg',
      '/images/products/ruthra-mayana-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mayana-thailam/front.jpg',
      '/images/products/ruthra-mayana-thailam/angle.jpg',
      '/images/products/ruthra-mayana-thailam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['mayana thailam', 'thailam', 'siddha'],
    tamilKeywords: ['மயான தைலம்', 'தைலம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-158',
    name: 'Ruthra Pinda Thailam',
    tamilName: 'ருத்ரா பிண்ட தைலம்',
    slug: 'ruthra-pinda-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam-ennai',
    concerns: ['joint-mobility'],
    price: 220,
    originalPrice: 253,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Beeswax and Manjistha cooling massage oil for gouty arthritis, burning feet, and Vatarakta.',
    shortDescriptionTa: 'கால் எரிச்சல், பித்த வாதம் மற்றும் மூட்டு வீக்கத்தை தணிக்கும் குளிர்ச்சி தைலம்.',
    description: 'Ruthra Pinda Thailam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பிண்ட தைலம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Beeswax and Manjistha cooling massage oil for gouty arthritis, burning feet, and Vatarakta.',
    traditionalRoleTa: 'கால் எரிச்சல், பித்த வாதம் மற்றும் மூட்டு வீக்கத்தை தணிக்கும் குளிர்ச்சி தைலம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-pinda-thailam/front.jpg',
    images: [
      '/images/products/ruthra-pinda-thailam/front.jpg',
      '/images/products/ruthra-pinda-thailam/angle.jpg',
      '/images/products/ruthra-pinda-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pinda-thailam/front.jpg',
      '/images/products/ruthra-pinda-thailam/angle.jpg',
      '/images/products/ruthra-pinda-thailam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['pinda thailam', 'thailam', 'siddha'],
    tamilKeywords: ['பிண்ட தைலம்', 'தைலம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-159',
    name: 'Ruthra Seenthil Thailam',
    tamilName: 'ருத்ரா சீந்தில் தைலம்',
    slug: 'ruthra-seenthil-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam-ennai',
    concerns: ['metabolic-wellness'],
    price: 215,
    originalPrice: 247,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Guduchi cooling head oil for eye strain, migraine headaches, and scalp heat.',
    shortDescriptionTa: 'தலைவலி, கண் எரிச்சல் மற்றும் உஷ்ண தலைசுற்றல் போக்கும் தலை தேய்த்தல் எண்ணெய்.',
    description: 'Ruthra Seenthil Thailam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சீந்தில் தைலம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Guduchi cooling head oil for eye strain, migraine headaches, and scalp heat.',
    traditionalRoleTa: 'தலைவலி, கண் எரிச்சல் மற்றும் உஷ்ண தலைசுற்றல் போக்கும் தலை தேய்த்தல் எண்ணெய்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-seenthil-thailam/front.jpg',
    images: [
      '/images/products/ruthra-seenthil-thailam/front.jpg',
      '/images/products/ruthra-seenthil-thailam/angle.jpg',
      '/images/products/ruthra-seenthil-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-seenthil-thailam/front.jpg',
      '/images/products/ruthra-seenthil-thailam/angle.jpg',
      '/images/products/ruthra-seenthil-thailam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['seenthil thailam', 'thailam', 'siddha'],
    tamilKeywords: ['சீந்தில் தைலம்', 'தைலம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-160',
    name: 'Ruthra Vatha Kesari Thailam',
    tamilName: 'ருத்ரா வாத கேசரி தைலம்',
    slug: 'ruthra-vatha-kesari-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam-ennai',
    concerns: ['joint-mobility'],
    price: 240,
    originalPrice: 276,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Warming neuro-muscular oil for chronic knee osteoarthritis, backache, and frozen shoulder.',
    shortDescriptionTa: 'முழங்கால் தேய்மானம், முதுகு வலி மற்றும் தோள்பட்டை பிடிப்பு நீக்கும் வாத தைலம்.',
    description: 'Ruthra Vatha Kesari Thailam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா வாத கேசரி தைலம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Warming neuro-muscular oil for chronic knee osteoarthritis, backache, and frozen shoulder.',
    traditionalRoleTa: 'முழங்கால் தேய்மானம், முதுகு வலி மற்றும் தோள்பட்டை பிடிப்பு நீக்கும் வாத தைலம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-vatha-kesari-thailam/front.jpg',
    images: [
      '/images/products/ruthra-vatha-kesari-thailam/front.jpg',
      '/images/products/ruthra-vatha-kesari-thailam/angle.jpg',
      '/images/products/ruthra-vatha-kesari-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vatha-kesari-thailam/front.jpg',
      '/images/products/ruthra-vatha-kesari-thailam/angle.jpg',
      '/images/products/ruthra-vatha-kesari-thailam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['vatha kesari thailam', 'thailam', 'siddha'],
    tamilKeywords: ['வாத கேசரி தைலம்', 'தைலம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-161',
    name: 'Ruthra Brami Nei',
    tamilName: 'ருத்ரா பிராமி நெய்',
    slug: 'ruthra-brami-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei-ghritham',
    concerns: ['metabolic-wellness'],
    price: 310,
    originalPrice: 357,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Medicated cow ghee for pediatric intellect, speech clarity, and nervous strength.',
    shortDescriptionTa: 'குழந்தைகளின் நினைவாற்றல், பேச்சு தெளிவு மற்றும் மூளை வளர்ச்சிக்கு உகந்த நெய்.',
    description: 'Ruthra Brami Nei is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பிராமி நெய் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Medicated cow ghee for pediatric intellect, speech clarity, and nervous strength.',
    traditionalRoleTa: 'குழந்தைகளின் நினைவாற்றல், பேச்சு தெளிவு மற்றும் மூளை வளர்ச்சிக்கு உகந்த நெய்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-brami-nei/front.jpg',
    images: [
      '/images/products/ruthra-brami-nei/front.jpg',
      '/images/products/ruthra-brami-nei/angle.jpg',
      '/images/products/ruthra-brami-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-brami-nei/front.jpg',
      '/images/products/ruthra-brami-nei/angle.jpg',
      '/images/products/ruthra-brami-nei/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['brami nei', 'nei', 'siddha'],
    tamilKeywords: ['பிராமி நெய்', 'நெய்'],
    inStock: true
  },
  {
    id: 'prod-siddha-162',
    name: 'Ruthra Cherankottai Nei',
    tamilName: 'ருத்ரா சேரங்கொட்டை நெய்',
    slug: 'ruthra-cherankottai-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei-ghritham',
    concerns: ['respiratory'],
    price: 340,
    originalPrice: 391,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Purified marking nut lipid compound for chronic respiratory asthma and rheumatics.',
    shortDescriptionTa: 'சுத்தி செய்த சேரங்கொட்டை நெய் ஆஸ்துமா மற்றும் நாள்பட்ட வாதத்திற்கு சிறந்தது.',
    description: 'Ruthra Cherankottai Nei is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சேரங்கொட்டை நெய் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified marking nut lipid compound for chronic respiratory asthma and rheumatics.',
    traditionalRoleTa: 'சுத்தி செய்த சேரங்கொட்டை நெய் ஆஸ்துமா மற்றும் நாள்பட்ட வாதத்திற்கு சிறந்தது.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-cherankottai-nei/front.jpg',
    images: [
      '/images/products/ruthra-cherankottai-nei/front.jpg',
      '/images/products/ruthra-cherankottai-nei/angle.jpg',
      '/images/products/ruthra-cherankottai-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-cherankottai-nei/front.jpg',
      '/images/products/ruthra-cherankottai-nei/angle.jpg',
      '/images/products/ruthra-cherankottai-nei/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['cherankottai nei', 'nei', 'siddha'],
    tamilKeywords: ['சேரங்கொட்டை நெய்', 'நெய்'],
    inStock: true
  },
  {
    id: 'prod-siddha-163',
    name: 'Ruthra Kanthaga Nei',
    tamilName: 'ருத்ரா கந்தக நெய்',
    slug: 'ruthra-kanthaga-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei-ghritham',
    concerns: ['skin-hair'],
    price: 320,
    originalPrice: 368,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Purified sulfur internal medicated ghee for deep-seated psoriasis and skin disorders.',
    shortDescriptionTa: 'தோல் தடிப்பு, காளாஞ்சகப்படை மற்றும் மேக நோய்களை குணமாக்கும் கந்தக நெய்.',
    description: 'Ruthra Kanthaga Nei is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கந்தக நெய் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified sulfur internal medicated ghee for deep-seated psoriasis and skin disorders.',
    traditionalRoleTa: 'தோல் தடிப்பு, காளாஞ்சகப்படை மற்றும் மேக நோய்களை குணமாக்கும் கந்தக நெய்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-kanthaga-nei/front.jpg',
    images: [
      '/images/products/ruthra-kanthaga-nei/front.jpg',
      '/images/products/ruthra-kanthaga-nei/angle.jpg',
      '/images/products/ruthra-kanthaga-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kanthaga-nei/front.jpg',
      '/images/products/ruthra-kanthaga-nei/angle.jpg',
      '/images/products/ruthra-kanthaga-nei/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kanthaga nei', 'nei', 'siddha'],
    tamilKeywords: ['கந்தக நெய்', 'நெய்'],
    inStock: true
  },
  {
    id: 'prod-siddha-164',
    name: 'Ruthra Keezhanelli Nei',
    tamilName: 'ருத்ரா கீழாநெல்லி நெய்',
    slug: 'ruthra-keezhanelli-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei-ghritham',
    concerns: ['metabolic-wellness'],
    price: 290,
    originalPrice: 334,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Phyllanthus medicated ghee for hepatic cooling and severe burning micturition.',
    shortDescriptionTa: 'கல்லீரல் பித்த தணிப்பு மற்றும் சிறுநீர் பாதை புண்களை ஆற்றும் கீழாநெல்லி நெய்.',
    description: 'Ruthra Keezhanelli Nei is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கீழாநெல்லி நெய் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Phyllanthus medicated ghee for hepatic cooling and severe burning micturition.',
    traditionalRoleTa: 'கல்லீரல் பித்த தணிப்பு மற்றும் சிறுநீர் பாதை புண்களை ஆற்றும் கீழாநெல்லி நெய்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-keezhanelli-nei/front.jpg',
    images: [
      '/images/products/ruthra-keezhanelli-nei/front.jpg',
      '/images/products/ruthra-keezhanelli-nei/angle.jpg',
      '/images/products/ruthra-keezhanelli-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-keezhanelli-nei/front.jpg',
      '/images/products/ruthra-keezhanelli-nei/angle.jpg',
      '/images/products/ruthra-keezhanelli-nei/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['keezhanelli nei', 'nei', 'siddha'],
    tamilKeywords: ['கீழாநெல்லி நெய்', 'நெய்'],
    inStock: true
  },
  {
    id: 'prod-siddha-165',
    name: 'Ruthra Maha Vallathi Nei',
    tamilName: 'ருத்ரா மகா வல்லாதி நெய்',
    slug: 'ruthra-maha-vallathi-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei-ghritham',
    concerns: ['joint-mobility'],
    price: 360,
    originalPrice: 414,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Classical high-potency Siddha medicated ghee for neuromuscular paralysis and arthritis.',
    shortDescriptionTa: 'பக்கவாதம் மற்றும் கடுமையான மூட்டு வாதத்திற்கு பயன்படும் சிறப்பு நெய்.',
    description: 'Ruthra Maha Vallathi Nei is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா மகா வல்லாதி நெய் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Classical high-potency Siddha medicated ghee for neuromuscular paralysis and arthritis.',
    traditionalRoleTa: 'பக்கவாதம் மற்றும் கடுமையான மூட்டு வாதத்திற்கு பயன்படும் சிறப்பு நெய்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-maha-vallathi-nei/front.jpg',
    images: [
      '/images/products/ruthra-maha-vallathi-nei/front.jpg',
      '/images/products/ruthra-maha-vallathi-nei/angle.jpg',
      '/images/products/ruthra-maha-vallathi-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-maha-vallathi-nei/front.jpg',
      '/images/products/ruthra-maha-vallathi-nei/angle.jpg',
      '/images/products/ruthra-maha-vallathi-nei/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['maha vallathi nei', 'nei', 'siddha'],
    tamilKeywords: ['மகா வல்லாதி நெய்', 'நெய்'],
    inStock: true
  },
  {
    id: 'prod-siddha-166',
    name: 'Ruthra Nannari Nei',
    tamilName: 'ருத்ரா நன்னாரி நெய்',
    slug: 'ruthra-nannari-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei-ghritham',
    concerns: ['womens-wellness'],
    price: 285,
    originalPrice: 328,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Sarsaparilla internal ghee for female genitourinary health, leucorrhea, and cooling.',
    shortDescriptionTa: 'வெள்ளைப்படுதல் மற்றும் பெண்களுக்கு ஏற்படும் அதிக உஷ்ணத்தை போக்கும் நெய்.',
    description: 'Ruthra Nannari Nei is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா நன்னாரி நெய் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Sarsaparilla internal ghee for female genitourinary health, leucorrhea, and cooling.',
    traditionalRoleTa: 'வெள்ளைப்படுதல் மற்றும் பெண்களுக்கு ஏற்படும் அதிக உஷ்ணத்தை போக்கும் நெய்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-nannari-nei/front.jpg',
    images: [
      '/images/products/ruthra-nannari-nei/front.jpg',
      '/images/products/ruthra-nannari-nei/angle.jpg',
      '/images/products/ruthra-nannari-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nannari-nei/front.jpg',
      '/images/products/ruthra-nannari-nei/angle.jpg',
      '/images/products/ruthra-nannari-nei/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['nannari nei', 'nei', 'siddha'],
    tamilKeywords: ['நன்னாரி நெய்', 'நெய்'],
    inStock: true
  },
  {
    id: 'prod-siddha-167',
    name: 'Ruthra Vallarai Nei',
    tamilName: 'ருத்ரா வல்லாரை நெய்',
    slug: 'ruthra-vallarai-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei-ghritham',
    concerns: ['metabolic-wellness'],
    price: 315,
    originalPrice: 362,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Centella medicated ghee for cognitive enhancement, mental stress, and memory.',
    shortDescriptionTa: 'ஞாபக சக்தி பெருக்கி மற்றும் மன அழுத்தத்தை குறைக்கும் தூய வல்லாரை நெய்.',
    description: 'Ruthra Vallarai Nei is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா வல்லாரை நெய் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Centella medicated ghee for cognitive enhancement, mental stress, and memory.',
    traditionalRoleTa: 'ஞாபக சக்தி பெருக்கி மற்றும் மன அழுத்தத்தை குறைக்கும் தூய வல்லாரை நெய்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-vallarai-nei/front.jpg',
    images: [
      '/images/products/ruthra-vallarai-nei/front.jpg',
      '/images/products/ruthra-vallarai-nei/angle.jpg',
      '/images/products/ruthra-vallarai-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vallarai-nei/front.jpg',
      '/images/products/ruthra-vallarai-nei/angle.jpg',
      '/images/products/ruthra-vallarai-nei/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['vallarai nei', 'nei', 'siddha'],
    tamilKeywords: ['வல்லாரை நெய்', 'நெய்'],
    inStock: true
  },
  {
    id: 'prod-siddha-168',
    name: 'Ruthra Venpoosani Nei',
    tamilName: 'ருத்ரா வெண்பூசணி நெய்',
    slug: 'ruthra-venpoosani-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei-ghritham',
    concerns: ['womens-wellness'],
    price: 295,
    originalPrice: 339,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Ash gourd nourishing lipid preparation for lung emaciation and genitourinary cooling.',
    shortDescriptionTa: 'உடல் இளைப்பு நீக்கி பலம் தரும் குளிர்ச்சியான வெண்பூசணி நெய்.',
    description: 'Ruthra Venpoosani Nei is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா வெண்பூசணி நெய் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Ash gourd nourishing lipid preparation for lung emaciation and genitourinary cooling.',
    traditionalRoleTa: 'உடல் இளைப்பு நீக்கி பலம் தரும் குளிர்ச்சியான வெண்பூசணி நெய்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-venpoosani-nei/front.jpg',
    images: [
      '/images/products/ruthra-venpoosani-nei/front.jpg',
      '/images/products/ruthra-venpoosani-nei/angle.jpg',
      '/images/products/ruthra-venpoosani-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-venpoosani-nei/front.jpg',
      '/images/products/ruthra-venpoosani-nei/angle.jpg',
      '/images/products/ruthra-venpoosani-nei/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['venpoosani nei', 'nei', 'siddha'],
    tamilKeywords: ['வெண்பூசணி நெய்', 'நெய்'],
    inStock: true
  },
  {
    id: 'prod-siddha-169',
    name: 'Ruthra Annabhedi Parpam',
    tamilName: 'ருத்ரா அன்னபேதி பற்பம்',
    slug: 'ruthra-annabhedi-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ['metabolic-wellness'],
    price: 190,
    originalPrice: 218,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Calcinated natural iron nano-preparation for iron deficiency anemia and liver spleen wellness.',
    shortDescriptionTa: 'ரத்த சோகை போக்கி ரத்த சிவப்பணுக்களை அதிகரிக்கும் தூய அன்னபேதி பற்பம்.',
    description: 'Ruthra Annabhedi Parpam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அன்னபேதி பற்பம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Calcinated natural iron nano-preparation for iron deficiency anemia and liver spleen wellness.',
    traditionalRoleTa: 'ரத்த சோகை போக்கி ரத்த சிவப்பணுக்களை அதிகரிக்கும் தூய அன்னபேதி பற்பம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-annabhedi-parpam/front.jpg',
    images: [
      '/images/products/ruthra-annabhedi-parpam/front.jpg',
      '/images/products/ruthra-annabhedi-parpam/angle.jpg',
      '/images/products/ruthra-annabhedi-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-annabhedi-parpam/front.jpg',
      '/images/products/ruthra-annabhedi-parpam/angle.jpg',
      '/images/products/ruthra-annabhedi-parpam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['annabhedi parpam', 'parpam', 'siddha'],
    tamilKeywords: ['அன்னபேதி பற்பம்', 'பற்பம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-170',
    name: 'Ruthra Kungiliya Parpam',
    tamilName: 'ருத்ரா குங்கிலிய பற்பம்',
    slug: 'ruthra-kungiliya-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ['womens-wellness'],
    price: 210,
    originalPrice: 241,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Calcinated sal tree resin for gonorrheal burning, urinary calculi, and white discharge.',
    shortDescriptionTa: 'சிறுநீர் எரிச்சல், தாரை புண் மற்றும் வெள்ளைப்படுதல் நீக்கும் குங்கிலிய பற்பம்.',
    description: 'Ruthra Kungiliya Parpam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா குங்கிலிய பற்பம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Calcinated sal tree resin for gonorrheal burning, urinary calculi, and white discharge.',
    traditionalRoleTa: 'சிறுநீர் எரிச்சல், தாரை புண் மற்றும் வெள்ளைப்படுதல் நீக்கும் குங்கிலிய பற்பம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-kungiliya-parpam/front.jpg',
    images: [
      '/images/products/ruthra-kungiliya-parpam/front.jpg',
      '/images/products/ruthra-kungiliya-parpam/angle.jpg',
      '/images/products/ruthra-kungiliya-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kungiliya-parpam/front.jpg',
      '/images/products/ruthra-kungiliya-parpam/angle.jpg',
      '/images/products/ruthra-kungiliya-parpam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kungiliya parpam', 'parpam', 'siddha'],
    tamilKeywords: ['குங்கிலிய பற்பம்', 'பற்பம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-171',
    name: 'Ruthra Muthu Parpam',
    tamilName: 'ருத்ரா முத்து பற்பம்',
    slug: 'ruthra-muthu-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ['metabolic-wellness'],
    price: 380,
    originalPrice: 437,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Purified natural marine pearl calx for heart palpitation, severe Pitta heat, and calcium replenishment.',
    shortDescriptionTa: 'உடல் உஷ்ணம் தணித்து இதய படபடப்பு மற்றும் எலும்பு பலம் தரும் முத்து பற்பம்.',
    description: 'Ruthra Muthu Parpam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா முத்து பற்பம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified natural marine pearl calx for heart palpitation, severe Pitta heat, and calcium replenishment.',
    traditionalRoleTa: 'உடல் உஷ்ணம் தணித்து இதய படபடப்பு மற்றும் எலும்பு பலம் தரும் முத்து பற்பம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-muthu-parpam/front.jpg',
    images: [
      '/images/products/ruthra-muthu-parpam/front.jpg',
      '/images/products/ruthra-muthu-parpam/angle.jpg',
      '/images/products/ruthra-muthu-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-muthu-parpam/front.jpg',
      '/images/products/ruthra-muthu-parpam/angle.jpg',
      '/images/products/ruthra-muthu-parpam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['muthu parpam', 'parpam', 'siddha'],
    tamilKeywords: ['முத்து பற்பம்', 'பற்பம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-172',
    name: 'Ruthra Pavazha Parpam',
    tamilName: 'ருத்ரா பவழ பற்பம்',
    slug: 'ruthra-pavazha-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ['respiratory'],
    price: 340,
    originalPrice: 391,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Purified natural coral calx for chronic respiratory cough, pediatric fever, and bone strength.',
    shortDescriptionTa: 'ஆஸ்துமா, இளைப்பு மற்றும் குழந்தைகளுக்கு ஏற்படும் கப நோய்களை போக்கும் பவழ பற்பம்.',
    description: 'Ruthra Pavazha Parpam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பவழ பற்பம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified natural coral calx for chronic respiratory cough, pediatric fever, and bone strength.',
    traditionalRoleTa: 'ஆஸ்துமா, இளைப்பு மற்றும் குழந்தைகளுக்கு ஏற்படும் கப நோய்களை போக்கும் பவழ பற்பம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-pavazha-parpam/front.jpg',
    images: [
      '/images/products/ruthra-pavazha-parpam/front.jpg',
      '/images/products/ruthra-pavazha-parpam/angle.jpg',
      '/images/products/ruthra-pavazha-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pavazha-parpam/front.jpg',
      '/images/products/ruthra-pavazha-parpam/angle.jpg',
      '/images/products/ruthra-pavazha-parpam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['pavazha parpam', 'parpam', 'siddha'],
    tamilKeywords: ['பவழ பற்பம்', 'பற்பம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-173',
    name: 'Ruthra Sangu Parpam',
    tamilName: 'ருத்ரா சங்கு பற்பம்',
    slug: 'ruthra-sangu-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ['digestive-wellness'],
    price: 220,
    originalPrice: 253,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Purified natural conch shell calx for hyperacidity, duodenal ulcers, and skin acne.',
    shortDescriptionTa: 'அல்சர், நெஞ்செரிச்சல், முகப்பரு மற்றும் வயிற்று புண்களை குணமாக்கும் சங்கு பற்பம்.',
    description: 'Ruthra Sangu Parpam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சங்கு பற்பம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified natural conch shell calx for hyperacidity, duodenal ulcers, and skin acne.',
    traditionalRoleTa: 'அல்சர், நெஞ்செரிச்சல், முகப்பரு மற்றும் வயிற்று புண்களை குணமாக்கும் சங்கு பற்பம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-sangu-parpam/front.jpg',
    images: [
      '/images/products/ruthra-sangu-parpam/front.jpg',
      '/images/products/ruthra-sangu-parpam/angle.jpg',
      '/images/products/ruthra-sangu-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sangu-parpam/front.jpg',
      '/images/products/ruthra-sangu-parpam/angle.jpg',
      '/images/products/ruthra-sangu-parpam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['sangu parpam', 'parpam', 'siddha'],
    tamilKeywords: ['சங்கு பற்பம்', 'பற்பம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-174',
    name: 'Ruthra Thaleesathi Vadagam',
    tamilName: 'ருத்ரா தாளீசாதி வடகம்',
    slug: 'ruthra-thaleesathi-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ['respiratory'],
    price: 160,
    originalPrice: 184,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical chewable herbal lozenges for throat irritation, dry cough, and hoarseness.',
    shortDescriptionTa: 'தொண்டை கரகரப்பு, வறட்டு இருமல் மற்றும் தொண்டை கட்டை சரிசெய்யும் வடகம்.',
    description: 'Ruthra Thaleesathi Vadagam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா தாளீசாதி வடகம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Classical chewable herbal lozenges for throat irritation, dry cough, and hoarseness.',
    traditionalRoleTa: 'தொண்டை கரகரப்பு, வறட்டு இருமல் மற்றும் தொண்டை கட்டை சரிசெய்யும் வடகம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-thaleesathi-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-thaleesathi-vadagam/front.jpg',
      '/images/products/ruthra-thaleesathi-vadagam/angle.jpg',
      '/images/products/ruthra-thaleesathi-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thaleesathi-vadagam/front.jpg',
      '/images/products/ruthra-thaleesathi-vadagam/angle.jpg',
      '/images/products/ruthra-thaleesathi-vadagam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['thaleesathi vadagam', 'vadagam', 'siddha'],
    tamilKeywords: ['தாளீசாதி வடகம்', 'வடகம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-175',
    name: 'Ruthra Thippili Vadagam',
    tamilName: 'ருத்ரா திப்பிலி வடகம்',
    slug: 'ruthra-thippili-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ['respiratory'],
    price: 165,
    originalPrice: 190,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Long pepper chewable drops for digestive sluggishness and mucosal congestion.',
    shortDescriptionTa: 'செரிமான குறைபாடு மற்றும் கப சளியை இளக்கும் திப்பிலி வடகம்.',
    description: 'Ruthra Thippili Vadagam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா திப்பிலி வடகம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Long pepper chewable drops for digestive sluggishness and mucosal congestion.',
    traditionalRoleTa: 'செரிமான குறைபாடு மற்றும் கப சளியை இளக்கும் திப்பிலி வடகம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-thippili-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-thippili-vadagam/front.jpg',
      '/images/products/ruthra-thippili-vadagam/angle.jpg',
      '/images/products/ruthra-thippili-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thippili-vadagam/front.jpg',
      '/images/products/ruthra-thippili-vadagam/angle.jpg',
      '/images/products/ruthra-thippili-vadagam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['thippili vadagam', 'vadagam', 'siddha'],
    tamilKeywords: ['திப்பிலி வடகம்', 'வடகம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-176',
    name: 'Ruthra Lavangathi Vadagam',
    tamilName: 'ருத்ரா லவங்காதி வடகம்',
    slug: 'ruthra-lavangathi-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ['respiratory'],
    price: 170,
    originalPrice: 195,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Clove flavored pastilles for mouth ulcers, toothache soothing, and breath freshness.',
    shortDescriptionTa: 'வாய் புண், பல் வலி மற்றும் வாய் துர்நாற்றம் நீக்கும் லவங்காதி வடகம்.',
    description: 'Ruthra Lavangathi Vadagam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா லவங்காதி வடகம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Clove flavored pastilles for mouth ulcers, toothache soothing, and breath freshness.',
    traditionalRoleTa: 'வாய் புண், பல் வலி மற்றும் வாய் துர்நாற்றம் நீக்கும் லவங்காதி வடகம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-lavangathi-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-lavangathi-vadagam/front.jpg',
      '/images/products/ruthra-lavangathi-vadagam/angle.jpg',
      '/images/products/ruthra-lavangathi-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-lavangathi-vadagam/front.jpg',
      '/images/products/ruthra-lavangathi-vadagam/angle.jpg',
      '/images/products/ruthra-lavangathi-vadagam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['lavangathi vadagam', 'vadagam', 'siddha'],
    tamilKeywords: ['லவங்காதி வடகம்', 'வடகம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-177',
    name: 'Ruthra Omam Vadagam',
    tamilName: 'ருத்ரா ஓம வடகம்',
    slug: 'ruthra-omam-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ['digestive-wellness'],
    price: 150,
    originalPrice: 173,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Ajwain digestive tablets for instantaneous gas relief and abdominal cramp easing.',
    shortDescriptionTa: 'வாயு பிடிப்பு மற்றும் வயிற்று வலியை உடனடியாக போக்கும் ஓம வடகம்.',
    description: 'Ruthra Omam Vadagam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா ஓம வடகம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Ajwain digestive tablets for instantaneous gas relief and abdominal cramp easing.',
    traditionalRoleTa: 'வாயு பிடிப்பு மற்றும் வயிற்று வலியை உடனடியாக போக்கும் ஓம வடகம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-omam-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-omam-vadagam/front.jpg',
      '/images/products/ruthra-omam-vadagam/angle.jpg',
      '/images/products/ruthra-omam-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-omam-vadagam/front.jpg',
      '/images/products/ruthra-omam-vadagam/angle.jpg',
      '/images/products/ruthra-omam-vadagam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['omam vadagam', 'vadagam', 'siddha'],
    tamilKeywords: ['ஓம வடகம்', 'வடகம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-178',
    name: 'Ruthra Ashwagandha Rasayanam',
    tamilName: 'ருத்ரா அஸ்வகந்தா ரசாயனம்',
    slug: 'ruthra-ashwagandha-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ['joint-mobility'],
    price: 260,
    originalPrice: 299,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Potent rejuvenating tonic for lean physique, neuromuscular vigor, and stress relief.',
    shortDescriptionTa: 'உடல் பலவீனம் நீக்கி தசை வளர்ச்சி மற்றும் சுறுசுறுப்பு தரும் அஸ்வகந்தா ரசாயனம்.',
    description: 'Ruthra Ashwagandha Rasayanam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அஸ்வகந்தா ரசாயனம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Potent rejuvenating tonic for lean physique, neuromuscular vigor, and stress relief.',
    traditionalRoleTa: 'உடல் பலவீனம் நீக்கி தசை வளர்ச்சி மற்றும் சுறுசுறுப்பு தரும் அஸ்வகந்தா ரசாயனம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-ashwagandha-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-ashwagandha-rasayanam/front.jpg',
      '/images/products/ruthra-ashwagandha-rasayanam/angle.jpg',
      '/images/products/ruthra-ashwagandha-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ashwagandha-rasayanam/front.jpg',
      '/images/products/ruthra-ashwagandha-rasayanam/angle.jpg',
      '/images/products/ruthra-ashwagandha-rasayanam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['ashwagandha rasayanam', 'rasayanam', 'siddha'],
    tamilKeywords: ['அஸ்வகந்தா ரசாயனம்', 'ரசாயனம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-179',
    name: 'Ruthra Karisalai Rasayanam',
    tamilName: 'ருத்ரா கரிசாலை ரசாயனம்',
    slug: 'ruthra-karisalai-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ['metabolic-wellness'],
    price: 230,
    originalPrice: 265,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Bhringraj based liver tonic for jaundice convalescence and natural hair pigmentation.',
    shortDescriptionTa: 'கல்லீரல் நலம், ரத்த சோகை நீக்கம் மற்றும் முடி கருமைக்கு உகந்த ரசாயனம்.',
    description: 'Ruthra Karisalai Rasayanam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கரிசாலை ரசாயனம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Bhringraj based liver tonic for jaundice convalescence and natural hair pigmentation.',
    traditionalRoleTa: 'கல்லீரல் நலம், ரத்த சோகை நீக்கம் மற்றும் முடி கருமைக்கு உகந்த ரசாயனம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-karisalai-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-karisalai-rasayanam/front.jpg',
      '/images/products/ruthra-karisalai-rasayanam/angle.jpg',
      '/images/products/ruthra-karisalai-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karisalai-rasayanam/front.jpg',
      '/images/products/ruthra-karisalai-rasayanam/angle.jpg',
      '/images/products/ruthra-karisalai-rasayanam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['karisalai rasayanam', 'rasayanam', 'siddha'],
    tamilKeywords: ['கரிசாலை ரசாயனம்', 'ரசாயனம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-180',
    name: 'Ruthra Nellikkai Rasayanam',
    tamilName: 'ருத்ரா நெல்லிக்காய் ரசாயனம்',
    slug: 'ruthra-nellikkai-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ['metabolic-wellness'],
    price: 220,
    originalPrice: 253,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Wild gooseberry rejuvenator for building natural immune barrier against seasonal fevers.',
    shortDescriptionTa: 'நோய் எதிர்ப்பு சக்தி, இளமை காப்பு மற்றும் கண் தெளிவு தரும் நெல்லிக்காய் ரசாயனம்.',
    description: 'Ruthra Nellikkai Rasayanam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா நெல்லிக்காய் ரசாயனம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Wild gooseberry rejuvenator for building natural immune barrier against seasonal fevers.',
    traditionalRoleTa: 'நோய் எதிர்ப்பு சக்தி, இளமை காப்பு மற்றும் கண் தெளிவு தரும் நெல்லிக்காய் ரசாயனம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-nellikkai-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-nellikkai-rasayanam/front.jpg',
      '/images/products/ruthra-nellikkai-rasayanam/angle.jpg',
      '/images/products/ruthra-nellikkai-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nellikkai-rasayanam/front.jpg',
      '/images/products/ruthra-nellikkai-rasayanam/angle.jpg',
      '/images/products/ruthra-nellikkai-rasayanam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['nellikkai rasayanam', 'rasayanam', 'siddha'],
    tamilKeywords: ['நெல்லிக்காய் ரசாயனம்', 'ரசாயனம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-181',
    name: 'Ruthra Parangipattai Rasayanam',
    tamilName: 'ருத்ரா பறங்கிப்பட்டை ரசாயனம்',
    slug: 'ruthra-parangipattai-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ['skin-hair'],
    price: 270,
    originalPrice: 311,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Herbal skin tonic for chronic eczema, boils, skin pigmentation, and blood purity.',
    shortDescriptionTa: 'தோல் வியாதிகள் மற்றும் ரத்த அசுத்தங்களை நீக்கும் உன்னத பறங்கிப்பட்டை ரசாயனம்.',
    description: 'Ruthra Parangipattai Rasayanam is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பறங்கிப்பட்டை ரசாயனம் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Herbal skin tonic for chronic eczema, boils, skin pigmentation, and blood purity.',
    traditionalRoleTa: 'தோல் வியாதிகள் மற்றும் ரத்த அசுத்தங்களை நீக்கும் உன்னத பறங்கிப்பட்டை ரசாயனம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-parangipattai-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-parangipattai-rasayanam/front.jpg',
      '/images/products/ruthra-parangipattai-rasayanam/angle.jpg',
      '/images/products/ruthra-parangipattai-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-parangipattai-rasayanam/front.jpg',
      '/images/products/ruthra-parangipattai-rasayanam/angle.jpg',
      '/images/products/ruthra-parangipattai-rasayanam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['parangipattai rasayanam', 'rasayanam', 'siddha'],
    tamilKeywords: ['பறங்கிப்பட்டை ரசாயனம்', 'ரசாயனம்'],
    inStock: true
  },
  {
    id: 'prod-siddha-182',
    name: 'Ruthra Idi Mezhugu',
    tamilName: 'ருத்ரா இடி மெழுகு',
    slug: 'ruthra-idi-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ['joint-mobility'],
    price: 240,
    originalPrice: 276,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'Classical resinous compound for chronic arthritic swelling and deep neural aches.',
    shortDescriptionTa: 'நாள்பட்ட மூட்டு வீக்கம் மற்றும் வாத வலிகளுக்கான பாரம்பரிய மெழுகு மருந்து.',
    description: 'Ruthra Idi Mezhugu is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா இடி மெழுகு இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Classical resinous compound for chronic arthritic swelling and deep neural aches.',
    traditionalRoleTa: 'நாள்பட்ட மூட்டு வீக்கம் மற்றும் வாத வலிகளுக்கான பாரம்பரிய மெழுகு மருந்து.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-idi-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-idi-mezhugu/front.jpg',
      '/images/products/ruthra-idi-mezhugu/angle.jpg',
      '/images/products/ruthra-idi-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-idi-mezhugu/front.jpg',
      '/images/products/ruthra-idi-mezhugu/angle.jpg',
      '/images/products/ruthra-idi-mezhugu/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['idi mezhugu', 'mezhugu', 'siddha'],
    tamilKeywords: ['இடி மெழுகு', 'மெழுகு'],
    inStock: true
  },
  {
    id: 'prod-siddha-183',
    name: 'Ruthra Maha Mezhugu',
    tamilName: 'ருத்ரா மகா மெழுகு',
    slug: 'ruthra-maha-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ['joint-mobility'],
    price: 290,
    originalPrice: 334,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'High potency Siddha compound for chronic inflammatory and degenerative conditions.',
    shortDescriptionTa: 'தீவிர வாத நோய்கள் மற்றும் திசு அழற்சிக்கான விசேஷ மகா மெழுகு.',
    description: 'Ruthra Maha Mezhugu is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா மகா மெழுகு இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'High potency Siddha compound for chronic inflammatory and degenerative conditions.',
    traditionalRoleTa: 'தீவிர வாத நோய்கள் மற்றும் திசு அழற்சிக்கான விசேஷ மகா மெழுகு.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-maha-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-maha-mezhugu/front.jpg',
      '/images/products/ruthra-maha-mezhugu/angle.jpg',
      '/images/products/ruthra-maha-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-maha-mezhugu/front.jpg',
      '/images/products/ruthra-maha-mezhugu/angle.jpg',
      '/images/products/ruthra-maha-mezhugu/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['maha mezhugu', 'mezhugu', 'siddha'],
    tamilKeywords: ['மகா மெழுகு', 'மெழுகு'],
    inStock: true
  },
  {
    id: 'prod-siddha-184',
    name: 'Ruthra Rasa Mezhugu',
    tamilName: 'ருத்ரா ரச மெழுகு',
    slug: 'ruthra-rasa-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ['skin-hair'],
    price: 320,
    originalPrice: 368,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'Purified mineral-herbal waxy compound for recalcitrant skin fissures and deep ulcers.',
    shortDescriptionTa: 'ஆறாத பிளவை, புண்கள் மற்றும் தோல் தடிப்பு போக்கும் ரச மெழுகு.',
    description: 'Ruthra Rasa Mezhugu is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா ரச மெழுகு இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified mineral-herbal waxy compound for recalcitrant skin fissures and deep ulcers.',
    traditionalRoleTa: 'ஆறாத பிளவை, புண்கள் மற்றும் தோல் தடிப்பு போக்கும் ரச மெழுகு.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-rasa-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-rasa-mezhugu/front.jpg',
      '/images/products/ruthra-rasa-mezhugu/angle.jpg',
      '/images/products/ruthra-rasa-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-rasa-mezhugu/front.jpg',
      '/images/products/ruthra-rasa-mezhugu/angle.jpg',
      '/images/products/ruthra-rasa-mezhugu/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['rasa mezhugu', 'mezhugu', 'siddha'],
    tamilKeywords: ['ரச மெழுகு', 'மெழுகு'],
    inStock: true
  },
  {
    id: 'prod-siddha-185',
    name: 'Ruthra Sivanar Mezhugu',
    tamilName: 'ருத்ரா சிவனார் மெழுகு',
    slug: 'ruthra-sivanar-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ['respiratory'],
    price: 280,
    originalPrice: 322,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'Celebrated Siddha formulation for bronchial asthma, skin allergies, and toxin detox.',
    shortDescriptionTa: 'ஆஸ்துமா, நெஞ்சு சளி மற்றும் தோல் வியாதிகளை போக்கும் சிவனார் மெழுகு.',
    description: 'Ruthra Sivanar Mezhugu is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சிவனார் மெழுகு இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Celebrated Siddha formulation for bronchial asthma, skin allergies, and toxin detox.',
    traditionalRoleTa: 'ஆஸ்துமா, நெஞ்சு சளி மற்றும் தோல் வியாதிகளை போக்கும் சிவனார் மெழுகு.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-sivanar-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-sivanar-mezhugu/front.jpg',
      '/images/products/ruthra-sivanar-mezhugu/angle.jpg',
      '/images/products/ruthra-sivanar-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sivanar-mezhugu/front.jpg',
      '/images/products/ruthra-sivanar-mezhugu/angle.jpg',
      '/images/products/ruthra-sivanar-mezhugu/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['sivanar mezhugu', 'mezhugu', 'siddha'],
    tamilKeywords: ['சிவனார் மெழுகு', 'மெழுகு'],
    inStock: true
  },
  {
    id: 'prod-siddha-186',
    name: 'Ruthra Balasanjeevi Maathirai',
    tamilName: 'ருத்ரா பாலசஞ்சீவி மாத்திரை',
    slug: 'ruthra-balasanjeevi-maathirai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai-kuligai',
    concerns: ['respiratory'],
    price: 160,
    originalPrice: 184,
    packSize: '50 Tabs',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'Gentle pediatric formulation for childhood cough, fever, indigestion, and diarrhea.',
    shortDescriptionTa: 'குழந்தைகளுக்கு ஏற்படும் காய்ச்சல், சளி மற்றும் அஜீரணம் போக்கும் பாலசஞ்சீவி.',
    description: 'Ruthra Balasanjeevi Maathirai is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பாலசஞ்சீவி மாத்திரை இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Gentle pediatric formulation for childhood cough, fever, indigestion, and diarrhea.',
    traditionalRoleTa: 'குழந்தைகளுக்கு ஏற்படும் காய்ச்சல், சளி மற்றும் அஜீரணம் போக்கும் பாலசஞ்சீவி.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-balasanjeevi-maathirai/front.jpg',
    images: [
      '/images/products/ruthra-balasanjeevi-maathirai/front.jpg',
      '/images/products/ruthra-balasanjeevi-maathirai/angle.jpg',
      '/images/products/ruthra-balasanjeevi-maathirai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-balasanjeevi-maathirai/front.jpg',
      '/images/products/ruthra-balasanjeevi-maathirai/angle.jpg',
      '/images/products/ruthra-balasanjeevi-maathirai/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['balasanjeevi maathirai', 'maathirai', 'siddha'],
    tamilKeywords: ['பாலசஞ்சீவி மாத்திரை', 'மாத்திரை'],
    inStock: true
  },
  {
    id: 'prod-siddha-187',
    name: 'Ruthra Kasthuri Maathirai',
    tamilName: 'ருத்ரா கஸ்தூரி மாத்திரை',
    slug: 'ruthra-kasthuri-maathirai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai-kuligai',
    concerns: ['respiratory'],
    price: 210,
    originalPrice: 241,
    packSize: '50 Tabs',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'Aromatic cardiac and respiratory stimulant pill for acute wheezing and fever chills.',
    shortDescriptionTa: 'மூச்சு திணறல், குளிர் காய்ச்சல் மற்றும் நெஞ்சு சளி நீக்கும் கஸ்தூரி மாத்திரை.',
    description: 'Ruthra Kasthuri Maathirai is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கஸ்தூரி மாத்திரை இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Aromatic cardiac and respiratory stimulant pill for acute wheezing and fever chills.',
    traditionalRoleTa: 'மூச்சு திணறல், குளிர் காய்ச்சல் மற்றும் நெஞ்சு சளி நீக்கும் கஸ்தூரி மாத்திரை.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-kasthuri-maathirai/front.jpg',
    images: [
      '/images/products/ruthra-kasthuri-maathirai/front.jpg',
      '/images/products/ruthra-kasthuri-maathirai/angle.jpg',
      '/images/products/ruthra-kasthuri-maathirai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kasthuri-maathirai/front.jpg',
      '/images/products/ruthra-kasthuri-maathirai/angle.jpg',
      '/images/products/ruthra-kasthuri-maathirai/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kasthuri maathirai', 'maathirai', 'siddha'],
    tamilKeywords: ['கஸ்தூரி மாத்திரை', 'மாத்திரை'],
    inStock: true
  },
  {
    id: 'prod-siddha-188',
    name: 'Ruthra Kaba Sura Maathirai',
    tamilName: 'ருத்ரா கப சுர மாத்திரை',
    slug: 'ruthra-kaba-sura-maathirai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai-kuligai',
    concerns: ['respiratory'],
    price: 180,
    originalPrice: 207,
    packSize: '50 Tabs',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'Convenient tablet form of Kaba Sura formulation for travel-friendly flu relief.',
    shortDescriptionTa: 'காய்ச்சல் மற்றும் கப சளி நீக்கும் எளிய கப சுர மாத்திரை வடிவம்.',
    description: 'Ruthra Kaba Sura Maathirai is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கப சுர மாத்திரை இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Convenient tablet form of Kaba Sura formulation for travel-friendly flu relief.',
    traditionalRoleTa: 'காய்ச்சல் மற்றும் கப சளி நீக்கும் எளிய கப சுர மாத்திரை வடிவம்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-kaba-sura-maathirai/front.jpg',
    images: [
      '/images/products/ruthra-kaba-sura-maathirai/front.jpg',
      '/images/products/ruthra-kaba-sura-maathirai/angle.jpg',
      '/images/products/ruthra-kaba-sura-maathirai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kaba-sura-maathirai/front.jpg',
      '/images/products/ruthra-kaba-sura-maathirai/angle.jpg',
      '/images/products/ruthra-kaba-sura-maathirai/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kaba sura maathirai', 'maathirai', 'siddha'],
    tamilKeywords: ['கப சுர மாத்திரை', 'மாத்திரை'],
    inStock: true
  },
  {
    id: 'prod-siddha-189',
    name: 'Ruthra Vatha Sura Maathirai',
    tamilName: 'ருத்ரா வாத சுர மாத்திரை',
    slug: 'ruthra-vatha-sura-maathirai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai-kuligai',
    concerns: ['joint-mobility'],
    price: 175,
    originalPrice: 201,
    packSize: '50 Tabs',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'Targeted antipyretic pill for fevers accompanied by severe body aches and joint stiffness.',
    shortDescriptionTa: 'உடல் குடைச்சல், மூட்டு வலி கலந்த காய்ச்சலுக்கு உகந்த மாத்திரை.',
    description: 'Ruthra Vatha Sura Maathirai is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா வாத சுர மாத்திரை இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Targeted antipyretic pill for fevers accompanied by severe body aches and joint stiffness.',
    traditionalRoleTa: 'உடல் குடைச்சல், மூட்டு வலி கலந்த காய்ச்சலுக்கு உகந்த மாத்திரை.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-vatha-sura-maathirai/front.jpg',
    images: [
      '/images/products/ruthra-vatha-sura-maathirai/front.jpg',
      '/images/products/ruthra-vatha-sura-maathirai/angle.jpg',
      '/images/products/ruthra-vatha-sura-maathirai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vatha-sura-maathirai/front.jpg',
      '/images/products/ruthra-vatha-sura-maathirai/angle.jpg',
      '/images/products/ruthra-vatha-sura-maathirai/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['vatha sura maathirai', 'maathirai', 'siddha'],
    tamilKeywords: ['வாத சுர மாத்திரை', 'மாத்திரை'],
    inStock: true
  },
  {
    id: 'prod-siddha-190',
    name: 'Ruthra Adathodai Manapagu',
    tamilName: 'ருத்ரா ஆடாதோடை மணப்பாகு',
    slug: 'ruthra-adathodai-manapagu',
    medicalSystem: 'siddha',
    formulation: 'Manapagu',
    formulationTa: 'மணப்பாகு',
    categoryGroup: 'manapagu',
    concerns: ['respiratory'],
    price: 195,
    originalPrice: 224,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Sweet herbal syrup for soothing pediatric cough, bronchitis, and hemoptysis.',
    shortDescriptionTa: 'குழந்தைகள் எளிதில் பருகக்கூடிய சுவையான ஆடாதோடை இருமல் மணப்பாகு.',
    description: 'Ruthra Adathodai Manapagu is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா ஆடாதோடை மணப்பாகு இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Sweet herbal syrup for soothing pediatric cough, bronchitis, and hemoptysis.',
    traditionalRoleTa: 'குழந்தைகள் எளிதில் பருகக்கூடிய சுவையான ஆடாதோடை இருமல் மணப்பாகு.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-adathodai-manapagu/front.jpg',
    images: [
      '/images/products/ruthra-adathodai-manapagu/front.jpg',
      '/images/products/ruthra-adathodai-manapagu/angle.jpg',
      '/images/products/ruthra-adathodai-manapagu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-adathodai-manapagu/front.jpg',
      '/images/products/ruthra-adathodai-manapagu/angle.jpg',
      '/images/products/ruthra-adathodai-manapagu/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['adathodai manapagu', 'manapagu', 'siddha'],
    tamilKeywords: ['ஆடாதோடை மணப்பாகு', 'மணப்பாகு'],
    inStock: true
  },
  {
    id: 'prod-siddha-191',
    name: 'Ruthra Madulai Manapagu',
    tamilName: 'ருத்ரா மாதுளை மணப்பாகு',
    slug: 'ruthra-madulai-manapagu',
    medicalSystem: 'siddha',
    formulation: 'Manapagu',
    formulationTa: 'மணப்பாகு',
    categoryGroup: 'manapagu',
    concerns: ['womens-wellness'],
    price: 220,
    originalPrice: 253,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Pure pomegranate cordial syrup for pregnancy morning sickness and anemia.',
    shortDescriptionTa: 'கர்ப்பிணி பெண்களுக்கு வாந்தி, பித்தம் மற்றும் ரத்த சோகை நீக்கும் மாதுளை மணப்பாகு.',
    description: 'Ruthra Madulai Manapagu is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா மாதுளை மணப்பாகு இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Pure pomegranate cordial syrup for pregnancy morning sickness and anemia.',
    traditionalRoleTa: 'கர்ப்பிணி பெண்களுக்கு வாந்தி, பித்தம் மற்றும் ரத்த சோகை நீக்கும் மாதுளை மணப்பாகு.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-madulai-manapagu/front.jpg',
    images: [
      '/images/products/ruthra-madulai-manapagu/front.jpg',
      '/images/products/ruthra-madulai-manapagu/angle.jpg',
      '/images/products/ruthra-madulai-manapagu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-madulai-manapagu/front.jpg',
      '/images/products/ruthra-madulai-manapagu/angle.jpg',
      '/images/products/ruthra-madulai-manapagu/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['madulai manapagu', 'manapagu', 'siddha'],
    tamilKeywords: ['மாதுளை மணப்பாகு', 'மணப்பாகு'],
    inStock: true
  },
  {
    id: 'prod-siddha-192',
    name: 'Ruthra Omam Theeneer',
    tamilName: 'ருத்ரா ஓம தீநீர்',
    slug: 'ruthra-omam-theeneer',
    medicalSystem: 'siddha',
    formulation: 'Theeneer',
    formulationTa: 'தீநீர்',
    categoryGroup: 'theeneer',
    concerns: ['digestive-wellness'],
    price: 140,
    originalPrice: 161,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Aromatic steam-distilled Ajwain hydro-sol for rapid digestive relief and colic.',
    shortDescriptionTa: 'பாரம்பரிய முறையில் வடித்தெடுக்கப்பட்ட தூய ஓம தீநீர் (அஜீரண நிவாரணி).',
    description: 'Ruthra Omam Theeneer is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா ஓம தீநீர் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Aromatic steam-distilled Ajwain hydro-sol for rapid digestive relief and colic.',
    traditionalRoleTa: 'பாரம்பரிய முறையில் வடித்தெடுக்கப்பட்ட தூய ஓம தீநீர் (அஜீரண நிவாரணி).',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-omam-theeneer/front.jpg',
    images: [
      '/images/products/ruthra-omam-theeneer/front.jpg',
      '/images/products/ruthra-omam-theeneer/angle.jpg',
      '/images/products/ruthra-omam-theeneer/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-omam-theeneer/front.jpg',
      '/images/products/ruthra-omam-theeneer/angle.jpg',
      '/images/products/ruthra-omam-theeneer/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['omam theeneer', 'theeneer', 'siddha'],
    tamilKeywords: ['ஓம தீநீர்', 'தீநீர்'],
    inStock: true
  },
  {
    id: 'prod-siddha-193',
    name: 'Ruthra Kungiliya Vennai',
    tamilName: 'ருத்ரா குங்கிலிய வெண்ணெய்',
    slug: 'ruthra-kungiliya-vennai',
    medicalSystem: 'siddha',
    formulation: 'Vennai',
    formulationTa: 'வெண்ணெய்',
    categoryGroup: 'vennai',
    concerns: ['skin-hair'],
    price: 210,
    originalPrice: 241,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Medicated herbal butter for deep topical application on burns, fissures, and piles.',
    shortDescriptionTa: 'தீக்காயம், வெடிப்பு மற்றும் ஆசன வாய் எரிச்சலை ஆற்றும் குங்கிலிய வெண்ணெய்.',
    description: 'Ruthra Kungiliya Vennai is compounded according to the authentic classical Siddha Pharmacopeia of India (SPI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா குங்கிலிய வெண்ணெய் இந்திய சித்த மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Medicated herbal butter for deep topical application on burns, fissures, and piles.',
    traditionalRoleTa: 'தீக்காயம், வெடிப்பு மற்றும் ஆசன வாய் எரிச்சலை ஆற்றும் குங்கிலிய வெண்ணெய்.',
    badge: 'Classical Siddha',
    badgeTa: 'பாரம்பரிய சித்த தயாரிப்பு',
    image: '/images/products/ruthra-kungiliya-vennai/front.jpg',
    images: [
      '/images/products/ruthra-kungiliya-vennai/front.jpg',
      '/images/products/ruthra-kungiliya-vennai/angle.jpg',
      '/images/products/ruthra-kungiliya-vennai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kungiliya-vennai/front.jpg',
      '/images/products/ruthra-kungiliya-vennai/angle.jpg',
      '/images/products/ruthra-kungiliya-vennai/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kungiliya vennai', 'vennai', 'siddha'],
    tamilKeywords: ['குங்கிலிய வெண்ணெய்', 'வெண்ணெய்'],
    inStock: true
  },

  // ==========================================
  // 5. CLASSICAL AYURVEDA EXPANDED MASTER LIST (64 SKUs)
  // ==========================================
  {
    id: 'prod-ayurveda-100',
    name: 'Ruthra Agnimukha Churna',
    tamilName: 'ருத்ரா அக்னிமுக சூர்ணம்',
    slug: 'ruthra-agnimukha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['digestive-wellness'],
    price: 175,
    originalPrice: 201,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Digestive stimulant formulation for loss of appetite, anorexia, and abdominal bloating.',
    shortDescriptionTa: 'பசியின்மை மற்றும் அஜீரணம் போக்கும் ஆயுர்வேத அக்னிமுக சூர்ணம்.',
    description: 'Ruthra Agnimukha Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அக்னிமுக சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Digestive stimulant formulation for loss of appetite, anorexia, and abdominal bloating.',
    traditionalRoleTa: 'பசியின்மை மற்றும் அஜீரணம் போக்கும் ஆயுர்வேத அக்னிமுக சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-agnimukha-churna/front.jpg',
    images: [
      '/images/products/ruthra-agnimukha-churna/front.jpg',
      '/images/products/ruthra-agnimukha-churna/angle.jpg',
      '/images/products/ruthra-agnimukha-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-agnimukha-churna/front.jpg',
      '/images/products/ruthra-agnimukha-churna/angle.jpg',
      '/images/products/ruthra-agnimukha-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['agnimukha churna', 'churna', 'ayurveda'],
    tamilKeywords: ['அக்னிமுக சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-101',
    name: 'Ruthra Ajimodadi Churna',
    tamilName: 'ருத்ரா அஜமோதாதி சூர்ணம்',
    slug: 'ruthra-ajimodadi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['joint-mobility'],
    price: 165,
    originalPrice: 190,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Celery seed compound for rheumatoid arthritis, sciatica, and lumbar stiffness.',
    shortDescriptionTa: 'முதுகு வலி, மூட்டு வாதம் மற்றும் இடுப்பு பிடிப்பு நீக்கும் அஜமோதாதி சூர்ணம்.',
    description: 'Ruthra Ajimodadi Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அஜமோதாதி சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Celery seed compound for rheumatoid arthritis, sciatica, and lumbar stiffness.',
    traditionalRoleTa: 'முதுகு வலி, மூட்டு வாதம் மற்றும் இடுப்பு பிடிப்பு நீக்கும் அஜமோதாதி சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-ajimodadi-churna/front.jpg',
    images: [
      '/images/products/ruthra-ajimodadi-churna/front.jpg',
      '/images/products/ruthra-ajimodadi-churna/angle.jpg',
      '/images/products/ruthra-ajimodadi-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ajimodadi-churna/front.jpg',
      '/images/products/ruthra-ajimodadi-churna/angle.jpg',
      '/images/products/ruthra-ajimodadi-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['ajimodadi churna', 'churna', 'ayurveda'],
    tamilKeywords: ['அஜமோதாதி சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-102',
    name: 'Ruthra Amritadi Churna',
    tamilName: 'ருத்ரா அமிர்தாதி சூர்ணம்',
    slug: 'ruthra-amritadi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['joint-mobility'],
    price: 185,
    originalPrice: 213,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Guduchi antioxidant compound for metabolic balance and gouty arthritis management.',
    shortDescriptionTa: 'வாத ரத்தம் மற்றும் மூட்டு வீக்கத்தை குறைக்கும் அமிர்தாதி சூர்ணம்.',
    description: 'Ruthra Amritadi Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அமிர்தாதி சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Guduchi antioxidant compound for metabolic balance and gouty arthritis management.',
    traditionalRoleTa: 'வாத ரத்தம் மற்றும் மூட்டு வீக்கத்தை குறைக்கும் அமிர்தாதி சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-amritadi-churna/front.jpg',
    images: [
      '/images/products/ruthra-amritadi-churna/front.jpg',
      '/images/products/ruthra-amritadi-churna/angle.jpg',
      '/images/products/ruthra-amritadi-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amritadi-churna/front.jpg',
      '/images/products/ruthra-amritadi-churna/angle.jpg',
      '/images/products/ruthra-amritadi-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['amritadi churna', 'churna', 'ayurveda'],
    tamilKeywords: ['அமிர்தாதி சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-103',
    name: 'Ruthra Ashwagandhadi Churna',
    tamilName: 'ருத்ரா அஸ்வகந்தாதி சூர்ணம்',
    slug: 'ruthra-ashwagandhadi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['joint-mobility'],
    price: 210,
    originalPrice: 241,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Withania herbal blend for vitality, physical stamina, and nervous strength.',
    shortDescriptionTa: 'உடல் பலம் மற்றும் நரம்பு சோர்வு போக்கும் அஸ்வகந்தாதி சூர்ணம்.',
    description: 'Ruthra Ashwagandhadi Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அஸ்வகந்தாதி சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Withania herbal blend for vitality, physical stamina, and nervous strength.',
    traditionalRoleTa: 'உடல் பலம் மற்றும் நரம்பு சோர்வு போக்கும் அஸ்வகந்தாதி சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-ashwagandhadi-churna/front.jpg',
    images: [
      '/images/products/ruthra-ashwagandhadi-churna/front.jpg',
      '/images/products/ruthra-ashwagandhadi-churna/angle.jpg',
      '/images/products/ruthra-ashwagandhadi-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ashwagandhadi-churna/front.jpg',
      '/images/products/ruthra-ashwagandhadi-churna/angle.jpg',
      '/images/products/ruthra-ashwagandhadi-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['ashwagandhadi churna', 'churna', 'ayurveda'],
    tamilKeywords: ['அஸ்வகந்தாதி சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-104',
    name: 'Ruthra Avipattikar Churna',
    tamilName: 'ருத்ரா அவிபத்திகர சூர்ணம்',
    slug: 'ruthra-avipattikar-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['digestive-wellness'],
    price: 190,
    originalPrice: 218,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Famous Pitta pacifying digestive powder for acidity, heartburn, and constipation.',
    shortDescriptionTa: 'அமிலத்தன்மை, நெஞ்செரிச்சல் மற்றும் மலச்சிக்கல் போக்கும் அவிபத்திகர சூர்ணம்.',
    description: 'Ruthra Avipattikar Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அவிபத்திகர சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Famous Pitta pacifying digestive powder for acidity, heartburn, and constipation.',
    traditionalRoleTa: 'அமிலத்தன்மை, நெஞ்செரிச்சல் மற்றும் மலச்சிக்கல் போக்கும் அவிபத்திகர சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-avipattikar-churna/front.jpg',
    images: [
      '/images/products/ruthra-avipattikar-churna/front.jpg',
      '/images/products/ruthra-avipattikar-churna/angle.jpg',
      '/images/products/ruthra-avipattikar-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-avipattikar-churna/front.jpg',
      '/images/products/ruthra-avipattikar-churna/angle.jpg',
      '/images/products/ruthra-avipattikar-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['avipattikar churna', 'churna', 'ayurveda'],
    tamilKeywords: ['அவிபத்திகர சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-105',
    name: 'Ruthra Dadimashtaka Churna',
    tamilName: 'ருத்ரா தாடிமாஷ்டக சூர்ணம்',
    slug: 'ruthra-dadimashtaka-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['digestive-wellness'],
    price: 180,
    originalPrice: 207,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pomegranate astringent formula for chronic diarrhea, sprue, and irritable bowel.',
    shortDescriptionTa: 'வயிற்றுப்போக்கு, சீதபேதி மற்றும் குடல் அலர்ஜி தீர்க்கும் தாடிமாஷ்டக சூர்ணம்.',
    description: 'Ruthra Dadimashtaka Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா தாடிமாஷ்டக சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Pomegranate astringent formula for chronic diarrhea, sprue, and irritable bowel.',
    traditionalRoleTa: 'வயிற்றுப்போக்கு, சீதபேதி மற்றும் குடல் அலர்ஜி தீர்க்கும் தாடிமாஷ்டக சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-dadimashtaka-churna/front.jpg',
    images: [
      '/images/products/ruthra-dadimashtaka-churna/front.jpg',
      '/images/products/ruthra-dadimashtaka-churna/angle.jpg',
      '/images/products/ruthra-dadimashtaka-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-dadimashtaka-churna/front.jpg',
      '/images/products/ruthra-dadimashtaka-churna/angle.jpg',
      '/images/products/ruthra-dadimashtaka-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['dadimashtaka churna', 'churna', 'ayurveda'],
    tamilKeywords: ['தாடிமாஷ்டக சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-106',
    name: 'Ruthra Dashamoola Churna',
    tamilName: 'ருத்ரா தசமூல சூர்ணம்',
    slug: 'ruthra-dashamoola-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['womens-wellness'],
    price: 200,
    originalPrice: 230,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Ten-roots classical compound for post-partum recovery and severe Vata-Kapha fever.',
    shortDescriptionTa: 'பிரசவத்திற்கு பின் உடல் நலம் மற்றும் வாத தணிப்பிற்கான தசமூல சூர்ணம்.',
    description: 'Ruthra Dashamoola Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா தசமூல சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Ten-roots classical compound for post-partum recovery and severe Vata-Kapha fever.',
    traditionalRoleTa: 'பிரசவத்திற்கு பின் உடல் நலம் மற்றும் வாத தணிப்பிற்கான தசமூல சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-dashamoola-churna/front.jpg',
    images: [
      '/images/products/ruthra-dashamoola-churna/front.jpg',
      '/images/products/ruthra-dashamoola-churna/angle.jpg',
      '/images/products/ruthra-dashamoola-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-dashamoola-churna/front.jpg',
      '/images/products/ruthra-dashamoola-churna/angle.jpg',
      '/images/products/ruthra-dashamoola-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['dashamoola churna', 'churna', 'ayurveda'],
    tamilKeywords: ['தசமூல சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-107',
    name: 'Ruthra Gokshuradi Churna',
    tamilName: 'ருத்ரா கோக்ஷுராதி சூர்ணம்',
    slug: 'ruthra-gokshuradi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness'],
    price: 185,
    originalPrice: 213,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Tribulus terrestris powder for renal filtration, prostate health, and urinary tract comfort.',
    shortDescriptionTa: 'சிறுநீரக பாதை ஆரோக்கியம் மற்றும் புரோஸ்டேட் நலத்திற்கான சூர்ணம்.',
    description: 'Ruthra Gokshuradi Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கோக்ஷுராதி சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Tribulus terrestris powder for renal filtration, prostate health, and urinary tract comfort.',
    traditionalRoleTa: 'சிறுநீரக பாதை ஆரோக்கியம் மற்றும் புரோஸ்டேட் நலத்திற்கான சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-gokshuradi-churna/front.jpg',
    images: [
      '/images/products/ruthra-gokshuradi-churna/front.jpg',
      '/images/products/ruthra-gokshuradi-churna/angle.jpg',
      '/images/products/ruthra-gokshuradi-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-gokshuradi-churna/front.jpg',
      '/images/products/ruthra-gokshuradi-churna/angle.jpg',
      '/images/products/ruthra-gokshuradi-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['gokshuradi churna', 'churna', 'ayurveda'],
    tamilKeywords: ['கோக்ஷுராதி சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-108',
    name: 'Ruthra Hingwashtaka Churna',
    tamilName: 'ருத்ரா ஹிங்குவாஷ்டக சூர்ணம்',
    slug: 'ruthra-hingwashtaka-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['digestive-wellness'],
    price: 160,
    originalPrice: 184,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Asafoetida based appetizer powder taken with first morsel of warm rice and ghee.',
    shortDescriptionTa: 'பசியை தூண்டி வாயு பிடிப்பை போக்கும் ஹிங்குவாஷ்டக சூர்ணம்.',
    description: 'Ruthra Hingwashtaka Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா ஹிங்குவாஷ்டக சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Asafoetida based appetizer powder taken with first morsel of warm rice and ghee.',
    traditionalRoleTa: 'பசியை தூண்டி வாயு பிடிப்பை போக்கும் ஹிங்குவாஷ்டக சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-hingwashtaka-churna/front.jpg',
    images: [
      '/images/products/ruthra-hingwashtaka-churna/front.jpg',
      '/images/products/ruthra-hingwashtaka-churna/angle.jpg',
      '/images/products/ruthra-hingwashtaka-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-hingwashtaka-churna/front.jpg',
      '/images/products/ruthra-hingwashtaka-churna/angle.jpg',
      '/images/products/ruthra-hingwashtaka-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['hingwashtaka churna', 'churna', 'ayurveda'],
    tamilKeywords: ['ஹிங்குவாஷ்டக சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-109',
    name: 'Ruthra Jatamansi Churna',
    tamilName: 'ருத்ரா ஜடாமான்சி சூர்ணம்',
    slug: 'ruthra-jatamansi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness'],
    price: 240,
    originalPrice: 276,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Nardostachys root powder for natural tranquility, sound sleep, and anxiety relief.',
    shortDescriptionTa: 'மன அமைதி மற்றும் ஆழ்ந்த தூக்கத்திற்கு உகந்த ஜடாமான்சி சூர்ணம்.',
    description: 'Ruthra Jatamansi Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா ஜடாமான்சி சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Nardostachys root powder for natural tranquility, sound sleep, and anxiety relief.',
    traditionalRoleTa: 'மன அமைதி மற்றும் ஆழ்ந்த தூக்கத்திற்கு உகந்த ஜடாமான்சி சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-jatamansi-churna/front.jpg',
    images: [
      '/images/products/ruthra-jatamansi-churna/front.jpg',
      '/images/products/ruthra-jatamansi-churna/angle.jpg',
      '/images/products/ruthra-jatamansi-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-jatamansi-churna/front.jpg',
      '/images/products/ruthra-jatamansi-churna/angle.jpg',
      '/images/products/ruthra-jatamansi-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['jatamansi churna', 'churna', 'ayurveda'],
    tamilKeywords: ['ஜடாமான்சி சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-110',
    name: 'Ruthra Mahasudarshana Churna',
    tamilName: 'ருத்ரா மகாசுதர்சன சூர்ணம்',
    slug: 'ruthra-mahasudarshana-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness'],
    price: 225,
    originalPrice: 259,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: '50+ bitter herbs classical antipyretic for all types of fevers and liver clearance.',
    shortDescriptionTa: 'அனைத்து வகை காய்ச்சல் மற்றும் பித்த தோஷம் போக்கும் மகாசுதர்சன சூர்ணம்.',
    description: 'Ruthra Mahasudarshana Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா மகாசுதர்சன சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: '50+ bitter herbs classical antipyretic for all types of fevers and liver clearance.',
    traditionalRoleTa: 'அனைத்து வகை காய்ச்சல் மற்றும் பித்த தோஷம் போக்கும் மகாசுதர்சன சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-mahasudarshana-churna/front.jpg',
    images: [
      '/images/products/ruthra-mahasudarshana-churna/front.jpg',
      '/images/products/ruthra-mahasudarshana-churna/angle.jpg',
      '/images/products/ruthra-mahasudarshana-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mahasudarshana-churna/front.jpg',
      '/images/products/ruthra-mahasudarshana-churna/angle.jpg',
      '/images/products/ruthra-mahasudarshana-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['mahasudarshana churna', 'churna', 'ayurveda'],
    tamilKeywords: ['மகாசுதர்சன சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-111',
    name: 'Ruthra Pushyanuga Churna',
    tamilName: 'ருத்ரா புஷ்யானுக சூர்ணம்',
    slug: 'ruthra-pushyanuga-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['womens-wellness'],
    price: 215,
    originalPrice: 247,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Eminent uterine tonic for menorrhagia, irregular cycles, and white discharge.',
    shortDescriptionTa: 'பெண்களின் அதிக உதிரப்போக்கு மற்றும் வெள்ளைப்படுதல் நீக்கும் புஷ்யானுக சூர்ணம்.',
    description: 'Ruthra Pushyanuga Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா புஷ்யானுக சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Eminent uterine tonic for menorrhagia, irregular cycles, and white discharge.',
    traditionalRoleTa: 'பெண்களின் அதிக உதிரப்போக்கு மற்றும் வெள்ளைப்படுதல் நீக்கும் புஷ்யானுக சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-pushyanuga-churna/front.jpg',
    images: [
      '/images/products/ruthra-pushyanuga-churna/front.jpg',
      '/images/products/ruthra-pushyanuga-churna/angle.jpg',
      '/images/products/ruthra-pushyanuga-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pushyanuga-churna/front.jpg',
      '/images/products/ruthra-pushyanuga-churna/angle.jpg',
      '/images/products/ruthra-pushyanuga-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['pushyanuga churna', 'churna', 'ayurveda'],
    tamilKeywords: ['புஷ்யானுக சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-112',
    name: 'Ruthra Shatavari Churna',
    tamilName: 'ருத்ரா சதாவரி சூர்ணம்',
    slug: 'ruthra-shatavari-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['womens-wellness'],
    price: 195,
    originalPrice: 224,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Asparagus racemosus root powder for lactation support, hormonal balance, and cooling.',
    shortDescriptionTa: 'தாய்ப்பால் சுரப்பு மற்றும் பெண் ஹார்மோன் சமநிலைக்கு சிறந்த சதாவரி.',
    description: 'Ruthra Shatavari Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சதாவரி சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Asparagus racemosus root powder for lactation support, hormonal balance, and cooling.',
    traditionalRoleTa: 'தாய்ப்பால் சுரப்பு மற்றும் பெண் ஹார்மோன் சமநிலைக்கு சிறந்த சதாவரி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-shatavari-churna/front.jpg',
    images: [
      '/images/products/ruthra-shatavari-churna/front.jpg',
      '/images/products/ruthra-shatavari-churna/angle.jpg',
      '/images/products/ruthra-shatavari-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-shatavari-churna/front.jpg',
      '/images/products/ruthra-shatavari-churna/angle.jpg',
      '/images/products/ruthra-shatavari-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['shatavari churna', 'churna', 'ayurveda'],
    tamilKeywords: ['சதாவரி சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-113',
    name: 'Ruthra Yashtimadhu Churna',
    tamilName: 'ருத்ரா யஷ்டிமது சூர்ணம்',
    slug: 'ruthra-yashtimadhu-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['respiratory'],
    price: 170,
    originalPrice: 195,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pure Licorice root demulcent for gastric ulcers, vocal cord soothe, and skin glow.',
    shortDescriptionTa: 'அதிமதுரம் (வயிற்று புண் மற்றும் தொண்டை கரகரப்பு நீக்கும் சூர்ணம்).',
    description: 'Ruthra Yashtimadhu Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா யஷ்டிமது சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Pure Licorice root demulcent for gastric ulcers, vocal cord soothe, and skin glow.',
    traditionalRoleTa: 'அதிமதுரம் (வயிற்று புண் மற்றும் தொண்டை கரகரப்பு நீக்கும் சூர்ணம்).',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-yashtimadhu-churna/front.jpg',
    images: [
      '/images/products/ruthra-yashtimadhu-churna/front.jpg',
      '/images/products/ruthra-yashtimadhu-churna/angle.jpg',
      '/images/products/ruthra-yashtimadhu-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-yashtimadhu-churna/front.jpg',
      '/images/products/ruthra-yashtimadhu-churna/angle.jpg',
      '/images/products/ruthra-yashtimadhu-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['yashtimadhu churna', 'churna', 'ayurveda'],
    tamilKeywords: ['யஷ்டிமது சூர்ணம்', 'சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-114',
    name: 'Ruthra Pure Ashwagandha Root Powder',
    tamilName: 'ருத்ரா அஸ்வகந்தா தூய பொடி',
    slug: 'ruthra-pure-ashwagandha-root-powder',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை',
    categoryGroup: 'single-herbs',
    concerns: ['joint-mobility'],
    price: 190,
    originalPrice: 218,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: '100% Single botanical Withania somnifera for energy, endurance, and cortisol balance.',
    shortDescriptionTa: '100% தூய அஸ்வகந்தா மூலிகைப் பொடி (உடல் சக்தி & தூக்கம்).',
    description: 'Ruthra Pure Ashwagandha Root Powder is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அஸ்வகந்தா தூய பொடி இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: '100% Single botanical Withania somnifera for energy, endurance, and cortisol balance.',
    traditionalRoleTa: '100% தூய அஸ்வகந்தா மூலிகைப் பொடி (உடல் சக்தி & தூக்கம்).',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-pure-ashwagandha-root-powder/front.jpg',
    images: [
      '/images/products/ruthra-pure-ashwagandha-root-powder/front.jpg',
      '/images/products/ruthra-pure-ashwagandha-root-powder/angle.jpg',
      '/images/products/ruthra-pure-ashwagandha-root-powder/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pure-ashwagandha-root-powder/front.jpg',
      '/images/products/ruthra-pure-ashwagandha-root-powder/angle.jpg',
      '/images/products/ruthra-pure-ashwagandha-root-powder/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['pure ashwagandha root powder', 'single herb', 'ayurveda'],
    tamilKeywords: ['அஸ்வகந்தா தூய பொடி', 'தனி மூலிகை'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-115',
    name: 'Ruthra Pure Brahmi Leaf Powder',
    tamilName: 'ருத்ரா பிராமி தூய பொடி',
    slug: 'ruthra-pure-brahmi-leaf-powder',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை',
    categoryGroup: 'single-herbs',
    concerns: ['metabolic-wellness'],
    price: 180,
    originalPrice: 207,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Bacopa monnieri for memory consolidation, focus, and neurological calming.',
    shortDescriptionTa: '100% தூய பிராமி பொடி (ஞாபக சக்தி & மூளை நலம்).',
    description: 'Ruthra Pure Brahmi Leaf Powder is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பிராமி தூய பொடி இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Bacopa monnieri for memory consolidation, focus, and neurological calming.',
    traditionalRoleTa: '100% தூய பிராமி பொடி (ஞாபக சக்தி & மூளை நலம்).',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-pure-brahmi-leaf-powder/front.jpg',
    images: [
      '/images/products/ruthra-pure-brahmi-leaf-powder/front.jpg',
      '/images/products/ruthra-pure-brahmi-leaf-powder/angle.jpg',
      '/images/products/ruthra-pure-brahmi-leaf-powder/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pure-brahmi-leaf-powder/front.jpg',
      '/images/products/ruthra-pure-brahmi-leaf-powder/angle.jpg',
      '/images/products/ruthra-pure-brahmi-leaf-powder/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['pure brahmi leaf powder', 'single herb', 'ayurveda'],
    tamilKeywords: ['பிராமி தூய பொடி', 'தனி மூலிகை'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-116',
    name: 'Ruthra Pure Guduchi Stems Powder',
    tamilName: 'ருத்ரா சீந்தில் தூய பொடி',
    slug: 'ruthra-pure-guduchi-stems-powder',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை',
    categoryGroup: 'single-herbs',
    concerns: ['metabolic-wellness'],
    price: 165,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Tinospora cordifolia immune modulator for blood sugar and vitality.',
    shortDescriptionTa: '100% தூய சீந்தில் பொடி (நோய் எதிர்ப்பு ஆற்றல்).',
    description: 'Ruthra Pure Guduchi Stems Powder is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சீந்தில் தூய பொடி இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Tinospora cordifolia immune modulator for blood sugar and vitality.',
    traditionalRoleTa: '100% தூய சீந்தில் பொடி (நோய் எதிர்ப்பு ஆற்றல்).',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-pure-guduchi-stems-powder/front.jpg',
    images: [
      '/images/products/ruthra-pure-guduchi-stems-powder/front.jpg',
      '/images/products/ruthra-pure-guduchi-stems-powder/angle.jpg',
      '/images/products/ruthra-pure-guduchi-stems-powder/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pure-guduchi-stems-powder/front.jpg',
      '/images/products/ruthra-pure-guduchi-stems-powder/angle.jpg',
      '/images/products/ruthra-pure-guduchi-stems-powder/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['pure guduchi stems powder', 'single herb', 'ayurveda'],
    tamilKeywords: ['சீந்தில் தூய பொடி', 'தனி மூலிகை'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-117',
    name: 'Ruthra Pure Kasthuri Manjal Wild Turmeric',
    tamilName: 'ருத்ரா கஸ்தூரி மஞ்சள் தூய பொடி',
    slug: 'ruthra-pure-kasthuri-manjal-wild-turmeric',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை',
    categoryGroup: 'single-herbs',
    concerns: ['skin-hair'],
    price: 210,
    originalPrice: 241,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Fragrant non-staining wild turmeric for radiant skin glow, anti-acne, and tan removal.',
    shortDescriptionTa: 'முகப்பொலிவு மற்றும் சரும பராமரிப்பிற்கான தூய கஸ்தூரி மஞ்சள்.',
    description: 'Ruthra Pure Kasthuri Manjal Wild Turmeric is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கஸ்தூரி மஞ்சள் தூய பொடி இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Fragrant non-staining wild turmeric for radiant skin glow, anti-acne, and tan removal.',
    traditionalRoleTa: 'முகப்பொலிவு மற்றும் சரும பராமரிப்பிற்கான தூய கஸ்தூரி மஞ்சள்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-pure-kasthuri-manjal-wild-turmeric/front.jpg',
    images: [
      '/images/products/ruthra-pure-kasthuri-manjal-wild-turmeric/front.jpg',
      '/images/products/ruthra-pure-kasthuri-manjal-wild-turmeric/angle.jpg',
      '/images/products/ruthra-pure-kasthuri-manjal-wild-turmeric/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pure-kasthuri-manjal-wild-turmeric/front.jpg',
      '/images/products/ruthra-pure-kasthuri-manjal-wild-turmeric/angle.jpg',
      '/images/products/ruthra-pure-kasthuri-manjal-wild-turmeric/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['pure kasthuri manjal wild turmeric', 'single herb', 'ayurveda'],
    tamilKeywords: ['கஸ்தூரி மஞ்சள் தூய பொடி', 'தனி மூலிகை'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-118',
    name: 'Ruthra Pure Manjistha Root Powder',
    tamilName: 'ருத்ரா மஞ்சிஷ்டா தூய பொடி',
    slug: 'ruthra-pure-manjistha-root-powder',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை',
    categoryGroup: 'single-herbs',
    concerns: ['skin-hair'],
    price: 195,
    originalPrice: 224,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Rubia cordifolia premier blood purifier for skin blemishes and lymphatic detox.',
    shortDescriptionTa: 'ரத்த சுத்திகரிப்பு மற்றும் தோல் கரும்புள்ளி நீக்கும் மஞ்சிஷ்டா பொடி.',
    description: 'Ruthra Pure Manjistha Root Powder is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா மஞ்சிஷ்டா தூய பொடி இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Rubia cordifolia premier blood purifier for skin blemishes and lymphatic detox.',
    traditionalRoleTa: 'ரத்த சுத்திகரிப்பு மற்றும் தோல் கரும்புள்ளி நீக்கும் மஞ்சிஷ்டா பொடி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-pure-manjistha-root-powder/front.jpg',
    images: [
      '/images/products/ruthra-pure-manjistha-root-powder/front.jpg',
      '/images/products/ruthra-pure-manjistha-root-powder/angle.jpg',
      '/images/products/ruthra-pure-manjistha-root-powder/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pure-manjistha-root-powder/front.jpg',
      '/images/products/ruthra-pure-manjistha-root-powder/angle.jpg',
      '/images/products/ruthra-pure-manjistha-root-powder/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['pure manjistha root powder', 'single herb', 'ayurveda'],
    tamilKeywords: ['மஞ்சிஷ்டா தூய பொடி', 'தனி மூலிகை'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-119',
    name: 'Ruthra Pure Tulsi Holy Basil Powder',
    tamilName: 'ருத்ரா துளசி தூய பொடி',
    slug: 'ruthra-pure-tulsi-holy-basil-powder',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை',
    categoryGroup: 'single-herbs',
    concerns: ['respiratory'],
    price: 140,
    originalPrice: 161,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Ocimum sanctum for respiratory clarity, seasonal immunity, and stress reduction.',
    shortDescriptionTa: 'சுவாச நலம் மற்றும் நோய் எதிர்ப்பு சக்தி தரும் தூய துளசி பொடி.',
    description: 'Ruthra Pure Tulsi Holy Basil Powder is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா துளசி தூய பொடி இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Ocimum sanctum for respiratory clarity, seasonal immunity, and stress reduction.',
    traditionalRoleTa: 'சுவாச நலம் மற்றும் நோய் எதிர்ப்பு சக்தி தரும் தூய துளசி பொடி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-pure-tulsi-holy-basil-powder/front.jpg',
    images: [
      '/images/products/ruthra-pure-tulsi-holy-basil-powder/front.jpg',
      '/images/products/ruthra-pure-tulsi-holy-basil-powder/angle.jpg',
      '/images/products/ruthra-pure-tulsi-holy-basil-powder/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pure-tulsi-holy-basil-powder/front.jpg',
      '/images/products/ruthra-pure-tulsi-holy-basil-powder/angle.jpg',
      '/images/products/ruthra-pure-tulsi-holy-basil-powder/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['pure tulsi holy basil powder', 'single herb', 'ayurveda'],
    tamilKeywords: ['துளசி தூய பொடி', 'தனி மூலிகை'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-120',
    name: 'Ruthra Abhayarishta',
    tamilName: 'ருத்ரா அபயாரிஷ்டம்',
    slug: 'ruthra-abhayarishta',
    medicalSystem: 'ayurveda',
    formulation: 'Asavam / Arishta',
    formulationTa: 'ஆஸவம் / அரிஷ்டம்',
    categoryGroup: 'asavam-arishta',
    concerns: ['digestive-wellness'],
    price: 230,
    originalPrice: 265,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Naturally fermented Haritaki elixir for chronic constipation, piles, and spleen wellness.',
    shortDescriptionTa: 'மலச்சிக்கல் மற்றும் மூல நோய் போக்கும் அபயாரிஷ்டம்.',
    description: 'Ruthra Abhayarishta is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அபயாரிஷ்டம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Naturally fermented Haritaki elixir for chronic constipation, piles, and spleen wellness.',
    traditionalRoleTa: 'மலச்சிக்கல் மற்றும் மூல நோய் போக்கும் அபயாரிஷ்டம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-abhayarishta/front.jpg',
    images: [
      '/images/products/ruthra-abhayarishta/front.jpg',
      '/images/products/ruthra-abhayarishta/angle.jpg',
      '/images/products/ruthra-abhayarishta/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-abhayarishta/front.jpg',
      '/images/products/ruthra-abhayarishta/angle.jpg',
      '/images/products/ruthra-abhayarishta/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['abhayarishta', 'asavam / arishta', 'ayurveda'],
    tamilKeywords: ['அபயாரிஷ்டம்', 'ஆஸவம் / அரிஷ்டம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-121',
    name: 'Ruthra Amritarishta',
    tamilName: 'ருத்ரா அமிருதாரிஷ்டம்',
    slug: 'ruthra-amritarishta',
    medicalSystem: 'ayurveda',
    formulation: 'Asavam / Arishta',
    formulationTa: 'ஆஸவம் / அரிஷ்டம்',
    categoryGroup: 'asavam-arishta',
    concerns: ['metabolic-wellness'],
    price: 240,
    originalPrice: 276,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Fermented Guduchi tonic for convalescence from recurrent fevers and immune rebuild.',
    shortDescriptionTa: 'காய்ச்சலுக்கு பின் உடல் தேற உதவும் அமிருதாரிஷ்டம்.',
    description: 'Ruthra Amritarishta is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அமிருதாரிஷ்டம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Fermented Guduchi tonic for convalescence from recurrent fevers and immune rebuild.',
    traditionalRoleTa: 'காய்ச்சலுக்கு பின் உடல் தேற உதவும் அமிருதாரிஷ்டம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-amritarishta/front.jpg',
    images: [
      '/images/products/ruthra-amritarishta/front.jpg',
      '/images/products/ruthra-amritarishta/angle.jpg',
      '/images/products/ruthra-amritarishta/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amritarishta/front.jpg',
      '/images/products/ruthra-amritarishta/angle.jpg',
      '/images/products/ruthra-amritarishta/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['amritarishta', 'asavam / arishta', 'ayurveda'],
    tamilKeywords: ['அமிருதாரிஷ்டம்', 'ஆஸவம் / அரிஷ்டம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-122',
    name: 'Ruthra Ashokarishta',
    tamilName: 'ருத்ரா அசோகாரிஷ்டம்',
    slug: 'ruthra-ashokarishta',
    medicalSystem: 'ayurveda',
    formulation: 'Asavam / Arishta',
    formulationTa: 'ஆஸவம் / அரிஷ்டம்',
    categoryGroup: 'asavam-arishta',
    concerns: ['womens-wellness'],
    price: 250,
    originalPrice: 288,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Saraca asoca classical uterine tonic for painful menses and hormonal rhythm.',
    shortDescriptionTa: 'மாதவிடாய் கோளாறு மற்றும் பெண்களுக்கு பலம் தரும் அசோகாரிஷ்டம்.',
    description: 'Ruthra Ashokarishta is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அசோகாரிஷ்டம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Saraca asoca classical uterine tonic for painful menses and hormonal rhythm.',
    traditionalRoleTa: 'மாதவிடாய் கோளாறு மற்றும் பெண்களுக்கு பலம் தரும் அசோகாரிஷ்டம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-ashokarishta/front.jpg',
    images: [
      '/images/products/ruthra-ashokarishta/front.jpg',
      '/images/products/ruthra-ashokarishta/angle.jpg',
      '/images/products/ruthra-ashokarishta/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ashokarishta/front.jpg',
      '/images/products/ruthra-ashokarishta/angle.jpg',
      '/images/products/ruthra-ashokarishta/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['ashokarishta', 'asavam / arishta', 'ayurveda'],
    tamilKeywords: ['அசோகாரிஷ்டம்', 'ஆஸவம் / அரிஷ்டம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-123',
    name: 'Ruthra Balarishta',
    tamilName: 'ருத்ரா பலாரிஷ்டம்',
    slug: 'ruthra-balarishta',
    medicalSystem: 'ayurveda',
    formulation: 'Asavam / Arishta',
    formulationTa: 'ஆஸவம் / அரிஷ்டம்',
    categoryGroup: 'asavam-arishta',
    concerns: ['joint-mobility'],
    price: 260,
    originalPrice: 299,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Sida cordifolia fermented tonic for neuromuscular weakness and hemiplegia recovery.',
    shortDescriptionTa: 'நரம்பு பலவீனம் மற்றும் வாத நோய்களை போக்கும் பலாரிஷ்டம்.',
    description: 'Ruthra Balarishta is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பலாரிஷ்டம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Sida cordifolia fermented tonic for neuromuscular weakness and hemiplegia recovery.',
    traditionalRoleTa: 'நரம்பு பலவீனம் மற்றும் வாத நோய்களை போக்கும் பலாரிஷ்டம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-balarishta/front.jpg',
    images: [
      '/images/products/ruthra-balarishta/front.jpg',
      '/images/products/ruthra-balarishta/angle.jpg',
      '/images/products/ruthra-balarishta/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-balarishta/front.jpg',
      '/images/products/ruthra-balarishta/angle.jpg',
      '/images/products/ruthra-balarishta/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['balarishta', 'asavam / arishta', 'ayurveda'],
    tamilKeywords: ['பலாரிஷ்டம்', 'ஆஸவம் / அரிஷ்டம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-124',
    name: 'Ruthra Draksharishta',
    tamilName: 'ருத்ரா திராட்சாரிஷ்டம்',
    slug: 'ruthra-draksharishta',
    medicalSystem: 'ayurveda',
    formulation: 'Asavam / Arishta',
    formulationTa: 'ஆஸவம் / அரிஷ்டம்',
    categoryGroup: 'asavam-arishta',
    concerns: ['digestive-wellness'],
    price: 250,
    originalPrice: 288,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Raisin and herbal fermented cordial for digestive fatigue, anemia, and debility.',
    shortDescriptionTa: 'ரத்த சோகை மற்றும் உடல் சோர்வு நீக்கும் திராட்சாரிஷ்டம்.',
    description: 'Ruthra Draksharishta is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா திராட்சாரிஷ்டம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Raisin and herbal fermented cordial for digestive fatigue, anemia, and debility.',
    traditionalRoleTa: 'ரத்த சோகை மற்றும் உடல் சோர்வு நீக்கும் திராட்சாரிஷ்டம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-draksharishta/front.jpg',
    images: [
      '/images/products/ruthra-draksharishta/front.jpg',
      '/images/products/ruthra-draksharishta/angle.jpg',
      '/images/products/ruthra-draksharishta/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-draksharishta/front.jpg',
      '/images/products/ruthra-draksharishta/angle.jpg',
      '/images/products/ruthra-draksharishta/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['draksharishta', 'asavam / arishta', 'ayurveda'],
    tamilKeywords: ['திராட்சாரிஷ்டம்', 'ஆஸவம் / அரிஷ்டம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-125',
    name: 'Ruthra Agasthya Rasayanam Lehyam',
    tamilName: 'ருத்ரா அகஸ்திய ரசாயனம் லேஹ்யம்',
    slug: 'ruthra-agasthya-rasayanam-lehyam',
    medicalSystem: 'ayurveda',
    formulation: 'Lehyam',
    formulationTa: 'லேஹ்யம்',
    categoryGroup: 'lehyam',
    concerns: ['respiratory'],
    price: 270,
    originalPrice: 311,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Classical Ayurvedic lung rejuvenate for chronic asthma, sinus congestion, and allergic cough.',
    shortDescriptionTa: 'ஆஸ்துமா, நெஞ்சு சளி மற்றும் சுவாச நோய்களை போக்கும் அகஸ்திய ரசாயனம்.',
    description: 'Ruthra Agasthya Rasayanam Lehyam is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா அகஸ்திய ரசாயனம் லேஹ்யம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Classical Ayurvedic lung rejuvenate for chronic asthma, sinus congestion, and allergic cough.',
    traditionalRoleTa: 'ஆஸ்துமா, நெஞ்சு சளி மற்றும் சுவாச நோய்களை போக்கும் அகஸ்திய ரசாயனம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-agasthya-rasayanam-lehyam/front.jpg',
    images: [
      '/images/products/ruthra-agasthya-rasayanam-lehyam/front.jpg',
      '/images/products/ruthra-agasthya-rasayanam-lehyam/angle.jpg',
      '/images/products/ruthra-agasthya-rasayanam-lehyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-agasthya-rasayanam-lehyam/front.jpg',
      '/images/products/ruthra-agasthya-rasayanam-lehyam/angle.jpg',
      '/images/products/ruthra-agasthya-rasayanam-lehyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['agasthya rasayanam lehyam', 'lehyam', 'ayurveda'],
    tamilKeywords: ['அகஸ்திய ரசாயனம் லேஹ்யம்', 'லேஹ்யம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-126',
    name: 'Ruthra Brahma Rasayanam Lehyam',
    tamilName: 'ருத்ரா பிரம்மா ரசாயனம் லேஹ்யம்',
    slug: 'ruthra-brahma-rasayanam-lehyam',
    medicalSystem: 'ayurveda',
    formulation: 'Lehyam',
    formulationTa: 'லேஹ்யம்',
    categoryGroup: 'lehyam',
    concerns: ['metabolic-wellness'],
    price: 290,
    originalPrice: 334,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Master longevity preserve for mental clarity, stress protection, and whole-body vitality.',
    shortDescriptionTa: 'நினைவாற்றல் மற்றும் உடல் இளமை காக்கும் பிரம்மா ரசாயனம்.',
    description: 'Ruthra Brahma Rasayanam Lehyam is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பிரம்மா ரசாயனம் லேஹ்யம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Master longevity preserve for mental clarity, stress protection, and whole-body vitality.',
    traditionalRoleTa: 'நினைவாற்றல் மற்றும் உடல் இளமை காக்கும் பிரம்மா ரசாயனம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-brahma-rasayanam-lehyam/front.jpg',
    images: [
      '/images/products/ruthra-brahma-rasayanam-lehyam/front.jpg',
      '/images/products/ruthra-brahma-rasayanam-lehyam/angle.jpg',
      '/images/products/ruthra-brahma-rasayanam-lehyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-brahma-rasayanam-lehyam/front.jpg',
      '/images/products/ruthra-brahma-rasayanam-lehyam/angle.jpg',
      '/images/products/ruthra-brahma-rasayanam-lehyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['brahma rasayanam lehyam', 'lehyam', 'ayurveda'],
    tamilKeywords: ['பிரம்மா ரசாயனம் லேஹ்யம்', 'லேஹ்யம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-127',
    name: 'Ruthra Chyawanprash Lehyam',
    tamilName: 'ருத்ரா சியவன்பிரசா லேஹ்யம்',
    slug: 'ruthra-chyawanprash-lehyam',
    medicalSystem: 'ayurveda',
    formulation: 'Lehyam',
    formulationTa: 'லேஹ்யம்',
    categoryGroup: 'lehyam',
    concerns: ['metabolic-wellness'],
    price: 260,
    originalPrice: 299,
    packSize: '500g',
    packSizeTa: '500 கிராம்',
    shortDescription: 'Gold-standard Amla herbal jam with 40+ botanicals for all-season family defense.',
    shortDescriptionTa: 'நெல்லி மற்றும் 40+ மூலிகைகள் கொண்ட முழுமையான குடும்ப சத்து லேகியம்.',
    description: 'Ruthra Chyawanprash Lehyam is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சியவன்பிரசா லேஹ்யம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Gold-standard Amla herbal jam with 40+ botanicals for all-season family defense.',
    traditionalRoleTa: 'நெல்லி மற்றும் 40+ மூலிகைகள் கொண்ட முழுமையான குடும்ப சத்து லேகியம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-chyawanprash-lehyam/front.jpg',
    images: [
      '/images/products/ruthra-chyawanprash-lehyam/front.jpg',
      '/images/products/ruthra-chyawanprash-lehyam/angle.jpg',
      '/images/products/ruthra-chyawanprash-lehyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-chyawanprash-lehyam/front.jpg',
      '/images/products/ruthra-chyawanprash-lehyam/angle.jpg',
      '/images/products/ruthra-chyawanprash-lehyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['chyawanprash lehyam', 'lehyam', 'ayurveda'],
    tamilKeywords: ['சியவன்பிரசா லேஹ்யம்', 'லேஹ்யம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-128',
    name: 'Ruthra Drakshadi Lehyam',
    tamilName: 'ருத்ரா திராட்சாதி லேஹ்யம்',
    slug: 'ruthra-drakshadi-lehyam',
    medicalSystem: 'ayurveda',
    formulation: 'Lehyam',
    formulationTa: 'லேஹ்யம்',
    categoryGroup: 'lehyam',
    concerns: ['digestive-wellness'],
    price: 235,
    originalPrice: 270,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Cooling raisin preserve for hyperacidity, jaundice recovery, and systemic Pitta flare-ups.',
    shortDescriptionTa: 'பித்தம் தணித்து கல்லீரல் நலம் தரும் திராட்சாதி லேஹ்யம்.',
    description: 'Ruthra Drakshadi Lehyam is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா திராட்சாதி லேஹ்யம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Cooling raisin preserve for hyperacidity, jaundice recovery, and systemic Pitta flare-ups.',
    traditionalRoleTa: 'பித்தம் தணித்து கல்லீரல் நலம் தரும் திராட்சாதி லேஹ்யம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-drakshadi-lehyam/front.jpg',
    images: [
      '/images/products/ruthra-drakshadi-lehyam/front.jpg',
      '/images/products/ruthra-drakshadi-lehyam/angle.jpg',
      '/images/products/ruthra-drakshadi-lehyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-drakshadi-lehyam/front.jpg',
      '/images/products/ruthra-drakshadi-lehyam/angle.jpg',
      '/images/products/ruthra-drakshadi-lehyam/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['drakshadi lehyam', 'lehyam', 'ayurveda'],
    tamilKeywords: ['திராட்சாதி லேஹ்யம்', 'லேஹ்யம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-129',
    name: 'Ruthra Brahmi Ghrita',
    tamilName: 'ருத்ரா பிராமி கிருதம்',
    slug: 'ruthra-brahmi-ghrita',
    medicalSystem: 'ayurveda',
    formulation: 'Ghritam',
    formulationTa: 'கிருதம்',
    categoryGroup: 'ghritam',
    concerns: ['metabolic-wellness'],
    price: 320,
    originalPrice: 368,
    packSize: '150g',
    packSizeTa: '150 கிராம்',
    shortDescription: 'Medicated cow ghee for speech delay, intellect development, and calming mind.',
    shortDescriptionTa: 'குழந்தைகளின் மூளை திறன் மற்றும் ஞாபக சக்தி வளர்க்கும் பிராமி நெய்.',
    description: 'Ruthra Brahmi Ghrita is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பிராமி கிருதம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Medicated cow ghee for speech delay, intellect development, and calming mind.',
    traditionalRoleTa: 'குழந்தைகளின் மூளை திறன் மற்றும் ஞாபக சக்தி வளர்க்கும் பிராமி நெய்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-brahmi-ghrita/front.jpg',
    images: [
      '/images/products/ruthra-brahmi-ghrita/front.jpg',
      '/images/products/ruthra-brahmi-ghrita/angle.jpg',
      '/images/products/ruthra-brahmi-ghrita/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-brahmi-ghrita/front.jpg',
      '/images/products/ruthra-brahmi-ghrita/angle.jpg',
      '/images/products/ruthra-brahmi-ghrita/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['brahmi ghrita', 'ghritam', 'ayurveda'],
    tamilKeywords: ['பிராமி கிருதம்', 'கிருதம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-130',
    name: 'Ruthra Phala Ghrita',
    tamilName: 'ருத்ரா பல கிருதம்',
    slug: 'ruthra-phala-ghrita',
    medicalSystem: 'ayurveda',
    formulation: 'Ghritam',
    formulationTa: 'கிருதம்',
    categoryGroup: 'ghritam',
    concerns: ['womens-wellness'],
    price: 360,
    originalPrice: 414,
    packSize: '150g',
    packSizeTa: '150 கிராம்',
    shortDescription: 'Celebrated fertility ghritham for preparing conception, uterine tone, and pregnancy support.',
    shortDescriptionTa: 'கருப்பை பலம் மற்றும் குழந்தை பேறுக்கு உதவும் பாரம்பரிய பல கிருதம்.',
    description: 'Ruthra Phala Ghrita is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா பல கிருதம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Celebrated fertility ghritham for preparing conception, uterine tone, and pregnancy support.',
    traditionalRoleTa: 'கருப்பை பலம் மற்றும் குழந்தை பேறுக்கு உதவும் பாரம்பரிய பல கிருதம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-phala-ghrita/front.jpg',
    images: [
      '/images/products/ruthra-phala-ghrita/front.jpg',
      '/images/products/ruthra-phala-ghrita/angle.jpg',
      '/images/products/ruthra-phala-ghrita/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-phala-ghrita/front.jpg',
      '/images/products/ruthra-phala-ghrita/angle.jpg',
      '/images/products/ruthra-phala-ghrita/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['phala ghrita', 'ghritam', 'ayurveda'],
    tamilKeywords: ['பல கிருதம்', 'கிருதம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-131',
    name: 'Ruthra Shatavari Ghrita',
    tamilName: 'ருத்ரா சதாவரி கிருதம்',
    slug: 'ruthra-shatavari-ghrita',
    medicalSystem: 'ayurveda',
    formulation: 'Ghritam',
    formulationTa: 'கிருதம்',
    categoryGroup: 'ghritam',
    concerns: ['womens-wellness'],
    price: 330,
    originalPrice: 379,
    packSize: '150g',
    packSizeTa: '150 கிராம்',
    shortDescription: 'Cooling Asparagus medicated ghee for burning micturition, bleeding disorders, and Pitta.',
    shortDescriptionTa: 'உடல் உஷ்ணம் மற்றும் மகளிர் நலம் காக்கும் சதாவரி கிருதம்.',
    description: 'Ruthra Shatavari Ghrita is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சதாவரி கிருதம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Cooling Asparagus medicated ghee for burning micturition, bleeding disorders, and Pitta.',
    traditionalRoleTa: 'உடல் உஷ்ணம் மற்றும் மகளிர் நலம் காக்கும் சதாவரி கிருதம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-shatavari-ghrita/front.jpg',
    images: [
      '/images/products/ruthra-shatavari-ghrita/front.jpg',
      '/images/products/ruthra-shatavari-ghrita/angle.jpg',
      '/images/products/ruthra-shatavari-ghrita/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-shatavari-ghrita/front.jpg',
      '/images/products/ruthra-shatavari-ghrita/angle.jpg',
      '/images/products/ruthra-shatavari-ghrita/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['shatavari ghrita', 'ghritam', 'ayurveda'],
    tamilKeywords: ['சதாவரி கிருதம்', 'கிருதம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-132',
    name: 'Ruthra Chandraprabha Vati',
    tamilName: 'ருத்ரா சந்திரபிரபா வடி',
    slug: 'ruthra-chandraprabha-vati',
    medicalSystem: 'ayurveda',
    formulation: 'Vati',
    formulationTa: 'வடி',
    categoryGroup: 'vati-guggulu',
    concerns: ['metabolic-wellness'],
    price: 210,
    originalPrice: 241,
    packSize: '60 Tabs',
    packSizeTa: '60 மாத்திரைகள்',
    shortDescription: 'Cornerstone urinary tablet for UTI, glycosuria, kidney stones, and lower backache.',
    shortDescriptionTa: 'சிறுநீரக பாதை நலம் மற்றும் இடுப்பு வலி நீக்கும் சந்திரபிரபா வடி.',
    description: 'Ruthra Chandraprabha Vati is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா சந்திரபிரபா வடி இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Cornerstone urinary tablet for UTI, glycosuria, kidney stones, and lower backache.',
    traditionalRoleTa: 'சிறுநீரக பாதை நலம் மற்றும் இடுப்பு வலி நீக்கும் சந்திரபிரபா வடி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-chandraprabha-vati/front.jpg',
    images: [
      '/images/products/ruthra-chandraprabha-vati/front.jpg',
      '/images/products/ruthra-chandraprabha-vati/angle.jpg',
      '/images/products/ruthra-chandraprabha-vati/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-chandraprabha-vati/front.jpg',
      '/images/products/ruthra-chandraprabha-vati/angle.jpg',
      '/images/products/ruthra-chandraprabha-vati/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['chandraprabha vati', 'vati', 'ayurveda'],
    tamilKeywords: ['சந்திரபிரபா வடி', 'வடி'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-133',
    name: 'Ruthra Kaishore Guggulu',
    tamilName: 'ருத்ரா கைஷோர குக்குலு',
    slug: 'ruthra-kaishore-guggulu',
    medicalSystem: 'ayurveda',
    formulation: 'Vati',
    formulationTa: 'வடி',
    categoryGroup: 'vati-guggulu',
    concerns: ['joint-mobility'],
    price: 230,
    originalPrice: 265,
    packSize: '60 Tabs',
    packSizeTa: '60 மாத்திரைகள்',
    shortDescription: 'Purified Guggul for high uric acid levels, gout, joint redness, and skin carbuncles.',
    shortDescriptionTa: 'யூரிக் அமிலம் மற்றும் மூட்டு வாதத்தை குணமாக்கும் கைஷோர குக்குலு.',
    description: 'Ruthra Kaishore Guggulu is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா கைஷோர குக்குலு இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Purified Guggul for high uric acid levels, gout, joint redness, and skin carbuncles.',
    traditionalRoleTa: 'யூரிக் அமிலம் மற்றும் மூட்டு வாதத்தை குணமாக்கும் கைஷோர குக்குலு.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-kaishore-guggulu/front.jpg',
    images: [
      '/images/products/ruthra-kaishore-guggulu/front.jpg',
      '/images/products/ruthra-kaishore-guggulu/angle.jpg',
      '/images/products/ruthra-kaishore-guggulu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kaishore-guggulu/front.jpg',
      '/images/products/ruthra-kaishore-guggulu/angle.jpg',
      '/images/products/ruthra-kaishore-guggulu/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['kaishore guggulu', 'vati', 'ayurveda'],
    tamilKeywords: ['கைஷோர குக்குலு', 'வடி'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-134',
    name: 'Ruthra Yogaraj Guggulu',
    tamilName: 'ருத்ரா யோகராஜ குக்குலு',
    slug: 'ruthra-yogaraj-guggulu',
    medicalSystem: 'ayurveda',
    formulation: 'Vati',
    formulationTa: 'வடி',
    categoryGroup: 'vati-guggulu',
    concerns: ['joint-mobility'],
    price: 220,
    originalPrice: 253,
    packSize: '60 Tabs',
    packSizeTa: '60 மாத்திரைகள்',
    shortDescription: 'Renowned Ayurvedic Vata harmonizer for osteoarthritis, spondylosis, and neuromuscular stiffness.',
    shortDescriptionTa: 'மூட்டு வலி மற்றும் நரம்பு பிடிப்பை போக்கும் யோகராஜ குக்குலு.',
    description: 'Ruthra Yogaraj Guggulu is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா யோகராஜ குக்குலு இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Renowned Ayurvedic Vata harmonizer for osteoarthritis, spondylosis, and neuromuscular stiffness.',
    traditionalRoleTa: 'மூட்டு வலி மற்றும் நரம்பு பிடிப்பை போக்கும் யோகராஜ குக்குலு.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-yogaraj-guggulu/front.jpg',
    images: [
      '/images/products/ruthra-yogaraj-guggulu/front.jpg',
      '/images/products/ruthra-yogaraj-guggulu/angle.jpg',
      '/images/products/ruthra-yogaraj-guggulu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-yogaraj-guggulu/front.jpg',
      '/images/products/ruthra-yogaraj-guggulu/angle.jpg',
      '/images/products/ruthra-yogaraj-guggulu/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['yogaraj guggulu', 'vati', 'ayurveda'],
    tamilKeywords: ['யோகராஜ குக்குலு', 'வடி'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-135',
    name: 'Ruthra Maharasnadi Kwatha Churna',
    tamilName: 'ருத்ரா மகாராஸ்னாதி க்வாத சூர்ணம்',
    slug: 'ruthra-maharasnadi-kwatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kwatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kwatha-churna',
    concerns: ['joint-mobility'],
    price: 220,
    originalPrice: 253,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical Pluchea decoction blend for Parkinsonian tremors, hemiplegia, and sciatica.',
    shortDescriptionTa: 'வாத வலி, நரம்பு தளர்ச்சி மற்றும் பக்கவாதம் போக்கும் கஷாய பொடி.',
    description: 'Ruthra Maharasnadi Kwatha Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா மகாராஸ்னாதி க்வாத சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Classical Pluchea decoction blend for Parkinsonian tremors, hemiplegia, and sciatica.',
    traditionalRoleTa: 'வாத வலி, நரம்பு தளர்ச்சி மற்றும் பக்கவாதம் போக்கும் கஷாய பொடி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-maharasnadi-kwatha-churna/front.jpg',
    images: [
      '/images/products/ruthra-maharasnadi-kwatha-churna/front.jpg',
      '/images/products/ruthra-maharasnadi-kwatha-churna/angle.jpg',
      '/images/products/ruthra-maharasnadi-kwatha-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-maharasnadi-kwatha-churna/front.jpg',
      '/images/products/ruthra-maharasnadi-kwatha-churna/angle.jpg',
      '/images/products/ruthra-maharasnadi-kwatha-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['maharasnadi kwatha churna', 'kwatha churna', 'ayurveda'],
    tamilKeywords: ['மகாராஸ்னாதி க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true
  },
  {
    id: 'prod-ayurveda-136',
    name: 'Ruthra Varunadi Kwatha Churna',
    tamilName: 'ருத்ரா வருணாதி க்வாத சூர்ணம்',
    slug: 'ruthra-varunadi-kwatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kwatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kwatha-churna',
    concerns: ['metabolic-wellness'],
    price: 200,
    originalPrice: 230,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Crataeva decoction for renal calculi, prostate enlargement, and healthy lipid balance.',
    shortDescriptionTa: 'சிறுநீரக கல் மற்றும் புரோஸ்டேட் வீக்கம் கரைக்கும் வருணாதி கஷாய பொடி.',
    description: 'Ruthra Varunadi Kwatha Churna is compounded according to the authentic classical Ayurvedic Formulary of India (AFI). Prepared in Tirunelveli using wildcrafted botanicals purified per Shodhana.',
    descriptionTa: 'ருத்ரா வருணாதி க்வாத சூர்ணம் இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய மூலிகைகளை கொண்டு பக்குவமாக தயாரிக்கப்பட்ட பாரம்பரிய மருந்து.',
    traditionalRole: 'Crataeva decoction for renal calculi, prostate enlargement, and healthy lipid balance.',
    traditionalRoleTa: 'சிறுநீரக கல் மற்றும் புரோஸ்டேட் வீக்கம் கரைக்கும் வருணாதி கஷாய பொடி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேத தயாரிப்பு',
    image: '/images/products/ruthra-varunadi-kwatha-churna/front.jpg',
    images: [
      '/images/products/ruthra-varunadi-kwatha-churna/front.jpg',
      '/images/products/ruthra-varunadi-kwatha-churna/angle.jpg',
      '/images/products/ruthra-varunadi-kwatha-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-varunadi-kwatha-churna/front.jpg',
      '/images/products/ruthra-varunadi-kwatha-churna/angle.jpg',
      '/images/products/ruthra-varunadi-kwatha-churna/back.jpg'
    ],
    isComingSoon: true,
    ingredients: [
      { name: 'Classical Purified Botanicals', tamilName: 'சுத்தி செய்த மூலிகைகள்', role: 'Active therapeutic herb compound', roleTa: 'முதன்மை மூலிகை சேர்க்கை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consult Usage', titleTa: 'அளவை சரிபார்க்கவும்', instruction: 'Take the recommended classical dosage twice daily.', instructionTa: 'பரிந்துரைக்கப்பட்ட அளவில் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: 'As directed by physician',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water or honey',
      amountTa: 'மருத்துவர் ஆலோசனைப்படி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரை அணுகவும்.',
      children: 'Under adult physician guidance.',
      childrenTa: 'மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep 1-hour interval from allopathic medications.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store away from direct moisture.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When will this classical batch be ready?',
        questionTa: 'இந்த மருந்து எப்போது கிடைக்கும்?',
        answer: 'This classical formulation is prepared in seasonal artisanal batches per Shodhana. You can contact our WhatsApp desk (+91 91715 08042) to reserve your pack.',
        answerTa: 'இது குறிப்பிட்ட பருவத்தில் சுத்தி முறைப்படி தயாரிக்கப்படும் பாரம்பரிய மருந்து. வாட்ஸ்அப் வழியாக முன்பதிவு செய்து கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['varunadi kwatha churna', 'kwatha churna', 'ayurveda'],
    tamilKeywords: ['வருணாதி க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true
  }
];

export const CONCERN_CATEGORIES: ConcernCategory[] = [
  {
    slug: 'joint-mobility',
    title: 'Joint & Musculoskeletal Mobility',
    titleTa: 'மூட்டு & வாத நலம்',
    tagline: 'Deep joint relief, nerve restoration & cartilage support',
    taglineTa: 'வாத உபாதைகள் மற்றும் மூட்டு வலி நிவாரணம்',
    description: 'Time-honored Siddha oils, mineralized herbal sachets, and 101-processed soft gels designed to alleviate Vatha aggravation, nerve compression, sciatica, and joint stiffness.',
    descriptionTa: 'முடக்கத்தான், சிற்றாமுட்டி, கந்த தைலம் கொண்டு மூட்டு தேய்மானம், சியாட்டிகா மற்றும் நரம்பு வலிகளை தீர்க்கும் பாரம்பரிய சித்த மருத்துவம்.',
    iconName: 'Activity',
    herbalKey: 'Mudakathan & Balamoola',
    herbalKeyTa: 'முடக்கத்தான் & சிற்றாமுட்டி'
  },
  {
    slug: 'respiratory',
    title: 'Respiratory & Immune Defense',
    titleTa: 'சுவாச நலம் & நோய் எதிர்ப்பு',
    tagline: 'Clear airways, soothing cough elixirs & sinus decongestion',
    taglineTa: 'சுவாசப் பாதை சீரமைப்பு மற்றும் சைனஸ் நிவாரணம்',
    description: 'Classical Siddha decoctions, non-drowsy syrups, platelet-boosting kashayams, and volatile inhalation drops crafted with Adathodai, Nochi, Thulasi, and Nilavembu.',
    descriptionTa: 'ஆடாதோடை, நொச்சி, துளசி, நிலவேம்பு கொண்டு நெஞ்சு சளியை இளக்கி, காய்ச்சல் மற்றும் ஆஸ்துமாவை போக்கும் பாரம்பரிய முறை.',
    iconName: 'Wind',
    herbalKey: 'Adathodai & Nochi',
    herbalKeyTa: 'ஆடாதோடை & நொச்சி'
  },
  {
    slug: 'digestive-wellness',
    title: 'Digestive, Acidity & Liver Care',
    titleTa: 'செரிமானம் & கல்லீரல் நலம்',
    tagline: 'Soothe gut fire (Agni), relieve GERD & restore liver vitality',
    taglineTa: 'செரிமான தீயை தூண்டி கல்லீரல் நலம் பேணும்',
    description: 'Processed Haritaki, gentle laxatives, and hepatoprotective decoctions synergized to dispel gastric acidity, resolve constipation, and rejuvenate liver parenchyma.',
    descriptionTa: 'கடுக்காய், கீழாநெல்லி, அதிமதுரம் கொண்டு நெஞ்செரிச்சல், மலச்சிக்கல் மற்றும் கல்லீரல் கோளாறுகளை போக்கும் தயாரிப்புகள்.',
    iconName: 'Flame',
    herbalKey: 'Kadukkai & Keezhanelli',
    herbalKeyTa: 'கடுக்காய் & கீழாநெல்லி'
  },
  {
    slug: 'womens-wellness',
    title: "Women's Wellness & Hormonal Care",
    titleTa: 'பெண்கள் நலம் & கர்ப்பப்பை பராமரிப்பு',
    tagline: 'Rhythmic cycle harmony, PCOS care & fertility support',
    taglineTa: 'மாதவிடாய் சுழற்சி மற்றும் கர்ப்பப்பை ஆரோக்கியம்',
    description: 'Specialized Siddha gynecological formulations that break menstrual stagnation, soothe PCOS cramps, and replenish vital reproductive tissue nourishment.',
    descriptionTa: 'பெண்களின் மாதவிடாய் சுழற்சியை சீராக்கவும், பிசிஓடி நீர்க்கட்டிகளை கரைக்கவும், கர்ப்பப்பை தசைகளை பலப்படுத்தவும் உதவும் சித்த மருந்துகள்.',
    iconName: 'Heart',
    herbalKey: 'Kattuvazhai & Shatavari',
    herbalKeyTa: 'காட்டுவாழை & தண்ணீர்விட்டான்'
  },
  {
    slug: 'skin-hair',
    title: 'Skin, Hair & Wound Healing',
    titleTa: 'சருமம், கூந்தல் & புண் ஆற்றுதல்',
    tagline: 'Botanical radiance, rapid wound closure & dandruff control',
    taglineTa: 'மேனி பொலிவு, புண் ஆற்றுதல் மற்றும் கூந்தல் வளர்ச்சி',
    description: 'Golden Nalpamaradi oils, diabetic wound healing oils, Bringaraja hair tonics, and royal herbal bath scrubs formulated for luminous skin and dense hair growth.',
    descriptionTa: 'நால்பாமரம், குப்பைமேனி, கரிசலாங்கண்ணி கொண்டு தயாரிக்கப்படும் தோல் நோய், ஆறாத புண்கள் மற்றும் கூந்தல் பராமரிப்பு தயாரிப்புகள்.',
    iconName: 'Droplets',
    herbalKey: 'Nalpamara & Bringaraja',
    herbalKeyTa: 'நால்பாமரம் & கரிசலாங்கண்ணி'
  },
  {
    slug: 'metabolic-wellness',
    title: 'Metabolic, Sugar & Vitality Balance',
    titleTa: 'சர்க்கரை, சிறுநீரகம் & தாது பலம்',
    tagline: 'Support glucose pathways, renal kidney stone ease & vitality',
    taglineTa: 'சர்க்கரை கட்டுப்பாடு, சிறுநீரக கல் மற்றும் தாது பலம்',
    description: 'Potent botanical extracts utilizing Gymnema, Jamun, Sirupeelai, and Mucuna to maintain blood sugar harmony, dissolve renal stones, and build systemic vitality.',
    descriptionTa: 'சிறுகுறிஞ்சான், நாவல் விதை, சிறுபீளை, பூனைக்காலி கொண்டு சர்க்கரையை கட்டுப்படுத்தி சிறுநீரக கல்லை கரைக்கும் மருந்துகள்.',
    iconName: 'ShieldCheck',
    herbalKey: 'Sirukurinjan & Sirupeelai',
    herbalKeyTa: 'சிறுகுறிஞ்சான் & சிறுபீளை'
  }
];

export const FORMULATION_CATEGORIES: FormulationCategory[] = [
  {
    slug: 'chooranam',
    formulation: 'Chooranam',
    title: 'Chooranam (Powders & Sachets)',
    titleTa: 'சூரணம் (பாக்கெட்டுகள்)',
    tagline: 'Fine botanical powders & measured single-dose sachets',
    taglineTa: 'தூய மூலிகைப் பொடிகள் மற்றும் பாக்கெட்டுகள்',
    description: 'Traditional herbal powders pulverized through meticulous cloth filtration (Vasthirakkayam) for maximum bio-potency and measured single-dose ease.',
    descriptionTa: 'மூலிகைகளை நிழலில் உலர்த்தி வஸ்திரக்காயம் செய்து சலித்து எடுக்கப்படும் உன்னத சித்த சூரணம்.',
    classicalContext: 'Classical powdered form allowing easy blending into carriers like warm water, honey, or ghee.',
    classicalContextTa: 'வெந்நீர், தேன் அல்லது நெய்யில் கலந்து எளிதில் உட்கொள்ளும் பாரம்பரிய முறை.'
  },
  {
    slug: 'kudineer',
    formulation: 'Kudineer',
    title: 'Kudineer Chooranam (Decoctions)',
    titleTa: 'குடிநீர் (கஷாய பொடிகள்)',
    tagline: 'Herbal decoction preparations boiled fresh',
    taglineTa: 'கொதிக்க வைத்து காய்ச்சும் கஷாய தயாரிப்புகள்',
    description: 'Coarse herbal blends formulated specifically to be boiled in water and reduced to one-fourth volume, unlocking water-soluble phytochemicals.',
    descriptionTa: 'தண்ணீரில் இட்டு நான்கில் ஒன்றாக சுண்டக்காய்ச்சி உட்கொள்ளும் பாரம்பரிய கஷாய முறை.',
    classicalContext: 'Direct, rapid assimilation of volatile and bio-active water-soluble herbal constituents.',
    classicalContextTa: 'உடலில் உடனடியாக உட்கிரகிக்கப்படும் சக்தி வாய்ந்த மூலிகை நீர்.'
  },
  {
    slug: 'capsules',
    formulation: 'Capsules',
    title: 'Soft Gel Capsules',
    titleTa: 'சாப்ட் ஜெல் கேப்சூல்கள்',
    tagline: 'Multi-processed classical lipid extractions in modern soft gels',
    taglineTa: 'பலமுறை பக்குவப்படுத்தப்பட்ட சாப்ட் ஜெல் வடிவம்',
    description: 'High-potency classical formulations like 101-processed Dhanwantharam, Gandha Thylam, and Sahacharadi 21 encapsulated in tasteless, convenient soft gels.',
    descriptionTa: '101 மற்றும் 21 முறை காய்ச்சப்பட்ட அதிதீவிர தைலங்கள் எளிய கேப்சூல் வடிவில்.',
    classicalContext: 'Enhanced lipid-soluble bioavailability and targeted cellular absorption.',
    classicalContextTa: 'நரம்புகள் மற்றும் எலும்புகளில் ஆழமாக இறங்கி பலனளிக்கும் நவீன வடிவம்.'
  },
  {
    slug: 'thailam',
    formulation: 'Thailam',
    title: 'Thailam & Ennai (Medicated Oils)',
    titleTa: 'தைலம் & எண்ணெய்',
    tagline: 'Slow-cooked botanical medicated oils for deep massage & healing',
    taglineTa: 'பக்குவமாக காய்ச்சப்பட்ட மூலிகை தைலங்கள்',
    description: 'Classical lipid preparations where herbal juices and extracts are slowly heated with unrefined sesame or coconut oil until medicinal Pakam is attained.',
    descriptionTa: 'நல்லெண்ணெய் அல்லது தேங்காய் எண்ணெயில் மூலிகை சாறுகளை சேர்த்து பக்குவமாக காய்ச்சப்படும் தைலங்கள்.',
    classicalContext: 'Enables deep transdermal delivery across dermal layers, joint capsules, and hair roots.',
    classicalContextTa: 'தோல் மற்றும் மூட்டுகளில் ஆழமாக இறங்கி பலனளிக்கும் வெளிப்புற முறை.'
  },
  {
    slug: 'syrup-kashayam',
    formulation: 'Syrup & Kashayam',
    title: 'Syrups, Kashayam & Drops',
    titleTa: 'சிரப், கஷாயம் & சொட்டு மருந்து',
    tagline: 'Ready-to-take natural syrups, elixirs & aromatic inhalants',
    taglineTa: 'உடனடியாக பருகக்கூடிய இயற்கை திரவங்கள்',
    description: 'Non-drowsy cough syrups, ready-to-drink antipyretic kashayams, and volatile inhalation drops designed for instant airway and fever relief.',
    descriptionTa: 'தொண்டை, நெஞ்சு சளி மற்றும் காய்ச்சலுக்கு இதமளிக்கும் எளிய திரவ வடிவங்கள்.',
    classicalContext: 'Immediate soothing of mucosal membranes and olfactory channels.',
    classicalContextTa: 'உடனடியாக பருகக்கூடிய தொண்டைக்கும் சுவாசத்திற்கும் இதமளிக்கும் வடிவம்.'
  },
  {
    slug: 'personal-care',
    formulation: 'Personal Care',
    title: 'Personal Care & Traditional Powders',
    titleTa: 'பாரம்பரிய பராமரிப்பு பொடிகள்',
    tagline: '100% Soap-free herbal bath & scalp cleansing formulations',
    taglineTa: 'தூய மூலிகை குளியல் மற்றும் கூந்தல் பொடிகள்',
    description: 'Nalangu Maavu and Shigakai powder crafted with wild botanicals to protect the skin barrier and nourish hair roots naturally.',
    descriptionTa: 'ரசாயனம் இல்லாத தூய மூலிகை குளியல் மற்றும் கூந்தல் பராமரிப்பு பொடிகள்.',
    classicalContext: 'Zero chemicals, sulfates, or artificial fragrances for daily family hygiene.',
    classicalContextTa: 'தினசரி குடும்ப பயன்பாட்டிற்கு உகந்த இயற்கை பராமரிப்பு.'
  }
];

export const BUNDLES: BundleItem[] = [
  {
    id: 'bundle-01',
    slug: 'pain-and-mobility-collection',
    title: 'Pain & Mobility Dual Action Kit',
    titleTa: 'மூட்டு & வாத நலம் இரட்டை தொகுப்பு',
    subtitle: 'Dual action: Deep topical Rej-Viyan Oil + Internal Sarvanga Vatha Chooranam',
    subtitleTa: 'வெளிப்புற தைல மசாஜ் + உள் சூரணம் இரட்டை பலன்',
    concern: 'joint-mobility',
    productSlugs: ['ruthra-rej-viyan-pain-oil', 'ruthra-sarvanga-vatha-chooranam'],
    regularPrice: 431,
    bundlePrice: 389,
    savings: 42,
    description: 'Combines Ruthra Rej-Viyan Pain Oil (100ml) for topical pain relief with Ruthra Sarvanga Vatha Chooranam (30 Sachets) for internal neuromuscular calming.',
    descriptionTa: 'ரெஜ்-வியான் வலி தைலம் (100 மி.லி) மற்றும் சர்வாங்க வாத சூரணம் (30 பாக்கெட்) அடங்கிய சிறப்பு சலுகை தொகுப்பு.',
    badge: 'Popular Combo'
  },
  {
    id: 'bundle-02',
    slug: 'respiratory-wellness-collection',
    title: 'Complete Respiratory Care Kit',
    titleTa: 'முழுமையான சுவாச பாதுகாப்பு தொகுப்பு',
    subtitle: 'Triple synergy: Non-drowsy Sinocof Syrup + Ramabana Kashayam + Inhalation Drops',
    subtitleTa: 'இருமல் சிரப் + ராமபாண கஷாயம் + ஈஸி ஸ்வாஸ் சொட்டு மருந்து',
    concern: 'respiratory',
    productSlugs: ['ruthra-sinocof-cough-syrup', 'ruthra-ramabana-kashayam', 'ruthra-esy-swas-drops'],
    regularPrice: 534,
    bundlePrice: 479,
    savings: 55,
    description: 'Complete family respiratory defense featuring Sinocof Cough Syrup (100ml), Ramabana Kashayam (200ml), and Esy-swas Drops (50ml).',
    descriptionTa: 'சினோகாஃப் இருமல் சிரப் + ராமபாண கஷாயம் + ஈஸி ஸ்வாஸ் சொட்டு மருந்து அடங்கிய முழுமையான குடும்ப சுவாச தொகுப்பு.',
    badge: 'Seasonal Essential'
  }
];

// Helper Query Functions for High-Performance Scalable Stores (1000+ products ready)
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductsByConcern(concernSlug: string): Product[] {
  return PRODUCTS.filter(p => p.concerns.includes(concernSlug as any));
}

export function getProductsByFormulation(formulationSlug: string): Product[] {
  const normalized = formulationSlug.toLowerCase();
  return PRODUCTS.filter(p => p.formulation.toLowerCase().includes(normalized));
}

export function getFeaturedProducts(limit = 8): Product[] {
  return PRODUCTS.filter(p => p.featured).slice(0, limit);
}
