import { Product, ConcernCategory, FormulationCategory, BundleItem, ConcernSlug } from '@/types/product';

export const PRODUCTS: Product[] = [

  // ==========================================
  // 1. RUTHRA FLAGSHIP PROPRIETARY FORMULATIONS (10 SKUs)
  // ==========================================
  {
    id: 'prod-prop-01',
    name: 'Ruthra Madhura Powder',
    tamilName: 'ருத்ரா மதுரா பவுடர்',
    slug: 'ruthra-madhura-powder',
    medicalSystem: 'proprietary',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['metabolic-wellness', 'digestive-wellness'],
    price: 240,
    originalPrice: 280,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Specially crafted proprietary botanical blend supporting natural glycemic balance, healthy digestion, and metabolic vitality.',
    shortDescriptionTa: 'இயற்கையான சர்க்கரை சமநிலை, செரிமான ஆற்றல் மற்றும் உடல் புத்துணர்ச்சியை ஆதரிக்கும் சிறப்பு மூலிகைப் பொடி.',
    description: 'Ruthra Madhura Powder is an authentic proprietary formulation combining Syzygium cumini (Jamun), Gymnema sylvestre (Meshashringi), Momordica charantia (Karela), and Vijaysar. It aids in optimizing healthy carbohydrate metabolism, maintaining healthy blood sugar levels, and revitalizing pancreatic functions.',
    descriptionTa: 'நாவல் விதை, சிறுகுறிஞ்சான், பாகற்காய், வேங்கை மரம் உள்ளிட்ட சக்திவாய்ந்த மூலிகைகளின் கூட்டுக்கலவை. ரத்த சர்க்கரை அளவை சீராக்கவும் கணைய செயல்பாட்டை பலப்படுத்தவும் உதவுகிறது.',
    traditionalRole: 'Supports balanced glycemic response and metabolic equilibrium.',
    traditionalRoleTa: 'சர்க்கரை சமநிலை மற்றும் செரிமான செயல்பாடுகளை சீராக்க உதவுகிறது.',
    badge: 'Proprietary Blend',
    badgeTa: 'சிறப்பு மூலிகை தயாரிப்பு',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Jamun Seed (Syzygium cumini)', tamilName: 'நாவல் விதை', botanicalName: 'Syzygium cumini', role: 'Helps regulate blood glucose levels', roleTa: 'சர்க்கரை அளவை சமன் செய்யும்', amount: '30%' },
      { name: 'Meshashringi (Gymnema sylvestre)', tamilName: 'சிறுகுறிஞ்சான்', botanicalName: 'Gymnema sylvestre', role: 'Sugar destroyer botanical', roleTa: 'இனிப்பு உறிஞ்சுதலை தடுக்கும்', amount: '25%' },
      { name: 'Karela (Momordica charantia)', tamilName: 'பாகற்காய்', botanicalName: 'Momordica charantia', role: 'Promotes cellular glucose uptake', roleTa: 'செரிமானத்தை தூண்டும்', amount: '25%' },
      { name: 'Vijaysar (Pterocarpus marsupium)', tamilName: 'வேங்கை', botanicalName: 'Pterocarpus marsupium', role: 'Rejuvenates pancreatic beta cells', roleTa: 'கணையத்தை பலப்படுத்தும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Take with Warm Water', titleTa: 'வெந்நீரில் உட்கொள்ளவும்', instruction: 'Take 3-5g powder with warm water before food.', instructionTa: 'உணவுக்கு முன் 3-5 கிராம் பொடியை வெந்நீரில் கலக்கி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3g before breakfast',
      evening: '3g before dinner',
      timing: 'Before meals with warm water',
      with: 'Warm water',
      morningTa: 'காலை 3 கிராம் உணவுக்கு முன்',
      eveningTa: 'இரவு 3 கிராம் உணவுக்கு முன்',
      timingTa: 'உணவுக்கு முன்',
      withTa: 'வெதுவெதுப்பான நீர்'
    },
    safety: {
      contraindications: 'Consult physician if on intense hypoglycemic therapy.',
      precautions: 'Monitor blood sugar levels regularly.',
      contraindicationsTa: 'மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'சர்க்கரை அளவை தொடர்ந்து கண்காணிக்கவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'ஈரப்பதம் படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'When is the best time to take Madhura Powder?', answer: 'Take 30 minutes prior to meals with warm water.', questionTa: 'எப்போது சாப்பிட வேண்டும்?', answerTa: 'உணவுக்கு 30 நிமிடங்களுக்கு முன் வெந்நீரில் சாப்பிடவும்.' }
    ],
    searchKeywords: ['madhura powder', 'glycemic care', 'diabetes support', 'sugar care'],
    tamilKeywords: ['மதுரா பவுடர்', 'சர்க்கரை நோய்', 'நாவல் விதை பொடி'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-prop-02',
    name: 'Ruthra Navara Tablet',
    tamilName: 'ருத்ரா நவரா மாத்திரை',
    slug: 'ruthra-navara-tablet',
    medicalSystem: 'proprietary',
    formulation: 'Tablet',
    formulationTa: 'மாத்திரை',
    concerns: ['joint-mobility', 'metabolic-wellness'],
    price: 320,
    originalPrice: 380,
    packSize: '60 Tablets',
    packSizeTa: '60 மாத்திரைகள்',
    shortDescription: 'Nutritive restorative tablet formulation for physical strength, nerve nourishment, and neuromuscular vigor.',
    shortDescriptionTa: 'உடல் வலிமை, நரம்பு உறுதி மற்றும் தசை புத்துணர்ச்சி தரும் சத்து நிறைந்த மூலிகை மாத்திரை.',
    description: 'Ruthra Navara Tablet utilizes the rejuvenative and nourishing essence of Navara red rice processed with strengthening herbs such as Ashwagandha, Bala, and Shatavari. It serves as an effective nutritional support for muscle weakness, joint debility, and convalescence.',
    descriptionTa: 'பாரம்பரிய நவர நெல் சத்து மற்றும் அஸ்வகந்தா, சிற்றாமுட்டி, தண்ணீர்விட்டான் கிழங்கு அடங்கிய ஊட்டச்சத்து மாத்திரை. நரம்பு தளர்ச்சி மற்றும் உடல் சோர்வை நீக்கி புத்துணர்ச்சி தரும்.',
    traditionalRole: 'Nourishes neuromuscular tissues and restores stamina.',
    traditionalRoleTa: 'நரம்பு தளர்ச்சி, தசை சோர்வை போக்கி பலம் தரும்.',
    badge: 'Vitality Booster',
    badgeTa: 'உடல் பலம் தரும் மாத்திரை',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Navara Rice Extract', tamilName: 'நவரா நெல் சாறு', botanicalName: 'Oryza sativa (Navara)', role: 'Deep tissue nourishment and strength', roleTa: 'திசு பலம் மற்றும் சத்து தரும்', amount: '35%' },
      { name: 'Ashwagandha', tamilName: 'அமுக்கரா', botanicalName: 'Withania somnifera', role: 'Nerve tonic and rejuvenator', roleTa: 'நரம்பு டானிக்', amount: '25%' },
      { name: 'Bala (Sida cordifolia)', tamilName: 'சிற்றாமுட்டி', botanicalName: 'Sida cordifolia', role: 'Strengthens muscles and tendons', roleTa: 'தசைகளுக்கு வலிமை தரும்', amount: '20%' },
      { name: 'Shatavari', tamilName: 'தண்ணீர்விட்டான் கிழங்கு', botanicalName: 'Asparagus racemosus', role: 'Nutritive and stamina booster', roleTa: 'உடல் பலம் தரும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Oral Intake with Milk or Water', titleTa: 'பால் அல்லது தண்ணீருடன் உட்கொள்ளவும்', instruction: 'Take 1-2 tablets twice daily after food.', instructionTa: 'உணவுக்குப் பின் 1-2 மாத்திரைகள் பால் அல்லது வெந்நீருடன் உட்கொள்ளவும்.' }
    ],
    dosage: {
      morning: '1-2 tablets after breakfast',
      evening: '1-2 tablets after dinner',
      timing: 'After meals',
      with: 'Warm milk or water',
      morningTa: 'காலை 1-2 மாத்திரை உணவுக்குப் பின்',
      eveningTa: 'இரவு 1-2 மாத்திரை உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான பால் அல்லது நீர்'
    },
    safety: {
      contraindications: 'Safe for long-term nutritive use.',
      precautions: 'Follow recommended daily dosage.',
      contraindicationsTa: 'பக்கவிளைவுகள் அற்ற பாதுகாப்பான தயாரிப்பு.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'ஈரப்பதம் படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Who can take Navara Tablet?', answer: 'Anyone experiencing fatigue, nerve weakness, or recovering from illness.', questionTa: 'யார் சாப்பிடலாம்?', answerTa: 'உடல் சோர்வு, நரம்பு தளர்ச்சி உள்ள அனைவரும் சாப்பிடலாம்.' }
    ],
    searchKeywords: ['navara tablet', 'stamina', 'vitality', 'nerve tonic', 'strength'],
    tamilKeywords: ['நவரா மாத்திரை', 'உடல் பலம்', 'நரம்பு தளர்ச்சி மாத்திரை'],
    inStock: true,
    featured: false
  },

{
    id: 'prod-30',
    name: 'Ruthra Sinocof Syrup',
    tamilName: 'ருத்ரா சினோகாஃப் இருமல் சிரப்',
    slug: 'ruthra-sinocof-syrup',
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
      { name: 'Ruthra Sinocof Syrup', tamilName: 'ஆடாதோடை', botanicalName: 'Justicia adhatoda', role: 'Liquefies tenacious bronchial sputum', roleTa: 'நெஞ்சு சளியை இளக்கும் முதன்மை மூலிகை', amount: '30%' },
      { name: 'Ruthra Sinocof Syrup', tamilName: 'துளசி', botanicalName: 'Ocimum sanctum', role: 'Antiviral, antibacterial, and immune support', roleTa: 'கிருமி நாசினி மற்றும் நோய் எதிர்ப்பு', amount: '25%' },
      { name: 'Ruthra Sinocof Syrup', tamilName: 'அதிமதுரம்', botanicalName: 'Glycyrrhiza glabra', role: 'Coats and soothes raw, inflamed throat membranes', roleTa: 'தொண்டை புண்களை ஆற்றும் இதமான மூலிகை', amount: '25%' },
      { name: 'Ruthra Sinocof Syrup', tamilName: 'கண்டங்கத்திரி & திப்பிலி', botanicalName: 'Herbal Bio-actives', role: 'Bronchodilator and eases breathing', roleTa: 'சுவாச குழாயை தளர்த்தி எளிதாக மூச்சு விட உதவும்', amount: '20%' }
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
    searchKeywords: ['sinocof', 'cough syrup', 'cold', 'cough', 'asthma', 'bronchitis', 'non-drowsy', 'adathodai', 'thulasi'],
    tamilKeywords: ['சினோகாஃப்', 'இருமல் சிரப்', 'சளி', 'இருமல்', 'ஆஸ்துமா', 'ஆடாதோடை', 'துளசி'],
    inStock: true,
    featured: true
  },

{
    id: 'prod-32',
    name: 'Ruthra Esyswas Drops',
    tamilName: 'ருத்ரா ஈஸி-ஸ்வாஸ் சொட்டு மருந்து',
    slug: 'ruthra-esyswas-drops',
    medicalSystem: 'proprietary',
    formulation: 'Drops',
    formulationTa: 'சொட்டு மருந்து',
    concerns: ['respiratory'],
    price: 198,
    originalPrice: 220,
    packSize: '50ml',
    packSizeTa: '50 மி.லி',
    shortDescription: 'High-potency aromatic steam inhalation drops & chest rub for instant relief from blocked nose, sinus congestion, wheezing, and asthma.',
    shortDescriptionTa: 'மூக்கடைப்பு, சைனஸ் பாரம், ஆஸ்துமா, வீசிங் மற்றும் கடுமையான சளி தொல்லையிலிருந்து உடனடியாக நிவாரணம் தரும் ஆவி பிடிக்கும் மூலிகை சொட்டு மருந்து.',
    description: 'Ruthra Esy-swas Drops is a therapeutic aromatic botanical formulation composed of Nilgiri oil (Eucalyptus), Pudina Sathuva (Menthol crystals), Karpooram (Camphor), and Ajwain extracts. Just 3-5 drops in boiling water releases penetrating vapors that immediately unblock congested sinus cavities, dissolve upper respiratory phlegm, and restore free breathing.',
    descriptionTa: 'ஈஸி-ஸ்வாஸ் சொட்டு மருந்து நீலகிரி தைலம், புதினா உப்பு, பச்சை கற்பூரம் மற்றும் ஓம திரவம் சேர்ந்த சக்திவாய்ந்த மருந்து. சுடுநீரில் சில துளிகள் விட்டு ஆவி பிடித்தால் அடைத்த மூக்கு உடனடியாக திறந்து சுவாசப்பாதை சுத்தமாகும்.',
    traditionalRole: 'Aromatic steam inhalation & rubefacient for nasal block, sinusitis, wheezing, COPD, and head heaviness.',
    traditionalRoleTa: 'மூக்கடைப்பு, சைனஸ் தலைபாரம், ஆஸ்துமா மற்றும் மூச்சுத்திணறல் நிவாரணம்.',
    badge: 'Instant Sinus Relief',
    badgeTa: 'உடனடி சைனஸ் நிவாரணம்',
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
      { name: 'Ruthra Esyswas Drops', tamilName: 'நீலகிரி தைலம்', botanicalName: 'Eucalyptus globulus', role: 'Potent decongestant and bronchodilator', roleTa: 'மூக்கடைப்பை நீக்கி சுவாசத்தை சீராக்கும்', amount: '35%' },
      { name: 'Ruthra Esyswas Drops', tamilName: 'புதினா உப்பு', botanicalName: 'Mentha piperita', role: 'Cooling airflow enhancer and opens nasal passages', roleTa: 'குளிர்ச்சியான தடையற்ற சுவாசத்தை தரும்', amount: '25%' },
      { name: 'Ruthra Esyswas Drops', tamilName: 'பச்சை கற்பூரம்', botanicalName: 'Cinnamomum camphora', role: 'Soothes sinus inflammation and head heaviness', roleTa: 'தலைபாரத்தை போக்கும் கற்பூரம்', amount: '25%' },
      { name: 'Ruthra Esyswas Drops', tamilName: 'ஓம திரவம்', botanicalName: 'Trachyspermum ammi', role: 'Antispasmodic for wheezing and tight chest', roleTa: 'நெஞ்சு இறுக்கத்தை தளர்த்தும்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Steam Inhalation', titleTa: 'ஆவி பிடித்தல்', instruction: 'Add 3-5 drops to a bowl of steaming hot water.', instructionTa: 'கொதிக்கும் வெந்நீரில் 3 முதல் 5 துளிகள் விடவும்.' },
      { step: '02', title: 'Inhale Deeply', titleTa: 'ஆழமாக சுவாசிக்கவும்', instruction: 'Inhale vapors deeply for 5-10 minutes with eyes closed.', instructionTa: 'கண்களை மூடிக்கொண்டு 5-10 நிமிடங்கள் ஆழமாக சுவாசிக்கவும்.' },
      { step: '03', title: 'Topical Rub (Optional)', titleTa: 'லேசாக தடவவும்', instruction: 'Can also apply 1-2 drops directly onto chest and throat.', instructionTa: '1-2 துளிகள் மார்பு மற்றும் தொண்டையில் லேசாக தடவலாம்.' }
    ],
    dosage: {
      amount: '3 to 5 drops per inhalation session',
      frequency: '2 to 3 times daily',
      timing: 'As needed for congestion',
      vehicle: 'Boiling steam water or direct topical smear',
      amountTa: '3 முதல் 5 துளிகள்',
      frequencyTa: 'தினமும் 2-3 முறை',
      timingTa: 'தேவைப்படும் போது',
      vehicleTa: 'ஆவி பிடிக்க சுடுநீரில் அல்லது மார்பில் தடவ'
    },
    safety: {
      pregnancy: 'Completely safe for steam inhalation.',
      pregnancyTa: 'ஆவி பிடிக்க முற்றிலும் பாதுகாப்பானது.',
      children: 'Safe for children above 3 years under parental supervision.',
      childrenTa: '3 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு பெரியவர்கள் முன்னிலையில் கொடுக்கலாம்.',
      interactions: 'Safe with all internal oral medications.',
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

{
    id: 'prod-27',
    name: 'Ruthra Ulcera Oil',
    tamilName: 'ருத்ரா அல்சரா புண் ஆற்று தைலம்',
    slug: 'ruthra-ulcera-oil',
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
      { name: 'Ruthra Ulcera Oil', tamilName: 'குப்பைமேனி', botanicalName: 'Acalypha indica', role: 'Potent antimicrobial and wound purifier', roleTa: 'கிருமி நாசினி மற்றும் புண் சுத்திகரிப்பு', amount: '35%' },
      { name: 'Ruthra Ulcera Oil', tamilName: 'கஸ்தூரி மஞ்சள்', botanicalName: 'Curcuma aromatica', role: 'Accelerates granulation and tissue regeneration', roleTa: 'புதிய திசுக்களை உருவாக்கி புண்ணை ஆற்றும்', amount: '25%' },
      { name: 'Ruthra Ulcera Oil', tamilName: 'வேப்பெண்ணெய்', botanicalName: 'Azadirachta indica', role: 'Suppresses bacterial biofilms and fungal infection', roleTa: 'புற்று மற்றும் பாக்டீரியா தொற்று தடுப்பு', amount: '20%' },
      { name: 'Ruthra Ulcera Oil', tamilName: 'தூய தேங்காய் எண்ணெய்', botanicalName: 'Cocos nucifera', role: 'Cooling emollient base for non-stick dressing', roleTa: 'குளிர்ச்சி தந்து புண்ணை மென்மையாக்கும்', amount: '20%' }
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
    id: 'prod-26',
    name: 'Ruthra Rejviyan Oil',
    tamilName: 'ருத்ரா ரெஜ்-வியான் வலி நிவாரண தைலம்',
    slug: 'ruthra-rejviyan-oil',
    medicalSystem: 'proprietary',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['joint-mobility'],
    price: 200,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Fast-penetrating classical botanical massage oil for rapid relief from neck, shoulder, knee, heel, and lower back pain, muscle spasms, and sprains.',
    shortDescriptionTa: 'கழுத்து, தோள்பட்டை, முழங்கால், குதிகால் மற்றும் இடுப்பு வலி, சுளுக்கு மற்றும் தசை பிடிப்புகளுக்கு உடனடி நிவாரணம் தரும் மூலிகை வலி தைலம்.',
    description: 'Ruthra Rej-Viyan Pain Oil is crafted by slow-cooking anti-inflammatory botanicals including Mudakathan, Vatha Narayana, Nilgiri oil, and Camphor in pure unrefined sesame oil. It delivers deep transdermal penetration to pacify inflamed joint capsules, resolve swelling, relax locked muscle fibers, and restore smooth mobility.',
    descriptionTa: 'ரெஜ்-வியான் வலி தைலம் முடக்கத்தான், வாத நாராயணன், கற்பூரம், தைல இலை எண்ணெய் கொண்டு பாரம்பரிய முறைப்படி காய்ச்சப்படுகிறது. இது மூட்டுகளில் ஆழமாக ஊடுருவி, வீக்கத்தை குறைத்து, கடுமையான வலியை உடனடியாக போக்கும்.',
    traditionalRole: 'Topical analgesic for neck, shoulder, knee, heel, back pain, muscle spasms, and sprains.',
    traditionalRoleTa: 'கழுத்து, தோள்பட்டை, மூட்டு, இடுப்பு, குதிகால் வலி மற்றும் சுளுக்கு நிவாரணம்.',
    badge: 'Top Selling Pain Oil',
    badgeTa: 'முதன்மையான வலி தைலம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: [
      '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
      '/images/products/ruthra-rej-viyan-pain-oil/angle.jpg',
      '/images/products/ruthra-rej-viyan-pain-oil/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
      '/images/products/ruthra-rej-viyan-pain-oil/angle.jpg',
      '/images/products/ruthra-rej-viyan-pain-oil/back.jpg'
    ],
    ingredients: [
      { name: 'Ruthra Rejviyan Oil', tamilName: 'முடக்கத்தான்', botanicalName: 'Cardiospermum halicacabum', role: 'Dissolves uric acid crystals and joint stiffness', roleTa: 'மூட்டு பிடிப்பு மற்றும் வாதத்தை போக்கும்', amount: '30%' },
      { name: 'Ruthra Rejviyan Oil', tamilName: 'வாத நாராயணன்', botanicalName: 'Delonix elata', role: 'Calms acute neuropathic shooting pain', roleTa: 'நரம்பு குடைச்சலை நீக்கும்', amount: '25%' },
      { name: 'Ruthra Rejviyan Oil', tamilName: 'பச்சை கற்பூரம்', botanicalName: 'Cinnamomum camphora', role: 'Promotes rapid micro-vascular absorption and cooling relief', roleTa: 'விரைவாக ஊடுருவி உடனடி நிவாரணம் தரும்', amount: '15%' },
      { name: 'Ruthra Rejviyan Oil', tamilName: 'நீலகிரி தைலம்', botanicalName: 'Eucalyptus globulus', role: 'Warming analgesic for tense muscle fibers', roleTa: 'தசை வலிகளை தளர்த்தும்', amount: '15%' },
      { name: 'Ruthra Rejviyan Oil', tamilName: 'நல்லெண்ணெய்', botanicalName: 'Sesamum indicum', role: 'Deep penetrating transdermal lipid base', roleTa: 'ஆழமாக ஊடுருவும் தூய நல்லெண்ணெய்', amount: '15%' }
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
    tamilKeywords: ['ரெஜ்-வியான்', 'வலி தைலம்', 'மூட்டு வலி', 'இடுப்பு வலி', 'சுளுக்கு', 'கழுத்து வலி'],
    inStock: true,
    featured: true
  },

{
    id: 'prod-28',
    name: 'Ruthra Narshika Oil',
    tamilName: 'ருத்ரா நார்ஷிகா மூலிகை கூந்தல் தைலம்',
    slug: 'ruthra-narshika-oil',
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
      { name: 'Ruthra Narshika Oil', tamilName: 'கரிசலாங்கண்ணி', botanicalName: 'Eclipta prostrata', role: 'Reactivates dormant hair follicles and darkens pigment', roleTa: 'கூந்தல் வேர்களை தூண்டி கருமையை தரும்', amount: '30%' },
      { name: 'Ruthra Narshika Oil', tamilName: 'பொடுதலை', botanicalName: 'Phyla nodiflora', role: 'Sovereign anti-dandruff and scalp antifungal herb', roleTa: 'பொடுகு மற்றும் தலையில் அரிப்பை நீக்கும்', amount: '25%' },
      { name: 'Ruthra Narshika Oil', tamilName: 'நெல்லிக்காய்', botanicalName: 'Phyllanthus emblica', role: 'Vitamin C antioxidant booster for follicle strength', roleTa: 'வைட்டமின் சி மற்றும் கூந்தல் வேர் ஊட்டச்சத்து', amount: '20%' },
      { name: 'Ruthra Narshika Oil', tamilName: 'வெட்டிவேர் & கஸ்தூரி மஞ்சள்', botanicalName: 'Aromatics', role: 'Scalp cooling and natural fragrance', roleTa: 'தலை குளிர்ச்சி மற்றும் நறுமணம்', amount: '15%' },
      { name: 'Ruthra Narshika Oil', tamilName: 'மரச்செக்கு தேங்காய் எண்ணெய்', botanicalName: 'Cocos nucifera', role: 'Cold-pressed virgin lipid base', roleTa: 'மரச்செக்கு தூய தேங்காய் எண்ணெய்', amount: '10%' }
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
    id: 'prod-31',
    name: 'Ruthra Ramabaana Kasayam',
    tamilName: 'ருத்ரா ராமபாண திரவ கஷாயம்',
    slug: 'ruthra-ramabaana-kasayam',
    medicalSystem: 'proprietary',
    formulation: 'Syrup & Kashayam',
    formulationTa: 'திரவ கஷாயம்',
    concerns: ['respiratory'],
    price: 240,
    originalPrice: 280,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Potent liquid kashayam for all acute and infectious fevers, reducing pyrexia symptoms, body ache, eye burning, elevated WBC, and restoring low platelet counts.',
    shortDescriptionTa: 'அனைத்து வகை விஷக் காய்ச்சல், குளிர் காய்ச்சல், உடல் வலி, கண் எரிச்சல் மற்றும் குறைந்த இரத்த தட்டணுக்களை (Platelets) விரைவாக உயர்த்தும் திரவ கஷாயம்.',
    description: 'Ruthra Ramabana Kashayam is a clinical liquid decoction containing Nilavembu, Papaya leaf extract, Seenthil (Guduchi), Vettiver, and Peiperatti. Proven to rapidly pacify infectious fevers, ease heavy limb and joint pain, normalize elevated white blood cell counts, and naturally elevate declining platelet levels in dengue and viral infections.',
    descriptionTa: 'ராமபாண திரவ கஷாயம் நிலவேம்பு, பப்பாளி இலை சாறு, சீந்தில், வெட்டிவேர் மற்றும் பேய்புடல் உள்ளிட்ட மூலிகைகளால் காய்ச்சப்படுகிறது. இது விஷக்காய்ச்சல், டெங்கு, சிக்குன்குனியா போன்ற நோய்களில் குறையும் இரத்த தட்டணுக்களை (Platelets) விரைவாக உயர்த்தும்.',
    traditionalRole: 'Reduces high fever, bodily burning sensation, restores low platelet counts, and speeds convalescence.',
    traditionalRoleTa: 'காய்ச்சல் நிவாரணம், தட்டணுக்கள் உயர்வு (Platelet Booster) மற்றும் உடல் சோர்வு நீக்கம்.',
    badge: 'Clinical Fever & Platelet Care',
    badgeTa: 'காய்ச்சல் & தட்டணுக்கள் உயர்வு',
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
      { name: 'Ruthra Ramabaana Kasayam', tamilName: 'நிலவேம்பு', botanicalName: 'Andrographis paniculata', role: 'Broad-spectrum antiviral and antipyretic', roleTa: 'காய்ச்சலை கட்டுப்படுத்தும் முதன்மை மூலிகை', amount: '30%' },
      { name: 'Ruthra Ramabaana Kasayam', tamilName: 'பப்பாளி இலை சாறு', botanicalName: 'Carica papaya', role: 'Stimulates thrombopoiesis and elevates platelet counts', roleTa: 'இரத்த தட்டணுக்களை (Platelets) அதிகரிக்கும்', amount: '25%' },
      { name: 'Ruthra Ramabaana Kasayam', tamilName: 'சீந்தில் கொடி', botanicalName: 'Tinospora cordifolia', role: 'Immunomodulator and cellular vitality protector', roleTa: 'நோய் எதிர்ப்பு சக்தியை பலப்படுத்தும்', amount: '25%' },
      { name: 'Ruthra Ramabaana Kasayam', tamilName: 'வெட்டிவேர் & சந்தனம்', botanicalName: 'Cooling Botanicals', role: 'Calms internal morbid heat and burning sensation', roleTa: 'உடல் சூடு மற்றும் கண் எரிச்சலை தணிக்கும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Measure Dosage', titleTa: 'அளவு', instruction: 'Take 10ml to 15ml decoction.', instructionTa: '10 முதல் 15 மி.லி எடுக்கவும்.' },
      { step: '02', title: 'Dilute with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Mix with 30ml warm water.', instructionTa: '30 மி.லி வெதுவெதுப்பான நீரில் கலந்து பருகவும்.' },
      { step: '03', title: 'Take Post Meals', titleTa: 'உணவுக்கு பின்', instruction: 'Take twice or thrice daily before or after food as needed.', instructionTa: 'தினமும் 2-3 வேளை பருகவும்.' }
    ],
    dosage: {
      amount: 'Adults: 15ml; Children: 5ml - 7.5ml',
      frequency: '2 to 3 times daily',
      timing: 'Pre/Post meal',
      vehicle: 'Diluted with equal warm water',
      amountTa: 'பெரியவர்களுக்கு 15 மி.லி; சிறார்களுக்கு 5 - 7.5 மி.லி',
      frequencyTa: 'தினமும் 2-3 முறை',
      timingTa: 'உணவுக்கு முன் அல்லது பின்',
      vehicleTa: 'சம அளவு வெதுவெதுப்பான நீரில் கலந்து'
    },
    safety: {
      pregnancy: 'Physician guidance advised during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Safe in pediatric doses for viral fevers.',
      childrenTa: 'குழந்தைகளுக்கு காய்ச்சலின் போது மருத்துவர் ஆலோசனைப்படி வழங்கலாம்.',
      interactions: 'Can be taken alongside paracetamol with a 1-hour interval.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளியில் உட்கொள்ளலாம்.',
      precautions: ['Check CBC platelet count periodically in viral fevers.'],
      precautionsTa: ['காய்ச்சல் உள்ள போது தட்டணுக்கள் பரிசோதனை செய்யவும்.']
    },
    storage: {
      conditions: 'Store in a cool dry place away from heat.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does Ramabana Kashayam help increase low platelets in dengue?',
        questionTa: 'டெங்கு காய்ச்சலில் குறையும் பிளேட்லெட்டுகளை இது அதிகரிக்குமா?',
        answer: 'Yes, clinical extracts of Carica papaya leaf and Nilavembu act synergistically to boost platelet counts naturally.',
        answerTa: 'ஆம், பப்பாளி இலை மற்றும் நிலவேம்பு சாறு இரத்த தட்டணுக்களை விரைவாக உயர்த்த பெரிதும் உதவும்.'
      }
    ],
    searchKeywords: ['ramabana kashayam', 'fever', 'platelets', 'dengue', 'nilavembu', 'papaya leaf', 'viral fever'],
    tamilKeywords: ['ராமபாண கஷாயம்', 'காய்ச்சல்', 'பிளேட்லெட்', 'டெங்கு', 'நிலவேம்பு', 'பப்பாளி இலை'],
    inStock: true,
    featured: true
  },

  {
    id: 'prod-prop-09',
    name: "Ruthra's Nalanguma Powder",
    tamilName: "ருத்ராவின் நலங்கு மாவு பொடி",
    slug: 'ruthras-nalanguma-powder',
    medicalSystem: 'proprietary',
    formulation: 'Powder',
    formulationTa: 'பொடி',
    concerns: ['skin-hair'],
    price: 180,
    originalPrice: 220,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Traditional therapeutic herbal bath powder for luminous skin complexion, cooling body comfort, and blemish-free skin.',
    shortDescriptionTa: 'இயற்கையான சருமப் பொலிவு, உடல் குளிர்ச்சி மற்றும் கரும்புள்ளிகளை நீக்கும் பாரம்பரிய மூலிகை நலங்கு மாவு குளியல் பொடி.',
    description: "Ruthra's Nalanguma Powder is an artisanal herbal bath formulation prepared with fragrant wild turmeric (Kasturi Manjal), Rose petals, Poolankilangu, Vetiver, and Green gram. It gently exfoliates dead cells, clears skin blemishes, regulates excess sebum, and leaves skin refreshed and naturally aromatic without chemical sulfates.",
    descriptionTa: 'கஸ்தூரி மஞ்சள், ரோஜா இதழ், பூலாங்கிழங்கு, வெட்டிவேர் மற்றும் பாசிப்பயறு கொண்டு தயாரிக்கப்பட்ட பாரம்பரிய நலங்கு மாவு. உடலுக்கு குளிர்ச்சியையும் முகத்திற்கு பொலிவையும் தரும்.',
    traditionalRole: 'Natural herbal cleanser, skin radiance promoter, and body cooling bath powder.',
    traditionalRoleTa: 'இயற்கை குளியல் பொடி, சரும பளபளப்பு மற்றும் உடல் குளிர்ச்சி தரும்.',
    badge: 'Traditional Skin Care',
    badgeTa: 'பாரம்பரிய சருமப் பராமரிப்பு',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Kasturi Manjal (Wild Turmeric)', tamilName: 'கஸ்தூரி மஞ்சள்', botanicalName: 'Curcuma aromatica', role: 'Skin brightening and antibacterial', roleTa: 'சரும பொலிவு தரும்', amount: '25%' },
      { name: 'Poolankilangu (White Turmeric)', tamilName: 'பூலாங்கிழங்கு', botanicalName: 'Curcuma zedoaria', role: 'Aromatic skin coolant', roleTa: 'நறுமணம் மற்றும் குளிர்ச்சி தரும்', amount: '20%' },
      { name: 'Vetiver (Khus)', tamilName: 'வெட்டிவேர்', botanicalName: 'Chrysopogon zizanioides', role: 'Calms skin heat and irritation', roleTa: 'உடல் சூட்டை தணிக்கும்', amount: '20%' },
      { name: 'Rose Petals', tamilName: 'ரோஜா இதழ்கள்', botanicalName: 'Rosa damascena', role: 'Skin toning and natural fragrance', roleTa: 'தோல் மென்மையாக்கும்', amount: '15%' },
      { name: 'Green Gram Flour (Moong)', tamilName: 'பாசிப்பயறு', botanicalName: 'Vigna radiata', role: 'Gentle natural skin cleanser base', roleTa: 'இயற்கையான அழுக்கு நீக்கி', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Make a Paste', titleTa: 'குழைத்து பூசவும்', instruction: 'Mix 2-3 tablespoons with water or rose water to form a smooth paste.', instructionTa: '2-3 ஸ்பூன் பொடியை தண்ணீர் அல்லது பன்னீரில் குழைக்கவும்.' },
      { step: '02', title: 'Apply and Rinse', titleTa: 'தேய்த்துக் குளிக்கவும்', instruction: 'Apply over body and face, massage gently, and rinse with plain water.', instructionTa: 'உடல் மற்றும் முகத்தில் தேய்த்து மென்மையாக மசாஜ் செய்து குளிக்கவும்.' }
    ],
    dosage: {
      timing: 'Use during daily bath instead of chemical soap',
      with: 'Water or Rose water or Curd',
      timingTa: 'தினசரி குளியலின் போது சோப்பிற்கு பதிலாக பயன்படுத்தவும்',
      withTa: 'தண்ணீர், பன்னீர் அல்லது தயிர்'
    },
    safety: {
      contraindications: 'For external use only.',
      precautions: 'Do a patch test before first facial application.',
      contraindicationsTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்.',
      precautionsTa: 'கண்களில் படாமல் உபயோகிக்கவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep away from moisture',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'ஈரப்பதம் படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Can babies and kids use this?', answer: 'Yes, it is 100% natural, herbal, and chemical-free.', questionTa: 'குழந்தைகளுக்கு பயன்படுத்தலாமா?', answerTa: 'ஆம், 100% இயற்கை மூலிகைகளால் ஆனது என்பதால் தாராளமாக பயன்படுத்தலாம்.' }
    ],
    searchKeywords: ['nalanguma powder', 'bath powder', 'herbal soap alternative', 'skin glowing powder', 'kasturi manjal bath'],
    tamilKeywords: ['நலங்கு மாவு பொடி', 'குளியல் பொடி', 'கஸ்தூரி மஞ்சள் குளியல் பொடி'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-prop-10',
    name: "Ruthra's Shigakai Powder",
    tamilName: "ருத்ராவின் சிகைக்காய் பொடி",
    slug: 'ruthras-shigakai-powder',
    medicalSystem: 'proprietary',
    formulation: 'Powder',
    formulationTa: 'பொடி',
    concerns: ['skin-hair'],
    price: 190,
    originalPrice: 230,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Pure botanical hair wash powder that promotes voluminous hair growth, stops hair fall, and eliminates dandruff naturally.',
    shortDescriptionTa: 'முடி உதிர்வை தடுத்து, பொடுகை போக்கி அடர்த்தியான கூந்தல் வளர்ச்சி தரும் தூய மூலிகை சிகைக்காய் பொடி.',
    description: "Ruthra's Shigakai Powder is traditionally compounded with premium Senegalia rugata (Shikakai), Sapindus mukorossi (Soapnut / Reetha), Hibiscus flower, Amla, and Fenugreek. It conditions hair strands, deep cleans scalp sebum, prevents premature graying, and enhances natural lustrous hair bounce without stripping natural essential oils.",
    descriptionTa: 'சீயக்காய், பூவந்திக்கொட்டை, செம்பருத்தி, நெல்லி மற்றும் வெந்தயம் கலந்த உன்னத மூலிகை தலைக்குளியல் பொடி. வேர்க்கால்களை பலப்படுத்தி பொடுகு மற்றும் முடி கொட்டுதலை நிறுத்தும்.',
    traditionalRole: 'Scalp cleanser, anti-dandruff hair cleanser, and natural conditioner.',
    traditionalRoleTa: 'பொடுகு நீக்கி, கூந்தல் வேர்களை பலப்படுத்தும் இயற்கை சிகைக்காய்.',
    badge: '100% Natural Hair Wash',
    badgeTa: 'தூய மூலிகை சிகைக்காய்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Shikakai (Senegalia rugata)', tamilName: 'சிகைக்காய்', botanicalName: 'Senegalia rugata', role: 'Natural foaming hair cleanser and conditioner', roleTa: 'இயற்கை நுரை மற்றும் கண்டிஷனர்', amount: '35%' },
      { name: 'Reetha (Soapnut)', tamilName: 'பூவந்திக்கொட்டை', botanicalName: 'Sapindus mukorossi', role: 'Deep scalp oil removal', roleTa: 'அழுக்கை ஆழமாக நீக்கும்', amount: '20%' },
      { name: 'Hibiscus Petals (Sembaruthi)', tamilName: 'செம்பருத்தி பூ', botanicalName: 'Hibiscus rosa-sinensis', role: 'Promotes silky soft hair bounce', roleTa: 'கூந்தலை பட்டு போல் மென்மையாக்கும்', amount: '15%' },
      { name: 'Amla (Indian Gooseberry)', tamilName: 'நெல்லிக்காய்', botanicalName: 'Phyllanthus emblica', role: 'Vitamin C rich hair follicle tonic', roleTa: 'முடி வளர்ச்சியை தூண்டும்', amount: '15%' },
      { name: 'Fenugreek (Vendhayam)', tamilName: 'வெந்தயம்', botanicalName: 'Trigonella foenum-graecum', role: 'Cooling conditioning agent and dandruff fighter', roleTa: 'உடல் சூட்டை தணித்து பொடுகு நீக்கும்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Prepare Paste', titleTa: 'பேஸ்ட் தயார் செய்க', instruction: 'Mix 2-3 tablespoons with warm water or rice water to make a creamy lather.', instructionTa: '2-3 ஸ்பூன் பொடியை வெதுவெதுப்பான நீர் அல்லது சாதம் வடித்த தண்ணீரில் கலக்கவும்.' },
      { step: '02', title: 'Scalp Massage & Wash', titleTa: 'தேய்த்துக் கழுவவும்', instruction: 'Gently massage into scalp and hair strands, leave for 3 minutes, then rinse thoroughly.', instructionTa: 'தலை மற்றும் கூந்தலில் மென்மையாக தேய்த்து 3 நிமிடம் கழித்து சுத்தமான நீரில் அலசவும்.' }
    ],
    dosage: {
      timing: 'Use 2-3 times a week during hair wash',
      with: 'Plain water or Rice congee water',
      timingTa: 'வாரத்திற்கு 2-3 முறை தலைக்குளியலின் போது பயன்படுத்தவும்',
      withTa: 'சுத்தமான நீர் அல்லது கஞ்சித் தண்ணீர்'
    },
    safety: {
      contraindications: 'For external hair wash use only.',
      precautions: 'Avoid direct contact with eyes; rinse immediately with cool water if contact occurs.',
      contraindicationsTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்.',
      precautionsTa: 'கண்களில் படாமல் கவனமாக கழுவவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container moisture-free',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'ஈரப்பதம் படாமல் காற்று புகாத டப்பாவில் வைக்கவும்'
    },
    faqs: [
      { question: 'Does it replace shampoo?', answer: 'Yes, it provides a 100% natural, chemical-free alternative to chemical shampoos.', questionTa: 'ஷாம்பூவிற்கு மாற்றாக பயன்படுத்தலாமா?', answerTa: 'ஆம், ரசாயன ஷாம்பூவிற்கு பதிலாக முழுமையான இயற்கை தயாரிப்பு.' }
    ],
    searchKeywords: ['shigakai powder', 'hair wash powder', 'herbal shampoo', 'anti-dandruff shikakai', 'ruthras shigakai'],
    tamilKeywords: ['சிகைக்காய் பொடி', 'தலைக்குளியல் பொடி', 'பொடுகு நீக்கும் சீயக்காய்'],
    inStock: true,
    featured: false
  },

  // ==========================================
  // 2. CLASSICAL SIDDHA MEDICINES (111 SKUs)
  // ==========================================
{
    id: 'prod-siddha-001',
    name: 'Ruthra Amirtha Sanjeevi Chooranam',
    tamilName: 'ருத்ரா அமிர்த சஞ்சீவி சூரணம்',
    slug: 'ruthra-amirtha-sanjeevi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pacifies Pitta, relieves genito-urinary inflammation, leucorrhea, and peripheral burning sensation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பித்த சமநிலை, சிறுநீரக பாதை நோய்கள், வெள்ளைப்படுதல் மற்றும் உடல் எரிச்சலுக்கு பாரம்பரிய பயன்பாடு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Amirtha Sanjeevi Chooranam (அமிர்த சஞ்சீவி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அமிர்த சஞ்சீவி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Pacifies Pitta, relieves genito-urinary inflammation, leucorrhea, and peripheral burning sensation.',
    traditionalRoleTa: 'பித்த சமநிலை, சிறுநீரக பாதை நோய்கள், வெள்ளைப்படுதல் மற்றும் உடல் எரிச்சலுக்கு பாரம்பரிய பயன்பாடு.',
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
      { name: 'Amirtha Sanjeevi Chooranam Classical Compound', tamilName: 'அமிர்த சஞ்சீவி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Amirtha Sanjeevi Chooranam prepared?',
        questionTa: 'ருத்ரா அமிர்த சஞ்சீவி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["amirtha sanjeevi chooranam","ruthra amirtha sanjeevi chooranam","chooranam","amirtha","sanjeevi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அமிர்த சஞ்சீவி சூரணம்","ருத்ரா அமிர்த சஞ்சீவி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-002',
    name: 'Ruthra Amukkara Chooranam',
    tamilName: 'ருத்ரா அமுக்கரா சூரணம்',
    slug: 'ruthra-amukkara-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["joint-mobility","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical adaptogen, strengthens nervous system, relieves vatha ailments, chronic fatigue, and insomnia. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வாத உபாதைகள், நரம்பு தளர்ச்சி, தூக்கமின்மை மற்றும் உடல் பலவீனத்திற்கு பாரம்பரிய பயன்பாடு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Amukkara Chooranam (அமுக்கரா சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அமுக்கரா சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical adaptogen, strengthens nervous system, relieves vatha ailments, chronic fatigue, and insomnia.',
    traditionalRoleTa: 'வாத உபாதைகள், நரம்பு தளர்ச்சி, தூக்கமின்மை மற்றும் உடல் பலவீனத்திற்கு பாரம்பரிய பயன்பாடு.',
    badge: 'Vitality & Nerve Tonic',
    badgeTa: 'நரம்பு & உடல் பலம்',
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
    ingredients: [
      { name: 'Amukkara Chooranam Classical Compound', tamilName: 'அமுக்கரா சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Amukkara Chooranam prepared?',
        questionTa: 'ருத்ரா அமுக்கரா சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["amukkara chooranam","ruthra amukkara chooranam","chooranam","amukkara","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அமுக்கரா சூரணம்","ருத்ரா அமுக்கரா சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-003',
    name: 'Ruthra Amukkara Kizhangu Chooranam',
    tamilName: 'ருத்ரா அமுக்கரா கிழங்கு சூரணம்',
    slug: 'ruthra-amukkara-kizhangu-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pure root formulation for deep tissue rejuvenation, physical stamina, and musculoskeletal strength. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தூய கிழங்கு சூரணம், தசை வலிமை, விந்து விருத்தி மற்றும் உடல் தேற்றத்திற்கு உகந்தது. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Amukkara Kizhangu Chooranam (அமுக்கரா கிழங்கு சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அமுக்கரா கிழங்கு சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Pure root formulation for deep tissue rejuvenation, physical stamina, and musculoskeletal strength.',
    traditionalRoleTa: 'தூய கிழங்கு சூரணம், தசை வலிமை, விந்து விருத்தி மற்றும் உடல் தேற்றத்திற்கு உகந்தது.',
    badge: 'Pure Root Adaptogen',
    badgeTa: 'தூய மூலிகை சூரணம்',
    image: '/images/products/ruthra-amukkara-kizhangu-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-amukkara-kizhangu-chooranam/front.jpg',
      '/images/products/ruthra-amukkara-kizhangu-chooranam/angle.jpg',
      '/images/products/ruthra-amukkara-kizhangu-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amukkara-kizhangu-chooranam/front.jpg',
      '/images/products/ruthra-amukkara-kizhangu-chooranam/angle.jpg',
      '/images/products/ruthra-amukkara-kizhangu-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Amukkara Kizhangu Chooranam Classical Compound', tamilName: 'அமுக்கரா கிழங்கு சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Amukkara Kizhangu Chooranam prepared?',
        questionTa: 'ருத்ரா அமுக்கரா கிழங்கு சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["amukkara kizhangu chooranam","ruthra amukkara kizhangu chooranam","chooranam","amukkara","kizhangu","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அமுக்கரா கிழங்கு சூரணம்","ருத்ரா அமுக்கரா கிழங்கு சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-004',
    name: 'Ruthra Athimathura Chooranam',
    tamilName: 'ருத்ரா அதிமதுர சூரணம்',
    slug: 'ruthra-athimathura-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Demulcent and mucosal protector for dry cough, throat irritation, gastric hyperacidity, and ulcer healing. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இருமல், தொண்டை கரகரப்பு, அமிலத்தன்மை மற்றும் குடல் புண்களுக்கு உன்னத நிவாரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Athimathura Chooranam (அதிமதுர சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அதிமதுர சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Demulcent and mucosal protector for dry cough, throat irritation, gastric hyperacidity, and ulcer healing.',
    traditionalRoleTa: 'இருமல், தொண்டை கரகரப்பு, அமிலத்தன்மை மற்றும் குடல் புண்களுக்கு உன்னத நிவாரணம்.',
    badge: 'Throat & Ulcer Relief',
    badgeTa: 'தொண்டை & வயிற்றுப்புண்',
    image: '/images/products/ruthra-athimathura-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-athimathura-chooranam/front.jpg',
      '/images/products/ruthra-athimathura-chooranam/angle.jpg',
      '/images/products/ruthra-athimathura-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-athimathura-chooranam/front.jpg',
      '/images/products/ruthra-athimathura-chooranam/angle.jpg',
      '/images/products/ruthra-athimathura-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Athimathura Chooranam Classical Compound', tamilName: 'அதிமதுர சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Athimathura Chooranam prepared?',
        questionTa: 'ருத்ரா அதிமதுர சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["athimathura chooranam","ruthra athimathura chooranam","chooranam","athimathura","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அதிமதுர சூரணம்","ருத்ரா அதிமதுர சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-005',
    name: 'Ruthra Attathi Chooranam',
    tamilName: 'ருத்ரா அட்டாதி சூரணம்',
    slug: 'ruthra-attathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Potent eight-ingredient classical carminative for severe indigestion, loss of appetite, and chronic flatulence. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மந்தம், அஜீரணம், பசியின்மை மற்றும் வாயு தொல்லைகளை போக்கும் எட்டு மூலிகை கலவை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Attathi Chooranam (அட்டாதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அட்டாதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Potent eight-ingredient classical carminative for severe indigestion, loss of appetite, and chronic flatulence.',
    traditionalRoleTa: 'மந்தம், அஜீரணம், பசியின்மை மற்றும் வாயு தொல்லைகளை போக்கும் எட்டு மூலிகை கலவை.',
    badge: 'Digestive Fire Booster',
    badgeTa: 'செரிமான தீ தீபம்',
    image: '/images/products/ruthra-attathi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-attathi-chooranam/front.jpg',
      '/images/products/ruthra-attathi-chooranam/angle.jpg',
      '/images/products/ruthra-attathi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-attathi-chooranam/front.jpg',
      '/images/products/ruthra-attathi-chooranam/angle.jpg',
      '/images/products/ruthra-attathi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Attathi Chooranam Classical Compound', tamilName: 'அட்டாதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Attathi Chooranam prepared?',
        questionTa: 'ருத்ரா அட்டாதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["attathi chooranam","ruthra attathi chooranam","chooranam","attathi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அட்டாதி சூரணம்","ருத்ரா அட்டாதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-006',
    name: 'Ruthra Bhavanakadukkai Chooranam',
    tamilName: 'ருத்ரா பாவனக்கடுக்காய் சூரணம்',
    slug: 'ruthra-bhavanakadukkai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Processed Chebulic Myrobalan formulation for gentle bowel cleansing, liver stimulation, and digestion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குடல் கழிவுகளை நீக்கி, மலக்கட்டு மற்றும் பித்த மந்தத்தை போக்கும் பாவனக்கடுக்காய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Bhavanakadukkai Chooranam (பாவனக்கடுக்காய் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பாவனக்கடுக்காய் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Processed Chebulic Myrobalan formulation for gentle bowel cleansing, liver stimulation, and digestion.',
    traditionalRoleTa: 'குடல் கழிவுகளை நீக்கி, மலக்கட்டு மற்றும் பித்த மந்தத்தை போக்கும் பாவனக்கடுக்காய்.',
    badge: 'Bowel Regulator',
    badgeTa: 'மலக்குடல் சுத்திகரிப்பு',
    image: '/images/products/ruthra-bhavanakadukkai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-bhavanakadukkai-chooranam/front.jpg',
      '/images/products/ruthra-bhavanakadukkai-chooranam/angle.jpg',
      '/images/products/ruthra-bhavanakadukkai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-bhavanakadukkai-chooranam/front.jpg',
      '/images/products/ruthra-bhavanakadukkai-chooranam/angle.jpg',
      '/images/products/ruthra-bhavanakadukkai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Bhavanakadukkai Chooranam Classical Compound', tamilName: 'பாவனக்கடுக்காய் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Bhavanakadukkai Chooranam prepared?',
        questionTa: 'ருத்ரா பாவனக்கடுக்காய் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["bhavanakadukkai chooranam","ruthra bhavanakadukkai chooranam","chooranam","bhavanakadukkai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பாவனக்கடுக்காய் சூரணம்","ருத்ரா பாவனக்கடுக்காய் சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-007',
    name: 'Ruthra Chandragandhi Chooranam',
    tamilName: 'ருத்ரா சந்திரகாந்தி சூரணம்',
    slug: 'ruthra-chandragandhi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["womens-wellness","skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cooling formulation for internal heat dissipation, menstrual burning sensations, and skin radiance. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'உடல் உஷ்ணம் தணித்து, மாதவிடாய் உபாதைகள் மற்றும் முக வசீகரத்திற்கு உதவும் குளிர்ச்சி சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Chandragandhi Chooranam (சந்திரகாந்தி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சந்திரகாந்தி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cooling formulation for internal heat dissipation, menstrual burning sensations, and skin radiance.',
    traditionalRoleTa: 'உடல் உஷ்ணம் தணித்து, மாதவிடாய் உபாதைகள் மற்றும் முக வசீகரத்திற்கு உதவும் குளிர்ச்சி சூரணம்.',
    badge: 'Body Coolant',
    badgeTa: 'உடல் குளிர்ச்சி',
    image: '/images/products/ruthra-chandragandhi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-chandragandhi-chooranam/front.jpg',
      '/images/products/ruthra-chandragandhi-chooranam/angle.jpg',
      '/images/products/ruthra-chandragandhi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-chandragandhi-chooranam/front.jpg',
      '/images/products/ruthra-chandragandhi-chooranam/angle.jpg',
      '/images/products/ruthra-chandragandhi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Chandragandhi Chooranam Classical Compound', tamilName: 'சந்திரகாந்தி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Chandragandhi Chooranam prepared?',
        questionTa: 'ருத்ரா சந்திரகாந்தி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["chandragandhi chooranam","ruthra chandragandhi chooranam","chooranam","chandragandhi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சந்திரகாந்தி சூரணம்","ருத்ரா சந்திரகாந்தி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-008',
    name: 'Ruthra Chundaivatral Chooranam',
    tamilName: 'ருத்ரா சுண்டைவற்றல் சூரணம்',
    slug: 'ruthra-chundaivatral-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical intestinal astringent for sprue, chronic diarrhea, dysentery, and worm infestation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கிரஹணி, வயிற்றுப்போக்கு, சீதபேதி மற்றும் குடற்புழுக்களை போக்கும் பாரம்பரிய தயாரிப்பு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Chundaivatral Chooranam (சுண்டைவற்றல் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சுண்டைவற்றல் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical intestinal astringent for sprue, chronic diarrhea, dysentery, and worm infestation.',
    traditionalRoleTa: 'கிரஹணி, வயிற்றுப்போக்கு, சீதபேதி மற்றும் குடற்புழுக்களை போக்கும் பாரம்பரிய தயாரிப்பு.',
    badge: 'Gut & Sprue Care',
    badgeTa: 'குடல் & பேதி நலம்',
    image: '/images/products/ruthra-chundaivatral-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-chundaivatral-chooranam/front.jpg',
      '/images/products/ruthra-chundaivatral-chooranam/angle.jpg',
      '/images/products/ruthra-chundaivatral-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-chundaivatral-chooranam/front.jpg',
      '/images/products/ruthra-chundaivatral-chooranam/angle.jpg',
      '/images/products/ruthra-chundaivatral-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Chundaivatral Chooranam Classical Compound', tamilName: 'சுண்டைவற்றல் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Chundaivatral Chooranam prepared?',
        questionTa: 'ருத்ரா சுண்டைவற்றல் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["chundaivatral chooranam","ruthra chundaivatral chooranam","chooranam","chundaivatral","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சுண்டைவற்றல் சூரணம்","ருத்ரா சுண்டைவற்றல் சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-009',
    name: 'Ruthra Drakshadhi Chooranam',
    tamilName: 'ருத்ரா திராட்சாதி சூரணம்',
    slug: 'ruthra-drakshadhi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Grape-infused formulation relieving chronic Pitta flare-ups, thirst, dizziness, and hyperacidity. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பித்த மயக்கம், அதீத தாகம், நெஞ்செரிச்சல் மற்றும் அஜீரணத்தை தணிக்கும் திராட்சை சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Drakshadhi Chooranam (திராட்சாதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா திராட்சாதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Grape-infused formulation relieving chronic Pitta flare-ups, thirst, dizziness, and hyperacidity.',
    traditionalRoleTa: 'பித்த மயக்கம், அதீத தாகம், நெஞ்செரிச்சல் மற்றும் அஜீரணத்தை தணிக்கும் திராட்சை சூரணம்.',
    badge: 'Pitta Pacifier',
    badgeTa: 'பித்த சமநிலை',
    image: '/images/products/ruthra-drakshadhi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-drakshadhi-chooranam/front.jpg',
      '/images/products/ruthra-drakshadhi-chooranam/angle.jpg',
      '/images/products/ruthra-drakshadhi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-drakshadhi-chooranam/front.jpg',
      '/images/products/ruthra-drakshadhi-chooranam/angle.jpg',
      '/images/products/ruthra-drakshadhi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Drakshadhi Chooranam Classical Compound', tamilName: 'திராட்சாதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Drakshadhi Chooranam prepared?',
        questionTa: 'ருத்ரா திராட்சாதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["drakshadhi chooranam","ruthra drakshadhi chooranam","chooranam","drakshadhi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["திராட்சாதி சூரணம்","ருத்ரா திராட்சாதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-010',
    name: 'Ruthra Elathi Chooranam',
    tamilName: 'ருத்ரா ஏலாதி சூரணம்',
    slug: 'ruthra-elathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness","skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cardamom-centric blend for respiratory health, bronchitis, skin itching, and digestive fire. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சுவாச குழாய் நலம், இளைப்பு, தோல் அரிப்பு மற்றும் செரிமானத்திற்கு உகந்த ஏலக்காய் கலவை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Elathi Chooranam (ஏலாதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ஏலாதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cardamom-centric blend for respiratory health, bronchitis, skin itching, and digestive fire.',
    traditionalRoleTa: 'சுவாச குழாய் நலம், இளைப்பு, தோல் அரிப்பு மற்றும் செரிமானத்திற்கு உகந்த ஏலக்காய் கலவை.',
    badge: 'Aromatic Balancer',
    badgeTa: 'நறுமண சுவாச நலம்',
    image: '/images/products/ruthra-elathi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-elathi-chooranam/front.jpg',
      '/images/products/ruthra-elathi-chooranam/angle.jpg',
      '/images/products/ruthra-elathi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-elathi-chooranam/front.jpg',
      '/images/products/ruthra-elathi-chooranam/angle.jpg',
      '/images/products/ruthra-elathi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Elathi Chooranam Classical Compound', tamilName: 'ஏலாதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Elathi Chooranam prepared?',
        questionTa: 'ருத்ரா ஏலாதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["elathi chooranam","ruthra elathi chooranam","chooranam","elathi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ஏலாதி சூரணம்","ருத்ரா ஏலாதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-011',
    name: 'Ruthra Gunma Uppu Chooranam',
    tamilName: 'ருத்ரா குன்ம உப்பு சூரணம்',
    slug: 'ruthra-gunma-uppu-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Specialized mineral-salt formulation for intense abdominal colic, peptic ulcers, and bloating. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குன்ம வலி, வயிற்று உப்புசம், வாய்வு பிடிப்பு மற்றும் கடுமையான வயிற்று வலிகளுக்கு பிரத்யேக உப்பு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Gunma Uppu Chooranam (குன்ம உப்பு சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா குன்ம உப்பு சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Specialized mineral-salt formulation for intense abdominal colic, peptic ulcers, and bloating.',
    traditionalRoleTa: 'குன்ம வலி, வயிற்று உப்புசம், வாய்வு பிடிப்பு மற்றும் கடுமையான வயிற்று வலிகளுக்கு பிரத்யேக உப்பு.',
    badge: 'Abdominal Colic Care',
    badgeTa: 'குன்ம வலி நிவாரணம்',
    image: '/images/products/ruthra-gunma-uppu-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-gunma-uppu-chooranam/front.jpg',
      '/images/products/ruthra-gunma-uppu-chooranam/angle.jpg',
      '/images/products/ruthra-gunma-uppu-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-gunma-uppu-chooranam/front.jpg',
      '/images/products/ruthra-gunma-uppu-chooranam/angle.jpg',
      '/images/products/ruthra-gunma-uppu-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Gunma Uppu Chooranam Classical Compound', tamilName: 'குன்ம உப்பு சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Gunma Uppu Chooranam prepared?',
        questionTa: 'ருத்ரா குன்ம உப்பு சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["gunma uppu chooranam","ruthra gunma uppu chooranam","chooranam","gunma","uppu","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["குன்ம உப்பு சூரணம்","ருத்ரா குன்ம உப்பு சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-012',
    name: 'Ruthra Jeeraga Chooranam',
    tamilName: 'ருத்ரா சீரக சூரணம்',
    slug: 'ruthra-jeeraga-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cumin compound for soothing gastric inflammation, bile reflux, nausea, and restoring appetite. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பித்த வாந்தி, பித்த கிறுகிறுப்பு, பசியின்மை மற்றும் அஜீரணம் போக்கும் சீரக கூட்டு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Jeeraga Chooranam (சீரக சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சீரக சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cumin compound for soothing gastric inflammation, bile reflux, nausea, and restoring appetite.',
    traditionalRoleTa: 'பித்த வாந்தி, பித்த கிறுகிறுப்பு, பசியின்மை மற்றும் அஜீரணம் போக்கும் சீரக கூட்டு.',
    badge: 'Bile & Gastric Soother',
    badgeTa: 'பித்த வாந்தி நிவாரணம்',
    image: '/images/products/ruthra-jeeraga-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-jeeraga-chooranam/front.jpg',
      '/images/products/ruthra-jeeraga-chooranam/angle.jpg',
      '/images/products/ruthra-jeeraga-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-jeeraga-chooranam/front.jpg',
      '/images/products/ruthra-jeeraga-chooranam/angle.jpg',
      '/images/products/ruthra-jeeraga-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Jeeraga Chooranam Classical Compound', tamilName: 'சீரக சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Jeeraga Chooranam prepared?',
        questionTa: 'ருத்ரா சீரக சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["jeeraga chooranam","ruthra jeeraga chooranam","chooranam","jeeraga","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சீரக சூரணம்","ருத்ரா சீரக சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-013',
    name: 'Ruthra Kaatukarunai Chooranam',
    tamilName: 'ருத்ரா காட்டுக்கருணை சூரணம்',
    slug: 'ruthra-kaatukarunai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Targeted botanical remedy for external/internal hemorrhoids, bleeding piles, and anal fissures. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மூல நோய், உள் மூலம், வெளி மூலம், ரத்த மூலம் மற்றும் ஆசனவாய் எரிச்சலுக்கு சிறந்த தீர்வு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kaatukarunai Chooranam (காட்டுக்கருணை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா காட்டுக்கருணை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Targeted botanical remedy for external/internal hemorrhoids, bleeding piles, and anal fissures.',
    traditionalRoleTa: 'மூல நோய், உள் மூலம், வெளி மூலம், ரத்த மூலம் மற்றும் ஆசனவாய் எரிச்சலுக்கு சிறந்த தீர்வு.',
    badge: 'Hemorrhoid & Piles Care',
    badgeTa: 'மூல நோய் நிவாரணம்',
    image: '/images/products/ruthra-kaatukarunai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kaatukarunai-chooranam/front.jpg',
      '/images/products/ruthra-kaatukarunai-chooranam/angle.jpg',
      '/images/products/ruthra-kaatukarunai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kaatukarunai-chooranam/front.jpg',
      '/images/products/ruthra-kaatukarunai-chooranam/angle.jpg',
      '/images/products/ruthra-kaatukarunai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kaatukarunai Chooranam Classical Compound', tamilName: 'காட்டுக்கருணை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kaatukarunai Chooranam prepared?',
        questionTa: 'ருத்ரா காட்டுக்கருணை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kaatukarunai chooranam","ruthra kaatukarunai chooranam","chooranam","kaatukarunai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["காட்டுக்கருணை சூரணம்","ருத்ரா காட்டுக்கருணை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-014',
    name: 'Ruthra Kabangusa Chooranam',
    tamilName: 'ருத்ரா கபாங்குச சூரணம்',
    slug: 'ruthra-kabangusa-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical Kapha expelling formulation for severe sinusitis, phlegm congestion, and wheezing. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கப நோய்கள், பீனிசம், சளி கட்டு, மார்பு சளி மற்றும் இரைப்பு நோய்களுக்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kabangusa Chooranam (கபாங்குச சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கபாங்குச சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical Kapha expelling formulation for severe sinusitis, phlegm congestion, and wheezing.',
    traditionalRoleTa: 'கப நோய்கள், பீனிசம், சளி கட்டு, மார்பு சளி மற்றும் இரைப்பு நோய்களுக்கு அருமருந்து.',
    badge: 'Kapha Dissolver',
    badgeTa: 'கப நிவார்த்தி',
    image: '/images/products/ruthra-kabangusa-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kabangusa-chooranam/front.jpg',
      '/images/products/ruthra-kabangusa-chooranam/angle.jpg',
      '/images/products/ruthra-kabangusa-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kabangusa-chooranam/front.jpg',
      '/images/products/ruthra-kabangusa-chooranam/angle.jpg',
      '/images/products/ruthra-kabangusa-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kabangusa Chooranam Classical Compound', tamilName: 'கபாங்குச சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kabangusa Chooranam prepared?',
        questionTa: 'ருத்ரா கபாங்குச சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kabangusa chooranam","ruthra kabangusa chooranam","chooranam","kabangusa","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கபாங்குச சூரணம்","ருத்ரா கபாங்குச சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-015',
    name: 'Ruthra Karanthai Chooranam',
    tamilName: 'ருத்ரா கரந்தை சூரணம்',
    slug: 'ruthra-karanthai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Karanthai-based rasayana for purifying blood, treating skin allergies, and enhancing longevity. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ரத்த சுத்தி, தோல் வியாதிகள், படை மற்றும் உடல் காயகற்பத்திற்கு பயன்படும் கரந்தை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karanthai Chooranam (கரந்தை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கரந்தை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Karanthai-based rasayana for purifying blood, treating skin allergies, and enhancing longevity.',
    traditionalRoleTa: 'ரத்த சுத்தி, தோல் வியாதிகள், படை மற்றும் உடல் காயகற்பத்திற்கு பயன்படும் கரந்தை.',
    badge: 'Blood Purifier',
    badgeTa: 'ரத்த சுத்தி',
    image: '/images/products/ruthra-karanthai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-karanthai-chooranam/front.jpg',
      '/images/products/ruthra-karanthai-chooranam/angle.jpg',
      '/images/products/ruthra-karanthai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karanthai-chooranam/front.jpg',
      '/images/products/ruthra-karanthai-chooranam/angle.jpg',
      '/images/products/ruthra-karanthai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Karanthai Chooranam Classical Compound', tamilName: 'கரந்தை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karanthai Chooranam prepared?',
        questionTa: 'ருத்ரா கரந்தை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karanthai chooranam","ruthra karanthai chooranam","chooranam","karanthai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கரந்தை சூரணம்","ருத்ரா கரந்தை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-016',
    name: 'Ruthra Kazharchi Chooranam',
    tamilName: 'ருத்ரா கழற்சி சூரணம்',
    slug: 'ruthra-kazharchi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["womens-wellness","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Bonduc nut formulation for hydrocele, ovarian cysts, PCOS, and uterine spasm relief. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'விதை வீக்கம், சினைப்பை நீர்க்கட்டிகள் (PCOS), கருப்பை வீக்கம் போக்கும் கழற்சிக்காய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kazharchi Chooranam (கழற்சி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கழற்சி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Bonduc nut formulation for hydrocele, ovarian cysts, PCOS, and uterine spasm relief.',
    traditionalRoleTa: 'விதை வீக்கம், சினைப்பை நீர்க்கட்டிகள் (PCOS), கருப்பை வீக்கம் போக்கும் கழற்சிக்காய்.',
    badge: 'PCOS & Swelling Care',
    badgeTa: 'நீர்க்கட்டி & விதை வீக்கம்',
    image: '/images/products/ruthra-kazharchi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kazharchi-chooranam/front.jpg',
      '/images/products/ruthra-kazharchi-chooranam/angle.jpg',
      '/images/products/ruthra-kazharchi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kazharchi-chooranam/front.jpg',
      '/images/products/ruthra-kazharchi-chooranam/angle.jpg',
      '/images/products/ruthra-kazharchi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kazharchi Chooranam Classical Compound', tamilName: 'கழற்சி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kazharchi Chooranam prepared?',
        questionTa: 'ருத்ரா கழற்சி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kazharchi chooranam","ruthra kazharchi chooranam","chooranam","kazharchi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கழற்சி சூரணம்","ருத்ரா கழற்சி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-017',
    name: 'Ruthra Kumatti Chooranam',
    tamilName: 'ருத்ரா குமட்டி சூரணம்',
    slug: 'ruthra-kumatti-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Bitter apple formulation for chronic abdominal obstructions, splenomegaly, and liver congestion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வயிற்றுக் கட்டிகள், மண்ணீரல் வீக்கம், கல்லீரல் மந்தம் மற்றும் பெருவயிறு நிவாரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kumatti Chooranam (குமட்டி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா குமட்டி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Bitter apple formulation for chronic abdominal obstructions, splenomegaly, and liver congestion.',
    traditionalRoleTa: 'வயிற்றுக் கட்டிகள், மண்ணீரல் வீக்கம், கல்லீரல் மந்தம் மற்றும் பெருவயிறு நிவாரணம்.',
    badge: 'Hepatosplenic Care',
    badgeTa: 'கல்லீரல் & மண்ணீரல்',
    image: '/images/products/ruthra-kumatti-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kumatti-chooranam/front.jpg',
      '/images/products/ruthra-kumatti-chooranam/angle.jpg',
      '/images/products/ruthra-kumatti-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kumatti-chooranam/front.jpg',
      '/images/products/ruthra-kumatti-chooranam/angle.jpg',
      '/images/products/ruthra-kumatti-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kumatti Chooranam Classical Compound', tamilName: 'குமட்டி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kumatti Chooranam prepared?',
        questionTa: 'ருத்ரா குமட்டி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kumatti chooranam","ruthra kumatti chooranam","chooranam","kumatti","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["குமட்டி சூரணம்","ருத்ரா குமட்டி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-018',
    name: 'Ruthra Lavangathi Chooranam',
    tamilName: 'ருத்ரா லவங்காதி சூரணம்',
    slug: 'ruthra-lavangathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Clove and spice combination relieving persistent spasmodic cough, nausea, and poor digestion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தொடர் இருமல், கக்குவான், நெஞ்சு சளி மற்றும் பசியின்மை போக்கும் லவங்க சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Lavangathi Chooranam (லவங்காதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா லவங்காதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Clove and spice combination relieving persistent spasmodic cough, nausea, and poor digestion.',
    traditionalRoleTa: 'தொடர் இருமல், கக்குவான், நெஞ்சு சளி மற்றும் பசியின்மை போக்கும் லவங்க சூரணம்.',
    badge: 'Cough & Spasm Reliever',
    badgeTa: 'இருமல் & சளி நிவாரணம்',
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
    ingredients: [
      { name: 'Lavangathi Chooranam Classical Compound', tamilName: 'லவங்காதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Lavangathi Chooranam prepared?',
        questionTa: 'ருத்ரா லவங்காதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["lavangathi chooranam","ruthra lavangathi chooranam","chooranam","lavangathi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["லவங்காதி சூரணம்","ருத்ரா லவங்காதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-019',
    name: 'Ruthra Madhuradhi Chooranam',
    tamilName: 'ருத்ரா மதுராதி சூரணம்',
    slug: 'ruthra-madhuradhi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Sweet demulcent digestive for hyperacidity, peptic distress, burning chest, and emaciation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நெஞ்செரிச்சல், குடல் புண், பித்த எரிச்சல் மற்றும் உடல் மெலிவு போக்கும் மதுராதி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Madhuradhi Chooranam (மதுராதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மதுராதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Sweet demulcent digestive for hyperacidity, peptic distress, burning chest, and emaciation.',
    traditionalRoleTa: 'நெஞ்செரிச்சல், குடல் புண், பித்த எரிச்சல் மற்றும் உடல் மெலிவு போக்கும் மதுராதி.',
    badge: 'Soothing Digestant',
    badgeTa: 'நெஞ்செரிச்சல் நிவாரணம்',
    image: '/images/products/ruthra-madhuradhi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-madhuradhi-chooranam/front.jpg',
      '/images/products/ruthra-madhuradhi-chooranam/angle.jpg',
      '/images/products/ruthra-madhuradhi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-madhuradhi-chooranam/front.jpg',
      '/images/products/ruthra-madhuradhi-chooranam/angle.jpg',
      '/images/products/ruthra-madhuradhi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Madhuradhi Chooranam Classical Compound', tamilName: 'மதுராதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Madhuradhi Chooranam prepared?',
        questionTa: 'ருத்ரா மதுராதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["madhuradhi chooranam","ruthra madhuradhi chooranam","chooranam","madhuradhi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மதுராதி சூரணம்","ருத்ரா மதுராதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-020',
    name: 'Ruthra Maruthampattai Chooranam',
    tamilName: 'ருத்ரா மருதம்பட்டை சூரணம்',
    slug: 'ruthra-maruthampattai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Terminalia arjuna bark formula supporting cardiac muscle strength, healthy circulation, and BP. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இதய நலம், ரத்த அழுத்த கட்டுப்பாடு மற்றும் இதய தசைகளை பலப்படுத்தும் மருதம்பட்டை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Maruthampattai Chooranam (மருதம்பட்டை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மருதம்பட்டை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Terminalia arjuna bark formula supporting cardiac muscle strength, healthy circulation, and BP.',
    traditionalRoleTa: 'இதய நலம், ரத்த அழுத்த கட்டுப்பாடு மற்றும் இதய தசைகளை பலப்படுத்தும் மருதம்பட்டை.',
    badge: 'Cardio Protective',
    badgeTa: 'இதய நலம்',
    image: '/images/products/ruthra-maruthampattai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-maruthampattai-chooranam/front.jpg',
      '/images/products/ruthra-maruthampattai-chooranam/angle.jpg',
      '/images/products/ruthra-maruthampattai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-maruthampattai-chooranam/front.jpg',
      '/images/products/ruthra-maruthampattai-chooranam/angle.jpg',
      '/images/products/ruthra-maruthampattai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Maruthampattai Chooranam Classical Compound', tamilName: 'மருதம்பட்டை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Maruthampattai Chooranam prepared?',
        questionTa: 'ருத்ரா மருதம்பட்டை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["maruthampattai chooranam","ruthra maruthampattai chooranam","chooranam","maruthampattai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மருதம்பட்டை சூரணம்","ருத்ரா மருதம்பட்டை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-021',
    name: 'Ruthra Mayiliragathi Chooranam',
    tamilName: 'ருத்ரா மயிலிறகாதி சூரணம்',
    slug: 'ruthra-mayiliragathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Calcinated peacock quill formula for intractable hiccough, severe vomiting, and breathlessness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தீராத விக்கல், தொடர் வாந்தி, ஆஸ்துமா மற்றும் மூச்சு திணறலுக்கு உடனடி நிவாரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Mayiliragathi Chooranam (மயிலிறகாதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மயிலிறகாதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Calcinated peacock quill formula for intractable hiccough, severe vomiting, and breathlessness.',
    traditionalRoleTa: 'தீராத விக்கல், தொடர் வாந்தி, ஆஸ்துமா மற்றும் மூச்சு திணறலுக்கு உடனடி நிவாரணம்.',
    badge: 'Hiccough Reliever',
    badgeTa: 'விக்கல் & வாந்தி நிவாரணம்',
    image: '/images/products/ruthra-mayiliragathi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-mayiliragathi-chooranam/front.jpg',
      '/images/products/ruthra-mayiliragathi-chooranam/angle.jpg',
      '/images/products/ruthra-mayiliragathi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mayiliragathi-chooranam/front.jpg',
      '/images/products/ruthra-mayiliragathi-chooranam/angle.jpg',
      '/images/products/ruthra-mayiliragathi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Mayiliragathi Chooranam Classical Compound', tamilName: 'மயிலிறகாதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Mayiliragathi Chooranam prepared?',
        questionTa: 'ருத்ரா மயிலிறகாதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["mayiliragathi chooranam","ruthra mayiliragathi chooranam","chooranam","mayiliragathi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மயிலிறகாதி சூரணம்","ருத்ரா மயிலிறகாதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-022',
    name: 'Ruthra Megasanthi Chooranam',
    tamilName: 'ருத்ரா மேகசாந்தி சூரணம்',
    slug: 'ruthra-megasanthi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical formula for pacifying mega diseases, burning micturition, diabetic heat, and genital discharge. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மேக நோய்கள், பிரமேகம், சிறுநீர் எரிச்சல், வெள்ளை ஒழுக்கு மற்றும் மேக உஷ்ணம் தணிக்கும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Megasanthi Chooranam (மேகசாந்தி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மேகசாந்தி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical formula for pacifying mega diseases, burning micturition, diabetic heat, and genital discharge.',
    traditionalRoleTa: 'மேக நோய்கள், பிரமேகம், சிறுநீர் எரிச்சல், வெள்ளை ஒழுக்கு மற்றும் மேக உஷ்ணம் தணிக்கும்.',
    badge: 'Mega Disease Pacifier',
    badgeTa: 'மேக ரோக நிவாரணம்',
    image: '/images/products/ruthra-megasanthi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-megasanthi-chooranam/front.jpg',
      '/images/products/ruthra-megasanthi-chooranam/angle.jpg',
      '/images/products/ruthra-megasanthi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-megasanthi-chooranam/front.jpg',
      '/images/products/ruthra-megasanthi-chooranam/angle.jpg',
      '/images/products/ruthra-megasanthi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Megasanthi Chooranam Classical Compound', tamilName: 'மேகசாந்தி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Megasanthi Chooranam prepared?',
        questionTa: 'ருத்ரா மேகசாந்தி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["megasanthi chooranam","ruthra megasanthi chooranam","chooranam","megasanthi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மேகசாந்தி சூரணம்","ருத்ரா மேகசாந்தி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-023',
    name: 'Ruthra Nelli Chooranam',
    tamilName: 'ருத்ரா நெல்லி சூரணம்',
    slug: 'ruthra-nelli-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Emblic Myrobalan antioxidant rich powder for immunity, hair nourishment, and Pitta balance. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நோய் எதிர்ப்பு சக்தி, முடி வளர்ச்சி, ரத்த சுத்தி மற்றும் இளமை காக்கும் நெல்லி சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nelli Chooranam (நெல்லி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நெல்லி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Emblic Myrobalan antioxidant rich powder for immunity, hair nourishment, and Pitta balance.',
    traditionalRoleTa: 'நோய் எதிர்ப்பு சக்தி, முடி வளர்ச்சி, ரத்த சுத்தி மற்றும் இளமை காக்கும் நெல்லி சூரணம்.',
    badge: 'Immunity & Hair Health',
    badgeTa: 'நோய் எதிர்ப்பு & கூந்தல்',
    image: '/images/products/ruthra-nelli-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nelli-chooranam/front.jpg',
      '/images/products/ruthra-nelli-chooranam/angle.jpg',
      '/images/products/ruthra-nelli-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nelli-chooranam/front.jpg',
      '/images/products/ruthra-nelli-chooranam/angle.jpg',
      '/images/products/ruthra-nelli-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Nelli Chooranam Classical Compound', tamilName: 'நெல்லி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nelli Chooranam prepared?',
        questionTa: 'ருத்ரா நெல்லி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nelli chooranam","ruthra nelli chooranam","chooranam","nelli","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நெல்லி சூரணம்","ருத்ரா நெல்லி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-024',
    name: 'Ruthra Nilavarai Chooranam',
    tamilName: 'ருத்ரா நிலாவரை சூரணம்',
    slug: 'ruthra-nilavarai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Natural senna botanical compound for habitual constipation, bowel detox, and skin clearing. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நாள்பட்ட மலச்சிக்கல், குடல் நச்சுக்கள் மற்றும் பித்த கழிவுகளை நீக்கும் மென்மையான மலமிளக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nilavarai Chooranam (நிலாவரை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நிலாவரை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Natural senna botanical compound for habitual constipation, bowel detox, and skin clearing.',
    traditionalRoleTa: 'நாள்பட்ட மலச்சிக்கல், குடல் நச்சுக்கள் மற்றும் பித்த கழிவுகளை நீக்கும் மென்மையான மலமிளக்கி.',
    badge: 'Natural Laxative',
    badgeTa: 'இயற்கை மலமிளக்கி',
    image: '/images/products/ruthra-nilavarai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nilavarai-chooranam/front.jpg',
      '/images/products/ruthra-nilavarai-chooranam/angle.jpg',
      '/images/products/ruthra-nilavarai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nilavarai-chooranam/front.jpg',
      '/images/products/ruthra-nilavarai-chooranam/angle.jpg',
      '/images/products/ruthra-nilavarai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Nilavarai Chooranam Classical Compound', tamilName: 'நிலாவரை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nilavarai Chooranam prepared?',
        questionTa: 'ருத்ரா நிலாவரை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nilavarai chooranam","ruthra nilavarai chooranam","chooranam","nilavarai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நிலாவரை சூரணம்","ருத்ரா நிலாவரை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-025',
    name: 'Ruthra Panchadeepakini Chooranam',
    tamilName: 'ருத்ரா பஞ்சதீபாகினி சூரணம்',
    slug: 'ruthra-panchadeepakini-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Five-spice digestive formula igniting sluggish Jataragni, improving nutrient absorption. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சுக்கு, மிளகு, திப்பிலி, ஏலம், சீரகம் சேர்ந்த ஐந்து மூலிகை செரிமான தீயை தூண்டும் சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Panchadeepakini Chooranam (பஞ்சதீபாகினி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பஞ்சதீபாகினி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Five-spice digestive formula igniting sluggish Jataragni, improving nutrient absorption.',
    traditionalRoleTa: 'சுக்கு, மிளகு, திப்பிலி, ஏலம், சீரகம் சேர்ந்த ஐந்து மூலிகை செரிமான தீயை தூண்டும் சூரணம்.',
    badge: 'Five-Spice Digestant',
    badgeTa: 'பஞ்ச தீபனி',
    image: '/images/products/ruthra-panchadeepakini-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-panchadeepakini-chooranam/front.jpg',
      '/images/products/ruthra-panchadeepakini-chooranam/angle.jpg',
      '/images/products/ruthra-panchadeepakini-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-panchadeepakini-chooranam/front.jpg',
      '/images/products/ruthra-panchadeepakini-chooranam/angle.jpg',
      '/images/products/ruthra-panchadeepakini-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Panchadeepakini Chooranam Classical Compound', tamilName: 'பஞ்சதீபாகினி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Panchadeepakini Chooranam prepared?',
        questionTa: 'ருத்ரா பஞ்சதீபாகினி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["panchadeepakini chooranam","ruthra panchadeepakini chooranam","chooranam","panchadeepakini","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பஞ்சதீபாகினி சூரணம்","ருத்ரா பஞ்சதீபாகினி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-026',
    name: 'Ruthra Parangichakkai Chooranam',
    tamilName: 'ருத்ரா பறங்கிச்சக்கை சூரணம்',
    slug: 'ruthra-parangichakkai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["skin-hair","joint-mobility"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Smilax china formula for chronic skin eruptions, psoriasis, venereal afflictions, and joint toxins. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சரும நோய்கள், சோரியாசிஸ், கரப்பான், மூட்டு வாதம் மற்றும் ரத்த தூய்மைக்கு உகந்தது. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Parangichakkai Chooranam (பறங்கிச்சக்கை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பறங்கிச்சக்கை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Smilax china formula for chronic skin eruptions, psoriasis, venereal afflictions, and joint toxins.',
    traditionalRoleTa: 'சரும நோய்கள், சோரியாசிஸ், கரப்பான், மூட்டு வாதம் மற்றும் ரத்த தூய்மைக்கு உகந்தது.',
    badge: 'Skin & Detoxifying Tonic',
    badgeTa: 'தோல் & மூட்டு நலம்',
    image: '/images/products/ruthra-parangichakkai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-parangichakkai-chooranam/front.jpg',
      '/images/products/ruthra-parangichakkai-chooranam/angle.jpg',
      '/images/products/ruthra-parangichakkai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-parangichakkai-chooranam/front.jpg',
      '/images/products/ruthra-parangichakkai-chooranam/angle.jpg',
      '/images/products/ruthra-parangichakkai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Parangichakkai Chooranam Classical Compound', tamilName: 'பறங்கிச்சக்கை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Parangichakkai Chooranam prepared?',
        questionTa: 'ருத்ரா பறங்கிச்சக்கை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["parangichakkai chooranam","ruthra parangichakkai chooranam","chooranam","parangichakkai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பறங்கிச்சக்கை சூரணம்","ருத்ரா பறங்கிச்சக்கை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-027',
    name: 'Ruthra Parangipattai Chooranam',
    tamilName: 'ருத்ரா பறங்கிப்பட்டை சூரணம்',
    slug: 'ruthra-parangipattai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pure bark preparation for dermal wellness, deep blood purification, and metabolic detox. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தோல் அலர்ஜி, அரிப்பு, புண்கள் மற்றும் ரத்தத்தில் உள்ள நச்சுக்களை நீக்கும் பட்டை சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Parangipattai Chooranam (பறங்கிப்பட்டை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பறங்கிப்பட்டை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Pure bark preparation for dermal wellness, deep blood purification, and metabolic detox.',
    traditionalRoleTa: 'தோல் அலர்ஜி, அரிப்பு, புண்கள் மற்றும் ரத்தத்தில் உள்ள நச்சுக்களை நீக்கும் பட்டை சூரணம்.',
    badge: 'Dermal Cleanser',
    badgeTa: 'தோல் சுத்தி',
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
    ingredients: [
      { name: 'Parangipattai Chooranam Classical Compound', tamilName: 'பறங்கிப்பட்டை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Parangipattai Chooranam prepared?',
        questionTa: 'ருத்ரா பறங்கிப்பட்டை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["parangipattai chooranam","ruthra parangipattai chooranam","chooranam","parangipattai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பறங்கிப்பட்டை சூரணம்","ருத்ரா பறங்கிப்பட்டை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-028',
    name: 'Ruthra Peisori Chooranam',
    tamilName: 'ருத்ரா பேய்சொறி சூரணம்',
    slug: 'ruthra-peisori-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Specialized Siddha formulation for persistent scabies, eczema, dermatitis, and fungal skin lesions. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பேய்சொறி, சிரங்கு, படர்தாமரை, நமைச்சல் மற்றும் நாள்பட்ட தோல் அரிப்புக்கு பிரத்யேக சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Peisori Chooranam (பேய்சொறி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பேய்சொறி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Specialized Siddha formulation for persistent scabies, eczema, dermatitis, and fungal skin lesions.',
    traditionalRoleTa: 'பேய்சொறி, சிரங்கு, படர்தாமரை, நமைச்சல் மற்றும் நாள்பட்ட தோல் அரிப்புக்கு பிரத்யேக சூரணம்.',
    badge: 'Eczema & Scabies Care',
    badgeTa: 'சொறி & சிரங்கு நிவாரணம்',
    image: '/images/products/ruthra-peisori-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-peisori-chooranam/front.jpg',
      '/images/products/ruthra-peisori-chooranam/angle.jpg',
      '/images/products/ruthra-peisori-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-peisori-chooranam/front.jpg',
      '/images/products/ruthra-peisori-chooranam/angle.jpg',
      '/images/products/ruthra-peisori-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Peisori Chooranam Classical Compound', tamilName: 'பேய்சொறி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Peisori Chooranam prepared?',
        questionTa: 'ருத்ரா பேய்சொறி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["peisori chooranam","ruthra peisori chooranam","chooranam","peisori","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பேய்சொறி சூரணம்","ருத்ரா பேய்சொறி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-029',
    name: 'Ruthra Pirandai Chooranam',
    tamilName: 'ருத்ரா பிரண்டை சூரணம்',
    slug: 'ruthra-pirandai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["joint-mobility","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cissus quadrangularis powder for accelerating bone healing, joint lubrication, and piles. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'எலும்பு முறிவு குணமாக, மூட்டு தேய்மானம், பசியின்மை மற்றும் மூல நோய்க்கு சிறந்த பிரண்டை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Pirandai Chooranam (பிரண்டை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பிரண்டை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cissus quadrangularis powder for accelerating bone healing, joint lubrication, and piles.',
    traditionalRoleTa: 'எலும்பு முறிவு குணமாக, மூட்டு தேய்மானம், பசியின்மை மற்றும் மூல நோய்க்கு சிறந்த பிரண்டை.',
    badge: 'Bone & Joint Strength',
    badgeTa: 'எலும்பு & மூட்டு பலம்',
    image: '/images/products/ruthra-pirandai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-pirandai-chooranam/front.jpg',
      '/images/products/ruthra-pirandai-chooranam/angle.jpg',
      '/images/products/ruthra-pirandai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pirandai-chooranam/front.jpg',
      '/images/products/ruthra-pirandai-chooranam/angle.jpg',
      '/images/products/ruthra-pirandai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Pirandai Chooranam Classical Compound', tamilName: 'பிரண்டை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Pirandai Chooranam prepared?',
        questionTa: 'ருத்ரா பிரண்டை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["pirandai chooranam","ruthra pirandai chooranam","chooranam","pirandai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பிரண்டை சூரணம்","ருத்ரா பிரண்டை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-030',
    name: 'Ruthra Ponnavarai Chooranam',
    tamilName: 'ருத்ரா பொன்னாவரை சூரணம்',
    slug: 'ruthra-ponnavarai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness","skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cassia sophera formula for hepatic cleansing, mild laxation, and skin discolouration. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கல்லீரல் சுத்திகரிப்பு, மலச்சிக்கல், தோல் பளபளப்பு மற்றும் பித்த ரோகங்களுக்கு பயன்படும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Ponnavarai Chooranam (பொன்னாவரை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பொன்னாவரை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cassia sophera formula for hepatic cleansing, mild laxation, and skin discolouration.',
    traditionalRoleTa: 'கல்லீரல் சுத்திகரிப்பு, மலச்சிக்கல், தோல் பளபளப்பு மற்றும் பித்த ரோகங்களுக்கு பயன்படும்.',
    badge: 'Hepatic & Skin Tonic',
    badgeTa: 'கல்லீரல் & தோல் நலம்',
    image: '/images/products/ruthra-ponnavarai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-ponnavarai-chooranam/front.jpg',
      '/images/products/ruthra-ponnavarai-chooranam/angle.jpg',
      '/images/products/ruthra-ponnavarai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ponnavarai-chooranam/front.jpg',
      '/images/products/ruthra-ponnavarai-chooranam/angle.jpg',
      '/images/products/ruthra-ponnavarai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Ponnavarai Chooranam Classical Compound', tamilName: 'பொன்னாவரை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Ponnavarai Chooranam prepared?',
        questionTa: 'ருத்ரா பொன்னாவரை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["ponnavarai chooranam","ruthra ponnavarai chooranam","chooranam","ponnavarai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பொன்னாவரை சூரணம்","ருத்ரா பொன்னாவரை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-031',
    name: 'Ruthra Poonaikali Vidhai Chooranam',
    tamilName: 'ருத்ரா பூனைக்காலி விதை சூரணம்',
    slug: 'ruthra-poonaikali-vidhai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Mucuna pruriens seed formula for neuro-protection, Parkinsonian tremors, and reproductive vigor. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நரம்பு தளர்ச்சி, நடுக்கு வாதம், விந்து விருத்தி மற்றும் ஆண்மை பலத்திற்கு உன்னத பூனைக்காலி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Poonaikali Vidhai Chooranam (பூனைக்காலி விதை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பூனைக்காலி விதை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Mucuna pruriens seed formula for neuro-protection, Parkinsonian tremors, and reproductive vigor.',
    traditionalRoleTa: 'நரம்பு தளர்ச்சி, நடுக்கு வாதம், விந்து விருத்தி மற்றும் ஆண்மை பலத்திற்கு உன்னத பூனைக்காலி.',
    badge: 'Neuro & Vitality Booster',
    badgeTa: 'நரம்பு & தாது விருத்தி',
    image: '/images/products/ruthra-poonaikali-vidhai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-poonaikali-vidhai-chooranam/front.jpg',
      '/images/products/ruthra-poonaikali-vidhai-chooranam/angle.jpg',
      '/images/products/ruthra-poonaikali-vidhai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-poonaikali-vidhai-chooranam/front.jpg',
      '/images/products/ruthra-poonaikali-vidhai-chooranam/angle.jpg',
      '/images/products/ruthra-poonaikali-vidhai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Poonaikali Vidhai Chooranam Classical Compound', tamilName: 'பூனைக்காலி விதை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Poonaikali Vidhai Chooranam prepared?',
        questionTa: 'ருத்ரா பூனைக்காலி விதை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["poonaikali vidhai chooranam","ruthra poonaikali vidhai chooranam","chooranam","poonaikali","vidhai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பூனைக்காலி விதை சூரணம்","ருத்ரா பூனைக்காலி விதை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-032',
    name: 'Ruthra Pungampoo Chooranam',
    tamilName: 'ருத்ரா புங்கம்பூ சூரணம்',
    slug: 'ruthra-pungampoo-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pongamia pinnata flower powder for regulating blood sugar, leucorrhea, and excessive thirst. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நீரிழிவு சர்க்கரை கட்டுப்பாடு, அதிமூத்திரம், வெள்ளைப்படுதல் மற்றும் உடல் சூடு தணிக்கும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Pungampoo Chooranam (புங்கம்பூ சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா புங்கம்பூ சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Pongamia pinnata flower powder for regulating blood sugar, leucorrhea, and excessive thirst.',
    traditionalRoleTa: 'நீரிழிவு சர்க்கரை கட்டுப்பாடு, அதிமூத்திரம், வெள்ளைப்படுதல் மற்றும் உடல் சூடு தணிக்கும்.',
    badge: 'Glycemic & Coolant',
    badgeTa: 'சர்க்கரை & உடல் நலம்',
    image: '/images/products/ruthra-pungampoo-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-pungampoo-chooranam/front.jpg',
      '/images/products/ruthra-pungampoo-chooranam/angle.jpg',
      '/images/products/ruthra-pungampoo-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pungampoo-chooranam/front.jpg',
      '/images/products/ruthra-pungampoo-chooranam/angle.jpg',
      '/images/products/ruthra-pungampoo-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Pungampoo Chooranam Classical Compound', tamilName: 'புங்கம்பூ சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Pungampoo Chooranam prepared?',
        questionTa: 'ருத்ரா புங்கம்பூ சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["pungampoo chooranam","ruthra pungampoo chooranam","chooranam","pungampoo","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["புங்கம்பூ சூரணம்","ருத்ரா புங்கம்பூ சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-033',
    name: 'Ruthra Sagalanoi Chooranam',
    tamilName: 'ருத்ரா சகலநோய் சூரணம்',
    slug: 'ruthra-sagalanoi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Panacea compound formula for restoring digestive equilibrium, general debility, and fever convalescence. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'உடல் அசதி, பொது பலவீனம், அஜீரணம் மற்றும் அனைத்து வகையான உடல் சோர்வை போக்கும் கூட்டு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sagalanoi Chooranam (சகலநோய் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சகலநோய் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Panacea compound formula for restoring digestive equilibrium, general debility, and fever convalescence.',
    traditionalRoleTa: 'உடல் அசதி, பொது பலவீனம், அஜீரணம் மற்றும் அனைத்து வகையான உடல் சோர்வை போக்கும் கூட்டு.',
    badge: 'Universal Restorative',
    badgeTa: 'சகல நோய் நிவாரணி',
    image: '/images/products/ruthra-sagalanoi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sagalanoi-chooranam/front.jpg',
      '/images/products/ruthra-sagalanoi-chooranam/angle.jpg',
      '/images/products/ruthra-sagalanoi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sagalanoi-chooranam/front.jpg',
      '/images/products/ruthra-sagalanoi-chooranam/angle.jpg',
      '/images/products/ruthra-sagalanoi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Sagalanoi Chooranam Classical Compound', tamilName: 'சகலநோய் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sagalanoi Chooranam prepared?',
        questionTa: 'ருத்ரா சகலநோய் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sagalanoi chooranam","ruthra sagalanoi chooranam","chooranam","sagalanoi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சகலநோய் சூரணம்","ருத்ரா சகலநோய் சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-034',
    name: 'Ruthra Sarvangavatha Chooranam',
    tamilName: 'ருத்ரா சர்வாங்கவாத சூரணம்',
    slug: 'ruthra-sarvangavatha-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["joint-mobility"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Comprehensive Vatha pacifier for generalized body aches, rheumatoid arthritis, and muscular stiffness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சர்வாங்க வாதம், மூட்டு வீக்கம், உடல் குடைச்சல் மற்றும் தசை பிடிப்புகளுக்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sarvangavatha Chooranam (சர்வாங்கவாத சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சர்வாங்கவாத சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Comprehensive Vatha pacifier for generalized body aches, rheumatoid arthritis, and muscular stiffness.',
    traditionalRoleTa: 'சர்வாங்க வாதம், மூட்டு வீக்கம், உடல் குடைச்சல் மற்றும் தசை பிடிப்புகளுக்கு அருமருந்து.',
    badge: 'Whole Body Vatha Care',
    badgeTa: 'முழு உடல் வாத நிவாரணம்',
    image: '/images/products/ruthra-sarvangavatha-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sarvangavatha-chooranam/front.jpg',
      '/images/products/ruthra-sarvangavatha-chooranam/angle.jpg',
      '/images/products/ruthra-sarvangavatha-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sarvangavatha-chooranam/front.jpg',
      '/images/products/ruthra-sarvangavatha-chooranam/angle.jpg',
      '/images/products/ruthra-sarvangavatha-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Sarvangavatha Chooranam Classical Compound', tamilName: 'சர்வாங்கவாத சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sarvangavatha Chooranam prepared?',
        questionTa: 'ருத்ரா சர்வாங்கவாத சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sarvangavatha chooranam","ruthra sarvangavatha chooranam","chooranam","sarvangavatha","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சர்வாங்கவாத சூரணம்","ருத்ரா சர்வாங்கவாத சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-035',
    name: 'Ruthra Sirupeelai Chooranam',
    tamilName: 'ருத்ரா சிறுபீளை சூரணம்',
    slug: 'ruthra-sirupeelai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Renowned lithotriptic botanical for dissolving kidney stones, dysuria, and urinary gravel. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சிறுநீரக கற்கள், சிறுநீர் தாரை அடைப்பு, எரிச்சல் மற்றும் நீர்க்கட்டு போக்கும் சிறந்த மூலிகை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sirupeelai Chooranam (சிறுபீளை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சிறுபீளை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Renowned lithotriptic botanical for dissolving kidney stones, dysuria, and urinary gravel.',
    traditionalRoleTa: 'சிறுநீரக கற்கள், சிறுநீர் தாரை அடைப்பு, எரிச்சல் மற்றும் நீர்க்கட்டு போக்கும் சிறந்த மூலிகை.',
    badge: 'Kidney Stone Dissolver',
    badgeTa: 'சிறுநீரக கல் கரைப்பான்',
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
    ingredients: [
      { name: 'Sirupeelai Chooranam Classical Compound', tamilName: 'சிறுபீளை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sirupeelai Chooranam prepared?',
        questionTa: 'ருத்ரா சிறுபீளை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sirupeelai chooranam","ruthra sirupeelai chooranam","chooranam","sirupeelai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சிறுபீளை சூரணம்","ருத்ரா சிறுபீளை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-036',
    name: 'Ruthra Sivathai Chooranam',
    tamilName: 'ருத்ரா சிவத்தை சூரணம்',
    slug: 'ruthra-sivathai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Operculina turpethum purgative compound for deep systemic detox, ascites, and chronic obstipation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'உடல் நச்சு கழிவுகளை வெளியேற்றும் பேதி சூரணம், பித்த நீக்கம் மற்றும் வயிற்று மந்தம் நீக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sivathai Chooranam (சிவத்தை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சிவத்தை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Operculina turpethum purgative compound for deep systemic detox, ascites, and chronic obstipation.',
    traditionalRoleTa: 'உடல் நச்சு கழிவுகளை வெளியேற்றும் பேதி சூரணம், பித்த நீக்கம் மற்றும் வயிற்று மந்தம் நீக்கி.',
    badge: 'Purgative Detox',
    badgeTa: 'பேதி & கழிவகற்றி',
    image: '/images/products/ruthra-sivathai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sivathai-chooranam/front.jpg',
      '/images/products/ruthra-sivathai-chooranam/angle.jpg',
      '/images/products/ruthra-sivathai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sivathai-chooranam/front.jpg',
      '/images/products/ruthra-sivathai-chooranam/angle.jpg',
      '/images/products/ruthra-sivathai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Sivathai Chooranam Classical Compound', tamilName: 'சிவத்தை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sivathai Chooranam prepared?',
        questionTa: 'ருத்ரா சிவத்தை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sivathai chooranam","ruthra sivathai chooranam","chooranam","sivathai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சிவத்தை சூரணம்","ருத்ரா சிவத்தை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-037',
    name: 'Ruthra Sugabethi Chooranam',
    tamilName: 'ருத்ரா சுகபேதி சூரணம்',
    slug: 'ruthra-sugabethi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Gentle, spasm-free laxative formulation for seasonal gut evacuation and cooling internal heat. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வயிற்று வலி இல்லாத சுகமான மலக்கழிவு மற்றும் பித்த உஷ்ணம் தணிக்கும் இயற்கை பேதி மருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sugabethi Chooranam (சுகபேதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சுகபேதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Gentle, spasm-free laxative formulation for seasonal gut evacuation and cooling internal heat.',
    traditionalRoleTa: 'வயிற்று வலி இல்லாத சுகமான மலக்கழிவு மற்றும் பித்த உஷ்ணம் தணிக்கும் இயற்கை பேதி மருந்து.',
    badge: 'Gentle Purgative',
    badgeTa: 'சுக பேதி நிவாரணம்',
    image: '/images/products/ruthra-sugabethi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sugabethi-chooranam/front.jpg',
      '/images/products/ruthra-sugabethi-chooranam/angle.jpg',
      '/images/products/ruthra-sugabethi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sugabethi-chooranam/front.jpg',
      '/images/products/ruthra-sugabethi-chooranam/angle.jpg',
      '/images/products/ruthra-sugabethi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Sugabethi Chooranam Classical Compound', tamilName: 'சுகபேதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sugabethi Chooranam prepared?',
        questionTa: 'ருத்ரா சுகபேதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sugabethi chooranam","ruthra sugabethi chooranam","chooranam","sugabethi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சுகபேதி சூரணம்","ருத்ரா சுகபேதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-038',
    name: 'Ruthra Thaleesathi Chooranam',
    tamilName: 'ருத்ரா தாளீசாதி சூரணம்',
    slug: 'ruthra-thaleesathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical Taxus baccata compound for chronic cough, asthma, bronchitis, anorexia, and digestive weakness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இளைப்பு, ஆஸ்துமா, நாள்பட்ட இருமல், ஈளை மற்றும் பசியின்மை போக்கும் தலைசிறந்த சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thaleesathi Chooranam (தாளீசாதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா தாளீசாதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical Taxus baccata compound for chronic cough, asthma, bronchitis, anorexia, and digestive weakness.',
    traditionalRoleTa: 'இளைப்பு, ஆஸ்துமா, நாள்பட்ட இருமல், ஈளை மற்றும் பசியின்மை போக்கும் தலைசிறந்த சூரணம்.',
    badge: 'Respiratory & Lung Tonic',
    badgeTa: 'சுவாச & நுரையீரல் நலம்',
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
    ingredients: [
      { name: 'Thaleesathi Chooranam Classical Compound', tamilName: 'தாளீசாதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thaleesathi Chooranam prepared?',
        questionTa: 'ருத்ரா தாளீசாதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thaleesathi chooranam","ruthra thaleesathi chooranam","chooranam","thaleesathi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["தாளீசாதி சூரணம்","ருத்ரா தாளீசாதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-039',
    name: 'Ruthra Thayirchundi Chooranam',
    tamilName: 'ருத்ரா தயிர்ச்சுண்டி சூரணம்',
    slug: 'ruthra-thayirchundi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Buttermilk-processed dry ginger formula for irritable bowel, chronic diarrhea, and gastric hypermotility. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சீதபேதி, வயிற்று கடுப்பு, அஜீரண கழிச்சல் மற்றும் குடல் இரைச்சலை கட்டுப்படுத்தும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thayirchundi Chooranam (தயிர்ச்சுண்டி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா தயிர்ச்சுண்டி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Buttermilk-processed dry ginger formula for irritable bowel, chronic diarrhea, and gastric hypermotility.',
    traditionalRoleTa: 'சீதபேதி, வயிற்று கடுப்பு, அஜீரண கழிச்சல் மற்றும் குடல் இரைச்சலை கட்டுப்படுத்தும்.',
    badge: 'IBS & Diarrhea Care',
    badgeTa: 'சீதபேதி & குடல் நலம்',
    image: '/images/products/ruthra-thayirchundi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-thayirchundi-chooranam/front.jpg',
      '/images/products/ruthra-thayirchundi-chooranam/angle.jpg',
      '/images/products/ruthra-thayirchundi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thayirchundi-chooranam/front.jpg',
      '/images/products/ruthra-thayirchundi-chooranam/angle.jpg',
      '/images/products/ruthra-thayirchundi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Thayirchundi Chooranam Classical Compound', tamilName: 'தயிர்ச்சுண்டி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thayirchundi Chooranam prepared?',
        questionTa: 'ருத்ரா தயிர்ச்சுண்டி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thayirchundi chooranam","ruthra thayirchundi chooranam","chooranam","thayirchundi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["தயிர்ச்சுண்டி சூரணம்","ருத்ரா தயிர்ச்சுண்டி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-040',
    name: 'Ruthra Thirikadugu Chooranam',
    tamilName: 'ருத்ரா திரிகடுக சூரணம்',
    slug: 'ruthra-thirikadugu-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Sunthi, Maricha, Pippali trio enhancing bio-availability, relieving sinusitis, colds, and gas. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சுக்கு, மிளகு, திப்பிலி சேர்ந்த முக்கூட்டு; சளி, இருமல், ஆஸ்துமா மற்றும் செரிமான தீ தூண்டி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thirikadugu Chooranam (திரிகடுக சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா திரிகடுக சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Sunthi, Maricha, Pippali trio enhancing bio-availability, relieving sinusitis, colds, and gas.',
    traditionalRoleTa: 'சுக்கு, மிளகு, திப்பிலி சேர்ந்த முக்கூட்டு; சளி, இருமல், ஆஸ்துமா மற்றும் செரிமான தீ தூண்டி.',
    badge: 'Tri-Spice Bio-Enhancer',
    badgeTa: 'முக்கூட்டு செரிமானம்',
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
    ingredients: [
      { name: 'Thirikadugu Chooranam Classical Compound', tamilName: 'திரிகடுக சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thirikadugu Chooranam prepared?',
        questionTa: 'ருத்ரா திரிகடுக சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thirikadugu chooranam","ruthra thirikadugu chooranam","chooranam","thirikadugu","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["திரிகடுக சூரணம்","ருத்ரா திரிகடுக சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-041',
    name: 'Ruthra Thiripala Chooranam',
    tamilName: 'ருத்ரா திரிபலா சூரணம்',
    slug: 'ruthra-thiripala-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness","metabolic-wellness","skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Haritaki, Bibhitaki, Amalaki formulation for colon cleansing, vision, antioxidant health, and detox. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கடுக்காய், நெல்லிக்காய், தான்றிக்காய் சேர்ந்த கல்ப மருந்து; மலக்குடல் சுத்தி, கண் பார்வை, ரத்த சுத்தி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thiripala Chooranam (திரிபலா சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா திரிபலா சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Haritaki, Bibhitaki, Amalaki formulation for colon cleansing, vision, antioxidant health, and detox.',
    traditionalRoleTa: 'கடுக்காய், நெல்லிக்காய், தான்றிக்காய் சேர்ந்த கல்ப மருந்து; மலக்குடல் சுத்தி, கண் பார்வை, ரத்த சுத்தி.',
    badge: 'Tri-Herb Rasayana',
    badgeTa: 'திரிபலா காயகற்பம்',
    image: '/images/products/ruthra-thiripala-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-thiripala-chooranam/front.jpg',
      '/images/products/ruthra-thiripala-chooranam/angle.jpg',
      '/images/products/ruthra-thiripala-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thiripala-chooranam/front.jpg',
      '/images/products/ruthra-thiripala-chooranam/angle.jpg',
      '/images/products/ruthra-thiripala-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Thiripala Chooranam Classical Compound', tamilName: 'திரிபலா சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thiripala Chooranam prepared?',
        questionTa: 'ருத்ரா திரிபலா சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thiripala chooranam","ruthra thiripala chooranam","chooranam","thiripala","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["திரிபலா சூரணம்","ருத்ரா திரிபலா சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-042',
    name: 'Ruthra Adathodai Kudineer Chooranam',
    tamilName: 'ருத்ரா ஆடாதோடை குடிநீர் சூரணம்',
    slug: 'ruthra-adathodai-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["respiratory"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Vasaka decoction for acute and chronic bronchitis, dry cough, hemoptysis, and chest congestion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மார்பு சளி, ஆஸ்துமா, இருமல், கபக்கட்டு மற்றும் சுவாச தடையை நீக்கும் ஆடாதோடை குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Adathodai Kudineer Chooranam (ஆடாதோடை குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ஆடாதோடை குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Vasaka decoction for acute and chronic bronchitis, dry cough, hemoptysis, and chest congestion.',
    traditionalRoleTa: 'மார்பு சளி, ஆஸ்துமா, இருமல், கபக்கட்டு மற்றும் சுவாச தடையை நீக்கும் ஆடாதோடை குடிநீர்.',
    badge: 'Bronchial & Lung Care',
    badgeTa: 'மார்பு சளி & இருமல்',
    image: '/images/products/ruthra-adathodai-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-adathodai-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-adathodai-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-adathodai-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-adathodai-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-adathodai-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-adathodai-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Adathodai Kudineer Chooranam Classical Compound', tamilName: 'ஆடாதோடை குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Adathodai Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா ஆடாதோடை குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["adathodai kudineer chooranam","ruthra adathodai kudineer chooranam","kudineer chooranam","adathodai","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ஆடாதோடை குடிநீர் சூரணம்","ருத்ரா ஆடாதோடை குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-043',
    name: 'Ruthra Kabasura Kudineer Chooranam',
    tamilName: 'ருத்ரா கபசூர குடிநீர் சூரணம்',
    slug: 'ruthra-kabasura-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["respiratory","metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Celebrated 15-herb Siddha immunomodulatory decoction for respiratory viral fevers, flu, and cough. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'காய்ச்சல், சளி, இருமல், வைரஸ் தொற்று மற்றும் நோய் எதிர்ப்பு சக்திக்கு தலைசிறந்த 15 மூலிகை குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kabasura Kudineer Chooranam (கபசூர குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கபசூர குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Celebrated 15-herb Siddha immunomodulatory decoction for respiratory viral fevers, flu, and cough.',
    traditionalRoleTa: 'காய்ச்சல், சளி, இருமல், வைரஸ் தொற்று மற்றும் நோய் எதிர்ப்பு சக்திக்கு தலைசிறந்த 15 மூலிகை குடிநீர்.',
    badge: 'Immune & Viral Fever Shield',
    badgeTa: 'காய்ச்சல் & நோய் எதிர்ப்பு',
    image: '/images/products/ruthra-kabasura-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kabasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-kabasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-kabasura-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kabasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-kabasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-kabasura-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kabasura Kudineer Chooranam Classical Compound', tamilName: 'கபசூர குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kabasura Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா கபசூர குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kabasura kudineer chooranam","ruthra kabasura kudineer chooranam","kudineer chooranam","kabasura","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கபசூர குடிநீர் சூரணம்","ருத்ரா கபசூர குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-044',
    name: 'Ruthra Kalladaippu Kudineer Chooranam',
    tamilName: 'ருத்ரா கல்லடைப்பு குடிநீர் சூரணம்',
    slug: 'ruthra-kalladaippu-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Specialized renal diuretic decoction for disintegrating and expelling urinary and bladder stones. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சிறுநீரக கற்கள், சிறுநீர் அடைப்பு, எரிச்சல் மற்றும் மூத்திர தாரை வலிகளுக்கு பிரத்யேக குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kalladaippu Kudineer Chooranam (கல்லடைப்பு குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கல்லடைப்பு குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Specialized renal diuretic decoction for disintegrating and expelling urinary and bladder stones.',
    traditionalRoleTa: 'சிறுநீரக கற்கள், சிறுநீர் அடைப்பு, எரிச்சல் மற்றும் மூத்திர தாரை வலிகளுக்கு பிரத்யேக குடிநீர்.',
    badge: 'Renal Calculus Expeller',
    badgeTa: 'சிறுநீரக கல் கரைப்பான்',
    image: '/images/products/ruthra-kalladaippu-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kalladaippu Kudineer Chooranam Classical Compound', tamilName: 'கல்லடைப்பு குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kalladaippu Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா கல்லடைப்பு குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kalladaippu kudineer chooranam","ruthra kalladaippu kudineer chooranam","kudineer chooranam","kalladaippu","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கல்லடைப்பு குடிநீர் சூரணம்","ருத்ரா கல்லடைப்பு குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-045',
    name: 'Ruthra Malattukarpa Kudineer Chooranam',
    tamilName: 'ருத்ரா மலட்டுக்கற்ப குடிநீர் சூரணம்',
    slug: 'ruthra-malattukarpa-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["womens-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Uterine restorative decoction supporting female fertility, ovulatory health, and menstrual rhythm. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கருப்பை பலவீனம், சினை முட்டை வளர்ச்சி, மலட்டுத்தன்மை நீக்கம் மற்றும் மகளிர் கருத்தரிப்பு நலம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Malattukarpa Kudineer Chooranam (மலட்டுக்கற்ப குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மலட்டுக்கற்ப குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Uterine restorative decoction supporting female fertility, ovulatory health, and menstrual rhythm.',
    traditionalRoleTa: 'கருப்பை பலவீனம், சினை முட்டை வளர்ச்சி, மலட்டுத்தன்மை நீக்கம் மற்றும் மகளிர் கருத்தரிப்பு நலம்.',
    badge: 'Fertility & Uterine Care',
    badgeTa: 'கருப்பை & கருத்தரிப்பு நலம்',
    image: '/images/products/ruthra-malattukarpa-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Malattukarpa Kudineer Chooranam Classical Compound', tamilName: 'மலட்டுக்கற்ப குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Malattukarpa Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா மலட்டுக்கற்ப குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["malattukarpa kudineer chooranam","ruthra malattukarpa kudineer chooranam","kudineer chooranam","malattukarpa","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மலட்டுக்கற்ப குடிநீர் சூரணம்","ருத்ரா மலட்டுக்கற்ப குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-046',
    name: 'Ruthra Mandurathi Kudineer Chooranam',
    tamilName: 'ருத்ரா மண்டூராதி குடிநீர் சூரணம்',
    slug: 'ruthra-mandurathi-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Iron-synergistic botanical decoction for severe anemia, edema, swelling, and liver enlargement. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ரத்த சோகை, பாண்டு நோய், உடல் வீக்கம் மற்றும் சோகைக்கு உகந்த மண்டூர குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Mandurathi Kudineer Chooranam (மண்டூராதி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மண்டூராதி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Iron-synergistic botanical decoction for severe anemia, edema, swelling, and liver enlargement.',
    traditionalRoleTa: 'ரத்த சோகை, பாண்டு நோய், உடல் வீக்கம் மற்றும் சோகைக்கு உகந்த மண்டூர குடிநீர்.',
    badge: 'Anemia & Edema Relief',
    badgeTa: 'ரத்த சோகை & உடல் வீக்கம்',
    image: '/images/products/ruthra-mandurathi-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-mandurathi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-mandurathi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-mandurathi-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mandurathi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-mandurathi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-mandurathi-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Mandurathi Kudineer Chooranam Classical Compound', tamilName: 'மண்டூராதி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Mandurathi Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா மண்டூராதி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["mandurathi kudineer chooranam","ruthra mandurathi kudineer chooranam","kudineer chooranam","mandurathi","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மண்டூராதி குடிநீர் சூரணம்","ருத்ரா மண்டூராதி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-047',
    name: 'Ruthra Manjal Noi Kudineer Chooranam',
    tamilName: 'ருத்ரா மஞ்சள் நோய் குடிநீர் சூரணம்',
    slug: 'ruthra-manjal-noi-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness","digestive-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Hepatoprotective decoction for infectious jaundice, elevated bilirubin, and sluggish liver function. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மஞ்சள் காமாலை, கல்லீரல் வீக்கம், பசியின்மை மற்றும் பித்த கழிவு நீக்கத்திற்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Manjal Noi Kudineer Chooranam (மஞ்சள் நோய் குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மஞ்சள் நோய் குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Hepatoprotective decoction for infectious jaundice, elevated bilirubin, and sluggish liver function.',
    traditionalRoleTa: 'மஞ்சள் காமாலை, கல்லீரல் வீக்கம், பசியின்மை மற்றும் பித்த கழிவு நீக்கத்திற்கு அருமருந்து.',
    badge: 'Jaundice & Liver Care',
    badgeTa: 'மஞ்சள் காமாலை நிவாரணம்',
    image: '/images/products/ruthra-manjal-noi-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Manjal Noi Kudineer Chooranam Classical Compound', tamilName: 'மஞ்சள் நோய் குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Manjal Noi Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா மஞ்சள் நோய் குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["manjal noi kudineer chooranam","ruthra manjal noi kudineer chooranam","kudineer chooranam","manjal","noi","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மஞ்சள் நோய் குடிநீர் சூரணம்","ருத்ரா மஞ்சள் நோய் குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-048',
    name: 'Ruthra Naakupoochi Kudineer Chooranam',
    tamilName: 'ருத்ரா நாக்குப்பூச்சி குடிநீர் சூரணம்',
    slug: 'ruthra-naakupoochi-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["digestive-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Anthelmintic decoction for eradicating roundworms, pinworms, tapeworms, and abdominal bloating. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நாக்குப்பூச்சி, கீரிப்பூச்சி, கொக்கிப்புழு போன்ற குடற்புழுக்களை வெளியேற்றும் மூலிகை குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Naakupoochi Kudineer Chooranam (நாக்குப்பூச்சி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நாக்குப்பூச்சி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Anthelmintic decoction for eradicating roundworms, pinworms, tapeworms, and abdominal bloating.',
    traditionalRoleTa: 'நாக்குப்பூச்சி, கீரிப்பூச்சி, கொக்கிப்புழு போன்ற குடற்புழுக்களை வெளியேற்றும் மூலிகை குடிநீர்.',
    badge: 'Intestinal Worm Expeller',
    badgeTa: 'குடற்புழு நீக்கி',
    image: '/images/products/ruthra-naakupoochi-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Naakupoochi Kudineer Chooranam Classical Compound', tamilName: 'நாக்குப்பூச்சி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Naakupoochi Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா நாக்குப்பூச்சி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["naakupoochi kudineer chooranam","ruthra naakupoochi kudineer chooranam","kudineer chooranam","naakupoochi","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நாக்குப்பூச்சி குடிநீர் சூரணம்","ருத்ரா நாக்குப்பூச்சி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-049',
    name: 'Ruthra Nannari Kudineer Chooranam',
    tamilName: 'ருத்ரா நன்னாரி குடிநீர் சூரணம்',
    slug: 'ruthra-nannari-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Hemidesmus indicus cooling decoction for burning urination, body heat dissipation, and blood purifying. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'உடல் உஷ்ணம், சிறுநீர் எரிச்சல், பித்த அழற்சி மற்றும் ரத்த சுத்திக்கு சிறந்த நன்னாரி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nannari Kudineer Chooranam (நன்னாரி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நன்னாரி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Hemidesmus indicus cooling decoction for burning urination, body heat dissipation, and blood purifying.',
    traditionalRoleTa: 'உடல் உஷ்ணம், சிறுநீர் எரிச்சல், பித்த அழற்சி மற்றும் ரத்த சுத்திக்கு சிறந்த நன்னாரி.',
    badge: 'Herbal Body Coolant',
    badgeTa: 'உடல் உஷ்ண நிவாரணம்',
    image: '/images/products/ruthra-nannari-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nannari-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nannari-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nannari-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nannari-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nannari-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nannari-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Nannari Kudineer Chooranam Classical Compound', tamilName: 'நன்னாரி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nannari Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா நன்னாரி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nannari kudineer chooranam","ruthra nannari kudineer chooranam","kudineer chooranam","nannari","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நன்னாரி குடிநீர் சூரணம்","ருத்ரா நன்னாரி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-050',
    name: 'Ruthra Neermulli Kudineer Chooranam',
    tamilName: 'ருத்ரா நீர்முள்ளி குடிநீர் சூரணம்',
    slug: 'ruthra-neermulli-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Potent diuretic decoction for ascites, generalized dropsy, pedal edema, and kidney flushing. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நீர் கட்டு, கால் வீக்கம், பெருவயிறு மற்றும் சிறுநீரக கழிவுகளை வெளியேற்றும் நீர்முள்ளி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Neermulli Kudineer Chooranam (நீர்முள்ளி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நீர்முள்ளி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Potent diuretic decoction for ascites, generalized dropsy, pedal edema, and kidney flushing.',
    traditionalRoleTa: 'நீர் கட்டு, கால் வீக்கம், பெருவயிறு மற்றும் சிறுநீரக கழிவுகளை வெளியேற்றும் நீர்முள்ளி.',
    badge: 'Diuretic & Dropsy Care',
    badgeTa: 'நீர்க்கட்டு & கால் வீக்கம்',
    image: '/images/products/ruthra-neermulli-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-neermulli-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-neermulli-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-neermulli-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-neermulli-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-neermulli-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-neermulli-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Neermulli Kudineer Chooranam Classical Compound', tamilName: 'நீர்முள்ளி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Neermulli Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா நீர்முள்ளி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["neermulli kudineer chooranam","ruthra neermulli kudineer chooranam","kudineer chooranam","neermulli","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நீர்முள்ளி குடிநீர் சூரணம்","ருத்ரா நீர்முள்ளி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-051',
    name: 'Ruthra Nilavembu Kudineer Chooranam',
    tamilName: 'ருத்ரா நிலவேம்பு குடிநீர் சூரணம்',
    slug: 'ruthra-nilavembu-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["respiratory","metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical antipyretic 9-herb blend for dengue, chikungunya, intermittent fevers, and viral fatigue. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'டெங்கு, சிக்குன்குனியா, அனைத்து வகை விஷ காய்ச்சல்கள் மற்றும் உடல் சோர்வு போக்கும் நிலவேம்பு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nilavembu Kudineer Chooranam (நிலவேம்பு குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நிலவேம்பு குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical antipyretic 9-herb blend for dengue, chikungunya, intermittent fevers, and viral fatigue.',
    traditionalRoleTa: 'டெங்கு, சிக்குன்குனியா, அனைத்து வகை விஷ காய்ச்சல்கள் மற்றும் உடல் சோர்வு போக்கும் நிலவேம்பு.',
    badge: 'Antipyretic & Fever Shield',
    badgeTa: 'விஷ காய்ச்சல் நிவாரணம்',
    image: '/images/products/ruthra-nilavembu-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nilavembu-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nilavembu-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nilavembu-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nilavembu-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nilavembu-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nilavembu-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Nilavembu Kudineer Chooranam Classical Compound', tamilName: 'நிலவேம்பு குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nilavembu Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா நிலவேம்பு குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nilavembu kudineer chooranam","ruthra nilavembu kudineer chooranam","kudineer chooranam","nilavembu","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நிலவேம்பு குடிநீர் சூரணம்","ருத்ரா நிலவேம்பு குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-052',
    name: 'Ruthra Nochi Kudineer Chooranam',
    tamilName: 'ருத்ரா நொச்சி குடிநீர் சூரணம்',
    slug: 'ruthra-nochi-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["respiratory","joint-mobility"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Vitex negundo decoction for heavy sinus congestion, vatha headaches, and muscular soreness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பீனிசம், தலைபாரம், சளி அடைப்பு, மூக்கடைப்பு மற்றும் வாத வலிகளுக்கு சிறந்த நொச்சி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nochi Kudineer Chooranam (நொச்சி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நொச்சி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Vitex negundo decoction for heavy sinus congestion, vatha headaches, and muscular soreness.',
    traditionalRoleTa: 'பீனிசம், தலைபாரம், சளி அடைப்பு, மூக்கடைப்பு மற்றும் வாத வலிகளுக்கு சிறந்த நொச்சி.',
    badge: 'Sinus & Headache Relief',
    badgeTa: 'சைனஸ் & தலைபாரம்',
    image: '/images/products/ruthra-nochi-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nochi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nochi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nochi-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nochi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nochi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nochi-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Nochi Kudineer Chooranam Classical Compound', tamilName: 'நொச்சி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nochi Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா நொச்சி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nochi kudineer chooranam","ruthra nochi kudineer chooranam","kudineer chooranam","nochi","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நொச்சி குடிநீர் சூரணம்","ருத்ரா நொச்சி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-053',
    name: 'Ruthra Pidangunari Kudineer Chooranam',
    tamilName: 'ருத்ரா பிடங்குநாரி குடிநீர் சூரணம்',
    slug: 'ruthra-pidangunari-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["respiratory","metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical formulation for childhood chronic fevers, deep respiratory rattles, and indigestion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குழந்தைகளின் நாள்பட்ட காய்ச்சல், மாந்தம், கபக்கட்டு மற்றும் மார்பு சளி போக்கும் குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Pidangunari Kudineer Chooranam (பிடங்குநாரி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பிடங்குநாரி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical formulation for childhood chronic fevers, deep respiratory rattles, and indigestion.',
    traditionalRoleTa: 'குழந்தைகளின் நாள்பட்ட காய்ச்சல், மாந்தம், கபக்கட்டு மற்றும் மார்பு சளி போக்கும் குடிநீர்.',
    badge: 'Pediatric Fever & Phlegm',
    badgeTa: 'குழந்தை காய்ச்சல் & மாந்தம்',
    image: '/images/products/ruthra-pidangunari-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-pidangunari-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-pidangunari-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-pidangunari-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pidangunari-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-pidangunari-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-pidangunari-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Pidangunari Kudineer Chooranam Classical Compound', tamilName: 'பிடங்குநாரி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Pidangunari Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா பிடங்குநாரி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["pidangunari kudineer chooranam","ruthra pidangunari kudineer chooranam","kudineer chooranam","pidangunari","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பிடங்குநாரி குடிநீர் சூரணம்","ருத்ரா பிடங்குநாரி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-054',
    name: 'Ruthra Pithasura Kudineer Chooranam',
    tamilName: 'ருத்ரா பித்தசுர குடிநீர் சூரணம்',
    slug: 'ruthra-pithasura-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness","digestive-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Targeted cooling decoction for bilious fevers, intense thirst, bitter mouth taste, and dizziness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பித்த காய்ச்சல், நாக்கு கசப்பு, தலைச்சுற்றல், வாந்தி மற்றும் அதீத தாகத்தை தணிக்கும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Pithasura Kudineer Chooranam (பித்தசுர குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பித்தசுர குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Targeted cooling decoction for bilious fevers, intense thirst, bitter mouth taste, and dizziness.',
    traditionalRoleTa: 'பித்த காய்ச்சல், நாக்கு கசப்பு, தலைச்சுற்றல், வாந்தி மற்றும் அதீத தாகத்தை தணிக்கும்.',
    badge: 'Bilious Fever Pacifier',
    badgeTa: 'பித்த காய்ச்சல் நிவாரணம்',
    image: '/images/products/ruthra-pithasura-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-pithasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-pithasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-pithasura-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pithasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-pithasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-pithasura-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Pithasura Kudineer Chooranam Classical Compound', tamilName: 'பித்தசுர குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Pithasura Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா பித்தசுர குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["pithasura kudineer chooranam","ruthra pithasura kudineer chooranam","kudineer chooranam","pithasura","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பித்தசுர குடிநீர் சூரணம்","ருத்ரா பித்தசுர குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-055',
    name: 'Ruthra Sarvasura Kudineer Chooranam',
    tamilName: 'ருத்ரா சர்வசுர குடிநீர் சூரணம்',
    slug: 'ruthra-sarvasura-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness","respiratory"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Universal antipyretic compound effective across acute, chronic, and periodic pyrexia. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சகல சுரங்கள், முறை காய்ச்சல், நடுக்க காய்ச்சல் மற்றும் உடல் வலிகளை போக்கும் சர்வசுர குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sarvasura Kudineer Chooranam (சர்வசுர குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சர்வசுர குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Universal antipyretic compound effective across acute, chronic, and periodic pyrexia.',
    traditionalRoleTa: 'சகல சுரங்கள், முறை காய்ச்சல், நடுக்க காய்ச்சல் மற்றும் உடல் வலிகளை போக்கும் சர்வசுர குடிநீர்.',
    badge: 'Universal Antipyretic',
    badgeTa: 'சர்வ சுரம் போக்கி',
    image: '/images/products/ruthra-sarvasura-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sarvasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-sarvasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-sarvasura-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sarvasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-sarvasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-sarvasura-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Sarvasura Kudineer Chooranam Classical Compound', tamilName: 'சர்வசுர குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sarvasura Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா சர்வசுர குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sarvasura kudineer chooranam","ruthra sarvasura kudineer chooranam","kudineer chooranam","sarvasura","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சர்வசுர குடிநீர் சூரணம்","ருத்ரா சர்வசுர குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-056',
    name: 'Ruthra Soodhagathai Udaikum Kudineer Chooranam',
    tamilName: 'ருத்ரா சூதகத்தை உடைக்கும் குடிநீர் சூரணம்',
    slug: 'ruthra-soodhagathai-udaikum-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["womens-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Emmenagogue decoction for delayed periods, secondary amenorrhea, and menstrual blockages. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சூதக தடை, தாமதமான மாதவிடாய், அடிவயிற்று வலி மற்றும் மாதவிடாய் சுழற்சி ஒழுங்குபடுத்தி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Soodhagathai Udaikum Kudineer Chooranam (சூதகத்தை உடைக்கும் குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சூதகத்தை உடைக்கும் குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Emmenagogue decoction for delayed periods, secondary amenorrhea, and menstrual blockages.',
    traditionalRoleTa: 'சூதக தடை, தாமதமான மாதவிடாய், அடிவயிற்று வலி மற்றும் மாதவிடாய் சுழற்சி ஒழுங்குபடுத்தி.',
    badge: 'Menstrual Regulator',
    badgeTa: 'மாதவிடாய் தூண்டி',
    image: '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Soodhagathai Udaikum Kudineer Chooranam Classical Compound', tamilName: 'சூதகத்தை உடைக்கும் குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Soodhagathai Udaikum Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா சூதகத்தை உடைக்கும் குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["soodhagathai udaikum kudineer chooranam","ruthra soodhagathai udaikum kudineer chooranam","kudineer chooranam","soodhagathai","udaikum","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சூதகத்தை உடைக்கும் குடிநீர் சூரணம்","ருத்ரா சூதகத்தை உடைக்கும் குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-057',
    name: 'Ruthra Vatha Sura Kudineer Chooranam',
    tamilName: 'ருத்ரா வாத சுர குடிநீர் சூரணம்',
    slug: 'ruthra-vatha-sura-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["joint-mobility","metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Specific decoction for fevers accompanied by intense joint agony, shivering, and body stiffness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வாத சுரம், மூட்டு வலிகளுடன் கூடிய காய்ச்சல், நடுக்கம் மற்றும் உடம்பு குடைச்சல் போக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Vatha Sura Kudineer Chooranam (வாத சுர குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா வாத சுர குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Specific decoction for fevers accompanied by intense joint agony, shivering, and body stiffness.',
    traditionalRoleTa: 'வாத சுரம், மூட்டு வலிகளுடன் கூடிய காய்ச்சல், நடுக்கம் மற்றும் உடம்பு குடைச்சல் போக்கி.',
    badge: 'Rheumatic Fever Relief',
    badgeTa: 'வாத காய்ச்சல் நிவாரணம்',
    image: '/images/products/ruthra-vatha-sura-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Vatha Sura Kudineer Chooranam Classical Compound', tamilName: 'வாத சுர குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Vatha Sura Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா வாத சுர குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["vatha sura kudineer chooranam","ruthra vatha sura kudineer chooranam","kudineer chooranam","vatha","sura","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["வாத சுர குடிநீர் சூரணம்","ருத்ரா வாத சுர குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-058',
    name: 'Ruthra Oma Kudineer',
    tamilName: 'ருத்ரா ஓம குடிநீர்',
    slug: 'ruthra-oma-kudineer',
    medicalSystem: 'siddha',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    categoryGroup: 'kudineer',
    concerns: ["digestive-wellness"],
    price: 110,
    originalPrice: 130,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Ready liquid ajwain extract for instant gas relief, acute colic, dyspepsia, and infantile gripes. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வாயு தொல்லை, அஜீரணம், வயிற்று வலி, பொருமல் மற்றும் குழந்தைகளுக்கு மாந்த நிவாரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Oma Kudineer (ஓம குடிநீர்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ஓம குடிநீர் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Ready liquid ajwain extract for instant gas relief, acute colic, dyspepsia, and infantile gripes.',
    traditionalRoleTa: 'வாயு தொல்லை, அஜீரணம், வயிற்று வலி, பொருமல் மற்றும் குழந்தைகளுக்கு மாந்த நிவாரணம்.',
    badge: 'Instant Digestive Water',
    badgeTa: 'ஓம செரிமான நீர்',
    image: '/images/products/ruthra-oma-kudineer/front.jpg',
    images: [
      '/images/products/ruthra-oma-kudineer/front.jpg',
      '/images/products/ruthra-oma-kudineer/angle.jpg',
      '/images/products/ruthra-oma-kudineer/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-oma-kudineer/front.jpg',
      '/images/products/ruthra-oma-kudineer/angle.jpg',
      '/images/products/ruthra-oma-kudineer/back.jpg'
    ],
    ingredients: [
      { name: 'Oma Kudineer Classical Compound', tamilName: 'ஓம குடிநீர் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '15-30 ml', instructionTa: '15-30 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Direct or diluted with equal quantity of warm water.', instructionTa: 'நேரடியாக அல்லது சம அளவு வெந்நீருடன் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '15-30 ml',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Direct or diluted with equal quantity of warm water',
      amountTa: '15-30 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'நேரடியாக அல்லது சம அளவு வெந்நீருடன்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Oma Kudineer prepared?',
        questionTa: 'ருத்ரா ஓம குடிநீர் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["oma kudineer","ruthra oma kudineer","kudineer","oma","kudineer","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ஓம குடிநீர்","ருத்ரா ஓம குடிநீர்","குடிநீர்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-059',
    name: 'Ruthra Nannar Manapagu',
    tamilName: 'ருத்ரா நன்னாரி மணப்பாகு',
    slug: 'ruthra-nannar-manapagu',
    medicalSystem: 'siddha',
    formulation: 'Manapagu',
    formulationTa: 'மணப்பாகு',
    categoryGroup: 'manapagu',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 175,
    originalPrice: 200,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Delicious cooling herbal syrup for internal heat, burning urine, dehydration, and prickly heat. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சுவையான மூலிகை நன்னாரி சிரப்; உடல் சூடு, சிறுநீர் எரிச்சல், நீர்வேட்கை மற்றும் வேனிற்கட்டி போக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nannar Manapagu (நன்னாரி மணப்பாகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நன்னாரி மணப்பாகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Delicious cooling herbal syrup for internal heat, burning urine, dehydration, and prickly heat.',
    traditionalRoleTa: 'சுவையான மூலிகை நன்னாரி சிரப்; உடல் சூடு, சிறுநீர் எரிச்சல், நீர்வேட்கை மற்றும் வேனிற்கட்டி போக்கி.',
    badge: 'Cooling Herbal Cordial',
    badgeTa: 'நன்னாரி மூலிகை சிரப்',
    image: '/images/products/ruthra-nannar-manapagu/front.jpg',
    images: [
      '/images/products/ruthra-nannar-manapagu/front.jpg',
      '/images/products/ruthra-nannar-manapagu/angle.jpg',
      '/images/products/ruthra-nannar-manapagu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nannar-manapagu/front.jpg',
      '/images/products/ruthra-nannar-manapagu/angle.jpg',
      '/images/products/ruthra-nannar-manapagu/back.jpg'
    ],
    ingredients: [
      { name: 'Nannar Manapagu Classical Compound', tamilName: 'நன்னாரி மணப்பாகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or milk.', instructionTa: 'வெந்நீர் அல்லது பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or milk',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர் அல்லது பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nannar Manapagu prepared?',
        questionTa: 'ருத்ரா நன்னாரி மணப்பாகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nannar manapagu","ruthra nannar manapagu","manapagu","nannar","manapagu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நன்னாரி மணப்பாகு","ருத்ரா நன்னாரி மணப்பாகு","மணப்பாகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-060',
    name: 'Ruthra Thurinj Manapagu',
    tamilName: 'ருத்ரா துரிஞ்சி மணப்பாகு',
    slug: 'ruthra-thurinj-manapagu',
    medicalSystem: 'siddha',
    formulation: 'Manapagu',
    formulationTa: 'மணப்பாகு',
    categoryGroup: 'manapagu',
    concerns: ["digestive-wellness","womens-wellness"],
    price: 175,
    originalPrice: 200,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Citrus medica cordial for morning sickness, pregnancy nausea, loss of taste, and bile regurgitation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கர்ப்பிணிகளின் வாந்தி, மயக்கம், நாவில் சுவையின்மை மற்றும் பித்த நெஞ்செரிச்சலை போக்கும் துரிஞ்சி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thurinj Manapagu (துரிஞ்சி மணப்பாகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா துரிஞ்சி மணப்பாகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Citrus medica cordial for morning sickness, pregnancy nausea, loss of taste, and bile regurgitation.',
    traditionalRoleTa: 'கர்ப்பிணிகளின் வாந்தி, மயக்கம், நாவில் சுவையின்மை மற்றும் பித்த நெஞ்செரிச்சலை போக்கும் துரிஞ்சி.',
    badge: 'Nausea & Morning Sickness',
    badgeTa: 'வாந்தி & பித்த மயக்கம்',
    image: '/images/products/ruthra-thurinj-manapagu/front.jpg',
    images: [
      '/images/products/ruthra-thurinj-manapagu/front.jpg',
      '/images/products/ruthra-thurinj-manapagu/angle.jpg',
      '/images/products/ruthra-thurinj-manapagu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thurinj-manapagu/front.jpg',
      '/images/products/ruthra-thurinj-manapagu/angle.jpg',
      '/images/products/ruthra-thurinj-manapagu/back.jpg'
    ],
    ingredients: [
      { name: 'Thurinj Manapagu Classical Compound', tamilName: 'துரிஞ்சி மணப்பாகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or milk.', instructionTa: 'வெந்நீர் அல்லது பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or milk',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர் அல்லது பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thurinj Manapagu prepared?',
        questionTa: 'ருத்ரா துரிஞ்சி மணப்பாகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thurinj manapagu","ruthra thurinj manapagu","manapagu","thurinj","manapagu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["துரிஞ்சி மணப்பாகு","ருத்ரா துரிஞ்சி மணப்பாகு","மணப்பாகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-061',
    name: 'Ruthra Aswagandhi Legiyam',
    tamilName: 'ருத்ரா அஸ்வகந்தி லேகியம்',
    slug: 'ruthra-aswagandhi-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Premier nutritive electuary for physical strength, muscle mass building, nervous debility, and stamina. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'உடல் பலம், தசை வளர்ச்சி, நரம்பு தளர்ச்சி போக்கி, ஆண்மை மற்றும் விந்து விருத்திக்கு உன்னத லேகியம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Aswagandhi Legiyam (அஸ்வகந்தி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அஸ்வகந்தி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Premier nutritive electuary for physical strength, muscle mass building, nervous debility, and stamina.',
    traditionalRoleTa: 'உடல் பலம், தசை வளர்ச்சி, நரம்பு தளர்ச்சி போக்கி, ஆண்மை மற்றும் விந்து விருத்திக்கு உன்னத லேகியம்.',
    badge: 'Nutritive Strength Tonic',
    badgeTa: 'உடல் பலம் & தாது புஷ்டி',
    image: '/images/products/ruthra-aswagandhi-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-aswagandhi-legiyam/front.jpg',
      '/images/products/ruthra-aswagandhi-legiyam/angle.jpg',
      '/images/products/ruthra-aswagandhi-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-aswagandhi-legiyam/front.jpg',
      '/images/products/ruthra-aswagandhi-legiyam/angle.jpg',
      '/images/products/ruthra-aswagandhi-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Aswagandhi Legiyam Classical Compound', tamilName: 'அஸ்வகந்தி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Aswagandhi Legiyam prepared?',
        questionTa: 'ருத்ரா அஸ்வகந்தி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["aswagandhi legiyam","ruthra aswagandhi legiyam","legiyam","aswagandhi","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அஸ்வகந்தி லேகியம்","ருத்ரா அஸ்வகந்தி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-062',
    name: 'Ruthra Inji Legiyam',
    tamilName: 'ருத்ரா இஞ்சி லேகியம்',
    slug: 'ruthra-inji-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["digestive-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Ginger-based electuary for sluggish digestion, gas accumulation, nausea, and morning heaviness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'செரிமான மந்தம், பித்த வாந்தி, பசியின்மை, நெஞ்செரிச்சல் மற்றும் வாயு தொல்லை போக்கும் இஞ்சி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Inji Legiyam (இஞ்சி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா இஞ்சி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Ginger-based electuary for sluggish digestion, gas accumulation, nausea, and morning heaviness.',
    traditionalRoleTa: 'செரிமான மந்தம், பித்த வாந்தி, பசியின்மை, நெஞ்செரிச்சல் மற்றும் வாயு தொல்லை போக்கும் இஞ்சி.',
    badge: 'Digestive & Appetizer Jam',
    badgeTa: 'செரிமானம் & பசி தூண்டி',
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
    ingredients: [
      { name: 'Inji Legiyam Classical Compound', tamilName: 'இஞ்சி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Inji Legiyam prepared?',
        questionTa: 'ருத்ரா இஞ்சி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["inji legiyam","ruthra inji legiyam","legiyam","inji","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["இஞ்சி லேகியம்","ருத்ரா இஞ்சி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-063',
    name: 'Ruthra Kandathri Legiyam',
    tamilName: 'ருத்ரா கண்டங்கத்திரி லேகியம்',
    slug: 'ruthra-kandathri-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["respiratory"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Solanum surattense jam for bronchial asthma, chronic productive cough, wheezing, and rib cage tightness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ஆஸ்துமா, ஈளை இருமல், மார்பு சளி, இரைப்பு மற்றும் சுவாச கோளாறுகளுக்கு சிறந்த லேகியம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kandathri Legiyam (கண்டங்கத்திரி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கண்டங்கத்திரி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Solanum surattense jam for bronchial asthma, chronic productive cough, wheezing, and rib cage tightness.',
    traditionalRoleTa: 'ஆஸ்துமா, ஈளை இருமல், மார்பு சளி, இரைப்பு மற்றும் சுவாச கோளாறுகளுக்கு சிறந்த லேகியம்.',
    badge: 'Bronchial & Asthma Care',
    badgeTa: 'ஆஸ்துமா & சளி நிவாரணம்',
    image: '/images/products/ruthra-kandathri-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-kandathri-legiyam/front.jpg',
      '/images/products/ruthra-kandathri-legiyam/angle.jpg',
      '/images/products/ruthra-kandathri-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kandathri-legiyam/front.jpg',
      '/images/products/ruthra-kandathri-legiyam/angle.jpg',
      '/images/products/ruthra-kandathri-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Kandathri Legiyam Classical Compound', tamilName: 'கண்டங்கத்திரி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kandathri Legiyam prepared?',
        questionTa: 'ருத்ரா கண்டங்கத்திரி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kandathri legiyam","ruthra kandathri legiyam","legiyam","kandathri","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கண்டங்கத்திரி லேகியம்","ருத்ரா கண்டங்கத்திரி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-064',
    name: 'Ruthra Karisalai Legiyam',
    tamilName: 'ருத்ரா கரிசலாங்கண்ணி லேகியம்',
    slug: 'ruthra-karisalai-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Eclipta prostrata liver rejuvenator for anemia, jaundice recovery, hepatic detox, and hair vitality. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கல்லீரல் பலம், காமாலை குணமாக, ரத்த சோகை நீக்கம் மற்றும் கூந்தல் வளர்ச்சிக்கு கரிசாலை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karisalai Legiyam (கரிசலாங்கண்ணி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கரிசலாங்கண்ணி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Eclipta prostrata liver rejuvenator for anemia, jaundice recovery, hepatic detox, and hair vitality.',
    traditionalRoleTa: 'கல்லீரல் பலம், காமாலை குணமாக, ரத்த சோகை நீக்கம் மற்றும் கூந்தல் வளர்ச்சிக்கு கரிசாலை.',
    badge: 'Hepatic Rejuvenator',
    badgeTa: 'கல்லீரல் & ரத்த சோகை',
    image: '/images/products/ruthra-karisalai-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-karisalai-legiyam/front.jpg',
      '/images/products/ruthra-karisalai-legiyam/angle.jpg',
      '/images/products/ruthra-karisalai-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karisalai-legiyam/front.jpg',
      '/images/products/ruthra-karisalai-legiyam/angle.jpg',
      '/images/products/ruthra-karisalai-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Karisalai Legiyam Classical Compound', tamilName: 'கரிசலாங்கண்ணி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karisalai Legiyam prepared?',
        questionTa: 'ருத்ரா கரிசலாங்கண்ணி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karisalai legiyam","ruthra karisalai legiyam","legiyam","karisalai","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கரிசலாங்கண்ணி லேகியம்","ருத்ரா கரிசலாங்கண்ணி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-065',
    name: 'Ruthra Karunai Legiyam',
    tamilName: 'ருத்ரா கருணை லேகியம்',
    slug: 'ruthra-karunai-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["digestive-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Elephant foot yam jam for bleeding/non-bleeding piles, fistula, anal fissure pain, and constipation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மூல நோய், உள் மூலம், வெளி மூலம், பவுத்திரம், ஆசனவாய் எரிச்சல் மற்றும் ரத்த மூலத்திற்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karunai Legiyam (கருணை லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கருணை லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Elephant foot yam jam for bleeding/non-bleeding piles, fistula, anal fissure pain, and constipation.',
    traditionalRoleTa: 'மூல நோய், உள் மூலம், வெளி மூலம், பவுத்திரம், ஆசனவாய் எரிச்சல் மற்றும் ரத்த மூலத்திற்கு அருமருந்து.',
    badge: 'Piles & Fissure Jam',
    badgeTa: 'மூல நோய் நிவாரணம்',
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
    ingredients: [
      { name: 'Karunai Legiyam Classical Compound', tamilName: 'கருணை லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karunai Legiyam prepared?',
        questionTa: 'ருத்ரா கருணை லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karunai legiyam","ruthra karunai legiyam","legiyam","karunai","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கருணை லேகியம்","ருத்ரா கருணை லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-066',
    name: 'Ruthra Madhanasanjeevi Legiyam',
    tamilName: 'ருத்ரா மதனசஞ்சீவி லேகியம்',
    slug: 'ruthra-madhanasanjeevi-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["metabolic-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Aphrodisiac and restorative jam for premature exhaustion, vitality restoration, and virility. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தாது பலவீனம், விந்து அணுக்கள் பெருக்கம், ஆண்மை குறைபாடு மற்றும் நரம்பு சோர்வு போக்கும் மதனசஞ்சீவி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Madhanasanjeevi Legiyam (மதனசஞ்சீவி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மதனசஞ்சீவி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Aphrodisiac and restorative jam for premature exhaustion, vitality restoration, and virility.',
    traditionalRoleTa: 'தாது பலவீனம், விந்து அணுக்கள் பெருக்கம், ஆண்மை குறைபாடு மற்றும் நரம்பு சோர்வு போக்கும் மதனசஞ்சீவி.',
    badge: 'Virility & Stamina Jam',
    badgeTa: 'ஆண்மை & தாது விருத்தி',
    image: '/images/products/ruthra-madhanasanjeevi-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-madhanasanjeevi-legiyam/front.jpg',
      '/images/products/ruthra-madhanasanjeevi-legiyam/angle.jpg',
      '/images/products/ruthra-madhanasanjeevi-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-madhanasanjeevi-legiyam/front.jpg',
      '/images/products/ruthra-madhanasanjeevi-legiyam/angle.jpg',
      '/images/products/ruthra-madhanasanjeevi-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Madhanasanjeevi Legiyam Classical Compound', tamilName: 'மதனசஞ்சீவி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Madhanasanjeevi Legiyam prepared?',
        questionTa: 'ருத்ரா மதனசஞ்சீவி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["madhanasanjeevi legiyam","ruthra madhanasanjeevi legiyam","legiyam","madhanasanjeevi","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மதனசஞ்சீவி லேகியம்","ருத்ரா மதனசஞ்சீவி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-067',
    name: 'Ruthra Mudakathan Legiyam',
    tamilName: 'ருத்ரா முடக்கத்தான் லேகியம்',
    slug: 'ruthra-mudakathan-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["joint-mobility"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Cardiospermum halicacabum electuary for osteoarthritis, joint stiffness, sciatica, and gout pain. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'முடக்கு வாதம், மூட்டு தேய்மானம், இடுப்பு வலி, சந்து வாதம் மற்றும் தசை பிடிப்புகளுக்கு சிறந்த மருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Mudakathan Legiyam (முடக்கத்தான் லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா முடக்கத்தான் லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cardiospermum halicacabum electuary for osteoarthritis, joint stiffness, sciatica, and gout pain.',
    traditionalRoleTa: 'முடக்கு வாதம், மூட்டு தேய்மானம், இடுப்பு வலி, சந்து வாதம் மற்றும் தசை பிடிப்புகளுக்கு சிறந்த மருந்து.',
    badge: 'Anti-Arthritic Jam',
    badgeTa: 'மூட்டு வாதம் & மூட்டு பலம்',
    image: '/images/products/ruthra-mudakathan-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-mudakathan-legiyam/front.jpg',
      '/images/products/ruthra-mudakathan-legiyam/angle.jpg',
      '/images/products/ruthra-mudakathan-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mudakathan-legiyam/front.jpg',
      '/images/products/ruthra-mudakathan-legiyam/angle.jpg',
      '/images/products/ruthra-mudakathan-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Mudakathan Legiyam Classical Compound', tamilName: 'முடக்கத்தான் லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Mudakathan Legiyam prepared?',
        questionTa: 'ருத்ரா முடக்கத்தான் லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["mudakathan legiyam","ruthra mudakathan legiyam","legiyam","mudakathan","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["முடக்கத்தான் லேகியம்","ருத்ரா முடக்கத்தான் லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-068',
    name: 'Ruthra Narasimma Legiyam',
    tamilName: 'ருத்ரா நரசிம்ம லேகியம்',
    slug: 'ruthra-narasimma-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Potent rasayana for premature greying, hair thinning, skin luster, and emaciation recovery. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இளநரை, முடி கொட்டுதல், உடல் மெலிவு நீங்கி தசைகள் பெருக மற்றும் தேக வசீகரத்திற்கு நரசிம்ம லேகியம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Narasimma Legiyam (நரசிம்ம லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நரசிம்ம லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Potent rasayana for premature greying, hair thinning, skin luster, and emaciation recovery.',
    traditionalRoleTa: 'இளநரை, முடி கொட்டுதல், உடல் மெலிவு நீங்கி தசைகள் பெருக மற்றும் தேக வசீகரத்திற்கு நரசிம்ம லேகியம்.',
    badge: 'Hair & Muscle Rasayana',
    badgeTa: 'கூந்தல் & தேக பலம்',
    image: '/images/products/ruthra-narasimma-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-narasimma-legiyam/front.jpg',
      '/images/products/ruthra-narasimma-legiyam/angle.jpg',
      '/images/products/ruthra-narasimma-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-narasimma-legiyam/front.jpg',
      '/images/products/ruthra-narasimma-legiyam/angle.jpg',
      '/images/products/ruthra-narasimma-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Narasimma Legiyam Classical Compound', tamilName: 'நரசிம்ம லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Narasimma Legiyam prepared?',
        questionTa: 'ருத்ரா நரசிம்ம லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["narasimma legiyam","ruthra narasimma legiyam","legiyam","narasimma","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நரசிம்ம லேகியம்","ருத்ரா நரசிம்ம லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-069',
    name: 'Ruthra Panchadeepakini Legiyam',
    tamilName: 'ருத்ரா பஞ்சதீபாகினி லேகியம்',
    slug: 'ruthra-panchadeepakini-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["digestive-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Five pungent spices electuary treating chronic anorexia, flatulence, and malabsorption syndrome. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பசியின்மை, செரிமான குறைபாடு, உண்ணாமை மற்றும் குடல் மந்தத்தை போக்கும் பஞ்சதீபாகினி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Panchadeepakini Legiyam (பஞ்சதீபாகினி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பஞ்சதீபாகினி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Five pungent spices electuary treating chronic anorexia, flatulence, and malabsorption syndrome.',
    traditionalRoleTa: 'பசியின்மை, செரிமான குறைபாடு, உண்ணாமை மற்றும் குடல் மந்தத்தை போக்கும் பஞ்சதீபாகினி.',
    badge: 'Digestive Fire Jam',
    badgeTa: 'செரிமான தீபனி லேகியம்',
    image: '/images/products/ruthra-panchadeepakini-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-panchadeepakini-legiyam/front.jpg',
      '/images/products/ruthra-panchadeepakini-legiyam/angle.jpg',
      '/images/products/ruthra-panchadeepakini-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-panchadeepakini-legiyam/front.jpg',
      '/images/products/ruthra-panchadeepakini-legiyam/angle.jpg',
      '/images/products/ruthra-panchadeepakini-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Panchadeepakini Legiyam Classical Compound', tamilName: 'பஞ்சதீபாகினி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Panchadeepakini Legiyam prepared?',
        questionTa: 'ருத்ரா பஞ்சதீபாகினி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["panchadeepakini legiyam","ruthra panchadeepakini legiyam","legiyam","panchadeepakini","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பஞ்சதீபாகினி லேகியம்","ருத்ரா பஞ்சதீபாகினி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-070',
    name: 'Ruthra Perumbadu Legiyam',
    tamilName: 'ருத்ரா பெரும்பாடு லேகியம்',
    slug: 'ruthra-perumbadu-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["womens-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Specialized gynecological electuary for menorrhagia, excessive menstrual flooding, and weakness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பெரும்பாடு, அதிக உதிரப்போக்கு, கருப்பை பலவீனம் மற்றும் இடுப்பு வலிக்கு பிரத்யேக தீர்வு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Perumbadu Legiyam (பெரும்பாடு லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பெரும்பாடு லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Specialized gynecological electuary for menorrhagia, excessive menstrual flooding, and weakness.',
    traditionalRoleTa: 'பெரும்பாடு, அதிக உதிரப்போக்கு, கருப்பை பலவீனம் மற்றும் இடுப்பு வலிக்கு பிரத்யேக தீர்வு.',
    badge: 'Menorrhagia Relief',
    badgeTa: 'அதிக உதிரப்போக்கு கட்டுப்பாடு',
    image: '/images/products/ruthra-perumbadu-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-perumbadu-legiyam/front.jpg',
      '/images/products/ruthra-perumbadu-legiyam/angle.jpg',
      '/images/products/ruthra-perumbadu-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-perumbadu-legiyam/front.jpg',
      '/images/products/ruthra-perumbadu-legiyam/angle.jpg',
      '/images/products/ruthra-perumbadu-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Perumbadu Legiyam Classical Compound', tamilName: 'பெரும்பாடு லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Perumbadu Legiyam prepared?',
        questionTa: 'ருத்ரா பெரும்பாடு லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["perumbadu legiyam","ruthra perumbadu legiyam","legiyam","perumbadu","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பெரும்பாடு லேகியம்","ருத்ரா பெரும்பாடு லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-071',
    name: 'Ruthra Vilvathi Legiyam',
    tamilName: 'ருத்ரா வில்வாதி லேகியம்',
    slug: 'ruthra-vilvathi-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["digestive-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Bael fruit electuary for chronic diarrhea, irritable bowel, hyperacidity, and vomiting sensation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வயிற்றுப்போக்கு, அஜீரணம், பித்த வாந்தி, நெஞ்செரிச்சல் மற்றும் குடல் புண்களை ஆற்றும் வில்வம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Vilvathi Legiyam (வில்வாதி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா வில்வாதி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Bael fruit electuary for chronic diarrhea, irritable bowel, hyperacidity, and vomiting sensation.',
    traditionalRoleTa: 'வயிற்றுப்போக்கு, அஜீரணம், பித்த வாந்தி, நெஞ்செரிச்சல் மற்றும் குடல் புண்களை ஆற்றும் வில்வம்.',
    badge: 'Bael Fruit Gut Healer',
    badgeTa: 'வில்வ குடல் பாதுகாப்பு',
    image: '/images/products/ruthra-vilvathi-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-vilvathi-legiyam/front.jpg',
      '/images/products/ruthra-vilvathi-legiyam/angle.jpg',
      '/images/products/ruthra-vilvathi-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vilvathi-legiyam/front.jpg',
      '/images/products/ruthra-vilvathi-legiyam/angle.jpg',
      '/images/products/ruthra-vilvathi-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Vilvathi Legiyam Classical Compound', tamilName: 'வில்வாதி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Vilvathi Legiyam prepared?',
        questionTa: 'ருத்ரா வில்வாதி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["vilvathi legiyam","ruthra vilvathi legiyam","legiyam","vilvathi","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["வில்வாதி லேகியம்","ருத்ரா வில்வாதி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-072',
    name: 'Ruthra Chithiramoolathi Kuligai',
    tamilName: 'ருத்ரா சித்திரமூலாதி குளிகை',
    slug: 'ruthra-chithiramoolathi-kuligai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai',
    concerns: ["joint-mobility","digestive-wellness"],
    price: 180,
    originalPrice: 210,
    packSize: '50 Tablets',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'Plumbago-based classical pill for acute vatha disorders, joint pain, abdominal lumps, and colic. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வாத நோய்கள், மூட்டு பிடிப்பு, குன்மக்கட்டி மற்றும் வயிற்று வலிகளுக்கு அருமருந்தான குளிகை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Chithiramoolathi Kuligai (சித்திரமூலாதி குளிகை) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சித்திரமூலாதி குளிகை திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Plumbago-based classical pill for acute vatha disorders, joint pain, abdominal lumps, and colic.',
    traditionalRoleTa: 'வாத நோய்கள், மூட்டு பிடிப்பு, குன்மக்கட்டி மற்றும் வயிற்று வலிகளுக்கு அருமருந்தான குளிகை.',
    badge: 'Vatha & Colic Pill',
    badgeTa: 'வாத & வயிற்றுவலி குளிகை',
    image: '/images/products/ruthra-chithiramoolathi-kuligai/front.jpg',
    images: [
      '/images/products/ruthra-chithiramoolathi-kuligai/front.jpg',
      '/images/products/ruthra-chithiramoolathi-kuligai/angle.jpg',
      '/images/products/ruthra-chithiramoolathi-kuligai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-chithiramoolathi-kuligai/front.jpg',
      '/images/products/ruthra-chithiramoolathi-kuligai/angle.jpg',
      '/images/products/ruthra-chithiramoolathi-kuligai/back.jpg'
    ],
    ingredients: [
      { name: 'Chithiramoolathi Kuligai Classical Compound', tamilName: 'சித்திரமூலாதி குளிகை மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 Tablets', instructionTa: '1-2 மாத்திரைகள்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or prescribed anupanam.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 Tablets',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or prescribed anupanam',
      amountTa: '1-2 மாத்திரைகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Chithiramoolathi Kuligai prepared?',
        questionTa: 'ருத்ரா சித்திரமூலாதி குளிகை எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["chithiramoolathi kuligai","ruthra chithiramoolathi kuligai","maathirai","chithiramoolathi","kuligai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சித்திரமூலாதி குளிகை","ருத்ரா சித்திரமூலாதி குளிகை","மாத்திரை","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-073',
    name: 'Ruthra Kalludaikudori Mathirai',
    tamilName: 'ருத்ரா கல்லுடைக்குடி மாத்திரை',
    slug: 'ruthra-kalludaikudri-mathirai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai',
    concerns: ["metabolic-wellness"],
    price: 180,
    originalPrice: 210,
    packSize: '50 Tablets',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'Targeted lithotriptic tablet for fracturing urinary gravel and relieving painful micturition. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சிறுநீரக கல்லை உடைத்து வெளியேற்றும், சிறுநீர் தாரை எரிச்சல் மற்றும் அடைப்பு நீக்கும் மாத்திரை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kalludaikudri Mathirai (கல்லுடைக்குடி மாத்திரை) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கல்லுடைக்குடி மாத்திரை திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Targeted lithotriptic tablet for fracturing urinary gravel and relieving painful micturition.',
    traditionalRoleTa: 'சிறுநீரக கல்லை உடைத்து வெளியேற்றும், சிறுநீர் தாரை எரிச்சல் மற்றும் அடைப்பு நீக்கும் மாத்திரை.',
    badge: 'Renal Stone Pill',
    badgeTa: 'சிறுநீரக கல் மாத்திரை',
    image: '/images/products/ruthra-kalludaikudri-mathirai/front.jpg',
    images: [
      '/images/products/ruthra-kalludaikudri-mathirai/front.jpg',
      '/images/products/ruthra-kalludaikudri-mathirai/angle.jpg',
      '/images/products/ruthra-kalludaikudri-mathirai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kalludaikudri-mathirai/front.jpg',
      '/images/products/ruthra-kalludaikudri-mathirai/angle.jpg',
      '/images/products/ruthra-kalludaikudri-mathirai/back.jpg'
    ],
    ingredients: [
      { name: 'Ruthra Kalludaikudori Mathirai', tamilName: 'கல்லுடைக்குடி மாத்திரை மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 Tablets', instructionTa: '1-2 மாத்திரைகள்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or prescribed anupanam.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 Tablets',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or prescribed anupanam',
      amountTa: '1-2 மாத்திரைகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kalludaikudri Mathirai prepared?',
        questionTa: 'ருத்ரா கல்லுடைக்குடி மாத்திரை எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kalludaikudri mathirai","ruthra kalludaikudri mathirai","maathirai","kalludaikudri","mathirai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கல்லுடைக்குடி மாத்திரை","ருத்ரா கல்லுடைக்குடி மாத்திரை","மாத்திரை","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-074',
    name: 'Ruthra Neerkovai Mathirai',
    tamilName: 'ருத்ரா நீர்க்கோவை மாத்திரை',
    slug: 'ruthra-neerkovai-mathirai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai',
    concerns: ["respiratory"],
    price: 180,
    originalPrice: 210,
    packSize: '50 Tablets',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'External application tablet for acute sinus headaches, running nose, forehead heaviness, and colds. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தலைபாரம், சைனஸ் தலைவலி, சளி நீர்க்கோவைக்கு நெற்றியில் பற்று போட பயன்படும் மாத்திரை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Neerkovai Mathirai (நீர்க்கோவை மாத்திரை) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நீர்க்கோவை மாத்திரை திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'External application tablet for acute sinus headaches, running nose, forehead heaviness, and colds.',
    traditionalRoleTa: 'தலைபாரம், சைனஸ் தலைவலி, சளி நீர்க்கோவைக்கு நெற்றியில் பற்று போட பயன்படும் மாத்திரை.',
    badge: 'Sinus Headache Relief',
    badgeTa: 'தலைபாரம் பற்று மாத்திரை',
    image: '/images/products/ruthra-neerkovai-mathirai/front.jpg',
    images: [
      '/images/products/ruthra-neerkovai-mathirai/front.jpg',
      '/images/products/ruthra-neerkovai-mathirai/angle.jpg',
      '/images/products/ruthra-neerkovai-mathirai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-neerkovai-mathirai/front.jpg',
      '/images/products/ruthra-neerkovai-mathirai/angle.jpg',
      '/images/products/ruthra-neerkovai-mathirai/back.jpg'
    ],
    ingredients: [
      { name: 'Neerkovai Mathirai Classical Compound', tamilName: 'நீர்க்கோவை மாத்திரை மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 Tablets', instructionTa: '1-2 மாத்திரைகள்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or prescribed anupanam.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 Tablets',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or prescribed anupanam',
      amountTa: '1-2 மாத்திரைகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Neerkovai Mathirai prepared?',
        questionTa: 'ருத்ரா நீர்க்கோவை மாத்திரை எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["neerkovai mathirai","ruthra neerkovai mathirai","maathirai","neerkovai","mathirai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நீர்க்கோவை மாத்திரை","ருத்ரா நீர்க்கோவை மாத்திரை","மாத்திரை","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-075',
    name: 'Ruthra Swasakudori Mathirai',
    tamilName: 'ருத்ரா சுவாசகுடோரி மாத்திரை',
    slug: 'ruthra-swasakudori-mathirai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai',
    concerns: ["respiratory"],
    price: 180,
    originalPrice: 210,
    packSize: '50 Tablets',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'Potent bronchodilator tablet for acute asthma paroxysms, chronic cough, and bronchial spasm. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மூச்சு திணறல், ஆஸ்துமா இளைப்பு, மார்பு சளி கட்டு மற்றும் ஈளை இருமலை போக்கும் மாத்திரை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Swasakudori Mathirai (சுவாசகுடோரி மாத்திரை) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சுவாசகுடோரி மாத்திரை திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Potent bronchodilator tablet for acute asthma paroxysms, chronic cough, and bronchial spasm.',
    traditionalRoleTa: 'மூச்சு திணறல், ஆஸ்துமா இளைப்பு, மார்பு சளி கட்டு மற்றும் ஈளை இருமலை போக்கும் மாத்திரை.',
    badge: 'Bronchial Spasm Pill',
    badgeTa: 'சுவாச இளைப்பு மாத்திரை',
    image: '/images/products/ruthra-swasakudori-mathirai/front.jpg',
    images: [
      '/images/products/ruthra-swasakudori-mathirai/front.jpg',
      '/images/products/ruthra-swasakudori-mathirai/angle.jpg',
      '/images/products/ruthra-swasakudori-mathirai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-swasakudori-mathirai/front.jpg',
      '/images/products/ruthra-swasakudori-mathirai/angle.jpg',
      '/images/products/ruthra-swasakudori-mathirai/back.jpg'
    ],
    ingredients: [
      { name: 'Swasakudori Mathirai Classical Compound', tamilName: 'சுவாசகுடோரி மாத்திரை மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 Tablets', instructionTa: '1-2 மாத்திரைகள்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or prescribed anupanam.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 Tablets',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or prescribed anupanam',
      amountTa: '1-2 மாத்திரைகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Swasakudori Mathirai prepared?',
        questionTa: 'ருத்ரா சுவாசகுடோரி மாத்திரை எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["swasakudori mathirai","ruthra swasakudori mathirai","maathirai","swasakudori","mathirai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சுவாசகுடோரி மாத்திரை","ருத்ரா சுவாசகுடோரி மாத்திரை","மாத்திரை","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-076',
    name: 'Ruthra Gandhaga Rasayanam',
    tamilName: 'ருத்ரா கந்தக ரசாயனம்',
    slug: 'ruthra-gandhaga-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 250,
    originalPrice: 290,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Purified sulfur rasayana for chronic eczema, psoriasis, scabies, blood toxicity, and skin eruptions. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சோரியாசிஸ், கரப்பான், படை, அரிப்பு, ரத்த நச்சுக்கள் மற்றும் தோல் வியாதிகளை வேரறுக்கும் கந்தகம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Gandhaga Rasayanam (கந்தக ரசாயனம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கந்தக ரசாயனம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Purified sulfur rasayana for chronic eczema, psoriasis, scabies, blood toxicity, and skin eruptions.',
    traditionalRoleTa: 'சோரியாசிஸ், கரப்பான், படை, அரிப்பு, ரத்த நச்சுக்கள் மற்றும் தோல் வியாதிகளை வேரறுக்கும் கந்தகம்.',
    badge: 'Dermal & Blood Purifier',
    badgeTa: 'கந்தக தோல் ரசாயனம்',
    image: '/images/products/ruthra-gandhaga-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-gandhaga-rasayanam/front.jpg',
      '/images/products/ruthra-gandhaga-rasayanam/angle.jpg',
      '/images/products/ruthra-gandhaga-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-gandhaga-rasayanam/front.jpg',
      '/images/products/ruthra-gandhaga-rasayanam/angle.jpg',
      '/images/products/ruthra-gandhaga-rasayanam/back.jpg'
    ],
    ingredients: [
      { name: 'Gandhaga Rasayanam Classical Compound', tamilName: 'கந்தக ரசாயனம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Gandhaga Rasayanam prepared?',
        questionTa: 'ருத்ரா கந்தக ரசாயனம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["gandhaga rasayanam","ruthra gandhaga rasayanam","rasayanam","gandhaga","rasayanam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கந்தக ரசாயனம்","ருத்ரா கந்தக ரசாயனம்","ரசாயனம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-077',
    name: 'Ruthra Kadhali Rasayanam',
    tamilName: 'ருத்ரா கதலி ரசாயனம்',
    slug: 'ruthra-kadhali-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ["womens-wellness","metabolic-wellness"],
    price: 250,
    originalPrice: 290,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Plantain-based rasayana for leucorrhea, uterine burning, excessive body heat, and emaciation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வெள்ளைப்படுதல், உடல் மெலிவு, மகளிர் பலவீனம், அதிக உஷ்ணம் போக்கி உடலை தேற்றும் கதலி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kadhali Rasayanam (கதலி ரசாயனம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கதலி ரசாயனம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Plantain-based rasayana for leucorrhea, uterine burning, excessive body heat, and emaciation.',
    traditionalRoleTa: 'வெள்ளைப்படுதல், உடல் மெலிவு, மகளிர் பலவீனம், அதிக உஷ்ணம் போக்கி உடலை தேற்றும் கதலி.',
    badge: 'Uterine Restorative',
    badgeTa: 'மகளிர் பலம் & குளிர்ச்சி',
    image: '/images/products/ruthra-kadhali-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-kadhali-rasayanam/front.jpg',
      '/images/products/ruthra-kadhali-rasayanam/angle.jpg',
      '/images/products/ruthra-kadhali-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kadhali-rasayanam/front.jpg',
      '/images/products/ruthra-kadhali-rasayanam/angle.jpg',
      '/images/products/ruthra-kadhali-rasayanam/back.jpg'
    ],
    ingredients: [
      { name: 'Kadhali Rasayanam Classical Compound', tamilName: 'கதலி ரசாயனம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kadhali Rasayanam prepared?',
        questionTa: 'ருத்ரா கதலி ரசாயனம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kadhali rasayanam","ruthra kadhali rasayanam","rasayanam","kadhali","rasayanam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கதலி ரசாயனம்","ருத்ரா கதலி ரசாயனம்","ரசாயனம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-078',
    name: 'Ruthra Parangi Rasayanam',
    tamilName: 'ருத்ரா பறங்கி ரசாயனம்',
    slug: 'ruthra-parangi-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ["skin-hair","joint-mobility"],
    price: 250,
    originalPrice: 290,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Smilax rasayana for deep-seated venereal toxins, intractable dermatosis, and rheumatoid arthritis. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நாள்பட்ட தோல் நோய்கள், மேக ரோகங்கள், மூட்டு வீக்கம் மற்றும் ரத்த தூய்மைக்கு தலைசிறந்தது. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Parangi Rasayanam (பறங்கி ரசாயனம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பறங்கி ரசாயனம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Smilax rasayana for deep-seated venereal toxins, intractable dermatosis, and rheumatoid arthritis.',
    traditionalRoleTa: 'நாள்பட்ட தோல் நோய்கள், மேக ரோகங்கள், மூட்டு வீக்கம் மற்றும் ரத்த தூய்மைக்கு தலைசிறந்தது.',
    badge: 'Deep Dermal Detox',
    badgeTa: 'பறங்கி மேக ரசாயனம்',
    image: '/images/products/ruthra-parangi-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-parangi-rasayanam/front.jpg',
      '/images/products/ruthra-parangi-rasayanam/angle.jpg',
      '/images/products/ruthra-parangi-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-parangi-rasayanam/front.jpg',
      '/images/products/ruthra-parangi-rasayanam/angle.jpg',
      '/images/products/ruthra-parangi-rasayanam/back.jpg'
    ],
    ingredients: [
      { name: 'Parangi Rasayanam Classical Compound', tamilName: 'பறங்கி ரசாயனம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Parangi Rasayanam prepared?',
        questionTa: 'ருத்ரா பறங்கி ரசாயனம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["parangi rasayanam","ruthra parangi rasayanam","rasayanam","parangi","rasayanam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பறங்கி ரசாயனம்","ருத்ரா பறங்கி ரசாயனம்","ரசாயனம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-079',
    name: 'Ruthra Thippili Rasayanam',
    tamilName: 'ருத்ரா திப்பிலி ரசாயனம்',
    slug: 'ruthra-thippili-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ["respiratory","digestive-wellness"],
    price: 250,
    originalPrice: 290,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Long pepper rejuvenator for chronic bronchitis, bronchial asthma, poor metabolism, and spleen care. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ஈளை, இருமல், ஆஸ்துமா, பசியின்மை மற்றும் மண்ணீரல் நோய்களுக்கு அருமருந்தான திப்பிலி ரசாயனம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thippili Rasayanam (திப்பிலி ரசாயனம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா திப்பிலி ரசாயனம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Long pepper rejuvenator for chronic bronchitis, bronchial asthma, poor metabolism, and spleen care.',
    traditionalRoleTa: 'ஈளை, இருமல், ஆஸ்துமா, பசியின்மை மற்றும் மண்ணீரல் நோய்களுக்கு அருமருந்தான திப்பிலி ரசாயனம்.',
    badge: 'Lung Rejuvenator',
    badgeTa: 'திப்பிலி சுவாச ரசாயனம்',
    image: '/images/products/ruthra-thippili-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-thippili-rasayanam/front.jpg',
      '/images/products/ruthra-thippili-rasayanam/angle.jpg',
      '/images/products/ruthra-thippili-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thippili-rasayanam/front.jpg',
      '/images/products/ruthra-thippili-rasayanam/angle.jpg',
      '/images/products/ruthra-thippili-rasayanam/back.jpg'
    ],
    ingredients: [
      { name: 'Thippili Rasayanam Classical Compound', tamilName: 'திப்பிலி ரசாயனம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thippili Rasayanam prepared?',
        questionTa: 'ருத்ரா திப்பிலி ரசாயனம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thippili rasayanam","ruthra thippili rasayanam","rasayanam","thippili","rasayanam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["திப்பிலி ரசாயனம்","ருத்ரா திப்பிலி ரசாயனம்","ரசாயனம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-080',
    name: 'Ruthra Imbooral Vadagam',
    tamilName: 'ருத்ரா இம்பூரல் வடகம்',
    slug: 'ruthra-imbooral-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ["respiratory"],
    price: 140,
    originalPrice: 165,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Oldenlandia chewable lozenge for hemoptysis, blood in sputum, chest pain, and dry hacking cough. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ரத்த வாந்தி, சளியில் ரத்தம் வருதல், வறட்டு இருமல் மற்றும் மார்பு வலியை போக்கும் இம்பூரல். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Imbooral Vadagam (இம்பூரல் வடகம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா இம்பூரல் வடகம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Oldenlandia chewable lozenge for hemoptysis, blood in sputum, chest pain, and dry hacking cough.',
    traditionalRoleTa: 'ரத்த வாந்தி, சளியில் ரத்தம் வருதல், வறட்டு இருமல் மற்றும் மார்பு வலியை போக்கும் இம்பூரல்.',
    badge: 'Hemoptysis & Cough Lozenge',
    badgeTa: 'ரத்த இருமல் & மார்பு நலம்',
    image: '/images/products/ruthra-imbooral-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-imbooral-vadagam/front.jpg',
      '/images/products/ruthra-imbooral-vadagam/angle.jpg',
      '/images/products/ruthra-imbooral-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-imbooral-vadagam/front.jpg',
      '/images/products/ruthra-imbooral-vadagam/angle.jpg',
      '/images/products/ruthra-imbooral-vadagam/back.jpg'
    ],
    ingredients: [
      { name: 'Imbooral Vadagam Classical Compound', tamilName: 'இம்பூரல் வடகம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 pastilles chewable', instructionTa: '1-2 வடகம் மென்று விழுங்கவும்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Chew slowly in mouth.', instructionTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 pastilles chewable',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Chew slowly in mouth',
      amountTa: '1-2 வடகம் மென்று விழுங்கவும்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Imbooral Vadagam prepared?',
        questionTa: 'ருத்ரா இம்பூரல் வடகம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["imbooral vadagam","ruthra imbooral vadagam","vadagam","imbooral","vadagam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["இம்பூரல் வடகம்","ருத்ரா இம்பூரல் வடகம்","வடகம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-081',
    name: 'Ruthra Kadukkai Vadagam',
    tamilName: 'ருத்ரா கடுக்காய் வடகம்',
    slug: 'ruthra-kadukkai-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ["digestive-wellness","respiratory"],
    price: 140,
    originalPrice: 165,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Chebulic Myrobalan chewable tablet for chronic hoarseness, throat congestion, and sluggish bowels. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குரல் கம்மல், தொண்டை வலி, இருமல் மற்றும் செரிமான மந்தத்தை போக்கும் கடுக்காய் வடகம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kadukkai Vadagam (கடுக்காய் வடகம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கடுக்காய் வடகம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Chebulic Myrobalan chewable tablet for chronic hoarseness, throat congestion, and sluggish bowels.',
    traditionalRoleTa: 'குரல் கம்மல், தொண்டை வலி, இருமல் மற்றும் செரிமான மந்தத்தை போக்கும் கடுக்காய் வடகம்.',
    badge: 'Throat & Voice Soother',
    badgeTa: 'குரல் கம்மல் & தொண்டை நலம்',
    image: '/images/products/ruthra-kadukkai-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-kadukkai-vadagam/front.jpg',
      '/images/products/ruthra-kadukkai-vadagam/angle.jpg',
      '/images/products/ruthra-kadukkai-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kadukkai-vadagam/front.jpg',
      '/images/products/ruthra-kadukkai-vadagam/angle.jpg',
      '/images/products/ruthra-kadukkai-vadagam/back.jpg'
    ],
    ingredients: [
      { name: 'Kadukkai Vadagam Classical Compound', tamilName: 'கடுக்காய் வடகம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 pastilles chewable', instructionTa: '1-2 வடகம் மென்று விழுங்கவும்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Chew slowly in mouth.', instructionTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 pastilles chewable',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Chew slowly in mouth',
      amountTa: '1-2 வடகம் மென்று விழுங்கவும்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kadukkai Vadagam prepared?',
        questionTa: 'ருத்ரா கடுக்காய் வடகம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kadukkai vadagam","ruthra kadukkai vadagam","vadagam","kadukkai","vadagam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கடுக்காய் வடகம்","ருத்ரா கடுக்காய் வடகம்","வடகம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-082',
    name: 'Ruthra Karuvepilai Vadagam',
    tamilName: 'ருத்ரா கறிவேப்பிலை வடகம்',
    slug: 'ruthra-karuvepilai-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ["digestive-wellness","skin-hair"],
    price: 140,
    originalPrice: 165,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Curry leaf chewable for morning sickness, loss of taste, vomiting sensation, and bile balance. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பித்த வாந்தி, மயக்கம், நாவில் சுவையின்மை மற்றும் செரிமான கோளாறுகளுக்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karuvepilai Vadagam (கறிவேப்பிலை வடகம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கறிவேப்பிலை வடகம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Curry leaf chewable for morning sickness, loss of taste, vomiting sensation, and bile balance.',
    traditionalRoleTa: 'பித்த வாந்தி, மயக்கம், நாவில் சுவையின்மை மற்றும் செரிமான கோளாறுகளுக்கு அருமருந்து.',
    badge: 'Nausea & Taste Restorer',
    badgeTa: 'பித்த வாந்தி & சுவை தூண்டி',
    image: '/images/products/ruthra-karuvepilai-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-karuvepilai-vadagam/front.jpg',
      '/images/products/ruthra-karuvepilai-vadagam/angle.jpg',
      '/images/products/ruthra-karuvepilai-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karuvepilai-vadagam/front.jpg',
      '/images/products/ruthra-karuvepilai-vadagam/angle.jpg',
      '/images/products/ruthra-karuvepilai-vadagam/back.jpg'
    ],
    ingredients: [
      { name: 'Karuvepilai Vadagam Classical Compound', tamilName: 'கறிவேப்பிலை வடகம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 pastilles chewable', instructionTa: '1-2 வடகம் மென்று விழுங்கவும்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Chew slowly in mouth.', instructionTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 pastilles chewable',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Chew slowly in mouth',
      amountTa: '1-2 வடகம் மென்று விழுங்கவும்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karuvepilai Vadagam prepared?',
        questionTa: 'ருத்ரா கறிவேப்பிலை வடகம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karuvepilai vadagam","ruthra karuvepilai vadagam","vadagam","karuvepilai","vadagam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கறிவேப்பிலை வடகம்","ருத்ரா கறிவேப்பிலை வடகம்","வடகம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-083',
    name: 'Ruthra Thalisathy Vadagam',
    tamilName: 'ருத்ரா தாளீசாதி வடகம்',
    slug: 'ruthra-thalisathy-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ["respiratory","digestive-wellness"],
    price: 140,
    originalPrice: 165,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Chewable pastille for tickling throat cough, bronchitis, dyspnea, and restoring digestive fire. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தொண்டை கரகரப்பு, இருமல், ஆஸ்துமா, வாய் கசப்பு மற்றும் பசியின்மை போக்கும் தாளீசாதி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thalisathy Vadagam (தாளீசாதி வடகம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா தாளீசாதி வடகம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Chewable pastille for tickling throat cough, bronchitis, dyspnea, and restoring digestive fire.',
    traditionalRoleTa: 'தொண்டை கரகரப்பு, இருமல், ஆஸ்துமா, வாய் கசப்பு மற்றும் பசியின்மை போக்கும் தாளீசாதி.',
    badge: 'Respiratory Lozenge',
    badgeTa: 'இருமல் & தொண்டை கரகரப்பு',
    image: '/images/products/ruthra-thalisathy-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-thalisathy-vadagam/front.jpg',
      '/images/products/ruthra-thalisathy-vadagam/angle.jpg',
      '/images/products/ruthra-thalisathy-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thalisathy-vadagam/front.jpg',
      '/images/products/ruthra-thalisathy-vadagam/angle.jpg',
      '/images/products/ruthra-thalisathy-vadagam/back.jpg'
    ],
    ingredients: [
      { name: 'Thalisathy Vadagam Classical Compound', tamilName: 'தாளீசாதி வடகம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 pastilles chewable', instructionTa: '1-2 வடகம் மென்று விழுங்கவும்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Chew slowly in mouth.', instructionTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 pastilles chewable',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Chew slowly in mouth',
      amountTa: '1-2 வடகம் மென்று விழுங்கவும்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thalisathy Vadagam prepared?',
        questionTa: 'ருத்ரா தாளீசாதி வடகம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thalisathy vadagam","ruthra thalisathy vadagam","vadagam","thalisathy","vadagam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["தாளீசாதி வடகம்","ருத்ரா தாளீசாதி வடகம்","வடகம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-084',
    name: 'Ruthra Aavarai Nei',
    tamilName: 'ருத்ரா ஆவாரை நெய்',
    slug: 'ruthra-aavarai-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Cassia auriculata medicated ghee for diabetic heat, excessive thirst, leucorrhea, and burning soles. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நீரிழிவு எரிச்சல், மேக உஷ்ணம், வெள்ளைப்படுதல், பாத எரிச்சல் போக்கும் ஆவாரை நெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Aavarai Nei (ஆவாரை நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ஆவாரை நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cassia auriculata medicated ghee for diabetic heat, excessive thirst, leucorrhea, and burning soles.',
    traditionalRoleTa: 'நீரிழிவு எரிச்சல், மேக உஷ்ணம், வெள்ளைப்படுதல், பாத எரிச்சல் போக்கும் ஆவாரை நெய்.',
    badge: 'Diabetic & Coolant Ghee',
    badgeTa: 'ஆவாரை மேக நெய்',
    image: '/images/products/ruthra-aavarai-nei/front.jpg',
    images: [
      '/images/products/ruthra-aavarai-nei/front.jpg',
      '/images/products/ruthra-aavarai-nei/angle.jpg',
      '/images/products/ruthra-aavarai-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-aavarai-nei/front.jpg',
      '/images/products/ruthra-aavarai-nei/angle.jpg',
      '/images/products/ruthra-aavarai-nei/back.jpg'
    ],
    ingredients: [
      { name: 'Aavarai Nei Classical Compound', tamilName: 'ஆவாரை நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Aavarai Nei prepared?',
        questionTa: 'ருத்ரா ஆவாரை நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["aavarai nei","ruthra aavarai nei","nei","aavarai","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ஆவாரை நெய்","ருத்ரா ஆவாரை நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-085',
    name: 'Ruthra Kalyanaghritham',
    tamilName: 'ருத்ரா கல்யாண கிருதம்',
    slug: 'ruthra-kalyanagritham',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Classical poly-herbal ghee for psychological equilibrium, fertility, auspicious vitality, and complexion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மன அமைதி, கருத்தரிப்பு வாய்ப்பு அதிகரிப்பு, தாது பலம் மற்றும் தேக பொலிவுக்கு உன்னத கிருதம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kalyanagritham (கல்யாண கிருதம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கல்யாண கிருதம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical poly-herbal ghee for psychological equilibrium, fertility, auspicious vitality, and complexion.',
    traditionalRoleTa: 'மன அமைதி, கருத்தரிப்பு வாய்ப்பு அதிகரிப்பு, தாது பலம் மற்றும் தேக பொலிவுக்கு உன்னத கிருதம்.',
    badge: 'Fertility & Mind Tonic Ghee',
    badgeTa: 'கல்யாண நெய்',
    image: '/images/products/ruthra-kalyanagritham/front.jpg',
    images: [
      '/images/products/ruthra-kalyanagritham/front.jpg',
      '/images/products/ruthra-kalyanagritham/angle.jpg',
      '/images/products/ruthra-kalyanagritham/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kalyanagritham/front.jpg',
      '/images/products/ruthra-kalyanagritham/angle.jpg',
      '/images/products/ruthra-kalyanagritham/back.jpg'
    ],
    ingredients: [
      { name: 'Ruthra Kalyanaghritham', tamilName: 'கல்யாண கிருதம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kalyanagritham prepared?',
        questionTa: 'ருத்ரா கல்யாண கிருதம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kalyanagritham","ruthra kalyanagritham","nei","kalyanagritham","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கல்யாண கிருதம்","ருத்ரா கல்யாண கிருதம்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-086',
    name: 'Ruthra Keezhanelli Ghritham',
    tamilName: 'ருத்ரா கீழாநெல்லி கிருதம்',
    slug: 'ruthra-keezhanelli-ghritham',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","digestive-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Phyllanthus niruri medicated ghee for liver protection, convalescent jaundice, and bile cooling. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கல்லீரல் பாதுகாப்பு, காமாலை குணமாக, பித்த தாகம் தணிய மற்றும் ரத்த சுத்திக்கு கீழாநெல்லி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Keezhanelli Ghritham (கீழாநெல்லி கிருதம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கீழாநெல்லி கிருதம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Phyllanthus niruri medicated ghee for liver protection, convalescent jaundice, and bile cooling.',
    traditionalRoleTa: 'கல்லீரல் பாதுகாப்பு, காமாலை குணமாக, பித்த தாகம் தணிய மற்றும் ரத்த சுத்திக்கு கீழாநெல்லி.',
    badge: 'Hepatic Medicated Ghee',
    badgeTa: 'கீழாநெல்லி நெய்',
    image: '/images/products/ruthra-keezhanelli-ghritham/front.jpg',
    images: [
      '/images/products/ruthra-keezhanelli-ghritham/front.jpg',
      '/images/products/ruthra-keezhanelli-ghritham/angle.jpg',
      '/images/products/ruthra-keezhanelli-ghritham/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-keezhanelli-ghritham/front.jpg',
      '/images/products/ruthra-keezhanelli-ghritham/angle.jpg',
      '/images/products/ruthra-keezhanelli-ghritham/back.jpg'
    ],
    ingredients: [
      { name: 'Keezhanelli Ghritham Classical Compound', tamilName: 'கீழாநெல்லி கிருதம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Keezhanelli Ghritham prepared?',
        questionTa: 'ருத்ரா கீழாநெல்லி கிருதம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["keezhanelli ghritham","ruthra keezhanelli ghritham","nei","keezhanelli","ghritham","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கீழாநெல்லி கிருதம்","ருத்ரா கீழாநெல்லி கிருதம்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-087',
    name: 'Ruthra Naaval Nei',
    tamilName: 'ருத்ரா நாவல் நெய்',
    slug: 'ruthra-naaval-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","digestive-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Jamun fruit and seed infused ghee for chronic polyuria, diabetes mellitus, and burning bladder. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'அதிமூத்திரம், நீரிழிவு சர்க்கரை நோய் மற்றும் சிறுநீரக எரிச்சலை கட்டுப்படுத்தும் நாவல் நெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Naaval Nei (நாவல் நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நாவல் நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Jamun fruit and seed infused ghee for chronic polyuria, diabetes mellitus, and burning bladder.',
    traditionalRoleTa: 'அதிமூத்திரம், நீரிழிவு சர்க்கரை நோய் மற்றும் சிறுநீரக எரிச்சலை கட்டுப்படுத்தும் நாவல் நெய்.',
    badge: 'Polyuria & Diabetes Ghee',
    badgeTa: 'நாவல் நெய்',
    image: '/images/products/ruthra-naaval-nei/front.jpg',
    images: [
      '/images/products/ruthra-naaval-nei/front.jpg',
      '/images/products/ruthra-naaval-nei/angle.jpg',
      '/images/products/ruthra-naaval-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-naaval-nei/front.jpg',
      '/images/products/ruthra-naaval-nei/angle.jpg',
      '/images/products/ruthra-naaval-nei/back.jpg'
    ],
    ingredients: [
      { name: 'Naaval Nei Classical Compound', tamilName: 'நாவல் நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Naaval Nei prepared?',
        questionTa: 'ருத்ரா நாவல் நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["naaval nei","ruthra naaval nei","nei","naaval","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நாவல் நெய்","ருத்ரா நாவல் நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-088',
    name: 'Ruthra Nilapanai Nei',
    tamilName: 'ருத்ரா நிலப்பனை நெய்',
    slug: 'ruthra-nilapanai-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Curculigo orchioides ghee for reproductive vigor, lumbar backache, and physical stamina. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இடுப்பு வலி, விந்து நலிவு, ஆண்மை பலவீனம் மற்றும் உடல் பலத்திற்கு நிலப்பனை கிழங்கு நெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nilapanai Nei (நிலப்பனை நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நிலப்பனை நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Curculigo orchioides ghee for reproductive vigor, lumbar backache, and physical stamina.',
    traditionalRoleTa: 'இடுப்பு வலி, விந்து நலிவு, ஆண்மை பலவீனம் மற்றும் உடல் பலத்திற்கு நிலப்பனை கிழங்கு நெய்.',
    badge: 'Vitality & Backache Ghee',
    badgeTa: 'நிலப்பனை நெய்',
    image: '/images/products/ruthra-nilapanai-nei/front.jpg',
    images: [
      '/images/products/ruthra-nilapanai-nei/front.jpg',
      '/images/products/ruthra-nilapanai-nei/angle.jpg',
      '/images/products/ruthra-nilapanai-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nilapanai-nei/front.jpg',
      '/images/products/ruthra-nilapanai-nei/angle.jpg',
      '/images/products/ruthra-nilapanai-nei/back.jpg'
    ],
    ingredients: [
      { name: 'Nilapanai Nei Classical Compound', tamilName: 'நிலப்பனை நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nilapanai Nei prepared?',
        questionTa: 'ருத்ரா நிலப்பனை நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nilapanai nei","ruthra nilapanai nei","nei","nilapanai","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நிலப்பனை நெய்","ருத்ரா நிலப்பனை நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-089',
    name: 'Ruthra Serankottai Nei',
    tamilName: 'ருத்ரா சேராங்கொட்டை நெய்',
    slug: 'ruthra-serankottai-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["skin-hair","joint-mobility"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Purified Semecarpus anacardium ghee for intractable skin ulcers, arthritis, tumors, and asthma. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சுத்தி செய்த சேராங்கொட்டை நெய்; நாள்பட்ட தோல் புண்கள், மூட்டு வீக்கம், புற்று கட்டிகளுக்கு சிறந்தது. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Serankottai Nei (சேராங்கொட்டை நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சேராங்கொட்டை நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Purified Semecarpus anacardium ghee for intractable skin ulcers, arthritis, tumors, and asthma.',
    traditionalRoleTa: 'சுத்தி செய்த சேராங்கொட்டை நெய்; நாள்பட்ட தோல் புண்கள், மூட்டு வீக்கம், புற்று கட்டிகளுக்கு சிறந்தது.',
    badge: 'Cellular Care & Arthritic Ghee',
    badgeTa: 'சேராங்கொட்டை நெய்',
    image: '/images/products/ruthra-serankottai-nei/front.jpg',
    images: [
      '/images/products/ruthra-serankottai-nei/front.jpg',
      '/images/products/ruthra-serankottai-nei/angle.jpg',
      '/images/products/ruthra-serankottai-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-serankottai-nei/front.jpg',
      '/images/products/ruthra-serankottai-nei/angle.jpg',
      '/images/products/ruthra-serankottai-nei/back.jpg'
    ],
    ingredients: [
      { name: 'Serankottai Nei Classical Compound', tamilName: 'சேராங்கொட்டை நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Serankottai Nei prepared?',
        questionTa: 'ருத்ரா சேராங்கொட்டை நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["serankottai nei","ruthra serankottai nei","nei","serankottai","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சேராங்கொட்டை நெய்","ருத்ரா சேராங்கொட்டை நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-090',
    name: 'Ruthra Soodhaga Sanni Nei',
    tamilName: 'ருத்ரா சூதக சன்னி நெய்',
    slug: 'ruthra-soodhaga-sanni-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["womens-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Post-partum medicated ghee preventing puerperal convulsions, uterine sepsis, and pelvic spasms. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பிரசவத்திற்கு பின் வரும் சூதக சன்னி, வலிப்பு, காய்ச்சல் மற்றும் கருப்பை தொற்று தடுக்கும் நெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Soodhaga Sanni Nei (சூதக சன்னி நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சூதக சன்னி நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Post-partum medicated ghee preventing puerperal convulsions, uterine sepsis, and pelvic spasms.',
    traditionalRoleTa: 'பிரசவத்திற்கு பின் வரும் சூதக சன்னி, வலிப்பு, காய்ச்சல் மற்றும் கருப்பை தொற்று தடுக்கும் நெய்.',
    badge: 'Post-Natal Ghee',
    badgeTa: 'சூதக சன்னி நெய்',
    image: '/images/products/ruthra-soodhaga-sanni-nei/front.jpg',
    images: [
      '/images/products/ruthra-soodhaga-sanni-nei/front.jpg',
      '/images/products/ruthra-soodhaga-sanni-nei/angle.jpg',
      '/images/products/ruthra-soodhaga-sanni-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-soodhaga-sanni-nei/front.jpg',
      '/images/products/ruthra-soodhaga-sanni-nei/angle.jpg',
      '/images/products/ruthra-soodhaga-sanni-nei/back.jpg'
    ],
    ingredients: [
      { name: 'Soodhaga Sanni Nei Classical Compound', tamilName: 'சூதக சன்னி நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Soodhaga Sanni Nei prepared?',
        questionTa: 'ருத்ரா சூதக சன்னி நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["soodhaga sanni nei","ruthra soodhaga sanni nei","nei","soodhaga","sanni","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சூதக சன்னி நெய்","ருத்ரா சூதக சன்னி நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-091',
    name: 'Ruthra Venpoosani Nei',
    tamilName: 'ருத்ரா வெண்பூசணி நெய்',
    slug: 'ruthra-venpoosani-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Ash gourd cooling ghee for burning micturition, internal hemorrhage, emaciation, and nervousness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சிறுநீர் எரிச்சல், உஷ்ண வெள்ளை, ரத்த கசிவு மற்றும் உடல் மெலிவு போக்கும் வெண்பூசணி நெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Venpoosani Nei (வெண்பூசணி நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா வெண்பூசணி நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Ash gourd cooling ghee for burning micturition, internal hemorrhage, emaciation, and nervousness.',
    traditionalRoleTa: 'சிறுநீர் எரிச்சல், உஷ்ண வெள்ளை, ரத்த கசிவு மற்றும் உடல் மெலிவு போக்கும் வெண்பூசணி நெய்.',
    badge: 'Cooling Ash Gourd Ghee',
    badgeTa: 'வெண்பூசணி நெய்',
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
    ingredients: [
      { name: 'Venpoosani Nei Classical Compound', tamilName: 'வெண்பூசணி நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Venpoosani Nei prepared?',
        questionTa: 'ருத்ரா வெண்பூசணி நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["venpoosani nei","ruthra venpoosani nei","nei","venpoosani","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["வெண்பூசணி நெய்","ருத்ரா வெண்பூசணி நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-092',
    name: 'Ruthra Ganthi Mezhugu',
    tamilName: 'ருத்ரா காந்தி மெழுகு',
    slug: 'ruthra-ganthi-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ["skin-hair","joint-mobility"],
    price: 320,
    originalPrice: 380,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'Classical purified mineral waxy compound for severe toxic eruptions, deep abscesses, and arthritis. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கட்டிகள், புண்கள், தோல் ரணங்கள், மேக நோய்கள் மற்றும் வாத வீக்கங்களை கரைக்கும் உன்னத மெழுகு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Ganthi Mezhugu (காந்தி மெழுகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா காந்தி மெழுகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical purified mineral waxy compound for severe toxic eruptions, deep abscesses, and arthritis.',
    traditionalRoleTa: 'கட்டிகள், புண்கள், தோல் ரணங்கள், மேக நோய்கள் மற்றும் வாத வீக்கங்களை கரைக்கும் உன்னத மெழுகு.',
    badge: 'Deep Tissue Healing Wax',
    badgeTa: 'காந்தி மெழுகு',
    image: '/images/products/ruthra-ganthi-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-ganthi-mezhugu/front.jpg',
      '/images/products/ruthra-ganthi-mezhugu/angle.jpg',
      '/images/products/ruthra-ganthi-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ganthi-mezhugu/front.jpg',
      '/images/products/ruthra-ganthi-mezhugu/angle.jpg',
      '/images/products/ruthra-ganthi-mezhugu/back.jpg'
    ],
    ingredients: [
      { name: 'Ganthi Mezhugu Classical Compound', tamilName: 'காந்தி மெழுகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '250mg - 500mg', instructionTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Palm jaggery, honey, or ghee.', instructionTa: 'பனைவெல்லம், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '250mg - 500mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Palm jaggery, honey, or ghee',
      amountTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'பனைவெல்லம், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Ganthi Mezhugu prepared?',
        questionTa: 'ருத்ரா காந்தி மெழுகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["ganthi mezhugu","ruthra ganthi mezhugu","mezhugu","ganthi","mezhugu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["காந்தி மெழுகு","ருத்ரா காந்தி மெழுகு","மெழுகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-093',
    name: 'Ruthra Gunmakudori Mezhugu',
    tamilName: 'ருத்ரா குன்மக்குடோரி மெழுகு',
    slug: 'ruthra-gunmakudori-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ["digestive-wellness"],
    price: 320,
    originalPrice: 380,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'Intensive compound for intractable peptic ulcers, abdominal tumors, chronic colic, and hyperacidity. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தீராத குன்ம வலி, வயிற்றுப்புண், வயிற்றுக் கட்டிகள் மற்றும் கடுமையான வாயு பிடிப்பு போக்கும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Gunmakudori Mezhugu (குன்மக்குடோரி மெழுகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா குன்மக்குடோரி மெழுகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Intensive compound for intractable peptic ulcers, abdominal tumors, chronic colic, and hyperacidity.',
    traditionalRoleTa: 'தீராத குன்ம வலி, வயிற்றுப்புண், வயிற்றுக் கட்டிகள் மற்றும் கடுமையான வாயு பிடிப்பு போக்கும்.',
    badge: 'Intractable Colic Wax',
    badgeTa: 'குன்மக்குடோரி மெழுகு',
    image: '/images/products/ruthra-gunmakudori-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-gunmakudori-mezhugu/front.jpg',
      '/images/products/ruthra-gunmakudori-mezhugu/angle.jpg',
      '/images/products/ruthra-gunmakudori-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-gunmakudori-mezhugu/front.jpg',
      '/images/products/ruthra-gunmakudori-mezhugu/angle.jpg',
      '/images/products/ruthra-gunmakudori-mezhugu/back.jpg'
    ],
    ingredients: [
      { name: 'Gunmakudori Mezhugu Classical Compound', tamilName: 'குன்மக்குடோரி மெழுகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '250mg - 500mg', instructionTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Palm jaggery, honey, or ghee.', instructionTa: 'பனைவெல்லம், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '250mg - 500mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Palm jaggery, honey, or ghee',
      amountTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'பனைவெல்லம், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Gunmakudori Mezhugu prepared?',
        questionTa: 'ருத்ரா குன்மக்குடோரி மெழுகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["gunmakudori mezhugu","ruthra gunmakudori mezhugu","mezhugu","gunmakudori","mezhugu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["குன்மக்குடோரி மெழுகு","ருத்ரா குன்மக்குடோரி மெழுகு","மெழுகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-094',
    name: 'Ruthra Malakkutara Mezhugu',
    tamilName: 'ருத்ரா மலக்குடார மெழுகு',
    slug: 'ruthra-malakkutara-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ["digestive-wellness"],
    price: 320,
    originalPrice: 380,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'Potent mineral-herbal resin for severe chronic obstipation, fecal impaction, and piles. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கடும் மலச்சிக்கல், குடல் அடைப்பு, மூலக்கட்டி மற்றும் மந்த நச்சுக்களை வெளியேற்றும் மெழுகு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Malakkutara Mezhugu (மலக்குடார மெழுகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மலக்குடார மெழுகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Potent mineral-herbal resin for severe chronic obstipation, fecal impaction, and piles.',
    traditionalRoleTa: 'கடும் மலச்சிக்கல், குடல் அடைப்பு, மூலக்கட்டி மற்றும் மந்த நச்சுக்களை வெளியேற்றும் மெழுகு.',
    badge: 'Bowel Obstruction Care',
    badgeTa: 'மலக்குடார மெழுகு',
    image: '/images/products/ruthra-malakkutara-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-malakkutara-mezhugu/front.jpg',
      '/images/products/ruthra-malakkutara-mezhugu/angle.jpg',
      '/images/products/ruthra-malakkutara-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-malakkutara-mezhugu/front.jpg',
      '/images/products/ruthra-malakkutara-mezhugu/angle.jpg',
      '/images/products/ruthra-malakkutara-mezhugu/back.jpg'
    ],
    ingredients: [
      { name: 'Malakkutara Mezhugu Classical Compound', tamilName: 'மலக்குடார மெழுகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '250mg - 500mg', instructionTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Palm jaggery, honey, or ghee.', instructionTa: 'பனைவெல்லம், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '250mg - 500mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Palm jaggery, honey, or ghee',
      amountTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'பனைவெல்லம், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Malakkutara Mezhugu prepared?',
        questionTa: 'ருத்ரா மலக்குடார மெழுகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["malakkutara mezhugu","ruthra malakkutara mezhugu","mezhugu","malakkutara","mezhugu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மலக்குடார மெழுகு","ருத்ரா மலக்குடார மெழுகு","மெழுகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-095',
    name: 'Ruthra Rasagandhi Mezhugu',
    tamilName: 'ருத்ரா ரசகந்தி மெழுகு',
    slug: 'ruthra-rasagandhi-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ["skin-hair","joint-mobility"],
    price: 320,
    originalPrice: 380,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'Crown jewel of Siddha mineralogy for cervical spondylosis, malignant growths, arthritis, and fistula. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சித்த மருத்துவத்தின் தலைசிறந்த மருந்து; புற்று நோய்கள், நாள்பட்ட தோல் நோய்கள், பவுத்திரம், வாதத்திற்கு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Rasagandhi Mezhugu (ரசகந்தி மெழுகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ரசகந்தி மெழுகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Crown jewel of Siddha mineralogy for cervical spondylosis, malignant growths, arthritis, and fistula.',
    traditionalRoleTa: 'சித்த மருத்துவத்தின் தலைசிறந்த மருந்து; புற்று நோய்கள், நாள்பட்ட தோல் நோய்கள், பவுத்திரம், வாதத்திற்கு.',
    badge: 'Crown Mineral Compound',
    badgeTa: 'ரசகந்தி மெழுகு',
    image: '/images/products/ruthra-rasagandhi-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-rasagandhi-mezhugu/front.jpg',
      '/images/products/ruthra-rasagandhi-mezhugu/angle.jpg',
      '/images/products/ruthra-rasagandhi-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-rasagandhi-mezhugu/front.jpg',
      '/images/products/ruthra-rasagandhi-mezhugu/angle.jpg',
      '/images/products/ruthra-rasagandhi-mezhugu/back.jpg'
    ],
    ingredients: [
      { name: 'Rasagandhi Mezhugu Classical Compound', tamilName: 'ரசகந்தி மெழுகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '250mg - 500mg', instructionTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Palm jaggery, honey, or ghee.', instructionTa: 'பனைவெல்லம், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '250mg - 500mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Palm jaggery, honey, or ghee',
      amountTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'பனைவெல்லம், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Rasagandhi Mezhugu prepared?',
        questionTa: 'ருத்ரா ரசகந்தி மெழுகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["rasagandhi mezhugu","ruthra rasagandhi mezhugu","mezhugu","rasagandhi","mezhugu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ரசகந்தி மெழுகு","ருத்ரா ரசகந்தி மெழுகு","மெழுகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-096',
    name: 'Ruthra Karasooda Sathu Parpam',
    tamilName: 'ருத்ரா காரசூட சத்து பற்பம்',
    slug: 'ruthra-karasooda-sathu-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 290,
    originalPrice: 340,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Purified camphor mineral calx for acute vatha nerve tremors, pain, and respiratory collapse support. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நரம்பு தளர்ச்சி, வாத வலிகள், சுவாச அடைப்பு மற்றும் இதய பலவீனத்தை போக்கும் பற்பம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karasooda Sathu Parpam (காரசூட சத்து பற்பம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா காரசூட சத்து பற்பம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Purified camphor mineral calx for acute vatha nerve tremors, pain, and respiratory collapse support.',
    traditionalRoleTa: 'நரம்பு தளர்ச்சி, வாத வலிகள், சுவாச அடைப்பு மற்றும் இதய பலவீனத்தை போக்கும் பற்பம்.',
    badge: 'Calcinated Camphor Essence',
    badgeTa: 'காரசூட பற்பம்',
    image: '/images/products/ruthra-karasooda-sathu-parpam/front.jpg',
    images: [
      '/images/products/ruthra-karasooda-sathu-parpam/front.jpg',
      '/images/products/ruthra-karasooda-sathu-parpam/angle.jpg',
      '/images/products/ruthra-karasooda-sathu-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karasooda-sathu-parpam/front.jpg',
      '/images/products/ruthra-karasooda-sathu-parpam/angle.jpg',
      '/images/products/ruthra-karasooda-sathu-parpam/back.jpg'
    ],
    ingredients: [
      { name: 'Karasooda Sathu Parpam Classical Compound', tamilName: 'காரசூட சத்து பற்பம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '100mg - 200mg', instructionTa: '100 - 200 மி.கி (அரிசி எடை அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Honey, ghee, or milk.', instructionTa: 'தேன், நெய் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '100mg - 200mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Honey, ghee, or milk',
      amountTa: '100 - 200 மி.கி (அரிசி எடை அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'தேன், நெய் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karasooda Sathu Parpam prepared?',
        questionTa: 'ருத்ரா காரசூட சத்து பற்பம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karasooda sathu parpam","ruthra karasooda sathu parpam","parpam","karasooda","sathu","parpam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["காரசூட சத்து பற்பம்","ருத்ரா காரசூட சத்து பற்பம்","பற்பம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-097',
    name: 'Ruthra Karuvanga Parpam',
    tamilName: 'ருத்ரா கருவங்க பற்பம்',
    slug: 'ruthra-karuvanga-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 290,
    originalPrice: 340,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Calcinated tin mineral preparation for diabetes mellitus, leucorrhea, nocturnal emissions, and gonorrhea. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நீரிழிவு சர்க்கரை நோய், வெள்ளைப்படுதல், விந்து நலிவு மற்றும் மேக நோய்களை குணப்படுத்தும் பற்பம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karuvanga Parpam (கருவங்க பற்பம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கருவங்க பற்பம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Calcinated tin mineral preparation for diabetes mellitus, leucorrhea, nocturnal emissions, and gonorrhea.',
    traditionalRoleTa: 'நீரிழிவு சர்க்கரை நோய், வெள்ளைப்படுதல், விந்து நலிவு மற்றும் மேக நோய்களை குணப்படுத்தும் பற்பம்.',
    badge: 'Purified Tin Calx',
    badgeTa: 'கருவங்க பற்பம்',
    image: '/images/products/ruthra-karuvanga-parpam/front.jpg',
    images: [
      '/images/products/ruthra-karuvanga-parpam/front.jpg',
      '/images/products/ruthra-karuvanga-parpam/angle.jpg',
      '/images/products/ruthra-karuvanga-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karuvanga-parpam/front.jpg',
      '/images/products/ruthra-karuvanga-parpam/angle.jpg',
      '/images/products/ruthra-karuvanga-parpam/back.jpg'
    ],
    ingredients: [
      { name: 'Karuvanga Parpam Classical Compound', tamilName: 'கருவங்க பற்பம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '100mg - 200mg', instructionTa: '100 - 200 மி.கி (அரிசி எடை அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Honey, ghee, or milk.', instructionTa: 'தேன், நெய் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '100mg - 200mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Honey, ghee, or milk',
      amountTa: '100 - 200 மி.கி (அரிசி எடை அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'தேன், நெய் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karuvanga Parpam prepared?',
        questionTa: 'ருத்ரா கருவங்க பற்பம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karuvanga parpam","ruthra karuvanga parpam","parpam","karuvanga","parpam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கருவங்க பற்பம்","ருத்ரா கருவங்க பற்பம்","பற்பம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-098',
    name: 'Ruthra Naga Parpam',
    tamilName: 'ருத்ரா நாக பற்பம்',
    slug: 'ruthra-naga-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ["digestive-wellness","skin-hair"],
    price: 290,
    originalPrice: 340,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Calcinated zinc calx for bleeding hemorrhoids, anal fissures, chronic ulcers, and eye diseases. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ரத்த மூலம், உள் மூலம், பவுத்திரம், ஆசனவாய் பிளவு மற்றும் ஆறாத புண்களுக்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Naga Parpam (நாக பற்பம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நாக பற்பம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Calcinated zinc calx for bleeding hemorrhoids, anal fissures, chronic ulcers, and eye diseases.',
    traditionalRoleTa: 'ரத்த மூலம், உள் மூலம், பவுத்திரம், ஆசனவாய் பிளவு மற்றும் ஆறாத புண்களுக்கு அருமருந்து.',
    badge: 'Calcinated Zinc Oxide',
    badgeTa: 'நாக பற்பம்',
    image: '/images/products/ruthra-naga-parpam/front.jpg',
    images: [
      '/images/products/ruthra-naga-parpam/front.jpg',
      '/images/products/ruthra-naga-parpam/angle.jpg',
      '/images/products/ruthra-naga-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-naga-parpam/front.jpg',
      '/images/products/ruthra-naga-parpam/angle.jpg',
      '/images/products/ruthra-naga-parpam/back.jpg'
    ],
    ingredients: [
      { name: 'Naga Parpam Classical Compound', tamilName: 'நாக பற்பம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '100mg - 200mg', instructionTa: '100 - 200 மி.கி (அரிசி எடை அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Honey, ghee, or milk.', instructionTa: 'தேன், நெய் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '100mg - 200mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Honey, ghee, or milk',
      amountTa: '100 - 200 மி.கி (அரிசி எடை அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'தேன், நெய் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Naga Parpam prepared?',
        questionTa: 'ருத்ரா நாக பற்பம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["naga parpam","ruthra naga parpam","parpam","naga","parpam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நாக பற்பம்","ருத்ரா நாக பற்பம்","பற்பம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-099',
    name: 'Ruthra Panchalavana Parpam',
    tamilName: 'ருத்ரா பஞ்சலவண பற்பம்',
    slug: 'ruthra-panchalavana-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ["digestive-wellness"],
    price: 290,
    originalPrice: 340,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Five purified classical salts calx for intense dyspepsia, abdominal distension, and spleen disorders. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ஐந்து வகை உப்புகள் சேர்ந்த பற்பம்; வயிற்று வலி, உப்புசம், குன்மம் மற்றும் மண்ணீரல் வீக்கம் போக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Panchalavana Parpam (பஞ்சலவண பற்பம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பஞ்சலவண பற்பம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Five purified classical salts calx for intense dyspepsia, abdominal distension, and spleen disorders.',
    traditionalRoleTa: 'ஐந்து வகை உப்புகள் சேர்ந்த பற்பம்; வயிற்று வலி, உப்புசம், குன்மம் மற்றும் மண்ணீரல் வீக்கம் போக்கி.',
    badge: 'Five-Salt Calx',
    badgeTa: 'பஞ்சலவண பற்பம்',
    image: '/images/products/ruthra-panchalavana-parpam/front.jpg',
    images: [
      '/images/products/ruthra-panchalavana-parpam/front.jpg',
      '/images/products/ruthra-panchalavana-parpam/angle.jpg',
      '/images/products/ruthra-panchalavana-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-panchalavana-parpam/front.jpg',
      '/images/products/ruthra-panchalavana-parpam/angle.jpg',
      '/images/products/ruthra-panchalavana-parpam/back.jpg'
    ],
    ingredients: [
      { name: 'Panchalavana Parpam Classical Compound', tamilName: 'பஞ்சலவண பற்பம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '100mg - 200mg', instructionTa: '100 - 200 மி.கி (அரிசி எடை அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Honey, ghee, or milk.', instructionTa: 'தேன், நெய் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '100mg - 200mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Honey, ghee, or milk',
      amountTa: '100 - 200 மி.கி (அரிசி எடை அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'தேன், நெய் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Panchalavana Parpam prepared?',
        questionTa: 'ருத்ரா பஞ்சலவண பற்பம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["panchalavana parpam","ruthra panchalavana parpam","parpam","panchalavana","parpam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பஞ்சலவண பற்பம்","ருத்ரா பஞ்சலவண பற்பம்","பற்பம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-100',
    name: 'Ruthra Sangu Parpam',
    tamilName: 'ருத்ரா சங்கு பற்பம்',
    slug: 'ruthra-sangu-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ["digestive-wellness","skin-hair"],
    price: 290,
    originalPrice: 340,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Purified conch shell calx for hyperacidity, duodenal ulcers, GERD, pimples, and melasma. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குடல் புண், நெஞ்செரிச்சல், அசிடிட்டி, முகப்பரு, கரும்புள்ளிகள் மற்றும் தோல் நோய்களுக்கு சங்கு பற்பம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sangu Parpam (சங்கு பற்பம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சங்கு பற்பம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Purified conch shell calx for hyperacidity, duodenal ulcers, GERD, pimples, and melasma.',
    traditionalRoleTa: 'குடல் புண், நெஞ்செரிச்சல், அசிடிட்டி, முகப்பரு, கரும்புள்ளிகள் மற்றும் தோல் நோய்களுக்கு சங்கு பற்பம்.',
    badge: 'Purified Conch Calx',
    badgeTa: 'சங்கு பற்பம்',
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
    ingredients: [
      { name: 'Sangu Parpam Classical Compound', tamilName: 'சங்கு பற்பம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '100mg - 200mg', instructionTa: '100 - 200 மி.கி (அரிசி எடை அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Honey, ghee, or milk.', instructionTa: 'தேன், நெய் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '100mg - 200mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Honey, ghee, or milk',
      amountTa: '100 - 200 மி.கி (அரிசி எடை அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'தேன், நெய் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sangu Parpam prepared?',
        questionTa: 'ருத்ரா சங்கு பற்பம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sangu parpam","ruthra sangu parpam","parpam","sangu","parpam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சங்கு பற்பம்","ருத்ரா சங்கு பற்பம்","பற்பம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-101',
    name: 'Ruthra Oma Theeneer',
    tamilName: 'ருத்ரா ஓம தீநீர்',
    slug: 'ruthra-oma-theeneer',
    medicalSystem: 'siddha',
    formulation: 'Theeneer',
    formulationTa: 'தீநீர்',
    categoryGroup: 'theeneer',
    concerns: ["digestive-wellness"],
    price: 120,
    originalPrice: 140,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Steam-distilled pure Trachyspermum ammi hydrosol for instant gas relief, cholera, and infantile gripes. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வாலை வடித்த தூய ஓம தீநீர்; அஜீரணம், வயிற்று வலி, வாந்தி பேதி மற்றும் குழந்தைகளுக்கு மாந்தம் போக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Oma Theeneer (ஓம தீநீர்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ஓம தீநீர் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Steam-distilled pure Trachyspermum ammi hydrosol for instant gas relief, cholera, and infantile gripes.',
    traditionalRoleTa: 'வாலை வடித்த தூய ஓம தீநீர்; அஜீரணம், வயிற்று வலி, வாந்தி பேதி மற்றும் குழந்தைகளுக்கு மாந்தம் போக்கி.',
    badge: 'Distilled Ajwain Hydrosol',
    badgeTa: 'ஓம தீநீர்',
    image: '/images/products/ruthra-oma-theeneer/front.jpg',
    images: [
      '/images/products/ruthra-oma-theeneer/front.jpg',
      '/images/products/ruthra-oma-theeneer/angle.jpg',
      '/images/products/ruthra-oma-theeneer/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-oma-theeneer/front.jpg',
      '/images/products/ruthra-oma-theeneer/angle.jpg',
      '/images/products/ruthra-oma-theeneer/back.jpg'
    ],
    ingredients: [
      { name: 'Oma Theeneer Classical Compound', tamilName: 'ஓம தீநீர் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '15-30 ml', instructionTa: '15-30 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Direct or diluted with equal quantity of warm water.', instructionTa: 'நேரடியாக அல்லது சம அளவு வெந்நீருடன் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '15-30 ml',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Direct or diluted with equal quantity of warm water',
      amountTa: '15-30 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'நேரடியாக அல்லது சம அளவு வெந்நீருடன்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Oma Theeneer prepared?',
        questionTa: 'ருத்ரா ஓம தீநீர் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["oma theeneer","ruthra oma theeneer","theeneer","oma","theeneer","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ஓம தீநீர்","ருத்ரா ஓம தீநீர்","தீநீர்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-102',
    name: 'Ruthra Amirthakumari Thailam',
    tamilName: 'ருத்ரா அமிர்தகுமாரி தைலம்',
    slug: 'ruthra-amirthakumari-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Cooling head application oil for reducing cranial heat, promoting deep restorative sleep, and scalp wellness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தலைச்சூடு, தூக்கமின்மை, கண் எரிச்சல் மற்றும் முடி உதிர்வை தடுக்கும் அமிர்தகுமாரி தைலம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Amirthakumari Thailam (அமிர்தகுமாரி தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அமிர்தகுமாரி தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cooling head application oil for reducing cranial heat, promoting deep restorative sleep, and scalp wellness.',
    traditionalRoleTa: 'தலைச்சூடு, தூக்கமின்மை, கண் எரிச்சல் மற்றும் முடி உதிர்வை தடுக்கும் அமிர்தகுமாரி தைலம்.',
    badge: 'Cranial Coolant Oil',
    badgeTa: 'அமிர்தகுமாரி தைலம்',
    image: '/images/products/ruthra-amirthakumari-thailam/front.jpg',
    images: [
      '/images/products/ruthra-amirthakumari-thailam/front.jpg',
      '/images/products/ruthra-amirthakumari-thailam/angle.jpg',
      '/images/products/ruthra-amirthakumari-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amirthakumari-thailam/front.jpg',
      '/images/products/ruthra-amirthakumari-thailam/angle.jpg',
      '/images/products/ruthra-amirthakumari-thailam/back.jpg'
    ],
    ingredients: [
      { name: 'Amirthakumari Thailam Classical Compound', tamilName: 'அமிர்தகுமாரி தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Amirthakumari Thailam prepared?',
        questionTa: 'ருத்ரா அமிர்தகுமாரி தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["amirthakumari thailam","ruthra amirthakumari thailam","thailam","amirthakumari","thailam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அமிர்தகுமாரி தைலம்","ருத்ரா அமிர்தகுமாரி தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-103',
    name: 'Ruthra Citramutti Madakku Tailam',
    tamilName: 'ருத்ரா சிற்றாமுட்டி மடக்கு தைலம்',
    slug: 'ruthra-citramutti-madakku-tailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["joint-mobility"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Pavonia zeylanica multi-boiled oil for severe neurological deficits, facial palsy, and hemi-plegia. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பக்கவாதம், முகவாதம், மூட்டு முடக்கம் மற்றும் தீவிர நரம்பு வலிகளுக்கு சிறந்த மடக்கு தைலம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Citramutti Madakku Tailam (சிற்றாமுட்டி மடக்கு தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சிற்றாமுட்டி மடக்கு தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Pavonia zeylanica multi-boiled oil for severe neurological deficits, facial palsy, and hemi-plegia.',
    traditionalRoleTa: 'பக்கவாதம், முகவாதம், மூட்டு முடக்கம் மற்றும் தீவிர நரம்பு வலிகளுக்கு சிறந்த மடக்கு தைலம்.',
    badge: 'Intensive Neuro Oil',
    badgeTa: 'சிற்றாமுட்டி மடக்கு தைலம்',
    image: '/images/products/ruthra-citramutti-madakku-tailam/front.jpg',
    images: [
      '/images/products/ruthra-citramutti-madakku-tailam/front.jpg',
      '/images/products/ruthra-citramutti-madakku-tailam/angle.jpg',
      '/images/products/ruthra-citramutti-madakku-tailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-citramutti-madakku-tailam/front.jpg',
      '/images/products/ruthra-citramutti-madakku-tailam/angle.jpg',
      '/images/products/ruthra-citramutti-madakku-tailam/back.jpg'
    ],
    ingredients: [
      { name: 'Citramutti Madakku Tailam Classical Compound', tamilName: 'சிற்றாமுட்டி மடக்கு தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Citramutti Madakku Tailam prepared?',
        questionTa: 'ருத்ரா சிற்றாமுட்டி மடக்கு தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["citramutti madakku tailam","ruthra citramutti madakku tailam","thailam","citramutti","madakku","tailam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சிற்றாமுட்டி மடக்கு தைலம்","ருத்ரா சிற்றாமுட்டி மடக்கு தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-104',
    name: 'Ruthra Garudankizhangu Ennai',
    tamilName: 'ருத்ரா கருடன்கிழங்கு எண்ணெய்',
    slug: 'ruthra-garudankizhangu-ennai',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["joint-mobility","skin-hair"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Corallocarpus epigaeus oil for acute inflammatory swellings, venomous stings, and toxic boils. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நச்சுக்கடி, வீக்கங்கள், கட்டிகள் மற்றும் கடுமையான மூட்டு வலிகளுக்கு சிறந்த வெளிப்புற எண்ணெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Garudankizhangu Ennai (கருடன்கிழங்கு எண்ணெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கருடன்கிழங்கு எண்ணெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Corallocarpus epigaeus oil for acute inflammatory swellings, venomous stings, and toxic boils.',
    traditionalRoleTa: 'நச்சுக்கடி, வீக்கங்கள், கட்டிகள் மற்றும் கடுமையான மூட்டு வலிகளுக்கு சிறந்த வெளிப்புற எண்ணெய்.',
    badge: 'Anti-Toxic Inflammatory Oil',
    badgeTa: 'கருடன்கிழங்கு எண்ணெய்',
    image: '/images/products/ruthra-garudankizhangu-ennai/front.jpg',
    images: [
      '/images/products/ruthra-garudankizhangu-ennai/front.jpg',
      '/images/products/ruthra-garudankizhangu-ennai/angle.jpg',
      '/images/products/ruthra-garudankizhangu-ennai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-garudankizhangu-ennai/front.jpg',
      '/images/products/ruthra-garudankizhangu-ennai/angle.jpg',
      '/images/products/ruthra-garudankizhangu-ennai/back.jpg'
    ],
    ingredients: [
      { name: 'Garudankizhangu Ennai Classical Compound', tamilName: 'கருடன்கிழங்கு எண்ணெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Garudankizhangu Ennai prepared?',
        questionTa: 'ருத்ரா கருடன்கிழங்கு எண்ணெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["garudankizhangu ennai","ruthra garudankizhangu ennai","thailam","garudankizhangu","ennai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கருடன்கிழங்கு எண்ணெய்","ருத்ரா கருடன்கிழங்கு எண்ணெய்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-105',
    name: 'Ruthra Kulirthamarai Thailam',
    tamilName: 'ருத்ரா குளிர்தாமரை தைலம்',
    slug: 'ruthra-kulirthamarai-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Lotus flower medicated cooling oil for burning eyes, sinusitis headaches, and mental exhaustion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கண் எரிச்சல், உடல் உஷ்ணம், மன அழுத்தம் மற்றும் தலைபாரம் போக்கும் குளிர் தாமரை தைலம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kulirthamarai Thailam (குளிர்தாமரை தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா குளிர்தாமரை தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Lotus flower medicated cooling oil for burning eyes, sinusitis headaches, and mental exhaustion.',
    traditionalRoleTa: 'கண் எரிச்சல், உடல் உஷ்ணம், மன அழுத்தம் மற்றும் தலைபாரம் போக்கும் குளிர் தாமரை தைலம்.',
    badge: 'Lotus Soothing Oil',
    badgeTa: 'குளிர்தாமரை தைலம்',
    image: '/images/products/ruthra-kulirthamarai-thailam/front.jpg',
    images: [
      '/images/products/ruthra-kulirthamarai-thailam/front.jpg',
      '/images/products/ruthra-kulirthamarai-thailam/angle.jpg',
      '/images/products/ruthra-kulirthamarai-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kulirthamarai-thailam/front.jpg',
      '/images/products/ruthra-kulirthamarai-thailam/angle.jpg',
      '/images/products/ruthra-kulirthamarai-thailam/back.jpg'
    ],
    ingredients: [
      { name: 'Kulirthamarai Thailam Classical Compound', tamilName: 'குளிர்தாமரை தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kulirthamarai Thailam prepared?',
        questionTa: 'ருத்ரா குளிர்தாமரை தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kulirthamarai thailam","ruthra kulirthamarai thailam","thailam","kulirthamarai","thailam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["குளிர்தாமரை தைலம்","ருத்ரா குளிர்தாமரை தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-106',
    name: 'Ruthra Kumari Thailam',
    tamilName: 'ருத்ரா குமரி தைலம்',
    slug: 'ruthra-kumari-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["skin-hair"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Aloe vera hair and scalp oil for dandruff, premature greying, cooling eyes, and dense hair growth. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கற்றாழை தைலம்; பொடுகு, இளநரை, முடி உதிர்வு நீங்கி அடர்த்தியான முடி வளர்ச்சிக்கு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kumari Thailam (குமரி தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா குமரி தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Aloe vera hair and scalp oil for dandruff, premature greying, cooling eyes, and dense hair growth.',
    traditionalRoleTa: 'கற்றாழை தைலம்; பொடுகு, இளநரை, முடி உதிர்வு நீங்கி அடர்த்தியான முடி வளர்ச்சிக்கு.',
    badge: 'Aloe Scalp Nourisher',
    badgeTa: 'குமரி தைலம்',
    image: '/images/products/ruthra-kumari-thailam/front.jpg',
    images: [
      '/images/products/ruthra-kumari-thailam/front.jpg',
      '/images/products/ruthra-kumari-thailam/angle.jpg',
      '/images/products/ruthra-kumari-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kumari-thailam/front.jpg',
      '/images/products/ruthra-kumari-thailam/angle.jpg',
      '/images/products/ruthra-kumari-thailam/back.jpg'
    ],
    ingredients: [
      { name: 'Kumari Thailam Classical Compound', tamilName: 'குமரி தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kumari Thailam prepared?',
        questionTa: 'ருத்ரா குமரி தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kumari thailam","ruthra kumari thailam","thailam","kumari","thailam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["குமரி தைலம்","ருத்ரா குமரி தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-107',
    name: 'Ruthra Meni Thilam',
    tamilName: 'ருத்ரா மேனி தைலம்',
    slug: 'ruthra-meni-thilam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["skin-hair"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Acalypha indica herbal oil for chronic eczema, fungal dermatitis, skin scabies, and wound healing. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குப்பைமேனி மூலிகை தைலம்; சிரங்கு, கரப்பான், படை மற்றும் தோல் அரிப்புகளை போக்கும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Meni Thilam (மேனி தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மேனி தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Acalypha indica herbal oil for chronic eczema, fungal dermatitis, skin scabies, and wound healing.',
    traditionalRoleTa: 'குப்பைமேனி மூலிகை தைலம்; சிரங்கு, கரப்பான், படை மற்றும் தோல் அரிப்புகளை போக்கும்.',
    badge: 'Dermal Care Oil',
    badgeTa: 'மேனி தைலம்',
    image: '/images/products/ruthra-meni-thilam/front.jpg',
    images: [
      '/images/products/ruthra-meni-thilam/front.jpg',
      '/images/products/ruthra-meni-thilam/angle.jpg',
      '/images/products/ruthra-meni-thilam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-meni-thilam/front.jpg',
      '/images/products/ruthra-meni-thilam/angle.jpg',
      '/images/products/ruthra-meni-thilam/back.jpg'
    ],
    ingredients: [
      { name: 'Meni Thilam Classical Compound', tamilName: 'மேனி தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Meni Thilam prepared?',
        questionTa: 'ருத்ரா மேனி தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["meni thilam","ruthra meni thilam","thailam","meni","thilam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மேனி தைலம்","ருத்ரா மேனி தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-108',
    name: 'Ruthra Merugulli Thailam',
    tamilName: 'ருத்ரா மெழுகுள்ளி தைலம்',
    slug: 'ruthra-merugulli-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["joint-mobility"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Garlic and wax compound oil for chronic earache, otitis media, deafness prevention, and vatha pain. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'காது வலி, காதில் சீழ் வடிதல், காது இரைச்சல் மற்றும் வாத வலிகளுக்கு வெளிப்புற தைலம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Merugulli Thailam (மெழுகுள்ளி தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மெழுகுள்ளி தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Garlic and wax compound oil for chronic earache, otitis media, deafness prevention, and vatha pain.',
    traditionalRoleTa: 'காது வலி, காதில் சீழ் வடிதல், காது இரைச்சல் மற்றும் வாத வலிகளுக்கு வெளிப்புற தைலம்.',
    badge: 'Ear & Joint Oil',
    badgeTa: 'மெழுகுள்ளி தைலம்',
    image: '/images/products/ruthra-merugulli-thailam/front.jpg',
    images: [
      '/images/products/ruthra-merugulli-thailam/front.jpg',
      '/images/products/ruthra-merugulli-thailam/angle.jpg',
      '/images/products/ruthra-merugulli-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-merugulli-thailam/front.jpg',
      '/images/products/ruthra-merugulli-thailam/angle.jpg',
      '/images/products/ruthra-merugulli-thailam/back.jpg'
    ],
    ingredients: [
      { name: 'Merugulli Thailam Classical Compound', tamilName: 'மெழுகுள்ளி தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Merugulli Thailam prepared?',
        questionTa: 'ருத்ரா மெழுகுள்ளி தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["merugulli thailam","ruthra merugulli thailam","thailam","merugulli","thailam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மெழுகுள்ளி தைலம்","ருத்ரா மெழுகுள்ளி தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-109',
    name: 'Ruthra Veezhi Ennai',
    tamilName: 'ருத்ரா வீழி எண்ணெய்',
    slug: 'ruthra-veezhi-ennai',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["joint-mobility","respiratory"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Cadaba trifoliata oil for deep-seated vatha joint contractures, wheezing, and muscular stiffness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வீழி இலை எண்ணெய்; மூட்டு பிடிப்பு, தசை இறுக்கம் மற்றும் சுவாச கோளாறுகளுக்கு நிவாரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Veezhi Ennai (வீழி எண்ணெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா வீழி எண்ணெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cadaba trifoliata oil for deep-seated vatha joint contractures, wheezing, and muscular stiffness.',
    traditionalRoleTa: 'வீழி இலை எண்ணெய்; மூட்டு பிடிப்பு, தசை இறுக்கம் மற்றும் சுவாச கோளாறுகளுக்கு நிவாரணம்.',
    badge: 'Joint Contracture Oil',
    badgeTa: 'வீழி எண்ணெய்',
    image: '/images/products/ruthra-veezhi-ennai/front.jpg',
    images: [
      '/images/products/ruthra-veezhi-ennai/front.jpg',
      '/images/products/ruthra-veezhi-ennai/angle.jpg',
      '/images/products/ruthra-veezhi-ennai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-veezhi-ennai/front.jpg',
      '/images/products/ruthra-veezhi-ennai/angle.jpg',
      '/images/products/ruthra-veezhi-ennai/back.jpg'
    ],
    ingredients: [
      { name: 'Veezhi Ennai Classical Compound', tamilName: 'வீழி எண்ணெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Veezhi Ennai prepared?',
        questionTa: 'ருத்ரா வீழி எண்ணெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["veezhi ennai","ruthra veezhi ennai","thailam","veezhi","ennai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["வீழி எண்ணெய்","ருத்ரா வீழி எண்ணெய்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-110',
    name: 'Ruthra Vizhuthi Ennai',
    tamilName: 'ருத்ரா விழுதி எண்ணெய்',
    slug: 'ruthra-vizhuthi-ennai',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["joint-mobility"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Cadaba fruticosa oil for lumbar spondylosis, sciatica, joint immobility, and neuralgia. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இடுப்பு வலி, சியாட்டிகா, மூட்டு வாதம் மற்றும் நரம்பு வலிகளுக்கு சிறந்த விழுதி எண்ணெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Vizhuthi Ennai (விழுதி எண்ணெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா விழுதி எண்ணெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cadaba fruticosa oil for lumbar spondylosis, sciatica, joint immobility, and neuralgia.',
    traditionalRoleTa: 'இடுப்பு வலி, சியாட்டிகா, மூட்டு வாதம் மற்றும் நரம்பு வலிகளுக்கு சிறந்த விழுதி எண்ணெய்.',
    badge: 'Sciatica & Spine Oil',
    badgeTa: 'விழுதி எண்ணெய்',
    image: '/images/products/ruthra-vizhuthi-ennai/front.jpg',
    images: [
      '/images/products/ruthra-vizhuthi-ennai/front.jpg',
      '/images/products/ruthra-vizhuthi-ennai/angle.jpg',
      '/images/products/ruthra-vizhuthi-ennai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vizhuthi-ennai/front.jpg',
      '/images/products/ruthra-vizhuthi-ennai/angle.jpg',
      '/images/products/ruthra-vizhuthi-ennai/back.jpg'
    ],
    ingredients: [
      { name: 'Vizhuthi Ennai Classical Compound', tamilName: 'விழுதி எண்ணெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Vizhuthi Ennai prepared?',
        questionTa: 'ருத்ரா விழுதி எண்ணெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["vizhuthi ennai","ruthra vizhuthi ennai","thailam","vizhuthi","ennai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["விழுதி எண்ணெய்","ருத்ரா விழுதி எண்ணெய்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

{
    id: 'prod-siddha-111',
    name: 'Ruthra Vanga Vennai',
    tamilName: 'ருத்ரா வங்க வெண்ணெய்',
    slug: 'ruthra-vanga-vennai',
    medicalSystem: 'siddha',
    formulation: 'Vennai',
    formulationTa: 'வெண்ணெய்',
    categoryGroup: 'vennai',
    concerns: ["skin-hair"],
    price: 210,
    originalPrice: 245,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified lead butter ointment for intractable non-healing bedsores, diabetic gangrenous ulcers, and carbuncles. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ஆறாத புண்கள், படுக்கை புண்கள், சர்க்கரை நோய் ரணங்கள் மற்றும் வெட்டுக்காயங்களை ஆற்றும் வங்க வெண்ணெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Vanga Vennai (வங்க வெண்ணெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா வங்க வெண்ணெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Purified lead butter ointment for intractable non-healing bedsores, diabetic gangrenous ulcers, and carbuncles.',
    traditionalRoleTa: 'ஆறாத புண்கள், படுக்கை புண்கள், சர்க்கரை நோய் ரணங்கள் மற்றும் வெட்டுக்காயங்களை ஆற்றும் வங்க வெண்ணெய்.',
    badge: 'Ulcer & Wound Healing Butter',
    badgeTa: 'வங்க வெண்ணெய்',
    image: '/images/products/ruthra-vanga-vennai/front.jpg',
    images: [
      '/images/products/ruthra-vanga-vennai/front.jpg',
      '/images/products/ruthra-vanga-vennai/angle.jpg',
      '/images/products/ruthra-vanga-vennai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vanga-vennai/front.jpg',
      '/images/products/ruthra-vanga-vennai/angle.jpg',
      '/images/products/ruthra-vanga-vennai/back.jpg'
    ],
    ingredients: [
      { name: 'Vanga Vennai Classical Compound', tamilName: 'வங்க வெண்ணெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Vanga Vennai prepared?',
        questionTa: 'ருத்ரா வங்க வெண்ணெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["vanga vennai","ruthra vanga vennai","vennai","vanga","vennai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["வங்க வெண்ணெய்","ருத்ரா வங்க வெண்ணெய்","வெண்ணெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // 3. CLASSICAL AYURVEDA MEDICINES (55 SKUs)
  // ==========================================
  {
    id: 'prod-ayurveda-001',
    name: 'Ruthra Amalaki Churna',
    tamilName: 'ருத்ரா நெல்லி சூர்ணம்',
    slug: 'ruthra-amalaki-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness', 'skin-hair', 'digestive-wellness'],
    price: 140,
    originalPrice: 160,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Pure classical Emblica officinalis (Amla) powder rich in natural Vitamin C and antioxidants for immunity, digestion, and hair vitality.',
    shortDescriptionTa: 'இயற்கையான வைட்டமின் சி மற்றும் ஆன்டிஆக்ஸிடன்ட்கள் நிறைந்த தூய நெல்லி சூர்ணம்.',
    description: 'Ruthra Amalaki Churna is prepared from shade-dried wild Amla fruits. Known as a premier Rasayana in Ayurveda, it strengthens digestive fire (Agni), pacifies Pitta dosha, rejuvenates skin complexion, and supports healthy vision and hair growth.',
    descriptionTa: 'பாரம்பரிய முறைப்படி தயாரிக்கப்பட்ட தூய நெல்லிக்காய் சூர்ணம். பித்தத்தை தணித்து, நோய் எதிர்ப்பு சக்தி, கண் பார்வை மற்றும் தலைமுடி வளர்ச்சியை பெருக்கும்.',
    traditionalRole: 'Premier Pitta-pacifying Rasayana, natural antioxidant, and digestive promoter.',
    traditionalRoleTa: 'பித்த சமன், நோய் எதிர்ப்பு சக்தி மற்றும் செரிமான தூண்டி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Amalaki (Indian Gooseberry)', tamilName: 'நெல்லிக்காய்', botanicalName: 'Phyllanthus emblica', role: 'Vitamin C antioxidant and Rasayana', roleTa: 'இயற்கை வைட்டமின் சி மற்றும் ரசாயனம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra amalaki churna', 'ruthra-amalaki-churna', 'ayurveda churna', 'amalaki churna'],
    tamilKeywords: ['ருத்ரா நெல்லி சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-002',
    name: 'Ruthra Arjuna Churna',
    tamilName: 'ருத்ரா அர்ஜுன சூர்ணம் (மருதம்பட்டை)',
    slug: 'ruthra-arjuna-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness'],
    price: 150,
    originalPrice: 180,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical Terminalia arjuna bark powder revered for cardiac health, vascular elasticity, and healthy lipid balance.',
    shortDescriptionTa: 'இதய நலம், ரத்த ஓட்டம் மற்றும் ரத்த அழுத்தத்தை சீராக்கும் உன்னத மருதம்பட்டை சூர்ணம்.',
    description: 'Ruthra Arjuna Churna is made from wild Arjuna tree bark. It is celebrated in Ayurveda as the foremost Hridya (cardioprotective) botanical that nourishes cardiac muscle fibers and maintains normal blood pressure.',
    descriptionTa: 'இதய தசைகளை பலப்படுத்தி, ரத்த நாளங்களின் நெகிழ்வுத்தன்மையை பாதுகாக்கும் பாரம்பரிய அர்ஜுன மருதம்பட்டை சூர்ணம்.',
    traditionalRole: 'Classical cardioprotective and vascular tonic.',
    traditionalRoleTa: 'இதய பலம் மற்றும் ரத்த நாள பாதுகாப்பு.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Arjuna Bark', tamilName: 'மருதம்பட்டை', botanicalName: 'Terminalia arjuna', role: 'Cardiotonic and vascular support', roleTa: 'இதய நலம் காக்கும் மூலிகை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra arjuna churna', 'ruthra-arjuna-churna', 'ayurveda churna', 'arjuna churna'],
    tamilKeywords: ['ருத்ரா அர்ஜுன சூர்ணம் (மருதம்பட்டை)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-003',
    name: 'Ruthra Asvagandha Churna',
    tamilName: 'ருத்ரா அஸ்வகந்தா சூர்ணம் (அமுக்கரா)',
    slug: 'ruthra-asvagandha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness', 'joint-mobility'],
    price: 180,
    originalPrice: 220,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Renowned adaptogenic Withania somnifera root powder for vitality, stress resilience, and muscular strength.',
    shortDescriptionTa: 'உடல் வலிமை, மன அமைதி மற்றும் நரம்பு பலம் தரும் முதன்மையான அஸ்வகந்தா சூர்ணம்.',
    description: 'Ruthra Asvagandha Churna provides potent Balya and Rasayana benefits. It modulates stress hormones, enhances deep restful sleep, and restores youthful physical stamina.',
    descriptionTa: 'நரம்பு தளர்ச்சியை போக்கி, மன அழுத்தத்தை குறைத்து, ஆழ்ந்த தூக்கம் மற்றும் உடல் பலத்தை பெருக்கும் அமுக்கரா சூர்ணம்.',
    traditionalRole: 'Adaptogen, nerve tonic, and muscular strength promoter.',
    traditionalRoleTa: 'நரம்பு பலம், மன அமைதி மற்றும் உடல் உரம் தரும் ரசாயனம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Asvagandha Root', tamilName: 'அஸ்வகந்தா / அமுக்கரா', botanicalName: 'Withania somnifera', role: 'Adaptogen and vitality tonic', roleTa: 'உடல் பலம் தரும் மூலிகை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra asvagandha churna', 'ruthra-asvagandha-churna', 'ayurveda churna', 'asvagandha churna'],
    tamilKeywords: ['ருத்ரா அஸ்வகந்தா சூர்ணம் (அமுக்கரா)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-004',
    name: 'Ruthra Atmagupta Churna',
    tamilName: 'ருத்ரா ஆத்மகுப்தா சூர்ணம் (பூனைக்காலி)',
    slug: 'ruthra-atmagupta-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness', 'womens-wellness'],
    price: 190,
    originalPrice: 230,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical Mucuna pruriens seed powder containing natural L-dopa for reproductive vitality and neuromuscular harmony.',
    shortDescriptionTa: 'நரம்பு மண்டல செயல்பாடு, விந்து பலம் மற்றும் புத்துணர்ச்சி தரும் பூனைக்காலி சூர்ணம்.',
    description: 'Ruthra Atmagupta Churna (Kapikacchu) is a potent Vrishya and Vata-pacifying formulation that supports motor neuron health and male/female reproductive vitality.',
    descriptionTa: 'பாரம்பரிய பூனைக்காலி விதை சூர்ணம். நரம்பு நலம், உடல் பலம் மற்றும் விந்து அணுக்களின் பெருக்கத்திற்கு உகந்தது.',
    traditionalRole: 'Classical reproductive tonic and dopamine precursor support.',
    traditionalRoleTa: 'நரம்பு பலம் மற்றும் தாது விருத்தி தரும் மூலிகை.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Atmagupta Seed', tamilName: 'பூனைக்காலி விதை', botanicalName: 'Mucuna pruriens', role: 'Neuromuscular support and vitality', roleTa: 'நரம்பு மற்றும் தாது பலம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra atmagupta churna', 'ruthra-atmagupta-churna', 'ayurveda churna', 'atmagupta churna'],
    tamilKeywords: ['ருத்ரா ஆத்மகுப்தா சூர்ணம் (பூனைக்காலி)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-005',
    name: 'Ruthra Avipattikara Churna',
    tamilName: 'ருத்ரா அவிபத்திகர சூர்ணம்',
    slug: 'ruthra-avipattikara-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['digestive-wellness'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Premier classical compound for hyperacidity, heartburn, sour belching, and gentle bowel regulation.',
    shortDescriptionTa: 'நெஞ்செரிச்சல், அசிடிட்டி, புளித்த ஏப்பம் மற்றும் மலச்சிக்கலை போக்கும் உன்னத அவிபத்திகர சூர்ணம்.',
    description: 'Ruthra Avipattikara Churna combines Trikatu, Triphala, Musta, Ela, and Trivrit to neutralize excess stomach acids and restore gentle downward digestive flow.',
    descriptionTa: 'அமிலத்தன்மையை சமன் செய்து, செரிமான மண்டலத்தை குளிர்வித்து, சீரான குடல் இயக்கத்தை உறுதி செய்யும் பாரம்பரிய சூர்ணம்.',
    traditionalRole: 'Antacid, carminative, and gentle Pitta purgative.',
    traditionalRoleTa: 'அமில நிவாரணம் மற்றும் பித்த சமன சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Trikatu & Triphala blend', tamilName: 'திரிகடுகு & திரிபலா', botanicalName: 'Classical compound', role: 'Digestive fire balance', roleTa: 'செரிமான சமநிலை', amount: '50%' },
      { name: 'Trivrit (Operculina turpethum)', tamilName: 'சிவதை', botanicalName: 'Operculina turpethum', role: 'Gentle Pitta laxative', roleTa: 'பித்த விரேசனம்', amount: '40%' },
      { name: 'Cane Sugar & Spices', tamilName: 'சர்க்கரை & நறுமணப் பொருட்கள்', botanicalName: 'Saccharum officinarum', role: 'Cooling vehicle', roleTa: 'குளிர்ச்சி தரும் காரணி', amount: '10%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra avipattikara churna', 'ruthra-avipattikara-churna', 'ayurveda churna', 'avipattikara churna'],
    tamilKeywords: ['ருத்ரா அவிபத்திகர சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-006',
    name: 'Ruthra Baskara Lavana Churna',
    tamilName: 'ருத்ரா பாஸ்கர லவண சூர்ணம்',
    slug: 'ruthra-baskara-lavana-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['digestive-wellness'],
    price: 150,
    originalPrice: 180,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Therapeutic mineral salt and herbal digestive compound for loss of appetite, bloating, and sluggish digestion.',
    shortDescriptionTa: 'பசியின்மை, வாயுத்தொல்லை மற்றும் மந்தமான செரிமானத்தை குணமாக்கும் உப்பு மூலிகை கூட்டு.',
    description: 'Ruthra Baskara Lavana Churna is formulated with five therapeutic salts, Piper longum, Coriander, and Pomegranate seeds to rekindle digestive fire and relieve abdominal distension.',
    descriptionTa: 'ஐந்து வகை இயற்கை உப்புகள் மற்றும் மூலிகைகள் கொண்ட சூர்ணம். வயிற்று உப்புசம், அஜீரணம் மற்றும் பசியின்மையை நீக்கும்.',
    traditionalRole: 'Deepana (appetizer) and Pachana (digestive stimulant).',
    traditionalRoleTa: 'பசி தூண்டி மற்றும் வாயு நிவாரணி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Therapeutic Salts Blend', tamilName: 'பஞ்ச லவணங்கள்', botanicalName: 'Mineral salts', role: 'Kindles digestive secretions', roleTa: 'செரிமான அமிலங்களை தூண்டும்', amount: '40%' },
      { name: 'Pomegranate & Trikatu', tamilName: 'மாதுளை & திரிகடுகு', botanicalName: 'Punica granatum', role: 'Carminative and digestive', roleTa: 'வாயு அகற்றல்', amount: '60%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra baskara lavana churna', 'ruthra-baskara-lavana-churna', 'ayurveda churna', 'baskara lavana churna'],
    tamilKeywords: ['ருத்ரா பாஸ்கர லவண சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-007',
    name: 'Ruthra Dadimastaka Churna',
    tamilName: 'ருத்ரா தாடிமாஷ்டக சூர்ணம் (மாதுளை கூட்டு)',
    slug: 'ruthra-dadimastaka-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['digestive-wellness'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Pomegranate-rich classical digestive blend for chronic diarrhea, irritable bowel, and malabsorption.',
    shortDescriptionTa: 'சீதபேதி, வயிற்றுப்போக்கு, குடல் பலவீனம் மற்றும் கிரகணி நோய்களுக்கு உகந்த மாதுளை சூர்ணம்.',
    description: 'Ruthra Dadimastaka Churna incorporates dried pomegranate rind, aromatic spices, and carminatives to astringe loose bowels and restore healthy gut flora.',
    descriptionTa: 'மாதுளைத் தோல் மற்றும் நறுமண மூலிகைகள் அடங்கிய சூர்ணம். குடல் இயக்கத்தை சீராக்கி வயிற்றுப்போக்கு மற்றும் சீதக்கழிச்சலை குணமாக்கும்.',
    traditionalRole: 'Grahi (absorbent) and bowel regulator.',
    traditionalRoleTa: 'குடல் பலப்படுத்தி மற்றும் கழிச்சல் நீக்கி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Dadima (Pomegranate)', tamilName: 'மாதுளை', botanicalName: 'Punica granatum', role: 'Gut astringent and nutrient enhancer', roleTa: 'குடல் பலம் தரும்', amount: '50%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra dadimastaka churna', 'ruthra-dadimastaka-churna', 'ayurveda churna', 'dadimastaka churna'],
    tamilKeywords: ['ருத்ரா தாடிமாஷ்டக சூர்ணம் (மாதுளை கூட்டு)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-008',
    name: 'Ruthra Jatamayadi Churna',
    tamilName: 'ருத்ரா ஜடாமயாதி சூர்ணம்',
    slug: 'ruthra-jatamayadi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['joint-mobility'],
    price: 170,
    originalPrice: 200,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical external application powder (Lepa) for gouty arthritis, burning joint sensations, and inflammatory swelling.',
    shortDescriptionTa: 'வாத வீக்கம், மூட்டு எரிச்சல் மற்றும் மூட்டு வலிகளுக்கு பற்று போட பயன்படும் பாரம்பரிய சூர்ணம்.',
    description: 'Ruthra Jatamayadi Churna is traditionally compounded with Jatamansi, Chandana, and Usheera. When made into a paste with rice water or tamarind juice and applied externally, it quickly draws out localized heat and inflammation.',
    descriptionTa: 'ஜடாமாஞ்சி, சந்தனம், வெட்டிவேர் உள்ளிட்ட மூலிகைகளின் கலவை. வெளிப்புற பற்றாக பூசும்போது மூட்டு வலி, வீக்கம் மற்றும் எரிச்சலை உடனடியாக தணிக்கும்.',
    traditionalRole: 'Anti-inflammatory external Lepa for Vatarakta and joint heat.',
    traditionalRoleTa: 'மூட்டு வீக்கம் மற்றும் எரிச்சலை தணிக்கும் பற்று பொடி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Jatamansi & Chandana blend', tamilName: 'ஜடாமாஞ்சி & சந்தனம்', botanicalName: 'Nardostachys jatamansi', role: 'Cooling anti-inflammatory', roleTa: 'குளிர்ச்சி மற்றும் வீக்கம் குறைத்தல்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra jatamayadi churna', 'ruthra-jatamayadi-churna', 'ayurveda churna', 'jatamayadi churna'],
    tamilKeywords: ['ருத்ரா ஜடாமயாதி சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-009',
    name: 'Ruthra Jatiphaladya Churna',
    tamilName: 'ருத்ரா ஜாதிபலாத்யா சூர்ணம் (ஜாதிக்காய் கூட்டு)',
    slug: 'ruthra-jatiphaladya-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['respiratory', 'digestive-wellness'],
    price: 180,
    originalPrice: 220,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Aromatic Nutmeg formulation for chronic cough, asthma, throat irritation, and sprue syndrome.',
    shortDescriptionTa: 'ஜாதிக்காய், கிராம்பு அடங்கிய சூர்ணம். தொடர் இருமல், இரைப்பு, ஆஸ்துமா மற்றும் குடல் பலவீனத்தை போக்கும்.',
    description: 'Ruthra Jatiphaladya Churna combines Myristica fragrans (Nutmeg), clove, cardamom, and herbal carminatives to soothe respiratory spasms, calm chronic coughs, and support digestive assimilation.',
    descriptionTa: 'சுவாசப் பாதையில் உள்ள கபத்தை வெளியேற்றி, இருமல் மற்றும் செரிமான கோளாறுகளை ஒரே நேரத்தில் தீர்க்கும் பாரம்பரிய கூட்டு.',
    traditionalRole: 'Respiratory antispasmodic and digestive astringent.',
    traditionalRoleTa: 'சுவாச மற்றும் செரிமான மண்டல பலப்படுத்தி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Jatiphal (Nutmeg)', tamilName: 'ஜாதிக்காய்', botanicalName: 'Myristica fragrans', role: 'Expectorant and digestive tonic', roleTa: 'கபகாரி மற்றும் செரிமான பலம்', amount: '40%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra jatiphaladya churna', 'ruthra-jatiphaladya-churna', 'ayurveda churna', 'jatiphaladya churna'],
    tamilKeywords: ['ருத்ரா ஜாதிபலாத்யா சூர்ணம் (ஜாதிக்காய் கூட்டு)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-010',
    name: 'Ruthra Kolakulathadi Churna',
    tamilName: 'ருத்ரா கோலகுலத்தாதி சூர்ணம்',
    slug: 'ruthra-kolakulathadi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['joint-mobility'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical warm poultice (Upanaha / Lepa) powder for muscular rigidity, sciatica, and chronic Vata joint pain.',
    shortDescriptionTa: 'இடுப்பு வலி, சியாட்டிகா நரம்பு வலி, மூட்டு பிடிப்புக்கு வெதுவெதுப்பாக பற்று போட பயன்படும் மூலிகைப் பொடி.',
    description: 'Ruthra Kolakulathadi Churna is a time-tested formulation prepared with Horse gram (Kulattha), Kola, and warming aromatic herbs. Applied as an external poultice with warm buttermilk or vinegar, it melts away stiffness and promotes microcirculation.',
    descriptionTa: 'கொள்ளு, இலந்தை மற்றும் வாத நிவாரண மூலிகைகள் அடங்கிய பொடி. வெதுவெதுப்பாக பற்று போடுவதன் மூலம் தசை பிடிப்பு, இடுப்பு வாதம் நீங்கும்.',
    traditionalRole: 'External analgesic poultice for Vata disorders and stiffness.',
    traditionalRoleTa: 'வாத வலி, தசை இறுக்கம் போக்கும் வெளிப் பூச்சு பொடி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Kulattha (Horse gram) & Herbs', tamilName: 'கொள்ளு மற்றும் மூலிகைகள்', botanicalName: 'Macrotyloma uniflorum', role: 'Warming Vata pacifier', roleTa: 'வாத சமன காரணி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra kolakulathadi churna', 'ruthra-kolakulathadi-churna', 'ayurveda churna', 'kolakulathadi churna'],
    tamilKeywords: ['ருத்ரா கோலகுலத்தாதி சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-011',
    name: 'Ruthra Kottamcukkadi Churna',
    tamilName: 'ருத்ரா கோட்டஞ்சுக்காதி சூர்ணம்',
    slug: 'ruthra-kottamcukkadi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['joint-mobility'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Famous Saussurea and Dry Ginger external Lepa for rheumatic swellings, sprains, and frozen shoulder.',
    shortDescriptionTa: 'மூட்டு வீக்கம், சுளுக்கு, தோள்பட்டை இறுக்கம் மற்றும் வாத வீக்கத்தை போக்கும் கோஷ்டம்-சுக்கு பற்றுப் பொடி.',
    description: 'Ruthra Kottamcukkadi Churna incorporates Kottam (Saussurea lappa), Chukku (Dry Ginger), Vayambu, and Shigru. When applied over painful, swollen joints, it rapidly reduces synovial effusion and restores freedom of movement.',
    descriptionTa: 'கோஷ்டம், சுக்கு, வசம்பு அடங்கிய புகழ்மிக்க மூலிகைக் கூட்டு. சுளுக்கு மற்றும் மூட்டு வீக்கங்களை வேகமாக குறைக்கும்.',
    traditionalRole: 'Anti-edematous, analgesic Lepa for arthritis and sprains.',
    traditionalRoleTa: 'சுளுக்கு மற்றும் வாத வீக்கம் குறைக்கும் பற்று சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Kottam & Chukku (Ginger)', tamilName: 'கோஷ்டம் & சுக்கு', botanicalName: 'Saussurea lappa & Zingiber officinale', role: 'Relieves inflammation and swelling', roleTa: 'வீக்கம் மற்றும் வலி குறைப்பு', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra kottamcukkadi churna', 'ruthra-kottamcukkadi-churna', 'ayurveda churna', 'kottamcukkadi churna'],
    tamilKeywords: ['ருத்ரா கோட்டஞ்சுக்காதி சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-012',
    name: 'Ruthra Madhusnuhi Churna',
    tamilName: 'ருத்ரா மதுஸ்னுஹி சூர்ணம் (பறங்கிப்பட்டை)',
    slug: 'ruthra-madhusnuhi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['skin-hair', 'metabolic-wellness'],
    price: 180,
    originalPrice: 220,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical Smilax china formulation for chronic skin conditions, eczema, psoriasis, and deep blood purification.',
    shortDescriptionTa: 'தோல் வியாதிகள், எக்ஸிமா, தடிப்பு மற்றும் ரத்த சுத்திக்கு பயன்படும் பாரம்பரிய பறங்கிப்பட்டை சூர்ணம்.',
    description: 'Ruthra Madhusnuhi Churna (Chobchini) acts as a powerful systemic detoxifier and blood cleanser. It flushes accumulated metabolic toxins (Ama) from dermal layers and calms stubborn skin irritations.',
    descriptionTa: 'ரத்தத்தில் உள்ள நச்சுக்களை வெளியேற்றி, நீண்ட நாள் தோல் பிரச்சனைகள், படை, நமைச்சலை குணமாக்கும் உன்னத சூர்ணம்.',
    traditionalRole: 'Blood purifier, immunomodulator, and skin restorative.',
    traditionalRoleTa: 'ரத்த சுத்தி மற்றும் தோல் நோய் நிவாரணி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Madhusnuhi (Smilax china)', tamilName: 'பறங்கிப்பட்டை', botanicalName: 'Smilax china', role: 'Dermal detox and blood purifier', roleTa: 'ரத்த சுத்தி மற்றும் தோல் நலம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra madhusnuhi churna', 'ruthra-madhusnuhi-churna', 'ayurveda churna', 'madhusnuhi churna'],
    tamilKeywords: ['ருத்ரா மதுஸ்னுஹி சூர்ணம் (பறங்கிப்பட்டை)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-013',
    name: 'Ruthra Mandukaparni Churna',
    tamilName: 'ருத்ரா மண்டூகபர்ணி சூர்ணம் (வல்லாரை)',
    slug: 'ruthra-mandukaparni-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Medhya Rasayana (Centella asiatica / Gotu Kola) powder for memory, cognitive acuity, focus, and mental calm.',
    shortDescriptionTa: 'நினைவாற்றல், மூளை சுறுசுறுப்பு, மன அமைதி தரும் உன்னத வல்லாரை சூர்ணம்.',
    description: 'Ruthra Mandukaparni Churna nourishes cerebral microvessels, enhances neuroplasticity, reduces mental fatigue, and promotes sharp memory and emotional balance.',
    descriptionTa: 'மூளை செல்களுக்கு புத்துணர்ச்சி அளித்து, ஞாபக சக்தி மற்றும் கவனக்குவிப்பை அதிகரிக்கும் பாரம்பரிய மேத்ய ரசாயனம்.',
    traditionalRole: 'Premier Medhya Rasayana for brain health and mental focus.',
    traditionalRoleTa: 'ஞாபக சக்தி மற்றும் மூளை நலம் காக்கும் மூலிகை.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Mandukaparni (Gotu Kola)', tamilName: 'வல்லாரை', botanicalName: 'Centella asiatica', role: 'Cognitive and memory booster', roleTa: 'நினைவாற்றல் பெருக்கி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra mandukaparni churna', 'ruthra-mandukaparni-churna', 'ayurveda churna', 'mandukaparni churna'],
    tamilKeywords: ['ருத்ரா மண்டூகபர்ணி சூர்ணம் (வல்லாரை)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-014',
    name: 'Ruthra Mesasrngi Churna',
    tamilName: 'ருத்ரா மேஷசிருங்கி சூர்ணம் (சிறுகுறிஞ்சான்)',
    slug: 'ruthra-mesasrngi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical Gymnema sylvestre (Sugar Destroyer) powder for healthy glucose metabolism and sugar craving management.',
    shortDescriptionTa: 'ரத்த சர்க்கரை அளவை கட்டுப்படுத்தவும், இனிப்பு நாட்டத்தை குறைக்கவும் உதவும் சிறுகுறிஞ்சான் சூர்ணம்.',
    description: 'Ruthra Mesasrngi Churna contains pure gymnemic acids that block sugar receptors on the tongue and intestinal lining, supporting optimal glycemic balance and healthy lipid profiles.',
    descriptionTa: 'கணைய செல்களை தூண்டி, ரத்தத்தில் சர்க்கரை உறிஞ்சுதலை கட்டுப்படுத்தும் உன்னத சர்க்கரை நோய் துணை மூலிகை.',
    traditionalRole: 'Glycemic regulator and metabolic booster.',
    traditionalRoleTa: 'சர்க்கரை சமநிலை மற்றும் கணைய நலம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Mesasrngi (Gymnema)', tamilName: 'சிறுகுறிஞ்சான்', botanicalName: 'Gymnema sylvestre', role: 'Glycemic balancer', roleTa: 'சர்க்கரை சமன் செய்யும் மூலிகை', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra mesasrngi churna', 'ruthra-mesasrngi-churna', 'ayurveda churna', 'mesasrngi churna'],
    tamilKeywords: ['ருத்ரா மேஷசிருங்கி சூர்ணம் (சிறுகுறிஞ்சான்)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-015',
    name: 'Ruthra Navayasa Churna',
    tamilName: 'ருத்ரா நவயாஸ சூர்ணம்',
    slug: 'ruthra-navayasa-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness'],
    price: 170,
    originalPrice: 200,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Herbo-mineral classical formulation for iron deficiency anemia, jaundice, liver sluggishness, and fatigue.',
    shortDescriptionTa: 'ரத்த சோகை, இரும்புச்சத்து குறைபாடு, கல்லீரல் பலவீனம் மற்றும் மஞ்சள் காமாலைக்கு உகந்த சூர்ணம்.',
    description: 'Ruthra Navayasa Churna combines purified Iron calx (Lauha Bhasma) with 9 herbs including Trikatu, Triphala, Musta, and Vidanga for optimal bioavailable hematinic replenishment.',
    descriptionTa: 'தூய இரும்புச்சத்து பற்பம் மற்றும் ஒன்பது மூலிகைகளின் கூட்டு. ரத்தத்தில் ஹீமோகுளோபின் அளவை உயர்த்தி உடல் சோர்வை நீக்கும்.',
    traditionalRole: 'Hematinic, liver stimulant, and Pandu (anemia) remedy.',
    traditionalRoleTa: 'ஹீமோகுளோபின் பெருக்கி மற்றும் கல்லீரல் பலம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Lauha Bhasma & 9 Herbs', tamilName: 'நவயாஸ மூலிகைகள் மற்றும் இரும்பு பற்பம்', botanicalName: 'Classical compound', role: 'Iron assimilation and liver support', roleTa: 'ரத்த உற்பத்தி மற்றும் கல்லீரல் நலம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra navayasa churna', 'ruthra-navayasa-churna', 'ayurveda churna', 'navayasa churna'],
    tamilKeywords: ['ருத்ரா நவயாஸ சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-016',
    name: 'Ruthra Nimbadi Churna',
    tamilName: 'ருத்ரா நிம்பாதி சூர்ணம்',
    slug: 'ruthra-nimbadi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['skin-hair', 'metabolic-wellness'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Neem-centered multi-herb compound for skin eruptions, boils, allergic dermatitis, and pruritus.',
    shortDescriptionTa: 'வேப்பிலை முதன்மை மூலிகையாக கொண்ட சூர்ணம். தோல் அரிப்பு, கொப்பளங்கள், ஒவ்வாமை மற்றும் நமைச்சலை போக்கும்.',
    description: 'Ruthra Nimbadi Churna combines Neem with Haridra, Daruharidra, and Triphala to clear Pitta-Kapha skin toxins, purify the lymphatic system, and restore clear, healthy skin.',
    descriptionTa: 'வேம்பு, மஞ்சள், மரமஞ்சள் அடங்கிய தோல் நோய் தீர்க்கும் பாரம்பரிய சூர்ணம். ரத்த நச்சுக்களை அகற்றி தோல் பளபளப்பை தரும்.',
    traditionalRole: 'Blood purifier, antibacterial, and dermatological tonic.',
    traditionalRoleTa: 'தோல் நமைச்சல் போக்கும் ரத்த சுத்தி சூர்ணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Nimba (Neem) & Herbs', tamilName: 'வேம்பு மற்றும் மூலிகைகள்', botanicalName: 'Azadirachta indica', role: 'Blood purifier and antibacterial', roleTa: 'தோல் நோய் தடுப்பான்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra nimbadi churna', 'ruthra-nimbadi-churna', 'ayurveda churna', 'nimbadi churna'],
    tamilKeywords: ['ருத்ரா நிம்பாதி சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-017',
    name: 'Ruthra Nimbapatra Churna',
    tamilName: 'ருத்ரா நிம்பபத்ர சூர்ணம் (வேப்பிலை)',
    slug: 'ruthra-nimbapatra-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['skin-hair', 'metabolic-wellness'],
    price: 130,
    originalPrice: 150,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Pure single-origin Azadirachta indica leaf powder for systemic blood cleansing, scalp care, and microbial balance.',
    shortDescriptionTa: 'தூய வேப்பிலை சூர்ணம். ரத்த சுத்தி, கிருமி நாசினி மற்றும் தோல்/கூந்தல் பராமரிப்பிற்கு உகந்தது.',
    description: 'Ruthra Nimbapatra Churna contains 100% clean-milled neem leaves with potent bitter principles (Nimbidin, Nimbin) that cleanse toxins and pacify acute Pitta-Kapha disorders.',
    descriptionTa: 'இயற்கையான முறையில் உலர்த்தப்பட்ட வேப்பிலைப் பொடி. கிருமி நாசினியாகவும், ரத்தத்தை சுத்திகரிக்கவும் பயன்படுகிறது.',
    traditionalRole: 'Single herb antibacterial and Pitta-Kapha pacifier.',
    traditionalRoleTa: 'இயற்கை கிருமி நாசினி மற்றும் ரத்த சுத்தி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Nimbapatra (Neem Leaves)', tamilName: 'வேப்பிலை', botanicalName: 'Azadirachta indica', role: 'Antibacterial and detoxifier', roleTa: 'கிருமி நாசினி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra nimbapatra churna', 'ruthra-nimbapatra-churna', 'ayurveda churna', 'nimbapatra churna'],
    tamilKeywords: ['ருத்ரா நிம்பபத்ர சூர்ணம் (வேப்பிலை)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-018',
    name: 'Ruthra Pusyanuga Churna',
    tamilName: 'ருத்ரா புஷ்யானுக சூர்ணம்',
    slug: 'ruthra-pusyanuga-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['womens-wellness'],
    price: 180,
    originalPrice: 220,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Premier classical Ayurvedic formulation for women\'s uterine health, menorrhagia, and leukorrhea.',
    shortDescriptionTa: 'பெண்களின் கர்ப்பப்பை நலம், அதிக உதிரப்போக்கு மற்றும் வெள்ளைப்படுதலை குணமாக்கும் முதன்மையான சூர்ணம்.',
    description: 'Ruthra Pusyanuga Churna is compounded with 25 balancing botanicals including Lodhra, Patha, and red sandalwood. Taken with honey or rice water, it tones uterine musculature and regulates heavy menstrual bleeding.',
    descriptionTa: 'லோத்ரா, செஞ்சந்தனம் உள்ளிட்ட மூலிகைகள் அடங்கிய கர்ப்பப்பை பலப்படுத்தும் உன்னத சூர்ணம்.',
    traditionalRole: 'Uterine astringent and hormonal balancer.',
    traditionalRoleTa: 'மகளிர் நலம் மற்றும் கர்ப்பப்பை பலப்படுத்தி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Lodhra & 25 Botanicals', tamilName: 'லோத்ரா மற்றும் மூலிகைகள்', botanicalName: 'Symplocos racemosa', role: 'Uterine tonic', roleTa: 'கர்ப்பப்பை பலம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra pusyanuga churna', 'ruthra-pusyanuga-churna', 'ayurveda churna', 'pusyanuga churna'],
    tamilKeywords: ['ருத்ரா புஷ்யானுக சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-019',
    name: 'Ruthra Rakta Punarnava Churna',
    tamilName: 'ருத்ரா ரக்த புனர்நவா சூர்ணம் (சாரணை)',
    slug: 'ruthra-rakta-punarnava-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness'],
    price: 150,
    originalPrice: 180,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Renowned Boerhavia diffusa root powder for renal rejuvenation, fluid balance, and edema relief.',
    shortDescriptionTa: 'சிறுநீரக செயல்பாடு, நீர்ச்சத்து சமநிலை மற்றும் உடல் வீக்கத்தை போக்கும் சிவப்பு புனர்நவா சூர்ணம்.',
    description: 'Ruthra Rakta Punarnava Churna acts as a natural diuretic that clears excess water retention, flushes urinary micro-crystals, and revitalizes kidney nephron function.',
    descriptionTa: 'சிறுநீரகங்களை பாதுகாத்து, கை கால் வீக்கம் மற்றும் நீர் அடைப்பை நீக்கும் பாரம்பரிய மூலிகை சூர்ணம்.',
    traditionalRole: 'Renal restorative, diuretic, and anti-edematous.',
    traditionalRoleTa: 'சிறுநீரக பாதுகாப்பு மற்றும் நீர் பெருக்கி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Rakta Punarnava Root', tamilName: 'சிவப்பு மூக்கிரட்டை / சாரணை', botanicalName: 'Boerhavia diffusa', role: 'Diuretic and kidney tonic', roleTa: 'சிறுநீரக நலம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra rakta punarnava churna', 'ruthra-rakta-punarnava-churna', 'ayurveda churna', 'rakta punarnava churna'],
    tamilKeywords: ['ருத்ரா ரக்த புனர்நவா சூர்ணம் (சாரணை)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-020',
    name: 'Ruthra Rasnadi Churna',
    tamilName: 'ருத்ரா ராஸ்னாதி சூர்ணம்',
    slug: 'ruthra-rasnadi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['respiratory', 'joint-mobility'],
    price: 140,
    originalPrice: 160,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical cranial application powder to prevent head colds, sinus congestion, and headache after hair wash.',
    shortDescriptionTa: 'தலைக்குளித்த பின் நீர் கோர்த்தல், தலைபாரம், சளி மற்றும் ஒற்றைத் தலைவலியை தடுக்கும் உச்சிப் பொடி.',
    description: 'Ruthra Rasnadi Churna is traditionally rubbed onto the crown of the head (Bregma) after bathing. Its warming botanicals (Rasna, Ashwagandha, Devadaru) absorb moisture and prevent sinusitis.',
    descriptionTa: 'ராஸ்னா, தேவதாரு உள்ளிட்ட மூலிகைகளின் கூட்டு. உச்சந்தலையில் தேய்ப்பதால் சைனஸ், தலைபாரம் மற்றும் சளி பிடிக்காமல் தடுக்கும்.',
    traditionalRole: 'External cranial protective powder and anti-catarrhal.',
    traditionalRoleTa: 'உச்சி தேய்ப்பு சூர்ணம், தலைபாரம் நிவாரணி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Rasna & Devadaru blend', tamilName: 'ராஸ்னா & தேவதாரு', botanicalName: 'Alpinia galanga & Cedrus deodara', role: 'Absorbs cranial moisture', roleTa: 'தலை நீர் உறிஞ்சி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra rasnadi churna', 'ruthra-rasnadi-churna', 'ayurveda churna', 'rasnadi churna'],
    tamilKeywords: ['ருத்ரா ராஸ்னாதி சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-021',
    name: 'Ruthra Sarasvata Churna',
    tamilName: 'ருத்ரா சரஸ்வத சூர்ணம்',
    slug: 'ruthra-sarasvata-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness'],
    price: 190,
    originalPrice: 230,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical nerve tonic formulation for speech clarity, intellect, memory retention, and mental composure.',
    shortDescriptionTa: 'பேச்சு தெளிவு, புத்திக்கூர்மை, ஞாபக சக்தி மற்றும் நரம்பு அமைதி தரும் பாரம்பரிய சரஸ்வத சூர்ணம்.',
    description: 'Ruthra Sarasvata Churna incorporates Brahmi, Vacha, Shankhapushpi, and Kushtha. It supports students, professionals, and the elderly seeking sharp cognitive processing and articulate speech.',
    descriptionTa: 'பிராமி, வசம்பு, சங்குபுஷ்பி அடங்கிய உன்னத அறிவு டானிக். திக்குவாய், ஞாபக மறதி மற்றும் நரம்பு சோர்வை போக்கும்.',
    traditionalRole: 'Nootropic, Medhya Rasayana, and speech enhancer.',
    traditionalRoleTa: 'அறிவுத்திறன் மற்றும் நினைவாற்றல் பெருக்கி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Brahmi & Vacha compound', tamilName: 'பிராமி மற்றும் வசம்பு கூட்டு', botanicalName: 'Bacopa monnieri & Acorus calamus', role: 'Nerve and intellect booster', roleTa: 'நரம்பு மற்றும் மூளை ஊக்கி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra sarasvata churna', 'ruthra-sarasvata-churna', 'ayurveda churna', 'sarasvata churna'],
    tamilKeywords: ['ருத்ரா சரஸ்வத சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-022',
    name: 'Ruthra Sarpagandha Churna',
    tamilName: 'ருத்ரா சர்பகந்தா சூர்ணம் (சிவனமல்பொடி)',
    slug: 'ruthra-sarpagandha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['metabolic-wellness'],
    price: 220,
    originalPrice: 260,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical Rauvolfia serpentina root powder for high blood pressure, insomnia, and nervous anxiety.',
    shortDescriptionTa: 'உயர் ரத்த அழுத்தம், தூக்கமின்மை மற்றும் பதட்டத்தை தணிக்கும் உன்னத சர்பகந்தா சூர்ணம்.',
    description: 'Ruthra Sarpagandha Churna is standardized from wild Rauvolfia roots. It naturally calms an agitated nervous system, stabilizes elevated arterial pressure, and induces serene sleep.',
    descriptionTa: 'ரத்த அழுத்தத்தை சீராக்கி, நரம்பு மண்டலத்தை அமைதிப்படுத்தி நிம்மதியான தூக்கத்தை அளிக்கும் பாரம்பரிய மூலிகை சூர்ணம்.',
    traditionalRole: 'Antihypertensive and central nervous system sedative.',
    traditionalRoleTa: 'ரத்த அழுத்த சமன் மற்றும் தூக்கம் தூண்டி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Sarpagandha Root', tamilName: 'சர்பகந்தா வேர்', botanicalName: 'Rauvolfia serpentina', role: 'Hypotensive and sedative', roleTa: 'ரத்த அழுத்தம் தணிப்பான்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra sarpagandha churna', 'ruthra-sarpagandha-churna', 'ayurveda churna', 'sarpagandha churna'],
    tamilKeywords: ['ருத்ரா சர்பகந்தா சூர்ணம் (சிவனமல்பொடி)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-023',
    name: 'Ruthra Sitopaladhi Churna',
    tamilName: 'ருத்ரா சீதோபலாதி சூர்ணம்',
    slug: 'ruthra-sitopaladhi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['respiratory'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Famous sweet botanical blend for dry/wet cough, bronchial irritation, chest congestion, and debility.',
    shortDescriptionTa: 'இருமல், சளி, தொண்டை கரகரப்பு, மூச்சுக்குழாய் அழற்சி மற்றும் காய்ச்சல் பிந்தைய சோர்வை போக்கும் சீதோபலாதி சூர்ணம்.',
    description: 'Ruthra Sitopaladhi Churna blends sugar candy (Mishri), Vamshalochana (Bamboo silica), Pippali, Ela, and Tvak. Taken with raw honey and ghee, it coats raw bronchial airways and promotes rapid recovery.',
    descriptionTa: 'படிக வெல்லம், மூங்கில் உப்பு, திப்பிலி, ஏலக்காய், இலவங்கப்பட்டை அடங்கிய சுவையான இருமல் நிவாரணி. குழந்தைகளுக்கும் ஏற்றது.',
    traditionalRole: 'Gentle demulcent, antitussive, and lung rejuvenator.',
    traditionalRoleTa: 'இருமல் நிவாரணி மற்றும் நுரையீரல் பலப்படுத்தி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Mishri & Vamshalochana blend', tamilName: 'படிக வெல்லம் & மூங்கில் உப்பு கூட்டு', botanicalName: 'Bambusa arundinacea compound', role: 'Demulcent expectorant', roleTa: 'தொண்டை மென்மைப்படுத்தி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra sitopaladhi churna', 'ruthra-sitopaladhi-churna', 'ayurveda churna', 'sitopaladhi churna'],
    tamilKeywords: ['ருத்ரா சீதோபலாதி சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-024',
    name: 'Ruthra Tulasi Churna',
    tamilName: 'ருத்ரா துளசி சூர்ணம்',
    slug: 'ruthra-tulasi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['respiratory', 'metabolic-wellness'],
    price: 130,
    originalPrice: 150,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Pure Holy Basil (Ocimum sanctum) powder for respiratory immunity, seasonal allergies, and cellular detox.',
    shortDescriptionTa: 'நோய் எதிர்ப்பு சக்தி, சளி, தும்மல் மற்றும் சுவாச நலம் காக்கும் தூய துளசி சூர்ணம்.',
    description: 'Ruthra Tulasi Churna contains pure milled Rama & Krishna Tulsi leaves rich in eugenol and essential terpenes to clear mucous congestion and enhance respiratory vital capacity.',
    descriptionTa: 'பாரம்பரிய புனித துளசி இலை பொடி. தினசரி வெந்நீரில் பருகி வர கப நோய்கள் மற்றும் ஒவ்வாமை நீங்கும்.',
    traditionalRole: 'Respiratory tonic, antiviral, and immunomodulator.',
    traditionalRoleTa: 'சுவாச பாதை பாதுகாப்பு மற்றும் நோய் எதிர்ப்பு சக்தி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Tulasi Leaves', tamilName: 'துளசி இலை', botanicalName: 'Ocimum sanctum', role: 'Antiviral and bronchodilator', roleTa: 'சுவாச நலன்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra tulasi churna', 'ruthra-tulasi-churna', 'ayurveda churna', 'tulasi churna'],
    tamilKeywords: ['ருத்ரா துளசி சூர்ணம்', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-025',
    name: 'Ruthra Yasti Churna',
    tamilName: 'ருத்ரா யஷ்டி சூர்ணம் (அதிமதுரம்)',
    slug: 'ruthra-yasti-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ['respiratory', 'digestive-wellness', 'skin-hair'],
    price: 150,
    originalPrice: 180,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical Glycyrrhiza glabra (Licorice) root powder for sore throat, gastric ulcers, and skin brightening.',
    shortDescriptionTa: 'தொண்டை வலி, குரல் கம்மல், வயிற்றுப்புண் மற்றும் தோல் பளபளப்பிற்கு உதவும் அதிமதுர சூர்ணம்.',
    description: 'Ruthra Yasti Churna (Mulethi) provides soothing mucosal protection for inflamed throats and hyperacidic stomach linings while enhancing natural melanin regulation.',
    descriptionTa: 'குரல்வளை மற்றும் வயிற்றுப் புண்களை ஆற்றும் அதிமதுர சூர்ணம். தொண்டை கரகரப்புக்கு உடனடி நிவாரணம் தரும்.',
    traditionalRole: 'Demulcent, mucosal protector, and voice restorative.',
    traditionalRoleTa: 'தொண்டை இதம் மற்றும் குடல் புண் நிவாரணி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Yastimadhu Root (Licorice)', tamilName: 'அதிமதுரம்', botanicalName: 'Glycyrrhiza glabra', role: 'Demulcent and ulcer healer', roleTa: 'தொண்டை மற்றும் குடல் புண் ஆற்றி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra yasti churna', 'ruthra-yasti-churna', 'ayurveda churna', 'yasti churna'],
    tamilKeywords: ['ருத்ரா யஷ்டி சூர்ணம் (அதிமதுரம்)', 'சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-026',
    name: 'Ruthra Amruthotharam Kvatha Churna',
    tamilName: 'ருத்ரா அம்ருதோத்தரம் க்வாத சூர்ணம்',
    slug: 'ruthra-amruthotharam-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['metabolic-wellness', 'digestive-wellness'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical three-herb decoction (Guduchi, Haritaki, Shunthi) for intermittent fevers, sluggish liver, and Ama toxicity.',
    shortDescriptionTa: 'சீந்தில், கடுக்காய், சுக்கு கலந்த உன்னத குடிநீர். காய்ச்சல், கல்லீரல் மந்தம் மற்றும் உடல் நச்சுகளை நீக்கும்.',
    description: 'Ruthra Amruthotharam Kvatha Churna is a prime classical antipyretic decoction that eliminates deep metabolic toxins (Ama), cleanses the lymphatic channels, and restores normal digestion.',
    descriptionTa: 'காய்ச்சலின் போது ஏற்படும் உடல் சோர்வு, பசியின்மை மற்றும் அஜீரணத்தை போக்கும் பாரம்பரிய கஷாயப் பொடி.',
    traditionalRole: 'Antipyretic, Ama-detoxifier, and hepatic promoter.',
    traditionalRoleTa: 'காய்ச்சல் மற்றும் நச்சு நீக்கி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Guduchi (Tinospora cordifolia)', tamilName: 'சீந்தில் கொடி', botanicalName: 'Tinospora cordifolia', role: 'Immunomodulator and antipyretic', roleTa: 'காய்ச்சல் தணிப்பான்', amount: '50%' },
      { name: 'Haritaki (Terminalia chebula)', tamilName: 'கடுக்காய்', botanicalName: 'Terminalia chebula', role: 'Mild laxative and detoxifier', roleTa: 'குடல் சுத்தி', amount: '30%' },
      { name: 'Shunthi (Dry Ginger)', tamilName: 'சுக்கு', botanicalName: 'Zingiber officinale', role: 'Kindles digestive fire', roleTa: 'செரிமான தூண்டி', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra amruthotharam kvatha churna', 'ruthra-amruthotharam-kvatha-churna', 'ayurveda kvatha-churna', 'amruthotharam kvatha churna'],
    tamilKeywords: ['ருத்ரா அம்ருதோத்தரம் க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-027',
    name: 'Ruthra Astavarga Kvatha Churna',
    tamilName: 'ருத்ரா அஷ்டவர்க்க க்வாத சூர்ணம்',
    slug: 'ruthra-astavarga-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['joint-mobility'],
    price: 170,
    originalPrice: 200,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Eight-herb classical formulation for rheumatic joint stiffness, hemiplegia, and neurological Vata conditions.',
    shortDescriptionTa: 'எட்டு மூலிகைகள் கலந்த வாத நிவாரண கஷாயப் பொடி. பக்கவாதம், மூட்டு பிடிப்பு மற்றும் நரம்பு வலிகளுக்கு உகந்தது.',
    description: 'Ruthra Astavarga Kvatha Churna combines 8 potent neuro-muscular botanicals (Bala, Sahachara, Eranda, Rasna, etc.) to soothe pinched nerves and alleviate severe Vata pain.',
    descriptionTa: 'வாத நாடிகளை பலப்படுத்தி, தசை வலி மற்றும் நரம்பு பலவீனத்தை போக்கும் பாரம்பரிய கஷாயம்.',
    traditionalRole: 'Vata-pacifying, neuro-restorative decoction.',
    traditionalRoleTa: 'வாத நாடி பலம் மற்றும் மூட்டு வலி நிவாரணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Astavarga Herbal Blend', tamilName: 'அஷ்டவர்க்க மூலிகைகள்', botanicalName: 'Classical 8-herb compound', role: 'Calms Vata and muscle stiffness', roleTa: 'வாத தணிப்பான்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra astavarga kvatha churna', 'ruthra-astavarga-kvatha-churna', 'ayurveda kvatha-churna', 'astavarga kvatha churna'],
    tamilKeywords: ['ருத்ரா அஷ்டவர்க்க க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-028',
    name: 'Ruthra Dasamula Kvatha Churna',
    tamilName: 'ருத்ரா தசமூல க்வாத சூர்ணம்',
    slug: 'ruthra-dasamula-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['respiratory', 'womens-wellness', 'joint-mobility'],
    price: 180,
    originalPrice: 210,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Ten classical medicinal roots decoction for postpartum recovery, respiratory distress, and generalized body aches.',
    shortDescriptionTa: 'பத்து மூலிகை வேர்களின் கூட்டு. பிரசவத்திற்கு பிந்தைய நலம், இருமல் மற்றும் உடல் வலிகளை போக்கும்.',
    description: 'Ruthra Dasamula Kvatha Churna brings together 5 tree roots (Brihat Panchamula) and 5 shrub roots (Laghu Panchamula) to pacify systemic Vata and support respiratory harmony.',
    descriptionTa: 'தசமூலம் எனப்படும் பத்து புனித வேர்கள் அடங்கிய கஷாயப் பொடி. உடல் வலிகளை நீக்கி புத்துணர்ச்சி தரும்.',
    traditionalRole: 'Systemic Vata-Kapha pacifier and postpartum tonic.',
    traditionalRoleTa: 'வாத நிவாரணம் மற்றும் பிரசவ நலம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Dasamula (10 Sacred Roots)', tamilName: 'தசமூல வேர்கள்', botanicalName: '10 Roots Compound', role: 'Deep anti-inflammatory and restorative', roleTa: 'உடல் நலம் காக்கும் பத்து வேர்கள்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra dasamula kvatha churna', 'ruthra-dasamula-kvatha-churna', 'ayurveda kvatha-churna', 'dasamula kvatha churna'],
    tamilKeywords: ['ருத்ரா தசமூல க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-029',
    name: 'Ruthra Dasamula Katutraya Kvatha Churna',
    tamilName: 'ருத்ரா தசமூல கடுத்ரய க்வாத சூர்ணம்',
    slug: 'ruthra-dasamula-katutraya-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['respiratory'],
    price: 180,
    originalPrice: 220,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Ten roots combined with three warming pungents (Trikatu) for stubborn phlegm, bronchitis, and chest tightness.',
    shortDescriptionTa: 'தசமூலம் மற்றும் திரிகடுகு கலந்த கஷாயப் பொடி. நெஞ்சு சளி, ஆஸ்துமா மற்றும் மூச்சடைப்பை நீக்கும்.',
    description: 'Ruthra Dasamula Katutraya Kvatha Churna expels deep-seated chest mucous, expands constricted bronchia, and promotes easy unobstructed breathing.',
    descriptionTa: 'நுரையீரலில் தங்கியுள்ள கபத்தை வெளியேற்றி, மூச்சுக்குழாயை விரிவடையச் செய்து சுவாசத்தை எளிதாக்கும்.',
    traditionalRole: 'Bronchodilator, mucolytic, and Kapha-Vata pacifier.',
    traditionalRoleTa: 'கபகாரி மற்றும் சுவாச பாதை விரிப்பான்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Dasamula & Trikatu', tamilName: 'தசமூலம் மற்றும் திரிகடுகு', botanicalName: '10 Roots with Piper & Ginger', role: 'Expels phlegm and opens airways', roleTa: 'சளி வெளியேற்றி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra dasamula katutraya kvatha churna', 'ruthra-dasamula-katutraya-kvatha-churna', 'ayurveda kvatha-churna', 'dasamula katutraya kvatha churna'],
    tamilKeywords: ['ருத்ரா தசமூல கடுத்ரய க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-030',
    name: 'Ruthra Draksadi Kvatha Churna',
    tamilName: 'ருத்ரா திராக்ஷாதி க்வாத சூர்ணம்',
    slug: 'ruthra-draksadi-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['digestive-wellness', 'metabolic-wellness'],
    price: 170,
    originalPrice: 200,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Raisin and cooling herb decoction for excessive thirst, hangover, internal heat, and burning micturition.',
    shortDescriptionTa: 'உலர் திராட்சை அடங்கிய குளிர்ச்சி கஷாயம். உடல் சூடு, அதீத தாகம், மயக்கம் மற்றும் பித்த வாந்தியை குணமாக்கும்.',
    description: 'Ruthra Draksadi Kvatha Churna blends Draksha (raisins), Madhuka, Chandana, and Usheera to quickly pacify aggravated Pitta dosha and rehydrate the body.',
    descriptionTa: 'பித்த அதிகரிப்பால் உண்டாகும் நெஞ்செரிச்சல், நாவறட்சி மற்றும் தலைசுற்றலை தணிக்கும் உன்னத கஷாயம்.',
    traditionalRole: 'Cooling Pitta pacifier, antipyretic, and thirst quencher.',
    traditionalRoleTa: 'பித்த சமனி மற்றும் உடல் குளிர்ச்சி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Draksha (Raisins) & Herbs', tamilName: 'திராட்சை மற்றும் மூலிகைகள்', botanicalName: 'Vitis vinifera compound', role: 'Soothes internal burning and thirst', roleTa: 'தாகம் மற்றும் சூடு தணிப்பான்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra draksadi kvatha churna', 'ruthra-draksadi-kvatha-churna', 'ayurveda kvatha-churna', 'draksadi kvatha churna'],
    tamilKeywords: ['ருத்ரா திராக்ஷாதி க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-031',
    name: 'Ruthra Gandharvahasthadi Kvatha Churna',
    tamilName: 'ருத்ரா கந்தர்வஹஸ்தாதி க்வாத சூர்ணம் (ஆமணக்கு வேர்)',
    slug: 'ruthra-gandharvahasthadi-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['digestive-wellness', 'joint-mobility'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Castor root classical decoction for chronic constipation, lower back pain, and trapped abdominal gas.',
    shortDescriptionTa: 'ஆமணக்கு வேர் அடங்கிய கஷாயப் பொடி. மலச்சிக்கல், இடுப்பு வலி மற்றும் வாயு பிடிப்பை நீக்கும்.',
    description: 'Ruthra Gandharvahasthadi Kvatha Churna utilizes Ricinus communis root with carminatives to stimulate intestinal peristalsis and downward Vata motion (Apana Vayu).',
    descriptionTa: 'குடல் இயக்கத்தை சீராக்கி, ஆசனவாய் இறுக்கம் மற்றும் இடுப்பு சியாட்டிகா வலியை போக்கும் பாரம்பரிய கஷாயம்.',
    traditionalRole: 'Anulomana (downward wind regulator) and gentle laxative.',
    traditionalRoleTa: 'மலச்சிக்கல் நீக்கி மற்றும் வாயு சமனி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Gandharvahasta (Castor Root)', tamilName: 'ஆமணக்கு வேர்', botanicalName: 'Ricinus communis', role: 'Promotes downward Vata flow', roleTa: 'குடல் இயக்கம் தூண்டி', amount: '60%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra gandharvahasthadi kvatha churna', 'ruthra-gandharvahasthadi-kvatha-churna', 'ayurveda kvatha-churna', 'gandharvahasthadi kvatha churna'],
    tamilKeywords: ['ருத்ரா கந்தர்வஹஸ்தாதி க்வாத சூர்ணம் (ஆமணக்கு வேர்)', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-032',
    name: 'Ruthra Guduchyaadi Kvatha Churna',
    tamilName: 'ருத்ரா குடூச்யாதி க்வாத சூர்ணம் (சீந்தில் கஷாயம்)',
    slug: 'ruthra-guduchyaadi-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['metabolic-wellness', 'digestive-wellness'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Tinospora cordifolia compound for high fever, jaundice, bitter taste in mouth, and liver detox.',
    shortDescriptionTa: 'சீந்தில் முதன்மை மூலிகையாக கொண்ட கஷாயம். காய்ச்சல், கல்லீரல் வீக்கம், மஞ்சள் காமாலைக்கு உகந்தது.',
    description: 'Ruthra Guduchyaadi Kvatha Churna purifies the blood, enhances white blood cell defense, and revitalizes liver parenchyma function.',
    descriptionTa: 'ரத்த அணுக்களை பாதுகாத்து, உடலின் நோய் எதிர்ப்பு ஆற்றலை பலப்படுத்தும் பாரம்பரிய கஷாயப் பொடி.',
    traditionalRole: 'Hepato-protective, antiviral, and immunomodulatory decoction.',
    traditionalRoleTa: 'கல்லீரல் பாதுகாப்பு மற்றும் நோய் எதிர்ப்பு.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Guduchi & Bitter Botanicals', tamilName: 'சீந்தில் மற்றும் மூலிகைகள்', botanicalName: 'Tinospora cordifolia compound', role: 'Immunity and liver detox', roleTa: 'நோய் எதிர்ப்பு மற்றும் நச்சு நீக்கம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra guduchyaadi kvatha churna', 'ruthra-guduchyaadi-kvatha-churna', 'ayurveda kvatha-churna', 'guduchyaadi kvatha churna'],
    tamilKeywords: ['ருத்ரா குடூச்யாதி க்வாத சூர்ணம் (சீந்தில் கஷாயம்)', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-033',
    name: 'Ruthra Indukantham Kvathachurna',
    tamilName: 'ருத்ரா இந்து காந்தம் க்வாத சூர்ணம்',
    slug: 'ruthra-indukantham-kvathachurna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['digestive-wellness', 'metabolic-wellness'],
    price: 180,
    originalPrice: 220,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Premier rejuvenating gastroprotective decoction for peptic ulcers, abdominal colic, and emaciation.',
    shortDescriptionTa: 'குடல் புண், வயிற்று வலி, பசியின்மை மற்றும் உடல் மெலிவை போக்கும் உன்னத ஊட்டச்சத்து கஷாயம்.',
    description: 'Ruthra Indukantham Kvathachurna heals gastric mucosal ulcerations, kindles sluggish metabolic fire, and restores healthy physical weight and stamina.',
    descriptionTa: 'செரிமான மண்டலத்தை பலப்படுத்தி, அல்சர் மற்றும் வயிற்று வலியை ஆற்றும் பாரம்பரிய ஊட்டச்சத்து கஷாயப் பொடி.',
    traditionalRole: 'Gastroprotective, Ulcer healer, and immunity enhancer.',
    traditionalRoleTa: 'வயிற்றுப் புண் ஆற்றி மற்றும் உடல் பலம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Panchakola & Dasamula', tamilName: 'பஞ்சகோலம் மற்றும் தசமூலம்', botanicalName: 'Digestive & restorative blend', role: 'Heals gastric lining', roleTa: 'குடல் புண் ஆற்றுதல்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra indukantham kvathachurna', 'ruthra-indukantham-kvathachurna', 'ayurveda kvatha-churna', 'indukantham kvathachurna'],
    tamilKeywords: ['ருத்ரா இந்து காந்தம் க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-034',
    name: 'Ruthra Maharasnadhi Kvathachurna',
    tamilName: 'ருத்ரா மகாராஸ்னாதி க்வாத சூர்ணம்',
    slug: 'ruthra-maharasnadhi-kvathachurna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['joint-mobility'],
    price: 190,
    originalPrice: 230,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Grand 26-herb classical formulation for severe osteoarthritis, spondylosis, sciatica, and chronic Vata pains.',
    shortDescriptionTa: 'இருபத்தாறு மூலிகைகள் கலந்த மகத்தான வாத நிவாரண கஷாயம். கழுத்து வலி, இடுப்பு வலி மற்றும் மூட்டு தேய்மானத்திற்கு உகந்தது.',
    description: 'Ruthra Maharasnadhi Kvathachurna is the supreme classical decoction for degenerative joint diseases, lumbar spondylosis, and motor dysfunction.',
    descriptionTa: 'மூட்டுகளின் தேய்மானத்தை தடுத்து, கடுமையான வலி மற்றும் வீக்கத்தை போக்கும் முதன்மையான ஆயுர்வேத கஷாயம்.',
    traditionalRole: 'Supreme anti-arthritic and neuro-muscular decoction.',
    traditionalRoleTa: 'முதன்மையான மூட்டு மற்றும் நரம்பு வலி நிவாரணி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Rasna & 26 Classical Herbs', tamilName: 'ராஸ்னா மற்றும் 26 மூலிகைகள்', botanicalName: 'Alpinia galanga compound', role: 'Deep joint nourishment', roleTa: 'மூட்டு மற்றும் நரம்பு நலம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra maharasnadhi kvathachurna', 'ruthra-maharasnadhi-kvathachurna', 'ayurveda kvatha-churna', 'maharasnadhi kvathachurna'],
    tamilKeywords: ['ருத்ரா மகாராஸ்னாதி க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-035',
    name: 'Ruthra Manjstadhi Kvathachurna',
    tamilName: 'ருத்ரா மஞ்சிஷ்டாதி க்வாத சூர்ணம்',
    slug: 'ruthra-manjstadhi-kvathachurna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['skin-hair', 'metabolic-wellness'],
    price: 180,
    originalPrice: 220,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Premier lymphatic and blood purifying decoction for chronic skin diseases, boils, eczema, and gout.',
    shortDescriptionTa: 'மஞ்சிஷ்டா அடங்கிய ரத்த சுத்தி கஷாயம். தோல் வியாதிகள், படை, சொரியாசிஸ் மற்றும் மூட்டு வாதத்திற்கு உகந்தது.',
    description: 'Ruthra Manjstadhi Kvathachurna breaks down circulating immune complexes and purifies micro-lymphatic channels to restore crystal clear skin.',
    descriptionTa: 'ரத்தத்தில் உள்ள கழிவுகளை அகற்றி, தோல் நோய்களை வேரிலிருந்து குணப்படுத்தும் உன்னத கஷாயப் பொடி.',
    traditionalRole: 'Systemic blood purifier, alterative, and dermatological tonic.',
    traditionalRoleTa: 'ரத்த சுத்தி மற்றும் தோல் நோய் நிவாரணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Manjistha (Rubia cordifolia) & Herbs', tamilName: 'மஞ்சிஷ்டா மற்றும் மூலிகைகள்', botanicalName: 'Rubia cordifolia compound', role: 'Deep blood cleanser', roleTa: 'ரத்த சுத்தி காரணி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra manjstadhi kvathachurna', 'ruthra-manjstadhi-kvathachurna', 'ayurveda kvatha-churna', 'manjstadhi kvathachurna'],
    tamilKeywords: ['ருத்ரா மஞ்சிஷ்டாதி க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-036',
    name: 'Ruthra Nayopayam Kvatha Churna',
    tamilName: 'ருத்ரா நயோபாயம் க்வாத சூர்ணம்',
    slug: 'ruthra-nayopayam-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['respiratory'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Simple yet powerful classical formula (Bala, Jiraka, Shunthi) for bronchial asthma, gasping, and wheezing.',
    shortDescriptionTa: 'சிற்றாமுட்டி, சீரகம், சுக்கு அடங்கிய கஷாயம். ஆஸ்துமா, மூச்சுத்திணறல் மற்றும் நெஞ்சு சளியை நீக்கும்.',
    description: 'Ruthra Nayopayam Kvatha Churna calms respiratory bronchospasms, strengthens thoracic respiratory muscles, and eases breathing.',
    descriptionTa: 'சுவாச குழாய்களை தளர்த்தி, இரைப்பு மற்றும் மூச்சுத்திணறலை விரைவாக கட்டுப்படுத்தும் பாரம்பரிய கஷாயம்.',
    traditionalRole: 'Bronchodilator and respiratory antispasmodic.',
    traditionalRoleTa: 'ஆஸ்துமா மற்றும் மூச்சுத்திணறல் நிவாரணி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Bala, Jiraka & Shunthi', tamilName: 'சிற்றாமுட்டி, சீரகம் & சுக்கு', botanicalName: 'Sida cordifolia, Cuminum & Zingiber', role: 'Relieves airway spasms', roleTa: 'சுவாச தசை தளர்த்தி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra nayopayam kvatha churna', 'ruthra-nayopayam-kvatha-churna', 'ayurveda kvatha-churna', 'nayopayam kvatha churna'],
    tamilKeywords: ['ருத்ரா நயோபாயம் க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-037',
    name: 'Ruthra Nimbadi Kvatha Churna',
    tamilName: 'ருத்ரா நிம்பாதி க்வாத சூர்ணம் (வேம்பு கஷாயம்)',
    slug: 'ruthra-nimbadi-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['skin-hair', 'metabolic-wellness'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Neem and bitter herb decoction for non-healing ulcers, infected wounds, and allergic skin lesions.',
    shortDescriptionTa: 'வேம்பு அடங்கிய கிருமி நாசினி கஷாயம். ஆறாத புண்கள், தோல் அரிப்பு மற்றும் ரத்த நச்சுகளை போக்கும்.',
    description: 'Ruthra Nimbadi Kvatha Churna exhibits potent systemic antibacterial, antifungal, and wound-granulating properties.',
    descriptionTa: 'உடலில் உள்ள கிருமி தொற்றுகளை அழித்து, புண்களை விரைவாக ஆற்றும் உன்னத கஷாயப் பொடி.',
    traditionalRole: 'Antibacterial, wound healer, and blood cleanser.',
    traditionalRoleTa: 'கிருமி நாசினி மற்றும் புண் ஆற்றி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Nimba & Bitter Herbs', tamilName: 'வேம்பு மற்றும் கசப்பு மூலிகைகள்', botanicalName: 'Azadirachta indica compound', role: 'Antimicrobial detoxifier', roleTa: 'தோல் நோய் தடுப்பு', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra nimbadi kvatha churna', 'ruthra-nimbadi-kvatha-churna', 'ayurveda kvatha-churna', 'nimbadi kvatha churna'],
    tamilKeywords: ['ருத்ரா நிம்பாதி க்வாத சூர்ணம் (வேம்பு கஷாயம்)', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-038',
    name: 'Ruthra Nisakathakadi Kvatha Churna',
    tamilName: 'ருத்ரா நிசாகதகாதி க்வாத சூர்ணம்',
    slug: 'ruthra-nisakathakadi-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['metabolic-wellness'],
    price: 180,
    originalPrice: 220,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Premier classical formulation for diabetes mellitus (Prameha) and diabetic neuropathy prevention.',
    shortDescriptionTa: 'சர்க்கரை நோயாளிகளுக்கான முதன்மையான கஷாயம். ரத்த சர்க்கரையை சீராக்கி, நரம்பு எரிச்சலை தடுக்கும்.',
    description: 'Ruthra Nisakathakadi Kvatha Churna combines Nisa (Turmeric), Kathaka (Strychnos potatorum), Amla, and Usheera to protect microvascular circulation and renal filtration in diabetic patients.',
    descriptionTa: 'மஞ்சள், தேத்தாங்கொட்டை உள்ளிட்ட மூலிகைகள் அடங்கிய சர்க்கரை நோய் துணை கஷாயப் பொடி.',
    traditionalRole: 'Anti-diabetic, anti-hyperglycemic, and microvascular protector.',
    traditionalRoleTa: 'சர்க்கரை சமநிலை மற்றும் நரம்பு பாதுகாப்பு.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Nisa (Turmeric) & Kathaka', tamilName: 'மஞ்சள் மற்றும் தேத்தாங்கொட்டை', botanicalName: 'Curcuma longa & Strychnos potatorum', role: 'Glycemic control', roleTa: 'சர்க்கரை சமன்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra nisakathakadi kvatha churna', 'ruthra-nisakathakadi-kvatha-churna', 'ayurveda kvatha-churna', 'nisakathakadi kvatha churna'],
    tamilKeywords: ['ருத்ரா நிசாகதகாதி க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-039',
    name: 'Ruthra Panchatikta Kvatha Churna',
    tamilName: 'ருத்ரா பஞ்சதிக்த க்வாத சூர்ணம்',
    slug: 'ruthra-panchatikta-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['skin-hair', 'metabolic-wellness'],
    price: 170,
    originalPrice: 200,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Five sacred bitter botanicals decoction for stubborn fevers, osteopenia, eczema, and liver sluggishness.',
    shortDescriptionTa: 'ஐந்து புனித கசப்பு மூலிகைகள் கலந்த கஷாயம். நாள்பட்ட காய்ச்சல், தோல் வியாதிகள் மற்றும் எலும்பு பலத்திற்கு உகந்தது.',
    description: 'Ruthra Panchatikta Kvatha Churna comprises Neem, Guduchi, Vasa, Patola, and Kantakari to deeply purify plasma and bone tissue.',
    descriptionTa: 'வேம்பு, சீந்தில், ஆடாதோடை அடங்கிய ஐந்து கசப்புகள். ரத்த நச்சுகளை அகற்றி உடலை தூய்மைப்படுத்தும்.',
    traditionalRole: 'Deep tissue alterative and bone marrow purifier.',
    traditionalRoleTa: 'ரத்த மற்றும் எலும்பு சுத்தி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Panchatikta (5 Bitters)', tamilName: 'பஞ்சதிக்த மூலிகைகள்', botanicalName: '5 Bitter Herbs Compound', role: 'Purifies deep tissues', roleTa: 'திசு நச்சு நீக்கம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra panchatikta kvatha churna', 'ruthra-panchatikta-kvatha-churna', 'ayurveda kvatha-churna', 'panchatikta kvatha churna'],
    tamilKeywords: ['ருத்ரா பஞ்சதிக்த க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-040',
    name: 'Ruthra Prasaranyadi Kvatha Churna',
    tamilName: 'ருத்ரா பிரசாரண்யாதி க்வாத சூர்ணம்',
    slug: 'ruthra-prasaranyadi-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['joint-mobility'],
    price: 180,
    originalPrice: 220,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical remedy for frozen shoulder (Apabahuka), neck stiffness, cervical spondylosis, and brachial neuralgia.',
    shortDescriptionTa: 'தோள்பட்டை இறுக்கம், கழுத்து வலி, நரம்பு சுளுக்கு மற்றும் கை தூக்க முடியாத நிலையை போக்கும் கஷாயம்.',
    description: 'Ruthra Prasaranyadi Kvatha Churna relaxes constricted rotator cuff tendons and improves brachial nerve conductivity.',
    descriptionTa: 'தோள்பட்டை மூட்டுகளுக்கு ரத்த ஓட்டம் பாய்ச்சி, கைகளின் அசைவை சுலபமாக்கும் பாரம்பரிய கஷாயப் பொடி.',
    traditionalRole: 'Specific remedy for frozen shoulder and cervical radiculopathy.',
    traditionalRoleTa: 'தோள்பட்டை மற்றும் கழுத்து நரம்பு வலி நிவாரணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Prasarani & Herbs', tamilName: 'பிரசாரணி மற்றும் மூலிகைகள்', botanicalName: 'Paederia foetida compound', role: 'Relieves brachial tension', roleTa: 'தோள்பட்டை இறுக்கம் தளர்த்தி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra prasaranyadi kvatha churna', 'ruthra-prasaranyadi-kvatha-churna', 'ayurveda kvatha-churna', 'prasaranyadi kvatha churna'],
    tamilKeywords: ['ருத்ரா பிரசாரண்யாதி க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-041',
    name: 'Ruthra Punarnavadi Kvatha Churna',
    tamilName: 'ருத்ரா புனர்நவாதி க்வாத சூர்ணம்',
    slug: 'ruthra-punarnavadi-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['metabolic-wellness'],
    price: 160,
    originalPrice: 190,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Famous renal stimulant and diuretic decoction for generalized edema, ascites, and urinary sluggishness.',
    shortDescriptionTa: 'உடல் நீர் வீக்கம், சிறுநீரக பலவீனம் மற்றும் நீர் அடைப்பை போக்கும் முதன்மையான புனர்நவா கஷாயம்.',
    description: 'Ruthra Punarnavadi Kvatha Churna stimulates glomerular filtration and relieves swelling around the eyes and ankles.',
    descriptionTa: 'சிறுநீரகங்களின் வடிகட்டும் திறனை அதிகரித்து, உடலில் தங்கியுள்ள அதிகப்படியான நீரை வெளியேற்றும்.',
    traditionalRole: 'Diuretic, anti-edematous, and nephroprotective.',
    traditionalRoleTa: 'நீர் பெருக்கி மற்றும் சிறுநீரக பாதுகாப்பு.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Punarnava & 7 Botanicals', tamilName: 'சாரணை மற்றும் மூலிகைகள்', botanicalName: 'Boerhavia diffusa compound', role: 'Eliminates fluid accumulation', roleTa: 'நீர் வீக்கம் குறைப்பான்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra punarnavadi kvatha churna', 'ruthra-punarnavadi-kvatha-churna', 'ayurveda kvatha-churna', 'punarnavadi kvatha churna'],
    tamilKeywords: ['ருத்ரா புனர்நவாதி க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-042',
    name: 'Ruthra Rasnadi Kvatha Churna',
    tamilName: 'ருத்ரா ராஸ்னாதி க்வாத சூர்ணம்',
    slug: 'ruthra-rasnadi-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['joint-mobility'],
    price: 170,
    originalPrice: 200,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical Alpinia galanga decoction for rheumatoid arthritis, body aches, and joint stiffness.',
    shortDescriptionTa: 'ராஸ்னா முதன்மை மூலிகையாக கொண்ட கஷாயம். மூட்டு வீக்கம், வாத வலி மற்றும் தசை பிடிப்பை போக்கும்.',
    description: 'Ruthra Rasnadi Kvatha Churna pacifies aggravated Vata in synovial membranes and enhances functional mobility.',
    descriptionTa: 'வாதத்தை தணித்து மூட்டுகளின் நெகிழ்வுத்தன்மையை பாதுகாக்கும் பாரம்பரிய கஷாயப் பொடி.',
    traditionalRole: 'Anti-inflammatory analgesic for Amavata (rheumatoid arthritis).',
    traditionalRoleTa: 'மூட்டு வாத நிவாரணி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Rasna & Vata-pacifying Herbs', tamilName: 'ராஸ்னா மற்றும் வாத மூலிகைகள்', botanicalName: 'Alpinia galanga compound', role: 'Relieves joint swelling', roleTa: 'மூட்டு வலி தணிப்பான்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra rasnadi kvatha churna', 'ruthra-rasnadi-kvatha-churna', 'ayurveda kvatha-churna', 'rasnadi kvatha churna'],
    tamilKeywords: ['ருத்ரா ராஸ்னாதி க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-043',
    name: 'Ruthra Saptasara Kvatha Churna',
    tamilName: 'ருத்ரா சப்தசார க்வாத சூர்ணம்',
    slug: 'ruthra-saptasara-kvatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['womens-wellness', 'digestive-wellness'],
    price: 170,
    originalPrice: 200,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Seven-herb classical formulation for painful menstruation (dysmenorrhea), PCOS, and pelvic colic.',
    shortDescriptionTa: 'ஏழு மூலிகைகளின் கூட்டு. மாதவிடாய் வலி, சினைப்பை நீர்க்கட்டி மற்றும் அடிவயிற்று வலியை போக்கும்.',
    description: 'Ruthra Saptasara Kvatha Churna regulates pelvic microcirculation and relieves menstrual cramps and abdominal bloating.',
    descriptionTa: 'பெண்களின் மாதவிடாய் சுழற்சியை சீராக்கி, கடுமையான மாதவிடாய் வலியை குறைக்கும் சிறந்த கஷாயப் பொடி.',
    traditionalRole: 'Emmenagogue, antispasmodic, and pelvic tonic.',
    traditionalRoleTa: 'மாதவிடாய் ஒழுங்குபடுத்தி மற்றும் வலி நிவாரணி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Saptasara (7 Herbs Blend)', tamilName: 'சப்தசார மூலிகைகள்', botanicalName: '7 Botanicals Compound', role: 'Uterine and pelvic comfort', roleTa: 'கர்ப்பப்பை நலம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra saptasara kvatha churna', 'ruthra-saptasara-kvatha-churna', 'ayurveda kvatha-churna', 'saptasara kvatha churna'],
    tamilKeywords: ['ருத்ரா சப்தசார க்வாத சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-044',
    name: 'Ruthra Stanyasodhana Kasaya Churna',
    tamilName: 'ருத்ரா ஸ்தன்யசோதன கஷாய சூர்ணம்',
    slug: 'ruthra-stanyasodhana-kasaya-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kvatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kvatha-churna',
    concerns: ['womens-wellness'],
    price: 170,
    originalPrice: 200,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical breast milk purifying decoction for lactating mothers to improve milk purity and infant digestion.',
    shortDescriptionTa: 'தாய்ப்பால் சுத்தி கஷாயப் பொடி. தாய்ப்பாலை சுத்திகரித்து, குழந்தைகளுக்கு செரிமான கோளாறுகள் வராமல் தடுக்கும்.',
    description: 'Ruthra Stanyasodhana Kasaya Churna clears doshic impurities from breast milk, ensuring optimal infant nourishment and maternal well-being.',
    descriptionTa: 'பாலூட்டும் தாய்மார்களுக்கு உகந்தது. தாய்ப்பாலை நச்சு நீக்கி குழந்தையின் ஆரோக்கியத்தை காக்கும்.',
    traditionalRole: 'Galactagogue and breast milk purifier.',
    traditionalRoleTa: 'தாய்ப்பால் சுத்தி மற்றும் பால் பெருக்கி.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Patha, Devadaru & Herbs', tamilName: 'பாடாஹா, தேவதாரு மற்றும் மூலிகைகள்', botanicalName: 'Classical Stanyasodhana compound', role: 'Purifies lactation', roleTa: 'பால் சுத்திகரிப்பு', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil or Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Take 3-5g powder with warm water or boil as decoction.', instructionTa: '3-5 கிராம் பொடியை வெந்நீரில் கலந்து அல்லது காய்ச்சி குடிக்கவும்.' }
    ],
    dosage: {
      morning: '3-5g after breakfast',
      evening: '3-5g after dinner',
      timing: 'After meals with warm water',
      with: 'Warm water or Honey',
      morningTa: 'காலை 3-5 கிராம் உணவுக்குப் பின்',
      eveningTa: 'இரவு 3-5 கிராம் உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra stanyasodhana kasaya churna', 'ruthra-stanyasodhana-kasaya-churna', 'ayurveda kvatha-churna', 'stanyasodhana kasaya churna'],
    tamilKeywords: ['ருத்ரா ஸ்தன்யசோதன கஷாய சூர்ணம்', 'க்வாத சூர்ணம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-045',
    name: 'Ruthra Chyanaprasha Lehya',
    tamilName: 'ருத்ரா சியவனபிராசம் லேகியம்',
    slug: 'ruthra-chyanaprasha-lehya',
    medicalSystem: 'ayurveda',
    formulation: 'Lehya',
    formulationTa: 'லேஹ்யம்',
    categoryGroup: 'lehya',
    concerns: ['metabolic-wellness', 'respiratory'],
    price: 280,
    originalPrice: 340,
    packSize: '500g',
    packSizeTa: '500 கிராம்',
    shortDescription: 'Ancient 50-herb rejuvenative electuary rich in Amla, honey, and ghee for longevity, vitality, and lung immunity.',
    shortDescriptionTa: 'ஐம்பதுக்கும் மேற்பட்ட மூலிகைகள் மற்றும் நெல்லிக்காய் கொண்ட உன்னத நோய் எதிர்ப்பு ரசாயன லேகியம்.',
    description: 'Ruthra Chyanaprasha Lehya is prepared according to the classical Charaka Samhita formulation to fortify immunity, protect respiratory tissues, and nourish all seven bodily Dhatus.',
    descriptionTa: 'நெல்லிக்காய், தேன், நெய் மற்றும் அரிய மூலிகைகள் கொண்டு தயாரிக்கப்படும் புகழ்மிக்க லேகியம். அனைத்து வயதினருக்கும் ஏற்றது.',
    traditionalRole: 'Universal Rasayana, lung tonic, and immunomodulator.',
    traditionalRoleTa: 'நோய் எதிர்ப்பு மற்றும் ஆயுள் பெருக்கும் ரசாயனம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Amalaki & 50 Himalayan Botanicals', tamilName: 'நெல்லிக்காய் மற்றும் 50 மூலிகைகள்', botanicalName: 'Classical Chyawanprash Formula', role: 'Total body rejuvenation', roleTa: 'முழு உடல் புத்துணர்ச்சி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consume with Warm Milk or Water', titleTa: 'பால் அல்லது வெந்நீருடன் உட்கொள்ளவும்', instruction: 'Take 5-10g twice daily followed by warm milk or water.', instructionTa: '5-10 கிராம் லேகியத்தை உண்டு வெதுவெதுப்பான பால் அல்லது நீர் குடிக்கவும்.' }
    ],
    dosage: {
      morning: '5-10g after breakfast',
      evening: '5-10g before sleep',
      timing: 'After meals',
      with: 'Warm milk or water',
      morningTa: 'காலை 5-10 கிராம்',
      eveningTa: 'இரவு 5-10 கிராம்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான பால் அல்லது நீர்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra chyanaprasha lehya', 'ruthra-chyanaprasha-lehya', 'ayurveda lehya', 'chyanaprasha lehya'],
    tamilKeywords: ['ருத்ரா சியவனபிராசம் லேகியம்', 'லேஹ்யம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-046',
    name: 'Ruthra Sukumara Rasayanam',
    tamilName: 'ருத்ரா சுகுமார ரசாயனம்',
    slug: 'ruthra-sukumara-rasayanam',
    medicalSystem: 'ayurveda',
    formulation: 'Lehya',
    formulationTa: 'லேஹ்யம்',
    categoryGroup: 'lehya',
    concerns: ['womens-wellness', 'digestive-wellness'],
    price: 240,
    originalPrice: 290,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Classical nourishing jam for female fertility, uterine fibroids, painful periods, and digestive debility.',
    shortDescriptionTa: 'பெண்களின் கருப்பை நலம், நீர்க்கட்டி, மாதவிடாய் கோளாறுகள் மற்றும் செரிமான பலவீனத்தை போக்கும் ரசாயனம்.',
    description: 'Ruthra Sukumara Rasayanam strengthens pelvic organs, corrects Apana Vayu disturbances, and relieves abdominal colic.',
    descriptionTa: 'கர்ப்பப்பை தசைகளை பலப்படுத்தி, ஹார்மோன் சமநிலையை காக்கும் உன்னத ஆயுர்வேத லேகியம்.',
    traditionalRole: 'Uterine tonic, fertility promoter, and gentle laxative.',
    traditionalRoleTa: 'கர்ப்பப்பை பலம் மற்றும் மகளிர் நலம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Punarnava & Dasamula in Ghee/Jaggery', tamilName: 'சாரணை, தசமூலம் நெய்/வெல்ல கூட்டு', botanicalName: 'Classical Sukumara compound', role: 'Pelvic and digestive nourishment', roleTa: 'கர்ப்பப்பை சத்து', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Consume with Warm Milk or Water', titleTa: 'பால் அல்லது வெந்நீருடன் உட்கொள்ளவும்', instruction: 'Take 5-10g twice daily followed by warm milk or water.', instructionTa: '5-10 கிராம் லேகியத்தை உண்டு வெதுவெதுப்பான பால் அல்லது நீர் குடிக்கவும்.' }
    ],
    dosage: {
      morning: '5-10g after breakfast',
      evening: '5-10g before sleep',
      timing: 'After meals',
      with: 'Warm milk or water',
      morningTa: 'காலை 5-10 கிராம்',
      eveningTa: 'இரவு 5-10 கிராம்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான பால் அல்லது நீர்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra sukumara rasayanam', 'ruthra-sukumara-rasayanam', 'ayurveda lehya', 'sukumara rasayanam'],
    tamilKeywords: ['ருத்ரா சுகுமார ரசாயனம்', 'லேஹ்யம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-047',
    name: 'Ruthra Panchatikta Ghrita',
    tamilName: 'ருத்ரா பஞ்சதிக்த கிருதம் (நெய்)',
    slug: 'ruthra-panchatikta-ghrita',
    medicalSystem: 'ayurveda',
    formulation: 'Ghrita',
    formulationTa: 'கிருதம்',
    categoryGroup: 'ghrita',
    concerns: ['skin-hair', 'joint-mobility'],
    price: 290,
    originalPrice: 350,
    packSize: '150g',
    packSizeTa: '150 கிராம்',
    shortDescription: 'Medicated cow ghee cooked with five premier bitter botanicals for chronic skin disorders, psoriasis, and bone diseases.',
    shortDescriptionTa: 'ஐந்து கசப்பு மூலிகைகள் கொண்டு காய்ச்சப்பட்ட மருத்துவ நெய். சொரியாசிஸ், நாள்பட்ட தோல் வியாதிகள் மற்றும் எலும்பு தேய்மானத்திற்கு உகந்தது.',
    description: 'Ruthra Panchatikta Ghrita carries lipophilic bitter phytochemicals across cellular barriers to cleanse deep toxins and lubricate joints.',
    descriptionTa: 'தோல் நமைச்சல் மற்றும் எலும்பு பலவீனத்தை போக்கும் பாரம்பரிய மருத்துவ நெய் தயாரிப்பு.',
    traditionalRole: 'Deep tissue lipophilic cleanser and anti-psoriatic.',
    traditionalRoleTa: 'தோல் நோய் மற்றும் எலும்பு பலப்படுத்தும் நெய்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Panchatikta herbs in Pure Cow Ghee', tamilName: 'பஞ்சதிக்த மூலிகைகள் மற்றும் பசு நெய்', botanicalName: '5 Bitters in Cow\'s Ghee', role: 'Deep cellular detox', roleTa: 'உள் திசு நச்சு நீக்கம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Take on Empty Stomach', titleTa: 'வெறும் வயிற்றில் உட்கொள்ளவும்', instruction: 'Take 5-10g with warm water or warm milk in the morning.', instructionTa: 'காலை வெறும் வயிற்றில் 5-10 கிராம் வெந்நீருடன் உட்கொள்ளவும்.' }
    ],
    dosage: {
      morning: '5-10g morning empty stomach',
      evening: '5g evening before food',
      timing: 'Before meals with warm water',
      with: 'Warm water or milk',
      morningTa: 'காலை 5-10 கிராம் வெறும் வயிற்றில்',
      eveningTa: 'மாலை 5 கிராம் உணவுக்கு முன்',
      timingTa: 'உணவுக்கு முன்',
      withTa: 'வெதுவெதுப்பான நீர் அல்லது பால்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra panchatikta ghrita', 'ruthra-panchatikta-ghrita', 'ayurveda ghrita', 'panchatikta ghrita'],
    tamilKeywords: ['ருத்ரா பஞ்சதிக்த கிருதம் (நெய்)', 'கிருதம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-048',
    name: 'Ruthra Arjunarishtam',
    tamilName: 'ருத்ரா அர்ஜுனாரிஷ்டம் (பார்த்தாத்யாரிஷ்டம்)',
    slug: 'ruthra-arjunarishtam',
    medicalSystem: 'ayurveda',
    formulation: 'Arishtam',
    formulationTa: 'அரிஷ்டம்',
    categoryGroup: 'arishtam',
    concerns: ['metabolic-wellness'],
    price: 190,
    originalPrice: 230,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Naturally fermented Arjuna bark cardiotonic elixir for healthy blood pressure, myocardial strength, and circulation.',
    shortDescriptionTa: 'இயற்கையாக நொதிக்க வைக்கப்பட்ட மருதம்பட்டை அரிஷ்டம். இதய துடிப்பு, ரத்த அழுத்தம் மற்றும் ரத்த ஓட்டத்தை சீராக்கும்.',
    description: 'Ruthra Arjunarishtam strengthens cardiac muscle elasticity, relieves palpitations and chest weakness, and supports arterial health.',
    descriptionTa: 'இதயத்திற்கு புத்துணர்ச்சி அளித்து, சோர்வு மற்றும் படபடப்பை நீக்கும் பாரம்பரிய அரிஷ்டம்.',
    traditionalRole: 'Foremost classical Hridya (cardiac) elixir.',
    traditionalRoleTa: 'இதய பலம் மற்றும் ரத்த நாள பாதுகாப்பு.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Arjuna Bark (Terminalia arjuna)', tamilName: 'மருதம்பட்டை', botanicalName: 'Terminalia arjuna', role: 'Cardiotonic', roleTa: 'இதய நலம்', amount: '60%' },
      { name: 'Draksha & Dhataki', tamilName: 'திராட்சை & தாத்திரி பூ', botanicalName: 'Vitis vinifera & Woodfordia', role: 'Natural fermentation base', roleTa: 'இயற்கை நொதித்தல்', amount: '40%' }
    ],
    howToUse: [
      { step: '01', title: 'Take with Equal Quantity Water', titleTa: 'சம அளவு நீருடன் உட்கொள்ளவும்', instruction: 'Take 15-30ml twice daily with equal quantity of warm water after food.', instructionTa: '15-30 மி.லி சம அளவு வெந்நீருடன் உணவுக்குப் பின் குடிக்கவும்.' }
    ],
    dosage: {
      morning: '15-30ml after breakfast',
      evening: '15-30ml after dinner',
      timing: 'After meals',
      with: 'Equal quantity warm water',
      morningTa: 'காலை 15-30 மி.லி உணவுக்குப் பின்',
      eveningTa: 'இரவு 15-30 மி.லி உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'சம அளவு வெதுவெதுப்பான நீர்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra arjunarishtam', 'ruthra-arjunarishtam', 'ayurveda arishtam', 'arjunarishtam'],
    tamilKeywords: ['ருத்ரா அர்ஜுனாரிஷ்டம் (பார்த்தாத்யாரிஷ்டம்)', 'அரிஷ்டம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-049',
    name: 'Ruthra Dasamoolarishtam',
    tamilName: 'ருத்ரா தசமூலாரிஷ்டம்',
    slug: 'ruthra-dasamoolarishtam',
    medicalSystem: 'ayurveda',
    formulation: 'Arishtam',
    formulationTa: 'அரிஷ்டம்',
    categoryGroup: 'arishtam',
    concerns: ['womens-wellness', 'metabolic-wellness', 'joint-mobility'],
    price: 210,
    originalPrice: 250,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Famous comprehensive restorative elixir for postpartum convalescence, fatigue, joint aches, and general debility.',
    shortDescriptionTa: 'தசமூலம் அடங்கிய புகழ்மிக்க டானிக். பிரசவத்திற்கு பிந்தைய பலவீனம், சோர்வு மற்றும் உடல் வலிகளை போக்கும்.',
    description: 'Ruthra Dasamoolarishtam combines over 50 potent herbs to rekindle digestive fire, promote restful sleep, and restore vitality.',
    descriptionTa: 'பிரசவித்த பெண்களுக்கு உடல் வலிமை, பசி மற்றும் பால் பெருக்கத்தை தரும் உன்னத ஆயுர்வேத டானிக்.',
    traditionalRole: 'General tonic, postpartum restorative, and anti-fatigue.',
    traditionalRoleTa: 'உடல் பலம் தரும் பொது டானிக்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Dasamula & 50 Herbal Ingredients', tamilName: 'தசமூலம் மற்றும் 50 மூலிகைகள்', botanicalName: 'Classical Dasamoolarishta compound', role: 'Comprehensive revitalization', roleTa: 'முழு உடல் புத்துணர்ச்சி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Take with Equal Quantity Water', titleTa: 'சம அளவு நீருடன் உட்கொள்ளவும்', instruction: 'Take 15-30ml twice daily with equal quantity of warm water after food.', instructionTa: '15-30 மி.லி சம அளவு வெந்நீருடன் உணவுக்குப் பின் குடிக்கவும்.' }
    ],
    dosage: {
      morning: '15-30ml after breakfast',
      evening: '15-30ml after dinner',
      timing: 'After meals',
      with: 'Equal quantity warm water',
      morningTa: 'காலை 15-30 மி.லி உணவுக்குப் பின்',
      eveningTa: 'இரவு 15-30 மி.லி உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'சம அளவு வெதுவெதுப்பான நீர்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra dasamoolarishtam', 'ruthra-dasamoolarishtam', 'ayurveda arishtam', 'dasamoolarishtam'],
    tamilKeywords: ['ருத்ரா தசமூலாரிஷ்டம்', 'அரிஷ்டம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-050',
    name: 'Ruthra Khadirarishtam',
    tamilName: 'ருத்ரா கதீராரிஷ்டம் (கருங்காலி அரிஷ்டம்)',
    slug: 'ruthra-khadirarishtam',
    medicalSystem: 'ayurveda',
    formulation: 'Arishtam',
    formulationTa: 'அரிஷ்டம்',
    categoryGroup: 'arishtam',
    concerns: ['skin-hair', 'metabolic-wellness'],
    price: 190,
    originalPrice: 230,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Acacia catechu fermented elixir for allergic dermatitis, vitiligo, chronic acne, and blood purification.',
    shortDescriptionTa: 'கருங்காலி அடங்கிய ரத்த சுத்தி அரிஷ்டம். தோல் அரிப்பு, முகப்பரு, தடிப்பு மற்றும் தோல் நோய்களை குணமாக்கும்.',
    description: 'Ruthra Khadirarishtam is celebrated as the premier classical dermatological liquid formulation for purifying blood toxins.',
    descriptionTa: 'ரத்தத்தில் உள்ள கிருமிகளை அழித்து, தோல் பொலிவு தரும் பாரம்பரிய கதீராரிஷ்டம்.',
    traditionalRole: 'Supreme dermatological blood cleanser and alterative.',
    traditionalRoleTa: 'ரத்த சுத்தி மற்றும் தோல் நோய் நிவாரணம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Khadira (Acacia catechu) & Devadaru', tamilName: 'கருங்காலி மற்றும் தேவதாரு', botanicalName: 'Acacia catechu compound', role: 'Dermal purifier', roleTa: 'தோல் நச்சு நீக்கி', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Take with Equal Quantity Water', titleTa: 'சம அளவு நீருடன் உட்கொள்ளவும்', instruction: 'Take 15-30ml twice daily with equal quantity of warm water after food.', instructionTa: '15-30 மி.லி சம அளவு வெந்நீருடன் உணவுக்குப் பின் குடிக்கவும்.' }
    ],
    dosage: {
      morning: '15-30ml after breakfast',
      evening: '15-30ml after dinner',
      timing: 'After meals',
      with: 'Equal quantity warm water',
      morningTa: 'காலை 15-30 மி.லி உணவுக்குப் பின்',
      eveningTa: 'இரவு 15-30 மி.லி உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'சம அளவு வெதுவெதுப்பான நீர்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra khadirarishtam', 'ruthra-khadirarishtam', 'ayurveda arishtam', 'khadirarishtam'],
    tamilKeywords: ['ருத்ரா கதீராரிஷ்டம் (கருங்காலி அரிஷ்டம்)', 'அரிஷ்டம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-051',
    name: 'Ruthra Punarnavasam',
    tamilName: 'ருத்ரா புனர்நவாஸம் (சாரணை ஆஸவம்)',
    slug: 'ruthra-punarnavasam',
    medicalSystem: 'ayurveda',
    formulation: 'Arishtam',
    formulationTa: 'ஆஸவம்',
    categoryGroup: 'arishtam',
    concerns: ['metabolic-wellness'],
    price: 190,
    originalPrice: 230,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Fermented renal stimulant for water retention, liver disorders, spleen enlargement, and anemia.',
    shortDescriptionTa: 'சிறுநீரகம் மற்றும் கல்லீரல் செயல்பாடு தூண்டும் ஆஸவம். நீர் வீக்கம், கல்லீரல் வீக்கம், சோகையை போக்கும்.',
    description: 'Ruthra Punarnavasam encourages natural diuresis, flushes microvascular fluid accumulation, and rejuvenates liver and kidney tissues.',
    descriptionTa: 'சிறுநீரக வடிகட்டுதலை சீராக்கி, உடல் வீக்கத்தை போக்கும் உன்னத ஆஸவ தயாரிப்பு.',
    traditionalRole: 'Diuretic, hepato-protective, and anti-edematous.',
    traditionalRoleTa: 'நீர் வீக்கம் நீக்கி மற்றும் சிறுநீரக டானிக்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Punarnava & Triphala compound', tamilName: 'சாரணை மற்றும் திரிபலா கூட்டு', botanicalName: 'Boerhavia diffusa fermented compound', role: 'Fluid balancer and liver support', roleTa: 'நீர் சமன் மற்றும் கல்லீரல் நலம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Take with Equal Quantity Water', titleTa: 'சம அளவு நீருடன் உட்கொள்ளவும்', instruction: 'Take 15-30ml twice daily with equal quantity of warm water after food.', instructionTa: '15-30 மி.லி சம அளவு வெந்நீருடன் உணவுக்குப் பின் குடிக்கவும்.' }
    ],
    dosage: {
      morning: '15-30ml after breakfast',
      evening: '15-30ml after dinner',
      timing: 'After meals',
      with: 'Equal quantity warm water',
      morningTa: 'காலை 15-30 மி.லி உணவுக்குப் பின்',
      eveningTa: 'இரவு 15-30 மி.லி உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'சம அளவு வெதுவெதுப்பான நீர்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra punarnavasam', 'ruthra-punarnavasam', 'ayurveda arishtam', 'punarnavasam'],
    tamilKeywords: ['ருத்ரா புனர்நவாஸம் (சாரணை ஆஸவம்)', 'ஆஸவம்'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-052',
    name: 'Ruthra Chandraprabavati',
    tamilName: 'ருத்ரா சந்திரபிரபாவதி மாத்திரை',
    slug: 'ruthra-chandraprabavati',
    medicalSystem: 'ayurveda',
    formulation: 'Guggulu',
    formulationTa: 'குக்குலு / வடி',
    categoryGroup: 'guggulu',
    concerns: ['metabolic-wellness', 'womens-wellness'],
    price: 220,
    originalPrice: 260,
    packSize: '60 Tablets',
    packSizeTa: '60 மாத்திரைகள்',
    shortDescription: 'Famous 37-herb classical tablet for urinary tract health, burning urination, kidney stones, and prostate wellness.',
    shortDescriptionTa: 'சிறுநீரக பாதை தொற்று, எரிச்சல், கல் அடைப்பு மற்றும் ஆண்/பெண் பிறப்புறுப்பு நலம் காக்கும் மாத்திரை.',
    description: 'Ruthra Chandraprabavati blends Shilajit, Guggulu, and herbs to rejuvenate the genitourinary system and optimize metabolic health.',
    descriptionTa: 'சிலாஜித் மற்றும் குக்குலு அடங்கிய மாத்திரை. சிறுநீர் எரிச்சல், சர்க்கரை நோய் சோர்வு மற்றும் பலவீனத்தை நீக்கும்.',
    traditionalRole: 'Genitourinary rejuvenator and urinary alkalizer.',
    traditionalRoleTa: 'சிறுநீரக மண்டல பாதுகாப்பு மாத்திரை.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Shilajit, Guggulu & 35 Botanicals', tamilName: 'சிலாஜித், குக்குலு மற்றும் மூலிகைகள்', botanicalName: 'Classical Chandraprabha formulation', role: 'Urinary and metabolic tonic', roleTa: 'சிறுநீரக மற்றும் தாது பலம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Take with Warm Water', titleTa: 'வெந்நீருடன் உட்கொள்ளவும்', instruction: 'Take 1-2 tablets twice daily after food.', instructionTa: '1-2 மாத்திரைகள் உணவுக்குப் பின் வெந்நீருடன் உட்கொள்ளவும்.' }
    ],
    dosage: {
      morning: '1-2 tablets after breakfast',
      evening: '1-2 tablets after dinner',
      timing: 'After meals',
      with: 'Warm water',
      morningTa: 'காலை 1-2 மாத்திரை உணவுக்குப் பின்',
      eveningTa: 'இரவு 1-2 மாத்திரை உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra chandraprabavati', 'ruthra-chandraprabavati', 'ayurveda guggulu', 'chandraprabavati'],
    tamilKeywords: ['ருத்ரா சந்திரபிரபாவதி மாத்திரை', 'குக்குலு / வடி'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-053',
    name: 'Ruthra Kanchanara Guggulu',
    tamilName: 'ருத்ரா காஞ்சனார குக்குலு',
    slug: 'ruthra-kanchanara-guggulu',
    medicalSystem: 'ayurveda',
    formulation: 'Guggulu',
    formulationTa: 'குக்குலு',
    categoryGroup: 'guggulu',
    concerns: ['womens-wellness', 'metabolic-wellness'],
    price: 230,
    originalPrice: 270,
    packSize: '60 Tablets',
    packSizeTa: '60 மாத்திரைகள்',
    shortDescription: 'Classical Bauhinia variegata formulation for thyroid swelling, lymphadenopathy, lipomas, and ovarian cysts (PCOS).',
    shortDescriptionTa: 'தைராய்டு வீக்கம், நிணநீர் கட்டி, சினைப்பை நீர்க்கட்டி மற்றும் கொழுப்புக் கட்டிகளை கரைக்கும் மாத்திரை.',
    description: 'Ruthra Kanchanara Guggulu penetrates glandular tissues, resolves glandular congestions, and supports optimal lymphatic drainage.',
    descriptionTa: 'காஞ்சனார பட்டை மற்றும் தூய குக்குலு கலந்த மாத்திரை. கட்டிகளை கரைத்து சுரப்பி செயல்பாடுகளை சீராக்கும்.',
    traditionalRole: 'Glandular decongestant and anti-tumorigenic Guggulu.',
    traditionalRoleTa: 'கட்டிகளை கரைக்கும் சுரப்பி டானிக்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Kanchanara Bark & Shuddha Guggulu', tamilName: 'காஞ்சனார பட்டை & குக்குலு', botanicalName: 'Bauhinia variegata & Commiphora mukul', role: 'Dissolves glandular lumps', roleTa: 'கட்டிகளை கரைத்தல்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Take with Warm Water', titleTa: 'வெந்நீருடன் உட்கொள்ளவும்', instruction: 'Take 1-2 tablets twice daily after food.', instructionTa: '1-2 மாத்திரைகள் உணவுக்குப் பின் வெந்நீருடன் உட்கொள்ளவும்.' }
    ],
    dosage: {
      morning: '1-2 tablets after breakfast',
      evening: '1-2 tablets after dinner',
      timing: 'After meals',
      with: 'Warm water',
      morningTa: 'காலை 1-2 மாத்திரை உணவுக்குப் பின்',
      eveningTa: 'இரவு 1-2 மாத்திரை உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra kanchanara guggulu', 'ruthra-kanchanara-guggulu', 'ayurveda guggulu', 'kanchanara guggulu'],
    tamilKeywords: ['ருத்ரா காஞ்சனார குக்குலு', 'குக்குலு'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-054',
    name: 'Ruthra Mahayogaraja Guggulu',
    tamilName: 'ருத்ரா மகாயோகராஜ குக்குலு',
    slug: 'ruthra-mahayogaraja-guggulu',
    medicalSystem: 'ayurveda',
    formulation: 'Guggulu',
    formulationTa: 'குக்குலு',
    categoryGroup: 'guggulu',
    concerns: ['joint-mobility'],
    price: 260,
    originalPrice: 310,
    packSize: '60 Tablets',
    packSizeTa: '60 மாத்திரைகள்',
    shortDescription: 'Potent herbo-mineral Guggulu tablet for advanced arthritis, neuromuscular stiffness, paralysis, and chronic pain.',
    shortDescriptionTa: 'கடுமையான மூட்டு வாதம், நரம்பு தளர்ச்சி, வாத பிடிப்பு மற்றும் மூட்டு தேய்மானத்தை போக்கும் உன்னத மாத்திரை.',
    description: 'Ruthra Mahayogaraja Guggulu combines purified Guggulu with rejuvenating Bhasmas and herbs to pacify deep-seated chronic Vata conditions.',
    descriptionTa: 'மூட்டுகளின் வலி மற்றும் வீக்கத்தை போக்கி நரம்புகளுக்கு வலிமை சேர்க்கும் முதன்மையான ஆயுர்வேத மாத்திரை.',
    traditionalRole: 'Supreme anti-arthritic and neuro-muscular compound.',
    traditionalRoleTa: 'முதன்மையான மூட்டு மற்றும் வாத வலி நிவாரணி மாத்திரை.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Purified Guggulu & Rejuvenating Herbs', tamilName: 'சுத்தி செய்த குக்குலு மற்றும் பற்பங்கள்', botanicalName: 'Classical Mahayogaraja compound', role: 'Deep joint and nerve restoration', roleTa: 'மூட்டு மற்றும் நரம்பு புதுப்பித்தல்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Take with Warm Water', titleTa: 'வெந்நீருடன் உட்கொள்ளவும்', instruction: 'Take 1-2 tablets twice daily after food.', instructionTa: '1-2 மாத்திரைகள் உணவுக்குப் பின் வெந்நீருடன் உட்கொள்ளவும்.' }
    ],
    dosage: {
      morning: '1-2 tablets after breakfast',
      evening: '1-2 tablets after dinner',
      timing: 'After meals',
      with: 'Warm water',
      morningTa: 'காலை 1-2 மாத்திரை உணவுக்குப் பின்',
      eveningTa: 'இரவு 1-2 மாத்திரை உணவுக்குப் பின்',
      timingTa: 'உணவுக்குப் பின்',
      withTa: 'வெதுவெதுப்பான நீர்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra mahayogaraja guggulu', 'ruthra-mahayogaraja-guggulu', 'ayurveda guggulu', 'mahayogaraja guggulu'],
    tamilKeywords: ['ருத்ரா மகாயோகராஜ குக்குலு', 'குக்குலு'],
    inStock: true,
    featured: false
  },

  {
    id: 'prod-ayurveda-055',
    name: 'Ruthra Nalpamaradi Taila',
    tamilName: 'ருத்ரா நால்பாமராதி தைலம்',
    slug: 'ruthra-nalpamaradi-taila',
    medicalSystem: 'ayurveda',
    formulation: 'Taila',
    formulationTa: 'தைலம்',
    categoryGroup: 'taila',
    concerns: ['skin-hair'],
    price: 280,
    originalPrice: 330,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Fabled golden bridal turmeric & 4 ficus bark massage oil for tan removal, pigmentation, and radiant glowing skin.',
    shortDescriptionTa: 'நால்பாமரம் (4 ஆலமரப்பட்டைகள்) மற்றும் மஞ்சள் கலந்த சரும பொலிவு தைலம். கரும்புள்ளிகள், மங்கு மற்றும் தழும்புகளை நீக்கும்.',
    description: 'Ruthra Nalpamaradi Taila is slow-cooked with the bark of 4 sacred Ficus trees (Nalpamaram), pure Turmeric, Chandana, and unrefined sesame oil. It repairs sun damage, lightens dark patches, and imparts a luminous golden complexion.',
    descriptionTa: 'நால்பாமரப் பட்டைகள் மற்றும் தூய மஞ்சள் கொண்டு நல்லெண்ணெயில் காய்ச்சப்பட்ட அழகு தைலம். முகம் மற்றும் உடலை பளபளப்பாக்கும்.',
    traditionalRole: 'Premier classical skin brightening and complexion oil.',
    traditionalRoleTa: 'சரும பொலிவு மற்றும் மங்கு நீக்கும் தைலம்.',
    badge: 'Classical Ayurveda',
    badgeTa: 'பாரம்பரிய ஆயுர்வேதம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    gallery: ['/images/products/ruthra-rej-viyan-pain-oil/front.jpg'],
    ingredients: [
      { name: 'Nalpamaram (4 Sacred Ficus Barks)', tamilName: 'நால்பாமரப் பட்டைகள் (ஆல், அரசு, இத்தி, அத்தி)', botanicalName: 'Ficus microcarpa, religiosa, benghalensis, racemosa', role: 'Repairs hyperpigmentation and skin barrier', roleTa: 'தோல் தழும்புகள் மற்றும் நிறமியை சீராக்கும்', amount: '40%' },
      { name: 'Haridra (Wild Turmeric)', tamilName: 'மஞ்சள்', botanicalName: 'Curcuma longa', role: 'Complexion illumination and antibacterial', roleTa: 'சரும நிறம் மற்றும் பொலிவு கூட்டும்', amount: '20%' },
      { name: 'Pure Sesame Oil Base', tamilName: 'நல்லெண்ணெய்', botanicalName: 'Sesamum indicum', role: 'Transdermal lipid carrier', roleTa: 'ஆழமாக ஊடுருவும் தூய நல்லெண்ணெய்', amount: '40%' }
    ],
    howToUse: [
      { step: '01', title: 'Apply on Skin', titleTa: 'சருமத்தில் தடவவும்', instruction: 'Apply generous amount over face and body, massage gently for 15 minutes before bath.', instructionTa: 'முகத்திலும் உடலிலும் தேய்த்து 15 நிமிடம் மசாஜ் செய்து குளிக்கவும்.' }
    ],
    dosage: {
      morning: 'External application prior to bath',
      evening: 'External massage as needed',
      timing: 'External use',
      with: 'Gentle circular massage',
      morningTa: 'குளியலுக்கு முன் வெளிப்புற பூச்சு',
      eveningTa: 'தேவைக்கேற்ப மசாஜ் செய்யவும்',
      timingTa: 'வெளிப்புற பயன்பாடு',
      withTa: 'மென்மையாக தேய்க்கவும்'
    },
    safety: {
      contraindications: 'Consult an Ayurvedic physician during pregnancy or severe chronic illness.',
      precautions: 'Follow recommended classical dosage guidelines.',
      contraindicationsTa: 'கர்ப்பிணிகள் மற்றும் தீவிர நோயாளிகள் மருத்துவர் ஆலோசனைப்படி உட்கொள்ளவும்.',
      precautionsTa: 'குறிப்பிட்ட அளவில் உட்கொள்ளவும்.'
    },
    storage: {
      temperature: 'Store in a cool, dry place',
      precautions: 'Keep container tightly closed and away from direct sunlight',
      temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
      precautionsTa: 'நேரடி சூரிய ஒளி படாமல் மூடி வைக்கவும்'
    },
    faqs: [
      { question: 'Is this an authentic classical Ayurvedic formulation?', answer: 'Yes, prepared per authentic Ayurvedic Formulary of India (AFI) standards.', questionTa: 'இது உண்மையான பாரம்பரிய ஆயுர்வேத தயாரிப்பா?', answerTa: 'ஆம், இந்திய ஆயுர்வேத பார்முலா (AFI) முறைப்படி தயாரிக்கப்பட்டது.' }
    ],
    searchKeywords: ['ruthra nalpamaradi taila', 'ruthra-nalpamaradi-taila', 'ayurveda taila', 'nalpamaradi taila'],
    tamilKeywords: ['ருத்ரா நால்பாமராதி தைலம்', 'தைலம்'],
    inStock: true,
    featured: false
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
  return PRODUCTS.filter(p => p.concerns.includes(concernSlug as ConcernSlug));
}

export function getProductsByFormulation(formulationSlug: string): Product[] {
  const normalized = formulationSlug.toLowerCase();
  return PRODUCTS.filter(p => p.formulation.toLowerCase().includes(normalized));
}

export function getFeaturedProducts(limit = 8): Product[] {
  return PRODUCTS.filter(p => p.featured).slice(0, limit);
}
export const BUNDLE_ITEMS = BUNDLES;
