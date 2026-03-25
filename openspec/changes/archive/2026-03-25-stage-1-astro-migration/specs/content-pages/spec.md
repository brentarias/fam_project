## ADDED Requirements

### Requirement: Our Mission page
The Our Mission page SHALL be served at `/our-mission/` and display the organization's mission statement as long-form content, a Tim Cook quote (`<Testimonial>` component), a statistics section (`<StatBlock>` components) with family/community data and source attributions, and a contact form (`<FormContact>`) with the button text "Let's change the world!".

#### Scenario: Our Mission page renders all sections
- **WHEN** a user navigates to `/our-mission/`
- **THEN** they see the mission statement, a Tim Cook quote, statistics with sources, and a contact form

#### Scenario: Our Mission page has unique SEO meta
- **WHEN** the Our Mission page renders
- **THEN** the page has a unique `<title>` and `<meta name="description">` relevant to the mission content

### Requirement: Events page
The Events page SHALL be served at `/events/` and display event series descriptions, legacy event information, a newsletter/download form (`<FormNewsletter>`) with button text "Get my free guide" for event list subscription, a second newsletter form for legacy event downloads, and a sponsor inquiry section with a sponsor form (`<FormSponsor>`) with button text "Let's work together".

#### Scenario: Events page renders event content and forms
- **WHEN** a user navigates to `/events/`
- **THEN** they see event series descriptions, legacy events, two newsletter/download forms with "Get my free guide" buttons, and a sponsor section with the "Let's work together" form

#### Scenario: Events page sponsor form is distinct from newsletter forms
- **WHEN** a user views the events page
- **THEN** the sponsor form (`<FormSponsor>`) collects name, email, and phone, while the newsletter forms collect only email

### Requirement: Projects page
The Projects page SHALL be served at `/projects/` and display information about FAM Fun Pass (with external link to `https://www.famfunpass.com/`), FAM Central (with external link to the iOS App Store), a vendor section, and a fundraising inquiry section with a fundraising form (`<FormFundraising>`) with button text "Let's raise some funds!".

#### Scenario: Projects page renders all project sections
- **WHEN** a user navigates to `/projects/`
- **THEN** they see FAM Fun Pass, FAM Central, vendor information, and a fundraising form

#### Scenario: Projects page external links open in new tabs
- **WHEN** a user clicks the FAM Fun Pass link
- **THEN** `https://www.famfunpass.com/` opens in a new browser tab

#### Scenario: Fundraising form collects message
- **WHEN** a user views the fundraising form on the projects page
- **THEN** the form includes name, email, phone, and a "Tell us about your organization" textarea, plus a "Let's raise some funds!" submit button

### Requirement: Our F.A.M. page
The Our F.A.M. page SHALL be served at `/our-fam/` and display a grid of team member cards (`<TeamCard>` components) sourced from the `team` Content Collection. Each card MUST show the member's photo, name, title/role, and biography. Cards MUST be ordered by the `order` field.

#### Scenario: Our FAM page renders team grid
- **WHEN** a user navigates to `/our-fam/`
- **THEN** they see a grid of 8 team member cards, each with a photo, name, title, and bio

#### Scenario: Team members are in correct order
- **WHEN** the Our FAM page renders
- **THEN** Jashin Howell appears first and Franklin Poulsen appears last, matching the `order` field values

### Requirement: Contact page
The Contact page SHALL be served at `/contact/` and display a contact form (`<FormContact>`) with the button text "Let's change the world!" along with contact information for the organization.

#### Scenario: Contact page renders form and info
- **WHEN** a user navigates to `/contact/`
- **THEN** they see a contact form with name, email, and phone fields and a "Let's change the world!" button, along with organization contact information

#### Scenario: Contact page is the "Get in Touch" CTA destination
- **WHEN** a user clicks the "Get in Touch" button in the header from any page
- **THEN** they are navigated to `/contact/`

### Requirement: All content pages have single h1
Each content page MUST have exactly one `<h1>` element serving as the page title. All subsequent headings MUST follow proper hierarchy (`<h2>`, `<h3>`, etc.).

#### Scenario: Page heading hierarchy is correct
- **WHEN** inspecting any content page's HTML
- **THEN** there is exactly one `<h1>` element and all other headings follow descending hierarchy without skipping levels
