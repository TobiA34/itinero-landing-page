# How to Get Itinero Landing Page on Google

Your site already has SEO built in (titles, descriptions, sitemap, structured data). Follow these steps to get indexed and improve ranking.

---

## 1. Deploy the site (if not already)

- **Vercel** (recommended for Next.js): Push to GitHub, then connect the repo at [vercel.com](https://vercel.com). You’ll get a URL like `https://itinero-landing.vercel.app`.
- **Other hosts**: Build with `npm run build` and deploy the output (e.g. `.next` + static export if you use it).

---

## 2. Set your real domain

In your deployment (e.g. Vercel → Project → Settings → Environment Variables), add:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Use your **final** URL (e.g. `https://itinero.app` or `https://www.itinero.app`). This drives:

- Canonical URLs  
- Sitemap URLs  
- Open Graph / sharing links  

Then **redeploy** so the sitemap and metadata use the correct domain.

---

## 3. Add the site to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. **Add property** → choose **URL prefix**.
3. Enter your live URL (e.g. `https://itinero.app`).
4. **Verify ownership** using one of:
   - **HTML tag**: Add the meta tag they give you to your site (e.g. in `app/layout.tsx` in `<head>`) and redeploy, then click “Verify”.
   - **DNS**: Add the TXT record they provide to your domain DNS.
   - **Google Analytics**: If you use GA4, you can verify that way.

---

## 4. Submit the sitemap

1. In Search Console, open your property.
2. Go to **Sitemaps** (left menu).
3. Under “Add a new sitemap”, enter: `sitemap.xml`
4. Click **Submit**.

Google will then crawl `https://yourdomain.com/sitemap.xml` and the URLs in it (homepage, `/privacy`, etc.).

---

## 5. Request indexing for the homepage (optional but useful)

1. In Search Console, use **URL Inspection** (left menu).
2. Enter your homepage URL (e.g. `https://itinero.app`).
3. Click **Request indexing** so Google queues it for crawling sooner.

---

## 6. Optional: add an OG image for sharing

- Create an image **1200×630 px** (e.g. logo + tagline).
- Save it as `public/og.png`.
- Your metadata already points to `/og.png`; once the file exists, links shared on socials will show this image.

---

## What’s already done on the site

- **Title & description**: Set for the homepage and used in metadata.
- **Keywords**: Meta keywords and natural use in copy (travel itinerary planner, trip planner app, etc.).
- **Canonical URL**: Uses `NEXT_PUBLIC_SITE_URL`.
- **Structured data**: `MobileApplication` and `WebSite` JSON-LD for Google.
- **Sitemap**: Generated at `/sitemap.xml` (home + `/privacy`).
- **robots.txt**: Allows crawling and points to the sitemap.
- **Open Graph & Twitter**: Set for social sharing (OG image will work once `og.png` exists).

---

## How long until it appears on Google?

- **Indexing**: Often a few days to a couple of weeks after sitemap submission and verification.
- **Ranking**: Improves over time with consistent content, backlinks, and real traffic. Your page is already optimised for terms like “travel itinerary planner” and “trip planner app”.

---

## Quick checklist

- [ ] Site is live at a public URL  
- [ ] `NEXT_PUBLIC_SITE_URL` is set to that URL and you’ve redeployed  
- [ ] Property added and verified in Google Search Console  
- [ ] Sitemap submitted (`sitemap.xml`)  
- [ ] (Optional) Homepage URL requested for indexing  
- [ ] (Optional) `public/og.png` added for social sharing  

After that, Google will crawl and index your site; you can monitor coverage and queries in Search Console.
