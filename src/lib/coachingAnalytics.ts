type CoachingEvent = "home_coaching_click" | "coaching_view" | "booking_hero" | "booking_footer";

const endpoint = "https://server-production-d531.up.railway.app/coaching-analytics";
const storageKey = "jhl_coaching_session";
const inactivityWindow = 30 * 60 * 1000;
let memorySession: { id: string; lastActive: number } | undefined;

export function trackCoaching(event: CoachingEvent) {
  // Analytics must never prevent navigating to the offer or Calendly.
  try {
    const now = Date.now();
    let session = memorySession;
    try {
      const saved = JSON.parse(sessionStorage.getItem(storageKey) || "null");
      if (saved && typeof saved.id === "string" && typeof saved.lastActive === "number") session = saved;
    } catch { /* In-memory tracking still works if browser storage is unavailable. */ }
    if (!session || now - session.lastActive >= inactivityWindow) session = { id: crypto.randomUUID(), lastActive: now };
    session.lastActive = now;
    memorySession = session;
    try { sessionStorage.setItem(storageKey, JSON.stringify(session)); } catch { /* Storage may be disabled. */ }
    const events: CoachingEvent[] = event.startsWith("booking_") ? ["coaching_view", event] : [event];
    for (const name of events) {
      void fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ event: name, session_id: session.id }),
        keepalive: true,
        credentials: "omit",
      }).catch(() => { /* Navigation remains available if tracking is blocked. */ });
    }
  } catch { /* Tracking is optional for the visitor. */ }
}
