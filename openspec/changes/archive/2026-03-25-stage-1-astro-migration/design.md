## Context

The F.A.M. Project currently runs on WordPress at `thefamproject.com`. The site has 7 top-level routes, ~30 blog articles across 6 categories, 8 team members, and 4 distinct form types. Infrastructure has degraded (404 errors, broken assets, deprecated jQuery, blocked YouTube embeds, stale copyright). Lighthouse scores are poor (Performance 63, Best Practices 54, SEO 69).

This project already has an Astro.js scaffold in place (created via the Astro blog template). The existing scaffold includes basic blog functionality, a content collection for blog posts, and a simple layout. Stage 1 will **replace** this scaffold's content and components entirely with the F.A.M. Project site structure.

Key constraints:
- "Same-spirit modernized" — not pixel-perfect reproduction, but visually close with substantially better Lighthouse scores
- All forms stubbed (no backend) — Go High Level integration deferred to Stage 2
- No CMS — headless CMS deferred to Stage 2
- Images downloaded from WordPress originals; Astro handles optimization at build time
- Deployed to Netlify

## Goals / Non-Goals

**Goals:**
- Achieve Lighthouse scores ≥ 90 across all categories (Performance, Accessibility, Best Practices, SEO)
- Recreate all 7 top-level routes plus ~30 individual article pages
- Migrate all content (articles, team bios) into Astro Content Collections
- Build a responsive, mobile-first layout with semantic HTML
- Implement comprehensive SEO (meta tags, Open Graph, sitemap, RSS, structured data)
- Deliver a deployable Netlify build

**Non-Goals:**
- Pixel-perfect reproduction of the WordPress design
- Working form submissions (all forms are stubbed)
- CMS integration (deferred to Stage 2)
- Email/marketing tool integration (Go High Level — deferred to Stage 2)
- Custom analytics or tracking setup
- Automated content scraping from WordPress (content extraction is a manual/semi-manual step)

## Decisions

### 1. Styling: Tailwind CSS

**Decision:** Use Tailwind CSS for styling.

**Rationale:** Tailwind provides utility-first classes that enable rapid prototyping, consistent spacing/sizing, built-in responsive breakpoints, and excellent tree-shaking for production. It integrates natively with Astro via `@astrojs/tailwind`.

**Alternatives considered:**
- *Vanilla CSS + modern features (nesting, custom properties):* Lighter dependency footprint but slower development velocity for a full-site rebuild with many pages and components.
- *CSS Modules:* Good scoping but more boilerplate for a static site without complex component isolation needs.

### 2. Content Collections: Two separate collections (articles + team)

**Decision:** Use two Astro Content Collections — `articles` (markdown files with frontmatter) and `team` (YAML/JSON data files or markdown).

**Rationale:** Articles are content-heavy with markdown bodies and need slug-based routing. Team members are structured data displayed in a grid. Separate collections enforce distinct schemas and allow independent querying.

**Alternatives considered:**
- *Single collection with a discriminator field:* Awkward schema since articles and team members have very different field structures.
- *Hardcoded team data in a TypeScript file:* Loses Content Collection validation benefits and future CMS migration path.

### 3. Article categories: Enum field in frontmatter (not separate collection)

**Decision:** Categories are an enum field in the article schema, not a separate collection or tag taxonomy.

**Rationale:** There are only 6 fixed categories. An enum provides type safety and validation without the overhead of a separate collection. The articles index page can filter/group by category using `getCollection()` queries.

**Alternatives considered:**
- *Separate categories collection with references:* Over-engineered for 6 static categories.
- *Free-form tags:* Would lose type safety and allow typo-based category drift.

### 4. YouTube embed: Lite-youtube facade

**Decision:** Use a lightweight click-to-load facade pattern for the YouTube embed on the homepage. Implement as a custom `<YouTubeEmbed>` Astro component that shows a thumbnail + play button, loading the iframe only on click.

**Rationale:** Loading a YouTube iframe on page load costs ~800KB+ and tanks Lighthouse performance. A facade defers this until user interaction.

**Alternatives considered:**
- *`lite-youtube-embed` npm package:* Viable but adds a dependency for something achievable with ~20 lines of client-side JS.
- *Direct iframe embed:* Unacceptable performance impact.

### 5. Forms: Client-side stub with success toast

**Decision:** All 4 form types render their full field sets. On submit, `event.preventDefault()` fires, and a success toast/message is shown. No data leaves the browser.

**Rationale:** Stage 1 requires visual fidelity without backend integration. Stubbing with a toast provides a realistic UX for customer review while keeping the implementation simple.

**Alternatives considered:**
- *No forms at all:* Would make Stage 1 look incomplete to the customer.
- *Netlify Forms:* Would add working form collection, but the customer plans to use Go High Level in Stage 2, so this would be throwaway work.

### 6. Image organization: `src/assets/` subdirectories

**Decision:** Organize downloaded WordPress images into `src/assets/hero/`, `src/assets/team/`, `src/assets/articles/`, `src/assets/projects/`, `src/assets/logos/`, `src/assets/misc/`.

**Rationale:** Keeping images under `src/assets/` enables Astro's build-time image optimization (`<Image>` component, auto WebP/AVIF, responsive srcset). Subdirectories provide clear organization by content type.

**Alternatives considered:**
- *`public/` directory:* Would bypass Astro's image optimization pipeline — unacceptable for a performance-focused migration.
- *Flat `src/assets/` without subdirectories:* Would become unmanageable with 40+ images.

### 7. Deployment: Netlify with `@astrojs/netlify` adapter

**Decision:** Deploy as a static site on Netlify using the Astro Netlify adapter.

**Rationale:** Netlify provides free hosting for static sites, automatic deploys from Git, built-in CDN, and the adapter handles Astro's output format. This aligns with the customer's deployment preference stated in the roadmap.

### 8. File-based routing: Standard Astro pages

**Decision:** Use Astro's file-based routing with pages under `src/pages/`. Articles use a dynamic `[...slug].astro` route. All other pages are static `.astro` files.

**Rationale:** File-based routing is Astro's default pattern and maps cleanly to the site's URL structure. The dynamic route for articles leverages Content Collection `getCollection()` and `getEntry()` for static generation.

## Risks / Trade-offs

- **Content extraction accuracy** → Manual scraping of ~30 articles from WordPress may introduce formatting issues (broken HTML, missing images, incorrect markdown conversion). *Mitigation:* Review each migrated article for rendering correctness as a post-extraction QA step.

- **Image download completeness** → Some WordPress images may be served through CDN URLs that are hard to discover or require authentication. *Mitigation:* Crawl the live site systematically; use placeholder images for any that can't be obtained, and flag for customer review.

- **Tailwind CSS decision fluidity** → The roadmap notes "Tailwind CSS (or vanilla CSS + modern features)" as TBD. Choosing Tailwind now means the customer could request a switch later. *Mitigation:* Tailwind's utility classes are contained within templates and relatively easy to replace if needed. Document the decision and confirm with customer early.

- **"Same-spirit modernized" subjectivity** → Without a formal design mockup, the visual interpretation of "close enough" is subjective and may not match customer expectations. *Mitigation:* Share the deployed Stage 1 site early for feedback; iterate based on customer input.

- **Form stub UX mismatch** → Stubbed forms that don't actually submit may confuse testers or the customer during review. *Mitigation:* Add a clear "Development Mode" indicator in the toast message (e.g., "Form submitted — backend integration coming in Stage 2").

- **Large scope for one change** → 7 pages, ~30 articles, 12 components, 4 form types, and 2 content collections is a substantial amount of work. *Mitigation:* Tasks will be structured in strict dependency order (scaffolding → layout → content → pages → polish) to allow incremental progress and checkpointing.
