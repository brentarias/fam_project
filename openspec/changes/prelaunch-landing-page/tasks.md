## 1. Navigation & Constants

- [x] 1.1 Update `src/consts.ts` — reduce `NAV_LINKS` to Home (`/`) and Team (`/our-fam/`) only
- [x] 1.2 Update `Header.astro` — add a "Join the Waitlist" CTA button that links to `/#hero-form`; verify mobile menu also reflects two-link nav
- [x] 1.3 Update `Footer.astro` — remove nav links to deleted pages; retain logo, social links, copyright, and footer waitlist form (`form_id="global-footer"`)

## 2. Landing Page — Sections 1–3

- [x] 2.1 Replace `src/pages/index.astro` with new landing page scaffold (BaseLayout, imports, SEO metadata: title, description, OG image)
- [x] 2.2 Build Section 1 (Hero) — full-bleed `home-header-2.jpg` with purple overlay, headline, subheadline, benefits list, and `FormWaitlist variant="lite"` with `formId="index-hero"` plus hidden `role=parent`
- [x] 2.3 Build Section 2 (The Problem) — dark `bg-gray-900` with `did-you-know-screens.jpg` at low opacity, centered white text with spec copy
- [x] 2.4 Build Section 3 (The Mission) — light background, purple heading, spec copy, accent image (`sunset-ocean-horizon.jpg`)

## 3. Landing Page — Sections 4–6

- [x] 3.1 Build Section 4 (Meet FamCentral) — two-column layout with `fam-central-logo.png` / `fam-central-app.jpg`, 6-item feature list from spec
- [x] 3.2 Build Section 5 (Why This Is Different) — `clouds.jpg` background, centered text, 4 ecosystem bullet points, "aligned incentives" callout
- [x] 3.3 Build Section 6 (Traction & Foundation) — `sunburst-background.jpg` backdrop, 4 traction bullet points, closing statement

## 4. Landing Page — Sections 7–9

- [x] 4.1 Build Section 7 (Waitlist Visual) — `purple-grunge.jpg` or `ropes-course-family.jpg` with purple overlay, spec copy, benefits list, `FormWaitlist variant="lite"` with `formId="index-waitlist"` plus hidden `role=parent`
- [x] 4.2 Build Section 8 (Expert Faculty) — `clouds.jpg` background, expert seek list (6 categories), name+email form with `formId="index-experts"` plus hidden `role=expert`
- [x] 4.3 Build Section 9 (Final CTA) — `beach-family.jpg` with dark overlay, three-path card layout (Waitlist scroll-link, Expert Faculty scroll-link, Founding Partner external link/mailto)

## 5. Hidden Role Injection

- [x] 5.1 Add client-side JS to the landing page that injects hidden `role` inputs into each `FormWaitlist` instance based on section context (hero/waitlist → `parent`, expert → `expert`)
- [ ] 5.2 Verify form submissions include correct `form_id`, `role`, `campaign`, `name`, and `email` fields via browser dev tools (manual verification needed)

## 6. Page Cleanup

- [x] 6.1 Verify no retained page (index, our-fam) imports from pages about to be deleted
- [x] 6.2 Delete `src/pages/our-mission.astro`, `src/pages/events.astro`, `src/pages/projects.astro`, `src/pages/contact.astro`
- [x] 6.3 Delete `src/pages/articles/` directory
- [x] 6.4 Delete `src/content/articles/` directory
- [x] 6.5 Delete `src/pages/rss.xml.js`
- [x] 6.6 Delete `public/_redirects`

## 7. Verification

- [x] 7.1 Run `pnpm build` — confirm zero errors
- [ ] 7.2 Run `pnpm preview` — verify homepage renders all 9 sections with correct copy (manual verification)
- [ ] 7.3 Verify `/our-fam/` team page renders unchanged (manual verification)
- [ ] 7.4 Verify removed routes (`/our-mission/`, `/events/`, `/projects/`, `/contact/`, `/articles/`) return 404 (manual verification)
- [ ] 7.5 Test all three forms (hero, waitlist, expert) — confirm correct JSON payloads reach GHL webhook (manual verification)
- [ ] 7.6 Verify header and footer nav show only Home + Team links plus waitlist CTA (manual verification)
