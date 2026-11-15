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

## Coaching bookings

Replace `REPLACE_WITH_YOUR_CALENDLY_BOOKING_URL` in [`src/pages/Coaching.tsx`](src/pages/Coaching.tsx) with your `https://calendly.com/...` booking link. The booking button stays disabled until a Calendly URL is set.

## Supabase

The existing Supabase project settings in `.env` are public client configuration. Keep server-side credentials, including `CONVERTKIT_API_KEY` and `CONVERTKIT_FORM_ID`, in the Supabase Edge Function environment.
