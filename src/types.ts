export interface BusinessReview {
  id: string;
  text: string;
}

export interface SubCategory {
  id: string;
  name: string;
  keywords?: string[];
}

export interface CategoryTemplate {
  id: string;
  name: string;
  icon: string;
  subcategories: SubCategory[];
  defaultReviews: string[];
}

export interface LandingPage {
  id: string;
  slug: string;
  businessName: string;
  category: string;
  subcategory?: string;
  languages?: ('en' | 'hi' | 'hinglish')[];
  city?: string;
  nearbyAreas?: string[];
  tagline?: string;
  gmbReviewUrl: string;
  ratingScore: number;
  totalReviewsCount: number;
  reviews: string[];
  reviewsByLang?: {
    en?: string[];
    hi?: string[];
    hinglish?: string[];
  };
  createdAt: string;
}
