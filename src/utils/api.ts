import { LandingPage } from '../types';

const AUTH_TOKEN_KEY = 'gmb_admin_auth_token';

export async function verifyPasscode(passcode: string): Promise<boolean> {
  try {
    const res = await fetch('/api/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ passcode })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.token) {
        sessionStorage.setItem(AUTH_TOKEN_KEY, data.token);
        return true;
      }
    }
    return false;
  } catch (err) {
    console.error('API verifyPasscode error:', err);
    // Offline fallback for demo
    if (passcode === '124520') {
      sessionStorage.setItem(AUTH_TOKEN_KEY, 'offline_token');
      return true;
    }
    return false;
  }
}

export function isSessionAuthenticated(): boolean {
  try {
    return Boolean(sessionStorage.getItem(AUTH_TOKEN_KEY));
  } catch {
    return false;
  }
}

export function clearSessionAuth(): void {
  try {
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
  } catch {
    // Ignore
  }
}

export async function fetchWorkspaces(): Promise<LandingPage[]> {
  try {
    const res = await fetch('/api/workspaces');
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('cached_workspaces', JSON.stringify(data));
      return data;
    }
  } catch (err) {
    console.error('API fetchWorkspaces error:', err);
  }

  // Fallback to cache if network fails
  try {
    const cached = localStorage.getItem('cached_workspaces');
    if (cached) return JSON.parse(cached);
  } catch {
    // Ignore
  }
  return [];
}

export async function createWorkspace(
  pageData: Omit<LandingPage, 'id' | 'createdAt'>
): Promise<LandingPage | null> {
  try {
    const res = await fetch('/api/workspaces', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pageData)
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.error('API createWorkspace error:', err);
  }
  return null;
}

export async function deleteWorkspace(id: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/workspaces/${id}`, {
      method: 'DELETE'
    });
    return res.ok;
  } catch (err) {
    console.error('API deleteWorkspace error:', err);
    return false;
  }
}

export async function fetchWorkspaceBySlug(slug: string): Promise<LandingPage | null> {
  try {
    const res = await fetch(`/api/workspaces/${slug}`);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.error('API fetchWorkspaceBySlug error:', err);
  }

  // Fallback check cached list
  try {
    const cached = localStorage.getItem('cached_workspaces');
    if (cached) {
      const list = JSON.parse(cached);
      return list.find((item: any) => item.slug.toLowerCase() === slug.toLowerCase()) || null;
    }
  } catch {
    // Ignore
  }
  return null;
}
