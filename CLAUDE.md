# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start local dev server
pnpm build      # Build production site to ./dist/
pnpm preview    # Preview production build locally
```

## Tech Stack

- **Framework**: Astro 6.0+ (static site generator, file-based routing)
- **Styling**: Tailwind CSS 4.2+ (utility-first, no component-scoped styles)
- **Content**: MDX + Markdown via Astro Content Collections
- **Deployment**: Netlify adapter
- **Package manager**: pnpm (Node >=22.12.0)
- **No JS framework** — vanilla JS only for client-side interactions

## Architecture

### Routing
`src/pages/` maps directly to routes. Dynamic articles: `articles/[...slug].astro` generates routes from content collection entries.

### Content Collections
Two collections in `src/content/`:
- **articles** — 50+ MDX/Markdown posts with frontmatter: `title`, `slug`, `categories`, `excerpt`, `featuredImage`, `publishDate`, `author`, `authorBio`
- **team** — Team member data

### Layout System
- `BaseLayout.astro` — wraps all pages with header, footer, metadata
- `BaseHead.astro` — SEO (meta, OG, Twitter Card, canonical, JSON-LD)

### Styling
Custom brand colors defined in `src/styles/global.css` using Tailwind's `@theme`:
- Green `#8ec640`, Red `#ee3157`, Purple `#6d2d8c`, Orange `#f89520`
- Use `color-fam-green`, `color-fam-red`, `color-fam-purple`, `color-fam-orange` (and dark/light variants)

### Forms
All forms are client-side only (no backend integration yet): `FormWaitlist`, `FormContact`, `FormNewsletter`, `FormFundraising`, `FormSponsor`. Client-side validation uses HTML5 `reportValidity()`. Success feedback via `SuccessToast.astro`.

### CTA Components
Multiple specialized CTAs deployed strategically across pages — marked with `★ PLACEMENT` comments in page files:
- `JoinMovementCTA` — tri-option (Waitlist / Investor / Expert)
- `InvestorCTA`, `ExpertFacultyCTA`, `CloudsCTA` — specific conversion paths
- `FormWaitlist` — FamCentral waitlist with Lite and Full variants

### Site Constants
All shared values (site title, URL, nav links, social links, article categories) live in `src/consts.ts`.
