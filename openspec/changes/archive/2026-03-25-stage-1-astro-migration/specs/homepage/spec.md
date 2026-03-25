## ADDED Requirements

### Requirement: Homepage hero section with newsletter form
The homepage SHALL display a full-bleed hero section (`<HeroSection>`) with a background image, overlay text introducing The F.A.M. Project, and an inline newsletter signup form (`<FormNewsletter>`) with the button text "Let's change the world!".

#### Scenario: Hero section renders with form
- **WHEN** a user visits `/`
- **THEN** they see a full-bleed hero image with text introducing The F.A.M. Project and a newsletter form with an email input and "Let's change the world!" button

### Requirement: Mission teaser section
The homepage SHALL include a section that teases the organization's mission with a brief overview and a link to the full `/our-mission/` page.

#### Scenario: Mission teaser links to mission page
- **WHEN** a user views the mission teaser section on the homepage
- **THEN** they see a brief mission description and a link/button that navigates to `/our-mission/`

### Requirement: Statistics callout section
The homepage SHALL display a statistics section (`<StatBlock>` components) showing hardcoded family/community statistics with source attributions.

#### Scenario: Statistics are displayed with attribution
- **WHEN** a user views the statistics section on the homepage
- **THEN** they see formatted statistics (numbers and labels) with attributed sources

### Requirement: Events teaser section
The homepage SHALL include a section teasing upcoming or featured events with a link to the full `/events/` page.

#### Scenario: Events teaser links to events page
- **WHEN** a user views the events teaser section on the homepage
- **THEN** they see event information and a link/button that navigates to `/events/`

### Requirement: Testimonial section
The homepage SHALL display at least one testimonial (`<Testimonial>` component) with a quote, attribution name, and title/role. A photo of the person MAY be included.

#### Scenario: Testimonial renders with quote and attribution
- **WHEN** a user views the testimonial section on the homepage
- **THEN** they see a formatted quote with the person's name and title/role

### Requirement: YouTube video embed
The homepage SHALL include a YouTube video embed using a lazy-loaded facade pattern (`<YouTubeEmbed>` component). The embed MUST show a thumbnail and play button initially, and load the actual YouTube iframe only when the user clicks to play.

#### Scenario: YouTube facade renders without loading iframe
- **WHEN** the homepage loads
- **THEN** the YouTube section displays a video thumbnail and play button, but no iframe is loaded (no YouTube resources are fetched)

#### Scenario: YouTube iframe loads on click
- **WHEN** a user clicks the play button on the YouTube facade
- **THEN** the facade is replaced by the actual YouTube iframe which begins playing the video

### Requirement: Projects teaser section
The homepage SHALL include a section teasing key projects (FAM Fun Pass, FAM Central) with external links to `https://www.famfunpass.com/` and the FAM Central iOS app page.

#### Scenario: Projects section has external links
- **WHEN** a user views the projects teaser section
- **THEN** they see FAM Fun Pass and FAM Central with links that open the respective external URLs in a new tab

### Requirement: Contact form section
The homepage SHALL include a bottom section with a contact form (`<FormContact>`) with the button text "Let's change the world!".

#### Scenario: Contact form renders at bottom of homepage
- **WHEN** a user scrolls to the bottom section of the homepage (above the footer)
- **THEN** they see a contact form with name, email, and phone fields and a "Let's change the world!" submit button

### Requirement: Homepage uses correct route
The homepage SHALL be served at the root path `/`.

#### Scenario: Homepage is accessible at root URL
- **WHEN** a user navigates to `/`
- **THEN** the full homepage with all sections (hero, mission, stats, events, testimonial, YouTube, projects, contact) is rendered with the global Header and Footer
