## ADDED Requirements

### Requirement: Articles index page
The articles index page SHALL be served at `/articles/` and display a grid of article cards (`<ArticleCard>` components) for all articles in the `articles` Content Collection. Each card MUST display the article's featured image thumbnail, category badge, title, excerpt, and a "Read More" link to the individual article page.

#### Scenario: Articles index renders all articles
- **WHEN** a user navigates to `/articles/`
- **THEN** they see a grid of approximately 30 article cards, each showing a thumbnail, category badge, title, excerpt, and "Read More" link

#### Scenario: Article cards link to individual article pages
- **WHEN** a user clicks "Read More" on an article card with slug `how-to-fight-teen-cell-phone-addiction`
- **THEN** they are navigated to `/articles/how-to-fight-teen-cell-phone-addiction/`

### Requirement: Category filtering or grouping
The articles index page SHALL support filtering or grouping articles by category. All 6 categories (Digital Distraction, Communication, Child Development, Family, Date Night, Uncategorized) MUST be represented.

#### Scenario: User can filter articles by category
- **WHEN** a user selects the "Digital Distraction" category filter/group on the articles index
- **THEN** only articles with category "Digital Distraction" are displayed (or highlighted/grouped)

#### Scenario: All categories are available
- **WHEN** the articles index page renders the category filter/grouping UI
- **THEN** all 6 categories are listed as options regardless of whether articles exist in each category

### Requirement: ArticleCard component
The `<ArticleCard>` component SHALL accept an article entry and render a card with: featured image thumbnail (optimized via Astro `<Image>`), a category badge with the category name, the article title, a short excerpt, and a "Read More" link.

#### Scenario: ArticleCard renders all elements
- **WHEN** an `<ArticleCard>` renders for an article with title "How to Fight Teen Cell Phone Addiction", category "Digital Distraction", and an excerpt
- **THEN** the card displays the featured image, a "Digital Distraction" category badge, the title, the excerpt text, and a "Read More" link

### Requirement: Individual article pages via dynamic route
The system SHALL generate individual article pages using a dynamic `[...slug].astro` route under `/articles/`. Each article page MUST render the article's title, publish date, category, featured image, and full markdown body content. The page MUST use `getStaticPaths()` to generate paths for all articles in the collection at build time.

#### Scenario: Individual article page renders correctly
- **WHEN** a user navigates to `/articles/how-to-build-strong-family-relationships/`
- **THEN** they see the article's title, publish date, category, featured image (optimized), and full rendered markdown body

#### Scenario: All article slugs generate static pages
- **WHEN** the site builds
- **THEN** `getStaticPaths()` returns paths for all ~30 articles, and each generates a static HTML page

#### Scenario: Non-existent article slug returns 404
- **WHEN** a user navigates to `/articles/nonexistent-slug/`
- **THEN** they receive a 404 response

### Requirement: Article page has proper SEO
Each individual article page SHALL have a unique `<title>` (based on the article title), `<meta name="description">` (based on the excerpt), and Open Graph tags with the article's featured image as `og:image`.

#### Scenario: Article page meta tags use article data
- **WHEN** the article "How to Raise a Happy Child" renders
- **THEN** the page title includes "How to Raise a Happy Child", the meta description matches the excerpt, and `og:image` references the article's featured image
