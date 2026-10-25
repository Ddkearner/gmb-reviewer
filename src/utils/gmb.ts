/**
 * Utilities for extracting Google Place IDs and generating direct GMB review URLs.
 * Works seamlessly in both browser and serverless (Vercel) environments without external dependencies.
 */

/**
 * Converts Google Maps 64-bit hex identifiers (Cell ID & CID) to standard Google Place ID (ChIJ...).
 * Uses protobuf length-delimited structure and base64url encoding.
 */
export function hexToPlaceId(hex1: string, hex2: string): string {
  try {
    const cleanHex1 = hex1.startsWith('0x') ? hex1 : `0x${hex1}`;
    const cleanHex2 = hex2.startsWith('0x') ? hex2 : `0x${hex2}`;

    const u1 = BigInt(cleanHex1);
    const u2 = BigInt(cleanHex2);

    const bytes = new Uint8Array(20);
    bytes[0] = 0x0a; // protobuf tag 1, wire type 2 (length-delimited)
    bytes[1] = 0x12; // length 18
    bytes[2] = 0x09; // tag 1 (fixed64)

    const view = new DataView(bytes.buffer);
    view.setBigUint64(3, u1, true); // little-endian
    bytes[11] = 0x11; // tag 2 (fixed64)
    view.setBigUint64(12, u2, true); // little-endian

    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return btoa(binary)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  } catch (err) {
    console.error('Error converting hex to Place ID:', err);
    return '';
  }
}

/**
 * Fast synchronous extraction of Place ID from raw text or Google Maps URLs.
 */
export function extractPlaceIdFromText(input: string): string | null {
  if (!input) return null;
  let decoded = input.trim();
  try {
    decoded = decodeURIComponent(decoded);
  } catch {}

  // 1. Explicit Place ID (e.g. ChIJ2_tRJwC3nTkRKd7dPr0k_kY)
  const directMatch = decoded.match(/\b(ChIJ[a-zA-Z0-9_-]{20,})\b/);
  if (directMatch) {
    return directMatch[1];
  }

  // 2. Hex pair in Google Maps URL (e.g. 0x399db7002751fbdb:0x46fe24bd3eddde29)
  const hexMatch = decoded.match(/(0x[0-9a-fA-F]+):(0x[0-9a-fA-F]+)/);
  if (hexMatch) {
    const pid = hexToPlaceId(hexMatch[1], hexMatch[2]);
    if (pid) return pid;
  }

  // 3. Place ID in query parameter (?placeid=ChIJ...)
  const paramMatch = decoded.match(/[?&]placeid=([^&#\s]+)/i);
  if (paramMatch) {
    return paramMatch[1];
  }

  return null;
}

/**
 * Normalizes any Google business / maps link into a direct 5-star review URL.
 * Automatically resolves short links (maps.app.goo.gl) on the fly.
 * Guarantees that only a valid review URL with placeid is returned.
 */
export async function normalizeGmbReviewUrl(input: string): Promise<string> {
  if (!input) return '';
  const trimmed = input.trim();

  // Already a direct review URL with placeid
  if (trimmed.includes('search.google.com/local/writereview')) {
    return trimmed;
  }

  // Google short review link (g.page/r/.../review)
  if (trimmed.includes('g.page/r/')) {
    return trimmed;
  }

  // 1. Fast offline check (Place ID or full Maps URL with hex coordinates/cid)
  const offlinePlaceId = extractPlaceIdFromText(trimmed);
  if (offlinePlaceId) {
    return `https://search.google.com/local/writereview?placeid=${offlinePlaceId}`;
  }

  // 2. If it's a short link (maps.app.goo.gl or goo.gl/maps), resolve via backend / Vercel API
  const isShortLink =
    trimmed.includes('maps.app.goo.gl') ||
    trimmed.includes('goo.gl/maps') ||
    trimmed.includes('page.link');

  if (isShortLink) {
    // Strategy A: Call /api/resolve (Vercel Serverless / Express)
    try {
      const res = await fetch('/api/resolve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: trimmed })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.placeId) {
          return `https://search.google.com/local/writereview?placeid=${data.placeId}`;
        }
        if (data.reviewUrl && !data.reviewUrl.includes('maps.app.goo.gl')) {
          return data.reviewUrl;
        }
      }
    } catch {
      // Backend request failed, continue to fallback
    }

    // Strategy B: Fallback unshortener (runs directly in browser/client if backend was unreachable)
    try {
      const unshortRes = await fetch(
        `https://unshorten.me/json/${encodeURIComponent(trimmed)}`
      );
      if (unshortRes.ok) {
        const data = await unshortRes.json();
        const resolved = data.resolved_url || '';
        const pid = extractPlaceIdFromText(resolved);
        if (pid) {
          return `https://search.google.com/local/writereview?placeid=${pid}`;
        }
      }
    } catch {
      // Fallback failed
    }
  }

  return trimmed;
}
