import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'workspaces.json');
const PASSCODE = '124520';

app.use(express.json());

// Ensure data directory and file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

function readWorkspaces(): any[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading workspaces file:', err);
    return [];
  }
}

function writeWorkspaces(data: any[]): void {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing workspaces file:', err);
  }
}

function slugify(text: string): string {
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

function hexToPlaceId(hex1: string, hex2: string): string {
  try {
    const cleanHex1 = hex1.startsWith('0x') ? hex1 : `0x${hex1}`;
    const cleanHex2 = hex2.startsWith('0x') ? hex2 : `0x${hex2}`;

    const u1 = BigInt(cleanHex1);
    const u2 = BigInt(cleanHex2);

    const bytes = new Uint8Array(20);
    bytes[0] = 0x0a;
    bytes[1] = 0x12;
    bytes[2] = 0x09;

    const view = new DataView(bytes.buffer);
    view.setBigUint64(3, u1, true);
    bytes[11] = 0x11;
    view.setBigUint64(12, u2, true);

    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return Buffer.from(binary, 'binary')
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  } catch {
    return '';
  }
}

function extractPlaceId(text: string): string | null {
  if (!text) return null;
  const directMatch = text.match(/\b(ChIJ[a-zA-Z0-9_-]{20,})\b/);
  if (directMatch) return directMatch[1];

  const hexMatch = text.match(/(0x[0-9a-fA-F]+):(0x[0-9a-fA-F]+)/);
  if (hexMatch) {
    const pid = hexToPlaceId(hexMatch[1], hexMatch[2]);
    if (pid) return pid;
  }

  const paramMatch = text.match(/[?&]placeid=([^&#\s]+)/i);
  if (paramMatch) return paramMatch[1];

  return null;
}

async function normalizeGmbUrlAsync(input: string): Promise<string> {
  if (!input) return '';
  const trimmed = input.trim();

  if (trimmed.includes('search.google.com/local/writereview') || trimmed.includes('g.page/r/')) {
    return trimmed;
  }

  const instant = extractPlaceId(trimmed);
  if (instant) {
    return `https://search.google.com/local/writereview?placeid=${instant}`;
  }

  const isShort =
    trimmed.includes('maps.app.goo.gl') ||
    trimmed.includes('goo.gl/maps') ||
    trimmed.includes('page.link');

  if (isShort) {
    // Step 1: Manual redirect
    try {
      const manualRes = await fetch(trimmed, {
        method: 'GET',
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        redirect: 'manual'
      });
      const location = manualRes.headers.get('location') || '';
      const locPid = extractPlaceId(location);
      if (locPid) {
        return `https://search.google.com/local/writereview?placeid=${locPid}`;
      }
    } catch {}

    // Step 2: Follow redirect
    try {
      const response = await fetch(trimmed, {
        method: 'GET',
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        redirect: 'follow'
      });

      const finalUrl = response.url || '';
      let pid = extractPlaceId(finalUrl);
      if (!pid) {
        const html = await response.text();
        pid = extractPlaceId(html);
      }
      if (pid) {
        return `https://search.google.com/local/writereview?placeid=${pid}`;
      }
    } catch {}

    // Step 3: Fallback unshortener
    try {
      const unshortRes = await fetch(
        `https://unshorten.me/json/${encodeURIComponent(trimmed)}`
      );
      if (unshortRes.ok) {
        const data = await unshortRes.json();
        const resolved = data.resolved_url || '';
        const fallbackPid = extractPlaceId(resolved);
        if (fallbackPid) {
          return `https://search.google.com/local/writereview?placeid=${fallbackPid}`;
        }
      }
    } catch {}
  }

  return trimmed;
}

// 1. Passcode Authentication API
app.post('/api/auth/verify', (req, res) => {
  const { passcode } = req.body;
  if (passcode === PASSCODE) {
    res.json({
      success: true,
      token: 'admin_session_' + Date.now().toString(36)
    });
  } else {
    res.status(401).json({
      success: false,
      error: 'Invalid passcode'
    });
  }
});

// 2. Google Maps Shortlink / Place ID Resolver API
app.post('/api/resolve', async (req, res) => {
  const rawUrl = req.body?.url || req.query?.url;
  if (!rawUrl || typeof rawUrl !== 'string') {
    res.status(400).json({ error: 'url is required' });
    return;
  }

  const resolvedReviewUrl = await normalizeGmbUrlAsync(rawUrl);
  const placeId = extractPlaceId(resolvedReviewUrl);

  res.json({
    success: true,
    placeId: placeId || null,
    reviewUrl: resolvedReviewUrl
  });
});

// 3. Workspaces CRUD API
app.get('/api/workspaces', (_req, res) => {
  const list = readWorkspaces();
  res.json(list);
});

app.get('/api/workspaces/:slug', (req, res) => {
  const slug = req.params.slug.toLowerCase().trim();
  const list = readWorkspaces();
  const found = list.find((item: any) => item.slug.toLowerCase() === slug);
  if (found) {
    res.json(found);
  } else {
    res.status(404).json({ error: 'Workspace not found' });
  }
});

app.post('/api/workspaces', async (req, res) => {
  const { businessName, category, gmbReviewUrl, reviews, ratingScore, totalReviewsCount } = req.body;

  if (!businessName || !gmbReviewUrl) {
    res.status(400).json({ error: 'businessName and gmbReviewUrl are required' });
    return;
  }

  const list = readWorkspaces();
  let baseSlug = slugify(businessName) || 'business';
  let uniqueSlug = baseSlug;
  let counter = 1;

  while (list.some((item: any) => item.slug.toLowerCase() === uniqueSlug.toLowerCase())) {
    counter++;
    uniqueSlug = `${baseSlug}-${counter}`;
  }

  const finalReviewUrl = await normalizeGmbUrlAsync(gmbReviewUrl);

  const newWorkspace = {
    id: 'lp-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    slug: uniqueSlug,
    businessName: businessName.trim(),
    category: category || 'Local Business',
    gmbReviewUrl: finalReviewUrl,
    ratingScore: ratingScore || 5.0,
    totalReviewsCount: totalReviewsCount || 150,
    reviews: Array.isArray(reviews) && reviews.length > 0 ? reviews : [
      'Outstanding service and very polite staff! Highly recommend this place.'
    ],
    createdAt: new Date().toISOString()
  };

  list.unshift(newWorkspace);
  writeWorkspaces(list);

  res.status(201).json(newWorkspace);
});

app.delete('/api/workspaces/:id', (req, res) => {
  const { id } = req.params;
  const list = readWorkspaces();
  const filtered = list.filter((item: any) => item.id !== id);

  if (filtered.length === list.length) {
    res.status(404).json({ error: 'Workspace not found' });
    return;
  }

  writeWorkspaces(filtered);
  res.json({ success: true, remaining: filtered.length });
});

// 3. Vite Middlewares (Dev) or Static Files (Prod)
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
