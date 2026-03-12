## 1. Project Scaffolding

- [ ] 1.1 Install and configure Tailwind CSS (`@astrojs/tailwind`) in `astro.config.mjs`
- [ ] 1.2 Install `@astrojs/sitemap` and `@astrojs/rss` and add to Astro integrations
- [ ] 1.3 Install `@astrojs/netlify` adapter and configure for static output
- [ ] 1.4 Set up `src/assets/` directory structure (hero/, team/, articles/, projects/, logos/, misc/)
- [ ] 1.5 Remove existing blog template placeholder content (placeholder images, sample blog posts, default components)
- [ ] 1.6 Define site constants in `src/consts.ts` (site title, description, URL, social links)

## 2. Content Collections

- [ ] 2.1 Define `articles` Content Collection schema in `src/content.config.ts` with fields: title, slug, category (enum), excerpt, featuredImage, publishDate
- [ ] 2.2 Define `team` Content Collection schema in `src/content.config.ts` with fields: name, title, photo, bio, order
- [ ] 2.3 Create placeholder article markdown files (~5 sample articles) with correct frontmatter structure to validate the schema
- [ ] 2.4 Create all 8 team member data files with name, title, bio, order, and placeholder photo references
- [ ] 2.5 Download and organize team headshot images into `src/assets/team/`

## 3. Global Layout & SEO

- [ ] 3.1 Create `<BaseHead>` component with configurable title, description, canonical URL, Open Graph tags, and Twitter Card meta tags
- [ ] 3.2 Create `<Header>` component with logo (linked to `/`), 6 navigation links, "Get in Touch" CTA button (linked to `/contact/`), and active page highlighting
- [ ] 3.3 Add mobile hamburger menu to `<Header>` with toggle functionality (hidden on desktop, visible below 768px)
- [ ] 3.4 Create `<Footer>` component with logo, two-column navigation, social media links (Facebook, Instagram, YouTube opening in new tabs), newsletter form slot, and dynamic copyright year
- [ ] 3.5 Create base page layout that wraps `<BaseHead>`, `<Header>`, `<main>`, and `<Footer>` with semantic HTML structure
- [ ] 3.6 Add Organization JSON-LD structured data script to the homepage layout

## 4. Reusable Components

- [ ] 4.1 Create `<FormNewsletter>` component (email input, configurable button text, stubbed submit with success toast)
- [ ] 4.2 Create `<FormContact>` component (name, email, phone inputs, configurable button text, stubbed submit with success toast)
- [ ] 4.3 Create `<FormSponsor>` component (name, email, phone inputs, "Let's work together" button, stubbed submit with success toast)
- [ ] 4.4 Create `<FormFundraising>` component (name, email, phone, message textarea, "Let's raise some funds!" button, stubbed submit with success toast)
- [ ] 4.5 Implement shared success toast/message UI with auto-dismiss and Stage 2 backend note
- [ ] 4.6 Create `<HeroSection>` component (full-bleed background image with overlay text and optional slot for form/CTA)
- [ ] 4.7 Create `<Testimonial>` component (quote text, attribution name, title/role, optional photo)
- [ ] 4.8 Create `<StatBlock>` component (statistic number, label, source attribution)
- [ ] 4.9 Create `<YouTubeEmbed>` facade component (thumbnail + play button; loads iframe on click)
- [ ] 4.10 Create `<ArticleCard>` component (featured image thumbnail via `<Image>`, category badge, title, excerpt, "Read More" link)
- [ ] 4.11 Create `<TeamCard>` component (photo via `<Image>`, name, title, bio)

## 5. Homepage

- [ ] 5.1 Create `src/pages/index.astro` with hero section using `<HeroSection>` and `<FormNewsletter>` (button: "Let's change the world!")
- [ ] 5.2 Add mission teaser section with brief overview and link to `/our-mission/`
- [ ] 5.3 Add statistics callout section with `<StatBlock>` components (hardcoded data)
- [ ] 5.4 Add events teaser section with link to `/events/`
- [ ] 5.5 Add testimonial section with `<Testimonial>` component
- [ ] 5.6 Add YouTube video section with `<YouTubeEmbed>` facade component
- [ ] 5.7 Add projects teaser section with external links to FAM Fun Pass and FAM Central (opening in new tabs)
- [ ] 5.8 Add bottom contact form section with `<FormContact>` (button: "Let's change the world!")
- [ ] 5.9 Set homepage-specific SEO meta (title, description, OG tags) via `<BaseHead>`

## 6. Our Mission Page

- [ ] 6.1 Create `src/pages/our-mission.astro` with long-form mission statement content
- [ ] 6.2 Add Tim Cook quote section using `<Testimonial>` component
- [ ] 6.3 Add statistics section with `<StatBlock>` components and source attributions
- [ ] 6.4 Add contact form section with `<FormContact>` (button: "Let's change the world!")
- [ ] 6.5 Set unique SEO meta for Our Mission page

## 7. Events Page

- [ ] 7.1 Create `src/pages/events.astro` with event series descriptions
- [ ] 7.2 Add legacy events section with event information
- [ ] 7.3 Add newsletter/download form for event list subscription using `<FormNewsletter>` (button: "Get my free guide")
- [ ] 7.4 Add second newsletter form for legacy event downloads using `<FormNewsletter>` (button: "Get my free guide")
- [ ] 7.5 Add sponsor section with `<FormSponsor>` (button: "Let's work together")
- [ ] 7.6 Set unique SEO meta for Events page

## 8. Projects Page

- [ ] 8.1 Create `src/pages/projects.astro` with FAM Fun Pass section (external link to `https://www.famfunpass.com/`)
- [ ] 8.2 Add FAM Central section with external link to iOS App Store
- [ ] 8.3 Add vendor section content
- [ ] 8.4 Add fundraising section with `<FormFundraising>` (button: "Let's raise some funds!")
- [ ] 8.5 Set unique SEO meta for Projects page

## 9. Our F.A.M. Page

- [ ] 9.1 Create `src/pages/our-fam.astro` that queries the `team` Content Collection
- [ ] 9.2 Render team grid with `<TeamCard>` components sorted by `order` field
- [ ] 9.3 Set unique SEO meta for Our FAM page

## 10. Articles System

- [ ] 10.1 Create `src/pages/articles/index.astro` with article card grid using `<ArticleCard>` components
- [ ] 10.2 Implement category filtering/grouping UI showing all 6 categories
- [ ] 10.3 Create `src/pages/articles/[...slug].astro` with `getStaticPaths()` for all articles
- [ ] 10.4 Render individual article pages with title, publish date, category, featured image, and markdown body
- [ ] 10.5 Set article-specific SEO meta (title from article, description from excerpt, OG image from featured image)

## 11. Contact Page

- [ ] 11.1 Create `src/pages/contact.astro` with contact form using `<FormContact>` (button: "Let's change the world!")
- [ ] 11.2 Add organization contact information section
- [ ] 11.3 Set unique SEO meta for Contact page

## 12. Content Extraction & Assets

- [ ] 12.1 Download hero background images from WordPress and place in `src/assets/hero/`
- [ ] 12.2 Download all ~30 article featured images from WordPress and place in `src/assets/articles/`
- [ ] 12.3 Download project screenshots/mockups from WordPress and place in `src/assets/projects/`
- [ ] 12.4 Download F.A.M. Project logo(s) and place in `src/assets/logos/`
- [ ] 12.5 Scrape and convert all ~30 articles from WordPress to markdown with correct frontmatter (title, slug, category, excerpt, featuredImage, publishDate)
- [ ] 12.6 Review each migrated article for formatting correctness (broken HTML, missing images, markdown rendering)

## 13. RSS & Sitemap

- [ ] 13.1 Configure `src/pages/rss.xml.js` to generate RSS feed from articles Content Collection with title, excerpt, link, and publish date
- [ ] 13.2 Configure `@astrojs/sitemap` in `astro.config.mjs` with the production site URL
- [ ] 13.3 Verify sitemap includes all 7 top-level pages and all ~30 article pages

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
