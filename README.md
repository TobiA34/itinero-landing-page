# Itinero Landing Page (Next.js)

A clean, SEO-friendly landing page for the Itinero iOS app.

## ✅ What’s included
- Next.js App Router project
- SEO metadata (title/description, OpenGraph, Twitter card)
- JSON-LD schema (MobileApplication)
- robots.txt + sitemap.xml (edit YOUR_DOMAIN_HERE)
- Apple Smart App Banner meta tag
- Clean layout inspired by getsteps.app

---

## How to run (local)

### 1) Install dependencies
```bash
npm install
```

### 2) Start dev server
```bash
npm run dev
```

Open:
http://localhost:3000

---

## Important SEO edits (do this before deploying)
Search the codebase for:
`YOUR_DOMAIN_HERE`

Replace it with your real domain, e.g.
`https://itinero.app`

Files to update:
- `app/layout.tsx`
- `app/page.tsx`
- `public/sitemap.xml`

---

## 🌍 Deploy (Vercel)
1) Push this repo to GitHub
2) Import on Vercel
3) Deploy

That’s it.
