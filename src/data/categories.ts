import { CategoryTemplate, LandingPage } from '../types';

export const CATEGORIES: CategoryTemplate[] = [
  {
    id: 'marble',
    name: 'Marble, Granite & Tiles Shop',
    icon: 'Boxes',
    subcategories: [
      { id: 'all', name: 'All / General Marble & Tiles' },
      { id: 'italian', name: 'Italian & Imported Marble' },
      { id: 'indian_marble', name: 'Indian Marble (Makrana, Rajnagar, Katni)' },
      { id: 'granite', name: 'Granite Slabs & Kitchen Countertops' },
      { id: 'tiles', name: 'Vitrified Floor & Wall Tiles' },
      { id: 'quartz', name: 'Quartz, Nano White & Composite Stone' },
      { id: 'sanitary', name: 'Sanitaryware & Bath Fittings' }
    ],
    defaultReviews: [
      'Huge collection of Italian marble and granite! High quality slabs, transparent pricing, and timely delivery at our site.',
      'Best marble and tiles showroom in the area. Got wholesale rates for our house construction. Highly recommended!',
      'Premum Makrana white marble and kitchen granite slabs. Very honest guidance by the owner and zero breakage in delivery.',
      'Top tier tile designs and scratch-resistant kitchen slabs. Best showroom for modern home interiors.'
    ]
  },
  {
    id: 'clinic',
    name: 'Clinic & Healthcare',
    icon: 'Stethoscope',
    subcategories: [
      { id: 'all', name: 'All / General Healthcare' },
      { id: 'dental', name: 'Dental Clinic & Orthodontics' },
      { id: 'dermatology', name: 'Dermatology & Skin / Hair Care' },
      { id: 'eye', name: 'Eye Clinic / Ophthalmology' },
      { id: 'orthopedic', name: 'Orthopedic & Joint Specialist' },
      { id: 'pediatric', name: 'Pediatrician & Child Care' },
      { id: 'general_physician', name: 'General Physician & Medicine' },
      { id: 'gynecology', name: 'Gynecology & Maternity Care' },
      { id: 'ent', name: 'ENT Specialist (Ear, Nose, Throat)' },
      { id: 'physiotherapy', name: 'Physiotherapy & Pain Relief' },
      { id: 'ayurveda', name: 'Ayurveda & Panchakarma' },
      { id: 'homeopathy', name: 'Homeopathy Clinic' }
    ],
    defaultReviews: [
      'Extremely knowledgeable doctor and compassionate medical staff. Everything was explained clearly and the treatment was very effective.',
      'Very clean and modern clinic. Minimal waiting time, gentle care, and thorough diagnosis. Best medical consultation experience.',
      'Great experience! The doctor listened patiently and prescribed the right medication. Staff is polite and supportive.',
      'Highly professional healthcare center. Transparent guidance, hygienic premises, and attentive doctors.'
    ]
  },
  {
    id: 'coaching',
    name: 'Coaching & Education',
    icon: 'GraduationCap',
    subcategories: [
      { id: 'all', name: 'All / General Education' },
      { id: 'iit_neet', name: 'IIT-JEE & NEET Competitive Coaching' },
      { id: 'school_tuition', name: 'School Tuitions (Class 6th-12th Foundation)' },
      { id: 'computer_coding', name: 'Computer Institute & Coding / IT Training' },
      { id: 'competitive_exams', name: 'Govt Exams (UPSC, SSC, Banking, Railways)' },
      { id: 'spoken_english', name: 'Spoken English, IELTS & Communication' },
      { id: 'commerce_ca', name: 'Commerce, Accounts & CA / CS Foundation' },
      { id: 'music_art', name: 'Music, Dance & Fine Arts Academy' }
    ],
    defaultReviews: [
      'Exceptional faculty and structured study material. Concept clarity and regular doubt sessions made a massive difference in my scores!',
      'Best coaching institute with dedicated teachers who give individual attention to every student. Great test series and mentorship.',
      'Highly recommended institute! Supportive faculty, interactive classroom lectures, and disciplined academic environment.',
      'Top-notch teaching methodology! The teachers are patient, concepts are crystal clear, and results speak for themselves.'
    ]
  },
  {
    id: 'gym',
    name: 'Gym & Fitness',
    icon: 'Dumbbell',
    subcategories: [
      { id: 'all', name: 'All / General Fitness' },
      { id: 'strength', name: 'Strength & Bodybuilding Gym' },
      { id: 'crossfit', name: 'CrossFit & Functional Training' },
      { id: 'cardio_fatloss', name: 'Cardio, HIIT & Fat Loss Studio' },
      { id: 'yoga_pilates', name: 'Yoga, Meditation & Pilates' },
      { id: 'personal_training', name: 'Personal Training & 1-on-1 Transformation' },
      { id: 'zumba_dance', name: 'Zumba & Aerobics Dance Fitness' }
    ],
    defaultReviews: [
      'Top tier gym equipment and cleanest workout environment in the area. Trainers are truly supportive and always motivate you to hit your goals!',
      'Best gym experience ever! High quality machines, spacious workout floors, and polite staff. Highly recommend joining.',
      'Outstanding gym! Great atmosphere, hygienic locker rooms, and certified trainers who guide you properly through every workout.',
      'Superb fitness center! Friendly community, advanced cardio and strength equipment, and great personal training sessions.'
    ]
  },
  {
    id: 'salon',
    name: 'Salon & Spa',
    icon: 'Sparkles',
    subcategories: [
      { id: 'all', name: 'All / General Salon & Spa' },
      { id: 'mens_grooming', name: "Men's Salon & Grooming Lounge" },
      { id: 'womens_hair', name: "Women's Hair Styling, Color & Botox" },
      { id: 'bridal_makeup', name: 'Bridal Makeup & Pre-Wedding Studio' },
      { id: 'skin_facial', name: 'Facial, Cleanup & Skin Glow Studio' },
      { id: 'day_spa', name: 'Luxury Body Massage & Day Spa' },
      { id: 'nail_art', name: 'Nail Art, Extensions & Lash Studio' }
    ],
    defaultReviews: [
      'Incredible service and warm hospitality! Got exactly the style I requested. The staff is polite, skilled, and gentle.',
      'Premium pampering experience! Very hygienic salon, talented stylists, and relaxing ambiance. Will definitely come back.',
      'Loved the haircut and treatment! The stylist took time to understand my hair and did a phenomenal job.',
      'Top-rated salon with attentive professionals and clean equipment. 10/10 service and great value!'
    ]
  },
  {
    id: 'cafe',
    name: 'Cafe & Restaurant',
    icon: 'Utensils',
    subcategories: [
      { id: 'all', name: 'All / General Dining' },
      { id: 'coffee_cafe', name: 'Artisan Coffee Shop & Cozy Cafe' },
      { id: 'family_restaurant', name: 'Family Restaurant & Multi-Cuisine' },
      { id: 'pure_veg', name: 'Pure Veg & Traditional Thali' },
      { id: 'fast_food', name: 'Fast Food, Burgers & Pizza Parlour' },
      { id: 'bakery', name: 'Bakery, Cakes & Desserts' },
      { id: 'rooftop', name: 'Rooftop Lounge & Fine Dining' }
    ],
    defaultReviews: [
      'Delicious food, cozy aesthetic, and quick service! Everything was fresh and flavors were on point. Must visit spot.',
      'Amazing coffee and delectable food! Wonderful cozy vibe, polite servers, and great music. Loved every bit of it.',
      'One of the best dining spots in town! Great presentation, generous portions, and warm hospitable staff.',
      'Fantastic experience! Mouth-watering delicacies, clean seating area, and fast turnaround time.'
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive & Garage',
    icon: 'Wrench',
    subcategories: [
      { id: 'all', name: 'All / General Automotive' },
      { id: 'car_service', name: 'Car Multi-Brand Periodic Service & Repair' },
      { id: 'detailing_wash', name: 'Car Detailing, Ceramic Coating & PPF' },
      { id: 'tyre_alignment', name: 'Wheel Alignment, Balancing & Tyre Shop' },
      { id: 'denting_painting', name: 'Denting, Painting & Accidental Repair' },
      { id: 'two_wheeler', name: 'Bike & Two-Wheeler Workshop' }
    ],
    defaultReviews: [
      'Honest mechanics and transparent pricing! Car was serviced on time and runs like brand new.',
      'Excellent car detailing and ceramic wash. Mirror finish shine with zero scratches. Highly satisfied!',
      'Prompt diagnostics, genuine spare parts, and zero hidden charges. Best garage in town.'
    ]
  },
  {
    id: 'realestate',
    name: 'Real Estate & Property',
    icon: 'Home',
    subcategories: [
      { id: 'all', name: 'All / General Real Estate' },
      { id: 'flats_apartments', name: 'Residential Flats, Apartments & Floors' },
      { id: 'commercial', name: 'Commercial Shops, Showrooms & Offices' },
      { id: 'plots_land', name: 'Residential & Commercial Plots / Land' },
      { id: 'rental_pg', name: 'House Rental, Flatmates & PG' },
      { id: 'villas', name: 'Luxury Villas & Farmhouses' }
    ],
    defaultReviews: [
      'Completely transparent and trustworthy property advisory! Found our dream home with zero paperwork hassle.',
      'Best real estate consultants in the city. Honest advice, prime locations, and seamless deal negotiation.',
      'Very professional team with deep market knowledge. Highly recommend for any property investment.'
    ]
  },
  {
    id: 'retail',
    name: 'Retail & Shopping',
    icon: 'ShoppingBag',
    subcategories: [
      { id: 'all', name: 'All / General Retail' },
      { id: 'clothing_fashion', name: 'Clothing, Ethnic Wear & Fashion Boutique' },
      { id: 'electronics_mobile', name: 'Electronics, Appliances & Mobile Shop' },
      { id: 'grocery', name: 'Supermarket, Grocery & Daily Needs' },
      { id: 'furniture_decor', name: 'Furniture & Home Decor Store' },
      { id: 'jewelry', name: 'Jewelry & Gold Ornaments' }
    ],
    defaultReviews: [
      'Extensive collection of genuine products! Courteous staff and very reasonable pricing. Delightful shopping experience.',
      'Top quality items and wonderful customer service. Smooth billing and great discounts.',
      'Best retail store in the area. Wide variety of choices and very polite store owners.'
    ]
  },
  {
    id: 'other',
    name: 'Other Local Business',
    icon: 'Building2',
    subcategories: [
      { id: 'all', name: 'General Business & Professional Services' }
    ],
    defaultReviews: [
      'Outstanding customer service and exceptional workmanship! Highly professional and trustworthy team.',
      'Very satisfied with their prompt and high quality service. Transparent rates and great communication.',
      'Top rated local business with reliable and polite staff. 10/10 experience!'
    ]
  }
];

export const INITIAL_LANDING_PAGES: LandingPage[] = [
  {
    id: 'lp-1',
    slug: 'titan-fitness-club',
    businessName: 'Titan Fitness Club',
    category: 'Gym & Fitness',
    subcategory: 'Strength & Bodybuilding Gym',
    languages: ['en', 'hi', 'hinglish'],
    tagline: 'Premium Strength & Functional Training',
    gmbReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',
    ratingScore: 5.0,
    totalReviewsCount: 248,
    reviews: [
      'Top tier gym equipment and cleanest workout environment in the area. Trainers are truly supportive and always motivate you to hit your goals!',
      'Best gym experience ever! High quality machines, spacious workout floors, and polite staff. Highly recommend joining.',
      'जिम का माहौल और ट्रेनर्स दोनों बहुत बढ़िया हैं। यहाँ वर्कआउट करने का अलग ही मज़ा है।',
      'Clean environment, top equipment aur friendly trainers. Definitely 5 star gym hai!'
    ],
    reviewsByLang: {
      en: [
        'Top tier gym equipment and cleanest workout environment in the area. Trainers are truly supportive and always motivate you to hit your goals!',
        'Best gym experience ever! High quality machines, spacious workout floors, and polite staff. Highly recommend joining.'
      ],
      hi: [
        'जिम का माहौल और ट्रेनर्स दोनों बहुत बढ़िया हैं। यहाँ वर्कआउट करने का अलग ही मज़ा है।'
      ],
      hinglish: [
        'Clean environment, top equipment aur friendly trainers. Definitely 5 star gym hai!'
      ]
    },
    createdAt: '2026-03-01T10:00:00.000Z'
  },
  {
    id: 'lp-2',
    slug: 'apex-marble-granite',
    businessName: 'Apex Marble & Granite',
    category: 'Marble, Granite & Tiles Shop',
    subcategory: 'Italian & Imported Marble',
    languages: ['en', 'hi', 'hinglish'],
    tagline: 'Premium Italian Marble & Kitchen Granite',
    gmbReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',
    ratingScore: 5.0,
    totalReviewsCount: 185,
    reviews: [
      'Huge collection of Italian marble and granite! High quality slabs, transparent pricing, and timely delivery.',
      'मार्बल और ग्रेनाइट का इतना बेहतरीन कलेक्शन पूरे शहर में कहीं नहीं देखा। रेट्स बहुत वाजिब हैं।',
      'Marble aur tiles ka collection dekh ke maza aa gaya! Wholesale rate me premium quality mil gayi.'
    ],
    reviewsByLang: {
      en: [
        'Huge collection of Italian marble and granite! High quality slabs, transparent pricing, and timely delivery.'
      ],
      hi: [
        'मार्बल और ग्रेनाइट का इतना बेहतरीन कलेक्शन पूरे शहर में कहीं नहीं देखा। रेट्स बहुत वाजिब हैं।'
      ],
      hinglish: [
        'Marble aur tiles ka collection dekh ke maza aa gaya! Wholesale rate me premium quality mil gayi.'
      ]
    },
    createdAt: '2026-03-05T10:00:00.000Z'
  }
];
