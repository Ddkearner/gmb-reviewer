/**
 * High-Intent Local SEO Keywords & Multi-Language Review Engine.
 * Engineered for Google My Business Local 3-Pack Ranking, Zero Spam Detection.
 * 
 * Rules:
 * 1. Non-specified and non-personal: No fake promises, no specific brand/procedure claims,
 *    no personal doctor or owner names that might not exist in that business.
 * 2. Hindi & Hinglish are NOT literal translations of English. They are authentic,
 *    organic, colloquial reviews written from real everyday customer perspectives.
 * 3. 500+ unique review combinations per language via combinatorial template engine.
 */

// 1. High-Intent Keywords Dictionary (100+ for Marble, and robust generic lists for all categories)
export const CATEGORY_KEYWORDS: Record<string, string[]> = {
  marble: [
    'best marble shop', 'marble and granite dealer', 'top tiles showroom', 'quality floor tiles',
    'wholesale marble dealer', 'trusted stone merchant', 'tiles and sanitary store', 'best flooring shop',
    'wide variety of tiles', 'genuine marble dealer', 'fair price marble shop', 'best granite dealer in town',
    'durable floor tiles', 'wall tiles showroom', 'premium tiles collection', 'reliable stone supplier',
    'best tile designs', 'affordable marble rates', 'kitchen slab stone dealer', 'house flooring tiles',
    'modern tiles collection', 'bathroom wall tiles', 'experienced stone dealer', 'top rated marble shop',
    'building stone dealer', 'home interior tiles', 'good customer service', 'timely site delivery',
    'transparent billing', 'honest pricing', 'best tiles store', 'marble godown',
    'stone showroom near me', 'quality granite shop', 'latest tiles collection', 'flooring marble supplier',
    'countertop stone dealer', 'vitrified tiles dealer', 'ceramic tiles shop', 'elevation tiles showroom',
    'parking tiles dealer', 'exterior wall tiles', 'interior floor tiles', 'marble and granite supplier',
    'trusted tiles merchant', 'top stone dealer', 'good collection of marble', 'reasonable rates',
    'honest guidance', 'prompt material delivery', 'safe transport of tiles', 'satisfactory service',
    'well maintained showroom', 'cooperative staff', 'polite owner', 'best building materials shop',
    'reputed stone shop', 'huge variety in showroom', 'great tile quality', 'sturdy granite slabs',
    'smooth floor finish', 'glossy wall tiles', 'matte finish tiles', 'anti skid bathroom tiles',
    'designer tiles collection', 'value for money rates', 'top quality stone', 'leading marble shop',
    'dependable tile supplier', 'home renovation tiles', 'construction stone supplier', 'direct wholesale prices',
    'clear square feet calculation', 'authentic stone shop', 'best shop for flooring', 'standard quality tiles',
    'long lasting stone', 'excellent display', 'helpful sales team', 'quick order processing',
    'neat showroom display', 'complete flooring range', 'budget friendly tiles', 'luxury tiles collection',
    'prime stone supplier', 'commercial flooring dealer', 'residential tiles store', 'top recommendation in the city',
    'best tile dealer in the market', 'wide range of designs', 'reliable delivery', 'honest dealing',
    'proper material packing', 'no hidden charges', 'smooth transaction', 'first class tiles',
    'strong granite stone', 'satisfying purchase', 'superb customer support', '5 star stone merchant',
    'most trusted marble dealer', 'large variety of flooring', 'premium home finishes', 'best stone supplier'
  ],

  clinic: [
    'experienced doctor', 'best clinic near me', 'hygienic clinic', 'proper diagnosis',
    'polite medical staff', 'professional doctor consultation', 'clean examination room',
    'patient friendly clinic', 'trusted healthcare center', 'affordable consultation',
    'well managed clinic', 'caring staff', 'reliable clinic', 'minimal waiting time',
    'good patient care', 'gentle checkup', 'accurate guidance', 'transparent consultation',
    'supportive nursing team', 'clean clinic premises', 'routine health checkup',
    'top rated clinic', 'patient listening doctor', 'respectful staff', 'punctual doctor',
    'safe clinic environment', 'genuine medical advice', 'dependable doctor',
    'systematic clinic management', 'calm and clean atmosphere', 'honest consultation fee',
    'family healthcare clinic', 'attentive medical care', 'helpful reception desk'
  ],

  coaching: [
    'best coaching institute', 'experienced teachers', 'good study environment',
    'concept clarity', 'supportive faculty', 'regular test practice', 'dedicated teachers',
    'top coaching centre in the area', 'quality education', 'personal attention',
    'student friendly atmosphere', 'disciplined classroom', 'affordable fee structure',
    'proper study guidance', 'reliable coaching institute', 'interactive learning',
    'skilled instructors', 'doubt clearing sessions', 'positive classroom culture',
    'good mentoring', 'well structured classes', 'focus on fundamentals',
    'thorough subject preparation', 'patient teaching staff', 'inspiring mentors',
    'organized study plan', 'timely syllabus completion', 'motivating teachers'
  ],

  gym: [
    'best gym near me', 'clean workout space', 'quality gym equipment', 'supportive gym trainers',
    'good workout atmosphere', 'hygienic gym premises', 'motivating fitness center',
    'spacious workout floor', 'friendly gym staff', 'well maintained gym', 'affordable gym membership',
    'top fitness club in town', 'positive workout vibe', 'proper gym ventilation',
    'helpful gym trainers', 'great fitness community', 'clean locker area', 'regular equipment maintenance'
  ],

  salon: [
    'best salon in the area', 'hygienic salon', 'experienced hair stylist', 'polite salon staff',
    'clean premises', 'relaxing atmosphere', 'professional beauty service', 'top rated salon',
    'affordable parlour', 'good customer care', 'trusted salon', 'clean equipment',
    'patient styling', 'neat and clean setup', 'value for money salon', 'courteous salon team'
  ],

  cafe: [
    'delicious food', 'hygienic kitchen', 'best restaurant near me', 'pleasant ambience',
    'fast service', 'fresh food quality', 'polite staff', 'family friendly atmosphere',
    'affordable dining', 'clean seating', 'top food spot in town', 'tasty preparation',
    'cozy seating', 'prompt service', 'clean dining area', 'great culinary experience'
  ],

  automotive: [
    'honest mechanic', 'reliable vehicle service', 'best workshop near me', 'timely vehicle delivery',
    'genuine advice', 'fair labor charges', 'clean workshop', 'experienced technicians',
    'quick vehicle repair', 'trusted garage in town', 'proper vehicle checkup', 'transparent pricing'
  ],

  realestate: [
    'trusted property dealer', 'honest real estate consultant', 'transparent property deals',
    'best broker in the area', 'fair guidance', 'reliable property agent',
    'smooth documentation assistance', 'clear property advice', 'professional real estate service'
  ],

  retail: [
    'wide variety of products', 'best shopping experience', 'fair pricing', 'honest shopkeeper',
    'quality products', 'polite customer service', 'top store in the market', 'reliable dealer',
    'wholesale rates', 'trusted showroom', 'good stock availability', 'pleasant shopping'
  ],

  other: [
    'outstanding service', 'professional team', 'prompt customer support', 'reliable business',
    'fair and transparent dealing', 'high quality work', 'courteous staff', 'timely execution'
  ]
};

// Specialized booster keywords for subcategories (strictly non-specific, non-personal, no fake promises)
export const SUBCATEGORY_KEYWORDS: Record<string, string[]> = {
  // Marble Subcategories
  marble_granite: [
    'best marble shop', 'marble and granite dealer', 'wholesale marble rates',
    'quality granite slabs', 'durable stone dealer', 'trusted marble showroom'
  ],
  tiles_showroom: [
    'top tiles showroom', 'quality floor tiles', 'wall tiles dealer',
    'modern tile designs', 'bathroom tiles collection', 'large tile display'
  ],
  flooring_supplier: [
    'flooring stone supplier', 'best flooring shop', 'reliable building stone',
    'durable floor tiles', 'complete flooring collection'
  ],
  sanitary_bath: [
    'sanitaryware store', 'bathroom fittings showroom', 'quality bath fittings',
    'designer sanitary dealer', 'complete bathroom solutions'
  ],

  // Clinic Subcategories
  dental: [
    'best dental clinic', 'experienced dentist', 'hygienic dental clinic',
    'patient friendly doctor', 'proper dental checkup', 'clean dental setup',
    'affordable consultation fee', 'trusted dentist in town', 'gentle dental care'
  ],
  general_physician: [
    'experienced general physician', 'proper diagnosis', 'reliable family doctor',
    'patient friendly clinic', 'clean clinic setup', 'caring medical staff'
  ],
  dermatology: [
    'skin clinic in town', 'experienced skin doctor', 'proper skin consultation',
    'hygienic clinic setup', 'caring dermatologist', 'clean premises'
  ],
  eye: [
    'reliable eye clinic', 'experienced eye doctor', 'proper eye checkup',
    'hygienic clinic premises', 'patient friendly ophthalmologist'
  ],
  pediatric: [
    'caring child specialist', 'patient pediatrician', 'gentle child checkup',
    'clean clinic environment', 'reassuring doctor for kids'
  ],
  orthopedic: [
    'experienced orthopedic doctor', 'proper bone and joint care',
    'patient consultation', 'reliable joint specialist', 'thorough diagnosis'
  ],
  physiotherapy: [
    'attentive physiotherapist', 'guided exercises', 'clean therapy setup',
    'polite staff', 'supportive rehabilitation care'
  ],

  // Coaching Subcategories
  coaching_centre: [
    'best coaching centre', 'experienced academic teachers', 'good study environment',
    'concept clarity', 'supportive faculty', 'regular test practice'
  ],
  computer_institute: [
    'best computer institute', 'practical computer training', 'skilled instructors',
    'good computer lab', 'supportive IT faculty', 'hands-on practice'
  ],
  competitive_exams: [
    'focused exam guidance', 'disciplined study atmosphere', 'regular mock practice',
    'experienced mentors', 'concept building sessions'
  ],
  tuitions: [
    'supportive tuition teacher', 'personal attention for students',
    'fundamental concept clarity', 'disciplined tuition classes'
  ],
  spoken_english: [
    'spoken english classes', 'communication skills training',
    'supportive english trainer', 'interactive speaking practice'
  ]
};

// ==========================================
// 2. ENGLISH REVIEW TEMPLATES (30 Core + 20 Closers = 600 combinations)
// ==========================================
export const ENGLISH_TEMPLATES: string[] = [
  'Had a truly pleasant experience with {business}. The entire team was courteous, attentive, and efficient throughout.',
  'Finding a dependable place like {business} was a relief. The staff is polite, the premises are spotless, and the dealing is honest.',
  'Extremely satisfied with the service at {business}. Everything was handled with great care and transparent guidance.',
  'Very professional setup at {business}. They listen to your requirements patiently and deliver exactly what was promised.',
  'One of the most reliable businesses in {city}. Honest rates, zero hidden charges, and very welcoming behavior.',
  'Visiting {business} was a wonderful decision. The team is dedicated, punctual, and highly focused on customer satisfaction.',
  'Great quality of service at {business}. The owner and staff members are down to earth and speak with utmost respect.',
  'From the first inquiry to the final delivery, my experience with {business} has been smooth and completely stress-free.',
  'Top-notch service and very reasonable pricing at {business}. They treat every customer with genuine care and dedication.',
  'The team at {business} truly values customer time. Clean environment, courteous staff, and very prompt assistance.',
  'Very organized and well managed! {business} stands out for their honest communication and consistent quality.',
  'Impressed by the humble attitude of everyone at {business}. They explain all details thoroughly without pushing unnecessary things.',
  'Outstanding attention to detail at {business}. They maintain high standards of quality and deliver on their commitments.',
  'It is rare to find such genuine and straightforward service these days. {business} exceeded all our expectations.',
  'A very calm, professional, and well-maintained establishment. The staff at {business} is always ready to assist with a smile.',
  'Completely satisfied with the support received at {business}. Clear guidance, fair pricing, and top level customer care.',
  'The positive reputation of {business} in {city} is well deserved. Consistent quality and very dependable team.',
  'Courteous staff, hygienic atmosphere, and very fair pricing. {business} has become our go-to place for all needs.',
  'Very refreshing experience at {business}. The process was quick, well explained, and handled by experienced professionals.',
  'Thank you to the entire team at {business} for such wonderful service. Everything was done promptly and with high sincerity.',
  'A seamless experience from start to finish at {business}. The staff is very well trained and always polite.',
  'High quality service combined with humble hospitality. {business} is definitely setting a great standard in {city}.',
  'Very transparent dealings and polite communication. {business} proved to be totally worth our trust and time.',
  'Honest guidance, clean surroundings, and fast turnaround. {business} is hands down the best option in our area.',
  'Appreciate the patience and dedication of the team at {business}. They made sure every small question was answered.',
  'Exceptional standards maintained at {business}. The staff takes personal interest in making sure the customer is satisfied.',
  'Clean, dependable, and prompt! {business} delivered exactly as promised without any unnecessary delays.',
  'Remarkable service and very polite behavior. {business} has earned our permanent trust and respect.',
  'A wonderful experience all around. The team at {business} is humble, skilled, and very transparent.',
  'Truly a benchmark for customer service in {city}. {business} handled everything with perfection and honesty.'
];

export const ENGLISH_CLOSERS: string[] = [
  ' Highly recommended to all friends and family!',
  ' Truly a 5-star experience from start to finish.',
  ' Will definitely return whenever needed.',
  ' Keep up the fantastic work and service!',
  ' A solid 5 out of 5 stars from my side.',
  ' Wholeheartedly recommending them to everyone.',
  ' Absolutely worth every penny.',
  ' So glad we chose this place.',
  ' Best service in the entire locality!',
  ' Deserves more than 5 stars for this dedication.',
  ' Very grateful for their prompt assistance.',
  ' Anyone looking for genuine service must visit here.',
  ' Will certainly suggest this to others in my circle.',
  ' Fully satisfied and happy with the results.',
  ' A big thumbs up to the entire team!',
  ' Cannot recommend them enough.',
  ' Completely satisfied with the overall experience.',
  ' Five stars all the way!',
  ' Looking forward to visiting again.',
  ' Thank you for the wonderful experience!'
];

// ==========================================
// 3. PURE NATURAL HINDI TEMPLATES (30 Core + 20 Closers = 600 combinations)
// NOT translated: written organically as real Indian customers write in Devanagari.
// ==========================================
export const HINDI_TEMPLATES: string[] = [
  '{business} पर हमारा अनुभव बहुत ही सुखद और संतोषजनक रहा। यहाँ का स्टाफ बहुत शालीन और मददगार है।',
  'काफी समय बाद ऐसी जगह देखने को मिली जहाँ ग्राहकों की बात पूरी तसल्ली से सुनी जाती है। {business} में काम बहुत ईमानदारी से हुआ।',
  '{business} की सबसे अच्छी बात यह है कि यहाँ कोई झूठे वादे या फालतू की बातें नहीं होतीं। सीधा, सच्चा और साफ काम।',
  'पहली बार {business} गया था, लेकिन सर्विस और व्यवहार देखकर दिल खुश हो गया। हर चीज़ समय पर और सही तरीके से की गई।',
  'पूरे {city} में {business} जैसा शांत और व्यवस्थित माहौल मिलना मुश्किल है। काम में पूरी सफाई और पारदर्शिता दिखाई दी।',
  '{business} का स्टाफ बहुत ही विनम्र है। किसी भी सवाल का जवाब बहुत धैर्य से देते हैं और सही सलाह देते हैं।',
  'हमारे पूरे परिवार को {business} की व्यवस्था और सेवा बहुत पसंद आई। दाम भी बिल्कुल वाजिब हैं और काम भी उत्तम।',
  '{business} में न समय की बर्बादी हुई और न ही कोई परेशानी आई। बहुत ही पेशेवर और सुलझे हुए लोग हैं यहाँ।',
  'अगर आप सही मार्गदर्शन और भरोसेमंद काम चाहते हैं, तो {business} बिल्कुल सही जगह है। बहुत अच्छा अनुभव रहा।',
  '{business} पर काम की क्वालिटी और बात करने का सलीका दोनों ही बेहतरीन हैं। ग्राहक को पूरा सम्मान देते हैं।',
  '{business} से जुड़कर बहुत अच्छा लगा। जो बात तय हुई थी, बिल्कुल उसी तरह जिम्मेदारी से काम पूरा किया गया।',
  'आजकल ऐसी ईमानदारी से काम करने वाले कम ही मिलते हैं। {business} की टीम ने हमारा भरोसा पूरी तरह जीत लिया।',
  '{city} के आसपास {business} जैसी बढ़िया और तसल्लीबख्श सर्विस कहीं नहीं देखी। बहुत ही सुलझा हुआ स्टाफ है।',
  '{business} की व्यवस्था बहुत ही साफ-सुथरी और अनुशासित है। हर काम तय समय के अंदर पूरा कर दिया गया।',
  'यहाँ आकर लगा कि सही जगह पहुँचे हैं। {business} के ओनर और पूरे स्टाफ का बर्ताव बहुत ही आत्मीय और सहयोगपूर्ण है।',
  '{business} पर हमारा काम बिना किसी झंझट के बहुत आसानी से हो गया। पूरी टीम बहुत ही मेहनती और जिम्मेदार है।',
  'पैसा वसूल अनुभव रहा! {business} में क्वालिटी से कोई समझौता नहीं किया जाता और रेट्स भी पूरी तरह पारदर्शी हैं।',
  '{business} ने जिस सादगी और विनम्रता से हमारी जरूरत को समझा, वह सच में काबिले तारीफ है।',
  'एक बार {business} जाने के बाद किसी और जगह जाने की जरूरत ही महसूस नहीं होती। बहुत ही पक्का और खरा काम।',
  '{business} का पूरा सिस्टम बहुत बढ़िया है। ग्राहकों के समय की कद्र करते हैं और हर चीज़ पहले से स्पष्ट रखते हैं।',
  '{business} की टीम को बहुत-बहुत धन्यवाद। बहुत ही शांत और सकारात्मक माहौल में पूरा काम निपटाया।',
  'हमारी उम्मीद से कहीं बेहतर अनुभव रहा {business} में। काम भी समय पर हुआ और स्टाफ ने भी पूरा सहयोग दिया।',
  '{business} पर हर ग्राहक को बराबर ध्यान और आदर दिया जाता है। बहुत ही भरोसेमंद और प्रतिष्ठित संस्थान है।',
  'सच्चाई और ईमानदारी से काम करने के लिए {business} की जितनी तारीफ की जाए कम है। बहुत ही उम्दा काम।',
  '{business} में काम कराने का अनुभव बहुत सुकून देने वाला रहा। कोई उलझन नहीं, सिर्फ काम पर ध्यान।',
  'अगर आप बिना किसी परेशानी के अच्छा काम चाहते हैं, तो {business} आपके लिए सबसे बेहतरीन विकल्प है।',
  '{business} का काम देखकर बहुत संतुष्टि हुई। बातचीत का तरीका बहुत शालीन है और काम में कोई कमी नहीं छोड़ी।',
  '{city} में रहने वाले सभी लोगों के लिए {business} एक बहुत ही विश्वसनीय और उत्तम जगह है।',
  '{business} पर जो सम्मान और अच्छी सर्विस मिली, उसके लिए पूरी टीम का दिल से आभार। बहुत बढ़िया काम!',
  '{business} में हर चीज़ बहुत सुव्यवस्थित तरीके से की जाती है। सच में एक 5 स्टार अनुभव रहा यहाँ पर।'
];

export const HINDI_CLOSERS: string[] = [
  ' मेरी तरफ से पूरे 5 स्टार!',
  ' सभी को यहाँ आने की दिल से सलाह दूँगा।',
  ' आगे भी हमेशा यहीं आना पसंद करेंगे।',
  ' बहुत-बहुत धन्यवाद इस शानदार सेवा के लिए!',
  ' पूरी तरह से पैसा वसूल और तसल्लीबख्श अनुभव।',
  ' ऐसे ही बढ़िया काम करते रहें, शुभकामनाएँ!',
  ' अपने सभी दोस्तों और रिश्तेदारों को जरूर बताऊँगा।',
  ' 10 में से पूरे 10 नंबर!',
  ' बहुत खुशी हुई यहाँ की ईमानदारी देखकर।',
  ' एक बार जरूर जाकर अनुभव करें।',
  ' दिल से आभार पूरी टीम का!',
  ' इस इलाके की सबसे बेहतरीन जगह है यह।',
  ' पूरी तरह संतुष्ट और खुश हूँ।',
  ' ईश्वर आपके काम में और बरकत दे!',
  ' निश्चित रूप से 5 स्टार रेटिंग के हकदार हैं।',
  ' हमारा पूरा भरोसा जीत लिया इन्होंने।',
  ' बहुत ही सुखद और यादगार अनुभव रहा।',
  ' कोई कमी नहीं, सब कुछ बहुत बढ़िया था।',
  ' दोबारा जरूर यहाँ आएँगे।',
  ' बहुत-बहुत धन्यवाद!'
];

// ==========================================
// 4. NATURAL URBAN HINGLISH TEMPLATES (30 Core + 20 Closers = 600 combinations)
// NOT translated: written naturally in Roman Hindi / urban Hinglish as real users chat & post.
// ==========================================
export const HINGLISH_TEMPLATES: string[] = [
  '{business} me sach me bohot hi badhiya aur smooth experience raha. Staff ka nature bohot polite aur helpful hai.',
  'Pehli baar visit kiya tha {business} aur inka kaam aur dealing dekh kar dil khush ho gaya. Super satisfied!',
  '{business} ki sabse acchi baat yeh hai ki koi hidden charges ya faltu baatein nahi hain. Sab kuch bilkul clear aur genuine.',
  'Pure {city} me {business} jaisi clean, organized aur professional jagah milna kaafi mushkil hai.',
  '{business} ka staff har customer ko proper time aur respect deta hai. Har cheez detail me samjhate hain.',
  'Hamari family ka experience {business} ke saath bohot accha raha. Kaam bilkul time par aur perfect tareeke se hua.',
  '{business} me na koi time waste hua na koi confusion. Bohot hi systematic aur disciplined tarike se sab handle kiya.',
  'Agar aapko ek honest aur reliable jagah chahiye to {business} definitely best option hai.',
  '{business} ke owner aur staff dono hi bohot humble hain. Kisi bhi cheez me push nahi karte, bilkul genuine advice dete hain.',
  'Service quality aur customer support dono me {business} 10 on 10 hai. Ekdum hassle free dealing rahi.',
  '{business} me jo commit kiya tha bilkul wahi deliver kiya. Aajkal aisi commitment bohot kam dekhne ko milti hai.',
  '{city} me rehte ho to ek baar {business} zaroor try karo. Kaam dekh kar aapka bhi dil khush ho jayega.',
  'Bohot hi hygienic aur well maintained setup hai {business} ka. Staff ka behavior ekdum friendly aur respectful hai.',
  '{business} ki service dekh ke laga ki paisa bilkul sahi jagah invest hua hai. Zero complaints!',
  'Mere friend ne recommend kiya tha {business} aur wahan jakar bilkul nirasha nahi hui. Top notch service!',
  '{business} par customer satisfaction ko sabse zyada priority di jaati hai. Bohot impressed hua inki honesty se.',
  'Everything was on point at {business}. Quick processing, polite communication aur time par delivery.',
  '{business} ne jis tarah se hamari requirement ko samjha aur solution diya, wo wakai bohot commendable hai.',
  'Aage se koi bhi kaam ho to hum definitely {business} hi aayenge. Full trust ban gaya hai inpe.',
  '{business} ka calm aur positive atmosphere bohot accha laga. Koi jaldbaazi ya pressure nahi hota.',
  'Thank you so much to the whole team of {business}. Itna accha aur tension-free experience dene ke liye.',
  'Kaam ki finishing aur quality dono ekdum top class hai {business} me. Highly impressed!',
  '{business} par har cheez ka rate bilkul genuine aur fair hai. Bilkul straightforward aur honest dealing.',
  'Bohot kam jagah aisi hoti hain jahan customer ko itni value milti hai. {business} is truly one of them.',
  'Clean environment, trained staff aur transparent process. {business} deserves all the praise.',
  '{business} me humara kaam itni aasani se ho gaya ki koi effort hi nahi lagana pada. Very smooth process.',
  'Genuine log hain {business} me aur kaam bhi bilkul solid karte hain. Bilkul 5 star service mili.',
  '{city} me aisi reliable aur dedicated service dekh kar bohot accha laga. Kudos to {business}!',
  '{business} ka customer handling ka tareeka bohot hi professional aur humble hai. Totally worth it.',
  'Overall super happy with the service at {business}. Ek baar visit karoge to fan ho jaoge.'
];

export const HINGLISH_CLOSERS: string[] = [
  ' Meri taraf se solid 5 stars!',
  ' Highly recommended to all my friends and family.',
  ' Aage se hamesha yahin aana fix ho gaya!',
  ' Thank you so much for the wonderful service.',
  ' Ekdum paisa vasool experience raha!',
  ' Keep up the great work guys!',
  ' 10/10 service, definitely visit karein.',
  ' Truly one of the best in the city.',
  ' Bohot accha laga yahan aakar.',
  ' Full 5 star rating banti hai inke liye!',
  ' Absolutely loved the experience.',
  ' Har kisi ko recommend karunga.',
  ' Super happy and fully satisfied!',
  ' Genuine aur trustworthy jagah hai yeh.',
  ' Thumbs up to the entire team!',
  ' Best in the market hands down.',
  ' Zero complaints, full satisfaction.',
  ' Fir se zaroor aana hoga yahan.',
  ' Great experience all around!',
  ' Dil se thanks aisi service ke liye!'
];

// ==========================================
// 5. HELPER FUNCTIONS FOR KEYWORDS & TEMPLATES
// ==========================================

export function getKeywordsForCategory(category: string, subcategory?: string): string[] {
  const normCat = (category || '').toLowerCase().trim();
  const normSub = (subcategory || '').toLowerCase().trim();

  let baseList: string[] = CATEGORY_KEYWORDS.other;

  if (normCat.includes('marble') || normCat.includes('tile') || normCat.includes('granite')) {
    baseList = CATEGORY_KEYWORDS.marble;
  } else if (normCat.includes('clinic') || normCat.includes('doctor') || normCat.includes('health')) {
    baseList = CATEGORY_KEYWORDS.clinic;
  } else if (normCat.includes('coach') || normCat.includes('educat') || normCat.includes('tutor') || normCat.includes('class')) {
    baseList = CATEGORY_KEYWORDS.coaching;
  } else if (normCat.includes('gym') || normCat.includes('fit')) {
    baseList = CATEGORY_KEYWORDS.gym;
  } else if (normCat.includes('salon') || normCat.includes('parlour') || normCat.includes('spa')) {
    baseList = CATEGORY_KEYWORDS.salon;
  } else if (normCat.includes('cafe') || normCat.includes('restaur') || normCat.includes('food')) {
    baseList = CATEGORY_KEYWORDS.cafe;
  } else if (normCat.includes('auto') || normCat.includes('car') || normCat.includes('garage')) {
    baseList = CATEGORY_KEYWORDS.automotive;
  } else if (normCat.includes('real') || normCat.includes('property')) {
    baseList = CATEGORY_KEYWORDS.realestate;
  } else if (normCat.includes('retail') || normCat.includes('shop') || normCat.includes('store')) {
    baseList = CATEGORY_KEYWORDS.retail;
  }

  // Look for specialized subcategory keywords
  let subList: string[] = [];
  for (const [key, keywords] of Object.entries(SUBCATEGORY_KEYWORDS)) {
    if (normSub.includes(key) || key.includes(normSub)) {
      subList = keywords;
      break;
    }
  }

  return subList.length > 0 ? [...subList, ...baseList] : baseList;
}

function fillTemplate(
  template: string,
  businessName: string,
  city?: string,
  nearbyAreas?: string[]
): string {
  let locationStr = '';
  if (city && nearbyAreas && nearbyAreas.length > 0) {
    locationStr = Math.random() > 0.5 ? nearbyAreas[0] : city;
  } else if (city) {
    locationStr = city;
  } else if (nearbyAreas && nearbyAreas.length > 0) {
    locationStr = nearbyAreas[0];
  } else {
    locationStr = 'this area';
  }

  return template
    .replace(/\{business\}/g, businessName)
    .replace(/\{city\}/g, locationStr);
}

/**
 * Generates an initial pool of unique reviews based on Admin language choice.
 * 
 * @param langMode 'en' | 'hi' | 'hinglish' | 'mixed'
 */
export function generateInitialReviewPool(
  businessName: string,
  category: string,
  subcategory?: string,
  city?: string,
  nearbyAreas?: string[],
  totalCount: number = 20,
  langMode: 'en' | 'hi' | 'hinglish' | 'mixed' = 'en'
): {
  flatReviews: string[];
  reviewsByLang: { en: string[]; hi: string[]; hinglish: string[] };
} {
  const reviewsByLang: { en: string[]; hi: string[]; hinglish: string[] } = {
    en: [],
    hi: [],
    hinglish: []
  };

  const countPerLang = langMode === 'mixed' ? Math.max(6, Math.ceil(totalCount / 3)) : totalCount;

  // 1. English Pool
  if (langMode === 'en' || langMode === 'mixed') {
    const enPool = new Set<string>();
    let attempts = 0;
    while (enPool.size < countPerLang && attempts < 100) {
      attempts++;
      const tmpl = ENGLISH_TEMPLATES[Math.floor(Math.random() * ENGLISH_TEMPLATES.length)];
      const closer = Math.random() > 0.3 ? ENGLISH_CLOSERS[Math.floor(Math.random() * ENGLISH_CLOSERS.length)] : '';
      const filled = fillTemplate(tmpl, businessName, city, nearbyAreas) + closer;
      enPool.add(filled);
    }
    reviewsByLang.en = Array.from(enPool);
  }

  // 2. Hindi Pool (शुद्ध स्वाभाविक देवनागरी)
  if (langMode === 'hi' || langMode === 'mixed') {
    const hiPool = new Set<string>();
    let attempts = 0;
    while (hiPool.size < countPerLang && attempts < 100) {
      attempts++;
      const tmpl = HINDI_TEMPLATES[Math.floor(Math.random() * HINDI_TEMPLATES.length)];
      const closer = Math.random() > 0.3 ? HINDI_CLOSERS[Math.floor(Math.random() * HINDI_CLOSERS.length)] : '';
      const filled = fillTemplate(tmpl, businessName, city, nearbyAreas) + closer;
      hiPool.add(filled);
    }
    reviewsByLang.hi = Array.from(hiPool);
  }

  // 3. Hinglish Pool (Natural Roman Hindi)
  if (langMode === 'hinglish' || langMode === 'mixed') {
    const hgPool = new Set<string>();
    let attempts = 0;
    while (hgPool.size < countPerLang && attempts < 100) {
      attempts++;
      const tmpl = HINGLISH_TEMPLATES[Math.floor(Math.random() * HINGLISH_TEMPLATES.length)];
      const closer = Math.random() > 0.3 ? HINGLISH_CLOSERS[Math.floor(Math.random() * HINGLISH_CLOSERS.length)] : '';
      const filled = fillTemplate(tmpl, businessName, city, nearbyAreas) + closer;
      hgPool.add(filled);
    }
    reviewsByLang.hinglish = Array.from(hgPool);
  }

  // Construct flat list based on mode
  let flatReviews: string[] = [];
  if (langMode === 'hi') {
    flatReviews = reviewsByLang.hi;
  } else if (langMode === 'hinglish') {
    flatReviews = reviewsByLang.hinglish;
  } else if (langMode === 'en') {
    flatReviews = reviewsByLang.en;
  } else {
    // Interleave mixed reviews
    const maxLen = Math.max(reviewsByLang.en.length, reviewsByLang.hi.length, reviewsByLang.hinglish.length);
    for (let i = 0; i < maxLen; i++) {
      if (reviewsByLang.hi[i]) flatReviews.push(reviewsByLang.hi[i]);
      if (reviewsByLang.hinglish[i]) flatReviews.push(reviewsByLang.hinglish[i]);
      if (reviewsByLang.en[i]) flatReviews.push(reviewsByLang.en[i]);
    }
  }

  return {
    flatReviews,
    reviewsByLang
  };
}

/**
 * Dynamically generates a single review in a specific language.
 */
export function generateDynamicReview(
  businessName: string,
  category: string,
  subcategory?: string,
  city?: string,
  nearbyAreas?: string[],
  lang: 'en' | 'hi' | 'hinglish' = 'en'
): string {
  if (lang === 'hi') {
    const tmpl = HINDI_TEMPLATES[Math.floor(Math.random() * HINDI_TEMPLATES.length)];
    const closer = Math.random() > 0.3 ? HINDI_CLOSERS[Math.floor(Math.random() * HINDI_CLOSERS.length)] : '';
    return fillTemplate(tmpl, businessName, city, nearbyAreas) + closer;
  }

  if (lang === 'hinglish') {
    const tmpl = HINGLISH_TEMPLATES[Math.floor(Math.random() * HINGLISH_TEMPLATES.length)];
    const closer = Math.random() > 0.3 ? HINGLISH_CLOSERS[Math.floor(Math.random() * HINGLISH_CLOSERS.length)] : '';
    return fillTemplate(tmpl, businessName, city, nearbyAreas) + closer;
  }

  const tmpl = ENGLISH_TEMPLATES[Math.floor(Math.random() * ENGLISH_TEMPLATES.length)];
  const closer = Math.random() > 0.3 ? ENGLISH_CLOSERS[Math.floor(Math.random() * ENGLISH_CLOSERS.length)] : '';
  return fillTemplate(tmpl, businessName, city, nearbyAreas) + closer;
}
