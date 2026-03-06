# How to Get Itinero Into Google’s Top 10

Your site is already set up well for SEO (titles, descriptions, structured data, sitemap). Reaching the **top 10** depends on **competition**, **backlinks**, **content**, and **time**. This checklist focuses on what you can control.

---

## 1. Technical (already done or quick wins)

- [x] **Canonical URL** – Home, blog, and privacy use correct canonicals.
- [x] **Sitemap** – `/sitemap.xml` includes home, blog, privacy. Submit in Google Search Console (GSC).
- [x] **Structured data** – Organization, WebSite, MobileApplication, FAQ, BreadcrumbList on the homepage; Article + BreadcrumbList on the blog.
- [ ] **Google Search Console** – Add property for your **live domain** (e.g. `https://itinero.app`). Add the verification meta tag in `app/layout.tsx` under `metadata.other` if GSC gives you an HTML tag:
  ```ts
  "google-site-verification": "your-code-here"
  ```
- [ ] **Request indexing** – In GSC, use URL Inspection for `https://yourdomain.com/` and “Request indexing” after publishing.

---

## 2. Content (biggest lever for rankings)

- **Target one main keyword per page.**  
  Home: “travel itinerary planner app” / “trip planner app”.  
  Blog: “how to plan a travel itinerary”, “travel itinerary planner app guide”, etc.

- **Add more blog posts** (each with its own URL and canonical). Ideas:
  - “How to plan a day-by-day trip itinerary”
  - “Best trip planner app for iPhone”
  - “Travel itinerary template: what to include”
  - “Solo travel planning tips”
  Each post should be 800–1,500+ words, useful, and naturally use your target phrases.

- **Internal links** – From the blog (and any new posts) link back to the homepage and to other relevant posts. You already link from the home to the blog.

---

## 3. Backlinks (why most sites reach top 10)

Google trusts sites that **other sites link to**. One strong backlink often helps more than many small tweaks.

- **App directories** – Submit Itinero to Product Hunt, AlternativeTo, SaaSHub, app review sites, “best travel app” roundups.
- **Your own presence** – Link from your personal site, LinkedIn, or portfolio to itinero.app.
- **Guest posts / outreach** – Travel or productivity blogs: offer a short guest post or a quote in exchange for a link to Itinero.
- **No spam** – Prefer a few relevant, editorial links over paid link schemes (which can get you penalised).

---

## 4. Track progress (don’t guess)

- **Google Search Console** – Check “Performance” for queries that show your site, average position, clicks. Use “URL Inspection” for indexing status.
- **Pick 3–5 target queries** (e.g. “travel itinerary planner app”, “trip planner app iPhone”) and check your position weekly (e.g. incognito search or a rank tracker).
- **Fix issues** – In GSC, fix any “Coverage” or “Enhancements” errors (e.g. missing canonicals, broken links).

---

## 5. Realistic timeline

- **Weeks 1–2** – Get indexed and fix any GSC errors.
- **Weeks 2–8** – You may see impressions for your target keywords; clicks often come later.
- **Months 2–6** – With steady content and a few good backlinks, top 20 is a realistic goal; **top 10** depends on how competitive the keyword is and how strong your backlink profile is.

For very competitive terms (“trip planner app”, “travel app”), top 10 usually needs either strong backlinks or a long tail (e.g. “travel itinerary planner app for iPhone” or “minimalist trip planner app”).

---

## Quick reference

| Action | Where |
|--------|--------|
| Submit sitemap | GSC → Sitemaps → add `https://yourdomain.com/sitemap.xml` |
| Request indexing | GSC → URL Inspection → Request indexing |
| Add verification | `app/layout.tsx` → `metadata.other["google-site-verification"]` |
| Add new blog post | New file under `app/blog/` or dynamic route; add to sitemap |
| Check target keyword in title/H1 | Home: “travel itinerary planner app”; Blog: use exact target phrase in title and first H1 |

Your on-page and technical SEO are in good shape. Focus on **indexing in GSC**, **more targeted content**, and **earning backlinks** to move toward the top 10.
