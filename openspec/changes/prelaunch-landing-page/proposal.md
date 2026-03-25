## Why

The current multi-page Astro site (homepage, our-mission, events, projects, articles, contact, our-fam) was built as a full WordPress replacement. However, the business has pivoted to a pre-launch strategy focused on a single goal: collecting waitlist signups for the upcoming FamCentral platform. The existing multi-page structure dilutes this focus and confuses the conversion funnel. The site needs to collapse into a single long-form landing page optimized for waitlist capture, while retaining only the team page (`/our-fam/`).

## What Changes

- **Replace the homepage** (`src/pages/index.astro`) with a 9-section long-form landing page whose copy comes entirely from `FAM Project website rewrite.md`
- **Simplify header navigation** to two links (Home, Team) plus a "Join the Waitlist" CTA button that smooth-scrolls to the hero form
- **Simplify the footer** — remove nav links to hidden pages; retain logo, social links, copyright, and footer waitlist form
- **Hide all non-essential pages** — remove route files for `/our-mission/`, `/events/`, `/projects/`, `/contact/`, `/articles/`, RSS feed, and WordPress redirects
- **Introduce purpose-specific lite forms** — separate name+email forms for waitlist (Sections 1, 7) and expert faculty (Section 8), each with silent hidden `role` and `form_id` fields, all posting to the existing GHL webhook
- **Retain `FormWaitlist.astro` untouched** as a live fallback; new forms either use it with `variant="lite"` or inline minimal markup
- **Borrow visual designs** (backdrops, color treatments, section layouts) from the existing index, mission, events, and projects pages to style the new landing page sections
- **Retain the team page** (`/our-fam/`) completely unchanged

## Capabilities

### New Capabilities
- `landing-page`: The 9-section long-form homepage replacing the current multi-page index — includes hero, problem, mission, FamCentral intro, differentiation, traction, waitlist visual, expert faculty, and final CTA sections
- `simplified-nav`: Reduced header and footer navigation for a two-page site with waitlist CTA scroll behavior
- `lite-forms`: Purpose-specific name+email forms with silent role tagging and form_id tracking, distinct from the existing full FormWaitlist component

### Modified Capabilities

## Impact

- **Pages removed**: `our-mission.astro`, `events.astro`, `projects.astro`, `contact.astro`, `articles/[...slug].astro`, `articles/index.astro`, `rss.xml.js`
- **Content collections**: `src/content/articles/` orphaned (50+ MDX files no longer routed)
- **Public assets**: `public/_redirects` removed
- **Components**: Existing CTA components (`CloudsCTA`, `JoinMovementCTA`, `InvestorCTA`, `ExpertFacultyCTA`) preserved but may no longer be actively used on the landing page; their designs may be borrowed
- **Layout components**: `Header.astro` and `Footer.astro` modified to reflect simplified nav
- **SEO**: Homepage title/description/OG updated; team page unchanged
- **Forms**: GHL webhook integration unchanged; new hidden fields route submissions correctly
- **No dependency changes** — same Astro 6, Tailwind 4, pnpm stack
