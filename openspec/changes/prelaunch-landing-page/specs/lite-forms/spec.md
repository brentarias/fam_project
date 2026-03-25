## ADDED Requirements

### Requirement: Waitlist forms submit with silent role tagging
Waitlist forms in Sections 1 and 7 SHALL submit a hidden `role=parent` field alongside `name`, `email`, `campaign`, and `form_id`. The role field SHALL NOT be visible to the user as a checkbox or any other UI element.

#### Scenario: Hero waitlist form submits correct hidden fields
- **WHEN** a user fills in name and email in the Section 1 hero form and submits
- **THEN** the POST payload includes `form_id=index-hero`, `role=parent`, `campaign=famcentral-prelaunch`, plus the user's name and email

#### Scenario: Section 7 waitlist form submits correct hidden fields
- **WHEN** a user fills in name and email in the Section 7 waitlist form and submits
- **THEN** the POST payload includes `form_id=index-waitlist`, `role=parent`, `campaign=famcentral-prelaunch`, plus the user's name and email

### Requirement: Expert Faculty form submits with expert role tagging
The Section 8 expert faculty form SHALL submit a hidden `role=expert` field alongside `name`, `email`, `campaign`, and `form_id`. The role field SHALL NOT be visible to the user.

#### Scenario: Expert form submits correct hidden fields
- **WHEN** a user fills in name and email in the Section 8 expert faculty form and submits
- **THEN** the POST payload includes `form_id=index-experts`, `role=expert`, `campaign=famcentral-prelaunch`, plus the user's name and email

### Requirement: All forms post to the GHL webhook
All landing page forms SHALL POST JSON payloads to the existing GHL webhook endpoint. The endpoint URL SHALL match the one configured in `FormWaitlist.astro`.

#### Scenario: Form submission reaches GHL
- **WHEN** any form on the landing page is submitted with valid data
- **THEN** a POST request is sent to the GHL webhook URL with a JSON body

### Requirement: FormWaitlist.astro is not modified
The existing `FormWaitlist.astro` component file SHALL remain unchanged. Landing page forms MAY use `FormWaitlist` with `variant="lite"` or MAY inline equivalent markup, but the component source MUST NOT be altered.

#### Scenario: FormWaitlist component unchanged after implementation
- **WHEN** the implementation is complete
- **THEN** `src/components/FormWaitlist.astro` has zero diff from its pre-implementation state

### Requirement: Forms display success feedback on submission
After successful form submission, the user SHALL see a success toast notification confirming their signup.

#### Scenario: Success toast appears after waitlist signup
- **WHEN** a user submits a waitlist form successfully
- **THEN** a toast notification appears confirming the submission

### Requirement: Section 9 Founding Partner path has no form
The "Become a Founding Partner" option in Section 9 SHALL be a link/button only, navigating to a contact page or `mailto:` placeholder. It SHALL NOT contain a form.

#### Scenario: Founding Partner CTA navigates away
- **WHEN** a user clicks the Founding Partner "Learn More" button
- **THEN** they are navigated to a contact destination (not shown a form)
