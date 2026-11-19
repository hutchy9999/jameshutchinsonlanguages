const endpoint = 'https://server-production-d531.up.railway.app/language-course/visit';
const storageKey = 'jhl_course_visitor';
let memoryId: string | undefined;

export function getCourseVisitorId(): string {
  if (memoryId) return memoryId;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved && /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(saved)) memoryId = saved;
  } catch { /* A visit can still be tracked if browser storage is disabled. */ }
  if (!memoryId) memoryId = crypto.randomUUID();
  try { localStorage.setItem(storageKey, memoryId); } catch { /* Retain the in-memory ID. */ }
  return memoryId;
}

export function trackCourseVisit() {
  try {
    void fetch(endpoint, {
      method: 'POST', headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ visitor_id: getCourseVisitorId() }), credentials: 'omit', keepalive: true,
    }).catch(() => { /* Analytics must never prevent signing up. */ });
  } catch { /* Analytics is optional for the visitor. */ }
}
