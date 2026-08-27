# AI on Apple

A clean, Apple-inspired landing page for the [AI on Apple](https://www.linkedin.com/company/ai-on-apple/) community — Slack join link, about section, and upcoming events pulled from [Luma](https://luma.com/aionapple).

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev -- -p 43123
```

Open [http://localhost:43123](http://localhost:43123).

## Environment variables

| Variable | Description | Default |
|---|---|---|
| `LUMA_CALENDAR_SLUG` | Luma calendar slug | `aionapple` |
| `LUMA_FEATURED_EVENT_SLUGS` | Comma-separated event slugs to always show (e.g. private events) | `ney2wxnz` |
| `LUMA_API_KEY` | Optional Luma Plus API key for official calendar API | — |

## SF Pro fonts

Drop `.woff2` files into `public/fonts/` and wire them in `src/app/layout.tsx` via `next/font/local`:

- `SF-Pro-Text-Regular.woff2` (400)
- `SF-Pro-Text-Medium.woff2` (500)
- `SF-Pro-Text-Semibold.woff2` (600)
- `SF-Pro-Display-Bold.woff2` (700)

Until then, the site uses **Inter** plus `-apple-system` (native SF Pro on Apple devices).

## Branding

Replace assets in `public/brand/`:

- `logo.jpg` — community logo
- `cover.png` — Open Graph / social image

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables (`LUMA_FEATURED_EVENT_SLUGS` at minimum)
4. Deploy — Next.js is auto-detected
5. Add your custom domain under **Project → Settings → Domains**

Events revalidate every 30 minutes.

## Links

- Slack: [Join community](https://join.slack.com/t/ai-on-apple/shared_invite/zt-466vj3u3b-yLsuaPMjQJ~AD9AykPFQ9Q)
- Events: [luma.com/aionapple](https://luma.com/aionapple)
- LinkedIn: [AI on Apple](https://www.linkedin.com/company/ai-on-apple/)
