## ADDED Requirements

### Requirement: Base HTML head with SEO defaults
The `<BaseHead>` component SHALL render a complete `<head>` element with charset (UTF-8), viewport meta tag, favicon links, unique `<title>`, `<meta name="description">`, canonical URL, Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`), and Twitter Card meta tags. All values MUST be configurable via component props.

#### Scenario: Page renders with correct meta tags
- **WHEN** a page renders with title "Our Mission" and description "Learn about the F.A.M. Project mission"
- **THEN** the `<head>` contains `<title>Our Mission</title>`, a `<meta name="description">` with the provided description, and matching Open Graph and Twitter Card tags

#### Scenario: Canonical URL is set
- **WHEN** a page renders at path `/our-mission/`
- **THEN** the `<head>` contains `<link rel="canonical" href="https://thefamproject.com/our-mission/">` with the full absolute URL

### Requirement: Header with navigation
The `<Header>` component SHALL display the F.A.M. Project logo (linked to `/`), navigation links to all 6 top-level routes (Our Mission, Events, Projects, Our F.A.M., Articles), and a "Get in Touch" CTA button that navigates to `/contact/`.

#### Scenario: All navigation links are present
- **WHEN** the header renders on any page
- **THEN** it contains links to `/our-mission/`, `/events/`, `/projects/`, `/our-fam/`, `/articles/`, and a "Get in Touch" button linking to `/contact/`

#### Scenario: Logo links to homepage
- **WHEN** a user clicks the logo in the header
- **THEN** they are navigated to `/`

#### Scenario: Active page is visually indicated
- **WHEN** the user is on the `/events/` page
- **THEN** the "Events" navigation link is visually distinguished from other links (e.g., different color or underline)

### Requirement: Mobile hamburger navigation
The `<Header>` component SHALL include a hamburger menu icon on mobile viewports that toggles a mobile navigation menu containing all the same links as the desktop header.

#### Scenario: Hamburger menu appears on mobile
- **WHEN** the viewport width is below the mobile breakpoint (< 768px)
- **THEN** the desktop navigation links are hidden and a hamburger menu icon is displayed

#### Scenario: Hamburger toggles mobile menu
- **WHEN** a user taps the hamburger icon on mobile
- **THEN** a mobile navigation menu opens showing all navigation links and the "Get in Touch" CTA

#### Scenario: Mobile menu closes on navigation
- **WHEN** a user taps a navigation link in the mobile menu
- **THEN** the mobile menu closes and the user navigates to the selected page

### Requirement: Footer with navigation, social links, and newsletter
The `<Footer>` component SHALL display the F.A.M. Project logo (linked to `/`), two columns of navigation links (Column 1: Our Mission, Events, Projects; Column 2: Our F.A.M., Articles, Contact), social media links (Facebook, Instagram, YouTube), a newsletter signup form (email-only, `<FormNewsletter>`), and a dynamic copyright notice showing the current year.

#### Scenario: Footer renders all sections
- **WHEN** the footer renders on any page
- **THEN** it contains the logo, 6 navigation links across 2 columns, 3 social media links, a newsletter form, and copyright text

#### Scenario: Copyright year is dynamic
- **WHEN** the footer renders in the year 2026
- **THEN** the copyright text reads "© 2026 The F.A.M. Project"

#### Scenario: Social links open in new tab
- **WHEN** a user clicks a social media link (Facebook, Instagram, YouTube)
- **THEN** the link opens the respective social media profile URL in a new browser tab

### Requirement: Responsive layout
All pages SHALL use a responsive layout that adapts to desktop (≥ 1024px), tablet (768px–1023px), and mobile (< 768px) viewports. Semantic HTML elements (`<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>`) MUST be used throughout.

#### Scenario: Page renders correctly at desktop width
- **WHEN** the viewport is 1280px wide
- **THEN** the page displays a full desktop layout with the header navigation visible and multi-column content sections

#### Scenario: Page renders correctly at mobile width
- **WHEN** the viewport is 375px wide
- **THEN** the page displays a single-column layout with the hamburger menu and appropriately sized text and images
