# 30-day course signup service

An independent Node.js service for the custom `/30days` signup page. No Voco
code, database credentials or user authentication are needed.

The production service is `language-course-signup`, ID
`0de3d2d6-628f-467b-b916-a47e4a92c138`, in Railway project
`7ce44a08-e908-41e5-a237-a424ec927136` and production environment
`05ed148f-6406-448d-96b6-3a2cb93397c2`.
Its public endpoint is `https://language-course-signup-production.up.railway.app/subscribe`.

The initial deployment uses Railway CLI source upload, independently of the
website's GitHub Pages deployment. From this directory, deploy future changes:

```sh
npm test
railway up . --path-as-root --project 7ce44a08-e908-41e5-a237-a424ec927136 --service 0de3d2d6-628f-467b-b916-a47e4a92c138 --environment production
```

Alternatively connect this repository with root directory `/signup-server`.
Set `MAILERLITE_API_KEY` in this service's Railway Variables.
Never add the token to this repository or to a `VITE_` environment variable.
Use `signup-server/railway.json` as the config file if Railway does not detect it.
The start command is `node server.mjs`. The matching `signupEndpoint` is in
`src/pages/ThirtyDays.tsx`.

`POST /subscribe` accepts `{ "email": "...", "website": "" }` and adds the
subscriber only to course group `204572167059276811`. The `website` field is a
honeypot. Only the two production website origins are accepted. The service
limits requests to five per IP per ten minutes (per instance), caps request
bodies, times out API calls, and never logs email addresses or provider payloads.
Run one replica; a shared limiter or challenge can be added if traffic warrants it.

MailerLite owns the email sequence. Configure its group-join automation for
this group and publish it when ready. Existing group memberships are retained,
and previously unsubscribed addresses are not automatically reactivated.
If the API returns `unconfirmed`, the page asks the visitor to confirm by email.
Configure API/integration double opt-in in MailerLite if confirmation is wanted.

Run checks with `npm test` in this directory. Tests use a mocked MailerLite API
and do not create real subscribers or send email. `GET /health` is a process
health check, not a verification of the API token or automation.

## Funnel tracking

The page records an anonymous browser ID in local storage and sends visits to
Voco's `/language-course/visit` route. It includes the same ID with signup.
After MailerLite confirms group membership, this service reports a conversion
to Voco's `/language-course/signup` route using `COURSE_ANALYTICS_SECRET`.
Set the same private value on this service and the Voco server only. It must
never be added to browser code. The payload contains the browser ID and a
SHA-256 email hash, not the email address. Failed or honeypot submissions do
not report conversions. Analytics is retried once and can fail without
preventing a successful signup.

View the funnel at `https://speakwithvoco.com/whos-doing-what?tab=language-course`.
Voco's analytics collections deduplicate emails and browser visits; they do
not create Voco users. Tracking begins at deployment and has no historical
backfill. Clearing storage or switching browsers creates another visitor.
