# Muhammad Awais Farooq: Portfolio

Next.js 14 (App Router) + TypeScript. Front end and API routes live in one project.

## Run
    npm install
    npm run dev      # http://localhost:3000

## Edit content
All text lives in `data/profile.ts`. Set your LinkedIn and GitHub URLs there.

## API
- `GET /api/profile`: JSON shown live in the hero panel.
- `POST /api/contact`: validates name, email and message. Saves to `data/messages.jsonl` locally,
  and forwards to `CONTACT_WEBHOOK_URL` if set (copy `.env.example` to `.env.local`).

## Deploy
Push to GitHub and import into Vercel. Vercel's filesystem is read-only, so set `CONTACT_WEBHOOK_URL`
(Slack/Discord/Make webhook) to receive messages there.
