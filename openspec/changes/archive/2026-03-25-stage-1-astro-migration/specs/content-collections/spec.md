## ADDED Requirements

### Requirement: Articles content collection schema
The system SHALL define an Astro Content Collection named `articles` with the following schema fields: `title` (string, required), `slug` (string, required), `category` (enum: "Digital Distraction", "Communication", "Child Development", "Family", "Date Night", "Uncategorized" — required), `excerpt` (string, required), `featuredImage` (image, required), `publishDate` (date, required), and markdown body content.

#### Scenario: Valid article frontmatter passes schema validation
- **WHEN** an article markdown file has all required fields with correct types (title, slug, category from the enum, excerpt, featuredImage referencing a valid image, publishDate as ISO date)
- **THEN** the Astro Content Collection validates successfully and the article is available via `getCollection('articles')`

#### Scenario: Invalid category fails schema validation
- **WHEN** an article markdown file has `category: "Invalid Category"`
- **THEN** the Astro Content Collection validation fails with an error indicating the category is not in the allowed enum values

#### Scenario: Missing required field fails schema validation
- **WHEN** an article markdown file omits the `excerpt` field
- **THEN** the Astro Content Collection validation fails with an error indicating the missing required field

### Requirement: Articles collection data
The articles collection SHALL contain approximately 30 articles migrated from the WordPress site, each with content converted to markdown, categories mapped to the defined enum values, and featured images downloaded to `src/assets/articles/`.

#### Scenario: All articles are queryable
- **WHEN** the site builds
- **THEN** `getCollection('articles')` returns approximately 30 entries with valid frontmatter and rendered body content

#### Scenario: Articles preserve original slugs
- **WHEN** retrieving the article originally at `/how-to-fight-teen-cell-phone-addiction/`
- **THEN** the article's `slug` field matches `how-to-fight-teen-cell-phone-addiction`

### Requirement: Team content collection schema
The system SHALL define an Astro Content Collection named `team` with the following schema fields: `name` (string, required), `title` (string, required — role/title such as "CEO & Co-Founder"), `photo` (image, required), `bio` (string, required — approximately 100 words), and `order` (number, required — display order on the page).

#### Scenario: Valid team member data passes schema validation
- **WHEN** a team member data file has all required fields with correct types
- **THEN** the Astro Content Collection validates successfully and the member is available via `getCollection('team')`

#### Scenario: Team members are ordered
- **WHEN** retrieving `getCollection('team')`
- **THEN** entries can be sorted by the `order` field to produce the correct display order (Jashin Howell first, Franklin Poulsen last)

### Requirement: Team collection data
The team collection SHALL contain all 8 team members: Jashin Howell (CEO & Co-Founder), Chris Lange (President & Co-Founder), Roger Badenhuizen, Kenna & RJ Watters, Ryan Garey, Nate Leavitt, Fred Gagon, and Franklin Poulsen. Each member MUST have a headshot photo downloaded to `src/assets/team/`.

#### Scenario: All team members are present
- **WHEN** the site builds
- **THEN** `getCollection('team')` returns exactly 8 entries

#### Scenario: Team member has complete profile
- **WHEN** retrieving the team member with name "Jashin Howell"
- **THEN** the entry has title "CEO & Co-Founder", a valid photo reference, a bio of approximately 100 words, and order value 1
