# Railway — Keyra-Projects

Deploy **esim-keyra** to the shared [Keyra-Projects](https://railway.com) project with the same Postgres plugin as keyra.ie.

**Git repo:** https://github.com/Ciright-Inc/esim-keyra

## 1. Connect GitHub

1. Railway → **Keyra-Projects** → **New Service** → **GitHub Repo**
2. Select **Ciright-Inc/esim-keyra** (branch `main`)
3. Root directory: `/` (repo root)

## 2. Shared database

On the **esim-keyra** service → **Variables**:

| Variable | Value |
|----------|--------|
| `DATABASE_URL` | `${{ Postgres.DATABASE_URL }}` |
| `NODE_ENV` | `production` |
| `PORT` | (Railway injects automatically) |
| `NEXT_PUBLIC_SITE_URL` | `https://esim.keyra.ie` |
| `NEXT_PUBLIC_ESIM_URL` | `https://esim.keyra.ie` |
| `NEXT_PUBLIC_KEYRA_MARKETING_ORIGIN` | `https://keyra.ie` |
| `NEXT_PUBLIC_KEYRA_SITE_URL` | `https://keyra.ie` |
| `NEXT_PUBLIC_KEYRA_LAUNCHER_APPS_URL` | `https://keyra.ie/api/deployments/apps/launcher` |
| `NEXT_PUBLIC_KEYRA_FOOTER_SITE_APP_ID` | `esim` |
| `KEYRA_FOOTER_SITE_APP_ID` | `esim` |

Use the **exact** Postgres service name from your project (e.g. `Postgres`, `PostgreSQL`) in the reference.

## 3. Custom domain

Settings → Networking → add **esim.keyra.ie** → CNAME to Railway.

## 4. CLI (optional)

```bash
cd esim-keyra
railway login
railway link --project Keyra-Projects
railway service  # select or create esim-keyra
railway variable set 'DATABASE_URL=${{ Postgres.DATABASE_URL }}'
railway variable set NEXT_PUBLIC_SITE_URL=https://esim.keyra.ie
railway up
```

Health check: `GET /api/health`
