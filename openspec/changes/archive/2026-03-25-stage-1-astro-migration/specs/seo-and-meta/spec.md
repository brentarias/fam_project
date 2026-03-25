## ADDED Requirements

### Requirement: Unique title and description per page
Every page SHALL have a unique `<title>` element and `<meta name="description">` tag reflecting the page's specific content. No two pages SHALL share the same title or description.

#### Scenario: Each page has distinct title
- **WHEN** comparing the `<title>` tags of the homepage, Our Mission page, and Contact page
- **THEN** each has a unique, descriptive title (e.g., "The F.A.M. Project — Strengthening Families", "Our Mission — The F.A.M. Project", "Contact Us — The F.A.M. Project")

### Requirement: Open Graph tags on all pages
Every page SHALL include Open Graph meta tags: `og:title`, `og:description`, `og:image`, and `og:url`. Article pages MUST use their featured image for `og:image`. Other pages MUST use a default site image.

#### Scenario: Article page has article-specific OG tags
- **WHEN** an article page renders
- **THEN** `og:title` matches the article title, `og:description` matches the excerpt, `og:image` references the article's featured image, and `og:url` is the article's canonical URL

#### Scenario: Static page has default OG image
- **WHEN** the Events page renders
- **THEN** `og:image` references a default site-wide social sharing image

### Requirement: Twitter Card meta tags
Every page SHALL include Twitter Card meta tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) for rich link previews on Twitter/X.

#### Scenario: Twitter Card renders summary large image
- **WHEN** any page's meta tags are inspected
- **THEN** `twitter:card` is set to `summary_large_image` and `twitter:title`, `twitter:description`, and `twitter:image` are populated

### Requirement: Canonical URLs
Every page SHALL include a `<link rel="canonical">` tag with the full absolute URL of the page. This MUST match the site's production domain.

#### Scenario: Canonical URL matches page URL
- **WHEN** the Our Mission page at `/our-mission/` renders
- **THEN** the canonical link is `<link rel="canonical" href="https://thefamproject.com/our-mission/">`

### Requirement: Sitemap generation
The site SHALL generate a `sitemap.xml` file using `@astrojs/sitemap` that includes all static pages and all dynamically generated article pages.

#### Scenario: Sitemap includes all pages
- **WHEN** the site builds
- **THEN** `sitemap.xml` is generated and contains URLs for all 7 top-level pages plus all ~30 individual article pages

### Requirement: RSS feed for articles
The site SHALL generate an RSS feed for articles using `@astrojs/rss`, accessible at a standard RSS URL (e.g., `/rss.xml`). The feed MUST include all articles with title, description (excerpt), link, and publish date.

#### Scenario: RSS feed contains all articles
- **WHEN** accessing the RSS feed URL
- **THEN** the feed returns valid RSS XML with entries for all ~30 articles, each with title, excerpt, link to the article page, and publish date

### Requirement: Organization structured data on homepage
The homepage SHALL include a JSON-LD `<script>` block with `Organization` schema markup containing the organization name ("The F.A.M. Project"), URL, logo, and social media profile links (Facebook, Instagram, YouTube).

#### Scenario: Homepage has Organization JSON-LD
- **WHEN** inspecting the homepage's HTML source
- **THEN** a `<script type="application/ld+json">` block is present with `@type: "Organization"`, `name: "The F.A.M. Project"`, `url`, `logo`, and `sameAs` array with social media URLs

### Requirement: Semantic HTML throughout
All pages MUST use semantic HTML elements: `<main>` for primary content, `<nav>` for navigation, `<article>` for article content, `<section>` for thematic groupings, `<header>` for page/section headers, and `<footer>` for footer content.

#### Scenario: Page uses semantic elements
- **WHEN** inspecting any page's HTML structure
- **THEN** the page uses `<main>` for its primary content area, `<nav>` for navigation menus, and `<footer>` for the page footer

### Requirement: Alt text on all images
Every `<img>` element on the site MUST have a non-empty `alt` attribute that describes the image content. Decorative-only images MUST use `alt=""` with a `role="presentation"` attribute.

#### Scenario: Content images have descriptive alt text
- **WHEN** inspecting a team member photo
- **THEN** the `<img>` has an `alt` attribute like "Jashin Howell — CEO & Co-Founder"

#### Scenario: Article featured images have alt text
- **WHEN** inspecting an article card or article page featured image
- **THEN** the `<img>` has an `alt` attribute derived from the article title
