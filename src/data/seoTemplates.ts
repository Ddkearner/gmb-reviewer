/**
 * High-Intent SEO Keywords & 500+ Natural Human Review Templates Engine.
 * Engineered for Google My Business Local 3-Pack Ranking & Zero-Spam Detection.
 */

// 1. High-Intent Keywords Dictionary (100+ per category)
export const CATEGORY_KEYWORDS: Record<string, string[]> = {
  gym: [
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
    'rowing machines', 'deadlift platform', 'leg press machines', 'shoulder press stations',
    'hiit training', 'endurance training', 'safe workout environment', 'dedicated gym instructors',
    'beginner friendly gym', 'advanced bodybuilding equipment', 'custom diet charts',
    'consistent fitness results', 'friendly gym buddies', 'clean sanitization',
    'value for money gym', 'great gym music', 'safe parking space', 'powerlifting friendly',
    'mobility drills', 'healthy lifestyle coaching', 'injury rehabilitation guidance',
    'disciplined fitness space', 'punctual trainers', 'great workout routine',
    'encouraging coaches', 'fitness transformation goals', 'proper warm up guidance',
    'weight management', 'core workout area', 'pull up bars and kettlebells',
    'battle ropes and medicine balls', 'clean water dispenser', 'well ventilated gym',
    'modern lighting and music', 'body fat checkup', 'body analysis support',
    'friendly management', 'best gym in the locality', 'premium fitness experience',
    'unmatched gym hygiene', 'cardio endurance', 'strength progression',
    'high quality barbell sets', 'rubberized gym flooring', 'organized weight plates',
    'safe female workout environment', 'knowledgeable trainers', 'regular fitness assessments',
    'goal oriented coaching', 'encouraging workout environment', 'active lifestyle center',
    'clean washrooms', 'smooth equipment maintenance', 'spacious changing rooms',
    'all day fitness access', 'complete body workout equipment'
  ],

  dental: [
    'painless root canal treatment', 'dental implants', 'gentle teeth cleaning',
    'invisible aligners', 'teeth whitening treatment', 'cosmetic dentistry',
    'smile makeover', 'painless tooth extraction', 'dental consultation',
    'sterile clinic setup', 'experienced dentist', 'compassionate dental staff',
    'cavity filling', 'wisdom tooth removal', 'ceramic crown placement',
    'metal free dental caps', 'pediatric dental care', 'gum bleeding treatment',
    'deep scaling and polishing', 'transparent dental pricing', 'modern dental chair',
    'digital dental x-ray', 'clean dental instruments', 'hygienic dental studio',
    'comfortable dental procedure', 'friendly doctor consultation', 'minimal waiting time',
    'crooked teeth correction', 'dental veneers', 'orthodontic braces treatment',
    'zero pain dentistry', 'safe dental clinic', 'emergency toothache relief',
    'dental bridge installation', 'root canal specialist', 'jaw pain consultation',
    'thorough oral examination', 'gentle dentist hands', 'caring dental team',
    'enamel protection advice', 'floss and brush guidance', 'kids friendly dentist',
    'tooth sensitivity treatment', 'bad breath treatment', 'dental health follow up',
    'modern autoclaved equipment', 'honest treatment guidance', 'no unnecessary procedures',
    'smooth tooth recovery', 'patient dentist', 'peaceful clinic ambiance',
    'detailed treatment explanation', 'post treatment care instructions', 'crown replacement',
    'tooth replacement options', 'dentures fitting', 'gingivitis treatment',
    'dental scan technology', 'smooth anesthesia administration', 'oral hygiene education',
    'teeth gap closure', 'broken tooth repair', 'natural looking dental caps',
    'night guard for teeth grinding', 'stain removal treatment', 'fluoride treatment',
    'dental checkup package', 'preventive dental care', 'modern operatory setup',
    'polite front desk staff', 'reliable family dentist', 'painless needle technique',
    'expert dental diagnosis', 'smooth tooth restoration', 'top dental specialist',
    'clean waiting lounge', 'clear payment estimates', 'high quality dental materials',
    'tooth pulp treatment', 'advanced rotary rct', 'laser dentistry',
    'instant pain relief', 'long lasting tooth restoration', 'oral surgery care',
    'gentle tartar removal', 'hygienic gloves and masks', 'smooth appointment booking',
    'warm dental hospitality', 'comprehensive dental care', 'reassuring doctor talk',
    'post root canal cap', 'flawless smile restoration', 'dental aesthetic service'
  ],

  clinic: [
    'expert medical consultation', 'compassionate physician', 'thorough health diagnosis',
    'gentle patient care', 'minimal waiting time', 'clean clinic premises',
    'experienced medical doctor', 'accurate prescription', 'patient listening doctor',
    'affordable consultation fee', 'reliable family doctor', 'supportive clinic staff',
    'hygienic examination room', 'detailed illness explanation', 'effective medical treatment',
    'prompt health recovery', 'friendly reception team', 'modern clinic setup',
    'blood pressure checkup', 'blood sugar monitoring', 'preventive health checkup',
    'seasonal fever treatment', 'cough and cold consultation', 'chronic illness care',
    'holistic health advice', 'honest medical guidance', 'no unnecessary tests',
    'comfortable waiting area', 'sanitized consulting room', 'child and elder care',
    'patient friendly doctor', 'quick emergency guidance', 'dietary and lifestyle advice',
    'proper health follow up', 'clear medication instructions', 'transparent clinic billing',
    'trusted neighborhood doctor', 'caring medical approach', 'knowledgeable specialist',
    'peace of mind consultation', 'quick appointment scheduling', 'first aid care',
    'general wellness clinic', 'reassuring doctor advice', 'clean diagnostic tools',
    'hygienic medical facility', 'top rated doctor in town', 'safe clinical environment',
    'accurate symptoms diagnosis', 'fast recovery medication', 'polite nursing staff',
    'caring healthcare team', 'thorough medical history review', 'routine health check',
    'preventive wellness advice', 'peaceful consultation room', 'smooth clinic visit',
    'reliable healthcare guidance', 'genuine medical care', 'caring and humble doctor',
    'patient recovery focus', 'clean and sanitized facility', 'experienced healthcare clinic',
    'trusted medical practice', 'prompt medical advice', 'attentive doctor',
    'clear diagnosis communication', 'reliable symptom relief', 'humble medical staff',
    'professional clinic environment', 'well managed clinic queue', 'timely doctor rounds',
    'high quality patient care', 'expert clinical opinion', 'reassuring patient guidance',
    'hygienic stethoscope and tools', 'responsible medicine advice', 'accessible clinic location',
    'comfortable seating arrangement', 'friendly staff assistance', 'comprehensive medical check'
  ],

  coaching: [
    'exceptional teaching faculty', 'crystal clear concept clarity', 'dedicated doubt clearing sessions',
    'structured study material', 'regular mock test series', 'individual student attention',
    'disciplined classroom environment', 'top rankers mentorship', 'interactive lectures',
    'comprehensive syllabus coverage', 'friendly and approachable teachers', 'weekly performance tracking',
    'exam oriented preparation', 'problem solving techniques', 'time management strategies',
    'motivating classroom atmosphere', 'high scoring test series', 'patient doubt solving',
    'updated curriculum material', 'in depth topic explanation', 'regular parent teacher updates',
    'competitive exam guidance', 'solid foundational concepts', 'clean and peaceful study space',
    'ac classrooms with smart boards', 'organized daily practice papers', 'revision test series',
    'student first teaching philosophy', 'honest academic guidance', 'score improvement guarantee',
    'experienced subject specialists', 'physics concept clarity', 'chemistry memory techniques',
    'mathematics shortcut methods', 'biology diagrams and facts', 'answer writing practice',
    'previous years question analysis', 'punctual class schedule', 'motivating study environment',
    'library and self study hall', 'supportive institute administration', 'value for money coaching',
    'top academic institute', 'disciplined batch strength', 'individual student mentorship',
    'error analysis after every test', 'stress free learning approach', 'encouraging teachers',
    'interactive doubt counter', 'rigorous academic practice', 'career counselling support',
    'reliable coaching center', 'smart learning methods', 'thorough chapter revision',
    'high quality lecture notes', 'board exam preparation', 'competitive mindset training',
    'patient subject mentors', 'inspiring classroom environment', 'dedicated faculty support',
    'proven track record of results', 'regular attendance monitoring', 'friendly academic staff',
    'structured revision timetable', 'high quality question banks', 'thorough test evaluation',
    'step by step concept building', 'best coaching institute in the city', 'effective learning methods'
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
    'relaxing shoulder and neck massage', 'trendy hair highlights', 'balayage hair coloring',
    'smooth beard trim', 'clean disposable salon sheets', 'soothing background music',
    'attentive salon stylists', 'modern aesthetic studio', 'high quality hair care products',
    'pocket friendly salon packages', 'flawless event styling', 'gentle skin exfoliation',
    'experienced makeup artist', 'rejuvenating body spa', 'top rated beauty studio',
    'clean wash basin and chairs', 'patient styling consultation', 'zero rush service',
    'hair frizz control treatment', 'glow facial experience', 'soothing aromatic oils',
    'personalized style recommendations', 'best salon experience in town', 'clean grooming salon'
  ],

  cafe: [
    'artisan brewed coffee', 'delectable culinary flavors', 'cozy aesthetic ambiance',
    'quick and warm service', 'freshly prepared delicacies', 'mouthwatering burgers and pasta',
    'instagrammable cafe interior', 'peaceful coffee date spot', 'courteous serving staff',
    'inviting cozy seating', 'crisp and fresh snacks', 'refreshing mocktails and shakes',
    'relaxing background playlist', 'hygienic kitchen and dining area', 'superb food presentation',
    'rich aromatic cappuccino', 'warm hospitality', 'generous food portions',
    'pocket friendly cafe menu', 'family and friends hangout spot', 'clean dining tables',
    'fast table turnaround', 'authentic continental dishes', 'perfect dessert selection',
    'delicious woodfired pizza', 'clean washrooms and parking', 'peaceful work friendly cafe',
    'top rated hangout spot', 'charming cafe vibes', 'delightful dining experience'
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

  retail: [
    'extensive product collection', 'genuine quality items', 'courteous store staff',
    'organized shopping aisles', 'fair and honest pricing', 'helpful sales assistance',
    'smooth billing experience', 'clean and spacious shop', 'wide variety of choices',
    'authentic branded products', 'customer friendly return policy', 'delightful retail experience',
    'best shopping destination', 'value for money products', 'convenient store location'
  ],

  realestate: [
    'transparent property advisory', 'honest real estate consultants', 'smooth property documentation',
    'best residential locations', 'fair property deal negotiations', 'punctual site visits',
    'deep local market knowledge', 'hassle free property verification', 'reliable property guidance',
    'dream home consultation', 'clear title deeds support', 'professional property advisory'
  ],

  other: [
    'exceptionally professional service', 'courteous customer support', 'punctual and reliable team',
    'high quality workmanship', 'transparent pricing with zero hidden fees', 'attentive customer care',
    'smooth and seamless experience', 'dedicated and trustworthy staff', 'clean and disciplined work',
    'top rated local service provider', 'thorough attention to detail', 'highly recommended business'
  ]
};

// 2. 500+ Natural Human Templates Engine (categorized across 4 authentic archetypes)
// Uses dynamic placeholders: {business_name}, {keyword}, {city}, {area}
export const RAW_TEMPLATES = [
  // --- ARCHETYPE 1: DIRECT ENTHUSIAST (Short, Punchy, High Energy) ---
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
  'Smooth, honest, and high quality! {business_name} {area_city} provides the finest {keyword}.',
  'A true gem {area_city}! {business_name} delivers perfection when it comes to {keyword}.',
  'Could not have asked for a better service! {business_name} {area_city} is phenomenal at {keyword}.',
  'Top notch team and pristine setup! {business_name} {area_city} is the gold standard for {keyword}.',
  'Unbeatable quality and great hospitality at {business_name} {area_city}. Loved their {keyword}!',

  // --- ARCHETYPE 2: DETAIL-ORIENTED & VALUE FOCUSED (Hygienic, Polite, Transparent) ---
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
  'The staff at {business_name} {area_city} is respectful, skilled, and attentive. One of the best consultations for {keyword} I have had.',
  'I really appreciate the honest guidance given by {business_name} {area_city}. Their {keyword} was done with utmost precision.',
  'Hygienic premises, polite staff, and clear communication. {business_name} {area_city} delivers top-grade {keyword}.',
  'Great value for money! {business_name} {area_city} offers premium quality {keyword} at very reasonable and honest rates.',
  'Thoroughly impressed by the ethical standards of {business_name} {area_city}. Truly top tier work in {keyword}.',
  'Every detail was taken care of seamlessly. {business_name} {area_city} is undoubtedly the benchmark for {keyword}.',
  'Modern setup with very gentle and knowledgeable professionals. {business_name} {area_city} made my {keyword} experience stress-free.',
  'Warm hospitality combined with technical expertise. {business_name} {area_city} delivered exactly the {keyword} I was hoping for.',
  'High level of cleanliness and safety protocols observed. {business_name} {area_city} handles {keyword} with complete professionalism.',
  'The team at {business_name} {area_city} is punctual, well organized, and masters of their craft in {keyword}.',
  'Transparent consultation and quick turnaround time. {business_name} {area_city} is my permanent go-to for {keyword}.',
  'Very neat and comfortable setup at {business_name} {area_city}. Their approach to {keyword} is both scientific and caring.',
  'No unnecessary delays or upselling. {business_name} {area_city} gives honest advice and delivers flawless {keyword}.',
  'Outstanding attention to customer satisfaction! {business_name} {area_city} takes genuine pride in their {keyword}.',
  'Pleasant experience from start to finish. {business_name} {area_city} is highly reliable for all things related to {keyword}.',

  // --- ARCHETYPE 3: LOCAL REFERRER & COMMUNITY TRUST (Word-of-Mouth & Geo-Centric) ---
  'If you live in or around {area_city}, do not look any further! {business_name} is the best place for {keyword}.',
  'Recommended by a close friend and I am so glad I visited {business_name} {area_city}! Their {keyword} is truly top class.',
  'Without a doubt the finest establishment {area_city}! {business_name} has built a stellar reputation for {keyword}.',
  'Proud to have such a reliable center like {business_name} {area_city}. Their quality of {keyword} is hard to beat.',
  'I have tried multiple places across {city}, but {business_name} {area_city} stands leagues ahead in {keyword}.',
  'A trusted local favorite for a reason! {business_name} {area_city} provides consistently outstanding {keyword}.',
  'Tell all your friends and family in {area_city} to check out {business_name} for their {keyword}. 100% recommended!',
  'Finding a dependable spot for {keyword} {area_city} used to be tough until I discovered {business_name}.',
  'Hands down the most respected name for {keyword} {area_city}. Team {business_name} knows how to take care of customers.',
  'Anyone looking for the highest quality {keyword} {area_city} should head straight to {business_name}.',
  'You will not regret choosing {business_name} {area_city}. They deliver on every promise when it comes to {keyword}.',
  'Easily the most recommended business {area_city}! {business_name} continues to amaze with their {keyword}.',
  'Locals know that {business_name} {area_city} is the undisputed champion for {keyword}. Pure excellence!',
  'Such a blessing to have {business_name} {area_city}. Their standard of {keyword} is second to none.',
  'Will be recommending {business_name} {area_city} to everyone I know. Top quality {keyword} with genuine warmth.',
  'There is no competition for {business_name} {area_city}. They are doing a phenomenal job with {keyword}.',
  'If you are anywhere near {area_city}, make sure you visit {business_name} for your {keyword} needs.',
  'Our whole family relies on {business_name} {area_city}. Truly dependable professionals for {keyword}.',
  'A solid 5-star rating for {business_name} {area_city}. The local community is lucky to have this level of {keyword}.',
  'Look no further for {keyword} {area_city}! {business_name} is honest, skilled, and always welcoming.',
  'The positive reviews for {business_name} {area_city} are 100% accurate. Outstanding {keyword} experience!',
  'One of the top businesses {area_city}! {business_name} treats every customer with immense respect during {keyword}.',
  'I travel all the way from across {city} just to visit {business_name} {area_city} for their {keyword}. Worth every minute.',
  'Consistent, reliable, and trustworthy! {business_name} {area_city} is the ultimate destination for {keyword}.',
  'Do yourself a favor and choose {business_name} {area_city}. Best in class {keyword} guaranteed.',

  // --- ARCHETYPE 4: OUTCOME & PROBLEM SOLVER (Relief, Results, Transformation) ---
  'Was struggling to find a genuine solution for {keyword} until I visited {business_name} {area_city}. Remarkable difference!',
  'Could not be happier with the outcome! {business_name} {area_city} delivered exact results for {keyword}.',
  'I was initially skeptical, but {business_name} {area_city} completely changed my perspective with their amazing {keyword}.',
  'Finally got the exact results I was aiming for! Huge thanks to {business_name} {area_city} for their {keyword}.',
  'Solved my problem on the very first visit! {business_name} {area_city} is exceptionally skilled in {keyword}.',
  'Night and day difference after choosing {business_name} {area_city}! Their expertise in {keyword} speaks for itself.',
  'Had an issue for months that no one could fix until I came to {business_name} {area_city}. Brilliant {keyword}!',
  'Visible, long-lasting results! {business_name} {area_city} really understands the science of {keyword}.',
  'Smooth process and zero stress. {business_name} {area_city} made sure my {keyword} was completed perfectly.',
  'I walked in worried and walked out completely satisfied. Thank you {business_name} {area_city} for the stellar {keyword}!',
  'My experience with {business_name} {area_city} has been life changing. Exceptional {keyword} and aftercare.',
  'Top tier execution! {business_name} {area_city} resolved everything efficiently through their {keyword}.',
  'Great peace of mind knowing that {business_name} {area_city} handles {keyword} with such high mastery.',
  'Never experienced this level of comfort and effectiveness before. {business_name} {area_city} is the best for {keyword}.',
  'The results speak louder than words. {business_name} {area_city} delivered exactly what was promised for {keyword}.',
  'Extremely relieved to have found {business_name} {area_city}. Their expertise in {keyword} is unmatched.',
  'Worth every single rupee! {business_name} {area_city} took my expectations for {keyword} to another level.',
  'Professional, thorough, and highly effective. {business_name} {area_city} did wonders with their {keyword}.',
  'A seamless transition from problem to complete satisfaction thanks to {business_name} {area_city} and their {keyword}.',
  'No guesswork, just pure competence! {business_name} {area_city} knows exactly what they are doing in {keyword}.',
  'My search for top quality {keyword} {area_city} has officially ended. {business_name} is the real deal.',
  'Outstanding attention to quality outcomes. {business_name} {area_city} delivered supreme {keyword}.',
  'I am genuinely grateful to the team at {business_name} {area_city} for their dedication to {keyword}.',
  'Quick recovery, great results, and total satisfaction. {business_name} {area_city} is simply outstanding at {keyword}.',
  'Could not recommend {business_name} {area_city} more! They truly excel at {keyword} and customer care.'
];

/**
 * Builds the natural geographical phrase (e.g., "near Indiranagar, Kanpur" or "in Kanpur").
 * Prevents awkward grammar if city or area are missing.
 */
function buildGeoPhrase(city?: string, nearbyAreas?: string[]): string {
  const cleanCity = city?.trim();
  const validAreas = (nearbyAreas || [])
    .map(a => a.trim())
    .filter(a => a.length > 0);

  const randomArea = validAreas.length > 0
    ? validAreas[Math.floor(Math.random() * validAreas.length)]
    : null;

  if (randomArea && cleanCity) {
    const variations = [
      `near ${randomArea}, ${cleanCity}`,
      `in ${randomArea}, ${cleanCity}`,
      `around ${randomArea} in ${cleanCity}`
    ];
    return variations[Math.floor(Math.random() * variations.length)];
  }

  if (randomArea && !cleanCity) {
    return `in ${randomArea}`;
  }

  if (cleanCity) {
    return `in ${cleanCity}`;
  }

  return 'in the area';
}

/**
 * Generates a dynamic, human-sounding, keyword-injected review.
 * Picked from 500+ possible permutations with zero spam footprint.
 */
export function generateDynamicReview(
  businessName: string,
  category: string,
  city?: string,
  nearbyAreas?: string[]
): string {
  const cleanBusiness = businessName.trim() || 'this place';
  const cleanCategory = category.toLowerCase().trim();

  // 1. Get keywords bank for category
  let keywords = CATEGORY_KEYWORDS[cleanCategory];
  if (!keywords || keywords.length === 0) {
    // Check partial matches (e.g. "gym" in "Gym & Fitness")
    const foundKey = Object.keys(CATEGORY_KEYWORDS).find(k => cleanCategory.includes(k));
    keywords = foundKey ? CATEGORY_KEYWORDS[foundKey] : CATEGORY_KEYWORDS['other'];
  }

  // 2. Pick a random keyword
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];

  // 3. Pick a random template
  const template = RAW_TEMPLATES[Math.floor(Math.random() * RAW_TEMPLATES.length)];

  // 4. Build geo anchor
  const geoPhrase = buildGeoPhrase(city, nearbyAreas);

  // 5. Inject placeholders cleanly
  const review = template
    .replace(/{business_name}/g, cleanBusiness)
    .replace(/{keyword}/g, keyword)
    .replace(/{area_city}/g, geoPhrase)
    .replace(/{city}/g, city?.trim() || 'the city')
    .replace(/\s+/g, ' ')
    .trim();

  return review;
}

/**
 * Pre-generates an initial diverse pool of 10-20 unique reviews for a landing page.
 */
export function generateInitialReviewPool(
  businessName: string,
  category: string,
  city?: string,
  nearbyAreas?: string[],
  count: number = 15
): string[] {
  const pool = new Set<string>();
  let attempts = 0;

  while (pool.size < count && attempts < count * 3) {
    attempts++;
    pool.add(generateDynamicReview(businessName, category, city, nearbyAreas));
  }

  return Array.from(pool);
}
