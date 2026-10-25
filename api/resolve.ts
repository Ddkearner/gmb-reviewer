/**
 * Vercel Serverless Function to resolve Google Maps short links into direct GMB review URLs.
 */

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

  // 1. Direct Place ID
  const directMatch = text.match(/\b(ChIJ[a-zA-Z0-9_-]{20,})\b/);
  if (directMatch) return directMatch[1];

  // 2. Hex pair (0x...:0x...)
  const hexMatch = text.match(/(0x[0-9a-fA-F]+):(0x[0-9a-fA-F]+)/);
  if (hexMatch) {
    const pid = hexToPlaceId(hexMatch[1], hexMatch[2]);
    if (pid) return pid;
  }

  // 3. Query param placeid
  const paramMatch = text.match(/[?&]placeid=([^&#\s]+)/i);
  if (paramMatch) return paramMatch[1];

  return null;
}

export default async function handler(req: any, res: any) {
  // CORS support
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const rawUrl = req.body?.url || req.query?.url;
  if (!rawUrl || typeof rawUrl !== 'string') {
    return res.status(400).json({ error: 'URL is required' });
  }

  const url = rawUrl.trim();

  // Fast check on the input string directly
  const instantPlaceId = extractPlaceId(url);
  if (instantPlaceId) {
    return res.json({
      success: true,
      placeId: instantPlaceId,
      reviewUrl: `https://search.google.com/local/writereview?placeid=${instantPlaceId}`
    });
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      redirect: 'follow'
    });

    const finalUrl = response.url || '';
    let placeId = extractPlaceId(finalUrl);

    if (!placeId) {
      const html = await response.text();
      placeId = extractPlaceId(html);
    }

    if (placeId) {
      return res.json({
        success: true,
        placeId,
        reviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`
      });
    }

    return res.json({
      success: false,
      url: finalUrl || url,
      reviewUrl: url
    });
  } catch (error: any) {
    return res.status(500).json({
      error: 'Failed to resolve URL',
      details: error?.message || 'Unknown error',
      reviewUrl: url
    });
  }
}
