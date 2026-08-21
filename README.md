# Kyvo Collector Web

The desktop collections workspace for Kyvo collection agents and supervisors.

## Run locally

```bash
npm install
npm run dev
```

The current prototype increment includes a Kyvo sign-in experience, lifecycle tabs, borrower search, priority summary, responsive navigation, and a case workspace drawer.

Demo credentials:

- Agent: `agent@kyvo.test`
- Supervisor: `supervisor@kyvo.test`
- Password: `kyvo123`

Authentication is currently a local prototype session. Collection mutations are held in client state for demonstration.

## Routes

- `/` — sign-in and welcome overview
- `/queue` — prioritised collection queue
- `/cases/:caseId` — deep-linked case workspace
- `/follow-ups`, `/notifications`, `/performance`, `/team`, `/profile` — workspace sections via navigation
- `/demo` — development-only prototype controls

See [DEMO_WALKTHROUGH.md](./DEMO_WALKTHROUGH.md) for a stakeholder review flow and [PROTOTYPE_COVERAGE.md](./PROTOTYPE_COVERAGE.md) for requirement coverage.
