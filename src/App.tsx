import React, { useState, useEffect } from 'react';
import { LandingPage } from './types';
import {
  fetchWorkspaces,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
  isSessionAuthenticated
} from './utils/api';
import { resolveIncomingUrlPayload, findLandingPageBySlug } from './utils/storage';
import { PublicGate } from './components/PublicGate';
import { PasscodeLock } from './components/PasscodeLock';
import { AdminDashboard } from './components/AdminDashboard';
import { CustomerLandingPage } from './components/CustomerLandingPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [pages, setPages] = useState<LandingPage[]>([]);
  const [isAdminAuth, setIsAdminAuth] = useState<boolean>(() => {
    try {
      return (
        sessionStorage.getItem('gmb_admin_auth') === 'true' ||
        localStorage.getItem('gmb_admin_auth') === 'true' ||
        isSessionAuthenticated()
      );
    } catch {
      return false;
    }
  });
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const resolved = resolveIncomingUrlPayload();
    const list = await fetchWorkspaces();
    if (resolved && !list.some(p => p.slug.toLowerCase() === resolved.slug.toLowerCase())) {
      setPages([resolved, ...list]);
    } else {
      setPages(list);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    window.history.pushState({}, '', cleanPath);
    setCurrentPath(cleanPath);
    window.scrollTo(0, 0);
  };

  const handleAdminSuccess = () => {
    try {
      sessionStorage.setItem('gmb_admin_auth', 'true');
      localStorage.setItem('gmb_admin_auth', 'true');
    } catch {}
    setIsAdminAuth(true);
  };

  const handleAdminLock = () => {
    try {
      sessionStorage.removeItem('gmb_admin_auth');
      localStorage.removeItem('gmb_admin_auth');
      sessionStorage.removeItem('gmb_admin_auth_token');
    } catch {}
    setIsAdminAuth(false);
  };

  const handleCreatePage = async (pageData: Omit<LandingPage, 'id' | 'createdAt'>) => {
    const created = await createWorkspace(pageData);
    if (created) {
      await loadData();
    }
  };

  const handleUpdatePage = async (page: LandingPage) => {
    const updated = await updateWorkspace(page);
    if (updated) {
      await loadData();
    }
  };

  const handleDeletePage = async (id: string) => {
    const ok = await deleteWorkspace(id);
    if (ok) {
      setPages(prev => prev.filter(p => p.id !== id));
    }
  };

  const trimmedPath = currentPath.replace(/^\/+|\/+$/g, '');

  // 1. Secret Admin View
  if (trimmedPath === 'secret-admin') {
    if (!isAdminAuth) {
      return <PasscodeLock onSuccess={handleAdminSuccess} />;
    }

    return (
      <AdminDashboard
        pages={pages}
        onLock={handleAdminLock}
        onCreatePage={handleCreatePage}
        onUpdatePage={handleUpdatePage}
        onDeletePage={handleDeletePage}
        onNavigateToPage={(slug) => navigateTo(`/${slug}`)}
      />
    );
  }

  // 2. Main Public Gate (Root domain only)
  if (!trimmedPath || trimmedPath === 'index.html') {
    return <PublicGate />;
  }

  // 3. Customer Landing Page (Business Slug)
  const matchedPage =
    pages.find(p => p.slug.toLowerCase() === trimmedPath.toLowerCase()) ||
    findLandingPageBySlug(trimmedPath);

  if (matchedPage) {
    return <CustomerLandingPage page={matchedPage} />;
  }

  if (loading) {
    return (
      <div className="min-h-[100dvh] w-full bg-[#F2F2F7] flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-[#000000] animate-pulse" />
      </div>
    );
  }

  // 4. Fallback 404
  return (
    <div className="min-h-[100dvh] w-full bg-[#F2F2F7] flex flex-col items-center justify-center p-6 text-center select-none">
      <h2 className="text-xl font-bold mb-2">Page Not Found</h2>
      <button
        onClick={() => navigateTo('/')}
        className="py-2.5 px-6 rounded-full bg-[#000000] text-xs font-semibold text-[#FFFFFF]"
      >
        Home
      </button>
    </div>
  );
}
