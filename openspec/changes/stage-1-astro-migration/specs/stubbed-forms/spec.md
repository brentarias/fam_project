## ADDED Requirements

### Requirement: Form Type A — Newsletter signup (email only)
The `<FormNewsletter>` component SHALL render a form with a single email input field (placeholder: "Email") and a configurable submit button label. The component MUST accept a `buttonText` prop to support different button labels across locations ("Let's change the world!", "Get in here!", "Get my free guide").

#### Scenario: Newsletter form renders with correct fields
- **WHEN** the `<FormNewsletter>` component renders with `buttonText="Get in here!"`
- **THEN** the form displays an email input with placeholder "Email" and a submit button with text "Get in here!"

#### Scenario: Newsletter form submission is stubbed
- **WHEN** a user fills in an email and clicks the submit button
- **THEN** the form prevents default submission, no data leaves the browser, and a success toast/message is displayed with text indicating the form was submitted (including a note that backend integration is coming in Stage 2)

#### Scenario: Newsletter form validates email
- **WHEN** a user submits the newsletter form with an invalid email (e.g., "notanemail")
- **THEN** the browser's native email validation prevents submission

### Requirement: Form Type B — Contact form (name, email, phone)
The `<FormContact>` component SHALL render a form with name (text, placeholder: "Name"), email (email, placeholder: "Email"), and phone (tel, placeholder: "Phone") input fields, plus a configurable submit button label.

#### Scenario: Contact form renders with correct fields
- **WHEN** the `<FormContact>` component renders with `buttonText="Let's change the world!"`
- **THEN** the form displays name, email, and phone inputs with their respective placeholders, and a submit button with text "Let's change the world!"

#### Scenario: Contact form submission is stubbed
- **WHEN** a user fills in all fields and clicks the submit button
- **THEN** the form prevents default submission, no data leaves the browser, and a success toast/message is displayed

### Requirement: Form Type C — Sponsor/partner inquiry (name, email, phone)
The `<FormSponsor>` component SHALL render a form with the same fields as Form Type B (name, email, phone) but in a sponsor/partnership context with the button label "Let's work together".

#### Scenario: Sponsor form renders and submits as stubbed
- **WHEN** the `<FormSponsor>` component renders
- **THEN** it displays name, email, and phone inputs and a "Let's work together" submit button, and on submission shows a success toast without sending data

### Requirement: Form Type D — Fundraising inquiry (name, email, phone, message)
The `<FormFundraising>` component SHALL render a form with name (text, placeholder: "Name"), email (email, placeholder: "Email"), phone (tel, placeholder: "Phone"), and message (textarea, placeholder: "Tell us about your organization") fields, plus a submit button with text "Let's raise some funds!".

#### Scenario: Fundraising form renders with all four fields
- **WHEN** the `<FormFundraising>` component renders
- **THEN** it displays name, email, phone inputs and a message textarea with their respective placeholders, and a "Let's raise some funds!" submit button

#### Scenario: Fundraising form submission is stubbed
- **WHEN** a user fills in all fields and clicks the submit button
- **THEN** the form prevents default submission, no data leaves the browser, and a success toast/message is displayed

### Requirement: Success toast for all stubbed forms
All form components SHALL display a visible success toast/message on submission. The toast MUST clearly indicate that the form was received and SHOULD mention that backend integration is coming in Stage 2 to set appropriate expectations during customer review.

#### Scenario: Success toast appears and auto-dismisses
- **WHEN** any form is successfully submitted
- **THEN** a success toast appears with a message like "Thanks! Your submission was received. (Backend integration coming in Stage 2)" and the toast auto-dismisses after a few seconds or can be manually dismissed
