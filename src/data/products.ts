import { Product, ConcernCategory, FormulationCategory, BundleItem } from '@/types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'Ruthra Megasanthi Chooranam',
    tamilName: 'ருத்ரா மேகசாந்தி சூரணம்',
    slug: 'ruthra-megasanthi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['metabolic-wellness', 'womens-wellness'],
    price: 180,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Traditional Siddha herbal sachet formulation prepared to support internal metabolic balance and Pitta-Kapha harmony.',
    shortDescriptionTa: 'உடல் உள்ளுறுப்பு சமநிலை மற்றும் பித்த-கப சீராக்கத்திற்கு பாரம்பரிய சித்த மருத்துவ முறைப்படி தயாரிக்கப்பட்ட மூலிகை சூரணம்.',
    description: 'Ruthra Megasanthi Chooranam is prepared in strict accordance with classical Siddha pharmacopeia standards. Sourced from native botanicals cultivated in southern Tamil Nadu, each measured sachet offers pure, unadulterated herbal power designed to gently assist the body’s natural elimination of metabolic waste and maintain comfortable tissue equilibrium.',
    descriptionTa: 'ருத்ரா மேகசாந்தி சூரணம் தென் தமிழகத்தில் சேகரிக்கப்பட்ட பாரம்பரிய மூலிகைகளைக் கொண்டு பழமையான சித்த மருத்துவ விதிப்படி தயாரிக்கப்படுகிறது. உடல் கழிவுகளை சீராக வெளியேற்றி, உடல் தாதுக்களை சீராக வைத்திருக்க உதவுகிறது.',
    traditionalRole: 'Traditionally used to soothe burning micturition, excess bodily heat, and internal metabolic dryness.',
    traditionalRoleTa: 'உடல் சூடு, எரிச்சல் மற்றும் உள் தாது சமநிலையின்மைக்கு பாரம்பரியமாக பயன்படுத்தப்படும் சூரணம்.',
    badge: 'Classic Sachet',
    badgeTa: 'பாரம்பரிய முறை',
    image: '/images/products/chooranam-sachets.svg',
    ingredients: [
      { name: 'Nannari (Indian Sarsaparilla)', tamilName: 'நன்னாரி', botanicalName: 'Hemidesmus indicus', role: 'Soothes excess body heat and pacifies pitta', roleTa: 'உடல் சூட்டை தணித்து பித்தத்தை சமப்படுத்துகிறது', amount: '25%' },
      { name: 'Sirupeelai', tamilName: 'சிறுபீளை', botanicalName: 'Aerva lanata', role: 'Traditional urinary tract comfort and cleansing', roleTa: 'சிறுநீரக பாதைக்கு இதமளிக்கும் மூலிகை', amount: '20%' },
      { name: 'Nerunjil (Caltrop)', tamilName: 'நெருஞ்சில்', botanicalName: 'Tribulus terrestris', role: 'Supports kidney function and systemic cooling', roleTa: 'இயற்கை சிறுநீர் பெருக்கி மற்றும் குளிர்ச்சி தரும்', amount: '20%' },
      { name: 'Chandanam (Sandalwood)', tamilName: 'சந்தனம்', botanicalName: 'Santalum album', role: 'Astringent and cooling for mucous membranes', roleTa: 'குளிர்ச்சியும் உள்ளுறுப்பு வலிமையும் தரும்', amount: '15%' },
      { name: 'Vetiver', tamilName: 'வெட்டிவேர்', botanicalName: 'Chrysopogon zizanioides', role: 'Calms internal thermal distress', roleTa: 'அளவுக்கு அதிகமான உஷ்ணத்தை குறைக்கும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Open Sachet', titleTa: 'பாக்கெட்டை பிரிக்கவும்', instruction: 'Take one single-dose sachet (approx. 2-3g).', instructionTa: 'ஒரு முழு பாக்கெட்டை பிரித்து எடுக்கவும்.' },
      { step: '02', title: 'Mix with Carrier', titleTa: 'துணைப்பொருளுடன் கலக்கவும்', instruction: 'Blend into half a glass of warm water, raw honey, or goat milk as advised.', instructionTa: 'அரை டம்ளர் வெதுவெதுப்பான நீர் அல்லது தேனில் கலக்கவும்.' },
      { step: '03', title: 'Consume Consistently', titleTa: 'முறைப்படி அருந்தவும்', instruction: 'Consume twice daily after meals.', instructionTa: 'உணவுக்குப் பின் காலை மற்றும் இரவு அருந்தவும்.' }
    ],
    dosage: {
      amount: '1 Sachet (2g - 3g)',
      frequency: 'Twice daily',
      timing: 'Post-prandial (30 mins after meals)',
      vehicle: 'Warm water or warm milk',
      amountTa: '1 பாக்கெட் (2 - 3 கிராம்)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு 30 நிமிடம் கழித்து',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது பால்'
    },
    safety: {
      pregnancy: 'Consult your Siddha physician prior to use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் உட்கொள்ளும் முன் சித்த மருத்துவரை அணுகவும்.',
      children: 'Not suitable for children below 6 years unless under supervision.',
      childrenTa: '6 வயதுக்குட்பட்ட குழந்தைகளுக்கு மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Keep a 1-hour interval from modern pharmaceuticals.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளி பின்பற்றவும்.',
      precautions: [
        'Contains no artificial colors or added chemical preservatives.',
        'If symptoms persist beyond 14 days, seek qualified practitioner review.',
        'Drink adequate water throughout the day while taking chooranam.'
      ],
      precautionsTa: [
        'செயற்கை நிறங்களோ ரசாயன கலவைகளோ சேர்க்கப்படவில்லை.',
        '14 நாட்களுக்கு மேல் உபாதைகள் தொடர்ந்தால் மருத்துவரை அணுகவும்.',
        'சூரணம் உட்கொள்ளும் காலத்தில் போதுமான அளவு தண்ணீர் குடிக்கவும்.'
      ]
    },
    storage: {
      conditions: 'Store in a cool, dry place away from direct sunlight and moisture.',
      conditionsTa: 'ஈரப்பதமில்லாத, நேரடி சூரிய ஒளி படாத குளிர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'உற்பத்தி தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is this sachet format different from loose powder?',
        questionTa: 'தனித்தூள் பாக்கெட்டின் நன்மை என்ன?',
        answer: 'Pre-portioned sachets prevent atmospheric moisture degradation and ensure exact measurement per dose.',
        answerTa: 'ஒவ்வொரு பாக்கெட்டிலும் சரியான அளவு இருப்பதால் தரம் குறையாமல் துல்லியமாக உட்கொள்ளலாம்.'
      }
    ],
    searchKeywords: ['megasanthi', 'chooranam', 'pitta', 'body heat', 'urine burning', 'metabolic', 'sachet'],
    tamilKeywords: ['மேகசாந்தி', 'சூரணம்', 'உடல் சூடு', 'சிறுநீர் எரிச்சல்', 'பித்தம்', 'பாக்கெட்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-02',
    name: 'Ruthra Madhuradhi Chooranam',
    tamilName: 'ருத்ரா மதுராதி சூரணம்',
    slug: 'ruthra-madhuradhi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['metabolic-wellness'],
    price: 249,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Classical Siddha bitter-astringent botanical blend formulated to support balanced metabolic sugar pathways.',
    shortDescriptionTa: 'சர்க்கரை சத்து சமநிலை மற்றும் வளர்சிதை மாற்றத்திற்கு உதவும் பாரம்பரிய கைப்பு-துவர்ப்பு சூரணம்.',
    description: 'Ruthra Madhuradhi Chooranam brings together revered botanical treasures like Jamun seed, Gymnema (Sirukurinjan), and Amla. Formulated following classical texts, this formulation helps maintain normal carbohydrate digestion and assists natural pancreatic tissue vigor.',
    descriptionTa: 'நாவல் கொட்டை, சிறுகுறிஞ்சான், நெல்லிக்காய் உள்ளிட்ட மூலிகைகளின் பாரம்பரிய சேர்க்கை. சர்க்கரை சமநிலையை பேணவும், செரிமான ஆற்றலை வலுப்படுத்தவும் துணைபுரிகிறது.',
    traditionalRole: 'Traditionally employed in Siddha practice for Madhumegham (metabolic glucose balance) and digestive steadiness.',
    traditionalRoleTa: 'மதுமேகம் மற்றும் செரிமான பலவீனத்திற்கான பாரம்பரிய சித்த மூலிகை தயாரிப்பு.',
    badge: 'Metabolic Care',
    badgeTa: 'வளர்சிதை மாற்றம்',
    image: '/images/products/chooranam-sachets.svg',
    ingredients: [
      { name: 'Sirukurinjan (Gymnema)', tamilName: 'சிறுகுறிஞ்சான்', botanicalName: 'Gymnema sylvestre', role: 'Helps suppress taste of sweet and supports glucose uptake', roleTa: 'இனிப்பு சுவை நாட்டம் குறைத்து சர்க்கரை சமநிலை தரும்', amount: '30%' },
      { name: 'Naval Kottai (Jamun Seed)', tamilName: 'நாவல் விதை', botanicalName: 'Syzygium cumini', role: 'Astringent botanical for carbohydrate metabolism', roleTa: 'கணையத்தை வலுப்படுத்தி இயல்பு நிலையை பேணும்', amount: '25%' },
      { name: 'Nellikkai (Indian Gooseberry)', tamilName: 'நெல்லிக்காய்', botanicalName: 'Phyllanthus emblica', role: 'Rich in natural antioxidants and tissue rejuvenators', roleTa: 'இயற்கை ஆன்டிஆக்ஸிடன்ட் மற்றும் தாது பலம்', amount: '20%' },
      { name: 'Seenthil (Guduchi)', tamilName: 'சீந்தில் கொடி', botanicalName: 'Tinospora cordifolia', role: 'Assists natural detoxification and vitality', roleTa: 'நச்சு நீக்கி நோய் எதிர்ப்பு ஆற்றல் தரும்', amount: '25%' }
    ],
    howToUse: [
      { step: '01', title: 'Open Sachet', titleTa: 'பாக்கெட்டை எடுக்கவும்', instruction: 'Take 1 sachet before morning and evening meals.', instructionTa: 'காலை மற்றும் இரவு உணவுக்கு முன் 1 பாக்கெட் எடுக்கவும்.' },
      { step: '02', title: 'Warm Water Mix', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Stir well in 100ml warm boiled water.', instructionTa: '100 மி.லி வெதுவெதுப்பான நீரில் நன்றாக கலக்கவும்.' },
      { step: '03', title: 'Drink Warm', titleTa: 'சூடாக பருகவும்', instruction: 'Drink 20 minutes before meals.', instructionTa: 'உணவுக்கு 20 நிமிடம் முன்னதாக பருகவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Twice daily',
      timing: 'Pre-prandial (20 minutes before food)',
      vehicle: 'Lukewarm water',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'இருவேளை',
      timingTa: 'உணவுக்கு 20 நிமிடம் முன்',
      vehicleTa: 'வெதுவெதுப்பான நீர்'
    },
    safety: {
      pregnancy: 'Not recommended for pregnant or lactating mothers without clinical consent.',
      pregnancyTa: 'கர்ப்பிணிகள் மருத்துவர் ஆலோசனை இன்றி உட்கொள்ளக் கூடாது.',
      children: 'For adults only.',
      childrenTa: 'பெரியவர்களுக்கு மட்டுமே பரிந்துரைக்கப்படுகிறது.',
      interactions: 'Regularly monitor blood sugar levels if taken alongside conventional anti-diabetic medications.',
      interactionsTa: 'சர்க்கரை மாத்திரைகள் உட்கொள்பவர்கள் சர்க்கரை அளவை தவறாமல் கண்காணிக்கவும்.',
      precautions: [
        'Maintain a balanced, fiber-rich traditional diet.',
        'Do not skip prescribed allopathic medications abruptly.'
      ],
      precautionsTa: [
        'நார்ச்சத்து மிகுந்த பாரம்பரிய உணவை உட்கொள்ளவும்.',
        'மருத்துவரின் வழக்கமான மருந்துகளை தன்னிச்சையாக நிறுத்தக் கூடாது.'
      ]
    },
    storage: {
      conditions: 'Keep in airtight container, protected from heat.',
      conditionsTa: 'காற்று புகாத டப்பாவில் குளிர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can I take this alongside my existing prescription?',
        questionTa: 'பிற மருந்துகளுடன் சேர்த்து சாப்பிடலாமா?',
        answer: 'Yes, but keep a 45-minute gap and monitor your sugar levels responsibly.',
        answerTa: 'ஆம், ஆனால் 45 நிமிட இடைவெளி விட்டு எடுத்துக்கொள்வதுடன் சர்க்கரை அளவை பரிசோதிக்கவும்.'
      }
    ],
    searchKeywords: ['madhuradhi', 'chooranam', 'diabetes', 'sugar', 'glucose', 'sirukurinjan', 'jamun'],
    tamilKeywords: ['மதுராதி', 'சூரணம்', 'சர்க்கரை', 'மதுமேகம்', 'நாவல்', 'சிறுகுறிஞ்சான்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-03',
    name: 'Ruthra Madhura Herbal Powder',
    tamilName: 'ருத்ரா மதுரா மூலிகைப் பொடி',
    slug: 'ruthra-madhura-herbal-powder',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['metabolic-wellness', 'digestive-wellness'],
    price: 360,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Nourishing herbal sachet blend crafted to enhance daily stamina, metabolic vigor, and digestive ease.',
    shortDescriptionTa: 'தினசரி சுறுசுறுப்பு, உடல்திறன் மற்றும் செரிமான நலனை மேம்படுத்தும் பாரம்பரிய மூலிகைப் பொடி.',
    description: 'Formulated with hand-selected roots and seeds, Ruthra Madhura Herbal Powder supports holistic strength and combats mid-day fatigue. Packed with micro-nutritive botanicals that encourage calm digestion and lasting bodily resilience.',
    descriptionTa: 'பாரம்பரிய வேர்கள் மற்றும் விதைகளின் செழுமையான கலவை. உடல் சோர்வை நீக்கி, நீடித்த உற்சாகத்தையும் இயல்பான செரிமானத்தையும் வழங்குகிறது.',
    traditionalRole: 'Invigorating Siddha restorative used for sustained vitality and digestive balance.',
    traditionalRoleTa: 'உடல் புத்துணர்ச்சிக்கும் சோர்வு நீங்கவும் பாரம்பரியமாகப் பயன்படும் சித்த மருந்து.',
    badge: 'Stamina & Vigor',
    badgeTa: 'சுறுசுறுப்பு',
    image: '/images/products/chooranam-sachets.svg',
    ingredients: [
      { name: 'Ashwagandha (Amukkara)', tamilName: 'அமுக்கரா கிழங்கு', botanicalName: 'Withania somnifera', role: 'Restorative adaptogen that grounds nervous fatigue', roleTa: 'நரம்பு பலவீனம் மற்றும் உடல் சோர்வை போக்கும்', amount: '35%' },
      { name: 'Shatavari (Thanneer Vitan)', tamilName: 'தண்ணீர்விட்டான் கிழங்கு', botanicalName: 'Asparagus racemosus', role: 'Nourishes deep tissues and inner vitality', roleTa: 'உடல் பலத்தையும் தாதுக்களையும் பெருக்கும்', amount: '25%' },
      { name: 'Dry Ginger (Sukku)', tamilName: 'சுக்கு', botanicalName: 'Zingiber officinale', role: 'Stimulates digestive fire (Agni) gently', roleTa: 'பசியை தூண்டி செரிமானத்தை முறைப்படுத்தும்', amount: '20%' },
      { name: 'Cardamom (Elam)', tamilName: 'ஏலக்காய்', botanicalName: 'Elettaria cardamomum', role: 'Aromatic carminative and refreshing catalyst', roleTa: 'நறுமணமும் வாயு நீக்கும் பண்பும் கொண்டது', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Open 1 Sachet', titleTa: '1 பாக்கெட் எடுக்கவும்', instruction: 'Pour contents into a cup of warm milk or warm water.', instructionTa: 'ஒரு கோப்பை வெதுவெதுப்பான பால் அல்லது நீரில் கலக்கவும்.' },
      { step: '02', title: 'Mix Thoroughly', titleTa: 'நன்றாக கலக்கவும்', instruction: 'Stir well; honey or jaggery may be added if desired.', instructionTa: 'நன்றாக ஆற்றி பருகவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Take at night 30 minutes before sleep.', instructionTa: 'இரவு தூங்குவதற்கு அரை மணி நேரம் முன் அருந்தவும்.' }
    ],
    dosage: {
      amount: '1 Sachet (3g)',
      frequency: 'Once or twice daily',
      timing: 'Morning or bedtime',
      vehicle: 'Warm milk or warm water',
      amountTa: '1 பாக்கெட் (3 கிராம்)',
      frequencyTa: 'தினமும் 1 அல்லது 2 முறை',
      timingTa: 'காலை அல்லது இரவு தூங்கும் முன்',
      vehicleTa: 'வெதுவெதுப்பான பால் / நீர்'
    },
    safety: {
      pregnancy: 'Safe for nursing mothers; consult doctor during first trimester.',
      pregnancyTa: 'தாய்ப்பால் கொடுப்பவர்கள் எடுத்துக்கொள்ளலாம்; கர்ப்பிணிகள் ஆலோசனை பெறவும்.',
      children: 'Safe for children above 10 years at half dose.',
      childrenTa: '10 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு அரை பாக்கெட் போதுமானது.',
      interactions: 'No known pharmaceutical clashes.',
      interactionsTa: 'பிற மருந்துகளுடன் பாதிப்புகள் இல்லை.',
      precautions: ['Store away from insects and humidity.'],
      precautionsTa: ['ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.']
    },
    storage: {
      conditions: 'Dry, ambient temperature storage.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் பாதுகாக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does this contain added sugars?',
        questionTa: 'இதில் சர்க்கரை சேர்க்கப்பட்டுள்ளதா?',
        answer: 'No. The sweetness comes strictly from natural dried roots like Shatavari.',
        answerTa: 'இல்லை. இதில் இயற்கையான மூலிகைகளின் சுவை மட்டுமே உள்ளது.'
      }
    ],
    searchKeywords: ['madhura', 'powder', 'stamina', 'vitality', 'amukkara', 'energy', 'chooranam'],
    tamilKeywords: ['மதுரா', 'பொடி', 'உடல்பலம்', 'அமுக்கரா', 'உற்சாகம்', 'சூரணம்'],
    inStock: true
  },
  {
    id: 'prod-04',
    name: 'Ruthra Chandraganthi Chooranam',
    tamilName: 'ருத்ரா சந்திரகாந்தி சூரணம்',
    slug: 'ruthra-chandraganthi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['womens-wellness', 'metabolic-wellness'],
    price: 300,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Classical cooling reproductive tonic and tissue revitalizer formulated from prized cooling herbs.',
    shortDescriptionTa: 'உடல் சூட்டை தணித்து, தாது பலத்தை பெருக்கும் உயர்தர பாரம்பரிய குளிர்ச்சி சூரணம்.',
    description: 'Named after the moon for its soothing and cooling attributes, Ruthra Chandraganthi Chooranam is crafted for individuals suffering from excessive systemic heat, night sweating, reproductive exhaustion, and generalized debility.',
    descriptionTa: 'சந்திரனின் குளிர்ச்சியைப் போன்ற அமைதியை உடலுக்கு தரும் சிறப்பு வாய்ந்தது. அதிக உடல் சூடு, சோர்வு மற்றும் தாது பலவீனத்தை போக்க உதவுகிறது.',
    traditionalRole: 'Traditional Siddha Rasayana formula for cooling Pitta heat and nourishing Sukla/Artava tissues.',
    traditionalRoleTa: 'பித்த தணிப்பு மற்றும் உடல் குளிர்ச்சிக்கான உன்னத சித்த ரசாயன மருந்து.',
    badge: 'Cooling Tonic',
    badgeTa: 'குளிர்ச்சி மருந்து',
    image: '/images/products/chooranam-sachets.svg',
    ingredients: [
      { name: 'Kizhangu Seenthil (Tinospora Tuber)', tamilName: 'சீந்தில் கிழங்கு', botanicalName: 'Tinospora cordifolia', role: 'Supreme coolant and tissue strengthener', roleTa: 'அரிய குளிர்ச்சியும் உடலுக்கு பலமும் தரும் கிழங்கு', amount: '30%' },
      { name: 'Thamarai Kizhangu (Lotus Rhizome)', tamilName: 'தாமரை கிழங்கு', botanicalName: 'Nelumbo nucifera', role: 'Calms mind, cardiac rhythm, and reproductive heat', roleTa: 'மன அமைதி மற்றும் தாது குளிர்ச்சி தரும்', amount: '25%' },
      { name: 'Athimathuram (Licorice)', tamilName: 'அதிமதுரம்', botanicalName: 'Glycyrrhiza glabra', role: 'Demulcent and mucosal protector', roleTa: 'குடல் மற்றும் தொண்டை வறட்சியை நீக்கும்', amount: '25%' },
      { name: 'Vilvam (Bael fruit core)', tamilName: 'வில்வ பழ சதை', botanicalName: 'Aegle marmelos', role: 'Internal cooling and gastro-intestinal balance', roleTa: 'குடல் சூட்டை தணித்து செரிமானத்தை சீராக்கும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Dispense Sachet', titleTa: 'பாக்கெட்டை பிரிக்கவும்', instruction: 'Take 1 sachet into a clean glass.', instructionTa: '1 பாக்கெட்டை எடுக்கவும்.' },
      { step: '02', title: 'Mix in Milk or Ghee', titleTa: 'பால் அல்லது நெய்யில் கலக்கவும்', instruction: 'Best mixed in boiled cow milk or half teaspoon pure cow ghee.', instructionTa: 'காய்ச்சிய பசும்பால் அல்லது நெய்யில் கலந்து சாப்பிடவும்.' },
      { step: '03', title: 'Intake', titleTa: 'உட்கொள்ளவும்', instruction: 'Consume twice a day, morning and night.', instructionTa: 'காலை மற்றும் இரவில் தொடர்ந்து உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: '1 Sachet (2-3g)',
      frequency: 'Twice daily',
      timing: 'Post food',
      vehicle: 'Cow milk or warm water',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'இருவேளை',
      timingTa: 'உணவுக்கு பின்',
      vehicleTa: 'பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Safe in second and third trimester under Siddha consultation.',
      pregnancyTa: 'மருத்துவர் வழிகாட்டலில் எடுத்துக்கொள்ளலாம்.',
      children: 'Above 12 years only.',
      childrenTa: '12 வயதுக்கு மேற்பட்டவர்களுக்கு மட்டும்.',
      interactions: 'None documented.',
      interactionsTa: 'முரண்பாடுகள் இல்லை.',
      precautions: ['Avoid sour, excessively spicy foods during the regimen.'],
      precautionsTa: ['அதிக புளிப்பு மற்றும் கார உணவுகளை தவிர்க்கவும்.']
    },
    storage: {
      conditions: 'Store protected from sunlight in ambient temperature.',
      conditionsTa: 'சூரிய வெளிச்சம் படாமல் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Is it helpful for excessive body heat and mouth ulcers?',
        questionTa: 'உடல் சூடு மற்றும் வாய் புண்களுக்கு உதவுமா?',
        answer: 'Yes, traditionally known for cooling Pitta and helping alleviate heat-induced discomfort.',
        answerTa: 'ஆம், உடல் பித்தத்தை தணித்து உஷ்ணத்தால் ஏற்படும் உபாதைகளை குறைக்கும்.'
      }
    ],
    searchKeywords: ['chandraganthi', 'cooling', 'chooranam', 'pitta', 'vitality', 'heat relief'],
    tamilKeywords: ['சந்திரகாந்தி', 'சூரணம்', 'குளிர்ச்சி', 'பித்தம்', 'உடல்சூடு', 'தாதுபலம்'],
    inStock: true
  },
  {
    id: 'prod-05',
    name: 'Ruthra Pirandai Chooranam',
    tamilName: 'ருத்ரா பிரண்டை சூரணம்',
    slug: 'ruthra-pirandai-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['joint-mobility', 'digestive-wellness'],
    price: 315,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Veldt Grape (Cissus quadrangularis) formulation revered for supporting bone mineralization and soothing joint stiffness.',
    shortDescriptionTa: 'எலும்பு உறுதிக்கும் மூட்டு ஆரோக்கியத்திற்கும் செரிமான பசி தீயை தூண்டுவதற்கும் உதவும் பிரண்டை சூரணம்.',
    description: 'Pirandai (known as Asthisamharaka in ancient literature — that which preserves bones) is a cornerstone of southern Siddha bone care. Ruthra Pirandai Chooranam is processed using traditional sun-drying and purified ghee roasting to eliminate throat itching, delivering genuine joint support and digestive relief.',
    descriptionTa: 'எலும்புகளை காக்கும் மூலிகையாக போற்றப்படும் பிரண்டை, சித்த மருத்துவத்தில் மிக முக்கிய இடம் வகிக்கிறது. தொண்டையில் அரிப்பு ஏற்படாத வண்ணம் பாரம்பரிய நெய் வறுவல் முறையில் சுத்தி செய்யப்பட்டு பக்குவமாக தயாரிக்கப்படுகிறது.',
    traditionalRole: 'Traditional bone-strengthening and digestive kindle for joint mobility, fractures, and sluggish metabolism.',
    traditionalRoleTa: 'எலும்பு முறிவு குணமாகவும், மூட்டு வலியை போக்கவும், பசியை தூண்டவும் பாரம்பரியமாக உதவும்.',
    badge: 'Joint & Bone Care',
    badgeTa: 'மூட்டு & எலும்பு நலம்',
    image: '/images/products/chooranam-sachets.svg',
    ingredients: [
      { name: 'Purified Pirandai (Veldt Grape)', tamilName: 'சுத்தி செய்த பிரண்டை', botanicalName: 'Cissus quadrangularis', role: 'Rich in natural ketosteroids and calcium carriers for bone tissue', roleTa: 'இயற்கை கால்சியம் மற்றும் எலும்பு தாதுக்களை உறுதிப்படுத்தும்', amount: '50%' },
      { name: 'Milagu (Black Pepper)', tamilName: 'மிளகு', botanicalName: 'Piper nigrum', role: 'Enhances bio-absorption and regulates vatham', roleTa: 'உறிஞ்சுதலை அதிகரித்து வாதத்தை சமன் செய்யும்', amount: '15%' },
      { name: 'Thippili (Long Pepper)', tamilName: 'திப்பிலி', botanicalName: 'Piper longum', role: 'Promotes bio-availability and metabolic fire', roleTa: 'செரிமானத்தை சீராக்கி மூலிகை ஆற்றலை கூட்டும்', amount: '15%' },
      { name: 'Seeragam (Cumin)', tamilName: 'சீரகம்', botanicalName: 'Cuminum cyminum', role: 'Prevents flatulence and balances digestive tract', roleTa: 'வாயுவை நீக்கி வயிற்று உப்புசத்தை தணிக்கும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Prepare Dose', titleTa: 'அளவை எடுக்கவும்', instruction: 'Empty 1 sachet into a bowl.', instructionTa: '1 பாக்கெட்டை கிண்ணத்தில் கொட்டவும்.' },
      { step: '02', title: 'Mix with Warm Ghee or Hot Rice', titleTa: 'நெய் அல்லது சாதத்தில் கலக்கவும்', instruction: 'Can be mixed with a teaspoon of warm cow ghee, or stirred into hot water.', instructionTa: 'ஒரு ஸ்பூன் நாட்டு மாட்டு நெய்யில் குழைத்து அல்லது வெந்நீரில் பருகவும்.' },
      { step: '03', title: 'Schedule', titleTa: 'நேரம்', instruction: 'Take twice daily, with the first mouthful of food or after meals.', instructionTa: 'உணவின் முதல் கவளத்தில் அல்லது உணவுக்கு பின் எடுக்கவும்.' }
    ],
    dosage: {
      amount: '1 Sachet (approx. 2.5g)',
      frequency: 'Twice daily',
      timing: 'With food or post meals',
      vehicle: 'Cow ghee or warm water',
      amountTa: '1 பாக்கெட் (2.5 கிராம்)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவோடு அல்லது உணவுக்குப் பின்',
      vehicleTa: 'பசும் நெய் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult your doctor before taking during pregnancy.',
      pregnancyTa: 'கர்ப்பிணிகள் மருத்துவரை ஆலோசிக்கவும்.',
      children: 'Suitable for children over 8 years with fractures/sprains.',
      childrenTa: '8 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு மருத்துவர் ஆலோசனைப்படி வழங்கலாம்.',
      interactions: 'No adverse interactions with bone calcium supplements.',
      interactionsTa: 'கால்சியம் மருந்துகளுடன் பாதிப்பில்லை.',
      precautions: ['Follow dosage diligently; properly purified to prevent mucosal itch.'],
      precautionsTa: ['அரிப்பு வராத வண்ணம் சுத்தி செய்யப்பட்டுள்ளது; அளவு தவறாமல் உட்கொள்ளவும்.']
    },
    storage: {
      conditions: 'Sealed dry place; moisture tight.',
      conditionsTa: 'ஈரப்பதம் படாத காற்றுப்புகா இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does this irritate the throat like raw Pirandai?',
        questionTa: 'பச்சை பிரண்டையை போல் தொண்டையில் அரிப்பு ஏற்படுமா?',
        answer: 'No. Ruthra uses classical shodhana (purification) using tamarind and ghee roasting to neutralize calcium oxalate crystals completely.',
        answerTa: 'இல்லை. பழமையான நெய் மற்றும் புளி சுத்தி முறையில் கால்சியம் ஆக்சலேட் முட்களை அகற்றி பாதுகாப்பாக செய்யப்படுகிறது.'
      }
    ],
    searchKeywords: ['pirandai', 'cissus', 'joint pain', 'bone', 'osteo', 'calcium', 'fracture', 'chooranam'],
    tamilKeywords: ['பிரண்டை', 'சூரணம்', 'மூட்டு வலி', 'எலும்பு முறிவு', 'கால்சியம்', 'செரிமானம்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-06',
    name: 'Ruthra Karanthai Chooranam',
    tamilName: 'ருத்ரா கரந்தை சூரணம்',
    slug: 'ruthra-karanthai-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['joint-mobility', 'skin-hair'],
    price: 285,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Traditional single-herb Karanthai (Sphaeranthus indicus) preparation for calming deep-seated joint inflammation and lymphatic clarity.',
    shortDescriptionTa: 'மூட்டுகளில் தங்கும் கழிவுநீரை வெளியேற்றி வாத வலிகளை தீர்க்கும் கொட்டைக்கரந்தை சூரணம்.',
    description: 'Karanthai is praised in classical Agathiyar Siddha literature as a potent purifier of the bloodstream and synovial fluid. Ruthra Karanthai Chooranam assists people experiencing chronic joint stiffness, swelling around ankles and knees, and skin eruptions caused by vitiated Rakta-Kapha.',
    descriptionTa: 'இரத்தத்தை சுத்தி செய்வதற்கும், மூட்டு மூட்டுகளில் தங்கும் நீர்க்கோவையை நீக்குவதற்கும் கொட்டைக்கரந்தை சிறந்த மூலிகையாகும். அகத்தியர் பாடல்களில் இதன் நன்மைகள் விரிவாக கூறப்பட்டுள்ளன.',
    traditionalRole: 'Traditional detoxifier for heavy joints, skin impurities, and swollen limbs.',
    traditionalRoleTa: 'மூட்டு வீக்கம், கை கால் அசதி மற்றும் இரத்த நச்சுக்களை போக்க பாரம்பரியமாக பயன்படுவது.',
    badge: 'Joint Detox',
    badgeTa: 'வாத சமநிலை',
    image: '/images/products/chooranam-sachets.svg',
    ingredients: [
      { name: 'Kottai Karanthai (East Indian Globe Thistle)', tamilName: 'கொட்டைக்கரந்தை', botanicalName: 'Sphaeranthus indicus', role: 'Pacifies vata swelling and flushes metabolic toxins (Ama)', roleTa: 'வாத வீக்கத்தை கரைத்து மூட்டு கழிவுகளை நீக்கும்', amount: '70%' },
      { name: 'Thirikadugu (Three Pungents)', tamilName: 'திரிகடுகம்', botanicalName: 'Zingiber + Piper + Piper', role: 'Catalyst that clears channel obstruction (Srotas)', roleTa: 'இரத்த நாள அடைப்புகளை போக்கி சுறுசுறுப்பை தரும்', amount: '30%' }
    ],
    howToUse: [
      { step: '01', title: 'Open 1 Sachet', titleTa: '1 பாக்கெட் எடுக்கவும்', instruction: 'Take 1 sachet in the morning and night.', instructionTa: 'காலை மற்றும் இரவு 1 பாக்கெட் எடுக்கவும்.' },
      { step: '02', title: 'Boiled Water', titleTa: 'சூடான நீரில் கலக்கவும்', instruction: 'Mix in 150ml of warm water or honey.', instructionTa: '150 மி.லி வெதுவெதுப்பான நீரில் அல்லது தேனில் குழைக்கவும்.' },
      { step: '03', title: 'Consume', titleTa: 'பருகவும்', instruction: 'Drink warm after light food.', instructionTa: 'எளிய உணவுக்குப் பின் வெதுவெதுப்பாக பருகவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Lukewarm water or pure honey',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Contraindicated in pregnancy.',
      pregnancyTa: 'கர்ப்பிணிகள் தவிர்க்க வேண்டும்.',
      children: 'Adults only.',
      childrenTa: 'பெரியவர்களுக்கு மட்டுமே.',
      interactions: 'Maintain 1 hr interval from other medicine.',
      interactionsTa: 'பிற மருந்துகளோடு 1 மணி நேரம் இடைவெளி தேவை.',
      precautions: ['Drink plenty of warm water throughout usage.'],
      precautionsTa: ['பயன்பாட்டின் போது வெதுவெதுப்பான நீர் அருந்தவும்.']
    },
    storage: {
      conditions: 'Moisture-free container in dark cupboard.',
      conditionsTa: 'ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can this be used together with Rej-Viyan Pain Oil?',
        questionTa: 'ரெஜ்-வியான் வலி தைலத்தோடு சேர்த்து பயன்படுத்தலாமா?',
        answer: 'Yes, combining internal Karanthai Chooranam with external Rej-Viyan Oil offers dual internal and topical soothing for joints.',
        answerTa: 'தாராளமாக பயன்படுத்தலாம். உள்ளுக்கு கரந்தை சூரணமும் வெளிப்புறத்திற்கு தைலமும் நல்ல ஆறுதல் தரும்.'
      }
    ],
    searchKeywords: ['karanthai', 'joint swelling', 'chooranam', 'stiffness', 'arthritis', 'vata'],
    tamilKeywords: ['கரந்தை', 'சூரணம்', 'மூட்டு வீக்கம்', 'வாத வலி', 'நீர் கோர்த்தல்'],
    inStock: true
  },
  {
    id: 'prod-07',
    name: 'Ruthra Sugabedhi Chooranam',
    tamilName: 'ருத்ரா சுகபேதி சூரணம்',
    slug: 'ruthra-sugabedhi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['digestive-wellness'],
    price: 276,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Gentle, non-habit forming colon cleansing chooranam that encourages predictable bowel clearance without cramping.',
    shortDescriptionTa: 'வயிற்று பிடிப்பு மற்றும் சிரமமின்றி உடலை இலகுவாக்கும் மென்மையான இயற்கை குடல் சுத்தி சூரணம்.',
    description: 'Siddha medicine establishes bowel cleanliness as the bedrock of all disease prevention ("மலச்சிக்கலே பல சிக்கல்களுக்கு காரணம்"). Ruthra Sugabedhi Chooranam uses mild Senna leaves, Haritaki (Kadukkai), and Fennel to clear stagnant waste gently overnight, resetting digestive rhythm.',
    descriptionTa: 'சித்த மருத்துவத்தின்படி உடலின் நச்சுக்களை நீக்க குடல் சுத்தி அவசியமான ஒன்று. கடுக்காய், நிலவாகை மற்றும் சோம்பு கலந்த இச்சூரணம் எவ்வித வயிற்று வலியும் இன்றி மலத்தை இலகுவாக வெளியேற்றுகிறது.',
    traditionalRole: 'Traditional mild laxative and systemic cleansing formula for occasional constipation and abdominal heaviness.',
    traditionalRoleTa: 'மலச்சிக்கல், வயிற்று உப்பசம் மற்றும் மந்த நிலையை போக்கும் மென்மையான சூரணம்.',
    badge: 'Gentle Cleanse',
    badgeTa: 'குடல் சுத்தி',
    image: '/images/products/chooranam-sachets.svg',
    ingredients: [
      { name: 'Nilavagai (Tinnevelly Senna)', tamilName: 'நிலவாகை', botanicalName: 'Senna alexandrina', role: 'Stimulates normal peristaltic bowel movement', roleTa: 'குடல் இயக்கத்தை சீராக்கி மலம் கழிய உதவும்', amount: '40%' },
      { name: 'Kadukkai (Haritaki)', tamilName: 'கடுக்காய்', botanicalName: 'Terminalia chebula', role: 'Revered Siddha kaya-kalpa herb; tones intestinal walls', roleTa: 'குடலை பலப்படுத்தும் கடுக்காய் காயகல்ப மூலிகை', amount: '30%' },
      { name: 'Sombu (Fennel Seeds)', tamilName: 'சோம்பு', botanicalName: 'Foeniculum vulgare', role: 'Prevents cramping and eases abdominal gas', roleTa: 'வயிற்று பிடிப்பு வராமல் தடுத்து நறுமணம் தரும்', amount: '15%' },
      { name: 'Inji (Dry Ginger)', tamilName: 'இஞ்சி / சுக்கு', botanicalName: 'Zingiber officinale', role: 'Balances gastric fire', roleTa: 'அஜீரணத்தை போக்கும்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Open 1 Sachet', titleTa: '1 பாக்கெட் எடுக்கவும்', instruction: 'Take 1 sachet at night, 1 hour after dinner.', instructionTa: 'இரவு உணவுக்கு 1 மணி நேரம் கழித்து 1 பாக்கெட் எடுக்கவும்.' },
      { step: '02', title: 'Warm Water Mix', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Stir completely into a glass of warm water.', instructionTa: 'ஒரு டம்ளர் சுடுநீரில் கலந்து பருகவும்.' },
      { step: '03', title: 'Morning Relief', titleTa: 'காலை இலகுவான உணர்வு', instruction: 'Experience effortless clearance next morning.', instructionTa: 'மறுநாள் காலையில் வயிறு இலகுவாகும்.' }
    ],
    dosage: {
      amount: '1 Sachet (2-3g)',
      frequency: 'Once daily at bedtime (or as needed 2-3 times a week)',
      timing: 'Bedtime',
      vehicle: 'Warm water',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'இரவில் ஒரு வேளை மட்டும்',
      timingTa: 'இரவு தூங்கும் முன்',
      vehicleTa: 'வெதுவெதுப்பான நீர்'
    },
    safety: {
      pregnancy: 'Contraindicated during pregnancy and severe dehydration.',
      pregnancyTa: 'கர்ப்பிணிகள் உட்கொள்ளக் கூடாது.',
      children: 'Not for infants or toddlers.',
      childrenTa: 'சிறு குழந்தைகளுக்கு ஏற்றதல்ல.',
      interactions: 'Do not take together with antidiarrheal medicines.',
      interactionsTa: 'வயிற்றுப்போக்கு மருந்துகளுடன் சாப்பிடக் கூடாது.',
      precautions: ['Stay hydrated with warm water and tender coconut water the next morning.'],
      precautionsTa: ['மறுநாள் காலை போதுமான நீர் அல்லது இளநீர் அருந்துவது நலம்.']
    },
    storage: {
      conditions: 'Dry air-tight sachet seal; keep closed.',
      conditionsTa: 'ஈரக்காற்று படாதவாறு வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Will this cause stomach cramps?',
        questionTa: 'வயிற்று வலி அல்லது பிடிப்பு ஏற்படுமா?',
        answer: 'Unlike crude senna powders, our inclusion of Fennel and Haritaki ensures smooth evacuation without intense spastic cramping.',
        answerTa: 'இல்லை. சோம்பு மற்றும் கடுக்காய் சேர்க்கப்பட்டுள்ளதால் எவ்வித வயிற்றுப் பிடிப்பும் இன்றி இதமாக மலம் வெளியேறும்.'
      }
    ],
    searchKeywords: ['sugabedhi', 'constipation', 'laxative', 'chooranam', 'digestion', 'senna', 'haritaki'],
    tamilKeywords: ['சுகபேதி', 'சூரணம்', 'மலச்சிக்கல்', 'குடல்சுத்தி', 'கடுக்காய்', 'நிலவாகை'],
    inStock: true
  },
  {
    id: 'prod-08',
    name: 'Ruthra Soodhagathai Udaikkum Kudineer Chooranam',
    tamilName: 'ருத்ரா சூதகத்தை உடைக்கும் குடிநீர் சூரணம்',
    slug: 'ruthra-soodhagathai-udaikkum-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['womens-wellness'],
    price: 200,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical decoction powder formulated to encourage healthy menstrual flow and relieve sluggish uterine stagnation.',
    shortDescriptionTa: 'மாதவிடாய் சுழற்சியை ஒழுங்குபடுத்தவும் கர்ப்பப்பை தேக்கத்தை நீக்கவும் உதவும் பாரம்பரிய குடிநீர் சூரணம்.',
    description: 'A benchmark formulation in Tamil Siddha gynecology. Soodhagam refers to menstrual flow, and "Udaikkum" indicates the traditional role of clearing stagnation and blockages. Made from pure herbs boiled into a fresh decoction, this helps comfort lower back tension and support rhythmic cycles.',
    descriptionTa: 'பெண்களின் மாதவிடாய் சுழற்சியை சீராக்க சித்த மருத்துவத்தில் காலம் காலமாக பயன்படும் குடிநீர். சூதக தேக்கத்தை உடைத்து இரத்த ஓட்டத்தை சீராக்கி இடுப்பு வலிக்கு இதமளிக்கிறது.',
    traditionalRole: 'Traditional Siddha decoction for delayed menses, lower abdominal heaviness, and cycle regularity.',
    traditionalRoleTa: 'தடைபட்ட மாதவிடாய், மாதவிடாய் தாமதம் மற்றும் அடிவயிற்று வலிக்கு பாரம்பரிய தீர்வு.',
    badge: 'Women’s Rhythm',
    badgeTa: 'மாதவிடாய் நலம்',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Kattuvazhai (Aloe & Wild Fern roots)', tamilName: 'காட்டுவாழை', botanicalName: 'Musa paradisiaca sylvestris', role: 'Encourages uterine toning', roleTa: 'கர்ப்பப்பை தசைகளை வலுப்படுத்தும்', amount: '25%' },
      { name: 'Perungayam (Asafoetida)', tamilName: 'பெருங்காயம்', botanicalName: 'Ferula foetida', role: 'Dispels apana vatha stagnation and spasms', roleTa: 'அபான வாதத்தை சீர்செய்து பிடிப்பை போக்கும்', amount: '15%' },
      { name: 'Karboga Arisi (Babchi seeds)', tamilName: 'கார்போக அரிசி', botanicalName: 'Psoralea corylifolia', role: 'Purifies subtle reproductive fluids', roleTa: 'இரத்த ஓட்டத்தை தூண்டி நச்சுக்களை நீக்கும்', amount: '20%' },
      { name: 'Seeragam & Milagu', tamilName: 'சீரகம் மற்றும் மிளகு', botanicalName: 'Cuminum & Piper', role: 'Digestive catalyst and warmth stimulator', roleTa: 'செரிமானம் மற்றும் வெப்ப சமநிலை தரும்', amount: '40%' }
    ],
    howToUse: [
      { step: '01', title: 'Measure Decoction Powder', titleTa: 'குடிநீர் தூளை அளக்கவும்', instruction: 'Take 5g (approx. 1 level tablespoon) of coarse powder.', instructionTa: '5 கிராம் (1 டேபிள் ஸ்பூன்) குடிநீர் தூளை எடுக்கவும்.' },
      { step: '02', title: 'Boil with Water', titleTa: 'தண்ணீரில் கொதிக்க வைக்கவும்', instruction: 'Add to 250ml water; boil on gentle flame until reduced to 60ml.', instructionTa: '250 மி.லி தண்ணீரில் போட்டு 60 மி.லியாக சுண்டும் வரை கொதிக்க வைக்கவும்.' },
      { step: '03', title: 'Filter & Drink Warm', titleTa: 'வடிகட்டி அருந்தவும்', instruction: 'Filter through a clean mesh and drink warm.', instructionTa: 'வடிகட்டி மிதமான சூட்டில் அருந்தவும்.' }
    ],
    dosage: {
      amount: '50ml to 60ml freshly prepared decoction',
      frequency: 'Twice daily for 3-5 days',
      timing: 'Empty stomach (Morning and evening)',
      vehicle: 'Self decoction (Neer)',
      amountTa: '50 - 60 மி.லி கஷாயம்',
      frequencyTa: '3-5 நாட்களுக்கு தினமும் இருவேளை',
      timingTa: 'வெறும் வயிற்றில்',
      vehicleTa: 'குடிநீர் வடிசாறு'
    },
    safety: {
      pregnancy: 'Strictly prohibited during pregnancy.',
      pregnancyTa: 'கர்ப்பிணிகள் எக்காரணம் கொண்டும் உட்கொள்ளக் கூடாது.',
      children: 'Not intended for prepubescent children.',
      childrenTa: 'பருவமடையாத சிறுமிகளுக்கு ஏற்றதல்ல.',
      interactions: 'Consult a Siddha doctor if taking hormonal therapy.',
      interactionsTa: 'ஹார்மோன் மாத்திரைகள் எடுப்பவர்கள் மருத்துவரை அணுகவும்.',
      precautions: ['Always prepare fresh decoction daily; do not store overnight.'],
      precautionsTa: ['தினமும் புதிதாக காய்ச்சி அருந்தவும்; இரவு தயாரித்ததை மறுநாள் குடிக்க வேண்டாம்.']
    },
    storage: {
      conditions: 'Keep in dry air-tight jar.',
      conditionsTa: 'ஈரமில்லாத காற்றுப்புகா டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When should I start taking it in my cycle?',
        questionTa: 'மாதவிடாய் சுழற்சியில் எப்போது எடுக்க வேண்டும்?',
        answer: 'Usually started 3 to 4 days before the expected cycle date under the guidance of a practitioner.',
        answerTa: 'வழக்கமாக எதிர்பார்க்கப்படும் தேதிக்கு 3 முதல் 4 நாட்களுக்கு முன் மருத்துவர் ஆலோசனைப்படி தொடங்கப்படுகிறது.'
      }
    ],
    searchKeywords: ['soodhagam', 'kudineer', 'pcos', 'menstrual', 'periods', 'uterine', 'delayed periods'],
    tamilKeywords: ['சூதகம்', 'குடிநீர்', 'மாதவிடாய்', 'கர்ப்பப்பை', 'சூதகத்தை உடைக்கும்'],
    inStock: true
  },
  {
    id: 'prod-09',
    name: 'Ruthra Manjalnoi Kudineer Chooranam',
    tamilName: 'ருத்ரா மஞ்சள்நோய் குடிநீர் சூரணம்',
    slug: 'ruthra-manjalnoi-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['metabolic-wellness', 'digestive-wellness'],
    price: 200,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Hepatic-support decoction with Keezhanelli to calm excess Pitta heat, cleanse the liver, and support clear skin.',
    shortDescriptionTa: 'கீழாநெல்லி அடங்கிய கல்லீரல் நலம், பித்த தணிப்பு மற்றும் செரிமான புத்துணர்ச்சிக்கான பாரம்பரிய குடிநீர்.',
    description: 'Manjalnoi in Siddha terminology describes hepatic overload where Pitta vitiation tints tissues yellow. Formulated with wild-harvested Keezhanelli (Phyllanthus niruri) and Karisalankanni (Eclipta prostrata), this classical decoction aids liver detox pathways and supports biliary balance.',
    descriptionTa: 'கல்லீரலில் பித்த நீர் அதிகரிப்பதால் ஏற்படும் உபாதைகளை தணிக்க கீழாநெல்லி, கரிசலாங்கண்ணி ஆகிய அரிய மூலிகைகளை கொண்டு தயாரிக்கப்படும் குடிநீர்.',
    traditionalRole: 'Traditional Siddha botanical formulation for liver support, bile regulation, and systemic Pitta pacification.',
    traditionalRoleTa: 'கல்லீரல் பாதுகாப்பு, பித்த சமநிலை மற்றும் செரிமான பலத்திற்கு பாரம்பரியமாக உதவும் கஷாயம்.',
    badge: 'Liver Support',
    badgeTa: 'கல்லீரல் நலம்',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Keezhanelli (Gale of the Wind)', tamilName: 'கீழாநெல்லி', botanicalName: 'Phyllanthus niruri', role: 'Celebrated hepatic protectant and Pitta soothing agent', roleTa: 'கல்லீரலை பாதுகாத்து பித்தத்தை தணிக்கும் முதன்மை மூலிகை', amount: '45%' },
      { name: 'Karisalankanni (False Daisy)', tamilName: 'கரிசலாங்கண்ணி', botanicalName: 'Eclipta prostrata', role: 'Supports liver enzyme balance and tissue clarity', roleTa: 'கல்லீரல் செல்களை புதுப்பிக்கும் தன்மை கொண்டது', amount: '25%' },
      { name: 'Seeragam (Cumin)', tamilName: 'சீரகம்', botanicalName: 'Cuminum cyminum', role: 'Calms internal digestion', roleTa: 'அகத்தை சீர் செய்யும் சீரகம்', amount: '15%' },
      { name: 'Kandankathiri', tamilName: 'கண்டங்கத்திரி', botanicalName: 'Solanum surattense', role: 'Aids metabolic waste transport', roleTa: 'நச்சுக்களை அகற்றும் துணை மூலிகை', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Decoction', titleTa: 'கஷாயம் காய்ச்சவும்', instruction: 'Boil 5g of coarse powder with 200ml water.', instructionTa: '5 கிராம் தூளை 200 மி.லி தண்ணீரில் போடவும்.' },
      { step: '02', title: 'Reduce to 1/4th', titleTa: 'நான்கில் ஒன்றாக சுண்ட வைக்கவும்', instruction: 'Simmer until 50ml remains.', instructionTa: '50 மி.லி ஆகும் வரை மிதமான தீயில் சுண்ட வைக்கவும்.' },
      { step: '03', title: 'Filter', titleTa: 'வடிகட்டி குடிக்கவும்', instruction: 'Strain and consume warm on empty stomach.', instructionTa: 'வடிகட்டி காலை வெறும் வயிற்றில் குடிக்கவும்.' }
    ],
    dosage: {
      amount: '50ml decoction',
      frequency: 'Twice daily',
      timing: 'Morning & evening on empty stomach',
      vehicle: 'Warm decoction',
      amountTa: '50 மி.லி குடிநீர்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை & மாலை வெறும் வயிற்றில்',
      vehicleTa: 'கஷாய வடிசாறு'
    },
    safety: {
      pregnancy: 'Use only on clinical recommendation during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனை அவசியம்.',
      children: 'Above 5 years: 20ml dose.',
      childrenTa: '5 வயதுக்கு மேல்: 20 மி.லி அளவு.',
      interactions: 'No known drug counter-indications.',
      interactionsTa: 'பிற மருந்துகளுடன் பாதிப்பில்லை.',
      precautions: ['Avoid oily, deep-fried foods and alcohol during the decoction course.'],
      precautionsTa: ['எண்ணெய் பலகாரங்கள் மற்றும் அசைவ உணவுகளை குறைப்பது நலம்.']
    },
    storage: {
      conditions: 'Dry storage, protect from humidity.',
      conditionsTa: 'ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does this help with appetite loss caused by liver sluggishness?',
        questionTa: 'கல்லீரல் மந்தத்தால் ஏற்படும் பசியின்மைக்கு உதவுமா?',
        answer: 'Yes, Keezhanelli and Cumin naturally support healthy bile flow and revitalize normal digestive appetite.',
        answerTa: 'ஆம், பித்த ஓட்டத்தை சீர்செய்து பசியின்மையை போக்க உதவுகிறது.'
      }
    ],
    searchKeywords: ['manjalnoi', 'kudineer', 'liver', 'keezhanelli', 'jaundice', 'pitta', 'detox'],
    tamilKeywords: ['மஞ்சள்நோய்', 'குடிநீர்', 'கீழாநெல்லி', 'கல்லீரல்', 'பித்தம்', 'கரிசலாங்கண்ணி'],
    inStock: true
  },
  {
    id: 'prod-10',
    name: 'Ruthra Pidangunaari Kudineer Chooranam',
    tamilName: 'ருத்ரா பிடங்குநாறி குடிநீர் சூரணம்',
    slug: 'ruthra-pidangunaari-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['respiratory', 'joint-mobility'],
    price: 240,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Rare traditional decoction crafted with Pidangunaari herb to alleviate chronic respiratory phlegm and chest discomfort.',
    shortDescriptionTa: 'நெஞ்சு சளி, இருமல் மற்றும் மூச்சுத்திணறலை தணிக்க உதவும் அரிய பிடங்குநாறி குடிநீர்.',
    description: 'Pidangunaari is an ancient, revered southern herb documented for clearing deep phlegm (Iyam) and relieving spasmodic bronchial sensitivity. Carefully crushed into a coarse decoction form to preserve active aromatic phytochemicals.',
    descriptionTa: 'நெஞ்சில் கட்டியிருக்கும் கபத்தை இளக்கி வெளியேற்றவும், சுவாசப் பாதையை எளிதாக்கவும் உதவும் அரிய பிடங்குநாறி மூலிகை கொண்டு பாரம்பரிய முறையில் தயாரிக்கப்படும் குடிநீர்.',
    traditionalRole: 'Traditional Siddha expectorant and Kapha decongestant for chest tightness and wheezing.',
    traditionalRoleTa: 'மார்பு சளி, இளைப்பு மற்றும் கப உபாதைகளுக்கான பாரம்பரிய குடிநீர்.',
    badge: 'Deep Bronchial Care',
    badgeTa: 'சுவாச நலம்',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Pidangunaari (Clerodendrum inerme)', tamilName: 'பிடங்குநாறி', botanicalName: 'Volkameria inermis', role: 'Clears thick mucus and calms bronchial spasms', roleTa: 'அடர்ந்த கபத்தை இளக்கி சுவாசத்தை எளிதாக்கும்', amount: '50%' },
      { name: 'Adathodai (Malabar Nut)', tamilName: 'ஆடாதோடை', botanicalName: 'Justicia adhatoda', role: 'Renowned bronchodilator in Siddha medicine', roleTa: 'சுவாச நாளங்களை விரிவுபடுத்தி இருமலை தணிக்கும்', amount: '25%' },
      { name: 'Thippili (Long Pepper)', tamilName: 'திப்பிலி', botanicalName: 'Piper longum', role: 'Warm spice that dispels Kapha chill', roleTa: 'நுரையீரல் சூட்டை அதிகரித்து சளியை கரைக்கும்', amount: '25%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Decoction', titleTa: 'கஷாயம் கொதிக்க வைக்கவும்', instruction: 'Take 5g powder, add 240ml of water.', instructionTa: '5 கிராம் பொடியை 240 மி.லி தண்ணீரில் போடவும்.' },
      { step: '02', title: 'Reduce to 60ml', titleTa: '60 மி.லியாக வற்ற வைக்கவும்', instruction: 'Boil until reduced to approximately 60ml.', instructionTa: '60 மி.லியாக சுண்டும் வரை கொதிக்க வைக்கவும்.' },
      { step: '03', title: 'Honey Addition', titleTa: 'தேன் சேர்க்கலாம்', instruction: 'Strain, let cool slightly, add a drop of pure honey if desired, and drink warm.', instructionTa: 'வடிகட்டி ஆறிய பின் சிறிது தேன் கலந்து பருகலாம்.' }
    ],
    dosage: {
      amount: '50-60ml decoction',
      frequency: 'Twice daily',
      timing: 'After food',
      vehicle: 'Warm decoction with optional drop of honey',
      amountTa: '50 - 60 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'மிதமான சூட்டில் சிறிது தேனுடன்'
    },
    safety: {
      pregnancy: 'Use under practitioner guidance.',
      pregnancyTa: 'மருத்துவர் மேற்பார்வையில் எடுக்கவும்.',
      children: 'Above 7 years at half dosage.',
      childrenTa: '7 வயதுக்கு மேல் பாதி அளவு.',
      interactions: 'Compatible with standard steam inhalation regimens.',
      interactionsTa: 'ஆவி பிடித்தலோடு சேர்த்து பயன்படுத்தலாம்.',
      precautions: ['Do not consume cold beverages while on this regimen.'],
      precautionsTa: ['குளிர்ந்த நீர் மற்றும் குளிர்பானங்களை தவிர்க்கவும்.']
    },
    storage: {
      conditions: 'Keep tightly sealed in a dry shelf.',
      conditionsTa: 'நன்றாக மூடி உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Is this effective during seasonal weather changes?',
        questionTa: 'பருவமழை கால சளிக்கு இது உதவுமா?',
        answer: 'Yes, it is traditionally taken during monsoon and seasonal shifts to keep airways clear of phlegm.',
        answerTa: 'ஆம், மழை மற்றும் பனி காலங்களில் சளி தொல்லையிலிருந்து விடுபட பாரம்பரியமாக அருந்தப்படுகிறது.'
      }
    ],
    searchKeywords: ['pidangunaari', 'kudineer', 'cough', 'phlegm', 'respiratory', 'wheezing', 'adathodai'],
    tamilKeywords: ['பிடங்குநாறி', 'குடிநீர்', 'சளி', 'இருமல்', 'ஆடாதோடை', 'திப்பிலி'],
    inStock: true
  },
  {
    id: 'prod-11',
    name: 'Ruthra Nochi Kudineer Chooranam',
    tamilName: 'ருத்ரா நொச்சி குடிநீர் சூரணம்',
    slug: 'ruthra-nochi-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['respiratory', 'joint-mobility'],
    price: 240,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Time-honored Vitex negundo decoction for sinus congestion, tension headaches, and seasonal respiratory heaviness.',
    shortDescriptionTa: 'சைனஸ் தலைபாரம், மூக்கடைப்பு மற்றும் தசை பிடிப்பை போக்கும் பாரம்பரிய நொச்சி குடிநீர்.',
    description: 'Nochi (Vitex negundo) is one of South India’s most celebrated botanical protectors against Vata-Kapha vitiation. Ruthra Nochi Kudineer combines shade-dried Nochi leaves with complementary spices to encourage nasal ventilation and soothe pounding sinus pressure.',
    descriptionTa: 'நொச்சி இலை தலைபாரம், சளி மற்றும் மூட்டு வலிகளுக்கு சிறந்த தீர்வாக சித்த மருத்துவத்தில் போற்றப்படுகிறது. நிழலில் உலர்த்திய நொச்சி இலைகளுடன் மூலிகைகள் சேர்த்து நேர்த்தியாக தயாரிக்கப்படுகிறது.',
    traditionalRole: 'Traditional remedy for Sinusitis, Peenisam (nasal blockage), and Vatha aches.',
    traditionalRoleTa: 'சைனஸ், தலைவலி, சளி மற்றும் வாத அசதிக்கு பாரம்பரிய நிவாரணம்.',
    badge: 'Sinus & Head Ease',
    badgeTa: 'சைனஸ் நிவாரணம்',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Karunochi & Ven-nochi (Vitex negundo leaves)', tamilName: 'கருநொச்சி & வெண்ணொச்சி', botanicalName: 'Vitex negundo', role: 'Clears sinuses, relieves neuralgic headache, dispels cold', roleTa: 'சைனஸ் சளியை வெளியேற்றி தலைவலியை போக்கும்', amount: '50%' },
      { name: 'Chitharathai (Lesser Galangal)', tamilName: 'சித்தரத்தை', botanicalName: 'Alpinia officinarum', role: 'Warm aromatic expectorant for stubborn throat irritation', roleTa: 'தொண்டை கரகரப்பை நீக்கி நெஞ்சை இலகுவாக்கும்', amount: '20%' },
      { name: 'Sukku (Dry Ginger)', tamilName: 'சுக்கு', botanicalName: 'Zingiber officinale', role: 'Relieves congestion and fires digestive energy', roleTa: 'செரிமானத்தை கூட்டி சளியை கரைக்கும்', amount: '15%' },
      { name: 'Kandankathiri', tamilName: 'கண்டங்கத்திரி', botanicalName: 'Solanum surattense', role: 'Respiratory bronchial comfort', roleTa: 'சுவாசத்தை சீராக்கும் மூலிகை', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Decoction', titleTa: 'கஷாயம் காய்ச்சவும்', instruction: 'Boil 5g (1 tablespoon) in 250ml water.', instructionTa: '5 கிராம் தூளை 250 மி.லி தண்ணீரில் போடவும்.' },
      { step: '02', title: 'Reduce by Half', titleTa: 'பாதியாக சுண்ட வைக்கவும்', instruction: 'Simmer down to 60-70ml.', instructionTa: '60-70 மி.லியாக சுண்டும் வரை கொதிக்க வைக்கவும்.' },
      { step: '03', title: 'Drink Warm', titleTa: 'சூடாக அருந்தவும்', instruction: 'Drink warm twice daily. Steam can also be inhaled during boiling.', instructionTa: 'வடிகட்டி மிதமான சூட்டில் பருகவும். கொதிக்கும் போது வரும் நீராவியை முகத்தில் பிடிக்கலாம்.' }
    ],
    dosage: {
      amount: '50-60ml',
      frequency: 'Twice daily',
      timing: 'Post meals or during peak congestion',
      vehicle: 'Warm decoction',
      amountTa: '50 - 60 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'மிதமான சூடான குடிநீர்'
    },
    safety: {
      pregnancy: 'Consult your Siddha doctor before taking internally.',
      pregnancyTa: 'கர்ப்பிணிகள் மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Safe above 5 years in smaller portions (25ml).',
      childrenTa: '5 வயதுக்கு மேல் 25 மி.லி வரை கொடுக்கலாம்.',
      interactions: 'Can be complemented with steam inhalation with drops.',
      interactionsTa: 'ஆவி பிடித்தலுடன் சேர்த்து உபயோகிக்கலாம்.',
      precautions: ['Do not expose to sudden cold drafts right after drinking.'],
      precautionsTa: ['குடித்த உடனே குளிர்ந்த காற்று படுவதை தவிர்க்கவும்.']
    },
    storage: {
      conditions: 'Dry storage, tightly closed jar.',
      conditionsTa: 'காற்று புகாத டப்பாவில் பாதுகாக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can the steam from this decoction also be used for inhalation?',
        questionTa: 'கொதிக்கும் நீராவியை முகத்தில் பிடிக்கலாமா?',
        answer: 'Yes! Inhaling the herbal steam while the decoction simmers provides instant relief to blocked sinuses.',
        answerTa: 'நிச்சயமாக! கொதிக்கும் போது வரும் நறுமண புகையை ஆவி பிடிப்பது மூக்கடைப்பை உடனடியாக திறக்கும்.'
      }
    ],
    searchKeywords: ['nochi', 'kudineer', 'sinus', 'headache', 'cold', 'vitex', 'congestion'],
    tamilKeywords: ['நொச்சி', 'குடிநீர்', 'சைனஸ்', 'தலைபாரம்', 'மூக்கடைப்பு', 'சுக்கு'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-12',
    name: 'Ruthra Vatha Sura Kudineer Chooranam',
    tamilName: 'ருத்ரா வாதசுர குடிநீர் சூரணம்',
    slug: 'ruthra-vatha-sura-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['respiratory', 'joint-mobility'],
    price: 240,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Potent classical decoction for seasonal chills, body aches, shivering, and temperature fluctuations.',
    shortDescriptionTa: 'பருவகால காய்ச்சல், உடல் வலி, நடுக்கம் மற்றும் அசதியை போக்கும் பாரம்பரிய வாதசுர குடிநீர்.',
    description: 'Vatha Suram in Siddha terminology describes seasonal fevers characterized by severe musculoskeletal soreness, shivering, and fatigue. Ruthra Vatha Sura Kudineer contains a synergized blend of pungent and bitter botanicals that induce healthy diaphoresis (gentle sweating), lowering thermal imbalance.',
    descriptionTa: 'உடல் வலிகளோடு கூடிய காய்ச்சல் மற்றும் சளி தொல்லைக்கு சித்த மருத்துவத்தில் சொல்லப்பட்டுள்ள மிகச்சிறந்த குடிநீர். உடலின் வெப்பத்தை சீராக்கி புத்துணர்ச்சியை தரும்.',
    traditionalRole: 'Classical antipyretic and analgesic herbal decoction for seasonal viral discomforts.',
    traditionalRoleTa: 'காய்ச்சல், குளிர் நடுக்கம் மற்றும் தசை வலிகளுக்கான பாரம்பரிய சித்த மருந்து.',
    badge: 'Seasonal Defense',
    badgeTa: 'காய்ச்சல் நிவாரணம்',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Nilavembu (Kalmegh)', tamilName: 'நிலவேம்பு', botanicalName: 'Andrographis paniculata', role: 'Revered bitter tonic that resets febrile thermal spikes', roleTa: 'காய்ச்சலை தணித்து நோய் எதிர்ப்பு ஆற்றல் தரும் கசப்பு மூலிகை', amount: '35%' },
      { name: 'Vetiver', tamilName: 'வெட்டிவேர்', botanicalName: 'Chrysopogon zizanioides', role: 'Soothes internal burning and cools blood tissue', roleTa: 'உள் உஷ்ணத்தை குறைத்து உடலுக்கு அமைதி தரும்', amount: '20%' },
      { name: 'Koraikizhangu (Nut Grass)', tamilName: 'கோரைக்கிழங்கு', botanicalName: 'Cyperus rotundus', role: 'Soothes headache and aids gastrointestinal balance', roleTa: 'தலைவலியை போக்கி காய்ச்சல் தாகத்தை தணிக்கும்', amount: '25%' },
      { name: 'Santhanam (White Sandalwood)', tamilName: 'வெள்ளை சந்தனம்', botanicalName: 'Santalum album', role: 'Calms inflammatory heat', roleTa: 'அளவுக்கு அதிகமான உஷ்ணத்தை தணிக்கும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Decoction', titleTa: 'கஷாயம் தயாரிக்கவும்', instruction: 'Add 5g of powder into 250ml water.', instructionTa: '5 கிராம் பொடியை 250 மி.லி தண்ணீரில் போடவும்.' },
      { step: '02', title: 'Reduce to 60ml', titleTa: '60 மி.லியாக சுண்ட வைக்கவும்', instruction: 'Simmer on medium flame until 60ml remains.', instructionTa: '60 மி.லியாக சுண்டும் வரை காய்ச்சவும்.' },
      { step: '03', title: 'Drink Warm', titleTa: 'சூடாக குடிக்கவும்', instruction: 'Filter and drink warm twice daily.', instructionTa: 'வடிகட்டி காலை மற்றும் மாலை குடிக்கவும்.' }
    ],
    dosage: {
      amount: '50-60ml',
      frequency: '2 to 3 times daily during fever episodes',
      timing: 'After food',
      vehicle: 'Warm filtered decoction',
      amountTa: '50 - 60 மி.லி',
      frequencyTa: 'காய்ச்சலின் போது தினமும் 2-3 வேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'மிதமான சூட்டில்'
    },
    safety: {
      pregnancy: 'Seek physician guidance during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Above 3 years (15ml - 20ml dose).',
      childrenTa: '3 வயதுக்கு மேல் 15-20 மி.லி.',
      interactions: 'Can be safely combined with hydration therapies.',
      interactionsTa: 'நீர் ஆகாரங்களோடு சேர்த்து பருகலாம்.',
      precautions: ['If fever persists beyond 3 days, consult a qualified medical doctor immediately.'],
      precautionsTa: ['காய்ச்சல் 3 நாட்களுக்கு மேல் நீடித்தால் உடனே மருத்துவரை அணுகவும்.']
    },
    storage: {
      conditions: 'Store dry in ambient room temperature.',
      conditionsTa: 'ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is this different from Nilavembu Kudineer?',
        questionTa: 'நிலவேம்பு குடிநீரிலிருந்து இது எவ்வாறு வேறுபடுகிறது?',
        answer: 'Vatha Sura Kudineer is specifically formulated for fevers accompanied by pronounced body ache, joint pain, and shivering.',
        answerTa: 'உடல் தசை வலி மற்றும் நடுக்கத்தோடு கூடிய காய்ச்சலுக்கு இது பிரத்யேகமாக உதவும்.'
      }
    ],
    searchKeywords: ['vatha sura', 'kudineer', 'fever', 'chills', 'body ache', 'nilavembu', 'aches'],
    tamilKeywords: ['வாதசுர', 'குடிநீர்', 'காய்ச்சல்', 'உடல்வலி', 'நிலவேம்பு', 'அசதி'],
    inStock: true
  },
  {
    id: 'prod-13',
    name: 'Ruthra Kalladaippu Kudineer Chooranam',
    tamilName: 'ருத்ரா கல்லடைப்பு குடிநீர் சூரணம்',
    slug: 'ruthra-kalladaippu-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['metabolic-wellness'],
    price: 220,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Traditional lithotriptic and diuretic decoction for kidney stones, flank discomfort, and smooth urinary passage.',
    shortDescriptionTa: 'சிறுநீரக கல் அடைப்பு, அடிவயிற்று வலி மற்றும் சிறுநீர் எரிச்சலை நீக்கும் பாரம்பரிய குடிநீர்.',
    description: 'Kalladaippu in Tamil means "stone obstruction." This classical formulation relies on stone-dissolving herbs like Sirupeelai (Aerva lanata) and Nerunjil (Tribulus) to promote gentle diuresis, cleanse urinary sediments, and ease painful spasms in the renal tract.',
    descriptionTa: 'சிறுநீரக பாதையில் படியும் உப்புகளை கரைக்கவும், கல் அடைப்பால் ஏற்படும் கடுமையான இடுப்பு வலியை தணிக்கவும் சிறுபீளை, நெருஞ்சில் கொண்டு தயாரிக்கப்படும் சித்த குடிநீர்.',
    traditionalRole: 'Traditional Siddha botanical decoction for renal gravel, dysuria, and urinary crystalline sediment.',
    traditionalRoleTa: 'சிறுநீரக கல், சிறுநீர் எரிச்சல் மற்றும் சிறுநீர் தாரை அடைப்புக்கு பாரம்பரிய மருந்து.',
    badge: 'Urinary Comfort',
    badgeTa: 'சிறுநீரக நலம்',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Sirupeelai (Mountain Knotgrass)', tamilName: 'சிறுபீளை', botanicalName: 'Aerva lanata', role: 'Celebrated lithontriptic botanical that softens renal gravel', roleTa: 'சிறுநீரக கற்களை கரைக்கும் முதன்மை மூலிகை', amount: '40%' },
      { name: 'Yaanai Nerunjil (Greater Caltrop)', tamilName: 'யானை நெருஞ்சில்', botanicalName: 'Pedalium murex', role: 'Soothes burning sensation and promotes urine flow', roleTa: 'சிறுநீர் பெருக்கி மற்றும் எரிச்சலை தணிக்கும்', amount: '25%' },
      { name: 'Nannari (Sarsaparilla)', tamilName: 'நன்னாரி', botanicalName: 'Hemidesmus indicus', role: 'Cooling agent preventing inflammation of urinary tract', roleTa: 'சிறுநீரக பாதையில் வீக்கம் ஏற்படாமல் தடுக்கும்', amount: '20%' },
      { name: 'Vellarividhai (Cucumber seeds)', tamilName: 'வெள்ளரி விதை', botanicalName: 'Cucumis sativus', role: 'Natural soothing diuretic', roleTa: 'சிறுநீரை எளிதாக பிரிய வைக்கும்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Decoction', titleTa: 'கஷாயம் காய்ச்சவும்', instruction: 'Take 5g powder with 300ml fresh water.', instructionTa: '5 கிராம் பொடியை 300 மி.லி தண்ணீரில் போடவும்.' },
      { step: '02', title: 'Simmer Down', titleTa: 'சுண்ட வைக்கவும்', instruction: 'Boil until 75ml remains.', instructionTa: '75 மி.லியாக சுண்டும் வரை கொதிக்க வைக்கவும்.' },
      { step: '03', title: 'Drink & Hydrate', titleTa: 'குடித்து நீர் அருந்தவும்', instruction: 'Drink warm, followed by 2-3 glasses of water throughout the morning.', instructionTa: 'காலை வெறும் வயிற்றில் குடித்துவிட்டு, பகலில் அதிக தண்ணீர் குடிக்கவும்.' }
    ],
    dosage: {
      amount: '60-75ml decoction',
      frequency: 'Twice daily',
      timing: 'Empty stomach (Morning & evening)',
      vehicle: 'Freshly strained warm decoction',
      amountTa: '60 - 75 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'வெறும் வயிற்றில்',
      vehicleTa: 'மிதமான சூட்டில்'
    },
    safety: {
      pregnancy: 'Seek expert consultation before using in pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனையோடு மட்டுமே உட்கொள்ள வேண்டும்.',
      children: 'Above 10 years only.',
      childrenTa: '10 வயதுக்கு மேற்பட்டவர்களுக்கு மட்டும்.',
      interactions: 'Ensure sufficient water consumption during usage.',
      interactionsTa: 'உட்கொள்ளும் போது போதுமான தண்ணீர் குடிப்பதை உறுதி செய்யவும்.',
      precautions: ['If acute severe hematuria or severe pain occurs, seek immediate emergency hospital review.'],
      precautionsTa: ['சிறுநீரில் இரத்தம் அல்லது கடுமையான வலி இருந்தால் உடனடியாக மருத்துவமனை செல்லவும்.']
    },
    storage: {
      conditions: 'Dry storage, airtight.',
      conditionsTa: 'ஈரக்காற்று படாதவாறு வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How much water should I drink while taking this?',
        questionTa: 'இதை எடுக்கும் போது எவ்வளவு தண்ணீர் குடிக்க வேண்டும்?',
        answer: 'Drink at least 2.5 to 3 liters of water or barley water daily to assist natural flushing of gravel.',
        answerTa: 'கற்கள் இலகுவாக வெளியேற தினமும் 2.5 முதல் 3 லிட்டர் தண்ணீர் அல்லது பார்லி நீர் குடிக்கவும்.'
      }
    ],
    searchKeywords: ['kalladaippu', 'kidney stone', 'kudineer', 'urinary', 'sirupeelai', 'renal', 'gravel'],
    tamilKeywords: ['கல்லடைப்பு', 'குடிநீர்', 'சிறுநீரகக்கல்', 'சிறுபீளை', 'நெருஞ்சில்', 'சிறுநீர் எரிச்சல்'],
    inStock: true
  },
  {
    id: 'prod-14',
    name: 'Ruthra Rej-Viyan Pain Oil',
    tamilName: 'ருத்ரா ரெஜ்-வியான் வலி தைலம்',
    slug: 'ruthra-rej-viyan-pain-oil',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['joint-mobility'],
    price: 200,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Deep-penetrating Siddha herbal massage thailam formulated with sesame oil to soothe aching joints, neck stiffness, and sprains.',
    shortDescriptionTa: 'மூட்டு வலி, இடுப்பு பிடிப்பு, கழுத்து வலி மற்றும் தசை பிடிப்பை போக்கும் பாரம்பரிய மூலிகை தைலம்.',
    description: 'Slow-cooked over mild wood fire using cold-pressed sesame oil (Nallennai), Ruthra Rej-Viyan Pain Oil blends powerful anti-inflammatory botanicals like Mudakkathan (Balloon Vine), Vadhanaarayanan, and Karpooram. It permeates deep into ligaments and muscular fibers, improving joint mobility and soothing morning stiffness.',
    descriptionTa: 'செக்கில் ஆட்டிய நல்லெண்ணெயில் முடக்கத்தான், வாதநாராயணன், கற்பூரம் உள்ளிட்ட வாதத்தை போக்கும் மூலிகைகளை இட்டு பாரம்பரிய தைல பக்குவத்தில் காய்ச்சி வடிக்கப்படுகிறது. மூட்டுகளில் ஆழமாக இறங்கி வலியை போக்குகிறது.',
    traditionalRole: 'Traditional external thailam for Sandhivatham (joint arthritis), sprains, lower back ache, and sports stiffness.',
    traditionalRoleTa: 'மூட்டு வலி, சுளுக்கு, இடுப்பு பிடிப்பு மற்றும் வாத உபாதைகளுக்கு வெளிப்புறமாக பூசும் சித்த தைலம்.',
    badge: 'Topical Relief',
    badgeTa: 'வெளிப்புற பூச்சு',
    image: '/images/products/thailam-bottle.svg',
    ingredients: [
      { name: 'Mudakkathan (Balloon Vine)', tamilName: 'முடக்கத்தான்', botanicalName: 'Cardiospermum halicacabum', role: 'Dissolves uric acid crystals and restores joint lubrication', roleTa: 'மூட்டுகளில் தங்கும் யூரிக் அமில உப்புகளை நீக்கி நெகிழ்வுத்தன்மை தரும்', amount: '25%' },
      { name: 'Vadhanaarayanan', tamilName: 'வாதநாராயணன்', botanicalName: 'Delonix elata', role: 'Calms acute neuropathic & muscular vata aches', roleTa: 'நரம்பு மற்றும் தசை வாத வலிகளை போக்கும் முதன்மை இலை', amount: '20%' },
      { name: 'Nochi Leaves', tamilName: 'நொச்சி இலை', botanicalName: 'Vitex negundo', role: 'Relieves localized tissue swelling', roleTa: 'வீக்கம் மற்றும் பாரத்தை கரைக்கும்', amount: '20%' },
      { name: 'Cold-pressed Sesame Oil (Nallennai)', tamilName: 'செக்கு நல்லெண்ணெய்', botanicalName: 'Sesamum indicum oil', role: 'Classical warm lipid carrier for deep tissue penetration', roleTa: 'மூலிகை சத்துக்களை ஆழமாக எடுத்துச் செல்லும் தையில ஆதாரம்', amount: '35%' }
    ],
    howToUse: [
      { step: '01', title: 'Take Desired Quantity', titleTa: 'தேவையான அளவு எடுக்கவும்', instruction: 'Pour 5-10ml into palms or a small bowl.', instructionTa: '5-10 மி.லி தைலத்தை உள்ளங்கையில் எடுக்கவும்.' },
      { step: '02', title: 'Warm Gently', titleTa: 'லேசாக சூடாக்கவும்', instruction: 'Optional: warm the oil slightly for deeper soothing action.', instructionTa: 'லேசாக வெதுவெதுப்பாக்கினால் ஆழமாக பலன் தரும்.' },
      { step: '03', title: 'Gentle Massage', titleTa: 'மெதுவாக தடவவும்', instruction: 'Massage gently over affected joint in circular motions; do not apply excessive pressure.', instructionTa: 'வலி உள்ள இடத்தில் வட்ட வடிவில் மெதுவாக தேய்க்கவும்; அழுத்தி தேய்க்க வேண்டாம்.' },
      { step: '04', title: 'Fomentation', titleTa: 'ஒத்தடம்', instruction: 'Apply hot water bag or warm cloth after 30 minutes for enhanced relief.', instructionTa: 'அரை மணி நேரம் கழித்து வெந்நீர் ஒத்தடம் கொடுப்பது மிகுந்த பலன் தரும்.' }
    ],
    dosage: {
      amount: '5 - 10ml per application',
      frequency: 'Twice daily (Morning & before bedtime)',
      timing: 'External application',
      vehicle: 'Topical massage',
      amountTa: '5 - 10 மி.லி',
      frequencyTa: 'தினமும் 2 முறை',
      timingTa: 'வெளிப்புற பூச்சு',
      vehicleTa: 'மெதுவாக மசாஜ் செய்யவும்'
    },
    safety: {
      pregnancy: 'Safe for external back and limb aches during pregnancy; avoid lower abdomen.',
      pregnancyTa: 'கர்ப்ப காலத்தில் கை, கால், முதுகு வலிகளுக்கு பயன்படுத்தலாம்; அடிவயிற்றில் பூச வேண்டாம்.',
      children: 'Safe above 5 years for sprains.',
      childrenTa: '5 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு சுளுக்குக்கு பயன்படுத்தலாம்.',
      interactions: 'External use only. Do not apply on open wounds or bruised bleeding skin.',
      interactionsTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டுமே. திறந்த காயங்கள் மீது பூசக் கூடாது.',
      precautions: [
        'Wash hands after application; keep away from eyes.',
        'If burning sensation develops, discontinue and wash with cool water.'
      ],
      precautionsTa: [
        'பூசிய பின் கைகளை கழுவவும்; கண்களில் படாமல் பார்த்துக்கொள்ளவும்.',
        'எரிச்சல் ஏற்பட்டால் குளிர்ந்த நீரால் கழுவி நிறுத்தவும்.'
      ]
    },
    storage: {
      conditions: 'Keep bottle capped tightly in room temperature away from flame.',
      conditionsTa: 'நெருப்பு படாதவாறு மூடி அறை வெப்பநிலையில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can I apply hot water fomentation after this oil?',
        questionTa: 'தைலம் பூசிய பின் வெந்நீர் ஒத்தடம் கொடுக்கலாமா?',
        answer: 'Yes! Warm fomentation 30 minutes after applying the oil opens pores and accelerates muscular relaxation.',
        answerTa: 'ஆம்! தைலம் தடவி 30 நிமிடங்கள் கழித்து சுடுநீர் ஒத்தடம் கொடுப்பது தசைகளை இலகுவாக்கும்.'
      }
    ],
    searchKeywords: ['rej-viyan', 'pain oil', 'thailam', 'joint pain', 'back pain', 'mudakkathan', 'sprain', 'arthritis'],
    tamilKeywords: ['ரெஜ்-வியான்', 'வலி தைலம்', 'மூட்டு வலி', 'இடுப்பு வலி', 'முடக்கத்தான்', 'வாதநாராயணன்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-15',
    name: 'Ruthra Narshika Hair Oil',
    tamilName: 'ருத்ரா நர்ஷிகா கூந்தல் தைலம்',
    slug: 'ruthra-narshika-hair-oil',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['skin-hair'],
    price: 180,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Nutrient-dense botanical hair elixir enriched with Bringaraja, Amla, and Curry Leaves to cool the scalp and nourish roots.',
    shortDescriptionTa: 'கரிசலாங்கண்ணி, நெல்லி மற்றும் கறிவேப்பிலை அடங்கிய கூந்தல் வேர்களை வலுப்படுத்தும் பாரம்பரிய தைலம்.',
    description: 'Prepared using classical Thailam Pakam (oil maturation) methods with fresh herbal juices (Swarasam) slowly evaporated into virgin coconut oil. Cools excess cranial heat, prevents premature greying, and reduces hair fall caused by daily stress.',
    descriptionTa: 'செக்கில் ஆட்டிய தேங்காய் எண்ணெயில் கரிசலாங்கண்ணி சாறு, நெல்லி மற்றும் கறிவேப்பிலை சாறுகளை பக்குவமாக சுண்ட காய்ச்சி வடிக்கப்படும் பாரம்பரிய கூந்தல் தைலம். தலை சூட்டை தணித்து வேர்களை பலப்படுத்துகிறது.',
    traditionalRole: 'Traditional Siddha Rasayana hair oil for Kesha Vardhini (hair growth) and scalp cooling.',
    traditionalRoleTa: 'கூந்தல் வளர்ச்சி, தலை குளிர்ச்சி மற்றும் முடி உதிர்வை கட்டுப்படுத்துவதற்கான தைலம்.',
    badge: 'Hair & Scalp Health',
    badgeTa: 'கூந்தல் நலம்',
    image: '/images/products/thailam-bottle.svg',
    ingredients: [
      { name: 'Karisalankanni (Bringaraja)', tamilName: 'கரிசலாங்கண்ணி', botanicalName: 'Eclipta prostrata', role: 'Revered herb for deep hair pigment and follicle strength', roleTa: 'கூந்தலுக்கு அடர்ந்த நிறமும் வேர்களுக்கு பலமும் தரும்', amount: '30%' },
      { name: 'Nellikkai (Indian Gooseberry)', tamilName: 'நெல்லிக்காய்', botanicalName: 'Phyllanthus emblica', role: 'Vitamin C rich antioxidant that combats premature grey', roleTa: 'இளநரையை தடுத்து வேர்களை புதுப்பிக்கும்', amount: '20%' },
      { name: 'Kariveppilai (Curry Leaves)', tamilName: 'கறிவேப்பிலை', botanicalName: 'Murraya koenigii', role: 'Strengthens keratin strands and prevents breakage', roleTa: 'முடி உதிர்வை தடுத்து அடர்த்தியை கூட்டும்', amount: '20%' },
      { name: 'Pure Coconut Oil', tamilName: 'செக்கு தேங்காய் எண்ணெய்', botanicalName: 'Cocos nucifera oil', role: 'Deep moisturizing base lipid', roleTa: 'இயற்கை ஈரப்பதம் அளிக்கும் எண்ணெய் ஆதாரம்', amount: '30%' }
    ],
    howToUse: [
      { step: '01', title: 'Part Hair', titleTa: 'கூந்தலை வகுடெடுத்து', instruction: 'Section your hair to expose the scalp.', instructionTa: 'தலையில் வகுடெடுத்து வேர்களை பார்க்கவும்.' },
      { step: '02', title: 'Apply to Scalp', titleTa: 'மண்டை ஓட்டில் தடவவும்', instruction: 'Using fingertips, massage gently in small circles for 5 minutes.', instructionTa: 'விரல் நுனிகளால் 5 நிமிடங்கள் மெதுவாக மசாஜ் செய்யவும்.' },
      { step: '03', title: 'Leave On', titleTa: 'ஊற வைக்கவும்', instruction: 'Leave on overnight or minimum 1 hour before gentle herbal wash.', instructionTa: 'இரவு முழுவதும் அல்லது குளிப்பதற்கு 1 மணி நேரம் முன் ஊற வைக்கவும்.' }
    ],
    dosage: {
      amount: '5 - 10ml',
      frequency: '3 to 4 times a week',
      timing: 'Bedtime or 1 hour prior to bath',
      vehicle: 'Scalp massage',
      amountTa: '5 - 10 மி.லி',
      frequencyTa: 'வாரத்திற்கு 3-4 முறை',
      timingTa: 'இரவு தூங்கும் முன் அல்லது குளியலுக்கு முன்',
      vehicleTa: 'மண்டையோட்டில் மசாஜ்'
    },
    safety: {
      pregnancy: 'Safe during pregnancy and postpartum period.',
      pregnancyTa: 'கர்ப்ப காலத்திலும் பிரசவத்திற்குப் பிறகும் பாதுகாப்பானது.',
      children: 'Safe for children above 2 years.',
      childrenTa: '2 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு பயன்படுத்தலாம்.',
      interactions: 'Pure botanical composition without mineral oils or silicones.',
      interactionsTa: 'மினரல் ஆயில் அல்லது ரசாயனங்கள் எதுவும் சேர்க்கப்படவில்லை.',
      precautions: ['For external scalp application only.'],
      precautionsTa: ['வெளிப்புற பயன்பாட்டிற்கு மட்டுமே.']
    },
    storage: {
      conditions: 'Keep tightly capped; coconut oil solidifies below 24°C (warm gently before use).',
      conditionsTa: 'குளிர்காலத்தில் உறைந்தால் வெந்நீரில் பாட்டிலை வைத்து பயன்படுத்தவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does this contain artificial perfumes or dyes?',
        questionTa: 'இதில் செயற்கை வாசனை திரவியங்கள் சேர்க்கப்பட்டுள்ளதா?',
        answer: 'No. The deep herbal aroma and dark green tint come 100% from concentrated fresh herbs.',
        answerTa: 'இல்லை. இதன் பச்சை நிறமும் இயற்கை நறுமணமும் மூலிகைகளின் இயற்கை சாரத்தில் இருந்து மட்டுமே வருகிறது.'
      }
    ],
    searchKeywords: ['narshika', 'hair oil', 'bringaraja', 'amla', 'hairfall', 'dandruff', 'scalp cooling'],
    tamilKeywords: ['நர்ஷிகா', 'கூந்தல் தைலம்', 'முடி உதிர்வு', 'கரிசலாங்கண்ணி', 'நெல்லிக்காய்', 'தலைமுடி'],
    inStock: true
  },
  {
    id: 'prod-16',
    name: 'Ruthra Nalpamaradi Taila',
    tamilName: 'ருத்ரா நால்பாமராதி தைலம்',
    slug: 'ruthra-nalpamaradi-taila',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['skin-hair'],
    price: 180,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Classical four-ficus tree bark and turmeric body oil for natural skin glow, blemish soothing, and sun tan recovery.',
    shortDescriptionTa: 'நால்பாமரம் (நான்கு மரப்பட்டைகள்) மற்றும் மஞ்சள் கலந்த சரும பிரகாசம் தரும் பாரம்பரிய மூலிகை தைலம்.',
    description: 'Nalpamaradi is celebrated across ancient Indian medicine for promoting skin radiance (Varnya). Formulated by infusing the barks of four sacred Ficus trees (Athi, Ithi, Aal, Arasu) with wild turmeric, it gently calms skin sensitivities, lightens persistent sun tan, and enhances natural skin tone.',
    descriptionTa: 'ஆல், அரசு, அத்தி, இத்தி ஆகிய நால்வகை மரப்பட்டைகளுடன் கஸ்தூரி மஞ்சள் சேர்த்து பக்குவமாக காய்ச்சப்படும் மேனி தைலம். வெயிலால் ஏற்படும் கருமை, தழும்புகளை போக்கி மேனிக்கு இயற்கை பளபளப்பை தருகிறது.',
    traditionalRole: 'Traditional external beauty oil for hyperpigmentation, blemishes, and even tone.',
    traditionalRoleTa: 'சரும பொலிவு, மங்கு, தழும்புகள் மற்றும் கருமையை போக்கும் பாரம்பரிய மேனி தைலம்.',
    badge: 'Skin Radiance',
    badgeTa: 'சரும பொலிவு',
    image: '/images/products/thailam-bottle.svg',
    ingredients: [
      { name: 'Nalpamara (Barks of 4 Ficus trees)', tamilName: 'நால்பாமர பட்டை (ஆல், அரசு, அத்தி, இத்தி)', botanicalName: 'Ficus benghalensis, religiosa, microcarpa, racemosa', role: 'Astringent barks that tighten pores and heal blemishes', roleTa: 'சரும துளைகளை சீராக்கி வடுக்களை ஆற்றும்', amount: '40%' },
      { name: 'Manjal (Wild Turmeric / Kasthuri Manjal)', tamilName: 'கஸ்தூரி மஞ்சள்', botanicalName: 'Curcuma aromatica', role: 'Imparts healthy glow and clears tanning', roleTa: 'இயற்கை பிரகாசமும் நச்சு நீக்கமும் தரும்', amount: '25%' },
      { name: 'Chandanam (Sandalwood)', tamilName: 'சந்தனம்', botanicalName: 'Santalum album', role: 'Cooling agent for soothing irritation', roleTa: 'சரும சூட்டை தணிக்கும்', amount: '15%' },
      { name: 'Sesame & Coconut Carrier Blend', tamilName: 'இயற்கை எண்ணெய் கலவை', botanicalName: 'Sesamum & Cocos oil', role: 'Nourishes dry skin barrier', roleTa: 'சருமத்திற்கு மென்மை தரும் எண்ணெய் ஆதாரம்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Apply on Face & Body', titleTa: 'முகம் & உடம்பில் பூசவும்', instruction: 'Take a few drops and gently massage into cleansed face and limbs.', instructionTa: 'சில துளிகள் எடுத்து முகம் மற்றும் உடலில் மெதுவாக மசாஜ் செய்யவும்.' },
      { step: '02', title: 'Allow Absorption', titleTa: 'ஊற விடவும்', instruction: 'Leave on for 20 to 30 minutes.', instructionTa: '20 முதல் 30 நிமிடங்கள் ஊற வைக்கவும்.' },
      { step: '03', title: 'Wash with Gram Flour / Snana Chooranam', titleTa: 'கடலை மாவு அல்லது பயத்த மாவில் கழுவவும்', instruction: 'Rinse off with lukewarm water and a natural herbal bath powder.', instructionTa: 'பாசிப்பயறு மாவு அல்லது மூலிகை குளியல் பொடி கொண்டு வெதுவெதுப்பான நீரில் கழுவவும்.' }
    ],
    dosage: {
      amount: '5 - 10ml',
      frequency: 'Daily or 3-4 times a week',
      timing: '30 mins before bath',
      vehicle: 'Body & facial application',
      amountTa: '5 - 10 மி.லி',
      frequencyTa: 'வாரத்தில் 3-4 முறை',
      timingTa: 'குளிப்பதற்கு 30 நிமிடம் முன்',
      vehicleTa: 'மேனியில் தடவவும்'
    },
    safety: {
      pregnancy: 'Safe for maternal stretch mark massage.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மேனி பராமரிப்பிற்கு பாதுகாப்பானது.',
      children: 'Safe for children above 1 year.',
      childrenTa: '1 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு பயன்படுத்தலாம்.',
      interactions: 'Pure natural formula.',
      interactionsTa: 'இயற்கையானது; பாதிப்பில்லை.',
      precautions: [
        'Contains natural turmeric which may temporarily stain light fabrics.',
        'Do not apply on broken or bleeding eczema.'
      ],
      precautionsTa: [
        'மஞ்சள் இருப்பதால் ஆடைகளில் லேசாக கறை படியலாம்.',
        'திறந்த புண்கள் உள்ள இடத்தில் பூச வேண்டாம்.'
      ]
    },
    storage: {
      conditions: 'Keep bottle closed tightly in a cool shelf.',
      conditionsTa: 'குளிர்ந்த இடத்தில் மூடி வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can I leave it on my face overnight?',
        questionTa: 'இரவு முழுவதும் முகத்தில் வைத்திருக்கலாமா?',
        answer: 'For face, 20-30 minutes before bathing is optimal to avoid staining bedsheets with natural turmeric.',
        answerTa: 'முகத்திற்கு குளிப்பதற்கு 20-30 நிமிடங்கள் முன்னதாக பூசி கழுவுவதே போதுமானது.'
      }
    ],
    searchKeywords: ['nalpamaradi', 'taila', 'turmeric', 'skin glow', 'tan removal', 'thailam', 'ficus'],
    tamilKeywords: ['நால்பாமராதி', 'தைலம்', 'மஞ்சள்', 'சரும பொலிவு', 'மேனி பளபளப்பு', 'மங்கு'],
    inStock: true
  },
  {
    id: 'prod-17',
    name: 'Ruthra Ulcera Herbal Massage Oil',
    tamilName: 'ருத்ரா அல்சிரா மூலிகை மசாஜ் தைலம்',
    slug: 'ruthra-ulcera-herbal-massage-oil',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['joint-mobility', 'skin-hair'],
    price: 200,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Specialized herbal massage thailam formulated to comfort tired muscles, localized tissue fatigue, and peripheral stiffness.',
    shortDescriptionTa: 'அயர்ந்த தசைகளுக்கு புத்துணர்ச்சியூட்டி, தசை இறுக்கம் மற்றும் சோர்வை போக்கும் பிரத்யேக மசாஜ் தைலம்.',
    description: 'Crafted with herbs that support peripheral capillary blood circulation and soothe accumulated muscular lactic tension. An ideal recovery oil after rigorous physical exertion, manual labor, or long desk-bound postures.',
    descriptionTa: 'தசைகளில் சேரும் இறுக்கத்தை தளர்த்தி, இரத்த ஓட்டத்தை சீராக்க உதவும் சித்த மூலிகை தைலம். உடல் உழைப்பு அல்லது நீண்ட நேரம் அமர்ந்து வேலை செய்பவர்களின் உடல் அசதியை போக்க சிறந்தது.',
    traditionalRole: 'Traditional calming massage oil for muscular fatigue, tension, and body restoration.',
    traditionalRoleTa: 'தசை சோர்வு, உடல் அசதி மற்றும் பிடிப்பை போக்கும் பாரம்பரிய மசாஜ் தைலம்.',
    badge: 'Muscle Ease',
    badgeTa: 'தசை தளர்வு',
    image: '/images/products/thailam-bottle.svg',
    ingredients: [
      { name: 'Chitharathai (Greater Galangal)', tamilName: 'சித்தரத்தை', botanicalName: 'Alpinia galanga', role: 'Calms muscular spasms and localized tension', roleTa: 'தசை பிடிப்பை தளர்த்தி வலியை போக்கும்', amount: '25%' },
      { name: 'Kandankathiri Root', tamilName: 'கண்டங்கத்திரி வேர்', botanicalName: 'Solanum surattense', role: 'Reduces localized aches', roleTa: 'உடல் வலியை போக்கும் பாரம்பரிய வேர்', amount: '25%' },
      { name: 'Karpuravalli', tamilName: 'கற்பூரவல்லி', botanicalName: 'Plectranthus amboinicus', role: 'Aromatic circulatory stimulant', roleTa: 'இரத்த ஓட்டத்தை சீராக்கும் நறுமண இலை', amount: '20%' },
      { name: 'Gingelly Oil Base', tamilName: 'நல்லெண்ணெய்', botanicalName: 'Sesamum indicum', role: 'Nourishes deep muscle fibers', roleTa: 'தசைகளை உறுதிப்படுத்தும் தையில ஆதாரம்', amount: '30%' }
    ],
    howToUse: [
      { step: '01', title: 'Dispense Oil', titleTa: 'தைலத்தை எடுக்கவும்', instruction: 'Take generous amount on palms.', instructionTa: 'தேவையான அளவு தைலத்தை கைகளில் எடுக்கவும்.' },
      { step: '02', title: 'Long Strokes Massage', titleTa: 'நீளவாக்கில் மசாஜ் செய்யவும்', instruction: 'Apply along the direction of muscle fibers with rhythmic strokes.', instructionTa: 'தசைகளின் நீளவாக்கில் மெதுவாக அழுத்தி தேய்க்கவும்.' },
      { step: '03', title: 'Warm Rinse', titleTa: 'வெந்நீர் குளியல்', instruction: 'Follow with warm water bath after 45 minutes.', instructionTa: '45 நிமிடம் கழித்து வெதுவெதுப்பான நீரில் குளிக்கவும்.' }
    ],
    dosage: {
      amount: '10 - 15ml',
      frequency: 'As required or 2-3 times weekly',
      timing: 'Pre-bath massage',
      vehicle: 'Body massage',
      amountTa: '10 - 15 மி.லி',
      frequencyTa: 'தேவைப்படும் போது அல்லது வாரத்தில் 2-3 முறை',
      timingTa: 'குளியலுக்கு முன்',
      vehicleTa: 'உடல் மசாஜ்'
    },
    safety: {
      pregnancy: 'Safe for arms, shoulders, and legs.',
      pregnancyTa: 'கை, கால்கள் மற்றும் தோள்பட்டைக்கு பயன்படுத்தலாம்.',
      children: 'Above 8 years.',
      childrenTa: '8 வயதுக்கு மேல்.',
      interactions: 'External use only.',
      interactionsTa: 'வெளிப்புற பயன்பாடு மட்டுமே.',
      precautions: ['Do not apply on cut surfaces.'],
      precautionsTa: ['வெட்டுக் காயங்களில் தடவக் கூடாது.']
    },
    storage: {
      conditions: 'Room temperature away from heat sources.',
      conditionsTa: 'அறை வெப்பநிலையில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Is it suitable for post-workout soreness?',
        questionTa: 'உடற்பயிற்சிக்கு பின் ஏற்படும் தசை வலிக்கு உகந்ததா?',
        answer: 'Yes, it is formulated specifically to comfort strained, tired muscles and accelerate natural recovery.',
        answerTa: 'ஆம், உடற்பயிற்சி அல்லது கடின வேலைக்கு பின் ஏற்படும் தசை சோர்வுக்கு மிகவும் உகந்தது.'
      }
    ],
    searchKeywords: ['ulcera', 'massage oil', 'muscle ache', 'fatigue', 'thailam', 'body pain'],
    tamilKeywords: ['அல்சிரா', 'மசாஜ் தைலம்', 'தசை வலி', 'உடல் சோர்வு', 'அசதி'],
    inStock: true
  },
  {
    id: 'prod-18',
    name: 'Ruthra Sinocof Cough Syrup',
    tamilName: 'ருத்ரா சினோகாஃப் இருமல் சிரப்',
    slug: 'ruthra-sinocof-cough-syrup',
    formulation: 'Syrups',
    formulationTa: 'சிரப்',
    concerns: ['respiratory'],
    price: 96,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Gentle, non-drowsy herbal cough syrup prepared with Adathodai, Thulasi, and Kantakari to soothe ticklish throats.',
    shortDescriptionTa: 'ஆடாதோடை, துளசி மற்றும் கண்டங்கத்திரி கொண்டு தயாரிக்கப்படும் தூக்க கலக்கமில்லாத இயற்கை இருமல் சிரப்.',
    description: 'Unlike commercial cough suppressants that cause daytime sedation, Ruthra Sinocof Cough Syrup draws upon time-tested Siddha botanicals. It thins bronchial secretions naturally, soothes raw throat linings, and facilitates comfortable airway passage.',
    descriptionTa: 'பகல் நேர தூக்க கலக்கத்தை ஏற்படுத்தாத உன்னத மூலிகை சிரப். ஆடாதோடை, துளசி சாறுகளுடன் தொண்டைக்கு இதமளித்து வறட்டு இருமல் மற்றும் சளியை இயற்கையாக தணிக்கிறது.',
    traditionalRole: 'Traditional Siddha botanical cough syrup for dry and productive cough, throat irritation, and bronchial congestion.',
    traditionalRoleTa: 'இருமல், தொண்டை கரகரப்பு, வறட்டு இருமல் மற்றும் சளிக்கு பாரம்பரிய சித்த சிரப்.',
    badge: 'Non-Drowsy',
    badgeTa: 'தூக்க கலக்கமில்லை',
    image: '/images/products/syrup-bottle.svg',
    ingredients: [
      { name: 'Adathodai (Malabar Nut)', tamilName: 'ஆடாதோடை', botanicalName: 'Justicia adhatoda', role: 'Natural bronchodilator and mucolytic agent', roleTa: 'சுவாசப் பாதையை விரிவுபடுத்தி சளியை இளக்கும்', amount: '35%' },
      { name: 'Thulasi (Holy Basil)', tamilName: 'துளசி', botanicalName: 'Ocimum sanctum', role: 'Calms throat irritation and boosts immune resilience', roleTa: 'தொண்டை அரிப்பை போக்கி நோய் எதிர்ப்பு சக்தி தரும்', amount: '25%' },
      { name: 'Kantakari', tamilName: 'கண்டங்கத்திரி', botanicalName: 'Solanum surattense', role: 'Dispels bronchial spasms and persistent cough reflex', roleTa: 'தொடர் இருமலை கட்டுப்படுத்தும் மூலிகை', amount: '20%' },
      { name: 'Athimathuram (Licorice)', tamilName: 'அதிமதுரம்', botanicalName: 'Glycyrrhiza glabra', role: 'Natural demulcent coating irritated throat membranes', roleTa: 'தொண்டைக்கு இனிமையான இதமளிக்கும் மூலிகை', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Shake Bottle', titleTa: 'பாட்டிலை குலுக்கவும்', instruction: 'Shake the bottle well before pouring.', instructionTa: 'பயன்படுத்துவதற்கு முன் பாட்டிலை நன்றாக குலுக்கவும்.' },
      { step: '02', title: 'Measure Dose', titleTa: 'அளவை எடுக்கவும்', instruction: 'Take 5ml to 10ml using the measuring cap.', instructionTa: 'அளவு மூடியில் 5-10 மி.லி எடுக்கவும்.' },
      { step: '03', title: 'Sip Slowly', titleTa: 'மெதுவாக பருகவும்', instruction: 'Sip slowly to allow the syrup to coat the throat. Do not drink water immediately for 15 minutes.', instructionTa: 'தொண்டையில் படும்படி மெதுவாக விழுங்கவும். 15 நிமிடங்களுக்கு உடனே தண்ணீர் குடிக்க வேண்டாம்.' }
    ],
    dosage: {
      amount: 'Adults: 10ml; Children (above 3 yrs): 5ml',
      frequency: '3 times daily',
      timing: 'Post meals or during acute coughing spells',
      vehicle: 'Direct oral syrup',
      amountTa: 'பெரியவர்கள்: 10 மி.லி; குழந்தைகள்: 5 மி.லி',
      frequencyTa: 'தினமும் 3 முறை',
      timingTa: 'உணவுக்குப் பின் அல்லது இருமல் வரும்போது',
      vehicleTa: 'நேரடியாக குடிக்கலாம்'
    },
    safety: {
      pregnancy: 'Consult your practitioner during pregnancy.',
      pregnancyTa: 'கர்ப்பிணிகள் மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Safe for children above 3 years.',
      childrenTa: '3 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு பாதுகாப்பானது.',
      interactions: 'Does not contain synthetic antihistamines or codeine.',
      interactionsTa: 'செயற்கை மயக்க மருந்துகள் எதுவும் இல்லை.',
      precautions: ['If cough persists with high fever beyond 5 days, seek clinical assessment.'],
      precautionsTa: ['இருமல் 5 நாட்களுக்கு மேல் நீடித்தால் மருத்துவரை அணுகவும்.']
    },
    storage: {
      conditions: 'Keep in a cool place; cap tightly after use.',
      conditionsTa: 'குளிர்ந்த இடத்தில் மூடி வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Will this make me sleepy at work or school?',
        questionTa: 'இதை குடித்தால் வேலை அல்லது பள்ளி நேரத்தில் தூக்கம் வருமா?',
        answer: 'No. Sinocof is 100% free of sedating synthetic chemicals like chlorpheniramine, allowing you to stay sharp.',
        answerTa: 'இல்லை. இதில் தூக்கத்தை தூண்டும் ரசாயனங்கள் எதுவும் இல்லாததால் பகல் நேரத்தில் விழிப்புடன் செயல்படலாம்.'
      }
    ],
    searchKeywords: ['sinocof', 'cough syrup', 'cough', 'adathodai', 'thulasi', 'throat', 'phlegm', 'syrup'],
    tamilKeywords: ['சினோகாஃப்', 'இருமல் சிரப்', 'ஆடாதோடை', 'துளசி', 'தொண்டை வலி', 'சளி'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-19',
    name: 'Ruthra Ramabaana Kashayam',
    tamilName: 'ருத்ரா ராமபாண கஷாயம்',
    slug: 'ruthra-ramabaana-kashayam',
    formulation: 'Syrups',
    formulationTa: 'சிரப்',
    concerns: ['respiratory', 'joint-mobility'],
    price: 240,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Potent concentrated liquid kashayam formulated for swift deep-seated respiratory clearance and bodily fortitude.',
    shortDescriptionTa: 'ஆழமாக தேங்கிய கபத்தை வெளியேற்றி நோய் எதிர்ப்பு சக்தியை உடனடியாக மீட்கும் வீரியமிக்க ராமபாண கஷாயம்.',
    description: 'Ramabaana ("arrow of Rama" signifying swift precision) is a revered ready-to-drink kashayam formulated with 18 botanical actives. It quickly alleviates chronic respiratory stagnation, chest tightness, and the bodily aches associated with cold weather.',
    descriptionTa: 'ராமபாணத்தை போன்ற துல்லியமான வேகத்தில் செயல்படும் பாரம்பரிய சித்த கஷாயம். நெஞ்சில் கட்டியிருக்கும் கபத்தை இளக்கி, சுவாசப் பாதையை திறந்து உடல் சோம்பலை விரட்டுகிறது.',
    traditionalRole: 'Traditional potent liquid kashayam for acute respiratory discomfort and systemic resilience.',
    traditionalRoleTa: 'கடுமையான சளி, இளைப்பு மற்றும் உடல் பலவீனத்திற்கான பாரம்பரிய சித்த திரவ கஷாயம்.',
    badge: 'Concentrated Kashayam',
    badgeTa: 'வீரிய கஷாயம்',
    image: '/images/products/syrup-bottle.svg',
    ingredients: [
      { name: 'Thippili (Long Pepper)', tamilName: 'திப்பிலி', botanicalName: 'Piper longum', role: 'Increases bioavailability and lung bio-clearance', roleTa: 'நுரையீரல் சளியை இளக்கி வெளியேற்றும்', amount: '25%' },
      { name: 'Chitharathai (Lesser Galangal)', tamilName: 'சித்தரத்தை', botanicalName: 'Alpinia officinarum', role: 'Warms deep bronchial airways', roleTa: 'சுவாசக் குழாய்களுக்கு கதகதப்பும் பலமும் தரும்', amount: '25%' },
      { name: 'Thuthuvalai (Purple Fruited Pea)', tamilName: 'தூதுவளை', botanicalName: 'Solanum trilobatum', role: 'Celebrated lung strengthener in Tamil heritage', roleTa: 'நுரையீரல் வலிமைக்கும் சளி தீர்வுக்கும் பிரசித்தி பெற்றது', amount: '25%' },
      { name: 'Sukku (Dry Ginger)', tamilName: 'சுக்கு', botanicalName: 'Zingiber officinale', role: 'Ignites metabolic defense', roleTa: 'உடல் வெப்பத்தை சீராக்கி நோய் எதிர்ப்பு தரும்', amount: '25%' }
    ],
    howToUse: [
      { step: '01', title: 'Measure Liquid', titleTa: 'அளவை எடுக்கவும்', instruction: 'Pour 15ml into a cup.', instructionTa: '15 மி.லி கஷாயத்தை கோப்பையில் எடுக்கவும்.' },
      { step: '02', title: 'Dilute with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Add 30ml of warm water.', instructionTa: '30 மி.லி வெதுவெதுப்பான நீர் சேர்த்து கலக்கவும்.' },
      { step: '03', title: 'Drink Warm', titleTa: 'சூடாக அருந்தவும்', instruction: 'Consume twice daily after meals.', instructionTa: 'உணவுக்குப் பின் காலையும் இரவும் சூடாக பருகவும்.' }
    ],
    dosage: {
      amount: '15ml diluted with 30ml warm water',
      frequency: 'Twice daily',
      timing: 'Post meals',
      vehicle: 'Warm water dilution',
      amountTa: '15 மி.லி (30 மி.லி வெந்நீருடன் கலந்து)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீரில் கலந்து'
    },
    safety: {
      pregnancy: 'Seek physician guidance before use.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் வழிகாட்டல் தேவை.',
      children: 'Above 8 years: 5ml diluted.',
      childrenTa: '8 வயதுக்கு மேல்: 5 மி.லி.',
      interactions: 'Keep 1-hr gap with existing treatments.',
      interactionsTa: 'பிற மருந்துகளோடு 1 மணி நேரம் இடைவெளி வைக்கவும்.',
      precautions: ['Contains active pungent botanicals; best taken with food in sensitive stomachs.'],
      precautionsTa: ['காரத்தன்மை கொண்ட மூலிகைகள் இருப்பதால் உணவு உண்ட பின் குடிப்பது நல்லது.']
    },
    storage: {
      conditions: 'Refrigerate after opening or store in cool dry pantry.',
      conditionsTa: 'திறந்த பின் குளிர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Do I need to boil this like Chooranam powders?',
        questionTa: 'இதை பொடியை போல் கொதிக்க வைக்க வேண்டுமா?',
        answer: 'No, this is a ready prepared concentrated kashayam. Simply dilute with warm water and drink.',
        answerTa: 'இல்லை, இது காய்ச்சப்பட்ட திரவ கஷாயம். வெந்நீரில் கலந்து நேரடியாக பருகலாம்.'
      }
    ],
    searchKeywords: ['ramabaana', 'kashayam', 'syrup', 'respiratory', 'thuthuvalai', 'cough', 'lungs'],
    tamilKeywords: ['ராமபாண', 'கஷாயம்', 'தூதுவளை', 'திப்பிலி', 'சளி', 'சுவாச நலம்'],
    inStock: true
  },
  {
    id: 'prod-20',
    name: 'Ruthra Esy Swas Drops',
    tamilName: 'ருத்ரா ஈஸி ஸ்வாஸ் சொட்டு மருந்து',
    slug: 'ruthra-esy-swas-drops',
    formulation: 'Drops',
    formulationTa: 'சொட்டு மருந்து',
    concerns: ['respiratory'],
    price: 198,
    packSize: '50ml',
    packSizeTa: '50 மி.லி',
    shortDescription: 'Herbal inhalation and nasal comfort drops enriched with Nilgiri oil, camphor, and mint essence for instant airway clarity.',
    shortDescriptionTa: 'நீலகிரி தைலம், கற்பூரம் மற்றும் புதினா அடங்கிய உடனடி மூச்சு சுலபமாக்கும் பாரம்பரிய சொட்டு மருந்து.',
    description: 'Ruthra Esy Swas Drops provides fast-acting aromatic relief from clogged nasal canals, blocked sinuses, and heavy heads. Formulated with volatile therapeutic botanical oils, a few drops in steaming water or onto a handkerchief opens airways effortlessly.',
    descriptionTa: 'மூக்கடைப்பு, சைனஸ் பாரம் மற்றும் தலை கனத்தை உடனடியாக போக்கும் நறுமண மூலிகை சொட்டு மருந்து. வெந்நீரில் சில துளிகள் விட்டு ஆவி பிடித்தால் மூச்சுப் பாதை உடனடியாக திறக்கும்.',
    traditionalRole: 'Traditional volatile aromatic inhalant for Nasarogam (nasal blockage), headache, and bronchial tightness.',
    traditionalRoleTa: 'மூக்கடைப்பு, தலைபாரம் மற்றும் சுவாசம் தடைபடுவதற்கு ஆவி பிடிக்கும் சொட்டு மருந்து.',
    badge: 'Instant Clarity',
    badgeTa: 'உடனடி திறப்பு',
    image: '/images/products/drops-bottle.svg',
    ingredients: [
      { name: 'Nilgiri Thailam (Eucalyptus oil)', tamilName: 'நீலகிரி தைலம்', botanicalName: 'Eucalyptus globulus', role: 'Rapid nasal clearance and antiviral aromatics', roleTa: 'மூக்கடைப்பை உடனே போக்கும் நீலகிரி தைலம்', amount: '40%' },
      { name: 'Pudhina Uppu (Menthol crystal extract)', tamilName: 'புதினா உப்பு', botanicalName: 'Mentha arvensis', role: 'Cooling sensation that expands airway sensation', roleTa: 'குளிர்ச்சியும் சுவாச எளிமையும் தரும்', amount: '25%' },
      { name: 'Pachai Karpooram (Natural Camphor)', tamilName: 'பச்சை கற்பூரம்', botanicalName: 'Cinnamomum camphora', role: 'Dispels frontal sinus headache and heavy sinus fog', roleTa: 'தலைபாரத்தை கரைக்கும் இயற்கை கற்பூரம்', amount: '20%' },
      { name: 'Oma Thailam (Ajwain oil)', tamilName: 'ஓம தைலம்', botanicalName: 'Trachyspermum ammi', role: 'Dispels stubborn throat congestion vapors', roleTa: 'நெஞ்சு சளி ஆவியை போக்கும்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Steam Inhalation', titleTa: 'ஆவி பிடித்தல்', instruction: 'Add 3-5 drops into a bowl of steaming hot water. Cover head with a towel and inhale deeply for 5-7 minutes.', instructionTa: 'கொதிக்கும் வெந்நீரில் 3-5 துளிகள் விட்டு துணியால் தலையை மூடி ஆவி பிடிக்கவும்.' },
      { step: '02', title: 'Handkerchief / Pillow', titleTa: 'கைக்குட்டை / தலையணை', instruction: 'Put 2 drops on your handkerchief or pillow corner for effortless breathing through the night.', instructionTa: 'இரவில் தூங்கும் போது கைக்குட்டை அல்லது தலையணையில் 2 துளிகள் இடலாம்.' },
      { step: '03', title: 'Chest / Forehead dab', titleTa: 'லேசாக தடவுதல்', instruction: 'Dab 1 drop gently over the bridge of the nose or temples.', instructionTa: 'நெற்றி அல்லது மூக்கின் மீது 1 துளி மெதுவாக தடவலாம்.' }
    ],
    dosage: {
      amount: '3 - 5 drops for steam inhalation',
      frequency: 'Twice daily or as needed during congestion',
      timing: 'Morning and before bedtime',
      vehicle: 'Steam inhalation / Aromatics',
      amountTa: '3 - 5 துளிகள்',
      frequencyTa: 'தினமும் 2 முறை அல்லது தேவைப்படும் போது',
      timingTa: 'காலை மற்றும் இரவு தூங்கும் முன்',
      vehicleTa: 'ஆவி பிடிக்க அல்லது நுகர'
    },
    safety: {
      pregnancy: 'Steam inhalation is safe; do not ingest orally.',
      pregnancyTa: 'ஆவி பிடிக்கலாம்; விழுங்கக் கூடாது.',
      children: 'For children above 3 years: use 1-2 drops in steam at safe distance.',
      childrenTa: '3 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு 1-2 துளிகள் போதுமானது.',
      interactions: 'External and inhalation use only. DO NOT SWALLOW.',
      interactionsTa: 'வெளிப்புற ஆவி பயன்பாட்டிற்கு மட்டுமே. விழுங்கக் கூடாது.',
      precautions: ['Keep strictly away from direct eye contact. Keep out of reach of toddlers.'],
      precautionsTa: ['கண்களில் படாமல் பார்த்துக் கொள்ளவும். குழந்தைகளிடம் இருந்து தள்ளி வைக்கவும்.']
    },
    storage: {
      conditions: 'Keep tightly dropper-capped in a dark place to prevent volatile evaporation.',
      conditionsTa: 'ஆவியாகாமல் இருக்க மூடியை நன்றாக மூடி வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can I swallow these drops?',
        questionTa: 'இதை விழுங்கலாமா?',
        answer: 'No. Esy Swas Drops is formulated strictly for steam inhalation, topical forehead dab, and aromatic handkerchief inhalation.',
        answerTa: 'கூடாது. இது ஆவி பிடிக்க மற்றும் முகர்ந்து பார்க்க மட்டுமே தயாரிக்கப்பட்ட நறுமண மருந்து.'
      }
    ],
    searchKeywords: ['esy swas', 'drops', 'steam', 'inhalation', 'eucalyptus', 'sinus', 'headache', 'cold relief'],
    tamilKeywords: ['ஈஸி ஸ்வாஸ்', 'சொட்டு மருந்து', 'ஆவி பிடித்தல்', 'நீலகிரி தைலம்', 'மூக்கடைப்பு', 'கற்பூரம்'],
    inStock: true,
    featured: true
  }
];

export const CONCERN_CATEGORIES: ConcernCategory[] = [
  {
    slug: 'joint-mobility',
    title: 'Joint & Mobility',
    titleTa: 'மூட்டு & எலும்பு நலம்',
    tagline: 'Ease stiffness and strengthen deep bone & ligament vitality',
    taglineTa: 'மூட்டு பிடிப்பை நீக்கி எலும்பு தாதுக்களை பலப்படுத்தும்',
    description: 'Time-honored Siddha botanical interventions designed to pacify aggravated Vatham, restore synovial fluidity, and ease morning stiffness with revered herbs like Pirandai, Karanthai, and Mudakkathan.',
    descriptionTa: 'பிரண்டை, கொட்டைக்கரந்தை, முடக்கத்தான் உள்ளிட்ட பாரம்பரிய மூலிகைகள் கொண்டு வாதத்தை சமன் செய்து மூட்டு ஆரோக்கியத்தை காக்கும் தயாரிப்புகள்.',
    iconName: 'Activity',
    herbalKey: 'Pirandai & Mudakkathan',
    herbalKeyTa: 'பிரண்டை & முடக்கத்தான்'
  },
  {
    slug: 'respiratory',
    title: 'Respiratory Wellness',
    titleTa: 'சுவாச நலம்',
    tagline: 'Clear airways, soothing throat herbs & sinus decongestion',
    taglineTa: 'சுவாசப் பாதை சீரமைப்பு மற்றும் சைனஸ் நிவாரணம்',
    description: 'Classical Siddha decoctions, throat elixirs, and aromatic inhalants crafted with Adathodai, Nochi, Thippili, and Thulasi to dissolve phlegm and invite effortless breathing.',
    descriptionTa: 'ஆடாதோடை, நொச்சி, திப்பிலி, துளசி கொண்டு நெஞ்சு சளியை இளக்கி எளிதாக சுவாசிக்க உதவும் பாரம்பரிய முறை.',
    iconName: 'Wind',
    herbalKey: 'Adathodai & Nochi',
    herbalKeyTa: 'ஆடாதோடை & நொச்சி'
  },
  {
    slug: 'womens-wellness',
    title: "Women's Wellness",
    titleTa: 'பெண்கள் நலம்',
    tagline: 'Rhythmic cycle harmony, uterine tone & thermal cooling',
    taglineTa: 'மாதவிடாய் சுழற்சி மற்றும் கர்ப்பப்பை ஆரோக்கியம்',
    description: 'Specialized Siddha gynecological formulations that gently assist cyclical rhythm, relieve lower abdominal stagnation, and replenish vital tissue nutrients.',
    descriptionTa: 'பெண்களின் மாதவிடாய் சுழற்சியை சீராக்கவும், கர்ப்பப்பை தசைகளை பலப்படுத்தவும் உதவும் பாரம்பரிய சித்த மருத்துவம்.',
    iconName: 'Heart',
    herbalKey: 'Kattuvazhai & Seenthil',
    herbalKeyTa: 'காட்டுவாழை & சீந்தில்'
  },
  {
    slug: 'metabolic-wellness',
    title: 'Metabolic Wellness',
    titleTa: 'வளர்சிதை மாற்ற நலம்',
    tagline: 'Support natural glucose pathways, liver vitality & urinary ease',
    taglineTa: 'சர்க்கரை சமநிலை, கல்லீரல் மற்றும் சிறுநீரக நலம்',
    description: 'Herbal extracts utilizing the astringent and bitter potency of Jamun, Gymnema (Sirukurinjan), and Keezhanelli to maintain internal equilibrium.',
    descriptionTa: 'நாவல் விதை, சிறுகுறிஞ்சான், கீழாநெல்லி கொண்டு உடலின் உள் சமநிலையை பேணும் சித்த மருந்துகள்.',
    iconName: 'ShieldCheck',
    herbalKey: 'Sirukurinjan & Keezhanelli',
    herbalKeyTa: 'சிறுகுறிஞ்சான் & கீழாநெல்லி'
  },
  {
    slug: 'digestive-wellness',
    title: 'Digestive Wellness',
    titleTa: 'செரிமான நலம்',
    tagline: 'Nourish gut fire (Agni) and promote regular elimination',
    taglineTa: 'செரிமான தீயை தூண்டி குடல் கழிவுகளை நீக்கும்',
    description: 'Haritaki, Dry Ginger, and Fennel synergized to dispel accumulated gas, restore gentle transit, and establish healthy gut flora naturally.',
    descriptionTa: 'கடுக்காய், சுக்கு, சோம்பு கொண்டு வயிற்று உப்புசம் நீங்கி இலகுவான குடல் இயக்கத்தை தரும் சித்த முறைகள்.',
    iconName: 'Flame',
    herbalKey: 'Kadukkai & Inji',
    herbalKeyTa: 'கடுக்காய் & இஞ்சி'
  },
  {
    slug: 'skin-hair',
    title: 'Skin & Hair',
    titleTa: 'சருமம் & கூந்தல் நலம்',
    tagline: 'Botanical radiance, scalp cooling & follicle nourishment',
    taglineTa: 'மேனி பொலிவு மற்றும் கூந்தல் வேர் ஊட்டச்சத்து',
    description: 'Classical thailams slow-cooked with Kasthuri Manjal, Nalpamara tree barks, Bringaraja, and virgin coconut oil for luminous skin and deep root health.',
    descriptionTa: 'கஸ்தூரி மஞ்சள், நால்பாமர பட்டை, கரிசலாங்கண்ணி கொண்டு தயாரிக்கப்படும் பொலிவு தரும் பாரம்பரிய தைலங்கள்.',
    iconName: 'Droplets',
    herbalKey: 'Nalpamara & Bringaraja',
    herbalKeyTa: 'நால்பாமரம் & கரிசலாங்கண்ணி'
  }
];

export const FORMULATION_CATEGORIES: FormulationCategory[] = [
  {
    slug: 'chooranam',
    formulation: 'Chooranam',
    title: 'Chooranam',
    titleTa: 'சூரணம்',
    tagline: 'Fine botanical powders & measured sachets',
    taglineTa: 'தூய மூலிகைப் பொடிகள் மற்றும் பாக்கெட்டுகள்',
    description: 'Traditional herbal powders prepared by pulverizing dried roots, bark, and seeds, processed through meticulous cloth filtration (Vasthirakkayam) for maximum bio-potency.',
    descriptionTa: 'மூலிகைகளை நிழலில் உலர்த்தி வஸ்திரக்காயம் செய்து சலித்து எடுக்கப்படும் உன்னத சித்த சூரணம்.',
    classicalContext: 'Classical powdered form allowing easy blending into carriers like warm water, honey, or ghee.',
    classicalContextTa: 'வெந்நீர், தேன் அல்லது நெய்யில் கலந்து எளிதில் உட்கொள்ளும் பாரம்பரிய முறை.'
  },
  {
    slug: 'kudineer',
    formulation: 'Kudineer',
    title: 'Kudineer',
    titleTa: 'குடிநீர்',
    tagline: 'Herbal decoction preparations boiled fresh',
    taglineTa: 'கொதிக்க வைத்து காய்ச்சும் கஷாய தயாரிப்புகள்',
    description: 'Coarse herbal blends formulated specifically to be boiled in water and reduced to one-fourth or one-eighth volume, unlocking water-soluble phytochemicals.',
    descriptionTa: 'தண்ணீரில் இட்டு நான்கில் ஒன்றாக சுண்டக்காய்ச்சி உட்கொள்ளும் பாரம்பரிய கஷாய முறை.',
    classicalContext: 'Direct, rapid assimilation of volatile and bio-active water-soluble herbal constituents.',
    classicalContextTa: 'உடலில் உடனடியாக உட்கிரகிக்கப்படும் சக்தி வாய்ந்த மூலிகை நீர்.'
  },
  {
    slug: 'thailam',
    formulation: 'Thailam',
    title: 'Thailam',
    titleTa: 'தைலம்',
    tagline: 'Slow-cooked botanical medicated oils',
    taglineTa: 'பக்குவமாக காய்ச்சப்பட்ட மூலிகை தைலங்கள்',
    description: 'Classical lipid preparations where herbal juices and pasty extracts are slowly heated with unrefined sesame or coconut oil until the exact medicinal stage (Pakam) is attained.',
    descriptionTa: 'நல்லெண்ணெய் அல்லது தேங்காய் எண்ணெயில் மூலிகை சாறுகளை சேர்த்து பக்குவமாக காய்ச்சப்படும் தைலங்கள்.',
    classicalContext: 'Enables deep transdermal delivery across dermal layers and joint capsules.',
    classicalContextTa: 'தோல் மற்றும் மூட்டுகளில் ஆழமாக இறங்கி பலனளிக்கும் வெளிப்புற முறை.'
  },
  {
    slug: 'syrups',
    formulation: 'Syrups',
    title: 'Syrups & Kashayam',
    titleTa: 'சிரப் & கஷாய திரவம்',
    tagline: 'Pleasant, ready-to-take natural elixirs',
    taglineTa: 'எளிதாக அருந்தக்கூடிய சுவையான இயற்கை சிரப்',
    description: 'Concentrated aqueous extracts stabilized with pure jaggery or natural bases for palatable daily consumption, especially suitable for throat and respiratory easing.',
    descriptionTa: 'தொண்டைக்கும் சுவாசத்திற்கும் இதமளிக்கும் வகையில் நறுமண மூலிகைகளுடன் பக்குவப்படுத்தப்பட்ட திரவ வடிவம்.',
    classicalContext: 'Immediate soothing coating of mucosal membranes with no preparation needed.',
    classicalContextTa: 'உடனடியாக பருகக்கூடிய தொண்டைக்கு இதமளிக்கும் எளிய வடிவம்.'
  },
  {
    slug: 'drops',
    formulation: 'Drops',
    title: 'Drops',
    titleTa: 'சொட்டு மருந்து',
    tagline: 'Volatile aromatic inhalants & targeted drops',
    taglineTa: 'நறுமண ஆவி மற்றும் துளி மருந்துகள்',
    description: 'Distilled volatile essential essences tailored for steam inhalation, handkerchief aroma, and direct external relief.',
    descriptionTa: 'மூக்கடைப்பு மற்றும் சைனஸ் பாரத்தை நீக்க ஆவி பிடிக்க பயன்படும் அத்தியாவசிய நறுமண எண்ணெய் வடிவம்.',
    classicalContext: 'Instant olfactory stimulation and nasal channel opening.',
    classicalContextTa: 'நாசி துவாரங்களை உடனடியாக திறக்கும் தீவிர நறுமண முறை.'
  }
];

export const BUNDLES: BundleItem[] = [
  {
    id: 'bundle-01',
    slug: 'pain-and-mobility-collection',
    title: 'Pain & Mobility Collection',
    titleTa: 'மூட்டு & வாத நலம் தொகுப்பு',
    subtitle: 'Dual action: Deep topical soothing + internal joint balance',
    subtitleTa: 'வெளிப்புற தைல மசாஜ் + உள் சூரணம் இரட்டை பலன்',
    concern: 'joint-mobility',
    productSlugs: ['ruthra-rej-viyan-pain-oil', 'ruthra-karanthai-chooranam'],
    regularPrice: 485,
    bundlePrice: 435,
    savings: 50,
    description: 'Combines Ruthra Rej-Viyan Pain Oil (100ml) for topical relief with Ruthra Karanthai Chooranam (30 Sachets) for internal detox of joint tissues.',
    descriptionTa: 'ரெஜ்-வியான் வலி தைலம் (100 மி.லி) மற்றும் கரந்தை சூரணம் (30 பாக்கெட்) அடங்கிய சிறப்பு சலுகை தொகுப்பு.',
    badge: 'Popular Combo'
  },
  {
    id: 'bundle-02',
    slug: 'respiratory-wellness-collection',
    title: 'Respiratory Wellness Collection',
    titleTa: 'சுவாச பாதுகாப்பு தொகுப்பு',
    subtitle: 'Triple synergy: Throat syrup + inhalation drops + chest kudineer',
    subtitleTa: 'இருமல் சிரப் + ஆவி சொட்டு மருந்து + நொச்சி குடிநீர்',
    concern: 'respiratory',
    productSlugs: ['ruthra-sinocof-cough-syrup', 'ruthra-esy-swas-drops', 'ruthra-nochi-kudineer-chooranam'],
    regularPrice: 534,
    bundlePrice: 479,
    savings: 55,
    description: 'Complete respiratory care kit featuring Sinocof Cough Syrup (100ml), Esy Swas Drops (50ml), and Nochi Kudineer Chooranam (100g).',
    descriptionTa: 'சினோகாஃப் இருமல் சிரப் + ஈஸி ஸ்வாஸ் சொட்டு மருந்து + நொச்சி குடிநீர் அடங்கிய முழுமையான குடும்ப சுவாச தொகுப்பு.',
    badge: 'Seasonal Essential'
  }
];
