import { CategoryTemplate, LandingPage } from '../types';

export const CATEGORIES: CategoryTemplate[] = [
  {
    id: 'dental',
    name: 'Dental Clinic',
    icon: 'Smile',
    defaultReviews: [
      'Virtually painless treatment! The dentist was exceptionally gentle, modern sterile equipment, and great consultation.',
      'Best dental clinic in town. Very hygienic setup, friendly doctor who makes you feel relaxed, and transparent pricing.',
      'Wonderful dental care experience! Friendly staff, no unnecessary treatments pushed, and excellent results.',
      'Clean, prompt, and very professional. My teeth cleaning and filling were done smoothly with zero discomfort.'
    ]
  },
  {
    id: 'clinic',
    name: 'Clinic & Healthcare',
    icon: 'Stethoscope',
    defaultReviews: [
      'Extremely knowledgeable doctor and compassionate medical staff. Everything was explained clearly and the treatment was very effective.',
      'Very clean and modern clinic. Minimal waiting time, gentle care, and thorough diagnosis. Best medical consultation experience.',
      'Great experience! The doctor listened patiently and prescribed the right medication. Staff is polite and supportive.',
      'Highly professional healthcare center. Transparent guidance, hygienic premises, and attentive doctors.'
    ]
  },
  {
    id: 'gym',
    name: 'Gym & Fitness',
    icon: 'Dumbbell',
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
    defaultReviews: [
      'Incredible service and warm hospitality! Got exactly the style I requested. The staff is polite, skilled, and gentle.',
      'Premium pampering experience! Very hygienic salon, talented stylists, and relaxing ambiance. Will definitely come back.',
      'Loved the haircut and treatment! The stylist took time to understand my hair and did a phenomenal job.',
      'Top-rated salon with attentive professionals and clean equipment. 10/10 service and great value!'
    ]
  },
  {
    id: 'coaching',
    name: 'Coaching & Education',
    icon: 'GraduationCap',
    defaultReviews: [
      'Exceptional faculty and structured study material. Concept clarity and regular doubt sessions made a massive difference in my scores!',
      'Best coaching institute with dedicated teachers who give individual attention to every student. Great test series and mentorship.',
      'Highly recommended institute! Supportive faculty, interactive classroom lectures, and disciplined academic environment.',
      'Top-notch teaching methodology! The teachers are patient, concepts are crystal clear, and results speak for themselves.'
    ]
  },
  {
    id: 'cafe',
    name: 'Cafe & Restaurant',
    icon: 'Utensils',
    defaultReviews: [
      'Delicious food, cozy aesthetic, and quick service! Everything was fresh and flavors were on point. Must visit spot.',
      'Amazing coffee and delectable food! Wonderful cozy vibe, polite servers, and great music. Loved every bit of it.',
      'One of the best dining spots in town! Great presentation, generous portions, and warm hospitable staff.',
      'Fantastic experience! Mouth-watering delicacies, clean seating area, and fast turnaround time.'
    ]
  }
];

export const INITIAL_LANDING_PAGES: LandingPage[] = [
  {
    id: 'lp-1',
    slug: 'titan-fitness-club',
    businessName: 'Titan Fitness Club',
    category: 'Gym & Fitness',
    tagline: 'Premium Strength & Functional Training',
    gmbReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',
    ratingScore: 5.0,
    totalReviewsCount: 248,
    reviews: [
      'Top tier gym equipment and cleanest workout environment in the area. Trainers are truly supportive and always motivate you to hit your goals!',
      'Best gym experience ever! High quality machines, spacious workout floors, and polite staff. Highly recommend joining.',
      'Outstanding gym! Great atmosphere, hygienic locker rooms, and certified trainers who guide you properly through every workout.'
    ],
    createdAt: '2026-03-01T10:00:00.000Z'
  },
  {
    id: 'lp-2',
    slug: 'apex-coaching-academy',
    businessName: 'Apex Coaching Academy',
    category: 'Coaching & Education',
    tagline: 'Premier Competitive Exam Mentorship',
    gmbReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',
    ratingScore: 4.9,
    totalReviewsCount: 312,
    reviews: [
      'Exceptional faculty and structured study material. Concept clarity and regular doubt sessions made a massive difference in my scores!',
      'Best coaching institute with dedicated teachers who give individual attention to every student. Great test series and mentorship.',
      'Highly recommended institute! Supportive faculty, interactive classroom lectures, and disciplined academic environment.'
    ],
    createdAt: '2026-03-05T12:00:00.000Z'
  },
  {
    id: 'lp-3',
    slug: 'aura-dental-studio',
    businessName: 'Aura Dental Studio',
    category: 'Dental Clinic',
    tagline: 'Modern Gentle Cosmetic & Restorative Dentistry',
    gmbReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',
    ratingScore: 5.0,
    totalReviewsCount: 185,
    reviews: [
      'Virtually painless treatment! The dentist was exceptionally gentle, modern sterile equipment, and great consultation.',
      'Best dental clinic in town. Very hygienic setup, friendly doctor who makes you feel relaxed, and transparent pricing.',
      'Wonderful dental care experience! Friendly staff, no unnecessary treatments pushed, and excellent results.'
    ],
    createdAt: '2026-03-10T14:30:00.000Z'
  }
];
