## Context

The current site is an Astro 6 / Tailwind CSS 4 multi-page site with a rich visual language: full-bleed hero sections with image overlays, alternating light/dark section backgrounds, brand-colored accent patterns, and multiple CTA components wired to a GHL webhook. The business is pivoting to a pre-launch waitlist capture strategy, collapsing everything into a single long-form landing page plus the existing team page.

The copy for the new homepage is fully defined in `FAM Project website rewrite.md` (9 sections). The existing pages (index, our-mission, events, projects) provide a library of proven section designs to borrow from.

## Goals / Non-Goals

**Goals:**
- Single long-form landing page with 9 content sections, all copy from `FAM Project website rewrite.md`
- Maximize waitlist conversions with clear, repeated CTAs
- Borrow visual designs (backgrounds, overlays, color treatments, layouts) from existing pages
- Simplified two-link navigation (Home, Team) with scroll-to-form CTA
- Retain team page completely unchanged
- Preserve `FormWaitlist.astro` as an untouched fallback component

**Non-Goals:**
- New image sourcing or photography
- Backend/SSR work
- GHL autoresponder email configuration
- Redesigning the team page
- Creating a design system or component library

## Decisions

### 1. Landing page as a single Astro page file

Replace `src/pages/index.astro` entirely with a new long-form page containing all 9 sections inline. No new components or partials — the page is self-contained.

**Why:** The 9 sections are unique to this landing page and won't be reused. Inline sections avoid unnecessary abstraction and make the page easy to read and modify as a single unit.

**Alternative considered:** Breaking each section into a separate component. Rejected because these sections are not reused anywhere and the overhead of 9 new component files adds complexity without benefit.

### 2. Section-to-design mapping (borrowing from existing pages)

Each landing page section borrows its visual treatment from an existing page section:

| New Section | Borrowed From | Visual Treatment |
|:------------|:--------------|:-----------------|
| 1 — Hero | Index hero | Full-bleed `home-header-2.jpg` with `bg-purple-900/87` overlay, white text, form in right column on desktop |
| 2 — The Problem | Index "Did You Know" section | `did-you-know-screens.jpg` at 20% opacity on `bg-gray-900`, white text, centered layout |
| 3 — The Mission | Our Mission intro section | White/cream background, purple heading, clean centered text, `sunset-ocean-horizon.jpg` as accent |
| 4 — FamCentral | Projects page FAM Central section | Two-column grid, `fam-central-logo.png` + `fam-central-app.jpg`, white card background |
| 5 — Why Different | CloudsCTA pattern | `clouds.jpg` background, centered text, brand-colored highlights |
| 6 — Traction | Index FAMtopia/sunburst section | `sunburst-background.jpg` backdrop, warm tones, centered content |
| 7 — Waitlist Visual | Events/purple-grunge pattern | `purple-grunge.jpg` or `ropes-course-family.jpg` with purple overlay, white text, embedded form |
| 8 — Expert Faculty | CloudsCTA expert pattern | `clouds.jpg` background, centered expert CTA with name+email form |
| 9 — Final CTA | Index JoinMovementCTA pattern | `beach-family.jpg` with dark overlay, three-path card layout |

### 3. Form approach: `FormWaitlist` lite variant with hidden role fields

Use the existing `FormWaitlist` component with `variant="lite"` for Sections 1 and 7 (waitlist) and Section 8 (expert faculty). Add a hidden `<input name="role" value="...">` directly in the page markup adjacent to the component, or wrap the component call with the hidden field injected via a small inline form.

**Problem:** `FormWaitlist` doesn't currently support a prop to inject hidden role fields. Adding a `role` prop would modify the component, which the spec forbids.

**Decision:** Create a thin wrapper approach — inline a minimal form in the landing page that includes the hidden `role` field and embeds the `FormWaitlist` inputs. Alternatively, use `FormWaitlist variant="lite"` as-is and inject the hidden role field via client-side JS that runs on page load, targeting forms by their `form_id`.

**Chosen approach:** Client-side JS injection. On page load, find each `.stubbed-form` within specific sections and append a hidden input for `role`. This avoids modifying `FormWaitlist.astro` and keeps the landing page markup clean.

### 4. Navigation simplification

Modify `Header.astro` and `Footer.astro` to reduce nav links. Update `src/consts.ts` to change the `NAV_LINKS` array to only Home and Team. Add a "Join the Waitlist" button in the header that smooth-scrolls to `#hero-form`.

**Why consts.ts:** Nav links are already centralized there. Changing the array is the single source of truth for both header and footer.

### 5. Page cleanup strategy

Remove (delete) orphaned page files and content rather than commenting out or hiding. The files remain in git history if ever needed. Verify no retained page imports from orphaned files before deletion.

**Files to remove:**
- `src/pages/our-mission.astro`, `events.astro`, `projects.astro`, `contact.astro`
- `src/pages/articles/` directory
- `src/content/articles/` directory
- `src/pages/rss.xml.js`
- `public/_redirects`

### 6. SEO updates

- Title: `The F.A.M. Project — Join the FamCentral Waitlist`
- Description: mirrors hero subheadline from spec
- OG image: hero background image (`home-header-2.jpg` or `home-header.jpg`)

## Risks / Trade-offs

- **[Content drift]** Copy is hardcoded in the Astro page, not in a content collection. If copy changes frequently, edits require touching the page file directly. → Acceptable for a pre-launch landing page with a short lifespan.
- **[Hidden role injection via JS]** If JS fails to load, the hidden `role` field won't be submitted. → Low risk: the form still submits name/email/form_id; role is supplementary segmentation data. GHL can infer role from `form_id`.
- **[Orphaned components]** CTA components like `JoinMovementCTA`, `InvestorCTA`, `CloudsCTA` are preserved but unused. → Intentional per spec; they serve as fallback/reference.
- **[Nav link reduction]** Changing `consts.ts` NAV_LINKS affects all pages globally. → Only two pages remain, both should show the simplified nav, so this is correct.
