# Kyvo Collector Web — Decisions Log

This log records confirmed product and implementation decisions from the project brief. Update it whenever a material decision changes.

| Date | Area | Decision | Rationale / impact |
|---|---|---|---|
| 2026-08-21 | Product scope | Build a focused desktop collections execution workspace. | Supports the daily collections loop: Queue → Case → Contact → Outcome → PTP/Follow-up → updated Queue. |
| 2026-08-21 | Product boundaries | Exclude lender switching, loan-product switching, origination, underwriting, disbursement, finance administration, bureau reporting, generic CRM, and Admin Dashboard modules. | Keeps the prototype operationally focused and distinct from Kyvo Admin Dashboard. |
| 2026-08-21 | Users | Support Collections Agents and Supervisors. | Agents execute their assigned queue; supervisors coordinate team workload, reassignments, escalations, and performance. |
| 2026-08-21 | Brand | Use `#203AC3` as the fixed primary Kyvo Collector colour. | Preserves Collector identity without copying the Admin Dashboard colour system. |
| 2026-08-21 | Design direction | Prioritise a calm, premium, dense-but-readable desktop workspace. | The product is intended for long operational sessions at 1440px, 1280px, and 1024px desktop widths. |
| 2026-08-21 | Status model | Use authoritative case statuses: NEW, PRO, PTP, and COM; derive operational states separately. | Avoids conflicting status systems while supporting states such as untouched, PTP due, broken PTP, partial repayment, and resolved. |
| 2026-08-21 | Data and state | Centralise typed mock data and state; persist practical prototype state in localStorage. | Ensures every mutation updates queues, case details, follow-ups, notifications, performance, and team views consistently. |
| 2026-08-21 | Demo capability | Include a development-only `/demo` control panel and reset mechanism. | Enables repeatable demonstrations of time-based and backend-like events without real integrations. |
| 2026-08-21 | Access control | Keep `/team` and team-agent routes supervisor-only; protect routes behind a persisted demo session. | Reflects the role model and prevents agent access to supervisor tools. |
| 2026-08-21 | Queue behaviour | Preserve queue filters, sorting, lifecycle tab, pagination position, and approximate scroll position when returning from a case. | Makes the primary workbench feel continuous rather than like disconnected screens. |
| 2026-08-21 | Prototype boundary | Separate mock API/state logic from UI components so it can later be replaced by a real backend. | Avoids coupling product UI directly to static data and supports production integration. |

## Open decisions

- Confirm the existing repository framework, package manager, and architecture through the Prompt 0 audit before implementation.
- Select the demo password and document it in the README and authentication helper.
- Decide whether the Queue case experience is primarily a split-pane drawer, a full-page route, or both; `/cases/:caseId` remains required for deep links.
- Confirm the initial contact-cap and blackout-hour business rules for the prototype.
