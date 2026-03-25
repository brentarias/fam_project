## ADDED Requirements

### Requirement: Homepage renders 9 content sections in order
The homepage (`/`) SHALL render a single long-form page containing exactly 9 sections in the order defined by `FAM Project website rewrite.md`: Hero, The Problem, The Mission, Introducing FamCentral, Why This Is Different, Traction & Foundation, Waitlist Visual, Expert Faculty, Final CTA.

#### Scenario: All 9 sections render on homepage load
- **WHEN** a user navigates to `/`
- **THEN** the page displays all 9 sections in sequence, each with its specified headline and body copy

### Requirement: Section copy matches spec document exactly
All text content on the homepage SHALL be sourced exclusively from `FAM Project website rewrite.md`. No copy SHALL be fabricated or paraphrased.

#### Scenario: Hero section displays spec headline
- **WHEN** the hero section renders
- **THEN** the headline reads "A Movement to Strengthen Families Has Begun" and the subheadline matches the spec text

#### Scenario: Section headings match spec
- **WHEN** any section renders
- **THEN** its headline matches the corresponding section heading from the spec document

### Requirement: Sections borrow visual designs from existing pages
Each section SHALL reuse visual treatments (background images, overlays, color schemes, layout patterns) from the existing index, our-mission, events, or projects pages as mapped in the design document.

#### Scenario: Hero section uses existing hero visual treatment
- **WHEN** the hero section renders
- **THEN** it displays a full-bleed background image with purple overlay, white text, matching the existing index hero pattern

#### Scenario: Problem section uses dark background treatment
- **WHEN** the "Families Are Facing a Connection Crisis" section renders
- **THEN** it uses the dark gray-900 background with low-opacity image overlay pattern from the existing "Did You Know" sections

### Requirement: Hero section includes primary waitlist CTA
The hero section SHALL include a waitlist signup form and a list of early-member benefits as specified in Section 1 of the content document.

#### Scenario: Hero displays benefits list and form
- **WHEN** the hero section renders
- **THEN** it shows the 5 early-member benefits as a bullet list and a name+email waitlist form

### Requirement: Section 4 displays FamCentral feature list
The "Meet FamCentral" section SHALL display the 6 capabilities listed in the spec as a structured list.

#### Scenario: FamCentral features render as list
- **WHEN** Section 4 renders
- **THEN** all 6 bullet points from the spec are visible (Discover local events, Connect with families, Support businesses, Look Up Challenge, Expert guidance, Build relationships)

### Requirement: Section 6 displays traction bullet points
The "Built on Real Infrastructure" section SHALL present the 4 traction indicators from the spec.

#### Scenario: Traction points are visible
- **WHEN** Section 6 renders
- **THEN** all 4 bullet points display (live marketplace, WER1 network, proven systems, Hownd acquisition)

### Requirement: Section 9 presents three engagement paths
The final CTA section SHALL display three distinct paths: Join the Waitlist, Apply to Expert Faculty, and Become a Founding Partner.

#### Scenario: Three paths render as cards or columns
- **WHEN** Section 9 renders
- **THEN** three distinct CTAs are visible with their respective headings and action buttons

#### Scenario: Founding Partner path links externally
- **WHEN** user clicks the "Learn More" button under "Become a Founding Partner"
- **THEN** they are navigated to a contact page or mailto link (placeholder)

### Requirement: Orphaned pages are removed
The following route files SHALL be deleted: `our-mission.astro`, `events.astro`, `projects.astro`, `contact.astro`, `articles/` directory, `rss.xml.js`. The `src/content/articles/` collection SHALL also be removed. `public/_redirects` SHALL be removed.

#### Scenario: Removed pages return 404
- **WHEN** a user navigates to `/our-mission/`, `/events/`, `/projects/`, `/contact/`, or any `/articles/` path
- **THEN** they receive a 404 response

### Requirement: Team page is retained unchanged
The team page at `/our-fam/` and its content collection (`src/content/team/`) SHALL NOT be modified.

#### Scenario: Team page renders as before
- **WHEN** a user navigates to `/our-fam/`
- **THEN** the page renders identically to its current state

### Requirement: Homepage SEO metadata is updated
The homepage SHALL set: title to "The F.A.M. Project — Join the FamCentral Waitlist", description mirroring the hero subheadline, and OG image using the hero background.

#### Scenario: SEO tags render correctly
- **WHEN** the homepage HTML is inspected
- **THEN** the `<title>`, `<meta name="description">`, and `<meta property="og:image">` reflect the updated values
