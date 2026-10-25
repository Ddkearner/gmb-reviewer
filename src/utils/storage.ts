import { LandingPage } from '../types';
import { INITIAL_LANDING_PAGES } from '../data/categories';

const STORAGE_KEY = 'gmb_reviewer_pages_v1';
const ADMIN_AUTH_KEY = 'gmb_reviewer_admin_auth';

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
  const newPage: LandingPage = {
    ...pageData,
    id: 'lp-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    createdAt: new Date().toISOString()
  };
  const updated = [newPage, ...pages];
  saveLandingPages(updated);
  return newPage;
}

export function updateLandingPage(id: string, updates: Partial<LandingPage>): LandingPage | null {
  const pages = getStoredLandingPages();
  const index = pages.findIndex(p => p.id === id);
  if (index === -1) return null;
  const updatedPage = { ...pages[index], ...updates };
  pages[index] = updatedPage;
  saveLandingPages(pages);
  return updatedPage;
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

export function isAdminAuthenticated(): boolean {
  try {
    return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setAdminAuthenticated(auth: boolean): void {
  try {
    if (auth) {
      sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
    } else {
      sessionStorage.removeItem(ADMIN_AUTH_KEY);
    }
  } catch {
    // ignore storage restrictions
  }
}
