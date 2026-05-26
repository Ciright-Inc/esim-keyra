# KEYRA eSIM — Node.js API layer

Modular Express API for telecom integrations. Runs standalone or alongside the Next.js app.

```bash
cd backend
npm install
npm run dev
```

Default: `http://localhost:4040` — health at `/health`, routes under `/v1/*`.

Set `API_PORT`, `CORS_ORIGIN`, `KEYRA_OAUTH_ISSUER`, `TELECOM_PROVISIONING_API_URL` in environment.
