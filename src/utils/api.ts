import { LandingPage } from '../types';
import {
  getStoredLandingPages,
  createLandingPage,
  updateLandingPage,
  deleteLandingPage,
  findLandingPageBySlug,
  saveLandingPages
} from './storage';
import { normalizeGmbReviewUrl } from './gmb';

const AUTH_KEY = 'gmb_admin_auth';

export async function verifyPasscode(passcode: string): Promise<boolean> {
  const trimmed = passcode.trim();
  if (trimmed === '124520') {
    try {
      sessionStorage.setItem(AUTH_KEY, 'true');
      localStorage.setItem(AUTH_KEY, 'true');
    } catch {}
    return true;
  }
  return false;
}

export function isSessionAuthenticated(): boolean {
  try {
    return (
      sessionStorage.getItem(AUTH_KEY) === 'true' ||
      localStorage.getItem(AUTH_KEY) === 'true'
    );
  } catch {
    return false;
  }
}

export function clearSessionAuth(): void {
  try {
    sessionStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(AUTH_KEY);
  } catch {}
}

export async function fetchWorkspaces(): Promise<LandingPage[]> {
  // Always get local workspaces (works 100% on Vercel without db)
  const localList = getStoredLandingPages();

  // Try background sync if server is running
  try {
    const res = await fetch('/api/workspaces');
    if (res.ok) {
      const serverList = await res.json();
      if (Array.isArray(serverList) && serverList.length > 0) {
        // Merge without losing local items
        const mergedMap = new Map<string, LandingPage>();
        localList.forEach(p => mergedMap.set(p.slug.toLowerCase(), p));
        serverList.forEach((p: LandingPage) => mergedMap.set(p.slug.toLowerCase(), p));
        const merged = Array.from(mergedMap.values());
        saveLandingPages(merged);
        return merged;
      }
    }
  } catch {
    // Expected on Vercel static hosting
  }

  return localList;
}

export async function createWorkspace(
  pageData: Omit<LandingPage, 'id' | 'createdAt'>
): Promise<LandingPage> {
  const normalizedReviewUrl = await normalizeGmbReviewUrl(pageData.gmbReviewUrl);
  const dataToSave = {
    ...pageData,
    gmbReviewUrl: normalizedReviewUrl
  };

  // 1. Immediately save locally so generation ALWAYS works on Vercel!
  const created = createLandingPage(dataToSave);

  // 2. Try background sync if server is running
  try {
    fetch('/api/workspaces', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(created)
    }).catch(() => {});
  } catch {}

  return created;
}

export async function updateWorkspace(
  page: LandingPage
): Promise<LandingPage> {
  const normalizedReviewUrl = await normalizeGmbReviewUrl(page.gmbReviewUrl);
  const dataToSave: LandingPage = {
    ...page,
    gmbReviewUrl: normalizedReviewUrl
  };

  // 1. Immediately update locally
  const updated = updateLandingPage(dataToSave);

  // 2. Try background sync if server is running
  try {
    fetch(`/api/workspaces/${page.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSave)
    }).catch(() => {});
  } catch {}

  return updated;
}

export async function deleteWorkspace(id: string): Promise<boolean> {
  // 1. Immediately delete locally
  deleteLandingPage(id);

  // 2. Try background sync if server is running
  try {
    fetch(`/api/workspaces/${id}`, {
      method: 'DELETE'
    }).catch(() => {});
  } catch {}

  return true;
}

export async function fetchWorkspaceBySlug(slug: string): Promise<LandingPage | null> {
  const local = findLandingPageBySlug(slug);
  if (local) return local;

  try {
    const res = await fetch(`/api/workspaces/${slug}`);
    if (res.ok) {
      return await res.json();
    }
  } catch {}

  return null;
}
