export interface DeliveryEstimate {
  pincode: string;
  city: string;
  cityTa: string;
  district: string;
  districtTa: string;
  state: string;
  stateTa: string;
  zone: 'hub_south_tn' | 'central_delta_tn' | 'north_west_tn' | 'hills_remote_tn' | 'rest_of_india' | 'invalid';
  deliveryTimeEn: string;
  deliveryTimeTa: string;
  targetDays: number;
  courierPartnerEn: string;
  courierPartnerTa: string;
  isCodAvailable: boolean;
  isFreeShippingEligible: boolean;
}

// Complete 38-District Tamil Nadu Mapping with Postal Prefixes & Zone SLAs
interface DistrictData {
  district: string;
  districtTa: string;
  zone: 'hub_south_tn' | 'central_delta_tn' | 'north_west_tn' | 'hills_remote_tn';
  deliveryDays: number;
}

const TN_PREFIX_MAP: Record<string, DistrictData> = {
  // Hub Zone: South Tamil Nadu (Next-Day 24 Hours)
  '627': { district: 'Tirunelveli & Tenkasi', districtTa: 'திருநெல்வேலி & தென்காசி', zone: 'hub_south_tn', deliveryDays: 1 },
  '628': { district: 'Thoothukudi (Tuticorin)', districtTa: 'தூத்துக்குடி', zone: 'hub_south_tn', deliveryDays: 1 },
  '629': { district: 'Kanniyakumari (Nagercoil)', districtTa: 'கன்னியாகுமரி', zone: 'hub_south_tn', deliveryDays: 1 },
  '625': { district: 'Madurai & Theni', districtTa: 'மதுரை & தேனி', zone: 'hub_south_tn', deliveryDays: 1 },
  '626': { district: 'Virudhunagar & Sivakasi', districtTa: 'விருதுநகர் & சிவகாசி', zone: 'hub_south_tn', deliveryDays: 1 },
  '623': { district: 'Ramanathapuram', districtTa: 'ராமநாதபுரம்', zone: 'hub_south_tn', deliveryDays: 2 },
  '630': { district: 'Sivaganga & Karaikudi', districtTa: 'சிவகங்கை & காரைக்குடி', zone: 'hub_south_tn', deliveryDays: 2 },
  '624': { district: 'Dindigul & Palani', districtTa: 'திண்டுக்கல் & பழனி', zone: 'hub_south_tn', deliveryDays: 2 },

  // Central & Delta Zone: (24 - 48 Hours)
  '620': { district: 'Tiruchirappalli (Trichy)', districtTa: 'திருச்சிராப்பள்ளி', zone: 'central_delta_tn', deliveryDays: 2 },
  '621': { district: 'Perambalur & Ariyalur', districtTa: 'பெரம்பலூர் & அரியலூர்', zone: 'central_delta_tn', deliveryDays: 2 },
  '622': { district: 'Pudukkottai', districtTa: 'புதுக்கோட்டை', zone: 'central_delta_tn', deliveryDays: 2 },
  '613': { district: 'Thanjavur', districtTa: 'தஞ்சாவூர்', zone: 'central_delta_tn', deliveryDays: 2 },
  '614': { district: 'Pattukkottai & Delta Area', districtTa: 'பட்டுக்கோட்டை & டெல்டா', zone: 'central_delta_tn', deliveryDays: 2 },
  '610': { district: 'Tiruvarur', districtTa: 'திருவாரூர்', zone: 'central_delta_tn', deliveryDays: 2 },
  '611': { district: 'Nagapattinam', districtTa: 'நாகப்பட்டினம்', zone: 'central_delta_tn', deliveryDays: 2 },
  '609': { district: 'Mayiladuthurai', districtTa: 'மயிலாடுதுறை', zone: 'central_delta_tn', deliveryDays: 2 },
  '639': { district: 'Karur', districtTa: 'கரூர்', zone: 'central_delta_tn', deliveryDays: 2 },

  // Northern & Western Industrial Zone: (24 - 48 Hours)
  '600': { district: 'Chennai City', districtTa: 'சென்னை பெருநகரம்', zone: 'north_west_tn', deliveryDays: 2 },
  '601': { district: 'Tiruvallur', districtTa: 'திருவள்ளூர்', zone: 'north_west_tn', deliveryDays: 2 },
  '602': { district: 'Avadi & Tiruvallur Outer', districtTa: 'ஆவடி & திருவள்ளூர்', zone: 'north_west_tn', deliveryDays: 2 },
  '603': { district: 'Chengalpattu & Kanchipuram Outer', districtTa: 'செங்கல்பட்டு', zone: 'north_west_tn', deliveryDays: 2 },
  '631': { district: 'Kanchipuram & Arakkonam', districtTa: 'காஞ்சிபுரம் & அரக்கோணம்', zone: 'north_west_tn', deliveryDays: 2 },
  '632': { district: 'Vellore & Ranipet', districtTa: 'வேலூர் & ராணிப்பேட்டை', zone: 'north_west_tn', deliveryDays: 2 },
  '635': { district: 'Krishnagiri, Hosur & Tirupathur', districtTa: 'கிருஷ்ணகிரி & ஓசூர்', zone: 'north_west_tn', deliveryDays: 2 },
  '636': { district: 'Salem & Dharmapuri', districtTa: 'சேலம் & தருமபுரி', zone: 'north_west_tn', deliveryDays: 2 },
  '637': { district: 'Namakkal & Tiruchengode', districtTa: 'நாமக்கல் & திருச்செங்கோடு', zone: 'north_west_tn', deliveryDays: 2 },
  '638': { district: 'Erode & Gobichettipalayam', districtTa: 'ஈரோடு & கோபி', zone: 'north_west_tn', deliveryDays: 2 },
  '641': { district: 'Coimbatore & Tiruppur', districtTa: 'கோயம்புத்தூர் & திருப்பூர்', zone: 'north_west_tn', deliveryDays: 2 },
  '642': { district: 'Pollachi & Udumalaipettai', districtTa: 'பொள்ளாச்சி & உடுமலை', zone: 'north_west_tn', deliveryDays: 2 },
  '604': { district: 'Tindivanam & Villupuram Outer', districtTa: 'திண்டிவனம் & விழுப்புரம்', zone: 'north_west_tn', deliveryDays: 2 },
  '605': { district: 'Villupuram & Puducherry border', districtTa: 'விழுப்புரம்', zone: 'north_west_tn', deliveryDays: 2 },
  '606': { district: 'Tiruvannamalai & Kallakurichi', districtTa: 'திருவண்ணாமலை & கள்ளக்குறிச்சி', zone: 'north_west_tn', deliveryDays: 2 },
  '607': { district: 'Cuddalore & Panruti', districtTa: 'கடலூர் & பண்ருட்டி', zone: 'north_west_tn', deliveryDays: 2 },
  '608': { district: 'Chidambaram', districtTa: 'சிதம்பரம்', zone: 'north_west_tn', deliveryDays: 2 },

  // Hill Stations & Remote Terrains: (48 - 72 Hours)
  '643': { district: 'The Nilgiris (Ooty, Coonoor, Gudalur)', districtTa: 'நீலகிரி (ஊட்டி, குன்னூர்)', zone: 'hills_remote_tn', deliveryDays: 3 }
};

// Formats target arrival date relative to current time
export const getTargetDeliveryDate = (daysToAdd: number) => {
  const d = new Date();
  // If ordered after 4 PM, add an extra day for packaging
  if (d.getHours() >= 16) {
    daysToAdd += 1;
  }
  d.setDate(d.getDate() + daysToAdd);

  const optionsEn: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  const formattedEn = d.toLocaleDateString('en-US', optionsEn);

  const monthsTa = ['ஜன', 'பிப்', 'மார்', 'ஏப்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆக', 'செப்', 'அக்', 'நவ', 'டிச'];
  const daysTa = ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'];
  const formattedTa = `${daysTa[d.getDay()]}, ${monthsTa[d.getMonth()]} ${d.getDate()}`;

  return { formattedEn, formattedTa };
};

export const getDeliveryEstimate = (pincodeRaw: string): DeliveryEstimate | null => {
  const pin = pincodeRaw.trim().replace(/\D/g, '');

  if (pin.length !== 6) {
    return null;
  }

  const prefix3 = pin.substring(0, 3);
  const prefix2 = pin.substring(0, 2);
  const tnMatch = TN_PREFIX_MAP[prefix3];

  if (tnMatch) {
    const isHubNextDay = tnMatch.zone === 'hub_south_tn' && tnMatch.deliveryDays === 1;
    const { formattedEn, formattedTa } = getTargetDeliveryDate(tnMatch.deliveryDays);

    return {
      pincode: pin,
      city: tnMatch.district,
      cityTa: tnMatch.districtTa,
      district: tnMatch.district,
      districtTa: tnMatch.districtTa,
      state: 'Tamil Nadu',
      stateTa: 'தமிழ்நாடு',
      zone: tnMatch.zone,
      deliveryTimeEn: isHubNextDay ? 'Next-Day Delivery (within 24 hours)' : 'Express Delivery (24–48 hours)',
      deliveryTimeTa: isHubNextDay ? 'அடுத்த நாளே டெலிவரி (24 மணி நேரத்திற்குள்)' : 'விரைவு அஞ்சல் டெலிவரி (24–48 மணி நேரம்)',
      targetDays: tnMatch.deliveryDays,
      courierPartnerEn: isHubNextDay ? 'Tirunelveli Direct Express / ST Courier' : 'Tamil Nadu Speed Post / ST Courier',
      courierPartnerTa: isHubNextDay ? 'திருநெல்வேலி நேரடி அஞ்சல் / ST கொரியர்' : 'தமிழக விரைவு அஞ்சல் / ST கொரியர்',
      isCodAvailable: true,
      isFreeShippingEligible: true
    };
  }

  // Rest of South India & India
  let otherStateEn = 'All-India Speed Dispatch';
  let otherStateTa = 'அகில இந்திய விரைவு அஞ்சல்';
  let deliveryDays = 3;

  if (prefix2 === '56' || prefix2 === '57' || prefix2 === '58' || prefix2 === '59') {
    otherStateEn = 'Karnataka (Bangalore Hub)';
    otherStateTa = 'கர்நாடகா (பெங்களூரு)';
    deliveryDays = 2;
  } else if (prefix2 === '67' || prefix2 === '68' || prefix2 === '69') {
    otherStateEn = 'Kerala';
    otherStateTa = 'கேரளா';
    deliveryDays = 2;
  } else if (prefix2 === '50' || prefix2 === '51' || prefix2 === '52' || prefix2 === '53') {
    otherStateEn = 'Andhra Pradesh & Telangana';
    otherStateTa = 'ஆந்திரா & தெலங்கானா';
    deliveryDays = 3;
  } else if (prefix2 === '40' || prefix2 === '41' || prefix2 === '42' || prefix2 === '43' || prefix2 === '44') {
    otherStateEn = 'Maharashtra & Goa';
    otherStateTa = 'மகாராஷ்டிரா';
    deliveryDays = 3;
  } else if (prefix2 === '11' || prefix2 === '12' || prefix2 === '20') {
    otherStateEn = 'Delhi NCR & North Zone';
    otherStateTa = 'டெல்லி & வட மாநிலங்கள்';
    deliveryDays = 4;
  }

  const { formattedEn, formattedTa } = getTargetDeliveryDate(deliveryDays);

  return {
    pincode: pin,
    city: otherStateEn,
    cityTa: otherStateTa,
    district: otherStateEn,
    districtTa: otherStateTa,
    state: 'India',
    stateTa: 'இந்தியா',
    zone: 'rest_of_india',
    deliveryTimeEn: `Dispatched via India Post Speed Air (${deliveryDays}–${deliveryDays + 1} Business Days)`,
    deliveryTimeTa: `இந்தியா போஸ்ட் விரைவு அஞ்சல் (${deliveryDays}-${deliveryDays + 1} நாட்கள்)`,
    targetDays: deliveryDays,
    courierPartnerEn: 'India Post Speed Air / Blue Dart',
    courierPartnerTa: 'இந்திய அஞ்சல் துறை விரைவு சேவை',
    isCodAvailable: true,
    isFreeShippingEligible: true
  };
};
