# Production Backend Architecture & Strict Admin Isolation Plan

Comprehensive backend roadmap for building a production-grade, zero-external-database GMB Reviewer with an Express REST API, persistent server-side file storage, strict URL-only admin access (`/secret-admin`), passcode authentication (`124520`), and functional CRUD operations.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following choices have been confirmed and will guide the implementation:

- **Confirmed Decision 1 (Storage Engine)**: Server REST API with JSON file persistence (`data/workspaces.json`). No external managed database required. Data survives server reboots and functions across all devices.
- **Confirmed Decision 2 (Strict Admin Isolation)**: Secret admin route is strictly bound to `/secret-admin`. Removed all click/double-click triggers from the public gate. The passcode challenge (`124520`) is mandatory before any admin features or lists are displayed.

---

## 1. Overview & Core Concept

- **What It Does**: A multi-tenant Google My Business review booster. The root domain (`/`) acts as a secure, neutral public billboard. The secret `/secret-admin` portal allows managing business workspaces, generating direct review links (`/:slug`), and creating QR codes for counter stands.
- **Target Audience / Persona**: Local business owners (gyms, clinics, academies, cafes) and agency administrators needing instant, 5-star customer review collection.
- **Key Value**: Simplifies review collection into a single customer action (1 tap to copy and open Google), with atomic server-backed storage and zero database overhead.

---

## 2. User Experience & Visual Design

The minimalist Apple iOS aesthetic (zero elevation, zero border lines, zero drop shadows, `#F2F2F7` canvas, `#FFFFFF` cards, `#000000` text) is preserved exactly without adding visual cognitive load.

### Key User Flows

1. **Public Gate (`/`)**:
   - Clean, centered text: "Google My Business Reviewer".
   - "Developed by Deepak Yadav" and a WhatsApp Contact Us button.
   - Completely inert: no hidden click handlers or shortcuts. Visiting `/secret-admin` in the browser bar is the sole entry point.

2. **Secret Admin Unlock (`/secret-admin`)**:
   - Full-screen iOS PIN lock screen.
   - User inputs 6-digit passcode `124520`.
   - On success, verifies with backend API and unlocks the workspace dashboard.

3. **Workspace Management (CRUD & QR)**:
   - **List**: Fetches real landing pages from `/api/workspaces`.
   - **Create**: Modal form requiring Business Name, Category, and GMB URL. Generates slug and stores in server JSON.
   - **Delete**: Sends `DELETE /api/workspaces/:id` to remove the workspace from server persistence.
   - **QR Generation**: Generates high-res QR codes linking directly to `domain.com/:slug` with instant PNG download.
   - **Copy Link**: Copies live link with green feedback badge.

4. **Customer Review Page (`/:slug`)**:
   - Loaded server-side/client-side from the slug.
   - Shows business name, 5 gold stars, and the tailored positive review.
   - "Copy & Review" button copies text to clipboard and instantly redirects to the business's Google review URL.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Express Server Integration (`server.ts`)**
  - *Chosen Approach*: Full-stack Express server mounting Vite middlewares in development (`npm run dev` running `tsx server.ts`) and serving static build files in production.
  - *Why*: Allows true server-side REST API endpoints (`/api/workspaces`, `/api/verify-passcode`) with robust atomic file locking on `data/workspaces.json`.
  - *Alternatives Considered*: Pure browser `localStorage` (fails across different devices/browsers) or external SQL/Cloud database (violates the zero-db constraint).

- **Decision 2: Passcode Verification on Backend**
  - *Chosen Approach*: Passcode verification endpoint (`POST /api/auth/verify`) returns a secure session token stored in browser session storage.
  - *Why*: Prevents frontend tampering or inspection of admin payloads before entering the code.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                    Client Browser                           │
│                                                             │
│   Public Gate (/)          Secret Admin (/secret-admin)    │
│   Customer View (/:slug)   Create / Delete / QR Modals      │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
               │ HTTP GET /:slug              │ REST API (JSON)
               ▼                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Express Server                          │
│                                                             │
│   GET  /api/workspaces       ──> Retrieve all workspaces    │
│   POST /api/workspaces       ──> Create new workspace       │
│   DELETE /api/workspaces/:id ──> Remove workspace           │
│   POST /api/auth/verify      ──> Verify passcode 124520     │
│   Vite SSR / Static Fallback ──> Route /:slug to client     │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│              File System Storage Layer                      │
│                                                             │
│               data/workspaces.json                          │
└─────────────────────────────────────────────────────────────┘
```

### Data Schema (`LandingPage`)

```typescript
export interface LandingPage {
  id: string;
  slug: string;
  businessName: string;
  category: string;
  gmbReviewUrl: string;
  ratingScore: number;
  totalReviewsCount: number;
  reviews: string[];
  createdAt: string;
}
```

### API Endpoints Specification

1. `POST /api/auth/verify`: Validates 6-digit passcode `124520` and returns `{ success: true, token: string }`.
2. `GET /api/workspaces`: Returns all active landing page workspaces from `data/workspaces.json`.
3. `POST /api/workspaces`: Validates and saves a new workspace, auto-generating a unique slug.
4. `DELETE /api/workspaces/:id`: Removes the item from `data/workspaces.json` and returns the updated list.
5. `GET /api/workspaces/:slug`: Resolves a workspace by its unique URL slug.
