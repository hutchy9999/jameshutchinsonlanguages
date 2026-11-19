# James Hutchinson Languages

The website runs on React, TypeScript, Vite and Tailwind CSS.

## Run locally

```sh
npm ci
npm run dev
```

Open `http://localhost:8080`. The homepage is at `/` and the one-to-one coaching page is at `/coaching`.

```sh
npm run build
npm run preview
```

If the site is hosted from `dist`, configure the host to serve `index.html` for client-side routes so direct links to `/coaching` work.

## 30-day email course

The custom signup page is at `/30days`. It preserves the existing course copy
and calls the independent Railway service in [`signup-server`](signup-server/README.md).
The MailerLite API key belongs in that service's private Railway variables only.
The group is `204572167059276811` (30 Days, 30 Ways email subscribers).
The email sequence and group-join trigger are managed in MailerLite.
The GitHub Pages workflow creates a static `/30days/index.html` entry point so
shared links and refreshes work. No Ionos DNS changes are needed for this route.

## GitHub Pages

The GitHub Actions workflow publishes `main` at `https://hutchy9999.github.io/jameshutchinsonlanguages/`. It builds with the Pages base path and includes a static entry point for direct visits to `/coaching/`.

## Coaching bookings

The coaching page uses the public event URL in `CALENDLY_BOOKING_URL` in [`src/pages/Coaching.tsx`](src/pages/Coaching.tsx).

## Supabase

The existing Supabase project settings in `.env` are public client configuration. Keep server-side credentials, including `CONVERTKIT_API_KEY` and `CONVERTKIT_FORM_ID`, in the Supabase Edge Function environment.
