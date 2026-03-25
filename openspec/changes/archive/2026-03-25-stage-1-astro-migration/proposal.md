## Why

The existing WordPress site at `thefamproject.com` has poor Lighthouse scores (Performance 63, Accessibility 91, Best Practices 54, SEO 69), degraded infrastructure (404 errors, broken assets, deprecated jQuery, blocked YouTube embeds, stale copyright), and WordPress is hostile to agentic coding workflows. Migrating to Astro.js will deliver a fast, modern static site with substantially better Lighthouse scores while enabling efficient development workflows.

## What Changes

- **Replace WordPress entirely** with an Astro.js static site matching the existing site structure (7 top-level routes + ~30 article pages)
- **Migrate ~30 articles** from WordPress into Astro Content Collections with categories preserved (Digital Distraction, Communication, Child Development, Family, Date Night, Uncategorized)
- **Migrate 8 team members** into a separate Astro Content Collection
- **Create global layout** with responsive Header (logo, nav, "Get in Touch" CTA, mobile hamburger) and Footer (nav columns, social links, newsletter form, dynamic copyright)
- **Build 12 reusable components**: Header, Footer, Testimonial, FormNewsletter, FormContact, FormSponsor, FormFundraising, YouTubeEmbed, ArticleCard, TeamCard, StatBlock, HeroSection
- **Stub all 4 form types** (visually present with correct fields and success toast, not wired to any backend)
- **Implement SEO best practices**: unique title/description per page, Open Graph, Twitter Cards, canonical URLs, sitemap, RSS feed, Organization structured data
- **Download and organize all images** from WordPress; use Astro's built-in `<Image>` component for build-time optimization (WebP/AVIF, responsive srcset, lazy loading)
- **Lazy-load YouTube embed** with a click-to-load facade component for performance
- **Deploy to Netlify** using `@astrojs/netlify` adapter

## Capabilities

### New Capabilities

- `global-layout`: Header, Footer, BaseHead component with SEO meta tags, responsive mobile navigation with hamburger menu
- `content-collections`: Articles collection (~30 articles with title, slug, category, excerpt, featuredImage, publishDate, body) and Team collection (8 members with name, title, photo, bio, order)
- `stubbed-forms`: Four form types (Newsletter/email-only, Contact/name+email+phone, Sponsor/name+email+phone, Fundraising/name+email+phone+message) — all stubbed with success toast on submit
- `homepage`: Hero section with newsletter form, mission teaser, statistics callout, events teaser, testimonial, YouTube facade embed, projects section, and contact form
- `content-pages`: Our Mission page (long-form content, Tim Cook quote, statistics, contact form), Events page (event series, legacy events, download form, sponsor form), Projects page (FAM Fun Pass, FAM Central, vendor section, fundraising form), Our F.A.M. page (team grid from Content Collection), and Contact page (contact form + info)
- `articles-system`: Articles index page with card grid, category badge filtering/grouping, and dynamic `[...slug].astro` route for individual article pages from Content Collection
- `seo-and-meta`: Unique title/description per page, Open Graph tags, Twitter Cards, canonical URLs, sitemap via `@astrojs/sitemap`, RSS feed via `@astrojs/rss`, Organization structured data on homepage, semantic HTML, proper heading hierarchy, alt text on all images

### Modified Capabilities

_(none — this is a greenfield migration)_

## Impact

- **Codebase**: Replaces the entire WordPress site with a new Astro.js project; existing blog template files in `src/` will be replaced with new components and pages
- **Dependencies**: Adds Tailwind CSS (or vanilla CSS), `@astrojs/sitemap`, `@astrojs/rss`, `@astrojs/netlify`; removes WordPress entirely
- **Content**: ~30 articles scraped from WordPress into markdown files; 8 team member entries created as content collection data
- **Assets**: All images downloaded from WordPress and organized under `src/assets/` (hero/, team/, articles/, projects/, logos/, misc/)
- **Deployment**: Netlify replaces existing WordPress hosting
- **Forms**: All forms are stubbed in this stage — no backend integration (Go High Level integration deferred to Stage 2)
- **CMS**: No CMS in this stage (headless CMS integration deferred to Stage 2)
