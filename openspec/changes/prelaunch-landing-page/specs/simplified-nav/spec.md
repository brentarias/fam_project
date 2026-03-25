## ADDED Requirements

### Requirement: Header displays only Home and Team nav links
The site header SHALL display exactly two navigation links: "Home" (`/`) and "Team" (`/our-fam/`). All other nav links (Our Mission, Events, Projects, Articles, Contact) SHALL be removed.

#### Scenario: Desktop header shows two links
- **WHEN** the header renders on desktop
- **THEN** only "Home" and "Team" links are visible in the navigation bar

#### Scenario: Mobile menu shows two links
- **WHEN** the mobile hamburger menu is opened
- **THEN** only "Home" and "Team" links are listed

### Requirement: Header includes waitlist CTA button
The header SHALL include a "Join the Waitlist" button that smooth-scrolls to the hero form section on the homepage.

#### Scenario: CTA button scrolls to hero form on homepage
- **WHEN** a user clicks "Join the Waitlist" in the header while on the homepage
- **THEN** the page smooth-scrolls to the hero section's waitlist form

#### Scenario: CTA button navigates to homepage from team page
- **WHEN** a user clicks "Join the Waitlist" in the header while on `/our-fam/`
- **THEN** they are navigated to `/#hero-form`

### Requirement: Footer nav links match simplified site
The footer SHALL remove links to hidden pages. It SHALL retain: logo, social links (Facebook, Instagram, YouTube), copyright, and the footer waitlist form with `form_id="global-footer"`.

#### Scenario: Footer does not link to removed pages
- **WHEN** the footer renders
- **THEN** no links to `/our-mission/`, `/events/`, `/projects/`, `/contact/`, or `/articles/` are present

#### Scenario: Footer retains social links and waitlist form
- **WHEN** the footer renders
- **THEN** social media links (Facebook, Instagram, YouTube) and a waitlist signup form are visible

### Requirement: Nav link source of truth is consts.ts
The `NAV_LINKS` array in `src/consts.ts` SHALL be updated to contain only Home and Team entries. Header and footer SHALL derive their navigation from this array.

#### Scenario: consts.ts reflects two-link nav
- **WHEN** `src/consts.ts` is inspected
- **THEN** `NAV_LINKS` contains exactly two entries: Home (`/`) and Team (`/our-fam/`)
