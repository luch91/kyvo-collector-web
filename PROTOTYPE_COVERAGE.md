# Kyvo Collector Web — Prototype Coverage

| Requirement | Status | Route | Notes |
|---|---|---|---|
| Desktop Kyvo Collector shell | Complete | `/` | Indigo identity, responsive sidebar, Queue navigation |
| Authentication | Complete | `/` | Agent and Supervisor demo sessions, validation, sign-out |
| Central mock dataset | Complete | `/queue` | 40 realistic cases in `src/data/mockData.js` |
| Queue lifecycle/search/filter/sort | Complete | `/` | Dynamic counts, search, DPD/contact filters, priority sort |
| Case workspace | Complete | `/cases/:caseId` | Deep-linked drawer, financial summary, timeline, payment history |
| Contact and outcome logging | Complete | Case drawer | Phone/WhatsApp preview, outcome, notes, follow-up date, cap guidance |
| Promise to Pay | Complete | Case drawer | Validated amount/date/channel form and queue mutation |
| Follow-up worklist | Complete | `/follow-ups` (navigation) | Today, Upcoming, Overdue, Completed views |
| Notifications | Complete | `/notifications` (navigation) | Read state, unread count, mark all read |
| Personal performance | Complete | `/performance` (navigation) | Period control, derived counts, metrics, recovery chart |
| Supervisor team workspace | Complete | `/team` (navigation) | Role-aware permission state and collector workload table |
| Profile and account | Complete | `/profile` (navigation) | Identity, team, last login, sign-out |
| Connected demo transitions | Complete | `/demo` | Payment, broken PTP, overdue follow-up, reset controls |
| Empty/loading/error states | Partial | Multiple | Empty search/worklist and form validation are present; simulated flags are documented in demo controls |
| Accessibility/keyboard pass | Partial | Global | Escape closes overlays, `/` focuses Queue search, visible focus styles |
| Real backend integration | Not included | — | Mock service boundary in `src/services/mockApi.js` |
