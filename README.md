# JoFei Cafe

A responsive one-page Singapore neighbourhood café concept built with Vite, React, Tailwind CSS v4, and Lucide icons. Inspired by `PRD.md`, with the requested JoFei Cafe branding and light blue / purple theme.

## Development

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev -- --host 127.0.0.1
```

## Production build

```sh
npm run build
npm run preview
```

Edit copy, proposed prices, and opening hours in `src/main.jsx`. Styling is in `src/styles.css`. The food illustrations are local SVG components and need no external image service.

## Member authentication

`src/MemberArea.jsx` provides Supabase email/password signup, sign-in, local sign-out, session restoration, reset emails, and recovery password updates. The managed `auth.users` service stores accounts; no public profile table is created or exposed. Only email and password are requested. Email confirmation stays enabled.

`src/supabase.js` includes this project's public URL and publishable key, so Vercel works without extra build variables. Optional Vite overrides are documented in `.env.example`. This browser key is intentionally public; never substitute an admin, secret, or service-role key. Supabase manages password hashing, session persistence in browser storage, refresh tokens, and callback tokens. Do not log passwords or tokens. No privileged authorization decision relies on the displayed client-side session.

Supabase Site URL: `https://jofeicafe.vercel.app/`. Confirmation and recovery emails return to that URL. Recovery events show the new-password form. Use HTTPS in production and sign out on shared devices.

**Public email delivery is pending:** Supabase's built-in email service is restricted to project-team addresses and has low sending limits. Configure custom SMTP in Supabase Authentication → Emails → SMTP Settings before inviting public members. Do not disable email confirmation as a workaround. SMTP credentials belong only in the Supabase dashboard, never this repository. Provider setup requires the owner's sender address/domain and provider credentials.

## Google sign-in

The member panel includes `signInWithOAuth({ provider: 'google' })`. It reads Supabase's public Auth settings and enables the Google button only when the provider is enabled. This works independently of SMTP; email/password confirmation and recovery still need working email delivery.

Owner setup required: create a Web application OAuth client in Google Auth Platform, using origin `https://jofeicafe.vercel.app` and redirect URI `https://okeinstowfebcxrkawth.supabase.co/auth/v1/callback`. Configure the Google consent audience and basic `openid`, email, and profile scopes. Put the client ID and secret only in Supabase Authentication → Sign In / Providers → Google and enable the provider. Keep nonce checks enabled. Never commit the client secret. External testing mode requires test users; public rollout requires the appropriate production audience settings in Google.

Address: 7 SCI Street, Joyful State. Opening hours: every day, 10am–8pm. These details were supplied by the owner. Contact information is not yet supplied; menu prices remain sample content.
