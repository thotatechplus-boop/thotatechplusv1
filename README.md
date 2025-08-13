# THOTATECH+ — Next.js Site (Free-Services Edition)

This site is ready for **Vercel Free Tier** and uses only free services:
- Google Maps embed (no billing)
- Formspree (free plan)
- Google Analytics 4 (free)
- Open Graph & SEO
- Blog via Markdown files

## Quick Start

```bash
npm i
npm run dev
```

## Environment Variables

Set in Vercel → Project Settings → Environment Variables:

- `NEXT_PUBLIC_SHOW_COMING_SOON` = `true` (show holding page) or `false` (show site)
- `NEXT_PUBLIC_GA_ID` = your Google Analytics 4 Measurement ID (e.g., `G-XXXXXXX`)

## Coming Soon Toggle

We use **middleware** to rewrite `/` to `/coming-soon` when `NEXT_PUBLIC_SHOW_COMING_SOON=true`.
When you're ready to launch, set it to `false` and redeploy.

## Contact Form (Formspree)

- Update the `action` URL in `app/contact/page.tsx` with your own Formspree form ID.

## Blog

Create Markdown posts in `content/blog/*.md`. Use optional frontmatter:

```md
---
title: Your Post Title
date: 2025-08-14
description: Short summary for cards
---

Your **Markdown** content here.
```

## Deploy to Vercel

1. Push to GitHub
2. Import in Vercel → Deploy
3. Add env vars above
4. Add your custom domain → Vercel issues free SSL automatically

