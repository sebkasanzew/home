# AGENTS

## Purpose
Short guidelines for automated agents interacting with this repository.

## Non-negotiable rules ⚠️
- **Do NOT make git commits, pushes, or open PRs without explicit permission from the repository owner.**

## Quick repo facts 🔧
- Package manager: pnpm
- Node requirement: Node 18+
- Frameworks: `Next` (16.x), `React` (19.x), `TypeScript` (5.x)
- Common scripts:
  - `pnpm dev` — start dev server (`next dev --turbopack`)
  - `pnpm build` — build
  - `pnpm start` — start server
  - `pnpm exec tsc --noEmit` — type check
  - `pnpm exec playwright test` — run tests

## Important files & locations 📁
- AI usage example: `src/app/advent/2024/actions.ts` (uses `ai` and `@ai-sdk/anthropic`)
- Tests: `tests/` and Playwright config in `playwright.config.ts`
- Mocks: `src/mocks/` (msw handlers)

## Dependency & upgrade checklist ✅
1. Update `package.json`.
2. Run `pnpm install` to update the lockfile.
3. Run `pnpm exec tsc --noEmit` and `pnpm exec playwright test` locally.
4. Run the dev server `pnpm dev` and manually spot-check changes.
5. Open a draft PR and request review/approval before merging.

## Secrets & security 🔐
- Never commit secrets (API keys, tokens, credentials) into the repo.
- Ask for guidance on secure storage (env vars, secret manager) if a change requires credentials.

## Communication & approvals 📣
- Always summarize proposed changes (what, why, impact) when requesting permission.
