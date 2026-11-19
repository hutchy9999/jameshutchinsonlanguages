import { test } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createSignupServer } from './server.mjs';

const origin = 'https://jameshutchinsonlanguages.com';
const groupId = '204572167059276811';
const subscriber = (status = 'active', groups = [{ id: groupId }]) =>
  Response.json({ data: { id: 'subscriber-id', status, groups } }, { status: 201 });

async function setup(t, options = {}) {
  const calls = [];
  const server = createSignupServer({
    apiKey: 'test-token',
    fetchImpl: async (...args) => { calls.push(args); return subscriber(); },
    ...options,
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise(resolve => { server.close(resolve); server.closeAllConnections(); }));
  const base = `http://127.0.0.1:${server.address().port}`;
  const post = (body = { email: 'reader@example.com', website: '' }, headers = {}) => fetch(`${base}/subscribe`, {
    method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
  });
  return { base, post, calls };
}

test('adds a trimmed email only to the fixed course group without forcing resubscription', async t => {
  const { post, calls } = await setup(t);
  const response = await post({ email: ' reader@example.com ', groups: ['another-group'], status: 'active', resubscribe: true });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true, confirmationRequired: false });
  assert.equal(response.headers.get('access-control-allow-origin'), origin);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], 'https://connect.mailerlite.com/api/subscribers');
  assert.equal(calls[0][1].headers.Authorization, 'Bearer test-token');
  assert.deepEqual(JSON.parse(calls[0][1].body), { email: 'reader@example.com', groups: [groupId] });
});

test('supports the www website and preflights without calling MailerLite', async t => {
  const { base, calls } = await setup(t);
  const response = await fetch(`${base}/subscribe`, { method: 'OPTIONS', headers: { Origin: 'https://www.jameshutchinsonlanguages.com', 'Access-Control-Request-Method': 'POST' } });
  assert.equal(response.status, 204);
  assert.equal(response.headers.get('access-control-allow-origin'), 'https://www.jameshutchinsonlanguages.com');
  assert.equal(calls.length, 0);
});

test('rejects foreign and missing origins before contacting MailerLite', async t => {
  const { base, post, calls } = await setup(t);
  assert.equal((await post(undefined, { Origin: 'https://other.example' })).status, 403);
  assert.equal((await fetch(`${base}/subscribe`, { method: 'POST' })).status, 403);
  assert.equal(calls.length, 0);
});

test('rejects malformed payloads and invalid emails', async t => {
  const { post, calls } = await setup(t);
  for (const body of [null, [], { email: 'invalid' }, { email: 42 }, { email: 'a@example.com', website: 42 }]) {
    assert.equal((await post(body)).status, 400);
  }
  assert.equal(calls.length, 0);
});

test('rejects oversized and non-JSON requests', async t => {
  const { base, post, calls } = await setup(t);
  assert.equal((await post({ email: `${'a'.repeat(2100)}@example.com` })).status, 413);
  assert.equal((await fetch(`${base}/subscribe`, { method: 'POST', headers: { Origin: origin, 'Content-Type': 'text/plain' }, body: '{}' })).status, 415);
  assert.equal(calls.length, 0);
});

test('ignores honeypot submissions', async t => {
  const { post, calls } = await setup(t);
  assert.equal((await post({ email: 'bot@example.com', website: 'spam' })).status, 200);
  assert.equal(calls.length, 0);
});

test('rate limits repeated attempts while keeping different Railway client IPs separate', async t => {
  const { post, calls } = await setup(t);
  for (let i = 0; i < 5; i++) assert.equal((await post(undefined, { 'X-Real-IP': '203.0.113.1' })).status, 200);
  const limited = await post(undefined, { 'X-Real-IP': '203.0.113.1', 'X-Forwarded-For': '203.0.113.99' });
  assert.equal(limited.status, 429);
  assert.ok(Number(limited.headers.get('retry-after')) > 0);
  assert.equal((await post(undefined, { 'X-Real-IP': '203.0.113.2' })).status, 200);
  assert.equal(calls.length, 6);
});

test('asks for confirmation when MailerLite returns unconfirmed', async t => {
  const { post } = await setup(t, { fetchImpl: async () => subscriber('unconfirmed') });
  assert.deepEqual(await (await post()).json(), { success: true, confirmationRequired: true });
});

test('does not report success for suppressed addresses or missing group membership', async t => {
  for (const [status, groups] of [['unsubscribed', [{ id: groupId }]], ['bounced', [{ id: groupId }]], ['active', []]]) {
    const { post } = await setup(t, { fetchImpl: async () => subscriber(status, groups) });
    assert.equal((await post()).status, 502);
  }
});

test('fails clearly when the API key is not configured', async t => {
  const { post, calls } = await setup(t, { apiKey: '' });
  assert.equal((await post()).status, 503);
  assert.equal(calls.length, 0);
});

test('does not expose provider errors or secrets', async t => {
  const { post } = await setup(t, { fetchImpl: async () => Response.json({ secret: 'provider-private-data' }, { status: 401 }) });
  const response = await post();
  assert.equal(response.status, 502);
  assert.doesNotMatch(await response.text(), /provider-private-data|test-token/);
});

test('handles provider throttling, bad JSON and network failures', async t => {
  for (const [fetchImpl, status] of [
    [async () => new Response('', { status: 429 }), 429],
    [async () => new Response('not-json'), 502],
    [async () => { throw new Error('timeout'); }, 502],
  ]) {
    const { post } = await setup(t, { fetchImpl });
    assert.equal((await post()).status, status);
  }
});

test('health checks do not subscribe anyone and unexpected routes/methods are rejected', async t => {
  const { base, calls } = await setup(t);
  assert.equal((await fetch(`${base}/health`)).status, 200);
  assert.equal((await fetch(`${base}/missing`)).status, 404);
  assert.equal((await fetch(`${base}/subscribe`, { headers: { Origin: origin } })).status, 405);
  assert.equal(calls.length, 0);
});
