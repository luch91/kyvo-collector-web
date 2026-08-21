# Kyvo Collector Web — Prototype Status

## Current architecture

- Vite + React foundation.
- Session state is persisted in localStorage under `kyvo-session`; central mock entities now live in `src/data/mockData.js` and Queue selectors derive from a shared 40-case dataset.
- Styling is a single responsive CSS system using Kyvo indigo (`#203AC3`), neutral surfaces, and desktop-first layouts.

## Completed screens

- Sign-in (`/` currently presents authentication before the protected workspace).
- Queue shell (`/` currently renders the Queue experience).
- Case workspace drawer (opened from any visible Queue row).
- Deep-linked case route (`/cases/:caseId`) with financial summary, borrower details, activity timeline, payment history, and derived next action.
- Follow-ups, Notifications, Performance, Team, Profile, and development Demo Control workspaces.
- Welcome overview with daily attention summary, quick-start Queue action, follow-up preview, and performance shortcut.
- Staged navigation placeholders for Follow-ups, Notifications, Performance, Team, and Profile.

## Implemented interactions

- Demo sign-in for agent and supervisor accounts with validation, loading, error, remember-me, and sign-out.
- Central 40-case mock dataset with Nigerian names, DPD bands, PTP states, broken promises, partial repayments, contact variation, and realistic naira balances.
- Queue lifecycle tabs: All Active, NEW, PRO, PTP, COM.
- Derived attention counts, DPD/contact filters, clear-all, priority/balance/DPD/least-contacted sorting, and dynamic outstanding totals.
- Borrower, phone, and loan ID search.
- Row selection opens a case workspace drawer.
- Queue rows push a case URL and preserve the selected case for browser back/deep links.
- Contact and outcome actions show prototype feedback.
- Refresh, sign-out, row menu, and notifications provide toast feedback.
- Responsive sidebar collapse at narrower widths.
- Prompt 13 demo transitions for partial/full repayment, broken PTP, and overdue follow-up.
- Prompt 14 `/demo` control panel with reset, simulation flags, and target-case controls.
- PTP outcome handoff now requires a promised amount and date before saving.
- Follow-up scheduler supports multiple independent future tasks with Call, Email, SMS, and WhatsApp channels.

## Known limitations

- Authentication is prototype-only and has no backend session verification.
- Follow-up tasks are currently held in client memory for the active session; supervisor reassignment and real payment reconciliation remain prototype-only.
- Contact outcomes, PTP, follow-ups, payments, notifications, and supervisor reassignment are not yet persisted.
- No automated tests or backend integration.

## Remaining implementation order

1. Replace local state with a server-backed store and authentication service.
2. Add automated tests and real permission enforcement.
3. Integrate payment reconciliation, reassignment APIs, and production observability.
4. Case timeline, contact, outcome, PTP, follow-up, and payment workflows.
5. Notifications, performance, supervisor team workspace, profile, and demo controls.
6. Accessibility, visual polish, technical QA, and handoff documentation.

## Design decisions

See [DECISIONS_LOG.md](./DECISIONS_LOG.md).
