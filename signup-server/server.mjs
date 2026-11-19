import { createServer } from 'node:http';
import { isIP } from 'node:net';
import { pathToFileURL } from 'node:url';

const origins = new Set([
  'https://jameshutchinsonlanguages.com',
  'https://www.jameshutchinsonlanguages.com',
]);
const courseGroupId = '204572167059276811';
const windowMs = 10 * 60 * 1000;

// This service runs independently of Voco. It does not use its code, secrets,
// database or authentication. Only the server talks to MailerLite.
export function createSignupServer({ apiKey = process.env.MAILERLITE_API_KEY, fetchImpl = fetch } = {}) {
  const attempts = new Map();
  let lastSweep = 0;

  const reply = (res, status, body) => {
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(body));
  };

  const server = createServer(async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    const path = new URL(req.url, 'http://localhost').pathname;
    if (path === '/health' && req.method === 'GET') {
      reply(res, 200, { status: 'ok' });
      return;
    }
    if (path !== '/subscribe') {
      reply(res, 404, { error: 'Not found' });
      return;
    }

    const origin = req.headers.origin;
    res.setHeader('Vary', 'Origin');
    if (!origins.has(origin)) {
      reply(res, 403, { error: 'Invalid origin' });
      return;
    }
    res.setHeader('Access-Control-Allow-Origin', origin);
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '600',
      });
      res.end();
      return;
    }
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST, OPTIONS');
      reply(res, 405, { error: 'Method not allowed' });
      return;
    }

    // Railway sets X-Real-IP at its public edge. Ignore arbitrary forwarded
    // address lists. This modest limiter is per service instance.
    const realIp = typeof req.headers['x-real-ip'] === 'string' ? req.headers['x-real-ip'].trim() : '';
    const ip = isIP(realIp) ? realIp : req.socket.remoteAddress;
    const now = Date.now();
    if (now - lastSweep >= 60_000) {
      for (const [key, bucket] of attempts) if (bucket.until <= now) attempts.delete(key);
      lastSweep = now;
    }
    let bucket = attempts.get(ip);
    if (!bucket || bucket.until <= now) {
      if (attempts.size >= 10_000) {
        reply(res, 503, { error: 'Please try again shortly' });
        return;
      }
      bucket = { count: 0, until: now + windowMs };
      attempts.set(ip, bucket);
    }
    if (++bucket.count > 5) {
      res.setHeader('Retry-After', String(Math.ceil((bucket.until - now) / 1000)));
      reply(res, 429, { error: 'Too many attempts. Please try again later.' });
      return;
    }
    if (!req.headers['content-type']?.toLowerCase().startsWith('application/json')) {
      reply(res, 415, { error: 'Expected JSON' });
      return;
    }

    try {
      const raw = await readBody(req);
      let body;
      try { body = JSON.parse(raw); } catch {
        reply(res, 400, { error: 'Invalid request' });
        return;
      }
      if (!body || typeof body !== 'object' || Array.isArray(body) ||
          typeof body.email !== 'string' || body.email.trim().length > 254 ||
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim()) ||
          (body.website !== undefined && typeof body.website !== 'string')) {
        reply(res, 400, { error: 'Please enter a valid email address' });
        return;
      }
      // Honeypot: automated submissions never reach the email provider.
      if (body.website) {
        reply(res, 200, { success: true, confirmationRequired: false });
        return;
      }
      if (!apiKey) {
        reply(res, 503, { error: 'Signup is temporarily unavailable' });
        return;
      }

      const response = await fetchImpl('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // POST upserts without removing existing groups. Never force a status
        // or resubscribe an address that has previously opted out.
        body: JSON.stringify({ email: body.email.trim(), groups: [courseGroupId] }),
        signal: AbortSignal.timeout(12_000),
      });
      if (!response.ok) {
        console.error('[Course signup] MailerLite HTTP status:', response.status);
        reply(res, response.status === 429 ? 429 : 502, { error: 'Could not sign up. Please try again.' });
        return;
      }
      const result = await response.json();
      const subscriber = result?.data;
      const added = Array.isArray(subscriber?.groups) && subscriber.groups.some(group => String(group.id) === courseGroupId);
      if (!added || !['active', 'unconfirmed'].includes(subscriber?.status)) {
        reply(res, 502, { error: 'Could not complete signup. Please try again.' });
        return;
      }
      reply(res, 200, { success: true, confirmationRequired: subscriber.status === 'unconfirmed' });
    } catch (error) {
      // Never log request bodies, emails, API tokens, or provider responses.
      reply(res, error?.code === 'BODY_TOO_LARGE' ? 413 : 502, { error: 'Could not sign up. Please try again.' });
    }
  });
  server.requestTimeout = 20_000;
  server.headersTimeout = 15_000;
  return server;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    const cleanup = () => {
      req.off('data', onData);
      req.off('end', onEnd);
      req.off('error', onError);
      req.off('aborted', onAbort);
    };
    const onError = error => { cleanup(); reject(error); };
    const onAbort = () => onError(new Error('Request aborted'));
    const onEnd = () => { cleanup(); resolve(Buffer.concat(chunks).toString('utf8')); };
    const onData = chunk => {
      size += chunk.length;
      if (size > 2048) {
        cleanup();
        req.resume();
        reject(Object.assign(new Error('Request too large'), { code: 'BODY_TOO_LARGE' }));
      } else chunks.push(chunk);
    };
    req.on('data', onData);
    req.on('end', onEnd);
    req.on('error', onError);
    req.on('aborted', onAbort);
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.env.PORT || 3000);
  createSignupServer().listen(port, '0.0.0.0', () => console.log(`Course signup listening on port ${port}`));
}
