import React, { useState, useEffect } from 'react';
import { LandingPage } from './types';
import {
  getStoredLandingPages,
  createLandingPage,
  deleteLandingPage,
  findLandingPageBySlug,
  isAdminAuthenticated,
  setAdminAuthenticated
} from './utils/storage';
import { PublicGate } from './components/PublicGate';
import { PasscodeLock } from './components/PasscodeLock';
import { AdminDashboard } from './components/AdminDashboard';
import { CustomerLandingPage } from './components/CustomerLandingPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [pages, setPages] = useState<LandingPage[]>([]);
  const [isAdminAuth, setIsAdminAuth] = useState<boolean>(() => isAdminAuthenticated());

  useEffect(() => {
    setPages(getStoredLandingPages());
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
    setIsAdminAuth(true);
    setAdminAuthenticated(true);
  };

  const handleCreatePage = (pageData: Omit<LandingPage, 'id' | 'createdAt'>) => {
    const created = createLandingPage(pageData);
    setPages(getStoredLandingPages());
    return created;
  };

  const handleDeletePage = (id: string) => {
    deleteLandingPage(id);
    setPages(getStoredLandingPages());
  };

  const trimmedPath = currentPath.replace(/^\/+|\/+$/g, '');

  // 1. Secret Admin
  if (trimmedPath === 'secret-admin') {
    if (!isAdminAuth) {
      return (
        <PasscodeLock
          onSuccess={handleAdminSuccess}
        />
      );
    }

    return (
      <AdminDashboard
        pages={pages}
        onCreatePage={handleCreatePage}
        onDeletePage={handleDeletePage}
        onNavigateToPage={(slug) => navigateTo(`/${slug}`)}
      />
    );
  }

  // 2. Main Public Gate (Root domain)
  if (!trimmedPath || trimmedPath === 'index.html') {
    return (
      <PublicGate
        onOpenSecretAdmin={() => navigateTo('/secret-admin')}
      />
    );
  }

  // 3. Customer Landing Page (Business Slug)
  const matchedPage = findLandingPageBySlug(trimmedPath);

  if (matchedPage) {
    return <CustomerLandingPage page={matchedPage} />;
  }

  // 4. Fallback 404
  return (
    <div className="min-h-screen bg-[#F2F2F7] flex flex-col items-center justify-center p-6 text-center select-none">
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
