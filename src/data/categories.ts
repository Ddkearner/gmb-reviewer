import { CategoryTemplate, LandingPage } from '../types';

export const CATEGORIES: CategoryTemplate[] = [
  {
    id: 'marble',
    name: 'Marble, Granite & Tiles Shop',
    icon: 'Boxes',
    subcategories: [
      { id: 'all', name: 'All / General Marble & Tiles Shop' },
      { id: 'marble_granite', name: 'Marble & Granite Shop' },
      { id: 'tiles_showroom', name: 'Tiles Showroom' },
      { id: 'flooring_supplier', name: 'Flooring & Stone Supplier' },
      { id: 'sanitary_bath', name: 'Sanitaryware & Bath Store' }
    ],
    defaultReviews: [
      'Very impressive collection of marble, granite, and tiles! The quality is top notch and rates are very reasonable. The staff guided us patiently without pushing expensive options.',
      'One of the best tile and marble showrooms in town. Honest guidance, fair square feet rates, and on-time delivery at our site with zero damage.',
      'Great shopping experience for our home flooring. Clean showroom, transparent billing, and very polite owner. Highly recommended!',
      'Huge variety of floor and wall tiles. Got the best wholesale price and prompt service. Very dependable shop.'
    ]
  },
  {
    id: 'clinic',
    name: 'Clinic & Healthcare',
    icon: 'Stethoscope',
    subcategories: [
      { id: 'all', name: 'All / General Healthcare' },
      { id: 'general_physician', name: 'General Physician / Clinic' },
      { id: 'dental', name: 'Dental Clinic' },
      { id: 'dermatology', name: 'Skin & Dermatology Clinic' },
      { id: 'eye', name: 'Eye Clinic' },
      { id: 'pediatric', name: 'Child & Pediatric Clinic' },
      { id: 'orthopedic', name: 'Orthopedic / Bone & Joint Clinic' },
      { id: 'physiotherapy', name: 'Physiotherapy Centre' }
    ],
    defaultReviews: [
      'Extremely polite and knowledgeable doctor. Listened to all concerns patiently and provided accurate medical advice. The clinic is very clean and staff is cooperative.',
      'Very well-managed clinic with minimal waiting time. Doctor explains everything clearly without prescribing unnecessary tests or medicines. Great experience.',
      'Clean premises, hygienic examination area, and attentive medical staff. Truly a dependable and patient-friendly healthcare center.',
      'Warm behavior by the doctor and nursing team. Consultations are thorough and fees are very reasonable. Highly satisfied!'
    ]
  },
  {
    id: 'coaching',
    name: 'Coaching & Education',
    icon: 'GraduationCap',
    subcategories: [
      { id: 'all', name: 'All / General Education' },
      { id: 'coaching_centre', name: 'Coaching Centre (Academics)' },
      { id: 'computer_institute', name: 'Computer & IT Institute' },
      { id: 'competitive_exams', name: 'Competitive Exams Centre' },
      { id: 'tuitions', name: 'Tuition Classes' },
      { id: 'spoken_english', name: 'Spoken English & Communication' }
    ],
    defaultReviews: [
      'Excellent teachers who focus on strong fundamentals and concept clarity. The study atmosphere is disciplined and motivating for students.',
      'Best coaching institute with very supportive faculty. Regular practice, timely doubt solving, and personal attention to every learner.',
      'Great learning environment! The teachers explain every topic with patience and passion. Very happy with the academic progress here.',
      'Top quality education at affordable fees. Highly structured classes and dedicated instructors. Highly recommended!'
    ]
  },
  {
    id: 'gym',
    name: 'Gym & Fitness',
    icon: 'Dumbbell',
    subcategories: [
      { id: 'all', name: 'All / General Fitness' },
      { id: 'fitness_gym', name: 'Fitness Gym' },
      { id: 'unisex_gym', name: 'Unisex Gym' },
      { id: 'strength_club', name: 'CrossFit & Strength Club' },
      { id: 'yoga_studio', name: 'Yoga & Fitness Studio' }
    ],
    defaultReviews: [
      'Clean workout space and well-maintained equipment. The trainers are always around to help with proper form and guide beginners.',
      'Great workout atmosphere with positive energy. Spacious floor, hygienic locker rooms, and polite staff. Best gym in the area!',
      'Excellent fitness center! Plenty of equipment, good ventilation, and supportive gym community. Very satisfied with my membership.'
    ]
  },
  {
    id: 'salon',
    name: 'Salon & Spa',
    icon: 'Sparkles',
    subcategories: [
      { id: 'all', name: 'All / General Salon' },
      { id: 'unisex_salon', name: 'Unisex Salon' },
      { id: 'mens_salon', name: "Men's Salon & Grooming" },
      { id: 'womens_parlour', name: "Women's Beauty Parlour" },
      { id: 'spa_wellness', name: 'Spa & Wellness Centre' }
    ],
    defaultReviews: [
      'Very clean and hygienic salon! The staff is polite, patient, and highly skilled. They listened carefully to what I wanted and did a wonderful job.',
      'Relaxing environment, modern setup, and courteous professionals. Pricing is fair and service quality is exceptional.',
      'Best salon experience in town. Clean tools, warm hospitality, and thorough attention to detail. Will definitely visit again!'
    ]
  },
  {
    id: 'cafe',
    name: 'Cafe & Restaurant',
    icon: 'Utensils',
    subcategories: [
      { id: 'all', name: 'All / General Dining' },
      { id: 'family_restaurant', name: 'Family Restaurant' },
      { id: 'cafe_coffee', name: 'Cafe & Coffee Spot' },
      { id: 'fast_food', name: 'Fast Food & Snacks' },
      { id: 'pure_veg', name: 'Pure Veg Restaurant' }
    ],
    defaultReviews: [
      'Delicious food, clean seating, and fast service! Everything tasted fresh and the staff was very courteous throughout our visit.',
      'Wonderful dining spot for friends and family. Pleasant ambience, reasonable prices, and mouth-watering dishes. Must visit!',
      'Very neat and hygienic restaurant. Prompt service, tasty food, and comfortable seating. Thoroughly enjoyed the experience.'
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive & Garage',
    icon: 'Wrench',
    subcategories: [
      { id: 'all', name: 'All / General Auto Service' },
      { id: 'car_service', name: 'Car Service Workshop' },
      { id: 'bike_repair', name: 'Bike Repair Workshop' },
      { id: 'car_wash', name: 'Car Wash & Cleaning' }
    ],
    defaultReviews: [
      'Honest mechanics and very transparent dealing. Serviced my vehicle on time with genuine guidance and zero unnecessary charges.',
      'Reliable workshop with skilled technicians. Thorough diagnostics, fair labor rates, and quick turnaround. Best garage in the area.',
      'Superb service quality and respectful staff. Vehicle was delivered clean and runs smoothly. Highly recommended!'
    ]
  },
  {
    id: 'realestate',
    name: 'Real Estate & Property',
    icon: 'Home',
    subcategories: [
      { id: 'all', name: 'All / General Real Estate' },
      { id: 'property_dealer', name: 'Property Dealer & Broker' },
      { id: 'real_estate_advisor', name: 'Real Estate Consultant' }
    ],
    defaultReviews: [
      'Completely transparent and trustworthy property advisory! Helped us find the right property without any false commitments or hidden hassles.',
      'Honest guidance, great understanding of local market rates, and smooth documentation support. Highly recommended for property matters.'
    ]
  },
  {
    id: 'retail',
    name: 'Retail & Shopping',
    icon: 'ShoppingBag',
    subcategories: [
      { id: 'all', name: 'All / General Retail' },
      { id: 'retail_store', name: 'Retail Showroom' },
      { id: 'wholesale_dealer', name: 'Wholesale Dealer' }
    ],
    defaultReviews: [
      'Wide variety of quality products at very reasonable rates. The shopkeeper and staff are courteous and honest in their dealing.',
      'Great shopping experience with prompt service and fair pricing. Highly recommended local store!'
    ]
  },
  {
    id: 'other',
    name: 'Other Local Business',
    icon: 'Building2',
    subcategories: [
      { id: 'all', name: 'General Business & Services' }
    ],
    defaultReviews: [
      'Outstanding customer service and exceptional workmanship! Highly professional and trustworthy team.',
      'Very satisfied with their prompt and high quality service. Transparent rates and great communication.'
    ]
  }
];

export const INITIAL_LANDING_PAGES: LandingPage[] = [
  {
    id: 'lp-1',
    slug: 'titan-fitness-club',
    businessName: 'Titan Fitness Club',
    category: 'Gym & Fitness',
    subcategory: 'Fitness Gym',
    languages: ['en'],
    tagline: 'Premium Fitness & Strength Studio',
    gmbReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',
    ratingScore: 5.0,
    totalReviewsCount: 248,
    reviews: [
      'Clean workout space and well-maintained equipment. The trainers are always around to help with proper form and guide beginners.',
      'Great workout atmosphere with positive energy. Spacious floor, hygienic locker rooms, and polite staff. Best gym in the area!',
      'Excellent fitness center! Plenty of equipment, good ventilation, and supportive gym community. Very satisfied with my membership.'
    ],
    createdAt: '2026-03-01T10:00:00.000Z'
  },
  {
    id: 'lp-2',
    slug: 'apex-marble-granite',
    businessName: 'Apex Marble & Granite',
    category: 'Marble, Granite & Tiles Shop',
    subcategory: 'Marble & Granite Shop',
    languages: ['en'],
    tagline: 'Quality Marble, Granite & Tiles',
    gmbReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',
    ratingScore: 5.0,
    totalReviewsCount: 185,
    reviews: [
      'Very impressive collection of marble, granite, and tiles! The quality is top notch and rates are very reasonable. The staff guided us patiently without pushing expensive options.',
      'One of the best tile and marble showrooms in town. Honest guidance, fair square feet rates, and on-time delivery at our site with zero damage.',
      'Great shopping experience for our home flooring. Clean showroom, transparent billing, and very polite owner. Highly recommended!'
    ],
    createdAt: '2026-03-05T10:00:00.000Z'
  }
];
