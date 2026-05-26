# KEYRA eSIM — esim.keyra.ie

Telecom-grade, enterprise-class eSIM and trusted connectivity platform under the KEYRA brand.

**Tagline:** Trusted Connectivity for the AI Era.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3040](http://localhost:3040).

Optional standalone API:

```bash
npm run api:dev
# http://localhost:4040/health
```

## Build & deploy

```bash
npm run build
npm start
```

Set environment variables from `.env.example`. Point `NEXT_PUBLIC_SITE_URL` to `https://esim.keyra.ie`.

### Railway (Keyra-Projects)

Repo: [github.com/Ciright-Inc/esim-keyra](https://github.com/Ciright-Inc/esim-keyra)

See **[RAILWAY.md](./RAILWAY.md)** — connect Git, use `${{ Postgres.DATABASE_URL }}` from the Keyra Postgres plugin, custom domain `esim.keyra.ie`.

## Structure

| Path | Purpose |
|------|---------|
| `src/components/sections/` | Homepage narrative sections (1–10) |
| `src/app/api/v1/` | Placeholder telecom APIs |
| `src/lib/cms/` | CMS-ready types and module list |
| `src/styles/keyra-esim-theme.css` | KEYRA eSIM design tokens |

## Pages

- `/` — Marketing homepage
- `/activate` — Activation wizard (QR flow placeholder)
- `/enterprise` — Enterprise request form
- `/developers` — Docs + live API explorer
- `/login` — KEYRA auth placeholders
- `/admin` — CMS console (10 modules)

## APIs (placeholders)

- `GET /api/v1/carriers`
- `GET /api/v1/coverage`
- `GET /api/v1/plans`
- `POST /api/v1/provisioning`
- `GET /api/v1/analytics`
- `GET /api/v1/inventory` · `GET /api/v1/fraud`
- `POST /api/v1/graphql` · `GET|POST /api/v1/webhooks`
- `POST /api/v1/carriers/onboarding`
- `GET /api/v1/admin/modules` · `GET /api/v1/audit` · `GET /api/v1/support/tickets`
- `backend/` — Express modular API (port 4040)

See **COMPLETION.md** for full specification checklist.

## Brand

Aligned with KEYRA Trust Layer doctrine — sovereign, institutional, identity-centric. No cloned assets from third-party sites.
