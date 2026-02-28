# Commenti

Commenti is a multi-platform SaaS prototype for online sellers to monitor reviews, detect sentiment, and respond with AI suggestions.

## Stack
- Next.js (React + Node runtime)
- PostgreSQL schema in `db/schema.sql`
- OpenAI-ready API contract at `app/api/ai/suggest/route.ts`

## Key Product Areas
- Homepage with subscription/token model messaging
- Account creation + platform onboarding (Shopee, Lazada, Facebook, TikTok)
- Dashboard with review volume, sentiment trend, keywords, conversion/reach context
- AI auto-reply and editable response flow in review inbox
- Alert & flag center with keyword spikes and media violations
- Case dealing page with urgency timer and SLA windows
- AI training page with CSV upload and performance tracking
- Multi-language selector: English, Thai, Bahasa, Malay, Chinese, Vietnamese

## Run
```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.
