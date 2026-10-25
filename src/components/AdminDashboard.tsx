import React, { useState } from 'react';
import { LandingPage } from '../types';
import { Plus, QrCode, Trash2, ExternalLink } from 'lucide-react';
import { QRCodeModal } from './QRCodeModal';
import { CreatePageModal } from './CreatePageModal';

interface AdminDashboardProps {
  pages: LandingPage[];
  onCreatePage: (pageData: Omit<LandingPage, 'id' | 'createdAt'>) => Promise<void>;
  onDeletePage: (id: string) => Promise<void>;
  onNavigateToPage: (slug: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  pages,
  onCreatePage,
  onDeletePage,
  onNavigateToPage
}) => {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [activeQrModalPage, setActiveQrModalPage] = useState<LandingPage | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleCopy = (slug: string) => {
    const fullUrl = `${window.location.origin}/${slug}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fullUrl);
    }
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 1500);
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    await onDeletePage(id);
    setDeletingId(null);
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#F2F2F7] px-4 py-5 max-w-xl mx-auto select-none safe-top safe-bottom">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#000000]">
          Landing Pages
        </h1>

        <button
          onClick={() => setIsCreateOpen(true)}
          className="flex items-center gap-1 py-2 px-4 rounded-full bg-[#000000] text-xs font-semibold text-[#FFFFFF] active:scale-95 transition-transform"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Create New</span>
        </button>
      </div>

      {/* Pages List */}
      <div className="space-y-2.5">
        {pages.length === 0 ? (
          <div className="bg-[#FFFFFF] rounded-2xl p-6 text-center text-xs text-[#8E8E93]">
            No landing pages created yet. Tap "+ Create New" above.
          </div>
        ) : (
          pages.map(page => {
            const isCopied = copiedSlug === page.slug;
            const isDeleting = deletingId === page.id;

            return (
              <div
                key={page.id}
                className="bg-[#FFFFFF] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="min-w-0 flex-1">
                  <h2 className="text-sm sm:text-base font-bold text-[#000000] truncate">
                    {page.businessName}
                  </h2>
                  <span className="text-xs text-[#8E8E93] font-mono block truncate">
                    /{page.slug}
                  </span>
                </div>

                {/* Real Working Actions */}
                <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(page.slug)}
                    className={`h-9 px-3 rounded-full text-xs font-semibold active:scale-95 transition-all ${
                      isCopied
                        ? 'bg-[#25D366] text-[#FFFFFF]'
                        : 'bg-[#F2F2F7] text-[#000000] active:bg-[#E5E5EA]'
                    }`}
                  >
                    {isCopied ? 'Copied' : 'Copy Link'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveQrModalPage(page)}
                    className="w-9 h-9 rounded-full bg-[#F2F2F7] text-[#000000] flex items-center justify-center active:bg-[#E5E5EA] active:scale-95"
                    title="QR Code"
                    aria-label="QR Code"
                  >
                    <QrCode className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigateToPage(page.slug)}
                    className="w-9 h-9 rounded-full bg-[#F2F2F7] text-[#000000] flex items-center justify-center active:bg-[#E5E5EA] active:scale-95"
                    title="Open"
                    aria-label="Open"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(page.id)}
                    disabled={isDeleting}
                    className="w-9 h-9 rounded-full bg-[#F2F2F7] text-[#8E8E93] flex items-center justify-center active:bg-[#FFE5E5] active:text-red-600 active:scale-95 disabled:opacity-40"
                    title="Delete"
                    aria-label="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Modals */}
      {isCreateOpen && (
        <CreatePageModal
          onClose={() => setIsCreateOpen(false)}
          onSave={async (data) => {
            await onCreatePage(data);
            setIsCreateOpen(false);
          }}
        />
      )}

      {activeQrModalPage && (
        <QRCodeModal
          page={activeQrModalPage}
          onClose={() => setActiveQrModalPage(null)}
        />
      )}
    </div>
  );
};
