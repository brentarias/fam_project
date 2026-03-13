## 1. Project Scaffolding

- [x] 1.1 Install and configure Tailwind CSS (`@astrojs/tailwind`) in `astro.config.mjs`
- [x] 1.2 Install `@astrojs/sitemap` and `@astrojs/rss` and add to Astro integrations
- [x] 1.3 Install `@astrojs/netlify` adapter and configure for static output
- [x] 1.4 Set up `src/assets/` directory structure (hero/, team/, articles/, projects/, logos/, misc/)
- [x] 1.5 Remove existing blog template placeholder content (placeholder images, sample blog posts, default components)
- [x] 1.6 Define site constants in `src/consts.ts` (site title, description, URL, social links)

## 2. Content Collections

- [x] 2.1 Define `articles` Content Collection schema in `src/content.config.ts` with fields: title, slug, category (enum), excerpt, featuredImage, publishDate
- [x] 2.2 Define `team` Content Collection schema in `src/content.config.ts` with fields: name, title, photo, bio, order
- [x] 2.3 Create placeholder article markdown files (~5 sample articles) with correct frontmatter structure to validate the schema
- [x] 2.4 Create all 8 team member data files with name, title, bio, order, and placeholder photo references
- [x] 2.5 Download and organize team headshot images into `src/assets/team/`

## 3. Global Layout & SEO

- [x] 3.1 Create `<BaseHead>` component with configurable title, description, canonical URL, Open Graph tags, and Twitter Card meta tags
- [x] 3.2 Create `<Header>` component with logo (linked to `/`), 6 navigation links, "Get in Touch" CTA button (linked to `/contact/`), and active page highlighting
- [x] 3.3 Add mobile hamburger menu to `<Header>` with toggle functionality (hidden on desktop, visible below 768px)
- [x] 3.4 Create `<Footer>` component with logo, two-column navigation, social media links (Facebook, Instagram, YouTube opening in new tabs), newsletter form slot, and dynamic copyright year
- [x] 3.5 Create base page layout that wraps `<BaseHead>`, `<Header>`, `<main>`, and `<Footer>` with semantic HTML structure
- [x] 3.6 Add Organization JSON-LD structured data script to the homepage layout

## 4. Reusable Components

- [x] 4.1 Create `<FormNewsletter>` component (email input, configurable button text, stubbed submit with success toast)
- [x] 4.2 Create `<FormContact>` component (name, email, phone inputs, configurable button text, stubbed submit with success toast)
- [x] 4.3 Create `<FormSponsor>` component (name, email, phone inputs, "Let's work together" button, stubbed submit with success toast)
- [x] 4.4 Create `<FormFundraising>` component (name, email, phone, message textarea, "Let's raise some funds!" button, stubbed submit with success toast)
- [x] 4.5 Implement shared success toast/message UI with auto-dismiss and Stage 2 backend note
- [x] 4.6 Create `<HeroSection>` component (full-bleed background image with overlay text and optional slot for form/CTA)
- [x] 4.7 Create `<Testimonial>` component (quote text, attribution name, title/role, optional photo)
- [x] 4.8 Create `<StatBlock>` component (statistic number, label, source attribution)
- [x] 4.9 Create `<YouTubeEmbed>` facade component (thumbnail + play button; loads iframe on click)
- [x] 4.10 Create `<ArticleCard>` component (featured image thumbnail via `<Image>`, category badge, title, excerpt, "Read More" link)
- [x] 4.11 Create `<TeamCard>` component (photo via `<Image>`, name, title, bio)

## 5. Homepage

- [x] 5.1 Create `src/pages/index.astro` with hero section using `<HeroSection>` and `<FormNewsletter>` (button: "Let's change the world!")
- [x] 5.2 Add mission teaser section with brief overview and link to `/our-mission/`
- [x] 5.3 Add statistics callout section with `<StatBlock>` components (hardcoded data)
- [x] 5.4 Add events teaser section with link to `/events/`
- [x] 5.5 Add testimonial section with `<Testimonial>` component
- [x] 5.6 Add YouTube video section with `<YouTubeEmbed>` facade component
- [x] 5.7 Add projects teaser section with external links to FAM Fun Pass and FAM Central (opening in new tabs)
- [x] 5.8 Add bottom contact form section with `<FormContact>` (button: "Let's change the world!")
- [x] 5.9 Set homepage-specific SEO meta (title, description, OG tags) via `<BaseHead>`

## 6. Our Mission Page

- [x] 6.1 Create `src/pages/our-mission.astro` with long-form mission statement content
- [x] 6.2 Add Tim Cook quote section using `<Testimonial>` component
- [x] 6.3 Add statistics section with `<StatBlock>` components and source attributions
- [x] 6.4 Add contact form section with `<FormContact>` (button: "Let's change the world!")
- [x] 6.5 Set unique SEO meta for Our Mission page

## 7. Events Page

- [x] 7.1 Create `src/pages/events.astro` with event series descriptions
- [x] 7.2 Add legacy events section with event information
- [x] 7.3 Add newsletter/download form for event list subscription using `<FormNewsletter>` (button: "Get my free guide")
- [x] 7.4 Add second newsletter form for legacy event downloads using `<FormNewsletter>` (button: "Get my free guide")
- [x] 7.5 Add sponsor section with `<FormSponsor>` (button: "Let's work together")
- [x] 7.6 Set unique SEO meta for Events page

## 8. Projects Page

- [x] 8.1 Create `src/pages/projects.astro` with FAM Fun Pass section (external link to `https://www.famfunpass.com/`)
- [x] 8.2 Add FAM Central section with external link to iOS App Store
- [x] 8.3 Add vendor section content
- [x] 8.4 Add fundraising section with `<FormFundraising>` (button: "Let's raise some funds!")
- [x] 8.5 Set unique SEO meta for Projects page

## 9. Our F.A.M. Page

- [x] 9.1 Create `src/pages/our-fam.astro` that queries the `team` Content Collection
- [x] 9.2 Render team grid with `<TeamCard>` components sorted by `order` field
- [x] 9.3 Set unique SEO meta for Our FAM page

## 10. Articles System

- [x] 10.1 Create `src/pages/articles/index.astro` with article card grid using `<ArticleCard>` components
- [x] 10.2 Implement category filtering/grouping UI showing all 6 categories
- [x] 10.3 Create `src/pages/articles/[...slug].astro` with `getStaticPaths()` for all articles
- [x] 10.4 Render individual article pages with title, publish date, category, featured image, and markdown body
- [x] 10.5 Set article-specific SEO meta (title from article, description from excerpt, OG image from featured image)

## 11. Contact Page

- [x] 11.1 Create `src/pages/contact.astro` with contact form using `<FormContact>` (button: "Let's change the world!")
- [x] 11.2 Add organization contact information section
- [x] 11.3 Set unique SEO meta for Contact page

## 12. Content Extraction & Assets

- [x] 12.1 Download hero background images from WordPress and place in `src/assets/hero/`
- [x] 12.2 Download all ~30 article featured images from WordPress and place in `src/assets/articles/` (6 article images returned 404 — WordPress CDN degraded; stand-in placeholder images used per user direction)
- [x] 12.3 Download project screenshots/mockups from WordPress and place in `src/assets/projects/`
- [x] 12.4 Download F.A.M. Project logo(s) and place in `src/assets/logos/`
- [ ] 12.5 Scrape and convert all ~30 articles from WordPress to markdown with correct frontmatter (title, slug, category, excerpt, featuredImage, publishDate)
- [ ] 12.6 Review each migrated article for formatting correctness (broken HTML, missing images, markdown rendering)
- [x] 12.7 Scrape actual text content from the WordPress **homepage** and replace fabricated copy in `src/pages/index.astro` (hero text, founding story, mission teaser, M.A.D. paragraph, projects description, etc.)
- [x] 12.8 Scrape actual text content from the WordPress **Our Mission** page and replace fabricated copy in `src/pages/our-mission.astro`
- [ ] 12.9 Scrape actual text content from the WordPress **Events** page and replace fabricated copy in `src/pages/events.astro`
- [ ] 12.10 Scrape actual text content from the WordPress **Projects** page and replace fabricated copy in `src/pages/projects.astro`
- [x] 12.11 Replace text-based logo link in `<Header>` component with the FAM logo image (`src/assets/logos/fam-logo-circle.png`)
- [x] 12.12 Apply purple hue overlay effect to the homepage hero section — CSS `bg-purple-900/87` overlay matching original's purple-on-hero-image style
- [x] 12.13 Integrate image-based section titles (`one-world.png`, `did-you-know.png`, `famtopia-logo.png`, `stat-phone-use.png`) into homepage and mission page sections with appropriate alt text
- [x] 12.14 Implement "Did you know?" info bits and founder/celebrity quote callouts (Jashin Howell quote on homepage, Tim Cook quote on mission page) as visually distinct sections
- [x] 12.15 Replace placeholder YouTube video ID (`dQw4w9WgXcQ`) with the actual FAM Central App Promo Video — discovered it's Vimeo (ID: 509100210), not YouTube; embedded as Vimeo iframe
- [ ] 12.16 Audit all downloaded images in `src/assets/` and ensure every image is referenced in the appropriate page; flag or remove any orphaned assets

## 13. RSS & Sitemap

- [x] 13.1 Configure `src/pages/rss.xml.js` to generate RSS feed from articles Content Collection with title, excerpt, link, and publish date
- [x] 13.2 Configure `@astrojs/sitemap` in `astro.config.mjs` with the production site URL
- [x] 13.3 Verify sitemap includes all 7 top-level pages and all ~30 article pages

## 14. Mobile Responsiveness & Polish

- [ ] 14.1 Test and refine all pages at desktop (≥ 1024px), tablet (768px–1023px), and mobile (< 768px) breakpoints
- [ ] 14.2 Verify hamburger menu works correctly on mobile (toggles, closes on navigation)
- [ ] 14.3 Ensure all images have descriptive alt text (team photos, article images, hero images)
- [ ] 14.4 Verify single `<h1>` per page and proper heading hierarchy on all pages
- [ ] 14.5 Verify all external links open in new tabs (social links, FAM Fun Pass, FAM Central)

## 15. SEO Audit & Deployment

- [ ] 15.1 Run Lighthouse audit and fix any Performance, Accessibility, Best Practices, or SEO issues (target ≥ 90 in all categories)
- [ ] 15.2 Verify all Open Graph and Twitter Card meta tags render correctly per page
- [ ] 15.3 Verify canonical URLs are correct on all pages
- [ ] 15.4 Configure Netlify build settings and deploy
- [ ] 15.5 Verify production deployment serves all pages, assets, sitemap, and RSS feed correctly
