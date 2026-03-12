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

The existing site has 7 top-level routes, plus ~30 individual article pages:

```
thefamproject.com/
├── /                          Homepage
├── /our-mission/              Mission statement & statistics
├── /events/                   Event series & legacy events
├── /projects/                 FAM Fun Pass, FAM Central, vendor & fundraising
├── /our-fam/                  Team bios (8 members)
├── /articles/                 Blog index (~30 articles, 6 categories)
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

~30 articles migrated from WordPress. Each article has:

| Field | Type | Notes |
|---|---|---|
| `title` | string | Article headline |
| `slug` | string | URL-friendly identifier (derived from WP permalink) |
| `category` | enum | One of: `Digital Distraction`, `Communication`, `Child Development`, `Family`, `Date Night`, `Uncategorized` |
| `excerpt` | string | Short preview text |
| `featuredImage` | image | Downloaded from WordPress; optimized by Astro at build time |
| `publishDate` | date | Original publication date (if recoverable from WP) |
| `body` | markdown | Full article content |

Categories are preserved and mapped into the Content Collection schema. The articles index page (`/articles/`) should support filtering or grouping by category.

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
