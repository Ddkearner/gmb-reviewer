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

// 2. Workspaces CRUD API
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

app.post('/api/workspaces', (req, res) => {
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

  const newWorkspace = {
    id: 'lp-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    slug: uniqueSlug,
    businessName: businessName.trim(),
    category: category || 'Local Business',
    gmbReviewUrl: gmbReviewUrl.trim(),
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
