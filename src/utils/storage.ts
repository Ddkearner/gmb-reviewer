import { LandingPage } from '../types';
import { INITIAL_LANDING_PAGES, CATEGORIES } from '../data/categories';

const STORAGE_KEY = 'gmb_reviewer_pages_v1';
const ADMIN_AUTH_KEY = 'gmb_reviewer_admin_auth';

export function getPositiveReviewForCategory(categoryName: string): string {
  const cat = CATEGORIES.find(
    c => c.name.toLowerCase() === categoryName.toLowerCase() ||
         categoryName.toLowerCase().includes(c.id)
  );
  if (cat && cat.defaultReviews.length > 0) {
    return cat.defaultReviews[0];
  }
  return 'Outstanding service and very polite staff! Highly recommend this place.';
}

export function getStoredLandingPages(): LandingPage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LANDING_PAGES));
      return INITIAL_LANDING_PAGES;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_LANDING_PAGES;
  } catch (e) {
    console.error('Failed to read landing pages from storage:', e);
    return INITIAL_LANDING_PAGES;
  }
}

export function saveLandingPages(pages: LandingPage[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
  } catch (e) {
    console.error('Failed to save landing pages to storage:', e);
  }
}

export function findLandingPageBySlug(slug: string): LandingPage | undefined {
  const cleanSlug = slug.toLowerCase().replace(/^\/+|\/+$/g, '').trim();
  const pages = getStoredLandingPages();
  return pages.find(p => p.slug.toLowerCase() === cleanSlug);
}

export function createLandingPage(pageData: Omit<LandingPage, 'id' | 'createdAt'>): LandingPage {
  const pages = getStoredLandingPages();
  const cleanSlug = slugify(pageData.slug || pageData.businessName);

  // Check if page with slug already exists
  const existingIndex = pages.findIndex(p => p.slug.toLowerCase() === cleanSlug.toLowerCase());

  const newPage: LandingPage = {
    ...pageData,
    slug: cleanSlug,
    id: existingIndex >= 0 ? pages[existingIndex].id : 'lp-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    createdAt: new Date().toISOString()
  };

  let updated: LandingPage[];
  if (existingIndex >= 0) {
    updated = [...pages];
    updated[existingIndex] = newPage;
  } else {
    updated = [newPage, ...pages];
  }

  saveLandingPages(updated);
  return newPage;
}

export function deleteLandingPage(id: string): void {
  const pages = getStoredLandingPages();
  const updated = pages.filter(p => p.id !== id);
  saveLandingPages(updated);
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

import { generateInitialReviewPool } from '../data/seoTemplates';

/**
 * Builds a universal shareable URL that works on ANY device (even with no database).
 * Encodes business details and geo-targeting so customer phones scanning QR load the page perfectly.
 */
export function buildShareableLandingPageUrl(page: LandingPage): string {
  const origin = window.location.origin;
  const params = new URLSearchParams();
  params.set('b', page.businessName);
  params.set('c', page.category);
  params.set('u', page.gmbReviewUrl);
  if (page.subcategory) params.set('sc', page.subcategory);
  if (page.language) {
    params.set('lng', page.language);
  } else if (Array.isArray(page.languages) && page.languages.length > 0) {
    params.set('lng', page.languages[0]);
  }
  if (page.city) params.set('ct', page.city);
  if (Array.isArray(page.nearbyAreas) && page.nearbyAreas.length > 0) {
    params.set('na', page.nearbyAreas.join(','));
  }

  return `${origin}/${page.slug}?${params.toString()}`;
}

/**
 * Extracts payload from incoming URL parameters and saves to local state.
 * Cleans the URL path with window.history.replaceState so customer sees clean domain.com/slug.
 */
export function resolveIncomingUrlPayload(): LandingPage | null {
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const b = searchParams.get('b');
    const u = searchParams.get('u');
    const c = searchParams.get('c') || 'Local Business';
    const sc = searchParams.get('sc') || undefined;
    const lngRaw = searchParams.get('lng') || 'en';
    const langMode: 'en' | 'hi' | 'hinglish' | 'mixed' =
      lngRaw === 'hi' || lngRaw === 'hinglish' || lngRaw === 'mixed' ? lngRaw : 'en';
    const ct = searchParams.get('ct') || '';
    const na = searchParams.get('na')
      ? searchParams.get('na')!.split(',').map(s => s.trim()).filter(Boolean)
      : [];
    const currentSlug = window.location.pathname.replace(/^\/+|\/+$/g, '');

    if (currentSlug && currentSlug !== 'secret-admin' && u && b) {
      const { flatReviews, reviewsByLang } = generateInitialReviewPool(
        b,
        c,
        sc,
        ct || undefined,
        na.length > 0 ? na : undefined,
        25,
        langMode
      );

      const page: LandingPage = {
        id: 'lp-' + currentSlug,
        slug: currentSlug,
        businessName: b,
        category: c,
        subcategory: sc,
        language: langMode,
        languages: langMode === 'mixed' ? ['en', 'hi', 'hinglish'] : [langMode],
        city: ct || undefined,
        nearbyAreas: na.length > 0 ? na : undefined,
        gmbReviewUrl: u,
        ratingScore: 5.0,
        totalReviewsCount: 150,
        reviews: flatReviews.length > 0 ? flatReviews : [getPositiveReviewForCategory(c)],
        reviewsByLang,
        createdAt: new Date().toISOString()
      };

      // Save to local cache so page survives reload
      createLandingPage(page);

      // Clean the URL bar so customer sees clean /slug
      window.history.replaceState({}, '', `/${currentSlug}`);
      return page;
    }
  } catch (err) {
    console.error('Error resolving incoming url payload:', err);
  }
  return null;
}
