export interface BusinessReview {
  id: string;
  text: string;
}

export interface LandingPage {
  id: string;
  slug: string;
  businessName: string;
  category: string;
  city?: string;
  nearbyAreas?: string[];
  tagline?: string;
  gmbReviewUrl: string;
  ratingScore: number;
  totalReviewsCount: number;
  reviews: string[];
  createdAt: string;
}

export interface CategoryTemplate {
  id: string;
  name: string;
  icon: string;
  defaultReviews: string[];
}
