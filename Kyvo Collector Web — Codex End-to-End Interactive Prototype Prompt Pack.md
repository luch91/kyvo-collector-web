# Kyvo Collector Web
## Codex End-to-End Interactive Prototype Prompt Pack

### Purpose

Build a polished, end-to-end interactive prototype of **Kyvo Collector Web**, the desktop collections workspace for Kyvo collection agents and supervisors.

This is the web counterpart of the existing Kyvo Collector mobile application, redesigned specifically for desktop collections work. It must feel significantly more mature, refined and operationally efficient than the current mobile experience.

This is **not** the Kyvo Admin Dashboard.

This is **not** a multi-lender collections platform.

This is **not** a multi-loan-product switching interface.

The prototype should represent a convincing production product, with realistic states, interactions, data, navigation, feedback and workflow continuity.

---

# HOW TO USE THIS PACK

Execute the prompts sequentially.

After each prompt:

1. Run the application.
2. Fix build/runtime errors before continuing.
3. Test every interaction introduced in that stage.
4. Preserve all previously completed functionality.
5. Do not silently redesign completed screens when implementing a later prompt.
6. Keep mock data and application state centralised rather than scattering hard-coded values throughout components.
7. Maintain a running `PROTOTYPE_STATUS.md` file containing:
   - completed screens
   - implemented interactions
   - known limitations
   - remaining prompts
   - design decisions
   - mock-data assumptions
8. Update `PROTOTYPE_STATUS.md` after every implementation stage.

The final result should feel like one coherent application, not a collection of disconnected screens.

---

# PROMPT 0 — REPOSITORY AUDIT AND IMPLEMENTATION PLAN

You are working on **Kyvo Collector Web**, a desktop web application for loan collection agents and supervisors.

Before changing code, audit the current repository.

## Product context

Kyvo Collector Web supports this operational loop:

**Login → Prioritised Queue → Open Borrower Case → Review Context → Contact Borrower → Log Outcome → Record PTP or Follow-up → Track Repayment → Continue Queue**

Supervisors additionally need:

**Team Queue → Agent Workload → Case Review → Reassignment → Escalation Review → Performance**

The application should optimise repeated daily collections work.

## Product boundaries

Do not introduce:

- lender switching
- lender dropdowns
- multi-loan-product navigation
- borrower loan origination
- underwriting
- disbursement operations
- portfolio configuration
- finance administration
- bureau reporting
- generic CRM functionality
- Admin Dashboard modules

Collector Web should remain a focused collections execution workspace.

## Required audit

Inspect:

- repository structure
- framework and version
- package manager
- routing
- styling architecture
- state-management approach
- existing components
- existing mock data
- authentication scaffolding
- icons
- fonts
- test setup
- linting
- build scripts
- responsive implementation

Then create or update:

`PROTOTYPE_STATUS.md`

Include:

### Current architecture
### Existing screens
### Existing reusable components
### Missing product areas
### Recommended implementation order
### Risks
### Dependencies
### Proposed route map
### Proposed component architecture
### Proposed mock-data architecture

Do not begin broad visual implementation until you understand the repository.

Preserve working code wherever it provides a good foundation.

Run the existing app before making architectural changes.

---

# PROMPT 1 — PRODUCT SHELL AND DESIGN SYSTEM

Build the visual and structural foundation for Kyvo Collector Web.

## Brand anchor

The primary Kyvo Collector brand colour is:

`#203AC3`

Use this colour as the core identity of the product.

Do not copy the colour system from the existing Admin Dashboard.

## Supporting palette

Use this starting system:

- Primary: `#203AC3`
- Primary hover / deep indigo: `#172A8D`
- Primary soft surface: approximately `#EEF1FF`
- Primary text: `#111827`
- Secondary text: `#667085`
- Muted text: approximately `#98A2B3`
- Border: `#D9DEE7`
- App background: `#F5F7FB`
- Main surface: `#FFFFFF`
- Success: `#168A5B`
- Warning: `#B7791F`
- Danger: `#C24141`

The exact supporting neutrals can be tuned for visual quality.

Do not change the primary brand colour.

## Visual direction

The mobile collector interface currently feels visually basic. The web application should feel:

- calm
- premium
- operational
- modern
- trustworthy
- data-dense without becoming cramped
- designed for long working sessions

Avoid:

- giant colour blocks
- excessive rounded cards
- every section floating inside a card
- excessive shadows
- gradients as decoration
- oversized typography
- consumer-fintech gimmicks
- unnecessary illustrations
- heavy animation
- excessive badges
- rainbow status colours
- dashboard-template aesthetics

## Typography

Use a high-quality sans-serif suitable for enterprise software.

Prefer Inter if already installed.

Typography hierarchy should support dense operational interfaces.

Use approximately:

- page title: 24–28px
- section title: 16–18px
- body: 14px
- dense table text: 13–14px
- metadata: 12–13px

Do not make the interface feel miniature.

## Core shell

Create:

### Left sidebar

Desktop sidebar containing:

- Kyvo logo / Collector identity
- Queue
- Follow-ups
- Notifications
- Performance

Supervisor-only:

- Team

Bottom section:

- signed-in user
- role
- Profile / Settings
- Sign out

Use icons plus labels.

Selected item uses the Kyvo indigo.

Do not fill the entire sidebar with dark indigo.

### Main content region

Include:

- page header
- optional breadcrumb where useful
- main content
- contextual secondary actions
- predictable page spacing

### Responsive behaviour

Optimise primarily for:

- 1440px desktop
- 1280px laptop
- 1024px small laptop

Do not design mobile web as the primary experience.

At narrower desktop widths:

- sidebar may collapse
- dense table columns may intelligently hide
- case workspace can become full-page instead of split-pane

## Reusable components

Create a coherent component library for:

- Button
- IconButton
- Badge
- StatusBadge
- Input
- SearchInput
- Select
- Checkbox
- Radio
- Textarea
- DatePicker or prototype equivalent
- Modal
- Drawer / Sheet
- Tooltip
- DropdownMenu
- Tabs
- Table
- EmptyState
- LoadingState
- ErrorState
- Skeleton
- Toast
- KPI
- Timeline
- Avatar
- Pagination
- FilterChip

All interactions must include:

- hover
- focus
- active
- disabled
- loading where applicable

Meet accessible contrast and keyboard focus requirements.

Do not yet build all application pages.

Complete the shell and reusable system first.

---

# PROMPT 2 — CENTRAL MOCK DATA AND APPLICATION STATE

Create a realistic mock application layer.

Do not hard-code separate fake values inside individual screens.

## Required entities

Create typed entities for:

### User

Fields:

- id
- name
- email
- role
- avatar
- team
- lastLogin

Roles:

- COLLECTIONS_AGENT
- SUPERVISOR

### Borrower

Fields:

- id
- fullName
- phone
- alternatePhone
- email
- avatar
- maskedBVN if displayed
- location
- preferredChannel

### CollectionCase

Fields should include:

- id
- loanId
- borrowerId
- assignedAgentId
- status
- outstandingBalance
- originalPrincipal
- amountRepaid
- amountRecoveredToday
- dueDate
- daysPastDue
- dateAssigned
- lastContactAt
- lastContactOutcome
- contactAttemptCount
- reminderCount
- nextFollowUpAt
- hasPartialRepayment
- priorityReason
- createdAt
- updatedAt

### Supported case statuses

Use:

- NEW
- PRO
- PTP
- COM

Also support derived operational states:

- UNTOUCHED
- FOLLOW_UP_DUE
- PTP_DUE
- BROKEN_PTP
- PARTIAL_REPAYMENT
- RESOLVED

Do not create a conflicting second authoritative status system.

### ContactAttempt

Fields:

- id
- caseId
- agentId
- channel
- outcome
- notes
- timestamp
- nextFollowUpAt

Outcomes:

- ANSWERED
- NO_ANSWER
- PTP
- REFUSED
- WRONG_NUMBER
- CALLBACK_REQUESTED

### PromiseToPay

Fields:

- id
- caseId
- promisedAmount
- promisedDate
- amountPaidAgainstPromise
- channel
- notes
- status
- createdBy
- createdAt

PTP status:

- ACTIVE
- FULFILLED
- PARTIALLY_FULFILLED
- BROKEN
- CANCELLED

### Payment

Fields:

- id
- caseId
- amount
- timestamp
- reference
- paymentMethod
- resultingBalance

### FollowUp

Fields:

- id
- caseId
- assignedTo
- dueAt
- type
- status
- note

### Notification

Fields:

- id
- userId
- type
- title
- description
- createdAt
- read
- caseId where applicable

### SupervisorAction

Fields:

- id
- caseId
- supervisorId
- type
- previousAgentId
- newAgentId
- reason
- createdAt

## Dataset quality

Generate at least 40 realistic collection cases.

Ensure the dataset includes meaningful variation:

- freshly assigned accounts
- DPD 1–7
- DPD 8–30
- DPD 31–60
- DPD 60+
- zero-contact cases
- repeatedly contacted cases
- active PTPs
- PTP due today
- broken PTP
- partial repayments
- recent full repayment
- wrong phone number
- refused repayment
- future follow-up
- overdue follow-up
- high outstanding balances
- low outstanding balances

Use realistic Nigerian names and naira amounts.

Do not use insulting, stereotyped or jokey borrower data.

## State behaviour

Use a central store or application state layer.

Prototype mutations must update the visible application immediately.

Examples:

- logging a contact updates last-contact information
- recording a PTP changes relevant views
- scheduling follow-up adds it to Follow-ups
- receiving mock payment changes balance
- completing payment moves the case toward COM/resolved
- reassignment changes assigned agent
- reading notification changes unread count

Persist prototype state in `localStorage` where practical so refreshes do not immediately reset the demo.

Provide a clear “Reset demo data” developer mechanism.

---

# PROMPT 3 — AUTHENTICATION EXPERIENCE

Build the Kyvo Collector Web authentication flow.

## Sign-in screen

Create a polished sign-in screen using Kyvo Collector branding.

Do not copy the Admin Dashboard login.

Do not use a role dropdown in the production-looking interface.

Required:

- Kyvo Collector identity
- email
- password
- show/hide password
- remember me
- forgot password
- sign-in button
- validation
- loading state
- authentication error state

Provide prototype credentials subtly in a development-only helper area or README:

### Agent

`agent@kyvo.test`

### Supervisor

`supervisor@kyvo.test`

Use a simple demo password.

The chosen account determines application permissions.

## Forgot password

Create an interactive prototype flow:

1. enter email
2. submit
3. confirmation state
4. return to login

No real email integration is required.

## Session

After login:

- agent lands on Queue
- supervisor also lands on Queue unless product context gives a stronger reason otherwise

Persist demo session locally.

Implement logout.

If an unauthenticated user visits protected routes, redirect to sign-in.

---

# PROMPT 4 — QUEUE: THE PRIMARY WORKSPACE

Build the most important screen in the product.

Route:

`/queue`

This screen should feel immediately superior to a mobile card list.

## Header

Include:

**Queue**

Supporting context such as:

“Your assigned collection cases”

Avoid verbose dashboard copy.

## Attention summary

At the top, create a compact operational summary.

Show:

- Needs first action
- Follow-ups due
- PTP due
- Broken PTP
- Total outstanding

These should function as useful filters where appropriate.

Do not make them oversized KPI cards.

## Lifecycle navigation

Allow quick switching between:

- All Active
- NEW
- PRO
- PTP
- COM

Counts should update from the central mock dataset.

## Search

Search across:

- borrower name
- phone number
- loan ID

Use debounced search if appropriate.

## Filters

Provide filter controls for:

- status
- DPD range
- contact state
- PTP state
- partial repayment
- follow-up date
- assigned agent for supervisors

Show active filters clearly.

Include “Clear all”.

Do not add lender or loan-product filters.

## Sorting

Support:

- outstanding balance
- DPD
- due date
- next follow-up
- last contact
- assignment date

## Main table

Build a high-quality desktop table.

Recommended columns:

- Borrower
- Outstanding
- DPD
- Status
- PTP / Follow-up
- Last Contact
- Attempts
- Last Payment
- Next Action

Add restrained row-level affordances.

Borrower cell can include:

- avatar / initials
- name
- phone
- compact loan ID

### Table behaviour

Support:

- sticky header
- hover state
- selected row state
- keyboard navigation
- pagination or virtualised list
- useful empty states
- loading skeleton
- error state

Clicking a row opens the case workspace.

## Priority

Do not invent a mysterious AI score.

Use transparent priority cues such as:

- PTP due today
- broken PTP
- follow-up overdue
- untouched
- DPD 60+
- high balance

Display the reason explicitly.

## Queue continuity

This is critical.

When the user:

1. applies filters
2. scrolls the list
3. opens a case
4. logs an action
5. closes the case

they should return to the same:

- filter state
- sort state
- lifecycle view
- pagination position
- approximate scroll position

This should feel like a real desk-agent workbench.

---

# PROMPT 5 — CASE WORKSPACE

Create the central case-detail experience.

On wide desktop screens, opening a case from Queue should preferably reveal a substantial right-side workspace or master-detail layout.

Also support a full-page case route:

`/cases/:id`

## Case header

Show:

- borrower name
- phone
- loan ID
- outstanding balance
- DPD
- status
- assigned agent
- latest important state

Primary actions:

- Contact
- Log Outcome
- Record PTP
- Schedule Follow-up

Do not show every action as an equally prominent button.

## Summary area

Provide a clean financial summary:

- original principal
- total repaid
- remaining balance
- due date
- days past due
- date assigned
- last payment
- active PTP where applicable

## Borrower details

Show only collection-relevant information.

Do not turn this into a full KYC administration screen.

## Activity timeline

This is one of the most important parts.

Build a chronological timeline combining:

- contact attempts
- notes
- PTPs
- scheduled follow-ups
- payments
- status changes
- assignments
- supervisor actions

Each timeline item needs:

- event type
- actor where relevant
- timestamp
- useful details

Use subtle visual hierarchy.

Avoid a noisy rainbow timeline.

## Payment history

Provide:

- date
- amount
- method
- reference
- resulting balance

## Current action panel

Show a compact contextual section such as:

**Next action**

Examples:

- Contact borrower — no attempt has been made
- Follow up today at 2:00 PM
- PTP of ₦45,000 due today
- PTP overdue by 2 days
- No further action — case fully repaid

The next-action display should derive from mock state.

---

# PROMPT 6 — CONTACT BORROWER AND LOG OUTCOME

Implement the interactive contact workflow.

## Contact action

When clicking Contact:

Present available channels such as:

- WhatsApp
- Phone

For WhatsApp prototype behaviour:

- display registered phone number
- show a short compliant message preview
- provide “Open WhatsApp” behaviour using a generated `wa.me` link where possible

Do not actually send a message inside the app.

## Compliance information

Before contact, visibly show:

- last contact
- number of attempts today
- whether another contact is allowed

Create realistic prototype enforcement.

Example:

If contact cap is reached:

Disable Contact.

Show:

“Daily contact limit reached. Next contact available tomorrow.”

For blackout hours, provide a simulation mechanism independent of the computer's actual time so the state can be demonstrated.

## Log outcome

After contact, open a focused modal or panel.

Required fields:

### Outcome

- Answered
- No Answer
- Promise to Pay
- Refused
- Wrong Number
- Callback Requested

### Notes

Optional or required based on outcome.

### Next follow-up

Date/time where appropriate.

If outcome = Promise to Pay:

Offer immediate transition to the PTP form.

## Save behaviour

Saving must:

- create a ContactAttempt
- update case lastContact
- increment attempts
- add timeline event
- update next follow-up if supplied
- refresh queue row
- show success toast

Prevent accidental duplicate submission.

---

# PROMPT 7 — PROMISE TO PAY

Build a polished PTP workflow.

Trigger from:

- case actions
- PTP contact outcome
- relevant follow-up actions

## Form

Fields:

### Promised amount

Currency input formatted as naira.

### Promised date

Date picker.

### Channel

Options:

- Phone
- WhatsApp
- Other

### Notes

Optional.

## Context

Above the form show:

- current outstanding balance
- previous PTP if one exists
- amount already repaid
- current DPD

## Validation

Prevent:

- amount <= 0
- amount exceeding outstanding balance unless a business rule explicitly permits it
- invalid dates
- missing required fields

Do not silently overwrite an active PTP.

If another PTP exists, explain that a new commitment will become a new historical record.

## After save

Update:

- case status/view
- PTP object
- queue
- timeline
- follow-up list
- notification if applicable

Show a confirmation containing:

- amount
- date
- borrower
- next expected action

## Broken PTP behaviour

Create a demo mechanism for marking a PTP as past due.

When broken:

- status changes to BROKEN
- case becomes visually urgent
- case returns to an actionable recovery view
- timeline records the event
- Follow-ups shows it as overdue
- no original PTP history is deleted

---

# PROMPT 8 — FOLLOW-UPS

Build:

`/follow-ups`

This is an operational worklist rather than a calendar product.

## Views

Provide:

- Today
- Upcoming
- Overdue
- Completed

Optionally:

- PTP due
- Callbacks

## Each item

Show:

- borrower
- outstanding balance
- reason
- due time/date
- assigned agent
- DPD
- PTP amount where relevant
- latest contact
- action

Clicking opens the case workspace.

## Quick actions

Allow:

- Open case
- Mark follow-up completed when valid
- Reschedule
- Contact borrower

Actions should update central state.

## Supervisor

Supervisor can filter by agent.

Agent only sees their permitted workload.

---

# PROMPT 9 — NOTIFICATION CENTRE

Build:

`/notifications`

Use realistic operational notifications.

Types should include:

- new case assignment
- payment received
- PTP due
- PTP broken
- follow-up due
- case reassigned
- supervisor decision
- significant status update

## Behaviour

Implement:

- unread count in navigation
- read/unread state
- mark all read
- filtering by unread
- chronological grouping
- deep-link to associated case
- contextual iconography

Avoid treating notifications like a social-media feed.

The page should remain compact and operational.

---

# PROMPT 10 — PERSONAL PERFORMANCE

Build:

`/performance`

This is the collector's own performance workspace.

## Periods

Support:

- Day
- Week
- Month
- All Time

## Core metrics

Include:

- Total Case Qty
- Contacted Cases
- Case Cover Rate
- Cases Recovered
- Case Recovery Rate
- Amount Recovery Rate
- PTP Qty
- PTP Rate

Calculate values from mock data where practical rather than using arbitrary numbers.

## Additional useful context

Include:

- amount recovered
- amount assigned
- follow-up adherence
- PTP fulfilment

Use only charts that help interpretation.

Good examples:

- recovery trend over time
- workload by DPD band

Avoid filling the page with decorative analytics.

Use compact KPI cards, simple charts and useful explanatory labels.

---

# PROMPT 11 — SUPERVISOR TEAM WORKSPACE

Build supervisor-only route:

`/team`

Agents must not access it.

## Team overview

Show each collector with:

- avatar
- name
- active cases
- outstanding balance
- cases touched today
- due follow-ups
- broken PTP
- recovered amount
- recovery rate

Use a table rather than oversized profile cards.

## Team filters

Allow filtering by:

- agent
- case status
- DPD
- overdue follow-up
- broken PTP

## Agent drill-down

Click agent to view:

- current queue
- workload
- activity
- performance
- cases needing intervention

Do not create a broad HR profile.

## Case reassignment

Supervisor can reassign a case.

Interaction:

1. select case
2. choose new collector
3. enter reason
4. review change
5. confirm

After reassignment:

- central state updates
- original and new agent queues update
- timeline records reassignment
- supervisor action is created
- notification is generated
- success message appears

## Escalation area

Include a small collection-specific escalation view.

Examples:

- repeated refusal
- wrong contact details
- disputed repayment
- payment reconciliation issue
- escalation request

Do not add loan approval, underwriting, disbursement or platform administration.

---

# PROMPT 12 — PROFILE AND ACCOUNT

Build a restrained profile area.

Include:

- user name
- email
- role
- team
- avatar
- last login
- logout

Optionally include:

- change password prototype
- notification preferences

Do not create consumer-style account customisation.

Do not include unrelated personal details.

---

# PROMPT 13 — REALISTIC DEMO STATE TRANSITIONS

The prototype should now behave like a connected system.

Implement and test the following scenarios end-to-end.

## Scenario A — untouched borrower

1. Open Queue.
2. Filter to untouched cases.
3. Open borrower.
4. Contact borrower.
5. Log “No Answer”.
6. Schedule follow-up tomorrow.
7. Return to queue.
8. Verify attempt count, last contact and next action changed.
9. Verify follow-up appears under Upcoming.

## Scenario B — successful PTP

1. Open active case.
2. Contact borrower.
3. Log “Promise to Pay”.
4. Record ₦ amount and future date.
5. Verify case PTP state.
6. Verify timeline.
7. Verify follow-up.
8. Verify queue indicators.

## Scenario C — broken PTP

1. Use a demo control to advance/mock PTP status.
2. Mark promise overdue.
3. Verify case receives broken PTP state.
4. Verify it becomes high priority.
5. Verify Follow-ups → Overdue.
6. Verify timeline retains original commitment.

## Scenario D — partial repayment

1. Simulate payment lower than outstanding balance.
2. Update repayment history.
3. Update remaining balance.
4. Mark partial repayment.
5. Retain case as actionable.

## Scenario E — full repayment

1. Simulate final payment.
2. Balance becomes ₦0.
3. Case becomes completed/resolved.
4. Collection contact actions become unavailable.
5. Queue updates.
6. Payment appears in timeline.
7. Performance updates.

## Scenario F — supervisor reassignment

1. Sign in as supervisor.
2. Open Team.
3. Select overloaded agent.
4. Open case.
5. Reassign to another agent.
6. Enter reason.
7. Confirm.
8. Verify both queues.
9. Verify timeline.
10. Verify notification.

All six scenarios must work without manual code changes.

---

# PROMPT 14 — DEMO CONTROL PANEL

Create a development-only demo panel.

It must never look like a production feature.

Access through a small developer shortcut or route such as:

`/demo`

Provide controls to simulate:

- current date/time
- payment received
- partial repayment
- full repayment
- PTP becoming overdue
- follow-up becoming overdue
- contact cap reached
- blackout hours
- notification creation
- API error
- slow loading
- empty queue
- reset demo dataset

This makes the prototype demonstrable without waiting for real-world time or backend events.

Label the area clearly:

**Prototype Demo Controls**

Keep it hidden from ordinary navigation.

---

# PROMPT 15 — EMPTY, LOADING, ERROR AND EDGE STATES

Audit every major screen and implement complete operational states.

## Queue

Support:

- loading
- no assigned cases
- no search results
- filters return zero results
- API failure
- stale/retry state

## Case

Support:

- missing case
- unauthorised case
- data loading
- payment update while open
- already resolved case

## Contact

Support:

- cap reached
- blackout restriction
- invalid phone
- failed save
- duplicate submission

## PTP

Support:

- validation error
- existing active PTP
- failed save
- stale balance

## Follow-ups

Support:

- none today
- no overdue follow-ups
- failed load

## Notifications

Support:

- no notifications
- all read
- failed load

## Team

Support:

- no direct reports
- zero cases
- failed reassignment
- permission denied

Make errors concise and actionable.

Do not display raw technical exceptions to users.

---

# PROMPT 16 — ACCESSIBILITY AND KEYBOARD-FIRST PASS

Perform a dedicated accessibility and desk-workflow pass.

## Keyboard

Implement useful keyboard interactions where safe.

Examples:

- `/` focuses queue search
- Arrow Up / Down changes selected queue row
- Enter opens selected case
- Escape closes drawer/modal
- predictable Tab order

Do not create dozens of hidden shortcuts.

Provide keyboard shortcut hints only when beneficial.

## Accessibility

Audit:

- contrast
- semantic headings
- labels
- table headers
- focus states
- modal focus trap
- Escape behaviour
- status text
- icon-only button labels
- screen-reader labels
- error relationships
- colour-independent status communication

Target WCAG 2.1 AA.

---

# PROMPT 17 — VISUAL POLISH PASS

Perform a dedicated visual-design audit.

Do not add features during this pass unless necessary to fix interaction quality.

Evaluate every route at:

- 1440px
- 1280px
- 1024px

## Audit for

- inconsistent spacing
- weak typography hierarchy
- excessive card borders
- inconsistent radii
- excessive indigo
- insufficient brand presence
- unclear selected states
- alignment errors
- awkward empty space
- overcrowded tables
- poor numeric alignment
- inconsistent status badges
- redundant labels
- unnecessary decorative elements
- weak modal composition
- poor form grouping
- horizontal overflow
- sticky elements colliding
- timeline density
- sidebar balance

## Design target

The interface should resemble a serious modern fintech operations tool built by a mature product/design team.

Preserve Kyvo's identity.

Do not make the design generic.

The brand should be recognisable through:

- indigo
- typography
- navigation behaviour
- component consistency
- restrained visual language

rather than giant logos or giant colour panels.

---

# PROMPT 18 — PRODUCT COPY PASS

Audit every visible string.

Use concise operational language.

Preferred:

**Record PTP**

rather than:

**Create a New Promise to Pay for this Borrower**

Preferred:

**Follow-up overdue by 2 days**

rather than:

**This follow-up task has unfortunately passed its expected scheduled date**

Preferred:

**Daily contact limit reached**

rather than vague failure messages.

## Copy principles

Use:

- plain English
- short labels
- precise statuses
- clear consequences
- Nigerian currency formatting
- proper date/time formatting

Avoid:

- marketing language
- robotic system copy
- generic SaaS filler
- unnecessary exclamation marks
- cute fintech copy
- judgemental borrower language

---

# PROMPT 19 — TECHNICAL QUALITY PASS

Audit implementation quality.

## Check

- duplicate components
- duplicated mock data
- prop drilling that should be avoided
- unnecessary state
- invalid TypeScript
- console errors
- React warnings
- unstable keys
- unnecessary re-renders
- malformed routes
- inaccessible buttons
- missing loading states
- broken deep links
- inconsistent date calculations
- hard-coded status logic
- hard-coded agent permissions
- unhandled promise failures
- localStorage corruption handling

## State architecture

Make sure:

- actions update all relevant views
- status derivation lives in one place
- performance calculations live in one place
- current-user permissions are centralised
- selectors derive queue counts consistently

## Production boundary

Keep mock API/state code separated so a real backend can later replace it.

Create a clean abstraction such as:

`services/`

or:

`api/`

with mock implementations behind it.

Do not couple UI components directly to massive static JSON objects.

---

# PROMPT 20 — END-TO-END QA

Run an exhaustive manual QA pass.

Test as:

### Collections Agent

Verify:

- login
- logout
- queue
- lifecycle views
- search
- filters
- sorting
- case opening
- timeline
- contact
- outcome logging
- PTP
- follow-up
- payments
- notifications
- performance
- profile
- route permissions

### Supervisor

Verify all Agent workflows plus:

- Team
- agent drill-down
- assigned-agent filter
- reassignment
- supervisor-only actions
- permission behaviour

## Regression testing

After every mutation verify:

- queue counts
- row data
- case summary
- timeline
- follow-up list
- performance
- notifications
- team view

remain internally consistent.

Fix all high-impact inconsistencies.

---

# PROMPT 21 — FINAL PROTOTYPE HANDOFF

Prepare the repository for product review.

## README

Update `README.md` with:

### Kyvo Collector Web

Explain:

- product purpose
- user roles
- technology stack
- how to install
- how to run
- demo credentials
- route list
- architecture
- mock-state approach
- demo controls
- prototype limitations

## Demo credentials

Clearly list:

### Agent
Email: `agent@kyvo.test`

### Supervisor
Email: `supervisor@kyvo.test`

Include demo password.

## Demo walkthrough

Create:

`DEMO_WALKTHROUGH.md`

Provide a 7–10 minute product walkthrough covering:

1. sign in
2. queue prioritisation
3. case workspace
4. contact
5. PTP
6. follow-up
7. payment simulation
8. performance
9. supervisor team workflow
10. reassignment

## Product coverage

Create:

`PROTOTYPE_COVERAGE.md`

Use a table:

| Requirement | Status | Route | Notes |
|---|---|---|---|

Cover all major requirements implemented from this prompt pack.

## Final checks

Run:

- install
- build
- lint
- tests if present
- application start

Resolve errors.

Do not leave obvious TODO placeholders in user-visible interfaces.

---

# FINAL CODEX REVIEW PROMPT

After all implementation prompts have been completed, run this final review:

> Audit the entire Kyvo Collector Web prototype as if you are the senior product designer, staff frontend engineer and collections product manager responsible for approving it for a stakeholder demonstration.
>
> Inspect every route, state transition and reusable component.
>
> Identify anything that makes the product feel like:
>
> - disconnected mock screens
> - a stretched mobile app
> - a generic dashboard template
> - a copy of the Admin Dashboard
> - a multi-lender product
> - an unfinished developer prototype
>
> Fix those issues.
>
> Verify that the strongest experience in the application is the core collections loop:
>
> **Queue → Case Context → Contact → Outcome → PTP/Follow-up → Updated Queue**
>
> Verify that supervisors receive meaningful collections coordination capabilities without turning Collector Web into the Admin Dashboard.
>
> Ensure the visual identity remains unmistakably Kyvo through the `#203AC3` indigo brand anchor while neutral surfaces, typography, spacing and hierarchy make the web interface significantly more polished than the existing mobile collector experience.
>
> Test all major state mutations again.
>
> Finally update:
>
> - `README.md`
> - `PROTOTYPE_STATUS.md`
> - `PROTOTYPE_COVERAGE.md`
> - `DEMO_WALKTHROUGH.md`
>
> Report:
>
> 1. final routes
> 2. completed workflows
> 3. remaining prototype limitations
> 4. known backend assumptions
> 5. commands required to run the prototype
> 6. demo credentials
> 7. recommended next step toward production integration

---

# EXPECTED FINAL ROUTE MAP

The completed prototype should approximately contain:

```text
/login
/forgot-password

/queue
/cases/:caseId

/follow-ups
/notifications
/performance

/team                    Supervisor only
/team/agents/:agentId    Supervisor only

/profile

/demo                    Development/demo only
```

A drawer or split-pane can supplement `/cases/:caseId`, but the case route should still exist for deep-linking.

---

# EXPECTED CORE COMPONENT TREE

Codex can adapt this to the existing repository, but the architecture should converge around something comparable to:

```text
src/
  app/
  components/
    layout/
    navigation/
    data-display/
    forms/
    feedback/
    collections/
  features/
    auth/
    queue/
    cases/
    contacts/
    ptp/
    followups/
    notifications/
    performance/
    team/
  data/
    mock/
  services/
  store/
  hooks/
  utils/
  types/
```

Do not reorganise a healthy existing repository merely to match these folder names.

The purpose is separation of concerns, not architectural theatre.

---

# PROTOTYPE SUCCESS STANDARD

The prototype is successful when a stakeholder can sit at the application and complete a believable collections shift without being told which controls are fake.

They should be able to:

1. sign in as a collector,
2. understand today's workload,
3. identify the next borrower requiring attention,
4. inspect borrower and loan context,
5. contact the borrower,
6. record the outcome,
7. secure and record a PTP,
8. schedule follow-up,
9. see the case update everywhere,
10. observe repayment changing the case,
11. inspect personal performance,
12. sign in as a supervisor,
13. understand team workload,
14. investigate an agent or case,
15. reassign work,
16. observe the audit trail.

The visual quality should communicate a more mature Kyvo product while preserving the Collector application's indigo identity.

The prototype should feel ready for serious stakeholder review rather than like a set of wireframes.