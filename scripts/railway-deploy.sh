#!/usr/bin/env bash
# Deploy esim-keyra to Railway Keyra-Projects (shared Postgres).
# Prerequisite: railway login  (expired token? run: railway login)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

PROJECT_ID="161cc1ec-95ff-49d6-a0be-75c3769be820"
ENV_ID="fbd61323-77ec-4c1b-ba20-6a5c505496f7"
SERVICE_NAME="esim-keyra"
REPO="Ciright-Inc/esim-keyra"

echo "→ Checking Railway auth…"
railway whoami

echo "→ Linking ${SERVICE_NAME} in Keyra-Projects (production)…"
if ! railway link --project "$PROJECT_ID" --environment "$ENV_ID" --service "$SERVICE_NAME" 2>/dev/null; then
  echo "→ Service not found; creating ${SERVICE_NAME}…"
  railway link --project "$PROJECT_ID" --environment "$ENV_ID"
  railway add --service "$SERVICE_NAME"
  railway service "$SERVICE_NAME"
fi

railway status

echo "→ Connecting GitHub repo ${REPO} (if not already connected)…"
railway connect "${REPO}" 2>/dev/null || true

echo "→ Setting variables (shared Keyra Postgres)…"
railway variable set 'DATABASE_URL=${{ Postgres.DATABASE_URL }}'
railway variable set 'NODE_ENV=production'
railway variable set 'NEXT_PUBLIC_SITE_URL=https://esim.keyra.ie'
railway variable set 'NEXT_PUBLIC_ESIM_URL=https://esim.keyra.ie'
railway variable set 'NEXT_PUBLIC_KEYRA_MARKETING_ORIGIN=https://keyra.ie'
railway variable set 'NEXT_PUBLIC_KEYRA_SITE_URL=https://keyra.ie'
railway variable set 'NEXT_PUBLIC_KEYRA_LAUNCHER_APPS_URL=https://keyra.ie/api/deployments/apps/launcher'
railway variable set 'NEXT_PUBLIC_KEYRA_FOOTER_SITE_APP_ID=esim'
railway variable set 'KEYRA_FOOTER_SITE_APP_ID=esim'

echo "→ Deploying from ${ROOT}…"
railway up --ci -m "Deploy esim-keyra (esim.keyra.ie)"

echo "→ Custom domain (if not set): railway domain esim.keyra.ie"
echo "→ Logs:"
railway logs --tail 40
