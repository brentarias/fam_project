# The F.A.M. Project — Website

Pre-launch sign-up portal for **The F.A.M. Project** and its flagship product, **FamCentral** — a platform designed to help families build stronger relationships. The site captures waitlist sign-ups, investor interest, and expert faculty applications ahead of launch.

Built with Astro 6, Tailwind CSS 4, and deployed via Netlify.

There was a prior version of this site built with WordPress. The WordPress site had many broken links (mostly images that could not be located) and had poor performance. Astro was chosen because no meaningful dynamic behavior, particularly SSR, was expected.

| | Performance | Accessibility | Best Practices | SEO |
| :---------------- | :---------: | :-----------: | :------------: | :-: |
| WordPress (prior) | 🟡 82 | 🟢 91 | 🔴 54 | 🟡 69 |
| Astro (current)   | 🟢 99 | 🟢 94 | 🟢 92 | 🟢 100 |

## Commands

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm dev`     | Start local dev server at `localhost:4321`  |
| `pnpm build`   | Build production site to `./dist/`          |
| `pnpm preview` | Preview production build locally            |

## Form Placement IDs

Every waitlist form submits a hidden `form_id` field alongside the user's data, identifying which placement drove the conversion. The current placements are:

| `form_id`          | Location                                              |
| :----------------- | :---------------------------------------------------- |
| `global-footer`    | Footer — present on every page (`BaseLayout.astro`)   |
| `index-hero`       | Homepage hero section                                 |
| `index-join`       | Homepage → Join the Movement section (CloudsCTA)      |
| `our-mission-join` | Our Mission page → Founding Community form (CloudsCTA)|
| `events-waitlist`  | Events page → Founding Community card (purple)        |
| `events-experts`   | Events page → Join Our Expert Faculty (CloudsCTA)     |
| `projects-investor`| Projects page → Become a Founding Investor            |
| `contact-join`     | Contact page → Join the Movement section (CloudsCTA)  |
| `articles-inline`  | Article pages → inline banner at end of each article  |
