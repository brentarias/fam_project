# The F.A.M. Project — Astro.js Migration Roadmap

> **Project:** Replace the WordPress site `thefamproject.com` with an Astro.js static site.
> **Date:** 2026-03-12
> **Status:** Stage 1 — Planning

---

## 1. Motivation

The existing WordPress site at `thefamproject.com` suffers from two core issues:

1. **Poor Lighthouse scores:** Performance 63, Accessibility 91, Best Practices 54, SEO 69.
2. **WordPress is hostile to agentic coding workflows** — theme/plugin abstractions make automated development impractical.

Additionally, the crawl of the live site revealed degraded infrastructure:
- Multiple 404 errors on static resources (broken asset references)
- Cloudflare Turnstile errors (CAPTCHA misfiring)
- jQuery Migrate 1.4.1 still loaded (long-deprecated)
- YouTube embed blocked by Cloudflare security rules
- Stale copyright (© 2022)

---

## 2. Two-Stage Approach

### Stage 1: Proof of Concept

Re-create the existing website using Astro.js with Tailwind CSS (or vanilla CSS + modern features). The goal is **same-spirit modernized** — not pixel-perfect reproduction, but close enough with substantially better Lighthouse scores.

Key constraints for Stage 1:
- All forms are **stubbed** (visually present with correct fields; not wired to any backend)
- All ~30 articles are migrated as **Astro Content Collections** (with categories preserved)
- Team members are a **separate Content Collection**
- Images are downloaded from WordPress originals; **Astro's built-in image optimization** handles the rest at build time
- Hosted on **Netlify**

### Stage 2: Production-Ready (Pending Customer Approval)

- Integrate a **headless CMS** (TBD based on customer preference)
- All content managed through the CMS
- Email collection handled by **Go High Level**
- Forms wired to real backends

---

## 3. Site Map

The existing site has 7 top-level routes, plus 37 individual article pages:

```
thefamproject.com/
├── /                          Homepage
├── /our-mission/              Mission statement & statistics
├── /events/                   Event series & legacy events
├── /projects/                 FAM Fun Pass, FAM Central, vendor & fundraising
├── /our-fam/                  Team bios (8 members)
├── /articles/                 Blog index (37 articles, 10 categories)
│   ├── /how-to-fight-teen-cell-phone-addiction/
│   ├── /practical-tips-to-improve-your-in-law-relationships/
│   ├── /helping-your-child-navigate-social-media/
│   ├── /how-to-have-difficult-conversations/
│   ├── /5-easy-christmas-decorations-to-make-with-your-kids/
│   ├── /how-to-build-strong-family-relationships/
│   ├── /what-family-game-night-can-do-for-your-family/
│   ├── /how-to-build-a-lasting-relationship/
│   ├── /got-conflict-in-your-relationship/
│   ├── /anxiety-in-kids/
│   ├── /teaching-your-kids-about-forgiveness-and-why-its-important/
│   ├── /how-to-raise-a-happy-child/
│   ├── /how-do-i-connect-better-with-my-teenager/
│   ├── /how-to-make-a-difference-while-spending-time-with-your-kids/
│   ├── /how-old-should-my-child-be-to-get-a-smartphone/
│   ├── /should-i-get-my-child-a-smartphone/
│   ├── /how-to-address-opposing-views-with-your-child/
│   ├── /got-to-do-lists-youre-doing-it-wrong/
│   ├── /reignite-your-friday-night/
│   ├── /addressing-the-difficulty-of-suicide/
│   ├── /how-my-smart-phone-affects-my-sleep/
│   ├── /things-to-do-with-your-family-this-weekend/
│   ├── /how-to-limit-screen-time-in-your-home/
│   ├── /dealing-with-addiction-mental-illness-more-in-the-home/
│   ├── /back-to-school-2020-12-tips-for-parents-to-keep-your-cool/
│   ├── /dinner-is-better-when-we-eat-together/
│   ├── /are-we-addicted-to-our-cell-phones/
│   ├── /how-to-talk-about-difficult-topics-with-our-kids/
│   ├── /this-isnt-how-it-was-supposed-to-be/
│   ├── /so-what-is-your-2020-new-normal-going-to-look-like/
│   ├── /the-struggle-is-real-learning-the-art-of-connecting-with-your-kids/
│   ├── /surviving-and-thriving-parenting-tips-and-tricks-an-interview-with-amber-trueblood/
│   ├── /importance-of-hugging-your-child/
│   ├── /healthy-family-habits/
│   ├── /infographic-screen-time-recommendations-for-kids/
│   ├── /dealing-with-digital-distraction/
│   └── /family-retreats/
└── /contact/                  Contact form + info
```

---

## 4. Navigation

### Header
- Logo (links to `/`)
- Our Mission → `/our-mission/`
- Events → `/events/`
- Projects → `/projects/`
- Our F.A.M. → `/our-fam/`
- Articles → `/articles/`
- **"Get in Touch"** CTA button → navigates to `/contact/`
- Mobile: hamburger menu with the same links

### Footer
- Logo (links to `/`)
- Column 1: Our Mission, Events, Projects
- Column 2: Our F.A.M., Articles, Contact
- Social links: Facebook, Instagram, YouTube
- Newsletter signup (email + "Get in here!" submit)
- Copyright: `© {currentYear} The F.A.M. Project` (dynamically generated)

---

## 5. Content Collections

### 5.1 Articles Collection

**37 articles** migrated from WordPress (the original site had 37, not ~30 as initially estimated). Each article has:

| Field | Type | Notes |
|---|---|---|
| `title` | string | Article headline |
| `slug` | string | URL-friendly identifier (derived from WP permalink) |
| `categories` | array of enum | **Multiple categories per article** (see category details below) |
| `excerpt` | string | Short preview text (from WordPress `og:description`) |
| `featuredImage` | image | Downloaded from WordPress; optimized by Astro at build time |
| `publishDate` | date | Original publication date (from WordPress JSON-LD `datePublished`) |
| `body` | markdown | Full article content |

#### Categories (10 total)

The original WordPress site used **10 categories** (not 6 as initially assumed), and articles had **multiple categories** each (not just one). No tags were used.

| Category | # of Articles |
|---|---|
| Family | 28 |
| Parenting | 16 |
| Child Development | 15 |
| Digital Distraction | 8 |
| Communication | 4 |
| Relationships | 4 |
| Screen Time | 3 |
| Personal Development | 2 |
| Date Night | 2 |
| Uncategorized | 2 |

#### Category Distribution by Article

| # | Article Slug | Categories |
|---|---|---|
| 1 | `how-to-fight-teen-cell-phone-addiction` | Digital Distraction, Family, Parenting, Screen Time |
| 2 | `practical-tips-to-improve-your-in-law-relationships` | Communication, Family, Relationships |
| 3 | `helping-your-child-navigate-social-media` | Child Development, Digital Distraction, Family, Screen Time |
| 4 | `how-to-have-difficult-conversations` | Communication, Family, Relationships |
| 5 | `5-easy-christmas-decorations-to-make-with-your-kids` | Child Development, Family |
| 6 | `how-to-build-strong-family-relationships` | Family, Parenting, Relationships |
| 7 | `what-family-game-night-can-do-for-your-family` | Child Development, Family, Parenting |
| 8 | `how-to-build-a-lasting-relationship` | Communication, Date Night, Relationships |
| 9 | `got-conflict-in-your-relationship` | Communication, Relationships |
| 10 | `anxiety-in-kids` | Child Development, Family, Personal Development |
| 11 | `teaching-your-kids-about-forgiveness-and-why-its-important` | Child Development, Family |
| 12 | `how-to-raise-a-happy-child` | Child Development, Family, Parenting |
| 13 | `how-do-i-connect-better-with-my-teenager` | Family, Parenting |
| 14 | `how-to-make-a-difference-while-spending-time-with-your-kids` | Child Development, Family, Parenting |
| 15 | `how-old-should-my-child-be-to-get-a-smartphone` | Child Development, Parenting, Screen Time |
| 16 | `should-i-get-my-child-a-smartphone` | Child Development, Family, Parenting |
| 17 | `how-to-address-opposing-views-with-your-child` | Child Development, Family, Parenting |
| 18 | `got-to-do-lists-youre-doing-it-wrong` | Family, Personal Development |
| 19 | `reignite-your-friday-night` | Date Night |
| 20 | `addressing-the-difficulty-of-suicide` | Family |
| 21 | `how-my-smart-phone-affects-my-sleep` | Digital Distraction, Family |
| 22 | `things-to-do-with-your-family-this-weekend` | Family |
| 23 | `how-to-limit-screen-time-in-your-home` | Digital Distraction, Parenting |
| 24 | `dealing-with-addiction-mental-illness-more-in-the-home` | Family, Parenting |
| 25 | `back-to-school-2020-12-tips-for-parents-to-keep-your-cool` | Child Development, Family, Parenting |
| 26 | `dinner-is-better-when-we-eat-together` | Child Development, Family, Parenting |
| 27 | `are-we-addicted-to-our-cell-phones` | Digital Distraction, Family |
| 28 | `how-to-talk-about-difficult-topics-with-our-kids` | Child Development, Family, Parenting |
| 29 | `this-isnt-how-it-was-supposed-to-be` | Uncategorized |
| 30 | `so-what-is-your-2020-new-normal-going-to-look-like` | Child Development, Family, Parenting |
| 31 | `the-struggle-is-real-learning-the-art-of-connecting-with-your-kids` | Family, Parenting |
| 32 | `surviving-and-thriving-parenting-tips-and-tricks-an-interview-with-amber-trueblood` | Family, Uncategorized |
| 33 | `importance-of-hugging-your-child` | Family |
| 34 | `healthy-family-habits` | Family |
| 35 | `infographic-screen-time-recommendations-for-kids` | Digital Distraction |
| 36 | `dealing-with-digital-distraction` | Digital Distraction |
| 37 | `family-retreats` | Family |

#### Missing Featured Images (WordPress CDN 404s)

10 articles had featured images that returned HTTP 404 from the WordPress CDN. These articles use `placeholder-1.jpg` as a stand-in. The original image URLs that failed:

| Article Slug | Original Image URL (404) |
|---|---|
| `practical-tips-to-improve-your-in-law-relationships` | `.../2021/01/Inlaws-1024x683.jpg` |
| `helping-your-child-navigate-social-media` | `.../2021/01/social-media-addiction-APRLFF5-copy-1024x683.jpg` |
| `how-to-have-difficult-conversations` | `.../2021/01/couple-ignoring-each-other-in-living-room-L474UT7-1024x589.jpg` |
| `5-easy-christmas-decorations-to-make-with-your-kids` | `.../2020/12/7DCA0A9B-EE9D-4013-9661-965FD32D856B.jpeg` |
| `how-to-build-strong-family-relationships` | `.../2020/12/FAMBONDING.jpg` |
| `what-family-game-night-can-do-for-your-family` | `.../2020/11/C3AD0F7D-6B85-471A-BFDA-0BEB874EE1E4.jpeg` |
| `how-to-build-a-lasting-relationship` | `.../2020/11/pexels-leah-kelley-691045.jpg` |
| `got-conflict-in-your-relationship` | `.../2020/11/11_9_2020_Fighting_CROPPED2.jpg` |
| `anxiety-in-kids` | `.../2020/11/8A0A68AE-B404-4C38-BE3D-B1DF5673D4FC.png` |
| `teaching-your-kids-about-forgiveness-and-why-its-important` | `.../2020/10/cropped-pexels-magda-ehlers-4116540.jpg` |
| `how-to-raise-a-happy-child` | `.../2020/10/cropped-robert-collins-tvc5imO5pXk-unsplash.jpg` |

> **Note:** All WordPress image URLs are under `https://www.thefamproject.com/app/uploads/`. The full-size originals returned 404; the `download-assets.mjs` script previously obtained smaller thumbnail versions (300px) for 6 of these from the homepage, stored in `src/assets/articles/`.

#### Pexels Replacement Images

All 11 missing featured images were replaced with suitable royalty-free photos from [Pexels](https://www.pexels.com/). Downloaded via `scripts/download-pexels-images.mjs`.

| Article Slug | Pexels Photo | Description | Photographer |
|---|---|---|---|
| `practical-tips-to-improve-your-in-law-relationships` | [#3184183](https://www.pexels.com/photo/3184183/) | Group making a toast at family dinner | fauxels |
| `helping-your-child-navigate-social-media` | [#6255945](https://www.pexels.com/photo/6255945/) | Teen girl on sofa using smartphone | kaboompics.com |
| `how-to-have-difficult-conversations` | [#3958855](https://www.pexels.com/photo/3958855/) | Couple having a serious conversation | Polina Zimmerman |
| `5-easy-christmas-decorations-to-make-with-your-kids` | [#19364668](https://www.pexels.com/photo/19364668/) | Kids creating festive Christmas crafts | Boris Hamer |
| `how-to-build-strong-family-relationships` | [#3807571](https://www.pexels.com/photo/3807571/) | Family of four enjoying teatime together | Elina Fairytale |
| `what-family-game-night-can-do-for-your-family` | [#31341827](https://www.pexels.com/photo/31341827/) | Family playing a colorful board game | Mendez |
| `how-to-build-a-lasting-relationship` | [#6788002](https://www.pexels.com/photo/6788002/) | Senior couple holding hands romantically | Marcus Aurelius |
| `got-conflict-in-your-relationship` | [#984954](https://www.pexels.com/photo/984954/) | Man and woman in a tense moment outdoors | Vera Arsic |
| `anxiety-in-kids` | [#7743443](https://www.pexels.com/photo/7743443/) | Portrait of a young boy looking sad | Vika Glitter |
| `teaching-your-kids-about-forgiveness-and-why-its-important` | [#4008885](https://www.pexels.com/photo/4008885/) | Parents kissing their smiling son | Elina Fairytale |
| `how-to-raise-a-happy-child` | [#3662648](https://www.pexels.com/photo/3662648/) | Joyful girl playing with wooden toys | cottonbro studio |

#### URL Backward Compatibility

The original WordPress site served articles at root-level URLs (`thefamproject.com/{slug}/`) with **no date** and **no `/articles/` prefix**. The new Astro site serves them under `/articles/{slug}/`. A Netlify `_redirects` file provides 301 redirects from the original paths to maintain backward compatibility with any existing external links.

The articles index page (`/articles/`) supports filtering by any of the 10 categories. Articles appear in every category they belong to.

### 5.2 Team Collection

8 team members from the `/our-fam/` page:

| Field | Type | Notes |
|---|---|---|
| `name` | string | Full name |
| `title` | string | Role/title (e.g., "CEO & Co-Founder") |
| `photo` | image | Headshot downloaded from WordPress |
| `bio` | string | ~100-word biography |
| `order` | number | Display order on the page |

**Team members:**
1. Jashin Howell — CEO & Co-Founder
2. Chris Lange — President & Co-Founder
3. Roger Badenhuizen — (Promotional/Marketing)
4. Kenna & RJ Watters — (Marketing/Branding)
5. Ryan Garey — (Speaker/Strategist)
6. Nate Leavitt — (Technology)
7. Fred Gagon — (Corporate/Funding)
8. Franklin Poulsen — (PhD, Marriage & Family)

---

## 6. Forms (All Stubbed in Stage 1)

Four distinct form signatures distributed across the site. All forms in Stage 1 display their fields and, on submit, show a success toast/message. No data is sent anywhere.

### Form Type A — Newsletter Signup (Email Only)

| Field | Type | Placeholder |
|---|---|---|
| `email` | email | "Email" |

**Locations:**
- Homepage hero section — button: "Let's change the world!"
- Footer (every page) — button: "Get in here!"
- Events page: events list subscription — button: "Get my free guide"
- Events page: legacy event download — button: "Get my free guide"

### Form Type B — Contact Form (Name + Email + Phone)

| Field | Type | Placeholder |
|---|---|---|
| `name` | text | "Name" |
| `email` | email | "Email" |
| `phone` | tel | "Phone" |

**Locations:**
- Homepage bottom section — button: "Let's change the world!"
- Our Mission page — button: "Let's change the world!"
- Contact page — button: "Let's change the world!"

### Form Type C — Sponsor/Partner Inquiry (Name + Email + Phone)

Same fields as Form Type B, but with a different context and button label.

| Field | Type | Placeholder |
|---|---|---|
| `name` | text | "Name" |
| `email` | email | "Email" |
| `phone` | tel | "Phone" |

**Locations:**
- Events page sponsor section — button: "Let's work together"

### Form Type D — Fundraising Inquiry (Name + Email + Phone + Message)

| Field | Type | Placeholder |
|---|---|---|
| `name` | text | "Name" |
| `email` | email | "Email" |
| `phone` | tel | "Phone" |
| `message` | textarea | "Tell us about your organization" |

**Locations:**
- Projects page fundraising section — button: "Let's raise some funds!"

---

## 7. Reusable Components

| Component | Usage | Notes |
|---|---|---|
| `<Header>` | Every page | Logo, nav links, "Get in Touch" CTA, mobile hamburger |
| `<Footer>` | Every page | Nav columns, social links, newsletter form, copyright |
| `<Testimonial>` | Homepage, Our Mission, Projects | Quote text + attribution (photo, name, title) |
| `<FormNewsletter>` | Homepage, footer, events | Form Type A (email only) |
| `<FormContact>` | Homepage, Our Mission, Contact | Form Type B (name, email, phone) |
| `<FormSponsor>` | Events | Form Type C |
| `<FormFundraising>` | Projects | Form Type D |
| `<YouTubeEmbed>` | Homepage | Lazy-loaded facade component (click-to-load) for performance |
| `<ArticleCard>` | Articles index | Thumbnail, category badge, title, excerpt, "Read More" link |
| `<TeamCard>` | Our F.A.M. | Photo, name, title, bio |
| `<StatBlock>` | Homepage, Our Mission | Hardcoded statistic with source attribution |
| `<HeroSection>` | Homepage, possibly other pages | Full-bleed background image with overlay text |

---

## 8. External Links (Preserved As-Is)

| Destination | Context |
|---|---|
| `https://www.famfunpass.com/` | FAM Fun Pass app (Projects page, Homepage) |
| `https://apps.apple.com/us/app/fam-central/id1548755945` | FAM Central iOS app (Projects page, Homepage) |
| `https://www.facebook.com/theFAMproj` | Social link (footer) |
| `https://www.instagram.com/the.fam.project/` | Social link (footer) |
| `https://www.youtube.com/channel/UCd2lg_GqwChNL9tR1JRG1Wg` | Social link (footer) + embedded video (homepage) |

---

## 9. SEO & Meta Strategy

Follow Astro best practices for SEO:
- Unique `<title>` and `<meta name="description">` per page
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card meta tags
- Canonical URLs
- `sitemap.xml` (via `@astrojs/sitemap`)
- RSS feed for articles (via `@astrojs/rss`)
- Structured data: `Organization` schema on the homepage
- Semantic HTML throughout (`<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>`)
- Proper heading hierarchy (single `<h1>` per page)
- Alt text on all images

Customer will tweak specifics after Stage 1 is implemented.

---

## 10. Image Strategy

1. **Download originals** from the WordPress site (hero backgrounds, team headshots, article featured images, app mockups, logos).
2. **Organize** into `src/assets/` following a logical structure:
   ```
   src/assets/
   ├── hero/           ← hero background images
   ├── team/           ← 8 team headshots
   ├── articles/       ← ~30 article featured images
   ├── projects/       ← app screenshots, mockups
   ├── logos/          ← FAM Project logo(s)
   └── misc/           ← icons, decorative elements
   ```
3. **Optimization** handled by Astro's built-in `<Image>` component and `astro:assets` at build time (auto WebP/AVIF, responsive srcset, lazy loading).

---

## 11. Tech Stack Summary

| Layer | Choice | Notes |
|---|---|---|
| Framework | Astro.js | Static site generation |
| Styling | Tailwind CSS (or vanilla CSS + modern features) | TBD — final decision during implementation |
| Content | Astro Content Collections | Articles + Team members |
| Images | `astro:assets` / `<Image>` | Build-time optimization |
| Deployment | Netlify | `@astrojs/netlify` adapter |
| Video | Lazy-loaded YouTube facade | Click-to-load for performance |
| Forms | Stubbed (Stage 1) | Go High Level (Stage 2) |
| CMS | None (Stage 1) | Headless CMS TBD (Stage 2) |

---

## 12. Implementation Order (Stage 1)

1. **Project scaffolding** — Astro config, Tailwind setup, Netlify adapter, folder structure
2. **Global layout** — `<Header>`, `<Footer>`, base `<head>` with meta/SEO
3. **Asset extraction** — Download and organize images from WordPress
4. **Content extraction** — Scrape all ~30 articles (title, category, body, featured image, date) into markdown Content Collection files; scrape 8 team member entries
5. **Homepage** — Hero, newsletter form, mission teaser, stats callout, events teaser, testimonial, YouTube facade, projects section, contact form
6. **Our Mission page** — Long-form content, Tim Cook quote, statistics section, contact form
7. **Events page** — Event series descriptions, legacy events, download form, sponsor form
8. **Projects page** — FAM Fun Pass, FAM Central, vendor section, fundraising form
9. **Our F.A.M. page** — Team grid from Content Collection
10. **Articles index** — Card grid with category badges, linked to individual articles
11. **Individual article pages** — `[...slug].astro` dynamic route from Content Collection
12. **Contact page** — Contact form + info
13. **Mobile responsiveness** — Test and refine all breakpoints
14. **SEO audit** — Run Lighthouse, fix any issues, verify meta tags
15. **Deploy to Netlify** — Configure build, verify production

---

## Appendix: Decisions Log

| # | Question Raised | Decision | Date |
|---|---|---|---|
| 1 | Migrate all ~30 articles? | **Yes** — all articles, with categories mapped to Content Collection schema | 2026-03-12 |
| 2 | Image strategy? | **Download originals** from WordPress; Astro handles optimization at build time | 2026-03-12 |
| 3 | Visual design fidelity? | **Same-spirit modernized** — not pixel-perfect, but close with better Lighthouse scores | 2026-03-12 |
| 4 | Form handling? | **4 distinct form types stubbed** with correct fields; distributed to match original | 2026-03-12 |
| 5 | Team page content type? | **Content Collection** (separate from articles) | 2026-03-12 |
| 6 | Deployment target? | **Netlify** | 2026-03-12 |
| 7 | SEO strategy? | **Follow best practices**; customer will tweak post-implementation | 2026-03-12 |
| 8 | YouTube embed? | **Lazy-loaded facade component** (click-to-load for performance) | 2026-03-12 |
| 9 | Testimonials/Quotes? | **Reusable `<Testimonial>` component** | 2026-03-12 |
| 10 | Statistics section? | **Hardcoded** | 2026-03-12 |
| 11 | External links? | **Preserved as-is** | 2026-03-12 |
| 12 | Mobile navigation? | **Yes** — hamburger menu included | 2026-03-12 |
| 13 | "Get in Touch" CTA? | **Navigates to `/contact/`** | 2026-03-12 |
| 14 | Copyright year? | **Dynamically generated** (`new Date().getFullYear()`) | 2026-03-12 |
| 15 | Article count? | **37 articles** (not ~30 as initially estimated) — verified by crawling live site | 2026-03-14 |
| 16 | Category model? | **Multiple categories per article** — changed from single `category` field to `categories` array; 10 categories total (was 6). Added: Parenting, Relationships, Screen Time, Personal Development | 2026-03-14 |
| 17 | Tags? | **None** — original site uses categories only, no WordPress tags found on any article | 2026-03-14 |
| 18 | Original URL scheme? | Articles served at root-level `/{slug}/` (no date, no `/articles/` prefix). Netlify `_redirects` file provides 301 redirects from old URLs to new `/articles/{slug}/` paths | 2026-03-14 |
| 19 | Missing article images? | **11 articles** had featured images that returned 404 from WordPress CDN — using `placeholder-1.jpg` as stand-in. See Section 5.1 for full list of missing image URLs | 2026-03-14 |
