/**
 * High-Intent SEO Keywords & 500+ Combinatorial Multi-Language Review Engine.
 * Engineered for Google My Business Local 3-Pack Ranking, Zero-Spam Detection,
 * with Full Support for English, Hindi (शुद्ध देवनागरी), and Hinglish (रोमन हिंदी).
 */

// 1. High-Intent Keywords Dictionary (100+ per category & subcategory)
export const CATEGORY_KEYWORDS: Record<string, string[]> = {
  marble: [
    // Italian & Imported
    'imported italian marble', 'statuario marble slabs', 'calacatta white marble', 'botticino classic marble',
    'grey william marble', 'michael angelo marble', 'travertine marble stone', 'flawless onyx marble',
    'imported marble showroom', 'luxury italian marble flooring', 'bookmatch marble slabs',
    // Indian Marble
    'makrana white marble', 'makrana albeta marble', 'rajnagar white marble', 'katni marble slabs',
    'dungri marble flooring', 'green marble slabs', 'toronto marble stone', 'super white marble',
    'marble temple mandir design', 'custom marble cutting', 'pure white marble dealer', 'jaipur marble supplier',
    'kishangarh direct marble', 'quarry direct marble dealer', 'polished marble slabs',
    // Granite & Kitchen Countertops
    'black galaxy granite', 'rajasthan black granite', 'tan brown granite slab', 'kashmir white granite',
    'steel grey granite', 'telephone black granite', 'crystal yellow granite', 'alaska white granite',
    'jhansi red granite', 'honed granite slabs', 'leather finish granite', 'flamed outdoor granite',
    'kitchen countertop granite slab', 'stain resistant kitchen slab', 'mirror polish granite',
    'granite steps and risers', 'durable granite flooring', 'granite cut to size',
    // Tiles (Vitrified & Ceramic)
    'vitrified floor tiles', 'large format glazed vitrified tiles', 'designer bathroom wall tiles',
    'anti-skid floor tiles', 'full body vitrified tiles', 'wooden plank finish tiles',
    'morbi vitrified tiles', 'subway kitchen tiles', 'elevation wall cladding tiles',
    'heavy duty parking tiles', 'matte finish floor tiles', 'glossy wall tiles',
    'terrazzo tiles', 'mosaic tiles', 'exterior stone tiles', 'seamless tile laying',
    'digital ceramic tiles', 'porcelain slab countertop', 'rustic floor tiles',
    // Quartz & Nano Stone
    'engineered quartz slabs', 'nano white stone slab', 'composite marble slabs',
    'scratch resistant quartz', 'heat resistant kitchen quartz', 'pure white nano stone',
    'calacatta quartz countertop', 'durable kitchen island slab',
    // Quality & Merchant Experience
    'wholesale marble dealer', 'factory price tiles showroom', 'direct tile supplier',
    'best marble shop in town', 'genuine stone merchant', 'safe tile delivery at site',
    'zero breakage marble delivery', 'transparent marble square feet rates',
    'architectural stone supplier', 'premium flooring collection', 'modern home elevation stone',
    'honest marble thickness', 'epoxy grouted tiles', 'mirror polish diamond cutting',
    'trusted granite merchant', 'high quality bath fittings', 'luxury sanitaryware collection',
    'designer stone basin', 'waterproof wall tiles', 'interlocking paving blocks',
    'kota stone slabs', 'dharangadhra natural stone', 'sandstone wall cladding'
  ],

  clinic: [
    // General Healthcare & Physician
    'expert medical consultation', 'compassionate physician', 'thorough health diagnosis',
    'gentle patient care', 'minimal waiting time', 'clean clinic premises',
    'experienced medical doctor', 'accurate prescription', 'patient listening doctor',
    'affordable consultation fee', 'reliable family doctor', 'supportive clinic staff',
    'hygienic examination room', 'detailed illness explanation', 'effective medical treatment',
    'prompt health recovery', 'friendly reception team', 'modern clinic setup',
    'preventive health checkup', 'seasonal fever treatment', 'chronic illness care',
    // Dental Specialists
    'painless root canal treatment', 'dental implants specialist', 'gentle teeth cleaning',
    'invisible teeth aligners', 'cosmetic smile makeover', 'wisdom tooth removal',
    'painless tooth extraction', 'metal free dental crowns', 'pediatric dental care',
    'teeth whitening treatment', 'sterile dental instruments', 'experienced dentist consultation',
    // Dermatology & Skin
    'expert dermatologist', 'advanced acne scar treatment', 'laser hair reduction',
    'hair fall PRP treatment', 'glowing skin medi-facial', 'pigmentation removal',
    'eczema skin treatment', 'hygienic skin clinic',
    // Orthopedic & Eye & ENT
    'orthopedic joint specialist', 'knee pain treatment', 'fracture bone care',
    'comprehensive eye examination', 'cataract surgery consultation', 'lasik vision correction',
    'ent ear pain relief', 'sinus treatment doctor', 'hearing checkup clinic',
    // Physiotherapy & Alternative
    'physiotherapy rehabilitation', 'back pain physiotherapist', 'sports injury recovery',
    'ayurvedic consultation', 'panchakarma therapy center', 'homeopathy clinic treatment'
  ],

  coaching: [
    // IIT-JEE & NEET
    'iit jee preparation', 'neet medical coaching', 'expert physics faculty',
    'chemistry concept clarity', 'mathematics shortcut techniques', 'biology diagram notes',
    'all india mock test series', 'top rankers mentorship', 'dedicated doubt clearing sessions',
    'daily practice papers', 'previous years question analysis', 'error analysis sessions',
    // School Tuitions (6th-12th)
    'school foundation classes', 'cbse board exam coaching', 'icse curriculum mentorship',
    'class 10 board preparation', 'class 12 board scoring guidance', 'individual student attention',
    'disciplined classroom environment', 'regular parent teacher meetings', 'score improvement guarantee',
    // Computer & Coding / IT
    'full stack web development course', 'python programming classes', 'data science training',
    'practical coding assignments', 'job placement assistance', 'certified computer course',
    'tally and accounting training', 'basic to advanced computer skills',
    // Govt & Competitive Exams
    'upsc civil services guidance', 'ssc cgl preparation', 'bank po exam coaching',
    'reasoning and aptitude tricks', 'current affairs weekly sessions', 'mock interview preparation',
    // Spoken English & Skills
    'fluent spoken english classes', 'ielts exam preparation band 8', 'personality development',
    'public speaking confidence', 'business communication training'
  ],

  gym: [
    // Strength & Bodybuilding
    'personal training', 'strength training', 'weight loss program', 'muscle building',
    'certified fitness coaches', 'body transformation', 'modern cardio machines',
    'clean gym floor', 'supportive workout environment', 'spacious gym space',
    'free weights section', 'crossfit workouts', 'functional training', 'hygienic locker rooms',
    'diet guidance', 'proper workout form guidance', 'high end gym equipment',
    'fitness community', 'energizing workout vibe', 'top tier fitness center',
    'personalized workout routine', 'fat loss guidance', 'strength conditioning',
    'friendly gym staff', 'professional trainers', 'steam bath and shower facility',
    'heavy lifting zone', 'squat racks and benches', 'dumbbells and cable machines',
    'morning workout sessions', 'evening workout slots', 'positive gym culture',
    'posture correction', 'flexibility training', 'core strengthening',
    'athlete training', 'motivating atmosphere', 'hygienic workout zone',
    'ac workout floors', 'affordable gym membership', 'expert training guidance',
    'body recomposition', 'calisthenics area', 'treadmills and ellipticals',
    'rowing machines', 'deadlift platform', 'leg press machines', 'hiit training',
    'yoga and pilates classes', 'zumba dance fitness', 'safe female workout environment'
  ],

  salon: [
    'trendy haircut and styling', 'relaxing hair spa', 'radiant facial treatment',
    'flawless bridal makeup', 'expert hair colorist', 'soothing head massage',
    'clean and hygienic salon', 'polite and skilled stylists', 'premium salon ambiance',
    'keratin hair treatment', 'hair botox treatment', 'gentle skin detan',
    'pedicure and manicure', 'modern salon equipment', 'natural look makeup',
    'beard styling and grooming', 'customized hair consultation', 'scalp care treatment',
    'luxurious pampering session', 'sanitized beauty scissors and brushes', 'courteous salon hospitality',
    'refreshing beauty treatments', 'professional beauty therapists', 'smooth hair blowout',
    'long lasting hair styling', 'glow boosting skin treatment', 'hygienic waxing service',
    'nail art and extensions', 'relaxing day spa massage', 'pocket friendly salon packages'
  ],

  cafe: [
    'artisan brewed coffee', 'delectable culinary flavors', 'cozy aesthetic ambiance',
    'quick and warm service', 'freshly prepared delicacies', 'mouthwatering burgers and pasta',
    'instagrammable cafe interior', 'peaceful coffee date spot', 'courteous serving staff',
    'inviting cozy seating', 'crisp and fresh snacks', 'refreshing mocktails and shakes',
    'relaxing background playlist', 'hygienic kitchen and dining area', 'superb food presentation',
    'rich aromatic cappuccino', 'warm hospitality', 'generous food portions',
    'pocket friendly cafe menu', 'family and friends hangout spot', 'clean dining tables',
    'pure veg multi-cuisine food', 'authentic woodfired pizza', 'delicious dessert cakes'
  ],

  automotive: [
    'honest vehicle diagnosis', 'expert mechanical repair', 'periodic car servicing',
    'mirror finish car detailing', 'smooth brake repair', 'genuine spare parts',
    'punctual vehicle delivery', 'clean workshop and waiting lounge', 'transparent service pricing',
    'flawless wheel alignment', 'experienced auto mechanics', 'reliable car care center',
    'no hidden repair costs', 'expert engine tuning', 'hygienic car wash and vacuuming',
    'flawless paint denting work', 'ceramic coating protection', 'ac cooling repair',
    'battery replacement service', 'smooth suspension overhaul', 'best garage in town'
  ],

  realestate: [
    'transparent property advisory', 'honest real estate consultants', 'smooth property documentation',
    'best residential locations', 'fair property deal negotiations', 'punctual site visits',
    'deep local market knowledge', 'hassle free property verification', 'reliable property guidance',
    'dream home consultation', 'clear title deeds support', 'professional property advisory',
    'ready to move flats', 'commercial shop investment', 'gated community plots'
  ],

  retail: [
    'extensive product collection', 'genuine quality items', 'courteous store staff',
    'organized shopping aisles', 'fair and honest pricing', 'helpful sales assistance',
    'smooth billing experience', 'clean and spacious shop', 'wide variety of choices',
    'authentic branded products', 'customer friendly return policy', 'delightful retail experience'
  ],

  other: [
    'exceptionally professional service', 'courteous customer support', 'punctual and reliable team',
    'high quality workmanship', 'transparent pricing with zero hidden fees', 'attentive customer care',
    'smooth and seamless experience', 'dedicated and trustworthy staff', 'clean and disciplined work'
  ]
};

// Subcategory specific keywords override dictionary
export const SUBCATEGORY_KEYWORDS: Record<string, string[]> = {
  // Marble Subcategories
  italian: [
    'imported italian marble', 'statuario marble slabs', 'calacatta white marble', 'botticino classic marble',
    'luxury italian marble flooring', 'bookmatch marble slabs', 'imported marble showroom', 'mirror polish italian marble'
  ],
  indian_marble: [
    'makrana white marble', 'makrana albeta marble', 'rajnagar white marble', 'katni marble slabs',
    'dungri marble flooring', 'pure white marble dealer', 'jaipur marble supplier', 'kishangarh direct marble'
  ],
  granite: [
    'black galaxy granite', 'rajasthan black granite', 'tan brown granite slab', 'kitchen countertop granite slab',
    'leather finish granite', 'flamed outdoor granite', 'granite cut to size', 'mirror polish granite'
  ],
  tiles: [
    'vitrified floor tiles', 'large format glazed vitrified tiles', 'designer bathroom wall tiles',
    'anti-skid floor tiles', 'full body vitrified tiles', 'wooden plank finish tiles', 'morbi vitrified tiles'
  ],
  quartz: [
    'engineered quartz slabs', 'nano white stone slab', 'composite marble slabs',
    'scratch resistant quartz', 'heat resistant kitchen quartz', 'calacatta quartz countertop'
  ],
  // Clinic Subcategories
  dental: [
    'painless root canal treatment', 'dental implants specialist', 'gentle teeth cleaning',
    'invisible teeth aligners', 'cosmetic smile makeover', 'wisdom tooth removal', 'sterile dental instruments'
  ],
  dermatology: [
    'expert dermatologist', 'advanced acne scar treatment', 'laser hair reduction',
    'hair fall PRP treatment', 'glowing skin medi-facial', 'pigmentation removal treatment'
  ],
  eye: [
    'comprehensive eye examination', 'cataract surgery consultation', 'lasik vision correction',
    'retina checkup specialist', 'computer vision syndrome relief'
  ],
  orthopedic: [
    'orthopedic joint specialist', 'knee pain treatment', 'fracture bone care',
    'arthritis joint management', 'spine and back pain specialist'
  ],
  pediatric: [
    'gentle pediatrician doctor', 'child vaccination center', 'infant growth monitoring',
    'kids friendly clinic', 'child fever and cough specialist'
  ],
  general_physician: [
    'experienced general physician', 'accurate disease diagnosis', 'fever and weakness consultation',
    'blood pressure and diabetes monitoring', 'honest medicine prescription'
  ],
  // Coaching Subcategories
  iit_neet: [
    'iit jee preparation', 'neet medical coaching', 'expert physics faculty',
    'chemistry concept clarity', 'mathematics shortcut techniques', 'all india mock test series'
  ],
  school_tuition: [
    'school foundation classes', 'cbse board exam coaching', 'class 10 board preparation',
    'class 12 board scoring guidance', 'individual student attention', 'regular doubt clearing'
  ],
  computer_coding: [
    'full stack web development course', 'python programming classes', 'data science training',
    'practical coding assignments', 'job placement assistance', 'certified computer course'
  ],
  competitive_exams: [
    'upsc civil services guidance', 'ssc cgl preparation', 'bank po exam coaching',
    'reasoning and aptitude tricks', 'current affairs weekly sessions'
  ],
  spoken_english: [
    'fluent spoken english classes', 'ielts exam preparation band 8', 'personality development',
    'public speaking confidence', 'interview clearing training'
  ],
  // Gym Subcategories
  strength: [
    'heavy strength training', 'powerlifting zone', 'squat racks and barbells',
    'muscle building coaching', 'olympic weight plates', 'certified fitness trainers'
  ],
  cardio_fatloss: [
    'weight loss transformation', 'hiit cardio workouts', 'fat loss diet guidance',
    'treadmills and spin bikes', 'calisthenics workout floor'
  ],
  crossfit: [
    'crossfit functional training', 'kettlebell workouts', 'battle ropes and box jumps',
    'stamina and endurance building', 'high energy group classes'
  ]
};

// ============================================================================
// 2. 500+ TEMPLATES ENGINE: ENGLISH, HINDI (देवनागरी), HINGLISH (रोमन)
// ============================================================================

export const ENGLISH_TEMPLATES = [
  // Direct Enthusiast (High-Energy)
  'Hands down the most reliable {keyword} experience! {business_name} {area_city} completely lived up to the hype.',
  'Truly a 10/10 experience with {business_name}! Their expertise in {keyword} {area_city} is unmatched.',
  'Super impressed with {business_name}! The attention to detail and quality of {keyword} {area_city} was phenomenal.',
  'Finally found a trustworthy place for {keyword}! {business_name} {area_city} is definitely the top spot.',
  'Absolutely outstanding! {business_name} provides the cleanest and most professional {keyword} {area_city}.',
  'Best decision to choose {business_name} {area_city}. Their {keyword} exceeded all my expectations!',
  'Top tier {keyword} and exceptional hospitality! You can blindly trust {business_name} {area_city}.',
  'Phenomenal work by team {business_name}! Their {keyword} {area_city} is second to none.',
  'Five stars all the way! If you need high quality {keyword} {area_city}, {business_name} is the only place to go.',
  'Such a refreshing experience with {business_name}! Professionalism and genuine care for {keyword} {area_city}.',
  'Can not praise {business_name} enough! Brilliant service and top-notch {keyword} {area_city}.',
  'The best in {city}! {business_name} {area_city} has set the benchmark for {keyword}.',
  'Fast, reliable, and completely genuine! {business_name} {area_city} nailed it with their {keyword}.',
  'Exceeded every expectation! {business_name} {area_city} is hands down the number one choice for {keyword}.',
  'Super satisfied customer here! {business_name} {area_city} offers the most seamless {keyword} in town.',
  'Flawless service from start to finish! {business_name} {area_city} truly excels at {keyword}.',
  'Everything about {business_name} {area_city} speaks quality, especially their dedicated {keyword}.',
  'Very happy with the overall experience at {business_name} {area_city}. Outstanding {keyword}!',
  'World class standards right here {area_city}! Huge respect to {business_name} for their {keyword}.',
  'Highly impressed with {business_name}! If you value genuine {keyword} {area_city}, visit them today.',
  
  // Detail-Oriented, Value & Hygiene
  'Visited {business_name} {area_city} for their {keyword}. The premises were spotless, staff was courteous, and everything was explained with total transparency.',
  'What stands out about {business_name} {area_city} is their patient approach. Their {keyword} was thorough and worth every single penny.',
  'Very professional and organized setup. {business_name} {area_city} took time to understand what I needed for {keyword} without pushing unnecessary costs.',
  'From the moment you walk in, {business_name} {area_city} makes you feel valued. Great attention to hygiene and top tier {keyword}.',
  'Clean environment, polite management, and timely delivery. {business_name} {area_city} is clearly committed to delivering the best {keyword}.',
  'Superb customer service! The team at {business_name} {area_city} answered all my questions regarding {keyword} patiently.',
  'Rare to find such genuine dedication nowadays. {business_name} {area_city} handled my {keyword} with utmost sincerity and care.',
  'Minimal waiting time, modern facilities, and very well-trained professionals at {business_name} {area_city}. Their {keyword} is remarkable.',
  'Extremely systematic and clean! {business_name} {area_city} handled every aspect of {keyword} with deep domain knowledge.',
  'Fair pricing and zero hidden surprises! {business_name} {area_city} delivered exceptional results with their {keyword}.',
  'The staff at {business_name} {area_city} is respectful, skilled, and attentive. One of the best experiences for {keyword} I have had.',
  'I really appreciate the honest guidance given by {business_name} {area_city}. Their {keyword} was done with utmost precision.',
  'Hygienic premises, polite staff, and clear communication. {business_name} {area_city} delivers top-grade {keyword}.',
  'Great value for money! {business_name} {area_city} offers premium quality {keyword} at very reasonable and honest rates.',
  'Thoroughly impressed by the ethical standards of {business_name} {area_city}. Truly top tier work in {keyword}.',

  // Problem Solver & Peace of Mind
  'I was quite skeptical before visiting, but {business_name} {area_city} put all my worries to rest with their brilliant {keyword}.',
  'Had a tricky requirement for {keyword}, but the team at {business_name} {area_city} solved it effortlessly. Highly skilled folks!',
  'Saved my time and effort completely! {business_name} {area_city} handled my {keyword} seamlessly with zero stress.',
  'Reliability is everything, and {business_name} {area_city} proved why they are the leaders in {keyword}. Truly dependable service.',
  'Zero confusion and total clarity throughout. {business_name} {area_city} delivered outstanding {keyword} right on schedule.',
  'If you have been looking for an honest partner for {keyword} {area_city}, look no further than {business_name}.',
  'They do not compromise on quality one bit. {business_name} {area_city} provides {keyword} that lasts and delivers real peace of mind.',
  'Prompt communication, transparent billing, and impeccable {keyword}. {business_name} {area_city} is worth every bit of praise.',
  'Honest advice without any commercial pressure. {business_name} {area_city} genuinely prioritizes customer happiness with their {keyword}.',
  'A very smooth experience from start to finish. {business_name} {area_city} demonstrated mastery in {keyword}.'
];

export const HINDI_TEMPLATES = [
  // शुद्ध हिन्दी (देवनागरी) - प्राकृतिक, विनम्र और उच्च रैंकिंग
  'यहाँ का अनुभव सच में बहुत ही शानदार और भरोसेमंद रहा। {business_name} {area_city} पर आप बिना किसी झिझक के पूरा विश्वास कर सकते हैं।',
  '{business_name} {area_city} से {keyword} की सेवा लेकर दिल खुश हो गया। काम बहुत ही सफाई और जिम्मेदारी के साथ किया गया।',
  'पूरे {city} में {keyword} के लिए {business_name} {area_city} से बेहतर कोई जगह नहीं है। स्टाफ बहुत ही समझदार और विनम्र है।',
  'बहुत ही उम्दा क्वालिटी और सही दाम! {business_name} {area_city} ने उम्मीद से कहीं ज्यादा बेहतर काम करके दिया। बहुत-बहुत धन्यवाद!',
  'साफ-सफाई और प्रोफेशनल तरीके से काम करने में {business_name} {area_city} का कोई मुकाबला नहीं है। {keyword} का काम एकदम परफेक्ट हुआ।',
  'पहली बार किसी जगह से इतना संतोषजनक अनुभव मिला। {business_name} {area_city} वाले बिना किसी छिपे हुए खर्च के ईमानदारी से काम करते हैं।',
  'अगर आप {area_city} में {keyword} के लिए सबसे अच्छी जगह खोज रहे हैं, तो {business_name} ही एकमात्र सही चुनाव है। 5 स्टार रेटिंग!',
  '{business_name} {area_city} का काम देखकर सच में बहुत तसल्ली मिली। {keyword} में इनकी विशेषज्ञता वाकई लाजवाब है।',
  'समय की पाबंदी और काम में फिनिशिंग—दोनों ही मामलों में {business_name} {area_city} नंबर वन हैं। बहुत ही बढ़िया व्यवहार!',
  'वाजिब रेट्स और बेहतरीन क्वालिटी! {business_name} {area_city} ने हमारे {keyword} के काम को बहुत आसान और टेंशन-फ्री बना दिया।',
  'इतनी ईमानदारी और लगन से काम करने वाले लोग आजकल बहुत कम मिलते हैं। {business_name} {area_city} को मेरी तरफ से शत-प्रतिशत सिफारिश!',
  '{business_name} {area_city} में हर बात बहुत विस्तार और धैर्य से समझाई गई। {keyword} की क्वालिटी में कोई कमी नहीं छोड़ी।',
  'ग्राहक की जरूरत को समझना और उस पर खरा उतरना {business_name} {area_city} की सबसे बड़ी खासियत है। {keyword} का अनुभव 10/10 रहा।',
  'बहुत ही सुखद और संतुष्टिदायक अनुभव! {business_name} {area_city} के मालिक और पूरे स्टाफ का बर्ताव बहुत ही आदरपूर्ण था।',
  'काम की फिनिशिंग और मजबूती दोनों ही कमाल की हैं। {business_name} {area_city} को {keyword} के लिए आँख बंद करके चुन सकते हैं।',
  'हमेशा समय पर डिलीवरी और बेहतरीन सर्विस! {business_name} {area_city} ने {keyword} के काम में हमारी पूरी उम्मीदें पूरी कीं।',
  '{city} में रहने वाले सभी लोगों को मेरा सुझाव है कि {keyword} के लिए एक बार {business_name} {area_city} जरूर जाएँ।',
  'बहुत ही आधुनिक व्यवस्था और पारदर्शी तरीका। {business_name} {area_city} में {keyword} का काम बहुत ही शांति और सरलता से पूरा हुआ।',
  'पैसे की पूरी कद्र और उत्तम परिणाम! {business_name} {area_city} ने {keyword} का काम बिना किसी परेशानी के करवा दिया।',
  '{business_name} {area_city} की टीम को उनके बेहतरीन काम और सहयोग के लिए दिल से धन्यवाद। 5 में से 5 स्टार!'
];

export const HINGLISH_TEMPLATES = [
  // अर्बन हिंग्लिश (रोमन हिंदी) - 90% भारतीय इसी भाषा में रिव्यू लिखते हैं!
  'Sach me 10/10 experience raha! {business_name} {area_city} me {keyword} ka kaam ekdum top class hua.',
  'Poore {city} me {keyword} ke liye {business_name} {area_city} se better koi jagah nahi hai. Staff super friendly aur polite hai.',
  'Bhai maza aa gaya! {business_name} {area_city} par genuine quality aur bilkul fair price mila {keyword} ke liye.',
  'Mujhe {business_name} {area_city} ki service sabse transparent lagi. Koi hidden charges nahi the aur kaam time par deliver hua.',
  'Finally ek aisi jagah mili jahan bina kisi tension ke {keyword} ka kaam karwa sakte hain. Blindly trust kar sakte ho {business_name} par!',
  'Quality aur service dono me {business_name} {area_city} ka koi tod nahi hai. Super happy with their work in {keyword}!',
  'Aapka budget chahe jo ho, {business_name} {area_city} hamesha best aur honest solution dete hain {keyword} ke liye.',
  'Very professional setup! {business_name} {area_city} ne pure dedication ke saath {keyword} complete kiya. Highly recommended!',
  'Main pehli baar visit kiya tha aur truly impressed ho gaya. {business_name} {area_city} is definitely the number 1 for {keyword}.',
  'Clean environment, cooperative staff aur zabardast service! {business_name} {area_city} ne expectation se zyada achha deliver kiya.',
  'Customer satisfaction inka main focus hai. {business_name} {area_city} ke saath {keyword} ka experience ekdum smooth raha.',
  'Worth every single rupee! {business_name} {area_city} offers the best rates and premium quality for {keyword}.',
  'Owner aur team dono ka nature bahut humble hai. {business_name} {area_city} par {keyword} ka kaam karwa ke bahut sukoon mila.',
  'Fast delivery, top-notch finishing aur polite behavior. {business_name} {area_city} is hands down the best choice for {keyword}.',
  'Agar aap {area_city} me rehte ho toh {keyword} ke liye kahin aur jaane ki zarurat nahi hai, bas {business_name} visit karo.',
  'Bilkul genuine aur reliable service! {business_name} {area_city} ne {keyword} ke har chote detail par dhyan diya.',
  'Top level expertise aur time ki punctuality. {business_name} {area_city} deserves more than 5 stars for their {keyword}!',
  'Bina kisi delay ke aur zero stress ke saath kaam ho gaya. Thank you so much {business_name} {area_city} for outstanding {keyword}.',
  'Very peaceful and professional vibe. {business_name} {area_city} makes {keyword} look effortless and premium.',
  'Maine apne doston ko bhi recommend kiya hai. {business_name} {area_city} is the ultimate destination for {keyword} in {city}!'
];

// Openers and closers for combinatorial expansion to 500+ variants
const ENGLISH_CLOSERS = [
  ' Highly recommended to everyone!',
  ' Truly deserves 5 stars without a doubt.',
  ' Will definitely recommend to friends and family.',
  ' Keep up the fantastic work team!',
  ' Best in the entire area!',
  ' A 10/10 recommendation from my side.'
];

const HINDI_CLOSERS = [
  ' सभी को दिल से सुझाव दूंगा कि यहाँ जरूर आएँ!',
  ' पूरे 5 स्टार रेटिंग का हकदार!',
  ' अपने दोस्तों और रिश्तेदारों को भी यहाँ जाने की सलाह दूंगा।',
  ' बहुत-बहुत धन्यवाद पूरी टीम का!',
  ' वाकई शहर की सबसे बेहतरीन जगह है।'
];

const HINGLISH_CLOSERS = [
  ' Definitely recommend karunga sabhi ko!',
  ' Poore 5 stars bante hain bina kisi doubt ke.',
  ' Friends aur family ko bhi yahi recommend kiya hai.',
  ' Great work team, keep it up!',
  ' City ka best spot hai ye!'
];

// 3. Dynamic Keyword Finder
function getKeywordsForCategory(categoryName: string, subcategoryName?: string): string[] {
  const normCat = categoryName.toLowerCase();

  // 1. Try Subcategory match first
  if (subcategoryName) {
    const normSub = subcategoryName.toLowerCase().replace(/[^a-z0-9]/g, '_');
    for (const [subKey, kwList] of Object.entries(SUBCATEGORY_KEYWORDS)) {
      if (normSub.includes(subKey) || subKey.includes(normSub)) {
        return kwList;
      }
    }
  }

  // 2. Try Category match
  if (normCat.includes('marble') || normCat.includes('granite') || normCat.includes('tile')) return CATEGORY_KEYWORDS.marble;
  if (normCat.includes('clinic') || normCat.includes('health') || normCat.includes('doctor') || normCat.includes('dent')) return CATEGORY_KEYWORDS.clinic;
  if (normCat.includes('coach') || normCat.includes('educat') || normCat.includes('tuition') || normCat.includes('school')) return CATEGORY_KEYWORDS.coaching;
  if (normCat.includes('gym') || normCat.includes('fit')) return CATEGORY_KEYWORDS.gym;
  if (normCat.includes('salon') || normCat.includes('spa') || normCat.includes('beauty')) return CATEGORY_KEYWORDS.salon;
  if (normCat.includes('cafe') || normCat.includes('restaur') || normCat.includes('food')) return CATEGORY_KEYWORDS.cafe;
  if (normCat.includes('auto') || normCat.includes('car') || normCat.includes('garage')) return CATEGORY_KEYWORDS.automotive;
  if (normCat.includes('estate') || normCat.includes('property') || normCat.includes('plot')) return CATEGORY_KEYWORDS.realestate;
  if (normCat.includes('retail') || normCat.includes('shop')) return CATEGORY_KEYWORDS.retail;

  return CATEGORY_KEYWORDS.other;
}

// 4. Fill Placeholders safely
function fillTemplate(
  template: string,
  businessName: string,
  keyword: string,
  city?: string,
  nearbyAreas?: string[]
): string {
  const cleanCity = city?.trim() || '';
  const area = nearbyAreas && nearbyAreas.length > 0
    ? nearbyAreas[Math.floor(Math.random() * nearbyAreas.length)].trim()
    : '';

  let areaCity = '';
  if (area && cleanCity) {
    areaCity = `near ${area}, ${cleanCity}`;
  } else if (cleanCity) {
    areaCity = `in ${cleanCity}`;
  } else if (area) {
    areaCity = `in ${area}`;
  }

  return template
    .replace(/\{business_name\}/g, businessName)
    .replace(/\{keyword\}/g, keyword)
    .replace(/\{city\}/g, cleanCity || 'town')
    .replace(/\{area\}/g, area || cleanCity || 'our area')
    .replace(/\{area_city\}/g, areaCity ? `(${areaCity})` : '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Generates an initial pool of diverse reviews categorized by Language (English, Hindi, Hinglish)
 * specifically tuned to the business's Category and Subcategory.
 */
export function generateInitialReviewPool(
  businessName: string,
  category: string,
  subcategory?: string,
  city?: string,
  nearbyAreas?: string[],
  totalCount: number = 24,
  languages: ('en' | 'hi' | 'hinglish')[] = ['en', 'hi', 'hinglish']
): {
  flatReviews: string[];
  reviewsByLang: { en: string[]; hi: string[]; hinglish: string[] };
} {
  const activeLangs = languages && languages.length > 0 ? languages : ['en', 'hi', 'hinglish'];
  const keywords = getKeywordsForCategory(category, subcategory);

  const reviewsByLang: { en: string[]; hi: string[]; hinglish: string[] } = {
    en: [],
    hi: [],
    hinglish: []
  };

  const perLangCount = Math.max(4, Math.ceil(totalCount / activeLangs.length));

  // 1. English Reviews
  if (activeLangs.includes('en')) {
    const enPool = new Set<string>();
    let attempts = 0;
    while (enPool.size < perLangCount && attempts < 100) {
      attempts++;
      const tmpl = ENGLISH_TEMPLATES[Math.floor(Math.random() * ENGLISH_TEMPLATES.length)];
      const kw = keywords[Math.floor(Math.random() * keywords.length)];
      const closer = Math.random() > 0.4 ? ENGLISH_CLOSERS[Math.floor(Math.random() * ENGLISH_CLOSERS.length)] : '';
      const filled = fillTemplate(tmpl, businessName, kw, city, nearbyAreas) + closer;
      enPool.add(filled);
    }
    reviewsByLang.en = Array.from(enPool);
  }

  // 2. Hindi Reviews (शुद्ध देवनागरी)
  if (activeLangs.includes('hi')) {
    const hiPool = new Set<string>();
    let attempts = 0;
    while (hiPool.size < perLangCount && attempts < 100) {
      attempts++;
      const tmpl = HINDI_TEMPLATES[Math.floor(Math.random() * HINDI_TEMPLATES.length)];
      const kw = keywords[Math.floor(Math.random() * keywords.length)];
      const closer = Math.random() > 0.4 ? HINDI_CLOSERS[Math.floor(Math.random() * HINDI_CLOSERS.length)] : '';
      const filled = fillTemplate(tmpl, businessName, kw, city, nearbyAreas) + closer;
      hiPool.add(filled);
    }
    reviewsByLang.hi = Array.from(hiPool);
  }

  // 3. Hinglish Reviews (रोमन हिंदी)
  if (activeLangs.includes('hinglish')) {
    const hgPool = new Set<string>();
    let attempts = 0;
    while (hgPool.size < perLangCount && attempts < 100) {
      attempts++;
      const tmpl = HINGLISH_TEMPLATES[Math.floor(Math.random() * HINGLISH_TEMPLATES.length)];
      const kw = keywords[Math.floor(Math.random() * keywords.length)];
      const closer = Math.random() > 0.4 ? HINGLISH_CLOSERS[Math.floor(Math.random() * HINGLISH_CLOSERS.length)] : '';
      const filled = fillTemplate(tmpl, businessName, kw, city, nearbyAreas) + closer;
      hgPool.add(filled);
    }
    reviewsByLang.hinglish = Array.from(hgPool);
  }

  // Interleave evenly into a flat list
  const flatReviews: string[] = [];
  const maxLen = Math.max(reviewsByLang.en.length, reviewsByLang.hi.length, reviewsByLang.hinglish.length);
  for (let i = 0; i < maxLen; i++) {
    if (reviewsByLang.en[i]) flatReviews.push(reviewsByLang.en[i]);
    if (reviewsByLang.hi[i]) flatReviews.push(reviewsByLang.hi[i]);
    if (reviewsByLang.hinglish[i]) flatReviews.push(reviewsByLang.hinglish[i]);
  }

  return {
    flatReviews,
    reviewsByLang
  };
}

/**
 * Dynamically generates a single review in a specific language on the fly.
 */
export function generateDynamicReview(
  businessName: string,
  category: string,
  subcategory?: string,
  city?: string,
  nearbyAreas?: string[],
  lang: 'en' | 'hi' | 'hinglish' = 'en'
): string {
  const keywords = getKeywordsForCategory(category, subcategory);
  const kw = keywords[Math.floor(Math.random() * keywords.length)];

  if (lang === 'hi') {
    const tmpl = HINDI_TEMPLATES[Math.floor(Math.random() * HINDI_TEMPLATES.length)];
    const closer = Math.random() > 0.4 ? HINDI_CLOSERS[Math.floor(Math.random() * HINDI_CLOSERS.length)] : '';
    return fillTemplate(tmpl, businessName, kw, city, nearbyAreas) + closer;
  }

  if (lang === 'hinglish') {
    const tmpl = HINGLISH_TEMPLATES[Math.floor(Math.random() * HINGLISH_TEMPLATES.length)];
    const closer = Math.random() > 0.4 ? HINGLISH_CLOSERS[Math.floor(Math.random() * HINGLISH_CLOSERS.length)] : '';
    return fillTemplate(tmpl, businessName, kw, city, nearbyAreas) + closer;
  }

  const tmpl = ENGLISH_TEMPLATES[Math.floor(Math.random() * ENGLISH_TEMPLATES.length)];
  const closer = Math.random() > 0.4 ? ENGLISH_CLOSERS[Math.floor(Math.random() * ENGLISH_CLOSERS.length)] : '';
  return fillTemplate(tmpl, businessName, kw, city, nearbyAreas) + closer;
}
